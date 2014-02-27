/**
 * @author philxia / https://github.com/philxia
 */
/*global THREE, console */

THREE.CuttingplaneControl = function ( object, domElement ) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// Set to false to disable this control
	this.enabled = true;

	// bounding box.
	this.BBoxMin = new THREE.Vector3();
	this.BBoxMax = new THREE.Vector3();

	// plane x, y, or z.
	this.CuttingPlane = 0; // 0 = x, 1 = y, 2 = z;

	// the cube.
	this.boundingboxCube = null;
	this.width = 0.0;
	this.height = 0.0;
	this.depth = 0.0;

	this.SetBoundingBox = function(minvec, maxvec)
	{
		this.BBoxMax = maxvec;
		this.BBoxMin = minvec;
	}

	this.CreateBoundingBoxCube = function()
	{
		// calcuate the parameters.
		this.width = this.BBoxMax.x - this.BBoxMin.x;
		this.height = this.BBoxMax.y - this.BBoxMin.y;
		this.depth = this.BBoxMax.z - this.BBoxMin.z;
		position = new THREE.Vector3(this.BBoxMin.x + this.width/2, 
			this.BBoxMin.y + this.height/2, this.BBoxMin.z);

		var bboxGeometry = new THREE.BoxGeometry( 1, 1, 1 )

		var material = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.1});
		this.boundingboxCube = new THREE.Mesh( bboxGeometry, material );
		this.boundingboxCube.scale.x = this.width;
		this.boundingboxCube.scale.y = this.height;
		this.boundingboxCube.scale.z = this.depth;
		this.boundingboxCube.position = position;
		this.object.add(this.boundingboxCube);
	}

	this.SetValue = function(value)
	{
		if(value < 1)
			return;
		var scalefactor = (value /100.0) * this.width;
		if(this.CuttingPlane == 0)
			this.boundingboxCube.scale.x = scalefactor;
		else if(this.CuttingPlane == 1)
			this.boundingboxCube.scale.y = scalefactor;
		else if(this.CuttingPlane == 2)
			this.boundingboxCube.scale.z = scalefactor;
	}

	this.Setback = function()
	{
		this.boundingboxCube.scale.x = this.width;
		this.boundingboxCube.scale.y = this.height;
		this.boundingboxCube.scale.z = this.depth;
	}


	this.disable = function(){this.enabled = false;}
	this.enable = function() {this.enabled = true;}
};


THREE.CuttingplaneControl.prototype = Object.create( THREE.EventDispatcher.prototype );