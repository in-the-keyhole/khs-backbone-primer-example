ProjectAddView = Backbone.View.extend({
   
    el: 'div#add',

    initialize: function(options) {
     
       
    },

    events: {

	    'click button#save' : 'save'
		
    },

   save: function(e) {

       var date = new Date();

       var model = new Project({ 
          id: date.getTime(),
          name: $('#name').val(),
          resources: $('#resources').val(),
          hours: $('#hours').val()

       })

       // clear entry fields 
       $('#name').val('');
       $('#resources').val('');
       $('#hours').val('');


       projects.add(model);
      
        var collection = projects;
        var view = new ProjectListView({collection: collection});
        view.render();


   },  

  
  render: function() {
    
      var compiled_template = _.template(this.html());
      var $el = $(this.el);
      $el.append(compiled_template());
     
    
    },

    
    html: function() {

       return  '<table class="table"><tr id="new-row"><td> <input id="name" type="text"/> </td> '+
               '<td><input  id="resources" type="text"/> </td> '+
               '<td><input  id="hours" type="text"/> <button id="save">Add</button></td> </tr></table>';

    }

});




