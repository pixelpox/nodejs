//source
//https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/clicked', function(req, res, next) {
  console.log('click');
  console.log(huehost);
  console.log(req.body);
});

module.exports = router;
