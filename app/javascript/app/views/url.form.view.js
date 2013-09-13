define(["marionette" ,  'backbone' ,  'underscore' , 'tpl!app/templates/url_form.tpl'  , 'app/vent' , 'app/views/components/select.view'], function(Marionette , Backbone , _ , FormTpl , vent , SelectView){

	var URLFormView = Backbone.Marionette.ItemView.extend({

		template : FormTpl , 

		initialize : function(options) {

			this.endPoints = options.endPoints; 

		} , 

		events : {

			"change select.client-list" : "handleSelect" , 

			"click input.submit" : "handleClick"

		} , 

		ui : {

			url : "input[name=url]", 

			submit : 'input[name=submit]' , 

			loader : '.loader' , 

			form : '.form'

		}, 

		appendSelect : function(model) { 

			var optionTemplate = "<option value='{id}'>{name}</option>"; 

			var option = new Backbone.Marionette.ItemView({model : model , template : optionTemplate}); 

		}, 

		onRender : function() { 

			this.ui.form.hide(); 

			this.selectList = new SelectView({el : this.$el.find("select.client-list")[0] , url : this.endPoints.clientList}); 

			var selectList = this.selectList; 

			this.selectList.on("loadComplete" , _.bind(this.showForm , this)); 

			this.selectList.load(function() { 

				//console.log(selectList.$el.html());

			}); 

			this.selectList.render(); 

		} , 

		showForm : function() { 

			this.ui.loader.hide(); 

			this.ui.form.show(); 


		} , 

		handleClick : function(e) { 

			e.preventDefault();

			vent.trigger('submitURL' , this.ui.url.val());


		} , 

		handleSelect : function(e) {

			e.preventDefault(); 

			console.log("select");


		}

	}); 

	return URLFormView;

}); 