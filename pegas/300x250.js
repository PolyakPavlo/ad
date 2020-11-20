(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,502,600,500],[0,0,600,500],[0,1004,480,400]]}
];


// symbols:



(lib.ant300x250 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ist300x250 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tra300x250 = function() {
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


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ant300x250();
	this.instance.parent = this;
	this.instance.setTransform(-86,-125,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-125,375,312.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tra300x250();
	this.instance.parent = this;
	this.instance.setTransform(248,-125,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232,-125,480,400);


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
	this.shape_8.graphics.f("#E31F27").s().p("EAnYAHOIAph2QAGgPAMgIQANgHANAEQATAHABAXQABAIACAEQAdAyA7AcQA9AdBKgFQA/gEAfgmQAcgjgEg2QgCgcgYghIjCjrQhChXgHhsQgLieBphyQBth1C2gNQDagQCXB1IgpB0QgFAPgNAIQgMAHgNgEQgTgHgBgXQgBgIgDgEQgdgzgzgaQg4gchJAFQhAAFgkAoQgjAnAEA3QABATAIAVQARAoAXAeICVCzQAsA7ARAfQAfA3ADAxQALCehpByQhtB2i2AMQgaACgZAAQi5AAiGhngAJoHOIARgxIADAAIgBgFIgCAFImPAAQgRAAgMgKQgMgKAAgOQAAgWAXgJQAQgGgBgPIAAgFIhCkaIkrAAIitEZIgCAFQAAAPAPAHQALAEAGAIQAGAIAAAKQAAAOgMAKQgLAKgRAAIiyABQgHAAgIgDQgNgFgFgNQgFgOAFgNQAHgQAagDQARgDAKgHQAKgGAIgMIIetaIFMAAQARAAAMAKQAMAKAAAOQAAAWgXAJQgPAHABAOIDJNeIAWhAQAGgPAMgIQANgHANAEQATAHABAXQABAIACAEQAdAyA7AcQA9AdBKgFQA/gEAfgmQAcgjgEg2QgCgcgYghIjCjrQhChXgHhsQgLieBphyQBth1C2gNQDagQCXB1IgpB0QgFAPgNAIQgMAHgNgEQgTgHgBgXQgBgIgDgEQgdgzgzgaQg4gchJAFQhAAFgkAoQgjAnAEA3QABATAIAVQARAoAXAeICVCzQAsA7ARAfQAfA3ADAxQALCehpByQhtB2i2AMQgaACgZAAQi5AAiGhngAg+hLIDIAAIg3jtgAYnGJQg7gegjg5Qglg6AAhEQADiNA7h+ICXlcIABgFQAAgPgPgHQgXgJAAgVQAAgOAMgLQAMgKARAAIGiAAQAHAAAHADQANAGAFANQAGANgGANQgGAQgXADQgVADgLALQgKAJgJAUIjPHdQg0B3gCA9QAAAgASAXQARAWAcAIQAdAGAHAAQAsAAAjgYQAjgXARgnIFNsEIF/AAQAIAAAGADQANAFAFAOQAGANgGANQgGAQgXADQgVADgLALQgKAJgJAUIi9G1QhLDBisB3QivB6jXAAQiMAAh/g9gA2WFbQhahaAAh/IABgfQAhkYDTi/QDVjAEeAAQCFAABmAaQBXAXB8A9IgpBhIgEAIQgIAMgMAFQgNAEgKgFQgMgFgDgKQgEgOgEgJQgJgUgOgNQgGgFgQgLQgpgZglgJQgZgFgnAAQhIAAhBAaQhAAYgzAuQhwBjhGB/QhJCFgVCaIgBAUQAAA4AnAoQAoApA4AAQBCAAAtglQAngfAchAIBBiZQACgDAAgGQAAgNgJgGQgDgDgKgFQgXgJAAgVQAAgPAKgJQALgKATAAIGVAAQAHgBAHADQANAGAFANQAGANgGANQgGARgXADQgUADgMAJQgKAJgJATIikF9IlNAAIgOgaQhFAchAANQhAAMhQAAQh/AAhahagEgmgAGdIFwtUIABgOQgBgNgVgLQgXgJAAgVQAAgPALgJQALgKAUAAIMEAAIg6CHQgHAQgOAHQgOAHgNgGQgUgIABgZQgBgRgNgFIgGgBIjzAAIiKE+IDNAAQAUgCAJgEQAMgFAJgQQAGgKALgGQAKgFALAAQAOAAAIAKQAJAKAAAOQAAAGgEAIIg3B+QgHAPgOAIQgNAHgNgGQgRgHABgZQAAgRgOgFIgFgBIjgAAIiRFQIFUAAQAUAAAPgIQAOgIAMgSQAGgKAKgGQAKgFALAAQAOAAAKAKQAKAKAAAOQAAAIgDAGIgvBtgEg1lAGdIFzteIABgFQAAgPgPgHQgXgJAAgVQAAgOAMgKQAMgKARAAIJ7AAQA0AAAsAdQArAcATAuQAXA3AABAQAABig3BSQg4BThXAuQhXAuhjAAIkXAAIh7EiIgCAGQAAAKALAFQAXAJAAAWQAAAOgMAKQgMAKgRAAgEgsjgBLIA9AAQA5AAAwgfQAugdAhg2QAqhFgDhFQgDhEgvgcQgSgKgagFIghAAg");
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
	this.shape.graphics.f("#4D4D4F").s().p("AAYAzIAAhGIgvBGIgWAAIAAhmIAXAAIAABFIAuhFIAWAAIAABmg");
	this.shape.setTransform(48.5,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AAYAzIAAgqIgvAAIAAAqIgWAAIAAhmIAWAAIAAApIAvAAIAAgpIAWAAIAABmg");
	this.shape_1.setTransform(36.4,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AgKBKIAAhmIAVAAIAABmgAgJgyQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGABQgFgBgEgEg");
	this.shape_2.setTransform(27.775,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AAmAzIAAhJIgiBJIgIAAIgghJIAABJIgXAAIAAhmIAdAAIAeBEIAehEIAeAAIAABmg");
	this.shape_3.setTransform(17.75,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgaAxQgLgEgIgHIAMgQQAHAHAIADQAJAEAJAAQALAAAFgEQAGgEAAgGQAAgIgGgDQgHgDgKABIgSAAIAAgRIASAAQAKAAAFgEQAGgDAAgHQAAgGgGgDQgGgEgJAAQgJAAgIADQgIAEgGAFIgLgNQAHgIAKgFQALgEANAAQAVAAAMAIQAMAGABAOQgBAHgEAFQgEAFgGADQgGAEgGABQAGAAAGACQAHADAFAFQAEAGAAAHQABAOgMAJQgMAIgWAAQgPAAgLgFg");
	this.shape_4.setTransform(5,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AAYAzIAAhGIgwBGIgVAAIAAhmIAXAAIAABFIAuhFIAWAAIAABmg");
	this.shape_5.setTransform(-11.55,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgcBCQgLgIgHgPQgGgOAAgUQAAgVAGgQQAGgRAPgKQAPgKAXgDIAcgFIAAAUIgcAFQgPACgKAFQgLAGgFAIQgFAIgCAKQAHgKALgFQALgFAKAAQAPAAALAHQALAHAGALQAGAKAAANQAAAPgGAMQgHANgLAHQgMAIgRAAQgQAAgMgIgAgPgJQgHAFgDAHQgEAHAAAJQAAAKAEAIQADAHAHAFQAGAFAJAAQAJAAAHgFQAHgFADgHQAEgIAAgKQAAgJgEgHQgDgHgHgFQgHgEgJgBQgJABgGAEg");
	this.shape_6.setTransform(-23.6768,1.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgbAvQgMgIgHgMQgGgMAAgPQAAgOAGgMQAHgMAMgIQAMgHAPAAQAQAAANAHQAMAIAGAMQAGAMAAAOQAAAPgGAMQgGAMgMAIQgNAHgQAAQgPAAgMgHgAgPgdQgHAFgDAIQgEAIAAAIQAAAJAEAIQADAIAHAFQAGAEAJABQAKgBAGgEQAHgFAEgIQADgIAAgJQAAgIgDgIQgEgIgHgFQgGgEgKAAQgJAAgGAEg");
	this.shape_7.setTransform(-35.9,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4F").s().p("Ag2BHIAAiNIA+AAQAPAAAKAGQALAGAFAKQAGAKAAAMQAAANgGAKQgFAJgLAGQgKAGgPAAIglAAIAAA1gAgdgDIAiAAQAKAAAHgGQAHgGAAgLQAAgKgHgGQgHgGgKAAIgiAAg");
	this.shape_8.setTransform(-48.025,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-11.8,112,26.4);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AguAzIAAhmIA5AAQALABAIADQAIADADAGQAEAHAAAHQAAAJgFAGQgFAGgHADQAIAAAGAIQAFAGAAAJQAAANgJAIQgIAHgTAAgAgYAgIAjAAQAGAAAEgDQADgDAAgGQAAgEgDgEQgEgEgGABIgjAAgAgYgKIAjAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAIgjAAg");
	this.shape.setTransform(54.825,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AgKBKIAAhmIAVAAIAABmgAgJgyQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGABQgFgBgEgEg");
	this.shape_1.setTransform(46.075,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AgKBbIAAglQgZgCgOgNQgPgOAAgZQAAgYAPgOQAOgOAZgBIAAglIAVAAIAAAlQAaABAOAOQAOAOAAAYQAAAZgOAOQgOANgaACIAAAlgAALAjQAJgBAHgEQAHgDAEgIQAEgIAAgLQAAgKgEgIQgEgHgHgFQgHgDgJAAgAgageQgGAFgFAHQgDAIAAAKQAAALADAIQAFAIAGADQAIAEAIABIAAhEQgIAAgIADg");
	this.shape_2.setTransform(36.15,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AgaAzQgIgEgFgIQgGgHAAgMQAAgMAGgHQAFgGAIgEQAIgDAJAAQAJAAAJADQAJADAFAGIAAgOQAAgKgGgFQgHgFgKAAQgJAAgHADQgIAEgGAGIgKgPQAJgJALgEQALgEAMAAQALAAAKAEQAKADAGAIQAFAJABANIAABEIgXAAIAAgLQgGAGgIAEQgJADgJAAQgJAAgIgDgAgQAHQgGAFAAAJQAAAIAGAFQAGAFAKAAQAGAAAHgDQAGgCAEgGIAAgPQgEgGgGgCQgHgDgGAAQgKAAgGAFg");
	this.shape_3.setTransform(22.825,3.7972);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgyBIIAAiNIAXAAIAAAOQAGgIAIgEQAJgEAJgBQANABAKAGQALAGAGAMQAGAMgBARQABASgGAKQgGANgLAGQgKAGgNAAQgJAAgJgDQgHgFgHgIIAAA1gAgQgwQgHAEgEAGIAAAoQAEAFAHAFQAHAEAJAAQAHAAAHgEQAGgFAEgHQADgIABgKQgBgKgDgIQgEgHgGgEQgHgFgHAAQgJAAgHAEg");
	this.shape_4.setTransform(11.55,5.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgKAzIAAhSIgeAAIAAgUIBRAAIAAAUIgeAAIAABSg");
	this.shape_5.setTransform(0.575,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AhFAzIAAhmIAXAAIAABTIAkAAIAAhTIAVAAIAABTIAkAAIAAhTIAXAAIAABmg");
	this.shape_6.setTransform(-12.3,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgaAxQgLgEgHgHIALgQQAHAHAJADQAIAEAJAAQALAAAFgEQAGgEAAgGQAAgIgGgDQgHgDgKABIgSAAIAAgRIASAAQAJAAAGgEQAGgDAAgHQAAgGgGgDQgGgEgJAAQgJAAgIADQgIAEgGAFIgLgNQAHgIAKgFQALgEANAAQAVAAAMAIQAMAGABAOQgBAHgEAFQgEAFgGADQgGAEgGABQAGAAAGACQAHADAEAFQAFAGAAAHQABAOgMAJQgMAIgWAAQgOAAgMgFg");
	this.shape_7.setTransform(-31.55,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4F").s().p("AgYAwQgMgIgIgLQgGgNAAgQQAAgOAGgMQAHgMAMgIQAMgHAOAAQAPAAAMAHQALAIAGAMQAHAMgBAQIAAAGIhOAAQABAHAEAGQAEAHAHAEQAHADAJABQAIAAAIgDQAHgDAGgGIAKAPQgIAHgKAEQgLAEgMAAQgPAAgMgGgAAegHQgBgHgDgGQgCgGgHgFQgGgEgKAAQgIAAgHAEQgGAFgDAFQgEAHAAAHIA5AAIAAAAg");
	this.shape_8.setTransform(-42.5,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4F").s().p("AgcBCQgLgIgHgPQgGgOAAgUQAAgVAGgQQAGgRAPgKQAPgKAXgDIAcgFIAAAUIgcAFQgPACgKAFQgLAGgFAIQgFAIgCAKQAHgKALgFQALgFAKAAQAPAAALAHQALAHAGALQAGAKAAANQAAAPgGAMQgHANgLAHQgMAIgRAAQgQAAgMgIgAgPgJQgHAFgDAHQgEAHAAAJQAAAKAEAIQADAHAHAFQAGAFAJAAQAJAAAHgFQAHgFADgHQAEgIAAgKQAAgJgEgHQgDgHgHgFQgHgEgJgBQgJABgGAEg");
	this.shape_9.setTransform(-54.4768,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-11.8,123.30000000000001,26.4);


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


(lib.Tween10copy6 = function(mode,startPosition,loop) {
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


(lib.Tween10copy2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#EE2424").s().p("AAlA+IAAhCIgYBCIgZAAIgYhCIAABCIguAAIAAh7IA9AAIAVA7IAWg7IA9AAIAAB7g");
	this.shape.setTransform(51.175,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE2424").s().p("AgsBYIgHgBIgGgBIAHgqIAFACIAFABIALgBQAEgCABgCIABgDIgxh+IAxAAIAXBIIAYhIIAxAAIg2CMQgGAOgIAIQgIAHgLADQgLADgOAAIgFAAg");
	this.shape_1.setTransform(34.575,5.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE2424").s().p("AhDBYIAAisIAuAAIAAANQAIgIAJgEQAHgEALAAQAPAAANAIQAMAHAHAPQAHAOABAVQgBAWgHAOQgHAOgMAIQgNAHgPAAQgKAAgIgDQgJgEgIgJIAAA9gAgMgsQgGADgDAEIAAAgQADADAGACQAGACAFAAQAIAAAHgFQAGgHAAgMQAAgLgGgGQgHgHgIAAQgFAAgGACg");
	this.shape_2.setTransform(20.4,4.9222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2424").s().p("AAeBOIAAggIg7AAIAAAgIgvAAIAAhHQAFABADgCQAEgCACgEQADgGACgMIAJg7IBvAAIAABTIAOAAIAABIgAgLgSQgBAIgDAHQgCAEgEAFIAlAAIAAgsIgYAAg");
	this.shape_3.setTransform(4.225,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE2424").s().p("AglA4QgQgJgIgPQgIgOAAgSQAAgRAIgOQAIgPAQgKQAQgIAVgBQAWABAQAIQAQAKAIAPQAIAOAAARQAAASgIAOQgIAPgQAJQgQAKgWAAQgVAAgQgKgAgQgQQgFAHAAAJQAAALAFAGQAGAHAKAAQALAAAGgHQAFgGAAgLQAAgJgFgHQgGgHgLAAQgKAAgGAHg");
	this.shape_4.setTransform(-11.375,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE2424").s().p("AhMBWIAAisICPAAIAAAuIhbAAIAAAOIAqAAQATABANAHQANAIAHALQAHANAAAPQAAAQgHANQgHANgNAIQgNAHgTAAgAgYApIAjAAQAGAAADgDQAEgDAAgGQAAgFgEgDQgDgCgGAAIgjAAg");
	this.shape_5.setTransform(-26.875,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgWAXQgJgJAAgOQAAgNAJgJQAJgKANAAQAOAAAJAKQAJAJAAANQAAAOgJAJQgJAKgOgBQgNABgJgKg");
	this.shape_6.setTransform(-46,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-17.3,112.7,36.5);


(lib.Tween8copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2424").s().p("AATA/IAAgtIglAAIAAAtIgvAAIAAh9IAvAAIAAAoIAlAAIAAgoIAvAAIAAB9g");
	this.shape.setTransform(70.95,-2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE2424").s().p("AgoA+QgJgFgHgJQgHgJAAgOQAAgQAHgIQAHgJAJgDQAKgDAKgBQANABAJADQAKAEAFAHIAAgOQAAgGgGgFQgFgEgLAAQgJAAgKADQgIADgIAGIgQgdQAIgGALgFQAKgEAKgCQALgCAIAAQAQAAAPAEQAOAFAIAMQAJALAAAVIAABLIgvAAIAAgMQgFAGgLAFQgJAEgMAAQgKAAgKgEgAgLASQgGABAAAHQAAAFAGADQAFACAGAAQAFgBAFgBQAEgCADgDIAAgHQgDgDgEgCQgFgCgFAAQgGAAgFADg");
	this.shape_1.setTransform(55.3,-2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE2424").s().p("AAlA/IAAhEIgYBEIgZAAIgYhEIAABEIgvAAIAAh9IA+AAIAVA9IAWg9IA+AAIAAB9g");
	this.shape_2.setTransform(38.775,-2.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2424").s().p("AgnA+QgKgFgHgJQgHgJAAgOQAAgQAHgIQAHgJAKgDQAKgDAJgBQANABAJADQAKAEAFAHIAAgOQAAgGgFgFQgHgEgKAAQgJAAgJADQgJADgIAGIgQgdQAJgGAKgFQAKgEAKgCQALgCAJAAQAQAAAOAEQANAFAJAMQAJALAAAVIAABLIgvAAIAAgMQgFAGgLAFQgJAEgMAAQgJAAgKgEgAgLASQgFABgBAHQABAFAFADQAEACAHAAQAEgBAFgBQAFgCADgDIAAgHQgDgDgFgCQgFgCgEAAQgHAAgEADg");
	this.shape_3.setTransform(21.4,-2.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE2424").s().p("AhFAaQAEAAAEgDQADgCADgHQADgGABgLIAJg9IBwAAIAAB9IgvAAIAAhTIgZAAIgDAYQgDAUgHANQgHAOgNAIQgNAIgVAAg");
	this.shape_4.setTransform(6.175,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE2424").s().p("AgoA+QgJgFgHgJQgHgJAAgOQAAgQAHgIQAHgJAJgDQALgDAJgBQANABAJADQAKAEAFAHIAAgOQAAgGgFgFQgHgEgKAAQgJAAgJADQgKADgHAGIgQgdQAIgGALgFQAKgEALgCQAKgCAJAAQAPAAAOAEQAOAFAJAMQAJALAAAVIAABLIgvAAIAAgMQgFAGgKAFQgKAEgMAAQgJAAgLgEgAgMASQgEABAAAHQAAAFAEADQAFACAHAAQAEgBAGgBQAFgCACgDIAAgHQgCgDgFgCQgGgCgEAAQgHAAgFADg");
	this.shape_5.setTransform(-9,-2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE2424").s().p("AArBnIAAggIhVAAIAAAgIg1AAIAAhLQAIgCAGgDQAGgEAEgJQAEgJACgQIALhXICHAAIAAB/IAPAAIAABOgAgMgKQgCAKgEAJQgEAKgHAGIA5AAIAAhRIgjAAg");
	this.shape_6.setTransform(-25.825,-3.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgWAXQgJgJAAgOQAAgMAJgKQAJgJANAAQAOAAAJAJQAJAKAAAMQAAAOgJAJQgJAKgOAAQgNAAgJgKg");
	this.shape_7.setTransform(-46,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-23,130.8,36.7);


(lib.Tween8copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2424").s().p("Ag6BMIAAiVIAoAAIAAAMQAHgIAIgDQAGgDAJAAQANAAALAGQALAHAGAMQAGANAAASQAAATgGAMQgGAMgLAHQgLAGgNAAQgJAAgGgDQgIgDgHgIIAAA1gAgKgmQgFACgDAEIAAAbQADAEAFABQAFACAEAAQAHAAAGgFQAGgFAAgLQAAgKgGgFQgGgGgHAAQgEAAgFACg");
	this.shape.setTransform(10.625,3.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE2424").s().p("AgUBRIAAhsIAoAAIAABsgAgPgpQgGgGgBgKQABgKAGgGQAHgHAIAAQAJAAAHAHQAGAGABAKQgBAKgGAGQgHAGgJABQgIgBgHgGg");
	this.shape_1.setTransform(0.45,-1.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE2424").s().p("AAgA2IAAg6IgVA6IgVAAIgVg6IAAA6IgoAAIAAhrIA1AAIASA0IATg0IA1AAIAABrg");
	this.shape_2.setTransform(-11.025,1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2424").s().p("AggA0QgNgFgHgHIASgYIALAGIALADIALACQAHAAADgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgDgDgCQgEgBgHgBIgUAAIAAgcIAUAAIAHgBIAEgCIABgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAQgDgBgFAAQgJAAgIACQgHADgGAGIgTgYQAIgHAMgFQAMgFAPgBQAcABAOAHQANAJAAAOQAAAIgIAHQgHAHgMACQAHABAHACQAGADAEAGQAFAFABAHQgBAKgGAIQgHAHgMAEQgMAFgRAAQgRgBgOgEg");
	this.shape_3.setTransform(-25.1,1.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE2424").s().p("AgWBLIAAiVIAtAAIAACVg");
	this.shape_4.setTransform(-33.925,-0.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgGAIAAQAKAAAGAGQAHAHgBAIQABAKgHAGQgGAGgKABQgIgBgHgGg");
	this.shape_5.setTransform(-44.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-15.5,65.8,30.9);


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


(lib.Tween6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AgnAlIAAhJIA1AAQAIAAAGADQAFADADAEQACAEAAAFQAAAHgEAEQgDAEgGACQAHAAAEAFQAEAFAAAHQAAAFgCAFQgDAEgGADQgFADgJAAgAgLARIATAAIADgBIABgDIgBgCIgDgBIgTAAgAgLgKIASAAIADAAIABgDIgBgCIgDgBIgSAAg");
	this.shape.setTransform(-46.7,-77.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AALAlIAAgjIgXAjIgaAAIAAhJIAcAAIAAAhIAVghIAcAAIAABJg");
	this.shape_1.setTransform(-60.075,-77.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AgPAiQgKgFgFgIQgFgJgBgMQABgLAFgJQAFgIAKgFQAJgFALAAQAJAAAGACQAGACAFAEQAEADACADIgSARQgCgDgDgCQgDgBgFAAQgGAAgDADQgEAEAAAGQAAAHAEAEQADAEAGAAIAIgCQADgCACgDIASARQgCADgEADQgFAEgGACQgGACgJAAQgLAAgJgFg");
	this.shape_2.setTransform(-68.575,-77.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AALA0IAAgjIgXAjIgaAAIAAhKIAcAAIAAAhIAVghIAcAAIAABKgAgOggQgHgDgFgHIAMgJQACAEAEACQAEACAEAAQAFAAAEgCQAEgCADgEIALAJQgFAHgHADQgGAEgJAAQgHAAgHgEg");
	this.shape_3.setTransform(-77.175,-79);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgSAiQgKgEgFgJQgFgJgBgMQAAgKAGgJQAFgIAJgGQAJgFALAAQALAAAJAFQAIAFAFAJQAGAKAAAMIAAAGIgyAAQABADAEADQAEADAGAAIAGgBIAGgCIAFgCIAMARIgJAFQgGACgGABIgLABQgLAAgJgFgAANgIIgBgEQgBgCgDgBQgDgCgEAAQgDAAgDACIgEADIgBAEIAXAAIAAAAg");
	this.shape_4.setTransform(-86.025,-77.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgoA1IAAhnIAcAAIAAAIQAFgFAFgCQAEgCAGgBQAKABAHAEQAHAEAFAJQAEAJAAAMQAAANgEAIQgFAJgHAEQgHAFgKAAQgGAAgEgDQgFgBgFgGIAAAlgAgGgZIgGADIAAATIAFADIAHABQAEAAAEgCQAEgFABgHQgBgGgEgEQgEgEgEAAIgGACg");
	this.shape_5.setTransform(-94.575,-76.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgNA3IAAhJIAbAAIAABJgAgKgcQgFgFABgGQgBgHAFgEQAEgFAGABQAGgBAFAFQAEAEAAAHQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_6.setTransform(-105.5,-79.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AAWAlIAAgnIgOAnIgOAAIgPgnIAAAnIgcAAIAAhJIAlAAIAMAkIANgkIAlAAIAABJg");
	this.shape_7.setTransform(-113.375,-77.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4F").s().p("AAMAlIAAgWIgLAAIgJAWIgfAAIAOgZIgGgEQgDgDgCgEQgCgEgBgHQAAgHAEgGQADgGAGgEQAHgDAJAAIAyAAIAABJgAgJgNQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIAEABIARAAIAAgIIgRAAIgEABg");
	this.shape_8.setTransform(-123.8,-77.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4F").s().p("AgoA1IAAhnIAcAAIAAAIQAFgFAFgCQAEgCAGgBQAKABAHAEQAHAEAFAJQAEAJAAAMQAAANgEAIQgFAJgHAEQgHAFgKAAQgGAAgEgDQgFgBgFgGIAAAlgAgGgZIgGADIAAATIAFADIAHABQAEAAAEgCQAEgFABgHQgBgGgEgEQgEgEgEAAIgGACg");
	this.shape_9.setTransform(-132.725,-76.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4F").s().p("AATAzIAAhKIgkAAIAABKIggAAIAAhlIBiAAIAABlg");
	this.shape_10.setTransform(-143.35,-78.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.3,-89.1,109.70000000000002,21.099999999999994);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AgNA3IAAhJIAbAAIAABJgAgKgcQgEgFAAgGQAAgGAEgFQAFgFAFABQAHgBAEAFQAFAFgBAGQABAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape.setTransform(-24.65,-61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AALAlIAAgbIgVAAIAAAbIgcAAIAAhJIAcAAIAAAXIAVAAIAAgXIAcAAIAABJg");
	this.shape_1.setTransform(-31.475,-59.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AALAlIAAgjIgXAjIgaAAIAAhJIAcAAIAAAhIAVghIAcAAIAABJg");
	this.shape_2.setTransform(-40.875,-59.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AALAlIAAgYQgDACgGACQgFACgHAAQgPAAgHgIQgGgHAAgLIAAgdIAcAAIAAAVQAAAFADADQACACAFAAIAHgBIAEgCIAAgcIAcAAIAABJg");
	this.shape_3.setTransform(-50.225,-59.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AALAlIAAgYQgDACgGACQgFACgHAAQgPAAgHgIQgGgHAAgLIAAgdIAcAAIAAAVQAAAFADADQACACAFAAIAHgBIAEgCIAAgcIAcAAIAABJg");
	this.shape_4.setTransform(-59.425,-59.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgSAiQgKgEgFgJQgFgJgBgMQAAgKAGgJQAFgIAJgGQAJgFALAAQALAAAJAFQAIAFAFAJQAGAKAAAMIAAAGIgyAAQABADAEADQAEADAGAAIAGgBIAGgCIAFgCIAMARIgJAFQgGACgGABIgLABQgLAAgJgFgAANgIIgBgEQgBgCgDgBQgDgCgEAAQgDAAgDACIgEADIgBAEIAXAAIAAAAg");
	this.shape_5.setTransform(-68.075,-59.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AgoA1IAAhnIAcAAIAAAIQAFgFAFgCQAEgCAGgBQAKABAHAEQAHAEAFAJQAEAJAAAMQAAANgEAIQgFAJgHAEQgHAFgKAAQgGAAgEgCQgFgDgFgFIAAAlgAgGgaIgGAEIAAATIAFADIAHABQAEAAAEgCQAEgFABgHQgBgGgEgEQgEgEgEAAIgGABg");
	this.shape_6.setTransform(-76.625,-58.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4F").s().p("AgaA0IgEAAIgDgBIAEgYIACABIADAAIAHgBIADgCIABgCIgehKIAeAAIANAqIAOgqIAeAAIghBTQgDAIgFAEQgEAFgHACQgHABgIAAIgDAAg");
	this.shape_7.setTransform(-85.575,-58.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4F").s().p("AgPAzIAAhKIgbAAIAAgbIBVAAIAAAbIgcAAIAABKg");
	this.shape_8.setTransform(-94.3,-61.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4F").s().p("AgnAlIAAhJIA1AAQAJAAAEADQAGADADAEQADAEgBAFQAAAHgDAEQgEAEgGACQAHAAAEAFQAEAFAAAHQAAAFgDAFQgDAEgFADQgFADgIAAgAgLARIATAAIADgBIABgDIgBgCIgDgBIgTAAgAgLgKIASAAIACAAIABgDIgBgCIgCgBIgSAAg");
	this.shape_9.setTransform(-107.6,-59.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4F").s().p("AgSAiQgKgEgFgJQgFgJgBgMQAAgKAGgJQAFgIAJgGQAJgFALAAQALAAAJAFQAIAFAFAJQAGAKAAAMIAAAGIgyAAQABADAEADQAEADAGAAIAGgBIAGgCIAFgCIAMARIgJAFQgGACgGABIgLABQgLAAgJgFgAANgIIgBgEQgBgCgDgBQgDgCgEAAQgDAAgDACIgEADIgBAEIAXAAIAAAAg");
	this.shape_10.setTransform(-120.425,-59.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4F").s().p("AgWAvQgJgGgFgKQgFgJAAgMQAAgRAFgMQAEgMAKgHQAJgHANgCIAFgCQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIAfAAQAAAFgDAEQgDADgEADIgKAEIgJABIgNAEQgFADgDACQgDADAAAEQAEgFAGgCQAEgDAHAAQALABAHAEQAIAGAFAJQAEAIAAAKQAAAKgFAJQgFAJgKAGQgJAFgNAAQgMAAgKgFgAgJADQgDAEgBAGQABAHADADQAEAEAFABQAGgBAEgEQADgDAAgHQAAgGgDgEQgEgDgGAAQgFAAgEADg");
	this.shape_11.setTransform(-129.15,-61.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4D4F").s().p("AgSAiQgKgEgFgJQgFgJgBgMQAAgKAGgJQAFgIAJgGQAJgFALAAQALAAAJAFQAIAFAFAJQAGAKAAAMIAAAGIgyAAQABADAEADQAEADAGAAIAGgBIAGgCIAFgCIAMARIgJAFQgGACgGABIgLABQgLAAgJgFgAANgIIgBgEQgBgCgDgBQgDgCgEAAQgDAAgDACIgEADIgBAEIAXAAIAAAAg");
	this.shape_12.setTransform(-137.725,-59.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4D4F").s().p("AgNAlIAAgxIgTAAIAAgYIBBAAIAAAYIgTAAIAAAxg");
	this.shape_13.setTransform(-145.55,-59.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4F").s().p("AgXAkQgFgCgEgGQgFgFAAgIQAAgKAFgFQAEgEAFgCQAGgCAFAAQAIAAAFACQAGACADAEIAAgIQAAgEgEgCQgDgDgGAAQgFAAgFACQgGACgEADIgJgRQAEgEAHgCIALgEIAMgBQAJAAAIADQAJACAEAHQAGAHAAAMIAAAsIgcAAIAAgHQgDAEgGADQgFACgIAAQgFAAgGgDgAgGAKQgDACgBADQABADADACQADABADAAIAFgBQADgBACgCIAAgEQgCgCgDgBIgFgBQgDAAgDABg");
	this.shape_14.setTransform(-21.25,-77.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4F").s().p("AALAlIAAgbIgVAAIAAAbIgcAAIAAhJIAcAAIAAAXIAVAAIAAgXIAcAAIAABJg");
	this.shape_15.setTransform(-29.975,-77.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4F").s().p("AgPAiQgKgFgFgIQgFgJgBgMQABgLAFgJQAFgIAKgFQAJgFALAAQAJAAAGACQAGACAEAEQAFADACADIgRAOIgFgFQgEgCgEAAQgFAAgCACQgEADgCAEIAVAAIAAARIgVAAQACAEAEADQACACAFAAQAEAAAEgCIAFgFIARAOQgCADgFADQgEAEgGACQgGACgJAAQgLAAgJgFg");
	this.shape_16.setTransform(-42.425,-77.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D4D4F").s().p("AgXAkQgFgCgFgGQgEgFAAgIQAAgKAEgFQAFgEAFgCQAGgCAGAAQAHAAAFACQAGACADAEIAAgIQAAgEgDgCQgEgDgFAAQgGAAgGACQgFACgFADIgJgRQAGgEAFgCIANgEIAKgBQAKAAAIADQAIACAGAHQAFAHAAAMIAAAsIgcAAIAAgHQgDAEgGADQgFACgHAAQgGAAgGgDgAgHAKQgCACAAADQAAADACACQAEABADAAIAGgBQACgBACgCIAAgEQgCgCgCgBIgGgBQgDAAgEABg");
	this.shape_17.setTransform(-50.9,-77.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D4D4F").s().p("AAGAlIgMgYIgFAHIAAARIgcAAIAAhJIAcAAIAAAaIAQgaIAhAAIgZAiIAbAng");
	this.shape_18.setTransform(-58.8,-77.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D4D4F").s().p("AgSAiQgKgEgFgJQgFgJgBgMQAAgKAGgJQAFgIAJgGQAJgFALAAQALAAAJAFQAIAFAFAJQAGAKAAAMIAAAGIgyAAQABADAEADQAEADAGAAIAGgBIAGgCIAFgCIAMARIgJAFQgGACgGABIgLABQgLAAgJgFgAANgIIgBgEQgBgCgDgBQgDgCgEAAQgDAAgDACIgEADIgBAEIAXAAIAAAAg");
	this.shape_19.setTransform(-67.725,-77.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D4D4F").s().p("AALAlIAAgYQgDACgGACQgFACgHAAQgPAAgHgIQgGgHAAgLIAAgdIAcAAIAAAVQAAAFADADQACACAFAAIAHgBIAEgCIAAgcIAcAAIAABJg");
	this.shape_20.setTransform(-76.575,-77.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D4D4F").s().p("AgWAhQgJgFgFgJQgFgJAAgKQAAgKAFgIQAFgJAJgGQAKgFAMAAQANAAAJAFQAKAGAFAJQAFAIAAAKQAAAKgFAJQgFAJgKAFQgJAGgNAAQgMAAgKgGgAgJgJQgDAEgBAFQABAGADAEQAEAEAFABQAGgBAEgEQADgEAAgGQAAgFgDgEQgEgEgGAAQgFAAgEAEg");
	this.shape_21.setTransform(-89.55,-77.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D4D4F").s().p("AAGAlIgMgYIgFAHIAAARIgcAAIAAhJIAcAAIAAAaIAQgaIAhAAIgZAiIAbAng");
	this.shape_22.setTransform(-97.8,-77.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D4D4F").s().p("AALAlIAAgYQgDACgGACQgFACgHAAQgPAAgHgIQgGgHAAgLIAAgdIAcAAIAAAVQAAAFADADQACACAFAAIAHgBIAEgCIAAgcIAcAAIAABJg");
	this.shape_23.setTransform(-107.225,-77.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D4D4F").s().p("AgSAiQgKgEgFgJQgFgJgBgMQAAgKAGgJQAFgIAJgGQAJgFALAAQALAAAJAFQAIAFAFAJQAGAKAAAMIAAAGIgyAAQABADAEADQAEADAGAAIAGgBIAGgCIAFgCIAMARIgJAFQgGACgGABIgLABQgLAAgJgFgAANgIIgBgEQgBgCgDgBQgDgCgEAAQgDAAgDACIgEADIgBAEIAXAAIAAAAg");
	this.shape_24.setTransform(-115.925,-77.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4D4D4F").s().p("AALAlIAAgbIgVAAIAAAbIgcAAIAAhJIAcAAIAAAXIAVAAIAAgXIAcAAIAABJg");
	this.shape_25.setTransform(-124.825,-77.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D4D4F").s().p("AgVAhQgKgFgFgJQgFgJAAgKQAAgKAFgIQAFgJAKgGQAIgFANAAQAOAAAJAFQAJAGAFAJQAFAIAAAKQAAAKgFAJQgFAJgJAFQgJAGgOAAQgNAAgIgGgAgJgJQgEAEABAFQgBAGAEAEQADAEAGABQAHgBADgEQAEgEAAgGQAAgFgEgEQgDgEgHAAQgGAAgDAEg");
	this.shape_26.setTransform(-133.95,-77.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D4D4F").s().p("AgXAuQgNgGgHgMQgHgMgBgQQABgPAHgMQAHgMANgGQANgHAPAAQANAAAKAEQAJAFAGAHQAGAGADAIIgbAMQgDgGgEgEQgGgFgHAAQgHAAgFAEQgGADgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAFADAHABQAHgBAGgEQAEgEADgGIAbAMQgDAHgGAHQgGAHgJAEQgKAFgNAAQgPAAgNgHg");
	this.shape_27.setTransform(-143.7,-78.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.3,-89.1,134.9,38.699999999999996);


(lib.Tween5copy14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEASIABgLIgKAGIgDgIIAJgFIgJgEIADgHIAKAGIgBgMIAIAAIgBAMIAKgGIAFAHIgLAEIALAFIgFAIIgKgGIABALg");
	this.shape.setTransform(-21.95,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA5IAAgsIgpAAIAAAsIgiAAIAAhxIAiAAIAAAoIApAAIAAgoIAiAAIAABxg");
	this.shape_1.setTransform(-28.9,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA5IgFgOIgnAAIgFAOIgnAAIArhxIApAAIAqBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-41.35,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-53.925,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBKIAuhtIhFAAIAAgmIB5AAIAAAeIgyB1g");
	this.shape_4.setTransform(-66.85,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBGQgPgFgMgKIAZggQAHAGALAEQAJADAKAAQALAAAFgEQAEgDAAgFQABgFgFgEQgFgDgJAAQgJAAgGACQgHACgGAGIgfgHIAAhaIBxAAIAAAnIhDAAIAAAVQAEgFAJgDQAHgDAJAAQAOAAAKAGQALAGAHALQAGAKABAPQgBAQgHAMQgJAMgOAHQgPAHgUAAQgUAAgQgGg");
	this.shape_5.setTransform(-80.2,1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBJQgMgDgJgGIATgjQAGAEAHACQAHACAHAAQAOAAAJgIQAJgGAAgMIAAgBQgGAIgJAEQgIAEgLAAQgNAAgMgGQgMgGgIgLQgHgJgBgRQABgQAIgMQAIgMAOgHQAOgGARAAQAYAAAQAKQAPAKAIASQAHARAAAVQABAYgKASQgKARgRAJQgSAJgXAAQgNAAgMgEgAgOghQgFAEgBAFQAAAEAEADQADADAFACIAJABQAFAAAGgBQAFgCAEgEQAAgHgGgFQgFgGgLAAQgIAAgFADg");
	this.shape_6.setTransform(-94.4,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BMIAAgjIApgdQAPgLAGgGQAIgGACgEQACgEAAgEQAAgGgFgDQgFgDgHAAQgLAAgJAEQgKAEgIAIIgZgeQAJgJAKgGQALgGALgCQAMgDAKAAQASABAPAGQAOAHAIALQAIAMAAAPQAAAKgEAJQgFAJgKAKQgLAKgRALIAwAAIAAAog");
	this.shape_7.setTransform(-108.325,1.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-12.7,100.2,29.3);


(lib.Tween5copy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEASIABgLIgKAGIgDgIIAJgFIgJgEIADgHIAKAGIgBgMIAIAAIgBAMIAKgGIAFAHIgLAEIALAFIgFAIIgKgGIABALg");
	this.shape.setTransform(-21.95,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA5IAAgsIgpAAIAAAsIgiAAIAAhxIAiAAIAAAoIApAAIAAgoIAiAAIAABxg");
	this.shape_1.setTransform(-28.9,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA5IgFgOIgnAAIgFAOIgnAAIArhxIApAAIAqBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-41.35,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-53.925,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBKIAuhtIhFAAIAAgmIB5AAIAAAeIgyB1g");
	this.shape_4.setTransform(-66.85,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBGQgPgFgMgKIAZggQAHAGALAEQAJADAKAAQALAAAFgEQAEgDAAgFQABgFgFgEQgFgDgJAAQgJAAgGACQgHACgGAGIgfgHIAAhaIBxAAIAAAnIhDAAIAAAVQAEgFAJgDQAHgDAJAAQAOAAAKAGQALAGAHALQAGAKABAPQgBAQgHAMQgJAMgOAHQgPAHgUAAQgUAAgQgGg");
	this.shape_5.setTransform(-80.2,1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBJQgMgDgJgGIATgjQAGAEAHACQAHACAHAAQAOAAAJgIQAJgGAAgMIAAgBQgGAIgJAEQgIAEgLAAQgNAAgMgGQgMgGgIgLQgHgJgBgRQABgQAIgMQAIgMAOgHQAOgGARAAQAYAAAQAKQAPAKAIASQAHARAAAVQABAYgKASQgKARgRAJQgSAJgXAAQgNAAgMgEgAgOghQgFAEgBAFQAAAEAEADQADADAFACIAJABQAFAAAGgBQAFgCAEgEQAAgHgGgFQgFgGgLAAQgIAAgFADg");
	this.shape_6.setTransform(-94.4,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BMIAAgjIApgdQAPgLAGgGQAIgGACgEQACgEAAgEQAAgGgFgDQgFgDgHAAQgLAAgJAEQgKAEgIAIIgZgeQAJgJAKgGQALgGALgCQAMgDAKAAQASABAPAGQAOAHAIALQAIAMAAAPQAAAKgEAJQgFAJgKAKQgLAKgRALIAwAAIAAAog");
	this.shape_7.setTransform(-108.325,1.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-12.7,100.2,29.3);


(lib.Tween5copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDASIAAgLIgJAGIgFgIIAKgFIgKgEIAFgHIAJAGIAAgMIAHAAIgBAMIAKgGIAEAHIgJAEIAJAFIgEAIIgKgGIABALg");
	this.shape.setTransform(-24.25,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA5IAAgsIgnAAIAAAsIgjAAIAAhxIAjAAIAAAoIAnAAIAAgoIAjAAIAABxg");
	this.shape_1.setTransform(-31.2,3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA5IgDgOIgpAAIgDAOIgoAAIAqhxIArAAIAqBxgAALANIgLgjIgKAjIAVAAg");
	this.shape_2.setTransform(-43.65,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgNgGgGgLQgGgLAAgOIAAhCIAjAAIAABBQAAAIAFAGQAGAFAJAAQALAAAFgFQAFgGAAgIIAAhBIAjAAIAABCQAAAOgGALQgGALgMAGQgNAHgTAAQgSAAgMgHg");
	this.shape_3.setTransform(-56.225,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBHQgNgHgIgKQgIgLgEgOQgEgNAAgQQAAgPAEgNQAEgOAIgLQAIgKANgHQAMgFAQgBQARABAMAFQAMAHAJAKQAIALAEAOQAEANAAAPQAAAQgEANQgEAOgIALQgJAKgMAHQgMAGgRAAQgQAAgMgGgAgPgbQgFAJAAASQAAATAFAJQAFAJAKAAQALAAAFgJQAFgJAAgTQAAgSgFgJQgFgJgLAAQgKAAgFAJg");
	this.shape_4.setTransform(-69.825,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBJQgMgDgJgGIATgjQAGAEAGACQAHACAIAAQAOAAAJgIQAJgGAAgMIAAgBQgGAIgJAEQgIAEgKAAQgOAAgMgGQgMgGgHgLQgIgJAAgRQAAgQAIgMQAIgMAOgHQANgGATAAQAXAAAQAKQAQAKAHASQAIARAAAVQgBAYgJASQgKARgRAJQgTAJgWAAQgMAAgNgEgAgOghQgGAEAAAFQABAEADADQADADAFACIAIABQAGAAAGgBQAEgCAGgEQgBgHgGgFQgFgGgLAAQgJAAgEADg");
	this.shape_5.setTransform(-83.9,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBDQgPgKgIgSQgHgRgBgWQABgYAJgRQAKgRASgJQARgJAXAAQANABAMADQAMADAKAGIgTAjQgHgEgHgCQgGgCgIAAQgHAAgHACQgIADgEAGQgGAGAAAJIAAABQAGgIAKgEQAHgEALAAQANAAANAGQAMAGAHALQAIAJAAARQgBAQgHAMQgJAMgOAHQgOAGgRAAQgXAAgRgKgAgKAOQgGABgEADQABAIAFAGQAFAFALAAQAJAAAEgDQAFgEABgEQAAgFgEgEIgIgDIgJgCIgKACg");
	this.shape_6.setTransform(-97.75,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADBKIAAhaIgYAYIgagaIA4g3IAnAAIAACTg");
	this.shape_7.setTransform(-110.8,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-12.7,98.4,29.3);


(lib.Tween4copy14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAZIAAgKIgcAAIAAAKIgIAAIAAgSIAEAAIADgFIABgFIABgMIABgKIAeAAIAAAgIAEAAIAAASgAgFgMIgBAKIgBAGIgDADIATAAIAAgYIgNAAg");
	this.shape.setTransform(-77.85,-17.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAIAAIAAAogAgCgTQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(-81.3,-19.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAVAAQAFAAADABIAEAEQACACAAADQAAAEgCACQgCADgDAAQAEAAABADQADADAAADQAAAFgEADQgDADgIAAgAgIANIAMAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIABgDIgBgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgMAAgAgIgDIAMAAIADgBIACgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgDgBIgMAAg");
	this.shape_2.setTransform(-84.5,-18.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKASQgFgCgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAEgDAGAAQAGAAAFADQAFADACAEQADAFAAAFQAAAGgDAFQgCAFgFACQgFADgGAAQgGAAgEgDgAgFgLIgFAFIgBAGIABAHIAFAFIAFACIAGgCIAFgFIABgHIgBgGIgFgFQgDgBgDAAQgDAAgCABg");
	this.shape_3.setTransform(-91.45,-18.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAUIAAgnIAdAAIAAAIIgUAAIAAAfg");
	this.shape_4.setTransform(-95.5,-18.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKASQgFgCgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAEgDAGAAQAGAAAFADQAFADACAEQADAFAAAFQAAAGgDAFQgCAFgFACQgFADgGAAQgGAAgEgDgAgFgLIgFAFIgBAGIABAHIAFAFIAFACIAGgCIAFgFIABgHIgBgGIgFgFQgDgBgDAAQgDAAgCABg");
	this.shape_5.setTransform(-100,-18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAJAAIAAAOIANAAQAEAAADACQADACACACIABAGQAAADgBADQgCADgDACQgDACgEAAgAgIANIAMAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIABgEIgBgEQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgMAAg");
	this.shape_6.setTransform(-104.525,-18.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHASQgFgCgCgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAGAAADACQAEACACADIgFAFQgEgEgGAAQgEAAgEADQgDAEAAAFQAAAEACADQABADADACIAFACQADAAADgCIAEgDIAFAFQgCADgEACQgDACgGAAQgFAAgFgDg");
	this.shape_7.setTransform(-108.975,-18.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAaAAQAFAAAEACQADACACADQACADAAAEIgBAHIgEAEIgFACQADAAADACIAEAEQABADAAAEQAAAFgCACQgCAEgDACQgEACgFAAgAgMAUIAQAAQAEAAACgCQACgDAAgEQAAgCgCgDQgCgCgEAAIgQAAgAgMgEIAPAAQAEAAACgCQACgCAAgDQAAgDgCgCQgCgCgEAAIgPAAg");
	this.shape_8.setTransform(-113.675,-19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-24.5,41.900000000000006,10.3);


(lib.Tween4copy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAZIAAgKIgcAAIAAAKIgIAAIAAgSIAEAAIADgFIABgFIABgMIABgKIAeAAIAAAgIAEAAIAAASgAgFgMIgBAKIgBAGIgDADIATAAIAAgYIgNAAg");
	this.shape.setTransform(-77.85,-17.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAIAAIAAAogAgCgTQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(-81.3,-19.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAVAAQAFAAADABIAEAEQACACAAADQAAAEgCACQgCADgDAAQAEAAABADQADADAAADQAAAFgEADQgDADgIAAgAgIANIAMAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIABgDIgBgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgMAAgAgIgDIAMAAIADgBIACgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgDgBIgMAAg");
	this.shape_2.setTransform(-84.5,-18.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKASQgFgCgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAEgDAGAAQAGAAAFADQAFADACAEQADAFAAAFQAAAGgDAFQgCAFgFACQgFADgGAAQgGAAgEgDgAgFgLIgFAFIgBAGIABAHIAFAFIAFACIAGgCIAFgFIABgHIgBgGIgFgFQgDgBgDAAQgDAAgCABg");
	this.shape_3.setTransform(-91.45,-18.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAUIAAgnIAdAAIAAAIIgUAAIAAAfg");
	this.shape_4.setTransform(-95.5,-18.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKASQgFgCgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAEgDAGAAQAGAAAFADQAFADACAEQADAFAAAFQAAAGgDAFQgCAFgFACQgFADgGAAQgGAAgEgDgAgFgLIgFAFIgBAGIABAHIAFAFIAFACIAGgCIAFgFIABgHIgBgGIgFgFQgDgBgDAAQgDAAgCABg");
	this.shape_5.setTransform(-100,-18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAJAAIAAAOIANAAQAEAAADACQADACACACIABAGQAAADgBADQgCADgDACQgDACgEAAgAgIANIAMAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIABgEIgBgEQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgMAAg");
	this.shape_6.setTransform(-104.525,-18.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHASQgFgCgCgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAGAAADACQAEACACADIgFAFQgEgEgGAAQgEAAgEADQgDAEAAAFQAAAEACADQABADADACIAFACQADAAADgCIAEgDIAFAFQgCADgEACQgDACgGAAQgFAAgFgDg");
	this.shape_7.setTransform(-108.975,-18.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAaAAQAFAAAEACQADACACADQACADAAAEIgBAHIgEAEIgFACQADAAADACIAEAEQABADAAAEQAAAFgCACQgCAEgDACQgEACgFAAgAgMAUIAQAAQAEAAACgCQACgDAAgEQAAgCgCgDQgCgCgEAAIgQAAgAgMgEIAPAAQAEAAACgCQACgCAAgDQAAgDgCgCQgCgCgEAAIgPAAg");
	this.shape_8.setTransform(-113.675,-19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-24.5,41.900000000000006,10.3);


(lib.Tween4copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAZIAAgKIgcAAIAAAKIgIAAIAAgSIAEAAIADgFIABgFIABgMIABgKIAeAAIAAAgIAEAAIAAASgAgFgMIgBAKIgBAGIgDADIATAAIAAgYIgNAAg");
	this.shape.setTransform(-77.85,-17.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAIAAIAAAogAgCgTQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(-81.3,-19.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAVAAQAFAAADABIAEAEQACACAAADQAAAEgCACQgCADgDAAQAEAAABADQADADAAADQAAAFgEADQgDADgIAAgAgIANIAMAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIABgDIgBgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgMAAgAgIgDIAMAAIADgBIACgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgDgBIgMAAg");
	this.shape_2.setTransform(-84.5,-18.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKASQgFgCgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAEgDAGAAQAGAAAFADQAFADACAEQADAFAAAFQAAAGgDAFQgCAFgFACQgFADgGAAQgGAAgEgDgAgFgLIgFAFIgBAGIABAHIAFAFIAFACIAGgCIAFgFIABgHIgBgGIgFgFQgDgBgDAAQgDAAgCABg");
	this.shape_3.setTransform(-91.45,-18.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAUIAAgnIAdAAIAAAIIgUAAIAAAfg");
	this.shape_4.setTransform(-95.5,-18.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKASQgFgCgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAEgDAGAAQAGAAAFADQAFADACAEQADAFAAAFQAAAGgDAFQgCAFgFACQgFADgGAAQgGAAgEgDgAgFgLIgFAFIgBAGIABAHIAFAFIAFACIAGgCIAFgFIABgHIgBgGIgFgFQgDgBgDAAQgDAAgCABg");
	this.shape_5.setTransform(-100,-18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAJAAIAAAOIANAAQAEAAADACQADACACACIABAGQAAADgBADQgCADgDACQgDACgEAAgAgIANIAMAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIABgEIgBgEQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgMAAg");
	this.shape_6.setTransform(-104.525,-18.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHASQgFgCgCgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAGAAADACQAEACACADIgFAFQgEgEgGAAQgEAAgEADQgDAEAAAFQAAAEACADQABADADACIAFACQADAAADgCIAEgDIAFAFQgCADgEACQgDACgGAAQgFAAgFgDg");
	this.shape_7.setTransform(-108.975,-18.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAaAAQAFAAAEACQADACACADQACADAAAEIgBAHIgEAEIgFACQADAAADACIAEAEQABADAAAEQAAAFgCACQgCAEgDACQgEACgFAAgAgMAUIAQAAQAEAAACgCQACgDAAgEQAAgCgCgDQgCgCgEAAIgQAAgAgMgEIAPAAQAEAAACgCQACgCAAgDQAAgDgCgCQgCgCgEAAIgPAAg");
	this.shape_8.setTransform(-113.675,-19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-24.5,41.900000000000006,10.3);


(lib.Tween2copy11 = function(mode,startPosition,loop) {
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


(lib.Tween2copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6060C").s().p("ApSErQjDAAAAjCIAAjRQAAjDDDABISlAAQDDgBAADDIAADRQAADCjDAAg");
	this.shape.setTransform(0.025,-10.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-40,157.9,59.9);


(lib.Tween1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB817").s().p("EgtpAKgQjIABAAjIIAAuxQAAjIDIABMBbTAAAQDIgBgBDIIAAOxQABDIjIgBg");
	this.shape.setTransform(212.65,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-67.2,624.3,134.5);


(lib.Tween1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB817").s().p("AzkKgQi7gGAAjBIAAuxQAAjBC7gGQi7AGAADBIAAOxQAADBC7AGIvXAAQjHABAAjIIAAuxQAAjIDHABIPXAAMA2gAAAQDHgBAADIIAAOxQAADIjHgBg");
	this.shape.setTransform(143.975,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-67.2,487,134.5);


(lib.redfrontkarecopy10 = function(mode,startPosition,loop) {
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


(lib.redfrontkarecopy6 = function(mode,startPosition,loop) {
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


(lib.kazacopy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AAUBBIAAgvIgnAAIAAAvIgxAAIAAiBIAxAAIAAApIAnAAIAAgpIAwAAIAACBg");
	this.shape.setTransform(112.7,20.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AgpBAQgKgFgHgJQgHgKgBgOQABgRAHgJQAHgIAKgEQALgDAJAAQAOAAAJAEQALAEAFAGIAAgNQAAgHgGgFQgGgEgMAAQgJAAgJADQgJADgJAGIgQgeQAJgHAKgEQALgEALgCQAKgCAKAAQAQAAAOAEQAPAFAJAMQAJAMAAAVIAABOIgwAAIAAgMQgGAHgKAEQgKAEgNAAQgJAAgLgEgAgMASQgFACAAAGQAAAGAFADQAFACAHAAQAFAAAFgCQAFgCADgDIAAgHQgDgEgFgCQgFgBgFAAIgCAAQgFAAgFACg");
	this.shape_1.setTransform(96.5,20.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AAmBBIAAhGIgZBGIgZAAIgZhGIAABGIgxAAIAAiBIBBAAIAVA/IAWg/IBBAAIAACBg");
	this.shape_2.setTransform(79.375,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AgoBAQgLgFgHgJQgHgKAAgOQAAgRAHgJQAHgIALgEQAJgDALAAQANAAAJAEQAKAEAGAGIAAgNQAAgHgHgFQgGgEgLAAQgIAAgLADQgIADgJAGIgQgeQAJgHALgEQAKgEAKgCQAMgCAIAAQARAAAPAEQAOAFAJAMQAJAMABAVIAABOIgxAAIAAgMQgGAHgLAEQgJAEgMAAQgLAAgJgEgAgMASQgFACgBAGQABAGAFADQAGACAGAAQAEAAAGgCQAFgCADgDIAAgHQgDgEgFgCQgGgBgEAAIgCAAQgFAAgFACg");
	this.shape_3.setTransform(61.35,20.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AhIAbQAFAAADgCQAEgDADgHQADgHABgLIAJg/IB1AAIAACCIgxAAIAAhYIgaAAIgEAaQgCAUgIAPQgHAOgOAIQgNAIgWAAg");
	this.shape_4.setTransform(45.625,20.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AgoBAQgLgFgHgJQgHgKAAgOQAAgRAHgJQAHgIALgEQAJgDALAAQANAAAJAEQAKAEAGAGIAAgNQAAgHgHgFQgGgEgLAAQgIAAgLADQgIADgJAGIgQgeQAJgHALgEQAKgEAKgCQAMgCAIAAQARAAAPAEQAOAFAJAMQAJAMABAVIAABOIgxAAIAAgMQgGAHgLAEQgJAEgMAAQgLAAgJgEgAgMASQgFACgBAGQABAGAFADQAGACAFAAQAFAAAGgCQAFgCADgDIAAgHQgDgEgFgCQgGgBgFAAIgBAAQgFAAgFACg");
	this.shape_5.setTransform(29.85,20.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4F").s().p("AAsBqIAAghIhYAAIAAAhIg2AAIAAhNQAIgBAGgEQAGgFAEgJQAFgJACgQIALhbICMAAIAACEIAPAAIAABQgAgNgLQgBALgFAJQgFAKgHAHIA8AAIAAhUIgkAAg");
	this.shape_6.setTransform(12.475,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.1,36.9);


(lib.kazacopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("AAmBBIAAhGIgZBGIgZAAIgZhGIAABGIgxAAIAAiBIBBAAIAVA/IAWg/IBBAAIAACBg");
	this.shape.setTransform(92.775,20.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4F").s().p("AguBbIgHAAIgGgBIAHgsIAFACIAFABQAHAAAEgCQAFgBABgDIABgCIgziEIAzAAIAYBLIAZhLIAzAAIg4CSQgGAPgJAIQgIAIgMACQgLADgOABIgGgBg");
	this.shape_1.setTransform(75.525,22.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AhGBbIAAizIAwAAIAAAPQAIgKAKgEQAIgEAKABQAQAAANAHQANAIAIAPQAHAPAAAXQAAAWgHAPQgIAPgNAHQgNAIgQAAQgKABgIgEQgKgFgIgJIAAA/gAgMgtQgGACgEAEIAAAhQAEAEAGACQAFACAFAAQAJAAAHgFQAHgHABgMQgBgNgHgGQgHgGgJAAQgFAAgFACg");
	this.shape_2.setTransform(60.725,22.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4F").s().p("AAfBSIAAghIg9AAIAAAhIgxAAIAAhKQAFABADgCQAEgCADgFQADgGABgMIAJg/IB1AAIAABYIAOAAIAABLgAgMgSIgEAOQgCAGgEAFIAnAAIAAguIgaAAg");
	this.shape_3.setTransform(43.925,21.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4F").s().p("AgmA7QgRgKgIgPQgJgQAAgSQAAgRAJgQQAIgPARgKQAQgJAWAAQAXAAARAJQAQAKAJAPQAIAQAAARQAAASgIAQQgJAPgQAKQgRAJgXAAQgWAAgQgJgAgQgRQgGAHAAAKQAAALAGAHQAGAHAKAAQALAAAGgHQAHgHAAgLQAAgKgHgHQgGgHgLAAQgKAAgGAHg");
	this.shape_4.setTransform(27.625,20.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4F").s().p("AhQBaIAAizICVAAIAAAvIheAAIAAAPIArAAQAVAAANAIQAOAIAHAMQAIANgBAQQABARgIAOQgHANgOAIQgNAHgVABgAgZArIAlAAQAGgBADgDQAEgDAAgFQAAgGgEgDQgDgDgGAAIglAAg");
	this.shape_5.setTransform(11.5,17.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,36.9);


(lib.kazacopy6 = function(mode,startPosition,loop) {
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


(lib.ttt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(135,38.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:31.5,alpha:1},23,cjs.Ease.quartOut).to({startPosition:0},38).to({_off:true},1).wait(472));

	// Layer_3
	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.05,19.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:11.8,alpha:1},23,cjs.Ease.quartOut).to({startPosition:0},45).to({_off:true},1).wait(472));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.3,0,123.3,53.3);


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
	this.instance_1.setTransform(-152.55,-69.8,0.3789,0.3648,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},147).wait(470));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.3,-94.4,245.60000000000002,49.10000000000001);


(lib.text2copy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.kazacopy10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-33.95,-19.45,1,1,0,0,0,75.5,17.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.95,alpha:1},24,cjs.Ease.quintOut).to({startPosition:0},66,cjs.Ease.quintOut).wait(1).to({regX:61,regY:19.5,x:-5.55,y:-17.25},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:75.5,regY:17.3,x:8.95,y:-19.45},0).wait(570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-36.7,166,36.900000000000006);


(lib.text2copy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.kazacopy9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-33.95,-19.45,1,1,0,0,0,75.5,17.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.95,alpha:1},24,cjs.Ease.quintOut).to({startPosition:0},66,cjs.Ease.quintOut).wait(1).to({regX:52.5,regY:20.5,x:-14.05,y:-16.25},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:75.5,regY:17.3,x:8.95,y:-19.45},0).wait(570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-36.7,147.9,36.900000000000006);


(lib.text2copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.kazacopy6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-33.95,-19.45,1,1,0,0,0,75.5,17.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.95,alpha:1},24,cjs.Ease.quintOut).to({startPosition:0},66,cjs.Ease.quintOut).wait(1).to({regX:35.1,regY:19.6,x:-31.45,y:-17.15},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:75.5,regY:17.3,x:8.95,y:-19.45},0).wait(570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-36.7,112.4,36.900000000000006);


(lib.sarikarebancopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1copy2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-161,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0,alpha:1},23,cjs.Ease.quintOut).wait(586));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.5,-67.2,785.3,134.5);


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
p.nominalBounds = new cjs.Rectangle(-115.8,-15.5,118.5,37.7);


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
p.nominalBounds = new cjs.Rectangle(-115.8,-15.5,118.5,37.7);


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
p.nominalBounds = new cjs.Rectangle(-116.4,-15.5,116.5,37.7);


(lib.gm2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.Tween6copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-45,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0,alpha:1},23,cjs.Ease.quintOut).wait(594));

	// girismodul2
	this.instance_3 = new lib.sarikarebancopy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-165.25,-78.1,0.2513,0.2419,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},147).wait(470));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.7,-94.3,197.29999999999998,32.5);


(lib.backredkarecopy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2copy11("synched",0);
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


(lib.backredkarecopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2copy7("synched",0);
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
p.nominalBounds = new cjs.Rectangle(-49.2,-17.3,112.7,36.5);


(lib.antalyabeyazmodulluolancopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween8copy4("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},15,cjs.Ease.quartOut).wait(595));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-23,130.8,36.7);


(lib.antalyabeyazmodulluolancopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween8copy3("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},15,cjs.Ease.quartOut).wait(595));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-15.5,65.8,30.9);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3,-0.5,0.5482,0.5482,0,0,0,-5.5,-2.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.933,scaleY:0.933,x:-3.05,y:-0.55,alpha:1},10,cjs.Ease.backOut).to({startPosition:0},2).to({scaleX:0.8444,scaleY:0.8444,x:-3.3,y:-0.8},2).to({scaleX:0.933,scaleY:0.933,x:-3.05,y:-0.55},2).to({startPosition:0},18).to({_off:true},1).wait(608));

	// Layer_1
	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.2298,0.2298);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.61,scaleY:0.61,alpha:1},14,cjs.Ease.backOut).to({startPosition:0},2).to({scaleX:0.552,scaleY:0.552,x:-0.55,y:-0.3},2).to({scaleX:0.61,scaleY:0.61,x:0,y:0},2).to({startPosition:0},18).to({_off:true},1).wait(608));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-17.6,150.60000000000002,29.6);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131.75,100,0.8002,0.8002,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({_off:false},0).wait(97));

	// Layer_2
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(218,78.15,0.625,0.625,0,0,180,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({_off:true},75).wait(95));

	// Layer_1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(138.15,62.5,0.5,0.5,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},145).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.8,-0.1,300.3,250.1);


(lib.modul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.pricecopy8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(235.75,102.1,1.3114,1.3114,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(43).to({startPosition:43},0).to({_off:true},1).wait(175));

	// Layer_3
	this.instance_1 = new lib.redfrontkarecopy6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,103);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(49).to({startPosition:49},0).to({_off:true},1).wait(175));

	// Layer_3 copy
	this.instance_2 = new lib.text2copy6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.55,71.5,1.1984,1.1984,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({startPosition:72},0).to({_off:true},1).wait(175));

	// Layer_5
	this.instance_3 = new lib.Tween10copy2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.55,67.95);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:95.55,alpha:1},19,cjs.Ease.quartOut).to({startPosition:0},53).to({_off:true},1).wait(175));

	// Layer_4
	this.instance_4 = new lib.backredkarecopy6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.5,95.25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(53).to({startPosition:53},0).to({_off:true},1).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,20.7,342.4,114.60000000000001);


(lib.modulcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.pricecopy14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(233.75,102.1,1.3114,1.3114,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(42).to({startPosition:42},0).to({_off:true},1).wait(176));

	// Layer_3
	this.instance_1 = new lib.redfrontkarecopy10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,103);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(48).to({startPosition:48},0).to({_off:true},1).wait(176));

	// Layer_3_copy
	this.instance_2 = new lib.text2copy10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.55,71.5,1.1984,1.1984,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({startPosition:71},0).to({_off:true},1).wait(176));

	// Layer_5
	this.instance_3 = new lib.Tween10copy6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.55,67.95);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:95.55,alpha:1},19,cjs.Ease.quartOut).to({startPosition:0},52).to({_off:true},1).wait(176));

	// Layer_4
	this.instance_4 = new lib.backredkarecopy10("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.5,95.25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(52).to({startPosition:52},0).to({_off:true},1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,20.7,342.4,114.60000000000001);


(lib.modulcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.pricecopy13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(233.75,102.1,1.3114,1.3114,0,0,0,0.1,0.1);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({startPosition:59},0).to({_off:true},1).wait(564));

	// Layer_7
	this.instance_1 = new lib.pricecopy14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.6,20,1.1066,1.1066,0,0,0,0.2,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(54).to({startPosition:54},0).to({_off:true},1).wait(564));

	// back-kırmızı-modul-beyazlı
	this.instance_2 = new lib.backkırmızımodulbeyazlıcopy3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.85,-0.15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(55).to({startPosition:55},0).to({_off:true},1).wait(189).to({_off:false,startPosition:245},0).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-21.3,254.4,85.8);


(lib.antalyafinalbeyaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beyaz-kare
	this.instance = new lib.beyazkarecopy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-66.55,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({startPosition:59},0).to({_off:true},1).wait(465));

	// Layer_7
	this.instance_1 = new lib.pricecopy8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.1,-1.25,1.0688,1.0688,0,0,0,0.4,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(54).to({startPosition:54},0).to({_off:true},1).wait(465));

	// back-kırmızı-modul-beyazlı
	this.instance_2 = new lib.backkırmızımodulbeyazlıcopy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.95,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(55).to({startPosition:55},0).to({_off:true},1).wait(189).to({_off:false,startPosition:245},0).wait(276));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.9,-21.2,254.4,43.599999999999994);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_718 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(718).call(this.frame_718).wait(1));

	// logo
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(240,228.95,0.1139,0.1139,0,0,0,527,184.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(719));

	// tax
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape.setTransform(72.025,242.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJATIAAgQIgRAAIAAAQIgIAAIAAglIAIAAIAAAPIARAAIAAgPIAIAAIAAAlg");
	this.shape_1.setTransform(68.775,243.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIASQgFgDgDgEQgCgFAAgGQAAgFACgEQADgFAEgDQAFgCAEAAQAGAAAEACQAFADACAFQACAFAAAFIAAACIgcAAQAAADABACIAFAEQACABADAAIAGgBIAFgDIAEAGIgHAEQgEABgFAAQgFAAgEgCgAALgCIgBgFIgDgEQgDgBgEAAQgCAAgDABIgDAEIgBAFIAUAAIAAAAg");
	this.shape_2.setTransform(64.275,243.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJATIAAgPIgFACIgFAAQgIAAgEgDQgDgDAAgFIAAgNIAIAAIAAAKQAAAFADABQACACADAAIAFAAIAEgCIAAgQIAIAAIAAAlg");
	this.shape_3.setTransform(59.775,243.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBASQgEgCgDgEQgCgEgBgFIgHAAIAAAQIgIAAIAAglIAIAAIAAAPIAHAAQABgFACgDQADgEAEgCQADgCAFAAQAHAAAEACQAFADACAFQACAEAAAFQAAAGgCAEQgCAFgFACQgEADgHAAQgFAAgDgCgAABgKQgBACgBADQgCACAAADQAAADACADQABADABACQADACADAAQAEAAADgCQACgCABgDQACgDAAgDQAAgDgCgCQgBgDgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_4.setTransform(54.625,243.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSALQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgHIACgMIAAgKIAdAAIAAAmIgIAAIAAgfIgNAAIAAADIgCAOQgCAGgCADQgCADgCABIgGACg");
	this.shape_5.setTransform(48.875,243.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIATIgMgQIgEAGIAAAKIgJAAIAAglIAJAAIAAASIAQgSIAKAAIgRARIARAUg");
	this.shape_6.setTransform(44.95,243.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRATIAAglIAVAAIAHABIAEAEQACACAAADQAAADgCACQgCADgDAAQADAAACADQACACABAEQAAAEgEADQgDADgHAAgAgIAMIAMAAIAEgBIABgDIgBgEIgEgBIgMAAgAgIgDIAMAAIADgBIABgDIgBgDIgDgBIgMAAg");
	this.shape_7.setTransform(40.525,243.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJATIAAgZIgRAZIgIAAIAAglIAIAAIAAAZIARgZIAIAAIAAAlg");
	this.shape_8.setTransform(33.875,243.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAIATIgLgQIgGAGIAAAKIgIAAIAAglIAIAAIAAASIARgSIAKAAIgRARIARAUg");
	this.shape_9.setTransform(29.75,243.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDATIAAgeIgLAAIAAgHIAdAAIAAAHIgLAAIAAAeg");
	this.shape_10.setTransform(25.725,243.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_11.setTransform(21.775,243.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_12.setTransform(17.475,243.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJARQgFgCgCgFQgDgEAAgGQAAgFADgEQACgFAFgDQAEgCAFAAQAGAAAEACQAFADADAFQACAEAAAFQAAAGgCAEQgDAFgFACQgEADgGAAQgFAAgEgDgAgFgKIgEAFIgBAFIABAGIAEAFQADACACAAQAEAAACgCIAEgFIABgGIgBgFIgEgFQgCgCgEAAQgCAAgDACg");
	this.shape_13.setTransform(12.9,243.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAbIAAgsIgbAAIAAAsIgJAAIAAg1IAtAAIAAA1g");
	this.shape_14.setTransform(7.675,242.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBAMIAAgJIgHAFIgCgEIAHgEIgHgDIACgEIAHAFIAAgJIADAAIgBAJIAIgFIACAEIgIADIAIAEIgCAEIgIgFIABAJg");
	this.shape_15.setTransform(3.45,241.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_16.setTransform(167.325,243.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSALQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgHIACgMIAAgKIAdAAIAAAmIgIAAIAAgfIgNAAIAAADIgCAOQgCAGgCADQgCADgCABIgGACg");
	this.shape_17.setTransform(163.875,244.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_18.setTransform(159.525,244.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDATIAAgeIgLAAIAAgHIAdAAIAAAHIgLAAIAAAeg");
	this.shape_19.setTransform(155.825,244.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIASQgFgDgDgEQgCgFAAgGQAAgFACgEQADgFAEgDQAFgCAEAAQAGAAAEACQAFADACAFQACAFAAAFIAAACIgcAAQAAADABACIAFAEQACABADAAIAGgBIAFgDIAEAGIgHAEQgEABgFAAQgFAAgEgCgAALgCIgBgFIgDgEQgDgBgEAAQgCAAgDABIgDAEIgBAFIAUAAIAAAAg");
	this.shape_20.setTransform(151.925,244.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_21.setTransform(147.425,244.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRATIAAglIAJAAIAAANIAMAAQAFAAADACIAEADQACADgBAEIgBAGQgCADgCABQgDACgFAAgAgIAMIAMAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgMAAg");
	this.shape_22.setTransform(141.1,244.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHASQgFgDgCgFQgCgEgBgGQABgFACgFQACgEAFgDQAFgCAEAAQAGAAADACQAFACABADIgFAFQgDgFgGAAQgFAAgDAEQgDADAAAFIABAHIAFAEQACACADAAIAFgBIAEgEIAFAFQgBADgFACQgDACgGAAQgEAAgFgCg");
	this.shape_23.setTransform(136.85,244.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAJATIAAgZIgRAZIgIAAIAAglIAIAAIAAAZIARgZIAIAAIAAAlg");
	this.shape_24.setTransform(132.525,244.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDATIAAgeIgLAAIAAgHIAdAAIAAAHIgLAAIAAAeg");
	this.shape_25.setTransform(128.575,244.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_26.setTransform(124.625,244.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAJATIAAgQIgRAAIAAAQIgIAAIAAglIAIAAIAAAPIARAAIAAgPIAIAAIAAAlg");
	this.shape_27.setTransform(120.325,244.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJATIgHgFIAFgGIAFAEIAGABQAEAAADgBQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgBIgHAAIAAgGIAHAAIAGgBQAAAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgGgBIgGABQgDABgCACIgEgFQADgDAEgCQADgBAFAAQAHAAAFACQAEADABAFQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABIgEADQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIAEABIAFADQABACAAADQAAAFgFADQgDADgJAAQgEAAgFgBg");
	this.shape_28.setTransform(116.05,244.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_29.setTransform(113.225,243.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_30.setTransform(109.975,244.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKAZQgEgDgCgGQgDgFAAgIQAAgHADgGQACgGAFgEQAGgEAIgBIAKgCIAAAIIgKACQgFAAgEACQgEACgCADQgCADAAAEQACgEAEgBQAEgCAEAAQAFAAAEACQAEADADAEQACADAAAFQAAAGgCAEQgDAFgEADQgFADgGAAQgFAAgFgDgAgFgDIgEAEIgBAGIABAHIAEAFQADABACAAQAEAAACgBIAEgFIABgHIgBgGIgEgEQgCgBgEAAQgCAAgDABg");
	this.shape_31.setTransform(103.325,243.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgJARQgFgCgCgFQgDgEAAgGQAAgFADgEQACgFAFgDQAEgCAFAAQAGAAAFACQAEADADAFQACAEAAAFQAAAGgCAEQgDAFgEACQgFADgGAAQgFAAgEgDgAgFgKIgEAFIgBAFIABAGIAEAFQADACACAAQADAAADgCIAEgFIABgGIgBgFIgEgFQgDgCgDAAQgCAAgDACg");
	this.shape_32.setTransform(98.75,244.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAVAYIAAgKIgxAAIAAglIAJAAIAAAeIANAAIAAgeIAIAAIAAAeIANAAIAAgeIAJAAIAAAeIAFAAIAAARg");
	this.shape_33.setTransform(93.425,244.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAJAUIAAgXQAAgFgCgCQgCgCgEABQgCAAgDABIgEAEIAAAaIgIAAIAAgmIAIAAIAAAFIADgDIAFgCIAFgBQAGAAADADQADAEAAAGIAAAag");
	this.shape_34.setTransform(85.675,244.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIASQgFgDgDgEQgCgFAAgGQAAgFACgEQADgFAEgDQAFgCAEAAQAGAAAEACQAFADACAFQACAFAAAFIAAACIgcAAQAAADABACIAFAEQACABADAAIAGgBIAFgDIAEAGIgHAEQgEABgFAAQgFAAgEgCgAALgCIgBgFIgDgEQgDgBgEAAQgCAAgDABIgDAEIgBAFIAUAAIAAAAg");
	this.shape_35.setTransform(81.175,244.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgMAcIATg3IAFAAIgRA3g");
	this.shape_36.setTransform(77.7,243.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAUAUIAAgYQAAgEgCgCQgBgBgEAAQgDAAgCABIgEAEIAAAaIgHAAIAAgYQAAgEgCgCQgBgBgEAAIgFABIgDAEIAAAaIgJAAIAAgmIAJAAIAAAFIACgCIAFgDIAFgBQAEAAACACQADACABADIADgDIAEgDIAGgBQAFAAADADQADADAAAGIAAAbg");
	this.shape_37.setTransform(73.125,244.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKARQgEgCgCgFQgDgEAAgGQAAgFADgEQACgFAEgDQAFgCAFAAQAGAAAFACQAEADACAFQADAEAAAFQAAAGgDAEQgCAFgEACQgFADgGAAQgFAAgFgDgAgFgKIgEAFIgBAFIABAGIAEAFQADACACAAQADAAADgCIAEgFIABgGIgBgFIgEgFQgDgCgDAAQgCAAgDACg");
	this.shape_38.setTransform(67.5,244.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHASQgEgDgDgFQgDgEAAgGQAAgFADgFQADgEAEgDQAEgCAGAAQAFAAAEACQAEACABADIgFAFQgDgFgGAAQgEAAgDAEQgEADAAAFIABAHIAFAEQACACADAAIAFgBIAEgEIAFAFQgBADgEACQgEACgFAAQgGAAgEgCg");
	this.shape_39.setTransform(63.25,244.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDAEQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIADgCIAEACQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_40.setTransform(60.225,245.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIATQgEgCgDgDIAEgGIAFAEQAEACADAAQAEAAABgCQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgDIgDgCIgEgBIgGgCIgGgCQgCgCAAgFQAAgDACgCQACgDADgCQADgBAEAAQAFAAAEABQAEACACACIgDAGQgCgCgDgBQgDgCgEAAIgEABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABIAFACIAGACQAEABACABQACADAAAEQAAAEgBACQgCADgEACQgDABgGAAQgEAAgEgBg");
	this.shape_41.setTransform(57.275,244.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAbQgEgCgDgDIAEgGQACACAEACQADABADAAIAFgBIAEgDQACgCAAgFIAAgFQgDAEgDABQgDACgDAAQgFAAgEgCQgDgDgCgEQgDgEAAgGQAAgGADgEQACgFADgCQAEgDAFABQADgBADACIAGAEIAAgEIAIAAIAAAjQAAAFgCAEQgBADgDACQgDACgEABIgGABIgJgBgAgGgQQgDAEAAAFQAAAGADADQADACADAAIAGgBIAFgDIAAgOIgFgDIgGgCQgDAAgDADg");
	this.shape_42.setTransform(53,245.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgSAbIAAg0IAIAAIAAAFQACgDAEgCQADgBADAAQAFAAAEADQADABACAFQADAFAAAGQAAAGgDAEQgCAFgDACQgEACgFABQgDgBgDgBQgEgBgCgEIAAAUgAgFgRIgFAEIAAAOIAFAEQACABADAAQACAAADgBIAEgFIABgGIgBgGQgBgDgDgCQgDgBgCgBQgDABgCABg");
	this.shape_43.setTransform(48.6,245.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgNAbIgCgBIABgHIABABIACAAIADgBIADgDIABgEIgPgmIAJAAIAKAcIALgcIAJAAIgSAsQgCAGgDABQgDACgFAAIgCAAg");
	this.shape_44.setTransform(44.175,245.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_45.setTransform(41.175,243.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAbIAAgeIgHAAIAAgHIAHAAIAAgDQAAgGADgDQACgEAGAAIAEAAIADABIgCAGIgCAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAADIAIAAIAAAHIgIAAIAAAeg");
	this.shape_46.setTransform(39.125,243.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAJAcIAAgbIgRAbIgIAAIAAgmIAIAAIAAAZIARgZIAIAAIAAAmgAgHgRQgEgDgCgDIAFgDIAEADQACACACgBQADABACgCIAEgDIAFADQgCADgEADQgEABgEAAQgDAAgEgBg");
	this.shape_47.setTransform(33.425,243.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_48.setTransform(28.875,244.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_49.setTransform(24.575,244.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_50.setTransform(21.325,243.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRATIAAglIAVAAIAHABIAEAEQACACAAADQAAADgCACQgCADgDAAQADAAACADQACACABAEQAAAEgEADQgDADgHAAgAgIAMIAMAAIAEgBIABgDIgBgEIgEgBIgMAAgAgIgDIAMAAIADgBIABgDIgBgDIgDgBIgMAAg");
	this.shape_51.setTransform(18.275,244.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_52.setTransform(13.675,244.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_53.setTransform(10.425,243.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgUAbIAAg1IAZAAQAFAAADACQAEACACADQABADAAAEIgBAGIgDAEIgFACIAFACQADABABADIABAGQAAAFgBADQgCADgEACQgDACgFAAgAgLATIAPAAQAEgBACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAEAAACgBQACgCAAgDQAAgDgCgCQgCgCgEAAIgOAAg");
	this.shape_54.setTransform(6.925,243.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgDAEQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBIADgCIAEACQAAABABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_55.setTransform(76.175,237.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDAcIAAgmIAHAAIAAAmgAgDgSQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_56.setTransform(74.225,235.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAJATIAAgQIgRAAIAAAQIgIAAIAAglIAIAAIAAAPIARAAIAAgPIAIAAIAAAlg");
	this.shape_57.setTransform(70.975,236.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgIASQgFgDgDgEQgCgFAAgGQAAgFACgEQADgFAEgDQAFgCAEAAQAGAAAEACQAFADACAFQACAFAAAFIAAACIgcAAQAAADABACIAFAEQACABADAAIAGgBIAFgDIAEAGIgHAEQgEABgFAAQgFAAgEgCgAALgCIgBgFIgDgEQgDgBgEAAQgCAAgDABIgDAEIgBAFIAUAAIAAAAg");
	this.shape_58.setTransform(66.475,236.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAJATIAAgPIgFACIgFAAQgIAAgEgDQgDgDAAgFIAAgNIAIAAIAAAKQAAAFADABQACACADAAIAFAAIAEgCIAAgQIAIAAIAAAlg");
	this.shape_59.setTransform(61.975,236.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBASQgEgCgDgEQgCgEgBgFIgHAAIAAAQIgIAAIAAglIAIAAIAAAPIAHAAQABgFACgDQADgEAEgCQADgCAFAAQAHAAAEACQAFADACAFQACAEAAAFQAAAGgCAEQgCAFgFACQgEADgHAAQgFAAgDgCgAABgKQgBACgBADQgCACAAADQAAADACADQABADABACQADACADAAQAEAAADgCQACgCABgDQACgDAAgDQAAgDgCgCQgBgDgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_60.setTransform(56.825,236.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgSALQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgHIACgMIAAgKIAdAAIAAAmIgIAAIAAgfIgNAAIAAADIgCAOQgCAGgCADQgCADgCABIgGACg");
	this.shape_61.setTransform(51.075,236.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAHATIgKgQIgGAGIAAAKIgIAAIAAglIAIAAIAAASIAQgSIALAAIgQARIAQAUg");
	this.shape_62.setTransform(47.15,236.325);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgRATIAAglIAVAAIAHABIAEAEQACACAAADQAAADgCACQgCADgDAAQADAAACADQACACABAEQAAAEgEADQgDADgHAAgAgIAMIAMAAIAEgBIABgDIgBgEIgEgBIgMAAgAgIgDIAMAAIADgBIABgDIgBgDIgDgBIgMAAg");
	this.shape_63.setTransform(42.725,236.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAJATIAAgZIgRAZIgIAAIAAglIAIAAIAAAZIARgZIAIAAIAAAlg");
	this.shape_64.setTransform(36.075,236.325);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAHATIgKgQIgGAGIAAAKIgIAAIAAglIAIAAIAAASIAQgSIALAAIgQARIAQAUg");
	this.shape_65.setTransform(31.95,236.325);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgDATIAAgeIgLAAIAAgHIAdAAIAAAHIgLAAIAAAeg");
	this.shape_66.setTransform(27.925,236.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgJATQgDgCgCgCQgCgDAAgFQAAgEACgDQACgCADgBIAGgBQADAAADABQAEABACACIAAgFQAAgDgDgCQgCgCgEAAIgFABQgDABgDADIgDgGQADgDAEgCQAEgBAEAAIAIABQAEABACADQACADAAAGIAAAYIgIAAIAAgEQgCADgEABQgDABgDAAIgGgBgAgFACQgDACAAAEQAAADADACQACABADAAIAFgBIAEgDIAAgFIgEgDIgFgBQgDAAgCABg");
	this.shape_67.setTransform(23.975,236.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAOAYIAAgKIgbAAIAAAKIgHAAIAAgRIADAAIACgFIACgFIABgLIABgJIAcAAIAAAeIAEAAIAAARgAgEgMIgBAKIgCAFIgCAEIASAAIAAgXIgNAAg");
	this.shape_68.setTransform(19.675,236.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgKARQgEgCgDgFQgCgEAAgGQAAgFACgEQADgFAEgDQAEgCAGAAQAGAAAEACQAFADACAFQADAEAAAFQAAAGgDAEQgCAFgFACQgEADgGAAQgGAAgEgDgAgFgKIgEAFIgBAFIABAGIAEAFQADACACAAQADAAADgCIAEgFIABgGIgBgFIgEgFQgDgCgDAAQgCAAgDACg");
	this.shape_69.setTransform(15.1,236.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAOAbIAAgsIgbAAIAAAsIgJAAIAAg1IAtAAIAAA1g");
	this.shape_70.setTransform(9.875,235.575);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgBAMIAAgJIgIAFIgCgEIAIgEIgIgDIACgEIAIAFIAAgJIADAAIgBAJIAIgFIADAEIgIADIAIAEIgDAEIgIgFIABAJg");
	this.shape_71.setTransform(5.65,234.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},219).to({state:[]},70).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},219).wait(69));

	// btn
	this.instance_1 = new lib.btn("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.55,199.2,0.9861,0.9861,0,0,0,-3.7,-2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(321).to({_off:false},0).to({_off:true},39).wait(321).to({_off:false},0).wait(38));

	// bodrum-beyaz-finbal
	this.instance_2 = new lib.bodrumfinalbeyaz("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.55,118.45,0.8623,0.8623,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(300).to({_off:false},0).to({_off:true},60).wait(300).to({_off:false},0).wait(59));

	// antalya-beyaz-finalk
	this.instance_3 = new lib.antalyafinalbeyaz("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.25,78.9,0.8623,0.8623,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300).to({_off:false},0).to({_off:true},60).wait(300).to({_off:false},0).wait(59));

	// Layer_1
	this.instance_4 = new lib.ttt("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(149.95,25.45,1,1,0,0,0,134.9,20.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(291).to({_off:false},0).to({_off:true},69).wait(291).to({_off:false},0).wait(68));

	// sbg
	this.instance_5 = new lib.Tween9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(284).to({_off:false},0).to({scaleX:1.1067,scaleY:1.1067,alpha:1},5).to({_off:true},71).wait(284).to({_off:false,scaleX:1,scaleY:1,alpha:0},0).to({scaleX:1.1067,scaleY:1.1067,alpha:1},5).wait(70));

	// modul
	this.instance_6 = new lib.modulcopy3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(27.25,17.2,1,1,0,0,0,51.1,26);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(217).to({_off:false},0).to({_off:true},72).wait(288).to({_off:false},0).to({_off:true},72).wait(70));

	// modul
	this.instance_7 = new lib.modulcopy2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(27.25,17.2,1,1,0,0,0,51.1,26);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(144).to({_off:false},0).to({_off:true},73).wait(287).to({_off:false},0).to({_off:true},73).wait(142));

	// modul
	this.instance_8 = new lib.modul("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(27.25,17.2,1,1,0,0,0,51.1,26);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71).to({_off:false},0).to({_off:true},73).wait(287).to({_off:false},0).to({_off:true},73).wait(215));

	// Layer_3
	this.instance_9 = new lib.gm2_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(281.6,175.95,1.4779,1.4779,0,0,0,32.1,16.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({_off:false},0).to({_off:true},37).wait(323).to({_off:false},0).to({_off:true},37).wait(288));

	// Layer_3
	this.instance_10 = new lib.gm2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(281.6,175.95,1.4779,1.4779,0,0,0,32.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},34).wait(326).to({_off:false},0).to({_off:true},34).wait(325));

	// bg
	this.instance_11 = new lib.bg("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-63,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(360).to({startPosition:0},0).wait(359));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.8,111.7,303.2,151.7);
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