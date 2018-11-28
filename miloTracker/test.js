var request = require('request');
var cheerio = require('cheerio');

const rp = require('request-promise');
const url = 'https://photos.vetsure.com/cats/?fv-page=2#contest';

rp(url)
  .then(function(html){
    //success!
    //console.log(html);

    var $ = cheerio.load(html);

    //console.log($('div.fv_constest_item').attr('class'));

    
    $('div.fv_constest_item').each(function(i, element){
        var a = $(this);
        //console.log(a.text());
        console.log("**********************************************************");
        console.log(a.attr)
        console.log($("div.fv_name_inner", element).text())
        console.log($("span.fv-votes", element).text())
        
        
        //console.log(element.children[0].children[0].data);
        console.log("**********************************************************");
        //var name = a.fv_name.text();
        //console.log(name);

      });

    /*

    console.log($('section', html).length);
    console.log($('div', html));

    */
  })
  .catch(function(err){
    //handle error
  });

  