define(["marionette" ,  'backbone' ,  'underscore' , 'tpl!app/templates/growl.tpl'  , 'app/vent' ], function(Marionette , Backbone , _ , GrowlTpl , vent){

	var GrowlView = Backbone.Marionette.ItemView.extend({

		template : GrowlTpl , 

		initialize : function() { 

			//console.log("rendering");

		}

	}); 

	return GrowlView;

}); 