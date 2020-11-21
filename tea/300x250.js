(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_P_", frames: [[0,0,262,319],[0,321,262,319],[264,0,262,319],[528,0,262,319],[264,321,207,230],[792,0,211,267],[473,321,207,218],[792,269,206,242]]}
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



(lib.Растровоеизображение1 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение2 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение3 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение4 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение5 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение6 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение7 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение8 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(7);
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


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение7();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-103.5,-109,207,218), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение6();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,-133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-105.5,-133.5,211,267), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение5();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-103.5,-115,207,230), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение8();
	this.instance.parent = this;
	this.instance.setTransform(-95,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-95,-121,206,242), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение4();
	this.instance.parent = this;
	this.instance.setTransform(-131,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-131,-159.5,262,319), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение3();
	this.instance.parent = this;
	this.instance.setTransform(-131,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-131,-159.5,262,319), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow = new createjs.Shadow("rgba(0,0,0,0.57)",0,3,6);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCLIgag+IhzAAIgZA+Ig+AAIB2kVIA3AAIB2EVgAAkAXIgkhYIglBYIBJAAg");
	this.shape.setTransform(110.4,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoCKIAAkTIDPAAIAAA2IiTAAIAAA4ICBAAIAAA1IiBAAIAAA6ICVAAIAAA2g");
	this.shape_1.setTransform(82.2,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeCKIAAjbIhTAAIAAg4IDjAAIAAA4IhUAAIAADbg");
	this.shape_2.setTransform(55.7,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+CKIAAkTIBrAAQArABAhARQAhATASAeQATAfAAAnQAAAngTAfQgSAfghASQghASgrABgAhBBTIAuAAQAZAAASgLQATgKAKgSQAKgTAAgZQAAgYgKgSQgKgTgTgKQgSgLgZAAIguAAg");
	this.shape_3.setTransform(16.4,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABTCLIgag+IhzAAIgZA+Ig+AAIB2kVIA3AAIB2EVgAAkAXIgkhYIglBYIBJAAg");
	this.shape_4.setTransform(-15.2,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABOCKIAAizIhOB0IgBAAIhMhzIAACyIg8AAIAAkTIBCAAIBHB1IBIh1IBCAAIAAETg");
	this.shape_5.setTransform(-47.8,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4CKIAAhvIhvAAIAABvIg9AAIAAkTIA9AAIAABtIBvAAIAAhtIA8AAIAAETg");
	this.shape_6.setTransform(-79.8,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABTCLIgZg+Ih0AAIgZA+Ig+AAIB2kVIA3AAIB2EVgAAjAXIgjhYIglBYIBIAAg");
	this.shape_7.setTransform(-110.3,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA7C1IAAi0Ih4C0Ig5AAIAAkSIA8AAIAACzIB4izIA5AAIAAESgAgriCQgRgPgEgdIAjgGQAEAMAHAHQAIAHALAAQAMAAAIgHQAHgHAEgMIAjAGQgEAdgRAPQgSAQgbAAQgaAAgSgQg");
	this.shape_8.setTransform(107.2,-27.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABTCLIgZg+Ih0AAIgZA+Ig+AAIB2kVIA3AAIB2EVgAAjAXIgjhYIglBYIBIAAg");
	this.shape_9.setTransform(76.5,-23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA0CKIAAhnQgOAHgSAHQgUAGgUABQgbAAgUgKQgWgKgLgVQgMgTAAggIAAhlIA9AAIAABTQAAAaALAOQAKAOAYAAQAQAAAQgFQARgFAJgIIAAh3IA9AAIAAETg");
	this.shape_10.setTransform(46.4,-23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA7C1IAAi0Ih4C0Ig5AAIAAkSIA8AAIAACzIB4izIA5AAIAAESgAgriCQgRgPgEgdIAjgGQAEAMAHAHQAIAHALAAQAMAAAIgHQAHgHAEgMIAjAGQgEAdgRAPQgSAQgbAAQgaAAgSgQg");
	this.shape_11.setTransform(5.3,-27.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag6CMQgRgBgOgEQgPgEgNgHIAYgtQAIAFAIACQAIACAIAAQAJAAAJgEQAJgFAIgNIhujNIBDAAIBKCRIBDiRIBBAAIhpDUQgSAkgVAPQgVAQgcAAIgCAAg");
	this.shape_12.setTransform(-24.3,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA2CKIAAjcIhsAAIAADcIg8AAIAAkTIDlAAIAAETg");
	this.shape_13.setTransform(-53.5,-23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag6CMQgRgBgOgEQgPgEgNgHIAYgtQAIAFAIACQAIACAIAAQAJAAAJgEQAJgFAIgNIhujNIBDAAIBKCRIBDiRIBBAAIhpDUQgSAkgVAPQgVAQgcAAIgCAAg");
	this.shape_14.setTransform(-82.7,-23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA1CKIhVh1IggAhIAABUIg8AAIAAkTIA8AAIAAB5IBvh5IBJAAIhwB1IB1Ceg");
	this.shape_15.setTransform(-110.1,-23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-126.8,-47.4,253.8,95), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC239").s().p("AzDTDQn5n4AArLQAArJH5n6QH6n5LJAAQLLAAH4H5QH6H6AALJQAALLn6H4Qn4H6rLAAQrJAAn6n6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-172.5,-172.5,345,345), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.parent = this;
	this.instance.setTransform(-131,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-131,-159.5,262,319), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение2();
	this.instance.parent = this;
	this.instance.setTransform(-131,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-131,-159.5,262,319), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow = new createjs.Shadow("rgba(0,0,0,0.57)",0,3,6);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4B+Ig4hWIg5BWIg/AAIBYh/IhUh8IBBAAIA0BSIA2hSIA/AAIhVB7IBYCAg");
	this.shape.setTransform(88.3,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBxQgegRgRgeQgRgdAAglQAAgjARgeQASgdAegSQAegRAmgBQAoABAeARQAeARARAeQARAdAAAkQAAAkgRAeQgSAdgeASQgeARgnABQgngBgegRgAgnhEQgRALgJASQgKASAAAVQAAAWAKASQAJASASAKQARALAVAAQAXAAARgKQARgLAJgSQAKgSAAgWQAAgVgKgSQgJgSgSgLQgRgKgWgBQgWABgRAKg");
	this.shape_1.setTransform(59.8,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqB+IAAj7IB0AAQAWAAAQAFQARAGALALQAJAJAEAKQAEALAAAOQAAAVgKANQgJANgOAHQAWAHAMAPQANAOAAAaQAAAXgMAPQgLAQgVAHQgWAIgcAAgAg0BOIBBAAQASAAALgHQAKgHAAgPQAAgMgKgIQgKgHgVAAIg/AAgAg0gXIAzAAQASAAAKgHQALgGAAgPQAAgMgJgHQgKgHgRAAIg2AAg");
	this.shape_2.setTransform(32.1,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABPCZIAAg1IidAAIgEA1IgyAAIAAhnIAYAAQAKgWAGgYQAGgWADgfQADgeAAgrIAAgdIC3AAIAADJIAeAAIgHBngAgbhMQAAAngGAgQgGAdgKAaIBgAAIAAiYIhKAAg");
	this.shape_3.setTransform(4.2,51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1B+IAAhRIgrAAIg1BRIhBAAIA9haQgYgJgOgUQgPgSgBgfQABgoAZgVQAZgWAtAAIByAAIAAD7gAgghCQgMAJAAATQAAAQALAJQALAKAUAAIA3AAIAAhIIg2AAQgUAAgLAJg");
	this.shape_4.setTransform(-34.2,48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhpB/IgOgDIAEgtIAEAAIAFAAQALABAJgFQAIgGAGgQQAGgQADgfQAEgeAAgzIAAg0ICzAAIAAD7Ig4AAIAAjJIhHAAIAAATQAAA3gFAkQgFAkgKAVQgKAVgPAJQgQAIgVAAIgQgBg");
	this.shape_5.setTransform(-61.4,48.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPCZIAAg1IidAAIgEA1IgyAAIAAhnIAYAAQAKgWAGgYQAGgWADgfQADgeAAgrIAAgdIC3AAIAADJIAeAAIgHBngAgbhMQAAAngGAgQgGAdgKAaIBgAAIAAiYIhKAAg");
	this.shape_6.setTransform(-87.9,51);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2B+IAAikIhuCkIg0AAIAAj7IA3AAIAACkIBuikIA0AAIAAD7g");
	this.shape_7.setTransform(109.2,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAwB+IhNhrIgdAeIAABNIg4AAIAAj7IA4AAIAABuIBlhuIBDAAIhnBrIBsCQg");
	this.shape_8.setTransform(83.5,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAzB+IAAhlIhlAAIAABlIg4AAIAAj7IA4AAIAABkIBlAAIAAhkIA4AAIAAD7g");
	this.shape_9.setTransform(55.2,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1CAQgQAAgNgEQgNgEgMgGIAVgpQAIAEAHACQAIACAIAAQAHAAAIgEQAJgFAHgLIhli8IA+AAIBDCEIA9iEIA9AAIhiDCQgPAhgUAOQgTAOgZAAIgCAAg");
	this.shape_10.setTransform(28.3,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhjB+IAAj7IBmAAQAeAAAWALQAWALALAUQAMATAAAbQAAAdgOATQgOATgXAKQgXAKgbAAIgqAAIAABMgAgrABIArAAQAVAAALgKQALgLABgRQgBgTgLgKQgMgJgUAAIgrAAg");
	this.shape_11.setTransform(3.9,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABMB/IgXg4IhqAAIgXA4Ig5AAIBsj9IAzAAIBsD9gAAhAWIghhRIgiBRIBDAAg");
	this.shape_12.setTransform(-23.3,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABPCZIAAg1IidAAIgEA1IgyAAIAAhnIAYAAQAKgWAGgYQAGgWADgfQADgeAAgrIAAgdIC3AAIAADJIAeAAIgHBngAgbhMQAAAngGAgQgGAdgKAaIBgAAIAAiYIhKAAg");
	this.shape_13.setTransform(-51.7,6.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhFBxQgegRgRgeQgRgdAAglQAAgjARgeQASgdAegSQAegRAmgBQAoABAeARQAeARARAeQARAdAAAkQAAAkgRAeQgSAdgeASQgeARgnABQgngBgegRgAgnhEQgRALgJASQgKASAAAVQAAAWAKASQAJASASAKQARALAVAAQAXAAARgKQARgLAJgSQAKgSAAgWQAAgVgKgSQgJgSgSgLQgRgKgWgBQgWABgRAKg");
	this.shape_14.setTransform(-80.7,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyB+IAAjJIhjAAIAADJIg3AAIAAj7IDRAAIAAD7g");
	this.shape_15.setTransform(-109.6,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA2CmIAAilIhuClIg0AAIAAj7IA3AAIAACkIBuikIA0AAIAAD7gAgnh3QgQgOgEgaIAggGQAEALAHAHQAHAGAKAAQALAAAHgGQAHgHADgLIAgAGQgEAagPAOQgQAOgZABQgYgBgQgOg");
	this.shape_16.setTransform(91.3,-51.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABMB/IgYg4IhpAAIgXA4Ig5AAIBtj9IAxAAIBtD9gAAhAWIghhRIghBRIBCAAg");
	this.shape_17.setTransform(63.1,-47.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhqB+IAAj7IB0AAQAWAAAQAFQARAGALALQAJAJAEAKQAEALAAAOQAAAVgKANQgJANgOAHQAWAHAMAPQANAOAAAaQAAAXgMAPQgLAQgVAHQgWAIgcAAgAg0BOIBBAAQASAAALgHQAKgHAAgPQAAgMgKgIQgKgHgVAAIg/AAgAg0gXIAzAAQASAAAKgHQALgGAAgPQAAgMgJgHQgKgHgRAAIg2AAg");
	this.shape_18.setTransform(36.6,-47.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABMB/IgYg4IhpAAIgXA4Ig5AAIBtj9IAxAAIBtD9gAAhAWIghhRIghBRIBCAAg");
	this.shape_19.setTransform(8.6,-47.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhjB+IAAj7IBmAAQAeAAAWALQAWALALAUQAMATAAAbQAAAdgOATQgOATgXAKQgXAKgbAAIgqAAIAABMgAgrABIArAAQAVAAALgKQALgLABgRQgBgTgLgKQgMgJgUAAIgrAAg");
	this.shape_20.setTransform(-16.8,-47.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhXB+IAAj7ICvAAIAAAyIh4AAIAADJg");
	this.shape_21.setTransform(-39.5,-47.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA2B+IAAikIhuCkIg0AAIAAj7IA3AAIAACkIBuikIA0AAIAAD7g");
	this.shape_22.setTransform(-65.3,-47.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhqB+IAAj7IB0AAQAWAAAQAFQARAGALALQAJAJAEAKQAEALAAAOQAAAVgKANQgJANgOAHQAWAHAMAPQANAOAAAaQAAAXgMAPQgLAQgVAHQgWAIgcAAgAg0BOIBBAAQASAAALgHQAKgHAAgPQAAgMgKgIQgKgHgVAAIg/AAgAg0gXIAzAAQASAAAKgHQALgGAAgPQAAgMgJgHQgKgHgRAAIg2AAg");
	this.shape_23.setTransform(-91.5,-47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-124,-69,248.1,138.1), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#204B3E").s().p("AueOfQmAmAAAofQAAoeGAmAQGAmAIeAAQIfAAGAGAQGAGAAAIeQAAIfmAGAQmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-131.1,-131.1,262.2,262.2), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#204B3E").s().p("AueOfQmAmAAAofQAAoeGAmAQGAmAIeAAQIfAAGAGAQGAGAAAIeQAAIfmAGAQmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-131.1,-131.1,262.2,262.2), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#204B3E").s().p("EgljAY8MAAAgx3MBLHAAAMAAAAx3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-240.4,-159.5,480.8,319.2), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-109,207,218);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-133.5,211,267);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-115,207,230);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-103,-121,206,242), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},29).to({y:0},30).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-159.5,262,319);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-159.5,262,319);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-159.5,262,319);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-159.5,262,319);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(150.6,-174.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(88));

	// Слой 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150.5,174.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).wait(88));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC239").s().p("EgmUAZbMAAAgy1MBMpAAAMAAAAy1g");
	this.shape.setTransform(-2.8,4.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(72).to({_off:false},0).wait(88));

	// Символ 22
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-150.5,174.9,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

	// Символ 22
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.6,-174.9,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.6,-306,563.3,612.1);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},30).to({y:0},29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-121,206,242);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow = new createjs.Shadow("rgba(0,0,0,0.57)",0,3,6);
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(160));

	// Слой 9
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,146);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({alpha:1},9).to({_off:true},46).wait(3));

	// Слой 8
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(199,17);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).to({alpha:1},9).to({_off:true},52).wait(7));

	// Слой 7
	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-18.5,-149);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({alpha:1},9).to({_off:true},59).wait(10));

	// Слой 6
	this.instance_3 = new lib.Символ45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-239.5,19.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).to({alpha:1},9).to({_off:true},66).wait(13));

	// Символ 26
	this.instance_4 = new lib.Символ38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(35,194.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(73).to({alpha:0},9).to({_off:true},1).wait(48));

	// Символ 25
	this.instance_5 = new lib.Символ37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(199,32.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(73).to({alpha:0},9).to({_off:true},1).wait(58));

	// Символ 24
	this.instance_6 = new lib.Символ36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-24,-193.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(73).to({alpha:0},9).to({_off:true},1).wait(68));

	// Символ 23
	this.instance_7 = new lib.Символ38();
	this.instance_7.parent = this;
	this.instance_7.setTransform(35,194.5);

	this.instance_8 = new lib.Символ37();
	this.instance_8.parent = this;
	this.instance_8.setTransform(199,32.5);

	this.instance_9 = new lib.Символ36();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-24,-193.5);

	this.instance_10 = new lib.Символ35();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-199,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},72).to({state:[{t:this.instance_10}]},8).to({state:[]},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73).to({alpha:0},8).to({_off:true},1).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330,-353,660,707);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		num1 = 1;
	}
	this.frame_1 = function() {
		num1++;
		this.fm.gotoAndPlay(2);
	}
	this.frame_149 = function() {
		if(num1 > 3)
		{
			this.gotoAndStop(161);
		}
	}
	this.frame_159 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(148).call(this.frame_149).wait(10).call(this.frame_159).wait(3));

	// Слой 11
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({_off:true},87).wait(2));

	// Слой 10
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},73).wait(87).to({_off:false},0).wait(2));

	// Слой 8
	this.ite = new lib.Символ27();
	this.ite.parent = this;
	this.ite.setTransform(9.2,-4.6,0.7,0.7);

	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33.6,131.5,0.7,0.7);

	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.4,18.1,0.7,0.7);

	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7.6,-140,0.7,0.7);

	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-130.1,-32.9,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ite}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},160).wait(2));

	// Слой 7
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.4,-4.9,0.79,0.79);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},160).wait(2));

	// Слой 5
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.7,-1,0.79,0.79);

	this.instance_8 = new lib.Символ22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-115.6,133.3,0.6,0.6,0,0,0,-0.1,0);

	this.instance_9 = new lib.Символ22();
	this.instance_9.parent = this;
	this.instance_9.setTransform(122.3,-143.1,0.6,0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#204B3E").s().p("A9qTtMAAAgnZMA7VAAAMAAAAnZg");
	this.shape.setTransform(0.7,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.shape},{t:this.instance_9},{t:this.instance_8}]},160).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.8,-251.6,461.9,494.8);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.1,-1.7,462,494.8);
// library properties:
lib.properties = {
	id: 'D3E99F943D55904E9E4BEEB274F8A6BA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"300x250_atlas_P_.png", id:"300x250_atlas_P_"}
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
an.compositions['D3E99F943D55904E9E4BEEB274F8A6BA'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;