module.exports = (function () {
	
	// kludge - need to find a way to import some client side code
	var uiGridConstants = {
		    filter: {
		      STARTS_WITH: 2,
		      ENDS_WITH: 4,
		      EXACT: 8,
		      CONTAINS: 16,
		      GREATER_THAN: 32,
		      GREATER_THAN_OR_EQUAL: 64,
		      LESS_THAN: 128,
		      LESS_THAN_OR_EQUAL: 256,
		      NOT_EQUAL: 512,
		      SELECT: 'select',
		      INPUT: 'input'
		    }
	};

	// Require
	var _ = require('lodash');
	var fs = require('fs');

	// private methods
	function selectFilters(column) {
		if (column.dataTypeName == 'calendar_date') {
	        return      [{
					        filterName: "greaterThan",
					        condition: uiGridConstants.filter.GREATER_THAN,
					        placeholder: 'greater than'
					    },
					    {
					        filterName: "lessThan",
					        condition: uiGridConstants.filter.LESS_THAN,
					        placeholder: 'less than'
					    }];
		}

		return undefined;
	}

	// Read in JSON on startup - format result to grid API
	var model = JSON.parse(fs.readFileSync('model/relocated.json', 'utf8'));
		model.meta.view.columns = _.map(model.meta.view.columns, function (column) {
			return _.extend(column, {
				minWidth: 100,
				visible: column.position > 0 && column.cachedContents.non_null > 0,
				field: column.fieldName,
				type: column.dataTypeName == 'calendar_date' ? 'date' : '',
				cellFilter: column.dataTypeName == 'calendar_date' ? "date:'MM/dd/yyyy'" : '',
				filterHeaderTemplate: column.dataTypeName == 'calendar_date' ? '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><input type="text" ng-model="colFilter.term" ui-date /></div>' : '',
				filters: selectFilters(column)
			});
		});

	// REST API
	return {
		getGrid: function (req, res) {
	    	res.json(model.meta.view);
		},
		getData: function (req, res) {
			res.json(model.data);
		}
	};

})();