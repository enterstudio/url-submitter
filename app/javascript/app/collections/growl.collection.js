define(['backbone' , 'app/models/growl.model'] , function(Backbone , GrowlModel) {

	var GrowlCollection = Backbone.Collection.extend({

		model : GrowlModel , 

		parse : function(response) { 

			return response.growls;

		}

	}); 

	return GrowlCollection; 

}); 