// Generic grid directive - uses gridId to call up column definitions and data source
angular
	.module('directives', [])
	.directive('grid', ['gridService', 'dataService', function (gridService, dataService){
	return {
		link: function (scope, element, attrs) {

			_fieldNames = {};

			// This could be loaded via the REST service
			scope.gridOptions = {
				enableFiltering: true,
				enableGridMenu: true,
				enableColumnMenus: false,
				enableColumnResizing: true,
				data: []
			};

			function loadGrid() {
				gridService
					.get('')
					.then(function (result){

						// Entire view object
						scope.view = result.data;

						// field names for sorting incoming data
						_fieldNames = _.map(result.data.columns, function (def) { return def.fieldName; });

						// column defs
						scope.gridOptions.columnDefs = result.data.columns;

						loadData();
					});
			}

			function loadData() {

				dataService
					.get('')
					.then(function (result) {

						scope.gridOptions.data = _.map(result.data, function (data) {
							var dictionary = {};
							var idx = 0;
							for (dataIdx in data)
								dictionary[_fieldNames[idx++]] = data[dataIdx];

							return dictionary;
						});
					});
			}

			// -> loadGrid -> loadData
			function load() {
				loadGrid();
			}

			load();

		},
		templateUrl: '/client/views/grid.html',
		scope: {
			gridId: '=',
			gridTitle: '='
		}
	}
}]);