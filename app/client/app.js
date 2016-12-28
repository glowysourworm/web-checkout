var app = angular.module('web-checkout',[
	'ui.router',
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