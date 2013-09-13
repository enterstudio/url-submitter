requirejs.config({

    baseUrl : 'javascript/vendor' , 

    paths : {

        jquery : 'jquery/jquery', 

        backbone : 'backbone/backbone', 

        underscore : 'underscore/underscore' , 

        marionette : 'backbone.marionette/lib/backbone.marionette' , 

        'backbone.wreqr' : 'backbone.wreqr/lib/backbone.wreqr.min',

        app : '../app' , 

        tpl : "requirejs-tpl/tpl", 

    } , 

    shim : {

        jquery : {

            exports : '$'

        }, 

        underscore : {

            exports : '_'

        }, 

        marionette : {

            deps : ['jquery' , 'underscore' , 'backbone'] , 

            exports : "Marionette"
        } , 

        'backbone.wreqr' : {

            deps : ['jquery' , 'underscore' , 'backbone' , 'marionette'] ,

            exports : "Backbone.Wreqr"

        } , 

        backbone : {

            deps : ['jquery' , 'underscore'], 

            exports : "Backbone"

        } 
    }

}); 

requirejs(['app/app']  , function(app) { 

    var endPoints = {

        clientList : '../bin/clients.endpoint.json' , 

        growls : '../bin/mock.growls.json'

    }

    app.start({rootEl: "#app-main" , endPoints : endPoints });

}); 





