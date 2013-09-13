define([ "jquery" , "app/url.form.view" , 'app/vent' ] , function( $ , URLFormView , vent) { 

	chai.should(); 

	//chai.use(sinonChai);

	var urlFormView; 

	describe("URL Form View" , function(){

		beforeEach(function() { 

			var endPoints = {clientList : '../bin/clients.endpoint.json'};

			urlFormView = new URLFormView({el : $("#fixture") , endPoints : endPoints}); 

			urlFormView.render();

		}); 

		afterEach(function() { 

			$("#fixture").html(""); 

			var urlFormView = null; 

		});

		it("Should create a form with a URL input" , function(){

			(urlFormView.$el.find("input[name='url']").length).should.equal(1);

		}); 

		it("Should submitt the url after the button is clicked" , function() { 

			//console.log(vent);

			//var spy = sinon.spy(vent); 

			urlFormView.$el.find("input[name='submit']").click(); 

			//spy.called.should.be.ok; 

		}); 

	}); 

}); 