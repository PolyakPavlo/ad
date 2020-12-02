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



(lib.biaarrow = function() {
	this.initialize(img.biaarrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,60);


(lib.bose = function() {
	this.initialize(img.bose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,357);


(lib.carcx30bg = function() {
	this.initialize(img.carcx30bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,759,153);


(lib.carcx30 = function() {
	this.initialize(img.carcx30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,122);


(lib.cx302 = function() {
	this.initialize(img.cx302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,191);


(lib.glo1 = function() {
	this.initialize(img.glo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,138);


(lib.mlogonrew = function() {
	this.initialize(img.mlogonrew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,112);


(lib.pitjpeg = function() {
	this.initialize(img.pitjpeg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,370);


(lib.salon = function() {
	this.initialize(img.salon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,372);


(lib.sha = function() {
	this.initialize(img.sha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,77);


(lib.smallarrow = function() {
	this.initialize(img.smallarrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,22);


(lib.whe2 = function() {
	this.initialize(img.whe2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,42);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sha();
	this.instance.parent = this;
	this.instance.setTransform(-43,-110.4,1.074,1.074);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-110.4,429.6,82.7);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cx302();
	this.instance.parent = this;
	this.instance.setTransform(0,-83.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-83.3,355,191);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhA9IAAheIhJBeIgLAAIAAh5IATAAIAABcIBHhcIANAAIAAB5g");
	this.shape.setTransform(181.9,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYA9IgXgbIgegmIAAgBIAbgbIAZgcIASAAIgzAzIAXAeIAWAYIAPAPIAAABgAgxA9IAAh5IATAAIAAB5g");
	this.shape_1.setTransform(169.4,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA9IAAh5IA8AAIAAALIgpAAIAAAsIAkAAIAAAJIgkAAIAAAuIAXAAIAOAAIAMgBIABAAIgHAMg");
	this.shape_2.setTransform(157.8,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgA9IAAhuIg/AAIAABuIgTAAIAAh5IBlAAIAAB5g");
	this.shape_3.setTransform(144.9,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA7QgJgEgGgGIgDgSIACAAQAIAKAJAFQAJAGALAAQAGAAAGgDQAGgDADgGQAEgFAAgJQAAgNgJgGQgIgHgNAAIgHAAIACgKIAEAAQAMAAAGgGQAGgGAAgKQAAgJgGgGQgGgFgIAAQgHAAgHADQgHADgEAGIgDAAIACgPQADgCAHgDQAHgCALAAQAJAAAIADQAJADAFAHQAFAHAAAKQAAAKgEAGQgFAHgHADIAAABQAHACAFADQAFAEAEAHQADAHAAAJQAAAMgHAIQgGAIgKAEQgKAEgKAAQgMAAgKgEg");
	this.shape_4.setTransform(132.1,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA9IAAh5IA7AAIAAALIgoAAIAAAsIAkAAIAAAJIgkAAIAAAuIAWAAIAOAAIALgBIABAAIgFAMg");
	this.shape_5.setTransform(122.5,41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA9IAAh5IBCAAIAAALIgvAAIAAAiIAKAAQAMAAALAEQALAEAHAIQAHAIAAAOQAAAOgHAIQgGAJgLAEQgLADgMAAgAgTAzIAHAAQAOAAAIgGQAJgHAAgPQAAgQgJgGQgIgGgOAAIgHAAg");
	this.shape_6.setTransform(111.6,41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBOIAAh6IATAAIAAB6gAAHg7IAAgRIARAAIAAARgAgXg7IAAgRIARAAIAAARg");
	this.shape_7.setTransform(96.8,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWA8QgMgEgJgIQgKgHgFgMQgGgMAAgRQAAgPAGgMQAFgMAJgIQAKgIALgDQALgEAMAAQAMAAALADQAMAEAJAIQAKAHAFANQAGALAAAQQAAAQgGAMQgFAMgJAIQgKAIgLADQgLAEgMAAQgLAAgMgDgAgXgtQgJAGgGAMQgFAMgBAPQABAPAFAMQAGAMAKAHQAKAGANAAQANAAAKgGQAJgHAGgLQAGgMAAgQQAAgOgGgMQgGgMgKgHQgKgGgNgBQgNABgKAGg");
	this.shape_8.setTransform(85.7,41.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgA9IAAg6Ig/AAIAAA6IgTAAIAAh5IATAAIAAA0IA/AAIAAg0IATAAIAAB5g");
	this.shape_9.setTransform(70.4,41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnA9IAAh5IAhAAQAKAAAIADQAJADAGAGQAEAGAAAKQAAALgGAGQgGAHgNADIAAABQAJABAHADQAIADAFAGQAEAGABAKQgBANgGAIQgHAIgKAEQgKADgLAAgAgUAyIAMAAQAOABAHgHQAIgGAAgNQAAgIgEgFQgFgGgHgCQgHgDgJAAIgJAAgAgUgJIAJAAQALAAAGgFQAHgGAAgKQAAgKgFgFQgHgFgMAAIgJAAg");
	this.shape_10.setTransform(57.8,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAhA9IAAheIhJBeIgLAAIAAh5IATAAIAABcIBIhcIAMAAIAAB5g");
	this.shape_11.setTransform(44.3,41.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA9IAAhuIgiAAIAAgLIBVAAIAAALIgiAAIAABug");
	this.shape_12.setTransform(31.9,41.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYA9IgXgbIgegmIAAgBIAbgbIAZgcIASAAIgzAzIAXAeIAWAYIAPAPIAAABgAgxA9IAAh5IATAAIAAB5g");
	this.shape_13.setTransform(21.7,41.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnA9IgTgtIgtAAIgUAtIgOAAIA2h3IANgCIA0B5gAARAFIgSgsIgBAAIgTAsIAmAAg");
	this.shape_14.setTransform(8.1,41.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAsBSIAAh/IhiB/IgOAAIAAiiIAZAAIAAB6IBfh6IARAAIAACig");
	this.shape_15.setTransform(148.1,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABKBSIgNiBIgBAAIg8B3IgJAAIg8h3IgBAAIgMCBIgRAAIASiiIAXAAIA6B1IAAAAIA7h1IAXAAIASCig");
	this.shape_16.setTransform(126.5,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtBSIAAiiIBPAAIAAANIg2AAIAAA8IAxAAIAAAMIgxAAIAAA+IAeAAIAUgBQAIAAAGgBIACAAIgIARg");
	this.shape_17.setTransform(109.1,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBSIAAiVIgsAAIAAgNIBxAAIAAANIgsAAIAACVg");
	this.shape_18.setTransform(95.3,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeBLQgUgJgMgTQgMgSAAgcQAAgVAHgPQAIgRANgKQANgLAQgFQARgGARAAQAPABANADQAOADAJAHIACAUIgDAAQgJgIgMgGQgNgEgPAAQgSgBgOAJQgPAHgJAQQgIAPgBAXQABAWAJAQQAJAOAOAIQAOAHASAAQASAAAOgFQAOgFAJgIIACAAIgGAWQgJAFgOAEQgOADgQAAQgaAAgUgJg");
	this.shape_19.setTransform(79.9,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAsBSIAAh/IhiB/IgOAAIAAiiIAZAAIAAB6IBfh6IARAAIAACig");
	this.shape_20.setTransform(61,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeBLQgUgJgMgTQgMgSAAgcQAAgVAHgPQAIgRANgKQANgLAQgFQARgGARAAQAPABANADQAOADAJAHIACAUIgDAAQgJgIgMgGQgNgEgPAAQgSgBgOAJQgPAHgJAQQgIAPgBAXQABAWAJAQQAJAOAOAIQAOAHASAAQASAAAOgFQAOgFAJgIIACAAIgGAWQgJAFgOAEQgOADgQAAQgaAAgUgJg");
	this.shape_21.setTransform(42.5,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.9,54.5);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAcQgHgEgFgGQgFgIAAgKQAAgKAFgHQAFgHAHgEQAHgDAHAAQAHAAAIADQAHAEAFAHQAFAHAAAKQAAAKgFAIQgFAGgHAEQgIADgHAAQgHAAgHgDgAgJgQQgFAGAAAKQAAAKAFAGQADAHAGgBQAHABADgHQAEgGAAgKQAAgKgEgGQgDgGgHAAQgGAAgDAGg");
	this.shape.setTransform(103.8,253.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA4QgLgIgGgOQgGgOgBgTQAAgTAHgOQAGgPALgHQALgIAOgBQAPABALAIQALAHAGAPQAGAOAAATQAAATgGAOQgGAOgLAIQgMAIgOAAQgOAAgLgIgAgMgqQgFAGgDALQgDALAAAPQAAAXAHAMQAFANALAAQALAAAGgNQAGgMAAgXQAAgPgDgLQgDgLgFgGQgEgGgIAAQgGAAgGAGg");
	this.shape_1.setTransform(92.9,257.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVA7QgKgFgHgLQgGgLAAgQQAAgQAGgOQAFgOAKgKQAJgKANgHQALgGAOgCIAJAKQgNACgLAHQgJAHgHAJQgHAKgCALIAAAAIAKgFQAGgCAGAAQAKAAAJAEQAIAEAGAHQAGAJAAANQAAAMgGAJQgGAJgJAFQgKAGgNAAQgMAAgKgFgAgIABQgFADgDAGQgDAGAAAIQAAAIADAGQADAGAFADQAEADAFAAQAJAAAFgHQAFgHAAgMQAAgMgFgHQgFgGgIAAQgFAAgFACg");
	this.shape_2.setTransform(80.6,257.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA9QgIgDgHgEIgDgSIADAAQAGAFAIADQAIADAJAAQAHAAAFgCQAGgDADgFQADgFABgHQAAgMgJgFQgHgGgMAAIgHAAIABgNIACAAQAPAAAHgFQAGgFAAgJQAAgIgFgFQgFgFgIAAIgNABQgGACgFAEIgCAAIABgPQAHgDAHgCQAHgCAIAAQAJAAAJAEQAJADAFAHQAFAHAAAKQAAAKgDAGQgFAHgIAEIAAABQAJADAGAGQAGAIAAANQAAAMgHAJQgHAIgKAEQgKAFgMAAQgKAAgJgDg");
	this.shape_3.setTransform(68,257.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBKIANgfIgzh0IAbAAIAkBVIAkhVIASAAIg+CTg");
	this.shape_4.setTransform(49.8,258.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA1BNQgBgKgCgHIgFgLIgCgEIhVAAIgCAEIgEALQgDAHgCAKIgLAAIAAgtIANAAIArhqIASgCIAqBsIANAAIAAAtgAAZAgIgbhUIgBAAIggBUIA8AAg");
	this.shape_5.setTransform(36.2,258.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaA9IAAgvIgHAAIgDAAIgLARIgLAQIgLAOIggAAIAAgBIAPgPIAQgSIAOgRQgLgFgHgHQgGgIAAgNQAAgMAGgJQAGgIALgEQAKgEAOAAIAfAAIAAB5gAADgpQgGAGAAAMQAAAMAGAHQAHAGANAAIADAAIAAgyIgDAAQgNAAgHAHg");
	this.shape_6.setTransform(22,257.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgA9IgihhIgBAAIgmBhIgRAAIAyh3IATgCIAwB5g");
	this.shape_7.setTransform(10.5,257.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfA9IAAh5IA/AAIAAAOIgnAAIAABrg");
	this.shape_8.setTransform(0,257.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWA8QgMgEgKgIQgIgIgGgMQgFgMgBgQQABgPAFgNQAGgLAIgIQAKgIALgEQALgDAMgBQAMABALADQALAEAKAIQAJAHAGAMQAFAMABAQQgBAQgFAMQgGAMgJAHQgJAIgMAFQgLADgMAAQgKAAgMgDgAgUgrQgIAGgEAMQgFALgBAOQABAOAFALQAEALAIAHQAKAHAKAAQAMAAAIgHQAIgGAFgMQAEgLABgOQgBgNgEgMQgFgLgIgHQgJgHgLABQgLgBgJAHg");
	this.shape_9.setTransform(-13.1,257.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiA9IgRgqIgqAAIgSAqIgRAAIA0h3IATgCIAyB5gAANAGIgPgqIgBAAIgRAqIAhAAg");
	this.shape_10.setTransform(-33.2,257.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoA9IAAh5IAlAAQAMAAAKADQAKAEAGAIQAGAIAAAOQAAAMgHAIQgFAHgLAEQgKAEgLAAIgNAAIAAAxgAgQAAIAIAAQALAAAGgFQAHgGAAgNQAAgNgHgFQgGgGgLAAIgIAAg");
	this.shape_11.setTransform(-45.2,257.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA9IAAh5IA9AAIAAANIglAAIAAAoIAhAAIAAAMIghAAIAAArIASAAIAMAAIAIgBIAHgBIACAAIgIAPg");
	this.shape_12.setTransform(-55.7,257.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAzA9IgJhdIgBAAIgpBWIgIAAIgrhVIAAAAIgIBcIgQAAIANh5IAYAAIAmBQIABAAIAmhQIAYAAIANB5g");
	this.shape_13.setTransform(-70.3,257.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiA9IgRgqIgqAAIgSAqIgRAAIA0h3IATgCIAyB5gAANAGIgPgqIgBAAIgRAqIAhAAg");
	this.shape_14.setTransform(-85.9,257.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATA9IgTgcIgagkIAAgBIAagcIAYgcIAUAAIgvAyIAWAfIAUAYIANAPIAAABgAgzA9IAAh5IAYAAIAAB5g");
	this.shape_15.setTransform(-97.9,257.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.8,244,217.9,25.6);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAaIADgTIADgSIABgOIAWAAIgCALIgFAOIgFANIgFANg");
	this.shape.setTransform(200.3,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA7QgJgEgGgFIgDgVIACAAQAJAKAIAFQAIAFAJAAQAFAAAFgDQAGgCADgGQADgFAAgJQAAgMgHgGQgHgGgKAAIgNAAIABgKIAKAAQAHAAAEgDQAEgDACgFQACgEAAgGQAAgJgGgFQgEgFgIAAQgFAAgGACQgFADgGAFIgCAAIABgQIAHgDIAKgCIAKgBQAKAAAJADQAIADAGAHQAFAGAAALQAAAKgEAGQgFAHgHADIAAABQAHACAFADQAGAEADAHQADAHAAAJQAAAMgHAIQgGAIgLAEQgKAEgLAAQgLAAgJgEg");
	this.shape_1.setTransform(191.4,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBPIAAh6IAYAAIAAB6gAAHg5IAAgVIAVAAIAAAVgAgag5IAAgVIAUAAIAAAVg");
	this.shape_2.setTransform(183,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBKIANgfIgzh0IAbAAIAkBVIAkhVIASAAIg9CTg");
	this.shape_3.setTransform(173.2,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA9IAAh5IAlAAQAMAAAKADQAKAEAGAIQAGAIAAAOQgBAMgFAIQgHAHgKAEQgKAEgLAAIgNAAIAAAxgAgQAAIAIAAQALAAAGgFQAHgGAAgNQAAgNgHgFQgGgGgLAAIgIAAg");
	this.shape_4.setTransform(161.2,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATA9IgTgcIgZgkIAAgBIAZgcIAXgcIAVAAIgvAyIAXAfIATAYIANAPIAAABgAgzA9IAAh5IAZAAIAAB5g");
	this.shape_5.setTransform(149.5,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBSIAAhcIhBBcIgQAAIAAh6IAYAAIAABVIA7hVIAWAAIAAB6gAgQg3IgLgFIgEgCIAEgTIACAAIACADIAEAFQADADAFACQAFACAGAAQAHAAAFgCIAIgFIAEgFIACgDIACAAIAEATIgEACIgLAFQgHADgKAAQgJAAgHgDg");
	this.shape_6.setTransform(129.4,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA9IAAhcIhBBcIgQAAIAAh5IAYAAIAABUIA7hUIAWAAIAAB5g");
	this.shape_7.setTransform(114.7,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbA9IAAg5Ig2AAIAAA5IgYAAIAAh5IAYAAIAAAzIA2AAIAAgzIAZAAIAAB5g");
	this.shape_8.setTransform(100.2,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA9IAAh5IAkAAQALAAAJADQAIACAGAHQAFAGABAKQgBALgGAGQgGAHgMADIAAABQAIABAIADQAHADAEAGQAEAGABAJQAAAOgHAIQgGAIgLAEQgKADgKAAgAgRAwIAKAAQAMAAAGgGQAHgGgBgLQAAgMgHgFQgIgGgKAAIgJAAgAgRgJIAJAAQAJAAAFgFQAGgGAAgJQAAgJgFgFQgGgEgJAAIgJAAg");
	this.shape_9.setTransform(87.4,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdA9IAAhcIhBBcIgQAAIAAh5IAYAAIAABUIA7hUIAWAAIAAB5g");
	this.shape_10.setTransform(73.8,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLA9IAAhsIgfAAIAAgNIBVAAIAAANIgfAAIAABsg");
	this.shape_11.setTransform(61.5,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbA9IAAhsIg2AAIAABsIgYAAIAAh5IBnAAIAAB5g");
	this.shape_12.setTransform(49.2,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiA9IgRgqIgqAAIgSAqIgQAAIAzh3IATgCIAxB5gAANAGIgPgqIgBAAIgRAqIAhAAg");
	this.shape_13.setTransform(35.4,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA1BOQgBgLgCgHIgFgLIgCgEIhVAAIgCAEIgEALQgDAHgCALIgLAAIAAguIANAAIArhqIASgCIAqBsIANAAIAAAugAAZAgIgbhUIgBAAIggBUIA8AAg");
	this.shape_14.setTransform(21.8,14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhA9IgQgqIgqAAIgRAqIgRAAIA0h3IASgCIAxB5gAANAGIgPgqIgBAAIgRAqIAhAAg");
	this.shape_15.setTransform(8.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.3,25.7);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApA4QgBgJgCgFIgEgJIgCgCIg/AAIgCACIgEAJIgDAOIgIAAIAAgiIALAAIAfhLIAMgCIAfBNIAMAAIAAAigAASAWIgUg4IgBAAIgVA4IAqAAg");
	this.shape.setTransform(230.9,45.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA/IAAhWIARAAIAABWgAgIgrIAAgSIARAAIAAASg");
	this.shape_1.setTransform(222.7,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghArIAAhVIAcAAQAJAAAIADQAHADAEAFQAEAEABAIQgBAGgEAEQgEAFgGACIAAABQAJABAGAFQAGAFAAAIQAAAMgKAGQgJAHgPAAgAgPAiIAOAAQAGAAAEgCQAEgCACgEIABgIQAAgEgBgDQgCgDgEgDQgEgCgGAAIgOAAgAgPgFIAJAAQAGAAADgDQAEgCABgCQACgDAAgEQAAgEgCgDQgBgDgEgBQgDgCgGAAIgJAAg");
	this.shape_2.setTransform(215.2,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUArIAAg+IgtA+IgMAAIAAhVIASAAIAAA7IArg7IAOAAIAABVg");
	this.shape_3.setTransform(204.2,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBAIAAh9IARAAIAAARIABAAQADgIAIgFQAHgGAKAAQAMAAAHAGQAIAFAEAKQAEAKAAANQAAANgEAKQgFAKgJAGQgJAGgMAAQgHAAgGgEQgGgDgFgGIgBAAIAAAzgAgKgvQgGAFgFAIQgDAJAAALIAAABQAAAKADAFQAEAHAFADQAGADAGAAQAKAAAHgJQAFgIAAgRQABgQgGgJQgFgIgKgBQgHABgFAFg");
	this.shape_4.setTransform(192.9,45.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATArIAAhLIglAAIAABLIgSAAIAAhVIBJAAIAABVg");
	this.shape_5.setTransform(181.3,44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA/IAAg+IgtA+IgMAAIAAhVIASAAIAAA7IArg7IAOAAIAABVgAgOgqIgJgEIgDgDIACgNIACAAIABACIAEAEQACADAFACQAEACAGAAQAHAAAEgCQAFgCACgDIAEgEIABgCIACAAIADANIgEADIgJAEQgGACgJABQgIgBgGgCg");
	this.shape_6.setTransform(164.3,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUArIAAg+IgtA+IgMAAIAAhVIASAAIAAA7IArg7IAOAAIAABVg");
	this.shape_7.setTransform(152.8,44);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATArIAAgoIgmAAIAAAoIgRAAIAAhVIARAAIAAAkIAmAAIAAgkIASAAIAABVg");
	this.shape_8.setTransform(141.6,44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghArIAAhVIAcAAQAJAAAIADQAHADAEAFQAEAEABAIQgBAGgEAEQgEAFgGACIAAABQAJABAGAFQAGAFAAAIQAAAMgKAGQgJAHgPAAgAgPAiIAOAAQAGAAAEgCQAEgCACgEIABgIQAAgEgBgDQgCgDgEgDQgEgCgGAAIgOAAgAgPgFIAJAAQAGAAADgDQAEgCABgCQACgDAAgEQAAgEgCgDQgBgDgEgBQgDgCgGAAIgJAAg");
	this.shape_9.setTransform(131.3,44);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAqQgHgDgGgGQgGgFgEgJQgEgIAAgLQAAgLAEgJQAEgIAGgFQAGgGAHgCQAJgDAGAAQAIAAAIADQAHACAGAGQAGAFAEAIQAEAJAAALQAAALgEAIQgEAJgGAFQgGAGgHADQgIADgIAAQgGAAgJgDgAgRgZQgHAIAAARQAAAQAHAKQAHAJAKAAQALAAAGgJQAIgKAAgQQAAgRgIgIQgGgJgLAAQgKAAgHAJg");
	this.shape_10.setTransform(120.2,44);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUArIAAhLIgnAAIAABLIgRAAIAAhVIBJAAIAABVg");
	this.shape_11.setTransform(108.8,44);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_12.setTransform(94.4,47.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAoQgKgFgGgKQgGgKAAgPQAAgNAGgKQAGgKAKgFQAKgGAMAAQAIAAAFACQAGABAEADIACALIgCAAQgFgEgFgCQgFgCgGAAQgMABgHAJQgIAJAAAQQAAAPAIAKQAIAJAMABQAHAAAFgDQAGgCAEgEIACAAIgDALQgEADgGACQgGADgJAAQgLAAgKgFg");
	this.shape_13.setTransform(86.7,44);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_14.setTransform(78.3,47.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPArIgLgNIgLgPIgLgQIAAgBIASgTIAQgVIAQAAIghAlIAJAMIALAPIALAMIAIAIIAAABgAglArIAAhVIARAAIAABVg");
	this.shape_15.setTransform(70.7,44);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXA4QgLgIgFgOQgHgOAAgTQAAgTAHgOQAFgOALgIQAKgIANAAQAOAAAKAIQALAIAGAOQAFAOAAATQAAATgFAOQgGAOgLAIQgKAHgOAAQgMAAgLgHgAgNgtQgHAHgCAMQgEAMAAAPQABAZAGANQAHANAMABQANgBAGgNQAHgNAAgZQAAgPgCgMQgEgMgFgHQgHgHgIAAQgIAAgFAHg");
	this.shape_16.setTransform(53.4,42.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWA8QgJgDgGgEIgCgQIACAAQAHAGAHAEQAIADAJAAQAGAAAHgDQAGgDAFgGQAEgGAAgKQAAgMgGgHQgHgHgMAAIgMACIgJADIgJgBIAIg9IA7AAIgDAQIgrAAIgFAhIAIgDIAJAAQAMAAAJAEQAKAFAEAIQAFAIAAAMQAAAOgGAJQgHAJgKAEQgKAEgMAAQgJAAgIgCg");
	this.shape_17.setTransform(41.5,42.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAEA9IAAhpIgaAMIABgMIAigQIAKAAIAAB5g");
	this.shape_18.setTransform(28.9,42.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdBLQgVgJgLgTQgNgSAAgdQAAgTAIgRQAHgPAOgLQANgLAQgFQAQgGASABQAKAAALABIASAFQAIACAFAEIACAVIgDAAQgJgJgNgFQgMgFgQAAQgTAAgOAJQgOAIgJAPQgJAQAAAVQAAAYAJAPQAJAPAOAHQAOAIASAAQAKAAAJgCQAHgCAGgCIAAg+IAZAAIAABEQgHAEgJAEQgJADgLADQgMACgLAAQgZAAgUgKg");
	this.shape_19.setTransform(245.9,17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAHIABgOIBEAAIgBAOg");
	this.shape_20.setTransform(231.1,18.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBRIhDiiIAcAAIA1CGIABAAIA0iGIATAAIhDCig");
	this.shape_21.setTransform(218.5,17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLBRIAAiiIAYAAIAACig");
	this.shape_22.setTransform(206.3,17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMBRIAAiTIgsAAIAAgPIBxAAIAAAPIgsAAIAACTg");
	this.shape_23.setTransform(195.8,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeBLQgUgJgMgTQgMgSAAgdQAAgTAHgRQAIgPANgLQANgLAQgFQARgGARABQAPAAANADQAOADAJAGIACAWIgDAAQgJgJgMgGQgNgEgPAAQgSAAgOAIQgPAHgJAQQgIAQgBAVQABAYAJAPQAJAOAOAIQAOAHASAAQASAAAOgFQAOgFAJgIIACAAIgGAVQgJAGgOADQgOAFgQAAQgaAAgUgKg");
	this.shape_24.setTransform(180.4,17);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzBSIgZg9Ig8AAIgaA9IgSAAIBIigIARgDIBECjgAAWAHIgYg7IgBAAIgaA7IAzAAg");
	this.shape_25.setTransform(162.9,17);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKBRIAAhLIg6hXIAfAAIAsBHIABAAIAqhHIATAAIg2BWIAABMg");
	this.shape_26.setTransform(148.3,17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAfBRIgegkIgogyIAAgDIAkgkIAiglIAXAAIhEBFIAgAnIAcAhQANANAIAHIAAABgAhCBRIAAiiIAZAAIAACig");
	this.shape_27.setTransform(134.5,17);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbBOQgMgFgIgIIgEgYIAEAAQAKANAMAHQANAIAMAAQALAAAIgHQAIgGAAgNQAAgIgEgGQgEgGgHgHIgSgMQgLgHgIgHQgIgGgDgIQgEgIgBgKQABgLAEgIQAFgIAGgFQAIgFAIgDQAJgBAHAAQALAAAIABQAJADAEAEIADASIgDAAQgHgGgHgEQgIgDgJAAQgGAAgFACQgGACgFAGQgDAEgBAIQAAAGADAFQAEAGAFAFIAPALQAOAJAKAHQAIAIAFAIQAGAKAAANQgBAPgHAKQgIAJgLAFQgMAGgNAAQgPgBgMgGg");
	this.shape_28.setTransform(118.4,17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAqBRIAAhOIhUAAIAABOIgZAAIAAiiIAZAAIAABGIBUAAIAAhGIAaAAIAACig");
	this.shape_29.setTransform(95.1,17);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZBiIAUgwIhEiTIAcAAIAzB0IAwh0IAUAAIhPDDg");
	this.shape_30.setTransform(77.3,18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgpBRIAAiiIBTAAIAAAPIg6AAIAACTg");
	this.shape_31.setTransform(63.8,17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAsBRIAAh+IhiB+IgOAAIAAiiIAZAAIAAB7IBfh7IARAAIAACig");
	this.shape_32.setTransform(47.2,17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag0BRIAAiiIArAAQAOAAAMAEQAMAEAGAIQAHAIAAAOQAAAOgIAIQgJAKgRADIAAACQALABALAEQAKAFAGAIQAHAIAAANQgBASgIAKQgJAMgOAEQgOAFgOgBgAgbBDIAQAAQATAAAKgIQAKgIgBgSQAAgKgFgIQgGgHgJgDQgJgEgNAAIgMAAgAgbgMIAMAAQAPAAAJgHQAJgIAAgNQAAgPgJgFQgIgHgQABIgMAAg");
	this.shape_33.setTransform(30.6,17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABIBmQgBgOgEgIQgDgJgCgFIgDgEIh1AAIgDAEIgGAOQgDAIgBAOIgMAAIAAg4IAPAAIA+iQIARgDIA6CTIAPAAIAAA4gAAqAuIgrh2IgBAAIgxB2IBdAAg");
	this.shape_34.setTransform(13.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,261.2,54.5);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghArIAAhVIAcAAQAJAAAIADQAHADAEAEQAEAFABAIQgBAGgEAFQgEAEgGACIAAABQAJABAGAFQAGAFAAAJQAAALgKAHQgJAGgPAAgAgPAiIAOAAQAGAAAEgDQAEgCACgDIABgHQAAgEgBgEQgCgDgEgDQgEgCgGAAIgOAAgAgPgFIAJAAQAGAAADgCQAEgCABgEQACgDAAgDQAAgDgCgDQgBgEgEgCQgDgBgGAAIgJAAg");
	this.shape.setTransform(157,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA/IAAhWIARAAIAABWgAgIgrIAAgTIARAAIAAATg");
	this.shape_1.setTransform(148.9,41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOArIgKgNIgKgQIgMgPIAAgBIASgUIAPgUIARAAIgiAlIAJAMIANAOIALANIAIAIIAAABgAgmArIAAhVIASAAIAABVg");
	this.shape_2.setTransform(141.7,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA/IAAhWIARAAIAABWgAgIgrIAAgTIARAAIAAATg");
	this.shape_3.setTransform(133,41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlArIgHg8IAAAAIgcA2IgIAAIgcg2IgBAAIgHA8IgLAAIALhVIANAAIAdA6IABAAIAeg6IAMAAIALBVg");
	this.shape_4.setTransform(123.5,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXApQgGgDgDgFQgDgFAAgHQABgKAGgGQAGgFAMgCIAQgFIAJgDQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIAAgCQAAgLgFgEQgEgFgJAAQgGAAgHADQgHADgGAFIgCAAIACgMQAFgEAIgDQAHgCAHAAQASAAAIAIQAIAIAAAOIAAApIAAAIIABAIIgPAAIgDgNQgFAHgHAEQgGAEgIAAQgJAAgGgEgAgDADQgIADgDAEQgDAEAAAFQAAAHADAEQAEAEAHAAQAHAAAGgFQAGgFACgIIAAgSQgPACgGADg");
	this.shape_5.setTransform(111.4,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUArIAAgoIgnAAIAAAoIgRAAIAAhVIARAAIAAAkIAnAAIAAgkIARAAIAABVg");
	this.shape_6.setTransform(100.8,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUArIAAg+IgtA+IgMAAIAAhVIASAAIAAA7IArg7IAOAAIAABVg");
	this.shape_7.setTransform(89.4,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AApA4QgBgIgCgGIgEgIIgCgDIg/AAIgCADIgEAIIgDAOIgIAAIAAgiIALAAIAfhLIAMgCIAfBNIAMAAIAAAigAASAWIgUg5IgBAAIgVA5IAqAAg");
	this.shape_8.setTransform(78.3,45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA+IAAgGIAVgUQATgUAJgPQALgPAAgNQAAgGgCgFQgCgFgFgDQgFgDgFgBQgIAAgHAEQgHADgGAGIgCAAIABgPQAHgEAHgDQAHgCAKAAQALAAAJAEQAIAEAFAIQADAHAAAKQABAKgFAJQgFAJgJAKQgKALgNAOIgMALIAAABIAfAAIASAAIAMgBIACAAIgGAQg");
	this.shape_9.setTransform(61.6,41.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEA9IAAhpIgaAMIABgMIAigQIAKAAIAAB5g");
	this.shape_10.setTransform(48.7,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtBSIAAiiIBPAAIAAANIg2AAIAAA8IAxAAIAAAMIgxAAIAAA+IAeAAIAUgBQAIAAAGgBIACAAIgIARg");
	this.shape_11.setTransform(198.1,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBOQgNgFgHgIIgDgYIACAAQALANAMAHQAMAIANAAQAMAAAHgGQAIgIAAgMQAAgIgEgGQgEgHgHgGIgRgMQgMgHgIgHQgHgHgFgHQgEgIAAgKQABgLAEgIQAEgIAIgFQAHgFAJgDQAHgCAIAAQAMAAAIACQAIADAEADIACATIgCAAQgGgGgJgEQgHgDgJAAQgGAAgGACQgFADgFAFQgDAFAAAHQAAAHADAEQADAGAFAFIAPALQAOAJAJAHQAJAIAGAJQAEAJAAANQAAAPgIAKQgGAKgNAEQgMAGgNgBQgOAAgMgGg");
	this.shape_12.setTransform(184.2,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeBPQgQgEgMgKQgMgLgIgQQgHgQgBgWQABgUAHgQQAIgQALgKQANgLAPgFQAPgGAQAAQAQAAAPAGQAQAFAMAJQAMALAIAQQAHAQAAAVQAAAVgHAQQgHAQgNALQgMAKgPAFQgPAFgPAAQgQABgQgGgAgeg8QgNAIgHAQQgIAQAAAUQAAAUAIAQQAHAQANAIQAOAKASAAQAQAAANgJQANgJAIgPQAHgQAAgVQAAgTgHgQQgIgQgOgJQgNgJgRAAQgRAAgNAJg");
	this.shape_13.setTransform(167.1,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BSIAAiiIAqAAQAPAAALADQAMAEAHAIQAHAIAAAOQAAAOgIAIQgKAJgQAFIAAABQAMABAKAEQAKAFAGAIQAHAIAAANQgBASgIAKQgJALgNAFQgOAFgPAAgAgcBDIARAAQATAAAJgIQAKgIAAgSQABgKgGgIQgFgHgKgEQgJgDgMAAIgOAAgAgcgMIAOAAQAOAAAIgHQAKgIgBgNQABgPgJgFQgHgHgQAAIgOAAg");
	this.shape_14.setTransform(149.7,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA0BSIgZg9Ig9AAIgaA9IgTAAIBIigIARgDIBGCjgAAVAHIgWg7IgCAAIgZA7IAxAAg");
	this.shape_15.setTransform(126,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAfBSIgeglIgogyIAAgCIAkgkIAiglIAXAAIhEBDIAgApIAcAgQANAOAIAGIAAACgAhCBSIAAiiIAZAAIAACig");
	this.shape_16.setTransform(110.8,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsBSIAAh/IhiB/IgOAAIAAiiIAZAAIAAB6IBfh6IARAAIAACig");
	this.shape_17.setTransform(91.8,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBSIAAiVIgsAAIAAgNIBxAAIAAANIgsAAIAACVg");
	this.shape_18.setTransform(75.6,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeBLQgUgJgMgTQgMgSAAgcQAAgVAHgPQAIgRANgKQANgLAQgFQARgGARAAQAPABANADQAOADAJAHIACAUIgDAAQgJgIgMgGQgNgEgPAAQgSgBgOAJQgPAHgJAQQgIAPgBAXQABAWAJAQQAJAOAOAIQAOAHASAAQASAAAOgFQAOgFAJgIIACAAIgGAWQgJAFgOAEQgOADgQAAQgaAAgUgJg");
	this.shape_19.setTransform(60.3,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZBiIAUgwIhEiTIAcAAIAzB0IAwh0IAUAAIhPDDg");
	this.shape_20.setTransform(42.8,18.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfBSIgeglIgogyIAAgCIAkgkIAiglIAXAAIhEBDIAgApIAcAgQANAOAIAGIAAACgAhCBSIAAiiIAZAAIAACig");
	this.shape_21.setTransform(27.9,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA0BSIgag9Ig8AAIgaA9IgTAAIBIigIARgDIBGCjgAAWAHIgXg7IgCAAIgZA7IAyAAg");
	this.shape_22.setTransform(10.1,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.4,54.5);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBSIAAiiIArAAQAPgBANAFQAOAEAIAKQAIAKAAASQAAARgJAKQgIAKgNAEQgOAFgQAAIgQAAIAABGgAgZAAIANAAQARAAAKgIQAJgHABgTQAAgTgKgHQgKgHgRAAIgNAAg");
	this.shape.setTransform(151.2,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBLQgUgJgMgTQgMgSAAgdQAAgTAHgRQAIgQANgKQANgLAQgGQARgEARAAQAPgBANAEQAOAEAJAFIACAWIgDAAQgJgJgMgGQgNgEgPgBQgRABgNAGQgOAIgJANQgJANgCAVIBXAAIAAANIhYAAQACAVAJAOQAJAOAPAHQANAGARAAQASAAAOgFQAOgFAJgIIACAAIgGAVQgJAGgOADQgOAEgQABQgaAAgUgKg");
	this.shape_1.setTransform(134.6,45.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAfIgHg9IAbAAIgHA9g");
	this.shape_2.setTransform(120.5,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBSIAAiiIArAAQAPgBANAFQAOAEAIAKQAIAKAAASQAAARgJAKQgIAKgNAEQgOAFgQAAIgQAAIAABGgAgZAAIANAAQARAAAKgIQAJgHABgTQAAgTgKgHQgKgHgRAAIgNAAg");
	this.shape_3.setTransform(108.9,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBRIAAiiIBPAAIAAAPIg2AAIAAA6IAxAAIAAAOIgxAAIAAA9IAeAAIAUAAQAIAAAGgCIACAAIgIAQg");
	this.shape_4.setTransform(95.4,45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBRIAAiTIgtAAIAAgPIBxAAIAAAPIgsAAIAACTg");
	this.shape_5.setTransform(81.6,45.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqBRIAAhOIhUAAIAABOIgZAAIAAiiIAZAAIAABGIBUAAIAAhGIAaAAIAACig");
	this.shape_6.setTransform(65.6,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMBRIAAiiIAYAAIAACig");
	this.shape_7.setTransform(52.1,45.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAsBsIAAh/IhiB/IgOAAIAAiiIAZAAIAAB7IBfh7IARAAIAACigAgUhMIgOgGIgFgEIAEgVIADAAIACAEIAGAGQAEAEAGADQAHADAHAAQAIAAAGgDQAGgDAEgEIAGgGIADgEIACAAIAFAVIgFAEIgOAGQgJADgMABQgLgBgJgDg");
	this.shape_8.setTransform(194.9,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsBSIAAh/IhiB/IgOAAIAAiiIAZAAIAAB6IBfh6IARAAIAACig");
	this.shape_9.setTransform(175.6,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBSIAAhPIhUAAIAABPIgZAAIAAiiIAZAAIAABFIBUAAIAAhFIAaAAIAACig");
	this.shape_10.setTransform(156.4,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAsBsIAAh/IhiB/IgOAAIAAiiIAZAAIAAB7IBfh7IARAAIAACigAgUhMIgOgGIgFgEIAEgVIADAAIACAEIAGAGQAEAEAGADQAHADAHAAQAIAAAGgDQAGgDAEgEIAGgGIADgEIACAAIAFAVIgFAEIgOAGQgJADgMABQgLgBgJgDg");
	this.shape_11.setTransform(137.2,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBSIAAiiIAYAAIAACig");
	this.shape_12.setTransform(123.6,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABABlQgCgNgEgIIgFgOIgDgEIh8AAIAAiiIAZAAIAACSIBSAAIAAiSIAZAAIAACSIARAAIAAA3g");
	this.shape_13.setTransform(110.8,18.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAzBSIgZg9Ig8AAIgaA9IgTAAIBIigIARgDIBFCjgAAWAHIgYg7IgBAAIgaA7IAzAAg");
	this.shape_14.setTransform(92.1,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0BSIAAiiIAqAAQAPAAALADQAMAEAHAIQAHAIAAAOQAAAOgIAIQgKAJgQAFIAAABQALABALAEQAKAFAGAIQAHAIAAANQgBASgIAKQgJALgNAFQgOAFgPAAgAgcBDIARAAQATAAAJgIQALgIgBgSQABgKgGgIQgFgHgKgEQgJgDgNAAIgNAAgAgcgMIANAAQAPAAAIgHQAKgIgBgNQABgPgJgFQgHgHgRAAIgNAAg");
	this.shape_15.setTransform(76.7,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeBPQgQgEgMgKQgMgLgIgQQgHgQAAgWQAAgUAHgQQAIgQAMgKQAMgLAPgFQAPgGAQAAQAQAAAPAGQAQAFAMAJQAMALAIAQQAHAQAAAVQAAAVgHAQQgHAQgNALQgMAKgPAFQgPAFgPAAQgQABgQgGgAgeg8QgNAIgHAQQgIAQAAAUQAAAUAIAQQAHAQANAIQAOAKASAAQAQAAANgJQANgJAIgPQAHgQAAgVQAAgTgHgQQgIgQgNgJQgOgJgRAAQgRAAgNAJg");
	this.shape_16.setTransform(58.2,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AArBSIAAhPIhVAAIAABPIgZAAIAAiiIAZAAIAABFIBVAAIAAhFIAZAAIAACig");
	this.shape_17.setTransform(38.2,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAqBSIAAhPIhUAAIAABPIgZAAIAAiiIAZAAIAABFIBUAAIAAhFIAaAAIAACig");
	this.shape_18.setTransform(19.2,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMBSIAAiiIAYAAIAACig");
	this.shape_19.setTransform(5.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.1,61.7);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBBGQgNgEgLgJQgKgJgHgNQgHgOAAgSIgXAAIAABFIgWAAIAAiPIAWAAIAAA+IAXAAQACgQAHgMQAHgMAKgIQAKgIAMgEQALgEAMAAQANAAANAEQANAFAKAJQALAJAGAOQAHAOAAASQAAATgHAOQgGANgKAJQgLAKgNAFQgMAEgNAAQgNAAgLgEgAgCg1QgLAIgGANQgGAOAAASQAAASAGANQAHAOALAIQAKAIAOAAQAOAAALgHQAKgIAHgNQAGgOAAgTQAAgRgGgOQgHgOgLgHQgLgIgPgBQgNABgKAHg");
	this.shape.setTransform(224.9,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBGQgOgEgLgKQgLgIgGgOQgHgOAAgUQAAgSAHgOQAGgOALgIQALgKANgFQANgEAOAAQAOAAANAEQAOAFALAJQALAJAGAOQAGAOABASQgBATgGAOQgGANgLAJQgLAKgNAFQgNAEgOAAQgNAAgOgEgAgag1QgMAIgGANQgHAOAAASQAAASAHANQAGAOAMAIQAMAIAPAAQAPAAALgHQAMgIAGgNQAHgOAAgTQAAgRgHgOQgGgOgMgHQgMgIgPgBQgPABgLAHg");
	this.shape_1.setTransform(203.7,56.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBIIAAhFIhKAAIAABFIgVAAIAAiPIAVAAIAAA+IBKAAIAAg+IAXAAIAACPg");
	this.shape_2.setTransform(186.1,56.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBIIAAiPIAVAAIAACPg");
	this.shape_3.setTransform(174.2,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3BZQgBgLgDgJIgFgLIgCgEIhtAAIAAiOIAWAAIAACBIBIAAIAAiBIAWAAIAACBIAPAAIAAAwg");
	this.shape_4.setTransform(162.9,58);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBBGQgNgEgLgJQgKgJgHgNQgHgOAAgSIgXAAIAABFIgWAAIAAiPIAWAAIAAA+IAXAAQACgQAHgMQAHgMAKgIQAKgIAMgEQALgEAMAAQANAAANAEQANAFAKAJQALAJAGAOQAHAOAAASQAAATgHAOQgGANgKAJQgLAKgNAFQgMAEgNAAQgNAAgLgEgAgCg1QgLAIgGANQgGAOAAASQAAASAGANQAHAOALAIQAKAIAOAAQAOAAALgHQAKgIAHgNQAGgOAAgTQAAgRgGgOQgHgOgLgHQgLgIgPgBQgNABgKAHg");
	this.shape_5.setTransform(136.3,56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBGQgOgEgLgKQgLgIgGgOQgHgOAAgUQAAgSAHgOQAGgOALgIQALgKANgFQANgEAOAAQAOAAANAEQAOAFALAJQALAJAGAOQAGAOABASQgBATgGAOQgGANgLAJQgLAKgNAFQgNAEgOAAQgNAAgOgEgAgag1QgMAIgGANQgHAOAAASQAAASAHANQAGAOAMAIQAMAIAPAAQAPAAALgHQAMgIAGgNQAHgOAAgTQAAgRgHgOQgGgOgMgHQgMgIgPgBQgPABgLAHg");
	this.shape_6.setTransform(115.2,56.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmBIIAAhFIhLAAIAABFIgVAAIAAiPIAVAAIAAA+IBLAAIAAg+IAWAAIAACPg");
	this.shape_7.setTransform(97.6,56.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrBIIAAiPIAWAAIAAA1IAJAAQAOAAANAFQANAFAIAJQAIAKAAAQQAAAQgHAKQgJAKgMAEQgNAEgOABgAgVA8IAGAAQAQAAAKgIQAKgHAAgSQAAgSgKgJQgKgGgQAAIgGAAg");
	this.shape_8.setTransform(83.1,56.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBIIgsh1IgBAAIgxB1IgPAAIA8iNIAPgCIA7CPg");
	this.shape_9.setTransform(69,56.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAtBIIgWg2Ig1AAIgWA2IgRAAIA/iNIAQgCIA8CPgAATAGIgUgzIgCAAIgVAzIArAAg");
	this.shape_10.setTransform(54.3,56.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBIIAAiPIAVAAIAACPg");
	this.shape_11.setTransform(43.3,56.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA3BZQgBgLgDgJIgFgLIgCgEIhtAAIAAiOIAWAAIAACBIBIAAIAAiBIAWAAIAACBIAPAAIAAAwg");
	this.shape_12.setTransform(32,58);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBIIAAiPIBFAAIAAANIgvAAIAAAzIAqAAIAAAMIgqAAIAAA1IAaAAIARAAIANgBIABAAIgHAPg");
	this.shape_13.setTransform(17.9,56.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmBIIAAiBIhLAAIAACBIgVAAIAAiPIB2AAIAACPg");
	this.shape_14.setTransform(3.1,56.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBCQgSgIgKgQQgLgRAAgZQAAgRAHgOQAGgOAMgJQALgJAOgFQAPgFAPAAQANAAAMADQAMAEAIAFIABASIgCAAQgIgHgLgFQgLgEgNgBQgQABgMAGQgNAHgIAOQgIAOAAASQAAAVAIANQAIANANAHQAMAGAPAAQARgBAMgEQAMgEAIgHIACAAIgFATQgIAEgNAEQgMADgOAAQgWAAgSgIg");
	this.shape_15.setTransform(-13.1,56.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAtBIIgWg2Ig1AAIgXA2IgPAAIA/iNIAOgCIA8CPgAATAGIgVgzIgBAAIgVAzIArAAg");
	this.shape_16.setTransform(-35.2,56.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbBFQgLgFgHgHIgDgVIADAAQAJAMAKAGQALAHAMAAQAIAAAGgEQAHgDAEgHQAFgHAAgKQgBgPgJgHQgKgIgPAAIgIAAIABgMIAFAAQAPgBAHgGQAGgIAAgKQAAgMgGgFQgHgHgJAAQgJAAgIAEQgIADgGAHIgCAAIACgRQAEgDAIgDQAIgDAMAAQALAAAJAEQAKAEAGAHQAGAJABAMQAAALgFAIQgFAHgJAEIAAABQAIACAGAEQAGAFAEAHQAEAJAAAKQAAAOgIAKQgHAJgMAGQgLAEgNAAQgOAAgLgFg");
	this.shape_17.setTransform(-49,56.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,41.3,295.2,29.3);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA9IAAgvIgHAAIgDAAIgLARIgLAQIgLAOIggAAIAAgBIAPgPIAQgSIAOgRQgLgFgHgHQgGgIAAgNQAAgMAGgJQAGgIALgEQAKgEAOAAIAfAAIAAB5gAADgpQgGAGAAAMQAAAMAGAHQAHAGANAAIADAAIAAgyIgDAAQgNAAgHAHg");
	this.shape.setTransform(202.7,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA9IAAg5Ig3AAIAAA5IgYAAIAAh5IAYAAIAAAzIA3AAIAAgzIAYAAIAAB5g");
	this.shape_1.setTransform(190.4,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA9IAAg5Ig2AAIAAA5IgYAAIAAh5IAYAAIAAAzIA2AAIAAgzIAZAAIAAB5g");
	this.shape_2.setTransform(175.9,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLA9IAAh5IAXAAIAAB5g");
	this.shape_3.setTransform(165.3,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgA+IgihiIgBAAIgmBiIgRAAIAyh4IATgDIAwB7g");
	this.shape_4.setTransform(155.7,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA7QgMgDgJgIQgKgHgFgMQgGgMAAgRQAAgQAGgMQAFgLAKgIQAJgIALgEQAMgDALAAQALAAAMADQAMAEAJAHQAJAIAFAMQAGAMABAQQgBAQgGAMQgEAMgKAIQgJAHgMAEQgLAFgLAAQgLAAgMgFgAgUgrQgIAHgEALQgFALgBAOQABAOAFALQAEALAIAHQAKAGALABQALAAAIgHQAIgHAFgLQAEgLABgOQgBgNgEgLQgFgMgIgHQgJgGgLgBQgLABgJAGg");
	this.shape_5.setTransform(141.4,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATA9IgTgcIgagkIAAgBIAagcIAYgcIAUAAIgvAyIAWAfIAUAYIANAPIAAABgAgzA9IAAh5IAYAAIAAB5g");
	this.shape_6.setTransform(128,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA7QgLgDgJgIQgKgHgFgMQgGgMABgRQgBgQAGgMQAFgLAKgIQAJgIALgEQAMgDALAAQAMAAALADQAMAEAJAHQAJAIAFAMQAGAMABAQQgBAQgGAMQgEAMgKAIQgJAHgMAEQgKAFgMAAQgMAAgMgFgAgTgrQgJAHgFALQgEALAAAOQAAAOAEALQAFALAJAHQAIAGAMABQALAAAIgHQAJgHAEgLQAEgLABgOQgBgNgEgLQgEgMgJgHQgJgGgLgBQgMABgHAGg");
	this.shape_7.setTransform(112.8,34.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbA9IAAhsIg2AAIAABsIgYAAIAAh5IBnAAIAAB5g");
	this.shape_8.setTransform(97.6,34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXA7QgLgDgKgIQgJgHgFgMQgGgMABgRQgBgQAGgMQAFgLAJgIQAKgIALgEQAMgDALAAQAMAAALADQAMAEAJAHQAJAIAFAMQAGAMAAAQQAAAQgGAMQgEAMgKAIQgJAHgLAEQgLAFgNAAQgLAAgMgFgAgTgrQgJAHgFALQgEALAAAOQAAAOAEALQAFALAJAHQAIAGALABQAMAAAIgHQAIgHAFgLQAEgLABgOQgBgNgEgLQgEgMgKgHQgIgGgLgBQgMABgHAGg");
	this.shape_9.setTransform(76.9,34.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA9IAAh5IA/AAIAAAOIgnAAIAABrg");
	this.shape_10.setTransform(64.8,34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA7QgMgDgKgIQgIgHgGgMQgFgMgBgRQABgQAFgMQAGgLAIgIQAKgIALgEQALgDAMAAQAMAAALADQALAEAKAHQAJAIAGAMQAFAMABAQQgBAQgFAMQgGAMgJAIQgJAHgMAEQgLAFgMAAQgKAAgMgFgAgUgrQgIAHgEALQgFALgBAOQABAOAFALQAEALAIAHQAKAGAKABQAMAAAIgHQAIgHAFgLQAEgLABgOQgBgNgEgLQgFgMgIgHQgJgGgLgBQgLABgJAGg");
	this.shape_11.setTransform(51.7,34.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA9IAAh5IAkAAQAKAAAJADQAKACAFAHQAFAGAAAKQAAALgGAGQgGAHgMADIAAABQAJABAGADQAIADAEAGQAFAGAAAJQAAAOgHAIQgGAIgLAEQgKADgLAAgAgSAwIAMAAQALAAAHgGQAFgGAAgLQABgMgIgFQgIgGgLAAIgJAAgAgSgJIAJAAQAJAAAGgFQAFgGABgJQAAgJgGgFQgEgEgLAAIgJAAg");
	this.shape_12.setTransform(38.2,34.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWA7QgMgDgKgIQgIgHgGgMQgFgMgBgRQABgQAFgMQAGgLAIgIQAKgIALgEQALgDAMAAQALAAAMADQALAEAKAHQAJAIAGAMQAFAMAAAQQAAAQgFAMQgGAMgJAIQgJAHgLAEQgMAFgMAAQgLAAgLgFgAgTgrQgJAHgFALQgEALAAAOQAAAOAEALQAFALAJAHQAJAGAKABQAMAAAIgHQAJgHAEgLQAFgLAAgOQAAgNgFgLQgEgMgKgHQgIgGgLgBQgMABgHAGg");
	this.shape_13.setTransform(24,34.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAbA9IAAg5Ig2AAIAAA5IgYAAIAAh5IAYAAIAAAzIA2AAIAAgzIAZAAIAAB5g");
	this.shape_14.setTransform(8.8,34.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoA9IAAh5IAlAAQAMAAAKADQAKAEAGAIQAGAIAAAOQAAAMgHAIQgFAHgLAEQgKAEgLAAIgNAAIAAAxgAgQAAIAIAAQALAAAGgFQAHgGAAgNQAAgNgHgFQgGgGgLAAIgIAAg");
	this.shape_15.setTransform(151.9,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjA9IAAh5IA9AAIAAANIglAAIAAAoIAhAAIAAAMIghAAIAAArIASAAIAMAAIAIgBIAHgBIACAAIgIAPg");
	this.shape_16.setTransform(141.4,13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpA9IAAh5IAkAAQAKAAAKADQAIACAGAHQAFAGAAAKQAAALgGAGQgHAHgLADIAAABQAIABAIADQAHADAEAGQAEAGABAJQgBAOgGAIQgGAIgLAEQgKADgKAAgAgSAwIALAAQAMAAAGgGQAHgGgBgLQAAgMgHgFQgIgGgLAAIgJAAgAgSgJIAJAAQAKAAAFgFQAGgGAAgJQAAgJgFgFQgFgEgLAAIgJAAg");
	this.shape_17.setTransform(130.2,13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXA8QgLgEgKgIQgJgIgFgMQgGgMABgQQgBgPAGgMQAFgMAJgIQAKgIALgEQAMgDALgBQAMABALADQAMAEAJAIQAJAHAFAMQAGAMAAAQQAAAQgGAMQgEAMgKAHQgJAIgLAFQgLADgNAAQgLAAgMgDgAgTgrQgJAGgFAMQgEALAAAOQAAANAEAMQAFALAJAHQAIAHALAAQAMAAAIgHQAIgGAFgMQAEgLABgOQgBgNgEgMQgEgLgKgHQgIgHgLAAQgMAAgHAHg");
	this.shape_18.setTransform(116.1,13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNA8QgNgEgJgIQgKgIgFgMQgGgMAAgQQAAgPAGgMQAGgMAKgIQAKgIAMgEQAMgEAOAAIANACQAHAAAGADQAGACAFADIABAQIgDAAQgHgHgIgCQgIgDgJAAQgOAAgJAGQgLAGgGAMQgGALAAAPQAAAPAGALQAGAKAKAGQAKAFANAAQAMAAAKgDQAKgDAGgGIADAAIgFASQgIAEgKADQgKADgLAAQgNAAgNgEg");
	this.shape_19.setTransform(101.4,13.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWA8QgMgEgKgIQgIgIgGgMQgFgMgBgQQABgPAFgMQAGgMAIgIQAKgIALgEQALgDAMgBQAMABALADQALAEAKAIQAJAHAGAMQAFAMABAQQgBAQgFAMQgGAMgJAHQgJAIgLAFQgMADgMAAQgKAAgMgDgAgUgrQgIAGgEAMQgFALgBAOQABANAFAMQAEALAIAHQAKAHAKAAQAMAAAIgHQAIgGAFgMQAEgLABgOQgBgNgEgMQgFgLgIgHQgJgHgLAAQgLAAgJAHg");
	this.shape_20.setTransform(86.3,13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoA9IAAh5IAlAAQAMAAAKADQAKAEAGAIQAGAIAAAOQgBAMgFAIQgHAHgKAEQgKAEgLAAIgNAAIAAAxgAgQAAIAIAAQALAAAGgFQAHgGAAgNQAAgNgHgFQgGgGgLAAIgIAAg");
	this.shape_21.setTransform(73,13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATA9IgTgcIgZgkIAAgBIAZgcIAXgcIAVAAIgvAyIAXAfIATAYIANAPIAAABgAgzA9IAAh5IAZAAIAAB5g");
	this.shape_22.setTransform(61.3,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.4,47.3);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whe2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,42);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAfprQArAAAfAfQAfAfAAArQAAAsgfAfQgfAegrAAQgrAAgegeQgfgfAAgsQAAgrAfgfQAegfArAAgABvh9IAABcQAAARANALIBKA9QAQAOAXAAQAQAAAOgIQAOgIAJgPQAKgTgFgUQgFgWgRgOIh9hqQgLgJgNAGQgNAGAAAOgAFfIhIhLkqQgFgTgPgNIjNiqIAAlcIgBgMIgEgLQgCgGgEgFIAAAAQgDgFgEgEIgJgHIgKgGIgMgDIgJgBIgBAAIgMABIgLADQgGADgFADIjdCVQgMAJgHANQgHANAAAPIAACqQAAAZARASQASARAZAAQAZAAARgRQASgSAAgZIAAiKIBlhEIAAEHQAAAcAVASIDTCwIBGEXQAFAVARAMQAQANAUAAQAJAAAGgCQAYgGANgVQANgWgGgYgAg+C4QgNgLgRACQgRADgKAOIjdFMQgMATABAVQABAXAPAPQASASAZAAQAgAAASgbIDclLQAJgMgDgPQgCgOgLgKg");
	this.shape.setTransform(35.2,62);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,72.5,126);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeDdIAAhDIA/AAIAABDgAgNBLIgTknIBBAAIgSEng");
	this.shape.setTransform(13.2,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,82.2);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.2,0.1,0,-0.2,0.1,13.8).s().p("AhaBbQgkglgBgyIAAgEQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0IAAAEQgBAyglAlQglAlg1AAQg0AAgmglg");
	this.shape.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,25.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9FFFF").ss(3,1,1).p("AnjB0QN6gzBNi0");
	this.shape.setTransform(48.4,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,99.8,26.2);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACuAAQAABIgzAzQgzAzhIAAQhHAAgzgzQgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHg");
	this.shape.setTransform(17.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,37.8,37.7);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AGNAAQAAClh0B0Qh1B0ikAAQikAAh0h0Qh0h0AAilQAAikB0h0QB0h0CkAAQCkAAB1B0QB0B0AACkg");
	this.shape.setTransform(39.7,39.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,82.4,82.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AseBuQAQgdASgcQA0hNBFhFQELkLF4AAQF5AAELELQBGBGAzBMQASAcAQAcALnBFQg6BEhXA6Qj3CmlfAAQldAAj3imQhYg6g5hD");
	this.shape.setTransform(79.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,162.8,75.1);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,138);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(3,1,1).p("AAvAAQAAATgOAOQgOAOgTAAQgSAAgOgOQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASg");
	this.shape.setTransform(4.7,4.7,1.537,1.537);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.9,17.4,17.3);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carcx30bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,759,153);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("An8H9QjTjTAAkqQAAkpDTjTQDTjTEpAAQEqAADTDTQDTDTAAEpQAAEqjTDTQjTDTkqAAQkpAAjTjTg");
	this.shape.setTransform(72,72);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,144);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgonAdxMAAAg7hMBRPAAAMAAAA7hg");
	this.shape.setTransform(260,190.7,2.977,4.517);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513.9,-669.8,1548,1721);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smallarrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,22);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.biaarrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,60);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pitjpeg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000302").s().p("Eg5gCTwMAAAknfMBzBAAAMAAAEnfg");
	this.shape.setTransform(244.8,239.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.4,-706.5,736.3,1891.2);


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


(lib.rw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.carcx30, null, new cjs.Matrix2D(1,0,0,1,-25.6,-87.5)).s().p("AhdCAQgng1AAhLQAAhLAng1QAng0A2AAQA3AAAnA0QAnA2AABKQAABLgnA1QgnA1g3AAQg2AAgng1g");
	this.shape.setTransform(13.3,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.7,36.2);


(lib.n2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AABk3IgQABIgGA6QgsAEgmARIgjgvQgbANgVARIAZA1QggAagWAkIg3gVQgOAZgKAbIAzAfQgLAlAAAiIABAHIg7AMQACAdAHAdIA9gCQALAjAVAgIgsAqQAPAWAYAYIA0gjQAaAVAgAQIgOA8QAcAMAfAGIAYg6QAUACAQAAQAPAAAOgBIAVA7QAfgFAcgKIgKg+QAfgOAZgUIAyAnQAZgVASgXIgrguQAVgbAMgiIA/AGQAJgdADgeIg7gQIABgUQAAgagGgaIA2gdQgIgdgNgaIg5ATQgTgkgcgbIAeg1QgXgUgZgOIgkAuQglgVgqgHIgEg7QgTgDgVAAgAABCIQg4AAgogoQgngnAAg4QAAg3AngoQAogoA4AAQA3AAAoAoQAnAoAAA3QAAA4gnAnQgoAog3AAg");
	this.shape.setTransform(31.3,31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,64.5,64.4);


(lib.n1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkqhYIACgHIg5gjQAJgZANgYIA9AYIAFgHQAEgGAEgHQAZgkAkgeIAGgFIgdg7QAUgOAZgOIAnA1IAHgDQAxgWA2gFIAIAAIAIhCIAKAAQAWAAAUACIADBCIAIACQA0AJAvAaIAHAEIAqgzQAYAPATAQIghA7IAGAFQAkAjAXAtIAEAIIBBgVQALAZAIAaIg9AgIACAIQAHAiAAAgIgCAiIBDASQgEAegHAZIhHgGIgCAHQgQAqgaAjIgFAGIAwA0QgTAXgVASIg4grIgGAFQgjAbgmAPIgHADIAMBHQgeAKgaAEIgYhDIgHABQgWACgQAAQgYAAgWgDIgIgBIgbBBQgbgGgcgLIAQhEIgHgDQgrgUgfgcIgGgEIg6AnQgWgWgPgUIAxgwIgEgHQgbgngOguIgCgHIhFACQgFgZgDgdIBCgNIAAgSQAAgTACgTQACgPAEgPQACgLADgKgAAAjkQheAAhDBDQgcAcgRAhQgFAKgDAKQgFANgEAOQAAABAAAAQgGAaAAAbQAABfBEBDQBDBEBeAAQBgAABDhEQBDhDAAhfQAAhehDhEQhDhDhgAAg");
	this.shape.setTransform(38.8,38.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,77.6,77.4);


(lib.loonew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mlogonrew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,112);


(lib.fw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.carcx30, null, new cjs.Matrix2D(1,0,0,1,-184.3,-94.3)).s().p("AAADcQhKgEg2hDQg1hCAAhbQAAhbA1g+QA2g+BKAEQBLAEA2BCQA1BEAABaQAABbg1A+QgzA6hFAAIgJAAg");
	this.shape.setTransform(18.2,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,44);


(lib.Symbol26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape_1.setTransform(34.4,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgcBAQgNgJgHgQQgIgQAAgWQAAgVAHgRQAIgQAMgKQANgJAQAAQARAAANAJQAMAKAHAQQAIARAAAVQAAAWgIAQQgHAQgMAJQgNAJgRAAQgQAAgMgJgAgOgwQgGAHgDANQgDAMAAARQAAAbAHAOQAHAOAMAAQANAAAHgOQAGgOABgbQAAgRgEgMQgDgNgFgHQgGgHgJAAQgIAAgGAHg");
	this.shape_2.setTransform(21.3,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgYBDQgMgGgHgMQgHgMgBgTQAAgTAHgPQAGgQALgMQALgMAOgHQAOgHAPgCIALALQgPADgMAHQgLAIgIALQgIALgDANIABAAQAFgDAGgDQAHgCAHAAQALAAAKAEQAKAFAHAJQAGAJABAQQAAANgHALQgHAKgLAGQgLAGgPAAQgNAAgMgGgAgJABQgGAEgDAGQgDAHgBAKQABAJADAHQADAGAFAEQAFADAGAAQALAAAFgIQAGgIAAgNQAAgPgGgHQgFgHgKAAQgGAAgFACg");
	this.shape_3.setTransform(8.4,-14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgaBGQgKgDgIgFIgDgVIADAAQAHAGAJAEQAKADAKAAQAIAAAFgDQAHgDAEgFQAEgGAAgIQAAgOgJgGQgJgGgOAAIgIAAIABgPIADAAQARAAAIgGQAHgGAAgKQAAgKgGgGQgFgFgKAAQgHAAgHACQgIACgGAEIgCAAIACgRQAHgEAJgCQAIgCAJAAQALAAAKAEQAKAEAGAIQAGAHAAAMQAAALgFAIQgEAIgKAEIAAABQAKAEAHAHQAGAIABAPQgBAPgHAKQgHAJgMAFQgMAFgOAAQgLAAgKgDg");
	this.shape_4.setTransform(-10.1,-14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("Ag1BIIAAgKIAXgXQAVgWAKgQQAMgRAAgOQAAgGgDgFQgCgFgFgEQgEgDgIAAQgIAAgHADQgHADgHAGIgCAAIACgUIAQgHQAIgDALABQAVAAAMAKQAMAKAAASQAAAMgFAKQgFAKgLAKQgKAMgPAPIgLALIAAABIAiAAIATgBIAOgBIACAAIgKAZg");
	this.shape_5.setTransform(-22.9,-15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgYBFQgMgEgHgJQgHgIgBgNQABgKAEgHQAEgIAHgFQAHgFAIgDIAAgBQgNgHgFgHQgFgIAAgLQAAgMAGgHQAHgIAKgEQALgEAKAAQAMAAAJAEQAKADAFAIQAGAHAAAKQAAAKgGAIQgGAIgLAFIAAABQAPAHAIAJQAJAKAAAPQAAAKgFAIQgFAHgHAFQgIAFgKADQgJACgIAAQgNAAgLgEgAgVAQQgGAHAAALQABAKAGAHQAHAGALAAQAKAAAHgGQAHgHAAgJQAAgLgIgHQgHgHgNgGQgJAFgGAHgAgGg3QgEACgDAEQgDAEAAAGQAAAHAFAFQAFAGAKAFQAJgEAEgGQAFgGAAgIQAAgIgGgFQgGgEgJgBQgDAAgEADg");
	this.shape_6.setTransform(-36.1,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-29.9,88.4,29.4);


(lib.Symbol18copy2 = function(mode,startPosition,loop) {
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
	this.shape_9.graphics.f("#FF0000").s().p("Ag4B8QgZgRgOgfQgOgfAAgrQAAgrAOggQAOggAZgSQAYgSAgAAQAhAAAZASQAZASANAgQAOAgAAArQAAArgOAfQgOAfgYARQgZARghABQgfgBgZgRgAgbhfQgMANgGAZQgGAZAAAiQAAAzAOAcQANAcAYAAQAZAAANgcQANgcABgzQAAgigGgZQgGgZgMgNQgLgOgRAAQgQAAgLAOg");
	this.shape_9.setTransform(-18.9,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgxCGQgWgIgOgRQgOgQgBgaQABgTAIgOQAIgOAOgLQANgKAPgHIAAgBQgYgNgKgPQgLgPAAgVQAAgXANgPQANgPAUgHQAUgIAVAAQAXAAATAHQASAHALAOQALAOAAAVQAAASgMAPQgLAQgVALIAAABQAdAOAQASQAQAUABAdQgBAUgJAOQgJAPgPAKQgPAJgSAFQgTAFgRAAQgZAAgWgIgAgqAfQgLAOAAAUQAAAVAOANQANAMAVAAQAUAAANgNQAOgMAAgTQAAgVgPgOQgOgNgagLQgSAJgLAOgAgNhtQgIAEgGAIQgFAIAAAMQgBAOAKAKQALALAUAKQARgJAJgLQAIgMAAgOQAAgQgLgKQgMgJgRAAQgHAAgIAEg");
	this.shape_10.setTransform(-44.2,6.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhMCIIA6hxIA5hyIiHAAIAFgsIC8AAIAAALIgeA/IgfBEIgfBDIgbA+g");
	this.shape_11.setTransform(-69.6,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.7,-20.5,215.8,52.8);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBpQgXgPgOgaQgNgaAAglQAAgjANgbQAOgbAXgOQAXgPAcgBQAdABAXAPQAWAOANAbQANAbAAAjQAAAlgNAaQgNAagWAPQgXAOgdAAQgcAAgXgOgAgchQQgMANgGAVQgFAVgBAaQABAcAFAUQAGAVAMALQAMAMARAAQARAAALgNQAMgMAGgUQAGgVAAgaQAAgagGgVQgGgVgMgNQgLgMgRAAQgRAAgMAMg");
	this.shape.setTransform(199.8,214);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkB0QgOgDgMgFQgMgFgKgHIgFgkIAEAAQAPALATAHQATAIAUAAQAQgBAMgDQANgEAGgJQAHgIABgPQgBgVgSgJQgTgKgfABIgPAAIACgdIAGAAQAYAAAPgDQAPgDAHgHQAHgHAAgOQAAgTgNgGQgNgHgUAAQgOAAgNAFQgOAEgNAIIgEAAIADgeQAOgJAQgEQAQgEAQAAQAXAAATAHQAUAFALANQAMANAAATQAAASgJANQgIAMgTAHIAAACQAXAIALAMQALANAAAYQAAAYgNAQQgNAQgWAIQgXAHgbAAQgOAAgOgDg");
	this.shape_1.setTransform(175.1,214);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyAPIADgdIBiAAIgDAdg");
	this.shape_2.setTransform(157,216.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBwIgzhZIgBAAIg2BZIgjAAIBKhwIhFhvIA2AAIAvBTIABAAIAyhTIAiAAIhEBqIAtBJIARAaQAHALAFAFIAAACg");
	this.shape_3.setTransform(140,214.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBtQgXgHgRgOQgSgPgKgVQgKgWAAgdQAAgdAKgWQALgWASgOQATgPAXgHQAWgIAaAAQALAAAMACQANACALAEQALAEAJAFIADAeIgFAAQgOgMgPgEQgPgFgQAAQgZAAgSALQgUALgLAVQgLAUgBAcQABAcALAUQALATATAKQASALAYAAQAXgBARgFQASgGAMgKIAFAAIgJAgQgOAIgSAFQgSAEgVABQgZAAgYgIg");
	this.shape_4.setTransform(117.2,214.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA9BxIgehOIhOAAIggBOIgfAAIBfjcIAjgFIBbDhgAAXALIgchOIgCAAIgfBOIA9AAg");
	this.shape_5.setTransform(83.4,214.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoBwIAAjfIBYAAQA6AAAfAcQAgAcAAA3QAAAkgQAZQgQAZgcANQgcANglAAgAg7BXIAhAAQApAAAVgXQAVgWAAgqQAAgpgUgXQgTgXgpAAIgkAAg");
	this.shape_6.setTransform(59.7,214.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhnBwIAAgMIB/i4IAAgCIh0AAIAGgZICuAAIAAAKIiAC6IAAACIA7AAIAngBIAagBIASgBIACAAIgPAcg");
	this.shape_7.setTransform(34.4,214.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA9BxIgehOIhOAAIggBOIgfAAIBfjcIAjgFIBbDhgAAXALIgchOIgCAAIgfBOIA9AAg");
	this.shape_8.setTransform(10.4,214.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABeBwIgRirIgBAAIhNCeIgPAAIhOidIgBAAIgOCqIgdAAIAYjfIArAAIBHCTIABAAIBHiTIAsAAIAXDfg");
	this.shape_9.setTransform(-17.3,214.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,192,250,43.7);


(lib.ca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.carcx30, null, new cjs.Matrix2D(1,0,0,1,-150.5,-61)).s().p("A3gJiIAAzDMAvBAAAIAATDg");
	this.shape.setTransform(150.5,61);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301,122);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.salon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,496,372);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-97,0.1,1,1,0,0,0,79.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.4,-37.5,162.8,75.1);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(174.3,152.9,1,1,0,0,0,177.5,95.5);

	this.instance_1 = new lib.Symbol49("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.9,187,0.344,0.344,0,0,0,167.8,17.6);

	this.instance_2 = new lib.Symbol49("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.8,163.6,0.344,0.21,0,0,0,167.8,17.7);
	this.instance_2.alpha = 0.898;

	this.instance_3 = new lib.Symbol49("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(136.8,136.8,0.191,0.299,0,180,170.1,167.3,17.5);
	this.instance_3.alpha = 0.898;

	this.instance_4 = new lib.Symbol49("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.4,232.7,0.951,0.951,0,0,0,167.6,17.5);
	this.instance_4.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-26,408.5,215.7);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(96,-346.6,1,1,0,0,0,96,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-373.9,191.9,54.5);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(110.1,-353.1,1,1,0,0,0,103.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,-365.9,206.3,25.6);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(130.6,-347.8,1,1,0,0,0,130.6,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-374.8,261.2,54.5);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103.2,-346.4,1,1,0,0,0,103.2,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-373.7,206.4,54.5);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103.6,-339,1,1,0,0,0,103.6,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-369.9,207.1,61.7);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(91,-410.5,0.837,0.837,0,0,0,91,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-389.6,247.2,24.5);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.2,-337,1.251,1.251,0,0,0,106.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-366.6,265.8,59.2);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(17.2,21.1,1,1.006,0,-12.6,-18.7,17,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:21,scaleY:1,skewX:0,skewY:0,x:17,y:21},12,cjs.Ease.get(1)).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-5,41.4,52.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.4,4.2,0.634,0.634,0,0,0,4.8,4.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.7,regY:4.7,scaleX:0.7,scaleY:0.7,x:2,y:5.6,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-2,y:7.9,alpha:0},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,-1.4,11.1,11.1);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(142.5,277.7,0.547,0.547,6.5,0,0,4.9,4.9);

	this.instance_1 = new lib.Symbol14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.4,235.5,0.718,0.718,6.5,0,0,4.7,4.9);

	this.instance_2 = new lib.Symbol14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.8,233.1,0.547,0.547,6.5,0,0,5,4.9);

	this.instance_3 = new lib.Symbol14("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.6,251.1,0.45,0.45,6.5,0,0,4.9,5);

	this.instance_4 = new lib.Symbol14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(67.4,206.2,0.547,0.547,6.5,0,0,4.9,4.8);

	this.instance_5 = new lib.Symbol14("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(104,264.8,0.718,0.718,6.5,0,0,5,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},12).wait(232));

	// Layer 3
	this.instance_6 = new lib.Symbol14("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(155.6,247.3,0.448,0.448,6.5,0,0,5,4.9);

	this.instance_7 = new lib.Symbol14("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(100.2,218,0.448,0.448,6.5,0,0,4.8,4.9);

	this.instance_8 = new lib.Symbol14("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(75.1,191,0.448,0.448,6.5,0,0,5,4.9);

	this.instance_9 = new lib.Symbol14("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(146.1,224.3,0.448,0.448,6.5,0,0,4.9,5);

	this.instance_10 = new lib.Symbol14("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(114.4,200.3,0.448,0.448,6.5,0,0,4.8,4.9);

	this.instance_11 = new lib.Symbol14("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(125.9,231.1,0.448,0.448,6.5,0,0,4.7,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},9).wait(235));

	// Layer 2
	this.instance_12 = new lib.Symbol14("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(179.1,234.1,0.404,0.404,6.5,0,0,4.8,4.8);

	this.instance_13 = new lib.Symbol14("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(126.1,209.4,0.404,0.404,6.5,0,0,4.9,4.7);

	this.instance_14 = new lib.Symbol14("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(93.7,195,0.404,0.404,6.5,0,0,4.8,4.7);

	this.instance_15 = new lib.Symbol14("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(151.9,204.1,0.404,0.404,6.5,0,0,4.8,4.7);

	this.instance_16 = new lib.Symbol14("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(127.5,187,0.404,0.404,6.5,0,0,4.9,4.7);

	this.instance_17 = new lib.Symbol14("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(156.8,229.2,0.404,0.404,6.5,0,0,4.8,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},6).wait(238));

	// Layer 1
	this.instance_18 = new lib.bose();
	this.instance_18.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},239).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,486,357);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.2,25.5,0.849,0.849,0,0,0,35.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,51);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.8,29.4,0.976,0.976,0,0,0,35.6,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,58.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.4,10.9,0.976,0.976,0,0,0,27,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,21.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27.6,14.9,0.976,0.976,170.6,0,0,27.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.5,29.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(163.1,5.1,0.232,0.232,0,0,0,147.1,22);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:147,scaleX:1,scaleY:1,x:147,y:22,alpha:1},81,cjs.Ease.get(1)).to({startPosition:0},79).to({regX:147.1,scaleX:0.23,scaleY:0.23,x:143.1,y:5.1,alpha:0},41,cjs.Ease.get(1)).to({_off:true},1).wait(895));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129,0,125.2,32);


(lib.spsps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.1,270.2,0.98,0.98,0,0,0,94,42.7);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(560).to({_off:false},0).to({regY:42.8,scaleX:1,scaleY:1,alpha:1,startPosition:26},24,cjs.Ease.get(1)).wait(39).to({regX:93.9,regY:42.6,scaleX:1,scaleY:1,y:270.1,startPosition:46},0).to({regY:42.7,y:270.2,alpha:0.012,startPosition:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(379.5,76.5,1,1,0,0,0,379.5,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,759,153);


(lib.salon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(248.1,185.9,1.242,1.242,0,0,0,248,185.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160).to({_off:false},0).to({regY:186,scaleX:1,scaleY:1,x:248,y:186,alpha:1},39,cjs.Ease.get(1)).to({regX:248.1,scaleX:0.85,scaleY:0.85,x:205.2,y:186.1},49,cjs.Ease.get(-1)).to({x:198.2,alpha:0},13).to({_off:true},1).wait(309));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.PITFADER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(391,104,0.861,0.861,0,0,0,72,72);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62,104,0.861,0.861,0,0,0,72,72);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(226,72,1,1,0,0,0,72,72);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,453,166);


(lib.PIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fuel
	this.instance = new lib.Symbol8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(423.1,196.2,1,1,70.2,0,0,10.3,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},26).to({rotation:0},5,cjs.Ease.get(1)).wait(146));

	// t
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(399.5,198.4,1,1,-35.7,0,0,44.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({startPosition:0},0).to({rotation:0,y:198.5},5,cjs.Ease.get(1)).wait(146));

	// odo
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(246.2,164.1,1,1,0,0,0,50.1,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({startPosition:0},0).wait(19).to({startPosition:0},0).to({regY:17.1,rotation:172.3},55,cjs.Ease.get(0.8)).wait(77));

	// taho
	this.instance_3 = new lib.Symbol11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.9,199.9,1,1,0,0,0,43.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({startPosition:0},0).to({regX:43.3,regY:14.4,rotation:84.6,x:78,y:200},5,cjs.Ease.get(1)).to({regX:43.1,regY:14.5,rotation:49.5,x:77.9,y:199.8},14,cjs.Ease.get(1)).to({rotation:170.8,x:78.1,y:200},9,cjs.Ease.get(1)).to({regY:14.6,rotation:227.3,y:199.9},25).wait(98));

	// FADER
	this.instance_4 = new lib.Symbol6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(249.4,184,1,1,0,0,0,259.9,190.5);
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({startPosition:0},0).to({alpha:0},4,cjs.Ease.get(1)).wait(154));

	// pitfader
	this.instance_5 = new lib.PITFADER("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(246.5,176.5,1,1,0,0,0,226.5,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({startPosition:0},0).to({alpha:0},5,cjs.Ease.get(1)).wait(151));

	// pit
	this.instance_6 = new lib.Symbol2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(251.5,188.5,1,1,0,0,0,251.5,188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-524.4,-706.5,1548,1891.2);


(lib.nu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// n
	this.instance = new lib.n2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.2,31.3,0.775,0.775,0,0,0,31.3,31.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},8,cjs.Ease.get(0.96)).to({rotation:-720},36,cjs.Ease.get(0.96)).to({scaleX:0.82,scaleY:0.82,x:73.2,y:36.8,alpha:0},10).wait(1));

	// n
	this.instance_1 = new lib.n1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,86.3,1.265,1.265,0,0,0,38.9,38.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:38.9,alpha:1},8,cjs.Ease.get(0.96)).to({rotation:720},36,cjs.Ease.get(0.96)).to({scaleX:0.82,scaleY:0.82,x:41.8,y:82,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,6.1,112.3,128.7);


(lib.flare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(163.1,5.1,0.232,0.232,0,0,0,147.1,22);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:147,scaleX:1,scaleY:1,x:147,y:22,alpha:1},24,cjs.Ease.get(1)).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129,0,125.2,32);


(lib.eee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("ApVEiQhXg6g5hDIgOgKQAwhHBAhAQEKkJF5AAQF5AAEKEJQBABAAxBHIgOAJQg5BEhYA6Qj3CmleAAQldAAj4img");
	var mask_graphics_50 = new cjs.Graphics().p("ApVEiQhXg6g5hDIgOgKQAwhHBAhAQEKkJF5AAQF5AAEKEJQBABAAxBHIgOAJQg5BEhYA6Qj3CmleAAQldAAj4img");
	var mask_graphics_51 = new cjs.Graphics().p("ApVEdQhXgzg5g6IgOgJQAwg9BAg4QEKjoF5AAQF5AAEKDoQBAA4AxA9IgOAIQg5A7hYAzQj3CRleAAQldAAj4iRg");
	var mask_graphics_52 = new cjs.Graphics().p("ApVEZQhXgsg5gzIgOgHQAwg2BAgwQEKjIF5AAQF5AAEKDIQBAAwAxA2IgOAHQg5AzhYAsQj3B9leAAQldAAj4h9g");
	var mask_graphics_53 = new cjs.Graphics().p("ApVEVQhXgmg5grIgOgHQAwgtBAgqQEKiqF5AAQF5AAEKCqQBAAqAxAtIgOAGQg5AshYAmQj3BrleAAQldAAj4hrg");
	var mask_graphics_54 = new cjs.Graphics().p("ApVERQhXggg5gkIgOgGQAwgmBAgjQEKiQF5AAQF5AAEKCQQBAAjAxAmIgOAFQg5AlhYAgQj3BaleAAQldAAj4hag");
	var mask_graphics_55 = new cjs.Graphics().p("ApVENQhXgag5geIgOgFQAwggBAgdQEKh4F5AAQF5AAEKB4QBAAdAxAgIgOAEQg5AfhYAaQj3BLleAAQldAAj4hLg");
	var mask_graphics_56 = new cjs.Graphics().p("ApVEKQhXgVg5gZIgOgEQAwgaBAgYQEKhiF5AAQF5AAEKBiQBAAYAxAaIgOAEQg5AZhYAVQj3A9leAAQldAAj4g9g");
	var mask_graphics_57 = new cjs.Graphics().p("ApVEHQhXgRg5gUIgOgDQAwgUBAgTQEKhPF5AAQF5AAEKBPQBAATAxAUIgOADQg5AUhYARQj3AxleAAQldAAj4gxg");
	var mask_graphics_58 = new cjs.Graphics().p("ApVEFQhXgNg5gQIgOgCQAwgQBAgPQEKg9F5AAQF5AAEKA9QBAAPAxAQIgOACQg5APhYAOQj3AmleAAQldAAj4gmg");
	var mask_graphics_59 = new cjs.Graphics().p("ApVEDQhXgKg5gMIgOgCQAwgMBAgLQEKgtF5AAQF5AAEKAtQBAALAxAMIgOACQg5AMhYAKQj3AcleAAQldAAj4gcg");
	var mask_graphics_60 = new cjs.Graphics().p("ApVEBQhXgHg5gJIgOgBQAwgJBAgHQEKghF5AAQF5AAEKAhQBAAHAxAJIgOABQg5AJhYAHQj3AUleAAQldAAj4gUg");
	var mask_graphics_61 = new cjs.Graphics().p("ApVD/QhXgFg5gFIgOgBQAwgGBAgFQEKgWF5AAQF5AAEKAWQBAAFAxAGIgOABQg5AFhYAFQj3AOleAAQldAAj4gOg");
	var mask_graphics_62 = new cjs.Graphics().p("ApVD+QhXgDg5gDIgOgBIBwgHQEKgOF5AAQF5AAEKAOIBxAHIgOABQg5ADhYADQj3AJleAAQldAAj4gJg");
	var mask_graphics_63 = new cjs.Graphics().p("ApVD9IiQgDIgOgBIBwgEQEKgIF5AAQF5AAEKAIIBxAEIgOABIiRADQj3AFleAAQldAAj4gFg");
	var mask_graphics_64 = new cjs.Graphics().p("ApVD9IiQgCIgOAAIBwgDQEKgEF5AAQF5AAEKAEIBxADIgOAAIiRACQj3ADleAAQldAAj4gDg");
	var mask_graphics_65 = new cjs.Graphics().p("ApVD9IiQgCIgOAAIBwgBQEKgEF5AAQF5AAEKAEIBxABIgOAAIiRACQj3ACleAAQldAAj4gCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:53.8,y:45.6}).wait(42).to({graphics:mask_graphics_50,x:53.8,y:45.6}).wait(1).to({graphics:mask_graphics_51,x:53.8,y:43}).wait(1).to({graphics:mask_graphics_52,x:53.8,y:40.6}).wait(1).to({graphics:mask_graphics_53,x:53.8,y:38.4}).wait(1).to({graphics:mask_graphics_54,x:53.8,y:36.3}).wait(1).to({graphics:mask_graphics_55,x:53.8,y:34.4}).wait(1).to({graphics:mask_graphics_56,x:53.8,y:32.7}).wait(1).to({graphics:mask_graphics_57,x:53.8,y:31.2}).wait(1).to({graphics:mask_graphics_58,x:53.8,y:29.9}).wait(1).to({graphics:mask_graphics_59,x:53.8,y:28.7}).wait(1).to({graphics:mask_graphics_60,x:53.8,y:27.7}).wait(1).to({graphics:mask_graphics_61,x:53.8,y:26.9}).wait(1).to({graphics:mask_graphics_62,x:53.8,y:26.3}).wait(1).to({graphics:mask_graphics_63,x:53.8,y:25.8}).wait(1).to({graphics:mask_graphics_64,x:53.8,y:25.6}).wait(1).to({graphics:mask_graphics_65,x:53.8,y:25.5}).wait(1));

	// zin2
	this.instance = new lib.Symbol19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53.7,49.4,0.544,0.544,0,0,0,17.4,17.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,x:53.8,y:49.5},8,cjs.Ease.get(1)).to({startPosition:0},1).to({x:37.9},2).to({startPosition:0},3).to({x:51.8},6).to({x:75},10).to({startPosition:0},4).to({x:53.8},8).to({scaleX:0.47,scaleY:0.47},8).to({alpha:0.051},7).wait(1));

	// zin
	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.7,49.5,0.544,0.544,0,0,0,39.7,39.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({regY:39.7,scaleX:1,scaleY:1,y:49.4},8,cjs.Ease.get(1)).to({startPosition:0},1).to({x:40.1},2).to({startPosition:0},3).to({x:52},6).to({x:71.9},10).to({startPosition:0},4).to({x:53.7},8).to({regX:39.8,scaleX:1.17,scaleY:1.17,x:53.9,y:49.5},5).to({scaleX:0.65,scaleY:0.65,x:53.8,y:49.4,alpha:0.051},10).wait(1));

	// eye
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(53.2,51.1,1,0.031,0,0,0,-97,36.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:35.9,scaleY:1,y:92,alpha:1},8,cjs.Ease.get(-1)).to({startPosition:0},20).to({startPosition:0},22).to({regY:35.6,scaleY:0.05,y:52.1,alpha:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,47.8,161.9,4.3);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},33).to({state:[{t:this.shape_16}]},17).to({state:[]},11).to({state:[{t:this.shape_16}]},6).to({state:[]},7).wait(105));

	// Layer 1
	this.instance = new lib.Symbol26_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-18.6,1,1,0,0,0,-0.1,-17.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-17.4,alpha:1},10,cjs.Ease.get(1)).to({_off:true},48).wait(17).to({_off:false},0).to({_off:true},11).wait(6).to({_off:false},0).to({_off:true},7).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-31.1,88.4,29.4);


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol18copy5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.2,-33.8,1,1,0,0,0,-0.1,-17.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).wait(52).to({startPosition:75},0).to({alpha:0,startPosition:92},11).to({_off:true},7).wait(387).to({_off:false,y:-26.6,alpha:1,startPosition:0},0).to({_off:true},1377).wait(13));

	// Layer 1
	this.instance_1 = new lib.Symbol18copy2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-7.4,1,1,0,0,0,0,-18);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({y:-18,alpha:1},22,cjs.Ease.get(1)).wait(13).to({startPosition:0},0).to({alpha:0},11).to({_off:true},7).wait(404).to({_off:false,y:-7.4},0).to({y:-18,alpha:1},22,cjs.Ease.get(1)).to({_off:true},1338).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol10copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-662.5,-272.8,1,1,0,0,0,78.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-775.5,-97.2,250,43.7);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.sta("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.086,0.086);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.12,scaleY:0.12,rotation:40.6},10,cjs.Ease.get(0.28)).to({scaleX:0.09,scaleY:0.09,rotation:81.2},7,cjs.Ease.get(0.28)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-35.4,70.8,70.8);


(lib.spcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sp
	this.instance = new lib.Symbol10copy4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-648.6,-76,1.1,1.1,0,0,0,-648.6,-76);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},32,cjs.Ease.get(1)).wait(1669));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cx301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKKC0Qg3hDAAhgQAAheA3hDQA4hDBOAAQBOAAA3BDQA4BDAABeQAABgg4BDQg3BDhOAAQhOAAg4hDgANXBYQAgA3AmgrQAFgqgCgvQgRhhgQgUQgsAJgPAcQAfA7gHBaIAAADIABAAIgBAFQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgDABgAucBbQgwg6AAhSQAAhRAwg7QAwg5BDAAQBDAAAvA5QAwA7AABRQAABSgwA6QgvA5hDAAQhDAAgwg5gAsCh9IAJARQAKAVAEAQIAOA4IAtgUQgDgagKgdQgag5gNgKg");
	mask.setTransform(106.8,92.7);

	// rw
	this.instance = new lib.rw("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.1,88.2,1,1,0,0,0,13.3,18.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:13.4,regY:18.3,scaleX:1,scaleY:1,skewX:1.2,skewY:4.1,x:26.3,y:88.4},0).wait(1));

	// fw
	this.instance_1 = new lib.fw("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.7,94.4,1,1,0,0,0,18.2,22);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:18.3,regY:22.1,scaleX:1,scaleY:1,skewX:1.9,skewY:2.8,x:184.8,y:94.5},0).wait(1));

	// ca
	this.instance_2 = new lib.ca("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,60.9,1,1,0,0,0,150.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-0.1,301,122);


(lib.caer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol50("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(178.5,54.1,0.8,0.8,0,0,0,28.4,66.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:28.3,regY:66.6,scaleX:0.74,scaleY:0.74,x:181.5,y:55.1,alpha:1},33,cjs.Ease.get(0.4)).to({startPosition:0},6).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.9,-20,326.8,172.5);


(lib.bose_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13("single",0);
	this.instance.parent = this;
	this.instance.setTransform(259,201.5,1.151,1.151,0,0,0,243,178.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({regX:243.1,scaleX:1.07,scaleY:1.07,x:283.2,y:196.5,alpha:1,mode:"synched",startPosition:6,loop:false},28,cjs.Ease.get(-0.5)).to({regX:243,scaleX:1,scaleY:1,x:301.7,y:193.5,startPosition:71},42,cjs.Ease.get(0.5)).to({x:310.2,y:192.5,alpha:0,startPosition:0},21,cjs.Ease.get(1)).to({_off:true},1).wait(461));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.actives = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.instance = new lib.Symbol26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.7,54.7,0.249,0.249,0,0,0,35.4,62.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({regX:35.3,scaleX:0.58,scaleY:0.58,alpha:1},9,cjs.Ease.get(0.58)).to({startPosition:0},18,cjs.Ease.get(-0.75)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// !
	this.instance_1 = new lib.Symbol25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.2,54.7,0.279,0.279,0,0,0,13.3,41);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regY:41.1,scaleX:1,scaleY:1,y:54.8,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1.56,scaleY:1.56,x:52.3,y:54.9,alpha:0},10,cjs.Ease.get(-0.58)).wait(1).to({regY:41,scaleX:0.28,scaleY:0.28,x:52.2,y:54.7},0).to({regY:41.1,scaleX:1,scaleY:1,y:54.8,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1.56,scaleY:1.56,x:52.3,y:54.9,alpha:0},6,cjs.Ease.get(-0.58)).to({_off:true},1).wait(42));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AIlHaIxJADIIju5g");
	this.shape.setTransform(51.6,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,0,0,0.086)").ss(1.3,1,1).p("Ao/H0II+vnIJBPlg");
	this.shape_1.setTransform(51.3,47.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,0,0,0.165)").ss(1.5,1,1).p("ApZIKIJXwTIJcQRg");
	this.shape_2.setTransform(51.1,46.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,0,0,0.243)").ss(1.8,1,1).p("ApxIfIJvw9IJ0Q7g");
	this.shape_3.setTransform(50.9,46);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,0,0,0.318)").ss(2,1,1).p("AqIIzIKHxlIKLRjg");
	this.shape_4.setTransform(50.7,45.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,0,0,0.388)").ss(2.2,1,1).p("AqfJGIKdyLIKhSJg");
	this.shape_5.setTransform(50.5,44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,0,0,0.455)").ss(2.4,1,1).p("AqzJYIKxyvIK2Stg");
	this.shape_6.setTransform(50.3,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,0,0,0.518)").ss(2.6,1,1).p("ArHJqILFzTILKTQg");
	this.shape_7.setTransform(50.1,43.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,0,0,0.576)").ss(2.7,1,1).p("ArZJ5ILXzxILcTvg");
	this.shape_8.setTransform(49.9,43.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,0,0,0.631)").ss(2.9,1,1).p("ArrKIILp0PILuUNg");
	this.shape_9.setTransform(49.8,42.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,0,0,0.682)").ss(3.1,1,1).p("Ar7KWIL50rIL+Uog");
	this.shape_10.setTransform(49.6,42.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,0,0,0.729)").ss(3.2,1,1).p("AsKKjIMI1FIMNVCg");
	this.shape_11.setTransform(49.5,41.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,0,0,0.773)").ss(3.3,1,1).p("AsYKvIMW1dIMbVag");
	this.shape_12.setTransform(49.4,41.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,0,0,0.812)").ss(3.5,1,1).p("AskK6IMh1zIMoVwg");
	this.shape_13.setTransform(49.3,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,0,0,0.847)").ss(3.6,1,1).p("AsvLEIMt2HIMyWDg");
	this.shape_14.setTransform(49.1,40.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,0,0,0.878)").ss(3.7,1,1).p("As5LMIM32XIM9WUg");
	this.shape_15.setTransform(49.1,40.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,0,0,0.906)").ss(3.7,1,1).p("AtCLUINA2nINFWkg");
	this.shape_16.setTransform(49,40.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,0,0,0.933)").ss(3.8,1,1).p("AtKLbINH21INOWyg");
	this.shape_17.setTransform(48.9,40.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,0,0,0.953)").ss(3.9,1,1).p("AtRLgINO2/INVW8g");
	this.shape_18.setTransform(48.9,40);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,0,0,0.969)").ss(3.9,1,1).p("AtWLlINU3JINZXGg");
	this.shape_19.setTransform(48.8,39.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,0,0,0.984)").ss(4,1,1).p("AtaLpINX3RINeXOg");
	this.shape_20.setTransform(48.8,39.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,0,0,0.992)").ss(4,1,1).p("AtdLrINa3VINhXSg");
	this.shape_21.setTransform(48.7,39.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(4,1,1).p("AtfLtINd3ZINiXWg");
	this.shape_22.setTransform(48.7,39.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(4,1,1).p("ANhLqI7BADINd3Zg");
	this.shape_23.setTransform(48.7,39.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,0,0,0.827)").ss(3.5,1,1).p("AuFMNIOD4ZIOIYWg");
	this.shape_24.setTransform(48.7,39.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,0,0,0.671)").ss(3,1,1).p("AumMqIOj5TIOqZQg");
	this.shape_25.setTransform(48.7,39.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,0,0,0.529)").ss(2.6,1,1).p("AvENEIPB6HIPHaEg");
	this.shape_26.setTransform(48.7,39.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,0,0,0.404)").ss(2.2,1,1).p("AveNbIPb61IPiaxg");
	this.shape_27.setTransform(48.7,39.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,0,0,0.298)").ss(1.9,1,1).p("Av1NvIPy7dIP5bZg");
	this.shape_28.setTransform(48.7,39.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,0,0,0.208)").ss(1.6,1,1).p("AwIN/IQE79IQNb5g");
	this.shape_29.setTransform(48.7,39.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,0,0,0.133)").ss(1.4,1,1).p("AwYONIQU8ZIQdcVg");
	this.shape_30.setTransform(48.7,39.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,0,0,0.075)").ss(1.2,1,1).p("AwkOYIQg8vIQpcrg");
	this.shape_31.setTransform(48.7,39.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,0,0,0.031)").ss(1.1,1,1).p("AwtOfIQp89IQyc5g");
	this.shape_32.setTransform(48.7,39.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,0,0,0.008)").ss(1,1,1).p("AwyOkIQu9HIQ3dDg");
	this.shape_33.setTransform(48.7,39.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AQ1OhMghpAAEIQw9Jg");
	this.shape_34.setTransform(48.7,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},40).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).to({state:[]},1).wait(8));

	// circle
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("ACJAAQAAA5goAnQgoApg5AAQg4AAgogpQgognAAg5QAAg3AogoQAogpA4AAQA5AAAoApQAoAoAAA3g");
	this.shape_35.setTransform(51.7,56.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,241,241,0.055)").ss(1.2,1,1).p("AitAAQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABJgzAyQgzAzhIAAQhHAAgzgzQgzgyAAhJg");
	this.shape_36.setTransform(51.7,56.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,227,227,0.11)").ss(1.4,1,1).p("AjRAAQAAhWA+g9QA9g9BWAAQBXAAA9A9QA+A9AABWQAABYg+A8Qg9A9hXAAQhWAAg9g9Qg+g8AAhYg");
	this.shape_37.setTransform(51.7,56.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,213,213,0.165)").ss(1.5,1,1).p("Aj0AAQAAhkBIhIQBHhIBlAAQBlAABIBIQBIBIAABkQAABlhIBIQhIBHhlAAQhlAAhHhHQhIhIAAhlg");
	this.shape_38.setTransform(51.7,56.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,200,200,0.216)").ss(1.7,1,1).p("AkVAAQAAhyBRhSQBRhRBzAAQBzAABSBRQBRBSAAByQAABzhRBRQhSBShzAAQhzAAhRhSQhRhRAAhzg");
	this.shape_39.setTransform(51.7,56.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,187,187,0.267)").ss(1.8,1,1).p("Ak2AAQAAiABbhbQBbhbCAAAQCBAABbBbQBbBbAACAQAACBhbBbQhbBbiBAAQiAAAhbhbQhbhbAAiBg");
	this.shape_40.setTransform(51.7,56.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,175,175,0.314)").ss(2,1,1).p("AlWAAQAAiNBkhlQBlhkCNAAQCOAABkBkQBlBlAACNQAACPhlBkQhkBkiOAAQiNAAhlhkQhkhkAAiPg");
	this.shape_41.setTransform(51.7,56.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,163,163,0.361)").ss(2.1,1,1).p("Al0AAQAAiZBthuQBthtCaAAQCbAABtBtQBtBuAACZQAACbhtBtQhtBtibAAQiaAAhthtQhthtAAibg");
	this.shape_42.setTransform(51.7,56.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,152,152,0.404)").ss(2.2,1,1).p("AmSAAQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACoh2B1Qh2B2inAAQimAAh2h2Qh2h1AAiog");
	this.shape_43.setTransform(51.7,56.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,141,141,0.447)").ss(2.4,1,1).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_44.setTransform(51.7,56.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,130,130,0.49)").ss(2.5,1,1).p("AnKAAQAAi9CGiHQCHiFC9AAQC+AACGCFQCHCHAAC9QAAC/iHCFQiGCHi+AAQi9AAiHiHQiGiFAAi/g");
	this.shape_45.setTransform(51.7,56.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,120,120,0.529)").ss(2.6,1,1).p("AnkAAQAAjICOiOQCOiODIAAQDJAACOCOQCOCOAADIQAADJiOCOQiOCOjJAAQjIAAiOiOQiOiOAAjJg");
	this.shape_46.setTransform(51.7,56.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,110,110,0.569)").ss(2.7,1,1).p("An9AAQAAjTCViVQCViVDTAAQDTAACWCVQCVCVAADTQAADUiVCVQiWCVjTAAQjTAAiViVQiViVAAjUg");
	this.shape_47.setTransform(51.7,56.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,101,101,0.604)").ss(2.8,1,1).p("AoVAAQAAjdCcicQCcicDdAAQDdAACdCcQCcCcAADdQAADeicCcQidCcjdAAQjdAAicicQicicAAjeg");
	this.shape_48.setTransform(51.7,56.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,92,92,0.639)").ss(2.9,1,1).p("AotAAQAAjmCjijQCkijDmAAQDnAACjCjQCkCjAADmQAADnikCjQijCjjnAAQjmAAikijQijijAAjng");
	this.shape_49.setTransform(51.7,56.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,83,83,0.675)").ss(3,1,1).p("ApDAAQAAjvCqiqQCqipDvAAQDwAACqCpQCqCqAADvQAADwiqCpQiqCqjwAAQjvAAiqiqQiqipAAjwg");
	this.shape_50.setTransform(51.7,56.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,75,75,0.706)").ss(3.1,1,1).p("ApXAAQAAj3CvixQCwivD4AAQD5AACvCvQCwCxAAD3QAAD5iwCvQivCwj5AAQj4AAiwiwQivivAAj5g");
	this.shape_51.setTransform(51.7,56.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,67,67,0.737)").ss(3.2,1,1).p("AprAAQAAkAC1i2QC1i1EBAAQEBAAC2C1QC1C2AAEAQAAEBi1C1Qi2C2kBAAQkBAAi1i2Qi1i1AAkBg");
	this.shape_52.setTransform(51.7,56.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,60,60,0.765)").ss(3.3,1,1).p("Ap+AAQAAkIC7i7QC7i7EIAAQEJAAC7C7QC7C7AAEIQAAEJi7C7Qi7C7kJAAQkIAAi7i7Qi7i7AAkJg");
	this.shape_53.setTransform(51.7,56.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,53,53,0.792)").ss(3.4,1,1).p("AqQAAQAAkPDBjBQC/i/EQAAQEQAADAC/QDBDBAAEPQAAEQjBDAQjADAkQAAQkQAAi/jAQjBjAAAkQg");
	this.shape_54.setTransform(51.7,56.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,47,47,0.816)").ss(3.5,1,1).p("AqgAAQAAkWDEjFQDFjFEXAAQEXAADFDFQDFDFAAEWQAAEXjFDFQjFDFkXAAQkXAAjFjFQjEjFAAkXg");
	this.shape_55.setTransform(51.7,56.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,41,41,0.839)").ss(3.5,1,1).p("AqwAAQAAkdDJjJQDKjKEdAAQEeAADJDKQDKDJAAEdQAAEejKDJQjJDKkeAAQkdAAjKjKQjJjJAAkeg");
	this.shape_56.setTransform(51.7,56.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,35,35,0.863)").ss(3.6,1,1).p("Aq/AAQAAkjDOjOQDOjNEjAAQEkAADODNQDODOAAEjQAAEkjODNQjODOkkAAQkjAAjOjOQjOjNAAkkg");
	this.shape_57.setTransform(51.7,56.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,30,30,0.882)").ss(3.7,1,1).p("ArMAAQAAkoDRjSQDSjSEpAAQEpAADSDSQDSDSAAEoQAAEqjSDRQjSDSkpAAQkpAAjSjSQjRjRAAkqg");
	this.shape_58.setTransform(51.7,56.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(255,25,25,0.902)").ss(3.7,1,1).p("ArYAAQAAktDVjWQDWjVEtAAQEuAADWDVQDVDWAAEtQAAEujVDVQjWDWkuAAQktAAjWjWQjVjVAAkug");
	this.shape_59.setTransform(51.7,56.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,21,21,0.918)").ss(3.8,1,1).p("ArkAAQAAkyDZjZQDZjYEyAAQEzAADZDYQDZDZAAEyQAAEzjZDYQjZDZkzAAQkyAAjZjZQjZjYAAkzg");
	this.shape_60.setTransform(51.7,56.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,17,17,0.933)").ss(3.8,1,1).p("AruAAQAAk2DcjcQDbjbE3AAQE3AADcDbQDcDcAAE2QAAE3jcDcQjcDbk3AAQk3AAjbjbQjcjcAAk3g");
	this.shape_61.setTransform(51.7,56.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,13,13,0.949)").ss(3.9,1,1).p("Ar3AAQAAk6DejeQDfjeE6AAQE7AADeDeQDeDeAAE6QAAE7jeDeQjeDek7AAQk6AAjfjeQjejeAAk7g");
	this.shape_62.setTransform(51.7,56.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,10,10,0.961)").ss(3.9,1,1).p("Ar/AAQAAk9DgjhQDhjgE+AAQE+AADhDgQDhDhAAE9QAAE+jhDhQjhDgk+AAQk+AAjhjgQjgjhAAk+g");
	this.shape_63.setTransform(51.7,56.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,7,7,0.973)").ss(3.9,1,1).p("AsFAAQAAlADhjjQDkjiFAAAQFBAADjDiQDjDjAAFAQAAFBjjDjQjjDilBAAQlAAAjkjiQjhjjAAlBg");
	this.shape_64.setTransform(51.7,56.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(255,5,5,0.98)").ss(4,1,1).p("AsLAAQAAlDDkjkQDkjkFDAAQFEAADkDkQDlDkAAFDQAAFEjlDkQjkDklEAAQlDAAjkjkQjkjkAAlEg");
	this.shape_65.setTransform(51.7,56.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,3,3,0.988)").ss(4,1,1).p("AsQAAQAAlFDljmQDmjlFFAAQFGAADmDlQDmDmAAFFQAAFGjmDlQjmDmlGAAQlFAAjmjmQjljlAAlGg");
	this.shape_66.setTransform(51.7,56.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,2,2,0.992)").ss(4,1,1).p("AsUAAQAAlGDmjnQDnjnFHAAQFHAADnDnQDnDnAAFGQAAFHjnDnQjnDnlHAAQlHAAjnjnQjmjnAAlHg");
	this.shape_67.setTransform(51.7,56.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,1,1,0.996)").ss(4,1,1).p("AsXAAQAAlHDnjoQDpjoFHAAQFIAADoDoQDoDoAAFHQAAFIjoDoQjoDolIAAQlHAAjpjoQjnjoAAlIg");
	this.shape_68.setTransform(51.7,56.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0000").ss(4,1,1).p("AsZAAQAAlIDojoQDojoFJAAQFJAADoDoQDpDoAAFIQAAFJjpDoQjoDolJAAQlJAAjojoQjojoAAlJg");
	this.shape_69.setTransform(51.7,56.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF0000").ss(4,1,1).p("AMaAAQAAFJjpDoQjoDplJAAQlJAAjojpQjojoAAlJQAAlIDojpQDojoFJAAQFJAADoDoQDpDpAAFIg");
	this.shape_70.setTransform(51.7,56.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(255,0,0,0.831)").ss(3.5,1,1).p("As6AAQAAlWDxjyQDzjyFWAAQFXAADyDyQDyDyAAFWQAAFXjyDyQjyDylXAAQlWAAjzjyQjxjyAAlXg");
	this.shape_71.setTransform(51.7,56.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,0,0,0.667)").ss(3,1,1).p("AtbAAQAAlkD7j8QD8j7FkAAQFkAAD8D7QD8D8AAFkQAAFkj8D8Qj8D8lkAAQlkAAj8j8Qj7j8AAlkg");
	this.shape_72.setTransform(51.7,56.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(255,0,0,0.502)").ss(2.5,1,1).p("At8AAQAAlxEFkGQEGkFFxAAQFyAAEFEFQEGEGAAFxQAAFykGEFQkFEGlyAAQlxAAkGkGQkFkFAAlyg");
	this.shape_73.setTransform(51.7,56.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,0,0,0.333)").ss(2,1,1).p("AucAAQAAl/EOkPQEPkOF/AAQGAAAEPEOQEPEPAAF/QAAGAkPEOQkPEPmAAAQl/AAkPkPQkOkOAAmAg");
	this.shape_74.setTransform(51.7,56.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(255,0,0,0.169)").ss(1.5,1,1).p("Au9AAQAAmNEYkYQEYkYGNAAQGNAAEZEYQEYEYAAGNQAAGOkYEXQkZEZmNAAQmNAAkYkZQkYkXAAmOg");
	this.shape_75.setTransform(51.7,56.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("APfAAQAAGbkiEiQkiEimbAAQmaAAkjkiQkhkiAAmbQAAmaEhkjQEjkhGaAAQGbAAEiEhQEiEjAAGag");
	this.shape_76.setTransform(51.7,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},1).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37,41.8,29.3,29.3);


(lib.acac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ac
	this.instance = new lib.Symbol21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(262,264.2,0.087,0.087,0,0,0,-77.3,-15.5);
	this.instance.alpha = 0.172;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-77.1,regY:-15.3,scaleX:0.94,scaleY:0.96,skewX:-13.7,x:246.6,y:264.4,alpha:0.941},19,cjs.Ease.get(-0.93)).to({regX:-77.2,regY:-15.4,scaleX:1.63,scaleY:1.96,skewX:-33.7,x:248.7,y:257.5,alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267.8,264.6,10.4,4.1);


(lib._360 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flyer
	this.instance = new lib.Symbol24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-164.7,246.4,0.322,0.322,0,0,0,12.7,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.9,scaleX:3.58,scaleY:3.58,guide:{path:[-164.6,246.3,-183.1,252.8,-183.1,260.5,-183.1,267.9,-166.4,274.1,-149.7,280.4,-116.4,285.5,-49.8,295.9,44.4,295.9,47.7,295.9,51,295.9]}},15).to({scaleX:0.71,scaleY:0.71,guide:{path:[51.1,295.9,141.1,295.6,205.4,285.5,238.8,280.4,255.5,274.1,272.1,267.9,272.1,260.5,272.1,253.2,255.5,247,238.8,240.7,205.4,235.5,192.4,233.5,178.3,231.8,177.3,231.7,176.3,231.6]}},13,cjs.Ease.get(0.3)).to({scaleX:0.32,scaleY:0.32,guide:{path:[176.3,231.7,151.3,228.8,123,227.3]},alpha:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.8,242.2,8.3,8.3);


(lib.ttxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol46("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.1,267.2,0.98,0.98,0,0,0,96,27.3);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(453).to({_off:false},0).to({scaleX:1,scaleY:1,y:270.2,alpha:1},16,cjs.Ease.get(1)).wait(47).to({startPosition:0},0).to({alpha:0.012},9,cjs.Ease.get(-0.83)).to({_off:true},1).wait(162));

	// Layer 9
	this.instance_1 = new lib.Symbol37("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.6,-328.4,1,1,0,0,0,109,12.8);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(392).to({_off:false},0).to({y:-326.4,alpha:1},15).wait(31).to({startPosition:0},0).to({alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(236));

	// Layer 3
	this.instance_2 = new lib.Symbol45("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.1,266.2,0.98,0.98,0,0,0,109,27.8);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(364).to({_off:false},0).to({scaleX:1,scaleY:1,y:270.2,alpha:1,startPosition:10},16,cjs.Ease.get(1)).wait(58).to({startPosition:102},0).to({regY:27.9,y:271.2,alpha:0.012,startPosition:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(236));

	// Layer 4
	this.instance_3 = new lib.Symbol44("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.1,269.2,0.98,0.98,0,0,0,130.7,27.3);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(316).to({_off:false},0).to({scaleX:1,scaleY:1,x:1.2,y:270.1,alpha:0.969},19,cjs.Ease.get(1)).to({regX:130.6,scaleX:1,scaleY:1,x:1.1,y:270.2,alpha:1},4).wait(14).to({startPosition:0},0).to({y:271.2,alpha:0.012},11,cjs.Ease.get(-1)).to({_off:true},1).wait(323));

	// Layer 5
	this.instance_4 = new lib.Symbol43("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.1,268.2,0.98,0.98,0,0,0,103.3,27.3);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(252).to({_off:false},0).to({regX:103.2,scaleX:1,scaleY:1,y:270.2,alpha:1},19,cjs.Ease.get(1)).wait(24).to({startPosition:0},0).to({alpha:0.012},17,cjs.Ease.get(1)).to({_off:true},1).wait(375));

	// Layer 6
	this.instance_5 = new lib.Symbol42("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.1,263.2,0.98,0.98,0,0,0,103.6,30.9);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).to({scaleX:1,scaleY:1,y:270.2,alpha:1},21,cjs.Ease.get(1)).wait(32).to({startPosition:0},0).to({alpha:0.012},17,cjs.Ease.get(-1)).to({_off:true},1).wait(437));

	// Layer 7
	this.instance_6 = new lib.Symbol41("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.1,270.2,0.98,0.98,0,0,0,94,42.7);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).to({regY:42.8,scaleX:1,scaleY:1,alpha:1,startPosition:26},24,cjs.Ease.get(1)).wait(32).to({regX:93.9,regY:42.6,scaleX:1,scaleY:1,y:270.1,startPosition:46},0).to({regY:42.7,y:270.2,alpha:0.012,startPosition:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(515));

	// Layer 8
	this.instance_7 = new lib.Symbol40("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.2,305.2,1.1,1.1,0,0,0,106.3,23.7);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:106.2,scaleX:1,scaleY:1,x:2.1,y:260.3,alpha:1},25,cjs.Ease.get(1)).wait(44).to({startPosition:0},0).to({regX:106.3,x:2.2,y:260.2,alpha:0.012},10,cjs.Ease.get(1)).to({_off:true},1).wait(461).to({_off:false,regX:106.2,scaleX:1.04,scaleY:1.04,x:89.7,y:24.2},0).to({regY:23.4,scaleX:0.95,scaleY:0.95,x:84.3,y:-8.5,alpha:1},25,cjs.Ease.get(1)).to({_off:true},43).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11,14.5,0.582,0.652,0,-2.4,-3.3,17.8,21.4);

	this.instance_1 = new lib.Symbol27("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.5,21.5,0.808,0.773,0,-2.4,0,17.4,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-3.1,151.4,44.6);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.acac("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(358.4,281.3,1,1,0,0,0,373.7,286.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(55));

	// Layer 2
	this.instance_1 = new lib.acac("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.4,281.3,1,1,0,0,0,373.7,286.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(62));

	// ac
	this.instance_2 = new lib.acac("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(366.6,278.5,1,1,0,0,0,373.7,286.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.7,256.2,10.5,4.1);


(lib.pitframe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PIT("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(257.1,191.4,1.202,1.202,0,0,0,246.5,184.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:185,scaleX:0.84,scaleY:0.84,y:191.6,alpha:1,startPosition:45},44,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:257,y:191.5,startPosition:122},78,cjs.Ease.get(0.92)).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-669.2,-879.6,1859.9,2272.4);


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


(lib.с2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(221.7,89.1,1.007,1.001,0,1.8,0,73.5,18.8);
	this.instance.alpha = 0.539;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({_off:false},0).to({regX:73.7,regY:18.9,scaleX:1.02,scaleY:1.01,skewX:0,skewY:-0.6,x:220.6,y:89.4,alpha:1,mode:"single",startPosition:11},12).to({x:222.6,alpha:0},19,cjs.Ease.get(1)).to({_off:true},1).wait(141));

	// ca
	this.instance_1 = new lib.cx301("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(165.9,41.2,1.149,1.149,0,0,0,19.3,49);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.93,scaleY:0.93,x:163.8,y:43,alpha:1,startPosition:1},27,cjs.Ease.get(1)).to({regX:19.4,regY:48.9,scaleX:0.92,scaleY:0.92,x:164.6,y:43.9,startPosition:0},27).to({regY:49,scaleX:0.74,scaleY:0.74,x:89.5,y:45},12,cjs.Ease.get(1)).to({x:99.5,y:47},27).to({regY:49.1,scaleX:0.83,scaleY:0.87,skewX:3.9,x:163.2,y:47.6,startPosition:1},15,cjs.Ease.get(1)).to({regX:19.3,scaleX:0.84,scaleY:0.84,skewX:0,x:161.9,y:49.2},101).to({regX:19.4,regY:49.3,scaleX:0.77,scaleY:0.78,skewX:-1.5,skewY:1,x:151.1,y:53.8,mode:"single"},16,cjs.Ease.get(1)).to({scaleX:0.78,skewY:0.3,x:150.9,y:54.8},12,cjs.Ease.get(1)).to({skewY:0.3,x:152.9,alpha:0},19,cjs.Ease.get(1)).to({_off:true},1).wait(141));

	// rd
	this.instance_2 = new lib.shadow("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-61.3,73.7,1.372,1.372,0,0,0,6.5,22.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.11,scaleY:1.11,x:-20.1,y:69.3,alpha:1},27,cjs.Ease.get(1)).to({regY:22.7,scaleX:1.09,scaleY:1.09,x:-16.6,y:69.9},27).to({regX:6.6,scaleX:0.88,scaleY:0.88,x:-56.5,y:65.9},12,cjs.Ease.get(1)).to({x:-46.5,y:67.9},27).to({regX:6.5,regY:22.6,scaleX:0.99,scaleY:1.03,x:-5.3,y:72.1},15,cjs.Ease.get(1)).to({regY:22.5,scaleX:1,scaleY:1,x:-3.7,y:72.8},101).to({regX:6.6,regY:22.6,scaleX:0.93,scaleY:0.93,x:-2.2,y:75.3},16,cjs.Ease.get(1)).to({x:-4},12,cjs.Ease.get(1)).to({x:-2,alpha:0},19,cjs.Ease.get(1)).to({_off:true},1).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-15.2,1041.6,267.9);


(lib.acacs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ac
	this.instance = new lib.Symbol22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(327.3,295.4,1,1,0,0,0,399.7,282.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:30},30,cjs.Ease.get(-1)).to({alpha:0,startPosition:44},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188.2,269.3,10.5,4.1);


(lib.pitmain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pitframe("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(301.3,324.2,1,1,0,0,0,259.9,293.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({startPosition:76},0).to({scaleX:1.5,scaleY:1.5,x:301.4,y:349.3,alpha:0,startPosition:105},15,cjs.Ease.get(1)).to({_off:true},1).wait(1570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-627.8,-848.8,1859.9,2272.4);


(lib.nuts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// circle
	this.instance = new lib.actives("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.4,2.3,0.965,0.965);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(453).to({_off:false},0).to({_off:true},79).wait(1575));

	// eye
	this.instance_1 = new lib.eee("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,33.1,1,1,0,0,0,53.2,49.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(388).to({_off:false},0).to({_off:true},66).wait(1653));

	// flyer
	this.instance_2 = new lib._360("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.5,231.2,0.8,0.8,0,0,0,52.3,280.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(404).to({_off:false},0).to({_off:true},34).wait(1669));

	// ac
	this.instance_3 = new lib.acacs("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(231,261.6,1.2,1.2,0,0,0,327.3,295.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(353).to({_off:false},0).to({_off:true},56).wait(1698));

	// n
	this.instance_4 = new lib.nu("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.7,35.9,1,1,0,0,0,53.4,63.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(308).to({_off:false},0).to({_off:true},56).wait(1743));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mdaylogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol5_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-131.2,-54.1,0.392,0.378,0,-16,164,0.6,-0.2);

	this.instance_1 = new lib.Symbol5_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-158.1,-4.8,0.392,0.378,0,139.5,-40.5,0.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},9).to({state:[]},28).to({state:[]},8689).wait(12));

	// V Primary
	this.instance_2 = new lib.loonew("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-157.4,3.8,0.868,0.868,0,0,0,60.4,56);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:60.5,scaleX:1,scaleY:1,x:-157.3,y:3.6,alpha:1},14,cjs.Ease.get(1)).wait(8724));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.8,-44.9,105.1,97.3);


(lib.car1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.caer2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(281.4,94.1,1.019,1.019,0,0,0,287.3,83.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(548).to({_off:false},0).wait(149));

	// c2
	this.instance_1 = new lib.с2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(379.6,136,0.825,0.825,0,0,0,396.8,106.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(299).to({_off:false},0).to({_off:true},388).wait(10));

	// c1
	this.instance_2 = new lib.cx301("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-48.9,46.5,0.496,0.496,0,0,0,19.4,49.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({regX:19.3,scaleX:0.84,scaleY:0.84,x:172.1,y:49.2,alpha:1},54,cjs.Ease.get(1)).to({x:169.1,startPosition:1},30).to({regX:19.4,scaleX:0.46,scaleY:0.47,skewX:6.3,x:165.4,y:40.5,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(521));

	// rd
	this.instance_3 = new lib.shadow("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-147.1,60.5,0.593,0.593,0,0,0,6.6,22.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(76).to({_off:false},0).to({regX:6.5,scaleX:1,scaleY:1,x:6.5,y:72.8,alpha:1},54,cjs.Ease.get(1)).to({x:3.5},30).to({regX:6.8,scaleX:0.55,scaleY:0.56,skewX:6.3,x:72.4,y:53.5,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(521));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.mcx30_300x250_nov20adw = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.mdaylogo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.4,39.5,0.435,0.435,0,0,0,-155.6,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(619));

	// overglo
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73,245,1,1,0,0,0,270,69);
	this.instance_1.alpha = 0.789;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(619));

	// txtt
	this.instance_2 = new lib.Symbol17_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,214.9,0.652,0.652,0,0,0,0.3,-17.7);

	this.instance_3 = new lib.spsps("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(152.7,324.1,0.599,0.599,0,0,0,1.3,69.9);

	this.instance_4 = new lib.ttxt("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.8,341.9,0.669,0.669,0,0,0,1.2,79.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(619));

	// txt
	this.instance_5 = new lib.spcopy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.8,26.9,0.675,0.675,0,0,0,-645.1,-72.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).wait(545));

	// ico
	this.instance_6 = new lib.nuts("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(148.9,75.4,0.4,0.4,0,0,0,46.5,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(619));

	// anima
	this.instance_7 = new lib.salon_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(179.4,130.3,0.743,0.743,0,0,0,248,186.2);

	this.instance_8 = new lib.car1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(213.1,151.7,0.638,0.638,0,0,0,379.3,102.1);

	this.instance_9 = new lib.pitmain("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(153.4,216.9,0.767,0.767,0,0,0,301.9,344.6);

	this.instance_10 = new lib.bose_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(128.9,120,0.743,0.743,0,0,0,242.9,178.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(619));

	// ramp
	this.instance_11 = new lib.flare("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(313.3,17.4,0.319,4.602,0,29.5,4.7,270.6,69.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(535).to({_off:false},0).wait(84));

	// stage
	this.instance_12 = new lib.flare("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(36.2,120.1,0.838,3.607,0,-57.7,0,269.9,69.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(528).to({_off:false},0).wait(91));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171717").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(619));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409.9,-573.7,1427.1,1743.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"biaarrow.png", id:"biaarrow"},
		{src:"bose.jpg", id:"bose"},
		{src:"carcx30bg.jpg", id:"carcx30bg"},
		{src:"carcx30.png", id:"carcx30"},
		{src:"cx302.png", id:"cx302"},
		{src:"glo1.png", id:"glo1"},
		{src:"mlogonrew.png", id:"mlogonrew"},
		{src:"pitjpeg.jpg", id:"pitjpeg"},
		{src:"salon.jpg", id:"salon"},
		{src:"sha.png", id:"sha"},
		{src:"smallarrow.png", id:"smallarrow"},
		{src:"whe2.png", id:"whe2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;