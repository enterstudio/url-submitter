define(['marionette' , 'backbone' , 'underscore'] , function(Marionette  , Backbone , _) {

	var optionViewTemplate = _.template("<%= name %>"); 

	var optionView = Backbone.Marionette.ItemView.extend({

		tagName : 'option', 

		template : optionViewTemplate , 

		onRender :  function() { 

			this.$el.attr("value" , this.model.get("id"));

		}

	}); 

	var selectCollection = Backbone.Collection.extend({

		parse : function(response) {

			return response.options; 

		}


	}); 

	var SelectView = Backbone.Marionette.CollectionView.extend({

		itemView : optionView , 

		initialize : function(options) {

			this.collection = new selectCollection(); 

			this.collection.url = options.url;

		} , 

		load : function(cb) { 

			var callback = cb || function() { };

			this.collection.fetch({ success : _.bind(function () {

				callback(); 

				this.trigger("loadComplete");

			} , this)})

		}

	}); 

	return SelectView; 

});