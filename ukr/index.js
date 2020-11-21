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
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20613").s().p("AjwAeQgihkgBhXQAygCAQglQAIgSgCgSQBhgBBAghQAfgRALgQIAKAKQAOAMATALQBAAhBhABIAGAkQARAlAwACQAABXgiBkQhFDKisBEQirhEhFjKg");
	this.shape.setTransform(27.6,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,55.1,60.1), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCEJQhPgjg4hFIAAAAQgwg8gdhUIAAAAQgYhGgHhPIAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAIACAAIABgBQAZgHAQgTQAPgQAFgXIAAACIABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIABAAQBrgIA+gtIABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIABABIAAAAQA+AtBrAIIABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIABACIgBgCQAGAXAOAQQARATAZAHIgBAAIABABQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAADQgHBPgZBIIAAAAQgdBTgwA7IgBABQg3BFhPAiIgCAAIgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAh9CYIAAAAQAzBBBKAhQBJggA1hBIAAAAQAvg7AchQQAYhEAHhKQgagJgRgUQgOgQgHgXQhpgIg/gsQg+AshoAIQgIAXgOAQQgRATgaAKQAHBIAYBFIAAgBQAcBSAvA6g");
	this.shape.setTransform(24.2,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(-0.5,-0.5,49.4,53.2), null);


(lib.Path_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAcQgMgCgGgKQgHgKACgKQACgMAKgGQAJgHALACQALACAHAJQAHAKgCALQgCALgKAHQgHAGgIAAIgFgBg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_71, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAbQgLgEgFgLQgFgLAEgKQAEgLALgFQAKgFALAEQALAEAFALQAFALgEAKQgEALgLAFQgGADgGAAQgEAAgFgCg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_70, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAZQgLgHgDgLQgCgKAFgKQAGgLALgDQALgCAKAFQAKAGADALQADALgFAKQgHALgLACIgHABQgHAAgGgDg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_69, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAWQgJgHgBgMQgBgLAHgJQAIgKAMgBQAKgBAJAIQAJAIACAMQAAAKgHAJQgIAJgMABIgCABQgKAAgHgHg");
	this.shape.setTransform(2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_68, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAdQgMgCgIgJQgHgJABgKQABgMAJgIQAJgHALABQALABAIAJQAHAJgBAKQgBAMgJAIQgIAHgKAAIgBAAg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_67, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAbQgLgCgGgLQgFgKACgLQADgLALgGQAKgFAKACQALADAHALQAFAKgDAKQgDALgKAHQgHADgHAAIgHgBg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_66, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAaQgLgFgEgLQgEgKAFgLQAFgLALgEQAKgEALAFQALAFAEALQAEAKgFALQgFALgLAEQgFACgFAAQgFAAgGgDg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_65, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAXQgKgHgCgLQgCgLAHgJQAHgKALgCQALgCAJAHQAKAHACALQACALgHAJQgGAKgMACIgFAAQgIAAgHgFg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_64, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUQgIgIgBgMQABgKAIgJQAJgIAKgBQAMABAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAcQgLgCgHgKQgHgKACgKQACgMAKgGQAKgHAKACQAMACAGAJQAHAKgCALQgCALgKAHQgHAGgIAAIgFgBg");
	this.shape.setTransform(2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_62, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAbQgLgEgFgLQgFgLAEgKQAEgLALgFQALgFAKAEQALAEAFALQAFALgEAKQgEALgLAFQgGADgGAAQgEAAgFgCg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAZQgLgGgDgLQgCgLAFgKQAGgKALgDQALgDAKAFQAKAGADAMQADAKgFAKQgHAKgLAEIgHABQgHAAgGgEg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_60, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAWQgJgIgBgLQgBgLAHgJQAIgJAMgBQAKgBAJAHQAJAIABAMQABAKgHAJQgIAJgLABIgDAAQgKAAgHgGg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAcQgMgBgIgJQgHgJABgKQABgMAJgIQAJgHAKABQAMABAIAJQAHAJAAALQgCALgJAIQgIAGgKAAIgBAAg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_58, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAcQgLgEgGgKQgFgKACgKQADgMALgGQAKgFAKADQALADAHAKQAFAKgDALQgDALgKAGQgHAEgHAAIgHgBg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAaQgLgFgEgLQgEgKAFgLQAFgLALgEQAKgEALAFQALAFAEALQAEAKgFALQgFALgLAEQgFACgFAAQgFAAgGgDg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAXQgKgHgCgLQgCgLAHgJQAGgKAMgCQAKgCAKAHQAKAHACALQACALgHAJQgHAKgLACIgFABQgIAAgHgGg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,5.7,5.8), null);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUQgIgIgBgMQABgKAIgJQAJgIAKgBQAMABAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_54, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIg+IALgBIAGB+IgLAAg");
	this.shape.setTransform(0.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,1.8,12.7), null);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNg9IAMgCIAPB9IgMABg");
	this.shape.setTransform(1.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_52, new cjs.Rectangle(0,0,2.8,12.7), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSg7IALgDIAaB7IgLACg");
	this.shape.setTransform(1.9,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,3.9,12.7), null);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYg5IALgEIAlB4IgLADg");
	this.shape.setTransform(2.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,4.9,12.4), null);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agdg3IALgFIAwB0IgLAFg");
	this.shape.setTransform(3,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,6,12.2), null);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agig1IALgFIA6BvIgLAGg");
	this.shape.setTransform(3.5,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,6.9,11.8), null);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmgxIAKgHIBDBrIgKAGg");
	this.shape.setTransform(3.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_47, new cjs.Rectangle(0,0,7.8,11.3), null);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqguIAJgHIBMBkIgJAHg");
	this.shape.setTransform(4.3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,8.7,10.8), null);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgugqIAIgIIBVBcIgIAIg");
	this.shape.setTransform(4.7,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,9.4,10.1), null);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgygmIAIgIIBcBVIgHAIg");
	this.shape.setTransform(5.1,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0,0,10.1,9.4), null);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1ghIAHgJIBkBMIgHAJg");
	this.shape.setTransform(5.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,10.8,8.7), null);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4gcIAHgKIBqBDIgGAKg");
	this.shape.setTransform(5.7,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,11.3,7.8), null);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6gXIAFgKIBwA5IgGAKg");
	this.shape.setTransform(5.9,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,11.8,6.9), null);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8gSIAFgLIB0AwIgFALg");
	this.shape.setTransform(6.1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,12.2,5.9), null);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9gNIAEgLIB3AlIgDALg");
	this.shape.setTransform(6.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,12.4,4.9), null);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+gHIADgLIB6AaIgDALg");
	this.shape.setTransform(6.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,12.6,3.9), null);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gBIACgMIB8APIgBAMg");
	this.shape.setTransform(6.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,12.7,2.8), null);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/ADIABgLIB9AGIAAALg");
	this.shape.setTransform(6.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,12.7,1.8), null);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gCIB+gGIAAALIh9AGg");
	this.shape.setTransform(6.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,12.7,1.8), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gCIB+gGIAAALIh9AGg");
	this.shape.setTransform(6.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,12.7,1.7), null);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/ACIB9gPIACAMIh9APg");
	this.shape.setTransform(6.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,12.8,2.8), null);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/ACIB9gPIABAMIh8APg");
	this.shape.setTransform(6.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,12.7,2.8), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+AIIB6gaIADALIh6Aag");
	this.shape.setTransform(6.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,12.6,3.9), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+AIIB6gbIADAMIh6Aag");
	this.shape.setTransform(6.3,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,12.6,3.9), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9ANIB4glIADALIh4Alg");
	this.shape.setTransform(6.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,12.5,4.9), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9ANIB4glIADALIh3Alg");
	this.shape.setTransform(6.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,12.4,4.9), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8ATIB0gwIAFALIh0Awg");
	this.shape.setTransform(6.1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,12.2,5.9), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8ATIB0gwIAFALIh0Awg");
	this.shape.setTransform(6.1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,12.2,6), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6AYIBvg5IAGAKIhwA5g");
	this.shape.setTransform(5.9,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,11.8,6.9), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6AYIBvg6IAGALIhwA6g");
	this.shape.setTransform(5.9,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,11.8,6.9), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4AdIBqhDIAHAKIhqBDg");
	this.shape.setTransform(5.7,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,11.3,7.8), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4AdIBrhDIAGAKIhqBDg");
	this.shape.setTransform(5.7,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,11.3,7.8), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1AiIBkhMIAHAJIhkBMg");
	this.shape.setTransform(5.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,10.8,8.7), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1AiIBkhMIAHAJIhkBMg");
	this.shape.setTransform(5.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,10.8,8.7), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyAnIBdhVIAIAIIhdBVg");
	this.shape.setTransform(5.1,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,10.2,9.4), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyAmIBdhUIAHAJIhcBUg");
	this.shape.setTransform(5.1,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,10.1,9.5), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAqIBVhcIAIAIIhUBcg");
	this.shape.setTransform(4.7,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,9.5,10.1), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguArIBVhdIAIAIIhVBdg");
	this.shape.setTransform(4.7,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,9.4,10.2), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAvIBMhkIAJAHIhMBkg");
	this.shape.setTransform(4.3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,8.7,10.8), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAvIBMhkIAJAHIhMBkg");
	this.shape.setTransform(4.3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,8.7,10.8), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAzIBDhrIAKAHIhDBqg");
	this.shape.setTransform(3.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,7.8,11.3), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAyIBDhqIAKAHIhDBqg");
	this.shape.setTransform(3.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,7.8,11.4), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA1IA6hvIALAFIg6Bwg");
	this.shape.setTransform(3.5,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,6.9,11.8), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA1IA6hvIALAFIg6Bwg");
	this.shape.setTransform(3.5,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,6.9,11.8), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA4IAwh0IALAFIgwB0g");
	this.shape.setTransform(3,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,6,12.2), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA4IAwh0IALAFIgwB0g");
	this.shape.setTransform(3,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,6,12.2), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA7IAlh4IALAEIglB3g");
	this.shape.setTransform(2.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,4.9,12.4), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA7IAlh4IALADIglB4g");
	this.shape.setTransform(2.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,4.9,12.5), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSA9IAah7IALADIgaB6g");
	this.shape.setTransform(1.9,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,3.9,12.7), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSA8IAah6IALADIgaB6g");
	this.shape.setTransform(1.9,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,3.9,12.6), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA+IAPh9IAMACIgPB8g");
	this.shape.setTransform(1.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,2.8,12.7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA+IAPh9IAMACIgPB9g");
	this.shape.setTransform(1.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,2.8,12.8), null);


(lib.Path_1_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAcQgLgCgHgKQgHgJACgLQACgLAKgHQAKgHAKACQAMACAGAKQAHAJgCALQgCALgKAHQgHAGgJAAIgEgBg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_18, new cjs.Rectangle(0,0,5.7,5.8), null);


