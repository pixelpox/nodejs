var request = require('request');
var cheerio = require('cheerio');
const fs = require('fs');

const rp = require('request-promise');
const url = 'https://photos.vetsure.com/cats/#contest';

//?fv-page=2#contest

var urls = []

fs.writeFile("test.csv", "ID,Name,Score\n", function(err) {
  if(err) {
      return console.log(err);
  }
  
  console.log("The file was saved!");
}); 


//get list of urls from the website
rp(url)
  .then(function(html)
  {
      //success!
      //console.log(html);

      var $ = cheerio.load(html);

      var urls = []

      //console.log($('div.fv-pagination-list a').text());

      $('div.fv-pagination-list a').each(function(i, element)
      {
        var url = ''
        
        if(i == 0 )
          url = 'https://photos.vetsure.com/cats/#contest';

        if(i > 0)
          url = 'https://photos.vetsure.com/cats/?fv-page=' + (i+1) + '#contest';

        urls.push(url);
      });

      return urls
     
  })
  .catch(function(err)
  {
    //handle error
  }).then(function(urls)
  {
    //GOTO each url and build up cats

    urls.forEach(function(pageUrl)
    {
      console.log('going to: ' + pageUrl);

      rp(pageUrl)
        .then(function(html)
        {
          var $ = cheerio.load(html);
          var cats = [];

          $('div.fv_constest_item').each(function(i, element)
          {
            var a = $(this);
  
            var aCat = {
                ID: a.attr('data-id')
              , Name: $("div.fv_name_inner", element).text()
              , Score: $("span.fv-votes", element).text()
            }
            
            fs.appendFile("test.csv", aCat.ID+','+aCat.Name+','+aCat.Score+'\n', function(err) {
              if(err) {
                  return console.log(err);
              }
              
              //console.log("The file was saved!");
            }); 
            cats.push(aCat);
          });

          console.log(cats);




          return cats;



        }).catch(function(err)
        {
          //handle error
        })



    });

  });


