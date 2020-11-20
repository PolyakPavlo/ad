(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.pack = function() {
	this.initialize(img.pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,193);


(lib.pani = function() {
	this.initialize(img.pani);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,402,362);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEVBXIAAiHIAYAAIAAAOQAFgHAIgFQAIgFAKAAQARAAAMAOQAMANAAAYQAAAYgMAOQgMANgSAAQgIAAgGgDQgHgDgHgIIAAAygAE1gWQgHAHAAAOQAAAQAHAIQAHAIAJAAQAJAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgJAAQgKAAgGAIgAh9BXIAAiHIAYAAIAAAOQAFgHAIgFQAIgFAKAAQARAAAMAOQAMANAAAYQAAAYgMAOQgMANgRAAQgIAAgHgDQgGgDgIgIIAAAygAhdgWQgGAHAAAOQAAAQAHAIQAGAIAKAAQAJAAAGgHQAGgIAAgQQAAgPgGgHQgHgIgJAAQgJAAgHAIgAgDAjQgKgOAAgUQAAgYANgOQAMgOATAAQAWAAANAPQANAPgBAdIhBAAQAAALAGAHQAGAGAJAAQAGAAAFgDQAEgEACgHIAaAEQgFAPgLAHQgLAHgQAAQgaAAgLgQgAA0gHQAAgMgFgGQgGgGgIAAQgIAAgGAHQgGAGAAALIAnAAIAAAAgAjmAjQgKgOAAgUQAAgYANgOQAMgOAUAAQAWAAANAPQAMAPAAAdIhCAAQABALAGAHQAGAGAJAAQAGAAAEgDQAEgEACgHIAaAEQgFAPgKAHQgLAHgQAAQgaAAgMgQgAiugHQAAgMgGgGQgFgGgIAAQgJAAgGAHQgFAGAAALIAnAAIAAAAgADeAxIAAhhIAaAAIAABhgABnAxIAAhhIA5AAQARAAAJAGQAJAHAAAMQAAAJgFAGQgFAGgHACQAKABAFAHQAFAHAAAIQAAAMgIAHQgJAHgQAAgACBAhIAVAAQALAAAFgDQAFgDAAgHQAAgHgGgDQgGgCgRAAIgNAAgACBgHIARAAQAMAAAFgDQAGgDAAgHQAAgGgFgDQgFgDgNAAIgRAAgAkjAxIAAhwIg1AAIAABwIgcAAIAAiHIBtAAIAACHgADeg+IAAgYIAaAAIAAAYg");
	this.shape.setTransform(57.525,19.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Warstwa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1C24").s().p("AorCzIAAllIRXAAIAAFlg");
	this.shape_1.setTransform(55.625,17.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.3,35.7);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArnI0IAAxoIXPAAIAARog");
	mask.setTransform(74.4,56.45);

	// Warstwa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgMASQgGgFgCgIQgCgHAEgIQAFgIAJgCQAIgCAIAEQAIAFACAJIgKAAQgEgHgIAAQgEAAgDADQgEAEAAAEQgBAIAIAEQALAEAFgLIAKAAQgCAIgGAFQgGAEgIAAQgGAAgGgEg");
	this.shape.setTransform(79.6692,63.9942);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAAAlQgPAAgKgLQgLgLAAgPQAAgOALgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLALgPAAgAgUgUQgJAIAAAMQAAANAJAIQAJAJALAAQAMAAAJgJQAJgIAAgNQAAgMgJgIQgJgJgMAAQgLAAgJAJg");
	this.shape_1.setTransform(79.7,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgpAqQgRgRAAgZQAAgXASgRQARgSAXABQAZAAARARQARARAAAYIgBAJIhTAAQABAJAHAGQAHAGAJAAQANAAAIgLIAjAAQgHASgPAKQgPAKgSABQgYAAgRgRgAAZgOQgDgIgHgFQgHgFgIABQgIgBgGAFQgIAFgCAIIAxAAIAAAAg");
	this.shape_2.setTransform(32.525,61.7993);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgpArQgSgSAAgYQAAgYARgSQASgSAYAAQAYAAASARQASASAAAYIAAA7IgeAAIAAgHQgPAIgPAAQgYAAgRgRgAgUgVQgIAIgBAMQAAAMAIAJQAIAJANABQALABAJgJQAKgIAAgNIAAgBQAAgMgJgJQgJgIgMAAQgLAAgJAIg");
	this.shape_3.setTransform(57.1493,61.6743);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAAA4QAKAAAHgHQAGgGAAgKIAAgJQgKAFgNAAIAAAAQgVAAgQgPQgQgPAAgWIAAg/IAeAAIAAA+QAAAKAIAHQAHAHAIAAQAJAAAIgHQAGgHAAgKIAAg+IAfAAIAAB4QgBAWgQAQQgPAPgWAAg");
	this.shape_4.setTransform(44.85,64.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAXBMIAAhCQAAgJgGgFQgHgGgJgBQgIgBgHAHQgIAGAAAJIAABCIgfAAIAAiXIAfAAIAAAmQALgFALAAQAVgBAQAQQARAPAAAWIAABCg");
	this.shape_5.setTransform(69.575,60.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAYBMIAAhCQgBgJgGgFQgHgGgJgBQgJgBgHAHQgGAGgCAJIAABCIgeAAIAAiXIAeAAIAAAmQAMgFALAAQAVgBAQAQQAQAPABAWIAABCg");
	this.shape_6.setTransform(20.2,60.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED1C24").s().p("AAnCzQgigJgWgbIgVgZQgOgRgJgIQgZgXgjgHIgagIQgOgGgIgJQgNgOAFgSQADgJAIgGQAJgFAKACQAOADALAIIAXASQALALANAGQAHAEAHgCQAHgBABgIQABgHgFgGQgCgEgIgGIgYgPQgNgHgJgEQgMgEgMgHQgLgJgEgMQgFgNAGgMQAIgQARgBQAPABALAJQAJAIAHAKIAXAcQAMASASAJQAKAEAEgDQAGgGgJgKQgYgegdgbQgcgaADgXQAEgVAVgHQAXgHARAfQANAZAOAjQATAwALgNQAGgHgHgUQgFgMgIgMIgQgYQgJgQgBgMQgCgNAIgKQAJgMAOAAQAYADAJAVQAGALACAPIACAcQAFAfAMAdQADAJAHALQALARAGABQAKABAHgJQAGgKgGgKQgHgPgDgMQgLgqAagNQAKgEALADQALAEAGAKQAIAMAAASIgDAgQgDASAAARQAAAKAEAQIAKAhQAFAPgBASQgGAdgbALQgUAIgKAGQgKAGgOANQgKAKgNAFQgJADgKAAIgMgBg");
	this.shape_7.setTransform(80.0979,37.8063);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmOGPQililgBjqQABjpClilQClilDpgBQDqABClClQClClAADpQAADqilClQilCljqAAQjpAAililg");
	this.shape_8.setTransform(56.45,56.45);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,112.9,112.9), null);


(lib.Klatkapośrednia8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F1F1").s().p("Eg8sAS/MAAAgl9MB5ZAAAMAAAAl9g");
	this.shape.setTransform(-208.5209,35.9907,0.4633,1.2964);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388.5,-121.5,360,315);


(lib.Klatkapośrednia7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_1
	this.instance = new lib.pack();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-96.5,165,193);


(lib.Klatkapośrednia6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AojDkIAAllIBAAAIAAAnQAMgUAWgMQAVgMAaAAQAtAAAfAjQAgAjAABAQAABAggAkQgfAkguAAQgVAAgRgJQgSgIgUgVIAACCgAnPg9QgQAUAAAmQAAAqARAVQARAVAZAAQAZAAAPgTQAQgTAAgrQAAgpgRgTQgQgUgYAAQgZAAgRATgAMPCCIAAhFIBEAAIAABFgAJACCIAAjLIhUAAIAAg4IDrAAIAAA4IhTAAIAADLgAF+CCIAAkDIBFAAIAAEDgABJCCIAAkDICWAAQAuAAAXARQAXARAAAiQAAAWgNAQQgNAQgSAFQAaAGANASQAOASAAAWQAAAegXATQgVATgsAAgACNBWIA3AAQAdAAANgHQAOgHAAgTQAAgTgPgHQgQgHgsAAIgkAAgACNgVIAtAAQAgAAAPgIQAOgIgBgRQABgRgNgHQgOgHgiAAIgtAAgAhCCCIAAilIhrClIhCAAIAAkDIBCAAIAACiIBpiiIBEAAIAAEDgAqzCCIAAjLIhdAAIAADLIhFAAIAAkDIDmAAIAAEDgAMdAlIgRi0IAAhUIBKAAIAABUIgRC0gAF+ikIAAg/IBFAAIAAA/g");
	this.shape.setTransform(19.1,4.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1C23").s().p("AhuA/IA+gMQAPAnAiAAQATgBAMgJQALgLAAgNQABgQgMgIQgNgJgTAAIgLAAIAAgsQARAAAIgCQAIgDAHgIQAIgJgBgLQAAgNgIgKQgKgKgRAAQgNgBgKAHQgLAFgJAWIg6gNQAJghAcgRQAdgSAkABQAvAAAaAVQAZAVAAAhQAAAUgLAOQgLANgYALQAdAHAOAQQAPAQAAAYQAAAegdAVQgcAXg1AAQhcAAgUhJg");
	this.shape_1.setTransform(-97.95,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.7,-30.5,223.5,61.1);


(lib.Klatkapośrednia5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED1C24").s().p("AlOClQgggQgRgeQgRgfAAguQAAgiARgfQAQgfAggRQAfgRAlAAQA8AAAlAmQAlAmAAA6QAAA6glAoQgnAmg5AAQgjAAghgRgAk4gMQgSAUAAAnQAAAmASAUQATAVAbAAQAbAAASgVQASgUAAgnQAAgmgSgUQgSgUgbAAQgbAAgTAUgAKoCwIAAimIhrCmIhDAAIAAkDIBDAAIAACjIBpijIBEAAIAAEDgAFwCwIAAhtIhjAAIAABtIhFAAIAAkDIBFAAIAABeIBjAAIAAheIBFAAIAAEDgAA/CwIAAhnQgnAKgWAAQgeAAgZgNQgZgOgKgVQgIgVgBgjIAAg+IBGAAIAAA+QAAAVADALQAEAJAMAJQAMAGATABQASgBAWgHIAAhvIBGAAIAAEDgAoUCwIAAkpIiNAAIAAEpIhIAAIAAllIEdAAIAAFlg");
	this.shape.setTransform(-7.15,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-29.9,174.9,59.9);


(lib.Klatkapośrednia1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_1
	this.instance = new lib.pani();
	this.instance.parent = this;
	this.instance.setTransform(-201,-181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201,-181,402,362);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_1
	this.instance = new lib.Klatkapośrednia5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(87.45,79.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29.9,alpha:1},23,cjs.Ease.cubicOut).wait(10));

	// Warstwa_2
	this.instance_1 = new lib.Klatkapośrednia6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.7,127.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({y:77.9,alpha:1},23,cjs.Ease.cubicOut).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,11.5,213.6,144.2);


(lib.Klatkapośrednia2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgLAAIADgIIAhANIgEAJgAgYgEIAEgJIAIADIgEAJg");
	this.shape.setTransform(19.725,15.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AggANIAEgIIAZAOIAFgKIgYgNIAEgIIAYANIAFgIIgYgOIAEgIIAYAOIACgEIAQAIIgEAHIgJgEIgUAmg");
	this.shape_1.setTransform(19.275,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgWgCIAGgIIAMAJIAFgHIAFgHQADgCADAAQADAAADACQAEADABAEQAAAFgEAEIgMARgAAJgIQgDABgDAEIgDAEIAHAGIAFgHQADgDAAgCIgCgCIgDgBIgBAAg");
	this.shape_2.setTransform(16.275,24.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgGAWIABgCIACgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgFgFIgQgMIAVgZIAaAYIgGAGIgVgRIgIAJIALAKIAGAGQABAEgBACIgDAEIgDAFg");
	this.shape_3.setTransform(13.875,26.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgEASQgFgBgEgFQgDgDgBgFQgBgEABgEQABgFAEgEQAGgGAHABQAHAAAFAGQAGAGAAAGQAAAIgGAFQgDAEgGABIgEABIgEgBgAgHgHQgCACAAAEQAAADADAEQAEAEADAAQAEAAADgCQACgDAAgDQAAgDgDgEQgEgEgDAAIgBAAQgDAAgDACg");
	this.shape_4.setTransform(11.1,29.5729);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgegGIAegZIAfAmIgIAGIgYgfIgQAMIAZAfIgIAHg");
	this.shape_5.setTransform(7.375,31.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AADAYIADgCQABAAABgBQAAAAABgBQAAAAABgBQAAAAAAgBIAAgFIgcgYIAJgGIASASIgFgaIAJgEIAGAkIABAGIAAAFIgBAEIgDAEIgEACIgGADg");
	this.shape_6.setTransform(2.45,36.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED1C24").s().p("AgcgRIAbgJQAHgDAFACQAFABADAGQABAEgBADQgBAEgDACQAFAAAEACQADACACADQACAGgDAEQgDAFgIADIgcALgAAAACIgGACIAEANIAJgEIAHgDQACgDgBgEQgBgDgDAAIgBAAQgEAAgGACgAgFgRIgIADIAEAMIAIgDQAFgCACgCQACgCgBgEQgBgDgDAAIgBAAIgHABg");
	this.shape_7.setTransform(-3.0056,37.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED1C24").s().p("AgJgMIAMgDIAMAvIgNADgAgOgfIANgDIACAMIgMADg");
	this.shape_8.setTransform(-6.85,37.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED1C24").s().p("AgYgUIANgCIAEAUIAEgDIACgHQABgIACgDQACgCAFgBIAFgBIACAJQgFABgBABQgCABAAAGQgCAGgDADQAGAAAFAIIABABIAKAMIgOACIgJgMQgCgFgCAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAIAEAVIgNACg");
	this.shape_9.setTransform(-9.725,39.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED1C24").s().p("AgLAXQgGgDgEgGQgDgFAAgJQgBgFADgHQADgGAFgDQAGgEAIAAQAKAAAIAGQAHAIABALQAAAKgHAHQgHAIgLABQgGAAgGgDgAAAgOQgFAAgDAEQgDAEAAAGQAAAIAEADQAEAEAEAAQAFAAADgEQADgEAAgHQAAgHgEgEQgEgDgEAAIAAAAg");
	this.shape_10.setTransform(-14.8525,39.9232);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED1C24").s().p("AgZAhIAHhDIAMACIgBAHIAHgFQAEgDAFACQAIAAAFAIQAGAHgCAMQgBAMgHAGQgGAGgJgCQgDAAgDgCQgEgCgDgEIgCAYgAgDgTQgEAEAAAGQgBAJACAEQADAEAEAAQAEABAEgEQADgDABgIQABgHgDgEQgCgEgFAAIgBgBQgDAAgDADg");
	this.shape_11.setTransform(-20.3089,40.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED1C24").s().p("AgJAiQgKgDgDgKQgFgKAFgQQAGgSAIgGQAJgGAKADQAIACADAGQAEAFgBAIIgMgCQAAgDgBgDQgCgCgDgBQgEgBgDADQgDACgEAMQAGgFAGACQAIACAEAHQAEAIgDAKQgDAKgHAEQgFACgFAAIgHAAgAgGAAQgDACgBAGQgCAGACAEQABAEAEABQAEABACgCQADgCACgGQACgGgCgEQgCgEgEAAIgBgBIgFABg");
	this.shape_12.setTransform(-27.3361,37.4946);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED1C24").s().p("AgSAdIASgtQgIAEgKgBIAEgLQAFAAAIgBQAGgDAFgFIAJAEIgaA/g");
	this.shape_13.setTransform(-31.45,36.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AABAYIAFgIIgWgPIgFAIIgGgEIAJgNIADACQADgBAFgFQAFgDAGgMIAZAQIgQAXIAEACIgJAOgAgHgBIAMAIIALgRIgKgGQgHANgGACg");
	this.shape_14.setTransform(-38.5,34.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgEAQIABgCIABgBQgDAAgEgBIgFgDQgEgDgBgEQgBgEADgEIAFgDIAGAAIAGADIAIAEIABgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgCgDgCIgEgCIgDACIgGgHQAFgDADAAQAFAAAFAFIAHAGQABAEAAACIgEAHIgHAIIgEAGIgCAFgAgJAAIgBACQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQACACADAAQABAAABgBQAAAAABAAQAAAAAAAAQAAgBAAAAIADgDIABgBIgEgCIgFgCQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_15.setTransform(-41.3312,32.3964);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgHASIAKgLIgJgIIgKAKIgHgHIAYgaIAHAHIgJAKIAJAJIAJgJIAHAGIgYAag");
	this.shape_16.setTransform(-44.075,29.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgBATQgHAAgFgGQgEgEgBgFQgBgEACgFQACgEAEgEQAEgEAFgBQAEgBAEACQAFABADAFQAGAGgBAGQgBAIgGAFQgGAFgGAAIgBAAgAgFgGQgEAEAAADQgBAEADADQACACAEAAQACAAAEgDQAEgEABgDQABgDgDgDQgCgDgEAAQgDAAgEADg");
	this.shape_17.setTransform(-46.8373,26.6854);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgOAWIAhgWIgLgQIghAWIgGgHIApgcIAWAfIgpAcg");
	this.shape_18.setTransform(-48.875,22.925);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0,0.05,0.883,0.883,0,0,0,74.4,56.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FBCF4F").s().p("AnMEaIAAozIOZAAIAAIzg");
	this.shape_19.setTransform(24.9379,24.9164,0.883,0.883);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2E73BA").s().p("AnVEaIAAozIOqAAIAAIzg");
	this.shape_20.setTransform(24.2315,-24.9279,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-49.8,131.4,99.69999999999999);


// stage content:
(lib.Heyah_UA_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa_9
	this.instance = new lib.Klatkapośrednia8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(338.8,95.95,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).to({startPosition:0},229).to({alpha:1},5).wait(1));

	// copy
	this.instance_1 = new lib.Symbol3("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.15,58.5,0.6674,0.6674,0,0,0,111.9,54.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(230));

	// nakladka_svg
	this.instance_2 = new lib.Klatkapośrednia2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(252.05,45.55,0.7298,0.7298);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	// cta
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(241.25,222.05,0.8091,0.8091,0,0,0,55.7,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},179).to({regX:55.6,scaleX:0.9305,scaleY:0.9305,x:241.2},6).to({regX:55.7,scaleX:0.8091,scaleY:0.8091,x:241.25},6).to({regX:55.6,scaleX:0.9305,scaleY:0.9305,x:241.2},6).to({regX:55.7,scaleX:0.8091,scaleY:0.8091,x:241.25},6).wait(37));

	// pani
	this.instance_4 = new lib.Klatkapośrednia1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(195.95,164.2,0.4745,0.4745,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},15,cjs.Ease.quadInOut).to({startPosition:0},213,cjs.Ease.quadInOut).wait(12));

	// pck
	this.instance_5 = new lib.Klatkapośrednia7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(54.9,185.2,0.1622,0.1622,0,0,0,0.3,0.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({regX:0,regY:0.1,scaleX:0.5593,scaleY:0.5593,alpha:1},25,cjs.Ease.backOut).wait(126));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F1F1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-604,112.5,2026.8,156.2);
// library properties:
lib.properties = {
	id: '88987AE724C345FD8B48B213B3EA127C',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"pack.png", id:"pack"},
		{src:"pani.png", id:"pani"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['88987AE724C345FD8B48B213B3EA127C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;