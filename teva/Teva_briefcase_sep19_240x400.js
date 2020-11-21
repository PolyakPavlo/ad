(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,511);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,508);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,512);


(lib.bg4 = function() {
	this.initialize(img.bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,512);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,491,613);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,188);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,99);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,101);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,88);


(lib.p5 = function() {
	this.initialize(img.p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,100);


(lib.p6 = function() {
	this.initialize(img.p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,88);


(lib.p7 = function() {
	this.initialize(img.p7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.p8 = function() {
	this.initialize(img.p8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,100);


(lib.samolik = function() {
	this.initialize(img.samolik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,93);// helper functions:

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


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-45,0,45).s().p("EgmrAHCIAAuDMBNXAAAIAAODg");
	this.shape.setTransform(141.3,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-45,0,45).s().p("EgmrAHCIAAuDMBNXAAAIAAODg");
	this.shape_1.setTransform(141.3,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-106.3,-1.6,495.2,512.7), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-88,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-88,-55,491,613), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,300,512), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C7F49").s().p("AL3BUIAAh9IAUAAIAAALIAAAAIAGgHIAKgFQAGgCAIAAQAMAAAJAGQAJAFAFAKQAFALAAAMQAAALgFAKQgFALgJAGQgJAGgNAAQgJAAgHgEQgIgEgEgFIAAAAIAAA1gAMXgXQgGAFgDAFQgDAHAAAGQAAAGADAGQADAGAGAEQAFAEAIABQAIgBAFgEQAGgDACgHQADgGAAgGQAAgGgDgHQgCgGgGgEQgFgDgIgBQgIABgFADgAAwBCIAAgZIhHAAIAAhSIAVAAIAABBIAiAAIAAhBIAVAAIAABBIAMAAIAAAqgAHqAnQgKgHgGgKQgGgKAAgMQAAgNAGgKQAGgKAKgGQALgFANAAQAMAAALAFQAKAGAGAKQAGAKAAANQAAAMgGAKQgGAKgKAHQgLAFgMAAQgNAAgLgFgAH0gXQgFAEgDAGQgDAHAAAGQAAAGADAGQADAHAFADQAFAEAJABQAIgBAFgEQAGgDACgHQADgGAAgGQAAgGgDgHQgCgGgGgEQgFgDgIgBQgJABgFADgAkzAnQgKgFgGgLQgGgKAAgNQAAgMAGgLQAGgKAKgGQAKgFAMAAQAMAAAJAFQAKAFAFALQAFAKAAAOIAAACIAAADIhAAAQAAAGAEAFQADAEAFADQAGADAGAAQAIAAAFgDQAGgDADgFIAOALQgGAIgJAFQgJAEgMAAQgNAAgKgFgAkJgIQAAgFgCgFQgCgEgFgDQgEgDgHgBQgJABgHAFQgGAGgBAJIArAAIAAAAgAplAnQgKgHgGgKQgGgKAAgMQAAgNAGgKQAGgKAKgGQALgFANAAQAMAAALAFQAKAGAGAKQAGAKAAANQAAAMgGAKQgGAKgKAHQgLAFgMAAQgNAAgLgFgApbgXQgFAEgDAGQgDAHAAAGQAAAGADAGQADAHAFADQAFAEAJABQAIgBAFgEQAGgDACgHQADgGAAgGQAAgGgDgHQgCgGgGgEQgFgDgIgBQgJABgFADgAs5AnQgKgHgGgKQgGgKAAgMQAAgNAGgKQAGgKAKgGQALgFANAAQAMAAALAFQAKAGAGAKQAGAKAAANQAAAMgGAKQgGAKgKAHQgLAFgMAAQgNAAgLgFgAsvgXQgFAEgDAGQgDAHAAAGQAAAGADAGQADAHAFADQAFAEAJABQAIgBAFgEQAGgDACgHQADgGAAgGQAAgGgDgHQgCgGgGgEQgFgDgIgBQgJABgFADgAPXApQgHgCgFgGQgFgGAAgJQAAgKAFgFQAFgFAJgDQAIgDALgBIAUgBIAAgCQAAgFgDgEQgDgDgEgCQgEgCgGAAQgGABgGADQgGACgFAEIgKgNQAHgGAJgEQAJgDAKAAQAPAAAIAFQAIAGAEAIQADAIAAAJIAAAxIgUAAIAAgKIAAAAQgEAFgHAEQgGADgKAAQgHAAgHgCgAPwADIgKACQgFACgDADQgDACAAAFQAAAEACACQACADAEABIAHABQAKAAAGgGQAGgGAAgKIAAgDIgFAAIgLAAgADyApQgHgCgFgGQgFgGAAgJQAAgKAFgFQAFgFAJgDQAIgDALgBIAUgBIAAgCQAAgFgDgEQgDgDgEgCQgEgCgGAAQgGABgGADQgGACgFAEIgKgNQAHgGAJgEQAJgDAKAAQAPAAAIAFQAIAGAEAIQADAIAAAJIAAAxIgUAAIAAgKIAAAAQgEAFgHAEQgGADgKAAQgHAAgHgCgAELADIgKACQgFACgDADQgDACAAAFQAAAEACACQACADAEABIAHABQAKAAAGgGQAGgGAAgKIAAgDIgFAAIgLAAgAQzAnQgEgEAAgFQAAgHAEgDQAEgEAGgBQAGABAEAEQAEADAAAGQAAAGgEAEQgEADgGAAQgGAAgEgDgArjAqIgFAAIgDgBIABgRIADAAIADABQAFAAADgDQAEgEACgHQACgJAAgOIAAgdIBFAAIAABSIgVAAIAAhBIgcAAIAAARQAAAZgHAMQgIAMgQAAIgEAAgAOeApIAAgjIgkAAIAAAjIgVAAIAAhSIAVAAIAAAfIAkAAIAAgfIAVAAIAABSgALIApIAAhSIAVAAIAABSgAKaApIAAg6IAAAAIgaA6IgOAAIgag6IAAAAIAAA6IgVAAIAAhSIAeAAIAYA3IAYg3IAeAAIAABSgAGrApIAAhBIgkAAIAABBIgVAAIAAhSIBOAAIAABSgAC5ApIAAgjIgkAAIAAAjIgVAAIAAhSIAVAAIAAAfIAkAAIAAgfIAVAAIAABSgABSApIAAhSIAVAAIAABSgAlyApIAAgjIgkAAIAAAjIgVAAIAAhSIAVAAIAAAfIAkAAIAAgfIAVAAIAABSgAoMApIAAhSIAsAAIANABQAHACAEAFQAFAFAAAIQAAAHgEAFQgEAFgGABIAAAAQAIABAFAFQAFAFAAAJQAAAIgEAFQgEAFgIADQgHADgJgBgAn3AbIAUAAQAHAAAEgDQAEgCAAgGQAAgFgEgCQgEgDgGAAIgVAAgAn3gIIAUAAQAFAAADgCQAEgCAAgFQAAgFgEgCQgDgCgGAAIgTAAgAuVApIAAhSIA7AAIAAARIgmAAIAABBgAvlApIgMgcIg1AAIgMAcIgYAAIA2h7IATAAIA1B7gAv4gFIgTgyIgUAyIAnAAgAQyADIAAhVIAVAAIAABVgAi8ACIAAgNIBnAAIAAANgALJg9QgEgEAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEADQgEADgGAAQgFAAgEgDgABTg9QgEgEAAgFQAAgFAEgEQADgEAGAAQAGAAAEAEQADADABAGQgBAGgDADQgEADgGAAQgGAAgDgDg");
	this.shape.setTransform(111.8,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,225.5,27.3), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,300,512), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,300,508), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,101,99), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,102,101), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,102,88), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,102,88), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,94,100), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,101,100), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,102,102), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(45.2,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,90.3,93.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,157,188), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C7F49").s().p("AHzDIIAAh6IAQAAIAAANIAAAAQAEgGAIgEQAHgFAKAAQAMABAJAFQAJAGAFAJQAFAKABAMQgBAMgFAJQgEAJgKAHQgJAFgMAAQgJAAgHgEQgIgDgEgHIgBAAIAAA1gAIPBdQgGAEgEAHQgDAHAAAIQAAAHADAHQAEAGAGAFQAGAEAIAAQAJAAAGgEQAGgFADgGQADgHAAgHQAAgIgDgHQgDgHgGgEQgGgDgJAAQgIAAgGADgAmJDIIAAh6IAQAAIAAANIAAAAQAEgGAIgEQAHgFAKAAQAMABAJAFQAJAGAFAJQAFAKABAMQgBAMgFAJQgEAJgKAHQgJAFgMAAQgJAAgHgEQgIgDgEgHIgBAAIAAA1gAltBdQgGAEgEAHQgDAHAAAIQAAAHADAHQAEAGAGAFQAGAEAIAAQAJAAAGgEQAGgFADgGQADgHAAgHQAAgIgDgHQgDgHgGgEQgGgDgJAAQgIAAgGADgAFyCdQgJgDgGgIIgFgJIgDgMIgBgSIABgaQACgMAEgJQADgJAIgFQAHgFAMgCIAXgDQAGAAAEgDQADgBACgEIALADQgCAJgFAEQgFAEgJABIgWADQgKABgHAEQgHAEgDAJQgDAJgBARIABAAQAFgKAJgFQAJgEALgBQAMABAJAFQAJAGAFAIQAFAKAAANQAAAMgGAKQgFAKgKAFQgKAFgMAAQgMAAgIgEgAF3BdQgGAEgDAHQgDAGAAAJQAAAHADAIQADAGAGAEQAGADAJABQAIgBAGgDQAGgEADgGQAEgIAAgHQAAgJgEgGQgDgHgGgEQgGgDgJAAQgIAAgGADgAkNCcQgKgGgFgKQgGgJAAgMQAAgNAGgKQAFgJAKgFQAKgGAMAAQAMAAAKAGQAKAFAGAJQAFAKABANQgBAMgFAJQgGAKgKAGQgKAFgMAAQgMAAgKgFgAkFBdQgHAEgDAHQgDAHAAAIQAAAHADAHQADAGAHAFQAFAEAJAAQAJAAAGgEQAGgFADgGQADgHAAgHQAAgIgDgHQgDgHgGgEQgGgDgJAAQgJAAgFADgArxCcQgJgFgGgKQgFgKAAgMQAAgNAFgKQAGgJAJgFQAKgGANAAQAJAAAIAEQAJACAFAHIgFAEIgGAGQgDgEgFgDQgFgCgIAAQgGAAgGACQgFADgEAFQgDAFgBAGIAjAAIAAAMIgkAAQACAMAHAGQAHAH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");
	this.shape.setTransform(102.1,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,205.1,47.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak5A5IAAgWIhGAAIAAAWIgLAAIAAgiIAHAAQAIgHADgOQAEgNAAgUIAAgZIA8AAIAABPIALAAIAAAigAlngfQAAAPgCALQgCAKgDAHQgDAIgDADIAwAAIAAhEIgjAAgAFJAgQgHgEgFgGQgEgIAAgKQAAgIAEgIQAFgHAHgEQAIgFAJAAQAGAAAHAEQAGACAEAFIgJAHQgCgDgEgCQgEgCgEAAQgHAAgEADQgEADgDAFQgCAFAAAFQAAAGACAFQADAFAEADQAEADAHAAQAFAAADgCQAEgBADgDIAIAHQgEAEgFADQgHADgHAAQgJgBgIgEgABaAgQgHgEgEgGQgEgIgBgKQABgIAEgIQAEgHAHgEQAIgFAKAAQAGAAAGAEQAHACADAFIgJAHQgBgDgEgCQgEgCgEAAQgHAAgEADQgFADgCAFQgCAFAAAFQAAAGACAFQACAFAFADQAEADAHAAQAEAAAEgCQAEgBADgDIAHAHQgEAEgFADQgGADgHAAQgKgBgIgEgAF9AjIAAg8IANAAIAAA8gAD2AjIAAg8IAfAAIAJABQAFABADADQADAEAAAGQAAAFgDADQgDADgEACQAFABAEADQAEAEAAAGQAAAJgGAFQgHAEgKAAgAEDAZIAQAAQAFAAAEgCQADgCABgFQAAgEgDgCQgEgCgFAAIgRAAgAEDAAIARAAIAEgBIADgDQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgCgFAAIgPAAgAC0AjIAAgXIgNAAIgOAXIgPAAIAQgYQgHgCgDgEQgEgFAAgGQAAgHADgEQADgEAGgCQAFgCAHAAIAcAAIAAA8gACbgNQgDABAAAGQAAAFADABQAEACAHABIAOAAIAAgTIgOAAQgHAAgEADgAAtAjIAAgsIggAsIgNAAIAAg8IAMAAIAAArIAggrIANAAIAAA8gAgtAjIAAgyIgWAAIAAgKIA2AAIAAAKIgVAAIAAAygAhcAjIAAgsIggAsIgNAAIAAg8IAMAAIAAArIAggrIANAAIAAA8gAjQAjIAAg8IAeAAIAKABQAEABAEADQADAEAAAGQAAAFgDADQgDADgFACQAHABADADQAEAEAAAGQAAAJgHAFQgGAEgKAAgAjEAZIARAAQAGAAADgCQAEgCgBgFQAAgEgDgCQgDgCgGAAIgRAAgAjEAAIARAAIAFgBIAEgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgCgFAAIgQAAgAjyAjIAAgsIgfAsIgOAAIAAg8IANAAIAAArIAggrIANAAIAAA8gAF9gqQgBgCgBgEQABgDABgDQADgBAEgBQACABADABQACADABADQgBAEgCACQgDACgCAAQgEAAgDgCg");
	this.shape.setTransform(98.5,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#378A40","#85C455"],[0,1],-98.5,0,98.5,0).s().p("Ar9DbQhbAAhAhAQhAhAAAhbIAAAAQAAhaBAhAQBAhABbAAIX7AAQBbAABABAQBABAAABaIAAAAQAABbhABAQhABAhbAAg");
	this.shape_1.setTransform(98.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12_1, new cjs.Rectangle(0,0,197,43.8), null);


(lib.Symbol11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C7F49").s().p("AFPCoIAAhrIAOAAIAAALIAAAAQAEgGAGgEQAHgDAJAAQAKAAAIAFQAIAFAFAIQAEAIAAALQAAALgEAIQgEAJgIAFQgIAFgLAAQgIAAgHgEQgGgDgFgGIAAAvgAFoBKQgGAEgDAFQgDAGAAAHQAAAHADAGQADAGAGADQAFAEAHAAQAIAAAFgEQAFgDADgGQADgGAAgHQAAgHgDgGQgDgFgFgEQgFgEgIAAQgHAAgFAEgAK7CaIAAgWIg+AAIAAhHIAOAAIAAA7IAjAAIAAg7IAOAAIAAA7IALAAIAAAigAhNCYIALgmIAOAAIgNAmgANfCEQgGgDgEgEQgEgFAAgIQAAgIAEgFQAEgFAHgCQAIgDAIgBIASAAIAAgCQAAgIgFgEQgEgEgIAAQgGAAgGACIgJAGIgHgJQAFgFAIgCQAHgDAJAAQAKAAAHADQAGAEADAGQAEAHAAAIIAAAfIAAAHIABAHIgNAAIgBgFIAAgFIgBAAQgEAFgGADQgGAEgIAAQgFAAgGgCgAN0BiIgKACQgFABgDADQgDADAAAEQAAAEACADQACACAEABQADACAEgBQAKAAAFgFQAFgGAAgJIAAgEIgDAAIgLAAgAIPCEQgGgDgEgEQgEgFAAgIQAAgIAEgFQAEgFAHgCQAIgDAIgBIASAAIAAgCQAAgIgFgEQgEgEgIAAQgGAAgGACIgJAGIgHgJQAFgFAIgCQAHgDAJAAQAKAAAHADQAGAEADAGQAEAHAAAIIAAAfIAAAHIABAHIgNAAIgBgFIAAgFIgBAAQgEAFgGADQgGAEgIAAQgFAAgGgCgAIkBiIgKACQgFABgDADQgDADAAAEQAAAEACADQACACAEABQADACAEgBQAKAAAFgFQAFgGAAgJIAAgEIgDAAIgLAAgABrCBQgIgFgFgIQgFgJAAgLQAAgLAFgIQAFgJAIgFQAJgEALAAQALAAAJAEQAIAFAFAJQAFAIAAALQAAALgFAJQgFAIgIAFQgJAFgLAAQgLAAgJgFgAByBKQgFAEgDAFQgDAGAAAHQAAAHADAGQADAGAFADQAFAEAIAAQAIAAAFgEQAFgDADgGQADgGAAgHQAAgHgDgGQgDgFgFgEQgFgEgIAAQgIAAgFAEgAkSCBQgJgFgFgIQgFgIAAgMQAAgLAFgIQAFgJAJgFQAIgEALAAQAIAAAHADQAHADAFAFIgKAJQgDgEgEgCQgEgCgGAAQgHAAgFADQgFAEgDAFQgDAGAAAHQAAAHADAGQADAGAFADQAFAEAHAAQAGAAAEgCQAFgCADgEIAJAJQgFAFgGADQgHADgJAAQgLAAgIgFgApWCEQgGgDgEgEQgEgFAAgIQAAgIAEgFQAEgFAHgCQAIgDAIgBIASAAIAAgCQAAgIgFgEQgEgEgIAAQgGAAgGACIgJAGIgHgJQAFgFAIgCQAHgDAJAAQAKAAAHADQAGAEADAGQAEAHAAAIIAAAfIAAAHIABAHIgNAAIgBgFIAAgFIgBAAQgEAFgGADQgGAEgIAAQgFAAgGgCgApBBiIgKACQgFABgDADQgDADAAAEQAAAEACADQACACAEABQADACAEgBQAKAAAFgFQAFgGAAgJIAAgEIgDAAIgLAAgAr8CBQgIgFgFgIQgFgJAAgLQAAgLAFgIQAFgJAIgFQAJgEALAAQALAAAJAEQAIAFAFAJQAFAIAAALQAAALgFAJQgFAIgIAFQgJAFgLAAQgLAAgJgFgAr1BKQgFAEgDAFQgDAGAAAHQAAAHADAGQADAGAFADQAFAEAIAAQAIAAAFgEQAFgDADgGQADgGAAgHQAAgHgDgGQgDgFgFgEQgFgEgIAAQgIAAgFAEgAtGCBQgIgFgFgIQgFgIAAgMQAAgLAFgIQAFgJAIgFQAJgEALAAQAHAAAIADQAHADAEAFIgKAJQgCgEgFgCQgEgCgFAAQgIAAgFADQgFAEgDAFQgCAGAAAHQAAAHACAGQADAGAFADQAGAEAHAAQAFAAAFgCQAEgCADgEIAKAJQgFAFgHADQgGADgJAAQgLAAgJgFgAOtCCQgDgDAAgEQAAgEADgDQADgDAEAAQAFAAACADQADADAAAEQAAAEgDADQgCACgFABQgEgBgDgCgAMvCEIAAggIgjAAIAAAgIgOAAIAAhHIAOAAIAAAcIAjAAIAAgcIAOAAIAABHgALXCEIAAhHIAOAAIAABHgAHfCEIAAggIgjAAIAAAgIgOAAIAAhHIAOAAIAAAcIAjAAIAAgcIAOAAIAABHgAEoCEIAAhHIAOAAIAABHgAECCEIAAg3IgBAAIgZA3IgIAAIgZg3IAAA3IgOAAIAAhHIAUAAIAXA0IAXg0IAVAAIAABHgAA3CEIAAg8IgjAAIAAA8IgOAAIAAhHIA/AAIAABH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");
	this.shape.setTransform(105.7,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(0,-29.6,212.1,40.8), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(51,44,1,1,0,0,0,51,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,102,88), null);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btn = new lib.Symbol12_1();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(98.5,21.9,1,1,0,0,0,98.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.btn).to({regY:21.8,scaleX:1.04,scaleY:1.04,x:98.6},25,cjs.Ease.get(1)).to({regY:21.9,scaleX:1,scaleY:1,x:98.5},26,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,43.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

	// Symbol 12
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(-131.3,446.5,4.263,4.263,0,0,0,51,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:84,y:223},30,cjs.Ease.get(1)).wait(1));

	// Symbol 6
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.5,-286.7,4.263,4.263,0,0,0,51,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:148,y:51},30,cjs.Ease.get(1)).wait(1));

	// Symbol 13
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-165.4,-135.3,4.263,4.263,0,0,0,51,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:76,y:86.5},30,cjs.Ease.get(1)).wait(1));

	// Symbol 14
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-274.1,167.3,4.263,4.263,0,0,0,50.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:50.5,y:157.5},30,cjs.Ease.get(1)).wait(1));

	// Symbol 10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(465.5,446.5,4.263,4.263,0,0,0,51,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:224,y:223},30,cjs.Ease.get(1)).wait(1));

	// Symbol 8
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(589.1,152.4,4.263,4.263,0,0,0,47,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,x:253,y:154},30,cjs.Ease.get(1)).wait(1));

	// Symbol 7
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(467.6,-150.3,4.263,4.263,0,0,0,50.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:224.5,y:83},30,cjs.Ease.get(1)).wait(1));

	// Symbol 11
	this.instance_7 = new lib.Symbol11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(156.5,597.9,4.263,4.263,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:151.5,y:258.5},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.4,-504.1,1279,1317.3);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		var _this=this
		var __this = this.parent
		var count1 = 0;
		
		
		var main_tl = new TimelineMax()
		
		
			.to([this.cover], 0.9,{ alpha:0,ease:Power2.easeIn},'+=0.0')
			.staggerFrom([this.logo], 0.7,{x:"+=80",y:"-=80",ease:Power2.easeOut},'0.0','-=0.2')
			.staggerFrom([this.t1], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')
			
			.staggerTo([this.t1], 0.5,{ alpha:0,x:"+=20",ease:Power2.easeIn},'0.0','+=1.2')
			.staggerFrom([this.bg2], 0.7,{ alpha:0,ease:Power0.easeOut},'0.0','-=0.2')
			.staggerFrom([this.t2], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')
			
			.addCallback(function(){_this.pic.play()},'-=0.4')
			
			.staggerFrom([this.bg3], 0.7,{ alpha:0,ease:Power0.easeOut},'0.0','+=2.6')
			.staggerFrom([this.t3], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')
			
			.staggerTo([this.t3], 0.5,{ alpha:0,x:"+=20",ease:Power2.easeIn},'0.0','+=1.2')
			.staggerFrom([this.bg4], 0.7,{ alpha:0,ease:Power0.easeOut},'0.0','-=0.2')
			.staggerFrom([this.t4], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')
			.staggerFrom([this.btn], 0.7,{ y:"+=200",ease:Back.easeOut.config(1)},'0.0','-=0.2')
			
			.staggerTo([this.logo], 0.7,{x:"+=80",y:"-=80",ease:Power2.easeIn},'0.0','+=1.7')
			.staggerFrom([this.last], 0.9,{ y:"+=520",ease:Power2.easeOut},'0.0','-=0.5')
			
			
			.staggerTo([this.last], 0.9,{ y:"+=520",ease:Power2.easeIn},'0.0','+=3.2')
			.staggerTo([this.logo], 0.7,{x:"-=80",y:"+=80",ease:Power2.easeOut},'0.0','-=0.7')
			
		.addCallback(function(){_this.btn.stop()},'+=2.4')
			
			
			
		/*	.staggerFrom([this.logo], 0.7,{x:"+=80",y:"-=80",ease:Power2.easeOut},'0.0','-=0.2')
			.staggerFrom([this.t1], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')
			
			.staggerTo([this.t1], 0.5,{ alpha:0,x:"+=20",ease:Power2.easeIn},'0.0','+=1.2')
			.staggerFrom([this.bg2], 0.7,{ alpha:0,ease:Power0.easeOut},'0.0','-=0.2')
			.staggerFrom([this.t2], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')
			
			.staggerTo([this.t2], 0.5,{ alpha:0,x:"+=20",ease:Power2.easeIn},'0.0','+=1.2')	
			.staggerFrom([this.t3], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.0')
			
			.staggerTo([this.t3], 0.5,{ alpha:0,x:"+=20",ease:Power2.easeIn},'0.0','+=1.2')
			.staggerFrom([this.bg4], 0.7,{ alpha:0,ease:Power0.easeOut},'0.0','-=0.2')
			.staggerFrom([this.t4], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')	
			
			.staggerTo([this.t4], 0.5,{ alpha:0,x:"+=20",ease:Power2.easeIn},'0.0','+=1.2')
			.staggerFrom([this.bg5], 0.7,{ alpha:0,ease:Power0.easeOut},'0.0','-=0.2')
			.staggerFrom([this.t5], 0.7,{ alpha:0,x:"-=20",ease:Power2.easeOut},'0.0','-=0.2')	
			.staggerFrom([this.btn], 0.7,{ y:"+=200",ease:Back.easeOut.config(1)},'0.0','-=0.2')
			
			.staggerTo([this.logo], 0.7,{x:"+=80",y:"-=80",ease:Power2.easeIn},'0.0','+=1.7')
			.staggerFrom([this.last], 0.9,{ y:"+=520",ease:Power2.easeOut},'0.0','-=0.5')
			
			
			.staggerTo([this.last], 0.9,{ y:"+=520",ease:Power2.easeIn},'0.0','+=3.2')
			.staggerTo([this.logo], 0.7,{x:"-=80",y:"+=80",ease:Power2.easeOut},'0.0','-=0.7')
			
			.staggerFrom([this.logo], 0.7,{x:"+=180",ease:Back.easeOut.config(1)},'0.0','-=0.5')
			
			.staggerFrom([this.ball], 1.4,{rotation:+720,x:"+=330",ease:Power2.easeOut},'0.0','-=0.5')
			.staggerFrom([this.shadow], 1.4,{x:"+=330",ease:Power2.easeOut},'0.0','-=1.4')
			.staggerFrom([this.leg1], 0.5,{rotation:-20,x:"-=120",y:"-=100" ,ease:Power2.easeOut},'0.0','-=0.6')
			.staggerFrom([this.t1], 0.7,{alpha:0},'0.0','-=0.5')
			
			.staggerTo([this.ball, this.shadow, this.bg, this.leg1, this.leg2], 0.6,{x:"-=100",ease:Power1.easeInOut},'0.0','+=0.5')
				.staggerFrom([this.t2], 0.7,{alpha:0},'0.0','-=0.5')
			.staggerFrom([this.tele], 0.5,{x:"-=0",y:"+=200" ,ease:Power2.easeOut},'0.0','-=0.2')
			.staggerFrom([this.ps], 0.5,{x:"+=150",y:"+=100" ,ease:Power2.easeOut},'0.0','-=0.4')
			.staggerFrom([this.pad2], 0.5,{x:"+=50",y:"+=150" ,ease:Power2.easeOut},'0.0','-=0.4')
			.staggerFrom([this.pad1], 0.5,{x:"-=50",y:"+=150" ,ease:Power2.easeOut},'0.0','-=0.4')
			.staggerFrom([this.btn], 0.7,{y:"+=100",ease:Back.easeOut.config(1)},'0.0','-=0.2')
			
			var frequency = 20
		
		
		stage.enableMouseOver(frequency)
		
		canvas.addEventListener("mouseover", mouseOverBanner.bind(this));
		canvas.addEventListener("mouseout", mouseOutBanner.bind(this));
		
		function mouseOverBanner() {
		TweenMax.to(this.btn, 0.4,{scaleX:1.1, scaleY:1.1, ease:Back.easeOut.config(2.2)})
		}
		
		function mouseOutBanner() {
		TweenMax.to(this.btn, 0.4,{scaleX:1.0, scaleY:1.0, ease:Back.easeOut.config(3)})
		}		
			
			
			
			
			.staggerTo([this.ph1], 0.8,{x:"+=53",ease:Power2.easeInOut},'0.0','-=0.1')
			.staggerTo([this.ph2], 0.8,{x:"-=53",ease:Power2.easeInOut},'0.0','-=0.8')
			.staggerFrom([this.p1, this.p2,this.p3,this.p4], 0.7,{scaleX:0, ease:Power2.easeOut},'0.2','-=0.2')
			.staggerFrom([this.price], 0.7,{alpha:0},'0.0','-=0.1')
			.staggerTo([this.blik], 1.6,{x:"+=400",ease:Power1.easeInOut},'0.0','-=0.5')
			
			
			.staggerTo([this.ph1, this.ph2], 0.5,{x:"+=300",ease:Power2.easeIn},'0.0','+=0.8')
			.staggerFrom([this.phones], 0.7,{x:"-=300",ease:Power2.easeOut},'0.0','-=0.3')
			
			.staggerTo([this.phones], 0.5,{x:"+=300",ease:Power2.easeIn},'0.0','+=0.8')
			.staggerTo([this.price], 0.5,{alpha:0},'0.0','-=0.4')
			.staggerFrom([this.hand], 0.7,{x:"-=300",y:"+=150",ease:Power2.easeOut},'0.0','-=0.4')
			.staggerFrom([this.t2], 0.7,{alpha:0},'0.0','-=0.1')
			
			.to([this.cover], 0.5,{ alpha:1,ease:Power2.easeIn,  onComplete: play_bg},'+=2.0')
			
			function play_bg() {
				bg_tl.play(0)
			}
			
			
		var bg_tl = new TimelineMax()
			.staggerFrom([this.bg], 11,{x:"-=290",ease:Power0.easeOut},'0.0','+=0.0')
			
			
		var frequency = 20
		
		
		stage.enableMouseOver(frequency)
		
		canvas.addEventListener("mouseover", mouseOverBanner.bind(this));
		canvas.addEventListener("mouseout", mouseOutBanner.bind(this));
		
		function mouseOverBanner() {
		TweenMax.to(this.btn, 0.4,{scaleX:1.1, scaleY:1.1, ease:Back.easeOut.config(2.2)})
		}
		
		function mouseOutBanner() {
		TweenMax.to(this.btn, 0.4,{scaleX:1.0, scaleY:1.0, ease:Back.easeOut.config(3)})
		}		
		
			
			
			.staggerTo([this.ph1, this.ph2], 0.5,{x:"+=300",ease:Power2.easeIn},'0.0','+=0.8')
			.staggerFrom([this.bg2], 0.7,{x:"-=300",y:"+=150",ease:Power2.easeOut},'0.0','-=0.1')
			.staggerFrom([this.t1], 0.7,{alpha:0},'0.0','-=0.1')
			.staggerFrom([this.btn], 0.7,{y:"+=150",ease:Power2.easeOut},'0.0','-=0.2')
			
			.to([this.cover], 0.5,{ alpha:1,ease:Power2.easeIn},'+=2.0')
			
		
			
			
			
		
			
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cover
	this.cover = new lib.Symbol1();
	this.cover.name = "cover";
	this.cover.parent = this;
	this.cover.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

	// Layer_4
	this.logo = new lib.Symbol3();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(221.5,94,1,1,0,0,0,78.5,94);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// samolik
	this.instance = new lib.samolik();
	this.instance.parent = this;
	this.instance.setTransform(0,407);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.last = new lib.Symbol20();
	this.last.name = "last";
	this.last.parent = this;
	this.last.setTransform(150,205.8,0.799,0.799,0,0,0,150,255.5);

	this.timeline.addTween(cjs.Tween.get(this.last).wait(1));

	// btn
	this.btn = new lib.Symbol13_1();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(149,368.3,1,1,0,0,0,98.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// t5
	this.t4 = new lib.Symbol11_1();
	this.t4.name = "t4";
	this.t4.parent = this;
	this.t4.setTransform(151.8,119.4,1,1,0,0,0,133.5,25.3);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// bg4
	this.bg4 = new lib.Symbol19();
	this.bg4.name = "bg4";
	this.bg4.parent = this;
	this.bg4.setTransform(150,190.5,1,1,0,0,0,150,256);

	this.timeline.addTween(cjs.Tween.get(this.bg4).wait(1));

	// t3
	this.t3 = new lib.Symbol18();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(148.8,96.3,1,1,0,0,0,109.8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// bg3
	this.bg3 = new lib.Symbol17();
	this.bg3.name = "bg3";
	this.bg3.parent = this;
	this.bg3.setTransform(150,256,1,1,0,0,0,150,256);

	this.timeline.addTween(cjs.Tween.get(this.bg3).wait(1));

	// p4.png
	this.pic = new lib.Symbol15();
	this.pic.name = "pic";
	this.pic.parent = this;
	this.pic.setTransform(150,249.3,1,1,0,0,0,150,154.5);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

	// t2
	this.t2 = new lib.Symbol5();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(152.2,240.3,1,1,0,0,0,45.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// bg2
	this.bg2 = new lib.Symbol16();
	this.bg2.name = "bg2";
	this.bg2.parent = this;
	this.bg2.setTransform(150,254,1,1,0,0,0,150,254);

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(1));

	// t1
	this.t1 = new lib.Symbol2();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(123.6,124.2,1,1,0,0,0,102.5,23.8);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bg1
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,352.5,1,1,0,0,0,150,255.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.main, new cjs.Rectangle(-489.4,-409.3,1279,1317.3), null);


// stage content:
(lib.Teva_briefcase_sep19_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//////////////////////////////////////////////////////////////////
		/////////////////created by ADBANNER.com.ua 2019//////////////////
		//////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////
		this.stop()
		var _this = this
		var Tween
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// main
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.5,-127.5,1023.2,1053.8);
// library properties:
lib.properties = {
	id: '607AB930EFB70C44B32191E99F562C17',
	width: 240,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./bg1.jpg", id:"bg1"},
		{src:"./bg2.jpg", id:"bg2"},
		{src:"./bg3.jpg", id:"bg3"},
		{src:"./bg4.jpg", id:"bg4"},
		{src:"./Bitmap1.png", id:"Bitmap1"},
		{src:"./logo.png", id:"logo"},
		{src:"./p1.png", id:"p1"},
		{src:"./p2.png", id:"p2"},
		{src:"./p3.png", id:"p3"},
		{src:"./p4.png", id:"p4"},
		{src:"./p5.png", id:"p5"},
		{src:"./p6.png", id:"p6"},
		{src:"./p7.png", id:"p7"},
		{src:"./p8.png", id:"p8"},
		{src:"./samolik.jpg", id:"samolik"}
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
an.compositions['607AB930EFB70C44B32191E99F562C17'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;