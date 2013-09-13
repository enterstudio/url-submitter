define(['marionette' , 'app/views/main.layout' , 'app/vent' , 'app/models/scrapper.model'] , function(Marionette  , Layout , vent , ScrapperModel) { 

	var Controller = Marionette.Controller.extend({

		initialize : function(options) { 

			var appLayout = new Layout({el : options.rootEl , endPoints : options.endPoints}); 

			appLayout.render();

			this.scrapperModel = new ScrapperModel(); 

			vent.on('submitURL' , _.bind(this.handleURLSubmission , this)); 

		} ,   

		handleURLSubmission : function(url) { 

			this.scrapperModel.url = url; 

			this.scrapperModel.fetch({

				success : function() { 



				} , 

				error : function() { 

					console.log("error");

				}

			})

		} , 

		start : function() { 


		}

	}); 

	return Controller; 

})