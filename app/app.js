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

        backbone : {

            deps : ['jquery' , 'underscore'], 

            exports : "Backbone"

        } , 

        marionette : {

            deps : ['jquery' , 'underscore' , 'backbone'] , 

            exports : "Marionette"
        } , 

        'backbone.wreqr' : {

            deps : ['jquery' , 'underscore' , 'backbone' , 'marionette'] ,

            exports : "Backbone.Wreqr"

        }
    }

}); 



requirejs(function(app) { 

    //app.start({rootEl: "#app-main" , usersEndPoint : "../bin/mock.users.json"});

}); 





