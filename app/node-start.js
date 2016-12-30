var express = require('express');
var app = express();

// Load server modules
app.dataModule = require('./server/data-module.js');

// Static files
app.use(express.static(__dirname, {'index': ['client/index.html']}));

// Wire up REST API
app.get('/grid', function (req, res) {
	app.dataModule.getGrid(req, res);
});
app.get('/data', function (req, res){
	app.dataModule.getData(req, res);
});		

// Start the server
app.listen(3000, function () {
  console.log('Web Checkout App listening on port 3000!');
});