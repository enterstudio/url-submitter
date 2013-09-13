define(['marionette' , 'app/views/main.layout' , 'app/vent' ] , function(Marionette  , Layout , vent) { 

	var Controller = Marionette.Controller.extend({

		initialize : function(options) { 

			var appLayout = new Layout({el : options.rootEl , endPoints : options.endPoints}); 

			appLayout.render();

		} ,   

		handleURLSubmission : function(url) { 

			

		} , 

		start : function() { 


		}

	}); 

	return Controller; 

})