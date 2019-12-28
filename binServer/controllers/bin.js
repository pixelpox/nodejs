var template = require('../views/template-main');


exports.get = function(req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(template.build("BIN COLLECTION", "Next Bin Collection", "<p>Next Bin Collection</p>"));
  res.end();
};