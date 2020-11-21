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



(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,76);


(lib.bl = function() {
	this.initialize(img.bl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,29);


(lib.br = function() {
	this.initialize(img.br);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,40);


(lib.btlblspiced = function() {
	this.initialize(img.btlblspiced);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,301);


(lib.btlspicedgold = function() {
	this.initialize(img.btlspicedgold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,367);


(lib.CM_LH = function() {
	this.initialize(img.CM_LH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,299);


(lib.CM_RH = function() {
	this.initialize(img.CM_RH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,325);


(lib.Slogans = function() {
	this.initialize(img.Slogans);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,126);


(lib.tankard = function() {
	this.initialize(img.tankard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,183);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D2D4").s().p("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");
	this.shape.setTransform(1.9,-0.8,1.487,1.487);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(0.7,-0.9,1.487,1.487);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A0000").s().p("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");
	this.shape_2.setTransform(12.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.6,-78.1,660.6,157.8);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Slogans, null, new cjs.Matrix2D(1,0,0,1,-196.9,-97.9)).s().p("AwaEZIAAoxMAg0AAAIAAIxg");
	this.shape.setTransform(218.2,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113.1,-69.3,210.1,56.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Slogans, null, new cjs.Matrix2D(1,0,0,1,-93.5,-36.4)).s().p("AumFpIAArRIdNAAIAAKrIu2AAIAAAmg");
	this.shape.setTransform(93.5,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,72.3);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CM_RH();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,9.6,1,1,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-47,409.2,377.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CM_LH();
	this.instance.parent = this;
	this.instance.setTransform(19.2,-24.6,1,1,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-24.6,371.4,347.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tankard();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,183);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btlblspiced();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,301);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A11100").s().p("AgNBYIAAgbIAaAAIAAAbgAgKApIgDiAIAbAAIgDCAg");
	this.shape.setTransform(134,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A11100").s().p("AAQBYIAAhNIgfAAIAABNIgbAAIAAivIAbAAIAABJIAfAAIAAhJIAbAAIAACvg");
	this.shape_1.setTransform(124.8,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A11100").s().p("AATBsIAAhtIgBAAIgjBtIgbAAIAAivIAbAAIAABuIABAAIAjhuIAbAAIAACvgAgOhLQgHgEgEgFQgFgFgCgGQgBgGAAgGIATAAIACAGIAEAFIAEAFQADABADAAQADAAAEgBIAEgFIAEgFIABgGIAUAAQgBAGgCAGQgDAGgEAFQgEAFgHAEQgGADgJAAQgJAAgHgDg");
	this.shape_2.setTransform(113.2,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A11100").s().p("AAXBYIgHglIggAAIgDATIgDASIgbAAIARhYIAShXIAdAAIAjCvgAgGgKIgGAkIAXAAIgLhIIAAAAIgGAkg");
	this.shape_3.setTransform(101.7,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A11100").s().p("AgxBGQAHgEAEgFQAEgEADgHQACgGABgKIABgXIAAhkIBNAAIAACuIgbAAIAAiVIgaAAIAABEQAAAVgBAOQgCAOgEAKQgEAKgGAGQgHAGgLAFg");
	this.shape_4.setTransform(89.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A11100").s().p("AAQBYIAAhNIgfAAIAABNIgbAAIAAivIAbAAIAABJIAfAAIAAhJIAbAAIAACvg");
	this.shape_5.setTransform(78.7,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A11100").s().p("AggBOQgKgLAAgVIAAhYQAAgKADgJQACgIAFgGQAFgHAIgDQAJgDAKAAQAMAAAIADQAJADAFAGQAFAGACAJQACAIAAALIAABVQAAAXgLAMQgKALgWAAQgVAAgLgLgAgHg9IgEAGIgDAHIAAAHIAABXQAAAHADAFQAEAFAHAAQAIAAAEgFQADgGAAgIIAAhYQAAgHgDgGQgDgGgJAAQgEAAgDACg");
	this.shape_6.setTransform(67.3,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A11100").s().p("AATBsIAAhtIgBAAIgkBtIgbAAIAAivIAbAAIAABuIABAAIAkhuIAaAAIAACvgAgOhLQgHgEgEgFQgEgFgCgGQgCgGAAgGIAUAAIABAGIADAFIAGAFQADABACAAQADAAADgBIAGgFIACgFIABgGIAVAAQgBAGgDAGQgCAGgEAFQgFAFgGAEQgHADgIAAQgJAAgHgDg");
	this.shape_7.setTransform(50.3,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A11100").s().p("AgkBZIAAgWIAGAAQAGAAAFgEQAEgEACgJIAAgBIABgDIABgDIABgCIgmiBIAbAAIAVBaIABAAIAVhaIAbAAIglCHQgDAOgFAIQgEAJgEAEQgFAEgGABIgLACg");
	this.shape_8.setTransform(39.5,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A11100").s().p("AAOBYIAAiUIgbAAIAACUIgbAAIAAivIBRAAIAACvg");
	this.shape_9.setTransform(28.7,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A11100").s().p("AglBZIAAgWIAHAAQAHAAAEgEQADgEADgJIABgBIAAgDIABgDIABgCIgmiBIAbAAIAVBaIABAAIAVhaIAbAAIgkCHQgEAOgEAIQgFAJgEAEQgFAEgGABIgMACg");
	this.shape_10.setTransform(18.2,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A11100").s().p("AAUBYIgEgaIgGgaQgDgOgGgFQgEgGgJAAIgHAAIAABNIgbAAIAAivIAbAAIAABJIAFAAQAJAAAFgFQAGgFADgNIACgJIADgQIADgPIACgKIAZAAIgFAbIgFAaQgDAMgGAIQgGAIgHADIAAABQAKACAFAIQAFAIADANIAHAeIAFAdg");
	this.shape_11.setTransform(7.7,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},76).wait(81));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFB619").s().p("AtrDcIAAm3IbXAAIAAG3g");
	this.shape_12.setTransform(69.7,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},76).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-6.4,175.2,44.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,76);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ADJATQgIgIAAgLQAAgKAIgIQAIgIALAAQAMAAAIAIQAIAIAAAKQAAALgIAIQgIAIgMAAQgLAAgIgIg");
	var mask_graphics_1 = new cjs.Graphics().p("AhNCwQhJhJAAhnQAAhmBJhJQBJhIBmAAQBnAABJBIQBIBJAABmQAABnhIBJQhJBIhnAAQhmAAhJhIg");
	var mask_graphics_2 = new cjs.Graphics().p("AkUEfQh3h3AAioQAAinB3h3QB3h3CnAAQCpAAB3B3QB3B3AACnQAACoh3B3Qh3B3ipAAQinAAh3h3g");
	var mask_graphics_3 = new cjs.Graphics().p("AlhFiQiTiTAAjPQAAjOCTiTQCTiTDOAAQDPAACTCTQCTCTAADOQAADPiTCTQiTCTjPAAQjOAAiTiTg");
	var mask_graphics_4 = new cjs.Graphics().p("Al3F4QidibAAjdQAAjcCdicQCcibDbgBQDdABCbCbQCdCcAADcQAADdidCbQibCdjdgBQjbABicidg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:24.8,y:-2.2}).wait(1).to({graphics:mask_graphics_1,x:34.6,y:-3.1}).wait(1).to({graphics:mask_graphics_2,x:41.7,y:-3.7}).wait(1).to({graphics:mask_graphics_3,x:41.6,y:-4.1}).wait(1).to({graphics:mask_graphics_4,x:41.3,y:-4.2}).wait(651));

	// Layer 1
	this.instance = new lib.bl();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},243).wait(412));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgXAjQgIgIAAgMQAAgLAIgHQAIgIALAAQALAAAIAIQAIAHAAALQAAAMgIAIQgIAIgLAAQgLAAgIgIg");
	var mask_graphics_1 = new cjs.Graphics().p("AiACBQg1g2AAhLQAAhKA1g2QA2g1BKAAQBLAAA2A1QA1A2AABKQAABLg1A2Qg2A1hLAAQhKAAg2g1g");
	var mask_graphics_2 = new cjs.Graphics().p("AjZDaQhahaAAiAQAAh/BahaQBahaB/AAQCAAABaBaQBaBaAAB/QAACAhaBaQhaBaiAAAQh/AAhahag");
	var mask_graphics_3 = new cjs.Graphics().p("AkeEfQh3h3AAioQAAinB3h3QB3h3CnAAQCoAAB3B3QB3B3AACnQAACoh3B3Qh3B3ioAAQinAAh3h3g");
	var mask_graphics_4 = new cjs.Graphics().p("AlQFRQiLiMAAjFQAAjECLiMQCMiLDEAAQDFAACMCLQCLCMAADEQAADFiLCMQiMCLjFAAQjEAAiMiLg");
	var mask_graphics_5 = new cjs.Graphics().p("AluFvQiXiYAAjXQAAjWCXiYQCYiXDWAAQDXAACYCXQCXCYAADWQAADXiXCYQiYCXjXAAQjWAAiYiXg");
	var mask_graphics_6 = new cjs.Graphics().p("Al4F5QibidAAjcQAAjcCbicQCdibDbAAQDdAACcCbQCbCcAADcQAADcibCdQicCbjdAAQjbAAidibg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-3.2,y:4.3}).wait(1).to({graphics:mask_graphics_1,x:6.1,y:14.5}).wait(1).to({graphics:mask_graphics_2,x:14.1,y:21.6}).wait(1).to({graphics:mask_graphics_3,x:20.3,y:27.1}).wait(1).to({graphics:mask_graphics_4,x:24.7,y:31.1}).wait(1).to({graphics:mask_graphics_5,x:27.4,y:33.5}).wait(1).to({graphics:mask_graphics_6,x:28.3,y:34.3}).wait(407));

	// Layer 1
	this.instance = new lib.br();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},227).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hwrn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(185,185,185,0.694)").s().p("AAZAnIAAghIgSAAIgGAAIgYAhIgNAAIAbgkQgJgCgGgEQgEgGAAgIQAAgFACgEQABgDAEgDQAFgDAHgCQAIgBAKAAIAdAAIAABNgAgJgdQgHADAAAJQAAAJAGAEQAGAEANAAIAQAAIAAghIgQAAQgMAAgGAEg");
	this.shape.setTransform(408,-21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(185,185,185,0.694)").s().p("AgHAJQAFgCACgCQAAgCAAgEIgGAAIAAgJIAOAAIAAAIQAAAFgDAEQgDADgGABg");
	this.shape_1.setTransform(402.6,-24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(185,185,185,0.694)").s().p("AggAnIAAhNIAdAAQARAAAIAEQAIAGAAAJQAAAFgCADQgBADgEACQgEADgHABIALACIAGAEIADAGIABAHIgBAHQgBADgCADQgCADgDACIgKADIgNABgAgTAiIATAAQALAAAFgEQAFgEgBgJQABgQgVgBIgTAAgAgTgFIATAAQAKABAEgEQAEgEAAgHQAAgHgGgDQgFgEgOAAIgMAAg");
	this.shape_2.setTransform(397,-21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(185,185,185,0.694)").s().p("AgQAnQgHgCgEgDQgEgEgBgEQgCgEAAgGIAAggQAAgFACgFQABgEAEgDQAEgDAHgBQAHgCAJgBQAKABAHACQAHABAEADQAEADABAEQACAFAAAFIAAAhIgBAIQgBADgCADQgDADgEACIgKADIgOABQgJAAgHgBgAgKghIgHAEQgCACgBADIgBAHIAAAjIABAHQABADACACIAHAEIAKABIALgBQAFgCACgCQACgCABgDIABgHIAAgjIgBgHQgBgDgCgCQgCgCgFgCIgLgBIgKABg");
	this.shape_3.setTransform(388,-21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(185,185,185,0.694)").s().p("AggAnIAAhNIAgAAQAJAAAGABQAHABAEADQAEADABAEQABAEAAAFQAAAEgBAEIgFAGQgFADgGAAQgGACgIAAIgTAAIAAAlgAgSgCIAPAAQAMgBAGgDQAFgDAAgIQAAgKgFgCQgEgEgNAAIgQAAg");
	this.shape_4.setTransform(380,-21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(185,185,185,0.694)").s().p("AgQAnQgHgCgEgDQgEgEgBgEQgCgEAAgGIAAggQAAgFACgFQABgEAEgDQAEgDAHgBQAHgCAJgBQAKABAHACQAHABAEADQAEADABAEQACAFAAAFIAAAhIgBAIQgBADgCADQgDADgEACIgKADIgOABQgJAAgHgBgAgKghIgHAEQgCACgBADIgBAHIAAAjIABAHQABADACACIAHAEIAKABIALgBQAFgCACgCQACgCABgDIABgHIAAgjIgBgHQgBgDgCgCQgCgCgFgCIgLgBIgKABg");
	this.shape_5.setTransform(371.1,-21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(185,185,185,0.694)").s().p("AAkAuIgBgNIhFAAIgBANIgLAAIAAgTIAGAAIAEgCIAEgCIAEgEIADgFIACgIIADgLIACgPIADgZIAyAAIAABIIAMAAIAAATgAgGgSQgCAQgDAJQgDAMgGAEIgHAEIAxAAIAAhDIgaAAg");
	this.shape_6.setTransform(361.6,-21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(185,185,185,0.694)").s().p("AgWAkQgIgFAAgKIAAgCIANAAIAAACQgBAHAFADQAEAEAJAAQAKAAAEgFQAGgDAAgJQAAgQgXgBIgHAAIAAgFIAHAAQAMAAAFgEQAGgEAAgHQgBgOgSgBQgKAAgFADQgFAEgBAHIAAACIgMAAIAAgCQAAgKAJgFQAHgEAQgBQAPAAAJAGQAIAFAAAKQABAHgGAFQgFAFgKABIAIABIAGAEQADACABAEQACAEAAAEQAAAFgCAEQgCAEgDAEQgEADgHABQgFABgJAAQgPAAgHgEg");
	this.shape_7.setTransform(352.9,-21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(185,185,185,0.694)").s().p("AgQAnQgHgCgEgDQgEgEgBgEQgCgEAAgGIAAggQAAgFACgFQABgEAEgDQAEgDAHgBQAHgCAJgBQAKABAHACQAHABAEADQAEADABAEQACAFAAAFIAAAhIgBAIQgBADgCADQgDADgEACIgKADIgOABQgJAAgHgBgAgKghIgHAEQgCACgBADIgBAHIAAAjIABAHQABADACACIAHAEIAKABIALgBQAFgCACgCQACgCABgDIABgHIAAgjIgBgHQgBgDgCgCQgCgCgFgCIgLgBIgKABg");
	this.shape_8.setTransform(341,-21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(185,185,185,0.694)").s().p("AgXAnIAAhNIAvAAIAAAFIgiAAIAABIg");
	this.shape_9.setTransform(333.8,-21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(185,185,185,0.694)").s().p("AgQAnQgHgCgEgDQgEgEgBgEQgCgEAAgGIAAggQAAgFACgFQABgEAEgDQAEgDAHgBQAHgCAJgBQAKABAHACQAHABAEADQAEADABAEQACAFAAAFIAAAhIgBAIQgBADgCADQgDADgEACIgKADIgOABQgJAAgHgBgAgKghIgHAEQgCACgBADIgBAHIAAAjIABAHQABADACACIAHAEIAKABIALgBQAFgCACgCQACgCABgDIABgHIAAgjIgBgHQgBgDgCgCQgCgCgFgCIgLgBIgKABg");
	this.shape_10.setTransform(325.8,-21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(185,185,185,0.694)").s().p("AgwAnIAAhNIANAAIAABIIAeAAIAAhIIAMAAIAABIIAdAAIAAhIIANAAIAABNg");
	this.shape_11.setTransform(315.3,-21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(185,185,185,0.694)").s().p("AAXAnIgHgVIgfAAIgHAVIgNAAIAdhNIANAAIAdBNgAgNANIAcAAIgPgpg");
	this.shape_12.setTransform(305.2,-21.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(185,185,185,0.694)").s().p("AggAnIAAhNIAdAAQARAAAIAEQAIAGAAAJQAAAFgBADQgCADgEACQgFADgGABIAKACIAHAEIADAGIABAHIgBAHQAAADgDADQgCADgEACIgJADIgNABgAgTAiIATAAQALAAAFgEQAEgEABgJQgBgQgUgBIgTAAgAgTgFIATAAQAJABAFgEQAEgEAAgHQAAgHgGgDQgFgEgOAAIgMAAg");
	this.shape_13.setTransform(297.2,-21.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(185,185,185,0.694)").s().p("AAZAnIAAghIgSAAIgGAAIgYAhIgNAAIAbgkQgJgCgGgEQgEgGAAgIQAAgFACgEQABgDAFgDQAEgDAHgCQAIgBAKAAIAcAAIAABNgAgJgdQgHADAAAJQAAAJAGAEQAGAEANAAIAQAAIAAghIgQAAQgMAAgGAEg");
	this.shape_14.setTransform(284.4,-21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(185,185,185,0.694)").s().p("AAcAnIAAhIIgdAAIgDAcIgBANIgCAKIgDAIIgDAFIgEAFIgGACIgHABIgIAAIgCAAIAAgFIAFAAIADAAIADgBIADgCIADgDIABgDIACgFIABgHIACgIIABgKIAEghIA0AAIAABNg");
	this.shape_15.setTransform(275.1,-21.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(185,185,185,0.694)").s().p("AAkAuIgBgNIhFAAIgBANIgLAAIAAgTIAGAAIAEgCIAEgCIAEgEIADgFIACgIIADgLIACgPIADgZIAyAAIAABIIAMAAIAAATgAgGgSQgCAQgDAJQgDAMgGAEIgHAEIAxAAIAAhDIgaAAg");
	this.shape_16.setTransform(265.6,-21);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(185,185,185,0.694)").s().p("AgYAnIAAhNIAxAAIAAAFIgkAAIAAAeIAdAAIAAAEIgdAAIAAAhIAkAAIAAAFg");
	this.shape_17.setTransform(254.3,-21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(185,185,185,0.694)").s().p("AggAnIAAhNIAdAAQARAAAIAEQAIAGAAAJQAAAFgCADQgBADgEACQgEADgHABIALACIAGAEIADAGIABAHIgBAHQgBADgCADQgCADgDACIgKADIgNABgAgTAiIATAAQALAAAFgEQAFgEgBgJQABgQgVgBIgTAAgAgTgFIATAAQAKABAEgEQAEgEAAgHQAAgHgGgDQgFgEgOAAIgMAAg");
	this.shape_18.setTransform(246.7,-21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIAAg+IgrA+IgKAAIAAhNIAMAAIAAA9IArg9IAKAAIAABNg");
	this.shape_19.setTransform(237.7,-21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(185,185,185,0.694)").s().p("AAcAnIAAhIIgcAAIgEAcIgCANIgBAKIgDAIIgDAFIgEAFIgGACIgHABIgIAAIgCAAIAAgFIAFAAIADAAIAEgBIACgCIACgDIACgDIACgFIABgHIACgIIABgKIAEghIA0AAIAABNg");
	this.shape_20.setTransform(228,-21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(185,185,185,0.694)").s().p("AAkAuIgBgNIhFAAIgBANIgLAAIAAgTIAGAAIAEgCIAEgCIAEgEIADgFIACgIIADgLIACgPIADgZIAyAAIAABIIAMAAIAAATgAgGgSQgCAQgDAJQgDAMgGAEIgHAEIAxAAIAAhDIgaAAg");
	this.shape_21.setTransform(218.6,-21);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(185,185,185,0.694)").s().p("AgFAnIAAhNIALAAIAABNg");
	this.shape_22.setTransform(211.9,-21.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIgggmIgJAAIAAAmIgNAAIAAhNIANAAIAAAkIAJAAIAbgkIAOAAIgeAmIAiAng");
	this.shape_23.setTransform(206.5,-21.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(185,185,185,0.694)").s().p("AgwAnIAAhNIANAAIAABIIAeAAIAAhIIAMAAIAABIIAdAAIAAhIIANAAIAABNg");
	this.shape_24.setTransform(195.8,-21.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(185,185,185,0.694)").s().p("AAAAnIgJgDIgGgFIgEgHIgBgIIAAgOIgPAAIAAAlIgMAAIAAhNIAMAAIAAAkIAPAAIAAgOQABgFABgEQACgFAEgDQAEgDAGgBQAGgCAKgBQAJABAHACQAGABAEADQAEADABAFQADAEAAAFIAAAgQAAAGgCAEQgCAEgDAEQgEADgHABQgHACgJAAIgOgBgAADghQgEACgCACQgCACgBADIgCAHIAAAjIACAHQABADACACQACACAEACIALABIAKgBQAFgCACgCQADgCAAgDIABgHIAAgjIgBgHQAAgDgDgCIgHgEIgKgBIgLABg");
	this.shape_25.setTransform(180.4,-21.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(185,185,185,0.694)").s().p("AAbAnIAAhIIgbAAIgDAcIgDANIgCAKIgCAIIgDAFIgEAFIgFACIgIABIgIAAIgBAAIAAgFIAEAAIAEAAIADgBIACgCIACgDIACgDIACgFIABgHIABgIIACgKIAEghIA1AAIAABNg");
	this.shape_26.setTransform(168.9,-21.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(185,185,185,0.694)").s().p("AgQAnQgHgCgEgDQgEgEgBgEQgCgEAAgGIAAggQAAgFACgFQABgEAEgDQAEgDAHgBQAHgCAJgBQAKABAHACQAHABAEADQAEADABAEQACAFAAAFIAAAhIgBAIQgBADgCADQgDADgEACIgKADIgOABQgJAAgHgBgAgKghIgHAEQgCACgBADIgBAHIAAAjIABAHQABADACACIAHAEIAKABIALgBQAFgCACgCQACgCABgDIABgHIAAgjIgBgHQgBgDgCgCQgCgCgFgCIgLgBIgKABg");
	this.shape_27.setTransform(159.9,-21.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(185,185,185,0.694)").s().p("AgXAnIAAhNIAvAAIAAAFIgiAAIAABIg");
	this.shape_28.setTransform(152.5,-21.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(185,185,185,0.694)").s().p("AgQAnQgHgCgEgDQgEgEgBgEQgCgEAAgGIAAggQAAgFACgFQABgEAEgDQAEgDAHgBQAHgCAJgBQAKABAHACQAHABAEADQAEADABAEQACAFAAAFIAAAhIgBAIQgBADgCADQgDADgEACIgKADIgOABQgJAAgHgBgAgKghIgHAEQgCACgBADIgBAHIAAAjIABAHQABADACACIAHAEIAKABIALgBQAFgCACgCQACgCABgDIABgHIAAgjIgBgHQgBgDgCgCQgCgCgFgCIgLgBIgKABg");
	this.shape_29.setTransform(144.1,-21.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIgfgmIgKAAIAAAmIgNAAIAAhNIANAAIAAAkIAKAAIAbgkIAMAAIgdAmIAiAng");
	this.shape_30.setTransform(135.9,-21.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(185,185,185,0.694)").s().p("AAbAnIAAhIIgcAAIgCAcIgCANIgDAKIgCAIIgDAFIgEAFIgFACIgIABIgIAAIgBAAIAAgFIAEAAIAEAAIACgBIADgCIADgDIABgDIACgFIABgHIABgIIACgKIAEghIA1AAIAABNg");
	this.shape_31.setTransform(125.8,-21.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(185,185,185,0.694)").s().p("AAXAnIgHgVIgfAAIgHAVIgNAAIAdhNIANAAIAdBNgAgNANIAcAAIgPgpg");
	this.shape_32.setTransform(117.2,-21.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(185,185,185,0.694)").s().p("AAZAnIAAghIgSAAIgFAAIgZAhIgNAAIAbgkQgJgCgGgEQgEgGAAgIQAAgFACgEQABgDAEgDQAFgDAHgCQAIgBAKAAIAdAAIAABNgAgJgdQgHADAAAJQAAAJAGAEQAGAEANAAIAQAAIAAghIgQAAQgMAAgGAEg");
	this.shape_33.setTransform(104.3,-21.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIAAgmIgqAAIAAAmIgNAAIAAhNIANAAIAAAiIAqAAIAAgiIAOAAIAABNg");
	this.shape_34.setTransform(95.3,-21.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIAAgmIgqAAIAAAmIgMAAIAAhNIAMAAIAAAiIAqAAIAAgiIAOAAIAABNg");
	this.shape_35.setTransform(85.7,-21.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(185,185,185,0.694)").s().p("AAXAnIgHgVIgfAAIgHAVIgNAAIAdhNIANAAIAdBNgAgNANIAcAAIgPgpg");
	this.shape_36.setTransform(76.8,-21.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(185,185,185,0.694)").s().p("AggAnIAAhNIAdAAQARAAAIAEQAIAGAAAJQAAAFgBADQgCADgEACQgFADgFABIAJACIAHAEIADAGIABAHIgBAHQAAADgDADQgCADgEACIgJADIgNABgAgTAiIASAAQAMAAAFgEQAEgEABgJQAAgQgWgBIgSAAgAgTgFIASAAQAKABAFgEQAEgEAAgHQAAgHgFgDQgGgEgOAAIgMAAg");
	this.shape_37.setTransform(68.5,-21.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIAAg+IgrA+IgKAAIAAhNIAMAAIAAA9IArg9IAKAAIAABNg");
	this.shape_38.setTransform(59.3,-21.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(185,185,185,0.694)").s().p("AAnAnIgggnIgBAAIAAAnIgLAAIAAgnIgBAAIggAnIgMAAIAignIgfgmIAMAAIAdAlIABAAIAAglIALAAIAAAlIABAAIAdglIAMAAIgfAmIAiAng");
	this.shape_39.setTransform(49.2,-21.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(185,185,185,0.694)").s().p("AggAnIAAhNIAdAAQARAAAIAEQAIAGAAAJQAAAFgCADQgBADgEACQgEADgHABIAKACIAHAEIADAGIABAHIgBAHQAAADgDADQgCADgDACIgKADIgNABgAgTAiIATAAQALAAAFgEQAFgEgBgJQAAgQgUgBIgTAAgAgTgFIATAAQAKABAEgEQAEgEAAgHQAAgHgGgDQgFgEgOAAIgMAAg");
	this.shape_40.setTransform(39.6,-21.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(185,185,185,0.694)").s().p("AgYAnIAAhNIAxAAIAAAFIgkAAIAAAeIAdAAIAAAEIgdAAIAAAhIAkAAIAAAFg");
	this.shape_41.setTransform(28,-21.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIAAgmIgpAAIAAAmIgOAAIAAhNIAOAAIAAAiIApAAIAAgiIAOAAIAABNg");
	this.shape_42.setTransform(19.4,-21.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(185,185,185,0.694)").s().p("AggAnIAAhNIAgAAQAJAAAHABQAGABAEADQADADACAEQACAEAAAFQAAAEgCAEIgFAGQgEADgGAAQgHACgJAAIgSAAIAAAlgAgSgCIAQAAQAMgBAFgDQAFgDAAgIQAAgKgEgCQgGgEgMAAIgQAAg");
	this.shape_43.setTransform(10.9,-21.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(185,185,185,0.694)").s().p("AgFAnIAAhNIALAAIAABNg");
	this.shape_44.setTransform(4.3,-21.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(185,185,185,0.694)").s().p("AAhAnIgCg7IgbA7IgHAAIgbg7IgCA7IgLAAIAEhNIAMAAIAbBBIAchBIAMAAIAEBNg");
	this.shape_45.setTransform(-3.3,-21.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(185,185,185,0.694)").s().p("AAkAuIgBgNIhFAAIgBANIgLAAIAAgTIAGAAIAEgCIAEgCIAEgEIADgFIACgIIADgLIACgPIADgZIAyAAIAABIIAMAAIAAATgAgGgSQgCAQgDAJQgDAMgGAEIgHAEIAxAAIAAhDIgaAAg");
	this.shape_46.setTransform(-14,-21);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(185,185,185,0.694)").s().p("AAXAnIgHgVIgfAAIgHAVIgNAAIAdhNIANAAIAdBNgAgNANIAcAAIgPgpg");
	this.shape_47.setTransform(-23.2,-21.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(185,185,185,0.694)").s().p("AAVAnIAAgmIgqAAIAAAmIgNAAIAAhNIANAAIAAAiIAqAAIAAgiIAOAAIAABNg");
	this.shape_48.setTransform(-32.1,-21.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EgkwABAIAAh+MBJhAAAIAAB+g");
	this.shape_49.setTransform(187.1,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-29.4,587.1,15.3);


(lib.btl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btlspicedgold();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,367);


(lib.tankard_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(374,91.5,1,1,0,0,0,90.5,91.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:86.7},9,cjs.Ease.get(1)).to({x:90.5},6).wait(20).to({startPosition:0},0).to({scaleX:0.35,scaleY:0.35,x:10.4,y:76.4,alpha:0},5,cjs.Ease.get(1)).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btl1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.7,236.6,0.109,0.109,0,0,0,47.1,272.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:47,regY:272.7,scaleX:0.89,scaleY:0.89,x:41.7,y:241.7,alpha:1},9,cjs.Ease.get(1)).wait(4).to({regX:46.9,regY:272.6,scaleX:0.9,scaleY:0.9,x:41.6,y:241.6},0).to({regX:47,regY:272.7,scaleX:0.89,scaleY:0.89,x:41.7,y:241.7},6,cjs.Ease.get(1)).wait(20).to({startPosition:0},0).to({regX:47.1,scaleX:0.35,scaleY:0.35,alpha:0},5,cjs.Ease.get(0.8)).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.6,206.8,10.3,40.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AB3DtQgIgIAAgLQAAgMAIgIQAIgIALAAQALAAAIAIQAIAIAAAMQAAALgIAIQgIAIgLAAQgLAAgIgIg");
	var mask_graphics_1 = new cjs.Graphics().p("AiTEbQhJhJAAhnQAAhnBJhHQBJhJBlAAQBnAABJBJQBJBHAABnQAABnhJBJQhJBJhnAAQhlAAhJhJg");
	var mask_graphics_2 = new cjs.Graphics().p("AkeE7Qh3h3AAioQAAinB3h3QB3h3CnAAQCoAAB3B3QB3B3AACnQAACoh3B3Qh3B3ioAAQinAAh3h3g");
	var mask_graphics_3 = new cjs.Graphics().p("AlhFiQiTiTAAjPQAAjOCTiTQCTiTDOAAQDPAACTCTQCTCTAADOQAADPiTCTQiTCTjPAAQjOAAiTiTg");
	var mask_graphics_4 = new cjs.Graphics().p("Al4F4QibibgBjdQABjbCbicQCcidDcAAQDcAACcCdQCdCcgBDbQABDdidCbQicCdjcAAQjcAAicidg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:16.5,y:24.5}).wait(1).to({graphics:mask_graphics_1,x:27.6,y:35.6}).wait(1).to({graphics:mask_graphics_2,x:30.3,y:43.4}).wait(1).to({graphics:mask_graphics_3,x:30.3,y:46.3}).wait(1).to({graphics:mask_graphics_4,x:30.3,y:46.3}).wait(185));

	// Layer 1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.5,47.3,1,1,0,0,0,32.5,47.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,43.6,5.5,5.5);


(lib.sog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.t1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.1,-85.4,1,1,0,0,0,93.5,36.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:93.8,y:28.6,alpha:1},9,cjs.Ease.get(1)).to({startPosition:0},4).to({scaleX:1.02,scaleY:1.02,x:92.5,y:26.6},2).to({scaleX:1,scaleY:1,x:93.8,y:28.6},5).wait(37).to({scaleX:1.02,scaleY:1.02,x:92.5,y:22.3},0).to({scaleX:1,scaleY:1,x:93.8,y:27.2},7).wait(596));

	// Layer 1
	this.instance_1 = new lib.t2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(188,89.5,1,1,0,0,0,105.1,28.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:196.3,y:91.7,alpha:1},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:195.2,y:89.5},5).wait(37).to({scaleX:1.02,scaleY:1.02,x:196.3,y:85.9},0).to({scaleX:1,scaleY:1,x:195.2,y:88},7).wait(596));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-121.5,187,72.3);


(lib.rh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(181.5,162.5,1,1,0,0,0,181.5,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:180.3,y:160.1},14).to({x:181.5,y:162.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-47,409.2,377.7);


(lib.lh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(164,149.5,1,1,0,0,0,164,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:164.4,y:148.5},4).to({x:165.2,y:145.9},10).to({x:164,y:149.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-24.6,371.4,347.5);


(lib.hands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(285.5,121.2,1.092,1.092,-88.7,0,0,27.9,38.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).wait(176));

	// Layer 4
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(381.6,7.2,1.227,1.2,-63.5,0,0,22,20.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).wait(175));

	// Layer 3
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.8,-9.6,1.409,1,0,77.1,54.7,18.2,14.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).wait(175));

	// Layer 2
	this.instance_3 = new lib.rh("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(538.3,156.3,1.666,1.666,0,0,0,47.1,85.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({regY:85.9,scaleX:0.91,scaleY:0.91,x:343.4,y:120.4,alpha:1,startPosition:9},10,cjs.Ease.get(1)).to({startPosition:29},5).to({rotation:1.7,x:331.3,y:87.5,mode:"single",startPosition:4},5,cjs.Ease.get(1)).to({_off:true},152).wait(20));

	// Layer 1
	this.instance_4 = new lib.lh("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.1,60.7,1.447,1.447,0,0,0,287.6,87.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({regX:287.7,regY:87.2,scaleX:0.91,scaleY:0.91,x:262.1,y:81.8,alpha:1,startPosition:9},10,cjs.Ease.get(1)).to({startPosition:29},5).to({rotation:-3.9,x:269.1,y:62.8,mode:"single",startPosition:4},5,cjs.Ease.get(1)).to({_off:true},152).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cmlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(328.6,78.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,660.6,157.8);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71,18.1,0.907,0.907,0,0,0,71,21);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1,y:21,alpha:1},10,cjs.Ease.get(1)).to({_off:true},76).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-254.7,150.5,1,1,0,0,0,50.5,150.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:54.3},9,cjs.Ease.get(1)).to({x:50.5},6).wait(20).to({startPosition:0},0).to({regX:50.8,regY:150.8,scaleX:0.17,scaleY:0.17,x:139.3,y:218.4,alpha:0},5,cjs.Ease.get(1)).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.blick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(52.7,43,1.366,1.366,0,0,0,28.1,37.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(27).to({startPosition:27},0).to({alpha:0,startPosition:32},5,cjs.Ease.get(1)).to({_off:true},1).wait(119));

	// Layer 2
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.6,139.7,1,1,0,0,0,22,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(27).to({startPosition:27},0).to({alpha:0,startPosition:32},5,cjs.Ease.get(1)).to({_off:true},1).wait(119));

	// Layer 1
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.9,203.9,1.531,1.531,0,0,0,17.9,14.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(27).to({startPosition:27},0).to({alpha:0,startPosition:32},5,cjs.Ease.get(1)).to({_off:true},1).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logoCM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cmlogo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.7,-87,0.855,0.855,0,0,0,330.2,78.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:330.3,scaleX:1,scaleY:1,y:-78.9,alpha:1},14,cjs.Ease.get(1)).wait(1).to({y:-152.2},0).to({y:-225.7},6,cjs.Ease.get(0.98)).to({_off:true},85).wait(1195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280.6,-154.4,564.7,134.9);


// stage content:
(lib.CMBudmo_300x250_nov20admix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ > 4) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// hw
	this.instance = new lib.hwrn("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(152.2,363.6,0.65,2.683,0,0,0,190.5,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

	// butt
	this.instance_1 = new lib.butt("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.1,206.7,0.504,0.504,0,0,0,71.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145));

	// logo
	this.instance_2 = new lib.logoCM("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.8,201.4,0.239,0.239,0,0,0,0.8,-78.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(106));

	// anima
	this.instance_3 = new lib.blick("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(152.6,154.6,0.576,0.576,0,0,0,91.2,126.3);

	this.instance_4 = new lib.hands("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(162,144.8,0.576,0.576,0,0,0,317.4,170.6);

	this.instance_5 = new lib.Symbol6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.9,137.1,0.548,0.548,0,0,0,42.1,162.9);

	this.instance_6 = new lib.tankard_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(194.1,171.1,0.471,0.471,0,0,0,90.6,91.8);

	this.instance_7 = new lib.btl2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(106.5,144.6,0.471,0.471,0,0,0,50.6,150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(145));

	// txt
	this.instance_8 = new lib.sog("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(100.4,43.6,0.517,0.517,0,0,0,108.5,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(145));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2822").s().p("EgbVAzGMAAAhmLMA2rAAAMAAABmLg");
	this.shape.setTransform(150,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.7,-76.9,381.7,654);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"b1.png", id:"b1"},
		{src:"bl.png", id:"bl"},
		{src:"br.png", id:"br"},
		{src:"btlblspiced.png", id:"btlblspiced"},
		{src:"btlspicedgold.png", id:"btlspicedgold"},
		{src:"CM_LH.png", id:"CM_LH"},
		{src:"CM_RH.png", id:"CM_RH"},
		{src:"Slogans.png", id:"Slogans"},
		{src:"tankard.png", id:"tankard"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;