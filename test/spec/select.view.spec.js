define(["jquery" , "app/views/components/select.view" ] , function( $ , SelectView) { 

	chai.should(); 

	var selectView; 

	describe("Select View" , function(){

		beforeEach(function() { 

			selectView = new SelectView({el : $("#fixture") , url : "../bin/clients.endpoint.json"}); 

			selectView.render(); 

		}); 

		afterEach(function() { 

			$("#fixture").html(""); 

			var selectView = null; 

		});

		it("Should load a collection of select objects" , function(done) {

			(selectView.collection.url).should.equal("../bin/clients.endpoint.json"); 

			selectView.load(function() { 

				console.log(selectView.$el.html());

				(selectView.$el.find("option").length).should.equal(3);

				done();

			}); 


		}); 
	}); 

});