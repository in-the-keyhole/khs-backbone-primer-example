    Project = Backbone.Model.extend({      
        rootUrl:'api/project',   // URL IF server is available 
        defaults: {
        	name: 'IT Modernization',
        	hours: 1000.00
        }

    });


  Project.Collection = Backbone.Collection.extend({      
        url:'api/projects',   // URL IF server is available 

    });


  // load

  projects = new Project.Collection([

  		{ id: 100, name : "SPA Modernization", resources: 5, hours: 1000.00 },
  		{ id: 200, name : "Data Wharehouse", resources: 10, hours: 2000.00 },
      { id: 300, name : "ERP", resources: 40, hours: 4000.00 }

	]);



    