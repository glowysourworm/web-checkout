// Generic grid directive - uses gridId to call up column definitions and data source
angular
	.module('directives', [])
	.directive('grid', ['gridService', 'dataService', function (gridService, dataService){
	return {
		link: function (scope, element, attrs) {

			// This could be loaded via the REST service
			scope.gridOptions = {
				enableGridMenu: true,
				enableColumnMenus: false,
				enableColumnResizing: true
			};

			gridService
				.get('')
				.then(function (result){
					scope.view = result.data;
					scope.gridOptions.columnDefs = 
					_.orderBy(
						_.map(
							_.filter(result.data.columns, function (x) {
								return x.position > 0;
							}), function (column){

								// add some defaults to the column definitions
								return angular.extend(column, {
									minWidth: 100
							});
						}), function (column){
							return column.position;
					});
				});

		},
		templateUrl: '/client/views/grid.html',
		scope: {
			gridId: '=',
			gridTitle: '='
		}
	}
}]);