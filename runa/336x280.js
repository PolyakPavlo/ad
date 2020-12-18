(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.FF300_02 = function() {
	this.initialize(img.FF300_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,280);


(lib.FF300_oblog = function() {
	this.initialize(img.FF300_oblog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.FF300_sure = function() {
	this.initialize(img.FF300_sure);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,127);


(lib.FF300lesho = function() {
	this.initialize(img.FF300lesho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,245);


(lib.FF300sac = function() {
	this.initialize(img.FF300sac);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,171);


(lib.FF300Tarel = function() {
	this.initialize(img.FF300Tarel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,131);


(lib.ketha = function() {
	this.initialize(img.ketha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,171);


(lib.pr1 = function() {
	this.initialize(img.pr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,60);


(lib.pr2 = function() {
	this.initialize(img.pr2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,95);


(lib.pr3 = function() {
	this.initialize(img.pr3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,73);


(lib.pr4 = function() {
	this.initialize(img.pr4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,67);// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FF300_02();
	this.instance.parent = this;
	this.instance.setTransform(-203,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-139,408,280);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#827258").s().p("AgEA+QAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIACh1QAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgCB1QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-0.5,-6.4,1.3,12.8), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsDClQgWgJgQgRQgRgQgHgSQgHgTgCgZQgCgZAAgkQAAgiACgaQACgZAHgTQAHgSARgRQAQgQAWgJQAWgJAcAAQAggBAVAKQAWAJAPARQAOAQAGAPQAGAOAAAKQAAAHgBAFQgCAEgEAEQgDADgFACQgEACgGAAIgIgCIgHgEQgEgDgDgFIgGgLQgJgWgPgMQgQgMgYAAQgPAAgMAFQgNAGgJAKQgJAJgFANQgEANgCATIgBA0IABA0QACAUAEAMQAFANAJAKQAJAKANAGQAMAFAPAAQAYAAAQgMQAPgMAJgXIAGgLIAHgIQADgCAEgCQADgBAFAAQAGAAAEABQAFADADADQAEAEACAEQABAFAAAGQAAAKgGAPQgGAPgOAQQgPAQgWAKQgVAJggAAQgcAAgWgJgAHZCqQgFgDgDgFQgDgFgBgFIAAgOIAAkTIAAgOIAEgKQADgFAFgEQAGgCAIAAQAIAAAGACQAFAEADAFIAEAKIAAAOIAAETIAAAOQgBAFgDAFQgDAFgFADQgGAEgIgBQgIABgGgEgAFoCqQgFgFgGgIIhziLIgTAAIAAB4IAAAOQgBAFgDAFQgDAFgFADQgGAEgIgBQgIABgGgEQgFgDgDgFQgDgFgBgFIAAgOIAAkTIAAgOIAEgKQADgFAFgEQAGgCAIAAQAIAAAGACQAFAEADAFIAEAKIAAAOIAABtIASAAIBqiBQAGgIAFgEQAGgDAHAAQAEAAAEABQAFABADADQAFAEACAFQACAFAAAFQAAAFgCAFQgDAFgGAIIhlB2IBvCFQAGAIADAEQACAFAAAFQAAAGgCAFQgCAEgFAFQgDADgFABQgEABgEAAQgHAAgGgDgABKCsQgDgBgDgDQgEgDgCgDIgFgOIgRguIiOAAIgRAuIgFAOQgDADgDADQgDADgDABIgIABQgGAAgFgBQgFgCgDgFQgHgHAAgIQABgIAEgLIBpkXIAFgLIAFgHQAEgDAFgBQAEgCAGAAQAHAAAEACQAFABAEADIAFAHIAFALIBoEXQAEALABAIQAAAIgHAHQgDAFgFACQgFABgGAAIgIgBgAAXA6Ig2iVIg3CVIBtAAgAkJCqQgGgDgDgFQgCgFgBgFIgBgOIAAjDIhICXQgEAJgGAFQgHAFgJAAQgLAAgGgFQgGgFgEgJIhJiXIAADDIAAAOQgBAFgDAFQgDAFgFADQgGAEgIgBQgIABgGgEQgFgDgDgFQgDgFgBgFIAAgOIAAkXIABgMQACgHAFgFQAEgEAFgBQAFgCAFAAIAIABIAGABIAHAHIAGAKIBiDFIBgjFIAGgKIAHgHIAGgBIAJgBQAFAAAFACQAEABAFAEQAEAFACAHIABAMIAAEXIAAAOQgBAFgCAFQgDAFgGADQgGAEgHgBQgIABgGgEgAJ6CsIgMgBQgGgCgGgFQgFgGgCgGIgBgNIAAkWIABgMQACgGAFgGQAGgFAGgCQAGgBAGABIBmAAQAwAAAcAZQAbAZAAArQAAATgHAOQgGAPgKALQgLAKgMAEQAOAEALAKQAMALAHAQQAHAQABAVQgBAggNAVQgNAXgXALQgXALgfAAgAKPB9IBRAAQAcgBAOgOQAOgOABgYQgBgXgOgOQgOgOgcgBIhRAAgAKPgaIBMAAQAaAAAPgMQAPgNABgXQgBgZgPgNQgPgNgaAAIhMAAg");
	this.shape.setTransform(91,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(6.5,-15.2,169,34.9), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGCClQgWgJgQgRQgRgQgHgSQgHgTgCgZQgCgZAAgkQAAgiACgaQACgZAHgTQAHgSARgRQAQgQAWgJQAWgJAcAAQAggBAVAKQAWAJAPARQAOAQAGAPQAGAOAAAKQAAAHgBAFQgCAEgEAEQgDADgFACQgEACgGAAIgIgCIgHgEQgEgDgDgFIgGgLQgJgWgPgMQgQgMgYAAQgPAAgMAFQgNAGgJAKQgJAJgFANQgEANgCATIgBA0IABA0QACAUAEAMQAFANAJAKQAJAKANAGQAMAFAPAAQAYAAAQgMQAPgMAJgXIAGgLIAHgIQADgCAEgCQADgBAFAAQAGAAAEABQAFADADADQAEAEACAEQABAFAAAGQAAAKgGAPQgGAPgOAQQgPAQgWAKQgVAJggAAQgcAAgWgJgAivClQgWgJgQgRQgRgQgHgSQgHgTgCgZQgCgZAAgkQAAgiACgaQACgZAHgTQAHgSARgRQAQgQAWgJQAWgJAdAAQAcAAAWAJQAWAJARAQQAQARAHASQAIATACAZQABAaAAAiQAAAkgBAZQgCAZgIATQgHASgQAQQgRARgWAJQgWAJgcAAQgdAAgWgJgAiZh6QgNAGgJAKQgJAIgEAMQgFANgBAUQgCAVAAAgQAAAhACAVQABAUAFAMQAEAMAJAJQAJAKANAGQANAFAQAAQAPAAANgFQANgGAKgKQAIgJAFgMQAEgMACgUQABgVAAghQAAgggBgVQgCgUgEgNQgFgMgIgIQgKgKgNgGQgNgFgPAAQgQAAgNAFgAneClQgWgJgRgRQgQgQgHgSQgIgTgCgZQgBgZAAgkQAAgiABgaQACgZAIgTQAHgSAQgRQARgQAWgJQAWgJAcAAQAggBAVAKQAVAJAQARQAOAQAGAPQAGAOAAAKQAAAHgCAFQgCAEgDAEQgEADgEACQgFACgFAAIgJgCIgHgEQgEgDgDgFIgGgLQgJgWgPgMQgPgMgYAAQgQAAgMAFQgMAGgKAKQgJAJgEANQgFANgBATIgBA0IABA0QABAUAFAMQAEANAJAKQAKAKAMAGQAMAFAQAAQAYAAAPgMQAPgMAJgXIAGgLIAHgIQADgCAEgCQAEgBAFAAQAFAAAFABQAEADAEADQADAEACAEQACAFAAAGQAAAKgGAPQgGAPgOAQQgQAQgVAKQgVAJggAAQgcAAgWgJgABcCsIgNgBIgIgDQgFgCgDgGQgDgFAAgHQAAgHADgFQADgFAFgDQAEgCAFAAIALgBQAMAAAIgFQAIgFAFgNIAGgLIhWjeQgEgKgBgIQAAgIAHgIQADgEAFgBQAFgDAGAAQAEAAADACQAEABADACQAEADACAEIAFANIBDCtIBAitIAFgNQACgEAEgDQADgCAEgBQADgCAEAAQAGAAAFADQAFABADAEQAHAIAAAIQgBAIgEAKIhZDtQgMAggTAQQgTARgcABg");
	this.shape.setTransform(61.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(6.5,-15.2,110.5,34.9), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(107.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,-33.9,215.1,67.8), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pr1();
	this.instance.parent = this;
	this.instance.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,-30,66,60), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pr2();
	this.instance.parent = this;
	this.instance.setTransform(0,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,-47.5,88,95), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pr3();
	this.instance.parent = this;
	this.instance.setTransform(0,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,-36.5,67,73), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pr4();
	this.instance.parent = this;
	this.instance.setTransform(0,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,-33.5,58,67), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.212,0.933],0,0,0,0,0,93.9).s().p("AqQKSQkRkRAAmBQAAmAERkRQEQkQGAAAQGBAAEREQQEQERAAGAQAAGBkQERQkREQmBAAQmAAAkQkQg");
	this.shape.setTransform(93,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,-93,186,186), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.212,0.933],-4.1,46.3,-4.1,-89.6).s().p("A3bOOIAA8bMAu3AAAIAAcbg");
	this.shape.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-90.9,300,182), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FF300_oblog();
	this.instance.parent = this;
	this.instance.setTransform(10,598.2,1,1.995,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(10,-599,300,1197.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FF300_sure();
	this.instance.parent = this;
	this.instance.setTransform(9,-50,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(9,-50,248.6,120.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1213A").ss(0.4).p("AhpDnQgMAAgJgHQgRgLAAgcIAAlxIgIABQgCAAAAgHQABgJAIgHQAYgYBLAAQBgAAA0AsQAzAsAABTIAAALQgBBcg5AnQgiAYguAAQgZAAgXgLQgRgLAAAAIgMgLIgBCdgAg+AHQAAATAMAMQANANAWAAQAhAAAVgXQAagcAAg7IAAgRQAAg+gogcQgcgVgqAAIgRAAg");
	this.shape.setTransform(49.1,-4.1,0.916,0.916);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1213A").s().p("AhpDnQgMAAgJgHQgRgLAAgcIAAlxIgIABQgCAAAAgHQABgJAIgHQAYgYBLAAQBgAAA0AsQAzAsAABTIAAALQgBBcg5AnQgiAYguAAQgZAAgXgLIgRgLIgMgLIgBCdgAg+AHQAAATAMAMQANANAWAAQAhAAAVgXQAagcAAg7IAAgRQAAg+gogcQgcgVgqAAIgRAAg");
	this.shape_1.setTransform(49.1,-4.1,0.916,0.916);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C1213A").ss(0.4).p("AgaCNQgpAAgegjQghgnAAg8QAAhAAmgoQAngsBAAAQBAAAA3AdIAAD4IgqAAQgGAAgHgCQgOgGgHgOIgEgKIgJAKQgHAIgNAHQgVAMgaAAgAAWhpQgcAAgTAcQgTAdAAAtQAAAsAXAXQASAUAXAAQANAAAJgIQAIgIAAgOIAAiaQgHgFgVAAg");
	this.shape_2.setTransform(133.4,2.4,0.916,0.916);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C1213A").s().p("AhhBqQghgnABg8QAAg/AmgqQAmgrBAAAQBAAAA4AdIAAD4IgqAAQgHAAgHgCQgOgGgHgNIgEgLIgJAKQgGAIgOAHQgVANgaAAQgoAAgfgkgAgZhMQgTAcAAAuQAAArAXAXQASAVAXAAQAOAAAIgJQAJgJAAgOIAAiZQgIgFgVAAQgcAAgTAdg");
	this.shape_3.setTransform(133.4,2.4,0.916,0.916);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C1213A").ss(0.4).p("AgKDXQguAAgegcQgVgVgGgZQAeAQAhAAQA5AAAWgmQAMgWAAgoIAAgsIgPAXQgFAJgKAIQgUARgcAAQgsAAgWghQgSgYAAggIAAjDIArAAQALAAAKAGQASAMAAAcIAAB/QAAASAHANQAKASAUAAQAWAAAMgQQAJgMAAgQIAAiyIAqAAQALAAAKAGQASAMAAAcIgBDtQAAA1gVAkQghA5hNAAg");
	this.shape_4.setTransform(78.6,9.1,0.916,0.916);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C1213A").s().p("AhWC7QgVgVgGgZQAeAQAhAAQA5AAAWgmQAMgWAAgoIAAgsIgPAXQgFAJgKAIQgUARgcAAQgsAAgWghQgSgYAAggIAAjDIArAAQALAAAKAGQASAMAAAcIAAB/QAAASAHANQAKASAUAAQAWAAAMgQQAJgMAAgQIAAiyIAqAAQALAAAKAGQASAMAAAcIgBDtQAAA1gVAkQghA5hNAAQguAAgegcg");
	this.shape_5.setTransform(78.6,9.1,0.916,0.916);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C1213A").ss(0.4).p("ABOCLQgLAAgKgGQgSgMAAgbIAAhmIgIAAQgdAAgSARQgTAUgDAgIAABOIgrAAQgLAAgJgGQgSgMAAgbIAAjoIArAAQALAAAKAGQARALAAAdIAABGIAMgHQAYgOAhAAIAIAAIAAhfIArAAQALAAAKAGQARALAAAdIAADng");
	this.shape_6.setTransform(106.1,2.1,0.916,0.916);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C1213A").s().p("ABOCLQgLAAgKgGQgSgLAAgcIAAhnIgIAAQgdAAgSASQgTAUgDAfIAABPIgrAAQgLAAgJgGQgSgLAAgcIAAjoIArAAQALAAAKAGQARAMAAAbIAABHIAMgHQAYgOAhAAIAIAAIAAhfIArAAQALAAAKAGQARAMAAAbIAADog");
	this.shape_7.setTransform(106.1,2.1,0.916,0.916);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#076F40","#107640","#26873F","#3E9A39","#35933C","#1E8140","#076F40"],[0,0.11,0.31,0.502,0.612,0.827,1],-88.4,0,88.4,0).s().p("Ap/GOQj0iXAAj3QAAj2D0iXQDziXGMAAQGNAADzCXQD0CXAAD2QAAD3j0CXQjzCYmNAAQmMAAjziYgApUljQjkCIAADbQAADcDkCHQDjCHFxAAQFyAADjiHQDkiHAAjcQAAjbjkiIQjjiHlyAAQlxAAjjCHg");
	this.shape_8.setTransform(87,0,0.916,0.916);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApqF5QjriPAAjqQAAjoDriPQDsiQF+AAQF/AADsCQQDrCPAADoQAADqjrCPQjsCPl/AAQl+AAjsiPg");
	this.shape_9.setTransform(87,0,0.916,0.916);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ArAGzQj1ipAAkKQAAkID1irQEFi0G7AAQG8AAEFC0QD1CrAAEIQAAEKj1CpQkFC1m8AAQm7AAkFi1g");
	this.shape_10.setTransform(87,0,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-56.4,174.1,112.9), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ketha();
	this.instance.parent = this;
	this.instance.setTransform(0,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.1,82.3,0.513,0.088,0,0,0,93,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-4.6,-85.5,95.4,175.9), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(116.1,-93.6,1,0.852,0,0,0,0,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},264).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(195,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-139.4,408,280);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 10 copy
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(46.9,-10.9,1,1,0,0,0,29,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regX:29.1,scaleX:1.07,scaleY:1.07,x:47,y:-16,alpha:1},8).to({regY:-0.1,scaleX:1.28,scaleY:1.28,x:47.1,y:-30.2},22).wait(1));

	// Symbol 11 copy
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.5,39.7,1,1,0,0,0,33.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:32.8,alpha:1},8).to({y:18.1},17).wait(1));

	// Symbol 12 copy
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44,53.3,1,1,0,0,0,44,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({y:38,alpha:1},8).to({y:-4.3},22).wait(1));

	// Symbol 13 copy
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33,7,1,1,0,0,0,33,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-0.1,scaleX:1.1,scaleY:1.1,rotation:10.5,x:38.3,y:-8.4,alpha:1},8).to({scaleX:1.42,scaleY:1.42,rotation:45.4,x:55.9,y:-58.4},26).wait(1));

	// Symbol 10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(47.1,-30.9,1.287,1.287,0,0,0,29.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.32,scaleY:1.32,y:-33.4},4).to({scaleX:1.42,scaleY:1.42,y:-39.8,alpha:0},10).to({_off:true},1).wait(20));

	// Symbol 11
	this.instance_5 = new lib.Symbol11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(54.5,17.2,1,1,0,0,0,33.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:9.5},9).to({y:0.8,alpha:0},10).to({_off:true},1).wait(15));

	// Symbol 12
	this.instance_6 = new lib.Symbol12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(44,-6.2,1,1,0,0,0,44,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-13.9},4).to({y:-33.1,alpha:0},10).to({_off:true},1).wait(20));

	// Symbol 13
	this.instance_7 = new lib.Symbol13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56.6,-60.3,1.436,1.436,46.6,0,0,33,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:32.9,scaleX:1.56,scaleY:1.56,rotation:60,x:63.2,y:-79.5,alpha:0},10).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-124.3,127.7,178);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FF300Tarel();
	this.instance.parent = this;
	this.instance.setTransform(0,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pr4.png
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.2,23.5,1.837,0.717,0,0,0,92.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-6.3,-67,341.8,157.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FF300sac();
	this.instance.parent = this;
	this.instance.setTransform(0,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.8,82.8,0.496,0.085,0,0,0,92.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.3,-85.5,92.3,176.2), null);


(lib.les = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FF300lesho();
	this.instance.parent = this;
	this.instance.setTransform(0,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 9
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.6,119.5,0.817,0.14,0,0,0,93,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.les, new cjs.Rectangle(-17.4,-124,152,256.5), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(98.4,14.4,1.519,0.911,0,0,180,55.5,-0.1);

	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.1,56.2,1,1,0,0,180,55.5,0);

	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(81.1,14.5,1,1,0,0,0,55.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-0.1,-109.8,216.1,219.8), null);


// stage content:
(lib._336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_665 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(665).call(this.frame_665).wait(91));

	// Layer 7
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(402.1,333.6,1,1,0,0,0,43.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({scaleX:0.86,scaleY:0.86,x:169,y:187.9},18).to({_off:true},108).wait(126).to({_off:false,scaleX:1,scaleY:1,x:402.1,y:333.6},0).to({scaleX:0.86,scaleY:0.86,x:169,y:187.9},18).to({_off:true},108).wait(126).to({_off:false,scaleX:1,scaleY:1,x:402.1,y:333.6},0).to({scaleX:0.86,scaleY:0.86,x:169,y:187.9},18).wait(108));

	// Symbol 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(382.6,312.6,1,1,0,0,0,45.6,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({scaleX:0.86,scaleY:0.86,x:84.9,y:187.8},18,cjs.Ease.get(1)).to({_off:true},108).wait(126).to({_off:false,scaleX:1,scaleY:1,x:382.6,y:312.6},0).to({scaleX:0.86,scaleY:0.86,x:84.9,y:187.8},18,cjs.Ease.get(1)).to({_off:true},108).wait(126).to({_off:false,scaleX:1,scaleY:1,x:382.6,y:312.6},0).to({scaleX:0.86,scaleY:0.86,x:84.9,y:187.8},18,cjs.Ease.get(1)).wait(108));

	// les
	this.instance_2 = new lib.les();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,185.5,0.721,0.721,0,0,0,61.3,0.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:61.7,x:125.7},20).wait(28).to({regX:61.6,x:261.9},21).wait(51).to({regX:61.9,scaleX:0.59,scaleY:0.59,x:249.5,y:187.8},10).to({_off:true},103).wait(19).to({_off:false,regX:61.3,scaleX:0.72,scaleY:0.72,x:10,y:185.5},0).to({regX:61.7,x:125.7},20).wait(28).to({regX:61.6,x:261.9},21).wait(51).to({regX:61.9,scaleX:0.59,scaleY:0.59,x:249.5,y:187.8},10).to({_off:true},103).wait(19).to({_off:false,regX:61.3,scaleX:0.72,scaleY:0.72,x:10,y:185.5},0).to({regX:61.7,x:125.7},20).wait(28).to({regX:61.6,x:261.9},21).wait(51).to({regX:61.9,scaleX:0.59,scaleY:0.59,x:249.5,y:187.8},10).wait(103));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_39 = new cjs.Graphics().p("AiaVEIAA93Ia0AAIAAd3g");
	var mask_graphics_67 = new cjs.Graphics().p("AiaVEIAA93Ia0AAIAAd3g");
	var mask_graphics_68 = new cjs.Graphics().p("Ah6VEIAA93IazAAIAAd3g");
	var mask_graphics_69 = new cjs.Graphics().p("AhaVEIAA93IazAAIAAd3g");
	var mask_graphics_70 = new cjs.Graphics().p("Ag7VEIAA93Ia0AAIAAd3g");
	var mask_graphics_71 = new cjs.Graphics().p("AgbVEIAA93Ia0AAIAAd3g");
	var mask_graphics_72 = new cjs.Graphics().p("AAEVEIAA93Ia0AAIAAd3g");
	var mask_graphics_73 = new cjs.Graphics().p("AAkVEIAA93Ia0AAIAAd3g");
	var mask_graphics_74 = new cjs.Graphics().p("ABDVEIAA93Ia1AAIAAd3g");
	var mask_graphics_75 = new cjs.Graphics().p("ABjVEIAA93Ia1AAIAAd3g");
	var mask_graphics_76 = new cjs.Graphics().p("ACDVEIAA93Ia0AAIAAd3g");
	var mask_graphics_77 = new cjs.Graphics().p("ACjVEIAA93Ia0AAIAAd3g");
	var mask_graphics_78 = new cjs.Graphics().p("ADCVEIAA93Ia1AAIAAd3g");
	var mask_graphics_79 = new cjs.Graphics().p("ADiVEIAA93Ia1AAIAAd3g");
	var mask_graphics_80 = new cjs.Graphics().p("AECVEIAA93Ia0AAIAAd3g");
	var mask_graphics_81 = new cjs.Graphics().p("AEiVEIAA93Ia0AAIAAd3g");
	var mask_graphics_82 = new cjs.Graphics().p("AFBVEIAA93Ia1AAIAAd3g");
	var mask_graphics_83 = new cjs.Graphics().p("AFhVEIAA93Ia1AAIAAd3g");
	var mask_graphics_84 = new cjs.Graphics().p("AGBVEIAA93Ia0AAIAAd3g");
	var mask_graphics_85 = new cjs.Graphics().p("AGhVEIAA93Ia0AAIAAd3g");
	var mask_graphics_86 = new cjs.Graphics().p("AHAVEIAA93Ia1AAIAAd3g");
	var mask_graphics_87 = new cjs.Graphics().p("AHgVEIAA93Ia1AAIAAd3g");
	var mask_graphics_88 = new cjs.Graphics().p("AH/VEIAA93Ia1AAIAAd3g");
	var mask_graphics_291 = new cjs.Graphics().p("AiaVEIAA93Ia0AAIAAd3g");
	var mask_graphics_319 = new cjs.Graphics().p("AiaVEIAA93Ia0AAIAAd3g");
	var mask_graphics_320 = new cjs.Graphics().p("Ah6VEIAA93IazAAIAAd3g");
	var mask_graphics_321 = new cjs.Graphics().p("AhaVEIAA93IazAAIAAd3g");
	var mask_graphics_322 = new cjs.Graphics().p("Ag7VEIAA93Ia0AAIAAd3g");
	var mask_graphics_323 = new cjs.Graphics().p("AgbVEIAA93Ia0AAIAAd3g");
	var mask_graphics_324 = new cjs.Graphics().p("AAEVEIAA93Ia0AAIAAd3g");
	var mask_graphics_325 = new cjs.Graphics().p("AAkVEIAA93Ia0AAIAAd3g");
	var mask_graphics_326 = new cjs.Graphics().p("ABDVEIAA93Ia1AAIAAd3g");
	var mask_graphics_327 = new cjs.Graphics().p("ABjVEIAA93Ia1AAIAAd3g");
	var mask_graphics_328 = new cjs.Graphics().p("ACDVEIAA93Ia0AAIAAd3g");
	var mask_graphics_329 = new cjs.Graphics().p("ACjVEIAA93Ia0AAIAAd3g");
	var mask_graphics_330 = new cjs.Graphics().p("ADCVEIAA93Ia1AAIAAd3g");
	var mask_graphics_331 = new cjs.Graphics().p("ADiVEIAA93Ia1AAIAAd3g");
	var mask_graphics_332 = new cjs.Graphics().p("AECVEIAA93Ia0AAIAAd3g");
	var mask_graphics_333 = new cjs.Graphics().p("AEiVEIAA93Ia0AAIAAd3g");
	var mask_graphics_334 = new cjs.Graphics().p("AFBVEIAA93Ia1AAIAAd3g");
	var mask_graphics_335 = new cjs.Graphics().p("AFhVEIAA93Ia1AAIAAd3g");
	var mask_graphics_336 = new cjs.Graphics().p("AGBVEIAA93Ia0AAIAAd3g");
	var mask_graphics_337 = new cjs.Graphics().p("AGhVEIAA93Ia0AAIAAd3g");
	var mask_graphics_338 = new cjs.Graphics().p("AHAVEIAA93Ia1AAIAAd3g");
	var mask_graphics_339 = new cjs.Graphics().p("AHgVEIAA93Ia1AAIAAd3g");
	var mask_graphics_340 = new cjs.Graphics().p("AH/VEIAA93Ia1AAIAAd3g");
	var mask_graphics_543 = new cjs.Graphics().p("AiaVEIAA93Ia0AAIAAd3g");
	var mask_graphics_571 = new cjs.Graphics().p("AiaVEIAA93Ia0AAIAAd3g");
	var mask_graphics_572 = new cjs.Graphics().p("Ah6VEIAA93IazAAIAAd3g");
	var mask_graphics_573 = new cjs.Graphics().p("AhaVEIAA93IazAAIAAd3g");
	var mask_graphics_574 = new cjs.Graphics().p("Ag7VEIAA93Ia0AAIAAd3g");
	var mask_graphics_575 = new cjs.Graphics().p("AgbVEIAA93Ia0AAIAAd3g");
	var mask_graphics_576 = new cjs.Graphics().p("AAEVEIAA93Ia0AAIAAd3g");
	var mask_graphics_577 = new cjs.Graphics().p("AAkVEIAA93Ia0AAIAAd3g");
	var mask_graphics_578 = new cjs.Graphics().p("ABDVEIAA93Ia1AAIAAd3g");
	var mask_graphics_579 = new cjs.Graphics().p("ABjVEIAA93Ia1AAIAAd3g");
	var mask_graphics_580 = new cjs.Graphics().p("ACDVEIAA93Ia0AAIAAd3g");
	var mask_graphics_581 = new cjs.Graphics().p("ACjVEIAA93Ia0AAIAAd3g");
	var mask_graphics_582 = new cjs.Graphics().p("ADCVEIAA93Ia1AAIAAd3g");
	var mask_graphics_583 = new cjs.Graphics().p("ADiVEIAA93Ia1AAIAAd3g");
	var mask_graphics_584 = new cjs.Graphics().p("AECVEIAA93Ia0AAIAAd3g");
	var mask_graphics_585 = new cjs.Graphics().p("AEiVEIAA93Ia0AAIAAd3g");
	var mask_graphics_586 = new cjs.Graphics().p("AFBVEIAA93Ia1AAIAAd3g");
	var mask_graphics_587 = new cjs.Graphics().p("AFhVEIAA93Ia1AAIAAd3g");
	var mask_graphics_588 = new cjs.Graphics().p("AGBVEIAA93Ia0AAIAAd3g");
	var mask_graphics_589 = new cjs.Graphics().p("AGhVEIAA93Ia0AAIAAd3g");
	var mask_graphics_590 = new cjs.Graphics().p("AHAVEIAA93Ia1AAIAAd3g");
	var mask_graphics_591 = new cjs.Graphics().p("AHgVEIAA93Ia1AAIAAd3g");
	var mask_graphics_592 = new cjs.Graphics().p("AH/VEIAA93Ia1AAIAAd3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_graphics_39,x:156.2,y:134.8}).wait(28).to({graphics:mask_graphics_67,x:156.2,y:134.8}).wait(1).to({graphics:mask_graphics_68,x:159.3,y:134.8}).wait(1).to({graphics:mask_graphics_69,x:162.5,y:134.8}).wait(1).to({graphics:mask_graphics_70,x:165.7,y:134.8}).wait(1).to({graphics:mask_graphics_71,x:168.9,y:134.8}).wait(1).to({graphics:mask_graphics_72,x:172,y:134.8}).wait(1).to({graphics:mask_graphics_73,x:175.2,y:134.8}).wait(1).to({graphics:mask_graphics_74,x:178.4,y:134.8}).wait(1).to({graphics:mask_graphics_75,x:181.6,y:134.8}).wait(1).to({graphics:mask_graphics_76,x:184.7,y:134.8}).wait(1).to({graphics:mask_graphics_77,x:187.9,y:134.8}).wait(1).to({graphics:mask_graphics_78,x:191.1,y:134.8}).wait(1).to({graphics:mask_graphics_79,x:194.3,y:134.8}).wait(1).to({graphics:mask_graphics_80,x:197.4,y:134.8}).wait(1).to({graphics:mask_graphics_81,x:200.6,y:134.8}).wait(1).to({graphics:mask_graphics_82,x:203.8,y:134.8}).wait(1).to({graphics:mask_graphics_83,x:207,y:134.8}).wait(1).to({graphics:mask_graphics_84,x:210.1,y:134.8}).wait(1).to({graphics:mask_graphics_85,x:213.3,y:134.8}).wait(1).to({graphics:mask_graphics_86,x:216.5,y:134.8}).wait(1).to({graphics:mask_graphics_87,x:219.7,y:134.8}).wait(1).to({graphics:mask_graphics_88,x:222.7,y:134.8}).wait(1).to({graphics:null,x:0,y:0}).wait(202).to({graphics:mask_graphics_291,x:156.2,y:134.8}).wait(28).to({graphics:mask_graphics_319,x:156.2,y:134.8}).wait(1).to({graphics:mask_graphics_320,x:159.3,y:134.8}).wait(1).to({graphics:mask_graphics_321,x:162.5,y:134.8}).wait(1).to({graphics:mask_graphics_322,x:165.7,y:134.8}).wait(1).to({graphics:mask_graphics_323,x:168.9,y:134.8}).wait(1).to({graphics:mask_graphics_324,x:172,y:134.8}).wait(1).to({graphics:mask_graphics_325,x:175.2,y:134.8}).wait(1).to({graphics:mask_graphics_326,x:178.4,y:134.8}).wait(1).to({graphics:mask_graphics_327,x:181.6,y:134.8}).wait(1).to({graphics:mask_graphics_328,x:184.7,y:134.8}).wait(1).to({graphics:mask_graphics_329,x:187.9,y:134.8}).wait(1).to({graphics:mask_graphics_330,x:191.1,y:134.8}).wait(1).to({graphics:mask_graphics_331,x:194.3,y:134.8}).wait(1).to({graphics:mask_graphics_332,x:197.4,y:134.8}).wait(1).to({graphics:mask_graphics_333,x:200.6,y:134.8}).wait(1).to({graphics:mask_graphics_334,x:203.8,y:134.8}).wait(1).to({graphics:mask_graphics_335,x:207,y:134.8}).wait(1).to({graphics:mask_graphics_336,x:210.1,y:134.8}).wait(1).to({graphics:mask_graphics_337,x:213.3,y:134.8}).wait(1).to({graphics:mask_graphics_338,x:216.5,y:134.8}).wait(1).to({graphics:mask_graphics_339,x:219.7,y:134.8}).wait(1).to({graphics:mask_graphics_340,x:222.7,y:134.8}).wait(1).to({graphics:null,x:0,y:0}).wait(202).to({graphics:mask_graphics_543,x:156.2,y:134.8}).wait(28).to({graphics:mask_graphics_571,x:156.2,y:134.8}).wait(1).to({graphics:mask_graphics_572,x:159.3,y:134.8}).wait(1).to({graphics:mask_graphics_573,x:162.5,y:134.8}).wait(1).to({graphics:mask_graphics_574,x:165.7,y:134.8}).wait(1).to({graphics:mask_graphics_575,x:168.9,y:134.8}).wait(1).to({graphics:mask_graphics_576,x:172,y:134.8}).wait(1).to({graphics:mask_graphics_577,x:175.2,y:134.8}).wait(1).to({graphics:mask_graphics_578,x:178.4,y:134.8}).wait(1).to({graphics:mask_graphics_579,x:181.6,y:134.8}).wait(1).to({graphics:mask_graphics_580,x:184.7,y:134.8}).wait(1).to({graphics:mask_graphics_581,x:187.9,y:134.8}).wait(1).to({graphics:mask_graphics_582,x:191.1,y:134.8}).wait(1).to({graphics:mask_graphics_583,x:194.3,y:134.8}).wait(1).to({graphics:mask_graphics_584,x:197.4,y:134.8}).wait(1).to({graphics:mask_graphics_585,x:200.6,y:134.8}).wait(1).to({graphics:mask_graphics_586,x:203.8,y:134.8}).wait(1).to({graphics:mask_graphics_587,x:207,y:134.8}).wait(1).to({graphics:mask_graphics_588,x:210.1,y:134.8}).wait(1).to({graphics:mask_graphics_589,x:213.3,y:134.8}).wait(1).to({graphics:mask_graphics_590,x:216.5,y:134.8}).wait(1).to({graphics:mask_graphics_591,x:219.7,y:134.8}).wait(1).to({graphics:mask_graphics_592,x:222.7,y:134.8}).wait(1).to({graphics:null,x:0,y:0}).wait(163));

	// Layer 5
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(394.1,203.4,0.601,0.601,0,0,0,131.7,0.3);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:131.8,x:207.4},38,cjs.Ease.get(1)).wait(22).to({regX:131.7,x:132.9},27).to({_off:true},1).wait(164).to({_off:false,x:394.1},0).to({regX:131.8,x:207.4},38,cjs.Ease.get(1)).wait(22).to({regX:131.7,x:132.9},27).to({_off:true},1).wait(164).to({_off:false,x:394.1},0).to({regX:131.8,x:207.4},38,cjs.Ease.get(1)).wait(22).to({regX:131.7,x:132.9},27).to({_off:true},1).wait(163));

	// Symbol 18
	this.instance_4 = new lib.Symbol18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(269,81.5,0.92,0.92,0,0,0,91.2,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,x:268.9,y:74.2,alpha:1},12,cjs.Ease.get(0.13)).to({_off:true},92).wait(148).to({_off:false,scaleX:0.92,scaleY:0.92,x:269,y:81.5,alpha:0},0).to({scaleX:0.67,scaleY:0.67,x:268.9,y:74.2,alpha:1},12,cjs.Ease.get(0.13)).to({_off:true},92).wait(148).to({_off:false,scaleX:0.92,scaleY:0.92,x:269,y:81.5,alpha:0},0).to({scaleX:0.67,scaleY:0.67,x:268.9,y:74.2,alpha:1},12,cjs.Ease.get(0.13)).wait(92));

	// Symbol 17
	this.instance_5 = new lib.Symbol17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(159.5,69.7,0.92,0.92,0,0,0,61.9,0.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({_off:false},0).to({regX:61.8,regY:0.3,scaleX:0.67,scaleY:0.67,x:159.4,y:74.8,alpha:1},12,cjs.Ease.get(0.13)).to({_off:true},97).wait(143).to({_off:false,regX:61.9,regY:0.2,scaleX:0.92,scaleY:0.92,x:159.5,y:69.7,alpha:0},0).to({regX:61.8,regY:0.3,scaleX:0.67,scaleY:0.67,x:159.4,y:74.8,alpha:1},12,cjs.Ease.get(0.13)).to({_off:true},97).wait(143).to({_off:false,regX:61.9,regY:0.2,scaleX:0.92,scaleY:0.92,x:159.5,y:69.7,alpha:0},0).to({regX:61.8,regY:0.3,scaleX:0.67,scaleY:0.67,x:159.4,y:74.8,alpha:1},12,cjs.Ease.get(0.13)).wait(97));

	// Symbol 16
	this.instance_6 = new lib.Symbol16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(225.2,22.4,0.92,0.92,0,0,0,107.8,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(139).to({_off:false},0).to({regY:0.3,scaleX:0.67,scaleY:0.67,x:225.1,y:36.5,alpha:1},12,cjs.Ease.get(0.13)).to({_off:true},101).wait(139).to({_off:false,regY:0.1,scaleX:0.92,scaleY:0.92,x:225.2,y:22.4,alpha:0},0).to({regY:0.3,scaleX:0.67,scaleY:0.67,x:225.1,y:36.5,alpha:1},12,cjs.Ease.get(0.13)).to({_off:true},101).wait(139).to({_off:false,regY:0.1,scaleX:0.92,scaleY:0.92,x:225.2,y:22.4,alpha:0},0).to({regY:0.3,scaleX:0.67,scaleY:0.67,x:225.1,y:36.5,alpha:1},12,cjs.Ease.get(0.13)).wait(101));

	// Layer 3
	this.instance_7 = new lib.Symbol15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(200.7,172.6,0.634,0.634,0,0,0,108.3,0.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({regX:108.4,regY:0.4,scaleY:0.64,skewX:3.5,x:185.4,alpha:1},12).to({regX:108.2,regY:0.3,scaleY:0.63,skewX:0,x:132.8},6).wait(38).to({x:179.8},0).to({regX:107.9,scaleY:0.69,skewX:23.2,x:-122.1},13).to({_off:true},113).wait(70).to({_off:false,regX:108.3,scaleY:0.63,skewX:0,x:200.7,alpha:0},0).to({regX:108.4,regY:0.4,scaleY:0.64,skewX:3.5,x:185.4,alpha:1},12).to({regX:108.2,regY:0.3,scaleY:0.63,skewX:0,x:132.8},6).wait(38).to({x:179.8},0).to({regX:107.9,scaleY:0.69,skewX:23.2,x:-122.1},13).to({_off:true},113).wait(70).to({_off:false,regX:108.3,scaleY:0.63,skewX:0,x:200.7,alpha:0},0).to({regX:108.4,regY:0.4,scaleY:0.64,skewX:3.5,x:185.4,alpha:1},12).to({regX:108.2,regY:0.3,scaleY:0.63,skewX:0,x:132.8},6).wait(38).to({x:179.8},0).to({regX:107.9,scaleY:0.69,skewX:23.2,x:-122.1},13).wait(113));

	// FF300Tarel.png
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(391.4,214.3,0.601,0.601,0,0,0,159.3,0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({x:204.6},38,cjs.Ease.get(1)).wait(22).to({regX:159.2,x:130.2},27).wait(38).to({x:177.2},0).to({regX:159,x:-132.8},13).to({_off:true},113).wait(1).to({_off:false,regX:159.3,x:391.4},0).to({x:204.6},38,cjs.Ease.get(1)).wait(22).to({regX:159.2,x:130.2},27).wait(38).to({x:177.2},0).to({regX:159,x:-132.8},13).to({_off:true},113).wait(1).to({_off:false,regX:159.3,x:391.4},0).to({x:204.6},38,cjs.Ease.get(1)).wait(22).to({regX:159.2,x:130.2},27).wait(38).to({x:177.2},0).to({regX:159,x:-132.8},13).wait(113));

	// Слой 1
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(62.9,55.5,0.601,0.601,0,0,0,87.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(756));

	// Layer 1 copy
	this.instance_10 = new lib.Symbol7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(168.1,437.6,1.11,1.11,0,0,0,150.1,0.1);
	this.instance_10.alpha = 0.27;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(139).to({_off:false},0).to({regX:150,scaleX:1.54,scaleY:1,x:98.9,y:432.1,alpha:1},13).to({_off:true},100).wait(139).to({_off:false,regX:150.1,scaleX:1.11,scaleY:1.11,x:168.1,y:437.6,alpha:0.27},0).to({regX:150,scaleX:1.54,scaleY:1,x:98.9,y:432.1,alpha:1},13).to({_off:true},100).wait(139).to({_off:false,regX:150.1,scaleX:1.11,scaleY:1.11,x:168.1,y:437.6,alpha:0.27},0).to({regX:150,scaleX:1.54,scaleY:1,x:98.9,y:432.1,alpha:1},13).wait(100));

	// Layer 2
	this.instance_11 = new lib.Symbol8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(167.9,272.9,1.127,0.626,0,0,0,149.8,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(756));

	// FF300.jpg copy
	this.instance_12 = new lib.Symbol19();
	this.instance_12.parent = this;
	this.instance_12.setTransform(203.1,140,1,1,0,0,0,195.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:195,x:173.1},39).wait(34).to({x:133.1},15).wait(164).to({regX:195.1,x:203.1},0).to({regX:195,x:173.1},39).wait(34).to({x:133.1},15).wait(164).to({regX:195.1,x:203.1},0).to({regX:195,x:173.1},39).wait(34).to({x:133.1},15).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.2,140.5,408.8,329.2);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/FF300_02.jpg", id:"FF300_02"},
		{src:"images/FF300_oblog.png", id:"FF300_oblog"},
		{src:"images/FF300_sure.png", id:"FF300_sure"},
		{src:"images/FF300lesho.png", id:"FF300lesho"},
		{src:"images/FF300sac.png", id:"FF300sac"},
		{src:"images/FF300Tarel.png", id:"FF300Tarel"},
		{src:"images/ketha.png", id:"ketha"},
		{src:"images/pr1.png", id:"pr1"},
		{src:"images/pr2.png", id:"pr2"},
		{src:"images/pr3.png", id:"pr3"},
		{src:"images/pr4.png", id:"pr4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;