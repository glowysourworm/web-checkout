var express = require('express');
var fs = require('fs');
var app = express();

// Read in JSON on startup
var model = JSON.parse(fs.readFileSync('model/relocated.json', 'utf8'));

// Static files
app.use(express.static(__dirname, {'index': ['client/index.html']}));

// REST API
app.get('/grid', function (req, res) {
    res.json(model.meta.view);
})

// Start the server
app.listen(3000, function () {
  console.log('Web Checkout App listening on port 3000!')
})