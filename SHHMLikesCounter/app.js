var likes = require('likes')

likes.facebook('SHHMakers' , function (err , count)
{
    if(err)
    {
        console.error(err)
        process.exit(1)
    }

    console.log('Sheffield Hardware Hackers and Makers has ' , count , ' likes on Facebook!')
})