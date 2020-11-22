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



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Bitmap2_1 = function() {
	this.initialize(img.Bitmap2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Bitmap3_1 = function() {
	this.initialize(img.Bitmap3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Bitmap4_1 = function() {
	this.initialize(img.Bitmap4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.bolme2 = function() {
	this.initialize(img.bolme2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,225);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,350);


(lib.img22 = function() {
	this.initialize(img.img22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,162);


(lib.img33 = function() {
	this.initialize(img.img33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,162);// helper functions:

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


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBKIAAiUIBLBLIhKBKg");
	this.shape.setTransform(3.2,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-0.5,-1.4,7.6,15), null);


(lib.Sembol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjBALIGEg1IAAAfImEA2g");
	this.shape.setTransform(19.5,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAmQgOgOAAgXQAAgXAOgOQAOgPAXAAQAXAAAOAOQAOAOgBAXQABAZgRAOQgOANgVAAQgWAAgOgOgAgOgTQgFAHAAAMQAAANAFAIQAGAJAJAAQAIAAAFgIQAGgJAAgNQAAgLgFgIQgFgKgJAAQgKAAgFAKg");
	this.shape_1.setTransform(34.9,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA1QgPgNgBgXIAAhSIAgAAIAAAgQALgDAJgBQAXABAOAOQAOAOAAAVQAAAagQAOQgPANgVAAQgVAAgOgNgAgOgHQgEAHgBALIAAAGQACAbARAAQAJAAAGgIQAFgJAAgNQAAgMgFgHQgFgKgKAAQgIABgGAHg");
	this.shape_2.setTransform(5.2,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAmQgOgNAAgYQAAgUAMgPQAOgRAXAAQAWAAAMAQQAKANAAAVIgBALIg+AAQAAAJAJAFQAHAFALAAQAOAAANgEIADAUQgOAHgVAAQgYAAgOgOgAATgKQgBgUgRAAQgIAAgFAHQgEAFgBAIIAkAAIAAAAg");
	this.shape_3.setTransform(15.5,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALBBIgeguIAAAuIgfAAIAAiBIAfAAIAABHIAagoIAoAAIgnAuIArA0g");
	this.shape_4.setTransform(25.9,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,23);


(lib.Sembol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#004078","#003D69"],[0,1],15.1,-5,-71.2,-94).s().p("A2T2XMAsmAAAMgkZAkgIoNIPg");
	this.shape.setTransform(142.8,143.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#014376","#003B67"],[0,1],-23,86.6,1.3,-146.2).s().p("EgoDAN1IAAguIINoOMBH6gStIAAbpg");
	this.shape_1.setTransform(256.4,202.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#004078","#013D68"],[0,1],50.8,72,21.5,-85.9).s().p("AAdyQMAjgAAAIAAR0MhH5AStg");
	this.shape_2.setTransform(282.6,116.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#013D68").s().p("EgoDAWvMAAAgtdMBQHAAAMAAAAtdg");
	this.shape_3.setTransform(256.4,145.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol4, new cjs.Rectangle(0,0,512.8,291.1), null);


(lib.Sembol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPBDIAAg3IgeA3IgYAAIAAhgIAZAAIAAA2IAeg2IAYAAIAABggAgRgsQgIgHgBgMIAOgDQACAGADADQADADAEAAQAFAAADgDQAEgDABgGIAOADQgBAMgIAHQgHAGgLAAQgKAAgHgGg");
	this.shape.setTransform(176.8,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_1.setTransform(169.3,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAwIAAglIgbAAIAAAlIgaAAIAAhfIAaAAIAAAlIAbAAIAAglIAaAAIAABfg");
	this.shape_2.setTransform(161.9,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZA7IAAgVIgyAAIgDAVIgVAAIAAgrIAJAAQAGgNACgPQABgRAAgSIAAgKIBGAAIAABJIALAAIgBAVIgCAWgAgHgSIgDASQgBAJgCAHIAaAAIAAg0IgTAAIgBASg");
	this.shape_3.setTransform(151.7,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_4.setTransform(141.4,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA/IAAh7IAZAAIAAANQAEgGAGgEQAHgFAIAAQAKAAAIAFQAJAGAFALQAFAKAAARIAAADQAAAPgFALQgFALgJAFQgIAGgKAAQgIgBgHgEQgGgEgEgFIAAAngAgNggQgFAHAAAMIAAADQAAALAFAHQAGAHAHAAQAIAAAFgHQAGgHAAgLIAAgDQAAgMgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_5.setTransform(131.1,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPAwIAAg2IgeA2IgYAAIAAhfIAZAAIAAA1IAeg1IAYAAIAABfg");
	this.shape_6.setTransform(120.5,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA/IAAh7IAZAAIAAANQAEgGAGgEQAHgFAIAAQAKAAAIAFQAJAGAFALQAFAKAAARIAAADQAAAPgFALQgFALgJAFQgIAGgKAAQgIgBgHgEQgGgEgEgFIAAAngAgNggQgFAHAAAMIAAADQAAALAFAHQAGAHAHAAQAIAAAFgHQAGgHAAgLIAAgDQAAgMgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_7.setTransform(110.4,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAwIAAhKIgbAAIAABKIgZAAIAAhfIBNAAIAABfg");
	this.shape_8.setTransform(100,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAsQgKgHgGgLQgFgLgBgPIAAAAQABgPAFgLQAGgLAKgGQALgGAMAAQAKAAAHAEQAIADAFAFIgKARQgEgDgFgCQgEgCgGAAQgHAAgFAEQgGAFgCAKIAcAAIAAARIgcAAQACAJAGAFQAFAEAIAAQAFAAAFgBQAEgCAFgFIALASQgGAGgIADQgIAEgLAAQgMAAgKgGg");
	this.shape_9.setTransform(86,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtQgJgFgGgIQgGgJgCgMIgLAAIAAAlIgaAAIAAhfIAaAAIAAAlIALAAQACgMAGgIQAGgJAJgFQAIgFALAAQANAAAKAGQAKAGAFAMQAGALAAAOIAAABQAAAPgGALQgFALgKAGQgKAGgNAAQgLAAgIgFgAAEgTQgEAHAAAMQAAANAFAIQAFAHAIAAQAJAAAFgHQAEgIABgNQgBgMgFgHQgFgIgIAAQgJAAgFAIg");
	this.shape_10.setTransform(74.7,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA/IAAh7IAZAAIAAANQAEgGAGgEQAHgFAIAAQAKAAAIAFQAJAGAFALQAFAKAAARIAAADQAAAPgFALQgFALgJAFQgIAGgKAAQgIgBgHgEQgGgEgEgFIAAAngAgNggQgFAHAAAMIAAADQAAALAFAHQAGAHAHAAQAIAAAFgHQAGgHAAgLIAAgDQAAgMgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_11.setTransform(62.4,15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_12.setTransform(51.7,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmAwIAAhfIApAAQAKAAAHACQAHADAEAGQAEAGAAAIQAAAIgEAFQgEAFgFADQAIACAFAFQAEAGAAAKQAAAIgEAGQgEAGgIADQgIADgKAAgAgNAcIAOAAQAGAAADgCQADgDABgFQAAgFgEgDQgDgCgHAAIgNAAgAgNgIIANAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIgNAAg");
	this.shape_13.setTransform(41.9,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgYAAIAAgWIBJAAIAAAWIgYAAIAABJg");
	this.shape_14.setTransform(33,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZA7IAAgVIgzAAIgCAVIgVAAIAAgrIAKAAQAFgNACgPQACgRAAgSIAAgKIBFAAIAABJIALAAIgBAVIgCAWgAgHgSIgDASQgBAJgCAHIAaAAIAAg0IgTAAIgBASg");
	this.shape_15.setTransform(23.8,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_16.setTransform(16.3,12.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AguA/IAAh9IAuAAQAMAAAKAEQAJAEAFAHQAGAHAAALQAAAHgDAGQgCAFgEAEIgJAGQALACAGAHQAGAHAAANIAAAAQAAAMgGAIQgFAHgLAEQgKAEgOAAgAgUAoIAWAAQAJAAAFgDQAFgEAAgHQAAgIgFgEQgFgEgKAAIgVAAgAgUgKIASAAQAIAAAFgEQAFgDAAgIQAAgHgFgDQgEgEgIAAIgTAAg");
	this.shape_17.setTransform(8.5,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol43, new cjs.Rectangle(0,0,184.7,25.5), null);


(lib.Sembol42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007DBA").s().p("AgnAwIgGgCIADgUIADAAIADAAQAEABACgDQACgCACgIIADgWIABgoIBEAAIAABgIgZAAIAAhKIgUAAQAAAWgBAOQgCAPgEAIQgDAJgHADQgGAEgHAAIgKgBg");
	this.shape_5.setTransform(230.9,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007DBA").s().p("AANAwIgTglIgKANIAAAYIgaAAIAAhfIAaAAIAAAnIAbgnIAdAAIgeAoIAhA3g");
	this.shape_6.setTransform(222.1,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007DBA").s().p("AAPAwIAAg2IgeA2IgYAAIAAhfIAYAAIAAA1IAfg1IAYAAIAABfg");
	this.shape_7.setTransform(211.7,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007DBA").s().p("AAUA7IAAgVIhAAAIAAhfIAaAAIAABJIAaAAIAAhJIAaAAIAABJIALAAIgDArg");
	this.shape_8.setTransform(201.9,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007DBA").s().p("AAQBDIAAg3IgfA3IgYAAIAAhgIAYAAIAAA2IAfg2IAYAAIAABggAgRgsQgHgHgCgMIAPgDQABAGADADQADADAEAAQAFAAAEgDQADgDABgGIAOADQgBAMgHAHQgIAGgLAAQgKAAgHgGg");
	this.shape_9.setTransform(186.7,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007DBA").s().p("AAQAwIAAg2IgfA2IgYAAIAAhfIAYAAIAAA1IAfg1IAYAAIAABfg");
	this.shape_10.setTransform(176.6,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#007DBA").s().p("AAOAwIAAglIgbAAIAAAlIgZAAIAAhfIAZAAIAAAlIAbAAIAAglIAZAAIAABfg");
	this.shape_11.setTransform(166.6,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#007DBA").s().p("AANAwIAAghIgKADQgFACgHAAQgIAAgHgDQgHgDgDgHQgEgHAAgJIAAgmIAaAAIAAAeQAAAJADAEQAEADAFAAIAHgBIAGgDIAAgqIAaAAIAABfg");
	this.shape_12.setTransform(156.7,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#007DBA").s().p("AAQAwIAAgfIgLAAIgRAfIgdAAIAWgkQgIgEgFgGQgFgGAAgLQAAgMAFgHQAFgHAJgDQAIgEAKABIAqAAIAABfgAAAgbQgFABgDADQgDACAAAHQAAAGAEAEQADADAFAAIAPAAIAAgaIgEAAIgMAAg");
	this.shape_13.setTransform(146.7,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#007DBA").s().p("AAOAwIAAglIgbAAIAAAlIgZAAIAAhfIAZAAIAAAlIAbAAIAAglIAZAAIAABfg");
	this.shape_14.setTransform(137.3,11.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#007DBA").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_15.setTransform(127.1,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#007DBA").s().p("AgPAsQgLgGgGgLQgFgLAAgPIAAgBQAAgOAGgLQAFgLALgHQAKgGALAAQALAAAIADQAHADAGAGIgMATIgIgGQgFgCgGAAQgHAAgGAHQgFAHgBAMIAAABQABAMAFAHQAGAHAIABQAFAAAFgDQAEgCAFgEIALASQgGAGgHAEQgIADgLAAQgMAAgJgGg");
	this.shape_16.setTransform(117.6,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#007DBA").s().p("AAPBDIAAg3IgeA3IgYAAIAAhgIAZAAIAAA2IAeg2IAYAAIAABggAgRgsQgIgHgBgMIAPgDQABAGADADQADADAEAAQAFAAADgDQAEgDABgGIAOADQgBAMgIAHQgHAGgLAAQgKAAgHgGg");
	this.shape_17.setTransform(103.4,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#007DBA").s().p("AAPAwIAAg2IgeA2IgYAAIAAhfIAZAAIAAA1IAeg1IAYAAIAABfg");
	this.shape_18.setTransform(93.3,11.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#007DBA").s().p("AAOAwIAAglIgbAAIAAAlIgaAAIAAhfIAaAAIAAAlIAbAAIAAglIAaAAIAABfg");
	this.shape_19.setTransform(83.3,11.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#007DBA").s().p("AAOAwIAAglIgbAAIAAAlIgaAAIAAhfIAaAAIAAAlIAbAAIAAglIAaAAIAABfg");
	this.shape_20.setTransform(73.3,11.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#007DBA").s().p("AAPAwIAAg2IgeA2IgYAAIAAhfIAYAAIAAA1IAfg1IAYAAIAABfg");
	this.shape_21.setTransform(63.2,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#007DBA").s().p("AAaA7IAAgVIgzAAIgDAVIgVAAIAAgrIAJAAQAGgNABgPQACgRAAgSIAAgKIBGAAIAABJIALAAIgCAVIgBAWgAgHgSIgCASQgCAJgDAHIAbAAIAAg0IgTAAIgBASg");
	this.shape_22.setTransform(52.9,12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#007DBA").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_23.setTransform(42.6,11.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#007DBA").s().p("AgeAwIAAhfIA9AAIAAAWIgkAAIAABJg");
	this.shape_24.setTransform(34.1,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#007DBA").s().p("AgZANIAAgYIAzAAIAAAYg");
	this.shape_25.setTransform(26.4,11);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#007DBA").s().p("AAJBAIAAgbIg1AAIgDgSIA5hRIAXAAIAABOIAPAAIAAAVIgPAAIAAAbgAgTAQIAcAAIAAgog");
	this.shape_26.setTransform(17.5,10.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#007DBA").s().p("AgnBAIAAgVIAjgmIAKgMQAEgEABgFQACgEAAgFQAAgGgEgFQgEgDgGAAQgGAAgGADQgFAEgGAGIgOgRIALgLQAGgEAHgDQAHgCAIAAQASABAKAJQAKAJABAQIAAABQAAAJgDAHQgDAHgGAFQgGAIgJAIIgTAYIAuAAIAAAXg");
	this.shape_27.setTransform(7.4,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol42_1, new cjs.Rectangle(0,-2.7,239.4,25.5), null);


(lib.Sembol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAwIgQgeIgQAeIgaAAIAdgwIgcgvIAbAAIAOAcIAQgcIAaAAIgcAvIAdAwg");
	this.shape.setTransform(90.6,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_1.setTransform(81.1,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgYAAIAAgWIBJAAIAAAWIgYAAIAABJg");
	this.shape_2.setTransform(72.7,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAwIgTglIgKANIAAAYIgaAAIAAhfIAaAAIAAAnIAbgnIAdAAIgeAoIAhA3g");
	this.shape_3.setTransform(64.4,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdA9QgFgCgFgDIAIgTIAFADIAGABQADAAACgCQACgBACgEIghhfIAbAAIARA/IASg/IAbAAIghBgQgEAOgHAHQgGAGgMAAQgHAAgFgBg");
	this.shape_4.setTransform(54.3,33.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA/IAAh7IAZAAIAAANQAEgGAGgEQAHgFAIAAQAKAAAIAFQAJAGAFALQAFAKAAARIAAADQAAAPgFALQgFALgJAFQgIAGgKAAQgIgBgHgEQgGgEgEgFIAAAngAgNggQgFAHAAAMIAAADQAAALAFAHQAGAHAHAAQAIAAAFgHQAGgHAAgLIAAgDQAAgMgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_5.setTransform(44.4,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMBNIAAgiQgDADgFADQgFACgGAAQgKAAgHgFQgIgGgEgLQgEgLAAgSQAAgPAEgLQAEgKAIgGQAHgFAKAAQAHAAAEADQAFACADAEIAAgmIAZAAIAAAmQACgEAFgCQAFgDAGAAQAKAAAIAFQAHAGAFAKQAEALAAAPIAAADQAAAQgEALQgFAKgHAGQgIAFgJAAQgHAAgFgCQgFgDgCgDIAAAigAARgYIgEAEIAAAsQACADACABQADABADAAQAIAAAEgHQAEgHAAgMIAAgCQAAgMgEgHQgEgHgIAAQgDAAgDABgAgjgSQgEAHAAAMIAAACQAAAMAEAHQAFAHAIAAQADAAACgBIAFgEIAAgsIgFgEQgCgBgDAAQgIAAgFAHg");
	this.shape_6.setTransform(31.7,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_7.setTransform(15,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgYAAIAAgWIBJAAIAAAWIgYAAIAABJg");
	this.shape_8.setTransform(6.6,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAwIgQgeIgPAeIgbAAIAdgwIgcgvIAbAAIAOAcIAPgcIAbAAIgcAvIAdAwg");
	this.shape_9.setTransform(219.3,14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_10.setTransform(209.7,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAwIAAghIgKADQgFACgHAAQgIAAgHgDQgHgDgDgHQgEgHAAgJIAAgmIAZAAIAAAeQABAJAEAEQADADAEAAIAHgBIAHgDIAAgqIAaAAIAABfg");
	this.shape_11.setTransform(200.4,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_12.setTransform(190.5,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmAwIAAhfIApAAQAKAAAHACQAHADAEAGQAEAGAAAIQAAAIgEAFQgEAFgFADQAIACAFAFQAEAGAAAKQAAAIgEAGQgEAGgIADQgIADgKAAgAgNAcIAOAAQAGAAADgCQADgDABgFQAAgFgEgDQgDgCgHAAIgNAAgAgNgIIANAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIgNAAg");
	this.shape_13.setTransform(180.7,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_14.setTransform(170.5,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdA9QgFgCgFgDIAIgTIAFADIAGABQADAAACgCQACgBACgEIghhfIAbAAIARA/IASg/IAbAAIghBgQgEAOgHAHQgGAGgMAAQgHAAgFgBg");
	this.shape_15.setTransform(155.9,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAwIAAg2IgeA2IgYAAIAAhfIAZAAIAAA1IAeg1IAYAAIAABfg");
	this.shape_16.setTransform(141.4,14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOAwIAAglIgbAAIAAAlIgZAAIAAhfIAZAAIAAAlIAbAAIAAglIAZAAIAABfg");
	this.shape_17.setTransform(131.4,14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_18.setTransform(123.9,12.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWAwIAAg4IgWAlIgWglIAAA4IgZAAIAAhfIAaAAIAVAmIAWgmIAaAAIAABfg");
	this.shape_19.setTransform(115.8,14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_20.setTransform(105.1,14.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgYAAIAAgWIBJAAIAAAWIgYAAIAABJg");
	this.shape_21.setTransform(96.6,14.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_22.setTransform(90.3,12.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmAwIAAhfIApAAQAKAAAHACQAHADAEAGQAEAGAAAIQAAAIgEAFQgEAFgFADQAIACAFAFQAEAGAAAKQAAAIgEAGQgEAGgIADQgIADgKAAgAgNAcIAOAAQAGAAADgCQADgDABgFQAAgFgEgDQgDgCgHAAIgNAAgAgNgIIANAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIgNAAg");
	this.shape_23.setTransform(83.3,14.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAsQgKgHgGgLQgFgLgBgPIAAAAQABgPAFgLQAGgLAKgGQALgGAMAAQAKAAAHAEQAIADAFAFIgKARQgEgDgFgCQgEgCgGAAQgHAAgFAEQgGAFgCAKIAcAAIAAARIgcAAQACAJAGAFQAFAEAIAAQAFAAAFgBQAEgCAFgFIALASQgGAGgIADQgIAEgLAAQgMAAgKgGg");
	this.shape_24.setTransform(69.4,14.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_25.setTransform(60,14.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAwIAAhfIA9AAIAAAWIgkAAIAABJg");
	this.shape_26.setTransform(52.2,14.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_27.setTransform(45.6,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgrA/IAAh7IAZAAIAAANQAEgGAGgEQAHgFAIAAQAKAAAIAFQAJAGAFALQAFAKAAARIAAADQAAAPgFALQgFALgJAFQgIAGgKAAQgIgBgHgEQgGgEgEgFIAAAngAgNggQgFAHAAAMIAAADQAAALAFAHQAGAHAHAAQAIAAAFgHQAGgHAAgLIAAgDQAAgMgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_28.setTransform(38.1,15.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAFgLAKgHQAJgGALAAQAOAAAJAHQAKAHAEALQAFAMAAANIgBAEIAAAFIg4AAQABAKAGAEQAFAFAHAAQAHAAAFgCQAFgCAFgFIALAPQgGAIgIADQgJAEgKAAQgMAAgLgGgAARgHQgBgKgEgFQgEgGgIAAQgGAAgEAFQgEAGgCAKIAhAAIAAAAg");
	this.shape_29.setTransform(27.8,14.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggA0QgLgOAAgaIAAgDIABgVQABgLADgIQADgJAGgHQAHgGALgEIAXgFIAYgDIAEAVIgNACIgNACQgPADgIADQgIADgEAFQgDAFgBAHIAGgGQAEgDAGgDQAGgCAHAAQALAAAJAGQAJAFAGALQAFAJAAAOIAAABQAAAOgFALQgGALgKAGQgKAGgNAAQgUAAgMgOgAgNgBQgFAGAAALIAAACQAAAMAFAHQAFAHAIAAQAJAAAFgHQAFgHAAgLIAAgCQAAgMgFgGQgFgGgJgBQgIABgFAGg");
	this.shape_30.setTransform(17.9,12.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZA8QgKgEgJgHIALgTQAFAEAIAEQAHADAKAAQAJAAAGgDQAGgEAAgIQAAgIgGgEQgHgEgJAAIgLAAIAAgVIAKAAQAGAAAFgCQAEgCADgEQADgEAAgEQAAgHgGgDQgFgEgIABQgIAAgHACQgHAEgEAEIgLgSIALgJQAGgDAJgCQAHgCAKAAQAMAAAIAFQAJAEAFAHQAFAIAAAJQAAAIgDAFQgCAHgFADQgEAEgGACQAKADAGAGQAGAIAAAMQAAALgFAJQgFAIgKAFQgKAFgNAAQgPAAgLgFg");
	this.shape_31.setTransform(7.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol40, new cjs.Rectangle(0,0,226.8,43.2), null);


(lib.Sembol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DBA").s().p("AgNA/IAAgbIAbAAIAAAbgAgGAVIgIhPIAAgEIAdAAIAAAEIgIBPg");
	this.shape.setTransform(60.1,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007DBA").s().p("AgTAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAFgLAKgHQAJgGALAAQAOAAAJAHQAKAHAEALQAFAMAAANIgBAEIAAAFIg4AAQABAKAGAEQAFAFAHAAQAHAAAFgCQAFgCAFgFIALAPQgGAIgIADQgJAEgKAAQgMAAgLgGgAARgHQgBgKgEgFQgEgGgIAAQgGAAgEAFQgEAGgCAKIAhAAIAAAAg");
	this.shape_1.setTransform(52.6,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007DBA").s().p("Ag/AwIAAhfIAaAAIAABJIAZAAIAAhJIAYAAIAABJIAaAAIAAhJIAaAAIAABfg");
	this.shape_2.setTransform(40.4,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007DBA").s().p("AgmAwIAAhfIApAAQAKAAAHACQAHADAEAGQAEAGAAAIQAAAIgEAFQgEAFgFADQAIACAFAFQAEAGAAAKQAAAIgEAGQgEAGgIADQgIADgKAAgAgNAcIAOAAQAGAAADgCQADgDABgFQAAgFgEgDQgDgCgHAAIgNAAgAgNgIIANAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIgNAAg");
	this.shape_3.setTransform(28.3,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007DBA").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_4.setTransform(18.1,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007DBA").s().p("AAZA7IAAgVIgyAAIgDAVIgVAAIAAgrIAJAAQAGgNACgPQABgRAAgSIAAgKIBGAAIAABJIALAAIgBAVIgCAWgAgHgSIgDASQgBAJgCAHIAaAAIAAg0IgTAAIgBASg");
	this.shape_5.setTransform(7.7,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol39, new cjs.Rectangle(0,10,65.6,25.5), null);


(lib.Sembol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape.setTransform(128.4,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAwIgHgCIAEgUIADAAIADAAQADABADgDQADgCABgIIADgWIABgoIBFAAIAABgIgaAAIAAhKIgUAAQAAAWgBAOQgCAPgDAIQgFAJgFADQgGAEgJAAIgJgBg");
	this.shape_1.setTransform(118.3,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgYAAIAAgWIBJAAIAAAWIgYAAIAABJg");
	this.shape_2.setTransform(109.8,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_3.setTransform(103.4,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAwIAAhfIApAAQAKAAAHACQAHADAEAGQAEAGAAAIQAAAIgEAFQgEAFgFADQAIACAFAFQAEAGAAAKQAAAIgEAGQgEAGgIADQgIADgKAAgAgNAcIAOAAQAGAAADgCQADgDABgFQAAgFgEgDQgDgCgHAAIgNAAgAgNgIIANAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIgNAAg");
	this.shape_4.setTransform(96.4,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAsQgJgGgHgLQgFgLAAgPIAAgBQAAgOAGgLQAFgLAKgHQALgGAMAAQAKAAAIADQAHADAGAGIgMATIgIgGQgFgCgFAAQgJAAgFAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAIABQAGAAAEgDQAFgCAEgEIALASQgFAGgIAEQgHADgMAAQgMAAgKgGg");
	this.shape_5.setTransform(87.2,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAtQgJgFgGgIQgGgJgCgMIgLAAIAAAlIgaAAIAAhfIAaAAIAAAlIALAAQACgMAGgIQAGgJAJgFQAIgFALAAQANAAAKAGQAKAGAFAMQAGALAAAOIAAABQAAAPgGALQgFALgKAGQgKAGgNAAQgLAAgIgFgAAEgTQgEAHAAAMQAAANAFAIQAFAHAIAAQAJAAAFgHQAEgIABgNQgBgMgFgHQgFgIgIAAQgJAAgFAIg");
	this.shape_6.setTransform(71.2,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_7.setTransform(58.8,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnAwIgGgCIADgUIADAAIADAAQADABADgDQADgCACgIIACgWIABgoIBFAAIAABgIgaAAIAAhKIgUAAQAAAWgBAOQgCAPgDAIQgFAJgFADQgHAEgIAAIgJgBg");
	this.shape_8.setTransform(47.9,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAwIAAg2IgfA2IgYAAIAAhfIAYAAIAAA1IAfg1IAYAAIAABfg");
	this.shape_9.setTransform(38.3,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAsQgJgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAJgHQALgGAMAAQALAAAHADQAHADAFAGIgLATIgJgGQgEgCgGAAQgIAAgFAHQgGAHABAMIAAABQgBAMAGAHQAFAHAJABQAFAAAFgDQAEgCAFgEIALASQgGAGgHAEQgHADgMAAQgMAAgKgGg");
	this.shape_10.setTransform(29,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_11.setTransform(15,25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgYAAIAAgWIBJAAIAAAWIgYAAIAABJg");
	this.shape_12.setTransform(6.6,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol36, new cjs.Rectangle(0,10.8,145.4,25.5), null);


(lib.Sembol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAtQgJgFgGgIQgGgJgCgMIgLAAIAAAlIgaAAIAAhfIAaAAIAAAlIALAAQACgMAGgIQAGgJAJgFQAIgFALAAQANAAAKAGQAKAGAFAMQAGALAAAOIAAABQAAAPgGALQgFALgKAGQgKAGgNAAQgLAAgIgFgAAEgTQgEAHAAAMQAAANAFAIQAFAHAIAAQAJAAAFgHQAEgIABgNQgBgMgFgHQgFgIgIAAQgJAAgFAIg");
	this.shape.setTransform(172.3,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_1.setTransform(159.9,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA6IAAgUIgyAAIgDAUIgVAAIAAgqIAJAAQAGgNACgQQABgQAAgTIAAgKIBGAAIAABKIALAAIgBAVIgCAVgAgHgRIgDARQgBAIgCAIIAaAAIAAg0IgTAAIgBATg");
	this.shape_2.setTransform(149.4,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_3.setTransform(139.1,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA/IAAh7IAZAAIAAANQAEgGAGgEQAHgFAIAAQAKAAAIAFQAJAGAFALQAFAKAAARIAAADQAAAPgFALQgFALgJAFQgIAGgKAAQgIgBgHgEQgGgEgEgFIAAAngAgNggQgFAHAAAMIAAADQAAALAFAHQAGAHAHAAQAIAAAFgHQAGgHAAgLIAAgDQAAgMgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_4.setTransform(128.8,33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAwIAAg2IgeA2IgYAAIAAhfIAZAAIAAA1IAeg1IAYAAIAABfg");
	this.shape_5.setTransform(118.3,32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA/IAAh7IAZAAIAAANQAEgGAGgEQAHgFAIAAQAKAAAIAFQAJAGAFALQAFAKAAARIAAADQAAAPgFALQgFALgJAFQgIAGgKAAQgIgBgHgEQgGgEgEgFIAAAngAgNggQgFAHAAAMIAAADQAAALAFAHQAGAHAHAAQAIAAAFgHQAGgHAAgLIAAgDQAAgMgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_6.setTransform(108.1,33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAwIAAhKIgbAAIAABKIgZAAIAAhfIBNAAIAABfg");
	this.shape_7.setTransform(97.7,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_8.setTransform(83.2,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOAwIAAglIgbAAIAAAlIgZAAIAAhfIAZAAIAAAlIAbAAIAAglIAZAAIAABfg");
	this.shape_9.setTransform(73.8,32.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAwIAAglIgbAAIAAAlIgaAAIAAhfIAaAAIAAAlIAbAAIAAglIAaAAIAABfg");
	this.shape_10.setTransform(63.8,32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAFgLAKgHQAJgGALAAQAOAAAJAHQAKAHAEALQAFAMAAANIgBAEIAAAFIg4AAQABAKAGAEQAFAFAHAAQAHAAAFgCQAFgCAFgFIALAPQgGAIgIADQgJAEgKAAQgMAAgLgGgAARgHQgBgKgEgFQgEgGgIAAQgGAAgEAFQgEAGgCAKIAhAAIAAAAg");
	this.shape_11.setTransform(53.9,32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOAwIAAglIgbAAIAAAlIgZAAIAAhfIAZAAIAAAlIAbAAIAAglIAZAAIAABfg");
	this.shape_12.setTransform(44.2,32.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAwIgQgeIgQAeIgaAAIAdgwIgcgvIAbAAIAOAcIAQgcIAaAAIgcAvIAdAwg");
	this.shape_13.setTransform(34.5,32.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgYAAIAAgWIBJAAIAAAWIgYAAIAABJg");
	this.shape_14.setTransform(25.9,32.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAuQgHgDgEgGQgDgHgBgJIAAgBQABgLAEgHQAEgGAIgDQAHgDAKAAIAKABIAKACIAAgCQAAgJgFgEQgFgEgIAAQgHAAgFABIgLAEIgFgVIAOgFQAIgCAJAAQAUABAKAKQAKAKAAATIAAA5IgaAAIAAgKQgEAGgGADQgFADgJAAQgIAAgGgEgAgKAJQgEADAAAGIAAACQAAAGAEADQADADAGAAQAGgBAFgEQAFgEAAgGIAAgJIgHgCIgHgBQgHAAgEAEg");
	this.shape_15.setTransform(17.1,32.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAwIAAglIgbAAIAAAlIgZAAIAAhfIAZAAIAAAlIAbAAIAAglIAZAAIAABfg");
	this.shape_16.setTransform(7.6,32.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQASQAJgBAFgGQADgEgBgHIgKAAIAAgbIAbAAIAAAXQAAAPgIAJQgJAIgOAAg");
	this.shape_17.setTransform(96.6,19.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQAwIAAgfIgLAAIgRAfIgdAAIAWgkQgIgEgFgGQgFgGAAgLQAAgMAFgHQAFgHAJgDQAIgEAKABIAqAAIAABfgAAAgbQgFABgDADQgDACAAAHQAAAGAEAEQADADAFAAIAPAAIAAgaIgEAAIgMAAg");
	this.shape_18.setTransform(89.2,14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_19.setTransform(82.4,12.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAwIAAhfIA9AAIAAAWIgjAAIAABJg");
	this.shape_20.setTransform(76.7,14.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_21.setTransform(67.3,14.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAwIgGgCIADgUIADAAIADAAQAEABACgDQACgCACgIIADgWIABgoIBEAAIAABgIgZAAIAAhKIgUAAQAAAWgBAOQgCAPgEAIQgDAJgHADQgGAEgHAAIgKgBg");
	this.shape_22.setTransform(56.4,14.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAGALQAFALABAPIAAABQgBAOgGALQgFAMgLAGQgKAGgNAAQgMAAgLgGgAgOgTQgFAHAAAMIAAABQAAAIACAGQADAGAEAEQAFADAFAAQAJAAAGgHQAFgIAAgMIAAgBQAAgMgFgHQgGgIgJAAQgJAAgFAIg");
	this.shape_23.setTransform(46.7,14.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAwIAAglIgbAAIAAAlIgaAAIAAhfIAaAAIAAAlIAbAAIAAglIAaAAIAABfg");
	this.shape_24.setTransform(36.5,14.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAwIgQgeIgQAeIgaAAIAdgwIgcgvIAbAAIAOAcIAQgcIAaAAIgcAvIAdAwg");
	this.shape_25.setTransform(26.9,14.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAsQgKgGgGgLQgGgLAAgPIAAgBQAAgOAGgLQAFgLAKgHQAJgGALAAQAOAAAJAHQAKAHAEALQAFAMAAANIgBAEIAAAFIg4AAQABAKAGAEQAFAFAHAAQAHAAAFgCQAFgCAFgFIALAPQgGAIgIADQgJAEgKAAQgMAAgLgGgAARgHQgBgKgEgFQgEgGgIAAQgGAAgEAFQgEAGgCAKIAhAAIAAAAg");
	this.shape_26.setTransform(17.3,14.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMA/IAAhlIggAAIAAgYIBYAAIAAAYIgeAAIAABlg");
	this.shape_27.setTransform(7.6,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol35, new cjs.Rectangle(0,0,182,43.2), null);


(lib.Sembol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-31.1,0,31.2,0).s().p("Ak2EoIAApPIJtAAIAAJPg");
	this.shape.setTransform(31.1,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol32, new cjs.Rectangle(0,0,62.3,59.2), null);


(lib.Sembol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0iAIhZleIAvgYIHGKUIAmAAIAAFZg");
	this.shape.setTransform(27,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol29, new cjs.Rectangle(0,0,53.9,100.7), null);


(lib.Sembol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABwBHIAAhLIAAgMIABgNIgBAAIgFAKIgbAzIgWAAIgWgpIgFgKIgFgKIAAAAIAAAMIAAANIAABLIgaAAIAAiNIAeAAIAmBMIABAAIAEgJIAFgJIAeg6IAfAAIAACNgAhdBHIAAh2IgtAAIAAgXIB1AAIAAAXIgsAAIAAB2g");
	this.shape.setTransform(439.1,81.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AIRDpQiCgwjIhAIlLhrIlNhfQjJg7iFggQgPgEgIgNQgIgNAEgPQADgOAMgIQALgIAOABQCJANDQALIFaARQBzABDoAGQDRAFCMgDQBcgCBDA/QBCBAACBbQADBchABCQg/BDhcACIgGAAQgoAAglgOg");
	this.shape_1.setTransform(265.7,64.1,0.135,0.135);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFiJ8Qg0gbgmgxQhpiHiLikQhJhYixjKQjGjcg6hAQiSieh2h1QgOgOAAgTQAAgUAOgOQANgMARgBQARgCANAKQCJBhC0B0QBaA6DpCSQDlCMBkA6QC5BsCXBQQBmA2AiBvQAiBug2BmQg2BmhvAiQgqANgqAAQhBAAg/ghg");
	this.shape_2.setTransform(283,32.8,0.135,0.135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AipQcQhzhHggiDQgRhDANhIQAmjBAkj3QASh1AslCQAmlIAMhwQAaj3AMjBQABgXARgPQARgPAXACQAUABAPAOQANAOACAUQAVDAAlD1QATB+A0E3QA7FEAWBwQAwD1AvC/QAfCEhGBzQhGBziEAgQgpAKgmAAQhXAAhPgwg");
	this.shape_3.setTransform(322.7,14.9,0.135,0.135);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AQYcBQgvgZgPgzQgQgyAZgvQATgkAkgSQAkgSAnAFIAFABQEdAlERgvQEOgwDwiAQBug4B0hbQBSg+Bjh8QBNhlBLiHQA8huBFiYQBtj9Bek4QBNj/BPlSQBpnNBjpdQi2CsjuCNQiJBUi2A+QiVAyi7AmQiAAcjLAjIlEA4Ql4BHjeBjQh7A5h4BcQh/BshSBkQjCDthSEVQhMD0AWECQAVEDB0DmQDulRErlAQEmkzEJjTQFAkAFCieQAWgLAYAJQAYAIALAWQAKAVgHAWQgGAWgTANIgCABQkgC1kWETQjoDlj4FAQnnKFjeJYIgBADQggBVhSAmQhSAmhVgfQhVgggmhSQgmhSAfhVQADgJAHgNQBWitByi5QjbkPhHlmQhHloBilRQBGj/CTjkQjXhditgrQlUhUlmAIQliAIlXBgQlHBflDC9QiuBxh3BdQiZB4huB6Qj3D7ixFJQipE6hfFqIgBAEQgKAkggATQghATgkgKQgjgJgTgeQgTgfAHgjQBNmKCjlbQCtlyEAkdQB1iOCgiLQCChxC3iDQFejlFph7QF4iBGYgYQGUgXGNBSQEcA8EsCFQBAg7AoghQCQhuC5hNQCghAC4gpQCZgiC9gWQCBgRDNgSQEAgXBHgHQDNgYBsgbQCOgkCbhCQESh0ETjXIBThAIAGBnQAhJYhMKcQgpFZg+EeQhHFOhrEjQh6FQi7EMQg9BRg0A6QhCBKhEA4QiPB2iXBSQk8CtltALIgzABQlWAAkciWg");
	this.shape_4.setTransform(332,52.5,0.135,0.135);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AJAaZIAA3vQAAlbhmiCQhih9j+AAQi6AAjSA6QimAtiMBEIAAeeImEAAMAAAg0xIGEAAIAARYQCchPCigwQDohFDnAAQGIAAC9DmQC7DkAAHXIAAX8g");
	this.shape_5.setTransform(410.5,99.3,0.135,0.135);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AoQTIQjYgfhQgbIAAktQBIAGEEAdQEGAaCzAAQEkAAB2hTQBohJAAinQAAhUgSg1QgUg6gzgvQhWhRk1iDIivhLQlhiViWijQicirAAj+QAAkvDRiSQDUiVG/AAQDbAADoAhQDBAaBRAdIAAEkQi9gTjGgMQjDgMh9AAQkTAAhmAxQh0A3AACdQAACNBSBSQBSBRD/BvICuBLQGtC9CPCUQBSBUAkBoQAjBkAACOQAAEpi1CmQjfDNnqAAQjgAAkKgmg");
	this.shape_6.setTransform(379,105.9,0.135,0.135);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AsYPPQh7iMg4jdQg0jPAAkuIAAi2QAAo+D9ktQEEk1H4AAQIMAAEAE5QD6EyAAJlIAACtI52AAIAAAwQAAC1AUBsQAaCOBDBZQCeDRHFAAQDEAADtgUQDngUCugeIAAE7QiYAoi9AYQj1AgkOAAQpoAAj8kfgAoHqpQhrCoAAEjIAAAsITcAAIAAgsQAAkohlijQiTjvlzAAQlvAAiXDvg");
	this.shape_7.setTransform(347.4,105.9,0.135,0.135);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AprTPMAAAglgIGAAAIAADAQFBj9IWAAIAAFdQjrAAjwA7QjtA5iLBZIAAdzg");
	this.shape_8.setTransform(321.9,105.5,0.135,0.135);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ak6a2MAAAggZInFgjIAAkkIHFAAIAAkgQAAlfBhiiQCNjqF9AAQD0AADcA9IAAEKIi+gKQiDgHhaAAQi6AAg2BoQgZAwgJBYQgGA/ABCGIAAEgIKoAAIAAFHIqoAAMAAAAgZg");
	this.shape_9.setTransform(296.8,98.9,0.135,0.135);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AmaZWMAAAgpZIuqAAIAApSMAqJAAAIAAJSIurAAMAAAApZg");
	this.shape_10.setTransform(265.5,100.2,0.135,0.135);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AqXZ9QkpgeingqIAAoUIHAAiQEbASEQAAQESAAB7hVQB6hUAAi5QAAiIhOhNQhLhMjnhjInXjJQl+iiini/QjJjpAAl6QAAnWFFjaQE0jPJ3AAQEhAAEpAnQDWAbC/ArIAAINQkzgciPgIQkAgRjxAAQkEAAh0A9QiBBCAAChQAAB8BIBFQBHBFDgBbIHJC8QGkCtC0DWQDDDoAAFzQgBHwlHD6Qk7DxpYAAQk1AAlDghg");
	this.shape_11.setTransform(226.7,100.2,0.135,0.135);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AxPZWMAAAgyrMAifAAAIAAJSI1vAAIAALDIUUAAIAAIyI0UAAIAAMWIVvAAIAAJOg");
	this.shape_12.setTransform(189.8,100.2,0.135,0.135);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AptZWMgN7gyrINCAAMAI0Ah+QAcB3AhCzQAQBUAkDPIAHAAIA5klQAii3AbhxMAI0gh+IM5AAMgN/Ayrg");
	this.shape_13.setTransform(148.5,100.2,0.135,0.135);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AItZpIqXyFInpAAIAASFIsSAAMAAAgyqQGngXBIgDQElgNEEgBQLIAAFaC+QG/D1AAJlIAAAeQAAFbiIDdQh8DLj/B7ILVUegApTwBIAAOvIEpAAQFxAACYhlQCfhpAAkFIAAgfQAAkIilhiQiThXl5gBQi3ABhpAEg");
	this.shape_14.setTransform(110,99.9,0.135,0.135);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AKtZWIjnswIuYAAIjsMwItGAAMAOIgyrITxAAMAOQAyrgAh5p/IjoNcIK6AAIjstcQg8jvgokCIgeAAQgwE1g0C8g");
	this.shape_15.setTransform(64.9,100.2,0.135,0.135);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABSDbIAAi4IijAAIAAC4IhvAAIAAm1IBvAAIAACqICjAAIAAiqIBvAAIAAG1g");
	this.shape_16.setTransform(19.3,100.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,453,123.1);


(lib.Sembol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DBA").s().p("AgjA1QgPgNgBgXIAAhSIAgAAIAAAgQALgDAJgBQAXABAOAOQAOAOAAAVQAAAagQAOQgPANgVAAQgVAAgOgNgAgOgHQgEAHgBALIAAAGQACAbARAAQAJAAAGgIQAFgJAAgNQAAgMgFgHQgFgKgKAAQgIABgGAHg");
	this.shape.setTransform(6,7.7,1.166,1.166);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA1QgPgNgBgXIAAhSIAgAAIAAAgQALgDAJgBQAXABAOAOQAOAOAAAVQAAAagQAOQgPANgVAAQgVAAgOgNgAgOgHQgEAHgBALIAAAGQACAbARAAQAJAAAGgIQAFgJAAgNQAAgMgFgHQgFgKgKAAQgIABgGAHg");
	this.shape_1.setTransform(6,7.7,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,15.4);


(lib.Sembol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DBA").s().p("AggAmQgOgNAAgYQAAgUAMgPQAOgRAXAAQAWAAAMAQQAKANAAAVIgBALIg+AAQAAAJAJAFQAHAFALAAQAOAAANgEIADAUQgOAHgVAAQgYAAgOgOgAATgKQgBgUgRAAQgIAAgFAHQgEAFgBAIIAkAAIAAAAg");
	this.shape.setTransform(5.5,6,1.166,1.166);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAmQgOgNAAgYQAAgUAMgPQAOgRAXAAQAWAAAMAQQAKANAAAVIgBALIg+AAQAAAJAJAFQAHAFALAAQAOAAANgEIADAUQgOAHgVAAQgYAAgOgOgAATgKQgBgUgRAAQgIAAgFAHQgEAFgBAIIAkAAIAAAAg");
	this.shape_1.setTransform(5.5,6,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,12.1);


(lib.Sembol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DBA").s().p("AALBBIgeguIAAAuIgfAAIAAiBIAfAAIAABHIAagoIAoAAIgnAuIArA0g");
	this.shape.setTransform(5.9,7.6,1.166,1.166);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALBBIgeguIAAAuIgfAAIAAiBIAfAAIAABHIAagoIAoAAIgnAuIArA0g");
	this.shape_1.setTransform(5.9,7.6,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.9,15.2);


(lib.Sembol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.img22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol16, new cjs.Rectangle(0,0,342,162), null);


(lib.Sembol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Bitmap3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,123.3,5.965,1.761,0,-53.2,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol15, new cjs.Rectangle(0,0,451.6,190.8), null);


(lib.Sembol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Bitmap2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol12, new cjs.Rectangle(0,0,64,64), null);


(lib.Sembol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bolme2, null, new cjs.Matrix2D(1,0,0,1,-28.8,-138.7)).s().p("ADyGoImmp9IhNkZIBOgdIGuKCIgvAWIA2F/QgJg0gHgwg");
	this.shape.setTransform(25.8,52.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol10, new cjs.Rectangle(0,0,51.7,104.8), null);


(lib.Sembol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Bitmap4_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol9, new cjs.Rectangle(0,0,64,64), null);


(lib.Sembol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol6, new cjs.Rectangle(0,0,64,64), null);


(lib.Sembol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol5, new cjs.Rectangle(0,0,64,64), null);


(lib.Sembol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007DBA").s().p("AgkAmQgOgOAAgXQAAgXAOgOQAOgPAXAAQAXAAAOAOQAOAOgBAXQABAZgRAOQgOANgVAAQgWAAgOgOgAgOgTQgFAHAAAMQAAANAFAIQAGAJAJAAQAIAAAFgIQAGgJAAgNQAAgLgFgIQgFgKgJAAQgKAAgFAKg");
	this.shape_4.setTransform(6,6,1.166,1.166);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAmQgOgOAAgXQAAgXAOgOQAOgPAXAAQAXAAAOAOQAOAOgBAXQABAZgRAOQgOANgVAAQgWAAgOgOgAgOgTQgFAHAAAMQAAANAFAIQAGAJAJAAQAIAAAFgIQAGgJAAgNQAAgLgFgIQgFgKgJAAQgKAAgFAKg");
	this.shape_5.setTransform(6,6,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12.1);


(lib.Sembol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DBA").s().p("AjBALIGEg1IAAAfImEA2g");
	this.shape.setTransform(22.7,5,1.166,1.166);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjBALIGEg1IAAAfImEA2g");
	this.shape_1.setTransform(22.7,5,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.4,10);


(lib.Sembol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.img33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol2, new cjs.Rectangle(0,0,342,162), null);


(lib.Sembol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol1, new cjs.Rectangle(0,0,64,64), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(75.3,11.9,0.568,0.387,0,0,0,3.1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:77.3},7).to({regY:6.6,x:76.1},4).to({regY:6.5,x:75.3},3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAcIAAgqIgOAAIAAgNIArAAIAAANIgOAAIAAAqg");
	this.shape.setTransform(56.4,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAjIgGgCIAEgLIAEABIACABIADgBIADgDIgTg4IAPAAIAKAlIALglIAPAAIgTA5QgCAIgEAEQgEADgHAAIgGgBg");
	this.shape_1.setTransform(51.3,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAcIAAgqIgOAAIAAgNIArAAIAAANIgOAAIAAAqg");
	this.shape_2.setTransform(46.2,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAaQgHgEgCgGQgEgGgBgJIAAgBQABgIADgGQADgHAGgDQAFgEAGAAQAJAAAFAEQAFAEADAHQACAGABAIIAAACIAAADIgiAAQACAFADADQADADAEAAIAGgBIAHgEIAGAJQgDAEgFACQgGACgGAAQgHAAgFgDgAAKgDQAAgGgDgEQgDgDgEAAQgCAAgDADQgDAEgBAGIATAAIAAAAg");
	this.shape_3.setTransform(38.3,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAcIAAg3IAPAAIAAAqIAQAAIAAgqIANAAIAAAqIAPAAIAAgqIAQAAIAAA3g");
	this.shape_4.setTransform(31.2,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAPAAIAAATIAJAAQAJAAAFAFQAFADAAAJQAAAHgCAEQgDAEgFACQgEACgGAAgAgGARIAGAAQADAAACgCQACgCAAgEQAAgEgCgBQgCgCgDAAIgGAAg");
	this.shape_5.setTransform(24.4,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAcIgEgBIACgMIACAAIABAAIAEAAQABgCABgFIACgMIABgYIAnAAIAAA4IgPAAIAAgrIgLAAQAAANgBAIQgBAIgCAGQgCAEgDACQgEACgFABIgFgBg");
	this.shape_6.setTransform(18.3,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAmIAAg4IAOAAIAAA4gAgHgXIAAgOIAPAAIAAAOg");
	this.shape_7.setTransform(14.2,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAlIAAhJIAwAAIAAAOIghAAIAAANIANAAQALAAAHAGQAHAFAAAMQAAAHgEAFQgDAGgGACQgFADgIAAgAgLAYIANAAQAEAAADgDQADgDAAgEQAAgFgDgDQgDgCgEAAIgNAAg");
	this.shape_8.setTransform(9.8,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007DBA").s().p("ApBCJIAAkRISDAAIAAERg");
	this.shape_9.setTransform(45.6,11.9,0.788,0.854);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,91.2,23.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sembol42("single",0);
	this.instance.parent = this;
	this.instance.setTransform(20,11.5,1,1,0,0,0,20,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,40,23), null);


(lib.Sembol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance_1 = new lib.Sembol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(256.4,145.5,1,1,0,0,0,256.4,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,512.8,291.1);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sembol23("single",0);
	this.instance.parent = this;
	this.instance.setTransform(205.6,30.3,0.908,0.908,0,0,0,211.8,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(13.2,-25.6,411.5,111.8), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sembol3("single",1);
	this.instance.parent = this;
	this.instance.setTransform(22.7,5,1,1,0,0,0,22.7,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,45.4,10), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sembol4_1("single",1);
	this.instance.parent = this;
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,12,12.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sembol20("single",1);
	this.instance.parent = this;
	this.instance.setTransform(6,7.5,1,1,0,0,0,6,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,11.9,15.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sembol21("single",1);
	this.instance.parent = this;
	this.instance.setTransform(5.5,6,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,11,12.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sembol22("single",1);
	this.instance.parent = this;
	this.instance.setTransform(6,7.7,1,1,0,0,0,6,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,12.1,15.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(211.8,41.8,1,1,0,0,0,211.8,41.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.2,-25.6,411.5,111.8);


(lib.Sembol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol6_1("single",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125,0.585,0.859,0,0,0,256.4,145.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250.1);


(lib.Sembol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_2
	this.instance = new lib.Sembol43();
	this.instance.parent = this;
	this.instance.setTransform(-76.9,16.1,1,1,0,0,0,98.8,16.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:101.2,alpha:1},9).to({x:98.8},7).wait(70).to({y:-7.9,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(63));

	// Sembol 42
	this.instance_1 = new lib.Sembol42_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90.2,41.2,1,1,0,0,0,85.5,16.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:87.9,alpha:1},9).to({x:85.5},7).wait(68).to({y:17.2,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(63));

	// Katman_1
	this.instance_2 = new lib.Sembol40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.5,16.1,1,1,0,0,0,86.3,16.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).to({x:88.1,alpha:1},9).to({x:86.3},6).wait(54));

	// Sembol 39
	this.instance_3 = new lib.Sembol39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56.4,43.1,1,1,0,0,0,51.4,16.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({x:53.2,alpha:1},9).to({x:51.4},6).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.7,0,184.7,25.5);


(lib.Sembol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol35();
	this.instance.parent = this;
	this.instance.setTransform(-43.6,16.1,1,1,0,0,0,90.5,16.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92.9,alpha:1},8).to({x:90.5},6).wait(28));

	// Sembol 36
	this.instance_1 = new lib.Sembol36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53.1,41.8,1,1,0,0,0,81,16.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:83.4,alpha:1},8).to({x:81},6).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.1,0,182,43.2);


(lib.Sembol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_2
	this.instance = new lib.Sembol6();
	this.instance.parent = this;
	this.instance.setTransform(221.7,109.9,1.311,3.743,0,70.2,69.5,32.1,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Katman_1
	this.instance_1 = new lib.Sembol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193,104,1,1,0,0,0,171,81);

	this.instance_2 = new lib.img1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol34, new cjs.Rectangle(0,0,466,350), null);


(lib.Sembol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_2
	this.instance = new lib.Sembol1();
	this.instance.parent = this;
	this.instance.setTransform(208,114.9,1.311,3.743,0,70.2,69.5,32.1,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Katman_1
	this.instance_1 = new lib.img1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol31, new cjs.Rectangle(0,0,466,350), null);


(lib.Sembol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sembol 5
	this.instance = new lib.Sembol5();
	this.instance.parent = this;
	this.instance.setTransform(221.7,109.9,1.311,3.743,0,70.2,69.5,32.1,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Katman_2
	this.instance_1 = new lib.Sembol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193,104.1,1,1,0,0,0,171,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// img1.jpg
	this.instance_2 = new lib.img1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol30, new cjs.Rectangle(0,0,466,350), null);


(lib.Sembol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_3
	this.instance = new lib.Sembol10();
	this.instance.parent = this;
	this.instance.setTransform(29.2,138.8,1,1,0,0,0,25.8,52.4);
	this.instance.alpha = 0.629;

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bolme2, null, new cjs.Matrix2D(1,0,0,1,-165.2,-113.1)).s().p("AwSQwQgniegYiGIg2l/IAugVImvqCMAkpgNKII3FpIA6ggIAgAcIAXgLIA/AsIgZDlIAEAHIAAARIiLBBIhUFJMgj5AScg");
	this.shape.setTransform(165.7,113.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Katman_4
	this.instance_1 = new lib.Sembol29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,138,1,1,0,0,0,26.9,50.3);
	this.instance_1.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol27, new cjs.Rectangle(2.1,1.2,319.1,223.8), null);


(lib.Sembol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r1.jpg
	this.instance = new lib.Sembol30();
	this.instance.parent = this;
	this.instance.setTransform(233,175,1,1,0,0,0,233,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).wait(57));

	// r3.jpg
	this.instance_1 = new lib.Sembol31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(233,175,1,1,0,0,0,233,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({alpha:0},29).wait(28));

	// r2.jpg
	this.instance_2 = new lib.Sembol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(233,175,1,1,0,0,0,233,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({alpha:0},27).wait(1));

	// Katman_7
	this.instance_3 = new lib.Sembol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(233,175,1,1,0,0,0,233,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,466,350);


(lib.Sembol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol23("single",0);
	this.instance.parent = this;
	this.instance.setTransform(68,19.8,0.321,0.321,0,0,0,211.8,61.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.4,39.5);


(lib.Sembol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol12();
	this.instance.parent = this;
	this.instance.setTransform(18.1,31.7,0.364,0.372,0,20.8,56.1,32.2,32.8);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Sembol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.2,42.4,0.364,1.514,0,-33.7,-79.1,31.3,32.4);
	this.instance_1.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol19, new cjs.Rectangle(-8.1,-10.1,58.2,103.5), null);


(lib.Sembol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol9();
	this.instance.parent = this;
	this.instance.setTransform(21.3,35,0.359,0.162,0,62.9,82.6,32.1,31.8);
	this.instance.alpha = 0.66;

	this.instance_1 = new lib.Sembol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.5,47.4,1.838,0.313,0,40.4,60,32,32.2);
	this.instance_1.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol18, new cjs.Rectangle(-10.4,-11.2,71.8,117.2), null);


(lib.Sembol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol15();
	this.instance.parent = this;
	this.instance.setTransform(64.4,51.8,0.095,0.851,0,137.1,175.2,225.7,94.4);
	this.instance.alpha = 0.371;

	this.instance_1 = new lib.Sembol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.2,44.1,0.157,0.157,0,54.4,92.5,226.1,95);
	this.instance_1.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol17, new cjs.Rectangle(-12.8,-10.1,153.3,122.6), null);


(lib.Sembol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol12();
	this.instance.parent = this;
	this.instance.setTransform(290.7,29.3,4.753,6.817,0,-36.4,-22.3,31.9,32.3);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Sembol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.9,132.1,4.753,6.817,0,-36.4,-22.3,31.9,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol13, new cjs.Rectangle(-217.2,-205.7,777.6,569), null);


(lib.Sembol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol9();
	this.instance.parent = this;
	this.instance.setTransform(244.9,28.2,6.041,4.938,0,65.3,42,31.9,32.3);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Sembol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.3,117.9,6.041,4.816,0,40.4,60,31.9,32.3);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol11, new cjs.Rectangle(-143.9,-167.4,677.8,569.7), null);


(lib.Sembol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_1
	this.instance = new lib.Sembol15();
	this.instance.parent = this;
	this.instance.setTransform(68.2,128.4,1.296,2.692,0,54.5,92.7,225.9,95);

	this.instance_1 = new lib.Sembol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234,40.5,0.865,2.692,0,69.2,107.4,225.9,95.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sembol8, new cjs.Rectangle(-155.3,-312.7,687.1,883.1), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol32("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-61.8,11.7,1,1,0,0,0,45.6,11.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:46.6,alpha:1},8).to({x:45.6},6).wait(1).to({mode:"synched"},0).wait(197));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,0.3,91.2,23.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(23.5,13.5,1.166,1.166,0,0,0,20.1,11.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.6,26.8);


(lib.Symbol19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("AgeC8IAAkvIA1AAIAAEvg");
	var mask_graphics_7 = new cjs.Graphics().p("AgpC8IAAkvIBTAAIAAEvg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag3C8IAAkvIBvAAIAAEvg");
	var mask_graphics_9 = new cjs.Graphics().p("AhGC8IAAkvICNAAIAAEvg");
	var mask_graphics_10 = new cjs.Graphics().p("AhVC8IAAkvICrAAIAAEvg");
	var mask_graphics_11 = new cjs.Graphics().p("AhjC8IAAkvIDHAAIAAEvg");
	var mask_graphics_12 = new cjs.Graphics().p("AhyC8IAAkvIDlAAIAAEvg");
	var mask_graphics_13 = new cjs.Graphics().p("AiBC8IAAkvIEDAAIAAEvg");
	var mask_graphics_14 = new cjs.Graphics().p("AiPC8IAAkvIEgAAIAAEvg");
	var mask_graphics_15 = new cjs.Graphics().p("AieC8IAAkvIE9AAIAAEvg");
	var mask_graphics_16 = new cjs.Graphics().p("AitC8IAAkvIFbAAIAAEvg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai8C8IAAkvIF5AAIAAEvg");
	var mask_graphics_18 = new cjs.Graphics().p("AjKC8IAAkvIGVAAIAAEvg");
	var mask_graphics_19 = new cjs.Graphics().p("AjZC8IAAkvIGzAAIAAEvg");
	var mask_graphics_20 = new cjs.Graphics().p("AjoC8IAAkvIHRAAIAAEvg");
	var mask_graphics_21 = new cjs.Graphics().p("Aj2C8IAAkvIHtAAIAAEvg");
	var mask_graphics_22 = new cjs.Graphics().p("AkFC8IAAkvIILAAIAAEvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:-3.1,y:18.8}).wait(1).to({graphics:mask_graphics_7,x:-2.2,y:18.8}).wait(1).to({graphics:mask_graphics_8,x:-0.9,y:18.8}).wait(1).to({graphics:mask_graphics_9,x:0.4,y:18.8}).wait(1).to({graphics:mask_graphics_10,x:1.7,y:18.8}).wait(1).to({graphics:mask_graphics_11,x:3,y:18.8}).wait(1).to({graphics:mask_graphics_12,x:4.4,y:18.8}).wait(1).to({graphics:mask_graphics_13,x:5.7,y:18.8}).wait(1).to({graphics:mask_graphics_14,x:7,y:18.8}).wait(1).to({graphics:mask_graphics_15,x:8.3,y:18.8}).wait(1).to({graphics:mask_graphics_16,x:9.6,y:18.8}).wait(1).to({graphics:mask_graphics_17,x:10.9,y:18.8}).wait(1).to({graphics:mask_graphics_18,x:12.3,y:18.8}).wait(1).to({graphics:mask_graphics_19,x:13.6,y:18.8}).wait(1).to({graphics:mask_graphics_20,x:14.9,y:18.8}).wait(1).to({graphics:mask_graphics_21,x:16.2,y:18.8}).wait(1).to({graphics:mask_graphics_22,x:20,y:18.8}).wait(12));

	// Symbol 10
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.7,21.8,1,1,0,0,0,22.7,5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(28));

	// Layer_7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkOByIAAjjIIdAAIAADjg");
	mask_1.setTransform(22.5,4.3);

	// Symbol 9
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.7,25.7,1,1,0,0,0,6,6);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:9.4},14).wait(13));

	// Symbol 8
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(30.3,23.8,1,1,0,0,0,6,7.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:7.5},13).wait(16));

	// Symbol 7
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(18.1,25.7,1,1,0,0,0,5.5,6);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({y:9.4},13).wait(18));

	// Symbol 6
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6,24,1,1,0,0,0,6,7.7);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:7.7},13).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol11("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(107.9,107.2,0.509,0.509,0,0,0,212,42.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(21).to({startPosition:9},0).to({scaleX:1.65,scaleY:1.65,x:108.2,y:203.9,alpha:0},19).wait(54));

	// Layer_1
	this.instance_1 = new lib.Symbol19_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.5,28.4,2.115,2.115,0,0,0,23.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({startPosition:33},0).to({scaleX:6.87,scaleY:6.87,x:110.2,y:-51.9,alpha:0},19).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Sembol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_7
	this.instance = new lib.Sembol17();
	this.instance.parent = this;
	this.instance.setTransform(95.5,209.2,1,1,0,0,0,67.4,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).to({_off:true},1).wait(56));

	// Katman_10
	this.instance_1 = new lib.Sembol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.1,210.7,1,1,0,0,0,28.2,45.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},29).to({alpha:0},29).to({_off:true},1).wait(27));

	// Katman_12
	this.instance_2 = new lib.Sembol19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.1,213,1,1,0,0,0,25.2,42.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({alpha:1},29).to({alpha:0},27).wait(1));

	// Katman_11
	this.instance_3 = new lib.Sembol17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(95.5,209.2,1,1,0,0,0,67.4,52.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).to({alpha:1},27).wait(1));

	// Katman_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3pBZMAlPgM/IIhFpIBEggIAfAWMgocARug");
	mask.setTransform(228.7,159.2);

	// Katman_3
	this.instance_4 = new lib.Sembol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(195.9,141.7,1,1,0,0,0,153,75.6);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},29).to({_off:true},1).wait(56));

	// Katman_5
	this.instance_5 = new lib.Sembol11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(195.8,143,1,1,0,0,0,138.7,66.3);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},29).to({alpha:0},29).to({_off:true},1).wait(27));

	// Katman_4
	this.instance_6 = new lib.Sembol13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(195,145.9,1,1,0,0,0,150,79);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({alpha:1},29).to({alpha:0},27).wait(1));

	// Katman_6
	this.instance_7 = new lib.Sembol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(195.9,141.7,1,1,0,0,0,153,75.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({alpha:1},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,85,364.9,186.3);


(lib.Sembol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Katman_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghnARmIFskqIi2ruMAo5gObInqlQIAAm5IfKAAMAAAAq8Mg1aAHxg");
	mask.setTransform(213.5,107.4);

	// Katman_3
	this.instance = new lib.Sembol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-43.3,-73,1,1,0,0,0,32.9,29.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-19.6,y:-27.5,alpha:0.602,startPosition:47},47).wait(632));

	// Katman_1
	this.instance_1 = new lib.Sembol27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.9,98.2,0.969,0.967,0,0,3.3,160.5,112.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:112.5,scaleX:1,scaleY:1,skewY:0.1,x:175.8,y:138.4},47).wait(632));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-17.4,305.6,232.4);


(lib.Sembol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mavilik
	this.instance = new lib.Sembol6_1("single",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125,0.585,0.859,0,0,0,256.4,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},15).to({_off:true},1).wait(345));

	// sitahlık
	this.instance_1 = new lib.Sembol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.8,190.7,2.101,5.51,90,0,0,31.1,29.4);
	this.instance_1.alpha = 0.98;

	this.instance_2 = new lib.Sembol32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(153.9,43.3,1.541,5.51,-90,0,0,31.1,29.4);
	this.instance_2.alpha = 0.711;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(361));

	// kapak
	this.instance_3 = new lib.Sembol28("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(158.1,117.1,0.704,0.704,0,0,0,160.7,112.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(361));

	// döngü
	this.instance_4 = new lib.Sembol26("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(166.4,125,0.714,0.714,0,0,0,233,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(361));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-4.7,341,260.8);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.sayac = 0;
	}
	this.frame_336 = function() {
		stage.sayac++;
		if(stage.sayac==2)
		{
			this.stop();
		}
	}
	this.frame_348 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(336).call(this.frame_336).wait(12).call(this.frame_348).wait(1));

	// geçiş
	this.instance = new lib.Sembol46("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(337).to({_off:false},0).wait(12));

	// intro
	this.instance_1 = new lib.Symbol12("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.1,117.6,1,1,0,0,0,107.8,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},44).wait(305));

	// logo
	this.instance_2 = new lib.Symbol19("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(35.3,23.8,1.01,1.01,0,0,0,23.4,13.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(305));

	// harvestfresh logo
	this.instance_3 = new lib.Sembol24("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(241,23.5,0.698,0.698,0,0,0,68.2,19.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).wait(297));

	// btn
	this.instance_4 = new lib.Symbol33("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.8,226.2,1.1,1.1,0,0,0,45.6,11.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(205).to({_off:false},0).wait(144));

	// text
	this.instance_5 = new lib.Sembol37("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(100.2,177.9,1,1,0,0,0,90.5,28.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(194).to({_off:false},0).wait(155));

	// text
	this.instance_6 = new lib.Sembol45("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(110.5,216.5,1,1,0,0,0,98.8,29.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({_off:true},149).wait(156));

	// image
	this.instance_7 = new lib.Sembol33("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(175.5,124.3,1,1,0,0,0,175.5,124.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).wait(305));

	// bg
	this.instance_8 = new lib.Sembol6_1("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,0.585,0.859,0,0,0,256.4,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(349));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,301.5,251.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"Bitmap2.png", id:"Bitmap2"},
		{src:"Bitmap3.png", id:"Bitmap3"},
		{src:"Bitmap4.png", id:"Bitmap4"},
		{src:"Bitmap2_1.png", id:"Bitmap2_1"},
		{src:"Bitmap3_1.png", id:"Bitmap3_1"},
		{src:"Bitmap4_1.png", id:"Bitmap4_1"},
		{src:"bolme2.jpg", id:"bolme2"},
		{src:"img1.jpg", id:"img1"},
		{src:"img22.jpg", id:"img22"},
		{src:"img33.jpg", id:"img33"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;