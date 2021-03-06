var require = {
	baseUrl		: 'js',
	waitSeconds	: 0,
	urlArgs		: "timestamp=" + (new Date()).getTime(),
	paths		: {
		'jQuery'		: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
		'bootstrap'		: '../libs/bootstrap/js/bootstrap.min'
	},
	shim		: {
		'jQuery': {
			exports: 'jQuery'
		},
		'bootstrap' : {
			deps: [ 'jQuery' ],
			exports: 'bootstrap'
		}
	},
	deps: [
		'bootstrap'
	]
}