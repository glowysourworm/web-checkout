var app = angular.module('web-checkout',[
	'ngSanitize',
	'ui.router',
	'ui.grid',
	'ui.grid.resizeColumns',
	'ui.grid.autoResize',
	'ui.date',
	'ui.select',
	'services',
	'directives'
	]);

// Config Block
app.config(function ($stateProvider) {

	$stateProvider
		.state({
			name: 'home',
			url: 'home',
			templateUrl: 'client/views/home.html'
		});

})

// Run Block
.run(function($state) {
	$state.go('home');
});