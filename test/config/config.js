requirejs.config({

    baseUrl : '../app/javascript/vendor' , 

    paths : {

        jquery : 'jquery/jquery', 

        backbone : 'backbone/backbone', 

        underscore : 'underscore/underscore' , 

        marionette : 'backbone.marionette/lib/backbone.marionette' , 

        chai : 'chai/chai',

        app : '../app', 

        tpl : "requirejs-tpl/tpl", 
        
        'backbone.wreqr' : 'backbone.wreqr/lib/backbone.wreqr.min',

        spec : '../../../test/spec'

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

requirejs(['spec/url.form.spec' , 'spec/select.view.spec'] , function() { 

    if (window.mochaPhantomJS) { 

        mochaPhantomJS.run(); 

    } else { 

        mocha.run(); 

    }

}); 

