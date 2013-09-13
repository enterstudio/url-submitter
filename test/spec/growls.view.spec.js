define([ "jquery" , "app/views/growls.view" , 'app/vent' ] , function( $ , GrowlsView , vent) { 

    chai.should(); 

    //chai.use(sinonChai);

    var growlsView; 

    describe("Growls View" , function(){

        beforeEach(function() { 

            var url = '../bin/mock.growls.json';

            growlsView = new GrowlsView({el : $("#fixture") , url : url}); 

            growlsView.render();

        }); 

        afterEach(function() { 

            $("#fixture").html(""); 

            var growlsView = null; 

        });

        it("Should create a growl collection and append a notification on push" , function(){

            (growlsView.collection.url).should.equal('../bin/mock.growls.json'); 

            growlsView.push({message: "URL submitted successfully"}); 

            (growlsView.$el.find("h3").length).should.equal(1); 

        }); 

        // it("Should submitt the url after the button is clicked" , function() { 

        //  urlFormView.$el.find("input[name='submit']").click(); 

        // }); 

    }); 

});