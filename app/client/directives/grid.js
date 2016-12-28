// Generic grid directive - uses gridId to call up column definitions and data source
angular
	.module('directives', [])
	.directive('grid', ['gridService', 'dataService', function (gridService, dataService){
	return {
		link: function (scope, element, attrs) {

			// This could be loaded via the REST service
			scope.gridOptions = {};

			gridService
				.get('')
				.then(function (result){
					scope.view = result.data;
					scope.gridOptions.columnDefs = result.data.columns;
				});

		},
		templateUrl: '/client/views/grid.html',
		scope: {
			gridId: '=',
			gridTitle: '='
		}
	}
}]);