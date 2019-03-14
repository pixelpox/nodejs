var likes = require('likes')
var fs = require("fs");

likes.facebook('SHHMakers' , function (err , count)
{
    if(err)
    {
        console.error(err)
        process.exit(1)
    }

    console.log('Sheffield Hardware Hackers and Makers has ' , count , ' likes on Facebook!')

    var data = "New File Contents";

    fs.writeFile("facebook.txt", count, function(err, data) 
    {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
})

likes.twitter('shhmakers', function (err, count) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log('Sheffield Hardware Hackers and Makers has ', count, ' followers on Twitter')

    fs.writeFile("twitter.txt", count, function(err, data) 
    {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
  })