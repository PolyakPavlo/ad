(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Brend_top_300x250_atlas_P_", frames: [[0,0,287,260],[0,262,189,109]]},
		{name:"Brend_top_300x250_atlas_NP_", frames: [[0,671,171,331],[0,0,172,335],[0,337,171,332],[173,337,30,71]]}
];



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



(lib.Kreslo_Black = function() {
	this.spriteSheet = ss["Brend_top_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.KresloBlack_S = function() {
	this.spriteSheet = ss["Brend_top_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.KresloGold_S = function() {
	this.spriteSheet = ss["Brend_top_300x250_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Kulik_system_Logo_kvadrat = function() {
	this.spriteSheet = ss["Brend_top_300x250_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Setka = function() {
	this.spriteSheet = ss["Brend_top_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Ten = function() {
	this.spriteSheet = ss["Brend_top_300x250_atlas_P_"];
	this.gotoAndStop(1);
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


(lib.zdoroviekomfortunikalnost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(44.9,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-44.9,305.8,62.4);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Setka();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-130,287,260);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(-0.1,-13.1);

	// Layer 1
	this.instance = new lib.Kreslo_Black();
	this.instance.parent = this;
	this.instance.setTransform(-86,-178);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.instance_1 = new lib.Ten();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-176.1,189,351.2);


(lib.sovremenkreslo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-25.1,191.5,51.9);


(lib.kulik_system_logo_textsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-55.7,-46.4,26.9,96.7).s().p("ABTA/IAAhzIgJAAIhGBzIgFAAIhIhzIgIAAIAABzIgNAAIAAh9IAdAAIBBBqIBDhqIAdAAIAAB9g");
	this.shape.setTransform(202.2,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-45.7,-63.9,36.9,79.2).s().p("Ag5BAIAAh+IBzAAIAAAMIhmAAIAAArIBjAAIAAALIhjAAIAAAvIBmAAIAAANg");
	this.shape_1.setTransform(161.9,64.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-38.8,-81.4,43.8,61.7).s().p("AgGA/IAAhwIhAAAIAAgNICNAAIAAANIhAAAIAABwg");
	this.shape_2.setTransform(124.8,64.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-26.6,-96.8,56,46.3).s().p("AgiA+QgNAAgKgDQgIgFgGgHQgGgJAAgMIAPAAQAAAHACAHQAEAEAHAEQAIACANAAIA8AAQAQABAHgHQAJgGAAgMQAAgIgDgEQgFgHgGgBQgFgBgOAAIhBAAQgKAAgLgCQgJgCgFgDQgDgFgEgFIgBgPQAAgNAGgHQAFgHAJgEQAJgEAPAAIBBAAQAVAAAMAJQALAJAAASIgOAAQAAgIgEgEQgBgFgKgDQgHgDgMAAIg+AAQgLAAgHACQgHAEgCADQgCADAAAKQAAAIADADQADAFAGABQAHACAOAAIA7AAQANAAAPADQAIACAIAIQAEAIAAALIAAADQAAAOgEAIQgFAHgKADQgIADgQAAg");
	this.shape_3.setTransform(85.8,64.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-19.5,-115.3,63.1,27.8).s().p("AgGA/IAAg8IhGhBIAUAAIA5A3IA6g3IASAAIhFBBIAAA8g");
	this.shape_4.setTransform(46.7,64.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-7.2,-130.6,75.4,12.5).s().p("AghA+QgOAAgJgDQgJgFgGgHQgFgJAAgMIAOAAQAAAHADAHQADAEAIAEQAHACANAAIA9AAQAPABAIgHQAIgGAAgMQAAgIgDgEQgEgHgGgBQgFgBgOAAIhBAAQgKAAgMgCQgJgCgEgDQgEgFgDgFIgCgPQAAgNAFgHQAEgHAKgEQALgEANAAIBBAAQAWAAALAJQALAJAAASIgNAAQAAgIgDgEQgDgFgIgDQgHgDgNAAIg+AAQgLAAgHACQgHAEgCADQgCADAAAKQAAAHADAEQADAFAHABQAGACAPAAIA6AAQANAAAPADQAKACAGAIQAFAJAAAKIAAADQAAANgFAJQgFAHgJADQgJADgQAAg");
	this.shape_5.setTransform(7.8,64.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-71,-20.2,11.6,122.9).s().p("ACNDPIkEi3IhAAAIAAC3Ig6AAIAAmeIA6AAIAACwIA6AAIEAiwIBnAAIkkDLIEtDTg");
	this.shape_6.setTransform(187.8,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-62.1,-35.6,20.5,107.5).s().p("AgcDPIAAmeIA5AAIAAGeg");
	this.shape_7.setTransform(152.1,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-55.1,-47.5,27.5,95.6).s().p("Ai1DQIAAmfIA9AAIAAFnIEuAAIAAA4g");
	this.shape_8.setTransform(124.5,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-44.7,-69.1,37.9,74).s().p("Ai8C+QgigVAAhVIAAkmIA7AAIAAElIABAAQAAAwAaAMQAWALByAAQBuAAAcgLQAZgLAAgxIAAklIA8AAIAAEmQAABVgiAUQgiAWicAAQiaAAghgVg");
	this.shape_9.setTransform(77.2,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#E3C340","#F9F299","#F3E583","#EAD05E","#E5C348","#E3BE41","#F7EF93","#EAC766","#E2AC48","#E3C340"],[0,0.329,0.353,0.392,0.424,0.443,0.608,0.702,0.773,1],-30.3,-90.5,52.3,52.6).s().p("ACODPIkEi3IhAAAIAAC3Ig8AAIAAmeIA8AAIAACwIA6AAIEAiwIBnAAIklDLIEtDTg");
	this.shape_10.setTransform(25.3,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B30924").s().p("AlfAVIAAgpIK+AAIAAApg");
	this.shape_11.setTransform(176.8,49.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#379A37").s().p("AlfAVIAAgpIK+AAIAAApg");
	this.shape_12.setTransform(36.2,49.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AwdAVIAAgpMAg7AAAIAAApg");
	this.shape_13.setTransform(106.4,49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,70.7);


(lib.Kulik_System_logo_kvadrat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// maska (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah4FhQgMAAgIgJQgIgIAAgMIAAqHQAAgMAIgIQAIgJAMAAIDxAAQALAAAJAJQAIAIAAAMIAAKHQAAAMgIAIQgJAJgLAAg");

	// logo
	this.instance = new lib.Kulik_system_Logo_kvadrat();
	this.instance.parent = this;
	this.instance.setTransform(-15,-35.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Kulik_System_logo_kvadrat, new cjs.Rectangle(-14.9,-35.3,29.9,70.6), null);


(lib.KresloY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AASZAQgEgEAAgFIgBgTQgQgCgTABIgDAFIgCASQgBAIgOACQgPADgEgKQgFgKABgDIABgFQgLgDAAgQIABgdQAAgNABgKQACgKADgDQAEgEAGAAQABgHAGgHQAFgFAIgBIAClgIgIgBQgHAAgGgEQgJgEgIgNIgMgWIgCgHQojCXgEAFIAHABQAEABACADQAEAFgBAHQAJAEACAJQAEAGgBAIIgDAlIABAKQABALgIAGQgCASgRACQgKABgHgFQgHgEACgHQACgIAAgIIABgLQgKABgKgDQgGgBgHADQAEARgGASQAAADgEAAIgOAAQgHAAgKgCQgLgCgBgfQAAgcAEgcQADgZAUgBIABgJIACgIIAAgBIABgBIgBgDQgFgDABgIQACgIAIAAIAAAAIAFgCQAOgBAPgDII2i8Qg4gYgPgFQgQgFgXgLIgjgPIgtgQQgJgDgMAAQAAANgDAQQgEASAAAIQgCAVgVgFQgHgBgEgGQgDgHAAgIIAAgKQgGgBgGAAIgLABIgDAWQgCAKgMABQgLABgFgGQgCgCgBgHIgCgPQgDgLADgfQADgbALgFIAGgJQAHgGgCgCQgCgEAAgDIACgIQACgEAFgCIAHgCQACAAADACIAKADIAYAEIA6AOIAcAJQAGABAOAFIATAIQANADAaAIQAZAJANADIBSAcIgBkOIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABgBIAAgBIABAAIABgBIABAAIAAAAIABgBIABAAIABAAIADAAIAAAAIABAAIABABIABAAIABAAIABACIALgCIgBgeIgmABIg1ACQgTAAABgIIACgUImtABQABgUgHAEQgHADgBgLIgBgZQAAgPgJgWQgJgYACgiIAIhEQgEgBgHAFQgJAFgEABIgEAEQgMAKgNAEQgPAEgQgGQgRgFgBgMQgCgKgBgaQgBgbACgOQACgTACgJIAEgFIAAgHIAAgYQgJgLgBgOIgDgjQgCgSAAgaIgGiGQgBgVgEgVQgQgDgPgMIgPgKQgUgKgNgKQgOgLgLgOQgBgWAPgNQAOgMAKgFIAMgHQgDgaAQgRQAPgRAWgDQAXgFAdgDIAbgDQAPgDAXAHQAWAHAPAGQAQAGARASQAGAOgNAMQgNAMgPAJIAFAbQABAJgCAMQgKAMgPAIIgbAOQgDARABASIAAAhIABAdQABAYgBAeIgBA/IAAAyIABAkIgLAOIADAbQAIAHAAAIIABATQACASgBAVIAGAIIACAFIABgDQACgEAJgBIAMgdQAEgMADgNQANhDgBgMQAAgfANgOQAKgKAsgVQAqgVBUgVIgBgNQgNgagFgRQgIgYACgUQg9g/gbgrQghgzgEgvQgFg3ADglQAEgsAPghQAghIAOg1QAOg4AChdQABhggViDQgWiEgfhWQgfhXAAgtQABgwAXg/QAYhEAXgsQAZguAbAEQAGgBAOAJIAaAVIAGgCQAVgfAgg3QAdgzAJgLQAMgRAlgCIBiABIFgABQATAFANAKQAPAMAPAXQAZAnArBLQAmgYAWgCQAWgBAKASQASAfAVA9IAWBDQANAnAIAgQAGASgCAVQgFASgMAeQgZA6gZBXQgNAugRB9IgPB0QgHByAIA8QACAQARBDQAIAfASAmIAYA1QASAxgCAqQgDAugJAeQgKAigYAiIgpBAQgUAegRAPQABAVgHAVQgFAPgLAUIAFAUQB4AcAwArQATARAGARQAEAMgBAQQgBAaACAgQANAEAEAOQADAHABAUQAAADANgCQAOgCABgHQACgYgBgNQgCgOAHgBQAEAAALAEIAAgBIgCgXQgMgFgCgDQgDgCAAgQIAAhHIAAiuIgBguIgvgcQgJgJAHgdQAGgcgCgBQgtgTAAgRQAAgJAzgXQAwgWAJABQAcACBfAfQACAAABAsQAqAcAOAaQACAEACAHQABAKgEADQgMAKgrAfIgzAkQgFArgLCyIgDApIgMAGIABAcQAJgCADAKQACAHgBAXIgEBAQgCAcgggCQgagCgGgHIgFgLIgaAAQAIApAAAWQABAcgLAWIgJAdIgJABQgIACAAACQAAAEAHALIAIANQAFAFgFALIgDAGIAAAAIgEADIgBABIgBAAIAAAAIgCAAIgBABIgFAAIAAgBImuAAIAAAbIhagCIABAaQAFAAABADIAAgBIABAAIABAAIABgBIADAAIAAABIABAAIABAAIABABIABAAIACACIAAABIABAAIAAABIAAAAIAAABIABAAIAAACIAAAAIgCELIAZgGIBtgmIB0gpQAfgJAkgEQAVADgCAWQAFAFgCAJIABADQAFAJAHAHQAEAEAAAFQAAAUACAQQABANgCAJQgCAIgFAGQgLAMgLgMQgFgGAAgHQABgIgDgHQgEAAgFACQgEACgGAAQgCANgEANQAAADgFACQgSAFgIgPQgDgGAAgFQgHgDgBgJIgBgPIgBgKQABgEgBgEQAAgEABgKIg0AYQgnATgLAEIhoAwIJUC5QAFACgBAGQADAFgBAIQgBAGABAGQABAJAIAGQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAAGQARABAAARQADAYgEAXIgBAGIAAACQAGAVgVAEQgOADgLgIQgDgCAAgEIAAgMQgQgCgPADQACALgJAIIAAACIgVAAIAAgBQgRgEADgUIAAgOQgCgPACgRIgBgOQgCgSAHgHIABgBQABgHAMgIQgTgHgzgNInoiFIgFANQgGAPgGAEQgHAGgLAGQgLAHgFAAIgEFlQARgBAFAPIAEALIABAHQAOAEAAARIAAATIAAAJQABARgOAIQADAMgEALQgBAFgGABIgFAAQgLAAgIgHg");
	mask.setTransform(0.3,-13.1);

	// Layer 1
	this.instance = new lib.KresloGold_S();
	this.instance.parent = this;
	this.instance.setTransform(-84,-178);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Ten();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-173.8,189,348.9);


(lib.Kreslo_Black_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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ACgJgGQgEgEgBgFQAAgJABgIIkgAAIABAeIhmgDIAAAKIgBANIAOADIABAAIABgBIABAAIAAAAIACAAIABAAIABAAIABAAIABABIAAAAIABAAIABABIACACIAAAAIAAAAIAAABIABABIAAAAIAAABIAAABIABABIAAExIAegGQATgEAqgPQAqgOAugLIBOgUQAggJAjgDQAVADgCAVQAFAFgCAKIABADQAFAIAHAIQAEADAAAFQAAATACASQABALgCALQgCAHgFAGQgLAMgLgLQgGgGABgIQABgHgDgHQgEAAgFACQgFACgFAAQgCANgEAMQgBAEgEABQgSAFgIgPQgDgFAAgFQgHgDgBgJIgBgQIgBgKIAAgHQAAgFABgKQgdAOgbAJIhOAdIg6AXIBEAXIA6ATIAnANIAlAMIAsAQQAYAJAfAJIA0APIApANIArAMQAoALAoAOIAiALIAcAKIAWAIQAFACgBAFQADAGgBAIIAAALQABAJAIAGQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQgBADABADQAQAAABASQACAXgDAYIgBAGIAAACQAGAUgVAFQgOADgLgIQgDgDAAgEIAAgMQgQgBgPADQACALgJAIIgBACQgBAOgOgFQgFgCAAgGIAAgDQgRgEADgTQABgHgBgIQgCgQACgQQAAgHgBgHQgBgMAIgJIABgBQABgMAKgHQgjgMgggIQghgJgkgMQgjgMgdgHQgcgGgagIIgxgPIgcgIQgrgHgpgNQgogNgogJQgogJgmgQIgGAIIgKAQQgJAQgSADIgUADIAAF9QARgBAEAPIAEALQACAEAAAEQAOAEAAARIgBASIAAAKQABAQgOAJQADALgDALQgCAGgGAAIgFABQgKAAgIgHgAgNSqIACgBIgCgKgAnkIQIgCAZIgBADIFeAAIgBgbQhqgChrAAIiFABgACYINIgUAQIABANIF3AAIAAgIQgCgLAEgLg");
	mask.setTransform(0.1,-13.4);

	// Layer 1
	this.instance = new lib.KresloBlack_S();
	this.instance.parent = this;
	this.instance.setTransform(-86,-181);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Ten();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-177.1,189,355.1);


(lib.Etosovremennoekreslo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(3.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-24.5,217,62.9);


(lib.buttonai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E9BE4D","#F9ED94","#E8B34F"],[0,0.498,1],-106.3,0,106.3,0).s().p("AvqDIQgZAAgSgSQgRgSAAgZIAAkVQAAgZARgSQASgSAZAAIfVAAQAZAAASASQARASAAAZIAAEVQAAAZgRASQgSASgZAAg");
	this.shape.setTransform(106.3,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.7,40);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,0,0,0)"],[0,1],0,0,0,0,0,218.6).s().p("A31X1Qp3p4AAt9QAAt8J3p5QJ5p3N8AAQN+AAJ3J3QJ4J5AAN8QAAN9p4J4Qp3J4t+AAQt8AAp5p4g");
	this.shape.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.7,-216.9,431.4,431.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgRaAvgMAAAg6qMAi1AAAMAAAA6qg");
	var mask_graphics_1 = new cjs.Graphics().p("EgRaAr2MAAAg6rMAi1AAAMAAAA6rg");
	var mask_graphics_2 = new cjs.Graphics().p("EgRaAoLMAAAg6qMAi1AAAMAAAA6qg");
	var mask_graphics_3 = new cjs.Graphics().p("EgRaAkhMAAAg6rMAi1AAAMAAAA6rg");
	var mask_graphics_4 = new cjs.Graphics().p("EgRaAg2MAAAg6qMAi1AAAMAAAA6qg");
	var mask_graphics_5 = new cjs.Graphics().p("AxadWMAAAg6rMAi1AAAMAAAA6rg");
	var mask_graphics_6 = new cjs.Graphics().p("AxadWMAAAg6rMAi1AAAMAAAA6rg");
	var mask_graphics_7 = new cjs.Graphics().p("AxadWMAAAg6rMAi1AAAMAAAA6rg");
	var mask_graphics_8 = new cjs.Graphics().p("AxadWMAAAg6rMAi1AAAMAAAA6rg");
	var mask_graphics_9 = new cjs.Graphics().p("AxadWMAAAg6rMAi1AAAMAAAA6rg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.7,y:304}).wait(1).to({graphics:mask_graphics_1,x:-1.7,y:280.6}).wait(1).to({graphics:mask_graphics_2,x:-1.7,y:257.1}).wait(1).to({graphics:mask_graphics_3,x:-1.7,y:233.7}).wait(1).to({graphics:mask_graphics_4,x:-1.7,y:210.2}).wait(1).to({graphics:mask_graphics_5,x:-1.7,y:185.8}).wait(1).to({graphics:mask_graphics_6,x:-1.7,y:138.9}).wait(1).to({graphics:mask_graphics_7,x:-1.7,y:92}).wait(1).to({graphics:mask_graphics_8,x:-1.7,y:45.1}).wait(1).to({graphics:mask_graphics_9,x:-1.7,y:-1.8}).wait(211));

	// Layer 1
	this.instance = new lib.Kreslo_Black_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logo_kulik_system = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kulik_system_logo_textsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.9,0,1,1,0,0,0,106,35.3);

	this.instance_1 = new lib.Kulik_System_logo_kvadrat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-109.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.9,-35.5,249.8,71);


(lib.Logovector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_kulik_system("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.7,0.3,0.848,0.848,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-29.8,211.9,60);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC5BFIAAgZIhcAAIAAAZIgPAAIAAgmIAFAAQALgBAFgQQAEgPABgeIABgkIBOAAIAABiIARAAIAAAmgAB2gdQgBAXgDAPQgDAPgHAHIBAAAIAAhTIgxAAgAuAArIAEgMQAGABAFAAQAKABAHgLIADgFIgthUIARAAIAkBHIAlhHIAQAAIgyBcQgGALgHAFQgJAGgJAAQgHAAgIgEgAFkAnQgOgIgHgNQgJgOAAgPQAAgQAJgNQAHgNAOgHQANgIASAAQAQAAANAIQAOAHAIANQAHANAAAQQAAAQgHANQgIANgOAIQgNAHgQAAQgSAAgNgHgAFsgwQgKAFgGALQgFAKAAALQAAALAFALQAGAJAKAGQAKAFANABQALgBAKgFQALgGAFgJQAGgLgBgLQABgLgGgKQgFgLgLgFQgKgGgLAAQgNAAgKAGgAgVAnQgOgIgHgNQgJgOAAgPQAAgQAJgNQAHgNAOgHQANgIARAAQAQAAANAIQAOAHAIANQAHANAAAQQAAAQgHANQgIANgOAIQgNAHgQAAQgRAAgNgHgAgNgwQgKAFgGALQgFAKAAALQAAALAFALQAGAJAKAGQAKAFAMABQALgBAKgFQALgGAFgJQAGgLgBgLQABgLgGgKQgFgLgLgFQgKgGgLAAQgMAAgKAGgAsFAqQgMgDgJgHIAGgLQAHAFAKADQAJADAJAAQAOAAAIgGQAKgFAAgKQAAgJgHgEQgHgEgMAAIgZAAIAAgNIAXAAQALAAAGgEQAGgEAAgJQAAgIgIgFQgHgFgMgBQgJAAgIADQgHACgIAEIgFgMQAJgFAJgDQAKgCAJAAQAMAAAJADQALAEAFAHQAHAHAAAJQAAAJgGAHQgEAGgIADQAKADAGAHQAGAHAAAJQAAAKgGAIQgHAHgKAEQgLAEgMAAQgLAAgLgEgAM6AsIAAhvIBPAAIAAAPIg/AAIAAAiIA4AAIAAAOIg4AAIAAAjIBCAAIAAANgALQAsIAAhvIBOAAIAAAPIg/AAIAAAiIA5AAIAAAOIg5AAIAAAjIBCAAIAAANgAKcAsIAAgwIg/AAIAAAwIgRAAIAAhvIARAAIAAAwIA/AAIAAgwIARAAIAABvgAHXAsIAAhvIBVAAIAAAOIhEAAIAAAgIAiAAQAUAAAKAIQALAIAAAQQAAAQgMAIQgLAJgVAAgAHoAgIAfAAQAOAAAHgGQAHgEAAgLQAAgTgcAAIgfAAgADeAsIAAhvIArAAQAXAAAMALQAMAKAAASQAAATgMAJQgMALgXAAIgbAAIAAAhgADugDIAbAAQAPAAAJgGQAHgHABgMQgBgMgHgGQgJgHgPABIgbAAgAhcAsIAAhgIhBAAIAABgIgQAAIAAhvIBhAAIAABvgAlKAsIAAhvIARAAIAAAnIAgAAQAVABAKAIQALAJAAARQAAASgLAKQgMAKgWgBgAk5AgIAdAAQAOAAAHgHQAIgGAAgMQAAgWgdAAIgdAAgAmTAsIAAhgIgmAAIAAgPIBcAAIAAAPIgmAAIAABggAnPAsIgMgcIg8AAIgLAcIgRAAIAzhvIAPAAIAzBvgAoQAEIAvAAIgXg2gApXAsIAAgwIhAAAIAAAwIgQAAIAAhvIAQAAIAAAwIBAAAIAAgwIARAAIAABvg");
	this.shape.setTransform(-0.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.instance = new lib.buttonai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.751,0,0,0,106.3,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.3,-15,212.7,30);


// stage content:
(lib.Brend_top_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.instance = new lib.Logovector("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-62,27.1,0.563,0.563,0,0,0,0.6,0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regX:0.2,regY:0.3,x:75.6,y:26.9,alpha:1},12).to({regY:0.2,scaleX:0.56,scaleY:0.56,y:26.8},10).to({startPosition:0},134).to({alpha:0},5).to({_off:true},1).wait(39).to({_off:false,regX:0.6,regY:0.7,scaleX:0.56,scaleY:0.56,x:-62,y:27.1},0).to({regX:0.2,regY:0.3,x:75.6,y:26.9,alpha:1},12).to({regY:0.2,scaleX:0.56,scaleY:0.56,y:26.8},10).to({startPosition:0},134).to({alpha:0},5).to({_off:true},1).wait(39).to({_off:false,regX:0.6,regY:0.7,scaleX:0.56,scaleY:0.56,x:-62,y:27.1},0).to({regX:0.2,regY:0.3,x:75.6,y:26.9,alpha:1},12).to({regY:0.2,scaleX:0.56,scaleY:0.56,y:26.8},10).wait(121));

	// Button
	this.instance_1 = new lib.Button("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.9,146.8,0.561,0.561,0,0,0,0.2,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).to({alpha:1},6).to({startPosition:0},14).to({alpha:0},5).to({_off:true},1).wait(175).to({_off:false},0).to({alpha:1},6).to({startPosition:0},14).to({alpha:0},5).to({_off:true},1).wait(175).to({_off:false},0).to({alpha:1},6).wait(1));

	// Eto sovremennoe kreslo
	this.instance_2 = new lib.Etosovremennoekreslo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(216.9,23.2,0.546,0.546,0,0,0,0.3,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({alpha:1},12).to({startPosition:0},23).to({alpha:0},5).to({_off:true},1).wait(160).to({_off:false},0).to({alpha:1},12).to({startPosition:0},23).to({alpha:0},5).to({_off:true},1).wait(160).to({_off:false},0).to({alpha:1},12).wait(10));

	// zdorovie komfort unikalnost
	this.instance_3 = new lib.zdoroviekomfortunikalnost("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(351.2,32.9,0.427,0.427,0,0,0,0.1,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).to({x:198.6,alpha:1},9).to({startPosition:0},43).to({alpha:0},7).to({_off:true},9).wait(133).to({_off:false,x:351.2},0).to({x:198.6,alpha:1},9).to({startPosition:0},43).to({alpha:0},7).to({_off:true},9).wait(133).to({_off:false,x:351.2},0).to({x:198.6,alpha:1},9).to({startPosition:0},43).to({alpha:0},7).to({_off:true},9).wait(19));

	// Icon
	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,135.4,0.512,0.512,0,0,0,0.3,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(93).to({_off:false},0).to({alpha:1},16).to({startPosition:0},10).to({startPosition:0},13).to({alpha:0},17).to({startPosition:0},46).to({startPosition:0},5).to({_off:true},1).wait(93).to({_off:false},0).to({alpha:1},16).to({startPosition:0},10).to({startPosition:0},13).to({alpha:0},17).to({startPosition:0},46).to({startPosition:0},5).to({_off:true},1).wait(93).to({_off:false},0).to({alpha:1},16).to({startPosition:0},10).to({startPosition:0},13).to({alpha:0},17).wait(33));

	// Mask2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_149 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_150 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_151 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_152 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_153 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_154 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_155 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_156 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_157 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_158 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_159 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_160 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_161 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_162 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_350 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_351 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_352 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_353 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_354 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_355 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_356 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_357 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_358 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_359 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_360 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_361 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_362 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_363 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_551 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_552 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_553 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_554 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_555 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_556 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_557 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_558 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_559 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_560 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_561 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_562 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_563 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_graphics_564 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_graphics_149,x:133.4,y:-181.6}).wait(1).to({graphics:mask_graphics_150,x:133.4,y:-144.4}).wait(1).to({graphics:mask_graphics_151,x:133.4,y:-107.3}).wait(1).to({graphics:mask_graphics_152,x:133.4,y:-70.1}).wait(1).to({graphics:mask_graphics_153,x:133.4,y:-33}).wait(1).to({graphics:mask_graphics_154,x:133.4,y:4.1}).wait(1).to({graphics:mask_graphics_155,x:133.4,y:41.3}).wait(1).to({graphics:mask_graphics_156,x:133.4,y:78.4}).wait(1).to({graphics:mask_graphics_157,x:133.4,y:115.6}).wait(1).to({graphics:mask_graphics_158,x:133.4,y:152.7}).wait(1).to({graphics:mask_graphics_159,x:133.4,y:189.8}).wait(1).to({graphics:mask_graphics_160,x:133.4,y:227}).wait(1).to({graphics:mask_graphics_161,x:133.4,y:264.1}).wait(1).to({graphics:mask_graphics_162,x:133.4,y:301}).wait(1).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_graphics_350,x:133.4,y:-181.6}).wait(1).to({graphics:mask_graphics_351,x:133.4,y:-144.4}).wait(1).to({graphics:mask_graphics_352,x:133.4,y:-107.3}).wait(1).to({graphics:mask_graphics_353,x:133.4,y:-70.1}).wait(1).to({graphics:mask_graphics_354,x:133.4,y:-33}).wait(1).to({graphics:mask_graphics_355,x:133.4,y:4.1}).wait(1).to({graphics:mask_graphics_356,x:133.4,y:41.3}).wait(1).to({graphics:mask_graphics_357,x:133.4,y:78.4}).wait(1).to({graphics:mask_graphics_358,x:133.4,y:115.6}).wait(1).to({graphics:mask_graphics_359,x:133.4,y:152.7}).wait(1).to({graphics:mask_graphics_360,x:133.4,y:189.8}).wait(1).to({graphics:mask_graphics_361,x:133.4,y:227}).wait(1).to({graphics:mask_graphics_362,x:133.4,y:264.1}).wait(1).to({graphics:mask_graphics_363,x:133.4,y:301}).wait(1).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_graphics_551,x:133.4,y:-181.6}).wait(1).to({graphics:mask_graphics_552,x:133.4,y:-144.4}).wait(1).to({graphics:mask_graphics_553,x:133.4,y:-107.3}).wait(1).to({graphics:mask_graphics_554,x:133.4,y:-70.1}).wait(1).to({graphics:mask_graphics_555,x:133.4,y:-33}).wait(1).to({graphics:mask_graphics_556,x:133.4,y:4.1}).wait(1).to({graphics:mask_graphics_557,x:133.4,y:41.3}).wait(1).to({graphics:mask_graphics_558,x:133.4,y:78.4}).wait(1).to({graphics:mask_graphics_559,x:133.4,y:115.6}).wait(1).to({graphics:mask_graphics_560,x:133.4,y:152.7}).wait(1).to({graphics:mask_graphics_561,x:133.4,y:189.8}).wait(1).to({graphics:mask_graphics_562,x:133.4,y:227}).wait(1).to({graphics:mask_graphics_563,x:133.4,y:264.1}).wait(1).to({graphics:mask_graphics_564,x:133.4,y:301}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Gold Kreslo
	this.instance_5 = new lib.KresloY("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,159.8,0.524,0.524,0,0,0,0.1,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({_off:false},0).wait(12).to({startPosition:0},0).to({regY:0.4,x:217.1,y:158.5},9).wait(25).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(149).to({_off:false,regY:0.5,x:150,y:159.8,alpha:1},0).wait(12).to({startPosition:0},0).to({regY:0.4,x:217.1,y:158.5},9).wait(25).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(149).to({_off:false,regY:0.5,x:150,y:159.8,alpha:1},0).wait(12).to({startPosition:0},0).to({regY:0.4,x:217.1,y:158.5},9).wait(12));

	// Mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_149 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_150 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_151 = new cjs.Graphics().p("AwS58MAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AwS3JMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AwS0WMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AwSxjMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AwSuwMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AwSr9MAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_157 = new cjs.Graphics().p("AwSpKMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_158 = new cjs.Graphics().p("AwSmXMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_159 = new cjs.Graphics().p("AwSjkMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_160 = new cjs.Graphics().p("AwSgxMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_161 = new cjs.Graphics().p("AwSCBMAlIgXmMAAABN4MglIAXng");
	var mask_1_graphics_162 = new cjs.Graphics().p("AwSE0MAlIgXmMAAABN4MglIAXng");
	var mask_1_graphics_350 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_351 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_352 = new cjs.Graphics().p("AwS58MAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AwS3JMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AwS0WMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AwSxjMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AwSuwMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AwSr9MAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_358 = new cjs.Graphics().p("AwSpKMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_359 = new cjs.Graphics().p("AwSmXMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_360 = new cjs.Graphics().p("AwSjkMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_361 = new cjs.Graphics().p("AwSgxMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_362 = new cjs.Graphics().p("AwSCBMAlIgXmMAAABN4MglIAXng");
	var mask_1_graphics_363 = new cjs.Graphics().p("AwSE0MAlIgXmMAAABN4MglIAXng");
	var mask_1_graphics_551 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_552 = new cjs.Graphics().p("AwS7IMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_553 = new cjs.Graphics().p("AwS58MAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_554 = new cjs.Graphics().p("AwS3JMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_555 = new cjs.Graphics().p("AwS0WMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_556 = new cjs.Graphics().p("AwSxjMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_557 = new cjs.Graphics().p("AwSuwMAlIgXnMAAABN5MglIAXmg");
	var mask_1_graphics_558 = new cjs.Graphics().p("AwSr9MAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_559 = new cjs.Graphics().p("AwSpKMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_560 = new cjs.Graphics().p("AwSmXMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_561 = new cjs.Graphics().p("AwSjkMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_562 = new cjs.Graphics().p("AwSgxMAlIgXnMAAABN4MglIAXng");
	var mask_1_graphics_563 = new cjs.Graphics().p("AwSCBMAlIgXmMAAABN4MglIAXng");
	var mask_1_graphics_564 = new cjs.Graphics().p("AwSE0MAlIgXmMAAABN4MglIAXng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_1_graphics_149,x:133.4,y:268.4}).wait(1).to({graphics:mask_1_graphics_150,x:133.4,y:304.2}).wait(1).to({graphics:mask_1_graphics_151,x:133.4,y:332.4}).wait(1).to({graphics:mask_1_graphics_152,x:133.4,y:350.3}).wait(1).to({graphics:mask_1_graphics_153,x:133.4,y:368.2}).wait(1).to({graphics:mask_1_graphics_154,x:133.4,y:386.1}).wait(1).to({graphics:mask_1_graphics_155,x:133.4,y:404}).wait(1).to({graphics:mask_1_graphics_156,x:133.4,y:421.9}).wait(1).to({graphics:mask_1_graphics_157,x:133.4,y:439.8}).wait(1).to({graphics:mask_1_graphics_158,x:133.4,y:457.7}).wait(1).to({graphics:mask_1_graphics_159,x:133.4,y:475.6}).wait(1).to({graphics:mask_1_graphics_160,x:133.4,y:493.5}).wait(1).to({graphics:mask_1_graphics_161,x:133.4,y:511.4}).wait(1).to({graphics:mask_1_graphics_162,x:133.4,y:529.3}).wait(1).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_1_graphics_350,x:133.4,y:268.4}).wait(1).to({graphics:mask_1_graphics_351,x:133.4,y:304.2}).wait(1).to({graphics:mask_1_graphics_352,x:133.4,y:332.4}).wait(1).to({graphics:mask_1_graphics_353,x:133.4,y:350.3}).wait(1).to({graphics:mask_1_graphics_354,x:133.4,y:368.2}).wait(1).to({graphics:mask_1_graphics_355,x:133.4,y:386.1}).wait(1).to({graphics:mask_1_graphics_356,x:133.4,y:404}).wait(1).to({graphics:mask_1_graphics_357,x:133.4,y:421.9}).wait(1).to({graphics:mask_1_graphics_358,x:133.4,y:439.8}).wait(1).to({graphics:mask_1_graphics_359,x:133.4,y:457.7}).wait(1).to({graphics:mask_1_graphics_360,x:133.4,y:475.6}).wait(1).to({graphics:mask_1_graphics_361,x:133.4,y:493.5}).wait(1).to({graphics:mask_1_graphics_362,x:133.4,y:511.4}).wait(1).to({graphics:mask_1_graphics_363,x:133.4,y:529.3}).wait(1).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_1_graphics_551,x:133.4,y:268.4}).wait(1).to({graphics:mask_1_graphics_552,x:133.4,y:304.2}).wait(1).to({graphics:mask_1_graphics_553,x:133.4,y:332.4}).wait(1).to({graphics:mask_1_graphics_554,x:133.4,y:350.3}).wait(1).to({graphics:mask_1_graphics_555,x:133.4,y:368.2}).wait(1).to({graphics:mask_1_graphics_556,x:133.4,y:386.1}).wait(1).to({graphics:mask_1_graphics_557,x:133.4,y:404}).wait(1).to({graphics:mask_1_graphics_558,x:133.4,y:421.9}).wait(1).to({graphics:mask_1_graphics_559,x:133.4,y:439.8}).wait(1).to({graphics:mask_1_graphics_560,x:133.4,y:457.7}).wait(1).to({graphics:mask_1_graphics_561,x:133.4,y:475.6}).wait(1).to({graphics:mask_1_graphics_562,x:133.4,y:493.5}).wait(1).to({graphics:mask_1_graphics_563,x:133.4,y:511.4}).wait(1).to({graphics:mask_1_graphics_564,x:133.4,y:529.3}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Black Kreslo
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.3,160.3,0.515,0.515,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).wait(9).to({startPosition:50},0).to({_off:true},96).wait(96).to({_off:false,startPosition:0},0).wait(9).to({startPosition:50},0).to({_off:true},96).wait(96).to({_off:false,startPosition:0},0).wait(9).to({startPosition:50},0).to({_off:true},96).wait(20));

	// sovremen kreslo
	this.instance_7 = new lib.sovremenkreslo("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.3,124.8,0.417,0.417,0,0,0,0.3,0.4);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.1,regY:0.3,scaleX:0.65,scaleY:0.65,x:150.4,y:124.3,alpha:1},6).to({regX:0.3,x:150.6},4).to({regY:0.4,scaleY:0.65,x:150.4,y:26.5},15).to({startPosition:0},19).to({scaleY:0.65,x:222.7},7).to({startPosition:0},28).to({alpha:0},12).to({startPosition:0},104).to({startPosition:0},5).to({scaleX:0.42,scaleY:0.42,x:150.3,y:124.8},1).to({regX:0.1,regY:0.3,scaleX:0.65,scaleY:0.65,x:150.4,y:124.3,alpha:1},6).to({regX:0.3,x:150.6},4).to({regY:0.4,scaleY:0.65,x:150.4,y:26.5},15).to({startPosition:0},19).to({scaleY:0.65,x:222.7},7).to({startPosition:0},28).to({alpha:0},12).to({startPosition:0},104).to({startPosition:0},5).to({scaleX:0.42,scaleY:0.42,x:150.3,y:124.8},1).to({regX:0.1,regY:0.3,scaleX:0.65,scaleY:0.65,x:150.4,y:124.3,alpha:1},6).to({regX:0.3,x:150.6},4).to({regY:0.4,scaleY:0.65,x:150.4,y:26.5},15).to({startPosition:0},19).to({scaleY:0.65,x:222.7},7).to({startPosition:0},28).to({alpha:0},12).wait(91));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_59 = new cjs.Graphics().p("AuRTiMAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AuRR3MAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AuRQMMAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AuRTiMAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AuRR3MAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AuRQMMAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_267 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_268 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_461 = new cjs.Graphics().p("AuRTiMAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_462 = new cjs.Graphics().p("AuRR3MAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_463 = new cjs.Graphics().p("AuRQMMAAAggOMAi1AAAMAAAAgOg");
	var mask_2_graphics_464 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_465 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_466 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_467 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_468 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_469 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");
	var mask_2_graphics_470 = new cjs.Graphics().p("AuRQHMAAAggNMAi1AAAMAAAAgNg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_2_graphics_59,x:131.6,y:125}).wait(1).to({graphics:mask_2_graphics_60,x:131.6,y:114.3}).wait(1).to({graphics:mask_2_graphics_61,x:131.6,y:103.6}).wait(1).to({graphics:mask_2_graphics_62,x:131.6,y:82.6}).wait(1).to({graphics:mask_2_graphics_63,x:131.6,y:61.2}).wait(1).to({graphics:mask_2_graphics_64,x:131.6,y:39.8}).wait(1).to({graphics:mask_2_graphics_65,x:131.6,y:18.4}).wait(1).to({graphics:mask_2_graphics_66,x:131.6,y:-3}).wait(1).to({graphics:mask_2_graphics_67,x:131.6,y:-24.4}).wait(1).to({graphics:mask_2_graphics_68,x:131.6,y:-45.6}).wait(21).to({graphics:null,x:0,y:0}).wait(171).to({graphics:mask_2_graphics_260,x:131.6,y:125}).wait(1).to({graphics:mask_2_graphics_261,x:131.6,y:114.3}).wait(1).to({graphics:mask_2_graphics_262,x:131.6,y:103.6}).wait(1).to({graphics:mask_2_graphics_263,x:131.6,y:82.6}).wait(1).to({graphics:mask_2_graphics_264,x:131.6,y:61.2}).wait(1).to({graphics:mask_2_graphics_265,x:131.6,y:39.8}).wait(1).to({graphics:mask_2_graphics_266,x:131.6,y:18.4}).wait(1).to({graphics:mask_2_graphics_267,x:131.6,y:-3}).wait(1).to({graphics:mask_2_graphics_268,x:131.6,y:-24.4}).wait(1).to({graphics:mask_2_graphics_269,x:131.6,y:-45.6}).wait(21).to({graphics:null,x:0,y:0}).wait(171).to({graphics:mask_2_graphics_461,x:131.6,y:125}).wait(1).to({graphics:mask_2_graphics_462,x:131.6,y:114.3}).wait(1).to({graphics:mask_2_graphics_463,x:131.6,y:103.6}).wait(1).to({graphics:mask_2_graphics_464,x:131.6,y:82.6}).wait(1).to({graphics:mask_2_graphics_465,x:131.6,y:61.2}).wait(1).to({graphics:mask_2_graphics_466,x:131.6,y:39.8}).wait(1).to({graphics:mask_2_graphics_467,x:131.6,y:18.4}).wait(1).to({graphics:mask_2_graphics_468,x:131.6,y:-3}).wait(1).to({graphics:mask_2_graphics_469,x:131.6,y:-24.4}).wait(1).to({graphics:mask_2_graphics_470,x:131.6,y:-45.6}).wait(21).to({graphics:null,x:0,y:0}).wait(93));

	// Kreslo
	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(155.3,350.3,0.52,0.521,0,0,0,0.6,0.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).to({x:150,y:160},14).to({_off:true},47).wait(140).to({_off:false,x:155.3,y:350.3},0).to({x:150,y:160},14).to({_off:true},47).wait(140).to({_off:false,x:155.3,y:350.3},0).to({x:150,y:160},14).to({_off:true},47).wait(96));

	// bg svechenie
	this.instance_9 = new lib.bg("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.1,225.1,1,1,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(32).to({_off:false},0).to({alpha:0.75},10).to({startPosition:0},60).wait(93).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(32).to({_off:false},0).to({alpha:0.75},10).to({startPosition:0},60).wait(93).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(32).to({_off:false},0).to({alpha:0.75},10).to({startPosition:0},60).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.1,239.1,79.9,21.7);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 20,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"Brend_top_300x250_atlas_P_.png", id:"Brend_top_300x250_atlas_P_"},
		{src:"Brend_top_300x250_atlas_NP_.jpg", id:"Brend_top_300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;