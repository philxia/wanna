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





	this.disable = function(){this.enabled = false;}
	this.enable = function() {this.enabled = true;}
};


THREE.CuttingplaneControl.prototype = Object.create( THREE.EventDispatcher.prototype );