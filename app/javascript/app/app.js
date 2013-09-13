define(['marionette' , 'app/controller.main'] , function(Marionette , MainController) { 

	var app = new Marionette.Application(); 

	app.addInitializer(function(options) {

		var c = new MainController(options); 

		c.start(options);

	}); 

	return app ;

})