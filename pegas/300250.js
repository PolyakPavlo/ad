(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,502,360,300],[0,0,600,500],[362,502,360,300]]}
];


// symbols:



(lib.ant_300x250 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ist300x250 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ist_300x250 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(2);
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


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB813").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ist300x250();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,500);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhSTAc3MAAAg5tMCknAAAMAAAA5tg");
	mask.setTransform(526.75,184.725);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AinDMIAmhGQAZASAoAAQAgAAAWgTQAUgTAAgfQAAgZgbgVQgjgYgIgIQgogiAAgtQAAg6AogsQAwg1BPAAQA+AAAnAaIgjA/QgZgRglAAQgwAAgOApQgFAOAAAMQAAAZAfAVIAtAeQAsAeAAA0QAAA8gnAtQgxA5hZAAQhOAAgkgag");
	this.shape.setTransform(928.375,279.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AigDgIBdm/IDjAAIgOBHIh7AAIgXByIBrAAIgOBEIhrAAIgZB6IB6AAIgPBIg");
	this.shape_1.setTransform(897.45,279.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AAuDgIhhj7IgLggIgEgOIgBAAIg7EpIhYAAIBcm/IBZAAIBlECIAEANIABAAIACgNIAFgfIAvjjIBYAAIhcG/g");
	this.shape_2.setTransform(858.525,279.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AhiDgIBcm/IBpAAIhcG/g");
	this.shape_3.setTransform(825.6,279.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("Ah0DgIBdm/IBnAAIhNF3IByAAIgPBIg");
	this.shape_4.setTransform(796.95,279.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AAXDjIhCjIIgCAAIgpDIIhoAAIBZmrQA7gaBPAAQBJAAAoAdQApAcAAA1QAAA5gnAqQgmApg5AGIAAACIBPDDgAgFigIgiChQAHACARAAQAtAAAcgfQAdghAAg1QAAgzg8AAQgUAAgMAFg");
	this.shape_5.setTransform(763.65,278.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AhiDgIBcm/IBpAAIhcG/g");
	this.shape_6.setTransform(733.1,279.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("ABcDgIgHhgIiFAAIgwBgIhjAAIDsm/IBoAAIA0G/gABDh0QgGATgKATIhHCSIBnAAIgJiSIgBgmIAAgQIgBAAg");
	this.shape_7.setTransform(696.8,279.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E31F27").s().p("EAnYAHOIAph2QAGgPAMgIQANgHANAEQATAHABAXQABAIACAEQAdAyA7AcQA9AdBKgFQA/gEAfgmQAcgjgEg2QgCgcgYghIjCjrQhChXgHhsQgLieBphyQBth1C2gNQDagQCXB1IgpB0QgFAPgNAIQgMAHgNgEQgTgHgBgXQgBgIgDgEQgdgzgzgaQg4gchJAFQhAAFgkAoQgjAnAEA3QABATAIAVQARAoAXAeICVCzQAsA7ARAfQAfA3ADAxQALCehpByQhtB2i2AMQgaACgZAAQi5AAiGhngAJoHOIARgxImPAAQgRAAgMgKQgMgKAAgOQAAgWAXgJQAQgGgBgPIAAgFIhCkaIkrAAIitEZIgCAFQAAAPAPAHQALAEAGAIQAGAIAAAKQAAAOgMAKQgLAKgRAAIiyABQgHAAgIgDQgNgFgFgNQgFgOAFgNQAHgQAagDQARgDAKgHQAKgGAIgMIIetaIFMAAQARAAAMAKQAMAKAAAOQAAAWgXAJQgPAHABAOIDJNeIAWhAQAGgPAMgIQANgHANAEQATAHABAXQABAIACAEQAdAyA7AcQA9AdBKgFQA/gEAfgmQAcgjgEg2QgCgcgYghIjCjrQhChXgHhsQgLieBphyQBth1C2gNQDagQCXB1IgpB0QgFAPgNAIQgMAHgNgEQgTgHgBgXQgBgIgDgEQgdgzgzgaQg4gchJAFQhAAFgkAoQgjAnAEA3QABATAIAVQARAoAXAeICVCzQAsA7ARAfQAfA3ADAxQALCehpByQhtB2i2AMQgaACgZAAQi5AAiGhngAJ5GdIADAAIgBgFgAg+hLIDIAAIg3jtgAYnGJQg7gegjg5Qglg6AAhEQADiNA7h+ICXlcIABgFQAAgPgPgHQgXgJAAgVQAAgOAMgLQAMgKARAAIGiAAQAHAAAHADQANAGAFANQAGANgGANQgGAQgXADQgVADgLALQgKAJgJAUIjPHdQg0B3gCA9QAAAgASAXQARAWAcAIQAdAGAHAAQAsAAAjgYQAjgXARgnIFNsEIF/AAQAIAAAGADQANAFAFAOQAGANgGANQgGAQgXADQgVADgLALQgKAJgJAUIi9G1QhLDBisB3QivB6jXAAQiMAAh/g9gA2WFbQhahaAAh/IABgfQAhkYDTi/QDVjAEeAAQCFAABmAaQBXAXB8A9IgpBhIgEAIQgIAMgMAFQgNAEgKgFQgMgFgDgKQgEgOgEgJQgJgUgOgNQgGgFgQgLQgpgZglgJQgZgFgnAAQhIAAhBAaQhAAYgzAuQhwBjhGB/QhJCFgVCaIgBAUQAAA4AnAoQAoApA4AAQBCAAAtglQAngfAchAIBBiZQACgDAAgGQAAgNgJgGQgDgDgKgFQgXgJAAgVQAAgPAKgJQALgKATAAIGVAAQAHgBAHADQANAGAFANQAGANgGANQgGARgXADQgUADgMAJQgKAJgJATIikF9IlNAAIgOgaQhFAchAANQhAAMhQAAQh/AAhahagEgmgAGdIFwtUIABgOQgBgNgVgLQgXgJAAgVQAAgPALgJQALgKAUAAIMEAAIg6CHQgHAQgOAHQgOAHgNgGQgUgIABgZQgBgRgNgFIgGgBIjzAAIiKE+IDNAAQAUgCAJgEQAMgFAJgQQAGgKALgGQAKgFALAAQAOAAAIAKQAJAKAAAOQAAAGgEAIIg3B+QgHAPgOAIQgNAHgNgGQgRgHABgZQAAgRgOgFIgFgBIjgAAIiRFQIFUAAQAUAAAPgIQAOgIAMgSQAGgKAKgGQAKgFALAAQAOAAAKAKQAKAKAAAOQAAAIgDAGIgvBtgEg1lAGdIFzteIABgFQAAgPgPgHQgXgJAAgVQAAgOAMgKQAMgKARAAIJ7AAQA0AAAsAdQArAcATAuQAXA3AABAQAABig3BSQg4BThXAuQhXAuhjAAIkXAAIh7EiIgCAGQAAAKALAFQAXAJAAAWQAAAOgMAKQgMAKgRAAgEgsjgBLIA9AAQA5AAAwgfQAugdAhg2QAqhFgDhFQgDhEgvgcQgSgKgagFIghAAg");
	this.shape_8.setTransform(644.275,185.6712);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDB913").s().p("EhSTAc3MAu7gtBQGXmHILjTQILjSI1AAMBWKAAAMAAAA5tg");
	this.shape_9.setTransform(526.75,184.725);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1053.5,369.5), null);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AgFAwQgLgGgHgKQgHgKgBgNIgSAAIAAAqIgXAAIAAhmIAXAAIAAApIASAAQACgNAHgJQAGgKAMgGQAJgFAOAAQASAAALAHQAMAIAHAMQAGAMAAAOQAAAPgGAMQgHAMgMAIQgLAHgSAAQgOAAgKgGgAAEgdQgGAFgEAIQgDAIAAAIQAAAJADAIQAEAIAGAFQAGAEAJABQAKgBAHgEQAHgFADgIQAEgIAAgJQAAgIgEgIQgDgIgHgFQgHgEgKAAQgJAAgGAEg");
	this.shape.setTransform(90.6,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AgKAzIAAhSIgeAAIAAgUIBRAAIAAAUIgeAAIAABSg");
	this.shape_1.setTransform(77.425,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AgUAvQgMgHgGgMQgIgNAAgPQAAgPAIgMQAGgMAMgHQAMgHAPAAQAPAAAKAFQAJAGAFAHIgOAOQgJgMgPAAQgNAAgIAJQgJAJAAAPQAAAKADAIQAEAHAHAFQAIAEAIABQAHAAAHgEQAFgDAFgGIAOAOQgFAIgJAEQgKAGgPAAQgPAAgMgHg");
	this.shape_2.setTransform(67.75,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AgKBKIAAhmIAVAAIAABmgAgJgyQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGABQgFgBgEgEg");
	this.shape_3.setTransform(59.775,1.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AAUAzIgfgqIgOAPIAAAbIgWAAIAAhmIAWAAIAAAyIAtgyIAbAAIgrAvIAsA3g");
	this.shape_4.setTransform(52.275,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AAYAzIAAgoQgFADgIABQgIACgIAAQgWAAgJgIQgJgJAAgOIAAglIAXAAIAAAcQAAAMAGAFQAGAFALgBIANgBIAKgDIAAgtIAWAAIAABmg");
	this.shape_5.setTransform(39.9487,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgkBIIgHgBIAEgUIAEABIAEABQAFAAAEgCQAEgCACgFIAFgMIgqhoIAYAAIAdBNIAehNIAYAAIgyB5QgEANgJAGQgJAEgMAAIgGAAg");
	this.shape_6.setTransform(28.875,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AAYAzIAAgqIguAAIAAAqIgXAAIAAhmIAXAAIAAApIAuAAIAAgpIAWAAIAABmg");
	this.shape_7.setTransform(17.45,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4F").s().p("AgmAzIAAhmIBNAAIAAAUIg2AAIAABSg");
	this.shape_8.setTransform(7.1,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4F").s().p("AgaAxQgLgEgHgHIALgQQAHAHAJADQAIAEAJAAQALAAAFgEQAGgEAAgGQAAgIgGgDQgHgDgKABIgSAAIAAgRIASAAQAJAAAGgEQAGgDAAgHQAAgGgGgDQgGgEgJAAQgJAAgIADQgIAEgGAFIgLgNQAHgIAKgFQALgEANAAQAVAAAMAIQAMAGABAOQgBAHgEAFQgEAFgGADQgGAEgGABQAGAAAGACQAHADAEAFQAFAGAAAHQABAOgMAJQgMAIgWAAQgOAAgMgFg");
	this.shape_9.setTransform(-9.05,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4F").s().p("AAYBKIAAhIIgwBIIgVAAIAAhmIAWAAIAABEIAvhEIAWAAIAABmgAgUgxQgKgFgGgIIAMgLQAFAHAGADQAGAEAHAAQAIAAAHgEQAFgDAFgHIAMALQgGAIgKAFQgKAFgLABQgKgBgKgFg");
	this.shape_10.setTransform(-25.6,1.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4F").s().p("AgFAwQgLgGgHgKQgHgKgCgNIgSAAIAAAqIgWAAIAAhmIAWAAIAAApIASAAQADgNAGgJQAHgKALgGQALgFANAAQARAAAMAHQAMAIAGAMQAHAMAAAOQAAAPgHAMQgGAMgMAIQgMAHgRAAQgOAAgKgGgAADgdQgFAFgEAIQgDAIAAAIQAAAJADAIQAEAIAFAFQAHAEAJABQALgBAGgEQAHgFADgIQAEgIgBgJQABgIgEgIQgDgIgHgFQgGgEgLAAQgJAAgHAEg");
	this.shape_11.setTransform(-39.75,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4D4F").s().p("AAYAzIAAgqIguAAIAAAqIgXAAIAAhmIAXAAIAAApIAuAAIAAgpIAWAAIAABmg");
	this.shape_12.setTransform(-54.55,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4D4F").s().p("AgbAvQgMgIgGgMQgHgMAAgPQAAgOAHgMQAGgMAMgIQALgHAQAAQARAAALAHQAMAIAHAMQAGAMAAAOQAAAPgGAMQgHAMgMAIQgLAHgRAAQgQAAgLgHgAgPgdQgGAFgEAIQgDAIAAAIQAAAJADAIQAEAIAGAFQAHAEAIABQAJgBAIgEQAGgFAEgIQADgIAAgJQAAgIgDgIQgEgIgGgFQgIgEgJAAQgIAAgHAEg");
	this.shape_13.setTransform(-66.75,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4F").s().p("AgyBIIAAiNIAXAAIAAAOQAGgIAJgEQAIgEAJgBQANABAKAGQALAGAGAMQAGAMAAARQAAASgGAKQgGANgLAGQgKAGgNAAQgJAAgIgDQgIgFgHgIIAAA1gAgQgwQgHAEgEAGIAAAoQAEAFAHAFQAHAEAJAAQAIAAAGgEQAHgFADgHQADgIAAgKQAAgKgDgIQgDgHgHgEQgGgFgIAAQgJAAgHAEg");
	this.shape_14.setTransform(-78.7,5.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4F").s().p("Ag2BHIAAiNIBhAAIAAAWIhIAAIAAAfIAlAAQAPAAAKAGQALAGAFAJQAGAKAAANQAAAMgGAKQgFAKgLAGQgKAGgPAAgAgdAxIAiAAQAKAAAHgGQAHgGAAgKQAAgLgHgGQgHgGgKAAIgiAAg");
	this.shape_15.setTransform(-91.225,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-11.8,199.3,26.4);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AgkBIIgHgBIAEgUIAEABIAEABQAFAAAEgCQAEgCACgFIAFgMIgqhoIAYAAIAdBNIAehNIAYAAIgyB5QgEANgJAGQgJAEgMAAIgGAAg");
	this.shape.setTransform(160.325,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AgUAvQgMgHgGgMQgIgNABgPQgBgPAIgMQAGgMAMgHQAMgHAPAAQAPAAAJAFQAKAGAFAHIgPAOQgIgMgPAAQgNAAgJAJQgIAJAAAPQAAAKAEAIQADAHAHAFQAIAEAIABQAIAAAFgEQAHgDADgGIAPAOQgFAIgKAEQgJAGgPAAQgPAAgMgHg");
	this.shape_1.setTransform(149.8,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AAYBKIAAhIIgvBIIgWAAIAAhmIAWAAIAABEIAvhEIAWAAIAABmgAgUgxQgKgFgHgIIANgLQAFAHAGADQAGAEAHAAQAIAAAGgEQAHgDAEgHIANALQgHAIgKAFQgKAFgLABQgLgBgJgFg");
	this.shape_2.setTransform(138.25,1.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AgYAwQgNgIgGgLQgIgNAAgQQAAgOAIgMQAGgMAMgIQALgHAPAAQAQAAALAHQALAIAHAMQAFAMABAQIAAAGIhPAAQABAHAEAGQAEAHAHAEQAHADAJABQAIAAAHgDQAJgDAFgGIALAPQgJAHgKAEQgLAEgNAAQgOAAgMgGgAAegHQAAgHgDgGQgDgGgGgFQgHgEgKAAQgIAAgHAEQgGAFgEAFQgDAHAAAHIA5AAIAAAAg");
	this.shape_3.setTransform(126.3,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgyBIIAAiNIAXAAIAAAOQAGgIAIgEQAJgEAJgBQANABALAGQAKAGAGAMQAGAMgBARQABASgGAKQgGANgKAGQgLAGgNAAQgJAAgJgDQgHgFgHgIIAAA1gAgQgwQgHAEgEAGIAAAoQAEAFAHAFQAIAEAIAAQAHAAAHgEQAGgFAEgHQADgIABgKQgBgKgDgIQgEgHgGgEQgHgFgHAAQgIAAgIAEg");
	this.shape_4.setTransform(114.5,5.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgbAvQgMgIgGgMQgHgMAAgPQAAgOAHgMQAGgMAMgIQALgHAQAAQAQAAAMAHQAMAIAHAMQAGAMAAAOQAAAPgGAMQgHAMgMAIQgMAHgQAAQgQAAgLgHgAgPgdQgHAFgDAIQgEAIABAIQgBAJAEAIQADAIAHAFQAGAEAJABQAJgBAIgEQAGgFAEgIQADgIAAgJQAAgIgDgIQgEgIgGgFQgIgEgJAAQgJAAgGAEg");
	this.shape_5.setTransform(96.35,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgmAzIAAhmIBNAAIAAAUIg3AAIAABSg");
	this.shape_6.setTransform(86,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgbAvQgMgIgHgMQgGgMAAgPQAAgOAGgMQAHgMAMgIQAMgHAPAAQARAAALAHQANAIAGAMQAGAMAAAOQAAAPgGAMQgGAMgNAIQgLAHgRAAQgPAAgMgHgAgPgdQgGAFgEAIQgDAIgBAIQABAJADAIQAEAIAGAFQAGAEAJABQAJgBAHgEQAHgFADgIQAEgIAAgJQAAgIgEgIQgDgIgHgFQgHgEgJAAQgJAAgGAEg");
	this.shape_7.setTransform(74.5,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4F").s().p("AguAzIAAhmIA5AAQALABAIADQAIADADAGQAEAHAAAHQAAAJgFAGQgFAGgHADQAIAAAGAIQAFAGAAAJQAAANgJAIQgIAHgTAAgAgYAgIAjAAQAGAAAEgDQADgDAAgGQAAgEgDgEQgEgEgGABIgjAAgAgYgKIAjAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAIgjAAg");
	this.shape_8.setTransform(62.875,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4F").s().p("AgKAzIAAhSIgeAAIAAgUIBRAAIAAAUIgeAAIAABSg");
	this.shape_9.setTransform(52.275,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4F").s().p("AgkBIIgHgBIAEgUIAEABIAEABQAFAAAEgCQAEgCACgFIAFgMIgqhoIAYAAIAdBNIAehNIAYAAIgyB5QgEANgJAGQgJAEgMAAIgGAAg");
	this.shape_10.setTransform(36.925,5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4F").s().p("AAYAzIAAgqIgvAAIAAAqIgWAAIAAhmIAWAAIAAApIAvAAIAAgpIAWAAIAABmg");
	this.shape_11.setTransform(25.5,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4D4F").s().p("AgKBKIAAhmIAVAAIAABmgAgJgyQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGABQgFgBgEgEg");
	this.shape_12.setTransform(16.875,1.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4D4F").s().p("AAmAzIAAhJIgiBJIgIAAIghhJIAABJIgWAAIAAhmIAdAAIAeBEIAehEIAeAAIAABmg");
	this.shape_13.setTransform(6.85,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4F").s().p("AgaAxQgLgEgHgHIALgQQAHAHAJADQAIAEAJAAQALAAAFgEQAGgEAAgGQAAgIgGgDQgHgDgKABIgSAAIAAgRIASAAQAJAAAGgEQAGgDAAgHQAAgGgGgDQgGgEgJAAQgJAAgIADQgIAEgGAFIgLgNQAHgIAKgFQALgEANAAQAVAAAMAIQAMAGABAOQgBAHgEAFQgEAFgGADQgGAEgGABQAGAAAGACQAHADAEAFQAFAGAAAHQABAOgMAJQgMAIgWAAQgOAAgMgFg");
	this.shape_14.setTransform(-5.9,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4F").s().p("AgaAzQgIgEgFgIQgGgHAAgMQAAgMAGgHQAFgGAIgEQAIgDAJAAQAJAAAJADQAJADAFAGIAAgOQAAgKgGgFQgHgFgKAAQgJAAgHADQgIAEgGAGIgKgPQAJgJALgEQALgEAMAAQALAAAKAEQAKADAGAIQAFAJABANIAABEIgXAAIAAgLQgGAGgIAEQgJADgJAAQgJAAgIgDgAgQAHQgGAFAAAJQAAAIAGAFQAGAFAKAAQAGAAAHgDQAGgCAEgGIAAgPQgEgGgGgCQgHgDgGAAQgKAAgGAFg");
	this.shape_15.setTransform(-22.425,3.7972);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4F").s().p("AgaAxQgLgEgIgHIAMgQQAIAHAHADQAJAEAJAAQALAAAFgEQAGgEAAgGQAAgIgGgDQgHgDgKABIgSAAIAAgRIASAAQAKAAAFgEQAGgDAAgHQAAgGgGgDQgGgEgJAAQgJAAgIADQgIAEgGAFIgLgNQAHgIAKgFQAKgEAOAAQAVAAAMAIQAMAGAAAOQAAAHgEAFQgEAFgGADQgGAEgGABQAGAAAGACQAHADAFAFQAEAGAAAHQABAOgMAJQgMAIgWAAQgOAAgMgFg");
	this.shape_16.setTransform(-33.15,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D4D4F").s().p("AguAzIAAhmIA5AAQALABAIADQAIADADAGQAEAHAAAHQAAAJgFAGQgFAGgHADQAIAAAGAIQAFAGAAAJQAAANgJAIQgIAHgTAAgAgYAgIAjAAQAGAAAEgDQADgDAAgGQAAgEgDgEQgEgEgGABIgjAAgAgYgKIAjAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAIgjAAg");
	this.shape_17.setTransform(-49.175,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D4D4F").s().p("AgKBKIAAhmIAVAAIAABmgAgJgyQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGABQgFgBgEgEg");
	this.shape_18.setTransform(-57.925,1.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D4D4F").s().p("AgKBbIAAglQgZgCgPgNQgNgOgBgZQABgYANgOQAPgOAZgBIAAglIAWAAIAAAlQAZABANAOQAPAOAAAYQAAAZgPAOQgNANgZACIAAAlgAAMAjQAIgBAHgEQAHgDAEgIQAEgIAAgLQAAgKgEgIQgEgHgHgFQgHgDgIAAgAgZgeQgHAFgFAHQgEAIAAAKQAAALAEAIQAFAIAHADQAGAEAJABIAAhEQgJAAgGADg");
	this.shape_19.setTransform(-67.85,3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D4D4F").s().p("AgaAzQgIgEgFgIQgGgHAAgMQAAgMAGgHQAFgGAIgEQAIgDAJAAQAJAAAJADQAJADAFAGIAAgOQAAgKgGgFQgHgFgKAAQgJAAgHADQgIAEgGAGIgKgPQAJgJALgEQALgEAMAAQALAAAKAEQAKADAGAIQAFAJABANIAABEIgXAAIAAgLQgGAGgIAEQgJADgJAAQgJAAgIgDgAgQAHQgGAFAAAJQAAAIAGAFQAGAFAKAAQAGAAAHgDQAGgCAEgGIAAgPQgEgGgGgCQgHgDgGAAQgKAAgGAFg");
	this.shape_20.setTransform(-81.175,3.7972);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D4D4F").s().p("AgxBIIAAiNIAWAAIAAAOQAFgIAKgEQAIgEAJgBQAOABAJAGQALAGAGAMQAFAMABARQgBASgFAKQgGANgLAGQgJAGgOAAQgJAAgIgDQgJgFgGgIIAAA1gAgQgwQgHAEgEAGIAAAoQAEAFAHAFQAIAEAHAAQAJAAAGgEQAHgFADgHQAEgIgBgKQABgKgEgIQgDgHgHgEQgGgFgJAAQgHAAgIAEg");
	this.shape_21.setTransform(-92.45,5.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D4D4F").s().p("AgKAzIAAhSIgeAAIAAgUIBRAAIAAAUIgeAAIAABSg");
	this.shape_22.setTransform(-103.375,3.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D4D4F").s().p("AhFAzIAAhmIAWAAIAABTIAkAAIAAhTIAWAAIAABTIAlAAIAAhTIAWAAIAABmg");
	this.shape_23.setTransform(-116.3,3.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D4D4F").s().p("AgaAxQgLgEgIgHIANgQQAHAHAHADQAJAEAJAAQAKAAAGgEQAGgEAAgGQAAgIgHgDQgGgDgLABIgRAAIAAgRIARAAQALAAAFgEQAGgDAAgHQAAgGgGgDQgGgEgJAAQgKAAgHADQgIAEgGAFIgLgNQAHgIAKgFQALgEANAAQAVAAAMAIQAMAGAAAOQAAAHgEAFQgEAFgGADQgGAEgGABQAGAAAHACQAGADAFAFQAEAGAAAHQAAAOgMAJQgMAIgVAAQgOAAgMgFg");
	this.shape_24.setTransform(-135.55,3.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4D4D4F").s().p("AgYAwQgMgIgIgLQgGgNAAgQQAAgOAGgMQAHgMAMgIQAMgHAOAAQAPAAAMAHQALAIAGAMQAHAMgBAQIAAAGIhOAAQABAHAEAGQAEAHAHAEQAHADAJABQAIAAAIgDQAHgDAGgGIAKAPQgIAHgKAEQgLAEgMAAQgPAAgMgGgAAegHQgBgHgDgGQgCgGgHgFQgGgEgKAAQgIAAgHAEQgGAFgDAFQgEAHAAAHIA5AAIAAAAg");
	this.shape_25.setTransform(-146.45,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D4D4F").s().p("Ag2BHIAAiNIBhAAIAAAWIhIAAIAAAfIAlAAQAPAAAKAGQALAGAFAJQAGAKAAANQAAAMgGAKQgFAKgLAGQgKAGgPAAgAgdAxIAiAAQAKAAAHgGQAHgGAAgKQAAgLgHgGQgHgGgKAAIgiAAg");
	this.shape_26.setTransform(-158.425,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.5,-11.8,333.5,26.4);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31F26").s().p("AvKDlQhPAAg4hDQg4hDAAhfIAAAAQAAheA4hDQA4hDBPAAIeVAAQBPAAA4BDQA4BDAABeIAAAAQAABfg4BDQg4BDhPAAg");
	this.shape.setTransform(-10.625,-4.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.8,-27.2,232.39999999999998,45.8);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAhQgJgCgEgGIALgOIAHADIAIACIAHABQAEAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgGgCIgNAAIAAgSIANAAIAFgBIACgBIAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFgBQgGAAgFACQgFACgEADIgLgOQAFgGAHgDQAJgEAJAAQASAAAIAGQAJAFAAAJQAAAFgFAFQgEAEgJACQAFAAAEACQAFABADAEQACAEAAAEQABAHgFAEQgEAFgIADQgIACgKAAQgLAAgJgDg");
	this.shape.setTransform(53.1,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAiQgFgCgEgGQgEgFAAgHQAAgJAEgFQAEgEAFgBQAGgCAFgBQAHABAFACQAGACACADIAAgHQAAgEgDgCQgDgCgGgBQgFAAgFACIgJAFIgJgQQAFgEAGgCQAFgCAGgCIAKgBQAJAAAIADQAIACAFAHQAEAGABAMIAAApIgbAAIAAgGQgDADgFACQgFACgHAAQgFAAgGgCgAgGAJQgDACAAADQAAAEADAAQADACADAAIAFgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAgBIAAgEQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBIgFgBIgGABg");
	this.shape_1.setTransform(45.375,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAxIAAhgIAaAAIAAAIQAEgFAFgCQAEgCAGAAQAJAAAHAEQAGAEAEAJQAEAHAAANQAAALgEAHQgEAJgGAEQgHAEgJAAQgGAAgEgCQgFgCgEgFIAAAigAgGgYIgFAEIAAASQACACADAAIAGABQAEAAAEgDQAEgDAAgGQAAgHgEgDQgEgEgEAAIgGABg");
	this.shape_2.setTransform(37.425,-1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAiQgFgCgEgGQgEgFAAgHQAAgJAEgFQAEgEAFgBQAGgCAFgBQAHABAFACQAGACACADIAAgHQAAgEgDgCQgDgCgGgBQgFAAgFACIgJAFIgJgQQAFgEAGgCQAFgCAGgCIAKgBQAJAAAIADQAIACAFAHQAEAGABAMIAAApIgbAAIAAgGQgDADgFACQgFACgHAAQgFAAgGgCgAgGAJQgDACAAADQAAAEADAAQADACADAAIAFgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAgBIAAgEQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBIgFgBIgGABg");
	this.shape_3.setTransform(28.625,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAhQgJgCgFgGIAMgOIAHADIAIACIAHABQAEAAACgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgHgCIgNAAIAAgSIANAAIAEgBIADgBIAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgEgBQgHAAgEACQgGACgDADIgNgOQAGgGAIgDQAHgEAKAAQARAAAKAGQAIAFAAAJQAAAFgFAFQgFAEgHACQAEAAAFACQADABADAEQAEAEAAAEQgBAHgEAEQgEAFgIADQgIACgKAAQgLAAgJgDg");
	this.shape_4.setTransform(21.1,-2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAgQgJgEgFgIQgFgIAAgMQAAgJAFgJQAEgHAJgFQAIgFALgBQAKAAAIAFQAJAFAEAIQAFAKAAALIAAAFIguAAQABADAEADQADADAGAAIAFgBIAGgCIAFgCIALAQQgEADgFACIgKADIgLAAQgKABgJgFgAAMgIIgBgDIgEgDIgGgCIgFACIgEADIgCADIAWAAIAAAAg");
	this.shape_5.setTransform(10.025,-2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbAjIgMgWIgCACIAAAUIgZAAIAAgUIgCgCIgMAWIggAAIAZglIgYggIAgAAIANAVIAAgVIAZAAIAAAVIANgVIAfAAIgYAgIAaAlg");
	this.shape_6.setTransform(0.325,-2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAjIAAhFIAxAAQAIAAAFADQAFADADAEQACAEAAAEQAAAGgDAFQgEAEgFABQAGAAAEAFQADAEAAAHQABAFgDAEQgDAEgFADQgEADgIAAgAgKAQIASAAIACgBIABgCIgBgDIgCgBIgSAAgAgKgJIARAAIACgBIABgCIgBgCIgCAAIgRAAg");
	this.shape_7.setTransform(-9.95,-2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAxIAAghIgWAhIgZAAIAAhFIAbAAIAAAeIAUgeIAaAAIAABFgAgNgeQgHgDgEgGIALgJQACAEAEACQAEACADAAQAFAAAEgCQADgCADgEIALAJQgFAGgGADQgHAEgIAAQgHAAgGgEg");
	this.shape_8.setTransform(-22.525,-4.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAhQgHgEgFgGQgFgGgDgIIgKAAIAAAaIgaAAIAAhFIAaAAIAAAWIAMAAQACgHAFgFQAGgGAGgDQAHgDAKAAQANAAAIAFQAJAFAEAJQAFAIAAAJQAAAKgFAIQgEAIgJAFQgIAFgNAAIAAABQgLgBgHgDgAAIgJQgDAEAAAFQAAAGADADQAEAEAGAAQAGAAADgEQADgDABgGQgBgFgDgEQgDgEgGAAQgGAAgEAEg");
	this.shape_9.setTransform(-32.85,-2.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAjIAAgaIgUAAIAAAaIgbAAIAAhFIAbAAIAAAWIAUAAIAAgWIAaAAIAABFg");
	this.shape_10.setTransform(-43.675,-2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAgQgJgFgFgJQgEgIAAgKQAAgJAEgIQAFgJAJgEQAJgFALgBQANABAIAFQAJAEAFAJQAEAIAAAJQAAAKgEAIQgFAJgJAFQgIAEgNAAQgLAAgJgEgAgIgJQgDAEAAAFQAAAGADADQADAFAFAAQAGAAADgFQAEgDAAgGQAAgFgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_11.setTransform(-52.225,-2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAxIAAhgIAaAAIAAAIQAEgFAFgCQAEgCAGAAQAJAAAHAEQAGAEAEAJQAEAHAAANQAAALgEAHQgEAJgGAEQgHAEgJAAQgGAAgEgCQgFgCgEgFIAAAigAgGgYIgFAEIAAASQACACADAAIAGABQAEAAAEgDQAEgDAAgGQAAgHgEgDQgEgEgEAAIgGABg");
	this.shape_12.setTransform(-60.525,-1.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAwIAAhfIBPAAIAAAZIgyAAIAAAIIAXAAQAKAAAIAEQAHAEAFAHQADAHAAAIQAAAJgDAHQgFAIgHAEQgIAEgKAAgAgNAXIATAAQADAAADgCQACgBAAgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgDAAIgTAAg");
	this.shape_13.setTransform(-69.5,-4.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-15.7,138.10000000000002,24);


(lib.Tween10copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB817").s().p("Aw9HYQjHABAAjHIAAojQAAjHDHAAMAh7AAAQDHAAAADHIAAIjQAADHjHgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-47.2,257,94.5);


(lib.Tween10copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB817").s().p("Aw9HYQjHABAAjHIAAojQAAjHDHAAMAh7AAAQDHAAAADHIAAIjQAADHjHgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-47.2,257,94.5);


(lib.Tween10copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB817").s().p("Aw9HYQjHABAAjHIAAojQAAjHDHAAMAh7AAAQDHAAAADHIAAIjQAADHjHgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-47.2,257,94.5);


(lib.Tween8copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2424").s().p("AhEBYIAAisIAvAAIAAANQAHgIAJgEQAIgEAKAAQAQAAAMAIQANAHAHAPQAHAOAAAVQAAAWgHAOQgHAOgNAIQgMAHgQAAQgKAAgHgDQgJgEgIgJIAAA9gAgMgsQgGADgDAEIAAAgQADADAGACQAFACAFAAQAJAAAGgFQAIgHAAgMQAAgLgIgGQgGgHgJAAQgFAAgFACg");
	this.shape.setTransform(19.45,4.9222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE2424").s().p("AgWBdIAAh8IAtAAIAAB8gAgRgwQgIgHAAgLQAAgLAIgIQAHgHAKAAQALAAAIAHQAHAIAAALQAAALgHAHQgIAIgLAAQgKAAgHgIg");
	this.shape_1.setTransform(7.675,-0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE2424").s().p("AAlA+IAAhCIgYBCIgZAAIgYhCIAABCIguAAIAAh7IA9AAIAVA7IAWg7IA9AAIAAB7g");
	this.shape_2.setTransform(-5.575,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2424").s().p("AgkA8QgQgGgJgIIAVgbQAGAEAHACIAOAFIAMABQAIgBADgBQAEgCgBgDQABgDgEgCQgEgDgIAAIgYAAIAAggIAYAAIAIgCIAEgCIABgDQAAgDgEgCQgDgBgGgBQgLAAgJADQgJAEgGAGIgWgaQAJgKAOgFQAOgHASAAQAgAAAPAKQAQAJAAAQQAAALgJAHQgIAJgOACQAIABAIACQAHAEAFAGQAFAGABAJQAAAMgIAIQgIAJgOAEQgOAGgTAAQgUgBgPgFg");
	this.shape_3.setTransform(-21.825,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE2424").s().p("AgZBWIAAisIAzAAIAACsg");
	this.shape_4.setTransform(-31.975,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgWAXQgJgJAAgOQAAgNAJgJQAJgKANAAQAOAAAJAKQAJAJAAANQAAAOgJAJQgJAKgOgBQgNABgJgKg");
	this.shape_5.setTransform(-46,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-17.3,78.7,36.5);


(lib.Tween8copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2424").s().p("AAVA/IAAglIgSAAIgRAlIg0AAIAZgqIgLgHQgGgEgEgJQgEgHAAgMQAAgMAGgKQAFgJALgGQALgHAPAAIBWAAIAAB9gAgQgXQgCACgBADQABADACACQACACAFABIAeAAIAAgPIgeAAQgFAAgCACg");
	this.shape.setTransform(56.05,-2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE2424").s().p("AgXBeIAAh9IAvAAIAAB9gAgSgwQgHgHgBgMQABgLAHgHQAIgIAKAAQALAAAHAIQAIAHAAALQAAAMgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_1.setTransform(44.6,-5.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE2424").s().p("AhFAaQAEAAAEgDQADgCADgHQADgGABgLIAJg9IBwAAIAAB9IgvAAIAAhTIgZAAIgDAYQgDAUgHANQgHAOgNAIQgNAIgVAAg");
	this.shape_2.setTransform(32.625,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2424").s().p("AgoA+QgJgFgHgJQgHgJAAgOQAAgQAHgIQAHgJAJgDQAKgDAKgBQANABAJADQAKAEAFAHIAAgOQAAgGgGgFQgFgEgLAAQgJAAgKADQgJADgHAGIgQgdQAJgGAKgFQAKgEALgCQAKgCAIAAQAQAAAOAEQAOAFAJAMQAJALAAAVIAABLIgvAAIAAgMQgFAGgLAFQgJAEgMAAQgKAAgKgEgAgMASQgEABAAAHQAAAFAEADQAGACAGAAQAFgBAFgBQAEgCADgDIAAgHQgDgDgEgCQgFgCgFAAQgGAAgGADg");
	this.shape_3.setTransform(17.4,-2.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE2424").s().p("AgWA/IAAhUIgiAAIAAgpIBxAAIAAApIghAAIAABUg");
	this.shape_4.setTransform(4.475,-2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE2424").s().p("AATA/IAAgtIglAAIAAAtIgvAAIAAh9IAvAAIAAAoIAlAAIAAgoIAvAAIAAB9g");
	this.shape_5.setTransform(-9.5,-2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE2424").s().p("AAmBXIgGgUIg+AAIgHAUIg7AAIBAitIBBAAIBACtgAARAVIgRg3IgQA3IAhAAg");
	this.shape_6.setTransform(-26.65,-5.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgWAXQgJgJAAgOQAAgMAJgKQAJgJANAAQAOAAAJAJQAJAKAAAMQAAAOgJAJQgJAKgOAAQgNAAgJgKg");
	this.shape_7.setTransform(-46,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-23,115.9,36.7);


(lib.Tween8copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2424").s().p("Ag2AUQADABADgDQACgCADgFQACgFABgIIAHgwIBYAAIAABiIgkAAIAAhCIgUAAIgDATQgCAQgFALQgGALgKAGQgLAGgQAAg");
	this.shape.setTransform(41.35,1.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE2424").s().p("AgjBFIgFAAIgFgBIAGghIADACIAEAAIAJgBQADgBABgCIABgCIgnhkIAnAAIASA5IATg5IAnAAIgrBvQgFALgGAGQgHAGgIACQgJACgKAAIgFAAg");
	this.shape_1.setTransform(29.95,3.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE2424").s().p("AgdA+QgNgHgGgNQgHgNAAgQQAAgXAGgQQAHgQAMgJQAMgJASgCIAHgDQAEgBAAgDIApAAQAAAIgEAEQgEAFgGAEQgGADgHABIgMADQgMACgFADQgHADgEAEQgDAEgCAFQAGgHAHgDQAHgDAJAAQAPAAAKAHQAKAHAGAMQAGAKAAAOQAAAOgHAMQgGAMgNAHQgMAHgSABQgRgBgMgHgAgMAEQgFAFAAAIQAAAJAFAFQAEAGAIAAQAJAAAEgGQAFgFAAgJQAAgIgFgFQgEgEgJgBQgIABgEAEg");
	this.shape_2.setTransform(18.475,-0.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2424").s().p("AAdAxIAAg1IgTA1IgTAAIgTg1IAAA1IglAAIAAhiIAxAAIAQAwIARgwIAxAAIAABig");
	this.shape_3.setTransform(4.925,1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE2424").s().p("AgfAxQgHgEgGgHQgFgIgBgKQABgNAFgHQAGgGAHgDQAIgDAIAAQAJAAAIADQAHAEAEAEIAAgKQABgFgFgEQgFgDgIAAQgHAAgHACQgHADgHAFIgMgXQAHgGAIgDQAIgDAIgBIAPgCQAMAAAMADQAKAEAIAJQAGAJAAAQIAAA7IglAAIAAgJQgDAGgJADQgHADgJAAQgIAAgIgDgAgJAOQgDACgBAEQABAFADABQAEACAFAAQADAAAFgCQADgBACgDIAAgFQgCgCgDgCQgFgCgDABQgFAAgEACg");
	this.shape_4.setTransform(-8.8,1.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE2424").s().p("AgRAxIAAhBIgbAAIAAghIBZAAIAAAhIgaAAIAABBg");
	this.shape_5.setTransform(-18.975,1.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE2424").s().p("AgfA+QgRgJgKgQQgJgQgBgVQABgUAJgQQAKgQARgJQARgJAUAAQATAAAMAGQAMAGAIAJQAIAJAEAKIgkARQgDgJgHgFQgHgGgKAAQgIAAgIAEQgHAFgFAIQgDAHAAAJQAAAKADAHQAFAIAHAEQAIAFAIAAQAKAAAHgGQAHgGADgIIAkARQgEAJgIAJQgIAJgMAGQgMAGgTABQgUgBgRgIg");
	this.shape_6.setTransform(-30.85,-0.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgGAIAAQAKAAAGAGQAHAHgBAIQABAKgHAGQgGAGgKABQgIgBgHgGg");
	this.shape_7.setTransform(-44.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-14.2,96.6,28.299999999999997);


(lib.Tween7copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2424").s().p("AqAGqQhAAAgugtQgsgtgBhBIAAhrIABgPIgBgQIAAjDIAAgDIAAjNQABhBAsgtQAugtBAAAIUBAAQBAAAAtAtQAuAtAABBIAADNIAAADIAADDIgBAQIABAPIAABrQAABBguAtQgtAthAAAg");
	this.shape.setTransform(0,21.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-20.8,159.1,85.2);


(lib.Tween7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2424").s().p("AqADRQhAgBgugtQgsgtgBhBIAAhpQABhBAsguQAugtBAAAIUBAAQBAAAAtAtQAuAuAABBIAABpQAABBguAtQgtAthAABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-20.8,159.1,41.7);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AgNA3IAAhJIAbAAIAABJgAgKgcQgEgFgBgGQABgGAEgFQAEgFAGABQAHgBAEAFQAFAFgBAGQABAGgFAFQgEAFgHgBQgGABgEgFg");
	this.shape.setTransform(-61.45,-61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AALAlIAAgbIgVAAIAAAbIgcAAIAAhJIAcAAIAAAXIAVAAIAAgXIAcAAIAABJg");
	this.shape_1.setTransform(-68.275,-59.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AALAlIAAgjIgXAjIgaAAIAAhJIAcAAIAAAhIAVghIAcAAIAABJg");
	this.shape_2.setTransform(-77.625,-59.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AALAlIAAgYQgDACgGACQgFACgHAAQgPAAgHgIQgGgHAAgLIAAgdIAcAAIAAAVQAAAFADADQACACAFAAIAHgBIAEgCIAAgcIAcAAIAABJg");
	this.shape_3.setTransform(-86.975,-59.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AALAlIAAgYQgDACgGACQgFACgHAAQgPAAgHgIQgGgHAAgLIAAgdIAcAAIAAAVQAAAFADADQACACAFAAIAHgBIAEgCIAAgcIAcAAIAABJg");
	this.shape_4.setTransform(-96.175,-59.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgSAiQgKgEgFgJQgFgJgBgMQAAgKAGgJQAFgIAJgGQAJgFALAAQALAAAJAFQAIAFAFAJQAGAKAAAMIAAAGIgyAAQABADAEADQAEADAGAAIAGgBIAGgCIAFgCIAMARIgJAFQgGACgGABIgLABQgLAAgJgFgAANgIIgBgEQgBgCgDgBQgDgCgEAAQgDAAgDACIgEADIgBAEIAXAAIAAAAg");
	this.shape_5.setTransform(-104.875,-59.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgoA1IAAhnIAcAAIAAAIQAFgFAFgCQAEgCAGgBQAKABAHAEQAHAEAFAJQAEAJAAAMQAAANgEAIQgFAJgHAEQgHAFgKAAQgGAAgEgCQgFgDgFgFIAAAlgAgGgaIgGAEIAAATIAFADIAHABQAEAAAEgCQAEgFABgHQgBgGgEgEQgEgEgEAAIgGABg");
	this.shape_6.setTransform(-113.425,-58.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgaA0IgEAAIgDgBIAEgYIACABIADAAIAHgBIADgCIABgCIgehKIAeAAIANAqIAOgqIAeAAIghBTQgDAIgFAEQgEAFgHACQgHABgIAAIgDAAg");
	this.shape_7.setTransform(-122.375,-58.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4F").s().p("AgOAzIAAhKIgcAAIAAgbIBVAAIAAAbIgcAAIAABKg");
	this.shape_8.setTransform(-131.05,-61.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4F").s().p("AgnAlIAAhJIA1AAQAJAAAEADQAGADACAEQADAEAAAFQAAAHgDAEQgEAEgGACQAHAAAEAFQAEAFAAAHQAAAFgDAFQgDAEgFADQgFADgIAAgAgLARIATAAIADgBIABgDIgBgCIgDgBIgTAAgAgLgKIASAAIACAAIABgDIgBgCIgCgBIgSAAg");
	this.shape_9.setTransform(-144.4,-59.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4F").s().p("AALAlIAAgjIgXAjIgaAAIAAhJIAcAAIAAAhIAVghIAcAAIAABJg");
	this.shape_10.setTransform(-30.025,-77.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4F").s().p("AgoAPQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAAAQACgCACgEIACgKIAGgjIBBAAIAABJIgcAAIAAgxIgOAAIgCAOQgCAMgEAIQgEAIgIAFQgHAEgMAAg");
	this.shape_11.setTransform(-39.6,-77.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4D4F").s().p("AgaA0IgEAAIgDgBIAEgYIACABIADAAIAHgBIADgCIABgCIgehKIAeAAIANAqIAOgqIAeAAIghBTQgDAIgFAEQgEAFgHACQgHABgIAAIgDAAg");
	this.shape_12.setTransform(-48.175,-76.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4D4F").s().p("AAGAlIgLgYIgGAHIAAARIgcAAIAAhJIAcAAIAAAaIAQgaIAiAAIgaAiIAbAng");
	this.shape_13.setTransform(-56.15,-77.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4F").s().p("AgNA3IAAhJIAbAAIAABJgAgKgcQgEgFgBgGQABgHAEgEQAFgFAFABQAGgBAFAFQAFAEAAAHQAAAGgFAFQgFAEgGAAQgFAAgFgEg");
	this.shape_14.setTransform(-63.05,-79.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4F").s().p("AALAlIAAgbIgVAAIAAAbIgcAAIAAhJIAcAAIAAAXIAVAAIAAgXIAcAAIAABJg");
	this.shape_15.setTransform(-69.925,-77.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4F").s().p("AgXAkQgGgCgEgGQgEgFAAgIQAAgKAEgFQAEgEAGgCQAGgCAGAAQAHAAAFACQAGACADAEIAAgIQAAgEgDgCQgEgDgFAAQgGAAgGACQgFACgFADIgJgRQAGgEAGgCIAMgEIAKgBQAKAAAIADQAIACAGAHQAFAHAAAMIAAAsIgcAAIAAgHQgDAEgGADQgFACgHAAQgGAAgGgDgAgHAKQgCACAAADQAAADACACQADABAEAAIAGgBQADgBABgCIAAgEQgBgCgDgBIgGgBQgEAAgDABg");
	this.shape_16.setTransform(-79.15,-77.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D4D4F").s().p("AAGAlIgLgYIgGAHIAAARIgcAAIAAhJIAcAAIAAAaIAQgaIAiAAIgaAiIAbAng");
	this.shape_17.setTransform(-87.05,-77.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D4D4F").s().p("AgNA3IAAhJIAbAAIAABJgAgKgcQgEgFgBgGQABgHAEgEQAEgFAGABQAHgBAEAFQAFAEgBAHQABAGgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_18.setTransform(-97.9,-79.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D4D4F").s().p("AgnAlIAAhJIA1AAQAIAAAGADQAFADACAEQAEAEgBAFQAAAHgEAEQgDAEgGACQAHAAAEAFQAEAFAAAHQAAAFgCAFQgEAEgFADQgFADgJAAgAgLARIATAAIADgBIABgDIgBgCIgDgBIgTAAgAgLgKIASAAIADAAIABgDIgBgCIgDgBIgSAAg");
	this.shape_19.setTransform(-104.85,-77.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D4D4F").s().p("AgVAhQgKgFgFgJQgFgJAAgKQAAgKAFgIQAFgJAKgGQAIgFANAAQANAAAKAFQAJAGAFAJQAFAIAAAKQAAAKgFAJQgFAJgJAFQgKAGgNAAQgNAAgIgGgAgJgJQgEAEABAFQgBAGAEAEQADAEAGABQAGgBAEgEQADgEABgGQgBgFgDgEQgEgEgGAAQgGAAgDAEg");
	this.shape_20.setTransform(-114.05,-77.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D4D4F").s().p("AAWAlIAAgnIgOAnIgOAAIgPgnIAAAnIgcAAIAAhJIAlAAIAMAkIANgkIAlAAIAABJg");
	this.shape_21.setTransform(-124.225,-77.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D4D4F").s().p("AALAlIAAgjIgXAjIgaAAIAAhJIAcAAIAAAhIAVghIAcAAIAABJg");
	this.shape_22.setTransform(-134.625,-77.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D4D4F").s().p("AgaAwQgNgEgGgHIAPgVQAEADAFACIALAEIAJABQAIgBAEgBQAEgCAAgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgBgCgDAAIgLgBIgVAAIAAgaIAVAAQAHAAAEgBQAEgCAAgCQAAgEgEgBQgFgCgHAAQgGAAgHADQgIACgFAEIgPgTQAHgIAMgEQALgFAOAAQAOAAAKAEQAKADAFAHQAGAGAAAIQgBAGgDAFQgCAEgGAEQgEADgIABQAGABAGACQAFADAEAFQAEAFAAAHQAAAJgGAHQgGAHgLAEQgKAEgNAAQgPAAgLgFg");
	this.shape_23.setTransform(-144.35,-78.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.3,-89.1,126.30000000000001,38.699999999999996);


(lib.Tween5copy16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEASIABgLIgKAGIgDgIIAJgFIgJgEIADgHIAKAGIgBgMIAIAAIAAAMIAJgGIAEAHIgKAEIAKAFIgEAIIgJgGIAAALg");
	this.shape.setTransform(-35.1,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA5IAAgsIgpAAIAAAsIgiAAIAAhxIAiAAIAAAoIApAAIAAgoIAiAAIAABxg");
	this.shape_1.setTransform(-42.05,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA5IgFgOIgnAAIgFAOIgmAAIAqhxIApAAIAqBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-54.5,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-67.075,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBGQgPgFgLgKIAYggQAHAGALAEQAJADALAAQAKAAAFgEQAEgDAAgFQAAgFgEgEQgFgDgJAAQgIAAgIACQgGACgGAGIgfgHIAAhaIBxAAIAAAnIhEAAIAAAVQAGgFAIgDQAHgDAKAAQAMAAALAGQALAGAGALQAHAKAAAPQABAQgJAMQgHAMgPAHQgPAHgUAAQgUAAgQgGg");
	this.shape_4.setTransform(-80.5,1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBHQgQgHgKgKIAXgfQAFAFAIADQAHADAHACIANABQAKAAAFgCQAGgDAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgGgBIgNgBIgIAAIgJAAIgFAAIAAgmIAGAAIAIAAIAIAAQAJAAAFgCQAFgCAAgEQAAgEgGgDQgGgCgJAAQgKAAgJADQgKAEgHAGIgWgcQAKgMAQgGQAPgHAVAAQAVABAOAEQANAGAHAJQAHAJAAAMQAAAIgEAIQgEAGgIAFQgHAFgKACQAJABAIADQAIAEAFAIQAFAHABALQAAANgJAKQgIAKgOAGQgPAFgTAAQgVAAgRgGg");
	this.shape_5.setTransform(-94.675,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBHQgQgHgKgKIAXgfQAFAFAIADQAHADAHACIANABQAKAAAFgCQAGgDAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgGgBIgNgBIgIAAIgJAAIgFAAIAAgmIAGAAIAIAAIAIAAQAJAAAFgCQAFgCAAgEQAAgEgGgDQgGgCgJAAQgKAAgJADQgKAEgHAGIgWgcQAKgMAQgGQAPgHAVAAQAVABAOAEQANAGAHAJQAHAJAAAMQAAAIgEAIQgEAGgIAFQgHAFgKACQAJABAIADQAIAEAFAIQAFAHABALQAAANgJAKQgIAKgOAGQgPAFgTAAQgVAAgRgGg");
	this.shape_6.setTransform(-108.475,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADBKIAAhaIgZAYIgZgaIA4g3IAnAAIAACTg");
	this.shape_7.setTransform(-121.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-12.7,98.1,29.3);


(lib.Tween5copy15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEASIABgLIgKAGIgDgIIAJgFIgJgEIADgHIAKAGIgBgMIAIAAIAAAMIAJgGIAEAHIgKAEIAKAFIgEAIIgJgGIAAALg");
	this.shape.setTransform(-35.1,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA5IAAgsIgpAAIAAAsIgiAAIAAhxIAiAAIAAAoIApAAIAAgoIAiAAIAABxg");
	this.shape_1.setTransform(-42.05,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA5IgFgOIgnAAIgFAOIgmAAIAqhxIApAAIAqBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-54.5,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-67.075,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBGQgPgFgLgKIAYggQAHAGALAEQAJADALAAQAKAAAFgEQAEgDAAgFQAAgFgEgEQgFgDgJAAQgIAAgIACQgGACgGAGIgfgHIAAhaIBxAAIAAAnIhEAAIAAAVQAGgFAIgDQAHgDAKAAQAMAAALAGQALAGAGALQAHAKAAAPQABAQgJAMQgHAMgPAHQgPAHgUAAQgUAAgQgGg");
	this.shape_4.setTransform(-80.5,1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBHQgQgHgKgKIAXgfQAFAFAIADQAHADAHACIANABQAKAAAFgCQAGgDAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgGgBIgNgBIgIAAIgJAAIgFAAIAAgmIAGAAIAIAAIAIAAQAJAAAFgCQAFgCAAgEQAAgEgGgDQgGgCgJAAQgKAAgJADQgKAEgHAGIgWgcQAKgMAQgGQAPgHAVAAQAVABAOAEQANAGAHAJQAHAJAAAMQAAAIgEAIQgEAGgIAFQgHAFgKACQAJABAIADQAIAEAFAIQAFAHABALQAAANgJAKQgIAKgOAGQgPAFgTAAQgVAAgRgGg");
	this.shape_5.setTransform(-94.675,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBHQgQgHgKgKIAXgfQAFAFAIADQAHADAHACIANABQAKAAAFgCQAGgDAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgGgBIgNgBIgIAAIgJAAIgFAAIAAgmIAGAAIAIAAIAIAAQAJAAAFgCQAFgCAAgEQAAgEgGgDQgGgCgJAAQgKAAgJADQgKAEgHAGIgWgcQAKgMAQgGQAPgHAVAAQAVABAOAEQANAGAHAJQAHAJAAAMQAAAIgEAIQgEAGgIAFQgHAFgKACQAJABAIADQAIAEAFAIQAFAHABALQAAANgJAKQgIAKgOAGQgPAFgTAAQgVAAgRgGg");
	this.shape_6.setTransform(-108.475,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADBKIAAhaIgZAYIgZgaIA4g3IAnAAIAACTg");
	this.shape_7.setTransform(-121.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-12.7,98.1,29.3);


(lib.Tween5copy14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDASIAAgLIgJAGIgFgIIAKgFIgKgEIAFgHIAJAGIAAgMIAHAAIAAAMIAJgGIAEAHIgKAEIAKAFIgEAIIgJgGIAAALg");
	this.shape.setTransform(-24.05,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA5IAAgsIgnAAIAAAsIgjAAIAAhxIAjAAIAAAoIAnAAIAAgoIAjAAIAABxg");
	this.shape_1.setTransform(-31,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA5IgEgOIgoAAIgEAOIgmAAIAphxIAqAAIArBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-43.45,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-56.025,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBGQgQgFgKgKIAXggQAJAGAJAEQALADAKAAQAKAAAEgEQAGgDAAgFQgBgFgEgEQgFgDgJAAQgIAAgIACQgGACgGAGIgfgHIAAhaIBxAAIAAAnIhEAAIAAAVQAGgFAIgDQAHgDAKAAQANAAAKAGQALAGAGALQAHAKAAAPQABAQgJAMQgHAMgPAHQgPAHgUAAQgUAAgQgGg");
	this.shape_4.setTransform(-69.45,1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBHQgQgHgKgKIAXgfQAFAFAIADQAHADAHACIANABQAKAAAFgCQAGgDAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgGgBIgNgBIgIAAIgJAAIgFAAIAAgmIAGAAIAIAAIAIAAQAJAAAFgCQAFgCAAgEQAAgEgGgDQgGgCgJAAQgKAAgJADQgKAEgHAGIgWgcQAKgMAQgGQAPgHAVAAQAVABAOAEQANAGAHAJQAHAJAAAMQAAAIgEAIQgEAGgIAFQgHAFgKACQAJABAIADQAIAEAFAIQAFAHABALQAAANgJAKQgIAKgOAGQgPAFgTAAQgVAAgRgGg");
	this.shape_5.setTransform(-83.625,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBHQgQgHgKgKIAXgfQAFAFAIADQAHADAHACIANABQAKAAAFgCQAGgDAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgGgBIgNgBIgIAAIgJAAIgFAAIAAgmIAGAAIAIAAIAIAAQAJAAAFgCQAFgCAAgEQAAgEgGgDQgGgCgJAAQgKAAgJADQgKAEgHAGIgWgcQAKgMAQgGQAPgHAVAAQAVABAOAEQANAGAHAJQAHAJAAAMQAAAIgEAIQgEAGgIAFQgHAFgKACQAJABAIADQAIAEAFAIQAFAHABALQAAANgJAKQgIAKgOAGQgPAFgTAAQgVAAgRgGg");
	this.shape_6.setTransform(-97.425,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADBKIAAhaIgZAYIgZgaIA4g3IAnAAIAACTg");
	this.shape_7.setTransform(-110.15,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.1,-12.7,98,29.3);


(lib.Tween5copy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEASIABgLIgKAGIgDgIIAJgFIgJgEIADgHIAKAGIgBgMIAIAAIAAAMIAJgGIAEAHIgKAEIAKAFIgEAIIgJgGIAAALg");
	this.shape.setTransform(-35.1,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA5IAAgsIgpAAIAAAsIgiAAIAAhxIAiAAIAAAoIApAAIAAgoIAiAAIAABxg");
	this.shape_1.setTransform(-42.05,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA5IgFgOIgnAAIgFAOIgmAAIAqhxIApAAIAqBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-54.5,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-67.075,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BMIAAgjIApgdQAPgLAGgGQAIgGACgEQACgEAAgEQAAgGgFgDQgFgDgHAAQgLAAgJAEQgKAEgIAIIgZgeQAJgJAKgGQALgGALgCQAMgDAKAAQASABAPAGQAOAHAIALQAIAMAAAPQAAAKgEAJQgFAJgKAKQgLAKgRALIAwAAIAAAog");
	this.shape_4.setTransform(-80.675,1.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBGQgQgFgKgKIAXggQAJAGAJAEQALADAKAAQAKAAAEgEQAGgDAAgFQgBgFgEgEQgFgDgJAAQgIAAgIACQgGACgGAGIgfgHIAAhaIBxAAIAAAnIhEAAIAAAVQAGgFAIgDQAHgDAKAAQANAAAKAGQALAGAGALQAHAKAAAPQABAQgJAMQgHAMgPAHQgPAHgUAAQgUAAgQgGg");
	this.shape_5.setTransform(-94.2,1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBKQgMgCgJgEQgKgGgGgIQgFgIgBgLQABgMAHgKQAIgKANgEQgMgFgHgJQgHgIAAgNQAAgLAFgHQAGgIAKgFQAJgEALgCQALgDALAAQAMAAALADQALACAJAEQAJAFAGAIQAGAHAAALQgBANgGAIQgIAJgLAFQANAEAHAKQAIAKAAAMQAAALgGAIQgFAIgJAGQgKAEgMACQgMADgMAAQgLAAgMgDgAgIAUIgIAEQgEACAAADQAAAGAGACQAFADAJABQAJgBAGgDQAFgCABgGQgBgDgDgCIgHgEIgKgCIgIACgAgNgkQgEADAAAEQAAADAFADQAGADAGABQAHgBAFgDQAFgDABgDQgBgEgEgDQgFgDgIAAQgIAAgFADg");
	this.shape_6.setTransform(-108.35,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.6,-12.7,87.5,29.3);


(lib.Tween5copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEASIABgLIgKAGIgEgIIAKgFIgKgEIAEgHIAKAGIgBgMIAIAAIgBAMIAKgGIAFAHIgKAEIAKAFIgFAIIgKgGIABALg");
	this.shape.setTransform(-35.15,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA5IAAgsIgoAAIAAAsIgiAAIAAhxIAiAAIAAAoIAoAAIAAgoIAjAAIAABxg");
	this.shape_1.setTransform(-42.1,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA5IgDgOIgpAAIgDAOIgoAAIAqhxIArAAIApBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-54.55,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-67.125,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BMIAAgjIApgdQAPgLAGgGQAIgGACgEQACgEAAgEQAAgGgFgDQgFgDgHAAQgLAAgJAEQgKAEgIAIIgZgeQAJgJAKgGQALgGALgCQAMgDAKAAQASABAPAGQAOAHAIALQAIAMAAAPQAAAKgEAJQgFAJgKAKQgLAKgRALIAwAAIAAAog");
	this.shape_4.setTransform(-80.725,1.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBGQgQgFgLgKIAZggQAHAGALAEQAKADAJAAQALAAAFgEQAEgDAAgFQABgFgFgEQgFgDgJAAQgIAAgIACQgGACgGAGIgfgHIAAhaIBxAAIAAAnIhDAAIAAAVQAEgFAJgDQAHgDAJAAQANAAALAGQALAGAHALQAGAKAAAPQAAAQgHAMQgIAMgPAHQgPAHgUAAQgUAAgQgGg");
	this.shape_5.setTransform(-94.25,1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBKQgLgCgKgEQgJgGgGgIQgGgIABgLQAAgMAIgKQAHgKANgEQgMgFgHgJQgHgIAAgNQAAgLAGgHQAFgIAJgFQAKgEALgCQALgDALAAQALAAAMADQALACAKAEQAJAFAFAIQAGAHAAALQAAANgIAIQgGAJgNAFQANAEAJAKQAHAKAAAMQAAALgFAIQgGAIgKAGQgJAEgLACQgNADgMAAQgLAAgNgDgAgJAUIgIAEQgCACAAADQgBAGAGACQAFADAJABQAJgBAGgDQAGgCgBgGQABgDgEgCIgIgEIgJgCIgJACgAgMgkQgFADAAAEQAAADAGADQAEADAHABQAHgBAFgDQAGgDAAgDQgBgEgEgDQgFgDgIAAQgIAAgEADg");
	this.shape_6.setTransform(-108.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.6,-12.7,87.39999999999999,29.3);


(lib.Tween4copy16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKASIAAgIIgTAAIAAAIIgFAAIAAgNIACAAIABgDIABgEIABgIIABgHIAVAAIAAAWIACAAIAAANgAgDgIIgBAHIgBADIgBADIAMAAIAAgQIgJAAg");
	this.shape.setTransform(-100.35,-17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAUIAAgbIAFAAIAAAbgAgBgMQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIABgBIADABIABADIgBADIgDAAIgBAAg");
	this.shape_1.setTransform(-102.725,-18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAOIAAgbIAPAAIAFABIADADIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgEABQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgDACQgCACgFAAgAgGAIIAJAAIADAAIABgCIgBgDIgDgBIgJAAgAgGgCIAJAAIACAAIABgDIgBgCIgCgBIgJAAg");
	this.shape_2.setTransform(-104.925,-17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAMQgDgCgBgCQgCgEgBgEQABgDACgEQABgCADgCQADgCAEgBQAEABAEACQADACABACQADAEAAADQAAAEgDAEQgBACgDACQgEADgEAAQgEAAgDgDgAgDgHIgDAEIgBADIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIABgFIgBgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_3.setTransform(-109.75,-17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAFIgOAAIAAAWg");
	this.shape_4.setTransform(-112.55,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAMQgEgCgCgCQgBgEAAgEQAAgDABgEQACgCAEgCQADgCADgBQAEABAEACQADACACACQABAEAAADQAAAEgBAEQgCACgDACQgEADgEAAQgDAAgDgDgAgEgHIgCAEIgBADIABAFIACADQABAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIABgFIgBgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_5.setTransform(-115.65,-17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAOIAAgbIAHAAIAAAKIAIAAQAEAAABABIAEACIABAFIgBAEQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBACgEAAgAgFAIIAIAAIACAAIABgDIgBgDIgCgBIgIAAg");
	this.shape_6.setTransform(-118.8,-17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFANQgDgCgCgDQgCgDAAgFQAAgEACgDQACgDADgBQAEgCADgBQAEAAADACIAEADIgEAEQgDgDgEgBQgDABgCACQgCADAAADIABAFIADADQAAAAABABQAAAAAAAAQAAAAABAAQABAAAAAAIAEgBIADgCIAEADQgCADgCABQgDACgEAAQgDAAgEgCg");
	this.shape_7.setTransform(-121.825,-17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOATIAAglIASAAQADAAADABQACABABADIABAEIgBAFIgCADIgDABIAEABIACADIABAFQABADgCACQgCADgCABQgCABgEAAgAgHANIAKAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgKAAgAgHgCIAJAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgJAAg");
	this.shape_8.setTransform(-125.1,-18.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-21.7,29.10000000000001,7.1);


(lib.Tween4copy15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKASIAAgIIgTAAIAAAIIgFAAIAAgNIACAAIABgDIABgEIABgIIABgHIAVAAIAAAWIACAAIAAANgAgDgIIgBAHIgBADIgBADIAMAAIAAgQIgJAAg");
	this.shape.setTransform(-100.35,-17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAUIAAgbIAFAAIAAAbgAgBgMQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIABgBIADABIABADIgBADIgDAAIgBAAg");
	this.shape_1.setTransform(-102.725,-18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAOIAAgbIAPAAIAFABIADADIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgEABQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgDACQgCACgFAAgAgGAIIAJAAIADAAIABgCIgBgDIgDgBIgJAAgAgGgCIAJAAIACAAIABgDIgBgCIgCgBIgJAAg");
	this.shape_2.setTransform(-104.925,-17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAMQgDgCgBgCQgCgEgBgEQABgDACgEQABgCADgCQADgCAEgBQAEABAEACQADACABACQADAEAAADQAAAEgDAEQgBACgDACQgEADgEAAQgEAAgDgDgAgDgHIgDAEIgBADIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIABgFIgBgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_3.setTransform(-109.75,-17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAFIgOAAIAAAWg");
	this.shape_4.setTransform(-112.55,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAMQgEgCgCgCQgBgEAAgEQAAgDABgEQACgCAEgCQADgCADgBQAEABAEACQADACACACQABAEAAADQAAAEgBAEQgCACgDACQgEADgEAAQgDAAgDgDgAgEgHIgCAEIgBADIABAFIACADQABAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIABgFIgBgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_5.setTransform(-115.65,-17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAOIAAgbIAHAAIAAAKIAIAAQAEAAABABIAEACIABAFIgBAEQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBACgEAAgAgFAIIAIAAIACAAIABgDIgBgDIgCgBIgIAAg");
	this.shape_6.setTransform(-118.8,-17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFANQgDgCgCgDQgCgDAAgFQAAgEACgDQACgDADgBQAEgCADgBQAEAAADACIAEADIgEAEQgDgDgEgBQgDABgCACQgCADAAADIABAFIADADQAAAAABABQAAAAAAAAQAAAAABAAQABAAAAAAIAEgBIADgCIAEADQgCADgCABQgDACgEAAQgDAAgEgCg");
	this.shape_7.setTransform(-121.825,-17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOATIAAglIASAAQADAAADABQACABABADIABAEIgBAFIgCADIgDABIAEABIACADIABAFQABADgCACQgCADgCABQgCABgEAAgAgHANIAKAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgKAAgAgHgCIAJAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgJAAg");
	this.shape_8.setTransform(-125.1,-18.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-21.7,29.10000000000001,7.1);


(lib.Tween4copy14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKASIAAgHIgUAAIAAAHIgFAAIAAgNIADAAIABgDIABgEIABgIIABgHIAVAAIAAAWIADAAIAAANgAgDgJIgBAIIgBAEIgCACIAOAAIAAgRIgKAAg");
	this.shape.setTransform(-88.95,-16.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAVIAAgcIAFAAIAAAcgAgCgNIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_1.setTransform(-91.375,-17.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAPIAAgdIAPAAIAGABIADADIABAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBABIgDABQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCACQgDACgFABgAgGAJIAJAAIADgBIABgCIgBgDIgDgBIgJAAgAgGgCIAJAAIADgBIAAgCIAAgCIgDgBIgJAAg");
	this.shape_2.setTransform(-93.625,-17.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHANQgDgCgCgDQgCgEAAgEQAAgDACgEQACgDADgCQADgCAEAAQAFAAADACQADACACADQACAEAAADQAAAEgCAEQgCADgDACQgDACgFAAQgEAAgDgCgAgEgIIgCAEIgBAEIABAFIACAEIAEAAIAFAAIACgEIABgFIgBgEIgCgEIgFAAIgEAAg");
	this.shape_3.setTransform(-98.625,-17.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAPIAAgdIAVAAIAAAGIgOAAIAAAXg");
	this.shape_4.setTransform(-101.55,-17.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHANQgDgCgCgDQgCgEAAgEQAAgDACgEQACgDADgCQADgCAEAAQAFAAADACQADACACADQACAEAAADQAAAEgCAEQgCADgDACQgDACgFAAQgEAAgDgCgAgEgIIgCAEIgBAEIABAFIACAEIAEAAIAFAAIACgEIABgFIgBgEIgCgEIgFAAIgEAAg");
	this.shape_5.setTransform(-104.775,-17.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAPIAAgdIAGAAIAAAKIAJAAQAEAAACACQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDAEQgDACgDAAgAgGAJIAJAAIADgBIABgDIgBgDIgDgBIgJAAg");
	this.shape_6.setTransform(-108.025,-17.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFANQgDgBgCgEQgCgDAAgFQAAgDACgEQACgEADgBQADgCAEAAQAEAAADABIAEAEIgEAEQgDgDgEAAQgDgBgDADQgCADAAADIABAFIAEAEIADAAIAEAAIADgDIAEAEIgEADQgDACgEAAQgEAAgDgCg");
	this.shape_7.setTransform(-111.2,-17.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAUIAAgnIATAAQADAAADACQACAAACADIABAFIgBAEIgCAEIgEABIAEABIADADIABAFIgBAGIgEAEQgDABgEAAgAgIAOIALAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAgBIgLAAgAgIgDIAKAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgKAAg");
	this.shape_8.setTransform(-114.625,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-21.5,30.10000000000001,7.4);


(lib.Tween4copy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKASIAAgIIgTAAIAAAIIgFAAIAAgNIACAAIABgDIABgEIACgIIAAgHIAUAAIAAAWIADAAIAAANgAgDgIIgBAHIgBADIgBADIAMAAIAAgQIgJAAg");
	this.shape.setTransform(-89.45,-17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAUIAAgbIAFAAIAAAbgAgBgMQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIABgBIADABIABADIgBADIgDAAIgBAAg");
	this.shape_1.setTransform(-91.825,-18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAOIAAgbIAPAAIAFABIADADIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgEABQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgDACQgCACgFAAgAgGAIIAJAAIADAAIABgCIgBgDIgDgBIgJAAgAgGgCIAJAAIACAAIABgDIgBgCIgCgBIgJAAg");
	this.shape_2.setTransform(-94.025,-17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAMQgDgCgBgCQgCgEAAgEQAAgDACgEQABgCADgCQAEgCADgBQAEABAEACQADACACACQACAEAAADQAAAEgCAEQgCACgDACQgEADgEAAQgDAAgEgDgAgDgHIgDAEIgBADIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIABgFIgBgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_3.setTransform(-98.85,-17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAOIAAgbIATAAIAAAFIgNAAIAAAWg");
	this.shape_4.setTransform(-101.65,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAMQgEgCgCgCQgCgEAAgEQAAgDACgEQACgCAEgCQADgCADgBQAEABAEACQADACABACQACAEAAADQAAAEgCAEQgBACgDACQgEADgEAAQgDAAgDgDgAgEgHIgCAEIgBADIABAFIACADQABAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIABgFIgBgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_5.setTransform(-104.75,-17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAOIAAgbIAHAAIAAAKIAIAAQADAAADABIADACIAAAFIAAAEQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgDACgDAAgAgFAIIAIAAIACAAIABgDIgBgDIgCgBIgIAAg");
	this.shape_6.setTransform(-107.9,-17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFANQgDgCgCgDQgCgDAAgFQAAgEACgDQACgDADgBQAEgCADgBQAEAAADACIAEADIgEAEQgDgDgEgBQgDABgCACQgCADAAADIABAFIADADQAAAAABABQAAAAAAAAQAAAAABAAQABAAAAAAIAEgBIADgCIAEADQgCADgCABQgDACgEAAQgDAAgEgCg");
	this.shape_7.setTransform(-110.925,-17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOATIAAglIARAAQAEAAADABQACABABADIABAEIgBAFIgCADIgDABIAEABIACADIABAFQAAADgBACQgCADgCABQgCABgEAAgAgHANIAKAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgKAAgAgHgCIAJAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIgJAAg");
	this.shape_8.setTransform(-114.2,-18.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-21.7,29.099999999999994,7.1);


(lib.Tween4copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALASIAAgHIgVAAIAAAHIgFAAIAAgNIACAAIACgDIABgEIABgJIABgGIAVAAIAAAWIADAAIAAANgAgDgJIgBAIIgBAEIgBACIANAAIAAgRIgKAAg");
	this.shape.setTransform(-88.725,-17.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAVIAAgcIAFAAIAAAcgAgCgNIgBgDIABgDQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAIABADIgBADIgDABIgCgBg");
	this.shape_1.setTransform(-91.225,-18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAQAAIAGAAIADADIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIABAEQABAEgDADQgCABgGAAgAgGAJIAJAAIADgBIABgDIgBgBIgDgBIgJAAgAgGgCIAJAAIACgBIABgCIgBgCIgCgBIgJAAg");
	this.shape_2.setTransform(-93.5,-17.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHANQgEgCgBgDQgCgEAAgEQAAgDACgEIAFgFQADgCAEAAQAEAAAEACIAFAFQACAEAAADQAAAEgCAEQgCADgDACQgEACgEAAQgEAAgDgCgAgEgHIgDADIgBAEIABAFIADAEIAEABIAFgBIADgEIAAgFIAAgEIgDgDQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_3.setTransform(-98.5,-17.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAOIAAgbIAVAAIAAAFIgOAAIAAAWg");
	this.shape_4.setTransform(-101.45,-17.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHANQgDgCgCgDQgCgEAAgEQAAgDACgEIAFgFQADgCAEAAQAEAAAEACIAFAFQACAEAAADQAAAEgCAEQgCADgDACQgEACgEAAQgEAAgDgCgAgEgHIgDADIgBAEIABAFIADAEIAEABIAFgBIACgEIABgFIgBgEIgCgDQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_5.setTransform(-104.7,-17.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAOIAAgbIAGAAIAAAJIAJAAIAGABQACACABACIABAEIgBAFIgDADQgCACgEgBgAgGAJIAJAAIADgBIABgDIgBgDIgDgBIgJAAg");
	this.shape_6.setTransform(-107.975,-17.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFANQgEgBgCgEQgBgDAAgFQAAgDABgEQACgDAEgCQAEgCADAAQAEAAADABIAEAEIgEAEQgCgEgFAAQgDABgCACQgDADABADIABAFIACAEIAEABIAEgBIADgDIAEAEIgEAEQgDABgEAAQgDAAgEgCg");
	this.shape_7.setTransform(-111.15,-17.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAUIAAgnIASAAIAHABQADACAAACQACACAAADIgBAFIgDADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIAEABIADAEIABAEQAAAEgCACIgDAEQgDABgEAAgAgIAOIAKAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgKAAgAgIgCIAKAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgKAAg");
	this.shape_8.setTransform(-114.55,-18.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-22,30.30000000000001,7.5);


(lib.Tween2copy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6060C").s().p("ApSErQjDAAAAjCIAAjRQAAjDDDABISlAAQDDgBAADDIAADRQAADCjDAAg");
	this.shape.setTransform(0.025,-10.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-40,157.9,59.9);


(lib.Tween2copy12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6060C").s().p("ApSErQjDAAAAjCIAAjRQAAjDDDABISlAAQDDgBAADDIAADRQAADCjDAAg");
	this.shape.setTransform(0.025,-10.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-40,157.9,59.9);


(lib.Tween2copy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6060C").s().p("ApSErQjDAAAAjCIAAjRQAAjDDDABISlAAQDDgBAADDIAADRQAADCjDAAg");
	this.shape.setTransform(0.025,-10.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-40,157.9,59.9);


(lib.Tween1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB817").s().p("AzkKgQi7gGAAjBIAAuxQAAjBC7gGQi7AGAADBIAAOxQAADBC7AGIvXAAQjHABAAjIIAAuxQAAjIDHABIPXAAMA2gAAAQDHgBAADIIAAOxQAADIjHgBg");
	this.shape.setTransform(143.975,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-67.2,487,134.5);


(lib.redfrontkarecopy12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgJF2IAArrIATAAIAALrg");
	var mask_graphics_1 = new cjs.Graphics().p("AhDF2IAArrICHAAIAALrg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah+F2IAArrID9AAIAALrg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai4F2IAArrIFxAAIAALrg");
	var mask_graphics_4 = new cjs.Graphics().p("AjyF2IAArrIHlAAIAALrg");
	var mask_graphics_5 = new cjs.Graphics().p("AktF2IAArrIJbAAIAALrg");
	var mask_graphics_6 = new cjs.Graphics().p("AlnF2IAArrILPAAIAALrg");
	var mask_graphics_7 = new cjs.Graphics().p("AmhF2IAArrINDAAIAALrg");
	var mask_graphics_8 = new cjs.Graphics().p("AncF2IAArrIO5AAIAALrg");
	var mask_graphics_9 = new cjs.Graphics().p("AoWF2IAArrIQtAAIAALrg");
	var mask_graphics_10 = new cjs.Graphics().p("ApQF2IAArrIShAAIAALrg");
	var mask_graphics_11 = new cjs.Graphics().p("AqLF2IAArrIUXAAIAALrg");
	var mask_graphics_12 = new cjs.Graphics().p("ArFF2IAArrIWLAAIAALrg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar/F2IAArrIX/AAIAALrg");
	var mask_graphics_14 = new cjs.Graphics().p("As6F2IAArrIZ1AAIAALrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:79.95,y:0.075}).wait(1).to({graphics:mask_graphics_1,x:73.9732,y:0.075}).wait(1).to({graphics:mask_graphics_2,x:67.9964,y:0.075}).wait(1).to({graphics:mask_graphics_3,x:62.0196,y:0.075}).wait(1).to({graphics:mask_graphics_4,x:56.0429,y:0.075}).wait(1).to({graphics:mask_graphics_5,x:50.0661,y:0.075}).wait(1).to({graphics:mask_graphics_6,x:44.0893,y:0.075}).wait(1).to({graphics:mask_graphics_7,x:38.1125,y:0.075}).wait(1).to({graphics:mask_graphics_8,x:32.1357,y:0.075}).wait(1).to({graphics:mask_graphics_9,x:26.1589,y:0.075}).wait(1).to({graphics:mask_graphics_10,x:20.1821,y:0.075}).wait(1).to({graphics:mask_graphics_11,x:14.2054,y:0.075}).wait(1).to({graphics:mask_graphics_12,x:8.2286,y:0.075}).wait(1).to({graphics:mask_graphics_13,x:2.2518,y:0.075}).wait(1).to({graphics:mask_graphics_14,x:-3.725,y:0.075}).wait(706));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31F26").s().rc(-79,-32.25,158,64.5,20,0,20,20);
	this.shape.setTransform(0.025,0);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-32.2,157.9,64.5);


(lib.redfrontkarecopy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgJF2IAArrIATAAIAALrg");
	var mask_graphics_1 = new cjs.Graphics().p("AhDF2IAArrICHAAIAALrg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah+F2IAArrID9AAIAALrg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai4F2IAArrIFxAAIAALrg");
	var mask_graphics_4 = new cjs.Graphics().p("AjyF2IAArrIHlAAIAALrg");
	var mask_graphics_5 = new cjs.Graphics().p("AktF2IAArrIJbAAIAALrg");
	var mask_graphics_6 = new cjs.Graphics().p("AlnF2IAArrILPAAIAALrg");
	var mask_graphics_7 = new cjs.Graphics().p("AmhF2IAArrINDAAIAALrg");
	var mask_graphics_8 = new cjs.Graphics().p("AncF2IAArrIO5AAIAALrg");
	var mask_graphics_9 = new cjs.Graphics().p("AoWF2IAArrIQtAAIAALrg");
	var mask_graphics_10 = new cjs.Graphics().p("ApQF2IAArrIShAAIAALrg");
	var mask_graphics_11 = new cjs.Graphics().p("AqLF2IAArrIUXAAIAALrg");
	var mask_graphics_12 = new cjs.Graphics().p("ArFF2IAArrIWLAAIAALrg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar/F2IAArrIX/AAIAALrg");
	var mask_graphics_14 = new cjs.Graphics().p("As6F2IAArrIZ1AAIAALrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:79.95,y:0.075}).wait(1).to({graphics:mask_graphics_1,x:73.9732,y:0.075}).wait(1).to({graphics:mask_graphics_2,x:67.9964,y:0.075}).wait(1).to({graphics:mask_graphics_3,x:62.0196,y:0.075}).wait(1).to({graphics:mask_graphics_4,x:56.0429,y:0.075}).wait(1).to({graphics:mask_graphics_5,x:50.0661,y:0.075}).wait(1).to({graphics:mask_graphics_6,x:44.0893,y:0.075}).wait(1).to({graphics:mask_graphics_7,x:38.1125,y:0.075}).wait(1).to({graphics:mask_graphics_8,x:32.1357,y:0.075}).wait(1).to({graphics:mask_graphics_9,x:26.1589,y:0.075}).wait(1).to({graphics:mask_graphics_10,x:20.1821,y:0.075}).wait(1).to({graphics:mask_graphics_11,x:14.2054,y:0.075}).wait(1).to({graphics:mask_graphics_12,x:8.2286,y:0.075}).wait(1).to({graphics:mask_graphics_13,x:2.2518,y:0.075}).wait(1).to({graphics:mask_graphics_14,x:-3.725,y:0.075}).wait(706));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31F26").s().rc(-79,-32.25,158,64.5,20,0,20,20);
	this.shape.setTransform(0.025,0);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-32.2,157.9,64.5);


(lib.redfrontkarecopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgJF2IAArrIATAAIAALrg");
	var mask_graphics_1 = new cjs.Graphics().p("AhDF2IAArrICHAAIAALrg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah+F2IAArrID9AAIAALrg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai4F2IAArrIFxAAIAALrg");
	var mask_graphics_4 = new cjs.Graphics().p("AjyF2IAArrIHlAAIAALrg");
	var mask_graphics_5 = new cjs.Graphics().p("AktF2IAArrIJbAAIAALrg");
	var mask_graphics_6 = new cjs.Graphics().p("AlnF2IAArrILPAAIAALrg");
	var mask_graphics_7 = new cjs.Graphics().p("AmhF2IAArrINDAAIAALrg");
	var mask_graphics_8 = new cjs.Graphics().p("AncF2IAArrIO5AAIAALrg");
	var mask_graphics_9 = new cjs.Graphics().p("AoWF2IAArrIQtAAIAALrg");
	var mask_graphics_10 = new cjs.Graphics().p("ApQF2IAArrIShAAIAALrg");
	var mask_graphics_11 = new cjs.Graphics().p("AqLF2IAArrIUXAAIAALrg");
	var mask_graphics_12 = new cjs.Graphics().p("ArFF2IAArrIWLAAIAALrg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar/F2IAArrIX/AAIAALrg");
	var mask_graphics_14 = new cjs.Graphics().p("As6F2IAArrIZ1AAIAALrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:79.95,y:0.075}).wait(1).to({graphics:mask_graphics_1,x:73.9732,y:0.075}).wait(1).to({graphics:mask_graphics_2,x:67.9964,y:0.075}).wait(1).to({graphics:mask_graphics_3,x:62.0196,y:0.075}).wait(1).to({graphics:mask_graphics_4,x:56.0429,y:0.075}).wait(1).to({graphics:mask_graphics_5,x:50.0661,y:0.075}).wait(1).to({graphics:mask_graphics_6,x:44.0893,y:0.075}).wait(1).to({graphics:mask_graphics_7,x:38.1125,y:0.075}).wait(1).to({graphics:mask_graphics_8,x:32.1357,y:0.075}).wait(1).to({graphics:mask_graphics_9,x:26.1589,y:0.075}).wait(1).to({graphics:mask_graphics_10,x:20.1821,y:0.075}).wait(1).to({graphics:mask_graphics_11,x:14.2054,y:0.075}).wait(1).to({graphics:mask_graphics_12,x:8.2286,y:0.075}).wait(1).to({graphics:mask_graphics_13,x:2.2518,y:0.075}).wait(1).to({graphics:mask_graphics_14,x:-3.725,y:0.075}).wait(706));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31F26").s().rc(-79,-32.25,158,64.5,20,0,20,20);
	this.shape.setTransform(0.025,0);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-32.2,157.9,64.5);


(lib.kazacopy12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AAVBBIAAgnIgTAAIgRAnIg2AAIAagsQgGgCgFgFQgGgEgEgJQgFgHAAgNQABgMAGgKQAFgLAMgGQALgGAQAAIBYAAIAACBgAgRgYQgCACAAADQAAAEACACQADACAFAAIAeAAIAAgPIgeAAQgFAAgDACg");
	this.shape.setTransform(97.25,20.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AgXBhIAAiBIAvAAIAACBgAgSgyQgIgHAAgMQAAgMAIgHQAHgIALAAQAMAAAHAIQAIAHAAAMQAAAMgIAHQgHAIgMAAQgLAAgHgIg");
	this.shape_1.setTransform(85.425,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AhIAbQAFAAADgCQAEgDADgHQADgHABgLIAJg/IB1AAIAACCIgxAAIAAhYIgaAAIgEAaQgCAUgIAPQgHAOgOAIQgNAIgWAAg");
	this.shape_2.setTransform(73.025,20.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AgpBAQgKgFgHgJQgHgKgBgOQABgRAHgJQAHgIAKgEQAKgDAKAAQAOAAAJAEQALAEAFAGIAAgNQAAgHgGgFQgHgEgKAAQgJAAgKADQgKADgHAGIgRgeQAJgHAKgEQALgEALgCQAKgCAKAAQAQAAAOAEQAPAFAJAMQAJAMABAVIAABOIgxAAIAAgMQgGAHgKAEQgKAEgNAAQgKAAgKgEgAgMASQgFACAAAGQAAAGAFADQAFACAGAAQAGAAAFgCQAFgCADgDIAAgHQgDgEgFgCQgFgBgGAAIgBAAQgFAAgFACg");
	this.shape_3.setTransform(57.25,20.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgXBBIAAhXIgjAAIAAgqIB1AAIAAAqIgjAAIAABXg");
	this.shape_4.setTransform(43.85,20.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AAUBBIAAgvIgnAAIAAAvIgxAAIAAiBIAxAAIAAApIAnAAIAAgpIAwAAIAACBg");
	this.shape_5.setTransform(29.35,20.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AAnBaIgGgVIhAAAIgHAVIg+AAIBDizIBDAAIBDCzgAASAVIgSg4IgRA4IAjAAg");
	this.shape_6.setTransform(11.575,17.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.7,36.9);


(lib.kazacopy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AhGBbIAAizIAwAAIAAAPQAIgKAKgEQAIgEAKABQAQAAANAHQANAIAIAPQAHAPAAAXQAAAWgHAPQgIAPgNAHQgNAIgQAAQgKABgIgEQgKgFgIgJIAAA/gAgMgtQgGACgEAEIAAAhQAEAEAGACQAFACAFAAQAJAAAHgFQAHgHABgMQgBgNgHgGQgHgGgJAAQgFAAgFACg");
	this.shape.setTransform(59.725,22.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AgXBhIAAiBIAvAAIAACBgAgSgyQgIgHAAgMQAAgMAIgHQAHgIALAAQAMAAAHAIQAIAHAAAMQAAAMgIAHQgHAIgMAAQgLAAgHgIg");
	this.shape_1.setTransform(47.475,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AAmBBIAAhGIgZBGIgZAAIgZhGIAABGIgxAAIAAiBIBBAAIAVA/IAWg/IBBAAIAACBg");
	this.shape_2.setTransform(33.675,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AgmA/QgQgGgJgJIAVgcQAGAEAIADIAOAEIANABQAIAAAEgCQADgCAAgCQAAgEgEgCQgEgCgIgBIgZAAIAAgiIAZAAIAJgBIAEgDIABgDQAAgDgEgCQgEgCgGAAQgLAAgKADQgJAEgHAGIgXgbQAKgKAPgGQAPgGASAAQAhAAAQAKQARAKAAAQQAAALgKAIQgJAIgOADQAIABAIACQAIAEAGAHQAFAGAAAJQAAAMgIAJQgIAJgPAFQgOAFgUAAQgVAAgQgFg");
	this.shape_3.setTransform(16.775,20.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgaBaIAAizIA1AAIAACzg");
	this.shape_4.setTransform(6.175,17.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.5,36.9);


(lib.kazacopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AhIAbQAFAAADgCQAEgDADgHQADgHABgLIAJg/IB1AAIAACCIgxAAIAAhYIgaAAIgEAaQgCAUgIAPQgHAOgOAIQgNAIgWAAg");
	this.shape.setTransform(106.375,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AguBbIgHAAIgGgBIAHgsIAFACIAFABQAHAAAEgCQAFgBABgDIABgCIgziEIAzAAIAYBLIAZhLIAzAAIg4CSQgGAPgJAIQgIAIgMACQgLADgOABIgGgBg");
	this.shape_1.setTransform(91.375,22.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AgmBSQgRgKgIgQQgJgSAAgVQAAgfAIgUQAIgWAQgLQAQgLAYgEQAFgBAFgCQAEgCAAgEIA2AAQAAAKgFAGQgFAHgIAEQgIAEgIACIgRAEQgPADgIADQgJAEgFAFQgEAGgCAGQAIgJAJgEQAJgEAMAAQATAAAOAKQANAJAIAPQAHAOAAATQAAASgIAQQgJAPgQAKQgRAKgXAAQgWAAgQgKgAgQAFQgGAHAAALQAAALAGAHQAGAIAKAAQALAAAGgIQAHgHAAgLQAAgLgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_2.setTransform(76.325,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AAmBBIAAhGIgZBGIgZAAIgZhGIAABGIgxAAIAAiBIBBAAIAVA/IAWg/IBBAAIAACBg");
	this.shape_3.setTransform(58.525,20.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgoBAQgLgFgHgJQgHgKgBgOQABgRAHgJQAHgIALgEQAJgDAKAAQANAAAKAEQALAEAFAGIAAgNQAAgHgGgFQgHgEgKAAQgKAAgJADQgKADgHAGIgRgeQAJgHAKgEQALgEAKgCQALgCAKAAQAQAAAOAEQAPAFAJAMQAJAMABAVIAABOIgxAAIAAgMQgGAHgKAEQgKAEgNAAQgKAAgJgEgAgMASQgFACgBAGQABAGAFADQAGACAFAAQAGAAAFgCQAFgCADgDIAAgHQgDgEgFgCQgFgBgGAAIgBAAQgFAAgFACg");
	this.shape_4.setTransform(40.5,20.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgXBBIAAhXIgjAAIAAgqIB1AAIAAAqIgjAAIAABXg");
	this.shape_5.setTransform(27.1,20.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgpBSQgXgMgNgWQgNgUABgcQgBgbANgVQANgUAXgMQAWgMAcAAQAXAAAQAIQAQAIALAMQAKALAGANIgvAWQgFgLgJgHQgJgHgMgBQgMABgLAFQgKAGgEAKQgGAKAAAMQAAAMAGALQAEAKAKAGQALAGAMAAQAMAAAJgHQAJgIAFgLIAvAVQgGANgKAMQgLAMgQAIQgQAIgXAAQgcAAgWgLg");
	this.shape_6.setTransform(11.55,17.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.2,36.9);


(lib.ttt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(135,38.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:31.5,alpha:1},23,cjs.Ease.quartOut).to({startPosition:0},62).to({_off:true},1).wait(448));

	// Layer_3
	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.05,19.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:11.8,alpha:1},23,cjs.Ease.quartOut).to({startPosition:0},69).to({_off:true},1).wait(448));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,0,333.5,53.3);


(lib.sarikareban = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-161,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0,alpha:1},23,cjs.Ease.quintOut).wait(586));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.5,-67.2,648,134.5);


(lib.gm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-45,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0,alpha:1},23,cjs.Ease.quintOut).wait(594));

	// girismodul2
	this.instance_1 = new lib.sarikareban("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-161.35,-69.8,0.3789,0.3648,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},147).wait(470));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.1,-94.4,245.60000000000002,49.10000000000001);


(lib.text2copy12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.kazacopy12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-33.95,-19.45,1,1,0,0,0,75.5,17.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.95,alpha:1},24,cjs.Ease.quintOut).to({startPosition:0},66,cjs.Ease.quintOut).wait(1).to({regX:52.9,x:-13.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:75.5,x:8.95},0).wait(570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-36.7,150.5,36.900000000000006);


(lib.text2copy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.kazacopy11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-33.95,-19.45,1,1,0,0,0,75.5,17.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.95,alpha:1},24,cjs.Ease.quintOut).to({startPosition:0},66,cjs.Ease.quintOut).wait(1).to({regX:35.1,regY:19.6,x:-31.45,y:-17.15},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:75.5,regY:17.3,x:8.95,y:-19.45},0).wait(570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-36.7,112.4,36.900000000000006);


(lib.text2copy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.kazacopy9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-33.95,-19.45,1,1,0,0,0,75.5,17.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.95,alpha:1},24,cjs.Ease.quintOut).to({startPosition:0},66,cjs.Ease.quintOut).wait(1).to({regX:58.1,regY:20.4,x:-8.45,y:-16.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:75.5,regY:17.3,x:8.95,y:-19.45},0).wait(570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-36.7,160.10000000000002,36.900000000000006);


(lib.pricecopy16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween4copy16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.9,11.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1121,scaleY:1.1121,x:21.75,y:11.75,alpha:1},23,cjs.Ease.quartOut).wait(585));

	// Layer_1
	this.instance_1 = new lib.Tween5copy16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.35,3.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1121,scaleY:1.1121,x:20.4,y:3.7,alpha:1},23,cjs.Ease.quartOut).wait(585));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.8,-12.4,114.89999999999999,34.6);


(lib.pricecopy15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween4copy15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.9,11.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1121,scaleY:1.1121,x:21.75,y:11.75,alpha:1},23,cjs.Ease.quartOut).wait(585));

	// Layer_1
	this.instance_1 = new lib.Tween5copy15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.35,3.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1121,scaleY:1.1121,x:20.4,y:3.7,alpha:1},23,cjs.Ease.quartOut).wait(585));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.8,-12.4,114.89999999999999,34.6);


(lib.pricecopy14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween4copy14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.9,11.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1121,scaleY:1.1121,x:21.75,y:11.75,alpha:1},23,cjs.Ease.quartOut).wait(585));

	// Layer_1
	this.instance_1 = new lib.Tween5copy14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.35,3.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1121,scaleY:1.1121,x:20.4,y:3.7,alpha:1},23,cjs.Ease.quartOut).wait(585));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-12.2,116.1,34.4);


(lib.pricecopy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween4copy13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.9,11.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1121,scaleY:1.1121,x:21.75,y:11.75,alpha:1},23,cjs.Ease.quartOut).wait(585));

	// Layer_1
	this.instance_1 = new lib.Tween5copy13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.35,3.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1121,scaleY:1.1121,x:20.4,y:3.7,alpha:1},23,cjs.Ease.quartOut).wait(585));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-12.4,104.3,34.6);


(lib.pricecopy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween4copy8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.9,11.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1121,scaleY:1.1121,x:21.75,y:11.75,alpha:1},23,cjs.Ease.quartOut).wait(585));

	// Layer_1
	this.instance_1 = new lib.Tween5copy8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.35,3.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1121,scaleY:1.1121,x:20.4,y:3.7,alpha:1},23,cjs.Ease.quartOut).wait(585));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-12.7,104.3,34.9);


(lib.backredkarecopy12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2copy13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},9,cjs.Ease.quintOut).wait(710));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.9,-40,177.9,59.9);


(lib.backredkarecopy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2copy12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},9,cjs.Ease.quintOut).wait(710));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.9,-40,177.9,59.9);


(lib.backredkarecopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2copy10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},9,cjs.Ease.quintOut).wait(710));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.9,-40,177.9,59.9);


(lib.backkırmızımodulbeyazlıcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AqAGqQhAAAgugtQgsgtgBhBIAAhrIABgPIgBgQIAAjDIAAgDIAAjNQABhBAsgtQAugtBAAAIUBAAQBAAAAtAtQAuAtAABBIAADNIAAADIAADDIgBAQIABAPIAABrQAABBguAtQgtAthAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:0,y:21.775}).wait(623));

	// Layer_1
	this.instance = new lib.Tween7copy4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-134.1,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:0},23,cjs.Ease.quintOut).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-20.8,159.1,85.2);


(lib.backkırmızımodulbeyazlıcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AqADRQhAgBgugtQgsgtgBhBIAAhpQABhBAsguQAugtBAAAIUBAAQBAAAAtAtQAuAuAABBIAABpQAABBguAtQgtAthAABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:0,y:0}).wait(623));

	// Layer_1
	this.instance = new lib.Tween7copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-134.25,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:0},23,cjs.Ease.quintOut).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-20.8,159.1,41.7);


(lib.antalyabeyazmodulluolancopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween8copy5("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},15,cjs.Ease.quartOut).wait(595));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-17.3,78.7,36.5);


(lib.antalyabeyazmodulluolancopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween8copy4("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},15,cjs.Ease.quartOut).wait(595));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-23,115.9,36.7);


(lib.antalyabeyazmodulluolancopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween8copy3("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},15,cjs.Ease.quartOut).wait(595));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-14.2,96.6,28.299999999999997);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3,-0.5,0.5482,0.5482,0,0,0,-5.5,-2.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.933,scaleY:0.933,x:-3.05,y:-0.55,alpha:1},10,cjs.Ease.backOut).to({startPosition:0},2).to({scaleX:0.8444,scaleY:0.8444,x:-3.3,y:-0.8},2).to({scaleX:0.933,scaleY:0.933,x:-3.05,y:-0.55},2).to({startPosition:0},42).to({_off:true},1).wait(584));

	// Layer_1
	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.2298,0.2298);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.61,scaleY:0.61,alpha:1},14,cjs.Ease.backOut).to({startPosition:0},2).to({scaleX:0.552,scaleY:0.552,x:-0.55,y:-0.3},2).to({scaleX:0.61,scaleY:0.61,x:0,y:0},2).to({startPosition:0},42).to({_off:true},1).wait(584));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-17.6,150.60000000000002,29.6);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.ant_300x250();
	this.instance.parent = this;
	this.instance.setTransform(63,0,0.8333,0.8333);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193).to({_off:false},0).to({_off:true},114).wait(7));

	// Layer_1
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.15,62.5,0.5,0.5,0,0,0,0.2,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({_off:true},89).wait(105));

	// Layer_4
	this.instance_2 = new lib.ist_300x250();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63,0,0.8333,0.8333);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(314));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63,0,300.1,250);


(lib.modulcopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.pricecopy16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(253.8,100.35,1.3396,1.3396,0,0,0,0.3,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(219));

	// Layer_3
	this.instance_1 = new lib.redfrontkarecopy12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,103);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({_off:true},220).wait(5));

	// Layer_3_copy
	this.instance_2 = new lib.text2copy12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.55,71.5,1.1984,1.1984,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},241).wait(7));

	// Layer_5
	this.instance_3 = new lib.Tween10copy8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.55,67.95);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:95.55,alpha:1},19,cjs.Ease.quartOut).to({_off:true},222).wait(7));

	// Layer_4
	this.instance_4 = new lib.backredkarecopy12("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.5,95.25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},222).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,20.7,342.4,114.60000000000001);


(lib.modulcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.pricecopy15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(253.8,100.35,1.3396,1.3396,0,0,0,0.3,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(219));

	// Layer_3
	this.instance_1 = new lib.redfrontkarecopy11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,103);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({_off:true},220).wait(5));

	// Layer_3_copy
	this.instance_2 = new lib.text2copy11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.55,71.5,1.1984,1.1984,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},241).wait(7));

	// Layer_5
	this.instance_3 = new lib.Tween10copy7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.55,67.95);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:95.55,alpha:1},19,cjs.Ease.quartOut).to({_off:true},222).wait(7));

	// Layer_4
	this.instance_4 = new lib.backredkarecopy11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.5,95.25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},222).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,20.7,342.4,114.60000000000001);


(lib.modulcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.pricecopy13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(254.65,102.05,1.476,1.476,0,0,0,0.2,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(43).to({startPosition:43},0).to({_off:true},1).wait(175));

	// Layer_3
	this.instance_1 = new lib.redfrontkarecopy9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,103);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(49).to({startPosition:49},0).to({_off:true},1).wait(175));

	// Layer_3_copy
	this.instance_2 = new lib.text2copy9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.55,71.5,1.1984,1.1984,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({startPosition:72},0).to({_off:true},1).wait(175));

	// Layer_5
	this.instance_3 = new lib.Tween10copy5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.55,67.95);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:95.55,alpha:1},19,cjs.Ease.quartOut).to({startPosition:0},53).to({_off:true},1).wait(175));

	// Layer_4
	this.instance_4 = new lib.backredkarecopy9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.5,95.25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(53).to({startPosition:53},0).to({_off:true},1).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,20.7,342.4,114.60000000000001);


(lib.beyazkarecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.antalyabeyazmodulluolancopy4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.05,35.5,0.7381,0.7381);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(630));

	// Layer_2
	this.instance_1 = new lib.antalyabeyazmodulluolancopy5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.05,9.45,0.7381,0.7381,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(630));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-0.5,-0.5,1,1);
	this.shape.setTransform(-59.9,-20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjAhQgDAAgDgDQgDgEAAgEIAAg1IAAgBIBKAAIAGABQADAAADADQADAEAAAEIAAAKIAAAAIAAAIIAAABIAAAEIAAAAIAAAJIAAAAIAAALQAAAEgDAEIgDABIgEABg");
	this.shape_1.setTransform(-55.9067,-17.6733);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBA+QgIgBgFgGQgGgGAAgIIAAhlIAAgBICLAAIALABQAIABAFAGQAGAGAAAIIAAATIAAAAIAAAQIAAAAIAAAKIAAAAIAAAQIAAAAIAAAUQAAAIgGAGIgFAEQgEACgFAAg");
	this.shape_2.setTransform(-51.9133,-14.8467);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgBaQgLgBgJgIQgIgJAAgMIAAiUIAAgBIDNAAIAQABQALAAAIAJQAJAJAAAMIAAAcIAAAAIAAAXIAAABIAAAOIAAAAIAAAXIAAABIAAAdQAAAMgJAIQgDAEgFACQgFADgHAAg");
	this.shape_3.setTransform(-47.92,-12.02);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah+B2QgQAAgLgMQgLgLAAgQIAAjDIAAgBIEOAAIAVABQAQAAALALQALAMAAAQIAAAlIAAAAIAAAfIAAAAIAAAUIAAAAIAAAeIAAABIAAAmQAAAQgLALQgFAFgGADQgIADgJAAg");
	this.shape_4.setTransform(-43.9267,-9.1933);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AicCSQgUAAgOgOQgOgOAAgUIAAjzIAAAAIFPAAIAbAAQATABAOAOQAOAOAAAUIAAAuIAAABIAAAlIAAABIAAAYIAAAAIAAAmIAAAAIAAAvQAAAUgOAOQgGAHgHADQgKAEgLAAg");
	this.shape_5.setTransform(-39.9333,-6.3667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai7CvQgXgBgRgRQgRgQAAgYIAAkiIAAgBIGQAAIAgABQAXAAARARQARARAAAYIAAA3IAAABIAAAtIAAAAIAAAdIAAABIAAAtIAAAAIAAA4QAAAYgRARQgHAHgJAEQgLAGgOAAg");
	this.shape_6.setTransform(-35.94,-3.54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjZDLQgcAAgTgUQgUgUAAgbIAAlRIAAgBIHRAAIAlABQAcAAATAUQAUATAAAcIAABAIAAABIAAA0IAAABIAAAiIAAAAIAAA1IAAAAIAABBQAAAcgUATQgIAJgKAFQgOAGgPAAg");
	this.shape_7.setTransform(-31.9467,-0.7133);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj4DnQgfAAgWgWQgWgXAAgfIAAmBIAAAAIISAAIAqAAQAfABAWAWQAWAWAAAgIAABJIAAABIAAA8IAAAAIAAAnIAAABIAAA8IAAAAIAABKQAAAggWAWQgKAKgLAFQgPAHgRAAg");
	this.shape_8.setTransform(-27.9533,2.1133);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkXEDQgjAAgYgZQgZgZAAgjIAAmwIAAAAIJTAAIAvAAQAkAAAYAZQAZAZAAAkIAABSIAAABIAABDIAAABIAAAsIAAAAIAABDIAAABIAABTQAAAjgZAZQgLAMgNAGQgQAHgUAAg");
	this.shape_9.setTransform(-23.96,4.94);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ak1EgQgngBgcgbQgbgcAAgnIAAnfIAAgBIKUAAIA1ABQAnAAAcAcQAbAcAAAnIAABbIAAABIAABLIAAAAIAAAxIAAABIAABKIAAABIAABcQAAAngbAcQgNAMgOAHQgSAJgWAAg");
	this.shape_10.setTransform(-19.9667,7.7667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlTE8QgrAAgfgfQgegeAAgrIAAoPIAAAAILVAAIA6AAQArAAAfAfQAeAfAAArIAABkIAAABIAABSIAAABIAAA1IAAABIAABSIAAABIAABlQAAArgeAfQgOANgQAHQgUAKgYAAg");
	this.shape_11.setTransform(-15.9733,10.5933);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlyFYQgvAAghghQghghAAgvIAAo+IAAAAIMWAAIBAAAQAvAAAhAhQAhAiAAAvIAABtIAAABIAABaIAAAAIAAA7IAAABIAABZIAAABIAABuQAAAvghAhQgPAPgRAIQgWAKgaAAg");
	this.shape_12.setTransform(-11.98,13.42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AmQF0QgzAAgkgkQgkgkAAgyIAAptIAAAAINYAAIBEAAQAzAAAkAkQAkAkAAAzIAAB2IAAABIAABhIAAABIAAA/IAAABIAABhIAAABIAAB3QAAAygkAlQgQAQgSAIQgYALgdAAg");
	this.shape_13.setTransform(-7.9867,16.2467);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AmvGRQg3AAgmgnQgngnAAg2IAAqdIAAAAIOZAAIBKAAQA3AAAmAnQAnAnAAA3IAAB/IAAABIAABpIAAAAIAABFIAAABIAABoIAAABIAACAQAAA2gnAnQgRARgUAKQgaAMgeAAg");
	this.shape_14.setTransform(-3.9933,19.0733);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnOGtQg6AAgqgpQgpgqAAg6IAArMIQqAAQA6AAAqAqQApApAAA7IAACIIAAABIAABwIAAABIAABJIAAABIAABvIAAACIAACJQAAA6gpAqQgqApg6AAg");
	this.shape_15.setTransform(0,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(615));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-21,120.8,85.8);


(lib.beyazkarecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.antalyabeyazmodulluolancopy3("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(630));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-0.5,-0.5,1,1);
	this.shape.setTransform(-59.9,-20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOATIgVgEQgDgBgDgDQgDgDAAgFIAAgRIAAgEIA8AAIAUAEQADABADAEQADADAAAFIAAAKIgBAFIgDACQgDADgFAAg");
	this.shape_1.setTransform(-55.9067,-19.1333);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAgIgpgDQgIgBgFgGQgGgGAAgJIAAggIAAgGIBuAAIAoADQAIABAFAGQAGAHAAAIIAAATQAAAGgDAEIgEAEQgGAFgJAAg");
	this.shape_2.setTransform(-51.9133,-17.7667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAuIg/gDQgLgBgJgIQgIgJAAgNIAAgvIAAgKIChAAIA8ADQALABAIAJQAJAJAAANIAAAcQAAAIgEAGIgFAGQgJAIgNAAg");
	this.shape_3.setTransform(-47.92,-16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA8IhTgDQgQgBgLgLQgLgMAAgQIAAg/IAAgNIDTAAIBQADQAQABALAMQALAMAAAQIAAAlQAAALgGAIIgGAIQgMALgQAAg");
	this.shape_4.setTransform(-43.9267,-15.0333);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BJIhngCQgUgBgOgOQgOgOAAgUIAAhOIAAgQIEGAAIBkACQATABAOAOQAOAPAAAUIAAAuQAAAOgHALIgIAJQgOANgVAAg");
	this.shape_5.setTransform(-39.9333,-13.6667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BXIh8gCQgXgBgRgRQgRgRAAgYIAAhdIAAgTIE5AAIB3ACQAXABARARQARARAAAYIAAA3QAAARgIANQgEAFgGAFQgRARgYAAg");
	this.shape_6.setTransform(-35.94,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhIBlIiRgCQgcgBgTgTQgUgUAAgcIAAhsIAAgXIFrAAICLACQAcABATAUQAUAUAAAcIAABAQAAATgKAPQgEAGgGAGQgUAUgcAAg");
	this.shape_7.setTransform(-31.9467,-10.9333);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhSByIimgCQgfAAgWgWQgWgXAAgfIAAh8IAAgZIGdAAICfACQAfAAAWAXQAWAWAAAgIAABJQAAAVgKASQgFAIgHAGQgXAWgfAAg");
	this.shape_8.setTransform(-27.9533,-9.5667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcCAIi7gCQgjAAgYgZQgZgZAAgkIAAiKIAAgdIHPAAICzACQAkAAAYAZQAZAaAAAjIAABSQAAAYgMAUQgFAJgIAHQgZAZgkAAg");
	this.shape_9.setTransform(-23.96,-8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhmCOIjPgCQgnAAgcgcQgbgcAAgnIAAiaIAAggIICAAIDHACQAnAAAcAcQAbAcAAAnIAABbQAAAbgNAWQgGAKgJAIQgcAcgnAAg");
	this.shape_10.setTransform(-19.9667,-6.8333);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhvCbIjkgBQgrAAgfgeQgegfAAgrIAAipIAAgjII1AAIDaABQArAAAfAfQAeAeAAAsIAABkQAAAdgOAYQgHALgJAJQgfAegrAAg");
	this.shape_11.setTransform(-15.9733,-5.4667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah5CpIj5gBQgvAAghghQghgiAAgvIAAi4IAAgmIJnAAIDvABQAvAAAhAhQAhAiAAAvIAABtQAAAggQAaQgHAMgKAKQgiAhgvAAg");
	this.shape_12.setTransform(-11.98,-4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiDC3IkNgBQgzAAgkgkQgkgkAAgzIAAjHIAAgqIKaAAIECABQAzAAAkAkQAkAkAAAzIAAB2QAAAjgRAcQgIANgLALQgkAkgzAAg");
	this.shape_13.setTransform(-7.9867,-2.7333);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiNDEIkiAAQg3AAgmgnQgngnAAg2IAAjXIAAgsILMAAIEXAAQA3AAAmAnQAnAnAAA2IAAB/QAAAmgTAeQgIAOgMAMQgnAmg2AAg");
	this.shape_14.setTransform(-3.9933,-1.3667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().rc(-60.4,-21,120.8,42,0,14.2,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(615));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-21,120.8,42);


(lib.bodrumfinalbeyaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beyaz-kare
	this.instance = new lib.beyazkarecopy3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-65.65,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({startPosition:83},0).to({_off:true},1).wait(540));

	// Layer_7
	this.instance_1 = new lib.pricecopy14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.6,20,1.1066,1.1066,0,0,0,0.2,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(78).to({startPosition:78},0).to({_off:true},1).wait(540));

	// back-kırmızı-modul-beyazlı
	this.instance_2 = new lib.backkırmızımodulbeyazlıcopy3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.85,-0.15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(79).to({startPosition:79},0).to({_off:true},1).wait(165).to({_off:false,startPosition:245},0).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-21.3,254.4,85.8);


(lib.antalyafinalbeyaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beyaz-kare
	this.instance = new lib.beyazkarecopy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-66.55,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({startPosition:83},0).to({_off:true},1).wait(441));

	// Layer_7
	this.instance_1 = new lib.pricecopy8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.3,-2.1,1.1094,1.1094,0,0,0,0.4,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(78).to({startPosition:78},0).to({_off:true},1).wait(441));

	// back-kırmızı-modul-beyazlı
	this.instance_2 = new lib.backkırmızımodulbeyazlıcopy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.95,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(79).to({startPosition:79},0).to({_off:true},1).wait(165).to({_off:false,startPosition:245},0).wait(276));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.9,-21.2,254.4,43.599999999999994);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// logo
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(240,228.95,0.1139,0.1139,0,0,0,527,184.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// tax
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAaIAAgjIgYAjIgKAAIAAgzIALAAIAAAiIAXgiIALAAIAAAzg");
	this.shape.setTransform(107.325,241.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAaIgPgWIgHAIIAAAOIgLAAIAAgzIALAAIAAAZIAWgZIAOAAIgWAXIAWAcg");
	this.shape_1.setTransform(101.775,241.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAaIAAgpIgQAAIAAgKIApAAIAAAKIgQAAIAAApg");
	this.shape_2.setTransform(96.3,241.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAaQgFgDgCgDQgDgEAAgGQAAgGADgDQACgEAFgBQAEgCAEAAQAEAAAFACQAEACADACIAAgHQAAgEgDgDQgEgDgFABQgEgBgEACQgDACgEADIgEgIQAEgEAGgCQAFgCAGAAQAFAAAFACQAFABADAFQADADAAAIIAAAhIgLAAIAAgGIgHAGQgFACgEAAQgEAAgEgCgAgHADQgEADAAAFQAAADAEADQADACAEABIAHgCQADgBACgDIAAgIQgCgDgDgBIgHgBQgEAAgDACg");
	this.shape_3.setTransform(91.025,241.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAhIAAgOIglAAIAAAOIgKAAIAAgYIAFAAIADgGIACgIIACgPIABgMIAmAAIAAApIAGAAIAAAYgAgGgRIgCAOIgCAIIgCAEIAYAAIAAgfIgSAAg");
	this.shape_4.setTransform(85.225,242.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAXQgGgDgDgHQgEgFAAgIQAAgGAEgHQADgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAHAAAGQAAAIgDAFQgEAHgGADQgGAEgIABQgHgBgGgEgAgHgOQgDACgCAFQgCADAAAEQAAAFACAEQACAEADACQADADAEAAQAFAAADgDQAEgCABgEQACgEAAgFQAAgEgCgDQgBgFgEgCQgDgDgFABQgEgBgDADg");
	this.shape_5.setTransform(79.025,241.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMAaIAAgpIgXAAIAAApIgLAAIAAgzIAtAAIAAAzg");
	this.shape_6.setTransform(72.875,241.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAaIAAgjIgYAjIgKAAIAAgzIALAAIAAAiIAXgiIALAAIAAAzg");
	this.shape_7.setTransform(63.975,241.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAaIAAgUIgHACIgHABQgLAAgFgFQgEgEAAgHIAAgSIALAAIAAAOQAAAGADACQADACAFABIAHgBIAFgCIAAgWIALAAIAAAzg");
	this.shape_8.setTransform(57.875,241.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAYQgGgDgDgFQgEgFgBgHIgJAAIAAAWIgLAAIAAgzIALAAIAAAUIAKAAQABgGADgEQAEgFAFgEQAFgCAHAAQAIAAAGADQAGAEADAGQAEAHAAAGQAAAIgEAFQgDAHgGADQgGAEgIABQgIAAgEgEgAACgOQgDACgBAFQgCADAAAEQAAAFACAEQABAEADACQADADAFAAQAFAAADgDQADgCACgEQACgEAAgFQAAgEgCgDQgCgFgDgCQgDgDgFABQgFgBgDADg");
	this.shape_9.setTransform(50.925,241.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAaQgFgDgCgDQgDgEAAgGQAAgGADgDQACgEAFgBQAEgCAEAAQAEAAAFACQAEACADACIAAgHQAAgEgDgDQgEgDgFABQgEgBgEACQgDACgEADIgEgIQAEgEAGgCQAFgCAGAAQAFAAAFACQAFABADAFQADADAAAIIAAAhIgLAAIAAgGIgHAGQgFACgEAAQgEAAgEgCgAgHADQgEADAAAFQAAADAEADQADACAEABIAHgCQADgBACgDIAAgIQgCgDgDgBIgHgBQgEAAgDACg");
	this.shape_10.setTransform(43.425,241.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAaIAAgUIgHACIgHABQgLAAgFgFQgEgEAAgHIAAgSIALAAIAAAOQAAAGADACQADACAFABIAHgBIAFgCIAAgWIALAAIAAAzg");
	this.shape_11.setTransform(37.625,241.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAYQgGgDgDgFQgEgFgBgHIgJAAIAAAWIgLAAIAAgzIALAAIAAAUIAKAAQABgGADgEQAEgFAFgEQAFgCAHAAQAIAAAGADQAGAEADAGQAEAHAAAGQAAAIgEAFQgDAHgGADQgGAEgIABQgIAAgEgEgAACgOQgDACgBAFQgCADAAAEQAAAFACAEQABAEADACQADADAFAAQAFAAADgDQADgCACgEQACgEAAgFQAAgEgCgDQgCgFgDgCQgDgDgFABQgFgBgDADg");
	this.shape_12.setTransform(30.675,241.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAPQACAAADgCQACgDACgGIACgRIABgNIAnAAIAAAzIgMAAIAAgpIgSAAIAAAEQAAAMgCAGQgCAIgDAFQgDAEgDACQgEACgEAAg");
	this.shape_13.setTransform(22.95,241.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKAaIgPgWIgHAIIAAAOIgLAAIAAgzIALAAIAAAZIAWgZIAOAAIgWAXIAWAcg");
	this.shape_14.setTransform(17.625,241.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAkIAAhHIAjAAQAGAAAFADQAEACADAEQACAEAAAGQAAAEgBAEQgCADgDACIgGADQAEAAADACQADADACAEQACADAAAEQAAAGgDAFQgCAEgFACQgEADgHAAgAgPAZIAUAAQAFAAADgDQADgDAAgEQAAgFgDgCQgDgDgFAAIgUAAgAgPgFIATAAQAFAAADgDQACgDAAgDQAAgEgCgDQgDgDgFAAIgTAAg");
	this.shape_15.setTransform(11.075,240.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAQIAAgMIgKAHIgDgFIALgGIgLgEIADgGIAKAHIAAgMIAFAAIgBAMIAKgHIADAGIgKAEIAKAGIgDAFIgKgHIABAMg");
	this.shape_16.setTransform(5.6,238.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_17.setTransform(170.175,241.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSALQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgHIACgMIAAgKIAdAAIAAAmIgIAAIAAgfIgNAAIAAADIgCAOQgCAGgCADQgCADgCABIgGACg");
	this.shape_18.setTransform(166.725,242.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_19.setTransform(162.375,242.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDATIAAgeIgLAAIAAgHIAdAAIAAAHIgLAAIAAAeg");
	this.shape_20.setTransform(158.675,242.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIASQgFgDgDgEQgCgFAAgGQAAgFACgEQADgFAEgDQAFgCAEAAQAGAAAEACQAFADACAFQACAFAAAFIAAACIgcAAQAAADABACIAFAEQACABADAAIAGgBIAFgDIAEAGIgHAEQgEABgFAAQgFAAgEgCgAALgCIgBgFIgDgEQgDgBgEAAQgCAAgDABIgDAEIgBAFIAUAAIAAAAg");
	this.shape_21.setTransform(154.775,242.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_22.setTransform(150.275,243.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRATIAAglIAJAAIAAANIAMAAQAEAAADACIAFADQABADABAEIgCAGQgCADgDABQgDACgEAAgAgIAMIALAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgLAAg");
	this.shape_23.setTransform(143.95,242.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHASQgEgDgDgFQgDgEABgGQgBgFADgFQADgEAEgDQAFgCAEAAQAGAAADACQAFACACADIgGAFQgEgFgFAAQgFAAgDAEQgCADAAAFIABAHIAEAEQACACADAAIAFgBIAEgEIAGAFQgCADgFACQgDACgGAAQgEAAgFgCg");
	this.shape_24.setTransform(139.7,242.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAJATIAAgZIgRAZIgIAAIAAglIAIAAIAAAZIARgZIAIAAIAAAlg");
	this.shape_25.setTransform(135.375,242.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgDATIAAgeIgLAAIAAgHIAdAAIAAAHIgLAAIAAAeg");
	this.shape_26.setTransform(131.425,242.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_27.setTransform(127.475,242.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJATIAAgQIgRAAIAAAQIgIAAIAAglIAIAAIAAAPIARAAIAAgPIAIAAIAAAlg");
	this.shape_28.setTransform(123.175,242.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJATIgHgFIAEgGIAHAEIAFABQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgBIgGAAIAAgGIAGAAIAFgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgFgBIgGABQgDABgCACIgEgFQADgDAEgCQADgBAFAAQAIAAAEACQAFADgBAFQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABIgEADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAFABIAEADQACACAAADQAAAFgEADQgEADgJAAQgFAAgEgBg");
	this.shape_29.setTransform(118.9,242.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_30.setTransform(116.075,241.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_31.setTransform(112.825,243.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKAZQgEgDgCgGQgDgFAAgIQAAgHADgGQACgGAFgEQAGgEAIgBIAKgCIAAAIIgKACQgFAAgEACQgEACgCADQgCADAAAEQACgEAEgBQAEgCAEAAQAFAAAEACQAEADADAEQACADAAAFQAAAGgCAEQgDAFgEADQgFADgGAAQgFAAgFgDgAgFgDIgEAEIgBAGIABAHIAEAFQADABACAAQAEAAACgBIAEgFIABgHIgBgGIgEgEQgCgBgEAAQgCAAgDABg");
	this.shape_32.setTransform(106.175,242.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKARQgEgCgDgFQgCgEAAgGQAAgFACgEQADgFAEgDQAFgCAFAAQAGAAAFACQAEADACAFQADAEAAAFQAAAGgDAEQgCAFgEACQgFADgGAAQgFAAgFgDgAgFgKIgEAFIgBAFIABAGIAEAFQACACADAAQADAAADgCIAEgFIABgGIgBgFIgEgFQgDgCgDAAQgDAAgCACg");
	this.shape_33.setTransform(101.6,242.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAVAYIAAgKIgxAAIAAglIAJAAIAAAeIANAAIAAgeIAIAAIAAAeIANAAIAAgeIAJAAIAAAeIAFAAIAAARg");
	this.shape_34.setTransform(96.275,243.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAJAUIAAgXQAAgFgCgCQgCgCgEABQgCAAgDABIgEAEIAAAaIgIAAIAAgmIAIAAIAAAFIADgDIAFgCIAFgBQAGAAADADQADAEAAAGIAAAag");
	this.shape_35.setTransform(88.525,242.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIASQgFgDgDgEQgCgFAAgGQAAgFACgEQADgFAEgDQAFgCAEAAQAGAAAEACQAFADACAFQACAFAAAFIAAACIgcAAQAAADABACIAFAEQACABADAAIAGgBIAFgDIAEAGIgHAEQgEABgFAAQgFAAgEgCgAALgCIgBgFIgDgEQgDgBgEAAQgCAAgDABIgDAEIgBAFIAUAAIAAAAg");
	this.shape_36.setTransform(84.025,242.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMAcIASg3IAHAAIgSA3g");
	this.shape_37.setTransform(80.55,242.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAUAUIAAgYQAAgEgCgCQgBgBgEAAQgDAAgCABIgEAEIAAAaIgHAAIAAgYQAAgEgCgCQgBgBgEAAIgFABIgDAEIAAAaIgJAAIAAgmIAJAAIAAAFIACgCIAFgDIAFgBQAEAAACACQADACABADIADgDIAEgDIAGgBQAFAAADADQADADAAAGIAAAbg");
	this.shape_38.setTransform(75.975,242.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKARQgEgCgDgFQgCgEAAgGQAAgFACgEQADgFAEgDQAEgCAGAAQAGAAAEACQAFADACAFQADAEAAAFQAAAGgDAEQgCAFgFACQgEADgGAAQgGAAgEgDgAgFgKIgEAFIgBAFIABAGIAEAFQACACADAAQADAAADgCIAEgFIABgGIgBgFIgEgFQgDgCgDAAQgDAAgCACg");
	this.shape_39.setTransform(70.35,242.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHASQgFgDgCgFQgCgEgBgGQABgFACgFQACgEAFgDQAFgCAEAAQAGAAADACQAFACACADIgGAFQgDgFgGAAQgEAAgEAEQgCADAAAFIAAAHIAFAEQACACADAAIAFgBIAEgEIAGAFQgCADgFACQgDACgGAAQgEAAgFgCg");
	this.shape_40.setTransform(66.1,242.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDAEQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIADgCIAEACQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_41.setTransform(63.075,244.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIATQgEgCgDgDIAEgGIAFAEQAEACADAAQAEAAABgCQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgDIgDgCIgEgBIgGgCIgGgCQgCgCAAgFQAAgDACgCQACgDADgCQADgBAEAAQAFAAAEABQAEACACACIgDAGQgCgCgDgBQgDgCgEAAIgEABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIAFACIAGACQAEABACABQACADAAAEQAAAEgBACQgCADgEACQgDABgGAAQgEAAgEgBg");
	this.shape_42.setTransform(60.125,242.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgJAaQgDgBgEgDIAEgGQACADADAAQADACAEAAIAFgBIAEgDQACgCgBgFIAAgEQgCACgDACQgDACgDAAQgFAAgDgCQgEgDgDgEQgCgDAAgHQAAgGACgFQADgEAEgCQADgCAFgBQADABADABIAFAFIAAgGIAJAAIAAAkQAAAFgCADQgBAEgEACQgCACgEABIgGAAIgJgBgAgHgQQgCADAAAGQAAAGACACQADADAEABIAHgCIADgDIAAgOIgDgEIgHgBQgEAAgDADg");
	this.shape_43.setTransform(55.85,243.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgSAbIAAg0IAIAAIAAAFQACgDAEgBQADgCADAAQAFAAADADQAFACABAEQADAFAAAGQAAAGgDAEQgBAFgFACQgDACgFABQgDgBgDgBQgDgCgDgDIAAAUgAgGgRIgEAEIAAAOIAEADQADACADAAQACAAADgCIAEgEIABgGIgBgHQgCgCgCgCQgDgCgCAAQgDAAgDACg");
	this.shape_44.setTransform(51.45,243.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAbIgCAAIABgIIABABIACAAIADgBIADgDIABgEIgPgmIAJAAIAKAcIALgcIAJAAIgSAtQgCAEgDACQgDACgFAAIgCAAg");
	this.shape_45.setTransform(47.025,243.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_46.setTransform(44.025,242.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFAbIAAgeIgHAAIAAgIIAHAAIAAgCQAAgGADgDQACgEAGAAIAEAAIADACIgCAFIgCAAIgCgBQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAACIAIAAIAAAIIgIAAIAAAeg");
	this.shape_47.setTransform(41.975,242);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAJAcIAAgbIgRAbIgIAAIAAgmIAIAAIAAAZIARgZIAIAAIAAAmgAgHgRQgEgCgCgEIAFgDIAEADQACABACAAQADAAACgBIAEgDIAFADQgCAEgEACQgEABgEAAQgDAAgEgBg");
	this.shape_48.setTransform(36.275,241.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_49.setTransform(31.725,242.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_50.setTransform(27.425,243.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_51.setTransform(24.175,241.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRATIAAglIAVAAIAHABIAEAEQACACAAADQAAADgCACQgCADgDAAQADAAACADQACACABAEQAAAEgEADQgDADgHAAgAgIAMIAMAAIAEgBIABgDIgBgEIgEgBIgMAAgAgIgDIAMAAIADgBIABgDIgBgDIgDgBIgMAAg");
	this.shape_52.setTransform(21.125,242.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_53.setTransform(16.525,243.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_54.setTransform(13.275,241.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgUAbIAAg1IAZAAQAFAAADACQAEACACADQABADAAAEIgBAGIgDAEIgFACIAFACQADABABADIABAGQAAAFgBADQgCADgEACQgDACgFAAgAgLATIAPAAQAEgBACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAEAAACgBQACgCAAgDQAAgDgCgCQgCgCgEAAIgOAAg");
	this.shape_55.setTransform(9.775,242.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDAEQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIADgCIAEACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_56.setTransform(85.125,236.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAJATIAAgZIgRAZIgIAAIAAglIAIAAIAAAZIARgZIAIAAIAAAlg");
	this.shape_57.setTransform(81.875,234.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAHATIgKgQIgGAGIAAAKIgIAAIAAglIAIAAIAAASIAQgSIALAAIgQARIAQAUg");
	this.shape_58.setTransform(77.75,234.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDATIAAgeIgLAAIAAgHIAdAAIAAAHIgLAAIAAAeg");
	this.shape_59.setTransform(73.725,234.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_60.setTransform(69.775,234.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_61.setTransform(65.475,235.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKARQgEgCgDgFQgCgEAAgGQAAgFACgEQADgFAEgDQAEgCAGAAQAGAAAEACQAFADACAFQADAEAAAFQAAAGgDAEQgCAFgFACQgEADgGAAQgGAAgEgDgAgFgKIgEAFIgBAFIABAGIAEAFQACACADAAQADAAADgCIAEgFIABgGIgBgFIgEgFQgDgCgDAAQgDAAgCACg");
	this.shape_62.setTransform(60.9,234.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAJATIAAgeIgRAAIAAAeIgIAAIAAglIAhAAIAAAlg");
	this.shape_63.setTransform(56.325,234.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAJATIAAgZIgRAZIgIAAIAAglIAIAAIAAAZIARgZIAIAAIAAAlg");
	this.shape_64.setTransform(49.725,234.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAJATIAAgPIgFACIgFAAQgIAAgEgDQgDgDAAgFIAAgNIAIAAIAAAKQAAAFADABQACACADAAIAFAAIAEgCIAAgQIAIAAIAAAlg");
	this.shape_65.setTransform(45.175,234.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgBASQgEgCgDgEQgCgEgBgFIgHAAIAAAQIgIAAIAAglIAIAAIAAAPIAHAAQABgFACgDQADgEAEgCQADgCAFAAQAHAAAEACQAFADACAFQACAEAAAFQAAAGgCAEQgCAFgFACQgEADgHAAQgFAAgDgCgAABgKQgBACgBADQgCACAAADQAAADACADQABADABACQADACADAAQAEAAADgCQACgCABgDQACgDAAgDQAAgDgCgCQgBgDgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_66.setTransform(40.025,234.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_67.setTransform(34.475,234.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAJATIAAgPIgFACIgFAAQgIAAgEgDQgDgDAAgFIAAgNIAIAAIAAAKQAAAFADABQACACADAAIAFAAIAEgCIAAgQIAIAAIAAAlg");
	this.shape_68.setTransform(30.175,234.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASQgEgCgDgEQgCgEgBgFIgHAAIAAAQIgIAAIAAglIAIAAIAAAPIAHAAQABgFACgDQADgEAEgCQADgCAFAAQAHAAAEACQAFADACAFQACAEAAAFQAAAGgCAEQgCAFgFACQgEADgHAAQgFAAgDgCgAABgKQgBACgBADQgCACAAADQAAADACADQABADABACQADACADAAQAEAAADgCQACgCABgDQACgDAAgDQAAgDgCgCQgBgDgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_69.setTransform(25.025,234.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgSALQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgHIACgMIAAgKIAdAAIAAAmIgIAAIAAgfIgNAAIAAADIgCAOQgCAGgCADQgCADgCABIgGACg");
	this.shape_70.setTransform(19.275,234.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAIATIgLgQIgGAGIAAAKIgIAAIAAglIAIAAIAAASIARgSIAKAAIgRARIARAUg");
	this.shape_71.setTransform(15.35,234.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUAbIAAg1IAZAAQAFAAADACQAEACACADQABADAAAEIgBAGIgDAEIgFACIAFACQADABABADIABAGQAAAFgBADQgCADgEACQgDACgFAAgAgLATIAPAAQAEgBACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAEAAACgBQACgCAAgDQAAgDgCgCQgCgCgEAAIgOAAg");
	this.shape_72.setTransform(10.475,233.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBAMIAAgJIgIAFIgBgEIAHgEIgHgDIABgEIAIAFIAAgJIADAAIgBAJIAIgFIACAEIgHADIAHAEIgCAEIgIgFIABAJg");
	this.shape_73.setTransform(6.45,232.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},47).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},219).wait(94));

	// btn
	this.instance_1 = new lib.btn("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.55,199.2,0.9861,0.9861,0,0,0,-3.7,-2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(297).to({_off:false},0).wait(63));

	// bodrum-beyaz-finbal
	this.instance_2 = new lib.bodrumfinalbeyaz("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.55,118.45,0.8623,0.8623,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(276).to({_off:false},0).wait(84));

	// antalya-beyaz-finalk
	this.instance_3 = new lib.antalyafinalbeyaz("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.25,78.9,0.8623,0.8623,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(276).to({_off:false},0).wait(84));

	// Layer_1
	this.instance_4 = new lib.ttt("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,28.05,0.8244,0.8244,0,0,0,134.9,20.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(267).to({_off:false},0).wait(93));

	// sbg
	this.instance_5 = new lib.Tween9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(260).to({_off:false},0).to({scaleX:1.1067,scaleY:1.1067,alpha:1},5).wait(95));

	// modul
	this.instance_6 = new lib.modulcopy5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(27.25,17.2,1,1,0,0,0,51.1,26);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(193).to({_off:false},0).to({_off:true},73).wait(94));

	// modul
	this.instance_7 = new lib.modulcopy4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(27.25,17.2,1,1,0,0,0,51.1,26);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({_off:true},73).wait(167));

	// modul
	this.instance_8 = new lib.modulcopy2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(27.25,17.2,1,1,0,0,0,51.1,26);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47).to({_off:false},0).to({_off:true},73).wait(240));

	// Layer_3
	this.instance_9 = new lib.gm2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(281.6,175.95,1.4779,1.4779,0,0,0,32.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},47).wait(313));

	// bg
	this.instance_10 = new lib.bg("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-63,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,111.7,316.2,151.7);
// library properties:
lib.properties = {
	id: '0B4475156016914A8E5769A58D08F925',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_atlas_.jpg", id:"300x250_atlas_"}
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
an.compositions['0B4475156016914A8E5769A58D08F925'] = {
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