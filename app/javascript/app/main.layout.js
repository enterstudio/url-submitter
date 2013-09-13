define(["marionette" , "backbone" , "tpl!app/templates/layout.tpl" , "app/url.form.view" ], function(Marionette , Backbone , layoutTemplate , URLFormView) { 

	var Layout = Backbone.Marionette.Layout.extend({

		template : layoutTemplate , 

		initialize : function(options) {

			this.endPoints = options.endPoints; 

		} , 

		regions : {

			"form" : "#urlForm" , 

			"notifications" : "#notifications"

		} , 

		onRender : function() { 

			this.form.show(new URLFormView({endPoints : this.endPoints}));

			//var notifictionController = new NotifictionController(); 

			//this.form.show(notifictionController.getView()); 

		}

	}); 

	return Layout;

}); 