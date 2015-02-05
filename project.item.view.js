ProjectItemView = Backbone.View.extend({
   
    el: 'table',
    
    initialize: function(options) {
       this.model = options.model;
       // NOTE: This would be called if server API involved
       //this.model.fetch({success: function(model){ this.render}});
       
       // DOING THIS SINCE NO SERVER is INVOLVED
       this.render();

    },


    render: function() {
    
      var compiled_template = _.template(this.html());
		  var $el = $(this.el);
		  $el.append(compiled_template(this.model.toJSON()));

    },

    
    html: function() {

       return  '<tr><td id="<%=id%>-name"><%=name%> </td> '+
       		     '<td id="<%=id%>-resources"><%=resources%> </td> '+
       		     '<td id="<%=id%>-hours"> <%=hours%> </td>'+
               '<td> <span id=<%=id%> class="glyphicon glyphicon-remove"/></td> </tr>';
               

    }

});




