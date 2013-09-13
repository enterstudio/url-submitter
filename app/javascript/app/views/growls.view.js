define(["marionette" ,  'backbone' ,  'underscore' ,  'app/vent' , 'app/views/growl.view' , 'app/collections/growl.collection' ], function(Marionette , Backbone , _ ,  vent , GrowlView , GrowlCollection){


	var GrowlsView = Backbone.Marionette.CollectionView.extend({

		itemView : GrowlView , 

		initialize : function(options) { 

			this.collection = new GrowlCollection(); 

			this.collection.url = options.url; 

		}  , 

		push : function(obj) {

			this.collection.add(obj);

		}

		

	}); 

	return GrowlsView;

}); 