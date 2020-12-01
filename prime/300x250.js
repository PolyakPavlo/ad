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



(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,446);


(lib.butulkkkka = function() {
	this.initialize(img.butulkkkka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,617);


(lib.ff300x600 = function() {
	this.initialize(img.ff300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,600);


(lib.ffbgg = function() {
	this.initialize(img.ffbgg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,179);


(lib.ilksa = function() {
	this.initialize(img.ilksa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,455);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,72);


(lib.shar = function() {
	this.initialize(img.shar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,126);


(lib.svet = function() {
	this.initialize(img.svet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,86);// helper functions:

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


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butulkkkka();
	this.instance.parent = this;
	this.instance.setTransform(0,-308.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,-308.5,180,617), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBJIAAgsIABgUIAAgSIACgZIgBAAIgHAVIgIASIgPAhIgPAjIg4AAIAAiRIAsAAIAAAtIgBAeIgBAcIABABIAIgXIAJgSIAbg/IA3AAIAACRg");
	this.shape.setTransform(146.8,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBJIAAhvIgrAAIAAgiICDAAIAAAiIgrAAIAABvg");
	this.shape_1.setTransform(132.2,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXBJQgDgEgDgIIgHgUQgFgNgHgGQgHgHgLAAIgEAAIAAA6IgtAAIAAiRIAtAAIAAA6IAEAAIAkg6IA2AAIg2A/QANACAJAKQAIALAHAQIAIAVQAEAMAFAKg");
	this.shape_2.setTransform(114.9,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBLIAAg3IgKAAQgHAAgFACQgFADgDAFQgFAGgEAIIgHASIgCAGIgDAHIgxAAIAFgIIAEgJIAGgNIAGgPQAEgHAFgFQADgEAFgDIAKgEIAAgBQgIgBgJgEQgIgDgGgIQgGgHAAgMQAAgNAHgJQAGgIAMgGQAKgEAOgDQANgCAQAAIAfABIAZADIAACRgAgGgpQgIAFAAAJQAAAHAEAEQAEAEAGACQAGACAHABIAIAAIAHAAIAAglIgHgBIgJAAIgCAAQgKAAgGAEg");
	this.shape_3.setTransform(98.2,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUACQAGgVADgVIAtgDQgHAXgKAVQgKAXgJARIgfADQAHgUAGgWg");
	this.shape_4.setTransform(82.9,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBoIAAgtIAAgUIAAgSIACgZIgBAAIgIAUIgIATIgOAhIgPAkIg3AAIAAiSIArAAIAAAsIgBAfIgCAdIABAAIAJgWIAIgUIAcg+IA4AAIAACSgAgfhIQgLgLAAgUIAdAAQAAAKAEAGQADAGAGAAQAGAAAEgGQAEgGAAgKIAdAAQgCAVgLALQgLALgTAAQgVAAgKgMg");
	this.shape_5.setTransform(71.8,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBJIAAgsIABgUIABgSIABgZIgBAAIgHAVIgIASIgPAhIgPAjIg4AAIAAiRIArAAIAAAtIAAAeIgBAcIABABIAIgXIAJgSIAbg/IA3AAIAACRg");
	this.shape_6.setTransform(55.2,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXBJIgGgMIgIgUQgEgNgGgGQgIgHgLAAIgFAAIAAA6IgtAAIAAiRIAtAAIAAA6IAGAAIAkg6IA1AAIg2A/QANACAIAKQAKALAGAQIAIAVQAEAMAGAKg");
	this.shape_7.setTransform(40.6,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsBGQgKgGgGgKQgGgKAAgMQAAgUALgLQAKgMAUgGQATgHAZABIAAgCQAAgEgBgFQgDgEgGgDQgFgDgLAAQgLAAgLADQgKAEgIAEIgIgdQAHgFAPgEQAPgEATgBQAYABAOAIQAOAJAHAOQAGAOgBASIAAAyIAAAUIACAQIgpAAIgCgQIgCAAQgGAKgMAEQgJAEgNAAQgPABgLgHgAAAAGQgJACgGAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIAAgEIAAgEIAAgQQgMAAgIACg");
	this.shape_8.setTransform(24.7,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBlIAAijIg3AAIAAgmICbAAIAAAmIg4AAIAACjg");
	this.shape_9.setTransform(10.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,-20.6,156.6,41.2), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAUQgIgHAAgNQAAgLAIgIQAHgHALgBQAMABAHAHQAIAIAAALQAAANgIAHQgHAIgMAAQgLAAgHgIg");
	this.shape.setTransform(114.4,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBoIAAgtIABgUIAAgSIACgZIgBAAIgHAUIgIATIgPAhIgPAkIg4AAIAAiSIArAAIAAAsIAAAfIgBAdIABAAIAIgWIAJgUIAbg+IA3AAIAACSgAgfhIQgLgLgBgUIAeAAQAAAKADAGQAFAGAFAAQAHAAADgGQADgGABgKIAdAAQgCAVgLALQgMALgSAAQgVAAgKgMg");
	this.shape_1.setTransform(102.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdBJIAAgsIAAgUIABgSIABgZIgBAAIgHAVIgJASIgOAhIgPAjIg4AAIAAiRIArAAIAAAtIAAAeIgCAcIABABIAJgXIAJgSIAbg/IA3AAIAACRg");
	this.shape_2.setTransform(85.4,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhnBJIAAiRIAtAAIAABuIAkAAIAAhuIAtAAIAABuIAjAAIAAhuIAuAAIAACRg");
	this.shape_3.setTransform(65.3,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBpIAAicIgBgbIgBgWIAoAAIABAUIABAAQAJgMAMgGQAMgGAQAAQAQABAOAIQANAJAIARQAJARAAAXQAAAbgKAQQgJARgPAJQgQAIgRAAQgMAAgKgEQgJgFgFgHIgBAAIAABJgAgRg9QgIAGgCAKIgBAEIAAAEIAAAUIAAAFIABAFQACAIAIAGQAGAGALAAQAOAAAHgLQAJgKAAgTQAAgMgDgJQgEgJgGgFQgIgGgJAAQgKAAgHAHg");
	this.shape_4.setTransform(45.4,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwA5QgUgVgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgHQAOgHASgBQAYABAOAKQAPALAGAQQAHASAAARIgBAKIgBAIIhdAAQABAJAFAHQAGAFAJAEQAIACALAAQAMAAAKgBIATgEIAGAeQgMAFgNACQgOADgPgBQgkAAgUgTgAAbgPQAAgGgCgHQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAFgDAGIgEAOIA1AAIAAAAg");
	this.shape_5.setTransform(29.3,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBlIAAikIhHAAIAACkIguAAIAAjJICjAAIAADJg");
	this.shape_6.setTransform(12.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,-20.6,119.3,41.2), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.shar, null, new cjs.Matrix2D(1,0,0,1,-62.5,-63)).s().p("ApwJ2IAAzrIThAAIAATrgAmSmTQilClAADrQAADqClCmQCmCmDrAAQDpAAClimQCmimABjpQgBjsimilQililjpAAQjrAAimClgAkxEtQh9h9AAiyQAAixB9h+QB9h9CyAAQCxAAB9B9QB+B9AACyQAACxh+B+Qh9B9ixABQiygBh9h9g");
	this.shape.setTransform(62.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,-63,125,126), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.shar, null, new cjs.Matrix2D(1,0,0,1,-62.3,-62.7)).s().p("AmQGQQililAAjrQAAjqClimQCmilDqAAQDrAAClClQCmCmAADqQAADrimClQilCmjrAAQjqAAimimgAkvkuQh9B+AACwQAACzB9B9QB+B+CxAAQCxAAB9h+QB+h9AAiyQAAixh+h+Qh9h9ixAAQixAAh+B9g");
	this.shape.setTransform(56.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,-56.6,113.2,113.2), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F30714").ss(2,1,1).p("AriAAIXFAA");
	this.shape.setTransform(105.4,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(30.5,25.5,149.7,2), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.svet();
	this.instance.parent = this;
	this.instance.setTransform(0,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,-43,373,86), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ilksa, null, new cjs.Matrix2D(1,0,0,1,-116.3,-363.8)).s().p("AgiOQInhntIpVAAIgzhmIAAmNIK/sKIFRg1IUHKwIhdRvg");
	this.shape.setTransform(116.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,-91.1,232.7,182.4), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ilksa, null, new cjs.Matrix2D(1,0,0,1,-183.7,-262.5)).s().p("AKzOAI3QsbIqjBoIFvrXILbihILslWIRKXFIAAI+g");
	this.shape.setTransform(147.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,-102.6,294.5,205.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ilksa, null, new cjs.Matrix2D(1,0,0,1,-159.3,-128.7)).s().p("A0SBvII+udQBxBuB2BfQKsIpNbA2QB6AGB/gCI2VKMIrbChg");
	this.shape.setTransform(129.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,-81.5,259.7,163.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ilksa, null, new cjs.Matrix2D(1,0,0,1,-187.1,-64.2)).s().p("AsDAjIFhqkIGdAAIMJUDQtag2qtopg");
	this.shape.setTransform(77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,-64.2,154.4,128.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(18,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(18,-36,296,72), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,-300,300,600), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ff300x600, null, new cjs.Matrix2D(1,0,0,1,-322.6,-132.2)).s().p("ABYLRIwb4FIFWn1MAYxAlYIAAD7g");
	this.shape.setTransform(96.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,-132.2,192.8,264.5), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ff300x600, null, new cjs.Matrix2D(1,0,0,1,-338.6,-418.9)).s().p("AsjB/IAAkSIILufIAAgsILOExIFuFLIAAQ9I3tIEg");
	this.shape.setTransform(81.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(1,-100.5,160.7,223.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ff300x600, null, new cjs.Matrix2D(1,0,0,1,-175.2,-368.1)).s().p("AomMIICD0LIBGksIJDB4IFBDcIhGJiIlVC/InVHqg");
	this.shape.setTransform(55.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,-81.6,110.2,163.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ff300x600, null, new cjs.Matrix2D(1,0,0,1,-49.5,-269.1)).s().p("AnvMUIAAwxICkpjIIOHpIEsJiIpJK2g");
	this.shape.setTransform(49.6,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,-105.9,99.1,179.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ff300x600, null, new cjs.Matrix2D(1,0,0,1,-125.1,-191.8)).s().p("AqyBfIMMpYIGRG5IDIHgIt6Bag");
	this.shape.setTransform(69.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,-50.6,138.2,101.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ff300x600();
	this.instance.parent = this;
	this.instance.setTransform(0,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,-300,419,600), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ffbgg();
	this.instance.parent = this;
	this.instance.setTransform(0,-89.5,3.333,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-89.5,300,179), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(72.2,27.1,1,1,0,0,0,77.1,-0.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.1,-5.3,1,1,0,0,0,59.6,-0.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-9.9,-30.8,169,87.4), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(23));

	// Symbol 20
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(84.2,0,1,1,0,0,0,62.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.9,-0.2,1,1,89.3,0,0,56.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:56.6,rotation:0,x:84,y:-0.4},56,cjs.Ease.get(0.2)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.7,-63,125,126);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhEUZIAAsWIZRAAIAAMWg");
	mask.setTransform(154.9,130.5);

	// Layer 4
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(230.4,219.9,1.097,1.097,0,0,0,80.9,0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:81,rotation:38.2,x:230.5,y:166.9},148).to({regX:80.9,rotation:0,x:230.4,y:219.9},118).wait(1));

	// b2.png
	this.instance_1 = new lib.b2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-112,0.985,0.985);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(267));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-112,412.9,439.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 9
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(322.7,-167.8,1,1,0,0,0,96.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({regX:96.5,regY:-0.2,scaleX:2.12,scaleY:2.12,rotation:-25.9,x:299.7,y:-188.2},147).to({regX:96.4,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:322.7,y:-167.8},146).wait(1));

	// Symbol 7
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.2,68.1,0.623,0.623,0,0,0,55,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({regX:55.3,regY:0.4,scaleX:1.87,scaleY:1.87,rotation:6.7,x:178.5,y:90.5},147).to({regX:55,regY:0,scaleX:0.62,scaleY:0.62,rotation:0,x:175.2,y:68.1},146).wait(1));

	// Symbol 8
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.3,107.6,1.114,1.114,0,0,0,80.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({regY:0.1,scaleX:0.81,scaleY:0.81,rotation:-26,x:348.4,y:117.7},147).to({regY:0,scaleX:1.11,scaleY:1.11,rotation:0,x:338.3,y:107.6},146).wait(1));

	// Symbol 6
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.6,-14.5,1,1,0,0,0,49.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({regX:49.5,regY:0.1,scaleX:1.27,scaleY:1.27,rotation:-69.7,y:-14.6},147).to({regX:49.6,regY:0,scaleX:1,scaleY:1,rotation:0,y:-14.5},146).wait(1));

	// Symbol 5
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(125.1,-108.2,1,1,0,0,0,69.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({regX:69,scaleX:0.87,scaleY:0.87,rotation:45,x:142.1,y:-106.2},147).to({regX:69.1,scaleX:1,scaleY:1,rotation:0,x:125.1,y:-108.2},146).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(209.5,0,1,1,180,0,0,209.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(350));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-300,428.3,600);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_614 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(614).call(this.frame_614).wait(36));

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1A1A").s().p("AgUA0IAAgLQADACAEAAQAEAAACgDQABgCACgFIgehVIAMAAIAXBHIAWhHIAMAAIgcBVQgEALgEAFQgEAEgHAAIgIgBg");
	this.shape.setTransform(248.1,213.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1A1A").s().p("AATA0IgagzIgMAPIAAAkIgMAAIAAhnIAMAAIAAA0IAkg0IAOAAIggArIAhA8g");
	this.shape_1.setTransform(241.2,213.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B1A1A").s().p("AgQAyQgIgFgDgHQgDgIgBgJQgCgJAAgMQAAgOACgLQADgMAHgIQAIgIANAAQAUAAAHAQQAHAPAAAWQAAAZgGAOQgHAPgVAAQgKAAgGgEgAgMglQgFAFgCAJQgCAJAAANIABATQABAIACAGQACAGAEADQAFACAGAAQAHAAAFgCQAEgDACgGQACgGACgIIAAgTIgBgRQgBgHgDgFQgCgGgEgDQgFgDgGAAQgIAAgEAFg");
	this.shape_2.setTransform(232.7,213.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1A1A").s().p("AgdA0IAAhnIAdAAQAOAAAHAIQAJAHAAAOQAAAKgDAFQgCAHgFABQgEAEgGACQgGABgGAAIgPAAIAAAsgAgRgBIAKAAIAOgBQAFgCADgEQADgFAAgJQAAgKgGgEQgFgEgKAAIgOAAg");
	this.shape_3.setTransform(225,213.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1A1A").s().p("AgbA0QAAgKACgHQACgHAFgGQAGgHALgJQAHgGAEgHQAFgGAAgJQAAgSgPAAQgJAAgDAGQgDAGAAAMIgLAAIAAgEQAAgJADgGQADgIAGgDQAGgFAIAAQAJABAGADQAGAEADAGQADAHAAAIQAAAHgDAHQgCAFgEAEIgKAKIgOAPQgFADgBAEIgDAIIArAAIAAALg");
	this.shape_4.setTransform(213.9,213.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1A1A").s().p("AgbA0QAAgKACgHQACgHAFgGQAGgHALgJQAHgGAEgHQAFgGAAgJQAAgSgPAAQgJAAgDAGQgDAGAAAMIgLAAIAAgEQAAgJADgGQADgIAGgDQAGgFAIAAQAJABAGADQAGAEADAGQADAHAAAIQAAAHgDAHQgCAFgEAEIgKAKIgOAPQgFADgBAEIgDAIIArAAIAAALg");
	this.shape_5.setTransform(207,213.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B1A1A").s().p("AgRAtQgHgIgBgLQgCgLAAgPQAAgMACgMQACgLAGgIQAGgJALAAQAMAAAGAJQAHAIABALQACAMAAAMIgBATQAAAJgDAHQgDAJgGAEQgGAEgJABQgLgBgGgHgAgMgdQgDALAAASIABAVQABAKAEAFQADAHAGAAQAKAAADgMQADgMAAgTQAAgRgDgMQgDgMgKAAQgJAAgDAMg");
	this.shape_6.setTransform(200.2,213.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B1A1A").s().p("AgbA0QAAgKACgHQACgHAFgGQAGgHALgJQAHgGAEgHQAFgGAAgJQAAgSgPAAQgJAAgDAGQgDAGAAAMIgLAAIAAgEQAAgJADgGQADgIAGgDQAGgFAIAAQAJABAGADQAGAEADAGQADAHAAAIQAAAHgDAHQgCAFgEAEIgKAKIgOAPQgFADgBAEIgDAIIArAAIAAALg");
	this.shape_7.setTransform(193.2,213.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B1A1A").s().p("AAUA0IAAgsIgPAAIgWAsIgNAAIAYgtQgKgEgFgFQgFgHAAgNQAAgOAIgHQAIgIAOAAIAbAAIAABngAgJgkQgFAEAAAKQAAAJADAEQACAFAGABQAEACAJAAIAKAAIAAgnIgOAAQgJAAgGAEg");
	this.shape_8.setTransform(182.2,213.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B1A1A").s().p("AATA0IAAgyIgmAAIAAAyIgLAAIAAhnIALAAIAAArIAmAAIAAgrIAMAAIAABng");
	this.shape_9.setTransform(174.9,213.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B1A1A").s().p("AASA0IAAgzQgIACgKAAQgOAAgHgFQgHgGAAgPIAAgcIALAAIAAAbQAAAHACAEQABADAEACQAEACAHgBIARgBIAAgrIALAAIAABng");
	this.shape_10.setTransform(166.7,213.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B1A1A").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_11.setTransform(160.8,213.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B1A1A").s().p("AgPAxQgGgFgEgIQgDgIgBgJIgBgTQAAgOADgMQACgLAHgIQAHgIANAAQAJAAAGAFQAHAEADAHQAEAIAAAJIgMAAQAAgWgSAAQgMAAgEAMQgDAMAAARIAAAQIADAOQACAHAEADQAEAEAGAAQAHAAAEgDQAEgEABgGIACgQIAMAAQgBANgDAJQgCAIgHAFQgGAFgKAAQgKAAgHgFg");
	this.shape_12.setTransform(155,213.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B1A1A").s().p("AAFA0IAAhLIgVAAIAAgJQAIAAAFgBQAEgBADgEQADgFABgIIAJAAIAABng");
	this.shape_13.setTransform(143.5,213.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B1A1A").s().p("AgUAsQgHgJAAgPIALAAQAAAKAEAGQADAHAJAAQAIAAAEgGQAFgFAAgIQAAgJgDgFQgCgEgFgCQgFgCgJAAIAAgJQAKAAAFgEQAGgEAAgJQAAgRgOAAQgHAAgEAFQgDAGAAAJIgLAAQAAgJADgHQADgHAGgEQAGgEAHAAQAHAAAGAEQAGADADAGQADAFAAAIQAAAGgBAFQgCAEgEAEQgDADgFACQAJACAEAFQAFAHAAAKQAAAOgHAIQgHAJgOAAQgNAAgHgJg");
	this.shape_14.setTransform(137.4,213.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B1A1A").s().p("AgRAyQgGgFgEgHQgDgIgBgJQgCgJAAgMQAAgOADgLQACgMAHgIQAIgIANAAQAUAAAHAQQAHAPAAAWQAAAZgHAOQgHAPgUAAQgKAAgHgEgAgMglQgFAFgCAJQgCAJAAANIABATQABAIACAGQADAGADADQAFACAGAAQAHAAAFgCQAEgDACgGQADgGABgIIAAgTIgBgRQgBgHgDgFQgCgGgEgDQgFgDgGAAQgHAAgFAFg");
	this.shape_15.setTransform(126.4,213.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B1A1A").s().p("AAdA/IAAgXIg5AAIAAAXIgLAAIAAgiIAHAAQAEgIADgJIADgUIAAgcIAAgbIA2AAIAABcIAIAAIAAAigAgKgaIgBAXQgBAJgDAIQgCAJgDAGIApAAIAAhRIgfAAg");
	this.shape_16.setTransform(117.9,214.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B1A1A").s().p("AgUA0IAAgLQADACAFAAQACAAACgDQACgCACgFIgehVIAMAAIAXBHIAWhHIAMAAIgcBVQgEALgEAFQgEAEgGAAIgJgBg");
	this.shape_17.setTransform(106.4,213.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B1A1A").s().p("AATA0IgagzIgNAPIAAAkIgLAAIAAhnIALAAIAAA0IAkg0IAPAAIggArIAhA8g");
	this.shape_18.setTransform(99.5,213.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B1A1A").s().p("AgRAyQgGgFgEgHQgDgIgCgJQgBgJAAgMQAAgOADgLQACgMAIgIQAHgIANAAQAUAAAHAQQAHAPAAAWQAAAZgHAOQgGAPgVAAQgKAAgHgEgAgMglQgGAFgBAJQgCAJAAANIABATQABAIACAGQACAGAFADQAEACAGAAQAHAAAEgCQAEgDADgGQACgGABgIIABgTIgBgRQgBgHgDgFQgCgGgFgDQgEgDgGAAQgIAAgEAFg");
	this.shape_19.setTransform(91,213.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B1A1A").s().p("AgdA0IAAhnIAcAAQAOAAAJAIQAIAHAAAOQAAAKgCAFQgDAHgEABQgFAEgGACQgGABgHAAIgPAAIAAAsgAgSgBIAMAAIANgBQAFgCADgEQADgFAAgJQAAgKgFgEQgGgEgKAAIgPAAg");
	this.shape_20.setTransform(83.3,213.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B1A1A").s().p("AgRAyQACgQAEgQQAFgQAHgNQAIgPAKgNIguAAIAAgKIA3AAIAAAJQgHAKgGALQgGALgEAKQgEAMgCAMQgDAMgBAMg");
	this.shape_21.setTransform(72.2,213.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B1A1A").s().p("AAFA0IAAhLIgVAAIAAgJQAIAAAFgBQAEgBADgEQADgFABgIIAJAAIAABng");
	this.shape_22.setTransform(64.6,213.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B1A1A").s().p("AgRAtQgHgIgBgLQgCgLAAgPQAAgMACgMQACgLAGgIQAGgJALAAQAMAAAGAJQAHAIABALQACAMAAAMIgBATQAAAJgDAHQgDAJgGAEQgGAEgJABQgLgBgGgHgAgMgdQgDALAAASIABAVQABAKAEAFQADAHAGAAQAKAAADgMQADgMAAgTQAAgRgDgMQgDgMgKAAQgJAAgDAMg");
	this.shape_23.setTransform(58.5,213.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B1A1A").s().p("AgbA0QAAgKACgHQACgHAFgGQAGgHALgJQAHgGAEgHQAFgGAAgJQAAgSgPAAQgJAAgDAGQgDAGAAAMIgLAAIAAgEQAAgJADgGQADgIAGgDQAGgFAIAAQAJABAGADQAGAEADAGQADAHAAAIQAAAHgDAHQgCAFgEAEIgKAKIgOAPQgFADgBAEIgDAIIArAAIAAALg");
	this.shape_24.setTransform(51.5,213.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B1A1A").s().p("AAUA0IAAgsIgPAAIgWAsIgNAAIAYgtQgKgEgFgFQgFgHAAgMQAAgPAIgIQAIgGAOgBIAbAAIAABngAgJgkQgFAEAAALQAAAHADAFQACAEAGACQAEABAJABIAKAAIAAgnIgOAAQgJAAgGAEg");
	this.shape_25.setTransform(258.9,195.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1B1A1A").s().p("AAUA0IAAgyIgnAAIAAAyIgLAAIAAhnIALAAIAAArIAnAAIAAgrIALAAIAABng");
	this.shape_26.setTransform(251.5,195.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B1A1A").s().p("AASA0IAAgzQgIACgKAAQgOAAgHgFQgHgGAAgPIAAgcIALAAIAAAbQAAAHACAEQABADAEACQAEABAHAAIARgBIAAgrIALAAIAABng");
	this.shape_27.setTransform(243.3,195.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B1A1A").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_28.setTransform(237.4,195.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1B1A1A").s().p("AgPAxQgGgFgEgIQgDgIgBgJIgBgTQAAgOADgMQACgLAHgIQAHgIANAAQAJAAAGAFQAHAEADAHQAEAIAAAJIgMAAQAAgWgSAAQgMAAgEAMQgDAMAAARIAAAQIADAOQACAHAEADQAEAEAGAAQAHAAAEgDQAEgEABgGIACgQIAMAAQgBANgDAJQgCAIgHAFQgGAFgKAAQgKAAgHgFg");
	this.shape_29.setTransform(231.6,195.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1B1A1A").s().p("AAFA0IAAhKIgVAAIAAgJQAIAAAFgCQAEgBADgEQADgFABgIIAJAAIAABng");
	this.shape_30.setTransform(220.1,195.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B1A1A").s().p("AgUAsQgHgJAAgPIALAAQAAAKAEAGQADAHAJAAQAIAAAEgGQAFgFAAgIQAAgJgDgFQgCgEgFgCQgFgCgJAAIAAgJQAKAAAFgEQAGgEAAgJQAAgRgOAAQgHAAgEAFQgDAGAAAJIgLAAQAAgJADgHQADgHAGgEQAGgEAHAAQAHAAAGAEQAGADADAGQADAFAAAIQAAAGgBAFQgCAEgEAEQgDADgFACQAJACAEAFQAFAHAAAKQAAAOgHAIQgHAJgOAAQgNAAgHgJg");
	this.shape_31.setTransform(214,196);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1B1A1A").s().p("AgQAxQgHgEgEgHQgDgIgBgLIAMAAQAAAIACAFQACAGAFACQAEADAHABQALgBAEgGQAEgHAAgIQAAgFgCgFQgCgFgEgDQgEgCgGAAIgJAAIAAgJIAHAAQAQAAAAgSQAAgIgFgFQgEgEgHAAQgHAAgFAEQgFAGgBAJIgLAAQABgOAIgIQAIgHAMAAQAIAAAGACQAHAEADAFQAEAHAAAHQAAAKgFAFQgEAHgHACQAJACAFAGQAGAHAAALQAAAHgDAHQgDAHgHAEQgHAFgMABQgKAAgGgFg");
	this.shape_32.setTransform(203.4,196);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1B1A1A").s().p("AAYA0IgIgeIggAAIgHAeIgNAAIAehnIAOAAIAdBngAgNALIAaAAIgNg1g");
	this.shape_33.setTransform(192.3,195.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1B1A1A").s().p("AAUA0IAAhcIgmAAIAABcIgMAAIAAhnIA9AAIAABng");
	this.shape_34.setTransform(184.3,195.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1B1A1A").s().p("AAdBAIAAgYIg5AAIAAAYIgLAAIAAgjIAHAAQAEgIADgJIADgUIAAgcIAAgbIA2AAIAABcIAIAAIAAAjgAgKgZIgBAWQgBAJgDAIQgCAIgDAHIApAAIAAhRIgfAAg");
	this.shape_35.setTransform(175.8,197.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1B1A1A").s().p("AgFA0IAAhcIgaAAIAAgLIA/AAIAAALIgaAAIAABcg");
	this.shape_36.setTransform(164.5,195.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1B1A1A").s().p("AAYA0IgIgeIggAAIgHAeIgNAAIAehnIAOAAIAdBngAgNALIAaAAIgNg1g");
	this.shape_37.setTransform(157.3,195.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1B1A1A").s().p("AgPAxQgGgFgEgIQgDgIgBgJIgBgTQAAgOADgMQACgLAHgIQAHgIANAAQAJAAAGAFQAHAEADAHQAEAIAAAJIgMAAQAAgWgSAAQgMAAgEAMQgDAMAAARIAAAQIADAOQACAHAEADQAEAEAGAAQAHAAAEgDQAEgEABgGIACgQIAMAAQgBANgDAJQgCAIgHAFQgGAFgKAAQgKAAgHgFg");
	this.shape_38.setTransform(149.7,195.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1B1A1A").s().p("AAfA0IAAhUIAAgHIAAgGIgCAHIgBAHIgVBTIgNAAIgVhVIgEgMIAAAAIAAAHIAAAGIAABUIgLAAIAAhnIAUAAIAUBQIACAPIACgPIAUhQIAVAAIAABng");
	this.shape_39.setTransform(137.1,195.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1B1A1A").s().p("AgQAyQgIgFgDgHQgDgIgCgJQgBgJAAgMQAAgOACgLQADgMAHgIQAIgIANAAQAUAAAHAQQAHAPAAAWQAAAZgGAOQgHAPgVAAQgKAAgGgEgAgNglQgEAFgCAJQgCAJAAANIABATQABAIACAGQACAGAEADQAFACAGAAQAHAAAEgCQAEgDADgGQACgGABgIIABgTIgBgRQgBgHgCgFQgDgGgEgDQgFgDgGAAQgHAAgGAFg");
	this.shape_40.setTransform(127.6,195.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1B1A1A").s().p("AgFA0IAAhcIgaAAIAAgLIA/AAIAAALIgaAAIAABcg");
	this.shape_41.setTransform(119.9,195.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1B1A1A").s().p("AATA0IAAgyIgmAAIAAAyIgLAAIAAhnIALAAIAAArIAmAAIAAgrIAMAAIAABng");
	this.shape_42.setTransform(112.3,195.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1B1A1A").s().p("AgZA0IAAhnIAzAAIAAALIgoAAIAAAiIAlAAIAAAJIglAAIAAAmIAoAAIAAALg");
	this.shape_43.setTransform(104.8,195.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1B1A1A").s().p("AAgA0IAAhUIAAgHIAAgGIgDAHIgBAHIgVBTIgNAAIgVhVIgDgMIgBAAIAAAHIABAGIAABUIgMAAIAAhnIAUAAIAUBQIACAPIACgPIAVhQIAUAAIAABng");
	this.shape_44.setTransform(95.9,195.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1B1A1A").s().p("AAYA0IgIgeIggAAIgHAeIgNAAIAehnIAOAAIAdBngAgNALIAaAAIgNg1g");
	this.shape_45.setTransform(86.7,195.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1B1A1A").s().p("AgFA0IAAhcIgaAAIAAgLIA/AAIAAALIgaAAIAABcg");
	this.shape_46.setTransform(79.5,195.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1B1A1A").s().p("AgdA0IAAhnIAcAAQAPAAAHAIQAJAHAAAPQAAAIgCAGQgDAHgEABQgFAEgGACQgGABgHAAIgOAAIAAAsgAgRgBIALAAIANgBQAFgCADgFQADgEAAgIQAAgLgGgEQgFgEgKAAIgOAAg");
	this.shape_47.setTransform(72.6,195.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1B1A1A").s().p("AAYA0IgIgeIggAAIgHAeIgNAAIAehnIAOAAIAdBngAgNALIAaAAIgNg1g");
	this.shape_48.setTransform(64.6,195.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1B1A1A").s().p("AAUA0IAAhcIgmAAIAABcIgMAAIAAhnIA9AAIAABng");
	this.shape_49.setTransform(56.6,195.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1B1A1A").s().p("AgZA0IAAhnIAzAAIAAALIgoAAIAAAiIAlAAIAAAJIglAAIAAAmIAoAAIAAALg");
	this.shape_50.setTransform(49.1,195.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1B1A1A").s().p("AAdBAIAAgYIg5AAIAAAYIgLAAIAAgjIAHAAQAEgIADgJIADgUIAAgcIAAgbIA2AAIAABcIAIAAIAAAjgAgKgZIgBAWQgBAJgDAIQgCAIgDAHIApAAIAAhRIgfAAg");
	this.shape_51.setTransform(41.2,197.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B1A1A").s().p("AAYA0IgIgeIggAAIgHAeIgNAAIAehnIAOAAIAdBngAgNALIAaAAIgNg1g");
	this.shape_52.setTransform(219.4,178.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1B1A1A").s().p("AAUA0IAAgyIgnAAIAAAyIgLAAIAAhnIALAAIAAAsIAnAAIAAgsIALAAIAABng");
	this.shape_53.setTransform(211.4,178.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1B1A1A").s().p("AAYA0IgIgeIggAAIgHAeIgNAAIAehnIAOAAIAdBngAgNALIAaAAIgNg1g");
	this.shape_54.setTransform(203.4,178.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1B1A1A").s().p("AAdA/IAAgXIg5AAIAAAXIgLAAIAAgiIAHAAQAEgIADgJIADgUIAAgcIAAgbIA2AAIAABcIAIAAIAAAigAgKgaIgBAXQgBAJgDAIQgCAJgDAGIApAAIAAhRIgfAAg");
	this.shape_55.setTransform(195.3,179.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1B1A1A").s().p("AAUA0IAAhRIABgQIgBAAQgBALgCAGIggBQIgQAAIAAhnIAMAAIAABUIgBALIABAAIABgGIACgIIAghRIAQAAIAABng");
	this.shape_56.setTransform(186.7,178.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1B1A1A").s().p("AgcA0IAAhnIAbAAQAIABAGADQAHADADAGQADAGAAAHQAAAJgEAGQgEAGgHACQAFAAAEADQAEADADAFQACAGAAAHQAAAPgIAHQgHAIgOAAgAgQApIAQAAQAIAAAFgEQAEgFAAgKQAAgTgRAAIgQAAgAgQgHIANAAQAGABADgCQAEgBACgFQACgEAAgGQAAgQgQAAIgOAAg");
	this.shape_57.setTransform(178.9,178.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1B1A1A").s().p("AgOAwQgGgEgDgHQgDgHAAgHIgCgSQAAgPACgLQACgMAHgKQAGgIANgBQAGABAGADQAFADADAGQADAFAAAHIgLAAQAAgIgDgDQgFgDgGAAQgFAAgDAEQgDAFgCAGIgCALIgBAOIAAAAQACgGAGgDQAFgEAFAAQANAAAGAJQAIAIAAAOQgBAKgDAJQgEAIgGAEQgGAEgIABQgJAAgGgFgAgPARQAAAOAEAFQAFAHAHAAQAIAAAEgIQADgHAAgKQAAgWgQABQgPgBAAAVg");
	this.shape_58.setTransform(168,178.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1B1A1A").s().p("AgUAsQgHgJAAgPIALAAQAAAKAEAGQADAHAJAAQAIAAAEgGQAFgFAAgIQAAgJgDgFQgCgEgFgCQgFgCgJAAIAAgJQAKAAAFgEQAGgEAAgJQAAgRgOAAQgHAAgEAFQgDAGAAAJIgLAAQAAgJADgHQADgHAGgEQAGgEAHAAQAHAAAGAEQAGADADAGQADAFAAAIQAAAGgBAFQgCAEgEAEQgDADgFACQAJACAEAFQAFAHAAAKQAAAOgHAIQgHAJgOAAQgNAAgHgJg");
	this.shape_59.setTransform(161,178.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1B1A1A").s().p("AgUAsQgHgJAAgPIALAAQAAAKAEAGQADAHAJAAQAIAAAEgGQAFgFAAgIQAAgJgDgFQgCgEgFgCQgFgCgJAAIAAgJQAKAAAFgEQAGgEAAgJQAAgRgOAAQgHAAgEAFQgDAGAAAJIgLAAQAAgJADgHQADgHAGgEQAGgEAHAAQAHAAAGAEQAGADADAGQADAFAAAIQAAAGgBAFQgCAEgEAEQgDADgFACQAJACAEAFQAFAHAAAKQAAAOgHAIQgHAJgOAAQgNAAgHgJg");
	this.shape_60.setTransform(154.1,178.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1B1A1A").s().p("AgEAzIgyhOIAABOIgNAAIAAhlIAOAAIAyBOIAAhOIALAAIAABlgAATArIAAgKIAwAAIAAAKgAAZATQgHgHAAgPQAAgMAHgHQAHgHALAAQALAAAHAHQAHAIAAAMQAAAMgHAIQgHAHgLAAQgKAAgIgGgAAigQQgEAFAAAJQAAAIAEAFQADAFAGAAQAFAAAEgFQAEgEAAgJQAAgJgEgFQgEgEgFAAQgFAAgEAEg");
	this.shape_61.setTransform(143.4,178.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1B1A1A").s().p("AAUA0IAAgsIgPAAIgWAsIgNAAIAYgtQgKgEgFgFQgFgHAAgNQAAgOAIgIQAIgHAOAAIAbAAIAABngAgJgkQgFAEAAAKQAAAJADAEQACAFAGABQAEACAJAAIAKAAIAAgnIgOAAQgJAAgGAEg");
	this.shape_62.setTransform(127.8,178.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1B1A1A").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_63.setTransform(122.7,178.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1B1A1A").s().p("AgQAxQgHgEgEgHQgDgIgBgLIAMAAQAAAIACAFQACAFAFAEQAEACAHAAQALAAAEgGQAEgHAAgIQAAgFgCgFQgCgFgEgDQgEgCgGAAIgJAAIAAgJIAHAAQAQgBAAgRQAAgIgFgFQgEgFgHABQgHAAgFAEQgFAGgBAJIgLAAQABgPAIgHQAIgIAMABQAIAAAGADQAHADADAGQAEAFAAAIQAAAKgFAFQgEAGgHADQAJACAFAGQAGAHAAALQAAAHgDAHQgDAHgHAFQgHAEgMAAQgKAAgGgEg");
	this.shape_64.setTransform(116.9,178.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1B1A1A").s().p("AAUA0IAAgyIgnAAIAAAyIgLAAIAAhnIALAAIAAAsIAnAAIAAgsIALAAIAABng");
	this.shape_65.setTransform(108.8,178.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1B1A1A").s().p("AgZA0IAAhnIAyAAIAAALIgmAAIAAAiIAkAAIAAAJIgkAAIAAAmIAnAAIAAALg");
	this.shape_66.setTransform(101.4,178.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1B1A1A").s().p("AAYA/IAAgXIg6AAIAAhnIALAAIAABcIAmAAIAAhcIAMAAIAABcIAIAAIAAAig");
	this.shape_67.setTransform(94,179.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1B1A1A").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_68.setTransform(87.4,178.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1B1A1A").s().p("AgkAzIAAgKIAFABQAFAAACgFQADgGABgKIAAgbIAAgtIA4AAIAABmIgLAAIAAhcIghAAIAAApIgBATIgCAQQgCAIgEAEQgEAFgIAAIgHgBg");
	this.shape_69.setTransform(80.6,178.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1B1A1A").s().p("AAnBpIAAhZIgeAAIgtBZIgaAAIAwhcQgUgGgLgNQgKgOAAgZQAAgdARgPQAQgOAdAAIA3AAIAADQgAgThKQgMAIABAVQAAAQAFAJQAGAJALADQAKAEARAAIAUAAIAAhPIgaAAQgVAAgLAJg");
	this.shape_70.setTransform(273.4,139.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1B1A1A").s().p("AgGAfIAAg+IANAAIAAA+g");
	this.shape_71.setTransform(264.6,132.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1B1A1A").s().p("Ag6BpIAAjQIA3AAQASAAANAFQANAHAGAMQAHAMAAAPQgBASgHANQgJALgOAFIAAAAQAJABAJAFQAIAIAGAKQAEAMAAANQAAAegPAPQgQAQgcAAgAgiBUIAiAAQARAAAKgKQAIgJAAgVQAAgmglAAIggAAgAgigOIAcAAQALAAAIgEQAIgDAEgIQAEgIAAgNQAAggghgBIgeAAg");
	this.shape_72.setTransform(254.9,139.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1B1A1A").s().p("AgjBkQgOgIgHgPQgHgPgDgTQgCgTAAgYQAAgdAFgXQAFgYAPgQQAPgQAcAAQApAAAOAeQAOAfAAAvQAAAzgNAdQgOAdgqAAQgVAAgOgJgAgahNQgKAMgEARQgEATAAAZQAAAYACARQABAQAGAMQAEALAJAGQAIAGAOAAQAOAAAJgGQAJgGAFgMQAFgLABgQQACgRAAgYQAAgSgCgPQgCgPgFgLQgGgLgJgHQgJgGgMAAQgRAAgJAKg");
	this.shape_73.setTransform(239.5,139.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1B1A1A").s().p("Ag8BpIAAjQIA7AAQAcAAARAOQARAPAAAdQAAASgFAMQgFANgJAFQgJAHgMADQgNADgOAAIgeAAIAABZgAgkgEIAWAAQARAAALgDQALgDAGgJQAFgJAAgRQAAgVgLgIQgLgJgVAAIgdAAg");
	this.shape_74.setTransform(225.1,139.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1B1A1A").s().p("AgjBkQgOgIgHgPQgHgPgDgTQgCgTAAgYQAAgdAFgXQAFgYAPgQQAPgQAcAAQApAAAOAeQAOAfAAAvQAAAzgNAdQgOAdgqAAQgVAAgOgJgAgahNQgKAMgEARQgEATAAAZQAAAYACARQABAQAGAMQAEALAJAGQAIAGAOAAQAOAAAJgGQAJgGAFgMQAFgLABgQQACgRAAgYQAAgSgCgPQgCgPgFgLQgGgLgIgHQgJgGgNAAQgRAAgJAKg");
	this.shape_75.setTransform(209.4,139.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1B1A1A").s().p("AA7CBIAAgxIh2AAIAAAxIgWAAIAAhGIAOAAQAJgQAGgUQAEgSACgXQABgWAAgjIAAg1IBuAAIAAC7IARAAIAABGgAgWg1QAAAZgCAUQgCATgFASQgEARgHANIBUAAIAAimIhAAAg");
	this.shape_76.setTransform(193.4,142.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1B1A1A").s().p("AgjBkQgNgIgIgPQgGgPgCgXIAYAAQABAQADALQAFALAJAGQAIAFAPABQAXAAAIgPQAJgNAAgQQgBgKgEgKQgEgKgIgFQgIgHgLAAIgWAAIAAgTIAQAAQAhAAAAgjQAAgRgJgKQgJgJgPAAQgPAAgKAKQgKAKgCASIgXAAQADgbARgRQAQgPAZAAQARAAAMAHQANAGAHANQAIALAAAPQgBATgIAMQgJANgPAGQATADAKANQAMAPAAAWQAAAOgGAOQgGAOgOALQgPAJgYAAQgVAAgOgJg");
	this.shape_77.setTransform(178.1,139.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1B1A1A").s().p("AgjBkQgOgIgHgPQgHgPgDgTQgCgTAAgYQAAgdAFgXQAFgYAPgQQAPgQAcAAQApAAAOAeQAOAfAAAvQAAAzgNAdQgOAdgqAAQgVAAgOgJgAgbhNQgJAMgEARQgEATAAAZQAAAYACARQABAQAFAMQAFALAJAGQAJAGANAAQAOAAAJgGQAJgGAFgMQAFgLABgQQACgRAAgYQAAgSgCgPQgCgPgGgLQgEgLgJgHQgKgGgMAAQgRAAgKAKg");
	this.shape_78.setTransform(162.9,139.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1B1A1A").s().p("Ag1BpIAAjQIBrAAIAAAUIhUAAIAAC8g");
	this.shape_79.setTransform(149.6,139.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1B1A1A").s().p("AgjBkQgOgIgHgPQgHgPgDgTQgCgTAAgYQAAgdAFgXQAFgYAPgQQAPgQAcAAQApAAAOAeQAOAfAAAvQAAAzgNAdQgOAdgqAAQgVAAgOgJgAgbhNQgJAMgEARQgEATAAAZQAAAYACARQABAQAFAMQAFALAJAGQAJAGANAAQAOAAAJgGQAJgGAFgMQAFgLABgQQACgRAAgYQAAgSgCgPQgCgPgGgLQgEgLgJgHQgKgGgMAAQgRAAgKAKg");
	this.shape_80.setTransform(134.6,139.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1B1A1A").s().p("AhjBpIAAjQIAXAAIAAC7IBBAAIAAi7IAWAAIAAC7IBBAAIAAi7IAYAAIAADQg");
	this.shape_81.setTransform(115.1,139.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1B1A1A").s().p("AAxBpIgRg9IhAAAIgQA9IgaAAIA8jQIAeAAIA7DQgAgbAYIA3AAIgchvIAAAAg");
	this.shape_82.setTransform(96.3,139.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1B1A1A").s().p("Ag6BpIAAjQIA3AAQASAAANAFQANAHAGAMQAGAMAAAPQABASgJANQgHALgPAFIAAAAQAJABAJAFQAJAIAEAKQAFAMAAANQAAAegPAPQgQAQgcAAgAgjBUIAjAAQASAAAIgKQAJgJAAgVQAAgmglAAIghAAgAgjgOIAdAAQALAAAIgEQAIgDAEgIQAEgIAAgNQAAgggggBIggAAg");
	this.shape_83.setTransform(82.4,139.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1B1A1A").s().p("AAnBpIAAhZIgeAAIgsBZIgaAAIAvhcQgUgGgKgNQgLgOAAgZQABgdAQgPQARgOAcAAIA4AAIAADQgAgUhKQgKAIgBAVQAAAQAHAJQAFAJALADQAKAEASAAIATAAIAAhPIgbAAQgVAAgLAJg");
	this.shape_84.setTransform(61.3,139.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1B1A1A").s().p("AhJBpIAAgVIAJABQAKAAAFgKQAFgLABgUQACgUAAglIAAhcIBzAAIAADRIgXAAIAAi8IhFAAIAABTIgBAoQgBAQgEAQQgEAQgIAJQgJAKgPAAQgHAAgGgBg");
	this.shape_85.setTransform(46.2,139.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1B1A1A").s().p("AA7CBIAAgxIh2AAIAAAxIgWAAIAAhGIAOAAQAKgQAEgUQAFgSABgXQACgWAAgjIAAg1IBuAAIAAC7IARAAIAABGgAgVg1QgBAZgCAUQgCATgEASQgFARgHANIBUAAIAAimIg/AAg");
	this.shape_86.setTransform(31,142.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1B1A1A").s().p("Ag0BoIAAjPIBoAAIAAAUIhQAAIAABGIBLAAIAAATIhLAAIAABOIBRAAIAAAUg");
	this.shape_87.setTransform(272.8,104.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1B1A1A").s().p("Ag6BoIAAjPIA3AAQASgBANAHQANAGAGAMQAGALABARQAAARgJAMQgHAMgPAFIAAAAQAJABAJAGQAJAGAEAMQAFALAAANQAAAegPAPQgQAPgcAAgAgjBUIAjAAQARAAAJgKQAJgJAAgVQAAgmglAAIghAAgAgjgOIAdAAQALAAAIgEQAIgDAEgIQAEgIAAgNQAAgggggBIggAAg");
	this.shape_88.setTransform(259.3,104.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1B1A1A").s().p("AAqBoIAAilIABggIgBAAQgDAWgFAMIhBCjIghAAIAAjPIAXAAIAACpIgBAXIABAAIADgMIAFgRIBBijIAhAAIAADPg");
	this.shape_89.setTransform(243.7,104.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1B1A1A").s().p("AhJBoIAAgUIAJABQAKAAAFgKQAFgLABgUQACgVAAgkIAAhcIBzAAIAADQIgXAAIAAi7IhFAAIAABTIgBAoQgBAQgEARQgEAPgIAJQgJAKgPAAQgHAAgGgCg");
	this.shape_90.setTransform(226.6,105);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1B1A1A").s().p("AA8CBIAAgxIh3AAIAAAxIgWAAIAAhGIAOAAQAKgQAEgUQAFgTACgVQABgXAAgjIAAg1IBuAAIAAC7IARAAIAABGgAgVg1QgBAZgCAUQgCAUgEARQgFAQgHAOIBUAAIAAimIg/AAg");
	this.shape_91.setTransform(211.3,107.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1B1A1A").s().p("AgNBoIAAjPIAbAAIAADPg");
	this.shape_92.setTransform(199.7,104.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1B1A1A").s().p("AAmBoIg2hnIgZAfIAABIIgXAAIAAjPIAXAAIAABqIBLhqIAdAAIhCBXIBEB4g");
	this.shape_93.setTransform(190.1,104.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1B1A1A").s().p("AhjBoIAAjPIAXAAIAAC7IBBAAIAAi7IAWAAIAAC7IBBAAIAAi7IAYAAIAADPg");
	this.shape_94.setTransform(170.4,104.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1B1A1A").s().p("AgEBlQgOgIgHgOQgIgOgDgTQgDgRAAgXIgkAAIAABiIgWAAIAAjQIAWAAIAABaIAkAAQABgSADgSQADgQAIgNQAIgNANgIQANgIAUAAQAcAAAQAQQAPAQAFAXQAEAYAAAdQAAAYgCATQgDATgHAPQgGAPgOAIQgPAJgVAAQgWAAgMgIgAADhNQgKAMgDASQgEATAAAZQAAAgADATQADATAJALQAKAKATAAQAOAAAIgGQAKgGAEgLQAFgMACgQQACgQAAgYQgBgngJgXQgLgWgZAAQgRAAgJAKg");
	this.shape_95.setTransform(142.2,104.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1B1A1A").s().p("AhJBoIAAgUIAJABQAKAAAFgKQAFgLABgUQACgVAAgkIAAhcIBzAAIAADQIgXAAIAAi7IhFAAIAABTIgBAoQgBAQgEARQgEAPgIAJQgJAKgPAAQgHAAgGgCg");
	this.shape_96.setTransform(121.6,105);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1B1A1A").s().p("AgjBkQgOgIgHgPQgHgQgCgSQgDgTAAgYQAAgdAFgYQAFgXAPgQQAQgQAbAAQApAAAOAeQAOAgAAAuQAAAzgOAdQgOAdgpAAQgVAAgOgJgAgbhNQgKALgDATQgEASAAAaQAAAXACAQQACARAEAMQAFALAJAGQAJAGANAAQAOAAAJgGQAJgGAEgMQAFgLACgRQACgQAAgXQAAgTgCgPQgDgPgFgLQgFgLgIgHQgKgGgMAAQgQAAgLAKg");
	this.shape_97.setTransform(106.5,104.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1B1A1A").s().p("Ag1BoIAAjPIBrAAIAAAUIhUAAIAAC7g");
	this.shape_98.setTransform(93.1,104.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1B1A1A").s().p("AgjBkQgOgIgHgPQgHgQgCgSQgDgTAAgYQAAgdAFgYQAFgXAPgQQAQgQAbAAQApAAAOAeQAOAgAAAuQAAAzgOAdQgOAdgpAAQgVAAgOgJgAgbhNQgKALgDATQgEASAAAaQAAAXACAQQACARAEAMQAFALAJAGQAJAGANAAQAOAAAJgGQAJgGAEgMQAFgLACgRQACgQAAgXQAAgTgCgPQgDgPgFgLQgFgLgIgHQgKgGgMAAQgQAAgLAKg");
	this.shape_99.setTransform(78.1,104.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1B1A1A").s().p("AAmBoIg2hnIgZAfIAABIIgXAAIAAjPIAXAAIAABqIBLhqIAdAAIhCBXIBEB4g");
	this.shape_100.setTransform(64,104.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1B1A1A").s().p("AhJBoIAAgUIAJABQAKAAAFgKQAFgLABgUQACgVAAgkIAAhcIBzAAIAADQIgXAAIAAi7IhFAAIAABTIgBAoQgBAQgEARQgEAPgIAJQgJAKgPAAQgHAAgGgCg");
	this.shape_101.setTransform(46.8,105);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1B1A1A").s().p("AAxBoIgRg8IhAAAIgQA8IgaAAIA8jPIAeAAIA7DPgAgbAXIA3AAIgchuIAAAAg");
	this.shape_102.setTransform(32.5,104.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1B1A1A").s().p("AAnBpIAAhZIgeAAIgtBZIgaAAIAvhcQgTgGgLgNQgKgNAAgaQAAgdARgPQARgOAcAAIA3AAIAADQgAgThKQgLAIAAAVQAAAQAFAKQAGAIALADQAKADARABIAUAAIAAhOIgaAAQgVgBgLAJg");
	this.shape_103.setTransform(285,69.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1B1A1A").s().p("AAoBpIAAhlIhPAAIAABlIgXAAIAAjQIAXAAIAABWIBPAAIAAhWIAXAAIAADQg");
	this.shape_104.setTransform(271.1,69.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1B1A1A").s().p("AAoBpIAAhlIhPAAIAABlIgXAAIAAjQIAXAAIAABWIBPAAIAAhWIAXAAIAADQg");
	this.shape_105.setTransform(255.2,69.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1B1A1A").s().p("AAxBpIgRg9IhBAAIgPA9IgZAAIA7jQIAeAAIA6DQgAgbAYIA3AAIgchvIAAAAg");
	this.shape_106.setTransform(240.2,69.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1B1A1A").s().p("Ag6BpIAAjQIA3AAQASAAANAFQANAHAGAMQAGAMABAPQgBASgHANQgJAMgOADIAAABQAKABAIAFQAJAIAFAKQAEAMAAANQAAAdgPAQQgQAQgcAAgAgiBTIAiAAQASABAJgKQAIgJAAgVQAAgmglAAIggAAgAgigOIAcAAQALAAAIgEQAIgDAEgIQAEgIAAgNQAAggghAAIgeAAg");
	this.shape_107.setTransform(226.2,69.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1B1A1A").s().p("AAqBpIAAimIABggIgBAAQgDAXgFALIhBCkIghAAIAAjQIAXAAIAACpIgBAXIABAAIADgLIAFgRIBBikIAhAAIAADQg");
	this.shape_108.setTransform(210.6,69.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1B1A1A").s().p("ABcBpIg4hoIgYAeIAABKIgXAAIAAhJIgYgfIg4BoIgbAAIBFh5IhDhXIAdAAIBMBqIAAhqIAXAAIAABqIBLhqIAeAAIhDBXIBFB5g");
	this.shape_109.setTransform(191.1,69.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1B1A1A").s().p("AgjBlQgOgJgHgPQgHgPgDgUQgCgSAAgYQAAgdAFgXQAFgYAPgQQAPgQAcAAQApAAAOAeQAOAgAAAuQAAAzgNAdQgOAdgqAAQgVAAgOgIgAgahNQgKAMgEARQgEATAAAZQAAAYACARQABARAGALQAEAMAJAFQAIAGAOAAQAOAAAJgGQAJgGAFgLQAFgMABgQQACgRAAgYQAAgSgCgPQgCgPgFgLQgGgLgJgHQgJgGgMAAQgRAAgJAKg");
	this.shape_110.setTransform(171.6,70);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1B1A1A").s().p("AAoBpIAAi7IhPAAIAAC7IgXAAIAAjQIB9AAIAADQg");
	this.shape_111.setTransform(155.7,69.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1B1A1A").s().p("AgeBjQgOgKgHgQQgGgQgCgTQgDgTAAgVQAAgcAGgXQAFgYAOgQQAPgPAaAAQATAAANAJQAOAIAGAPQAHAPAAAUIgXAAQAAgugmAAQgZAAgHAZQgHAZAAAiIABAiQABAPAEANQAEANAIAIQAJAIAMAAQAPAAAIgHQAHgIADgMQADgNACgTIAXAAQgBAagGARQgFASgNAKQgNAJgVAAQgVAAgNgKg");
	this.shape_112.setTransform(140.6,70);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1B1A1A").s().p("Ag0BpIAAjQIBoAAIAAAVIhQAAIAABFIBLAAIAAAUIhLAAIAABMIBRAAIAAAWg");
	this.shape_113.setTransform(121.7,69.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1B1A1A").s().p("AAoBpIAAhlIhPAAIAABlIgXAAIAAjQIAXAAIAABWIBPAAIAAhWIAXAAIAADQg");
	this.shape_114.setTransform(107.1,69.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1B1A1A").s().p("Ag8BpIAAjQIA7AAQAcAAARAOQARAPAAAdQAAASgFAMQgFANgJAFQgJAHgMADQgNADgOAAIgeAAIAABZgAgkgEIAWAAQARAAALgDQALgDAGgJQAFgJAAgRQAAgVgLgIQgLgJgVABIgdAAg");
	this.shape_115.setTransform(92.7,69.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1B1A1A").s().p("AgNBoIAAjPIAbAAIAADPg");
	this.shape_116.setTransform(81.5,70);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1B1A1A").s().p("ABABpIAAirIABgPIAAgMIgBAAIgEAOIgDAOIgsCqIgaAAIgsisIgHgaIAAAAIAAANIABAOIAACrIgXAAIAAjQIApAAIApCiQADALABATIAAAAIAFgeIApiiIApAAIAADQg");
	this.shape_117.setTransform(67.9,69.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1B1A1A").s().p("AA7CBIAAgxIh2AAIAAAxIgWAAIAAhGIAOAAQAJgRAGgTQAEgSABgXQACgWAAgjIAAg1IBuAAIAAC7IARAAIAABGgAgWg1QAAAZgCAUQgCATgFASQgEAQgHAOIBUAAIAAimIhAAAg");
	this.shape_118.setTransform(49.5,72.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1B1A1A").s().p("AAxBpIgRg9IhAAAIgQA9IgaAAIA8jQIAeAAIA7DQgAgbAYIA3AAIgchvIAAAAg");
	this.shape_119.setTransform(34.2,69.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1B1A1A").s().p("AAoBpIAAhlIhPAAIAABlIgXAAIAAjQIAXAAIAABWIBPAAIAAhWIAXAAIAADQg");
	this.shape_120.setTransform(19.1,69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},255).to({state:[]},70).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},255).wait(70));

	// Layer 18
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_121.setTransform(150,125);
	this.shape_121._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(255).to({_off:false},0).to({_off:true},70).wait(255).to({_off:false},0).wait(70));

	// svet.png copy
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(208.9,81.3,0.735,0.544,0,0,0,186.6,0.2);
	this.instance.alpha = 0.27;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).to({x:213.3,alpha:1},8).to({regY:0.3,x:237.6,y:81.4},25).to({regX:186.5,x:257},20).to({regX:186.6,regY:0.2,x:264.8,y:81.3,alpha:0},8).to({_off:true},26).wait(238).to({_off:false,x:208.9,alpha:0.27},0).to({x:213.3,alpha:1},8).to({regY:0.3,x:237.6,y:81.4},25).to({regX:186.5,x:257},20).to({regX:186.6,regY:0.2,x:264.8,y:81.3,alpha:0},8).to({_off:true},26).wait(70));

	// svet.png
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.9,131.8,0.571,0.39,0,0,0,186.3,0.3);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140).to({_off:false},0).to({regX:186.2,regY:0.2,scaleX:0.39,scaleY:0.22,x:68.9,y:110.3},25,cjs.Ease.get(0.25)).to({regX:186.4,scaleX:0.45,scaleY:0.26,x:89.8},33).to({regX:186.3,regY:0.4,scaleX:0.51,scaleY:0.3,x:109.5},31).to({regX:186.5,regY:0.6,scaleX:0.28,scaleY:0.16,alpha:0.27},7).to({_off:true},19).wait(210).to({_off:false,regX:186.3,regY:0.3,scaleX:0.57,scaleY:0.39,x:11.9,y:131.8,alpha:1},0).to({regX:186.2,regY:0.2,scaleX:0.39,scaleY:0.22,x:68.9,y:110.3},25,cjs.Ease.get(0.25)).to({regX:186.4,scaleX:0.45,scaleY:0.26,x:89.8},33).to({regX:186.3,regY:0.4,scaleX:0.51,scaleY:0.3,x:109.5},31).to({regX:186.5,regY:0.6,scaleX:0.28,scaleY:0.16,alpha:0.27},7).to({_off:true},19).wait(70));

	// Layer 1
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(106.5,101.3,1.159,1.159,0,0,0,134.4,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},0).to({regX:134.5,scaleX:0.66,scaleY:0.66,x:101.6,y:93},25,cjs.Ease.get(0.25)).to({_off:true},90).wait(210).to({_off:false,regX:134.4,scaleX:1.16,scaleY:1.16,x:106.5,y:101.3},0).to({regX:134.5,scaleX:0.66,scaleY:0.66,x:101.6,y:93},25,cjs.Ease.get(0.25)).to({_off:true},90).wait(70));

	// txt.png
	this.instance_3 = new lib.Symbol22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.6,180.6,1.741,1.741,0,0,0,150.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143).to({_off:false},0).to({regX:150.2,scaleX:0.95,scaleY:0.95,x:155.8,y:147.2},25).to({_off:true},87).wait(213).to({_off:false,regX:150.1,scaleX:1.74,scaleY:1.74,x:216.6,y:180.6},0).to({regX:150.2,scaleX:0.95,scaleY:0.95,x:155.8,y:147.2},25).to({_off:true},87).wait(70));

	// shar.png
	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.5,28,0.642,0.642,0,0,0,62.8,0.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(137).to({_off:false},0).to({regX:63.3,regY:0.5,scaleX:0.39,scaleY:0.39,x:74.6,y:47.4},25,cjs.Ease.get(0.25)).to({_off:true},93).wait(207).to({_off:false,regX:62.8,regY:0.4,scaleX:0.64,scaleY:0.64,x:74.5,y:28},0).to({regX:63.3,regY:0.5,scaleX:0.39,scaleY:0.39,x:74.6,y:47.4},25,cjs.Ease.get(0.25)).to({_off:true},93).wait(70));

	// logo.png
	this.instance_5 = new lib.Symbol11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.1,86,0.558,0.558,0,0,0,148.3,0.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({regX:149.1,regY:0.8,scaleX:0.33,scaleY:0.33,x:77.3,y:87.5},25,cjs.Ease.get(0.25)).to({_off:true},93).wait(207).to({_off:false,regX:148.3,regY:0.6,scaleX:0.56,scaleY:0.56,x:75.1,y:86},0).to({regX:149.1,regY:0.8,scaleX:0.33,scaleY:0.33,x:77.3,y:87.5},25,cjs.Ease.get(0.25)).to({_off:true},93).wait(70));

	// Layer 12
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125,1,0.417,0,0,0,150,0.1);
	this.instance_6.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:0,alpha:0.64},0).wait(1).to({alpha:0.639},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.624},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.604},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.465},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.323},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.195},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.123},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.046},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(1).to({regY:0.1},0).to({_off:true},49).wait(216).to({_off:false,alpha:0.641},0).wait(1).to({regY:0,alpha:0.64},0).wait(1).to({alpha:0.639},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.624},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.604},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.465},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.323},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.195},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.123},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.046},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(1).to({regY:0.1},0).to({_off:true},49).wait(216));

	// Layer 3
	this.instance_7 = new lib.Symbol25();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.8,133,0.411,0.411,0,0,0,90.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:90,regY:0,scaleX:0.89,scaleY:0.89,x:157.1,y:136.2},60).wait(49).to({regX:90.3,regY:0.1,scaleX:0.42,scaleY:0.42,x:251.2,y:134.6},30).to({_off:true},116).wait(70).to({_off:false,regX:90.1,regY:0.3,scaleX:0.41,scaleY:0.41,x:150.8,y:133},0).to({regX:90,regY:0,scaleX:0.89,scaleY:0.89,x:157.1,y:136.2},60).wait(49).to({regX:90.3,regY:0.1,scaleX:0.42,scaleY:0.42,x:251.2,y:134.6},30).to({_off:true},116).wait(70));

	// bytlya.png
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(141.7,131.4,0.391,0.391,0,0,0,209.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:209.4,regY:0.1,scaleX:0.91,scaleY:0.91,x:138.2,y:127.4},60).wait(49).to({regX:209.8,regY:0.7,scaleX:0.42,scaleY:0.42,x:243.7,y:128.9},30).to({_off:true},116).wait(70).to({_off:false,regY:0.4,scaleX:0.39,scaleY:0.39,x:141.7,y:131.4},0).to({regX:209.4,regY:0.1,scaleX:0.91,scaleY:0.91,x:138.2,y:127.4},60).wait(49).to({regX:209.8,regY:0.7,scaleX:0.42,scaleY:0.42,x:243.7,y:128.9},30).to({_off:true},116).wait(70));

	// Symbol 16
	this.instance_9 = new lib.Symbol16();
	this.instance_9.parent = this;
	this.instance_9.setTransform(184.3,195,0.754,0.767,0,0,0,116.3,0.1);
	this.instance_9.alpha = 0;
	this.instance_9.compositeOperation = "lighter";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170).to({_off:false},0).to({regX:116.4,regY:0.3,scaleX:0.58,scaleY:0.59,x:186.1,y:166.9,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},67).wait(240).to({_off:false,regX:116.3,regY:0.1,scaleX:0.75,scaleY:0.77,x:184.3,y:195,alpha:0},0).to({regX:116.4,regY:0.3,scaleX:0.58,scaleY:0.59,x:186.1,y:166.9,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},67).wait(70));

	// Symbol 15
	this.instance_10 = new lib.Symbol15();
	this.instance_10.parent = this;
	this.instance_10.setTransform(218.6,153.6,0.754,0.767,0,0,0,147.2,0.1);
	this.instance_10.alpha = 0;
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(157).to({_off:false},0).to({regX:147.3,regY:0,scaleX:0.58,scaleY:0.59,x:216.6,y:126.5,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},80).wait(227).to({_off:false,regX:147.2,regY:0.1,scaleX:0.75,scaleY:0.77,x:218.6,y:153.6,alpha:0},0).to({regX:147.3,regY:0,scaleX:0.58,scaleY:0.59,x:216.6,y:126.5,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},80).wait(70));

	// Symbol 14
	this.instance_11 = new lib.Symbol14();
	this.instance_11.parent = this;
	this.instance_11.setTransform(207.8,66.5,0.754,0.767,0,0,0,129.8,0.1);
	this.instance_11.alpha = 0;
	this.instance_11.compositeOperation = "lighter";
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(164).to({_off:false},0).to({regX:129.9,scaleX:0.58,scaleY:0.59,x:218.2,y:61.6,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},73).wait(234).to({_off:false,regX:129.8,scaleX:0.75,scaleY:0.77,x:207.8,y:66.5,alpha:0},0).to({regX:129.9,scaleX:0.58,scaleY:0.59,x:218.2,y:61.6,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},73).wait(70));

	// Symbol 13
	this.instance_12 = new lib.Symbol13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(228.8,41.9,0.754,0.767,0,0,0,77.4,0.1);
	this.instance_12.alpha = 0;
	this.instance_12.compositeOperation = "lighter";
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(152).to({_off:false},0).to({regY:0.3,scaleX:0.58,scaleY:0.59,x:224.5,y:36.9,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},85).wait(222).to({_off:false,regY:0.1,scaleX:0.75,scaleY:0.77,x:228.8,y:41.9,alpha:0},0).to({regY:0.3,scaleX:0.58,scaleY:0.59,x:224.5,y:36.9,alpha:1},18,cjs.Ease.get(0.24)).to({_off:true},85).wait(70));

	// ffbgg.png
	this.instance_13 = new lib.Symbol2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(141.4,244.2,1.28,1.073,0,0,0,149.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:150,scaleX:1.42,scaleY:2.07,x:139,y:351.9},60).wait(49).to({y:387.7},0).to({scaleX:1.2,scaleY:1.48,x:171.8,y:262.7},17).to({_off:true},129).wait(70).to({_off:false,regX:149.9,scaleX:1.28,scaleY:1.07,x:141.4,y:244.2},0).to({regX:150,scaleX:1.42,scaleY:2.07,x:139,y:351.9},60).wait(49).to({y:387.7},0).to({scaleX:1.2,scaleY:1.48,x:171.8,y:262.7},17).to({_off:true},129).wait(70));

	// Layer 12 copy
	this.instance_14 = new lib.Symbol10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,125,1,0.417,0,0,0,150,0.1);
	this.instance_14.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:0},60).to({_off:true},49).wait(216).to({_off:false,alpha:0.512},0).to({alpha:0},60).to({_off:true},49).wait(216));

	// ff300x600.jpg
	this.instance_15 = new lib.Symbol1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.3,168.8,0.738,0.738,0,0,0,209.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:209.3,scaleX:1.01,scaleY:1.01,x:149.6,y:175.2},60).wait(49).to({regX:209.2,regY:0.3,scaleX:0.79,scaleY:0.79,x:158.4,y:132.5},17).to({_off:true},129).wait(70).to({_off:false,regX:209.4,regY:0.1,scaleX:0.74,scaleY:0.74,x:150.3,y:168.8},0).to({regX:209.3,scaleX:1.01,scaleY:1.01,x:149.6,y:175.2},60).wait(49).to({regX:209.2,regY:0.3,scaleX:0.79,scaleY:0.79,x:158.4,y:132.5},17).to({_off:true},129).wait(70));

	// BG_black
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("EgU7Ap3MAAAhTsMAp2AAAMAAABTsg");
	this.shape_122.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_122).to({_off:true},255).wait(70).to({_off:false},0).to({_off:true},255).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.5,-17.8,384,535.7);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/b2.png", id:"b2"},
		{src:"images/butulkkkka.png", id:"butulkkkka"},
		{src:"images/ff300x600.jpg", id:"ff300x600"},
		{src:"images/ffbgg.png", id:"ffbgg"},
		{src:"images/ilksa.jpg", id:"ilksa"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/shar.png", id:"shar"},
		{src:"images/svet.png", id:"svet"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;