(lib.Path_1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAbQgLgEgFgLQgFgLAEgKQAEgLALgFQALgFAKAEQALAEAFALQAFALgEAKQgEALgLAFQgGADgGAAQgEAAgFgCg");
	this.shape.setTransform(2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_17, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAZQgLgGgDgLQgCgLAFgKQAGgKALgDQALgDAKAFQALAGACAMQADAKgFAKQgGAKgMAEIgHABQgGAAgHgEg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_16, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAWQgJgIgBgLQAAgLAHgJQAIgJAMgBQAKgBAJAHQAKAIAAAMQACAKgIAJQgIAJgMABIgCAAQgKAAgIgGg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_15, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAcQgMgBgIgJQgIgJACgKQABgMAJgIQAJgHALABQALABAIAJQAHAJgBALQgBALgJAIQgHAGgKAAIgCAAg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0.1,0,5.7,5.7), null);


(lib.Path_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAcQgLgEgGgKQgFgKACgKQADgMALgGQAKgFAKADQAMADAGAKQAFAKgDALQgCALgLAGQgHAEgHAAIgHgBg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAaQgLgFgEgLQgEgLAFgKQAFgLALgEQALgEAKAFQALAFAEALQAEAKgFALQgFALgLAEQgFACgFAAQgFAAgGgDg");
	this.shape.setTransform(2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAXQgKgHgCgLQgCgLAHgKQAGgJAMgCQAKgCAKAHQAKAGACAMQACAKgHAKQgHAKgLACIgFABQgIAAgHgGg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALgBQAMABAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape.setTransform(2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAcQgMgCgGgKQgHgJACgLQACgLAKgHQAJgHALACQALACAHAKQAHAJgCALQgCALgKAHQgHAFgJAAIgEAAg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAbQgLgEgFgLQgFgKAEgLQAEgLALgFQALgFAKAEQALAEAFALQAFALgEAKQgEALgLAFQgGADgGAAQgEAAgFgCg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAZQgLgHgDgLQgCgKAFgKQAGgLALgDQALgCAKAFQALAGACALQADALgFAKQgGALgMACIgHABQgGAAgHgDg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAWQgJgIgBgMQgCgKAIgJQAIgJAMgBQAKgBAJAHQAJAIABAMQABAKgHAJQgIAJgLACIgDAAQgJAAgIgHg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0.1,0,5.7,5.7), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAcQgMgBgIgJQgHgJAAgKQABgMAJgIQAKgIAKABQAMABAIAKQAIAJgCALQAAAMgKAHQgIAHgKAAIgBgBg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAbQgLgCgGgLQgFgKACgLQADgLALgGQAKgFAKACQAMADAGALQAFAKgDAKQgCALgLAHQgHADgHAAIgHgBg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAaQgLgFgEgLQgEgKAFgLQAFgLALgEQALgEAKAFQALAFAEALQAEAKgFALQgFALgLAEQgFACgFAAQgFAAgGgDg");
	this.shape.setTransform(2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,5.8,5.8), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAXQgKgHgCgLQgCgLAHgKQAHgJALgCQALgCAJAHQAKAGACAMQACAKgHAKQgGAKgMACIgFABQgIAAgHgGg");
	this.shape.setTransform(2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUQgIgIgBgMQABgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,5.7,5.7), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA/IAGh+IALABIgGB9g");
	this.shape.setTransform(0.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,1.7,12.7), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFXFrQBdh2AAiXQAAiziAiAQiAiAi0AAQizAAiACAQh/CAgBCzIg4AAQAAjKCQiRQCRiQDKAAQDMAACPCQQCRCRgBDKQABBTgbBOQgaBNg0BCg");
	this.shape.setTransform(49.2,39.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,98.3,79.6), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA/IAGh+IALABIgGB9g");
	this.shape.setTransform(0.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,1.8,12.7), null);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkzE0QiAiAAAi0QAAizCAiAQCAiACzAAQC0AACACAQCACAAACzQAAC0iACAQiACAi0AAQizAAiAiAgAkokoQh8B7AACtQAACuB8B7QB7B8CtAAQCuAAB7h8QB8h7AAiuQAAith8h7Qh7h8iuAAIAAAAQitAAh7B8g");
	this.shape_1.setTransform(43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_1, new cjs.Rectangle(-0.5,-0.5,87.3,87.3), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj7JgQh4gyhdhdQhdhdgyh4Qgyh4AAiEQAAiDAyh4IAAAAQAxh4BehdQBdheB4gxIAAAAQB4gyCDAAQCEAAB4AyIAAAAQB4AxBdBeQBeBdAxB4IAAAAQAyB4AACDQAACEgyB4QgyB4hdBdQhdBdh4AyQh4AyiEAAQiDAAh4gygAD4JXQB2gxBchcQBchcAxh2QAxh2AAiCQAAiBgxh2IAAAAQgxh2hchcQhchch2gwIAAgBQh2gxiCAAQiBAAh2AxIAAABQh2AwhcBcQhcBcgwB2IgBAAQgxB2AACBQAACCAxB2QAxB2BcBcQBcBcB2AxQB2AxCBAAQCCAAB2gxgAAAACIABAAIAAgBIABAAIAAgBIAAAAIgBgBIABABIAAAAIAAABIgBAAIAAABIgBAAgAAAACIgBgBIABABIAAAAIAAAAg");
	this.shape_1.setTransform(65.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(-0.5,-0.5,131.6,131.6), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#020230","#020533","#020F3C","#021F4C","#023663","#02547F","#0179A3","#01A4CC","#01C8EF"],[0,0.188,0.333,0.467,0.588,0.706,0.816,0.922,1],0,21.6,0,-21.6).s().p("Ai0DYIAAmvIFpAHIAAGog");
	this.shape_1.setTransform(18.1,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,36.3,43.2), null);


(lib.Path_1_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#06033E").s().p("AgOBFIhpg8QgGgEAAgFQAAgEAGgEIBpg8QAGgEAIAAQAJAAAGAEIBpA8QAGAEAAAEQAAAFgGAEIhpA8QgGAEgJAAQgHAAgHgEg");
	this.shape_1.setTransform(12.6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_5_1, new cjs.Rectangle(0,0,25.3,14.6), null);


(lib.Path_1_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#06033E").s().p("AgIBLIh5hGQgEgCAAgDQABgDAFgCIB2hEQAJgGAJAFIB5BGQAEACAAACQgBAEgFACIh2BEQgFAEgFAAQgEAAgEgDg");
	this.shape_1.setTransform(13.4,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4_1, new cjs.Rectangle(0,-0.1,26.7,15.6), null);


(lib.Символ13999 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfA9Igfg0IgkAAIAAA0IgbAAIAAh5IAbAAIAAAtIAjAAIAegtIAgAAIgnA4IAqBBg");
	this.shape.setTransform(118.5,-17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuA9IgIgTIhKAAIgIATIgeAAIA1h5IAsAAIA0B5gAgaASIA1AAIgWg1IgIAAg");
	this.shape_1.setTransform(102.8,-17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA9IAAhgIgxAAIAAgZIB9AAIAAAZIgxAAIAABgg");
	this.shape_2.setTransform(87.7,-17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuA9IgIgTIhKAAIgIATIgeAAIA1h5IAsAAIA0B5gAgaASIA1AAIgWg1IgIAAg");
	this.shape_3.setTransform(72.6,-17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAMIAAgXIBEAAIAAAXg");
	this.shape_4.setTransform(60.2,-17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA7QgPgEgPgLIANgVQAMAJANAEQAMAEAPAAQAOAAAKgEQAKgEAAgHQAAgFgEgDQgDgCgIgBIgogFQgSgCgLgHQgLgIABgRQAAgKAEgHQAEgHAJgFQAHgEAKgCQAKgDAMAAQAQAAAPAEQAPAEAOAKIgNAUQgKgHgMgDQgLgDgOAAIgOABQgHABgCACQgEABgBADQgBACAAADQAAAFAEACQAEACAIABIAjAEQAUACALAJQALAHAAARQAAALgEAHQgFAHgJAFQgJAFgLADQgLACgOAAQgSAAgOgFg");
	this.shape_5.setTransform(48.6,-17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA7QgNgEgJgJQgJgIgGgMQgFgMAAgOQAAgNAFgMQAGgMAJgIQAJgJANgEQAMgFANAAQAOAAANAFQAMAEAJAJQAJAIAGAMQAFAMAAANQAAAOgFAMQgGAMgJAIQgJAJgMAEQgNAFgOAAQgNAAgMgFgAgPgkQgHACgGAFQgFAGgDAHQgEAIAAAIQAAAKAEAHQADAHAFAGQAGAFAHADQAIACAHAAQAJAAAHgCQAIgDAFgFQAGgGADgHQADgHAAgKQAAgIgDgIQgDgHgGgGQgFgFgIgCQgHgDgJAAQgHAAgIADg");
	this.shape_6.setTransform(33.7,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/A9IAAh5IA/AAQALAAAMAEQAMAFAJAIQAKAIAEALQAGALAAANQAAANgGAMQgEALgKAIQgJAIgMAEQgMAFgLAAgAgjAkIAjAAQAGAAAIgDQAHgDAFgEQAFgFADgHQACgGABgIQgBgHgCgHQgDgGgFgFQgFgFgHgCQgIgDgGAAIgjAAg");
	this.shape_7.setTransform(18.7,-17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/A9IAAh5IA/AAQALAAAMAEQAMAFAJAIQAKAIAEALQAGALAAANQAAANgGAMQgEALgKAIQgJAIgMAEQgMAFgLAAgAgjAkIAjAAQAGAAAIgDQAHgDAFgEQAFgFADgHQACgGABgIQgBgHgCgHQgDgGgFgFQgFgFgHgCQgIgDgGAAIgjAAg");
	this.shape_8.setTransform(3.8,-17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBJIgCgYIhdAAIgCAYIgYAAIAAgxIAPAAIAUhfIBfAAIAABfIAPAAIAAAxgAgcAYIA7AAIAAhIIguAAg");
	this.shape_9.setTransform(-18.1,-16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA9IAAh5IAbAAIAAB5g");
	this.shape_10.setTransform(-28.7,-17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag9A9IAAh5IBNAAQAIAAAHACQAHADAFAEQAFAEADAGQADAGAAAIQAAAGgDAGQgCAFgFADQAJAFAEAGQAFAIAAALQAAAIgDAHQgDAHgFAFQgGAFgHADQgHADgJAAgAgiAkIA3AAQAHAAADgEQAEgDAAgGQAAgGgEgEQgDgDgGAAIg4AAgAgigNIAzAAQAEAAADgDQADgEAAgEQAAgEgDgEQgCgDgHAAIgxAAg");
	this.shape_11.setTransform(-38.1,-17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNA9IAAhgIgxAAIAAgZIB9AAIAAAZIgxAAIAABgg");
	this.shape_12.setTransform(-58.8,-17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXA7QgNgEgJgIQgJgIgFgMQgFgMAAgPQAAgOAFgMQAGgLAJgJQAJgIAMgEQANgFANAAQAVAAAQAJQAPAIAKAQIgWAMQgHgKgJgFQgKgFgOAAQgJAAgHACQgHADgGAFQgFAGgDAHQgDAHAAAIQAAAJADAHQADAHAGAGQAFAFAHADQAIACAIAAQAOAAAKgFQAJgFAHgKIAWAMQgKAQgPAJQgQAIgVAAQgNAAgNgFg");
	this.shape_13.setTransform(-73,-17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkA9IAAhTIhHBTIgbAAIAAh5IAbAAIAABUIBHhUIAbAAIAAB5g");
	this.shape_14.setTransform(-87.8,-17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlA9IgggyIgIAAIgiAyIgfAAIArg/Igpg6IAfAAIAhAvIAGAAIAggvIAfAAIgpA6IArA/g");
	this.shape_15.setTransform(-102.8,-17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAuA9IgIgTIhKAAIgIATIgeAAIA1h5IAsAAIA0B5gAgaASIA1AAIgWg1IgIAAg");
	this.shape_16.setTransform(-118.4,-17.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTA/IgQgDQgIgCgHgEIgPgJIANgUQAMAHAMAEQANAEAPAAQARAAALgEQAKgFAAgKQAAgGgEgDQgEgDgKAAIgvAAIAAgYIAvAAQAKAAAAgJQAAgHgHgEQgIgEgPAAIgPABIgMACIgKAEIgLAGIgMgUQAPgJAOgEQAOgEAQAAQAOAAAMADQALACAIAGQAOAJAAASQAAAGgCAFQgDAFgEADQARAIAAAUQAAAJgEAIQgFAHgIAGQgIAGgNADQgNADgPAAIgTgBg");
	this.shape_17.setTransform(-133.9,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.8,-32.3,316,53.4);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020230").s().p("A8aXKMAAAguTMA41AAAMAAAAuTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-181.8,-148.2,363.7,296.5), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FF0000","rgba(255,0,0,0)"],[0,0.498,1],-0.2,-73.7,-0.2,25.3).s().p("AhjECIAAknIglAAICIjcICJDcIglAAIAAEng");
	this.shape.setTransform(0,-7.3,1.366,1.366);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-18.7,-42.6,37.3,70.6), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-21.6,-12.5,43.3,25.1), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBCIgig4IgnAAIAAA4IgeAAIAAiEIAeAAIAAAyIAnAAIAggyIAiAAIgqA+IAuBGg");
	this.shape.setTransform(60,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyBCIgIgTIhRAAIgJATIghAAIA7iEIAwAAIA3CEgAgcAUIA5AAIgXg7IgJAAg");
	this.shape_1.setTransform(42.9,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBCIAAhpIg2AAIAAgbICJAAIAAAbIg2AAIAABpg");
	this.shape_2.setTransform(26.4,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyBCIgJgTIhRAAIgIATIghAAIA7iEIAvAAIA5CEgAgdAUIA7AAIgZg7IgJAAg");
	this.shape_3.setTransform(9.9,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglANIAAgZIBLAAIAAAZg");
	this.shape_4.setTransform(-3.7,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBBQgRgFgQgMIAPgXQANAKAOAEQAOAFAPAAQAQAAALgFQAKgEAAgIQAAgGgDgCQgEgDgIgBIgsgFQgUgCgMgIQgMgJAAgTQAAgKAFgIQAFgHAJgFQAIgGALgCQALgDANAAQASAAAQAFQARAEAPALIgOAWQgMgIgNgDQgMgEgPAAIgQABQgGABgEACQgDACgCADQgBACAAADQAAAGAFACQAFACAHABIAnAFQAVACANAKQAMAIAAASQAAAMgFAIQgFAIgKAFQgJAGgMACQgNADgPAAQgTAAgQgFg");
	this.shape_5.setTransform(-16.3,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBBQgOgFgLgKQgJgJgHgMQgFgNAAgQQAAgPAFgMQAHgNAJgJQALgJAOgGQANgFAOAAQAPAAANAFQAOAGALAJQAJAJAGANQAHAMgBAPQABAQgHANQgGAMgJAJQgLAKgOAFQgNAFgPAAQgOAAgNgFgAgQgoQgJADgGAGQgFAFgEAJQgDAIAAAJQAAAKADAJQAEAIAFAFQAGAGAJADQAHADAJAAQAJAAAJgDQAHgDAGgGQAHgFADgIQADgJABgKQgBgJgDgIQgDgJgHgFQgGgGgHgDQgJgDgJAAQgJAAgHADg");
	this.shape_6.setTransform(-32.5,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFBCIAAiEIBEAAQANAAANAGQANAEAKAJQAKAIAGANQAGAMAAAOQAAAPgGAMQgGANgKAIQgKAJgNAEQgNAGgNgBgAgnAnIAmAAQAIAAAIgCQAHgEAGgFQAFgFAEgHQADgIAAgIQAAgIgDgHQgEgHgFgFQgGgFgHgDQgIgDgIAAIgmAAg");
	this.shape_7.setTransform(-48.9,34.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFBCIAAiEIBEAAQANAAANAGQANAEAKAJQAKAIAGANQAGAMAAAOQAAAPgGAMQgGANgKAIQgKAJgNAEQgNAGgNgBgAgnAnIAmAAQAIAAAIgCQAHgEAGgFQAFgFADgHQAEgIAAgIQAAgIgEgHQgDgHgFgFQgGgFgHgDQgIgDgIAAIgmAAg");
	this.shape_8.setTransform(-65.1,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA1BPIgCgZIhlAAIgDAZIgZAAIAAg0IAQAAIAVhpIBpAAIAABpIAPAAIAAA0gAgeAbIBAAAIAAhPIgzAAg");
	this.shape_9.setTransform(59.8,8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBDIAAiEIAdAAIAACEg");
	this.shape_10.setTransform(48.3,6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDBDIAAiEIBVAAQAJAAAHACQAIADAFAFQAGAEADAGQADAHAAAJQAAAGgDAGQgCAHgGADQAKAFAFAHQAFAIAAAMQAAAJgDAIQgEAHgGAFQgFAGgIADQgIAEgKAAgAglAoIA8AAQAHgBAFgEQAEgEAAgGQAAgGgEgEQgFgEgGAAIg9AAgAglgOIA4AAQAEAAADgEQADgEAAgEQAAgEgCgFQgDgDgIAAIg1AAg");
	this.shape_11.setTransform(38,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBDIAAhpIg2AAIAAgbICJAAIAAAbIg2AAIAABpg");
	this.shape_12.setTransform(15.5,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZBBQgOgFgKgJQgJgJgGgNQgGgNAAgQQAAgPAGgNQAGgNAKgJQAKgJANgFQAOgFAPAAQAXAAARAJQAQAJALASIgYANQgHgKgLgGQgKgGgQAAQgJAAgIADQgIADgGAGQgGAFgDAIQgDAIAAAJQAAAKADAIQAEAHAFAGQAGAGAIADQAIADAJAAQAQAAAKgGQALgFAHgLIAYANQgLASgQAJQgRAJgXAAQgPAAgOgFg");
	this.shape_13.setTransform(-0.1,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnBDIAAhcIhNBcIgeAAIAAiEIAeAAIAABbIBNhbIAeAAIAACEg");
	this.shape_14.setTransform(-16.2,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AApBDIgkg3IgJAAIgkA3IgjAAIAwhEIgthAIAiAAIAjAzIAHAAIAjgzIAiAAIgsA/IAvBFg");
	this.shape_15.setTransform(-32.6,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAyBDIgJgVIhRAAIgIAVIggAAIA5iEIAxAAIA4CEgAgcAUIA5AAIgYg6IgJAAg");
	this.shape_16.setTransform(-49.6,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUBFQgKgBgIgDIgRgGQgIgEgIgGIAOgWQANAIAOAEQANAEARAAQATAAAMgEQALgFAAgLQAAgHgFgDQgEgEgLAAIgzAAIAAgZIAzAAQALAAAAgLQAAgHgIgEQgJgEgRAAIgPABIgNACQgHABgFADIgMAHIgMgWQAPgLAPgEQAQgEASAAQAPAAANADQAMADAJAGQAPAKAAATQAAAHgCAFQgDAGgFADQATAJAAAWQAAAKgFAIQgEAIgKAHQgJAHgNADQgPADgRAAIgTgBg");
	this.shape_17.setTransform(-66.4,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-157.9,-107.8,316,156.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1A3IAAhtIAVAAIAAAaIApAAQAJAAAJADQAIADAGAFQAGAGADAIQAEAGAAAKQAAAJgEAIQgDAIgGAGQgGAFgIADQgJADgJAAgAggAlIAnAAQANAAAGgGQAHgHAAgLQAAgMgHgFQgGgGgNAAIgnAAg");
	this.shape.setTransform(71.3,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA2QgLgEgJgIQgIgHgFgLQgEgLAAgNQAAgNAEgKQAFgLAIgHQAJgIALgEQALgEAMAAQATAAAOAHQANAHAJAOIgQAJQgGgJgKgFQgJgFgOAAQgJAAgHADQgIACgFAGQgFAFgDAHQgDAIAAAIQAAAIADAIQADAHAFAFQAGAGAHACQAIAEAIAAQAOAAAJgFQAJgFAHgJIAQAJQgJANgNAIQgOAHgTAAQgMAAgLgEg");
	this.shape_1.setTransform(58.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlA3IAAhSIhJBSIgUAAIAAhtIAUAAIAABSIBJhSIAUAAIAABtg");
	this.shape_2.setTransform(44.9,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA3IAAhbIgvAAIAAgSIBxAAIAAASIgvAAIAABbg");
	this.shape_3.setTransform(31.8,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlA3IAAhSIhJBSIgUAAIAAhtIAUAAIAABSIBJhSIAUAAIAABtg");
	this.shape_4.setTransform(18.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhA3IAAgZIgrAAQgKAAgHgDQgIgDgGgGQgFgFgEgIQgDgHAAgKIAAgqIAVAAIAAAoQAAANAGAGQAIAHAMAAIAnAAIAAhCIAVAAIAABtg");
	this.shape_5.setTransform(5.5,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBA2QgLgDgIgHQgIgGgFgKQgFgJgBgNIgUAAIAAAxIgUAAIAAhuIAUAAIAAAsIAVAAQACgLAFgJQAGgJAHgGQAIgFAKgEQAJgCALAAQAMAAALADQALAEAJAHQAIAIAFALQAEALAAANQAAAOgEALQgFAKgIAIQgJAIgLADQgLAEgMAAQgMAAgJgEgAgJgdQgKALAAASQAAASAKALQAJAMAUAAQAUAAAKgMQAKgLAAgSQAAgSgKgLQgKgLgUABQgUgBgJALg");
	this.shape_6.setTransform(-9.7,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqA3IAAhbIgwAAIgMBAQgDAOgIAHQgJAGgNAAIgLAAIAAgTIAKAAQAGAAADgCQAEgDABgGIAPhPIBWAAIAABtg");
	this.shape_7.setTransform(-26.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhA3IgfgxIgmAAIAAAxIgUAAIAAhtIAUAAIAAAqIAmAAIAdgqIAXAAIgjAzIAmA6g");
	this.shape_8.setTransform(-38.8,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBCIgCgWIhdAAIgCAWIgRAAIAAgoIAOAAIAThbIBVAAIAABbIAOAAIAAAogAgdAaIA+AAIAAhKIgxAAg");
	this.shape_9.setTransform(-52.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJA3IAAhtIATAAIAABtg");
	this.shape_10.setTransform(-62.2,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiA3IAAhbIhCAAIAABbIgVAAIAAhtIBrAAIAABtg");
	this.shape_11.setTransform(-70.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-81,-12.7,162.1,25.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnLBkQgKAAgHgHQgIgIAAgKIAAiVQAAgKAIgIQAHgHAKAAIOWAAQALAAAHAHQAIAIAAAKIAACVQAAAKgIAIQgHAHgLAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-48.4,-10,97,20), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#714082").s().p("AATAYQgSAAgMgKQgNgJAAgMQAAgJAFgHIAkAAQADAAADADQACACAAADIAAAng");
	this.shape.setTransform(20.4,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0EB1D9").s().p("AglAaIgLAAQgDAAgCgCQgDgDABgDIAAgIIAnAAQAHAAAAgIIAAgmIAVAAQgFAHAAAJQgBANANAIQANAKATAAIAFAAIAAAHQAAADgCADQgCACgDAAIhLAAIgLALg");
	this.shape_1.setTransform(17.2,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E63162").s().p("AARAbQgGADgIABIAAgnQAAgDgCgCQgCgDgDAAIglAAQANgQAaAAQASAAANAJQANAJAAAOQAAANgPAKIAFAKg");
	this.shape_2.setTransform(22.6,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADC936").s().p("AgfAkQgEAAgBgBQgDgDAAgDIAAguQAAgIAIAAIAqAAIAMgLIAAALIAKAAQAHAAAAAIIAAAIIgoAAQgBAAgCACQgDACAAAEIAAAlg");
	this.shape_3.setTransform(12.3,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00943F").s().p("AgWAXIAAglQgBgEADgCQACgCADAAIAmAAIAAAmQAAADgBACQgDACgDAAg");
	this.shape_4.setTransform(13.9,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/AcIADgKQAKAEAGgEQADgDAAgGQgEAEgGAAQgJAAgFgEQgEgFAAgJIAAgZIALAAIAAAaQAAAEACABQADACADAAQAEAAADgCQACgCAAgEIAAgZIALAAIAAAoQAAALgGAFQgFAEgJABQgHAAgGgDgAAZAdIAAg7IAMAAIAAADIADgBIAIgCQAFAAAEACQAFABADADQADADABAFQACAEAAAFIAAABQAAAFgCADQgBAEgDADIgIAFQgEACgFAAQgHAAgEgEIAAARgAAqgUQAAABgBAAQAAAAgBABQAAAAAAABQAAAAgBABIgBAEIgBAFIAAABIABAFIABADQABABAAAAQAAABABAAQAAABABAAQAAAAAAAAQADACADAAQADAAACgCQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIACgDIAAgFIAAgBIAAgFIgCgEIgDgEIgFgBIgGABgAAIANIgNgSIgEAEIAAAOIgNAAIAAgrIANAAIAAAQIAOgQIAPAAIgRAQIATAbg");
	this.shape_5.setTransform(-19.6,5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAVQgEgBgCgDQgEgDgBgEQgBgFgBgFQABgEABgEQABgFAEgDIAHgEQAFgDAEAAQAFAAAFADIAGAFQADAFABAEQABAFAAAEIggAAQABAFADADQACADAGAAQADAAADgCIADgDIAKAAQgDAHgEAEQgGAEgHAAIgKgDgAgUgMQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABIgCACIgBADIAVAAQgBgEgDgDQgBgCgGAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAgAhvAVQgEgBgDgDQgDgDgBgEQgCgFAAgFQAAgEACgEQABgFADgDIAIgEQAFgDAEAAQAFAAAFADIAHAFQADAFAAAEQACAFgBAEIggAAQAAAFADADQADADAFAAQADAAAEgCIADgDIAKAAQgCAHgGAEQgGAEgGAAIgKgDgAhrgMQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABIgBACIgBADIAUAAQgBgEgCgDQgCgCgEAAQgEAAgCABgABDAVQgFgBgDgDQgDgDgCgEQgBgFAAgFQAAgFABgDQACgFADgDQADgDAFgBQADgDAGAAQAFAAAFADQADABAEADQACADACAFQACADgBAFQABAFgCAFQgCAEgCADQgEADgDABQgFACgFAAQgFAAgEgCgABGgMIgCADIgCAFIgBAEIABAFIACAFIACADIAGABIAFgBIAEgDIABgFIABgFIgBgEIgBgFIgEgDIgFgBIgGABgACaAWIgFgeIgKAeIgMAAIgJgeIgGAeIgNAAIAJgmQABgFAIgCIACAAQAIACABAFIAFAUIAGgUQABgFAHgCIADAAQAGACACAFIAJAmgAApAWIgNgUIgFAFIAAAPIgNAAIAAgrIANAAIAAAPIAPgPIAPAAIgRAQIATAbgAgxAWIgJgeIgKAeIgMAAIAMgmQABgFAHgCIADAAQAGACADAFIAKAmgAiYAWIAAggIgNAAIAAgLIAnAAIAAALIgNAAIAAAgg");
	this.shape_6.setTransform(4.3,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-8.4,53.5,16.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijArIhnAAIAAirIIVAAIAACrIliAAIgmBWgAj8AcIBiAAIAdBCIAchCIFeAAIAAiNIn5AAgACMgRQgKgJAAgOQAAgOAKgIQAJgJAOAAQAVAAAJAQIgKAGQgHgKgNAAQgJAAgFAFQgGAGAAAIQAAAJAGAFQAFAFAJAAQANABAHgKIAKAGQgKAPgUAAQgOAAgJgIgAhXgSIAGgKQAKAGAQABQATAAAAgJQAAgGgJAAIgYAAIAAgMIAYAAQAFAAAAgEQAAgHgPAAQgPAAgJAGIgFgKQAMgIAQAAQAQAAAHAFQAGAFAAAIQAAAGgEADQAIAFAAAJQAAAJgIAGQgIAGgRAAQgSAAgNgJgABAgKIABg8IA1ABIAAAMIgoAAIAAALIAkAAIAAAMIgkAAIAAALIAqAAIgBANgAAkgKIAAgZIgiAAIAAAYIgMAAIAAg7IAMAAIAAAXIAiAAIAAgXIANAAIAAA8gAhvgLIAAg7IANAAIAAA7gAi2gLIAAg7IAzAAIAAAMIgmAAIAAAHIAZAAQAJABAGAFQAFAGAAAIQAAAIgGAGQgGAGgJAAgAipgXIAYAAQAIAAAAgIQABgIgKAAIgXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-12.9,53.5,25.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA1A9IAAhUIgBAAIgqBUIgVAAIgohUIgBAAIAABUIgbAAIAAh5IAkAAIArBXIABAAIAshXIAjAAIAAB5g");
	this.shape.setTransform(77.4,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA7QgNgEgJgJQgJgIgGgMQgFgMAAgOQAAgNAFgMQAGgMAJgIQAJgJANgEQAMgFANAAQAOAAANAFQAMAEAJAJQAJAIAGAMQAFAMAAANQAAAOgFAMQgGAMgJAIQgJAJgMAEQgNAFgOAAQgNAAgMgFgAgPgkQgHACgGAFQgFAGgDAHQgEAIAAAIQAAAKAEAHQADAHAFAGQAGAFAHADQAIACAHAAQAJAAAHgCQAIgDAFgFQAGgGADgHQADgHAAgKQAAgIgDgIQgDgHgGgGQgFgFgIgCQgHgDgJAAQgHAAgIADg");
	this.shape_1.setTransform(60.5,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfA9Igfg0IgkAAIAAA0IgbAAIAAh5IAbAAIAAAtIAjAAIAegtIAgAAIgnA4IAqBBg");
	this.shape_2.setTransform(45.9,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4A9IAAh5IBuAAIAAAZIhSAAIAAAWIBJAAIAAAYIhJAAIAAAYIBVAAIAAAag");
	this.shape_3.setTransform(31.8,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqA9IAAhgIguAAIgMBBQgDAQgKAHQgJAIgQAAIgOAAIAAgZIANAAQAKAAACgKIAQhWIBgAAIAAB5g");
	this.shape_4.setTransform(17,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4A9IAAh5IBuAAIAAAZIhSAAIAAAWIBJAAIAAAYIhJAAIAAAYIBVAAIAAAag");
	this.shape_5.setTransform(3.3,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA9IAAhgIgxAAIAAgZIB9AAIAAAZIgxAAIAABgg");
	this.shape_6.setTransform(-10.5,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8A9IAAh5IBHAAQAKAAAKADQAJAEAHAGQAGAGAEAJQAEAJAAALQAAALgEAHQgEAJgGAGQgHAGgJADQgKAEgKAAIgrAAIAAAbgAggAJIAqAAQAKAAAHgGQAGgFAAgKQAAgLgGgGQgHgGgKAAIgqAAg");
	this.shape_7.setTransform(-24.3,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfA9Igfg0IgkAAIAAA0IgbAAIAAh5IAbAAIAAAtIAkAAIAdgtIAgAAIgnA4IAqBBg");
	this.shape_8.setTransform(-38.4,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA9IAAgYIAgAAQADAAADgBQAEgDABgDIADgJIgbAAQgOAAgIgGQgIgGgFgMIgTg5IAcAAIASAzQABAEACABQADACADAAIAhAAIATg6IAcAAIggBfQgEAMgJAHQgKAHgMAAg");
	this.shape_9.setTransform(-53.2,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxBIIgCgXIhdAAIgCAXIgYAAIAAgvIAPAAIAThgIBgAAIAABgIAPAAIAAAvgAgcAZIA7AAIAAhJIguAAg");
	this.shape_10.setTransform(-74.9,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNA9IAAh5IAbAAIAAB5g");
	this.shape_11.setTransform(-85.5,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag9A9IAAh5IBNAAQAIAAAHACQAHADAFAEQAFAEADAGQADAGAAAIQAAAGgDAGQgCAFgFADQAJAFAEAGQAFAIAAALQAAAIgDAHQgDAHgFAFQgGAFgHADQgHADgJAAgAgiAkIA3AAQAHAAADgEQAEgDAAgGQAAgGgEgEQgDgDgGAAIg4AAgAgigNIAzAAQAEAAADgDQADgEAAgEQAAgEgDgEQgCgDgHAAIgxAAg");
	this.shape_12.setTransform(-94.9,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.8,-32.5,316,53.4);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(77.1,6.4,1,1,0,0,0,0.8,6.4);
	this.instance.alpha = 0.672;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.2,142.2,1,1,0,0,0,0.8,6.4);
	this.instance_1.alpha = 0.672;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(83.1,6.9,1,1,0,0,0,1.4,6.4);
	this.instance_2.alpha = 0.672;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(65.4,141.6,1,1,0,0,0,1.4,6.4);
	this.instance_3.alpha = 0.672;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(88.9,7.9,1,1,0,0,0,1.9,6.3);
	this.instance_4.alpha = 0.672;

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(59.5,140.5,1,1,0,0,0,1.9,6.3);
	this.instance_5.alpha = 0.672;

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(94.7,9.4,1,1,0,0,0,2.5,6.2);
	this.instance_6.alpha = 0.672;

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(53.9,139,1,1,0,0,0,2.5,6.2);
	this.instance_7.alpha = 0.672;

	this.instance_8 = new lib.Path_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(100.3,11.4,1,1,0,0,0,3,6);
	this.instance_8.alpha = 0.672;

	this.instance_9 = new lib.Path_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(48.3,136.9,1,1,0,0,0,3,6);
	this.instance_9.alpha = 0.672;

	this.instance_10 = new lib.Path_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(105.7,14,1,1,0,0,0,3.5,5.9);
	this.instance_10.alpha = 0.672;

	this.instance_11 = new lib.Path_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(42.9,134.5,1,1,0,0,0,3.5,5.9);
	this.instance_11.alpha = 0.672;

	this.instance_12 = new lib.Path_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(110.7,17,1,1,0,0,0,3.9,5.7);
	this.instance_12.alpha = 0.672;

	this.instance_13 = new lib.Path_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(37.8,131.6,1,1,0,0,0,3.9,5.7);
	this.instance_13.alpha = 0.672;

	this.instance_14 = new lib.Path_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(115.6,20.4,1,1,0,0,0,4.3,5.4);
	this.instance_14.alpha = 0.672;

	this.instance_15 = new lib.Path_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(32.9,128.2,1,1,0,0,0,4.3,5.4);
	this.instance_15.alpha = 0.672;

	this.instance_16 = new lib.Path_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(120.1,24.1,1,1,0,0,0,4.7,5);
	this.instance_16.alpha = 0.672;

	this.instance_17 = new lib.Path_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(28.3,124.3,1,1,0,0,0,4.7,5);
	this.instance_17.alpha = 0.672;

	this.instance_18 = new lib.Path_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(124.3,28.3,1,1,0,0,0,5,4.7);
	this.instance_18.alpha = 0.672;

	this.instance_19 = new lib.Path_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(24.1,120.1,1,1,0,0,0,5,4.7);
	this.instance_19.alpha = 0.672;

	this.instance_20 = new lib.Path_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(128.2,32.9,1,1,0,0,0,5.4,4.3);
	this.instance_20.alpha = 0.672;

	this.instance_21 = new lib.Path_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(20.4,115.6,1,1,0,0,0,5.4,4.3);
	this.instance_21.alpha = 0.672;

	this.instance_22 = new lib.Path_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(131.6,37.7,1,1,0,0,0,5.7,3.9);
	this.instance_22.alpha = 0.672;

	this.instance_23 = new lib.Path_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(17,110.7,1,1,0,0,0,5.7,3.9);
	this.instance_23.alpha = 0.672;

	this.instance_24 = new lib.Path_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(134.5,42.9,1,1,0,0,0,5.9,3.5);
	this.instance_24.alpha = 0.672;

	this.instance_25 = new lib.Path_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(14,105.6,1,1,0,0,0,5.9,3.4);
	this.instance_25.alpha = 0.672;

	this.instance_26 = new lib.Path_26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(136.9,48.3,1,1,0,0,0,6,3);
	this.instance_26.alpha = 0.672;

	this.instance_27 = new lib.Path_27();
	this.instance_27.parent = this;
	this.instance_27.setTransform(11.4,100.3,1,1,0,0,0,6,3);
	this.instance_27.alpha = 0.672;

	this.instance_28 = new lib.Path_28();
	this.instance_28.parent = this;
	this.instance_28.setTransform(139,53.9,1,1,0,0,0,6.2,2.5);
	this.instance_28.alpha = 0.672;

	this.instance_29 = new lib.Path_29();
	this.instance_29.parent = this;
	this.instance_29.setTransform(9.4,94.7,1,1,0,0,0,6.2,2.5);
	this.instance_29.alpha = 0.672;

	this.instance_30 = new lib.Path_30();
	this.instance_30.parent = this;
	this.instance_30.setTransform(140.6,59.6,1,1,0,0,0,6.3,2);
	this.instance_30.alpha = 0.672;

	this.instance_31 = new lib.Path_31();
	this.instance_31.parent = this;
	this.instance_31.setTransform(7.9,88.9,1,1,0,0,0,6.3,1.9);
	this.instance_31.alpha = 0.672;

	this.instance_32 = new lib.Path_32();
	this.instance_32.parent = this;
	this.instance_32.setTransform(141.6,65.4,1,1,0,0,0,6.4,1.4);
	this.instance_32.alpha = 0.672;

	this.instance_33 = new lib.Path_33();
	this.instance_33.parent = this;
	this.instance_33.setTransform(6.9,83.1,1,1,0,0,0,6.4,1.4);
	this.instance_33.alpha = 0.672;

	this.instance_34 = new lib.Path_34();
	this.instance_34.parent = this;
	this.instance_34.setTransform(142.2,71.2,1,1,0,0,0,6.4,0.8);
	this.instance_34.alpha = 0.672;

	this.instance_35 = new lib.Path_35();
	this.instance_35.parent = this;
	this.instance_35.setTransform(6.4,77.1,1,1,0,0,0,6.4,0.8);
	this.instance_35.alpha = 0.672;

	this.instance_36 = new lib.Path_36();
	this.instance_36.parent = this;
	this.instance_36.setTransform(142.2,77.1,1,1,0,0,0,6.4,0.8);
	this.instance_36.alpha = 0.672;

	this.instance_37 = new lib.Path_37();
	this.instance_37.parent = this;
	this.instance_37.setTransform(141.6,83.1,1,1,0,0,0,6.4,1.4);
	this.instance_37.alpha = 0.672;

	this.instance_38 = new lib.Path_38();
	this.instance_38.parent = this;
	this.instance_38.setTransform(140.6,88.9,1,1,0,0,0,6.3,1.9);
	this.instance_38.alpha = 0.672;

	this.instance_39 = new lib.Path_39();
	this.instance_39.parent = this;
	this.instance_39.setTransform(139,94.7,1,1,0,0,0,6.2,2.5);
	this.instance_39.alpha = 0.672;

	this.instance_40 = new lib.Path_40();
	this.instance_40.parent = this;
	this.instance_40.setTransform(136.9,100.3,1,1,0,0,0,6,3);
	this.instance_40.alpha = 0.672;

	this.instance_41 = new lib.Path_41();
	this.instance_41.parent = this;
	this.instance_41.setTransform(134.5,105.6,1,1,0,0,0,5.9,3.4);
	this.instance_41.alpha = 0.672;

	this.instance_42 = new lib.Path_42();
	this.instance_42.parent = this;
	this.instance_42.setTransform(131.6,110.7,1,1,0,0,0,5.7,3.9);
	this.instance_42.alpha = 0.672;

	this.instance_43 = new lib.Path_43();
	this.instance_43.parent = this;
	this.instance_43.setTransform(128.2,115.6,1,1,0,0,0,5.4,4.3);
	this.instance_43.alpha = 0.672;

	this.instance_44 = new lib.Path_44();
	this.instance_44.parent = this;
	this.instance_44.setTransform(124.3,120.1,1,1,0,0,0,5,4.7);
	this.instance_44.alpha = 0.672;

	this.instance_45 = new lib.Path_45();
	this.instance_45.parent = this;
	this.instance_45.setTransform(120.1,124.3,1,1,0,0,0,4.7,5);
	this.instance_45.alpha = 0.672;

	this.instance_46 = new lib.Path_46();
	this.instance_46.parent = this;
	this.instance_46.setTransform(115.6,128.2,1,1,0,0,0,4.3,5.4);
	this.instance_46.alpha = 0.672;

	this.instance_47 = new lib.Path_47();
	this.instance_47.parent = this;
	this.instance_47.setTransform(110.7,131.6,1,1,0,0,0,3.9,5.7);
	this.instance_47.alpha = 0.672;

	this.instance_48 = new lib.Path_48();
	this.instance_48.parent = this;
	this.instance_48.setTransform(105.7,134.5,1,1,0,0,0,3.5,5.9);
	this.instance_48.alpha = 0.672;

	this.instance_49 = new lib.Path_49();
	this.instance_49.parent = this;
	this.instance_49.setTransform(100.3,136.9,1,1,0,0,0,3,6);
	this.instance_49.alpha = 0.672;

	this.instance_50 = new lib.Path_50();
	this.instance_50.parent = this;
	this.instance_50.setTransform(94.7,139,1,1,0,0,0,2.5,6.2);
	this.instance_50.alpha = 0.672;

	this.instance_51 = new lib.Path_51();
	this.instance_51.parent = this;
	this.instance_51.setTransform(88.9,140.5,1,1,0,0,0,1.9,6.3);
	this.instance_51.alpha = 0.672;

	this.instance_52 = new lib.Path_52();
	this.instance_52.parent = this;
	this.instance_52.setTransform(83.1,141.6,1,1,0,0,0,1.4,6.4);
	this.instance_52.alpha = 0.672;

	this.instance_53 = new lib.Path_53();
	this.instance_53.parent = this;
	this.instance_53.setTransform(77.1,142.2,1,1,0,0,0,0.8,6.4);
	this.instance_53.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,148.5,148.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path_71();
	this.instance.parent = this;
	this.instance.setTransform(67,3.7,1,1,0,0,0,2.9,2.9);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Path_1_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.1,111.3,1,1,0,0,0,2.9,2.8);
	this.instance_1.alpha = 0.621;

	this.instance_2 = new lib.Path_70();
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.2,6.2,1,1,0,0,0,2.9,2.9);
	this.instance_2.alpha = 0.621;

	this.instance_3 = new lib.Path_1_17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38.8,108.9,1,1,0,0,0,2.8,2.9);
	this.instance_3.alpha = 0.621;

	this.instance_4 = new lib.Path_69();
	this.instance_4.parent = this;
	this.instance_4.setTransform(84.9,10.2,1,1,0,0,0,2.9,2.9);
	this.instance_4.alpha = 0.621;

	this.instance_5 = new lib.Path_1_16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(30.2,104.9,1,1,0,0,0,2.9,2.9);
	this.instance_5.alpha = 0.621;

	this.instance_6 = new lib.Path_68();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92.7,15.7,1,1,0,0,0,2.9,2.9);
	this.instance_6.alpha = 0.621;

	this.instance_7 = new lib.Path_1_15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(22.4,99.3,1,1,0,0,0,2.9,2.8);
	this.instance_7.alpha = 0.621;

	this.instance_8 = new lib.Path_67();
	this.instance_8.parent = this;
	this.instance_8.setTransform(99.3,22.4,1,1,0,0,0,2.8,2.9);
	this.instance_8.alpha = 0.621;

	this.instance_9 = new lib.Path_1_14();
	this.instance_9.parent = this;
	this.instance_9.setTransform(15.7,92.6,1,1,0,0,0,2.9,2.8);
	this.instance_9.alpha = 0.621;

	this.instance_10 = new lib.Path_66();
	this.instance_10.parent = this;
	this.instance_10.setTransform(104.9,30.2,1,1,0,0,0,2.9,2.9);
	this.instance_10.alpha = 0.621;

	this.instance_11 = new lib.Path_1_13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(10.2,84.9,1,1,0,0,0,2.9,2.9);
	this.instance_11.alpha = 0.621;

	this.instance_12 = new lib.Path_65();
	this.instance_12.parent = this;
	this.instance_12.setTransform(108.9,38.8,1,1,0,0,0,2.9,2.8);
	this.instance_12.alpha = 0.621;

	this.instance_13 = new lib.Path_1_12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(6.1,76.2,1,1,0,0,0,2.8,2.9);
	this.instance_13.alpha = 0.621;

	this.instance_14 = new lib.Path_64();
	this.instance_14.parent = this;
	this.instance_14.setTransform(111.4,48.1,1,1,0,0,0,2.9,2.9);
	this.instance_14.alpha = 0.621;

	this.instance_15 = new lib.Path_1_11();
	this.instance_15.parent = this;
	this.instance_15.setTransform(3.7,67,1,1,0,0,0,2.9,2.9);
	this.instance_15.alpha = 0.621;

	this.instance_16 = new lib.Path_63();
	this.instance_16.parent = this;
	this.instance_16.setTransform(112.2,57.5,1,1,0,0,0,2.9,2.9);
	this.instance_16.alpha = 0.621;

	this.instance_17 = new lib.Path_1_10();
	this.instance_17.parent = this;
	this.instance_17.setTransform(2.8,57.5,1,1,0,0,0,2.8,2.9);
	this.instance_17.alpha = 0.621;

	this.instance_18 = new lib.Path_62();
	this.instance_18.parent = this;
	this.instance_18.setTransform(111.4,67,1,1,0,0,0,2.9,2.9);
	this.instance_18.alpha = 0.621;

	this.instance_19 = new lib.Path_1_9();
	this.instance_19.parent = this;
	this.instance_19.setTransform(3.7,48.1,1,1,0,0,0,2.9,2.9);
	this.instance_19.alpha = 0.621;

	this.instance_20 = new lib.Path_61();
	this.instance_20.parent = this;
	this.instance_20.setTransform(108.9,76.2,1,1,0,0,0,2.9,2.9);
	this.instance_20.alpha = 0.621;

	this.instance_21 = new lib.Path_1_8();
	this.instance_21.parent = this;
	this.instance_21.setTransform(6.1,38.8,1,1,0,0,0,2.8,2.8);
	this.instance_21.alpha = 0.621;

	this.instance_22 = new lib.Path_60();
	this.instance_22.parent = this;
	this.instance_22.setTransform(104.9,84.9,1,1,0,0,0,2.9,2.9);
	this.instance_22.alpha = 0.621;

	this.instance_23 = new lib.Path_1_7();
	this.instance_23.parent = this;
	this.instance_23.setTransform(10.2,30.2,1,1,0,0,0,2.9,2.9);
	this.instance_23.alpha = 0.621;

	this.instance_24 = new lib.Path_59();
	this.instance_24.parent = this;
	this.instance_24.setTransform(99.3,92.6,1,1,0,0,0,2.8,2.8);
	this.instance_24.alpha = 0.621;

	this.instance_25 = new lib.Path_1_6();
	this.instance_25.parent = this;
	this.instance_25.setTransform(15.7,22.4,1,1,0,0,0,2.9,2.9);
	this.instance_25.alpha = 0.621;

	this.instance_26 = new lib.Path_58();
	this.instance_26.parent = this;
	this.instance_26.setTransform(92.7,99.3,1,1,0,0,0,2.9,2.8);
	this.instance_26.alpha = 0.621;

	this.instance_27 = new lib.Path_1_5();
	this.instance_27.parent = this;
	this.instance_27.setTransform(22.4,15.7,1,1,0,0,0,2.9,2.9);
	this.instance_27.alpha = 0.621;

	this.instance_28 = new lib.Path_57();
	this.instance_28.parent = this;
	this.instance_28.setTransform(84.9,104.9,1,1,0,0,0,2.9,2.9);
	this.instance_28.alpha = 0.621;

	this.instance_29 = new lib.Path_1_4();
	this.instance_29.parent = this;
	this.instance_29.setTransform(30.2,10.2,1,1,0,0,0,2.9,2.9);
	this.instance_29.alpha = 0.621;

	this.instance_30 = new lib.Path_56();
	this.instance_30.parent = this;
	this.instance_30.setTransform(76.2,108.9,1,1,0,0,0,2.9,2.9);
	this.instance_30.alpha = 0.621;

	this.instance_31 = new lib.Path_1_3();
	this.instance_31.parent = this;
	this.instance_31.setTransform(38.8,6.2,1,1,0,0,0,2.8,2.9);
	this.instance_31.alpha = 0.621;

	this.instance_32 = new lib.Path_55();
	this.instance_32.parent = this;
	this.instance_32.setTransform(67,111.3,1,1,0,0,0,2.9,2.8);
	this.instance_32.alpha = 0.621;

	this.instance_33 = new lib.Path_1_2();
	this.instance_33.parent = this;
	this.instance_33.setTransform(48.1,3.7,1,1,0,0,0,2.9,2.9);
	this.instance_33.alpha = 0.621;

	this.instance_34 = new lib.Path_54();
	this.instance_34.parent = this;
	this.instance_34.setTransform(57.5,112.2,1,1,0,0,0,2.9,2.9);
	this.instance_34.alpha = 0.621;

	this.instance_35 = new lib.Path_1_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(57.5,2.8,1,1,0,0,0,2.9,2.8);
	this.instance_35.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,115,115), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,-1.5,2.956,2.956,0,0,0,23.3,25.2);
	this.instance.alpha = 0.512;

	this.instance_1 = new lib.CompoundPath_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,-3.3,2.956,2.956,0,0,0,26.7,28.9);
	this.instance_1.alpha = 0.828;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-81.4,-88.7,162.9,177.5), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.469},6).to({alpha:0},6).to({_off:true},1).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-12.5,43.3,25.1);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjECIAAknIglAAICIjcICJDcIglAAIAAEng");

	// Слой 3
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(0.1,69.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({y:-52.5},19).to({_off:true},1).wait(3));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20613").s().p("AhjECIAAknIglAAICIjcICJDcIglAAIAAEng");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-25.8,27.4,51.7);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVDqQgKgCgJgHIAGgMQAJAGAIADQAJACAKAAQALAAAHgDQAHgDAAgGQAAgJgNgCIgagDQgMgBgHgFQgHgGAAgKQAAgGADgGQADgEAFgDQAFgDAHgCQAHgBAHAAQALAAAJACQAKACAJAHIgGALQgIgEgHgCQgJgDgJAAIgLABIgHADIgDADIgCAFQABAEAEACIAJACIAYADQANACAHAGQAIAFAAALQAAAHgEAFQgDAFgFADQgFADgIABQgIACgJAAQgMAAgJgDgAgRBoQgIgDgGgFQgGgHgFgHQgDgJAAgJQAAgKADgIQAFgIAGgFQAGgHAIgCQAIgEAJAAQAJAAAJAEQAIACAHAHQAGAFAEAIQADAIAAAKQAAAJgDAJQgEAHgGAHQgHAFgIADQgJADgJAAQgJAAgIgDgAgLAjQgFADgFAEQgEADgDAGQgBAGAAAHQAAAHABAGQADAFAEAEQAFAEAFACQAGACAFAAQAGAAAHgCQAFgCAEgEQAEgEADgFQACgGAAgHQAAgHgCgGQgDgGgEgDQgEgEgFgDQgHgBgGAAQgFAAgGABgAgpgZIAAhSIApAAQAIABAJACQAHADAHAFQAGAGADAIQAEAHAAAKQAAAJgEAIQgDAIgGAEQgHAFgHAEQgJACgIAAgAgagmIAaAAQAFAAAGgCQAGgCADgEQAFgEABgEQADgFAAgGQAAgHgDgFQgBgFgFgEQgDgDgGgCQgGgCgFAAIgaAAgAgpiaIAAhSIApAAQAIAAAJACQAHADAHAGQAGAFADAHQAEAIAAAJQAAAKgEAHQgDAIgGAFQgHAFgHADQgJAEgIAAgAgaipIAaAAQAFAAAGgCQAGgBADgEQAFgDABgGQADgFAAgGQAAgGgDgFQgBgFgFgEQgDgDgGgCQgGgCgFgBIgaAAg");
	this.shape.setTransform(0.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1099));

	// Слой 3
	this.instance = new lib.Символ54("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.9,1.4,1.401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1099));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-37.1,38.3,72.4);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(0,-9.3,1,1,0,0,0,49.1,39.8);
	this.instance.alpha = 0.41;

	this.instance_1 = new lib.CompoundPath_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,65.3,65.3);
	this.instance_1.alpha = 0.41;

	this.instance_2 = new lib.Group();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,1,1,0,0,0,57.5,57.5);
	this.instance_2.alpha = 0.41;

	this.instance_3 = new lib.Group_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,74.2,74.2);
	this.instance_3.alpha = 0.41;

	this.instance_4 = new lib.CompoundPath_1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,0.1,0.97,0.97,0,0,0,42.9,42.9);
	this.instance_4.alpha = 0.41;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-74.2,148.5,148.5);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},442).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-74.2,148.5,148.5);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({scaleX:1.23,scaleY:1.23},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},16,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-88.7,162.9,177.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AHLBkIuWAAQgLAAgHgHQgHgIAAgLIAAiTQAAgLAHgIQAHgHALAAIOWAAQALAAAIAHQAHAIAAALIAACTQAAALgHAIQgIAHgLAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(43));

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.32},21).to({alpha:0},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-11,101,22);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.8,8.3,0.898,0.917,0,0,0,-13.2,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95));

	// Слой 1
	this.instance_1 = new lib.Символ16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,15.6,0.898,0.917,0,0,0,-0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-14.4,48,37.3);


(lib.server = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ55("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(192));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAGg");
	this.shape.setTransform(10.1,-41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAEg");
	this.shape_1.setTransform(18.9,-46.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAJIgHAEg");
	this.shape_2.setTransform(14,-44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_3.setTransform(8.4,-38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAIIgHAFg");
	this.shape_4.setTransform(6.8,-37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAFg");
	this.shape_5.setTransform(8.3,-40.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_6.setTransform(6.5,-39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAEg");
	this.shape_7.setTransform(4.7,-38.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYA6Ii1hnQgMgIACgKQABAHAJAGIC1BmQAKAHAPAAQAPAAAKgHIC0hmQAJgGABgHQACAKgMAHIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_8.setTransform(0.1,-46.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B1E64").s().p("AgRBRIh3hFQgJgEAAgIQAAgGAJgFIB2hFQAIgEAKAAQAKAAAIAEIB3BFQAJAFAAAGQAAAHgJAFIh2BFQgIAEgLAAQgJAAgIgEgAgPhMIh3BFQgGADAAAEQAAAEAGAEIB3BFQAHAEAIAAQAKAAAGgEIB3hFQAGgEAAgEQAAgDgGgEIh3hFQgHgEgJAAQgIAAgHAEg");
	this.shape_9.setTransform(0.1,-52.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F9636B","#B6246E"],[0,1],-23.6,-10,0,-23.6,-10,46.9).s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_10.setTransform(0.1,-52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#01C8EF","#03BAE4","#0895C8","#115A9A","#172F78"],[0,0.141,0.404,0.761,1],-29.6,-14.1,0,-29.6,-14.1,68.2).s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_11.setTransform(0.1,-52.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#01C8EF","#04B1DD","#0E6BA7","#154085","#172F78"],[0,0.129,0.545,0.847,1],-24.2,0,6.3,0).s().p("AgYB3Ii1hoQgKgGAAgIIAAhXICxgYIANgIQAKgGAPAAQAPAAAKAGIBSAvIBtgOIAABVQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_12.setTransform(0.1,-43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(192));

	// Слой 7
	this.instance_1 = new lib.Символ55("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-36.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(133));

	// Слой 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAGg");
	this.shape_13.setTransform(10.1,-25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAEg");
	this.shape_14.setTransform(18.9,-30.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAJIgHAEg");
	this.shape_15.setTransform(14,-27.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_16.setTransform(8.4,-22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAIIgHAFg");
	this.shape_17.setTransform(6.8,-21.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAGg");
	this.shape_18.setTransform(8.3,-24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_19.setTransform(6.5,-23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAEg");
	this.shape_20.setTransform(4.7,-22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYA6Ii1hnQgMgIACgKQABAHAJAGIC1BmQAKAHAPAAQAPAAAKgHIC0hmQAJgGABgHQACAKgMAHIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_21.setTransform(0.1,-30.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8B1E64").s().p("AgOBFIhpg9QgGgDAAgFQAAgEAGgEIBpg8QAGgEAIAAQAJAAAGAEIBpA8QAGAEAAAEQAAAFgGADIhpA9QgGAEgJAAQgHAAgHgEg");
	this.shape_22.setTransform(0.1,-36.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#F9636B","#B6246E"],[0,1],-29.6,-14.1,0,-29.6,-14.1,68.2).s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_23.setTransform(0.1,-36.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#01C8EF","#04B1DD","#0E6BA7","#154085","#172F78"],[0,0.129,0.545,0.847,1],-24.2,0,6.3,0).s().p("AgYB3Ii1hoQgKgGAAgIIAAhXICxgYIANgIQAKgGAPAAQAPAAAKAGIBSAvIBtgOIAABWQAAAIgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_24.setTransform(0.1,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(192));

	// Слой 8
	this.instance_2 = new lib.Символ55("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,-20.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(148));

	// Слой 4
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAGg");
	this.shape_25.setTransform(10.1,-9.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAGg");
	this.shape_26.setTransform(18.9,-14.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAJIgHAEg");
	this.shape_27.setTransform(14,-11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_28.setTransform(8.4,-6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAIIgHAFg");
	this.shape_29.setTransform(6.8,-5.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAJIgHAEg");
	this.shape_30.setTransform(8.3,-8.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_31.setTransform(6.5,-7.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAGg");
	this.shape_32.setTransform(4.7,-6.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYA6Ii1hnQgMgHACgKQABAGAJAFIC1BoQAKAGAPAAQAPAAAKgGIC0hoQAJgEABgIQACAKgMAIIi0BnQgKAGgPAAQgPAAgKgGg");
	this.shape_33.setTransform(0.1,-14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8B1E64").s().p("AgQBPIh3hFQgHgEAAgGQAAgFAHgEIB3hFQAHgEAJAAQAKAAAHAEIB3BFQAHAEAAAFQAAAGgHAEIh2BFQgHAEgKAAQgKAAgHgEg");
	this.shape_34.setTransform(0.1,-20.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#F9636B","#B6246E"],[0,1],-23.6,-10,0,-23.6,-10,46.9).s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_35.setTransform(0.1,-20.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#01C8EF","#03BAE4","#0895C8","#115A9A","#172F78"],[0,0.141,0.404,0.761,1],-29.6,-14.1,0,-29.6,-14.1,68.2).s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_36.setTransform(0.1,-20.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#01C8EF","#04B1DD","#0E6BA7","#154085","#172F78"],[0,0.129,0.545,0.847,1],-24.2,0,6.3,0).s().p("AgYB3Ii1hoQgKgGAAgIIAAhXICxgYIANgIQAKgGAPAAQAPAAAKAGIBSAvIBtgOIAABVQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_37.setTransform(0.1,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(192));

	// Слой 9
	this.instance_3 = new lib.Символ55("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,-4.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(178));

	// Слой 5
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAFg");
	this.shape_38.setTransform(10.1,6.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAGg");
	this.shape_39.setTransform(18.9,1.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAJIgHAEg");
	this.shape_40.setTransform(14,4.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_41.setTransform(8.4,9.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAIIgHAFg");
	this.shape_42.setTransform(6.8,10.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAEg");
	this.shape_43.setTransform(8.3,7.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_44.setTransform(6.5,8.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAFg");
	this.shape_45.setTransform(4.7,9.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYA6Ii1hnQgMgHACgKQABAGAJAFIC1BoQAKAGAPAAQAPAAAKgGIC0hoQAJgEABgIQACAKgMAIIi0BnQgKAGgPAAQgPAAgKgGg");
	this.shape_46.setTransform(0.1,1.8);

	this.instance_4 = new lib.Path_1_5_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,-4.3,1,1,0,0,0,12.6,7.3);
	this.instance_4.alpha = 0.398;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#01C8EF","#03BAE4","#0895C8","#115A9A","#172F78"],[0,0.141,0.404,0.761,1],-29.6,-14.1,0,-29.6,-14.1,68.2).s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_47.setTransform(0.1,-4.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#01C8EF","#04B1DD","#0E6BA7","#154085","#172F78"],[0,0.129,0.545,0.847,1],-24.2,0,6.3,0).s().p("AgYB3Ii1hoQgKgGAAgIIAAhXICxgYIANgIQAKgGAPAAQAPAAAKAGIBSAvIBtgOIAABVQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_48.setTransform(0.1,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.instance_4},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(192));

	// Слой 10
	this.instance_5 = new lib.Символ55("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,11.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).wait(162));

	// Слой 1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAyAmIhjg4QgEgDAAgGIAAgHQAAgGAEADIBjA4QAEADAAAGIAAAHQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_49.setTransform(-10.7,23.1);

	this.instance_6 = new lib.Path_1_4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,11.9,1,1,0,0,0,13.4,7.7);
	this.instance_6.alpha = 0.398;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAGg");
	this.shape_50.setTransform(10.1,22.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAGg");
	this.shape_51.setTransform(18.9,17.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAJIgHAEg");
	this.shape_52.setTransform(14,20.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_53.setTransform(8.4,25.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIAAAIIgHAFg");
	this.shape_54.setTransform(6.8,26.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAJIgHAEg");
	this.shape_55.setTransform(8.3,23.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgDgCIAHgEIAAAIIgHAFg");
	this.shape_56.setTransform(6.5,24.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgDgBIAHgGIAAAJIgHAGg");
	this.shape_57.setTransform(4.7,25.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYA6Ii1hnQgMgHACgKQABAGAJAFIC1BoQAKAGAPAAQAPAAAKgGIC0hoQAJgEABgIQACAKgMAIIi0BnQgKAGgPAAQgPAAgKgGg");
	this.shape_58.setTransform(0.1,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#01C8EF","#03BAE4","#0895C8","#115A9A","#172F78"],[0,0.141,0.404,0.761,1],-29.6,-14.1,0,-29.6,-14.1,68.2).s().p("AgYB3Ii1hoQgKgGAAgJQAAgIAKgGIC0hoQAKgGAPAAQAPAAAKAGIC1BoQAKAGAAAIQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_59.setTransform(0.1,11.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#01C8EF","#04B1DD","#0E6BA7","#154085","#172F78"],[0,0.129,0.545,0.847,1],-24.2,0,6.3,0).s().p("AgYB3Ii1hoQgKgGAAgIIAAhXICxgYIANgIQAKgGAPAAQAPAAAKAGIBSAvIBtgOIAABVQAAAJgKAGIi0BoQgKAGgPAAQgPAAgKgGg");
	this.shape_60.setTransform(0.1,20.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#03A7D3").s().p("AABCEQgRAAgMgHIi0hoIAAAAQgOgIAAgNQAAgMAOgHIAAAAICzhpQANgHAQAAQAQAAANAHIC0BoQAOAJAAALQAAAMgOAJIizBoIAAAAQgLAHgSAAIAAAAgAgYhzIizBoIAAABQgJAEAAAGQAAAIAJAEIAAAAIC0BoQAKAGAOAAQAOAAAJgGIAAAAIC0hoQAJgFAAgHQAAgGgJgFIi1hoQgJgGgOAAIAAAAQgOAAgKAGg");
	this.shape_61.setTransform(0,26.3);

	this.instance_7 = new lib.Path_3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.1,43.6,1,1,0,0,0,18.1,21.6);
	this.instance_7.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_6},{t:this.shape_49}]}).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-65.1,44.6,130.4);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-101.5,0,2.959,2.959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(503));

	// Слой 1
	this.instance_1 = new lib.Символ54("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.3,0,2.959,2.959);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(503));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.9,-76.5,283.8,153);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-195.4,197.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},13).wait(124));

	// Слой 3
	this.instance_1 = new lib.Символ17("synched",14);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-195.6,197.4,1.86,1.857,0,0,0,-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.5,178.8,19.6,39.4);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// big arrow
	this.instance = new lib.Символ53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-130.8,286.5,2.959,2.959);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({y:26.1,startPosition:15},15,cjs.Ease.get(1)).to({_off:true},153).wait(218));

	// Layer 3
	this.instance_1 = new lib.Символ57("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-130.7,168.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({y:54.2,alpha:1,startPosition:15},15,cjs.Ease.get(1)).to({_off:true},144).wait(218));

	// Слой 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_35 = new cjs.Graphics().p("Aqkm9QgGgSAAgQQAJAAADgHQABgDAAgDQARAAAMgGQAFgDADgDIABACIAGAEQAMAGARAAIABAGQADAHAJAAQAAAQgGASQgNAkgeANQgfgNgNgkg");
	var mask_graphics_36 = new cjs.Graphics().p("ArOlzQgVg7AAg0QAdgBAKgWQAFgKgBgLQA5gBAlgTQATgKAHgKIAGAGQAIAHAMAHQAlATA5ABIAEAVQAKAWAdABQAAA0gVA7QgoB3hmApQhlgpgph3g");
	var mask_graphics_37 = new cjs.Graphics().p("Ar1kvQgihhAAhVQAwgCAQgjQAIgSgCgRQBegCA9ggQAfgQALgQIAKAKQANAMATAKQA9AgBfACIAGAjQAQAjAvACQAABVgiBhQhCDDinBDQimhDhDjDg");
	var mask_graphics_38 = new cjs.Graphics().p("AsZjwQgtiFAAhyQBAgDAWgwQAKgYgBgYQB/gCBSgrQAqgWAQgVIANANQASAQAaAOQBSArCAACIAJAwQAWAwA/ADQAABygtCFQhbEHjhBaQjihahbkHg");
	var mask_graphics_39 = new cjs.Graphics().p("As5i4Qg4ikAAiOQBQgEAag7QANgdgCgeQCegCBmg2QAzgaAUgbIAQAQQAXAUAfARQBnA2CeACIALA7QAaA7BOAEQAACOg3CkQhwFGkXBwQkYhwhwlGg");
	var mask_graphics_40 = new cjs.Graphics().p("AtWiGQhBjAAAimQBdgEAfhGQAPgigCgjQC4gDB4g+QA8ggAXgfIATATQAbAYAlAUQB4A+C6ADIALBFQAfBGBdAEQAACmhCDAQiCF/lICCQlHiCiEl/g");
	var mask_graphics_41 = new cjs.Graphics().p("AtvhZQhKjZAAi8QBpgFAjhOQARgngCgnQDQgDCHhHQBEgkAagjIAWAVQAeAbAqAXQCHBHDRADIAOBOQAjBOBpAFQAAC8hLDZQiUGwlxCTQlyiTiUmwg");
	var mask_graphics_42 = new cjs.Graphics().p("AuFgzQhSjuAAjOQB0gGAnhWQATgrgDgrQDlgDCVhOQBKgnAdgnIAXAXQAhAeAvAZQCUBODmADIAPBWQAnBWBzAGQAADOhSDuQijHcmVCiQmXiiijncg");
	var mask_graphics_43 = new cjs.Graphics().p("AuYgSQhYkBAAjeQB9gGAqhdQAUgugDguQD2gDChhUQBQgqAfgqIAZAZQAjAgAyAbQCgBUD3ADIARBcQAqBdB8AGQAADehYEBQiwIAm0CuQm2iuiwoAg");
	var mask_graphics_44 = new cjs.Graphics().p("AunAIQhdkPAAjrQCEgGAshjQAWgwgEgxQEFgECphZQBWgsAggtIAbAbQAlAiA1AcQCpBZEGAEIASBhQAsBjCDAGQAADrhdEPQi6IenOC5QnPi5i6oeg");
	var mask_graphics_45 = new cjs.Graphics().p("AuzAcQhhkaAAj1QCKgHAuhmQAWgzgEgyQERgFCwhcQBZguAigvIAcAcQAnAjA3AeQCwBcERAFIATBlQAuBmCIAHQAAD1hhEaQjCI2nhDAQnjjAjCo2g");
	var mask_graphics_46 = new cjs.Graphics().p("Au7ArQhkkjAAj7QCOgHAvhqQAXg0gEg0QEYgEC2hgQBbgvAjgwIAdAdQAoAkA5AeQC1BgEZAEIATBoQAwBqCMAHQAAD7hkEjQjHJGnwDGQnxjGjHpGg");
	var mask_graphics_47 = new cjs.Graphics().p("AvBA0QhlkoAAkAQCQgHAwhrQAYg1gEg1QEdgFC5hhQBdgwAjgxIAdAeQApAlA6AeQC4BhEeAFIAUBqQAwBrCOAHQAAEAhlEoQjLJQn4DKQn6jKjLpQg");
	var mask_graphics_48 = new cjs.Graphics().p("AvCA3QhmkpAAkCQCRgHAwhsQAYg1gEg1QEegFC6hiQBegwAjgxIAeAeQApAlA6AeQC5BiEgAFIATBqQAxBsCPAHQAAEChmEpQjMJTn7DLQn8jLjMpTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_graphics_35,x:-68.3,y:-50.5}).wait(1).to({graphics:mask_graphics_36,x:-74,y:-56.7}).wait(1).to({graphics:mask_graphics_37,x:-79.2,y:-62.4}).wait(1).to({graphics:mask_graphics_38,x:-83.9,y:-67.5}).wait(1).to({graphics:mask_graphics_39,x:-88.2,y:-72.2}).wait(1).to({graphics:mask_graphics_40,x:-92,y:-76.4}).wait(1).to({graphics:mask_graphics_41,x:-95.4,y:-80.1}).wait(1).to({graphics:mask_graphics_42,x:-98.4,y:-83.3}).wait(1).to({graphics:mask_graphics_43,x:-100.9,y:-86}).wait(1).to({graphics:mask_graphics_44,x:-102.9,y:-88.3}).wait(1).to({graphics:mask_graphics_45,x:-104.5,y:-90}).wait(1).to({graphics:mask_graphics_46,x:-105.6,y:-91.2}).wait(1).to({graphics:mask_graphics_47,x:-106.3,y:-92}).wait(1).to({graphics:mask_graphics_48,x:-106.5,y:-92.2}).wait(1).to({graphics:null,x:0,y:0}).wait(363));

	// shield
	this.instance_2 = new lib.Символ50("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-131.6,-95.6);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({_off:true},159).wait(218));

	// circle
	this.instance_3 = new lib.Символ51("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-133.6,-100.3,11.504,11.504,-100.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:2.96,scaleY:2.96,rotation:0,startPosition:15},15,cjs.Ease.get(1)).to({_off:true},153).wait(218));

	// Слой 6
	this.instance_4 = new lib.server("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-133.2,18.7,2.959,2.959);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-181,alpha:1,startPosition:15},15,cjs.Ease.get(1)).to({_off:true},179).wait(218));

	// Слой 10
	this.instance_5 = new lib.server("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(33.9,117.8,2.959,2.959);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({y:-136.6,startPosition:15},15,cjs.Ease.get(0.99)).to({_off:true},175).wait(218));

	// Слой 4
	this.instance_6 = new lib.server("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-306.3,117.8,2.959,2.959);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({y:-136.6,startPosition:15},15,cjs.Ease.get(1)).to({_off:true},172).wait(218));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.2,-174.1,132,385.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(-5.2,8.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(341).to({_off:false},0).to({alpha:1},15).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.7,97.7,0.96,0.959,0,0,0,-197.8,201);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(217).to({_off:false},0).wait(140));

	// Слой 13
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,-23.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).to({y:-0.1,alpha:1},12,cjs.Ease.get(1)).wait(142));

	// Слой 14
	this.instance_3 = new lib.Символ14("synched",9);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,-76.1,2.058,2.056,0,0,0,-0.1,-0.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).to({alpha:1},12).wait(146));

	// Слой 15
	this.instance_4 = new lib.Символ51("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.9,5.3,4.529,4.529,0,0,0,-0.2,0.2);
	this.instance_4.alpha = 0.078;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(190).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:2.11,scaleY:2.11,x:-5.6,y:5,alpha:0.191,startPosition:15},15,cjs.Ease.get(1)).wait(152));

	// Слой 16
	this.instance_5 = new lib.Символ62();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.2,8.2);
	this.instance_5.alpha = 0.191;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(178).to({_off:false},0).to({alpha:1},15).wait(164));

	// Слой 17
	this.instance_6 = new lib.Символ14("synched",14);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-97.7,-83.5,2.021,2.02);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(83).to({_off:false},0).to({alpha:1},14).to({_off:true},97).wait(163));

	// Слой 18
	this.instance_7 = new lib.Символ13999("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(23,110);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(83).to({_off:false},0).to({x:3,alpha:1},16,cjs.Ease.get(1)).to({_off:true},95).wait(163));

	// Слой 19
	this.instance_8 = new lib.Символ13("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(23,110);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({x:3,alpha:1},16,cjs.Ease.get(1)).to({_off:true},89).wait(163));

	// Слой 20
	this.instance_9 = new lib.main("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.1,5.6,0.44,0.44,0,0,0,-131.7,-122.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({startPosition:63},0).to({regX:-132.9,regY:-122.7,scaleX:0.37,scaleY:0.37,x:64.5,y:-28.1,startPosition:91},28,cjs.Ease.get(1)).to({_off:true},103).wait(163));

	// Слой 21
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020230").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(-5.2,8.2,1.455,1.186);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},194).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.1,-140,363.7,296.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_333 = function() {
		if(!this.end) 
			this.end = 0;
		if(this.end == 1) {
			this.stop();
		}
	}
	this.frame_356 = function() {
		if(!this.loops_played) 
			this.loops_played = 1;
		if(!this.end) 
			this.end = 0;
		if(this.loops_played >= 1) {
			this.end = 1;
		} else {
			this.loops_played++;
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(333).call(this.frame_333).wait(23).call(this.frame_356).wait(1));

	// Слой 10
	this.instance = new lib.Символ3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151,121.7,0.904,0.904,0,0,0,0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(357));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.7,119.5,329,267.9);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;