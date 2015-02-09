ProjectEditView = Backbone.View.extend({
   
   

    initialize: function(options) {
    	this.value = options.value;
    	this.id = 'edit-'+options.id;
       
    },

    events: {

	    'click button#save' : 'save',
	    'click button#' : 'cancel'
   
		
    },

   cancel: function(e) {
  
      this.refresh();

   },

   save: function(e) {

   	   var cid = e.target.id;
   	   value = $('#'+this.id).val();
       var array = this.id.split('-');
       var id = array[1];
       var prop = array[2];
       var model = projects.get(id);
       model.set(prop,value);
    
      this.refresh();
     

   }, 

   refresh: function(e) {

   		var collection = projects;
        var view = new ProjectListView({collection: collection});
        view.render();

      

   },
  
  render: function() {
    
      var compiled_template = _.template(this.html());
      var $el = $(this.el);
      $el.append(compiled_template({value: this.value, id: this.id}));

    
    },

    
    html: function() {

       return  '<input  class="numeric" id="<%=id%>" type="text" value="<%=value%>"/> <button id="cancel">Cancel</button> <button id="save">Save</button>';

    }

});

