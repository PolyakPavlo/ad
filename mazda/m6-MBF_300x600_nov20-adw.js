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



(lib.bl = function() {
	this.initialize(img.bl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,278);


(lib.m6 = function() {
	this.initialize(img.m6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,117);


(lib.mlogonrew = function() {
	this.initialize(img.mlogonrew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,112);


(lib.ri = function() {
	this.initialize(img.ri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,263);


(lib.ro = function() {
	this.initialize(img.ro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,291);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(173,173,173,0)","#ADADAD","rgba(173,173,173,0)"],[0,0.306,1],0,124,0,-124).s().p("Egy2AU8MAAAgp3MBltAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.4,-133.9,651,268);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(173,173,173,0)","#ADADAD","rgba(173,173,173,0)"],[0,0.306,1],0,124,0,-124).s().p("Egy2AU8MAAAgp3MBltAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.4,-133.9,651,268);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgBABQgFACgBACQgCACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape.setTransform(114.3,73.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgKAVQgDgCgCgEQgCgDAAgGIAAgbIAIAAIAAAaQgBADABADQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAEAAACgCQADgCACgEQABgEAAgEIAAgVIAIAAIAAAqIgHAAIgBgJIgDAFIgFAEQgCABgEAAQgDAAgDgBg");
	this.shape_1.setTransform(109.5,73.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(105.6,74.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEAAAEIAAAVIAAADIAAAEIgGAAIgBgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_3.setTransform(101.9,73.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgLAeQgEgDgCgFQgCgFAAgGQAAgHACgEQADgFAEgDQAFgDAFAAQAEAAADACQADABACADIABAAIAAgaIAHgBIAABAIgHAAIAAgJIgBAAIgDAFIgFADQgDACgDAAQgFAAgEgDgAgIgCQgDAEAAAJQAAAIACAFQADAEAGAAQADAAADgDQADgCACgFQACgEAAgGIAAAAQAAgFgCgDQgBgDgDgCQgDgBgDAAQgFAAgEAEg");
	this.shape_4.setTransform(96.8,72.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgTAVIAAgBIAYgkIAAAAIgVAAIABgFIAfAAIAAADIgZAjIAAABIAMgBIAHAAIAFAAIAFgBIAAAAIgEAFg");
	this.shape_5.setTransform(92.3,73.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQABgFADgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_6.setTransform(87.7,73.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAYAWIAAgbIAAgFQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBgCgEAAQgEAAgDADQgDACgBAEQgBADAAAEIAAAWIgHAAIAAgbIAAgFQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBgCgEAAQgEAAgDADQgDACgBAEQgBADAAAEIAAAWIgIAAIAAgqIAHAAIABAJIADgFIAFgEIAGgBQAFAAADACQADADABAFIAAAAQABgDADgCIAFgEIAGgBQAEAAADACQADABACADQACAEAAAGIAAAbg");
	this.shape_7.setTransform(81.5,73.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQABgFADgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_8.setTransform(72.8,73.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AAKAVIAAgUIgTAAIAAAUIgIAAIAAgqIAIAAIAAATIATAAIAAgTIAIAAIAAAqg");
	this.shape_9.setTransform(68,73.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_10.setTransform(62,72.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AANAVIgNghIAAAAIgOAhIgGAAIASgpIAFgBIASAqg");
	this.shape_11.setTransform(58.7,73.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_12.setTransform(54.2,73.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_13.setTransform(50.1,73.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_14.setTransform(45.8,73.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AAcAmIgCgIIgBgFIgBgCIgvAAIgBACIgCAFIgCAIIgCAAIAAgTIAFAAIAYg3IAEgBIAXA4IAGAAIAAATgAARATIgRguIgBAAIgSAuIAkAAg");
	this.shape_15.setTransform(40.2,73);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_16.setTransform(33.3,74.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_17.setTransform(30.8,72.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_18.setTransform(27.1,73.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAAEgWIAAgIIAHAAIAAAIgAgKgWIAAgIIAHAAIAAAIg");
	this.shape_19.setTransform(23.4,72.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQADACACADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_20.setTransform(19.9,73.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_21.setTransform(15,74.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AAIAVIgGgGIgFgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAIIAGAGIAEAEIAAAAgAgRAVIAAgqIAHAAIAAAqg");
	this.shape_22.setTransform(10.4,73.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgJAlIAIgSIgag3IAKAAIATAtIAUgtIAGAAIgfBJg");
	this.shape_23.setTransform(5,72.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgQAVIAAgqIAOAAQAIABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQACACgBAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_24.setTransform(285.6,62.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgGAAIgCgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_25.setTransform(277,62.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgLAeQgEgDgCgFQgCgFAAgGQAAgHACgEQADgFAEgDQAFgDAFAAQAEAAADACQADABACADIABAAIAAgaIAHgBIAABAIgHAAIAAgJIgBAAIgDAFIgFADQgDACgDAAQgFAAgEgDgAgIgCQgDAEAAAJQAAAIACAFQADAEAGAAQADAAADgDQADgCACgFQACgEAAgGIAAAAQAAgFgCgDQgBgDgDgCQgDgBgDAAQgFAAgEAEg");
	this.shape_26.setTransform(271.9,61.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgTAVIAAgBIAZgjIAAgBIgXAAIACgFIAfAAIAAADIgZAjIAAABIALgBIAIAAIAGAAIADgBIABAAIgDAFg");
	this.shape_27.setTransform(267.4,62.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_28.setTransform(262.8,62.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAdAeIgFgwIgBAAIgXAtIgCAAIgXgtIgBAAIgFAwIgFAAIAHg8IAHAAIAWAuIAXguIAHAAIAHA8g");
	this.shape_29.setTransform(256.2,61.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgPAVIAAgqIANAAQAIABAEADQAEADgBAFIAAAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQABACAAAEQAAAFgDADQgEAEgJgBgAgIASIAIAAQAFAAACgCQACgDAAgDQAAgEgCgDQgCgCgFAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_30.setTransform(246.2,62.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_31.setTransform(242.6,61.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_32.setTransform(238.9,63.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_33.setTransform(233.7,62.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AANAVIgNghIAAAAIgOAhIgGAAIASgpIAEgBIATAqg");
	this.shape_34.setTransform(229.2,62.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgFAAIAAgqIAIAAIAAAfIAWgfIAHAAIAAAqg");
	this.shape_35.setTransform(224.6,62.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAVAcIgCgHIgBgEIgBgCIghAAIAAACIgCAEIgBAHIgEAAIAAgRIAGAAIAPglIAEgBIARAmIAFAAIAAARgAALALIgLgdIAAAAIgMAdIAXAAg");
	this.shape_36.setTransform(219.6,63);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AAKAVIgKgRIAAAAIgMARIgGAAIAPgVIgOgVIAIAAIAJARIABAAIAKgRIAGAAIgOAVIAKANIADAFIADADIAAAAg");
	this.shape_37.setTransform(211.3,62.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgEAAIAAgqIAHAAIAAAfIAVgfIAHAAIAAAqg");
	this.shape_38.setTransform(206.6,62.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AALAVIAAgUIgUAAIAAAUIgIAAIAAgqIAIAAIAAATIAUAAIAAgTIAHAAIAAAqg");
	this.shape_39.setTransform(201.5,62.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AALAgIAAghIgYAhIgFAAIAAgqIAIAAIAAAeIAVgeIAHAAIAAAqgAgHgUIgEgDIgBgBIABgHIABAAIAAACIACACIAEADIAEABIAGgBIADgDIABgCIABgCIABAAIABAHIgCABIgEADIgHABIgHgBg");
	this.shape_40.setTransform(196.4,61.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_41.setTransform(192.6,61.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AARAcIgBgHIgCgEIgBgCIggAAIAAgqIAHAAIAAAmIATAAIAAgmIAIAAIAAAmIAFAAIAAARg");
	this.shape_42.setTransform(189.2,63);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_43.setTransform(185.2,61.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgDAqIAAgTQgHAAgFgDQgGgCgDgFQgDgFAAgIQAAgGADgFQADgEAGgDQAFgCAHAAIAAgUIAHgBIAAAVQAGAAAGACQAFADAEAEQADAFAAAGQAAAIgDAFQgEAFgFACQgGADgGAAIAAATgAAEATQAFAAAEgDQADgCACgEQACgEAAgGQAAgHgEgEQgEgFgIAAgAgPgLQgEAEAAAHQAAAGABAEQACAEAEACQAEADAFAAIAAgjQgIAAgEAFg");
	this.shape_44.setTransform(180.7,62.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_45.setTransform(174.7,62.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_46.setTransform(167.1,61.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AAVAVIgFgGIgFgHIgGgIIAAAAIAIgKIAIgLIAIAAIgRATIAFAFIAFAIIAGAGIAEAEIAAAAgAgDAVIAAgqIAHAAIAAAqgAgfAVIAAAAIAEgEIAGgGIAGgIIAEgFIgQgTIAHAAIAIALIAIAKIAAAAIgFAIIgGAHIgFAGg");
	this.shape_47.setTransform(162.8,62.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_48.setTransform(157.3,62.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_49.setTransform(152.3,63.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_50.setTransform(147.2,62.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_51.setTransform(141.8,62.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgQAVIAAgqIAPAAQAHABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAEABIAEADQABACABAEQgBAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAHAAQADAAACgCQACgCAAgDQAAgEgCgCQgCgBgDAAIgHAAg");
	this.shape_52.setTransform(132.9,62.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_53.setTransform(125.4,64.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_54.setTransform(121.4,63.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_55.setTransform(112.2,61.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgVAfIAAgDIALgKQAJgKAFgIQAFgGAAgHIgBgGQgBgDgDgBQgCgCgCAAQgEAAgEACQgEABgDADIgBAAIABgGIAHgEQAEgBAEAAQAFAAAFACQAEACACAEQACAEAAAEQAAAFgCAFQgDAEgFAGIgMAMIgFAGIAOAAIAKAAIAGAAIABAAIgDAHg");
	this.shape_56.setTransform(107.1,61.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_57.setTransform(101.7,61.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgVAfIAAgDIALgKQAKgKAEgIQAFgGAAgHIgBgGQgBgDgCgBQgDgCgDAAQgDAAgEACQgDABgDADIgCAAIABgGIAHgEQAEgBAEAAQAGAAADACQAFACABAEQACAEAAAEQAAAFgCAFQgCAEgFAGIgLAMIgHAGIAPAAIAKAAIAHAAIAAAAIgDAHg");
	this.shape_58.setTransform(96.6,61.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_59.setTransform(92.5,64.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AACAeIAAg1IgMAHIABgFIAQgJIAEAAIAAA8g");
	this.shape_60.setTransform(88.1,61.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_61.setTransform(82.8,61.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_62.setTransform(79.3,64.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_63.setTransform(75.3,61.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AgKAfQgFgCgDgCIgBgHIABAAQAEADAEACIAIABQADAAAEgBQADgBACgDQACgDAAgFQAAgHgEgDQgFgDgGAAIgDAAIABgEIACAAQAGAAADgDQADgDAAgFQAAgFgDgDQgCgDgFAAIgFABQgDABgDACIgBAAIABgFQADgCADgBIAGgBQAEAAAEACQAEACADADQACADAAAGQAAAEgCAEQgCADgFACIAAAAIAGACIAEAFQACAEAAAEQAAAHgDAEQgEAEgFACQgFACgFAAIgIgBg");
	this.shape_64.setTransform(69.9,61.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_65.setTransform(61,62.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AAKAVIAAglIgTAAIAAAlIgIAAIAAgqIAjAAIAAAqg");
	this.shape_66.setTransform(55.8,62.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_67.setTransform(46.8,61.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AgVAfIAAgDIAKgKQAKgKAFgIQAFgGAAgHIgBgGQgBgDgDgBQgBgCgDAAQgEAAgEACQgEABgDADIAAAAIAAgGIAHgEQAEgBAEAAQAFAAAFACQADACACAEQADAEAAAEQAAAFgDAFQgCAEgFAGIgMAMIgFAGIAOAAIAKAAIAGAAIABAAIgCAHg");
	this.shape_68.setTransform(41.6,61.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_69.setTransform(36.3,61.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgVAfIAAgDIALgKQAKgKAEgIQAFgGAAgHIgBgGQgBgDgCgBQgDgCgCAAQgEAAgEACQgDABgEADIgBAAIABgGIAHgEQAEgBAEAAQAFAAAEACQAEACADAEQABAEAAAEQAAAFgBAFQgDAEgFAGIgLAMIgGAGIAOAAIAKAAIAGAAIABAAIgDAHg");
	this.shape_70.setTransform(31.1,61.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_71.setTransform(27.1,64.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_72.setTransform(22.6,61.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_73.setTransform(17.4,61.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_74.setTransform(13.9,64.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AAGAeIAAgRIgdAAIAAgCIAfgpIAFAAIAAAlIALAAIAAAGIgLAAIAAARgAgNAHIAAAAIATAAIAAgaIAAAAg");
	this.shape_75.setTransform(9.9,61.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_76.setTransform(4.2,61.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgHAVIgHgDIgBgHIABAAQADADAEACQACACAFAAQADAAADgDQACgCAAgEQAAgEgDgCQgCgCgEAAIgFAAIAAgDIAFAAQADAAACgCQADgCAAgEIgDgFQgCgCgCAAIgGABIgDACIgCABIAAAAIABgFIABgBIADgCIAGAAIAHABQADABACADIACAGIgCAGQgCACgDABIAAABQAEAAACADQADADAAAEQAAAEgDACQgCADgDACQgFABgDAAQgEAAgDgBg");
	this.shape_77.setTransform(285.7,51.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQAAgGADgFQADgFAFgDQAFgCAGAAIAGAAIAFADIABAFIgBAAIgFgDIgGgBQgFAAgEAEQgEAEgBAHIATAAIAAADIgTAAQABAIAEAEQAEAFAGAAQADAAADgCQADgBACgCIABAAIgBAFIgGADIgHABQgFAAgFgCg");
	this.shape_78.setTransform(272.8,51.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_79.setTransform(269.3,50.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#666666").s().p("AAVAcIgCgHIgCgEIgBgCIggAAIAAACIgCAEIgCAHIgCAAIAAgRIAEAAIAQglIAFgBIAQAmIAFAAIAAARgAALALIgLgdIgBAAIgLAdIAXAAg");
	this.shape_80.setTransform(265.8,52.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#666666").s().p("AALAVIAAgQIgHAAIgBACIgDAEIgDAFIgGAFIgJAAIAAAAIAHgIIAGgGIADgDIAAAAIgGgCQgCgCgBgBQgCgCABgEQAAgEABgDQACgDAFgBIAHgDIAPAAIAAAqgAgBgPIgDAEIgBAEIABAEIADADQABABADAAIAIAAIAAgRIgIAAQgDgBgBACg");
	this.shape_81.setTransform(251.5,51.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_82.setTransform(248.4,50.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#666666").s().p("AASAcIgCgHIgCgEIgBgCIghAAIAAgqIAIAAIAAAmIATAAIAAgmIAHAAIAAAmIAHAAIAAARg");
	this.shape_83.setTransform(244.9,52.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#666666").s().p("AAIAVIgGgGIgFgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAHIAGAHIAEAEIAAAAgAgRAVIAAgqIAHAAIAAAqg");
	this.shape_84.setTransform(240.3,51.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#666666").s().p("AAVAeIgLgXIgWAAIgKAXIgGAAIAbg7IAFgBIAaA8gAAJACIgJgWIAAAAIgKAWIATAAg");
	this.shape_85.setTransform(234.7,50.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_86.setTransform(221.1,53.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCAAgEQAAgFADgCQADgDAGgBIAIgCIAEgBIACgCIAAgBQgBgFgCgDQgCgCgEAAIgGABIgHAEIgBAAIABgFQACgCAEgBIAHgBQAGAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_87.setTransform(217.4,51.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#666666").s().p("AAKAVIAAgUIgUAAIAAAUIgHAAIAAgqIAHAAIAAATIAUAAIAAgTIAIAAIAAAqg");
	this.shape_88.setTransform(212.6,51.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_89.setTransform(207.6,51.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#666666").s().p("AAVAVIgFgGIgFgHIgGgIIAAAAIAIgKIAIgLIAIAAIgRATIAFAFIAFAHIAGAHIAEAEIAAAAgAgDAVIAAgqIAHAAIAAAqgAgfAVIAAAAIAEgEIAGgHIAGgHIAEgFIgQgTIAHAAIAIALIAIAKIAAAAIgFAIIgGAHIgFAGg");
	this.shape_90.setTransform(202.1,51.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_91.setTransform(196.6,51.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_92.setTransform(191.2,51.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#666666").s().p("AgGAgQgEgCgDgDQgDgCgCgGQgBgFAAgHQAAgKABgGQACgHADgDQACgEAFgDQAEgCAEAAIAIgCIAFgBIABgBIABAAIgDAIIgOADIgGACQgDADgCAEQgCAEgBAHIAEgFQADgBADgBIAFgBIAHABIAGAEQADACABADQACAEAAAGQAAAGgCAEQgBAEgDACQgDADgEACIgHABQgDAAgDgBgAgIgBQgDADAAAJQAAAJADAEQAEAFAEgBQAEAAACgCQADgCACgDQABgEAAgGQAAgGgBgDQgCgDgDgBQgCgCgEAAQgEAAgEADg");
	this.shape_93.setTransform(185.7,50.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_94.setTransform(180.4,51.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#666666").s().p("AgQAVIAAgqIAPAAQAHABAEADQADADAAAFIgBAEIgCADIgDABIgBABIAAAAIACAAIADABIAEADQACACAAAEQAAAFgFADQgEAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAHAAQADAAACgCQACgCAAgDQAAgEgCgCQgCgBgDAAIgHAAg");
	this.shape_95.setTransform(166.4,51.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_96.setTransform(162.8,50.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AANAVIgNghIgBAAIgNAhIgGAAIASgpIAFgBIASAqg");
	this.shape_97.setTransform(159.6,51.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_98.setTransform(156.3,50.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("AgGAgQgEgCgDgDQgDgCgCgGQgBgFAAgHQAAgKABgGQACgHADgDQACgEAFgDQAEgCAEAAIAIgCIAFgBIABgBIABAAIgDAIIgOADIgGACQgDADgCAEQgCAEgBAHIAEgFQADgBADgBIAFgBIAHABIAGAEQADACABADQACAEAAAGQAAAGgCAEQgBAEgDACQgDADgEACIgHABQgDAAgDgBgAgIgBQgDADAAAJQAAAJADAEQAEAFAEgBQAEAAACgCQADgCACgDQABgEAAgGQAAgGgBgDQgCgDgDgBQgCgCgEAAQgEAAgEADg");
	this.shape_99.setTransform(152.6,50.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_100.setTransform(147.3,51.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_101.setTransform(141.7,51.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_102.setTransform(136,51.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_103.setTransform(131.4,51.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#666666").s().p("AgQAVIAAgqIAPAAQAHABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIACAAIADABIAEADQABACAAAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAHAAQADAAACgCQACgCAAgDQAAgEgCgCQgCgBgDAAIgHAAg");
	this.shape_104.setTransform(127.5,51.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgBABQgFACgBACQgCACAAADQAAADACACQACADAEAAQABAAADgCQADgBABgCQACgCABgDIAAgJIgLACg");
	this.shape_105.setTransform(122.7,51.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#666666").s().p("AgOAVIAAgqIAHAAIAAAPIAFAAQAIABAEADQAFACAAAIQAAAGgFAEQgEAEgIgBgAgHASIAFAAQAEAAADgEQADgCAAgEQAAgFgDgCQgDgCgEAAIgFAAg");
	this.shape_106.setTransform(109.3,51.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_107.setTransform(105.1,51.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCIAFgDIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_108.setTransform(101.3,51.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_109.setTransform(97.9,50.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#666666").s().p("AAHAVIgEgGIgGgHIgGgIIAAAAIAJgKIAHgLIAIAAIgRATIAEAFIAGAHIAGAHIAEAEIAAAAgAgSAVIAAgqIAIAAIAAAqg");
	this.shape_110.setTransform(94.9,51.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#666666").s().p("AgOAVIAAgqIAHAAIAAAPIAFAAQAIABAEADQAFACAAAIQAAAGgFAEQgEAEgIgBgAgHASIAFAAQAEAAADgEQADgCAAgEQAAgFgDgCQgDgCgEAAIgFAAg");
	this.shape_111.setTransform(90.4,51.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#666666").s().p("AANAVIgNghIAAAAIgOAhIgGAAIASgpIAEgBIATAqg");
	this.shape_112.setTransform(86,51.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_113.setTransform(82.8,50.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#666666").s().p("AANAeIgMgNIgQgSIAAgCIAOgNIANgOIAIAAIgaAaIALAOIALAMIAJAIIAAAAgAgYAeIAAg8IAIAAIAAA8g");
	this.shape_114.setTransform(79.4,50.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_115.setTransform(65.4,53.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_116.setTransform(61.5,52.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_117.setTransform(46.8,50.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#666666").s().p("AgVAfIAAgDIAKgKQAKgKAFgIQAFgGAAgHIgBgGQgBgDgDgBQgBgCgDAAQgEAAgEACQgEABgDADIAAAAIAAgGIAHgEQAEgBAEAAQAFAAAFACQADACACAEQADAEAAAEQAAAFgDAFQgCAEgFAGIgMAMIgFAGIAOAAIAKAAIAGAAIABAAIgCAHg");
	this.shape_118.setTransform(41.6,50.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_119.setTransform(36.3,50.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#666666").s().p("AgVAfIAAgDIALgKQAKgKAEgIQAFgGAAgHIgBgGQgBgDgCgBQgDgCgCAAQgEAAgEACQgDABgEADIgBAAIABgGIAHgEQAEgBAEAAQAFAAAEACQAEACADAEQABAEAAAEQAAAFgBAFQgDAEgFAGIgLAMIgGAGIAOAAIAKAAIAGAAIABAAIgDAHg");
	this.shape_120.setTransform(31.1,50.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_121.setTransform(27.1,53.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_122.setTransform(22.6,50.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_123.setTransform(17.4,50.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_124.setTransform(13.9,53.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#666666").s().p("AAGAeIAAgRIgdAAIAAgCIAfgpIAFAAIAAAlIALAAIAAAGIgLAAIAAARgAgNAHIAAAAIATAAIAAgaIAAAAg");
	this.shape_125.setTransform(9.9,50.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_126.setTransform(4.2,50.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgBABQgFACgBACQgCACAAADQAAADACACQACADAEAAQABAAADgCQADgBABgCQACgCABgDIAAgJIgLACg");
	this.shape_127.setTransform(285.6,40.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_128.setTransform(280.8,40.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_129.setTransform(266.9,40.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_130.setTransform(261.2,40.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_131.setTransform(256,40.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQABgFADgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_132.setTransform(251,40.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_133.setTransform(246.9,40.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCIAFgDIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_134.setTransform(243,40.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_135.setTransform(231.2,39.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#666666").s().p("AAKAVIAAgUIgUAAIAAAUIgHAAIAAgqIAHAAIAAATIAUAAIAAgTIAIAAIAAAqg");
	this.shape_136.setTransform(227.5,40.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAAEgWIAAgIIAHAAIAAAIgAgKgWIAAgIIAHAAIAAAIg");
	this.shape_137.setTransform(223.8,39.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_138.setTransform(220.3,40.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_139.setTransform(215.4,41.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#666666").s().p("AAIAVIgFgGIgGgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAHIAGAHIAFAEIAAAAgAgRAVIAAgqIAHAAIAAAqg");
	this.shape_140.setTransform(210.8,40.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#666666").s().p("AgJAlIAIgSIgag3IAKAAIATAtIAUgtIAGAAIgfBJg");
	this.shape_141.setTransform(205.4,40.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#666666").s().p("AgQAVIAAgqIAOAAQAIABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQACACgBAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_142.setTransform(192,40.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#666666").s().p("AALAVIAAgQIgHAAIgBACIgDAEIgDAFIgGAFIgJAAIAAAAIAHgIIAGgGIACgDIAAAAIgFgCQgCgCgBgBQgCgCABgEQAAgEABgDQACgDAFgBIAHgDIAPAAIAAAqgAgBgPIgDAEIgBAEIABAEIADADQABABADABIAIAAIAAgSIgIAAQgDgBgBACg");
	this.shape_143.setTransform(178.6,40.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCIAFgDIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_144.setTransform(174.6,40.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#666666").s().p("AgOAVIAAgqIAHAAIAAAPIAFAAQAIABAEADQAFACAAAIQAAAGgFAEQgEAEgIgBgAgHASIAFAAQAEAAADgEQADgCAAgEQAAgFgDgCQgDgCgEAAIgFAAg");
	this.shape_145.setTransform(170.5,40.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_146.setTransform(166.3,40.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#666666").s().p("AALAVIAAgQIgIAAIgBACIgCAEIgEAFIgEAFIgJAAIAAAAIAHgIIAFgGIACgDIAAAAIgEgCQgDgCgBgBQgCgCAAgEQAAgEADgDQACgDADgBIAIgDIAQAAIAAAqgAgBgPIgDAEIgBAEIABAEIADADQABABADABIAIAAIAAgSIgIAAQgDgBgBACg");
	this.shape_147.setTransform(161.9,40.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#666666").s().p("AAVAcIgCgHIgCgEIgBgCIgfAAIgBACIgCAEIgCAHIgCAAIAAgRIAEAAIAQglIAFgBIAQAmIAEAAIAAARgAALALIgLgdIgBAAIgLAdIAXAAg");
	this.shape_148.setTransform(157.5,41.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_149.setTransform(152.4,40.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#666666").s().p("AAKAVIgKgRIAAAAIgMARIgGAAIAPgVIgOgVIAIAAIAJARIABAAIAKgRIAGAAIgOAVIAKANIADAFIADADIAAAAg");
	this.shape_150.setTransform(147.7,40.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQADACACADQACAEAAAEIAAAVIAAADIAAAEIgGAAIgBgGQgDAEgEABQgDACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_151.setTransform(143.2,40.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#666666").s().p("AALAVIAAgUIgUAAIAAAUIgIAAIAAgqIAIAAIAAATIAUAAIAAgTIAHAAIAAAqg");
	this.shape_152.setTransform(138.4,40.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#666666").s().p("AgIAVIgFgDIgCgHIACAAQACADADACQADACAEAAQAEAAADgDQACgCAAgEQAAgEgDgCQgDgCgDAAIgFAAIAAgDIAFAAQADAAACgCQACgCABgEIgCgFQgCgCgEAAIgFABIgEACIgBABIAAAAIABgFIAAgBIAEgCIAGAAIAHABQADABACADIACAGIgCAGQgCACgDABIAAABQAEAAACADQACADABAEQAAAEgCACQgDADgDACQgEABgEAAQgEAAgEgBg");
	this.shape_153.setTransform(133.8,40.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_154.setTransform(121,40.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#666666").s().p("AAbAcIgBgHIgCgEIAAgCIg1AAIAAgqIAHAAIAAAmIARAAIAAgmIAGAAIAAAmIAQAAIAAgmIAIAAIAAAmIAGAAIAAARg");
	this.shape_155.setTransform(115,41.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#666666").s().p("AgFALIACgIIABgHIABgGIAHAAIgBAEIgCAGIgCAGIgCAFg");
	this.shape_156.setTransform(101.4,43.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#666666").s().p("AgLAeQgFgDgDgFQgDgFAAgIQAAgIADgHQADgHAFgGQAFgFAGgDQAGgEAHAAIACADQgHABgEADQgEADgEAEQgEAEgCAEIgDAJIAAAAQADgDAEgCIAIgCQAFAAAFADQAFACADADQADAFAAAGQAAAHgDAEQgDAFgFACQgFACgHAAQgFAAgGgCgAgGAAQgDAAgCADQgCAEgBAFQABAHAEAEQADAFAGAAQAFAAADgCQADgCACgEQABgDAAgFQAAgHgDgEQgEgDgGAAQgDAAgEACg");
	this.shape_157.setTransform(97.1,39.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQADACACADQACAEAAAEIAAAVIAAADIAAAEIgGAAIgBgGQgDAEgEABQgDACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_158.setTransform(83.3,40.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#666666").s().p("AgLAeQgEgDgCgFQgCgFAAgGQAAgHACgEQADgFAEgDQAFgDAFAAQAEAAADACQADABACADIABAAIAAgaIAHgBIAABAIgHAAIAAgJIgBAAIgDAFIgFADQgDACgDAAQgFAAgEgDgAgIgCQgDAEAAAJQAAAIACAFQADAEAGAAQADAAADgDQADgCACgFQACgEAAgGIAAAAQAAgFgCgDQgBgDgDgCQgDgBgDAAQgFAAgEAEg");
	this.shape_159.setTransform(78.3,39.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#666666").s().p("AgTAVIAAgBIAYgkIAAAAIgWAAIACgFIAfAAIAAADIgZAjIAAABIAMgBIAHAAIAFAAIAFgBIAAAAIgEAFg");
	this.shape_160.setTransform(73.7,40.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_161.setTransform(69.1,40.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#666666").s().p("AAdAeIgFgwIgBAAIgXAtIgCAAIgXgtIgBAAIgFAwIgFAAIAHg8IAHAAIAWAuIAXguIAHAAIAHA8g");
	this.shape_162.setTransform(62.6,39.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#666666").s().p("AgPAVIAAgqIANAAQAIABAEADQADADAAAFIgBAEIgCADIgDABIgBABIAAAAIACAAIADABIAEADQACACAAAEQgBAFgEADQgEAEgIgBgAgIASIAIAAQAFAAACgCQACgDAAgDQAAgEgCgDQgCgCgFAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_163.setTransform(47.9,40.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_164.setTransform(44.4,39.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#666666").s().p("AANAVIgNghIAAAAIgOAhIgGAAIASgpIAEgBIATAqg");
	this.shape_165.setTransform(41.1,40.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_166.setTransform(37.9,39.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#666666").s().p("AgGAgQgEgCgDgDQgDgCgCgGQgBgFAAgHQAAgKABgGQACgHADgDQACgEAFgDQAEgCAEAAIAIgCIAFgBIABgBIABAAIgDAIIgOADIgGACQgDADgCAEQgCAEgBAHIAEgFQADgBADgBIAFgBIAHABIAGAEQADACABADQACAEAAAGQAAAGgCAEQgBAEgDACQgDADgEACIgHABQgDAAgDgBgAgIgBQgDADAAAJQAAAJADAEQAEAFAEgBQAEAAACgCQADgCACgDQABgEAAgGQAAgGgBgDQgCgDgDgBQgCgCgEAAQgEAAgEADg");
	this.shape_167.setTransform(34.2,39.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_168.setTransform(28.9,40.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_169.setTransform(23.2,40.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_170.setTransform(17.5,40.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_171.setTransform(13,40.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#666666").s().p("AgQAVIAAgqIAPAAQAHABADADQAEADABAFIgCAEIgCADIgDABIgBABIAAAAIACAAIADABIAEADQABACABAEQAAAFgFADQgDAEgJgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAHAAQADAAACgCQACgCAAgDQAAgEgCgCQgCgBgDAAIgHAAg");
	this.shape_172.setTransform(9.1,40.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgGAAIgCgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_173.setTransform(4.3,40.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#666666").s().p("AAVAcIgCgHIgCgEIgBgCIgfAAIgBACIgCAEIgCAHIgCAAIAAgRIAEAAIAQglIAFgBIAQAmIAEAAIAAARgAALALIgLgdIgBAAIgLAdIAXAAg");
	this.shape_174.setTransform(285.3,30.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgGAAIgBgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_175.setTransform(280.5,30);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#666666").s().p("AANAVIgNghIAAAAIgOAhIgGAAIASgpIAEgBIATAqg");
	this.shape_176.setTransform(276.2,30);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#666666").s().p("AAIAVIgGgGIgFgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAHIAGAHIAEAEIAAAAgAgRAVIAAgqIAHAAIAAAqg");
	this.shape_177.setTransform(272.2,30);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCIAFgDIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_178.setTransform(267.6,30);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#666666").s().p("AALAgIAAghIgYAhIgEAAIAAgqIAHAAIAAAeIAWgeIAHAAIAAAqgAgGgUIgFgDIgCgBIABgHIABAAIABACIACACIADADIAFABIAFgBIAEgDIACgCIAAgCIABAAIABAHIgBABIgFADIgHABIgGgBg");
	this.shape_179.setTransform(256.7,29);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgFAAIAAgqIAIAAIAAAfIAWgfIAHAAIAAAqg");
	this.shape_180.setTransform(251.6,30);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#666666").s().p("AAKAVIAAgUIgUAAIAAAUIgHAAIAAgqIAHAAIAAATIAUAAIAAgTIAIAAIAAAqg");
	this.shape_181.setTransform(246.4,30);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_182.setTransform(241.5,30);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#666666").s().p("AgPAVIAAgqIANAAQAIABAEADQADADAAAFIAAAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQABACAAAEQAAAFgDADQgEAEgJgBgAgIASIAIAAQAFAAACgCQACgDAAgDQAAgEgCgDQgCgCgFAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_183.setTransform(237.2,30);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_184.setTransform(232.1,30);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_185.setTransform(227.5,30);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_186.setTransform(224.5,29.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_187.setTransform(220.4,30);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_188.setTransform(216.2,29.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#666666").s().p("AANAVIgNghIgBAAIgNAhIgGAAIASgpIAFgBIASAqg");
	this.shape_189.setTransform(213,30);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgBABQgFACgBACQgCACAAADQAAADACACQACADAEAAQABAAADgCQADgBABgCQACgCABgDIAAgJIgLACg");
	this.shape_190.setTransform(202.4,30);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_191.setTransform(197.6,30);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_192.setTransform(186.5,30);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_193.setTransform(181.7,30);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQABgFADgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_194.setTransform(176.8,30);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#666666").s().p("AgIAVIgFgDIgCgHIACAAQACADADACQADACAEAAQAEAAADgDQACgCAAgEQAAgEgDgCQgDgCgDAAIgFAAIAAgDIAFAAQADAAACgCQACgCABgEIgCgFQgCgCgEAAIgFABIgEACIgBABIAAAAIABgFIAAgBIAEgCIAGAAIAHABQADABACADIACAGIgCAGQgCACgDABIAAABQAEAAACADQACADABAEQAAAEgCACQgDADgDACQgEABgEAAQgEAAgEgBg");
	this.shape_195.setTransform(172.5,30);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCAAgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgDgDQgCgCgEAAIgGABIgHAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQADACACADQACAEgBAEIAAAVIABADIABAEIgGAAIgCgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQADAAACgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_196.setTransform(168.4,30);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#666666").s().p("AAIAVIgGgGIgFgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAHIAGAHIAEAEIAAAAgAgSAVIAAgqIAIAAIAAAqg");
	this.shape_197.setTransform(164.3,30);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#666666").s().p("AgPAVIAAgqIANAAQAIABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQACACgBAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_198.setTransform(159.7,30);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_199.setTransform(148.8,30);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#666666").s().p("AAIAVIgGgGIgFgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAHIAGAHIAFAEIAAAAgAgRAVIAAgqIAHAAIAAAqg");
	this.shape_200.setTransform(144.7,30);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#666666").s().p("AAVAVIgFgGIgFgHIgGgIIAAAAIAIgKIAIgLIAIAAIgRATIAFAFIAFAHIAGAHIAEAEIAAAAgAgDAVIAAgqIAHAAIAAAqgAgfAVIAAAAIAEgEIAGgHIAGgHIAEgFIgQgTIAHAAIAIALIAIAKIAAAAIgFAIIgGAHIgFAGg");
	this.shape_201.setTransform(139,30);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgEAAIAAgqIAHAAIAAAfIAWgfIAHAAIAAAqg");
	this.shape_202.setTransform(133.3,30);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_203.setTransform(128.2,30);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#666666").s().p("AgLAeIgHgGIgCgIIACAAQADAFAEADQAFADAGAAQADAAACgCQAEgBACgDQABgDAAgFQAAgHgEgDQgEgDgHAAIgDAAIABgEIABAAQAHAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAQgEAAgDACIgGAEIgBAAIABgHIAFgCQADgCAGAAQADAAAFACQAEACACADQADADAAAFQgBAFgCAEQgCADgDACIAAAAIAFACQAEACABAEQABADAAAEQAAAHgDAEQgDAEgFACQgFACgFAAQgFAAgFgCg");
	this.shape_204.setTransform(123.1,29.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_205.setTransform(113.3,31.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_206.setTransform(109.3,31);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_207.setTransform(97.8,29.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#666666").s().p("AgVAfIAAgDIALgKQAJgKAFgIQAFgGAAgHIgBgGQgBgDgDgBQgCgCgCAAQgEAAgEACQgEABgDADIgBAAIABgGIAHgEQAEgBAEAAQAFAAAEACQAFACACAEQACAEAAAEQAAAFgCAFQgDAEgFAGIgMAMIgFAGIAOAAIAKAAIAGAAIABAAIgDAHg");
	this.shape_208.setTransform(92.7,29);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_209.setTransform(87.3,29.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#666666").s().p("AgVAfIAAgDIAKgKQALgKAEgIQAFgGAAgHIgBgGQgBgDgCgBQgDgCgDAAQgDAAgEACQgDABgDADIgCAAIABgGIAHgEQAEgBAEAAQAGAAADACQAFACABAEQACAEAAAEQAAAFgCAFQgCAEgFAGIgLAMIgHAGIAPAAIAKAAIAHAAIAAAAIgDAHg");
	this.shape_210.setTransform(82.2,29);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_211.setTransform(78.1,31.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#666666").s().p("AACAeIAAg1IgMAHIABgFIAQgJIAEAAIAAA8g");
	this.shape_212.setTransform(73.7,29.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#666666").s().p("AADAeIAAg1IgNAHIAAgFIARgJIAEAAIAAA8g");
	this.shape_213.setTransform(68.4,29.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#666666").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_214.setTransform(64.9,31.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#666666").s().p("AAGAeIAAgRIgdAAIAAgCIAfgpIAGAAIAAAlIAKAAIAAAGIgKAAIAAARgAgNAHIAAAAIATAAIAAgaIAAAAg");
	this.shape_215.setTransform(60.9,29.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#666666").s().p("AACAeIAAg1IgMAHIABgFIAQgJIAEAAIAAA8g");
	this.shape_216.setTransform(55.2,29.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCAAgEQAAgFADgCQADgDAGgBIAIgCIAEgBIACgCIAAgBQgBgFgCgDQgCgCgEAAIgGABIgHAEIgBAAIABgFQACgCAEgBIAHgBQAGAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_217.setTransform(44.6,30);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#666666").s().p("AAKAVIAAgUIgTAAIAAAUIgIAAIAAgqIAIAAIAAATIATAAIAAgTIAIAAIAAAqg");
	this.shape_218.setTransform(39.8,30);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_219.setTransform(28.1,30);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_220.setTransform(22.4,30);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_221.setTransform(17.2,30);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCAAgEQAAgFADgCQADgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgDgDQgCgCgEAAIgGABIgHAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQADACACADQACAEgBAEIAAAVIABADIABAEIgGAAIgCgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQADAAACgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_222.setTransform(12.3,30);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_223.setTransform(8.1,30);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCIAFgDIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_224.setTransform(4.3,30);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQADACACADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_225.setTransform(285.4,19.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#666666").s().p("AgQAVIAAgqIAOAAQAIABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQACACgBAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_226.setTransform(281.1,19.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_227.setTransform(276.8,19.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#666666").s().p("AARAcIgBgHIgCgEIgBgCIghAAIAAgqIAIAAIAAAmIATAAIAAgmIAHAAIAAAmIAHAAIAAARg");
	this.shape_228.setTransform(272.6,19.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgEAAIAAgqIAHAAIAAAfIAVgfIAIAAIAAAqg");
	this.shape_229.setTransform(267.3,19.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#666666").s().p("AALAVIAAgUIgUAAIAAAUIgIAAIAAgqIAIAAIAAATIAUAAIAAgTIAHAAIAAAqg");
	this.shape_230.setTransform(262.1,19.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#666666").s().p("AgGAgQgEgCgDgDQgDgCgCgGQgBgFAAgHQAAgKABgGQACgHADgDQACgEAFgDQAEgCAEAAIAIgCIAFgBIABgBIABAAIgDAIIgOADIgGACQgDADgCAEQgCAEgBAIIAEgGQADgBADgBIAFgBIAHABIAGAEQADACABADQACAEAAAGQAAAGgCAEQgBAEgDACQgDADgEACIgHABQgDAAgDgBgAgIAAQgDACAAAJQAAAJADAEQAEAFAEgBQAEAAACgCQADgCACgDQABgEAAgGQAAgGgBgDQgCgDgDgBQgCgCgEAAQgEAAgEAEg");
	this.shape_231.setTransform(257,18.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_232.setTransform(251.7,19.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_233.setTransform(246.5,20.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgEAAIAAgqIAHAAIAAAfIAVgfIAHAAIAAAqg");
	this.shape_234.setTransform(241.2,19.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#666666").s().p("AgQAVIAAgqIAOAAQAIABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQACACgBAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_235.setTransform(236.5,19.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#666666").s().p("AgMAfIAGgLIAFgLIgRgoIAIAAIAMAfIALgfIAGAAIgYA+g");
	this.shape_236.setTransform(226.5,20.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#666666").s().p("AAIAVIgGgGIgFgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAHIAGAHIAFAEIAAAAgAgRAVIAAgqIAHAAIAAAqg");
	this.shape_237.setTransform(222.7,19.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_238.setTransform(217.4,19.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_239.setTransform(212.2,20.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_240.setTransform(201.2,18.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#666666").s().p("AgVAfIAAgDIALgKQAJgKAFgIQAFgGAAgHIgBgGQgBgDgDgBQgCgCgCAAQgEAAgEACQgEABgDADIgBAAIABgGIAHgEQAEgBAEAAQAGAAAEACQADACADAEQACAEAAAEQAAAFgCAFQgDAEgFAGIgMAMIgFAGIAOAAIAKAAIAGAAIABAAIgDAHg");
	this.shape_241.setTransform(196.1,18.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#666666").s().p("AgLAcQgFgEgDgHQgDgHAAgJQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAFAEQAFAEADAIQADAHAAAJQAAAJgDAHQgDAHgFAEQgFAEgHAAQgGAAgFgEgAgHgXQgDAEgBAGQgCAGAAAIQAAAMAEAHQADAHAGAAQAHAAADgHQAEgHAAgMQAAgIgCgGQgBgGgDgEQgDgDgFAAQgDAAgEADg");
	this.shape_242.setTransform(190.7,18.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#666666").s().p("AgVAfIAAgDIALgKQAKgKAEgIQAFgGAAgHIgBgGQgBgDgCgBQgCgCgEAAQgDAAgEACQgEABgDADIgBAAIABgGIAHgEQAEgBAEAAQAGAAADACQAFACACAEQABAEAAAEQAAAFgBAFQgDAEgFAGIgLAMIgHAGIAPAAIAKAAIAHAAIAAAAIgDAHg");
	this.shape_243.setTransform(185.6,18.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_244.setTransform(176.2,18.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_245.setTransform(172.5,19.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAAEgWIAAgIIAHAAIAAAIgAgKgWIAAgIIAHAAIAAAIg");
	this.shape_246.setTransform(168.8,18.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQADACACADQACAEAAAEIAAAVIAAADIAAAEIgGAAIgBgGQgDAEgEABQgDACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_247.setTransform(165.2,19.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#666666").s().p("AgTAgIAAg+IAHAAIAAAJQACgEAEgDQAEgDAEAAQAGAAAEADQAEADACAFQACAEAAAHQAAAHgCAEQgDAFgEADQgEADgHAAQgDAAgDgCQgDgCgDgDIAAAagAgFgYQgEADgBAEQgCAFgBAGIAAAAIACAHQACAEADABQADACADAAQAFAAAEgFQADgDAAgJQAAgIgDgFQgDgEgFAAQgDAAgDACg");
	this.shape_248.setTransform(160.4,20.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#666666").s().p("AAIAVIgGgGIgFgHIgGgIIAAAAIAJgKIAIgLIAHAAIgRATIAEAFIAGAHIAGAHIAEAEIAAAAgAgSAVIAAgqIAIAAIAAAqg");
	this.shape_249.setTransform(155.8,19.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#666666").s().p("AgJAlIAIgSIgag3IAKAAIATAtIAUgtIAGAAIgfBJg");
	this.shape_250.setTransform(150.3,18.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#666666").s().p("AgQAVIAAgqIAOAAQAIABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQACACgBAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_251.setTransform(139.8,19.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#666666").s().p("AgQAVIAAgqIAPAAQAHABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIACAAIADABIAEADQABACAAAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAHAAQADAAACgCQACgCAAgDQAAgEgCgCQgCgBgDAAIgHAAg");
	this.shape_252.setTransform(129.8,19.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_253.setTransform(126.2,18.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#666666").s().p("AANAVIgNghIgBAAIgNAhIgGAAIASgpIAFgBIASAqg");
	this.shape_254.setTransform(123,19.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_255.setTransform(119.7,18.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#666666").s().p("AgGAgQgEgCgDgDQgDgCgCgGQgBgFAAgHQAAgKABgGQACgHADgDQACgEAFgDQAEgCAEAAIAIgCIAFgBIABgBIABAAIgDAIIgOADIgGACQgDADgCAEQgCAEgBAIIAEgGQADgBADgBIAFgBIAHABIAGAEQADACABADQACAEAAAGQAAAGgCAEQgBAEgDACQgDADgEACIgHABQgDAAgDgBgAgIAAQgDACAAAJQAAAJADAEQAEAFAEgBQAEAAACgCQADgCACgDQABgEAAgGQAAgGgBgDQgCgDgDgBQgCgCgEAAQgEAAgEAEg");
	this.shape_256.setTransform(116,18.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_257.setTransform(110.7,19.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_258.setTransform(105.1,19.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_259.setTransform(99.4,19.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_260.setTransform(94.8,19.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#666666").s().p("AgPAVIAAgqIANAAQAIABAEADQADADAAAFIAAAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQABACAAAEQAAAFgDADQgEAEgJgBgAgIASIAIAAQAFAAACgCQACgDAAgDQAAgEgCgDQgCgCgFAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_261.setTransform(90.9,19.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEAAAEIAAAVIAAADIAAAEIgGAAIgBgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_262.setTransform(86.1,19.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#666666").s().p("AAVAcIgCgHIgBgEIgBgCIghAAIAAACIgCAEIgBAHIgEAAIAAgRIAGAAIAPglIAEgBIARAmIAEAAIAAARgAALALIgLgdIAAAAIgMAdIAXAAg");
	this.shape_263.setTransform(75.9,19.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCAAgEQAAgFADgCQADgDAGgBIAIgCIAEgBIACgCIAAgBQgBgFgCgDQgCgCgEAAIgGABIgHAEIgBAAIABgFQACgCAEgBIAHgBQAGAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_264.setTransform(71.1,19.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#666666").s().p("AANAVIgNghIgBAAIgNAhIgGAAIASgpIAEgBIATAqg");
	this.shape_265.setTransform(66.8,19.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#666666").s().p("AAHAVIgEgGIgGgHIgGgIIAAAAIAJgKIAHgLIAIAAIgRATIAEAFIAGAHIAGAHIAEAEIAAAAgAgSAVIAAgqIAIAAIAAAqg");
	this.shape_266.setTransform(62.8,19.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCIAFgDIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_267.setTransform(58.2,19.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#666666").s().p("AALAgIAAghIgYAhIgFAAIAAgqIAIAAIAAAeIAVgeIAHAAIAAAqgAgHgUIgEgDIgBgBIABgHIABAAIAAACIACACIAEADIAEABIAGgBIADgDIABgCIABgCIABAAIABAHIgCABIgEADIgHABIgHgBg");
	this.shape_268.setTransform(47.9,18.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgEAAIAAgqIAHAAIAAAfIAVgfIAHAAIAAAqg");
	this.shape_269.setTransform(42.7,19.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#666666").s().p("AALAVIAAgUIgUAAIAAAUIgIAAIAAgqIAIAAIAAATIAUAAIAAgTIAHAAIAAAqg");
	this.shape_270.setTransform(37.6,19.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCABgEQAAgFACgCQAEgDAGgBIAHgCIAFgBIACgCIAAgBQAAgFgCgDQgDgCgEAAIgGABIgHAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgCABQgEACgBACQgCACAAADQAAADACACQACADADAAQACAAADgCQADgBABgCQACgCABgDIAAgJIgMACg");
	this.shape_271.setTransform(32.6,19.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#666666").s().p("AgQAVIAAgqIAPAAQAHABAEADQADADAAAFIgBAEIgCADIgDABIgBABIAAAAIACAAIADABIAEADQABACABAEQAAAFgFADQgDAEgJgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAHAAQADAAACgCQACgCAAgDQAAgEgCgCQgCgBgDAAIgHAAg");
	this.shape_272.setTransform(28.3,19.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_273.setTransform(23.2,19.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_274.setTransform(18.7,19.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_275.setTransform(15.7,18.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_276.setTransform(11.5,19.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_277.setTransform(7.4,18.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#666666").s().p("AANAVIgNghIAAAAIgOAhIgGAAIASgpIAEgBIATAqg");
	this.shape_278.setTransform(4.1,19.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_279.setTransform(285.3,8.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_280.setTransform(280.5,8.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#666666").s().p("AALAVIAAghIgYAhIgFAAIAAgqIAIAAIAAAfIAWgfIAGAAIAAAqg");
	this.shape_281.setTransform(267.2,8.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#666666").s().p("AAKAVIAAgUIgUAAIAAAUIgHAAIAAgqIAHAAIAAATIAUAAIAAgTIAIAAIAAAqg");
	this.shape_282.setTransform(262.1,8.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_283.setTransform(258.4,7.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#666666").s().p("AASAcIgCgHIgCgEIgBgCIghAAIAAgqIAIAAIAAAmIATAAIAAgmIAHAAIAAAmIAGAAIAAARg");
	this.shape_284.setTransform(254.9,9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_285.setTransform(242.8,7.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#666666").s().p("AAKAVIAAgUIgTAAIAAAUIgIAAIAAgqIAIAAIAAATIATAAIAAgTIAIAAIAAAqg");
	this.shape_286.setTransform(239.1,8.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#666666").s().p("AgOAVIAAgqIAHAAIAAAPIAFAAQAIABAEADQAFACAAAIQAAAGgFAEQgEAEgIgBgAgHASIAFAAQAEAAADgEQADgCAAgEQAAgFgDgCQgDgCgEAAIgFAAg");
	this.shape_287.setTransform(234.7,8.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#666666").s().p("AANAVIgNghIgBAAIgNAhIgGAAIASgpIAFgBIASAqg");
	this.shape_288.setTransform(230.3,8.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQABgFADgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_289.setTransform(225.8,8.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_290.setTransform(222.4,7.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#666666").s().p("AARAcIgBgHIgCgEIgBgCIghAAIAAgqIAIAAIAAAmIATAAIAAgmIAIAAIAAAmIAGAAIAAARg");
	this.shape_291.setTransform(219,9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_292.setTransform(213.8,8.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#666666").s().p("AALAVIAAglIgVAAIAAAlIgHAAIAAgqIAjAAIAAAqg");
	this.shape_293.setTransform(208.8,8.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCQADgBACgCIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_294.setTransform(204.3,8.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_295.setTransform(192.7,7.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#666666").s().p("AgHAVIgHgDIAAgHIAAAAQADADAEACQACACAEAAQAEAAACgDQADgCAAgEQAAgEgDgCQgDgCgEAAIgEAAIABgDIADAAQAEAAACgCQACgCAAgEIgCgFQgBgCgEAAIgFABIgEACIgBABIgBAAIABgFIABgBIAFgCIAFAAIAGABQAEABACADIACAGIgCAGQgCACgEABIAAABQAFAAACADQACADAAAEQAAAEgCACQgCADgEACQgEABgDAAQgEAAgDgBg");
	this.shape_296.setTransform(189.6,8.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAGAAAEABQADACACADQACAEAAAEIAAAVIAAADIAAAEIgGAAIgBgGQgDAEgEABQgDACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_297.setTransform(185.5,8.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#666666").s().p("AgQAVIAAgqIAOAAQAIABADADQAFADAAAFIgBAEIgDADIgDABIgBABIAAAAIABAAIAFABIADADQACACgBAEQAAAFgDADQgFAEgIgBgAgIASIAIAAQAEAAADgCQACgDAAgDQAAgEgCgDQgDgCgEAAIgIAAgAgIgCIAGAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgBgEAAIgGAAg");
	this.shape_298.setTransform(181.2,8.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#666666").s().p("AgMAfIAGgLIAFgLIgRgoIAIAAIAMAfIALgfIAGAAIgYA+g");
	this.shape_299.setTransform(176.7,9.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFADgCQAEgDAGgBIAHgCIAFgBIABgCIAAgBQAAgFgBgDQgDgCgEAAIgHABIgGAEIgBAAIABgFQACgCAEgBIAHgBQAFAAAEABQAEACABADQACAEAAAEIAAAVIAAADIABAEIgHAAIgBgGQgDAEgEABQgDACgEAAQgEAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_300.setTransform(164.2,8.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#666666").s().p("AALAVIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAHAAIAAAqg");
	this.shape_301.setTransform(159.4,8.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#666666").s().p("AALAVIAAgQIgIAAIgBACIgCAEIgEAFIgEAFIgJAAIAAAAIAHgIIAFgGIACgDIAAAAIgEgCQgDgCgBgBQgCgCAAgEQAAgEADgDQACgDADgBIAIgDIAQAAIAAAqgAgBgPIgDAEIgBAEIABAEIADADQABABADABIAIAAIAAgSIgIAAQgDgBgBACg");
	this.shape_302.setTransform(146.1,8.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCQADgBACgCIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_303.setTransform(142.2,8.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#666666").s().p("AgOAVIAAgqIAHAAIAAAPIAFAAQAIABAEADQAFACAAAIQAAAGgFAEQgEAEgIgBgAgHASIAFAAQAEAAADgEQADgCAAgEQAAgFgDgCQgDgCgEAAIgFAAg");
	this.shape_304.setTransform(138,8.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#666666").s().p("AgDAVIAAglIgNAAIAAgFIAhAAIAAAFIgNAAIAAAlg");
	this.shape_305.setTransform(133.9,8.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFAAgHQAAgGADgFQACgFAFgDQAFgCAFAAIAIAAIAEADIABAFIgCAAIgEgDIgGgBQgFAAgEAEQgEAEgBAHIAUAAIAAADIgUAAQABAIAEAEQAEAFAFAAQAEAAADgCQADgBABgCIABAAIgBAFIgEADIgIABQgFAAgFgCg");
	this.shape_306.setTransform(130.1,8.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgCgCAAgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgFABIgHAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgFAAIgCgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgCABQgEACgCACQgBACAAADQAAADACACQACADADAAQACAAADgCQACgBACgCQACgCAAgDIAAgJIgLACg");
	this.shape_307.setTransform(125.4,8.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#666666").s().p("AATAVIgEgeIgPAbIgCAAIgOgbIgBAAIgDAeIgFAAIAFgqIAGAAIAOAdIABAAIAPgdIAFAAIAFAqg");
	this.shape_308.setTransform(120.1,8.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#666666").s().p("AAAAUQgFgDgDgEQgDgFAAgIIgJAAIAAAVIgHAAIAAgqIAHAAIAAATIAJAAQABgHADgEQADgEAEgCQAEgCAEAAIAHABIAHAEQADADABAEQACAEAAAFQAAAFgCAFQgBAEgDADIgHAEIgHABQgFAAgDgCgAAAgNQgDAFAAAIQAAAIADAFQADAFAFAAQAEAAACgCQADgCACgEQABgFAAgFQAAgFgBgEQgCgEgDgCQgCgCgEAAQgFAAgDAEg");
	this.shape_309.setTransform(105.6,8.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_310.setTransform(99.3,8.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#666666").s().p("AAKAVIAAgUIgTAAIAAAUIgIAAIAAgqIAIAAIAAATIATAAIAAgTIAIAAIAAAqg");
	this.shape_311.setTransform(94.1,8.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_312.setTransform(90.4,7.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#666666").s().p("AASAcIgCgHIgCgEIgBgCIghAAIAAgqIAIAAIAAAmIATAAIAAgmIAHAAIAAAmIAHAAIAAARg");
	this.shape_313.setTransform(87,9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#666666").s().p("AAAAUQgFgDgDgEQgDgFAAgIIgJAAIAAAVIgHAAIAAgqIAHAAIAAATIAJAAQABgHADgEQADgEAEgCQAEgCAEAAIAHABIAHAEQADADABAEQACAEAAAFQAAAFgCAFQgBAEgDADIgHAEIgHABQgFAAgDgCgAAAgNQgDAFAAAIQAAAIADAFQADAFAFAAQAEAAACgCQADgCACgEQABgFAAgFQAAgFgBgEQgCgEgDgCQgCgCgEAAQgFAAgDAEg");
	this.shape_314.setTransform(72.6,8.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#666666").s().p("AgHAVIgGgEQgEgDgBgEQgCgFAAgFQAAgFACgEQABgEAEgDIAGgEIAHgBIAHABIAHAEIAFAHQACAEAAAFQAAAFgCAFIgFAHIgHAEQgDABgEAAIgHgBgAgGgPQgDACgCAEQgBAEAAAFQAAAFABAFQACAEADACQADACADAAQAEAAADgCQADgCABgEQACgFAAgFQAAgFgCgEQgBgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_315.setTransform(66.4,8.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#666666").s().p("AAKAVIAAgUIgTAAIAAAUIgIAAIAAgqIAIAAIAAATIATAAIAAgTIAIAAIAAAqg");
	this.shape_316.setTransform(61.2,8.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#666666").s().p("AgOAVIAAgqIAHAAIAAAPIAFAAQAIABAEADQAFACAAAIQAAAGgFAEQgEAEgIgBgAgHASIAFAAQAEAAADgEQADgCAAgEQAAgFgDgCQgDgCgEAAIgFAAg");
	this.shape_317.setTransform(56.7,8.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#666666").s().p("AANAVIgNghIAAAAIgOAhIgGAAIASgpIAEgBIATAqg");
	this.shape_318.setTransform(52.4,8.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#666666").s().p("AgLAVQgDgCgBgDQgBgCgBgEQAAgFAEgCQADgDAGgBIAIgCIAEgBIABgCIAAgBQAAgFgCgDQgCgCgFAAIgGABIgGAEIgBAAIABgFQACgCAEgBIAGgBQAHAAADABQADACACADQACAEgBAEIAAAVIABADIAAAEIgGAAIgBgGQgDAEgDABQgEACgDAAQgFAAgDgBgAgBABQgFACgCACQgBACAAADQAAADACACQACADAEAAQACAAACgCQACgBACgCQACgCAAgDIAAgJIgKACg");
	this.shape_319.setTransform(47.9,8.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#666666").s().p("AgDAfIAAgqIAHAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_320.setTransform(44.5,7.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#666666").s().p("AASAcIgCgHIgCgEIgBgCIggAAIAAgqIAHAAIAAAmIATAAIAAgmIAIAAIAAAmIAFAAIAAARg");
	this.shape_321.setTransform(41,9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#666666").s().p("AgMAQQgGgGAAgKQAAgGADgFQADgFAEgDQAFgCAEAAQAGAAAEACQAEACACAEQACAEAAAFIAAADIgdAAQAAAIAEAFQAEAFAGAAQAEAAADgBQAEgBACgDIABAAIgBAGQgCACgEABQgDABgFAAQgJAAgGgGgAABgRQgCAAgCABQgDACgCACQgCADAAAEIAVAAIAAgBQAAgGgDgDQgCgCgEAAIgBAAg");
	this.shape_322.setTransform(35.8,8.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#666666").s().p("AAKAVIAAglIgUAAIAAAlIgHAAIAAgqIAjAAIAAAqg");
	this.shape_323.setTransform(30.9,8.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#666666").s().p("AgGAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgFAFgDQAFgCAFAAIAHAAIAFADIABAFIgBAAIgFgDIgGgBQgGAAgEAEQgDAFAAAIQAAAFABAEQACAEAEACQACADAEAAQAEAAADgCIAFgDIABAAIgCAFQgBACgEABIgHABQgFAAgFgCg");
	this.shape_324.setTransform(26.3,8.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#666666").s().p("AAVAcIgCgHIgCgEIgBgCIgfAAIgBACIgCAEIgCAHIgCAAIAAgRIAEAAIAQglIAFgBIAQAmIAEAAIAAARgAALALIgLgdIgBAAIgLAdIAXAAg");
	this.shape_325.setTransform(13.5,9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#666666").s().p("AgDAfIAAgqIAGAAIAAAqgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_326.setTransform(10,7.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#666666").s().p("AARAeIAAg3IghAAIAAA3IgIAAIAAg8IAxAAIAAA8g");
	this.shape_327.setTransform(5.4,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,79.6);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAxIAAhCIARAAIAABCgAgIgfIAAgRIARAAIAAARg");
	this.shape.setTransform(119.3,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAhIAAg4IgSAAIAAgJIA1AAIAAAJIgSAAIAAA4g");
	this.shape_1.setTransform(114.4,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAfQgIgEgEgHQgFgIgBgMQAAgJAGgJQAEgHAIgFQAIgEAJAAIAKABIAIADIABAJIgCAAQgDgCgDgBIgHgCQgGABgFADQgDADgDAGQgDAGAAAHQABAMAFAGQAFAIAJgBQAFABAEgCIAHgFIACAAIgDALQgCACgGABQgFACgGAAQgJAAgIgEg");
	this.shape_2.setTransform(108.4,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAhIAAgtIgfAtIgNAAIAAhBIARAAIAAArIAegrIAOAAIAABBg");
	this.shape_3.setTransform(100.6,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAQAiIgSgxIgBAAIgTAxIgNAAIAchBIANgCIAdBDg");
	this.shape_4.setTransform(93,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAHIABgNIAoAAIgBANg");
	this.shape_5.setTransform(86.6,11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAfQgIgEgFgHQgEgIgBgMQABgJAEgJQAFgHAIgFQAIgEAJAAIALABIAHADIACAJIgDAAQgDgCgDgBIgHgCQgHABgEADQgDADgDAGQgDAGAAAHQAAAMAGAGQAEAIAKgBQAEABAFgCIAHgFIACAAIgCALQgEACgEABQgGACgGAAQgJAAgIgEg");
	this.shape_6.setTransform(80.7,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOAyIAAgvIgfAvIgNAAIAAhCIARAAIAAArIAegrIAOAAIAABCgAgMgfIgIgEIgCgBIACgNIACAAIABACIADADIAGAEQAEACAEAAQAFAAAEgCIAGgEIADgDIABgCIACAAIACANIgCABIgIAEQgFACgIAAQgHAAgFgCg");
	this.shape_7.setTransform(72.9,10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAeQgGgFAAgJQAAgFACgEQADgEAEgCIAKgDIAMgCIAGgEQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgBQAAgHgEgDQgEgEgFAAIgHABIgHADQgDACgCACIgCAAIABgKQAGgDAGgCIAKgCQAPAAAHAGQAGAHAAAKIAAAgIAAAGIABAGIgPAAIgCgJQgDAFgFADQgEADgHAAQgKAAgFgFgAgCADQgFACgCADQgCACAAAFQAAAFADADQADACAEAAQAEAAAEgDQAEgDAAgGIAAgOIgNAEg");
	this.shape_8.setTransform(65,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggAyIAAhhIASAAIAAALIAAAAQADgFAFgEQAGgEAHAAQAMAAAHAJQAHAJAAAQQAAALgEAHQgDAIgHAFQgGAEgKAAQgFAAgEgCQgFgDgDgEIAAAAIAAAngAgHgjQgEAEgCAGQgDAGAAAIIAAABQAAAIADADQACAFADACQAEACAEAAQAHAAAEgHQAEgFAAgMQAAgMgEgGQgDgHgHAAQgEAAgEAEg");
	this.shape_9.setTransform(57.3,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAhIAAg4IgZAAIAAA4IgSAAIAAhBIA8AAIAABBg");
	this.shape_10.setTransform(48.9,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAxIAJgRIAHgRIgbg/IAUAAIAPAtIABAAIAQgtIANAAIgnBhg");
	this.shape_11.setTransform(37.8,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOAhIAAgtIgfAtIgNAAIAAhBIARAAIAAArIAegrIAOAAIAABBg");
	this.shape_12.setTransform(26.7,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AANAhIAAgeIgZAAIAAAeIgRAAIAAhBIARAAIAAAbIAZAAIAAgbIARAAIAABBg");
	this.shape_13.setTransform(18.4,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAxIAAhCIAQAAIAABCgAgIgfIAAgRIARAAIAAARg");
	this.shape_14.setTransform(12.4,10.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAaAsIgCgLIgEgHIgBgDIg0AAIAAhCIARAAIAAA5IAYAAIAAg5IARAAIAAA5IAJAAIAAAeg");
	this.shape_15.setTransform(6.6,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.3,20.9);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIA5IAAhYIARAAIAABYgAAFgpIAAgPIAPAAIAAAPgAgTgpIAAgPIAPAAIAAAPg");
	this.shape.setTransform(90.7,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgQArQgIgCgGgGQgHgGgFgIQgDgJAAgMQAAgLADgIQAFgJAGgGQAHgFAIgDQAIgDAIAAQAIAAAJADQAJADAGAFQAGAGAFAIQADAJAAALQAAAMgDAIQgEAJgHAGQgGAFgJADQgIADgJAAQgHAAgJgDgAgOgfQgGAFgDAIQgDAIgBAKQABAKADAIQADAIAGAFQAHAFAHAAQAJAAAGgFQAGgEAEgJQACgIAAgKQAAgJgDgIQgDgIgGgFQgHgFgIAAQgIAAgGAEg");
	this.shape_1.setTransform(83.3,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAUAsIAAgpIgnAAIAAApIgSAAIAAhXIASAAIAAAlIAnAAIAAglIARAAIAABXg");
	this.shape_2.setTransform(73.1,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgcAsIAAhXIARAAIAAAfIAGAAQAJAAAIAEQAIADAFAFQAEAGAAAKQAAAKgEAGQgFAGgHADQgIADgJAAgAgLAjIAEAAQAIAAAFgEQAFgFAAgKQAAgKgFgFQgFgEgIAAIgEAAg");
	this.shape_3.setTransform(64.6,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAXAsIgYhGIgBAAIgbBGIgNAAIAkhWIAOgCIAjBYg");
	this.shape_4.setTransform(56.3,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAYAsIgMgeIgeAAIgMAeIgNAAIAmhWIANgCIAkBYgAAJAFIgKgfIgBAAIgMAfIAXAAg");
	this.shape_5.setTransform(47.7,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgIAsIAAhXIARAAIAABXg");
	this.shape_6.setTransform(41.3,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAhA4IgDgNIgDgIIgBgCIhDAAIAAhYIASAAIAABOIAmAAIAAhOIARAAIAABOIAKAAIAAAhg");
	this.shape_7.setTransform(34.7,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgZAsIAAhXIAsAAIAAAKIgbAAIAAAcIAYAAIAAAJIgYAAIAAAeIAOAAIAIAAIAFAAIAGAAIABAAIgGAKg");
	this.shape_8.setTransform(26.6,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAUAsIAAhNIgnAAIAABNIgSAAIAAhXIBLAAIAABXg");
	this.shape_9.setTransform(18,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgJArQgJgDgHgFQgHgGgEgJQgEgIAAgMQAAgKAFgJQADgJAIgFQAHgGAJgDQAIgDALAAIAJABIAJACIAIAEIABALIgCAAQgFgEgHgCQgFgCgHAAQgKAAgGAFQgIAEgEAIQgEAIgBAKQABAMAEAHQAEAIAHAEQAHAEAKAAQAJAAAHgCQAGgDAFgEIACAAIgDANQgGADgHACQgHACgIAAQgKAAgJgDg");
	this.shape_10.setTransform(8.7,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,20.9);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAfQgIgEgFgHQgFgJAAgLQAAgMAFgHQAFgIAIgDQAHgEAIAAQAJAAAHAEQAIADAFAIQAFAHAAAMQAAALgFAJQgFAHgIAEQgHAEgJAAQgIAAgHgEgAgLgTQgEAIAAALQAAAMAEAHQAEAHAHAAQAHAAAFgHQAEgHAAgMQAAgLgEgIQgFgGgHAAQgHAAgEAGg");
	this.shape.setTransform(65.4,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeAtIgCgMIgDgHIgCgCIgtAAIgBACIgDAHIgDAMIgIAAIAAgeIAHAAIAWg4IAOgDIAXA7IAJAAIAAAegAAKAPIgNgoIgBAAIgNAoIAbAAg");
	this.shape_1.setTransform(57.4,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAeQgEgFgBgJQABgFACgEQACgEAEgCIAKgDIAMgCIAHgEQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgBQAAgHgDgDQgFgEgGAAIgFABIgIADQgDACgDACIgBAAIABgKQAFgDAHgCIAKgCQAPAAAGAGQAHAHAAAKIAAAgIAAAGIABAGIgPAAIgCgJQgEAFgFADQgDADgHAAQgKAAgGgFgAgCADQgFACgCADQgCACAAAFQAAAFADADQADACAFAAQAEAAADgDQADgDABgGIAAgOIgNAEg");
	this.shape_2.setTransform(46.2,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAhIgGgKIgHgMIgIgLIAAgCIAMgPIAMgPIAQAAIgZAbIAMAPIAKAOIAHAJIAAAAgAgfAhIAAhBIARAAIAABBg");
	this.shape_3.setTransform(39.4,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAeAhIgGgKIgHgMIgHgLIAAgCIAMgPIALgPIAQAAIgXAbIALAPIAKAOIAGAJIAAAAgAgIAhIAAhBIARAAIAABBgAg1AhIAAAAIAHgJIAKgOIALgPIgXgbIAPAAIAMAPIAMAPIAAACIgIALIgHAMIgGAKg");
	this.shape_4.setTransform(29.8,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAhIAAgtIgfAtIgNAAIAAhBIARAAIAAArIAegrIAOAAIAABBg");
	this.shape_5.setTransform(20.2,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAhIAAgeIgZAAIAAAeIgRAAIAAhBIARAAIAAAbIAZAAIAAgbIASAAIAABBg");
	this.shape_6.setTransform(12,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAhQgGgCgEgDIgBgNIABAAQAFAFAFADQAFADAGgBQADABACgCQADgCABgCIABgGIgBgFQgBgCgDgCQgDgCgEABIgIAAIABgIIAHAAQAEgBADgEQACgDAAgFQAAgEgCgCQgDgDgEAAQgFAAgDACIgEADIgCABIgCAAIABgKIADAAIAGgDIAKgBQAFAAAGACQAFACAEAEQADAEAAAFQAAAGgDAEQgDAEgGACQAGACAEAEQAEAEAAAGQAAAGgEAFQgDAEgGADQgHACgGAAQgHAAgFgCg");
	this.shape_7.setTransform(4.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.7,20.9);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AMLCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgALjCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAK7CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAKTCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAJrCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAJDCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAIbCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAHzCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAHLCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAGjCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAF7CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAFTCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAErCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAEDCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgADbCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgACzCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgACLCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgABjCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAA7CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAATCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAgUCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAg8CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAhkCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAiMCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAi0CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAjcCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAkECiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAksCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAlUCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAl8CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAmkCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAnMCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAn0CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAocCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgApECiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgApsCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAqUCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAq8CiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgArkCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAsMCiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAs0ChQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAM1CfQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAtaCXQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgANaCRQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAt7CEQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAN6B5QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAuXBpQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOUBcQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAusBIQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOlA4QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAu4AiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOsARQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAu5gFQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOqgXQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAuxgsQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOdg+QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAufhPQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOGhfQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAuHhsQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgANrh3QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAtniDQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgANIiKQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAtAiQQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAMgiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAL4iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgALQiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAKoiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAKAiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAJYiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAIwiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAIIiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAHgiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAG4iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAGQiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAFoiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAFAiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAEYiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgADwiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgADIiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgACgiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAB4iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgABQiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAAoiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAAAiTQgCgDAAgEQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAgniTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAhPiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAh3iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAifiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAjHiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAjviTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAkXiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAk/iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAlniTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAmPiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAm3iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAnfiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAoHiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAoviTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgApXiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAp/iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAqniTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgArPiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAr3iTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAsfiTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(94.8,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,191.5,33.1);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgdAzIAAhlIAzAAIAAALIgfAAIAAAiIAbAAIAAAJIgbAAIAAAkIAQAAIAJAAIAGAAIAHgBIABAAIgGAMg");
	this.shape.setTransform(130.9,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhAAzIAAhlIAVAAIAABaIAiAAIAAhaIATAAIAABaIAiAAIAAhaIAVAAIAABlg");
	this.shape_1.setTransform(117.6,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgJAzIAAhlIATAAIAABlg");
	this.shape_2.setTransform(106.2,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAXAzIAAgvIgtAAIAAAvIgUAAIAAhlIAUAAIAAAqIAtAAIAAgqIAVAAIAABlg");
	this.shape_3.setTransform(97,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AghAzIAAhlIAVAAIAAAkIAGAAQALAAAJAEQAJAEAGAGQAFAHAAALQAAAMgFAHQgFAHgJAEQgJADgLAAgAgMApIADAAQAKAAAGgGQAGgFAAgLQAAgMgGgGQgGgFgKAAIgDAAg");
	this.shape_4.setTransform(85.9,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAaAzIgchRIAAAAIggBRIgOAAIAqhkIAPgBIAoBlg");
	this.shape_5.setTransform(75,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAcAzIgOgjIgjAAIgOAjIgPAAIAshkIAPgBIAqBlgAALAFIgNgjIAAAAIgPAjIAcAAg");
	this.shape_6.setTransform(63.7,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgJAzIAAhaIgaAAIAAgLIBHAAIAAALIgaAAIAABag");
	this.shape_7.setTransform(53.6,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgdAzIAAhlIAzAAIAAALIgfAAIAAAiIAbAAIAAAJIgbAAIAAAkIAPAAIAJAAIAIAAIAGgBIABAAIgGAMg");
	this.shape_8.setTransform(45.4,10.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAtBBIgEgPIgDgJIgCgDIhHAAIgCADIgEAJIgDAPIgJAAIAAgmIALAAIAjhZIAQgCIAiBbIAMAAIAAAmgAAVAbIgXhGIgBAAIgaBGIAyAAg");
	this.shape_9.setTransform(34.3,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.5,0,109.3,20.7);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m6();
	this.instance.parent = this;
	this.instance.setTransform(-51,9,1.003,1.003);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,9,391,117.3);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.949)","rgba(255,255,255,0)"],[0.835,1],0,0.1,0,0,0.1,118).s().p("AslNJQlclNgKnjQgLnhFNldQFOlcHigKQHigLFcFNQFdFOALHjQAKHhlOFcQlNFenjAJIgcABQnQAAlSlEg");
	this.shape.setTransform(116.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233,233);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AsYCbQhAAAguguQgtgtAAhAIAAAAQAAhAAtgtQAugtBAAAIYxAAQBAAAAtAtQAuAtAABAIAAAAQAABAguAtQgtAuhAAAg");
	this.shape.setTransform(94.8,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.6,31.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhICVQghgUgTgmQgTglgBg0QABgzATgmQATgmAhgVQAhgWApAAQAoAAAhAWQAfAVATAmQAUAmAAAzQAAA0gUAlQgTAmgfAUQghAUgoAAQgpAAghgUgAgohyQgRASgJAeQgIAfAAAlQAAAnAIAdQAJAdARARQARAQAZAAQAXAAARgRQARgSAIgdQAIgdAAglQAAglgIgfQgIgegRgSQgRgRgXgBQgZABgRARg");
	this.shape.setTransform(154.4,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhICVQgggUgUgmQgTglAAg0QAAgzATgmQAUgmAggVQAhgWAoAAQApAAAgAWQAgAVAUAmQASAmABAzQgBA0gSAlQgUAmggAUQggAUgpAAQgoAAghgUgAgohyQgRASgJAeQgIAfAAAlQAAAnAIAdQAJAdARARQAQAQAZAAQAZAAAQgRQAQgSAJgdQAIgdAAglQAAglgIgfQgJgegQgSQgQgRgZgBQgZABgQARg");
	this.shape_1.setTransform(120.5,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhICVQghgUgTgmQgTglgBg0QABgzATgmQATgmAhgVQAhgWAoAAQApAAAgAWQAhAVASAmQAUAmgBAzQABA0gUAlQgSAmghAUQggAUgpAAQgoAAghgUgAgohyQgRASgIAeQgJAfAAAlQAAAnAJAdQAIAdARARQAQAQAZAAQAYAAARgRQARgSAIgdQAIgdAAglQAAglgIgfQgIgegRgSQgRgRgYgBQgZABgQARg");
	this.shape_2.setTransform(86.6,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhICVQghgUgTgmQgTglgBg0QABgzATgmQATgmAhgVQAhgWAoAAQApAAAgAWQAhAVASAmQAUAmgBAzQABA0gUAlQgSAmghAUQggAUgpAAQgoAAghgUgAgohyQgRASgIAeQgJAfAAAlQAAAnAJAdQAIAdARARQAQAQAZAAQAYAAARgRQARgSAIgdQAIgdAAglQAAglgIgfQgIgegRgSQgRgRgYgBQgZABgQARg");
	this.shape_3.setTransform(49.7,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiKCmIAAgWIBEg2QArghAagbQAYgbAMgXQALgYAAgYQAAgYgPgPQgQgPgfAAQgWAAgWAJQgVAKgVARIgFAAIAFgxQAVgOAZgIQAZgIAeAAQA8AAAdAYQAeAYgBAsQABAfgOAZQgNAYgcAZQgdAagsAeIgjAYIAAACIBgAAIAjgBIAagCQALgBALgCIAFAAIgSA6g");
	this.shape_4.setTransform(17.9,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0,173.6,60.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBQQgNgFgIgKQgHgKAAgPIABgKIADgJIgKAAIAAgQIAZAAIAKgGIALgHIguAAIAAgQIBBAAQAFgFACgFQACgFAAgHQAAgHgEgFQgDgFgGgCQgFgCgEAAQgJAAgIADQgHACgIAHIgDAAIACgVQAFgDAJgCQAJgDANAAQAHAAAJADQAIADAIAFQAIAFAEAIQAFAIAAAKQAAAFgCAFQAAAEgDAEIAMAAIAAAQIgcAAIgLAHIgKAGIAxAAIAAAQIhDAAIgGAJQgBAGAAAGQAAALAHAGQAGAGAKAAQALAAAMgGQANgGAMgOIADAAIgDAcQgGAFgIAEQgIAEgIACQgJADgJAAQgOAAgMgFg");
	this.shape.setTransform(8.6,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.1,16.6,32.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+ALIAAgVIB8AAIAAAVg");
	this.shape.setTransform(15.1,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.5,-4.8,17.2,35.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAlQgHgFgFgJQgEgKAAgNQAAgMAEgJQAEgKAIgFQAHgFAJAAQAKAAAIAFQAHAFAEAKQAEAJAAAMQAAANgEAKQgEAJgIAFQgHAFgKAAQgJAAgHgFgAgHgcQgEAEgCAIQgBAHgBAJQAAAQAEAIQAFAJAGAAQAIAAAEgJQADgIAAgQQAAgJgCgHQgBgIgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape.setTransform(118.1,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAqIAAgGIANgNQAMgNAGgKQAGgJAAgIQAAgDgBgDIgEgGQgCgBgFAAQgEAAgEABQgEACgEAEIgCAAIABgMIAJgEQAFgBAHAAQAMAAAHAFQAGAGAAAKQAAAIgDAGQgDAFgGAGIgOAQIgGAGIAAAAIATAAIALAAIAIgBIABAAIgFAPg");
	this.shape_1.setTransform(110.6,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAlQgIgFgEgJQgEgKAAgNQAAgMAEgJQAEgKAIgFQAHgFAJAAQAKAAAIAFQAGAFAEAKQAFAJAAAMQAAANgFAKQgDAJgIAFQgHAFgKAAQgJAAgHgFgAgHgcQgEAEgCAIQgBAHgBAJQAAAQAFAIQAEAJAGAAQAIAAADgJQAEgIABgQQgBgJgCgHQgBgIgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_2.setTransform(102.9,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAqIAAgGIANgNQAMgNAGgKQAGgJAAgIQAAgDgBgDIgEgGQgCgBgFAAQgEAAgEABQgEACgEAEIgCAAIABgMIAJgEQAFgBAHAAQAMAAAHAFQAGAGAAAKQAAAIgDAGQgDAFgGAGIgOAQIgGAGIAAAAIATAAIALAAIAIgBIABAAIgFAPg");
	this.shape_3.setTransform(95.4,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_4.setTransform(89.6,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAApIAAhEIgRAHIACgKIAXgKIAJAAIAABRg");
	this.shape_5.setTransform(83.4,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AABApIAAhEIgRAHIABgKIAXgKIAKAAIAABRg");
	this.shape_6.setTransform(75.8,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_7.setTransform(70.5,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAlQgHgFgFgJQgEgKAAgNQAAgMAEgJQAEgKAIgFQAHgFAJAAQAKAAAHAFQAHAFAFAKQAEAJAAAMQAAANgEAKQgFAJgHAFQgHAFgKAAQgJAAgHgFgAgHgcQgEAEgCAIQgCAHABAJQAAAQADAIQAFAJAGAAQAHAAAFgJQADgIAAgQQAAgJgBgHQgCgIgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_8.setTransform(64.8,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPApIgKgFIgCgMIACAAQAEAEAFABQAGACAGAAQAEAAADgBQAEgCACgDQADgEAAgEQAAgIgFgEQgGgEgIAAIgEAAIABgIIABAAQAKAAAEgDQAFgEAAgFQAAgGgEgEQgDgDgFAAIgJABQgEABgDADIgCAAIABgKQAEgCAFgBIAKgBQAGAAAGACQAGACADAEQAEAFAAAHQAAAGgDAFQgCAEgGADIAAAAQAGADAEADQAEAFAAAJQAAAIgFAGQgEAGgHADQgHACgHAAQgHAAgGgBg");
	this.shape_9.setTransform(57.1,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgqAFIAAgJIBVAAIAAAJg");
	this.shape_10.setTransform(44.9,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABApIAAhEIgRAHIABgKIAWgKIALAAIAABRg");
	this.shape_11.setTransform(32.1,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAApIAAhEIgRAHIACgKIAWgKIAKAAIAABRg");
	this.shape_12.setTransform(24.5,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_13.setTransform(19.2,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAFApIAAgWIgmAAIAAgHIAog0IAOAAIAAAwIANAAIgCALIgLAAIAAAWgAgSAHIAAABIAXAAIAAggIgBAAg");
	this.shape_14.setTransform(13.5,9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABApIAAhEIgRAHIABgKIAWgKIAKAAIAABRg");
	this.shape_15.setTransform(5.4,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,18.4);


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


(lib.ro_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ro();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,291,291);


(lib.ri_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ri();
	this.instance.parent = this;
	this.instance.setTransform(274,10.3,1,1,93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-7,279.8,280.7);


(lib.loonew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mlogonrew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,112);


(lib.ыдщп = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLB0IAAhrIhUh8IAmAAIBCBnIACAAIA9hnIAXAAIhMB4IAABvg");
	this.shape.setTransform(49.7,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABOB0IgmhaIhZAAIgoBaIgWAAIBpjkIATgDIBjDngAAiAJIgkhXIgCAAIgmBXIBMAAg");
	this.shape_1.setTransform(27.8,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhpB0IAAjnIBXAAQA6AAAiAdQAgAcABA6QgBAmgRAaQgRAageANQgeANgmAAgAhLBiIArAAQAzAAAcgYQAbgZAAgxQgBgygZgYQgZgXg0AAIguAAg");
	this.shape_2.setTransform(2.9,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOB0IAAjnIAdAAIAADng");
	this.shape_3.setTransform(-17,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAwB0QgMgMgPgRIgfglIgfgmIgTAAIAABoIgeAAIAAjnIA4AAQAZAAARAGQASAFAKAOQALANAAAWQAAAQgIAMQgGAMgOAIQgMAIgQAEIAAABIAeAlIAkAnQASATAQAOIAAABgAg8gDIAcAAQAQgBAKgHQAKgHAGgLQAFgLABgOQgBgSgHgJQgHgKgKgDQgNgDgPAAIgXAAg");
	this.shape_4.setTransform(-31,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7B0IAAjnIB3AAIAAASIhYAAIAABZIBPAAIAAARIhPAAIAABrg");
	this.shape_5.setTransform(-51,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAkB0Igkg2IgxhEIAAgDQAYgZAYgbIAug2IAnAAIhaBfIArA8IAlAuQAPATAKAKIAAABgAhiB0IAAjnIAvAAIAADng");
	this.shape_6.setTransform(46.7,-21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZBxQgYgHgTgPQgSgPgKgXQgLgWAAgeQAAgeALgWQALgXATgPQATgPAYgIQAYgIAZAAQAMAAANACQANACAMAEQAMAEAIAGIAEAfIgGAAQgOgNgPgEQgQgFgRAAQgZAAgUALQgUAMgMAVQgLAVgBAdQABAdALAVQAMAUAUAKQATALAYAAQAYAAASgGQASgGANgLIAFAAIgKAhQgOAJgTAFQgTAFgVAAQgbAAgXgIg");
	this.shape_7.setTransform(19.8,-21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA/B1IgfhRIhRAAIghBRIggAAIBijkIAlgFIBeDpgAAYALIgdhQIgCAAIggBQIA/AAg");
	this.shape_8.setTransform(-6.6,-21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag8B0IAAjnIAuAAIAADNIAXAAIAVAAIAPAAIANgCIADAAIgPAcg");
	this.shape_9.setTransform(-26.6,-21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhPB0IAAjnIBFAAQAVAAARAFQARAGAKALQAKAMAAAUQAAAUgMAMQgLAMgXAGIAAACQAQACAOAGQAOAGAIAMQAIAMAAARQAAAagMAPQgMAQgUAHQgTAGgWAAgAgiBbIAWAAQAWAAAMgLQAMgLAAgWQgBgWgOgLQgOgLgWAAIgRAAgAgigSIARAAQASAAALgKQAKgKABgSQAAgSgKgIQgKgJgUAAIgRAAg");
	this.shape_10.setTransform(-47.4,-21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-43.3,123,75.9);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBtQgVgJgNgVQgNgTAAggQAAggANgaQAMgaAVgTQAWgTAagKQAbgLAegDIALATQgeAGgWAMQgXAOgOATQgPATgEAVIACAAQAJgJANgGQAMgGAQAAQAOAAAOAEQAPADALAKQANAIAGAMQAIAPgBAUQAAAXgLASQgLARgWAIQgUAKgbAAQgaAAgWgKgAgfAIQgMANAAAWQAAAXAMANQAMANAVABQAVAAALgNQALgNABgXQgBgYgKgMQgMgLgUAAQgVgBgNAMg");
	this.shape.setTransform(110.1,214);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA9BxIgehOIhOAAIggBOIgfAAIBfjcIAjgFIBbDhgAAXALIgchOIgCAAIgfBOIA9AAg");
	this.shape_1.setTransform(81.4,214.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhoBwIAAjfIBYAAQA6AAAfAcQAgAcAAA3QAAAkgQAZQgPAZgdANQgcANglAAgAg8BXIAiAAQAqAAAUgXQAVgWAAgqQAAgpgUgXQgUgXgpAAIgkAAg");
	this.shape_2.setTransform(57.7,214.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhnBwIAAgMIB/i4IAAgCIh0AAIAGgZICuAAIAAAKIiAC6IAAACIA7AAIAogBIAZgBIATgBIABAAIgQAcg");
	this.shape_3.setTransform(32.4,214.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA9BxIgehOIhOAAIggBOIgfAAIBfjcIAjgFIBbDhgAAXALIgchOIgCAAIgfBOIA9AAg");
	this.shape_4.setTransform(8.4,214.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABeBwIgRirIgBAAIhNCeIgPAAIhOidIgBAAIgOCqIgdAAIAYjfIArAAIBHCTIABAAIBHiTIAsAAIAXDfg");
	this.shape_5.setTransform(-19.3,214.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,192,161.6,43.7);


(lib.bl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,278);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(145,42.8,1,1,0,0,0,145,39.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({y:39.8,alpha:1},15,cjs.Ease.get(1)).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(325.5,44.3,1,2.866,0,0,0,0,0.1);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(325.5,134,1.003,1,0,0,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).wait(293));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:0,scaleX:1,scaleY:1,skewY:-4.7,y:134,alpha:1},59,cjs.Ease.get(0.96)).wait(293));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-339.9,651,768);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(124.4,25.3,1.111,1.111,0,0,0,75.2,213);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:23.3,alpha:1},20,cjs.Ease.get(0.99)).wait(418));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(116.5,116.5,2.428,2.428,0,0,0,116.5,116.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},24,cjs.Ease.get(1)).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.3,-166.3,565.7,565.7);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8.3,16.4,1,1,0,0,0,8.3,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.1,16.6,32.9);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.1,30.3,1,1,0,0,0,86.1,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0,173.6,60.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.1,18.8,1,1,0,0,0,13.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,35.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.1,18.4,1.103,1.103,0,0,0,62,9.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:9.2,scaleX:1,scaleY:1,x:62,y:9.2,alpha:1},24,cjs.Ease.get(1)).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,8.2,136.8,20.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(57.2,30.6,1,1,0,0,0,61.6,10.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:28.5,alpha:1},9,cjs.Ease.get(1)).wait(3156));

	// Layer 2
	this.instance_1 = new lib.Symbol28("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.8,13.1,1.111,1.111,0,0,0,48.1,10.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({regX:48.3,regY:10.4,scaleX:1,scaleY:1,x:92,y:11.3,alpha:1},12,cjs.Ease.get(1)).wait(3160));

	// Layer 1
	this.instance_2 = new lib.Symbol27("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.2,9.8,1.979,1.979,0,0,0,35.8,10.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:35.9,scaleX:1,scaleY:1,x:7.8,y:11.7,alpha:1},7,cjs.Ease.get(1)).wait(3170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-10.8,141.9,41.3);


(lib.Symbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ыдщп("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-663.6,-86.6,1,1,0,0,0,0,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-725,-108.2,123,76);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.sta("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.086,0.086);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.12,scaleY:0.12,rotation:40.6},10,cjs.Ease.get(0.28)).to({scaleX:0.09,scaleY:0.09,rotation:81.2},7,cjs.Ease.get(0.28)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-35.4,70.8,70.8);


(lib.cx9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(283.4,58.9,0.359,0.359,0,0,0,260.2,72.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:260.2,y:72.5,alpha:1},25,cjs.Ease.get(1)).wait(387));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.circles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ro
	this.instance = new lib.ro_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(143.6,144.6,0.951,0.951,11.5,0,0,145.5,145.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:145.5,scaleX:1,scaleY:1,x:143.5,y:144.7,alpha:1},14,cjs.Ease.get(1)).wait(3270));

	// bl
	this.instance_1 = new lib.bl_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.2,142.1,0.95,0.95,-17,0,0,138.9,139);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:139,scaleX:1,scaleY:1,alpha:1},19,cjs.Ease.get(1)).wait(3270));

	// ri
	this.instance_2 = new lib.ri_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(146.1,138.7,0.951,0.951,43.2,0,0,132,131.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:138.5,alpha:1},23,cjs.Ease.get(1)).wait(3270));

	// glow
	this.instance_3 = new lib.Symbol20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143.8,138,1.246,1.246,0,0,0,116.5,116.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(3289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-35.7,354.3,354.3);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-750.1,3.6,1,1,0,0,0,82.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1571));

	// Layer 4
	this.instance_1 = new lib.Symbol25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-749,3.2,1,1,0,0,0,94.8,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1571));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsYCbQhAAAguguQgtgtAAhAIAAAAQAAhAAtgtQAugtBAAAIYxAAQBAAAAtAtQAuAtAABAIAAAAQAABAguAtQgtAuhAAAg");
	this.shape.setTransform(-749.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1571));

	// Layer 2
	this.instance_2 = new lib.Symbol17("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-749.3,6.2,0.974,0.974,0,0,0,94.7,15.5);
	this.instance_2.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1570).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-844.8,-13.3,191.4,34.7);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.9,21.6,1,1,0,0,0,48.9,10.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({y:10.4,alpha:1},5).wait(697));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8.7,17,1,1,0,0,0,8.3,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0.7,16.6,32.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53.9,18.8,1.332,1.332,0,0,0,53.8,18.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.9,scaleX:1,scaleY:1,x:53.8,y:18.9,alpha:1,startPosition:14},14).wait(332));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-20.6,189,55);


(lib.Symbol5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol4_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,1.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[-0.1,1.9,18.8,4.7,44,-1.1]},alpha:0.5,startPosition:12},12).to({guide:{path:[44.1,-1.2,71.7,-7.6,107,-24.3]},alpha:0,startPosition:6},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-33.5,70.8,70.8);


(lib.Symbol15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(194.4,30,1,1,0,0,0,8.3,16.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:198.3,alpha:1},10,cjs.Ease.get(1)).wait(2006));

	// Layer 2
	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(106,30.4,1.039,1.039,0,0,0,86.1,30.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,y:30.3,alpha:1},11,cjs.Ease.get(1)).wait(2009));

	// Layer 1
	this.instance_2 = new lib.Symbol6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(243.3,30.3,10.869,1,0,0,0,9,17.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:8.6,regY:17.6,scaleX:1,x:15.4,y:30.2,alpha:1},14,cjs.Ease.get(1)).wait(2011));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.5,12.6,187,35.3);


(lib.mdaylogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol5_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-131.2,-54.1,0.392,0.378,0,-16,164,0.6,-0.2);

	this.instance_1 = new lib.Symbol5_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-158.1,-4.8,0.392,0.378,0,139.5,-40.5,0.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},15).to({state:[]},23).wait(8689));

	// V Primary
	this.instance_2 = new lib.loonew("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-157.3,3.7,1.047,1.047,0,0,0,60.5,56);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:3.6,alpha:1},28,cjs.Ease.get(1)).wait(8699));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.7,-55,126.7,117.3);


(lib.sp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// znyzhk
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-660.2,40.6,1,1,0,0,0,53.8,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).wait(1726));

	// price
	this.instance_1 = new lib.Symbol15_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-659.7,2.3,0.944,0.944,0,0,0,106.8,30.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).wait(1741));

	// date
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-662.5,-26.6,1,1,0,0,0,62,9.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).wait(1751));

	// sp
	this.instance_3 = new lib.Symbol10copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-664,-47.7,1.395,1.395,0,0,0,-664.6,-66.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({regY:-66.8,scaleX:1,scaleY:1,x:-661.1,y:-64.4,alpha:1},13,cjs.Ease.get(1)).wait(1741));

	// crcls
	this.instance_4 = new lib.circles("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-664.2,-14.6,0.79,0.79,-3.8,0,0,141.7,141.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(1764));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.m6MBF_300x600_nov20adw = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.mdaylogo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(54.8,53.8,0.6,0.6,0,0,0,-157.8,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// discl
	this.instance_1 = new lib.Symbol30("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.8,553.2,1,1,0,0,0,145,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// cars
	this.instance_2 = new lib.cx9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(158.2,352.1,0.841,0.841,0,0,0,155.7,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// txt
	this.instance_3 = new lib.Symbol22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(186.6,431.3,1,1,0,0,0,124.9,24.2);

	this.instance_4 = new lib.sp("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.2,148.9,1.094,1.094,-5.9,0,0,-663.8,-73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(100));

	// slog
	this.instance_5 = new lib.Symbol13("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,491.5,0.885,0.885,0,0,0,-749.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

	// bg
	this.instance_6 = new lib.Symbol26("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.5,347,1,1,0,0,0,325.4,133.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#CCCCCC","#F5F5F5"],[0,0.396,1],-6.3,173.4,-6.3,-42.6).s().p("EgZdAv5MAAAhfxMAy7AAAMAAABfxg");
	this.shape.setTransform(152.1,301.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,173.1,651,767.9);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 26,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bl.png", id:"bl"},
		{src:"m6.png", id:"m6"},
		{src:"mlogonrew.png", id:"mlogonrew"},
		{src:"ri.png", id:"ri"},
		{src:"ro.png", id:"ro"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;