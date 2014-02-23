var modelloader = function(){
	function loadmodel(scene)
	{
		var progressbar = $( "#progressbar" ),
      		progressLabel = $( ".progress-label" );

		var pagesCount = 100;
	    var pageLength = 0;
	    var lastPageLength = 0;
	    $.ajax({ url: 'https://api.mongolab.com/api/1/databases/revitmodel/collections/simplesamplemodelinscenejs?c=true&apiKey=95_aw1Mpmlz3UAbIWGacgzH1a00vPopr',
	      type: "GET",
	      contentType: "application/json",
	      success: function(msg) {
	        var totallInstances = parseInt(msg);
	        pageLength = Math.floor(totallInstances/pagesCount);
	        lastPageLength = totallInstances - pageLength * (pagesCount - 1);
	        //alert(pagesLength + "x 99 + " + lastPageLength + "=" + totallInstances); //11


		        // paging
		        window.modelNodes = [];
		        for(var i=0; i<pagesCount; i++)
		        {
		          var newPageLength = (i==pagesCount-1)? lastPageLength : pageLength;
		          var urlString = 'https://api.mongolab.com/api/1/databases/revitmodel/collections/simplesamplemodelinscenejs?sk='+ (i*pageLength).toString() +
		            '&l=' + newPageLength.toString() + '&apiKey=95_aw1Mpmlz3UAbIWGacgzH1a00vPopr';
		          //alert(urlString);
		          $.ajax({ url: urlString,
		            type: "GET",
		            contentType: "application/json",
		            success: function(msg) {
		              var val = progressbar.progressbar( "value" ) || 0;        
		              progressbar.progressbar( "value", val + 1 );

		              for(var j = 0; j<msg.length; j++)
		              {
		              	var obj = msg[j];
		              	if(obj != null)
		              	{
		              		var object = loadModelProgressive({ x: -6.97676849365234, y: 11.3435325622559, z: -14.2272529602051 }, obj);
		              		if(object != null)
		              		{
			         		    window.modelNodes.push(object);
			              		scene.add(object); 			
		              		}

		              	}	
		              }
		              if(window.modelNodes.length == totallInstances)
		              {
		              	// load them to the scene.
		              	//loadModelWithCenterpoint({ x: -6.97676849365234, y: 11.3435325622559, z: -14.2272529602051 });
		              	progressbar.progressbar( "value", 100 );
		              	$("#progressbar").remove();
		              }

		            }
		          });          
		        }

	     	}
	    });

	}

	function loadModelProgressive(centerpoint, obj)
	{
		if(obj.type == "flags")
		{
			return loadModelProgressive(centerpoint, obj.nodes[0]);
		}
		else if(obj.type == "material")
		{
			var object = new THREE.Object3D();
			var geometry = new THREE.Geometry();

			var material = new THREE.MeshPhongMaterial();
			material.color = new THREE.Color(obj.baseColor.r, obj.baseColor.g, obj.baseColor.b);
			material.specular = new THREE.Color(obj.specularColor.r, obj.specularColor.g, obj.specularColor.b);
			material.opacity = obj.alpha;
			var mesh = new THREE.Mesh( geometry, material );

			var vecIndex = 0;
			for(var i=0; i<obj.nodes.length; i++)
			{
				var geoNode = obj.nodes[i];

				// for(var l=0; l<geoNodes.length; l++)
				// {
					//var geoNode = geoNodes[l];
					
					
					var vecCount = geoNode.positions.length / 3;
					for(var k=0; k<vecCount; k++)
					{
						geometry.vertices.push( new THREE.Vector3(geoNode.positions[3*k],
							geoNode.positions[3*k+1], geoNode.positions[3*k+2]));
					}
					var triCount = geoNode.indices.length / 3;
					for(var j=0; j<triCount; j++)
					{
						geometry.faces.push( new THREE.Face3(vecIndex + geoNode.indices[3*j], vecIndex + geoNode.indices[3*j+1], vecIndex + geoNode.indices[3*j+2]));
					}

					vecIndex += vecCount;
									
				// }

			}
			object.add( mesh );
			geometry.computeCentroids();
			geometry.computeFaceNormals();
			geometry.computeBoundingSphere();
			object.position = new THREE.Vector3(centerpoint.x, centerpoint.y, centerpoint.z);
			return object;		
		}


		// var parent = SceneJS.scene("theScene").findNode("theGeometryParent");
		// parent.add("node", obj);
		// translateNode.set("x", -centerpoint.x);
	 //    translateNode.set("y", -centerpoint.y);
	 //    translateNode.set("z", -centerpoint.z);
	 //    newInput = true;
	}

	return {
		loadmodel : function(scene) {
			loadmodel(scene);
		}
	};
}();