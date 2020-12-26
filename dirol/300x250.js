(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,322,231,182],[233,322,236,165],[0,0,480,320],[233,489,246,128],[0,619,238,113]]}
];


// symbols:



(lib.big_blue = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.big_red = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bubbles6 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.small_blue = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.small_red = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1WAhDMAAAhCFMBqtAAAMAAABCFgABuWOQgIBFALA2QATBZBUBiQAeAhAZAUQAhAZAiAHQAqAJAqgUQAqgUAUgoQAVgmgGguQgGgtgdgiQA0gFA1ABQgFAUABAXQADA5AnAlQAyAtBgAAQA+ABBKgRQArgJBbgaIINiXQgOAfAKAlQAKAjAbAZQAwAsBRAAQAfAAAmgIQAYgFAtgMQHHiDGsj+QAugbAYgUQAjgeAQghQAOgfgBgjQgCgkgPgdQgRgdgdgUQgdgUgigEIghgDQgSgBgMgEQgLgDgQgLIgbgQQgigTgzAGQgfADg4ASQicAwilAqQANgLADgfQADgkAFgLQAGgOAYgUQBQg/BYgwQAzgdBagqQBqgyAkgSQA6gdAigdQAtgnAPgtQAMgogMgrQgMgqgggcQgogkg9gEQg4gDg5AVQgqARg6AkQg/AqggATQhVAxhdAZQAGgaACgeIAAgPIAHgCIAbgIQAQgFALgCQALgBAPABIAaACQAjgBAfgSQAfgSAQgfQANgXAFggQADgVABgmQABgvgDgcQgEgpgOgeQAsgGAjgfQAjgfALgrQAKgrgTgrQgTgrgngVQgogThFACQhBADg3AOQgmAKhKAgIhrAwQgPgMgTgIQglgRgoAGQgmAEgiAaQgeAWgQAhIgHgLQgfgsgcgTQgogbgwADIgXABQgNAAgJgGQgFgFgFgKIgHgRQgLgdgZgWQgZgWgggIQgegIghAIQghAIgXAVQgNALgSAWIgcAiQgHAHgPAOQgpgMgnANQgjAMgmAjQgrAqgXASQgTAPgmAXIgfAVQgXgKgbgFQgtgJhJAAIhUACQgMgsglgbQgmgbg6gDQhBgEgwAdQgaAPgSAYQgSAZgFAcIgEAVQgBAJgDAGQgmAPgqAVQgbAOgnAXQgWgMgdgGQgbgEgsAAQhUACgqATIggARQgTALgMAFQgJAEgYAHQgVAGgMAGIgMAHQgMgIgOgFQghgMgiAEQgfAEgaARQgaARgQAaQgLAQgFATQgQAAgQACQgsAGglAWQgnAYgWAkQgXAlABAtQABAvAbAgIAQASQAJALADAIQAGALgBARIgBAdQgCAVACATIgYAaQgWAXgxAqQgpAngOAlQgRArAKBKIACAYIgPgIQgcgOgfgBQgeAAgdANQgdANgUAYQgJALgRAdQgNAagDAKQgEANgCAZIAAARQgQADgaABQgjABgLACQgnAEgkAVIgPAKIgbgBQhRgBgwAcQgmAVgSAkIgJASQgFALgFAGQgKALgQAJIgfAOQhKAigkA+QgSAhgDAlQgEAnAPAiQANAeAZAWQAaAWAgAHQAgAIAhgIQAhgHAZgWIAYgWQAOgOALgIQAFgEAhgPQA6gbAmgvQAfAhA0AFQAZADAWgFQAHAQAJANQAbAnAwANQAyANAqgUIAbgOQARgKAKgEIAYgGIAYgFQAOgDAOgGQAVAaAiAOQAsAVAtgMQAsgLAfgmQAfgnAAgvIAXgLQATAfAaATQAgAWAoACQApADAigSQAigTATgjQAVgkgDgnQgBgWgMgrQgNgrgCgWIAAgGQARALATAFQArANBEgNQBcgSAUAAQgSBPgFAqg");
	mask.setTransform(12.5,12.5);

	// Layer_1
	this.instance = new lib.bubbles6();
	this.instance.parent = this;
	this.instance.setTransform(-240,-160);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-240,-160,480,320), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50A028").s().p("EgpwgzaMBiEA3HMhwoAvugEgviAnkMBZPgk7MhN5gpVg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-360.4,-329,720.9,658.1), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADj0IBZgMIhdH0IhaANg");
	this.shape.setTransform(97.425,-12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjojSIBZgNIhNGeICRgVIBNmdIBagNIhOGeICSgVIBNmeIBagMIheH1IovBOg");
	this.shape_1.setTransform(55.625,-7.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQjoID/gkIgQBXIimAXIgWB3ICegWIgQBWIieAWIgXB6IClgXIgQBXIj/Akg");
	this.shape_2.setTransform(6.425,-0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbjuICMgUQARgDASAAQASAAASAFQATAFAPAOQAMAJAKAWQALAWAAAnQAAAkgJAbQgJAbgOAUQgNATgOANQgdAagfAMQggALgZAEIhIAKIgjC+IhaAMgAAmisIg4AIIgaCKIBCgKQARgCANgGQAMgHAJgJQAIgHAIgOQAIgQABgYQAAgJgDgLQgCgLgJgKQgLgKgMgBIgKAAIgNABg");
	this.shape_3.setTransform(-28.95,5.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhUDcQgqADgfgLQghgLgUgTQgTgRgOggQgOggAAgzQAAg2APgoQARgpAYgdQAYgdAbgSQAYgPAZgMQAagKAagHQAZgGAVgCIALg/IBagNIgMA/QApgEAgALQAgALAUAUQAUAQANAhQAOAfAAAzQAAA3gQAoQgPAogZAdQgYAdgbASQgXAQgaAKQgaALgaAHQgZAGgUADIgNBGIhaANgAhBh0QgZAJgXAQQgMAKgNAQQgMARgIAaQgKAYAAAiQAAATAFAWQAGAUARARQAGAFAJAFQAKAGAOADQAPACASgDIAwkDQgUACgZAJgABFiLIgwEDQATgCAagJQAagIAWgRQALgJAOgRQAMgQAIgbQAKgXAAgjQABgTgGgVQgGgVgRgQQgGgGgKgFQgJgGgOgCIgOgCQgJAAgKACg");
	this.shape_4.setTransform(-75.7,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-107.3,-56.5,214.6,113), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUhwIAqgGIAqDQIgqAGIgKg4IhQALIgeA+IgtAGgAgIAMIA2gIIgNhKg");
	this.shape.setTransform(8.275,-5.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3hiIAngFIgRBXIBLgKIAQhZIAogFIgpDbIgoAGIASheIhLALIgRBeIgoAFg");
	this.shape_1.setTransform(-10.025,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-22.4,-27.2,44.9,45), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7ixIBBgJIgaCMIAwgGIAagDQANAAANAFQANAEAMALQAHAHAIAPQAHAPABAcQAAAZgGAUQgHASgJAPQgJANgKAJQgRARgYAJQgWAKgYADIh/ASgAASAKIgyAGIgSBjIA5gJQANgBAJgFQAJgEAGgGQAJgJAFgMQAFgKAAgOQAAgKgDgHQgDgGgEgEQgIgIgKgBIgHAAIgKABg");
	this.shape.setTransform(50.45,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AizBlIAhgFICuk+IBMgKIBDEbIAhgEIgZCFIhBAJIANhGIj9AkIgMBFIhBAJgAhFBVICsgYIgvjVg");
	this.shape_1.setTransform(14.725,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMBiIhVj6IBMgLIA6C6IBxjSIBMgLIjeGCIhMALg");
	this.shape_2.setTransform(-14.5,0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEinIDMgdIgLBAIiLATIgPBPIAvgHQANgCANAAQAPgBANAFQAOAEAMALQAQAPAEARQAGARgBAQQAAAbgJAZQgLAZgYAXQgPAOgRAIQgQAHgOAEQgNADgJACIiCASgAAMAUIg1AIIgSBhIA8gJQAIgBAJgDQALgEAKgJQALgKADgLQAFgKgBgMQABgHgCgHQgCgHgGgHQgJgHgKgBIgJgBIgIABg");
	this.shape_3.setTransform(-49.45,5.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-66.2,-42.4,132.5,80), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.big_blue();
	this.instance.parent = this;
	this.instance.setTransform(-115.5,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-115.5,-91,231,182), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.big_red();
	this.instance.parent = this;
	this.instance.setTransform(-118,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-118,-82.5,236,165), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.small_blue();
	this.instance.parent = this;
	this.instance.setTransform(-123,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-123,-64,246,128), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.small_red();
	this.instance.parent = this;
	this.instance.setTransform(-119,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-119,-56.5,238,113), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBaIAugGIgIAuIguAGgAACiBIAugGIglDFIgtAGg");
	this.shape.setTransform(110,-8.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiKhyIAwgHIgUBrIAlgFQAFgVAJgSQALgTANgQQAXgaAZgNQAagMAdgEQAagEAVAFQAXAEASASQAOAMAJAUQAJAUAAAdQAAAggMAdQgKAdgVAYQgXAagbANQgaAMgdAEQgYAEgWgFQgWgFgTgRQgFgEgHgKQgHgKgGgPQgFgQgBgWIgpAGIgVBxIgvAHgABBhnQgZAEgSALQgSALgLAQQgMARgGATQgFAUgBASQABATAFANQAGANAIAIQAMAMAPACQAPACANgCQAZgEASgLQASgLAMgQQAMgRAGgTQAFgTAAgSQAAgTgFgOQgGgNgJgIQgNgMgOgCIgPgBIgNABg");
	this.shape_1.setTransform(85.15,-4.4139);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABiBIAvgGIgwEJIgwAGg");
	this.shape_2.setTransform(61.5,-1.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyBtIinAYIAxkJIAwgHIgpDbIBagNIAqjbIAvgGIgpDaIAdgEIgSBhIgwAGg");
	this.shape_3.setTransform(44.15,2.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYiHIAzgIIAzD7IgzAIIgMhEIhgAOIgmBKIg2AIgAgKAOIBCgJIgRhZg");
	this.shape_4.setTransform(17.075,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BIIg+i3IA3gIIArCHIBSiYIA3gIIihEZIg4AIg");
	this.shape_5.setTransform(-2.925,7.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbhQIgwAHIAJguICNgUIgIAuIgvAHIgpDbIgvAHg");
	this.shape_6.setTransform(-22.75,10.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhOh1IAwgHIgiC2ICRjGIAvgHIgyEJIgvAHIAii2IiRDGIgvAGg");
	this.shape_7.setTransform(-44.925,13.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3CIQgVgFgUgRQgQgQgIgUQgHgUAAgZQAAggALgdQALgeAUgXQAQgSARgMQARgKASgHQARgGASgCQAbgEAWAGQAWAFAQAPQAQAQAHAZIg2AIQgFgMgJgFQgHgGgKgCQgJgCgIAAIgMABQgYAEgSALQgRALgMAQQgMAQgGAUQgFASAAATQAAAHACAKQABAJAEAKQAFAJAIAJQAIAHANAFQANAEATgCQASgDASgKQASgKANgTIA3gIQgRAngfAYQggAZgtAHQgKABgKAAQgNAAgMgCg");
	this.shape_8.setTransform(-70.75,17.0085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-87.6,-32.5,203.8,74.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/jAIBNgLIg4EqIDtlEIBOgLIhRGxIhOALIA5kqIjuFDIhNAMg");
	this.shape.setTransform(89.85,-20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkAIIhti9IBZgMIBbCqIAii8IBNgKIgkC7ICYjMIBdgNIi3DrIBrDEIhaAOIhZitIgjC+IhMALIAji+IiaDPIhgANg");
	this.shape_1.setTransform(42.1,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACjSIBNgLIhQGwIhNALg");
	this.shape_2.setTransform(8.025,-8.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHjPIBxgQIAZgCQAOAAAPADQAPADANAJQANAJAHAQQAJAPgBAYQAAAmgSAdQgTAeghARQAZAEAPASQAPASABAkQAAAbgHAWQgIAWgKAQQgLARgNALQgYAXgZALQgaAKgYADIiOAUgAALASIgxAHIgWBzIA6gIQAMgCAKgGQALgGAJgHQAHgIAHgNQAGgNABgTQAAgHgCgJQgCgIgHgHQgIgIgLgCIgIAAIgMABgAAdiUIgkAFIgSBeIAqgGQARgDAJgEQAKgFAGgGQAHgIAEgKQAFgLABgMQAAgLgEgHQgDgHgFgDQgIgGgKgBIgGAAIgLABg");
	this.shape_3.setTransform(-17.4,-4.6286);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaDeQgjgIgfgdQgbgZgMggQgNgiAAgpQABg0ARgvQASgwAignQAZgdAcgSQAbgSAegKQAcgKAegEQAsgGAjAJQAlAJAZAZQAZAYAMAqIhXANQgIgTgOgKQgNgJgQgDQgOgDgNAAQgNAAgHACQgoAGgdASQgdASgSAaQgUAbgIAfQgKAfABAeQgBAMADAQQADAPAHAQQAGAPAOANQAMANAWAHQAUAIAhgEQAdgEAdgRQAegRAVgeIBagMQgcA+g0AoQgzAohJALQgRADgQAAQgVAAgUgEg");
	this.shape_4.setTransform(-53.85,-0.1617);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhiDdQgkgHgggdQgWgTgOghQgOggAAgwQAAg0ASgvQASgwAignQAlgrArgUQAqgUAvgGQAogHAkAIQAlAIAeAcQAWAUAOAgQAOAhABAwQAAAzgSAvQgTAwghAoQglAqgrAUQgrAVgvAGQgRADgQAAQgWAAgUgFgAARiVQgoAHgdARQgeASgTAbQgTAagKAgQgJAfAAAeQAAAgAJAWQAKAVANAMQAWAUAYADQAYAEAVgEQAogGAdgSQAdgSAUgbQATgaAKggQAJgfAAgeQAAgfgKgWQgJgWgNgMQgWgTgYgEQgMgCgMAAQgLAAgKACg");
	this.shape_5.setTransform(-100.4,6.5079);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-127.3,-60.1,238.89999999999998,105.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvOy+MAkZATNMgqVASwg");
	this.shape.setTransform(0.45,3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-135,-117.8,271,243), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhBmA75MAAAh3xMCDNAAAMAAAB3xg");
	mask.setTransform(419.875,383.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AqvwjIJihQQEHgiDAAhQEWAwCwC9QBkBrA4CUQA5CTAGCqQAHDYhBDXQhBDZh9CxQjBETksCJQjaBllEArIsyBrgAhoqpIibAUIjTUOIDUgaIAMgCQCtgYBugoQCGgxBvhfQCciGBAjEQAyiUgGivQgFiOg5hoQg5hphkguQhbgrhrgDIgSgBQhNAAiKATg");
	this.shape.setTransform(129.4843,392.5998);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhtpTIHEjJIj9X/ImxA6g");
	this.shape_1.setTransform(264.75,401.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("Ag6vpIHFg7MgFTAgOInBA7g");
	this.shape_2.setTransform(624.8,328.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AlkMbQiggnh0hgQhphXg4h8Qg5h8gGiYQgGi1A/ipQA+ilB3iGQB4iGChhVQCmhZC+gZIAEgBQC1gXCdAlQCcAmByBeQBpBYA6CAQA6CAAFCeQAGCyg+CoQg9Cjh2CFQh3CEifBVQilBXi8AaIgEABQhFAJhCAAQhtAAhjgZgAkfjmQh9CVAHC9QACBIAbA7QAcA7AxApQA1AsBHARQBHASBRgKQC2gZCAiYQCBiYgHi2QgFiWhkhTQg0grhHgSQhIgRhRALIgCAAQi8AZh9CUg");
	this.shape_3.setTransform(499.4961,368.2641);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AlCrWIGyg5IgRBlQBMhIBdgvQBegwBegNQAfgDArAAIA4AAIhJG4IguAHQj1AhhiBrQhXBggpD6Ih7LjInCA7g");
	this.shape_4.setTransform(363.15,385.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AqvwjIJihQQEHgiDAAhQEWAwCwC9QBkBrA4CUQA5CTAGCqQAHDYhBDXQhBDZh9CxQjBETksCJQjaBllEArIsyBrgAhoqpIibAUIjTUOIDUgaIAMgCQCtgYBugoQCGgxBvhfQCciGBAjEQAyiUgGivQgFiOg5hoQg5hphkguQhbgrhrgDIgSgBQhNAAiKATg");
	this.shape_5.setTransform(129.4843,392.5998);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhtpTIHEjJIj9X/ImxA6g");
	this.shape_6.setTransform(264.75,401.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6vpIHFg7MgFTAgOInBA7g");
	this.shape_7.setTransform(624.8,328.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlkMbQiggnh0hgQhphXg4h8Qg5h8gGiYQgGi1A/ipQA+ilB3iGQB4iGChhVQCmhZC+gZIAEgBQC1gXCdAlQCcAmByBeQBpBYA6CAQA6CAAFCeQAGCyg+CoQg9Cjh2CFQh3CEifBVQilBXi8AaIgEABQhFAJhCAAQhtAAhjgZgAkfjmQh9CVAHC9QACBIAbA7QAcA7AxApQA1AsBHARQBHASBRgKQC2gZCAiYQCBiYgHi2QgFiWhkhTQg0grhHgSQhIgRhRALIgCAAQi8AZh9CUg");
	this.shape_8.setTransform(499.4961,368.2641);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlCrWIGyg5IgRBlQBMhIBdgvQBegwBegNQAfgDArAAIA4AAIhJG4IguAHQj1AhhiBrQhXBggpD6Ih7LjInCA7g");
	this.shape_9.setTransform(363.15,385.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqvwjIJihQQEHgiDAAhQEWAwCwC9QBkBrA4CUQA5CTAGCqQAHDYhBDXQhBDZh9CxQjBETksCJQjaBllEArIsyBrgAhoqpIibAUIjTUOIDUgaIAMgCQCtgYBugoQCGgxBvhfQCciGBAjEQAyiUgGivQgFiOg5hoQg5hphkguQhbgrhrgDIgSgBQhNAAiKATg");
	this.shape_10.setTransform(129.4843,392.5998);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5253C").s().p("AlKmYIMoF6Iu7G3g");
	this.shape_11.setTransform(305.5,279.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Egu2gO/ILthiQCXgTB6AAQH8AAEkE7QBQBWA8BwICwvQIV3KNIjnBqIBggMQBrgwBpgOQAngFAzgBIEgADIgUB1QB8haCOg6QCTg9CfgVIAGAAQBOgLBQAAQCuAACXAzQCXAzB2BhQBKA/A6BQICSuBINNhuMgF0AjeItnEiIAei3QiFB1iiBKQinBNi5AZIgGABQhPAKhQAAQixAAiZg0Qiag0h4hjQiIhyhLifQhKifgHjCQgDhrARhmQhGAagfBBQgcA5gZCUIiSNvItIBtIABgFIrrBlIA8lnQjXDrkyB8QjdBakzApIwvCMgEgizgDgIgQACIiUOKQCGgUBWggQBkgmBThGQDRi1gLlDQgDhXgdg9Qgdg9gxgYQg+gchPAAQg7AAh/ARgAZEi9Qh1APhOBdQhOBbAEB2QACA+AkAeQAjAdA9AAQAOAAAUgCQBvgPBRhfQBRhggEhvQgChBgjgdQghgcg+AAQgTAAgRADg");
	this.shape_12.setTransform(344.275,365.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AhyB1QgogoAHg+QAHg9AvgwQAwgwA8gGQA9gHAnAnQAnAngGA+QgHA9gwAxQgvAwg8AHIgRAAQgyAAghghgAAMh7QgxAGgoAoQgnAogGAyQgFAzAgAhQAhAgAygFQAxgFAogpQAogoAFgyQAGgzghghQgcgcgpAAIgOABgAgrhJIAygFQAagDAPAKQARALgCAaQgCATgNAOQgMANgTAHIAmA1IgpAEIghgzIgGA4IgiADgAAEgwIgRACIgEAsIARgBQAagDACgWQACgUgVAAIgFAAg");
	this.shape_13.setTransform(689.4505,293.8995);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(1.6,200.9,702.8,329.5), null);


(lib.bgcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78AF2F").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgcopy, new cjs.Rectangle(-150,-300,300,600), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");
	this.shape.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,336,280), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		function func(event) {
			self.gotoAndStop(35);
			//self.mc_choco.gotoAndStop(40);
			//self.btn_buy.gotoAndStop(40);
			//self.mc_frame.stop();
		}
		
		setTimeout(func, 29600);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(435));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,51,255,0.298)").ss(2,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape.setTransform(149.9993,125.0238,0.8929,0.8927);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(435));

	// Symbol 15
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(386.95,168.75,0.7524,0.7524,0,0,0,0.1,0.2);
	this.instance.shadow = new cjs.Shadow("rgba(1,93,20,1)",6,6,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(323).to({_off:false},0).wait(1).to({regX:5.4,regY:3.4,x:255.9,y:198.75},0).wait(1).to({x:237.65,y:202.45},0).wait(1).to({x:228,y:204.45},0).wait(1).to({x:222,y:205.65},0).wait(1).to({x:217.9,y:206.5},0).wait(1).to({x:215,y:207.1},0).wait(1).to({x:212.85,y:207.55},0).wait(1).to({x:211.3,y:207.85},0).wait(1).to({x:210.15,y:208.1},0).wait(1).to({x:209.25,y:208.25},0).wait(1).to({x:208.6,y:208.4},0).wait(1).to({x:208.15,y:208.5},0).wait(1).to({x:207.75,y:208.6},0).wait(1).to({x:207.5,y:208.65},0).wait(1).to({x:207.3},0).wait(1).to({x:207.2,y:208.7},0).wait(1).to({x:207.1},0).wait(1).to({x:207.05,y:208.75},0).wait(1).to({x:207},0).wait(3).to({regX:0.1,regY:0.1,x:203.15,y:206.35},0).wait(78).to({alpha:0},11).wait(1));

	// Symbol 14
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.7,248.85,0.7524,0.7524,0,0,0,-0.1,0.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(1,93,20,1)",2,2,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(323).to({_off:false},0).wait(1).to({regX:0.5,regY:-3,x:76.75,y:227.55},0).wait(1).to({x:88.35,y:225.25},0).wait(1).to({x:94.2,y:224.05},0).wait(1).to({x:97.7,y:223.35},0).wait(1).to({x:99.95,y:222.9},0).wait(1).to({x:101.45,y:222.6},0).wait(1).to({x:102.5,y:222.4},0).wait(1).to({x:103.2,y:222.25},0).wait(1).to({x:103.7,y:222.15},0).wait(1).to({x:104,y:222.1},0).wait(1).to({x:104.25,y:222.05},0).wait(1).to({x:104.35,y:222},0).wait(1).to({x:104.45},0).wait(1).to({x:104.5},0).wait(3).to({regX:0.1,regY:0.1,x:104.1,y:224.4},0).wait(83).to({alpha:0},11).wait(1));

	// Symbol 13
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(189.05,-29.8,0.7524,0.7524,0,0,0,0.1,-0.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(1,93,20,1)",4,4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(323).to({_off:false},0).wait(1).to({regX:1.8,regY:0.8,x:190.3,y:108.7},0).wait(1).to({y:128.5},0).wait(1).to({y:139.3},0).wait(1).to({y:146.3},0).wait(1).to({y:151.15},0).wait(1).to({y:154.75},0).wait(1).to({y:157.4},0).wait(1).to({y:159.5},0).wait(1).to({y:161.1},0).wait(1).to({y:162.35},0).wait(1).to({y:163.35},0).wait(1).to({y:164.15},0).wait(1).to({y:164.75},0).wait(1).to({y:165.25},0).wait(1).to({y:165.65},0).wait(1).to({y:165.95},0).wait(1).to({y:166.15},0).wait(1).to({y:166.35},0).wait(1).to({y:166.45},0).wait(1).to({y:166.55},0).wait(1).to({y:166.65},0).wait(1).to({y:166.7},0).wait(2).to({y:166.75},0).wait(3).to({regX:0.1,regY:0.2,x:189.05,y:166.05},0).wait(73).to({alpha:0},11).wait(1));

	// Layer_11 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3e90MAu9gA5MgGkAwUIhZgLI8HLsIgvBmgAyN1OMAitAAAIAAgJMgitAAAg");
	mask.setTransform(104.65,0.975);

	// Layer_10
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(108.15,237.5,0.7072,0.7072,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(256).to({_off:false},0).wait(1).to({regX:0,regY:0,x:108.1,y:199.0207},0).wait(1).to({y:182.6198},0).wait(1).to({y:171.2988},0).wait(1).to({y:162.6225},0).wait(1).to({y:155.6301},0).wait(1).to({y:149.8249},0).wait(1).to({y:144.9103},0).wait(1).to({y:140.6925},0).wait(1).to({y:137.0362},0).wait(1).to({y:133.8427},0).wait(1).to({y:131.0371},0).wait(1).to({y:128.5611},0).wait(1).to({y:126.368},0).wait(1).to({y:124.4196},0).wait(1).to({y:122.6845},0).wait(1).to({y:121.1359},0).wait(1).to({y:119.7511},0).wait(1).to({y:118.5103},0).wait(1).to({y:117.3963},0).wait(1).to({y:116.3939},0).wait(1).to({y:115.4893},0).wait(1).to({y:114.6704},0).wait(1).to({y:113.926},0).wait(1).to({y:113.2457},0).wait(1).to({y:112.6201},0).wait(1).to({y:112.0403},0).wait(1).to({y:111.4981},0).wait(1).to({y:110.9854},0).wait(1).to({y:110.4946},0).wait(1).to({y:110.0186},0).wait(1).to({y:109.5501},0).wait(1).to({y:109.0822},0).wait(1).to({y:108.6081},0).wait(1).to({y:108.1207},0).wait(1).to({y:107.6133},0).wait(1).to({y:107.0789},0).wait(1).to({y:106.5103},0).wait(1).to({y:105.9002},0).wait(1).to({y:105.2409},0).wait(1).to({y:104.5247},0).wait(1).to({y:103.7431},0).wait(1).to({y:102.8872},0).wait(1).to({y:101.9477},0).wait(1).to({y:100.9144},0).wait(1).to({y:99.7762},0).wait(1).to({y:98.5211},0).wait(1).to({y:97.1358},0).wait(1).to({y:95.6057},0).wait(1).to({y:93.9143},0).wait(1).to({y:92.0429},0).wait(1).to({y:89.9705},0).wait(1).to({y:87.6726},0).wait(1).to({y:85.1209},0).wait(1).to({y:82.2818},0).wait(1).to({y:79.1155},0).wait(1).to({y:75.5735},0).wait(1).to({y:71.5959},0).wait(1).to({y:67.1072},0).wait(1).to({y:62.0095},0).wait(1).to({y:56.1725},0).wait(1).to({y:49.415},0).wait(1).to({y:41.4722},0).wait(1).to({y:31.9289},0).wait(1).to({y:20.0622},0).wait(1).to({y:4.3786},0).wait(1).to({y:-19.5346},0).wait(1).to({regX:0.1,regY:-0.3,x:108.15,y:-70.15},0).wait(112));

	// Layer_8
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(103.95,237.5,0.7072,0.7072,0,0,0,0.2,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211).to({_off:false},0).wait(1).to({regX:0,regY:0,x:103.8,y:199.0207},0).wait(1).to({y:182.6198},0).wait(1).to({y:171.2988},0).wait(1).to({y:162.6225},0).wait(1).to({y:155.6301},0).wait(1).to({y:149.8249},0).wait(1).to({y:144.9103},0).wait(1).to({y:140.6925},0).wait(1).to({y:137.0362},0).wait(1).to({y:133.8427},0).wait(1).to({y:131.0371},0).wait(1).to({y:128.5611},0).wait(1).to({y:126.368},0).wait(1).to({y:124.4196},0).wait(1).to({y:122.6845},0).wait(1).to({y:121.1359},0).wait(1).to({y:119.7511},0).wait(1).to({y:118.5103},0).wait(1).to({y:117.3963},0).wait(1).to({y:116.3939},0).wait(1).to({y:115.4893},0).wait(1).to({y:114.6704},0).wait(1).to({y:113.926},0).wait(1).to({y:113.2457},0).wait(1).to({y:112.6201},0).wait(1).to({y:112.0403},0).wait(1).to({y:111.4981},0).wait(1).to({y:110.9854},0).wait(1).to({y:110.4946},0).wait(1).to({y:110.0186},0).wait(1).to({y:109.5501},0).wait(1).to({y:109.0822},0).wait(1).to({y:108.6081},0).wait(1).to({y:108.1207},0).wait(1).to({y:107.6133},0).wait(1).to({y:107.0789},0).wait(1).to({y:106.5103},0).wait(1).to({y:105.9002},0).wait(1).to({y:105.2409},0).wait(1).to({y:104.5247},0).wait(1).to({y:103.7431},0).wait(1).to({y:102.8872},0).wait(1).to({y:101.9477},0).wait(1).to({y:100.9144},0).wait(1).to({y:99.7762},0).wait(1).to({y:98.5211},0).wait(1).to({y:97.1358},0).wait(1).to({y:95.6057},0).wait(1).to({y:93.9143},0).wait(1).to({y:92.0429},0).wait(1).to({y:89.9705},0).wait(1).to({y:87.6726},0).wait(1).to({y:85.1209},0).wait(1).to({y:82.2818},0).wait(1).to({y:79.1155},0).wait(1).to({y:75.5735},0).wait(1).to({y:71.5959},0).wait(1).to({y:67.1072},0).wait(1).to({y:62.0095},0).wait(1).to({y:56.1725},0).wait(1).to({y:49.415},0).wait(1).to({y:41.4722},0).wait(1).to({y:31.9289},0).wait(1).to({y:20.0622},0).wait(1).to({y:4.3786},0).wait(1).to({y:-19.5346},0).wait(1).to({regX:0.2,regY:-0.3,x:103.95,y:-70.15},0).to({_off:true},1).wait(156));

	// Layer_7
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(107.5,245.25,0.7072,0.7072,0,0,0,0.2,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).wait(1).to({regX:0,regY:0,x:107.35,y:206.7777},0).wait(1).to({y:190.3798},0).wait(1).to({y:179.0609},0).wait(1).to({y:170.3861},0).wait(1).to({y:163.395},0).wait(1).to({y:157.5908},0).wait(1).to({y:152.6772},0).wait(1).to({y:148.4601},0).wait(1).to({y:144.8045},0).wait(1).to({y:141.6115},0).wait(1).to({y:138.8065},0).wait(1).to({y:136.3309},0).wait(1).to({y:134.1382},0).wait(1).to({y:132.1902},0).wait(1).to({y:130.4554},0).wait(1).to({y:128.9071},0).wait(1).to({y:127.5226},0).wait(1).to({y:126.282},0).wait(1).to({y:125.1682},0).wait(1).to({y:124.1659},0).wait(1).to({y:123.2616},0).wait(1).to({y:122.4428},0).wait(1).to({y:121.6985},0).wait(1).to({y:121.0183},0).wait(1).to({y:120.3928},0).wait(1).to({y:119.8132},0).wait(1).to({y:119.271},0).wait(1).to({y:118.7584},0).wait(1).to({y:118.2678},0).wait(1).to({y:117.7918},0).wait(1).to({y:117.3234},0).wait(1).to({y:116.8556},0).wait(1).to({y:116.3815},0).wait(1).to({y:115.8943},0).wait(1).to({y:115.387},0).wait(1).to({y:114.8526},0).wait(1).to({y:114.2841},0).wait(1).to({y:113.6741},0).wait(1).to({y:113.015},0).wait(1).to({y:112.2989},0).wait(1).to({y:111.5175},0).wait(1).to({y:110.6618},0).wait(1).to({y:109.7224},0).wait(1).to({y:108.6893},0).wait(1).to({y:107.5513},0).wait(1).to({y:106.2964},0).wait(1).to({y:104.9114},0).wait(1).to({y:103.3816},0).wait(1).to({y:101.6904},0).wait(1).to({y:99.8194},0).wait(1).to({y:97.7474},0).wait(1).to({y:95.4499},0).wait(1).to({y:92.8986},0).wait(1).to({y:90.0601},0).wait(1).to({y:86.8944},0).wait(1).to({y:83.353},0).wait(1).to({y:79.3761},0).wait(1).to({y:74.8882},0).wait(1).to({y:69.7915},0).wait(1).to({y:63.9555},0).wait(1).to({y:57.1993},0).wait(1).to({y:49.2579},0).wait(1).to({y:39.7163},0).wait(1).to({y:27.8518},0).wait(1).to({y:12.171},0).wait(1).to({y:-11.7378},0).wait(1).to({regX:0.2,regY:-0.1,x:107.5,y:-62.3},0).to({_off:true},1).wait(207));

	// Layer_4
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(105.75,239.6,0.7072,0.7072,0,0,0,0.2,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(107).to({_off:false},0).wait(1).to({regX:0,regY:0,x:105.6,y:201.1295},0).wait(1).to({y:184.7324},0).wait(1).to({y:173.414},0).wait(1).to({y:164.7397},0).wait(1).to({y:157.7489},0).wait(1).to({y:151.945},0).wait(1).to({y:147.0316},0).wait(1).to({y:142.8147},0).wait(1).to({y:139.1593},0).wait(1).to({y:135.9665},0).wait(1).to({y:133.1616},0).wait(1).to({y:130.6861},0).wait(1).to({y:128.4935},0).wait(1).to({y:126.5456},0).wait(1).to({y:124.8109},0).wait(1).to({y:123.2627},0).wait(1).to({y:121.8782},0).wait(1).to({y:120.6377},0).wait(1).to({y:119.5239},0).wait(1).to({y:118.5217},0).wait(1).to({y:117.6174},0).wait(1).to({y:116.7986},0).wait(1).to({y:116.0544},0).wait(1).to({y:115.3742},0).wait(1).to({y:114.7488},0).wait(1).to({y:114.1692},0).wait(1).to({y:113.627},0).wait(1).to({y:113.1144},0).wait(1).to({y:112.6238},0).wait(1).to({y:112.1479},0).wait(1).to({y:111.6795},0).wait(1).to({y:111.2117},0).wait(1).to({y:110.7377},0).wait(1).to({y:110.2504},0).wait(1).to({y:109.7432},0).wait(1).to({y:109.2088},0).wait(1).to({y:108.6404},0).wait(1).to({y:108.0304},0).wait(1).to({y:107.3713},0).wait(1).to({y:106.6553},0).wait(1).to({y:105.8738},0).wait(1).to({y:105.0182},0).wait(1).to({y:104.0789},0).wait(1).to({y:103.0458},0).wait(1).to({y:101.9078},0).wait(1).to({y:100.653},0).wait(1).to({y:99.2681},0).wait(1).to({y:97.7383},0).wait(1).to({y:96.0473},0).wait(1).to({y:94.1764},0).wait(1).to({y:92.1044},0).wait(1).to({y:89.807},0).wait(1).to({y:87.2559},0).wait(1).to({y:84.4175},0).wait(1).to({y:81.2519},0).wait(1).to({y:77.7107},0).wait(1).to({y:73.734},0).wait(1).to({y:69.2463},0).wait(1).to({y:64.1498},0).wait(1).to({y:58.3142},0).wait(1).to({y:51.5582},0).wait(1).to({y:43.6172},0).wait(1).to({y:34.0761},0).wait(1).to({y:22.2121},0).wait(1).to({y:6.5321},0).wait(1).to({y:-17.3755},0).wait(1).to({regX:0.2,regY:-0.2,x:105.75,y:-68},0).to({_off:true},1).wait(260));

	// ситуацію!
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(389.8,182.15,0.7524,0.7524,0,0,0,0.1,0.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(1,93,20,1)",3,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:17,regY:5.8,x:263.1,y:208.65},0).wait(1).to({x:244.55,y:211.6},0).wait(1).to({x:234.8,y:213.15},0).wait(1).to({x:228.8,y:214.15},0).wait(1).to({x:224.7,y:214.8},0).wait(1).to({x:221.85,y:215.25},0).wait(1).to({x:219.8,y:215.55},0).wait(1).to({x:218.3,y:215.8},0).wait(1).to({x:217.2,y:216},0).wait(1).to({x:216.35,y:216.1},0).wait(1).to({x:215.75,y:216.2},0).wait(1).to({x:215.3,y:216.3},0).wait(1).to({x:215,y:216.35},0).wait(1).to({x:214.75,y:216.4},0).wait(1).to({x:214.6},0).wait(1).to({x:214.5},0).wait(1).to({x:214.45,y:216.45},0).wait(1).to({x:214.4},0).wait(3).to({regX:0.1,regY:0.1,x:201.7,y:212.25},0).wait(70).to({alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(332));

	// Освіжи
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(196.55,-33.05,0.7524,0.7524,0,0,0,0.1,-0.1);
	this.instance_8.shadow = new cjs.Shadow("rgba(1,93,20,1)",6,6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-2.9,regY:-4.8,x:194.25,y:113.55},0).wait(1).to({y:134.9},0).wait(1).to({y:146.45},0).wait(1).to({y:153.9},0).wait(1).to({y:159.05},0).wait(1).to({y:162.85},0).wait(1).to({y:165.65},0).wait(1).to({y:167.8},0).wait(1).to({y:169.45},0).wait(1).to({y:170.75},0).wait(1).to({y:171.8},0).wait(1).to({y:172.6},0).wait(1).to({y:173.2},0).wait(1).to({y:173.7},0).wait(1).to({y:174.05},0).wait(1).to({y:174.35},0).wait(1).to({y:174.6},0).wait(1).to({y:174.75},0).wait(1).to({y:174.85},0).wait(1).to({y:174.95},0).wait(1).to({y:175},0).wait(1).to({y:175.05},0).wait(4).to({regX:0.1,regY:0.2,x:196.55,y:178.65},0).wait(65).to({alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(332));

	// logo
	this.instance_9 = new lib.ClipGroup();
	this.instance_9.parent = this;
	this.instance_9.setTransform(119.5,109.95,0.2627,0.2627,0,0,0,419.4,389.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(91).to({alpha:0},11,cjs.Ease.get(-1)).wait(215).to({alpha:1},13,cjs.Ease.get(1)).wait(105));

	// 004
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92C020").s().p("AqwvuIZ9QXI4hsnIl4btg");
	this.shape_1.setTransform(107.2,108.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEB00").s().p("AMDCXI58wXIeBQ2MggPALLg");
	this.shape_2.setTransform(127.35,97.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C51718").s().p("ArWt2IjqYRMAgPgLJMgidAOlg");
	this.shape_3.setTransform(120.225,120.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(435));

	// white
	this.instance_10 = new lib.Symbol2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(113.85,109.35,0.7072,0.7072,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91).to({alpha:0},11,cjs.Ease.get(-1)).wait(206).to({alpha:1},22,cjs.Ease.get(1)).wait(105));

	// Layer_3
	this.instance_11 = new lib.Symbol19();
	this.instance_11.parent = this;
	this.instance_11.setTransform(153.25,120.15,0.75,0.75,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(435));

	// Layer 1
	this.instance_12 = new lib.Symbol17();
	this.instance_12.parent = this;
	this.instance_12.setTransform(149,109.65,0.5845,0.5845,0.9947,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(435));

	// bg
	this.instance_13 = new lib.bgcopy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(269.95,208.3,0.9996,0.4166,0,0,0,120.1,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(435));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A6OV4MAAAgrvMA0eAAAMAAAArvg");
	this.shape_4.setTransform(149.9993,125.0238,0.8929,0.8927);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(435));

	// BG
	this.bg_mc = new lib.BG();
	this.bg_mc.name = "bg_mc";
	this.bg_mc.parent = this;
	this.bg_mc.setTransform(0,0.05,0.8925,0.8926);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(435));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.4,-7.2,437.40000000000003,312.59999999999997);
// library properties:
lib.properties = {
	id: 'A2FCA0D04764FF43BCB22F79EB65A874',
	width: 300,
	height: 250,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"300x250_atlas_.png", id:"300x250_atlas_"}
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
an.compositions['A2FCA0D04764FF43BCB22F79EB65A874'] = {
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