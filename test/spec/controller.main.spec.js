define(["jquery" , "app/controller.main" ] , function(chai , $ , MainController) { 

	chai.should(); 

	var controller; 

	describe("URL Form View" , function(){

		beforeEach(function() { 

			controller = new MainController(); 

		}); 

		afterEach(function() { 

			$("#fixture").html(""); 

			var controller = null; 

		});

	}); 

});