ProjectChartView = Backbone.View.extend({
   
    el: 'div#chart',


    initialize: function(options) {
       // update chart when resources are added
      projects.on('add',this.watchAndShow,this);
      projects.on('remove',this.showChart);
       var _this = this;
       projects.forEach(function(model) {       
          model.on('change',function(m) { _this.showChart(); });
       });
       
    },

    watchAndShow: function(model) {
         var _this = this;        
         model.on('change', function(m) {_this.showChart();});
         this.showChart();
    },

    showChart: function() {

     
        var columns = [];

        projects.forEach(function(m) { 
               columns.push( [m.get('name'),m.get('hours')]);           
         });


        c3.generate({
          bindto: '#resource-chart',
            data: {
                columns: columns,
                type : 'pie'
            },
            size: {
              width: 200
            }
        });

    },

 
    render: function() {

     
      var compiled_template = _.template(this.html());
		  var $el = $(this.el);
      $el.html(compiled_template());

       this.showChart();

		
    },

    // USING REQUIRE THIS WOULD CONTAINED IN AN HTML TEMPLATE
    html: function() {

       return '<h4>Manhours</h4><div id="resource-chart"></div>';	

    }

});




