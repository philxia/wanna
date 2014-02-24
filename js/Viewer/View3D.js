var Wanna = Wanna || {}


Wanna.Viewer3D = function(thiscanvas)
{
	this.canvas = thiscanvas;

	this.listeners = {};

	// the implementation of the viewer.
	this.impl = new View3DImpl(thiscanvas, this);
}

Wanna.Viewer3D.prototype.constructor = Wanna.Viewer3D;


Wanna.Viewer3D.prototype.loadModel = function(url, callback)
{
	return this.impl.loadModelFromDB(url, callback);
}

///.
Wanna.Viewer3D.prototype.addEventListener = function(type, listener)
{
	if(typeof type == "string")
		type = {type: type};

	if(typeof this.listeners[type.type] == "undefined")
		this.listeners[type.type] = [];

	this.listeners[type.type].push(listener);
}


Wanna.Viewer3D.prototype.removeEventListener = function(type, listener)
{
	if(typeof type == "string")
		type = {type: type};

	if(this.listeners[type.type] instanceof Array)
	{
		var li = this.listeners[type.type];
		for(var i=0, len=li.length; i<len; i++)
		{
			if(li[i] === listener)
			{
				li.splice(i, 1);
				break;
			}
		}
	}
}


Wanna.Viewer3D.prototype.fireEvent = function(event)
{
	if(typeof event == "string")
		event = {type: event};

	if(!event.target)
		event.target = this;

	if(!event.type)
		throw new Error("event type unknown.")

	if(this.listeners[event.type] instanceof Array)
	{
		for(var i=0, len=this.listeners[event.type].length; i<len; i++)
			this.listeners[event.type][i].call(this, event);
	}
}