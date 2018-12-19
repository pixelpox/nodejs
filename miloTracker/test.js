var request = require('request');
var cheerio = require('cheerio');

const rp = require('request-promise');
const url = 'https://photos.vetsure.com/cats/?fv-page=2#contest';

global.catList = []

cats = [];

function getWebPage(url)
{
  return rp(url)
    .then(function(html){
      //success!
      //console.log(html);

      var $ = cheerio.load(html);

      //console.log($('div.fv_constest_item').attr('class'));

      
      $('div.fv_constest_item').each(function(i, element){
          var a = $(this);

          var aCat =
          {
              ID: a.attr('data-id')
            , Name: $("div.fv_name_inner", element).text()
            , Score: $("span.fv-votes", element).text()
          }

          /*
          console.log(aCat.ID)
          console.log(aCat.Name)
          console.log(aCat.Score)
          */
          global.catList.push(aCat)
          
          
          
          //console.log(element.children[0].children[0].data);
          //console.log("**********************************************************");
          //var name = a.fv_name.text();
          //console.log(name);

        });

        return aCat;

    })
    .catch(function(err){
      //handle error
    }).then(function(aCat){
        console.log('data ' + aCat);
    });


}


getWebPage(url);


console.log('Finished getting cats, here they are :)');
console.log(global.catList);
global.catList.forEach(function(element)
{
  //console.log(element.ID);
  //console.log(element.Name);
  //console.log(element.Score);

  console.log("**********************************************************");


});