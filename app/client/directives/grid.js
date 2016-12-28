// Generic grid directive - uses gridId to call up column definitions and data source
angular
	.module('directives', [])
	.directive('grid', ['gridService', 'dataService', function (gridService, dataService){
	return {
		link: function (scope, element, attrs) {
			
		},
		templateUrl: '/client/views/grid.html',
		scope: {
			gridId: '=',
			gridTitle: '='
		}
	}
}]);