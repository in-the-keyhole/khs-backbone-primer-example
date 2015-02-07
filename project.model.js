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
      { id: 300, name : "ERP", resources: 30, hours: 4000.00 },
      { id: 400, name : "Analytics Dashboard", resources: 7, hours: 500.00 },
      { id: 500, name : "Agile/Devops", resources: 5, hours: 200.00 }

	]);



    