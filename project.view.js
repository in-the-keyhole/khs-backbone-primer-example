ProjectView = Backbone.View.extend({
   
    el: 'div#content',

    initialize: function(options) {
       this.model = options.model;
       // NOTE: This would be called if server API involved
       //this.model.fetch({success: function(model){ this.render}});
       
       // DOING THIS SINCE NO SERVER is INVOLVED
       this.render();

    },

    events: {

	  'click button#hello' : 'hello'
		
    },

    hello: function(e) {

        alert('Hello, you clicked me');

    },


    render: function() {
        var compiled_template = _.template(this.html());
		var $el = $(this.el);
		$el.html(compiled_template(this.model.toJSON()));
		
    },

    
    html: function() {

       return '<p> <b> Name:</b> <%=name%> </p> '+
       		  '<p> <b>Manours:</b> <%=hours%> </p> '+
       		  '<button id="hello">click me</button>';	

    }

});




