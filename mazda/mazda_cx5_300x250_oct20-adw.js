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



(lib.bgcx5 = function() {
	this.initialize(img.bgcx5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,90);


(lib.cx5new = function() {
	this.initialize(img.cx5new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,265);


(lib.cx5 = function() {
	this.initialize(img.cx5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,435,160);


(lib.dawn = function() {
	this.initialize(img.dawn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,245);


(lib.led = function() {
	this.initialize(img.led);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,60);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1248,10);


(lib.mlogonrew = function() {
	this.initialize(img.mlogonrew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,112);


(lib.salon = function() {
	this.initialize(img.salon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,705,290);// helper functions:

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


(lib.w2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.cx5, null, new cjs.Matrix2D(1,0,0,1,-315.1,-123.5)).s().p("AjODOQhVhVgBh5QABh4BVhWQBWhVB4gBQB5ABBVBVQBXBWAAB4QAAB5hXBVQhVBXh5AAQh4AAhWhXg");
	this.shape.setTransform(29.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.5,58.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgCAcIAAglIAFAAIAAAlgAADgUIAAgGIAHAAIAAAGgAgJgUIAAgGIAHAAIAAAGg");
	this.shape.setTransform(86.7,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgCAcIAAglIAFAAIAAAlgAgDgTIAAgIIAHAAIAAAIg");
	this.shape_1.setTransform(83.7,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAQAZIgCgHIgBgDIgBgBIgdAAIAAglIAHAAIAAAhIAQAAIAAghIAHAAIAAAhIAFAAIAAAPg");
	this.shape_2.setTransform(79.6,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgJASIgEgDIgCgGQABgEADgDQACgCAGgBIAGgBIAEgBIABgCIAAgBQAAgEgBgDQgCgCgFAAQgCAAgDACQgDABgCACIgBAAIABgFIAEgDIAGgBQAGAAADACQADABACAEQABACAAAEIAAASIAAAEIABADIgGAAIgCgFQgCADgDABQgDACgDAAQgEAAgCgCgAgBABIgGAEQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADACADQABACAEAAQABAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAIAFgEIABgEIAAgHIgJABg");
	this.shape_3.setTransform(74,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgCATIAAgiIgMAAIAAgDIAdAAIAAADIgMAAIAAAig");
	this.shape_4.setTransform(69.3,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAHATIgFgGIgEgGIgGgHIAAAAIAIgJIAHgJIAHAAIgPARIADAEIAFAGIAGAGIADADIAAABgAgQATIAAglIAHAAIAAAlg");
	this.shape_5.setTransform(65,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgKAPQgFgGgBgJQAAgFADgFQACgEAEgDQAEgCAEAAQAFAAADACQAEACACAEQABAEABAEIAAADIgaAAQABAHADAEQAEAEAFABIAGgBIAGgFIAAAAIgBAGIgFACQgDACgEAAQgJgBgEgEgAgDgOIgEAEQgBADgBADIATAAIAAgBQAAgFgDgDQgCgDgEAAIgEACg");
	this.shape_6.setTransform(59.6,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AALATIgLgdIAAAAIgMAdIgGAAIAQgkIAEgBIARAlg");
	this.shape_7.setTransform(54.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AAJATIAAgiIgRAAIAAAiIgHAAIAAglIAfAAIAAAlg");
	this.shape_8.setTransform(49.4,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AARATIgEgcIgNAZIgBAAIgNgZIgBAAIgDAcIgEAAIAFglIAFAAIAMAZIABAAIANgZIAFAAIAEAlg");
	this.shape_9.setTransform(43.5,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgGASQgDAAgDgDQgDgDgBgEQgCgDAAgFQAAgEACgEQABgEADgCQADgCADgCIAGgBIAHABIAGAEQACACACAEQACAEAAAEQAAAFgCADIgEAHIgGADIgHACIgGgCgAgFgNQgDABgBAEQgCAEAAAEQAAAFACADQABAEADACQADACACAAQADAAADgCQADgCABgEQACgDAAgFQAAgEgCgEQgBgEgDgBIgGgCQgCAAgDACg");
	this.shape_10.setTransform(37.4,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AAHATIgFgGIgFgGIgFgHIAAAAIAIgJIAHgJIAHAAIgQARIAEAEIAFAGIAGAGIADADIAAABgAgPATIAAglIAGAAIAAAlg");
	this.shape_11.setTransform(32.4,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AATAZIgCgGIgCgEIgBgBIgcAAIAAABIgCAEIgCAGIgCAAIAAgPIAEAAIAOghIAEgBIAOAiIAFAAIAAAPgAAKAKIgKgZIgBAAIgKAZIAVAAg");
	this.shape_12.setTransform(23.9,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgCAcIAAglIAFAAIAAAlgAgDgTIAAgIIAHAAIAAAIg");
	this.shape_13.setTransform(19.7,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgOATIAAglIANAAQAGAAAEADQADACAAAFIgBAEIgCACIgDABIgBAAIAAABIACAAIADAAIADAEQACACAAACQAAAFgEADQgEADgHAAgAgHAQIAHAAQAEAAACgCQACgCAAgEQAAgEgCgBQgCgCgEAAIgHAAgAgHgBIAGAAQADgBACgBQACgCgBgDQABgDgCgCQgCgCgDAAIgGAAg");
	this.shape_14.setTransform(15.8,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgNATIAAglIAHAAIAAANIAFAAQAGAAAEAEQAFABAAAHQAAAGgFADQgEADgGAAgAgGAQIAFAAQADgBADgCQACgDAAgDQAAgEgCgDQgDgBgDAAIgFAAg");
	this.shape_15.setTransform(7.9,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgCATIAAgiIgMAAIAAgDIAdAAIAAADIgMAAIAAAig");
	this.shape_16.setTransform(3.2,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AAJATIAAgdIgUAdIgFAAIAAglIAHAAIAAAaIATgaIAHAAIAAAlg");
	this.shape_17.setTransform(-1.7,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AATATIgFgGIgFgGIgFgHIAAAAIAIgJIAHgJIAGAAIgOARIAEAEIAFAGIAFAGIADADIAAABgAgCATIAAglIAFAAIAAAlgAgbATIAAgBIADgDIAFgGIAFgGIAEgEIgOgRIAGAAIAHAJIAIAJIAAAAIgFAHIgFAGIgFAGg");
	this.shape_18.setTransform(-7.9,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgLAPQgEgGAAgJQgBgFADgFQADgEAEgDQADgCAEAAQAGAAADACQADACACAEQACAEAAAEIAAADIgaAAQAAAHAEAEQADAEAGABIAGgBIAFgFIABAAIgBAGIgFACQgDACgEAAQgIgBgGgEgAgDgOIgEAEQgBADAAADIASAAIAAgBQgBgFgBgDQgDgDgEAAIgEACg");
	this.shape_19.setTransform(-13.7,-0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AALATIgLgdIAAAAIgMAdIgGAAIAQgkIAEgBIARAlg");
	this.shape_20.setTransform(-18.8,-0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgJASIgFgDIgBgGQAAgEAEgDQACgCAGgBIAGgBIAFgBIAAgCIAAgBQAAgEgBgDQgDgCgEAAQgCAAgDACQgDABgCACIgBAAIABgFIAEgDIAGgBQAGAAADACQADABACAEQABACAAAEIAAASIAAAEIABADIgGAAIgCgFQgCADgDABQgDACgDAAQgEAAgCgCgAgBABIgGAEQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADACADQACACADAAQABAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAIAFgEIABgEIAAgHIgJABg");
	this.shape_21.setTransform(-23.8,-0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AgGASIgGgCIgBgHIABAAQADAEADACIAGABQADAAACgCQADgCAAgEQAAgEgDgBQgDgCgDAAIgEAAIAAgCIAEAAQADAAACgCQABgCAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgFACIgDACIgBABIgBAAIABgFIABgBIADgBIAFgBQADAAADABQADACACACQABACAAADQAAAEgBACIgFADIAGADQACACAAADQAAAEgCADQgCACgEABQgDACgDAAQgEAAgCgCg");
	this.shape_22.setTransform(-28.6,-0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AAKATIAAgOIgHAAIgBABIgCADIgDAGIgEAEIgIAAIAAgBIAGgHIAFgFIACgCIAAAAIgEgDIgEgCIgBgFQAAgDACgDQACgDADgCQADgBAEAAIANAAIAAAlgAgBgNIgDADIAAAEIAAAEIADACIAEABIAHAAIAAgQIgHAAQgBAAgBABQAAAAgBAAQAAAAAAAAQAAABgBAAg");
	this.shape_23.setTransform(-36.5,-0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AAJATIAAgTIgRAAIAAATIgHAAIAAglIAHAAIAAAQIARAAIAAgQIAHAAIAAAlg");
	this.shape_24.setTransform(-41.4,-0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AAKATIAAgTIgSAAIAAATIgHAAIAAglIAHAAIAAAQIASAAIAAgQIAGAAIAAAlg");
	this.shape_25.setTransform(-46.9,-0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgLAPQgEgGAAgJQAAgFACgFQADgEAEgDQAEgCADAAQAFAAADACQAEACACAEQACAEgBAEIAAADIgZAAQABAHADAEQADAEAGABIAGgBIAFgFIABAAIgBAGIgFACQgDACgEAAQgIgBgGgEgAgDgOIgEAEQgCADAAADIATAAIAAgBQgBgFgCgDQgCgDgEAAIgEACg");
	this.shape_26.setTransform(-52.3,-0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AAZAZIgCgHIgBgDIgBgBIgvAAIAAglIAHAAIAAAhIAOAAIAAghIAGAAIAAAhIAOAAIAAghIAHAAIAAAhIAFAAIAAAPg");
	this.shape_27.setTransform(-58.4,0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AgJASIgFgDIgBgGQAAgEADgDQADgCAFgBIAHgBIAFgBIABgCIAAgBQAAgEgCgDQgDgCgDAAQgDAAgDACQgDABgCACIgBAAIABgFIAEgDIAHgBQAFAAADACQADABABAEQACACAAAEIAAASIAAAEIABADIgGAAIgBgFQgCADgEABQgDACgDAAQgEAAgCgCgAgBABIgGAEQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADACADQACACADAAQABAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAIAFgEIACgEIAAgHIgKABg");
	this.shape_28.setTransform(-64.9,-0.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AAKATIAAgTIgSAAIAAATIgHAAIAAglIAHAAIAAAQIASAAIAAgQIAGAAIAAAlg");
	this.shape_29.setTransform(-70.2,-0.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgFARQgFgCgCgEQgDgEAAgHQAAgFADgFQACgEAFgDQAEgCAFAAIAGABIAEACIABAFIgBAAIgEgDIgGgBQgFAAgDAEQgDAFAAAGQAAAEABAEQACAEADACQACACAEAAQADAAADgBIAEgEIABAAIgBAGIgFACIgGABQgFAAgEgDg");
	this.shape_30.setTransform(-75.2,-0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AgKAbQgEgCgFgEQgEgDgDgFQgCgGAAgHQAAgGACgFQADgGAEgDQAEgEAFgBQAFgCAFAAQAFAAAFACQAFABAFAEQAEADACAFQADAGAAAGQAAAHgDAFQgCAGgEADQgFAEgEABQgGACgFAAQgEAAgGgBgAgLgUQgEADgDAFQgDAGAAAGQAAAHADAFQADAGAFADQAFADAFAAQAHAAAEgDQAEgDADgFQADgFAAgIQAAgGgDgFQgDgGgEgDQgFgDgGAAQgGAAgFADg");
	this.shape_31.setTransform(-81.5,-1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("AgBAKIABgIIgHAFIgCgDIAHgEIgHgCIACgEIAHAFIgBgJIADAAIgBAJIAHgFIACAEIgHACIAHAEIgCADIgHgFIABAIg");
	this.shape_32.setTransform(-87.3,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.8,-8,181.7,13.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0E0E0E","#191919","#0E0E0E"],[0,0.502,1],-114.6,-349.8,-114.6,384.6).s().p("Eh1PBBZMgABiCxMDqhAAAMAAACCxg");
	this.shape.setTransform(100.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-649.7,-418.5,1500.9,837);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAdIADgWIgSANIgGgLIATgJIgTgHIAGgMIASANIgDgWIAOAAIgEAWIASgNIAGAMIgTAHIATAJIgGALIgRgNIADAWg");
	this.shape.setTransform(205.9,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAvQgJgIAAgNQAAgJAFgGQADgGAHgDIANgEIAVgGIALgEQACgCAAgCIAAgBQAAgMgGgFQgGgGgJAAIgLACIgLAEQgFADgEAFIgCAAIABgRQAIgGAKgCQAKgDAIAAQAXAAAKAKQAKAKAAARIAAAyIABAKIABAKIgXAAIgEgPQgGAIgGAFQgHAEgKAAQgRAAgIgIgAgEAFQgHADgEAFQgDAEAAAHQAAAHAEAEQAEAFAIAAQAHAAAFgGQAGgFABgJIAAgVIgVAGg");
	this.shape_1.setTransform(195,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBOIAAiZIAbAAIAAASQAFgJAIgGQAJgFALAAQAUAAALAOQAKANAAAaQAAARgFAMQgGAMgKAHQgKAHgPAAQgJAAgHgDQgHgEgFgGIAAA8gAgLg4QgHAGgEAKQgDAKAAAMIAAACQAAALADAHQAEAHAFADQAGAEAHAAQAKAAAGgLQAHgJAAgTQAAgTgGgJQgFgKgLgBQgGABgGAFg");
	this.shape_2.setTransform(182,46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBOIAAiZIAbAAIAAASQAFgJAIgGQAJgFALAAQAUAAALAOQAKANAAAaQAAARgFAMQgGAMgKAHQgKAHgPAAQgJAAgHgDQgHgEgFgGIAAA8gAgLg4QgHAGgEAKQgDAKAAAMIAAACQAAALADAHQAEAHAFADQAGAEAHAAQAKAAAGgLQAHgJAAgTQAAgTgGgJQgFgKgLgBQgGABgGAFg");
	this.shape_3.setTransform(167.9,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAvQgJgIAAgNQAAgJAFgGQADgGAHgDIANgEIAVgGIAKgEQADgCAAgCIAAgBQAAgMgGgFQgFgGgKAAIgKACIgMAEQgFADgEAFIgCAAIABgRQAJgGAJgCQAKgDAIAAQAXAAAKAKQAKAKAAARIAAAyIABAKIABAKIgXAAIgEgPQgGAIgGAFQgHAEgLAAQgQAAgIgIgAgEAFQgIADgDAFQgDAEAAAHQAAAHAEAEQAFAFAHAAQAHAAAGgGQAFgFABgJIAAgVIgVAGg");
	this.shape_4.setTransform(154.3,44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBLIhYhtIgBAAIABBtIgTAAIAAiVIAZAAIBPBjIABAAIgBhjIATAAIAACVg");
	this.shape_5.setTransform(139.4,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAyQgLgGgIgLQgIgLgBgSIgMAAIAAAxIgcAAIAAhpIAcAAIAAArIAMAAQADgQAIgKQAHgKALgEQAKgFALAAQAMAAAMAFQALAGAIAMQAHAMABATQgBATgHAMQgIAMgLAGQgMAGgMAAQgMAAgKgFgAADgeQgEALAAATQAAAUAEAKQAHALAKAAQAKAAAGgLQAGgKABgUQgBgTgGgLQgGgKgKAAQgKAAgHAKg");
	this.shape_6.setTransform(115.5,44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAxQgNgGgIgMQgHgNgBgSQABgSAHgMQAIgMANgGQAMgGANAAQANAAAMAGQAMAGAIAMQAIAMAAASQAAASgIANQgIAMgMAGQgMAGgNAAQgNAAgMgGgAgRgdQgIAKABATQgBATAIALQAGALALAAQAMAAAHgLQAGgLABgTQgBgTgGgKQgHgLgMAAQgLAAgGALg");
	this.shape_7.setTransform(99.2,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyBOIAAiZIAbAAIAAASQAFgJAIgGQAJgFALAAQAUAAALAOQAKANAAAaQAAARgFAMQgGAMgKAHQgKAHgPAAQgJAAgHgDQgHgEgFgGIAAA8gAgLg4QgHAGgEAKQgDAKAAAMIAAACQAAALADAHQAEAHAFADQAGAEAHAAQAKAAAGgLQAHgJAAgTQAAgTgGgJQgFgKgLgBQgGABgGAFg");
	this.shape_8.setTransform(85.4,46.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNBNIAAhoIAbAAIAABogAgNgyIAAgaIAbAAIAAAag");
	this.shape_9.setTransform(74.5,41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPA1IgLgRIgLgSIgNgSIAAgDIAUgYIATgZIAZAAIgoArIATAZIARAWIAKAOIAAABgAgxA1IAAhpIAbAAIAABpg");
	this.shape_10.setTransform(65.5,44.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHA1IAAhpIAcAAIAABbIAeAAIAAhbIAbAAIAABbIAeAAIAAhbIAbAAIAABpg");
	this.shape_11.setTransform(49,44.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNBNIAAhoIAbAAIAABogAgNgyIAAgaIAbAAIAAAag");
	this.shape_12.setTransform(29.5,41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA0QgJgDgGgFIgDgUIADAAQAHAJAIAEQAIAEAJAAQAGgBADgCQAEgDACgEIABgIQAAgEgBgEQgCgEgEgDQgFgDgHAAIgMAAIACgNIAKAAQAIAAAEgGQAEgFgBgHQABgGgEgFQgFgEgHAAQgHAAgFACIgHAFIgDACIgDAAIACgPIAEgCIAKgDIAPgCQAKAAAIADQAJAEAFAGQAFAGAAAJQAAAJgFAGQgFAGgIADIAAAAQAJADAHAHQAGAGAAAKQAAAKgGAHQgGAHgKADQgJAEgLAAQgLAAgIgDg");
	this.shape_13.setTransform(20.7,44.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyBOIAAiZIAbAAIAAASQAFgJAIgGQAJgFALAAQAUAAALAOQAKANAAAaQAAARgFAMQgGAMgKAHQgKAHgPAAQgJAAgHgDQgHgEgFgGIAAA8gAgLg4QgHAGgEAKQgDAKAAAMIAAACQAAALADAHQAEAHAFADQAGAEAHAAQAKAAAGgLQAHgJAAgTQAAgTgGgJQgFgKgLgBQgGABgGAFg");
	this.shape_14.setTransform(152.1,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAxQgNgGgHgMQgIgMAAgSQAAgRAHgMQAHgMANgHQAMgHAQAAQAJAAAHACQAHABAFADIACAPIgDAAQgEgEgGgCIgLgBQgOAAgHAJQgIAIgDAPIAqAAIAAANIgqAAQACARAIAJQAIAJANABQAIAAAHgDQAHgDAEgFIADAAIgEARQgFAEgIACQgHACgKAAQgPAAgMgGg");
	this.shape_15.setTransform(139.4,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAdIAEgOIACgQIACgPIABgMIAcAAIgDAMIgGAQIgGAQIgEANg");
	this.shape_16.setTransform(129.8,10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgyBOIAAiZIAbAAIAAASQAFgJAIgGQAJgFALAAQAUAAALAOQAKANAAAaQAAARgFAMQgGAMgKAHQgKAHgPAAQgJAAgHgDQgHgEgFgGIAAA8gAgLg4QgHAGgEAKQgDAKAAAMIAAACQAAALADAHQAEAHAFADQAGAEAHAAQAKAAAGgLQAHgJAAgTQAAgTgGgJQgFgKgLgBQgGABgGAFg");
	this.shape_17.setTransform(119.6,20);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAxQgMgHgHgMQgHgMAAgSQAAgQAHgNQAIgMALgGQAMgHAMAAQAYAAALAMQALAMgBAVIAAAJIhEAAQABAKAEAJQAEAJAIAFQAHAGALAAQAJAAAHgDQAIgDAGgGIACAAIgDASQgGAFgJACQgJADgMAAQgQAAgNgGgAgLgiQgHAIgBANIArAAIAAgCQgBgMgFgHQgFgIgJAAQgJAAgGAIg");
	this.shape_18.setTransform(105.9,17.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNA1IAAhbIgdAAIAAgOIBVAAIAAAOIgdAAIAABbg");
	this.shape_19.setTransform(94.4,17.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUA1IAAgxIgnAAIAAAxIgbAAIAAhpIAbAAIAAArIAnAAIAAgrIAbAAIAABpg");
	this.shape_20.setTransform(82.3,17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_21.setTransform(71.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,0,198.6,56.9);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape.setTransform(34.4,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape_1.setTransform(21.3,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape_2.setTransform(8.3,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgnBGIAfg6IAcg6IhFAAIADgXIBgAAIAAAGIgPAgIgQAiIgRAjIgNAgg");
	this.shape_3.setTransform(-10,-14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AACBGIAAh1IgfAMIACgRIAogRIARAAIAACLg");
	this.shape_4.setTransform(-23.8,-14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgYBFQgMgEgHgJQgHgIgBgNQABgKAEgHQAEgIAHgFQAHgFAIgDIAAgBQgNgHgFgHQgFgIAAgLQAAgMAGgHQAHgIAKgEQALgEAKAAQAMAAAJAEQAKADAFAIQAGAHAAAKQAAAKgGAIQgGAIgLAFIAAABQAPAHAIAJQAJAKAAAPQAAAKgFAIQgFAHgHAFQgIAFgKADQgJACgIAAQgNAAgLgEgAgVAQQgGAHAAALQABAKAGAHQAHAGALAAQAKAAAHgGQAHgHAAgJQAAgLgIgHQgHgHgNgGQgJAFgGAHgAgGg3QgEACgDAEQgDAEAAAGQAAAHAFAFQAFAGAKAFQAJgEAEgGQAFgGAAgIQAAgIgGgFQgGgEgJgBQgDAAgEADg");
	this.shape_5.setTransform(-36.1,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-29.9,88.4,29.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.led();
	this.instance.parent = this;
	this.instance.setTransform(1.3,0,0.247,0.247,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,75,21.4), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape.setTransform(237.9,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAqQgKgFgGgLQgGgKgBgQQABgNAGgLQAFgLALgFQALgGAMAAQAJAAAGACQAGABADADIADAMIgDAAQgEgEgGgCQgFgDgGAAQgNABgIAKQgIAJAAARQAAAQAJALQAIAKAMAAQAIAAAGgDQAGgCAEgFIACAAIgDAMQgEAEgHACQgGACgJAAQgNAAgKgFg");
	this.shape_1.setTransform(230.2,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_2.setTransform(216.9,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAtIgKgOIgMgQIgMgQIAAgBIATgVIARgVIARAAIgjAmIAJANIAMAQIANANIAIAIIAAABgAgnAtIAAhZIASAAIAABZg");
	this.shape_3.setTransform(209.4,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA/QgJgDgHgEIgCgTIABAAQAIAFAIADQAIAEAKAAQAGAAAFgDQAHgCADgGQAEgGABgJQgBgLgGgHQgHgGgLAAIgKABIgJAEIgMgCIAIhDIBDAAIgDAVIgxAAIgDAeIAJgCIAIgBQANAAAJAFQALAEAFAIQAFAJAAANQAAAPgGAKQgIAJgKAFQgMAFgNAAQgJAAgJgDg");
	this.shape_4.setTransform(192,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA+QgMgGgGgLQgHgLAAgRQABgSAFgOQAGgPALgLQAKgLAMgGQAMgHAPgBIAKAKQgOADgLAGQgLAIgGAJQgIALgCAMIABAAIAKgGQAGgCAGAAQAKAAAKAEQAJAEAGAJQAHAIAAAOQAAAMgHALQgFAJgLAGQgKAFgNAAQgNAAgLgFgAgIABQgGADgCAHQgEAFAAAKQAAAIADAGQADAGAFADQAFAEAFAAQAJgBAGgHQAFgIABgLQgBgOgFgHQgGgGgIAAQgGAAgEACg");
	this.shape_5.setTransform(179.7,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AABBBIAAhsIgcAKIADgQIAkgOIAPAAIAACAg");
	this.shape_6.setTransform(166.4,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAGIAAgLIBcAAIAAALg");
	this.shape_7.setTransform(150.5,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYA6QgLgHgHgPQgGgOAAgVQAAgUAGgPQAHgPALgJQALgIANAAQAPAAALAIQALAJAGAPQAGAPAAAUQAAAVgGAOQgGAPgLAHQgLAJgPAAQgNAAgLgJgAgOgwQgHAHgCANQgEANAAAQQAAAaAHAOQAIAOAMABQANgBAIgOQAGgOABgaQAAgQgEgNQgDgNgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_8.setTransform(134.2,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAZIAEgSIADgSIACgNIASAAIgCAKIgEANIgGAOIgEAMg");
	this.shape_9.setTransform(124.9,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBCIAAgHIAWgVQAVgVAKgQQAKgQAAgNQAAgHgCgFQgBgFgGgEQgEgDgHAAQgIAAgHADQgHADgHAHIgCAAIACgPQAGgFAIgDQAIgDAKAAQANAAAIAFQAJAEAEAIQAFAIAAAKQAAALgFAKQgFAJgKALQgKALgOAPIgNALIAAABIAgAAIATAAIAOgBIACAAIgHASg");
	this.shape_10.setTransform(116.1,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAZIAEgSIADgSIACgNIASAAIgCAKIgEANIgGAOIgEAMg");
	this.shape_11.setTransform(101.9,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_12.setTransform(95.7,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAqQgKgFgGgLQgGgKgBgQQABgNAGgLQAFgLALgFQALgGAMAAQAJAAAGACQAGABADADIADAMIgDAAQgEgEgGgCQgFgDgGAAQgNABgIAKQgIAJAAARQAAAQAJALQAIAKAMAAQAIAAAGgDQAGgCAEgFIACAAIgDAMQgEAEgHACQgGACgJAAQgNAAgKgFg");
	this.shape_13.setTransform(88,15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_14.setTransform(74.7,19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPAtIgKgOIgMgQIgMgQIAAgBIASgVIARgVIASAAIgjAmIAJANIAMAQIANANIAIAIIAAABgAgnAtIAAhZIASAAIAABZg");
	this.shape_15.setTransform(67.2,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHBBIAAgjIg7AAIAAgLIA/hSIAWAAIAABLIAUAAIgCASIgSAAIAAAjgAgeALIAAABIAlAAIAAgyIgBAAg");
	this.shape_16.setTransform(49.9,13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkA3QAQgCAMgIQALgHAHgKQAHgLABgLIgBAAQgEAEgHACQgGACgGAAQgKABgJgFQgJgEgGgIQgGgIAAgOQAAgNAGgJQAGgJALgGQALgFAMAAQANAAALAGQALAFAGAMQAGALAAARQAAASgGAPQgGAPgKAJQgKALgNAGQgMAHgOABgAgOgsQgGAHAAAMQAAAMAGAHQAFAGAIAAQAKAAAGgGQAFgIABgLQgBgNgFgGQgGgIgJAAQgJABgFAHg");
	this.shape_17.setTransform(37.3,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AABBBIAAhsIgcAKIADgQIAkgOIAPAAIAACAg");
	this.shape_18.setTransform(24.2,13.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtAGIAAgLIBcAAIAAALg");
	this.shape_19.setTransform(8.3,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXA/QgKgDgGgFIgCgQIACAAQAHAGAIAEQAJADAJAAQAHAAAGgDQAHgDAFgGQAEgGAAgLQAAgNgHgHQgHgHgNAAIgLABIgKAEIgJgBIAIhBIA9AAIgCARIguAAIgFAiIAIgCIAKgBQAMAAAKAFQAKAGAFAIQAFAJAAAMQAAAPgHAJQgGAJgMAFQgKAFgMAAQgKAAgIgDg");
	this.shape_20.setTransform(-8.1,13.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZIAEgSIADgSIACgNIASAAIgCAKIgEANIgGAOIgEAMg");
	this.shape_21.setTransform(-17.3,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvBCIAAgHIAWgVQAVgVAKgQQAKgQAAgNQAAgHgCgFQgBgFgGgEQgEgDgHAAQgIAAgHADQgHADgHAHIgCAAIACgPQAGgFAIgDQAIgDAKAAQANAAAIAFQAJAEAEAIQAFAIAAAKQAAALgFAKQgFAJgKALQgKALgOAPIgNALIAAABIAgAAIATAAIAOgBIACAAIgIASg");
	this.shape_22.setTransform(-26.1,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,0,282.5,26.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBAIgzh/IAcAAIAmBjIABAAIAmhjIASAAIgzB/g");
	this.shape.setTransform(233.5,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_1.setTransform(223.9,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBAIAAhyIggAAIAAgNIBaAAIAAANIghAAIAAByg");
	this.shape_2.setTransform(215.7,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOA/QgNgFgLgHQgKgJgGgNQgFgMAAgRQAAgPAGgNQAGgNAKgJQALgIAOgEQAMgEAOAAIAPABIANADIALAGIACARIgDAAQgIgHgJgDQgIgCgKgBQgOABgKAGQgLAGgGAMQgHAMAAAPQAAAQAHAMQAGALALAGQAKAGANAAQAOAAAKgEQAKgDAHgGIADAAIgFASQgIAFgLADQgLADgMAAQgOAAgNgEg");
	this.shape_3.setTransform(203.9,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBBIgRgtIgsAAIgTAtIgSAAIA3h+IAUgDIA0CBgAANAGIgQgsIgBAAIgSAsIAjAAg");
	this.shape_4.setTransform(190.1,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBAIAAg5IgthGIAgAAIAfA1IABAAIAfg1IASAAIgrBFIAAA6g");
	this.shape_5.setTransform(178.5,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBAIgUgdIgbgmIAAgCIAbgdIAZgdIAVAAIgxA0IAXAhIAUAZIAPAQIAAABgAg2BAIAAh/IAaAAIAAB/g");
	this.shape_6.setTransform(167.3,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBBQgHgCgFgDQgHgEgEgDIgDgXIACAAQAKAMAKAEQAKAGAJAAQAHAAAFgGQAFgEABgJQgBgJgGgHQgIgHgJgGQgJgEgHgFQgGgFgDgGQgCgHAAgJQAAgIADgHQAEgGAGgEQAGgFAHgCQAHgCAFAAQALAAAGACIALAEIACAQIgDAAQgFgEgGgDQgGgCgHAAQgEAAgEABQgEACgCAEQgDAEAAAGQAAAEABAEQACAEAEADIALAIQALAGAHAHQAIAEADAIQAEAIAAAJQAAAOgGAIQgGAIgKAEQgKAEgKAAQgHAAgIgCg");
	this.shape_7.setTransform(154.6,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASAtIAAg+IgqA+IgRAAIAAhaIAXAAIAAA8IAog8IAUAAIAABag");
	this.shape_8.setTransform(138.3,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAtIAAgpIgiAAIAAApIgXAAIAAhaIAXAAIAAAlIAiAAIAAglIAYAAIAABag");
	this.shape_9.setTransform(126.5,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBDIAMgXIAKgXIglhXIAbAAIAWA+IAAAAIAWg+IASAAIg2CFg");
	this.shape_10.setTransform(115.8,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAtIAAhaIA8AAIgBAMIgjAAIAABOg");
	this.shape_11.setTransform(107.4,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAtIAAg+IgqA+IgRAAIAAhaIAXAAIAAA8IAog8IAUAAIAABag");
	this.shape_12.setTransform(96.8,23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAtIAAhaIAeAAQALABAIACQAIADAFAFQAEAFAAAJQAAAGgEAFQgFAEgHADIAAABQAKABAGAFQAHAGAAAIQAAANgKAGQgLAIgRgBgAgMAiIAIAAQAHgBAEgCQADgCACgDIABgIIgBgHQgCgDgDgBQgEgDgHAAIgIAAgAgMgHIAFAAQAGAAACgDQADgBABgDIACgGQAAgFgDgDQgDgEgIgBIgFAAg");
	this.shape_13.setTransform(86.3,23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApA9IgEgQIgEgJIgCgEIg9AAIgCAEIgEAJQgDAHAAAJIgMAAIAAgpIALAAIAdhNIATgDIAgBQIAMAAIAAApgAAOAUIgTg3IAAAAIgTA3IAmAAg");
	this.shape_14.setTransform(75.4,24.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLBCIAAhaIAXAAIAABagAgLgrIAAgXIAXAAIAAAXg");
	this.shape_15.setTransform(61.8,21.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkAtIAAhaIAeAAQALABAIACQAIADAFAFQAEAFAAAJQAAAGgEAFQgFAEgHADIAAABQAKABAGAFQAHAGAAAIQAAANgKAGQgLAIgRgBgAgMAiIAIAAQAHgBAEgCQADgCACgDIABgIIgBgHQgCgDgDgBQgEgDgHAAIgIAAgAgMgHIAFAAQAGAAACgDQADgBABgDIACgGQAAgFgDgDQgDgEgIgBIgFAAg");
	this.shape_16.setTransform(54.3,23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAqQgKgFgIgLQgGgLAAgPQAAgQAGgKQAIgKAKgGQALgEALAAQALAAAKAEQALAGAGAKQAIAKAAAQQAAAPgIALQgGALgLAFQgKAGgLgBQgLABgLgGgAgPgZQgGAJAAAQQAAAQAGAKQAGAJAJAAQALAAAFgJQAHgKgBgQQABgQgHgJQgFgKgLAAQgJAAgGAKg");
	this.shape_17.setTransform(43.1,23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARAtIAAgpIgiAAIAAApIgXAAIAAhaIAXAAIAAAlIAiAAIAAglIAYAAIAABag");
	this.shape_18.setTransform(31.3,23.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAtIAAg+IgqA+IgRAAIAAhaIAXAAIAAA8IAog8IAUAAIAABag");
	this.shape_19.setTransform(19.7,23.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAtQgHgDgGgEIgCgRIACAAQAGAHAHAEQAHADAIAAQAEAAAEgCQADgCABgEIACgHIgCgHQgBgEgEgCQgEgCgGAAIgKAAIABgMIAJAAQAHAAADgFQAEgEgBgGQABgGgEgDQgDgFgHAAQgGAAgEACIgGAFIgDACIgCAAIACgNIADgCIAIgDQAGgCAHABQAJAAAHACQAIADAEAGQAEAFAAAIQAAAHgEAFQgEAFgIADIAAABQAJABAFAHQAFAFAAAJQAAAJgFAFQgFAGgIADQgIADgJAAQgKAAgHgCg");
	this.shape_20.setTransform(9.4,23.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARAtIAAgpIgiAAIAAApIgXAAIAAhaIAXAAIAAAlIAiAAIAAglIAYAAIAABag");
	this.shape_21.setTransform(-0.4,23.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAqQgLgGgGgKQgGgKAAgQQAAgOAHgLQAGgKAKgGQAKgFALAAQAUAAAJAKQAKAKAAASIAAAHIg7AAQAAAJAEAIQADAJAHAEQAGAEAKABQAHgBAHgCQAHgCAEgGIADAAIgEAQQgFAEgHACQgIACgKAAQgOABgLgGgAgKgdQgGAGgBAMIAlAAIAAgCQAAgLgEgFQgFgHgIAAQgHAAgGAHg");
	this.shape_22.setTransform(-11.5,23.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgrBAIAAh/IBNAAIAAANIgzAAIAAAgIAKAAQAOABALAEQAMAEAGAJQAIAJgBAOQAAAPgGAIQgHAKgLAEQgLAFgOgBgAgRAzIAHAAQAMAAAIgGQAHgIAAgNQAAgPgIgIQgHgGgMAAIgHAAg");
	this.shape_23.setTransform(-22.3,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,8,272.8,26.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.cx5, null, new cjs.Matrix2D(1,0,0,-1,-57.6,124.6)).s().p("AisDJQhIhTAAh2QAAh1BIhTQBIhTBkgBQBlABBHBTQBIBTAAB1QAAB2hIBTQhHBThlAAQhkAAhIhTg");
	this.shape.setTransform(24.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,56.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,1248,10);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cx5new();
	this.instance.parent = this;
	this.instance.setTransform(176,400.2,0.565,0.565,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176,61,149.8,339.2);


(lib.sta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,158).s().p("Aj2J4IrkHyIFpsvIt3heIMimHIprqDINiDXIg+t7IINLSIINrSIg+N7INjjXIpsKDIMjGHIt4BeIFqMvIrknyIj3Nag");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)","#000000","#000000"],[0,1,1,1],0,0,0,0,0,409.4).s().p("AjeDfMg8egDeMA8egDfMADeg8eMADfA8eMA8eADeMg8eADfMgDfA8eg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409.3,-409.3,818.7,818.6);


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.dawn, null, new cjs.Matrix2D(1,0,0,1,-350,-200.8)).s().p("Eg2rAG6IAAsnIACAAIANABQAPABAPgBQAEAAADgBIAHgEQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAIgBAFgHQAFgHAIgHIAEgBIADgBIAygBIAUAAQAEgBABAFQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAwACIAFABIAyABQANAAAMgCIANgBQANAAAMgEIAHgCIADAAIAZgEQASgBAQADIANACIAEACQAEACAHAAQALgBAIAFIADABQAMACAGgKQAIgMAPgHQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAABQAKABAIAGQAFAEAHAAIAGAAQAGAAAEACQAIAFAJAAIBIgCIADgBQAMgEAGgGQAEgDAFAAQAdABAagGIAIgCQAKgCAFADIAFABQAPAEAKAFIAFABQATABAQgDIAMAAQAaABAWgHQAFgBABADQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAZAEAZAAIA1gBIACgBIBfgBIAZABIADABQAHAFAMgBQAGgBAFACIAJABIAcAAIAKABIAKACIAeADIAWABQAPAAAPgCIAAgDQgBgNAHgDIAFgBQAOgBANACIAKACQAKAAAKADIAKACQAZAGAZABQAKABAKADIAKADQAHABAGAEQAQAKAOACIAJACIADAAIAhACIAJACQAlAHAmgCQAMgBALACIAPABIARABIADABIAWACIADABQAHAHAKADIAIAEQAUAMAWAGIAJACIAVAHQAQAFAPACQAOACAFgIIABgEQACgIAHgDQAOgEAOgCQAFgBAFACQAQAIARADQgHAGgDABQACAFAGgEIAEgEIAJgHQAUgQAaADIAHACIAGABQAIAEAMgBQAagCAXgFIANAAQAXACARgOQAIgGAJgBQATAAAQgEQANgCANgFIAEgBIBWgBQAHAAAIgDIAHgCQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAFgKANgBIAFgCQAXgNAbgEIAqgHIANgCIACgBQAYgPAdgBQAfgBAaAJIAFABQAQAHARACQANABAHAEQAKAGASAAIAWABIAXACIACAAQAgAIAhALIARAEQAPADAGgGIAFgCIACgBQAVgOAaAAIAIgBQANgBAMABIAFABIAwABIAggBIADgBQAggLAjAAIAXgBIACgBIAPgGQAOgHAMAKQAVARAaAHIACABQAIAFAMACQAHABAIgBQARgBAQADIAHABQAFAAADACIAFABQAGAAADADQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAOgNAUgHIAKgEIAWgIIAFAAQAaAHAbgJIAHAAQAMABAGgDIAEgBIAaABQAEAAAGADIAEACQASAHAWgCIAbgCQAEAAAEgCQAZgKAeAAQAQAAAQACQAQACAPgFIALgDIAXgJQACAAACgCQAMgJAXACIAKABIA3AHIAFABIANABQAFAAADABIAFACQAuAOAwASIArARIAJAEIAOAFQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQAXgKAZgBQAIgBADADIAEACIAMACQAOAEARgBQAXgBAYABIACABQAKADALABIAEACQAGACAHAAQAWgBAUgDIANAAQANAAAMADIAHACQAiAIAiAPIANAFIAJAEQAPAGAQADQAKADAMAAQANAAAMgBIAUgBQAXgBAWAEIAPACQAdgBAcACQAFgFAIACQAaAHAdgBIAFAAIAUAEIAFABQAaAEAZAIQAEABAFAAQAXABAWACIAFABIACAAQAUABAVgBQAqgBAoALQAQAFARAAQAhAAAggDIAbgBQAMAAAKgCQAggEAiACQAMABAKgDIAHgBIAQgCIAKgBQANgCAJgFQAIgFAMABIAoAFIAMABQARABAQADIAKACIAMACQArgCAoAEQAKABALADIAJACQAKADAKABQAUADAUAAIC3gBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQAJgHAMgBIACgBIAHAAQARgEATgBQAdgEAdAAIAGgBQAWAAAXgEIARgDQAWgEAXgBQAHAAAFgBQAxgJAxgHIAhgGQAvgKAvAAQAfgBAeABQAOABAOAHQAEADAFAAQAuAJAxAAIAWABIAeABIBiAFQAVABATADQASAEAUAAQAZABAZAEQAHACAHAAIBOABIAMABQAUAFAUgCIANgBIAMgDIAUgDQAvgEAwACIAKAAIA1ACQAFABAEACQAHADAJgBQAPgCAOACIAALeg");
	this.shape.setTransform(275,229.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(210,210,194,0)","#F6E0BF","#111111"],[0.212,0.396,0.529],0,-370.1,0,190.5).s().p("Eg2rA4OMAAAhwbMBtXAAAMAAABwbg");
	this.shape_1.setTransform(275,345.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-14.5,700,719.7);


(lib.salon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.salon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,705,290);


(lib.loonew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mlogonrew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,112);


(lib.foor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgcx5();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,574,90);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgDAjIAAgvIAHAAIAAAvgAAEgZIAAgJIAIAAIAAAJgAgLgZIAAgJIAIAAIAAAJg");
	this.shape.setTransform(104,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgDAjIAAgvIAHAAIAAAvgAgDgZIAAgJIAHAAIAAAJg");
	this.shape_1.setTransform(100.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAUAfIgCgIIgDgEIAAgCIglAAIAAgvIAIAAIAAArIAWAAIAAgrIAJAAIAAArIAFAAIAAASg");
	this.shape_2.setTransform(95.6,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgMAXQgEgCgBgDQgBgDgBgEQABgFADgDQADgDAIgBIAIgCIAFgCIABgBIAAgBQAAgHgCgCQgDgDgFAAIgHACQgDABgDADIgCAAIACgGQACgCAEgBQAEgCADAAQAIAAADACQAEACACAEQACADgBAGIAAAWIABAFIAAAEIgGAAIgCgHQgDAEgEACQgEACgEAAQgFAAgDgCgAgCACQgFABgCADQgBACAAADQAAAEACACQACADAFAAIAFgCIAEgEQACgCAAgDIAAgKIgMADg");
	this.shape_3.setTransform(88.8,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgDAYIAAgqIgPAAIAAgFIAlAAIAAAFIgPAAIAAAqg");
	this.shape_4.setTransform(83.2,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAJAYIgHgHIgGgJIgHgIIAAAAIALgMIAJgLIAIAAIgTAVIAEAFIAHAJIAGAHIAFAEIAAABgAgUAYIAAgvIAIAAIAAAvg");
	this.shape_5.setTransform(78.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgNASQgHgGAAgMQAAgGADgGQAEgGAFgDQAFgDAEAAQAHAAAEADQAFACACAFQACAEAAAGIAAADIggAAQAAAJAEAGQAFAFAHAAQAEAAAEgBQADgCADgDIABAAIgBAHIgGADQgEACgFAAQgLAAgGgHgAgEgSQgDACgCADQgCADAAAFIAXAAIAAgBQAAgHgDgDQgDgDgFAAIgFABg");
	this.shape_6.setTransform(71.6,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AAOAYIgOglIgBAAIgPAlIgGAAIAUguIAFgBIAUAvg");
	this.shape_7.setTransform(65.6,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AAMAYIAAgqIgXAAIAAAqIgIAAIAAgvIAnAAIAAAvg");
	this.shape_8.setTransform(59.4,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AAUAYIgDgjIgRAfIgCAAIgQgfIgFAjIgFAAIAGgvIAGAAIAQAgIABAAIARggIAFAAIAGAvg");
	this.shape_9.setTransform(52.3,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgHAXQgFgBgDgDIgGgIQgBgFAAgGQAAgGABgEIAGgIQADgDAFgBIAHgCQAEAAAEACQAFABADADQAEADACAFQABAEAAAGQAAAGgBAFQgCAEgEAEQgDADgFABQgEACgEAAIgHgCgAgGgRQgEACgCAFQgCAEABAGQgBAGACAFQACAEAEADQADACADAAQAEAAADgCQAEgDACgEQACgFAAgGQAAgGgCgEQgCgFgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_10.setTransform(45,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AAJAYIgHgHIgGgJIgGgIIAAAAIAKgMIAJgLIAIAAIgTAVIAEAFIAHAJIAHAHIAEAEIAAABgAgTAYIAAgvIAHAAIAAAvg");
	this.shape_11.setTransform(39,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AAXAfIgCgIIgCgEIgBgCIgjAAIgBACIgCAEIgCAIIgDAAIAAgSIAFAAIASgqIAFgBIASArIAFAAIAAASgAAMANIgMggIgBAAIgMAgIAZAAg");
	this.shape_12.setTransform(28.8,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgDAjIAAgvIAHAAIAAAvgAgDgZIAAgJIAHAAIAAAJg");
	this.shape_13.setTransform(23.9,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgRAYIAAgvIAPAAQAIAAAFAEQAEADAAAGIgBAEIgDADIgDACIgBAAIAAABIABAAIAFABIAEADQABADAAADQAAAGgEAEQgFAEgJAAgAgJATIAJAAQAFAAACgCQADgCAAgFQAAgEgDgDQgCgCgFAAIgJAAgAgJgCIAHAAQAEAAACgCQADgCAAgEQAAgEgDgCQgCgCgEAAIgHAAg");
	this.shape_14.setTransform(19.4,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgQAYIAAgvIAIAAIAAARIAFAAQAJAAAGAEQAEADABAHQgBAIgEAEQgGAEgJAAgAgIATIAFAAQAGAAACgDQADgDABgFQgBgFgDgDQgCgCgGAAIgFAAg");
	this.shape_15.setTransform(10,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgDAYIAAgqIgPAAIAAgFIAlAAIAAAFIgPAAIAAAqg");
	this.shape_16.setTransform(4.4,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AAMAYIAAglIgbAlIgEAAIAAgvIAIAAIAAAiIAYgiIAHAAIAAAvg");
	this.shape_17.setTransform(-1.6,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AAYAYIgGgHIgGgJIgHgIIAAAAIAKgMIAJgLIAIAAIgTAVIAGAFIAGAJIAGAHIAEAEIAAABgAgDAYIAAgvIAHAAIAAAvgAgiAYIAAgBIAEgEIAGgHIAHgJIAFgFIgTgVIAJAAIAIALIAKAMIAAAAIgGAIIgHAJIgFAHg");
	this.shape_18.setTransform(-9,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgNASQgHgGAAgMQAAgGADgGQAEgGAFgDQAFgDAEAAQAHAAAEADQAFACACAFQACAEAAAGIAAADIggAAQAAAJAEAGQAFAFAHAAQAEAAAEgBQADgCADgDIABAAIgBAHIgGADQgEACgFAAQgLAAgGgHgAgEgSQgDACgCADQgCADAAAFIAXAAIAAgBQAAgHgDgDQgDgDgFAAIgFABg");
	this.shape_19.setTransform(-16,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AAOAYIgOglIgBAAIgPAlIgGAAIAUguIAFgBIAUAvg");
	this.shape_20.setTransform(-22,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgNAXQgDgCgBgDQgBgDAAgEQgBgFAEgDQAEgDAGgBIAJgCIAFgCIABgBIAAgBQAAgHgCgCQgDgDgEAAIgIACQgEABgDADIgBAAIABgGQADgCAEgBQAEgCAEAAQAGAAAEACQAEACACAEQABADABAGIAAAWIAAAFIAAAEIgHAAIgBgHQgDAEgEACQgEACgEAAQgFAAgEgCgAgCACQgEABgCADQgCACAAADQAAAEACACQACADAFAAIAEgCIAFgEQACgCAAgDIAAgKIgMADg");
	this.shape_21.setTransform(-28,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AgJAXIgGgDIgBgIIABAAQADAEAEACQADACAEAAQAEAAADgDQADgCAAgFQAAgEgDgDQgDgCgFAAIgFAAIABgDIAEAAQAEAAADgCQACgCAAgFQAAgEgCgCQgCgCgDAAIgGABIgFACIgBACIgBAAIABgGIACgBIAEgCIAGgBQAEAAAEACQADABACADQACADAAAEQAAAEgCACQgCADgDABIAAABQAEABADADQACACAAAFQAAAEgCADQgCADgFACQgEACgEAAIgJgCg");
	this.shape_22.setTransform(-33.8,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AAMAYIAAgSIgIAAIgBACIgDAEIgEAGIgFAGIgKAAIAAgBIAIgIIAFgHIADgDIAAgBQgDAAgDgCQgCgCgBgCQgCgCAAgEQAAgEADgEQACgDAEgCQAEgCAEAAIARAAIAAAvgAgBgRQgCACgCACIgBAFIABAFIAEADQABABADAAIAJAAIAAgTIgJAAQgDAAgBABg");
	this.shape_23.setTransform(-43.1,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AAMAYIAAgXIgXAAIAAAXIgIAAIAAgvIAIAAIAAAUIAXAAIAAgUIAIAAIAAAvg");
	this.shape_24.setTransform(-49.1,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AAMAYIAAgXIgXAAIAAAXIgIAAIAAgvIAIAAIAAAUIAXAAIAAgUIAIAAIAAAvg");
	this.shape_25.setTransform(-55.8,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgNASQgHgGAAgMQAAgGADgGQAEgGAFgDQAFgDAEAAQAHAAAEADQAFACACAFQACAEAAAGIAAADIggAAQAAAJAEAGQAFAFAHAAQAEAAAEgBQADgCADgDIABAAIgBAHIgGADQgEACgFAAQgLAAgGgHgAgEgSQgDACgCADQgCADAAAFIAXAAIAAgBQAAgHgDgDQgDgDgFAAIgFABg");
	this.shape_26.setTransform(-62.2,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AAfAfIgCgIIgCgEIgBgCIg7AAIAAgvIAIAAIAAArIATAAIAAgrIAHAAIAAArIASAAIAAgrIAJAAIAAArIAGAAIAAASg");
	this.shape_27.setTransform(-69.5,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AgNAXQgCgCgCgDQgCgDABgEQgBgFAEgDQAEgDAGgBIAJgCIAFgCIABgBIAAgBQABgHgDgCQgDgDgFAAIgHACQgDABgEADIgBAAIABgGQADgCAEgBQAEgCADAAQAHAAAEACQAEACACAEQABADAAAGIAAAWIABAFIAAAEIgHAAIgBgHQgDAEgEACQgEACgEAAQgFAAgEgCgAgCACQgEABgCADQgCACAAADQAAAEACACQACADAFAAIAEgCIAFgEQACgCAAgDIAAgKIgMADg");
	this.shape_28.setTransform(-77.4,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AAMAYIAAgXIgXAAIAAAXIgIAAIAAgvIAIAAIAAAUIAXAAIAAgUIAIAAIAAAvg");
	this.shape_29.setTransform(-83.8,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgHAWQgFgDgDgFQgDgGAAgIQAAgGADgGQADgGAFgDQAGgDAFAAIAIABIAGACIABAGIgBAAIgGgDIgHgBQgGAAgFAFQgDAFAAAJQAAAGACAEQABAFAEACQADADAFAAQAEAAADgCIAGgDIABAAIgCAFIgGAEIgIABQgFAAgGgDg");
	this.shape_30.setTransform(-89.8,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AgMAhQgHgCgFgEQgFgFgDgGQgDgHAAgJQAAgIADgGQADgHAFgEQAFgFAHgCQAGgCAGAAQAGAAAHACQAGACAGAEQAFAEADAHQADAHAAAIQAAAJgDAGQgDAHgFAFQgFAEgHACQgGACgHAAQgFAAgHgCgAgNgZQgGAEgDAGQgEAGAAAJQAAAJAEAGQADAHAGAEQAGAEAHAAQAIAAAGgEQAGgEADgGQADgHAAgJQAAgIgDgGQgDgHgHgEQgGgEgHAAQgHAAgGAEg");
	this.shape_31.setTransform(-97.5,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("AgCANIABgKIgIAGIgDgFIAJgEIgJgDIADgFIAIAGIgBgKIAFAAIgBAKIAIgGIADAFIgJADIAJAEIgDAFIgIgGIABAKg");
	this.shape_32.setTransform(-104.5,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-8,216.7,16);


(lib.Symbol26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape_6.setTransform(34.4,-14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape_7.setTransform(21.3,-14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape_8.setTransform(8.3,-14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgYBFQgMgEgHgJQgHgIgBgNQABgKAEgHQAEgIAHgFQAHgFAIgDIAAgBQgNgHgFgHQgFgIAAgLQAAgMAGgHQAHgIAKgEQALgEAKAAQAMAAAJAEQAKADAFAIQAGAHAAAKQAAAKgGAIQgGAIgLAFIAAABQAPAHAIAJQAJAKAAAPQAAAKgFAIQgFAHgHAFQgIAFgKADQgJACgIAAQgNAAgLgEgAgVAQQgGAHAAALQABAKAGAHQAHAGALAAQAKAAAHgGQAHgHAAgJQAAgLgIgHQgHgHgNgGQgJAFgGAHgAgGg3QgEACgDAEQgDAEAAAGQAAAHAFAFQAFAGAKAFQAJgEAEgGQAFgGAAgIQAAgIgGgFQgGgEgJgBQgDAAgEADg");
	this.shape_9.setTransform(-10,-14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgaBGQgKgDgIgFIgDgVIADAAQAHAGAJAEQAKADAKAAQAIAAAFgDQAHgDAEgFQAEgGAAgIQAAgOgJgGQgJgGgOAAIgIAAIABgPIADAAQARAAAIgGQAHgGAAgKQAAgKgGgGQgFgFgKAAQgHAAgHACQgIACgGAEIgCAAIACgRQAHgEAJgCQAIgCAJAAQALAAAKAEQAKAEAGAIQAGAHAAAMQAAALgFAIQgEAIgKAEIAAABQAKAEAHAHQAGAIABAPQgBAPgHAKQgHAJgMAFQgMAFgOAAQgLAAgKgDg");
	this.shape_10.setTransform(-23.2,-14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgYBFQgMgEgHgJQgHgIgBgNQABgKAEgHQAEgIAHgFQAHgFAIgDIAAgBQgNgHgFgHQgFgIAAgLQAAgMAGgHQAHgIAKgEQALgEAKAAQAMAAAJAEQAKADAFAIQAGAHAAAKQAAAKgGAIQgGAIgLAFIAAABQAPAHAIAJQAJAKAAAPQAAAKgFAIQgFAHgHAFQgIAFgKADQgJACgIAAQgNAAgLgEgAgVAQQgGAHAAALQABAKAGAHQAHAGALAAQAKAAAHgGQAHgHAAgJQAAgLgIgHQgHgHgNgGQgJAFgGAHgAgGg3QgEACgDAEQgDAEAAAGQAAAHAFAFQAFAGAKAFQAJgEAEgGQAFgGAAgIQAAgIgGgFQgGgEgJgBQgDAAgEADg");
	this.shape_11.setTransform(-36.1,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-29.9,88.4,29.4);


(lib.Symbol18copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjA0IgCgMIgDgHIgBgDIg5AAIgBADIgDAHIgDAMIgHAAIAAgfIAIAAIAdhGIAMgCIAbBIIAJAAIAAAfgAAQAVIgRg3IgBAAIgVA3IAnAAg");
	this.shape.setTransform(-89.4,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_1.setTransform(-95.6,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbApIAAhRIAYAAQAHAAAGACQAGACADAEQAEAEAAAHQAAAHgEAEQgEAFgIACIAAAAIAKADQAFACADAEQADAEAAAGQAAAJgEAGQgFAFgHACQgGADgHAAgAgLAgIAHAAQAIAAAEgEQAEgEAAgIQAAgHgFgEQgFgEgHAAIgGAAgAgLgGIAGAAQAFAAAEgDQAEgEAAgGQAAgGgDgDQgEgDgGAAIgGAAg");
	this.shape_2.setTransform(-100.9,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASApIAAgmIgkAAIAAAmIgQAAIAAhRIAQAAIAAAiIAkAAIAAgiIAQAAIAABRg");
	this.shape_3.setTransform(102.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaApIAAhRIAYAAQAIAAAHACQAGADAEAFQAEAGAAAJQAAAIgEAGQgEAEgHACQgHADgHAAIgIAAIAAAhgAgKAAIAFAAQAHAAAEgDQAFgEAAgJQAAgIgFgEQgEgEgHABIgFAAg");
	this.shape_4.setTransform(94.6,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUApIAAhRIAqAAIAAAJIgaAAIAABIg");
	this.shape_5.setTransform(88.5,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag4B8QgZgRgOgfQgOgfAAgrQAAgrAOggQAOggAZgSQAYgSAgAAQAhAAAZASQAZASANAgQAOAgAAArQAAArgOAfQgOAfgYARQgZARghABQgfgBgZgRgAgbhfQgMANgGAZQgGAZAAAiQAAAzAOAcQANAcAYAAQAZAAANgcQANgcABgzQAAgigGgZQgGgZgMgNQgLgOgRAAQgQAAgLAOg");
	this.shape_6.setTransform(67.2,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag4B8QgZgRgOgfQgOgfAAgrQAAgrAOggQAOggAZgSQAYgSAgAAQAhAAAZASQAZASANAgQAOAgAAArQAAArgOAfQgOAfgYARQgZARghABQgfgBgZgRgAgbhfQgMANgGAZQgGAZAAAiQAAAzAOAcQANAcAYAAQAZAAANgcQANgcABgzQAAgigGgZQgGgZgMgNQgLgOgRAAQgQAAgLAOg");
	this.shape_7.setTransform(41.9,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhNBzQAhgEAZgQQAZgPAOgWQAQgVACgXIgBAAQgKAIgNAEQgNAEgPAAQgUAAgUgIQgTgJgNgRQgNgTAAgeQAAgaAOgUQANgTAWgMQAXgLAbAAQAcAAAXAMQAXAMANAYQANAYAAAjQAAAogMAfQgNAfgVAWQgWAWgcANQgaANgeAEgAggheQgLAPAAAZQAAAZALAOQAMAOARABQAVgBANgOQANgOAAgZQgBgagMgPQgMgPgTAAQgUAAgMAQg");
	this.shape_8.setTransform(16.5,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhMBzQAggEAZgQQAZgPAPgWQAPgVADgXIgCAAQgKAIgNAEQgOAEgOAAQgUAAgUgIQgUgJgMgRQgNgTAAgeQAAgaAOgUQANgTAXgMQAWgLAbAAQAcAAAXAMQAXAMANAYQANAYAAAjQAAAogNAfQgMAfgWAWQgVAWgbANQgbANgfAEgAgfheQgLAPAAAZQAAAZALAOQALAOARABQAVgBANgOQAMgOAAgZQAAgagMgPQgMgPgTAAQgUAAgLAQg");
	this.shape_9.setTransform(-19,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhNBzQAhgEAZgQQAZgPAOgWQAQgVACgXIgBAAQgKAIgNAEQgNAEgPAAQgUAAgUgIQgUgJgMgRQgMgTgBgeQABgaANgUQANgTAWgMQAXgLAbAAQAcAAAXAMQAXAMANAYQANAYAAAjQAAAogNAfQgMAfgVAWQgWAWgcANQgaANgeAEgAggheQgLAPABAZQgBAZALAOQAMAOARABQAVgBANgOQANgOAAgZQgBgagMgPQgMgPgTAAQgUAAgMAQg");
	this.shape_10.setTransform(-44.3,6.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhMCIIA6hxIA5hyIiHAAIAFgsIC8AAIAAALIgeA/IgfBEIgfBDIgbA+g");
	this.shape_11.setTransform(-69.6,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.7,-20.5,215.8,52.8);


(lib.Symbol18copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjAzIgCgLIgDgHIgBgCIg5AAIgBACIgDAHIgDALIgHAAIAAgdIAIAAIAdhHIAMgBIAbBIIAJAAIAAAdgAAQAWIgRg4IgBAAIgVA4IAnAAg");
	this.shape.setTransform(-89.4,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_1.setTransform(-95.6,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbApIAAhRIAYAAQAHAAAGACQAGACADAEQAEAEAAAHQAAAHgEAEQgEAFgIACIAAAAIAKADQAFACADAEQADAEAAAGQAAAJgEAGQgFAFgHACQgGADgHAAgAgLAgIAHAAQAIAAAEgEQAEgEAAgIQAAgHgFgEQgFgEgHAAIgGAAgAgLgGIAGAAQAFAAAEgDQAEgEAAgGQAAgGgDgDQgEgDgGAAIgGAAg");
	this.shape_2.setTransform(-100.9,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASApIAAgmIgkAAIAAAmIgQAAIAAhRIAQAAIAAAiIAkAAIAAgiIAQAAIAABRg");
	this.shape_3.setTransform(102.4,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaApIAAhRIAYAAQAIAAAHACQAGADAEAFQAEAGAAAJQAAAIgEAGQgEAEgHACQgHADgHAAIgIAAIAAAhgAgKAAIAFAAQAHAAAEgDQAFgEAAgJQAAgIgFgEQgEgEgHABIgFAAg");
	this.shape_4.setTransform(94.6,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUApIAAhRIAqAAIAAAJIgaAAIAABIg");
	this.shape_5.setTransform(88.5,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag4B8QgZgRgOgfQgOgfAAgrQAAgrAOggQAOggAZgSQAYgSAgAAQAhAAAZASQAZASANAgQAOAgAAArQAAArgOAfQgOAfgYARQgZARghABQgfgBgZgRgAgbhfQgMANgGAZQgGAZAAAiQAAAzAOAcQANAcAYAAQAZAAANgcQANgcABgzQAAgigGgZQgGgZgMgNQgLgOgRAAQgQAAgLAOg");
	this.shape_6.setTransform(67.2,4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag4B8QgZgRgOgfQgOgfAAgrQAAgrAOggQAOggAZgSQAYgSAgAAQAhAAAZASQAZASANAgQAOAgAAArQAAArgOAfQgOAfgYARQgZARghABQgfgBgZgRgAgbhfQgMANgGAZQgGAZAAAiQAAAzAOAcQANAcAYAAQAZAAANgcQANgcABgzQAAgigGgZQgGgZgMgNQgLgOgRAAQgQAAgLAOg");
	this.shape_7.setTransform(41.9,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhNBzQAhgEAZgQQAZgPAOgWQAQgVACgXIgBAAQgKAIgNAEQgNAEgPAAQgUAAgUgIQgTgJgNgRQgNgTAAgeQAAgaAOgUQANgTAWgMQAXgLAbAAQAcAAAXAMQAXAMANAYQANAYAAAjQAAAogMAfQgNAfgVAWQgWAWgcANQgaANgeAEgAggheQgLAPAAAZQAAAZALAOQAMAOARABQAVgBANgOQANgOAAgZQgBgagMgPQgMgPgTAAQgUAAgMAQg");
	this.shape_8.setTransform(16.5,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhnCLIAAgTIArgtQApgqAWggQAVggABgcQAAgMgFgJQgFgKgKgHQgIgGgPgBQgPAAgOAGQgOAGgNANIgEAAIADgpQAOgHAQgGQARgFAVAAQArABAXATQAXAUAAAjQAAAWgKAUQgKAUgUAWQgVAVgdAeIgWAWIAAABIBDAAIAmgBQAPAAAKgBIAFAAIgTAug");
	this.shape_9.setTransform(-18.6,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhMCJIA6hyIA5hzIiHAAIAFgsIC8AAIAAAMIgeA/IgfBDIgfBFIgbA+g");
	this.shape_10.setTransform(-44.3,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhMCJIA6hyIA5hzIiHAAIAFgsIC8AAIAAAMIgeA/IgfBDIgfBFIgbA+g");
	this.shape_11.setTransform(-69.6,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.7,-22.4,215.8,52.8);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAQAAQAEAAAEACQAFABACADQACADAAAEQAAADgCADIgGADIAAABQAFAAAEADQADACAAAFQAAAHgFADQgGAEgIAAgAgIATIAIAAQADAAACgCIADgDIABgEIgBgEIgDgDQgCgCgDAAIgIAAgAgIgDIAFAAIAFgBIADgDIABgDIgBgEIgDgDIgFgBIgFAAg");
	this.shape.setTransform(191.6,-276);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAjIAAgvIAJAAIAAAvgAgEgXIAAgLIAJAAIAAALg");
	this.shape_1.setTransform(187.2,-277.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAYIgOgkIAAAAIgPAkIgHAAIAVguIAGgBIAUAvg");
	this.shape_2.setTransform(183,-276);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAjIAAgvIAJAAIAAAvgAgEgXIAAgLIAJAAIAAALg");
	this.shape_3.setTransform(178.8,-277.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAjQgEgBgDgDQgEgEgCgFQgCgGAAgIQAAgKACgIQACgHADgFQAEgEAEgDQAEgCAGgBIAJgCIAEgBIACgBIABAAIgDALIgQADIgGACQgEACgCAFQgCAFgBAIIAAAAQACgFAFgDQAFgCAEAAIAHABQAFACACADQAEADACADQACAEAAAHQAAAGgCAEQgCAFgEADQgCADgFABIgIACQgDAAgEgCgAgIAAQgDAEAAAJQAAAJADAFQADAEAFAAQAGAAADgEQAEgFAAgJQAAgJgEgEQgDgFgGAAQgFAAgDAFg");
	this.shape_4.setTransform(174.1,-277.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAXQgEgBgEgDQgDgEgDgEQgBgFgBgGQABgGABgEQADgFADgDQAEgDAEgCIAIgBIAIABQAEACAEADQADADACAFQACAEAAAGQAAAGgCAFQgCAEgDAEQgEADgEABIgIACIgIgCgAgIgOQgFAFAAAJQAAAJAFAFQADAFAFAAQAGAAAEgFQAEgFAAgJQAAgJgEgFQgEgFgGAAQgFAAgDAFg");
	this.shape_5.setTransform(167.7,-276);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVAYIgEghIgQAdIgEAAIgQgdIgEAhIgGAAIAGgvIAIAAIAPAgIABAAIAQggIAHAAIAGAvg");
	this.shape_6.setTransform(160.8,-276);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAXQgEgBgEgDQgEgEgBgEQgDgFAAgGQAAgGADgEQABgFAEgDQAEgDAEgCIAHgBIAJABQAEACAEADQADADACAFQACAEAAAGQAAAGgCAFQgCAEgDAEQgEADgEABIgJACIgHgCgAgIgOQgEAFgBAJQABAJAEAFQADAFAFAAQAGAAAEgFQAEgFAAgJQAAgJgEgFQgEgFgGAAQgFAAgDAFg");
	this.shape_7.setTransform(153.9,-276);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAYIAAgqIgOAAIAAgFIAlAAIAAAFIgOAAIAAAqg");
	this.shape_8.setTransform(148.3,-276);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAQAAQAEAAAEACQAFABACADQACADAAAEQAAADgCADIgGADIAAABQAFAAAEADQADACAAAFQAAAHgFADQgGAEgIAAgAgIATIAIAAQADAAACgCIADgDIABgEIgBgEIgDgDQgCgCgDAAIgIAAgAgIgDIAFAAIAFgBIADgDIABgDIgBgEIgDgDIgFgBIgFAAg");
	this.shape_9.setTransform(143.4,-276);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAXQgEgCgBgDQgCgDAAgDQAAgGAEgDQADgDAHgBIAIgCIAFgCIACgBIAAgBQAAgGgDgDQgCgDgFABIgHABQgEACgDADIgBAAIABgHIAHgEIAHgBQALAAAEAFQAEAEAAAIIAAAWIAAAEIABAFIgIAAIgCgHQgDAEgEACQgDACgEAAQgFAAgDgCgAgCACQgEABgCADQgBACAAADQAAADACADQACACAEAAQADAAAEgDQADgDABgEIAAgJIgMACg");
	this.shape_10.setTransform(137.5,-276);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXAfIgCgIIgCgFIgBgBIgjAAIgBABIgCAFIgCAIIgEAAIAAgTIAGAAIARgpIAHgBIARAqIAGAAIAAATgAAKAMIgLgfIAAAAIgMAfIAXAAg");
	this.shape_11.setTransform(128.7,-275.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAXQgEgCgBgDQgCgDAAgDQAAgGAEgDQADgDAHgBIAIgCIAFgCIACgBIAAgBQAAgGgDgDQgCgDgFABIgHABQgEACgDADIgBAAIABgHIAHgEIAHgBQALAAAEAFQAEAEAAAIIAAAWIAAAEIABAFIgIAAIgCgHQgDAEgEACQgDACgEAAQgFAAgDgCgAgCACQgEABgCADQgBACAAADQAAADACADQACACAEAAQADAAAEgDQADgDABgEIAAgJIgMACg");
	this.shape_12.setTransform(122.8,-276);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAYIgNgkIgBAAIgPAkIgHAAIAVguIAFgBIAVAvg");
	this.shape_13.setTransform(117.4,-276);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAIAYIgGgIIgFgIIgGgIIAAgBIAJgLIAJgLIAJAAIgSAUIAEAHIAHAIIAGAHIAEAEIAAABgAgUAYIAAgvIAKAAIAAAvg");
	this.shape_14.setTransform(112.3,-276);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAWQgGgDgDgFQgDgGAAgIQAAgHADgFQADgGAGgDQAGgDAGAAIAHABIAFACIABAGIgBAAIgFgDIgGgBQgGAAgFAFQgDAGgBAIQABAJAEAFQAEAFAHAAQADAAAEgBQADgBABgDIACAAIgCAHIgGADIgHABQgHAAgFgDg");
	this.shape_15.setTransform(106.7,-276);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMAjIAAgiIgZAiIgHAAIAAguIAKAAIAAAgIAXggIAIAAIAAAugAgHgXIgGgCIgBgCIABgHIABAAIABABIACADIAEACQADACACAAQAEAAACgCIAFgCIACgDIAAgBIABAAIABAHIgCACIgFACQgDACgFAAQgEAAgDgCg");
	this.shape_16.setTransform(97.7,-277.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAMAYIAAgiIgZAiIgHAAIAAgvIAKAAIAAAgIAXggIAIAAIAAAvg");
	this.shape_17.setTransform(91.4,-276);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALAYIAAgXIgUAAIAAAXIgKAAIAAgvIAKAAIAAAUIAUAAIAAgUIAJAAIAAAvg");
	this.shape_18.setTransform(85.1,-276);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNASQgHgGAAgMQAAgHADgFQADgGAGgDQAFgDAFAAQAGAAAFADQAEACACAFQACAEAAAGIAAAEIgfAAQAAAFACAEQACAFAEACQACADAGAAQAEAAADgCQAEgBADgDIABAAIgCAHQgCACgEABQgEACgFAAQgLAAgGgHgAgDgSIgFAFQgCADAAAFIAWAAIAAgBQAAgHgDgDQgDgDgEAAQgDAAgCABg");
	this.shape_19.setTransform(79.1,-276);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAYIgFgIIgGgIIgGgIIAAgBIAJgLIAJgLIAJAAIgSAUIAFAHIAHAIIAFAHIAEAEIAAABgAgEAYIAAgvIAJAAIAAAvgAgjAYIAAgBIAEgEIAFgHIAHgIIAFgHIgSgUIAJAAIAJALIAJALIAAABIgGAIIgGAIIgFAIg");
	this.shape_20.setTransform(72.4,-276);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNASQgHgGAAgMQAAgHADgFQADgGAGgDQAFgDAFAAQAGAAAFADQAEACACAFQACAEAAAGIAAAEIgfAAQAAAFACAEQACAFAEACQACADAGAAQAEAAADgCQAEgBADgDIABAAIgCAHQgCACgEABQgEACgFAAQgLAAgGgHgAgDgSIgFAFQgCADAAAFIAWAAIAAgBQAAgHgDgDQgDgDgEAAQgDAAgCABg");
	this.shape_21.setTransform(65.6,-276);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVAYIgEghIgQAdIgEAAIgQgdIgEAhIgGAAIAGgvIAIAAIAPAgIABAAIAQggIAHAAIAGAvg");
	this.shape_22.setTransform(59,-276);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAjQgEgBgEgDQgCgEgCgFQgCgGgBgIQAAgKACgIQABgHAEgFQADgEAFgDQAFgCAEgBIAJgCIAGgBIABgBIABAAIgCALIgQADIgIACQgDACgCAFQgCAFgCAIIABAAQADgFAEgDQAFgCAEAAIAIABQADACAEADQADADACADQACAEAAAHQAAAGgCAEQgCAFgDADQgEADgDABIgIACQgEAAgEgCgAgIAAQgDAEAAAJQAAAJADAFQAEAEAEAAQAGAAADgEQAEgFAAgJQAAgJgEgEQgDgFgGAAQgEAAgEAFg");
	this.shape_23.setTransform(52.2,-277.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAXQgEgBgDgDQgDgEgDgEQgCgFAAgGQAAgGACgEQADgFADgDQADgDAEgCIAIgBIAIABQAFACADADQAEADACAFQACAEAAAGQAAAGgCAFQgCAEgEAEQgDADgFABIgIACIgIgCgAgJgOQgDAFAAAJQAAAJADAFQAEAFAFAAQAGAAAEgFQAEgFAAgJQAAgJgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_24.setTransform(45.8,-276);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAXQgEgCgBgDQgCgDAAgDQAAgGAEgDQADgDAHgBIAIgCIAFgCIACgBIAAgBQAAgGgDgDQgCgDgFABIgHABQgEACgDADIgBAAIABgHIAHgEIAHgBQALAAAEAFQAEAEAAAIIAAAWIAAAEIABAFIgIAAIgCgHQgDAEgEACQgDACgEAAQgFAAgDgCgAgCACQgEABgCADQgBACAAADQAAADACADQACACAEAAQADAAAEgDQADgDABgEIAAgJIgMACg");
	this.shape_25.setTransform(36.6,-276);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AALAYIAAgXIgVAAIAAAXIgKAAIAAgvIAKAAIAAAUIAVAAIAAgUIAKAAIAAAvg");
	this.shape_26.setTransform(30.7,-276);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAwIAAgmIgFAAIgCAAIgKAOIgIANIgIALIgZAAIAAgBIAMgNIAMgNIALgOQgJgDgEgGQgGgGAAgKQABgKAEgGQAFgGAIgEQAHgDALAAIAZAAIAABfgAADggQgFAFgBAJQABAKAFAFQAFAEAKAAIACAAIAAgmIgCAAQgLAAgEAFg");
	this.shape_27.setTransform(209.8,-291.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJAwIAAhfIASAAIAABfg");
	this.shape_28.setTransform(204,-291.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAkA8IgDgOIgEgIIgBgDIhIAAIAAheIATAAIAABUIApAAIAAhUIATAAIAABUIAKAAIAAAjg");
	this.shape_29.setTransform(196.9,-290.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWAwIAAhIIgyBIIgMAAIAAhfIATAAIAABCIAthCIARAAIAABfg");
	this.shape_30.setTransform(185.9,-291.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAuQgHgDgEgEIgDgQIACAAQAHAIAGADQAGAEAIAAQADAAAEgCQAEgCADgEQACgEAAgHQAAgJgFgFQgFgFgIAAIgKAAIABgIIAIAAQAFAAACgCQAEgCABgEQACgDAAgFQAAgHgEgEQgEgEgGAAQgEAAgEACQgFACgEAEIgCAAIABgMIAGgDIAHgBIAIgBQAIAAAGACQAHADAEAFQAFAFAAAIQAAAIgEAFQgDAFgGADIAAAAQAFACAFACQAEADACAGQADAFAAAHQAAAJgFAHQgFAGgJADQgIADgIAAQgJAAgHgDg");
	this.shape_31.setTransform(176.6,-291.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAuQgJgCgHgHQgHgFgFgKQgEgJAAgNQAAgLAEgKQAEgJAIgHQAHgFAJgEQAJgCAIAAQAJAAAJACQAJAEAHAFQAIAHAEAJQAEAJAAAMQAAANgEAJQgEAJgIAGQgHAGgIADQgJAEgJAAQgJAAgJgEgAgPghQgGAFgEAJQgEAIAAALQAAALAEAIQAEAJAGAFQAHAFAIABQAJAAAHgGQAGgEAEgKQAEgIAAgLQAAgKgEgJQgEgJgGgFQgHgFgJAAQgIAAgHAFg");
	this.shape_32.setTransform(167.2,-291.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAVAwIAAhUIgpAAIAABUIgTAAIAAhfIBQAAIAABfg");
	this.shape_33.setTransform(156.2,-291.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgRAuQgJgCgHgHQgHgFgFgKQgEgJAAgNQAAgLAEgKQAEgJAIgHQAHgFAJgEQAJgCAIAAQAJAAAJACQAJAEAHAFQAIAHAEAJQAEAJAAAMQAAANgEAJQgEAJgIAGQgHAGgIADQgJAEgJAAQgJAAgJgEgAgPghQgGAFgEAJQgEAIAAALQAAALAEAIQAEAJAGAFQAHAFAIABQAJAAAHgGQAGgEAEgKQAEgIAAgLQAAgKgEgJQgEgJgGgFQgHgFgJAAQgIAAgHAFg");
	this.shape_34.setTransform(145.2,-291.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfAwIAAheIAdAAQAJgBAIADQAIADAEAGQAFAHAAAKQAAAKgFAGQgFAGgIADQgIADgIAAIgKAAIAAAmgAgMAAIAHAAQAIAAAFgEQAFgEAAgKQAAgKgFgEQgFgFgIAAIgHAAg");
	this.shape_35.setTransform(135.6,-291.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAVAwIAAhUIgpAAIAABUIgUAAIAAhfIBQAAIAABfg");
	this.shape_36.setTransform(126,-291.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaAwIgMghIgiAAIgMAhIgOAAIAphdIANgCIAnBfgAAKAEIgMggIAAAAIgNAgIAZAAg");
	this.shape_37.setTransform(112.4,-291.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVAwIAAgsIgqAAIAAAsIgTAAIAAhfIATAAIAAAoIAqAAIAAgoIATAAIAABfg");
	this.shape_38.setTransform(102.5,-291.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgfAwIAAhfIATAAIAAAjIAHAAQAJAAAJACQAIAEAGAGQAEAGAAALQAAAKgEAHQgFAHgJADQgIADgKABgAgMAlIAEAAQAJAAAFgEQAGgFAAgLQAAgLgGgFQgFgFgJABIgEAAg");
	this.shape_39.setTransform(93.4,-291.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAZAwIgahMIgBAAIgdBMIgOAAIAnhdIAPgCIAlBfg");
	this.shape_40.setTransform(84.4,-291.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAaAwIgNghIggAAIgOAhIgNAAIAohdIAPgCIAmBfgAAKAEIgLggIgBAAIgOAgIAaAAg");
	this.shape_41.setTransform(75.1,-291.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAwIAAhfIASAAIAABfg");
	this.shape_42.setTransform(68.2,-291.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAkA8IgDgOIgEgIIgBgDIhIAAIAAheIATAAIAABUIApAAIAAhUIATAAIAABUIAKAAIAAAjg");
	this.shape_43.setTransform(61.1,-290.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIAwAAIAAALIgdAAIAAAfIAZAAIAAAJIgZAAIAAAhIANAAIAJAAIAHgBIAGAAIABAAIgGAMg");
	this.shape_44.setTransform(52.4,-291.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAVAwIAAhUIgpAAIAABUIgUAAIAAhfIBQAAIAABfg");
	this.shape_45.setTransform(43.2,-291.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAuQgKgDgHgGQgIgGgEgJQgEgJAAgNQAAgLAEgJQAFgKAIgGQAHgHAKgDQAJgCALAAIAKABIAKABIAJAFIABAMIgCAAQgGgFgHgCQgGgCgHAAQgKAAgIAFQgIAEgFAJQgEAJAAALQAAAMAEAJQAFAIAIAEQAHAFAKgBQAKAAAIgCQAHgDAFgEIACAAIgEAOQgFADgIADQgIACgJAAQgKAAgKgEg");
	this.shape_46.setTransform(33,-291.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.9,-302,260.5,32.9);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBtQgQgEgNgIIgDgiIADAAQAMAKAPAGQAPAFAQABQALAAAKgFQAKgEAHgJQAHgLAAgPQAAgVgLgMQgLgKgVAAQgJAAgIACQgJADgHAFIgUgEIANh1IB0AAIgEAkIhVAAIgFA0QAHgCAHgBIAPgBQAWgBARAJQASAHAIAPQAKAPAAAXQAAAagMAQQgLARgTAIQgUAJgXgBQgQAAgQgFg");
	this.shape.setTransform(175.1,214.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyAPIADgdIBiAAIgDAdg");
	this.shape_1.setTransform(157,216.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBwIgzhZIgBAAIg2BZIgjAAIBKhwIhFhvIA2AAIAvBTIABAAIAyhTIAiAAIhEBqIAtBJIARAaQAHALAFAFIAAACg");
	this.shape_2.setTransform(140,214.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBtQgXgHgRgOQgSgPgKgVQgKgWAAgdQAAgdAKgWQALgWASgOQATgPAXgHQAWgIAaAAQALAAAMACQANACALAEQALAEAJAFIADAeIgFAAQgOgMgPgEQgPgFgQAAQgZAAgSALQgUALgLAVQgLAUgBAcQABAcALAUQALATATAKQASALAYAAQAXgBARgFQASgGAMgKIAFAAIgJAgQgOAIgSAFQgSAEgVABQgZAAgYgIg");
	this.shape_3.setTransform(117.2,214.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA9BxIgehOIhOAAIggBOIgfAAIBfjcIAjgFIBbDhgAAXALIgchOIgCAAIgfBOIA9AAg");
	this.shape_4.setTransform(83.4,214.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhoBwIAAjfIBYAAQA6AAAfAcQAgAcAAA3QAAAkgQAZQgQAZgcANQgcANglAAgAg7BXIAhAAQApAAAVgXQAVgWAAgqQAAgpgUgXQgTgXgpAAIgkAAg");
	this.shape_5.setTransform(59.7,214.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhnBwIAAgMIB/i4IAAgCIh0AAIAGgZICuAAIAAAKIiAC6IAAACIA7AAIAngBIAagBIASgBIACAAIgPAcg");
	this.shape_6.setTransform(34.4,214.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA9BxIgehOIhOAAIggBOIgfAAIBfjcIAjgFIBbDhgAAXALIgchOIgCAAIgfBOIA9AAg");
	this.shape_7.setTransform(10.4,214.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABeBwIgRirIgBAAIhNCeIgPAAIhOidIgBAAIgOCqIgdAAIAYjfIArAAIBHCTIABAAIBHiTIAsAAIAXDfg");
	this.shape_8.setTransform(-17.3,214.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,192,223.6,43.7);


(lib.Symbol11copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKA/IAAhVIAVAAIAABVgAAHgpIAAgVIAVAAIAAAVgAgagpIAAgVIAUAAIAAAVg");
	this.shape.setTransform(150.6,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKA/IAAhVIAVAAIAABVgAgLgoIAAgWIAXAAIAAAWg");
	this.shape_1.setTransform(144.6,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiA5IgEgPIgDgJIgCgDIhEAAIAAhWIAWAAIAABKIAfAAIAAhKIAWAAIAABKIAMAAIAAAng");
	this.shape_2.setTransform(136.2,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAnQgHgHAAgLQAAgHADgFQADgFAFgCQAFgCAHgCIAQgEIAJgEQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgBQAAgKgEgEQgFgEgJAAIgHABIgJADIgIAGIgCAAIACgNQAGgFAIgCQAIgCAGAAQATAAAIAIQAJAJAAANIAAApIAAAIIABAIIgTAAIgDgNQgEAHgHAEQgEAEgJAAQgOgBgGgFgAgDAEQgGADgDADQgCADgBAGQABAGADAEQADAEAHgBQAFABAFgFQAEgEABgIIAAgRIgRAFg");
	this.shape_3.setTransform(124.6,32.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKArIAAhKIgYAAIAAgLIBFAAIAAALIgYAAIAABKg");
	this.shape_4.setTransform(115.2,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMArIgJgNIgJgQIgKgOIAAgCIAQgUIAQgUIATAAIggAjIAPAUIAPATIAJAKIAAABgAgpArIAAhVIAXAAIAABVg");
	this.shape_5.setTransform(106.3,32.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAoQgKgFgGgLQgFgJgBgPQAAgNAHgKQAFgLAKgFQAKgFAKAAQASAAAKAKQAJAJAAASIAAAGIg4AAQABAJACAHQAEAIAGAEQAGAEAJAAQAIABAFgCQAHgDAFgFIACAAIgEAPQgEADgIACQgHADgKAAQgMAAgLgFgAgKgcQgFAHAAAKIAiAAIAAgBQAAgLgEgFQgEgGgIAAQgHAAgGAGg");
	this.shape_6.setTransform(95,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAsIgYg/IAAAAIgZA/IgQAAIAjhUIASgDIAmBXg");
	this.shape_7.setTransform(84.6,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARArIAAhKIghAAIAABKIgWAAIAAhVIBNAAIAABVg");
	this.shape_8.setTransform(73.8,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgArIgFgzIgBAAIgXAuIgMAAIgYguIgBAAIgFAzIgQAAIALhVIASAAIAaA2IABAAIAbg2IARAAIALBVg");
	this.shape_9.setTransform(61.1,32.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAoQgKgFgGgKQgHgLAAgOQAAgPAHgKQAGgJAKgGQAKgEALAAQALAAAJAEQAKAGAHAJQAGAKAAAPQAAAOgGALQgHAKgKAFQgJAFgLAAQgLAAgKgFgAgOgYQgGAJAAAPQAAAPAGAJQAGAJAIAAQAKAAAFgJQAGgJAAgPQAAgPgGgJQgFgIgKAAQgIAAgGAIg");
	this.shape_10.setTransform(48.4,32.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMArIgJgNIgJgQIgKgOIAAgCIAQgUIAQgUIATAAIggAjIAPAUIAPATIAJAKIAAABgAgpArIAAhVIAXAAIAABVg");
	this.shape_11.setTransform(37.9,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdBSIAAhcIhBBcIgQAAIAAh6IAYAAIAABVIA7hVIAWAAIAAB6gAgQg3IgLgFIgEgCIAEgTIACAAIACADIAEAFQADADAFACQAFACAGAAQAHAAAFgCIAIgFIAEgFIACgDIACAAIAEATIgEACQgEADgHACQgHADgKAAQgJAAgHgDg");
	this.shape_12.setTransform(176.5,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLA9IAAh5IAXAAIAAB5g");
	this.shape_13.setTransform(165.9,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcA9IAAg5Ig3AAIAAA5IgYAAIAAh5IAYAAIAAAzIA3AAIAAgzIAYAAIAAB5g");
	this.shape_14.setTransform(155.4,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoA9IAAh5IAZAAIAAAsIAIAAQANAAAKAEQALAEAHAIQAGAJAAANQAAAOgGAIQgGAJgLAEQgKAEgNAAgAgPAxIAEAAQANAAAGgHQAIgGgBgOQAAgNgHgHQgHgGgMAAIgEAAg");
	this.shape_15.setTransform(142.7,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgA+IgihiIgBAAIgmBiIgRAAIAyh4IATgDIAwB7g");
	this.shape_16.setTransform(130.2,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAhA+IgQgrIgqAAIgRArIgRAAIA0h4IASgDIAxB7gAANAGIgPgqIgBAAIgRAqIAhAAg");
	this.shape_17.setTransform(117.2,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAzA9IgJhdIAAAAIgqBWIgIAAIgrhVIAAAAIgIBcIgQAAIANh5IAYAAIAmBQIAAAAIAnhQIAYAAIANB5g");
	this.shape_18.setTransform(101.7,13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAdA9IAAhcIhBBcIgQAAIAAh5IAYAAIAABUIA7hUIAWAAIAAB5g");
	this.shape_19.setTransform(85.4,13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNA8QgNgEgJgIQgKgIgFgMQgGgMAAgQQAAgPAGgMQAGgMAKgIQAKgIAMgEQAMgEAOAAQAGAAAHACQAHAAAGADQAGACAFADIABAQIgDAAQgHgHgIgCQgIgDgJAAQgOAAgJAGQgLAGgGAMQgGALAAAPQAAAPAGALQAGAKAKAGQAKAFANAAQAMAAAKgDQAKgDAGgGIADAAIgFASQgIAEgKADQgKADgLAAQgNAAgNgEg");
	this.shape_20.setTransform(71.3,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATA9IgTgcIgagkIAAgBIAagcIAYgcIAUAAIgvAyIAWAfIAUAYIANAPIAAABgAgzA9IAAh5IAYAAIAAB5g");
	this.shape_21.setTransform(58.7,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhA+IgQgrIgqAAIgSArIgQAAIAzh4IATgDIAxB7gAANAGIgPgqIgBAAIgRAqIAhAAg");
	this.shape_22.setTransform(44.8,13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAzA9IgJhdIgBAAIgpBWIgJAAIgphVIgBAAIgIBcIgQAAIANh5IAYAAIAmBQIABAAIAnhQIAXAAIANB5g");
	this.shape_23.setTransform(29.3,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBKIANgfIgzh0IAbAAIAkBVIAkhVIASAAIg+CTg");
	this.shape_24.setTransform(8.2,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.4,43.3);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AgbAvIAAhdIAwAAIAAAKIgeAAIAAAfIAaAAIAAAJIgaAAIAAAhIAPAAIAIAAIAHAAIAGgBIABAAIgGALg");
	this.shape.setTransform(119.6,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E0E0E").s().p("Ag7AvIAAhdIATAAIAABTIAfAAIAAhTIASAAIAABTIAhAAIAAhTIASAAIAABdg");
	this.shape_1.setTransform(107.4,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E0E0E").s().p("AgeAvIAAhdIASAAIAAAhIAHAAQAKAAAIAEQAJADAEAGQAGAGAAALQAAAKgGAIQgEAGgIAEQgJACgJAAgAgMAmIAEAAQAJAAAFgGQAGgEAAgKQAAgLgGgGQgFgFgJAAIgEAAg");
	this.shape_2.setTransform(95.3,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E0E0E").s().p("AAZAwIgahMIgBAAIgdBMIgOAAIAnhdIAPgCIAlBfg");
	this.shape_3.setTransform(85.4,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0E0E0E").s().p("AgIAvIAAhdIASAAIAABdg");
	this.shape_4.setTransform(77.6,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0E0E0E").s().p("AgfAvIAAhdIA4AAIAAAKIglAAIAAAXIAIAAQAJAAAJAEQAIADAFAGQAFAGAAALQAAAKgFAIQgFAGgIAEQgIACgKAAgAgMAmIAFAAQAJAAAFgGQAGgEAAgKQAAgLgGgGQgFgFgJAAIgFAAg");
	this.shape_5.setTransform(70.6,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0E0E0E").s().p("AAUAvIAAglIgFAAIgDAAIgJAOIgIANIgIAKIgZAAIAAAAIAMgMIAMgPIALgMQgJgEgEgFQgGgHAAgJQAAgKAGgHQAEgGAIgDQAIgDAKAAIAZAAIAABdgAACggQgEAFgBAJQABAKAEAFQAGAEAKAAIACAAIAAgmIgCAAQgKAAgGAFg");
	this.shape_6.setTransform(55.6,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0E0E0E").s().p("AgKAuQgKgDgHgGQgIgGgEgKQgEgIAAgNQAAgLAEgKQAFgJAIgGQAHgGAKgDQAJgEALAAIAKABIAKADIAJADIABANIgCAAQgGgFgHgCQgGgCgHAAQgKAAgIAFQgIAEgFAKQgEAIAAAMQAAAMAEAHQAFAJAIAEQAHAEAKABQAKgBAIgCQAHgCAFgFIACAAIgEAOQgFADgIACQgIACgJAAQgKAAgKgDg");
	this.shape_7.setTransform(46.1,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0E0E0E").s().p("AAXAvIAAhHIgzBHIgMAAIAAhdIATAAIAABBIAthBIARAAIAABdg");
	this.shape_8.setTransform(34.6,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0E0E0E").s().p("AgJAvIAAhTIgXAAIAAgKIBBAAIAAAKIgXAAIAABTg");
	this.shape_9.setTransform(24.8,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0E0E0E").s().p("AAaAwIgNghIghAAIgNAhIgNAAIAohdIAPgCIAmBfgAAKAEIgMggIAAAAIgNAgIAZAAg");
	this.shape_10.setTransform(15.5,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0E0E0E").s().p("AAVAvIAAgsIgpAAIAAAsIgTAAIAAhdIATAAIAAAnIApAAIAAgnIAUAAIAABdg");
	this.shape_11.setTransform(4.6,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0E0E0E").s().p("AgSAuQgHgDgEgEIgDgQIACAAQAHAIAGADQAGAEAIAAQADAAAEgCQAEgCADgEQACgEAAgHQAAgJgFgFQgFgFgIAAIgKAAIABgIIAIAAQAFAAACgCQAEgCABgEQACgDAAgFQAAgHgEgEQgEgEgGAAQgEAAgEACQgFACgEAEIgCAAIABgMIAGgDIAHgBIAIgBQAIAAAGACQAHADAEAFQAFAFAAAIQAAAIgEAFQgDAFgGADIAAAAQAFACAFACQAEADACAGQADAFAAAHQAAAJgFAHQgFAGgJADQgIADgIAAQgJAAgHgDg");
	this.shape_12.setTransform(-5.6,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0E0E0E").s().p("AgJAvIAAhdIASAAIAABdg");
	this.shape_13.setTransform(-12.4,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0E0E0E").s().p("AApA8QgBgIgBgGIgEgIIgCgDIhBAAIgCADIgEAIQgCAGAAAIIgJAAIAAgjIAJAAIAihSIAOgCIAgBUIAKAAIAAAjgAAUAZIgWhBIgBAAIgYBBIAvAAg");
	this.shape_14.setTransform(-20.7,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ArYB+Qg0AAglglQglglAAgzIAAgBQAAgzAlglQAlglA0AAIWxAAQA0AAAkAlQAmAlAAAzIAAABQAAAzgmAlQgkAlg0AAg");
	this.shape_15.setTransform(49.6,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-1.7,171,25.2);


(lib.w1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(24.6,28.6,1.162,0.859,0,-90,90,24.6,28.5);
	this.instance.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:24.4,regY:28.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:24.4,y:28.4},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.cx5, null, new cjs.Matrix2D(1,0,0,1,-57.6,-124.5)).s().p("AisDJQhIhTAAh2QAAh1BIhUQBIhTBkAAQBlAABHBTQBIBUAAB1QAAB2hIBTQhHBUhlgBQhkABhIhUg");
	this.shape.setTransform(24.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,56.9);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(32.7,11,0.403,1,-9.2,0,0,36.5,11);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:36.3,scaleX:0.93,rotation:-2.7,x:39.3,y:11.1},25,cjs.Ease.get(1)).wait(213));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.4,-2.3,33.3,25.9);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.9,11.2,1,1,0,0,0,48.9,10.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(319).to({_off:false},0).to({y:10.4,alpha:1},17).wait(580));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foor("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(500.5,78.5,1.747,1.747,0,0,0,286.9,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:500.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-3.4,1002.9,157.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(511.4,78.6,1.034,1.008,0,-7.3,0,501.4,78.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1,skewX:-4.8,x:508.2,alpha:1},30).to({scaleX:1.01,scaleY:0.98,skewX:-1.5,x:503.7,y:78.7,startPosition:1},39).to({regY:78.5,scaleX:1,scaleY:0.98,skewX:0,x:501.5,y:78.6,alpha:0,startPosition:0},20).wait(1));

	// Layer 1
	this.instance_1 = new lib.foor("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(501.3,78.5,1.747,1.747,0,0,0,286.9,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-3.4,1056.9,157.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.w2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.3,29.2,1,1,0,180,0,29.3,29.3);
	this.instance.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:180,skewX:0,x:29.2},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.w2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.3,29.3,1,1,0,0,0,29.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.5,58.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sta("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.086,0.086);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.12,scaleY:0.12,rotation:40.6},10,cjs.Ease.get(0.28)).to({scaleX:0.09,scaleY:0.09,rotation:81.2},7,cjs.Ease.get(0.28)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-35.4,70.8,70.8);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1037.5,4.4,0.337,0.337,0,0,0,624.1,5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:624,scaleX:1,scaleY:1,x:624,y:5,alpha:0.84},13).to({regX:623.8,scaleX:0.11,x:67,y:7,alpha:0},37).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(624,5,1,1,0,0,0,624,5);
	this.instance_1.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,1248,10);


(lib.interior = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SALO
	this.instance = new lib.salon_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-199.4,46.1,1.09,1.09,0,0,0,352.5,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:144.9,scaleX:1.07,scaleY:1.07,x:-202.2},40).to({regY:145,scaleX:1,scaleY:1,x:-209.4},104).wait(1));

	// SKY
	this.instance_1 = new lib.sky("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-168.3,-126.7,0.879,0.879,0,0,0,350.1,122.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:350,x:-176.7,y:-126.6},40).to({x:-185.9},44).to({regX:350.1,x:-198.3,y:-126.7},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-583.5,-247.1,768.2,632.7);


(lib.Symbol18copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.8)").ss(2,1,1).p("AgHAAIAPAA");
	this.shape.setTransform(-52.2,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(63,63,63,0.8)").ss(2,1,1).p("Ag/AAIB/AA");
	this.shape_1.setTransform(-46.2,-14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(75,75,75,0.8)").ss(2,1,1).p("AhzAAIDnAA");
	this.shape_2.setTransform(-40.6,-14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(86,86,86,0.8)").ss(2,1,1).p("AikAAIFJAA");
	this.shape_3.setTransform(-35.4,-14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(96,96,96,0.8)").ss(2,1,1).p("AjRAAIGjAA");
	this.shape_4.setTransform(-30.5,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(105,105,105,0.8)").ss(2,1,1).p("Aj6AAIH1AA");
	this.shape_5.setTransform(-26,-14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(113,113,113,0.8)").ss(2,1,1).p("AkgAAIJBAA");
	this.shape_6.setTransform(-22,-14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(121,121,121,0.8)").ss(2,1,1).p("AlCAAIKFAA");
	this.shape_7.setTransform(-18.3,-14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(128,128,128,0.8)").ss(2,1,1).p("AlhAAILDAA");
	this.shape_8.setTransform(-15,-14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(133,133,133,0.8)").ss(2,1,1).p("Al8ABIL5gB");
	this.shape_9.setTransform(-12.1,-14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(139,139,139,0.8)").ss(2,1,1).p("AmTABIMngB");
	this.shape_10.setTransform(-9.6,-14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(143,143,143,0.8)").ss(2,1,1).p("AmmABINNgB");
	this.shape_11.setTransform(-7.4,-14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(147,147,147,0.8)").ss(2,1,1).p("Am3ABINvgB");
	this.shape_12.setTransform(-5.7,-14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(149,149,149,0.8)").ss(2,1,1).p("AnEABIOJgB");
	this.shape_13.setTransform(-4.3,-14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(151,151,151,0.8)").ss(2,1,1).p("AnMABIOZgB");
	this.shape_14.setTransform(-3.4,-14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(153,153,153,0.8)").ss(2,1,1).p("AnSABIOlgB");
	this.shape_15.setTransform(-2.8,-14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(153,153,153,0.8)").ss(2,1,1).p("AnUABIOpgB");
	this.shape_16.setTransform(-2.6,-14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},35).to({state:[{t:this.shape_16}]},15).to({state:[]},11).to({state:[{t:this.shape_16}]},6).to({state:[]},7).wait(105));

	// Layer 1
	this.instance = new lib.Symbol26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-18.6,1,1,0,0,0,-0.1,-17.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-17.4,alpha:1},10,cjs.Ease.get(1)).to({_off:true},50).wait(15).to({_off:false},0).to({_off:true},11).wait(6).to({_off:false},0).to({_off:true},7).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-31.1,88.4,29.4);


(lib.Symbol18copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.8)").ss(2,1,1).p("AgHAAIAPAA");
	this.shape.setTransform(-52.2,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(63,63,63,0.8)").ss(2,1,1).p("Ag/AAIB/AA");
	this.shape_1.setTransform(-46.2,-14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(75,75,75,0.8)").ss(2,1,1).p("AhzAAIDnAA");
	this.shape_2.setTransform(-40.6,-14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(86,86,86,0.8)").ss(2,1,1).p("AikAAIFJAA");
	this.shape_3.setTransform(-35.4,-14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(96,96,96,0.8)").ss(2,1,1).p("AjRAAIGjAA");
	this.shape_4.setTransform(-30.5,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(105,105,105,0.8)").ss(2,1,1).p("Aj6AAIH1AA");
	this.shape_5.setTransform(-26,-14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(113,113,113,0.8)").ss(2,1,1).p("AkgAAIJBAA");
	this.shape_6.setTransform(-22,-14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(121,121,121,0.8)").ss(2,1,1).p("AlCAAIKFAA");
	this.shape_7.setTransform(-18.3,-14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(128,128,128,0.8)").ss(2,1,1).p("AlhAAILDAA");
	this.shape_8.setTransform(-15,-14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(133,133,133,0.8)").ss(2,1,1).p("Al8ABIL5gB");
	this.shape_9.setTransform(-12.1,-14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(139,139,139,0.8)").ss(2,1,1).p("AmTABIMngB");
	this.shape_10.setTransform(-9.6,-14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(143,143,143,0.8)").ss(2,1,1).p("AmmABINNgB");
	this.shape_11.setTransform(-7.4,-14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(147,147,147,0.8)").ss(2,1,1).p("Am3ABINvgB");
	this.shape_12.setTransform(-5.7,-14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(149,149,149,0.8)").ss(2,1,1).p("AnEABIOJgB");
	this.shape_13.setTransform(-4.3,-14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(151,151,151,0.8)").ss(2,1,1).p("AnMABIOZgB");
	this.shape_14.setTransform(-3.4,-14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(153,153,153,0.8)").ss(2,1,1).p("AnSABIOlgB");
	this.shape_15.setTransform(-2.8,-14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(153,153,153,0.8)").ss(2,1,1).p("AnUABIOpgB");
	this.shape_16.setTransform(-2.6,-14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(114));

	// Layer 1
	this.instance = new lib.Symbol26_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-18.6,1.817,1.817,0,0,0,-0.1,-17.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-0.5,y:-17.4,alpha:1},16,cjs.Ease.get(1)).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.1,-41.2,160.5,53.4);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol18copy3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.2,-33.8,1,1,0,0,0,-0.1,-17.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(334).to({_off:false},0).wait(1930));

	// Layer 1
	this.instance_1 = new lib.Symbol18copy4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-7.4,1,1,0,0,0,0,-18);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(351).to({_off:false},0).to({y:-18,alpha:1},28,cjs.Ease.get(1)).wait(1885));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance_1 = new lib.Symbol18copy5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,-33.8,1,1,0,0,0,-0.1,-17.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(60).to({startPosition:75},0).to({alpha:0,startPosition:92},11).to({_off:true},7).wait(1857));

	// Layer 1
	this.instance_2 = new lib.Symbol18copy2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-7.4,1,1,0,0,0,0,-18);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({y:-18,alpha:1},28,cjs.Ease.get(1)).wait(15).to({startPosition:0},0).to({alpha:0},11).to({_off:true},7).wait(1857));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11copy3();
	this.instance.parent = this;
	this.instance.setTransform(93.2,19.7,1,1,0,0,0,93.2,21.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(364).to({_off:false},0).to({y:21.7,alpha:1,mode:"synched",startPosition:0},16).wait(833));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol11copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-666.5,-241.3,1,1,0,0,0,83.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-724.2,-559.7,260.5,32.9);


(lib.Symbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-662.5,-272.8,1,1,0,0,0,78.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-775.5,-97.2,223.5,43.7);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},94).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},90).to({state:[{t:this.instance_2}]},8).to({state:[]},1).wait(611));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({alpha:1},12).to({startPosition:0},90).to({_off:true,alpha:0},8).wait(612));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sp
	this.instance = new lib.Symbol10copy("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},25,cjs.Ease.get(1)).wait(1740));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-775.5,-97.2,223.5,43.7);


(lib.pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-669.4,-206.9,1,1,0,0,0,104.6,33.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({y:-204.9,alpha:1},23).wait(37).to({startPosition:0},0).to({y:-205.9,alpha:0},16).to({_off:true},1).wait(389));

	// pop
	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-668.8,-224,1,1,0,0,0,106,48.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off:false},0).to({alpha:1},20).to({startPosition:0},60).to({alpha:0},16).to({_off:true},1).wait(389));

	// pop
	this.instance_2 = new lib.t2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-667.8,-245.2,1,1,0,0,0,113.7,28.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({alpha:1},24).to({startPosition:0},63).to({alpha:0},14).to({_off:true},16).wait(474));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cx5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(316.7,124.6,1,1,0,0,0,29.3,29.3);

	this.instance_1 = new lib.w1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.1,125.5,1,1,0,0,0,24.4,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Layer 1
	this.instance_2 = new lib.cx5();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,435,160);


(lib.color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(317.4,190.6,1.063,1.063,0,0,0,284,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regY:199.9,scaleX:1.08,scaleY:1.08,x:318,y:182.1,alpha:1},23).to({y:178.2},66).to({regY:199.8,scaleX:1,scaleY:1,x:312.8,y:170.9,alpha:0},26,cjs.Ease.get(0.72)).to({_off:true},1).wait(1428));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(724.8,-75.6,1,1,0,0,0,37.5,10.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(308));

	// CAR
	this.instance_1 = new lib.cx5_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(494.1,-77.8,1.071,1.071,0,0,0,217.5,80);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:508.5,y:-70,alpha:1},24).to({regX:217.6,scaleX:0.96,scaleY:0.96,x:525.4,y:-66.8,startPosition:1},21).to({x:544.4},60).to({regX:217.7,scaleX:0.73,scaleY:0.73,x:582.8,y:-68,startPosition:0},11).to({regX:217.8,regY:79.9,scaleX:0.64,scaleY:0.64,x:621.8,y:-70.7,startPosition:1},39,cjs.Ease.get(1)).to({_off:true},307).wait(1));

	// LIGHT
	this.instance_2 = new lib.light_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(624,-70,1,1,0,0,0,624,5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:653,startPosition:34},85).to({regX:624.1,regY:4.8,scaleX:0.76,scaleY:0.76,x:665.2,y:-70.5,startPosition:32},11).to({regX:624.2,regY:4.7,scaleX:0.67,scaleY:0.67,x:694.7,y:-72.9,startPosition:20},39,cjs.Ease.get(1)).to({_off:true},301).wait(7));

	// BG
	this.instance_3 = new lib.Symbol8("synched",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(457.9,84.2,1.068,1.068,0,0,0,501.4,78.7);
	this.instance_3.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:78.6,scaleX:1,scaleY:1,x:474,y:81.2,alpha:1,startPosition:24},24).to({scaleX:0.96,scaleY:0.96,x:492.3,y:78,startPosition:45},21).to({x:511.3,startPosition:15},60).to({regX:501.6,regY:78.7,scaleX:0.73,scaleY:0.73,x:557.8,y:41.8,startPosition:22},11).to({regX:501.8,regY:78.5,scaleX:0.64,scaleY:0.64,x:599.8,y:26.2,startPosition:61},39,cjs.Ease.get(1)).to({_off:true},307).wait(1));

	// Layer 4
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(658.3,-53.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},72).to({y:-49.1},33).to({regX:0.1,regY:-0.1,scaleX:0.88,scaleY:0.88,x:674.9,y:-74.9},50).to({_off:true},307).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-471.8,1606,837);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pop
	this.instance = new lib.Symbol11copy("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.922},24,cjs.Ease.get(-0.97)).wait(684));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-724.2,-559.7,260.5,32.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,1.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-0.1,1.9,18.8,4.7,44,-1.1]},alpha:0.5,startPosition:12},12).to({guide:{path:[44.1,-1.2,71.7,-7.6,107,-24.3]},alpha:0,startPosition:6},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-33.5,70.8,70.8);


(lib.saloner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.interior("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(876.1,455.1,1,1,0,0,0,357.5,208);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({x:897.1,alpha:1,startPosition:25},25,cjs.Ease.get(0.2)).to({x:909.5,startPosition:40},15,cjs.Ease.get(-0.2)).to({x:954.7,startPosition:84},44).to({x:957.1,startPosition:91},2).to({x:987.1,alpha:0,startPosition:110},19,cjs.Ease.get(0.2)).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mdaylogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-131.2,-54.1,0.392,0.378,0,-16,164,0.6,-0.2);

	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-158.1,-4.8,0.392,0.378,0,139.5,-40.5,0.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},26).to({state:[]},23).wait(8689));

	// V Primary
	this.instance_2 = new lib.loonew("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-157.3,3.7,1.047,1.047,0,0,0,60.5,56);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:3.6,alpha:1},39,cjs.Ease.get(1)).wait(8699));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.7,-55,126.7,117.3);


(lib.cx5a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ca("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1272.9,-1248.7,1,1,0,0,0,574.5,2.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).wait(695));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.mazda_cx5_300x250_oct20adw = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.2,235,0.711,0.711,0,0,0,49.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(503));

	// logo
	this.instance_1 = new lib.mdaylogo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.1,34.2,0.42,0.42,0,0,0,-158.1,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(503));

	// txt
	this.instance_2 = new lib.Symbol13copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.3,431.2,0.663,0.663,0,0,0,93.3,21.7);

	this.instance_3 = new lib.Symbol19("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,37,1,1,0,0,0,-668.1,-569.3);

	this.instance_4 = new lib.Symbol17_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,296.6,0.719,0.719,0,0,0,0.2,-17.8);

	this.instance_5 = new lib.Symbol17copy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.9,187.3,0.73,0.73,0,0,0,0.1,-17.8);

	this.instance_6 = new lib.Symbol1_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(148.2,239.8,1,1,0,0,0,0,-8);

	this.instance_7 = new lib.pop("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,209.1,1,1,0,0,0,-668.3,-245.8);

	this.instance_8 = new lib.sp("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(190,31.2,0.841,0.841,0,0,0,-663.4,-75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(503));

	// anima
	this.instance_9 = new lib.cx5a("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(121.2,175.4,0.643,0.643,0,0,0,-1272.8,-1248.7);

	this.instance_10 = new lib.cx5a("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-175);

	this.instance_11 = new lib.saloner("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(188.9,137.5,0.628,0.628,0,0,0,370.4,302.4);

	this.instance_12 = new lib.color("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(159,168.1,0.974,0.974,90,0,0,283.8,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(503));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#353535","#000000"],[0,0.486,1],-5.9,-357.3,-5.9,250.4).s().p("EgXWAvRMAAAhehMAusAAAMAAABehg");
	this.shape.setTransform(150.6,209.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(503));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(151.1,32.1,354.2,604.9);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bgcx5.png", id:"bgcx5"},
		{src:"cx5new.png", id:"cx5new"},
		{src:"cx5.png", id:"cx5"},
		{src:"dawn.jpg", id:"dawn"},
		{src:"led.png", id:"led"},
		{src:"light.png", id:"light"},
		{src:"mlogonrew.png", id:"mlogonrew"},
		{src:"salon.png", id:"salon"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;