var _ = require('lodash');
var express = require('express');
var fs = require('fs');
var app = express();

// Read in JSON on startup - format result to grid API
var model = JSON.parse(fs.readFileSync('model/relocated.json', 'utf8'));
	model.meta.view.columns = _.map(model.meta.view.columns, function (column) {
		return _.extend(column, {
			minWidth: 100,
			visible: column.position > 0 && column.cachedContents.non_null > 0,
			field: column.fieldName,
			type: column.dataTypeName == 'calendar_date' ? 'date' : '',
			cellFilter: column.dataTypeName == 'calendar_date' ? "date: 'yyyy-MM-dd'" : ''
		});
	});

// Static files
app.use(express.static(__dirname, {'index': ['client/index.html']}));

// REST API
app.get('/grid', function (req, res) {
    res.json(model.meta.view);
});
app.get('/data', function (req, res){
	res.json(model.data);
});

// Start the server
app.listen(3000, function () {
  console.log('Web Checkout App listening on port 3000!');
});