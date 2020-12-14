(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/eye_big.jpg", id:"eye_big"},
		{src:"images/eye_g.jpg", id:"eye_g"},
		{src:"images/kap_im.png", id:"kap_im"},
		{src:"images/made_germ.png", id:"made_germ"},
		{src:"images/prep.png", id:"prep"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.eye_big = function() {
	this.initialize(img.eye_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,427);


(lib.eye_g = function() {
	this.initialize(img.eye_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,93);


(lib.kap_im = function() {
	this.initialize(img.kap_im);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,21);


(lib.made_germ = function() {
	this.initialize(img.made_germ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,55);


(lib.prep = function() {
	this.initialize(img.prep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,233);


(lib.whitecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#777777").s().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	this.shape.setTransform(150,87.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.1,300,250);


(lib.w5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00499B","rgba(0,159,232,0)"],[0,0.639],0,-75.1,0,302.4).s().p("AxJHfQoDixr7m2Qr8m5urHNQurHLlri5Qlri3iAjVIAAiOQCADfFrEGQFrEIOrrPQOrrRLgKVQIxH3LpEYQL3GIKdhwQKehwH0knQH0kkJhnhQJhniOEKeQODKcFrjfQFrjeCAkIIAACOQiADVlrC6QlsC8u0oJQu0oMq5IHQmhE0n6DiQooEGpbBVQi3AaixAAQoxAAoKj7g");
	this.shape.setTransform(587.3,42.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30.3,1174.5,146);


(lib.w1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAFAFA","rgba(250,250,250,0)"],[0,1],0,-188.7,0,188.8).s().p("EhbvAddMAAAg1JQCADVFrC0QFrC1Orp5QOrp5LgKWQLeKVQbEUQCyAvC/AXQIABdHkjEQAPgHARgFQOzkaKmpiQLgqWOqJ5QOsJ5Fri1QFri0CAjVMAAAA1Jg");
	this.shape.setTransform(587.3,156.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32.2,1174.5,377.2);


(lib.w1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(179,206,233,0)","#B6D5EA"],[0,1],0,187.3,0,-187.2).s().p("EhbvAddMAAAg1JQCADVFrC0QFrC1Orp5QOrp5LgKWQLeKVQbEUQCyAvC/AXQIABdHkjEQAPgHARgFQOzkaKmpiQLgqWOqJ5QOsJ5Fri1QFri0CAjVMAAAA1Jg");
	this.shape.setTransform(587.3,156.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32.2,1174.5,377.2);


(lib.w1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00499B","rgba(0,159,232,0)"],[0,0.639],0,-188.7,0,188.8).s().p("EhbvAddMAAAg1JQCADVFrC0QFrC1Orp5QOrp5LgKWQLeKVQbEUQCyAvC/AXQIABdHkjEQAPgHARgFQOzkaKmpiQLgqWOqJ5QOsJ5Fri1QFri0CAjVMAAAA1Jg");
	this.shape.setTransform(587.3,156.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32.2,1174.5,377.2);


(lib.t8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBKIAAg9IgfAAIgbA9IgNAAIAdhBQgMgEgGgJQgHgKAAgOQAAgVAMgMQALgMASAAIAmAAIAACTgAgQg1QgIAJAAAQQAAAOAHAKQAIAHALAAIAcAAIAAhBIgaAAQgNAAgHAJg");
	this.shape.setTransform(-819.5,-82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIALAAIAABBIAdAAQAUAAALAJQAKAMAAATQAAATgKAMQgLALgUAAgAgdBAIAdAAQAPAAAHgJQAHgJAAgOQAAgOgHgJQgHgIgPAAIgdAAg");
	this.shape_1.setTransform(-829.5,-82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIAlAAQARAAALAKQALAKAAATQAAAMgGAIQgFAJgJADQALACAHAJQAHAKAAAOQAAAUgLALQgKAKgTAAgAgcBAIAdAAQANAAAIgIQAHgIAAgPQAAgOgHgIQgGgJgNAAIgfAAgAgcgGIAcAAQALAAAGgIQAHgHAAgNQAAgOgIgHQgHgHgMAAIgZAAg");
	this.shape_2.setTransform(-840.2,-82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA+QgMgOAAgbIAAgoQAAgbAMgPQAMgOAVAAQAVAAANAOQAMAPAAAbIAAAoQAAAbgMAOQgNAOgVAAQgVAAgMgOgAgZg1QgIALAAAWIAAApQAAAWAIALQAJALAQAAQAQAAAJgLQAJgLAAgWIAAgpQAAgWgJgLQgJgLgQAAQgQAAgJALg");
	this.shape_3.setTransform(-851.5,-82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBKIAAiTIAqAAQATAAALAMQALAMAAAUQAAAUgLAKQgLALgTAAIgeAAIAAA+gAgdACIAeAAQAOAAAHgIQAIgJgBgOQABgOgIgKQgHgJgOAAIgeAAg");
	this.shape_4.setTransform(-862,-82);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA+QgMgOAAgbIAAgoQAAgbAMgPQAMgOAVAAQAVAAANAOQAMAPAAAbIAAAoQAAAbgMAOQgNAOgVAAQgVAAgMgOgAgZg1QgIALAAAWIAAApQAAAWAIALQAJALAQAAQAQAAAJgLQAJgLAAgWIAAgpQAAgWgJgLQgJgLgQAAQgQAAgJALg");
	this.shape_5.setTransform(-873.4,-82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBcIAAgkIhbAAIAAAkIgLAAIgBguIAJAAQAGgIAHgVQAHgSABgkIACg2IBFAAIAACJIAOAAIgBAugAgPglQgBAdgGAUQgFAWgIAMIBCAAIAAh+IgsAAg");
	this.shape_6.setTransform(-885.3,-80.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeBBQgNgLABgUIAAgBIALAAQAAAOAJAKQAJAJANAAQAOAAAIgJQAJgIAAgPQAAgQgIgHQgIgHgPAAIgOAAIAAgJIAOAAQAOAAAIgIQAHgHAAgOQAAgOgIgIQgHgIgOAAQgMAAgIAIQgJAJAAANIgLAAIgBAAQAAgTAMgLQAMgLARAAQASAAAMALQALAKAAAUQAAAMgFAIQgGAJgLAFQAMACAGAJQAGAJAAAOQAAAUgMALQgNALgSAAQgRAAgNgLg");
	this.shape_7.setTransform(-896.8,-82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA+QgMgOAAgbIAAgoQAAgbAMgPQAMgOAVAAQAVAAANAOQAMAPAAAbIAAAoQAAAbgMAOQgNAOgVAAQgVAAgMgOgAgZg1QgIALAAAWIAAApQAAAWAIALQAJALAQAAQAQAAAJgLQAJgLAAgWIAAgpQAAgWgJgLQgJgLgQAAQgQAAgJALg");
	this.shape_8.setTransform(-911.6,-82);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkBKIAAiTIBJAAIAAALIg9AAIAACIg");
	this.shape_9.setTransform(-921.5,-82);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBKIAAiTIBNAAIAAALIhBAAIAAA4IA5AAIAAAIIg5AAIAAA+IBBAAIAAAKg");
	this.shape_10.setTransform(-931.2,-82);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhABKIAAiTIAMAAIAACJIAwAAIAAiJIAKAAIAACJIAuAAIAAiJIANAAIAACTg");
	this.shape_11.setTransform(-944.7,-82);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBKIgMgpIg1AAIgMApIgNAAIAviTIAJAAIAvCTgAAXAWIgXhLIAAAAIgWBLIAtAAg");
	this.shape_12.setTransform(-958.2,-82);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIAlAAQARAAALAKQALAKAAATQAAAMgGAIQgFAJgJADQALACAHAJQAHAKAAAOQAAAUgLALQgKAKgTAAgAgcBAIAdAAQANAAAIgIQAHgIAAgPQAAgOgHgIQgGgJgNAAIgfAAgAgcgGIAcAAQALAAAGgIQAHgHAAgNQAAgOgIgHQgHgHgMAAIgZAAg");
	this.shape_13.setTransform(-968.7,-82);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeBKIAAg9IgfAAIgbA9IgNAAIAdhBQgMgEgGgJQgHgKAAgOQAAgVAMgMQALgMASAAIAmAAIAACTgAgQg1QgIAJAAAQQAAAOAHAKQAIAHALAAIAcAAIAAhBIgaAAQgNAAgHAJg");
	this.shape_14.setTransform(-984.2,-82);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnBKIAAiIIgxAAIgBA5QgBAqgHATQgIASgTAAIgEAAIAAgKIADAAQANAAAFgPQAFgQABgmIABhEIBJAAIAACTg");
	this.shape_15.setTransform(-995.8,-82);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAuBcIAAgkIhbAAIAAAkIgLAAIgBguIAJAAQAGgIAHgVQAGgSABgkIADg2IBEAAIAACJIAPAAIgBAugAgPglQgBAdgFAUQgGAWgIAMIBCAAIAAh+IgsAAg");
	this.shape_16.setTransform(-1007.6,-80.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAtBKIAAhBIABg7IAAAAIgqB8IgHAAIgqh8IAAAAIABA7IAABBIgMAAIAAiTIAQAAIAoCBIAAAAIAqiBIAPAAIAACTg");
	this.shape_17.setTransform(-1025.3,-82);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAtBKIAAiTIANAAIAACTgAg4BKIAAiTIAMAAIAABBIAfAAQASAAAKAJQALAMAAATQAAATgLAMQgKALgSAAgAgsBAIAfAAQANAAAGgJQAHgJABgOQgBgOgHgJQgGgIgNAAIgfAAg");
	this.shape_18.setTransform(-1039.8,-82);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAhBKIAAhFIhBAAIAABFIgMAAIAAiTIAMAAIAABGIBBAAIAAhGIAMAAIAACTg");
	this.shape_19.setTransform(-1053.2,-82);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeA+QgMgPAAgbIAAgnQAAgbAMgOQAMgPATAAQATAAAMALQALALAAAXIAAAAIgMAAQAAgRgIgJQgHgIgPAAQgOAAgJALQgIAMAAAWIAAAnQAAAXAIALQAJAMAOAAQAPAAAHgIQAIgJAAgSIAMAAIAAAAQAAAWgMAMQgLALgTAAQgTAAgMgOg");
	this.shape_20.setTransform(-1064.5,-82);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAnBKIgMgpIg1AAIgMApIgNAAIAviTIAJAAIAvCTgAAXAWIgXhLIAAAAIgWBLIAtAAg");
	this.shape_21.setTransform(-1075.3,-82);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhBKIAAiIIhBAAIAACIIgMAAIAAiTIBZAAIAACTg");
	this.shape_22.setTransform(-1086.9,-82);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghA+QgMgOAAgbIAAgoQAAgbAMgPQAMgOAVAAQAVAAANAOQAMAPAAAbIAAAoQAAAbgMAOQgNAOgVAAQgVAAgMgOgAgZg1QgIALAAAWIAAApQAAAWAIALQAJALAQAAQAQAAAJgLQAJgLAAgWIAAgpQAAgWgJgLQgJgLgQAAQgQAAgJALg");
	this.shape_23.setTransform(-1098.6,-82);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIALAAIAABBIAeAAQATAAALAJQAKAMAAATQAAATgKAMQgLALgTAAgAgdBAIAeAAQAOAAAHgJQAHgJAAgOQAAgOgHgJQgHgIgOAAIgeAAg");
	this.shape_24.setTransform(-843.7,-105.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFBKIAAiIIgpAAIAAgLIBdAAIAAALIgpAAIAACIg");
	this.shape_25.setTransform(-854.4,-105.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAtBKIAAiTIAMAAIAACTgAg5BKIAAiTIANAAIAABBIAfAAQARAAALAJQALAMAAATQAAATgLAMQgLALgRAAgAgsBAIAfAAQANAAAHgJQAGgJAAgOQAAgOgGgJQgHgIgNAAIgfAAg");
	this.shape_26.setTransform(-866.8,-105.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpBKIAAiTIBJAAIAAALIg8AAIAAA2IAdAAQATAAALAJQALAMAAATQAAATgLAMQgLALgTAAgAgcBAIAdAAQAOAAAHgJQAHgJAAgOQAAgOgHgJQgHgIgOAAIgdAAg");
	this.shape_27.setTransform(-879.3,-105.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFBKIAAiIIgpAAIAAgLIBdAAIAAALIgpAAIAACIg");
	this.shape_28.setTransform(-894.1,-105.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmBKIAAiTIBNAAIAAALIhBAAIAAA4IA5AAIAAAIIg5AAIAAA+IBBAAIAAAKg");
	this.shape_29.setTransform(-903.6,-105.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA7BKIgohHIgNAAIAABHIgKAAIAAhHIgOAAIgoBHIgQAAIAthLIgphIIAOAAIAlBDIAPAAIAAhDIAKAAIAABDIAOAAIAlhDIAOAAIgpBIIAtBLg");
	this.shape_30.setTransform(-916.8,-105.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AghA+QgMgOAAgbIAAgoQAAgbAMgPQAMgOAVAAQAVAAANAOQAMAPAAAbIAAAoQAAAbgMAOQgNAOgVAAQgVAAgMgOgAgZg1QgIALAAAWIAAApQAAAWAIALQAJALAQAAQAQAAAJgLQAJgLAAgWIAAgpQAAgWgJgLQgJgLgQAAQgQAAgJALg");
	this.shape_31.setTransform(-930.1,-105.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAtBKIAAhBIABg7IAAAAIgqB8IgHAAIgqh8IAAAAIABA7IAABBIgMAAIAAiTIAQAAIAoCBIAAAAIAqiBIAPAAIAACTg");
	this.shape_32.setTransform(-942.9,-105.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgmBKIAAiTIBNAAIAAALIhBAAIAAA4IA5AAIAAAIIg5AAIAAA+IBBAAIAAAKg");
	this.shape_33.setTransform(-958.7,-105.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAhBKIAAh6IgBAAIhAB6IgNAAIAAiTIANAAIAAB6IAAAAIBBh6IAMAAIAACTg");
	this.shape_34.setTransform(-970.3,-105.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAhBKIAAhFIhBAAIAABFIgMAAIAAiTIAMAAIAABGIBBAAIAAhGIAMAAIAACTg");
	this.shape_35.setTransform(-982.6,-105.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgmBKIAAiTIBNAAIAAALIhBAAIAAA4IA5AAIAAAIIg5AAIAAA+IBBAAIAAAKg");
	this.shape_36.setTransform(-993.1,-105.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAfBKIAAhDIgQAEQgIACgIAAQgUAAgLgLQgKgJAAgYIAAgqIAMAAIAAAqQAAATAHAIQAHAGAPAAQAHAAAIgCIARgCIAAhHIAMAAIAACTg");
	this.shape_37.setTransform(-1004.5,-105.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgmBKIAAiTIBNAAIAAALIhBAAIAAA4IA5AAIAAAIIg5AAIAAA+IBBAAIAAAKg");
	this.shape_38.setTransform(-1014.6,-105.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAnBKIAAiIIgxAAIgBA5QgBAqgHATQgIASgTAAIgEAAIAAgKIADAAQANAAAFgPQAFgQABgmIABhEIBJAAIAACTg");
	this.shape_39.setTransform(-1026.8,-105.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AghA+QgMgOAAgbIAAgoQAAgbAMgPQAMgOAVAAQAVAAANAOQAMAPAAAbIAAAoQAAAbgMAOQgNAOgVAAQgVAAgMgOgAgZg1QgIALAAAWIAAApQAAAWAIALQAJALAQAAQAQAAAJgLQAJgLAAgWIAAgpQAAgWgJgLQgJgLgQAAQgQAAgJALg");
	this.shape_40.setTransform(-1037.8,-105.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAtBKIAAhBIABg7IAAAAIgqB8IgHAAIgqh8IAAAAIABA7IAABBIgMAAIAAiTIAQAAIAoCBIAAAAIAqiBIAPAAIAACTg");
	this.shape_41.setTransform(-1050.7,-105.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAnBKIgMgpIg1AAIgMApIgNAAIAviTIAJAAIAvCTgAAXAWIgXhLIAAAAIgWBLIAtAAg");
	this.shape_42.setTransform(-1063.3,-105.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeA+QgMgPAAgbIAAgnQAAgbAMgOQAMgPATAAQATAAAMALQALALAAAXIAAAAIgMAAQAAgRgIgJQgHgIgPAAQgOAAgJALQgIAMAAAWIAAAnQAAAXAIALQAJAMAOAAQAPAAAHgIQAIgJAAgSIAMAAIAAAAQAAAWgMAMQgLALgTAAQgTAAgMgOg");
	this.shape_43.setTransform(-1074,-105.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1116.4,-122.2,314.5,55.4);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBPIAAgXIAUAAIAAAXgAgLAjQAAgQADgGQACgGAJgIIAPgTQAFgHAAgJQAAgMgGgGQgGgGgLAAQgIAAgHAFQgHAGAAAKIgUAAIgBgBQAAgRANgKQAMgLASAAQAVAAALALQAMALAAATQAAAOgIALQgHAMgNAKQgFAGgCAEIgBAPg");
	this.shape.setTransform(-873.8,-161.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBOIAAiKIgzAAIAAgRIB5AAIAAARIgzAAIAACKg");
	this.shape_1.setTransform(-885.4,-161.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BOIAAibIA6AAQAZAAAOANQAOANAAAVQAAAVgOALQgOANgZAAIglAAIAAA/gAgiAAIAlAAQAQAAAIgIQAHgJAAgNQAAgNgHgIQgIgJgQAAIglAAg");
	this.shape_2.setTransform(-898.5,-161.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsA9QgRgTAAgdIAAgaQAAgcARgTQARgTAbAAQAbAAASATQARATAAAcIAAAaQAAAdgRATQgSATgbAAQgbAAgRgTgAgdgwQgLANAAAWIAAAaQAAAWALANQALAOASABQASAAAMgOQALgOAAgWIAAgaQAAgWgLgNQgMgOgSAAQgSAAgLAOg");
	this.shape_3.setTransform(-913.4,-161.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBOIAAgXQgZAAgRgQQgQgPAAgYQAAgVAQgQQARgPAZAAIAAgZIATAAIAAAZQAZAAAQAQQARAPAAAVQAAAYgRAPQgQAPgZABIAAAXgAAKgjIAABIIAAABQASAAAJgKQAJgLAAgRQAAgPgJgKQgJgKgSAAgAglgZQgJAKAAAPQAAASAJAKQAKAKARAAIABgBIAAhIIgBAAQgRAAgKAKg");
	this.shape_4.setTransform(-928.6,-161.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA3BOIAAhzIAAgBIgvB0IgNAAIgxh3IAAAAIAAB3IgWAAIAAibIAcAAIAwB9IAAAAIAzh9IAaAAIAACbg");
	this.shape_5.setTransform(-945.9,-161.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsA9QgRgTAAgdIAAgaQAAgcARgTQARgTAbAAQAbAAASATQARATAAAcIAAAaQAAAdgRATQgSATgbAAQgbAAgRgTgAgdgwQgLANAAAWIAAAaQAAAWALANQALAOASABQASAAAMgOQALgOAAgWIAAgaQAAgWgLgNQgMgOgSAAQgSAAgLAOg");
	this.shape_6.setTransform(-962.9,-161.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAhBOIg4hHIgOAAIAABHIgVAAIAAibIAVAAIAABGIALAAIA5hGIAYAAIAAABIg+BKIBCBPIAAABg");
	this.shape_7.setTransform(-976.5,-161.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoA9QgRgTAAgdIAAgaQAAgdARgSQAQgTAZAAQAaAAAQAOQAQAOgBAYIAAAAIgUAAQAAgQgKgKQgKgJgRAAQgQAAgKAOQgLAOAAAVIAAAaQAAAWALAOQAKAOAQAAQARAAAKgJQAKgKAAgQIAUAAIAAAAQABAWgQAPQgQAPgaAAQgZAAgQgTg");
	this.shape_8.setTransform(-991.1,-161.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAlBOIAAh1IAAgBIhKB2IgVAAIAAibIAVAAIAAB1IABABIBJh2IAWAAIAACbg");
	this.shape_9.setTransform(-1005.9,-161.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA5BhIAAgnIhxAAIAAAnIgVAAIAAg3IALAAQAOAAAHgUQAHgTACgkIADg/IBZAAIAACKIAWAAIAAA3gAgPghQgBAbgEARQgEAUgJALIBFAAIAAh5IgwAAg");
	this.shape_10.setTransform(-1022.1,-159.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAlBOIAAh1IAAgBIhKB2IgVAAIAAibIAVAAIAAB1IABABIBJh2IAWAAIAACbg");
	this.shape_11.setTransform(-1043.7,-161.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1116.4,-176.3,312.9,29.8);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AArBOIgOgpIg5AAIgOApIgWAAIA5ibIAQAAIA3CbgAAXAUIgXhBIAAAAIgVBBIAsAAg");
	this.shape.setTransform(-830.5,-195.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBOIg4hHIgOAAIAABHIgVAAIAAibIAVAAIAABGIAMAAIA3hGIAZAAIAAABIg+BKIBCBPIAAABg");
	this.shape_1.setTransform(-843.6,-195.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoA9QgRgTAAgcIAAgbQAAgcARgUQAQgSAZAAQAaAAAQAOQAQAOgBAYIAAAAIgUAAQAAgRgKgJQgKgJgRAAQgQAAgKAOQgLAOAAAVIAAAbQAAAUALAPQAKAOAQAAQARAAAKgJQAKgKAAgRIAUAAIAAABQABAWgQAPQgQAPgaAAQgZAAgQgTg");
	this.shape_2.setTransform(-858.2,-195.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBOIAAibIBcAAIAAARIhIAAIAAAzIA+AAIAAAOIg+AAIAAA4IBJAAIAAARg");
	this.shape_3.setTransform(-870.7,-195.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAmBOIAAiKIhLAAIAACKIgVAAIAAibIB1AAIAACbg");
	this.shape_4.setTransform(-885.1,-195.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsA9QgRgTAAgcIAAgbQAAgcARgTQARgTAbAAQAbAAASATQARATAAAcIAAAbQAAAcgRATQgSATgbAAQgbAAgRgTgAgdgwQgLANAAAWIAAAbQAAAVALANQALAOASAAQASAAAMgNQALgOAAgVIAAgbQAAgWgLgNQgMgOgSAAQgSAAgLAOg");
	this.shape_5.setTransform(-905.8,-195.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag3BOIAAibIAzAAQAWAAAOALQAOALAAAVQAAAKgGAIQgHAIgKAEQAPACAJAJQAJALAAAQQAAAVgOALQgOAMgYAAgAgiA9IAmAAQAPAAAIgHQAIgHAAgNQAAgNgIgIQgIgIgOgBIgCAAIglAAgAgigKIAiAAQAKAAAHgHQAIgGAAgMQAAgMgIgHQgIgGgNAAIgeAAg");
	this.shape_6.setTransform(-919.7,-195.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJBOIAAiKIgzAAIAAgRIB5AAIAAARIgzAAIAACKg");
	this.shape_7.setTransform(-933.8,-195.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoA9QgRgTAAgcIAAgbQAAgcARgUQAQgSAZAAQAaAAAQAOQAQAOgBAYIAAAAIgUAAQAAgRgKgJQgKgJgRAAQgQAAgKAOQgLAOAAAVIAAAbQAAAUALAPQAKAOAQAAQARAAAKgJQAKgKAAgRIAUAAIAAABQABAWgQAPQgQAPgaAAQgZAAgQgTg");
	this.shape_8.setTransform(-947.1,-195.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag3BOIAAibIAzAAQAWAAAOALQAOALAAAVQAAAKgGAIQgHAIgKAEQAPACAJAJQAJALAAAQQAAAVgOALQgOAMgYAAgAgiA9IAmAAQAPAAAIgHQAIgHAAgNQAAgNgIgIQgIgIgOgBIgCAAIglAAgAgigKIAiAAQAKAAAHgHQAIgGAAgMQAAgMgIgHQgIgGgNAAIgeAAg");
	this.shape_9.setTransform(-960.7,-195.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBOIgKgDIADgPIAJABIAJABQAJAAAFgEQAFgFADgHIAFgJIg1hzIAYAAIAeBJIAHATIAAAAIAlhcIAZAAIg5CBQgFANgIAHQgIAIgRAAg");
	this.shape_10.setTransform(-975.2,-195.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAkBOIAAhBQgKADgKABQgJACgLAAQgaAAgOgLQgNgKABgZIAAgyIAUAAIAAAyQAAARAIAHQAHAFARAAQAJAAAKgBIAVgDIAAhLIAWAAIAACbg");
	this.shape_11.setTransform(-989.7,-195.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAZIAIggIAAgRIATAAIAAASIgPAfg");
	this.shape_12.setTransform(-1004.9,-187.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBOIgKgDIADgPIAJABIAJABQAJAAAFgEQAFgFADgHIAFgJIg1hzIAYAAIAeBJIAHATIAAAAIAlhcIAZAAIg5CBQgFANgIAHQgIAIgRAAg");
	this.shape_13.setTransform(-1013.8,-195.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgqBFQgRgMAAgWIAAgBIAVAAQAAAMAKAJQALAIARAAQARAAALgIQALgIAAgMQAAgPgKgHQgKgHgTAAIgSAAIAAgOIASAAQASAAAJgIQAJgHAAgMQAAgMgJgIQgKgHgRAAQgPAAgLAHQgKAHAAAMIgUAAIAAAAQgBgUAQgMQARgLAYAAQAZAAAQALQAQAMAAAVQAAAMgHAIQgHAJgNAGQAOACAIAJQAIAJAAAOQAAAWgRAMQgSAMgZAAQgZAAgRgLg");
	this.shape_14.setTransform(-1028.2,-195.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AArBOIgOgpIg5AAIgOApIgVAAIA4ibIAQAAIA3CbgAAXAUIgXhBIAAAAIgVBBIAsAAg");
	this.shape_15.setTransform(-1042.5,-195.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAsBOIAAiKIg2AAIAAA5QAAApgMAUQgLAUgZAAIgGAAIAAgRIAEAAQAPAAAHgPQAGgPAAgiIAAhKIBhAAIAACbg");
	this.shape_16.setTransform(-1057.8,-195.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AguBOIAAibIBdAAIAAARIhJAAIAACKg");
	this.shape_17.setTransform(-1070.4,-195.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag3BOIAAibIAzAAQAWAAAOALQAOALAAAVQAAAKgGAIQgHAIgKAEQAPACAJAJQAJALAAAQQAAAVgOALQgOAMgYAAgAgiA9IAmAAQAPAAAIgHQAIgHAAgNQAAgNgIgIQgIgIgOgBIgCAAIglAAgAgigKIAiAAQAKAAAHgHQAIgGAAgMQAAgMgIgHQgIgGgNAAIgeAAg");
	this.shape_18.setTransform(-1088.9,-195.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1116.4,-210.3,312.9,29.8);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1861AC").s().p("AgrA4IAAhvIAnAAQATAAAMAHQAMAIAAAQQAAAIgEAGQgDAHgIADQAKAAAEAHQAGAHAAAJQAAAQgMAJQgLAIgVAAgAgQAkIAQAAQAJAAAEgDQAEgEAAgHQAAgHgDgEQgFgEgIAAIgRAAgAgQgIIANAAQAHAAAEgEQAFgDAAgGQAAgIgFgDQgEgDgIAAIgMAAg");
	this.shape.setTransform(40.5,193.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1861AC").s().p("AghAtQgOgOAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOAOQgNANgVAAQgUAAgNgNgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgIgKAAQgJAAgGAIg");
	this.shape_1.setTransform(29.8,193.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1861AC").s().p("AgMA4IAAhbIgeAAIAAgUIBVAAIAAAUIgeAAIAABbg");
	this.shape_2.setTransform(19.8,193.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1861AC").s().p("AAUA4IAAguIgoAAIAAAuIgaAAIAAhvIAaAAIAAAvIAoAAIAAgvIAbAAIAABvg");
	this.shape_3.setTransform(9.7,193.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1861AC").s().p("AAYA4IgHgWIgiAAIgGAWIgaAAIAlhvIAZAAIAlBvgAAMAOIgMgnIAAAAIgLAnIAXAAg");
	this.shape_4.setTransform(-0.9,193.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1861AC").s().p("AgrA4IAAhvIAoAAQASAAAMAHQANAIAAAQQAAAIgFAGQgDAHgIADQAKAAAFAHQAEAHAAAJQAAAQgLAJQgLAIgVAAgAgQAkIAQAAQAIAAAFgDQAEgEAAgHQAAgHgDgEQgFgEgIAAIgRAAgAgQgIIANAAQAHAAAEgEQAFgDAAgGQAAgIgFgDQgEgDgHAAIgNAAg");
	this.shape_5.setTransform(-11,193.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1861AC").s().p("AgrA4IAAhvIAsAAQAUAAALAKQANAKAAARQAAARgNAIQgLAKgUAAIgSAAIAAAngAgRgBIASAAQAIAAAEgFQAFgEAAgIQAAgHgFgFQgEgFgIAAIgSAAg");
	this.shape_6.setTransform(-21.4,193.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1861AC").s().p("AgmA4IAAhvIBNAAIAAAUIgzAAIAAAYIArAAIAAATIgrAAIAAAcIAzAAIAAAUg");
	this.shape_7.setTransform(-31.1,193.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1861AC").s().p("AgfAtQgNgNAAgUIAAgWQAAgVAMgNQANgNATAAQAVAAALALQAMALABAUIAAABIgaAAQAAgMgFgFQgEgGgKAAQgIABgFAGQgFAIAAALIAAAXQAAALAGAHQAFAIAIAAQAKAAAEgFQAEgGAAgLIAaAAIAAABQgBAUgLALQgLAKgVAAQgTAAgNgNg");
	this.shape_8.setTransform(-41,193.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1861AC").s().p("AAVA4IAAguIgpAAIAAAuIgaAAIAAhvIAaAAIAAAvIApAAIAAgvIAaAAIAABvg");
	this.shape_9.setTransform(-51.8,193.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1861AC").s().p("AghAtQgOgOAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOAOQgNANgVAAQgUAAgNgNgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgIgKAAQgJAAgGAIg");
	this.shape_10.setTransform(-62.9,193.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1861AC").s().p("AAQA4IgYgtIgMAAIAAAtIgaAAIAAhvIAaAAIAAAsIAJAAIAXgsIAhAAIgkAzIAmA8g");
	this.shape_11.setTransform(-73,193.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1861AC").s().p("AgeAyQgNgIABgRIAAAAIAaAAQAAAFAEAEQAFAEAHAAQAHAAAFgEQAFgEAAgGQAAgJgEgDQgFgEgIAAIgNAAIAAgSIANAAQAIAAADgDQAEgEAAgHQAAgFgEgEQgEgDgHgBQgGABgEADQgFADAAAFIgZAAIgBAAQAAgOAMgJQAMgJARAAQASAAAMAJQALAIAAAPQAAAIgEAHQgFAGgIAEQAJABAFAHQAFAHAAAJQAAARgMAIQgNAJgSAAQgRAAgNgIg");
	this.shape_12.setTransform(-54.7,174.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1861AC").s().p("AgmA4IAAhvIBNAAIAAAUIgyAAIAAAYIAqAAIAAATIgqAAIAAAcIAyAAIAAAUg");
	this.shape_13.setTransform(-63.9,174.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1861AC").s().p("AgqA4IAAhvIBLAAIAAAUIgwAAIAAATIAPAAQATAAAMAKQAMAIAAARQAAARgMAKQgNAKgSAAgAgPAkIAPAAQAHAAAFgFQAFgFAAgHQAAgHgFgFQgFgEgHAAIgPAAg");
	this.shape_14.setTransform(-73.5,174.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,161.4,181.5,44.2);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbBJIAAhVIgBgBIg0BWIgQAAIAAhwIAQAAIAABVIAAAAIA1hVIAQAAIAABwgAgQg5QgFgFAAgJIAAAAIAMAAQAAAFACADQADADAEAAQAFAAADgDQADgDAAgFIAMAAIAAAAQAAAJgGAFQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(1,142.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAtQgMgOAAgVIAAgTQAAgUAMgOQANgOATAAQATAAANAOQANAOAAAUIAAATQAAAVgNAOQgNANgTAAQgTAAgNgNgAgVgiQgIAKAAAPIAAATQAAAPAIALQAIAJANABQANgBAIgJQAJgLAAgPIAAgTQAAgPgJgKQgIgKgNAAQgNAAgIAKg");
	this.shape_1.setTransform(-10.1,144.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA4IAAhjIgmAAIAAgMIBYAAIAAAMIglAAIAABjg");
	this.shape_2.setTransform(-20.3,144.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAtQgNgOAAgVIAAgTQAAgUANgOQAMgOATAAQATAAANAOQANAOAAAUIAAATQAAAVgNAOQgNANgTAAQgTAAgMgNgAgVgiQgIAKAAAPIAAATQAAAPAIALQAIAJANABQANgBAIgJQAJgLAAgPIAAgTQAAgPgJgKQgIgKgNAAQgNAAgIAKg");
	this.shape_3.setTransform(-30.5,144.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAgA4IAAhjIgnAAIgBApQAAAdgIAPQgIAOgSAAIgEAAIAAgMIADAAQALAAAEgLQAFgLAAgYIAAg1IBGAAIAABvg");
	this.shape_4.setTransform(-42,144.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAtQgMgOAAgVIAAgTQAAgUAMgOQAMgOASAAQATAAALAKQAMALgBAQIAAABIgPAAQAAgMgHgHQgHgHgMAAQgLAAgIALQgIAKAAAPIAAATQAAAPAIALQAIAKALAAQAMAAAHgHQAHgGAAgNIAPAAIAAABQABAPgMAMQgLAKgTAAQgSAAgMgNg");
	this.shape_5.setTransform(-52.1,144.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbA4IAAhUIgBgBIg0BVIgQAAIAAhvIAQAAIAABUIAAAAIA1hUIAQAAIAABvg");
	this.shape_6.setTransform(-62.9,144.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYA4IgpgzIgKAAIAAAzIgPAAIAAhvIAPAAIAAAyIAJAAIAogyIARAAIABAAIgtA2IAwA5IAAAAg");
	this.shape_7.setTransform(-73,144.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1861AC").s().p("AAUBKIAAhHIAAAAIgnBHIgbAAIAAhvIAbAAIAABDIAAAAIAnhDIAbAAIAABvgAgTg3QgIgHABgKIAAgBIATAAQgBAEADACQACADADAAQAFAAACgDQACgCAAgEIATAAIAAABQABAKgJAHQgHAGgNAAQgMAAgHgGg");
	this.shape_8.setTransform(57.1,123.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1861AC").s().p("AghAsQgOgNAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOANQgNAOgVAAQgUAAgNgOgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgHgKgBQgJABgGAHg");
	this.shape_9.setTransform(46.1,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1861AC").s().p("AgqA4IAAhvIAmAAQAUAAAMAHQAMAIgBAQQAAAIgDAGQgFAHgHADQAKAAAEAHQAFAHABAJQAAAQgMAJQgLAIgVAAgAgQAkIAQAAQAIAAAFgDQAEgEAAgHQAAgHgEgEQgEgEgHAAIgSAAgAgQgIIANAAQAHAAAFgEQAEgDAAgGQAAgIgEgDQgFgDgIAAIgMAAg");
	this.shape_10.setTransform(35.7,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1861AC").s().p("AghAsQgOgNAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOANQgNAOgVAAQgUAAgNgOgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgHgKgBQgJABgGAHg");
	this.shape_11.setTransform(25,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1861AC").s().p("AAVA4IAAguIgpAAIAAAuIgaAAIAAhvIAaAAIAAAvIApAAIAAgvIAaAAIAABvg");
	this.shape_12.setTransform(13.9,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1861AC").s().p("AghAsQgOgNAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOANQgNAOgVAAQgUAAgNgOgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgHgKgBQgJABgGAHg");
	this.shape_13.setTransform(2.8,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1861AC").s().p("AgrA4IAAhvIArAAQAVAAAMAKQALAKABARQgBARgLAIQgMAKgVAAIgRAAIAAAngAgRgBIARAAQAJAAAEgFQAFgEAAgIQAAgHgFgFQgEgFgJAAIgRAAg");
	this.shape_14.setTransform(-7.7,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1861AC").s().p("AgZA5IgEAAIAAgUIADAAIADAAQAGAAAEgDQADgCACgGIABgDIgphPIAcAAIAWAyIAAAAIABAAIATgyIAbAAIgnBYQgEAMgGAGQgHAHgNAAg");
	this.shape_15.setTransform(-18.2,125.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1861AC").s().p("AAYA4IAAhbIgaAAIAAAeQgBAggJAPQgKAOgVAAIgGAAIAAgUIADAAQALgBADgJQADgIAAgXIAAgyIBPAAIAABvg");
	this.shape_16.setTransform(-29.1,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1861AC").s().p("AAYA4IgHgWIgiAAIgGAWIgbAAIAmhvIAaAAIAlBvgAALAOIgLgnIAAAAIgKAnIAVAAg");
	this.shape_17.setTransform(-39.5,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1861AC").s().p("AAUA4IAAhEIAAAAIgoBEIgaAAIAAhvIAaAAIAABEIABAAIAnhEIAbAAIAABvg");
	this.shape_18.setTransform(-50.2,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1861AC").s().p("AgkA4IAAhvIBJAAIAAAUIgvAAIAABbg");
	this.shape_19.setTransform(-59.9,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAsQgMgNAAgVIAAgTQAAgUAMgOQAMgOASAAQATAAALALQAMAKgBAQIAAABIgPAAQAAgMgHgHQgHgHgMAAQgLAAgIAKQgIALAAAPIAAATQAAAQAIAJQAIALALAAQAMAAAHgHQAHgGAAgNIAPAAIAAABQABAQgMALQgLAKgTAAQgSAAgMgOg");
	this.shape_20.setTransform(-73.5,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,111.9,181.5,44.2);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiA4IAAhvIBEAAIAAAMIg0AAIAAAkIAtAAIAAALIgtAAIAAAoIA1AAIAAAMg");
	this.shape.setTransform(23.4,121.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA4IAAhUIAAgBIg1BVIgQAAIAAhvIAQAAIAABUIABAAIA0hUIAQAAIAABvg");
	this.shape_1.setTransform(13,121.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbA4IAAgyIg1AAIAAAyIgQAAIAAhvIAQAAIAAAzIA1AAIAAgzIAQAAIAABvg");
	this.shape_2.setTransform(1.7,121.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiA4IAAhvIBDAAIAAAMIg0AAIAAAkIAtAAIAAALIgtAAIAAAoIA1AAIAAAMg");
	this.shape_3.setTransform(-7.9,121.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbA4IAAgyIg2AAIAAAyIgPAAIAAhvIAPAAIAAAzIA2AAIAAgzIAQAAIAABvg");
	this.shape_4.setTransform(-18.3,121.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAsA4Iggg0IgEAAIAAA0IgOAAIAAg0IgFAAIggA0IgTAAIAmg6Igjg1IASAAIAeAxIAFAAIAAgxIAOAAIAAAxIAEAAIAegxIASAAIgjA1IAmA6g");
	this.shape_5.setTransform(-30.6,121.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfA4IgKgdIgpAAIgKAdIgPAAIAohvIAMAAIAnBvgAAQAOIgQgvIAAAAIgQAvIAgAAg");
	this.shape_6.setTransform(-42.2,121.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAgA4IAAhjIgnAAIgBApQAAAdgIAPQgIAOgSAAIgEAAIAAgMIADAAQALAAAEgLQAFgLAAgYIAAg1IBGAAIAABvg");
	this.shape_7.setTransform(-53.3,121.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoA4IAAhvIAlAAQAQAAAKAHQAKAIAAAPQAAAIgEAFQgFAGgHADQALACAGAGQAHAIAAALQAAAQgKAIQgLAIgRAAgAgZAsIAcAAQALAAAGgFQAFgFAAgKQAAgJgGgGQgGgGgKAAIgBAAIgbAAgAgZgHIAZAAQAHAAAFgFQAGgFAAgIQAAgJgGgFQgGgEgJAAIgWAAg");
	this.shape_8.setTransform(-63.1,121.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghA4IgHgBIACgMIAGACIAHAAQAGAAAEgDQAEgDACgGIADgGIgmhTIASAAIAWA1IAEANIAAAAIAbhCIASAAIgpBdQgEAKgFAFQgGAFgMAAg");
	this.shape_9.setTransform(-73.7,121.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1861AC").s().p("AgmA4IAAhvIBNAAIAAAUIgyAAIAAAYIAqAAIAAATIgqAAIAAAcIAyAAIAAAUg");
	this.shape_10.setTransform(58.7,102.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1861AC").s().p("AghAsQgOgNAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOANQgNAOgVAAQgUAAgNgOgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgHgKgBQgJABgGAHg");
	this.shape_11.setTransform(48.4,102.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1861AC").s().p("AAUA4IAAguIgnAAIAAAuIgbAAIAAhvIAbAAIAAAvIAnAAIAAgvIAbAAIAABvg");
	this.shape_12.setTransform(37.4,102.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1861AC").s().p("AAUA4IAAguIgnAAIAAAuIgbAAIAAhvIAbAAIAAAvIAnAAIAAgvIAbAAIAABvg");
	this.shape_13.setTransform(26.1,102.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1861AC").s().p("AghAsQgOgNAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOANQgNAOgVAAQgUAAgNgOgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgHgKgBQgJABgGAHg");
	this.shape_14.setTransform(15,102.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1861AC").s().p("AAUA4IAAhEIAAAAIgnBEIgbAAIAAhvIAbAAIAABEIAAAAIAnhEIAbAAIAABvg");
	this.shape_15.setTransform(4,102.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1861AC").s().p("AAdBGIAAgbIhTAAIAAhwIAaAAIAABbIAoAAIAAhbIAaAAIAABbIARAAIgBAwg");
	this.shape_16.setTransform(-7.5,103.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1861AC").s().p("AAYA4IgHgWIgiAAIgGAWIgbAAIAmhvIAaAAIAlBvgAALAOIgLgnIAAAAIgKAnIAVAAg");
	this.shape_17.setTransform(-18.8,102.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1861AC").s().p("AgrA4IAAhvIAnAAQAUAAALAHQAMAIAAAQQAAAIgDAGQgEAHgIADQAKAAAEAHQAGAHAAAJQAAAQgMAJQgLAIgVAAgAgQAkIAQAAQAJAAAEgDQAEgEAAgHQAAgHgEgEQgDgEgJAAIgRAAgAgQgIIANAAQAHAAAFgEQAEgDAAgGQAAgIgEgDQgFgDgIAAIgMAAg");
	this.shape_18.setTransform(-28.9,102.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1861AC").s().p("AghAsQgOgNAAgVIAAgTQAAgUAOgOQANgOAUAAQAVAAANAOQAOAOAAAUIAAATQAAAVgOANQgNAOgVAAQgUAAgNgOgAgPgdQgGAIAAAMIAAATQAAAMAGAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgMgFgIQgGgHgKgBQgJABgGAHg");
	this.shape_19.setTransform(-39.6,102.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1861AC").s().p("AAUA4IAAguIgoAAIAAAuIgaAAIAAhvIAaAAIAAAvIAoAAIAAgvIAbAAIAABvg");
	this.shape_20.setTransform(-50.7,102.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1861AC").s().p("AAUA4IAAguIgoAAIAAAuIgaAAIAAhvIAaAAIAAAvIAoAAIAAgvIAbAAIAABvg");
	this.shape_21.setTransform(-61.9,102.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1861AC").s().p("AAUA4IAAhEIAAAAIgoBEIgaAAIAAhvIAaAAIAABEIABAAIAnhEIAbAAIAABvg");
	this.shape_22.setTransform(-73.2,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,89.4,181.5,44.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1861AC").s().p("AAfBVIAAhoIgBAAIg8BoIgoAAIAAipIAoAAIAABoIABAAIA8hoIAoAAIAACpg");
	this.shape.setTransform(-840.2,-230.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1861AC").s().p("AgTBVIAAiKIgsAAIAAgfIB/AAIAAAfIgtAAIAACKg");
	this.shape_1.setTransform(-855.2,-230.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1861AC").s().p("AgvBEQgUgUAAgfIAAghQAAgfATgUQATgTAdAAQAgAAARAQQARAQACAeIAAABIgmAAQgBgRgHgIQgGgIgQAAQgMAAgIALQgHALgBARIAAAiQAAASAJALQAIALANAAQAOAAAHgIQAFgHABgRIAnAAIAAABQgBAegRAPQgRAQgfAAQgeAAgTgTg");
	this.shape_2.setTransform(-869.5,-230.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1861AC").s().p("AgzBDQgUgVAAgfIAAgdQAAgfAUgVQAUgUAfAAQAfAAAVAUQAUAVAAAfIAAAdQAAAfgUAVQgUAUggAAQgeAAgVgUgAgXgsQgIALAAATIAAAdQAAASAIAMQAJAMAOAAQAPAAAJgMQAIgMAAgSIAAgdQAAgSgIgMQgJgMgPAAQgPAAgIAMg");
	this.shape_3.setTransform(-885.5,-230.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1861AC").s().p("AAcBVIgcg7IgdA7IguAAIAzhVIgxhUIAtAAIAcA6IAag6IAuAAIgxBUIA0BVg");
	this.shape_4.setTransform(-901.3,-230.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1861AC").s().p("AgmBWIgFgBIgBgeIAEAAIAFAAQAKAAAFgDQAEgEADgJIACgEIg+h4IAqAAIAiBKIABABIAAAAIAdhLIApAAIg6CGQgIARgJAKQgLAKgTAAg");
	this.shape_5.setTransform(-916.6,-230.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1861AC").s().p("AgwBEQgTgUAAgfIAAghQAAgfATgUQATgTAdAAQAgAAARAQQARAQACAeIAAABIgnAAQgBgRgGgIQgHgIgPAAQgMAAgIALQgIALAAARIAAAiQAAASAJALQAJALAMAAQAPAAAFgIQAHgHAAgRIAnAAIAAABQgBAegRAPQgQAQggAAQgdAAgVgTg");
	this.shape_6.setTransform(-931.8,-230.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1861AC").s().p("Ag6BVIAAipIB1AAIAAAfIhNAAIAAAkIBBAAIAAAdIhBAAIAAAqIBNAAIAAAfg");
	this.shape_7.setTransform(-951.9,-230.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1861AC").s().p("AAfBVIAAhoIgBAAIg8BoIgoAAIAAipIAoAAIAABoIABAAIA8hoIAoAAIAACpg");
	this.shape_8.setTransform(-967.6,-230.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1861AC").s().p("AAgBVIAAhFIg+AAIAABFIgoAAIAAipIAoAAIAABIIA+AAIAAhIIAmAAIAACpg");
	this.shape_9.setTransform(-984.3,-230.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1861AC").s().p("Ag6BVIAAipIB1AAIAAAfIhNAAIAAAkIBBAAIAAAdIhBAAIAAAqIBNAAIAAAfg");
	this.shape_10.setTransform(-999.1,-230.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1861AC").s().p("ABMBpIAAgpIi/AAIAAioIAoAAIAACKIAsAAIAAiKIAlAAIAACKIAsAAIAAiKIAnAAIAACKIAaAAIgCBHg");
	this.shape_11.setTransform(-1018.6,-228.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1861AC").s().p("AgmBWIgFgBIgBgeIAEAAIAFAAQAKAAAFgDQAEgEADgJIACgEIg+h4IAqAAIAiBKIABABIAAAAIAdhLIApAAIg6CGQgIARgJAKQgLAKgTAAg");
	this.shape_12.setTransform(-1039.1,-230.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1861AC").s().p("ABMBpIAAgpIi/AAIAAioIAoAAIAACKIArAAIAAiKIAnAAIAACKIArAAIAAiKIAnAAIAACKIAaAAIgCBHg");
	this.shape_13.setTransform(-1058.8,-228.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1861AC").s().p("AgzBDQgUgVAAgfIAAgdQAAgfAUgVQAUgUAfAAQAfAAAVAUQAUAVAAAfIAAAdQAAAfgUAVQgUAUggAAQgeAAgVgUgAgXgsQgIALAAATIAAAdQAAASAIAMQAJAMAOAAQAPAAAJgMQAIgMAAgSIAAgdQAAgSgIgMQgJgMgPAAQgPAAgIAMg");
	this.shape_14.setTransform(-1079.9,-230.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1116.4,-249.3,312.9,35.7);


(lib.Symbol6s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA4IAAhvIBHAAIAAARIgxAAIAAAdIApAAIAAAPIgpAAIAAAhIAxAAIAAARg");
	this.shape.setTransform(44.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA4IAAhvIBHAAIAAARIgxAAIAAAdIApAAIAAAPIgpAAIAAAhIAxAAIAAARg");
	this.shape_1.setTransform(35.1,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA4IAAgvIgtAAIAAAvIgWAAIAAhvIAWAAIAAAwIAtAAIAAgwIAWAAIAABvg");
	this.shape_2.setTransform(24.3,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA4IAAhvIBIAAIAAARIgyAAIAAAXIATAAQATAAAMAKQALAIAAAQQAAARgLAKQgNAKgSAAgAgTAnIATAAQAJAAAFgGQAFgGAAgIQAAgIgFgFQgFgGgJAAIgTAAg");
	this.shape_3.setTransform(13.5,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAtQgNgOAAgVIAAgTQAAgUANgOQANgOAUAAQAUAAAOAOQANAOAAAUIAAATQAAAVgNAOQgOANgUAAQgUAAgNgNgAgQgfQgHAJAAANIAAATQAAANAHAJQAGAIAKAAQALAAAHgIQAGgJABgNIAAgTQgBgNgGgJQgHgIgLAAQgLAAgFAIg");
	this.shape_4.setTransform(2.2,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpA4IAAhvIApAAQAUAAALAKQALAKAAAQQAAAQgLAIQgLAKgUAAIgTAAIAAApgAgTgBIATAAQAKAAAFgFQAEgFAAgIQAAgIgEgGQgFgFgKAAIgTAAg");
	this.shape_5.setTransform(-8.7,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA/IAAgNIhCAAIAAANIgYAAIAAgfIAHAAQALAAAFgLQAFgLADgZIAFgvIBBAAIAABeIALAAIAAAfgAgCgPQgDAPgDAMQgDAMgFAIIAmAAIAAhMIgWAAg");
	this.shape_6.setTransform(-20.1,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAtQgNgOAAgVIAAgTQAAgUANgOQANgOAUAAQAUAAANAOQAOAOAAAUIAAATQAAAVgNAOQgOANgUAAQgUAAgNgNgAgQgfQgHAJAAANIAAATQAAANAHAJQAGAIAKAAQALAAAHgIQAGgJAAgNIAAgTQAAgNgGgJQgHgIgLAAQgKAAgGAIg");
	this.shape_7.setTransform(-31.9,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWA4IAAheIgsAAIAABeIgWAAIAAhvIBaAAIAABvg");
	this.shape_8.setTransform(-43.5,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA4IAAhvIAXAAIAAAoIASAAQATAAALAKQAMAIAAAQQAAARgMAKQgLAKgTAAgAgSAnIASAAQAJAAAFgGQAFgGAAgIQAAgIgFgFQgFgGgJAAIgSAAg");
	this.shape_9.setTransform(26.9,-8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKA4IAAheIggAAIAAgRIBVAAIAAARIggAAIAABeg");
	this.shape_10.setTransform(16.6,-8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaA4IgIgYIgjAAIgIAYIgYAAIAnhvIAVAAIAmBvgAAMAOIgMgmIAAAAIgMAmIAYAAg");
	this.shape_11.setTransform(6.5,-8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWA4IAAgvIgsAAIAAAvIgWAAIAAhvIAWAAIAAAwIAsAAIAAgwIAYAAIAABvg");
	this.shape_12.setTransform(-4.8,-8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAyQgNgIABgRIAAAAIAWAAQAAAGAGAFQAGAEAJAAQAJAAAHgEQAGgEAAgIQAAgIgGgEQgFgFgLAAIgOAAIAAgPIAOAAQAKAAAFgEQAFgEAAgIQAAgGgFgFQgGgEgJAAQgIAAgGAEQgGAEAAAHIgWAAIAAgBQAAgOAMgJQAMgJASAAQATAAAMAJQAMAIAAAQQAAAHgFAHQgFAHgJADQAKABAGAHQAFAHAAAJQAAAQgNAJQgNAJgTAAQgSAAgNgIg");
	this.shape_13.setTransform(-16.2,-8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfA5IgIgDIADgQIAGABIAFAAQAHAAADgCQAEgDABgFIACgFIgohQIAZAAIAXAzIAAAFIABAAIAXg4IAZAAIgqBaQgFALgFAGQgHAGgMAAg");
	this.shape_14.setTransform(-27,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,-19.7,195.2,39.5);


(lib.shape59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.851)","rgba(255,255,255,0)"],[0,1],-0.2,-24.9,0,-0.2,-24.9,50.6).s().p("AgFj/IALABIgGH/g");
	this.shape.setTransform(0,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.851)","rgba(255,255,255,0)"],[0,1],0.3,24.9,0,0.3,24.9,50.7).s().p("AgFD/IAFn/IAGIBg");
	this.shape_1.setTransform(0,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.851)","rgba(255,255,255,0)"],[0,1],-24.9,0.3,0,-24.9,0.3,50.6).s().p("Aj+gFIH/AFIoAAGg");
	this.shape_2.setTransform(25.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.851)","rgba(255,255,255,0)"],[0,1],24.9,-0.2,0,24.9,-0.2,50.7).s().p("AkAAAIIBgFIgCALg");
	this.shape_3.setTransform(-25.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-51.2,102.4,102.4);


(lib.shape57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.153)").ss(5,1,1).p("ADLjKQBUBUAAB2QAAB3hUBUQhUBUh3AAQh2AAhUhUQhUhUAAh3QAAh2BUhUQBUhUB2AAQB3AABUBUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-31.2,62.4,62.4);


(lib.shape55UpOverDownHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,35.8).s().p("Aj7D7QhohoAAiTQAAiTBohoQBphoCSAAQCTAABoBoQBpBoAACTQAACThpBoQhoBpiTAAQiSAAhphpg");
	this.shape.setTransform(35.7,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.3,71.3);


(lib.shape53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.251)").ss(3,1,1).p("ACPiOQA8A7AABTQAABUg8A7Qg7A8hUAAQhTAAg7g8Qg8g7AAhUQAAhTA8g7QA7g8BTAAQBUAAA7A8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-21.8,43.6,43.6);


(lib.shape51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.851)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,30.2).s().p("AjtDtQhihiAAiLQAAiKBihjQBjhiCKAAQCLAABiBiQBkBjgBCKQABCLhkBiQhiBkiLgBQiKABhjhkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-33.7,67.4,67.4);


(lib.ryka_pals = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBtIAAgeIgKAAIAAgTIgKAAIAAgKIgLAAIAAgUIgKAAIAAgeIAKAAIAAgJIALAAIAAgKIAKAAIAAhQIAKAAIAACBIgKAAIAAgnIgKAAIAAAJIgLAAIAAAeIALAAIAAAUIAKAAIAAAKIAKAAIAAATIAKAAIAAAUIBOAAIAAgUIAKAAIAAAegAA8BPIAAgdIAJAAIAAAdgAA8BPgABFAyIAAhFIgJAAIAAgJIgKAAIAAAcIgKAAIAAgmIgVAAIAAAdIgKAAIAAgnIAfAAIAAAKIAUAAIAAAKIAJAAIAAAJIAKAAIAABFgABFAygAgTgJIAAhaIgTAAIAAgKIATAAIAAAKIAKAAIAAApIASAAIAAAKIgSAAIAAAng");
	this.shape.setTransform(8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBjIAAgUIgKAAIAAgTIgKAAIAAgKIgKAAIAAgUIgLAAIAAgeIALAAIAAgJIAKAAIAAAnIAKAAIAAiBIATAAIAABaIAKAAIAAgnIASAAIAAAnIAKAAIAAgdIAVAAIAAAmIAKAAIAAgcIAKAAIAAAJIAJAAIAABFIgJAAIAAAdIgKAAIAAAUg");
	this.shape_1.setTransform(8,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,22);


(lib.radial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FAFAFA","#96AECD"],[0.396,0.667],0,0,0,0,0,417.3).s().p("EgtuAtvQy9y9AA6yQAA6xS9y9QS9y9axAAQayAAS9S9QS9S9AAaxQAAayy9S9Qy9S96yAAQ6xAAy9y9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414,-414,828,828);


(lib.prep_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prep();
	this.instance.setTransform(-103.5,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-116.5,207,233);


(lib.made = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.made_germ();
	this.instance.setTransform(-80,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-27.5,160,55);


(lib.kyrsor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCFCFE","#000000"],[0,1],45.2,-41.1,-55.8,59.1).s().p("AixBKIkYBsIE/waIJUOcIkxgbIAQBXIB4KmIlBBLgAgFM8ID/g8IiKsHIEYAXIoHskIkVORID9hgg");
	this.shape.setTransform(55.5,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiQAJIj+BhIEWuRIIHMmIkYgZICKMGIkBA8g");
	this.shape_1.setTransform(54.9,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FCFCFE","#000000"],[0,1],-15.2,-60.8,0,-15.2,-60.8,108.7).s().p("AhhAPIEVhqIhRBPIkWBog");
	this.shape_2.setTransform(19.6,70.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FCFCFE","#000000"],[0,1],-26.6,12.5,3.7,0.2).s().p("AAAFqIhwqnIBRhPICQMZg");
	this.shape_3.setTransform(40.9,100.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FCFCFE","#000000"],[0,1],-45.8,-52.8,0,-45.8,-52.8,94.4).s().p("AiHAiIgQhVIEvAbIhRBMg");
	this.shape_4.setTransform(86.1,61.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FCFCFE","#000000"],[0,1],-42.1,-111.2,0,-42.1,-111.2,154).s().p("ACooXIAggcIk9QaIhSBNg");
	this.shape_5.setTransform(21.6,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FCFCFE","#A8A8AA","#A0A0A2","#767677","#515152","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.443,0.455,0.518,0.584,0.651,0.725,0.804,0.89,1],53.6,-87.8,-21.6,61.4).s().p("AhvNNIhxqlIkgBuIF5xgIAognIJfOtIhaBXIjHgSIB4KiIlOBPgAhmNFIBvAiIFDhLIh5qlIDQASIBRhPIpUucIgfAcIlxRMIEYhrg");
	this.shape_6.setTransform(51.3,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35,102.6,176.5);


(lib.kr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRARQgHgHAAgKQAAgJAHgHQAIgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.kap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kap_im();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,21);


(lib.eye_g_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye_g();
	this.instance.setTransform(-101,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-46.5,202,93);


(lib.eye_big_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmjAWJQwdn6ABqEQABqDQur/QQtsAVhAOQVdAPQoMHQQnMHAWKkQAYKmyAGpQyCGq0tAYIh6ABQzmAAvsnhg");
	mask.setTransform(10.3,-3.1);

	// Layer 1
	this.instance = new lib.eye_big();
	this.instance.setTransform(-350,-213.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.7,-192.9,691.8,379.8);


(lib.blesk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.086,0.459,0.91],-22.2,-15.2,22.4,15.3).s().p("ArAEuIHNpbIO0AAInNJbg");
	this.shape.setTransform(50.5,25.2,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,141.1,60.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kap();
	this.instance.setTransform(-8.1,6.3,0.329,0.369,-165,0,0,14.6,10.7);

	this.instance_1 = new lib.kap();
	this.instance_1.setTransform(3.8,-2.4,0.574,0.574,0,155.5,-24.5,14.7,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-11.2,27.4,22.6);


(lib.sprite60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape59("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-51.2,102.4,102.4);


(lib.sprite58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape57("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-31.2,62.4,62.4);


(lib.sprite54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape53("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-21.8,43.6,43.6);


(lib.sprite52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape51("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-33.7,67.4,67.4);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3NXQpehKm4iwQm4ixAGkWQAGkTG0mHQG0mGJsAjQJpAjHXFhQHXFiAOFEQANFFnzDNQlvCWmoAAQiaAAiggUg");
	mask.setTransform(172.9,104.9);

	// Layer 4
	this.instance = new lib.eye_g_1();
	this.instance.setTransform(165,110.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.eye_big_1();
	this.instance_1.setTransform(160,103,0.523,0.523);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.3,17.4,307.3,175.1);


(lib.button56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape55UpOverDownHit("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.3,71.3);


(lib.btn_im = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol6s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1861AC").s().p("AplDNQgzAAAAgzIAAkzQAAgzAzAAITLAAQAzAAAAAzIAAEzQAAAzgzAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#184AA2").s().p("AplDNQgzAAAAgzIAAkzQAAgzAzAAITLAAQAzAAAAAzIAAEzQAAAzgzAAg");
	this.shape_1.setTransform(0,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,-20.5,195.2,44.5);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// Layer 59
	this.instance = new lib.kap();
	this.instance.setTransform(247.4,543,0.312,0.249,0,0.6,-179.4,15.3,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:347.8,y:401.4},69).wait(8));

	// Layer 58
	this.instance_1 = new lib.kap();
	this.instance_1.setTransform(258,525,0.268,0.214,0,0.6,-179.4,15.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:371.5,y:373.3},69).wait(8));

	// Layer 57
	this.instance_2 = new lib.kap();
	this.instance_2.setTransform(269.3,511.2,0.205,0.164,0,0.6,-179.4,15,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:359.2,y:396.9},69).wait(8));

	// Layer 56
	this.instance_3 = new lib.kap();
	this.instance_3.setTransform(261.4,507.8,0.517,0.414,0,0.6,-179.4,15.3,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:363.5,y:385.9},69).wait(8));

	// Layer 55
	this.instance_4 = new lib.kap();
	this.instance_4.setTransform(282.3,492.7,0.295,0.37,-150.6,0,0,15.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:348,y:384.3},69).wait(8));

	// Layer 54
	this.instance_5 = new lib.kap();
	this.instance_5.setTransform(297.4,483.1,0.264,0.26,-150.6,0,0,15.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:389.1,y:358.6},69).wait(8));

	// Layer 53
	this.instance_6 = new lib.kap();
	this.instance_6.setTransform(280.8,471.6,0.787,0.67,0,2.2,-177.9,14.8,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:352.9,y:363.2},69).wait(8));

	// Layer 52
	this.instance_7 = new lib.kap();
	this.instance_7.setTransform(291.4,463.8,0.288,0.284,0,0.7,-179.3,14.7,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:375.7,y:337.9},69).wait(8));

	// Layer 51
	this.instance_8 = new lib.kap();
	this.instance_8.setTransform(304.3,464.9,0.123,0.121,0,0.7,-179.3,14.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:382.6,y:377.9},69).wait(8));

	// Layer 49
	this.instance_9 = new lib.kap();
	this.instance_9.setTransform(309.3,460.1,0.366,0.413,-150.7,0,0,14.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:373.2,y:356.3},69).wait(8));

	// Layer 50
	this.instance_10 = new lib.kap();
	this.instance_10.setTransform(300.6,462,0.123,0.121,0,0.7,-179.3,14.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:396.5,y:343.5},69).wait(8));

	// Layer 48
	this.instance_11 = new lib.kap();
	this.instance_11.setTransform(339.5,434.7,0.158,0.131,0,0.7,-179.3,15.1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:381.3,y:363.1},69).wait(8));

	// Layer 47
	this.instance_12 = new lib.kap();
	this.instance_12.setTransform(327.2,439.4,0.223,0.252,0,-157.4,-150.7,14.7,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:380.6,y:346},69).wait(8));

	// Layer 46
	this.instance_13 = new lib.kap();
	this.instance_13.setTransform(306.1,421.5,0.173,0.22,-150.7,0,0,14.5,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:345.6,y:337.7},69).wait(8));

	// Layer 45
	this.instance_14 = new lib.kap();
	this.instance_14.setTransform(342.2,427.8,0.337,0.37,-150.7,0,0,14.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:404.5,y:352.2},69).wait(8));

	// Layer 11
	this.instance_15 = new lib.kap();
	this.instance_15.setTransform(313.8,413.6,0.394,0.346,0,3.8,-176.2,14.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:358.4,y:348.9},69).wait(8));

	// Layer 44
	this.instance_16 = new lib.kap();
	this.instance_16.setTransform(318,431.3,0.187,0.244,0,-160.5,-145.4,15,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:386.8,y:333.3},69).wait(8));

	// Layer 38
	this.instance_17 = new lib.kap();
	this.instance_17.setTransform(361.1,425,0.183,0.182,-162.8,0,0,14.8,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:401.4,y:335.2},69).wait(8));

	// Layer 37
	this.instance_18 = new lib.kap();
	this.instance_18.setTransform(299.6,411.1,0.121,0.12,79,0,0,14.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:360.8,y:291.8},69).wait(8));

	// Layer 36
	this.instance_19 = new lib.kap();
	this.instance_19.setTransform(313.2,402.4,0.19,0.189,-4.5,0,0,14.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:351.7,y:285.3},69).wait(8));

	// Layer 35
	this.instance_20 = new lib.kap();
	this.instance_20.setTransform(307.5,409.1,0.392,0.291,56.7,0,0,14.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:350.6,y:293.9},69).wait(8));

	// Layer 34
	this.instance_21 = new lib.kap();
	this.instance_21.setTransform(326.5,409.6,0.58,0.68,-153.5,0,0,14.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:361.2,y:324.5},69).wait(8));

	// Layer 33
	this.instance_22 = new lib.kap();
	this.instance_22.setTransform(331.7,397.3,0.934,0.928,-147.8,0,0,14.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({x:367.9,y:309.2},69).wait(8));

	// Layer 43
	this.instance_23 = new lib.kap();
	this.instance_23.setTransform(353.6,415.5,0.305,0.21,0,10.5,-169.5,14.8,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({x:414.2,y:334.8},69).wait(8));

	// Layer 42
	this.instance_24 = new lib.kap();
	this.instance_24.setTransform(383.8,394.2,0.484,0.452,0,-4.5,175.5,14.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({x:425.2,y:320.6},69).wait(8));

	// Layer 32
	this.instance_25 = new lib.Tween2("synched",0);
	this.instance_25.setTransform(353.6,404.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({x:393.7,y:315.4},69).wait(8));

	// Layer 31
	this.instance_26 = new lib.kap();
	this.instance_26.setTransform(354.6,388.4,0.333,0.333,0,-15,165,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({x:395.4,y:329},69).wait(8));

	// Layer 39
	this.instance_27 = new lib.kap();
	this.instance_27.setTransform(338.9,374.4,0.404,0.35,0,-10,170,14.8,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({x:387.1,y:310.5},69).wait(8));

	// Layer 30
	this.instance_28 = new lib.kap();
	this.instance_28.setTransform(348.2,372.1,0.635,0.607,0,-25.2,154.8,14.7,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({x:387.2,y:297.3},69).wait(8));

	// Layer 29
	this.instance_29 = new lib.kap();
	this.instance_29.setTransform(372.3,358.4,0.119,0.126,0,-44.9,135.1,14.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({x:407.4,y:307},69).wait(8));

	// Layer 28
	this.instance_30 = new lib.kap();
	this.instance_30.setTransform(363.8,373.8,0.105,0.12,0,-44.9,135.1,14.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({x:405.1,y:309.1},69).wait(8));

	// Layer 27
	this.instance_31 = new lib.kap();
	this.instance_31.setTransform(363.4,366.5,0.124,0.15,0,-44.9,135.1,14.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({x:400.8,y:301.2},69).wait(8));

	// Layer 26
	this.instance_32 = new lib.kap();
	this.instance_32.setTransform(368.2,366.3,0.202,0.245,0,-45,135,14.7,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({x:404.9,y:293.9},69).wait(8));

	// Layer 25
	this.instance_33 = new lib.kap();
	this.instance_33.setTransform(397.3,381.6,0.759,0.638,0,7,-173,14.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({x:451.4,y:301.1},69).wait(8));

	// Layer 41
	this.instance_34 = new lib.kap();
	this.instance_34.setTransform(372.8,381.3,0.215,0.26,-166.2,0,0,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({x:406.8,y:322.3},69).wait(8));

	// Layer 40
	this.instance_35 = new lib.kap();
	this.instance_35.setTransform(370.5,377.2,0.395,0.271,0,10.5,-169.5,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({x:416.7,y:311.3},69).wait(8));

	// Layer 24
	this.instance_36 = new lib.kap();
	this.instance_36.setTransform(386.2,353.3,0.601,0.413,0,-19.5,160.5,14.8,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({x:432.3,y:304.1},69).wait(8));

	// Layer 23
	this.instance_37 = new lib.kap();
	this.instance_37.setTransform(381.9,366,1,1,0,-42,138,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({x:425.3,y:286.6},69).wait(8));

	// Layer 21
	this.instance_38 = new lib.kap();
	this.instance_38.setTransform(395.4,357.3,0.17,0.229,0,0,0,14.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({x:445.7,y:292.9},69).wait(8));

	// Layer 22
	this.instance_39 = new lib.kap();
	this.instance_39.setTransform(409.4,367.9,0.692,0.749,-157.4,0,0,14.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({x:472.8,y:294.1},69).wait(8));

	// Layer 20
	this.instance_40 = new lib.kap();
	this.instance_40.setTransform(411.7,354.4,0.298,0.209,0,15,-165,14.3,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({x:461,y:292.2},69).wait(8));

	// Layer 19
	this.instance_41 = new lib.kap();
	this.instance_41.setTransform(406.6,345.2,0.599,0.393,-14.8,0,0,14.7,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({x:455.9,y:281.1},69).wait(8));

	// Layer 14
	this.instance_42 = new lib.kap();
	this.instance_42.setTransform(430.6,336.4,1,1,0,0,0,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).to({x:480.9,y:279.5},69).wait(8));

	// Layer 15
	this.instance_43 = new lib.kap();
	this.instance_43.setTransform(444.7,322.5,0.25,0.25,0,-15,165,14.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({x:483.7,y:274.8},69).wait(8));

	// Layer 16
	this.instance_44 = new lib.kap();
	this.instance_44.setTransform(454.7,323.4,0.141,0.154,30,0,0,15.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({x:491.1,y:274.3},69).wait(8));

	// Layer 17
	this.instance_45 = new lib.kap();
	this.instance_45.setTransform(462.7,319.4,0.098,0.116,0,-10.9,-11.1,14.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({x:495.7,y:274.4},69).wait(8));

	// Layer 18
	this.instance_46 = new lib.kap();
	this.instance_46.setTransform(450.5,330.1,0.098,0.116,0,-10.9,-11.1,14.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({x:489.5,y:277.4},69).wait(8));

	// Layer 7
	this.instance_47 = new lib.w5();
	this.instance_47.setTransform(-435.7,277.4,1,0.64,0,0,0,151.4,22.2);
	this.instance_47.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({x:334.3},69).wait(8));

	// Layer 3
	this.instance_48 = new lib.w1copy();
	this.instance_48.setTransform(417.6,382.9,1,0.646,0,0,180,297.6,172.5);
	this.instance_48.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({x:997.6},69).wait(8));

	// Layer 4
	this.instance_49 = new lib.w1();
	this.instance_49.setTransform(-272.4,382.9,1,0.646,0,0,0,297.6,172.5);
	this.instance_49.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({x:447.6},69).wait(8));

	// Layer 5
	this.instance_50 = new lib.w1copy2();
	this.instance_50.setTransform(-202.4,382.9,1,0.646,0,0,0,297.6,172.5);
	this.instance_50.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({x:367.6},69).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-587.1,243.8,1302.4,301.7);


(lib.t1btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn_im();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,-20.5,195.2,44.5);


(lib.sprite61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// Layer 17
	this.instance = new lib.sprite58();
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({scaleX:1.44,scaleY:1.44,x:39.6,y:4.7,alpha:0.051},13).wait(1).to({scaleX:1.49,scaleY:1.49,x:44,y:5.2,alpha:0},0).to({_off:true},4).wait(1));

	// Layer 15
	this.instance_1 = new lib.sprite54();
	this.instance_1.setTransform(0,0,0.85,0.85);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.25,scaleY:1.25,x:17.8,y:2.3,alpha:0.199},12).to({x:24.4,alpha:0.039},8).wait(1).to({x:25.8,alpha:0},0).to({_off:true},4).wait(1));

	// Layer 10
	this.instance_2 = new lib.sprite60();
	this.instance_2.setTransform(0,0,0.499,0.499,-39.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({scaleX:0.28,scaleY:0.28,rotation:135.3,x:0.8,alpha:0},16).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_3 = new lib.sprite60();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:46.2,x:2.3,alpha:0},16).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_4 = new lib.sprite52();
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.039},1).to({alpha:0.141},1).to({alpha:0.301},1).to({alpha:1},5).to({scaleX:1.1,scaleY:1.1,x:1.8,alpha:0},16).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_5 = new lib.button56();
	this.instance_5.setTransform(-31.4,-35.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({alpha:0.609},6).to({alpha:0.121},5).wait(1).to({alpha:0},0).to({_off:true},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-33.7,67.4,67.4);


// stage content:



(lib.hylocomod_v1_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_623 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(623).call(this.frame_623).wait(1));

	// ramka
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1.5,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(624));

	// white
	this.instance = new lib.whitecopy();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9,cjs.Ease.get(0.5)).to({_off:true},1).wait(614));

	// vinoska_1
	this.instance_1 = new lib.kyrsor();
	this.instance_1.setTransform(319.5,261.7,0.15,0.15,0,0,0,75,61.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.ryka_pals();
	this.instance_2.setTransform(231.1,123,1,1,0,0,0,8.1,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(527).to({_off:false},0).to({x:240.7,y:138.8},9).to({_off:true},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(537).to({_off:false},0).wait(76).to({y:130},0).wait(4).to({y:123},0).to({x:561.1,y:-71},5).to({_off:true},1).wait(1));

	// Layer 43 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_514 = new cjs.Graphics().p("AplDNQgzAAAAgzIAAkzQAAgzAzAAITLAAQAzAAAAAzIAAEzQAAAzgzAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(514).to({graphics:mask_graphics_514,x:220.1,y:100.3}).wait(17).to({graphics:null,x:0,y:0}).wait(93));

	// Layer 21
	this.instance_3 = new lib.blesk();
	this.instance_3.setTransform(133.9,107.8,1,1,0,0,0,50.5,25.2);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(514).to({_off:false},0).to({x:333.9},16).to({_off:true},1).wait(93));

	// t1
	this.instance_4 = new lib.t1btn();
	this.instance_4.setTransform(220,100,0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(493).to({_off:false},0).to({scaleX:1.2,scaleY:1.2},4,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9},3,cjs.Ease.get(0.5)).to({scaleX:1.1,scaleY:1.1},3,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// btn_im
	this.instance_5 = new lib.btn_im();
	this.instance_5.setTransform(220.1,100.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(510).to({_off:false},0).wait(103).to({y:105.3},0).wait(4).to({y:100.3},0).wait(7));

	// txt_8
	this.instance_6 = new lib.t8();
	this.instance_6.setTransform(1110.2,368);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(487).to({_off:false},0).to({y:294},10,cjs.Ease.get(-0.5)).to({y:314},4,cjs.Ease.get(0.5)).wait(123));

	// pl_w
	this.instance_7 = new lib.white();
	this.instance_7.setTransform(168,423,1.12,1.12,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(487).to({_off:false},0).to({y:349},10,cjs.Ease.get(-0.5)).to({y:369},4,cjs.Ease.get(0.5)).wait(123));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgHAPQgDgDAAgFIABgEIADgDQABAAAAAAQABAAAAAAQABAAAAAAQABAAABgBIADAAIACAAIABAAIAAgEIgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCABIgEABIgCgEIAFgCIAEgBIAFABIADADIABADIAAAEIAAAGIAAAIIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCACgBgBQgEABgCgDgAgCACIgCACIAAADIABAFQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIACgEIAAgHIgBAAIgCAAIgCAAIgCABg");
	this.shape_1.setTransform(272.3,178.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_2.setTransform(269.5,178.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAGARIAAgSIAAgGIAAAAIgDAGIgJASIgEAAIAAghIAFAAIAAATIAAAFIADgGIAKgSIADAAIAAAhg");
	this.shape_3.setTransform(266.4,178.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAFARIAAgOIgCABIgDABIgEgBIgDgCIgCgCIAAgEIAAgMIAFAAIAAAKIAAAEIABACIACAAIABAAIADAAIACAAIAAgQIAFAAIAAAhg");
	this.shape_4.setTransform(263.5,178.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAFARIAAgOIgCABIgEABIgDgBIgCgCIgCgCIgBgEIAAgMIAFAAIAAAKIAAAEIABACIABAAIACAAIADAAIACAAIAAgQIAFAAIAAAhg");
	this.shape_5.setTransform(260.7,178.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgDAQQgDgBgBgCIgCgGIgBgHIABgHQAAgDACgCQACgDACgBQACgBABAAIAEAAIAEACIACAFIABAHIAAACIAAABIgQAAIABAGIABADIADAEIACABIAEgBIACgCIACAEIgEACIgFABQgCAAgCgCgAgDgKIgBADIgBAFIALAAIAAgFIgBgDQgCgCgDAAQgBAAgCACg");
	this.shape_6.setTransform(258,178.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAJARIAAgTIAAgHIAAAAIgCAHIgHALIAAAAIgGgLIgCgHIgBAAIABAHIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_7.setTransform(254.7,178.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_8.setTransform(252.2,177.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAJAYIAAgWIgRAAIAAAWIgFAAIAAgvIAFAAIAAAVIARAAIAAgVIAFAAIAAAvg");
	this.shape_9.setTransform(249.5,177.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgDAGIACgCIABgBIAAgCIAAgBIgBAAIgBgDIABgDIABgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBACIgCADIgBADIgBABg");
	this.shape_10.setTransform(245.7,180.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAKAYIgJgSIgBgEIAAAEIgJASIgGAAIANgYIgLgXIAGAAIAHARIAAAEIABgEIAIgRIAGAAIgMAXIANAYg");
	this.shape_11.setTransform(243.3,177.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgEAYIgDgEQgCgCgBgFIgBgKIAAgIIACgHIADgFIACgCIAEgCIACgBIAFgBIADgBIAAAFIgBABIgCAAIgCABIgDAAIgCABIgEACIgCAFIAAAGQABgDACgBQADgCACABIAEABIAEACQACAFAAAGQAAAKgDAEIgEAEQgCABgDABQgBgBgDgBgAgEAAIgBABIgBAGIABAFIABAFIACACQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAEAAABgDQACgEAAgHIAAgGIgCgBQgBgEgDAAQgDAAgCAEg");
	this.shape_12.setTransform(240.1,177.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAJARIAAgTIAAgHIAAAAIgCAHIgHALIAAAAIgGgLIgCgHIgBAAIABAHIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_13.setTransform(236.8,178.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgJAYIAAgvIATAAIAAAFIgOAAIAAAqg");
	this.shape_14.setTransform(234,177.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgJARIAAghIAFAAIAAANIADAAIABAAIAEAAIADADIADABIAAAEQAAAGgDADIgEACIgEABIgIAAgAgEAMIAEABQABAAACgCQABgCAAgDQAAgDgBgCQgCgBgBAAIgCAAIgCAAg");
	this.shape_15.setTransform(229.9,178.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgKARIgBgBIABgEIADAAIACgEIABgIIAAgQIAQAAIAAAhIgFAAIAAgdIgHAAIAAAMIgBAIIgCAGIgCACIgCABg");
	this.shape_16.setTransform(226.9,178.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgDAQQgDgBgBgCIgCgGIgBgHIABgHQAAgDACgCQACgDACgBQACgBABAAIAEAAIAEACIACAFIABAHIAAACIAAABIgQAAIABAGIABADIADAEIACABIAEgBIACgCIACAEIgEACIgFABQgCAAgCgCgAgDgKIgBADIgBAFIALAAIAAgFIgBgDQgCgCgDAAQgBAAgCACg");
	this.shape_17.setTransform(224.2,178.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgBARIAAgcIgJAAIAAgFIAVAAIAAAFIgJAAIAAAcg");
	this.shape_18.setTransform(221.7,178.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgBARIAAgcIgJAAIAAgFIAVAAIAAAFIgJAAIAAAcg");
	this.shape_19.setTransform(219.5,178.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_20.setTransform(217.7,177.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAJARIAAgTIAAgHIAAAAIgCAHIgHALIAAAAIgGgLIgCgHIgBAAIABAHIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_21.setTransform(215.1,178.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAGAYIAAgUIAAgEIAAAAIgDAEIgJAUIgEAAIAAghIAFAAIAAATIAAAFIADgGIAKgSIADAAIAAAhgAgBgOIgDgBIgCgDIgBgEIAEgBIACAEQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIADgCQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAEABQgBAEgCADQgDACgDAAIgBgBg");
	this.shape_22.setTransform(211.7,177.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgHAPQgDgDAAgFIABgEIADgDQABAAAAAAQABAAAAAAQABAAAAAAQABAAABgBIADAAIACAAIABAAIAAgEIgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCABIgEABIgCgEIAFgCIAEgBIAFABIADADIABADIAAAEIAAAGIAAAIIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCACgBgBQgEABgCgDgAgCACIgCACIAAADIABAFQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIACgEIAAgHIgBAAIgCAAIgCAAIgCABg");
	this.shape_23.setTransform(208.7,178.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_24.setTransform(205.9,178.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAJAWIgBgJIgTAAIAAghIAEAAIAAAcIAKAAIAAgcIAFAAIAAAcIAFAAIAAAOg");
	this.shape_25.setTransform(203.1,178.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgLAYIAAguIAEAAIABADIABAAQACgEAEAAQAFgBADAFQACAEAAAKIAAAFIgDAGQgBADgDABQgDABgBABIgDgBIgCgBIAAAOgAgFgMIAAARIACABIADABQACAAACgEIABgDIABgGIAAgFIgCgEIgBgDIgDgBQgEAAgBAHg");
	this.shape_26.setTransform(200,179.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAKAZIgEgOIgLAAIgFAOIgEAAIAOgxIABAAIAOAxgAAFAGIgEgNIgBgIIAAAIIgEANIAJAAg");
	this.shape_27.setTransform(196.7,177.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAMAYIAAgeIABgHIgBAAIgCAHIgKATIAAAAIgKgTIgCgHIAAAAIABAHIAAAeIgFAAIAAgvIAEAAIAMAXIAAAFIACgFIALgXIAEAAIAAAvg");
	this.shape_28.setTransform(191.4,177.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgLAYIAAguIAFgBIAEAAIAFAAQACABACACQADABABADQABADAAAFIgBAHIgEADIgEADIgEABIgBAAIgCAAIgBAAIgBAAIAAASgAgGABIABAAIABAAIABAAIABAAIACAAIADgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgFIAAgFIgDgDIgCgCIgCAAIgDAAIgCAAg");
	this.shape_29.setTransform(187.7,177.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAKAZIgEgOIgLAAIgFAOIgEAAIAOgxIABAAIAOAxgAAFAGIgFgNIAAgIIAAAIIgEANIAJAAg");
	this.shape_30.setTransform(184.4,177.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgBAZIAAgGIgDAAIgCAAIgFgBIgEgEIgDgGIgBgIQAAgIAFgFQADgGAHAAIABAAIACAAIAAgFIAEAAIAAAGIABgBIADAAIAFABQADABABADQACADABADIABAIIgBAIIgEAGQgBACgCABQgDACgDAAIgCAAIgBAAIAAAGgAACgNIAAAbIABAAIACAAIAEgBIADgCIACgGIAAgFIAAgFIgBgFIgDgDIgEgBIgCAAgAgIgNIgDACQgCAEAAAHIAAAFIACAGIACACIAFABIABAAIACAAIAAgcIgCAAIgBAAIgEABg");
	this.shape_31.setTransform(180.5,177.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AAKAZIgEgOIgMAAIgDAOIgFAAIAOgxIABAAIAPAxgAAFAGIgEgNIgBgIIAAAIIgEANIAJAAg");
	this.shape_32.setTransform(176.7,177.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgCAXIgCgBIgDgDQgCgDgBgFQgCgEAAgHIABgFIABgGQABgEACgDQACgDAEgBIAEgCIAFABIAFABIgBAEIgEgBIgEAAIgEABIgDAEIgDAGIgBAIIABAIIADAHQADAFAFAAIADAAIAEgCIABAEQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAgBAAIgFABIgFgCg");
	this.shape_33.setTransform(173.5,177.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgLAYIAAguIAFgBIAEAAIAEAAQADABACACQACABABADQACADAAAFIgBAHIgDADIgGADIgDABIgBAAIgCAAIgBAAIgBAAIAAASgAgGABIABAAIABAAIABAAIABAAIACAAIADgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIACgFIgBgFIgDgDIgCgCIgCAAIgDAAIgCAAg");
	this.shape_34.setTransform(170.4,177.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgHAYIgCgBIABgFIACABIACAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIABgGIgOgiIAGAAIAIAXIABAGIACgGIAGgXIAGAAIgKAeIgDAIIgCAFIgBADIgDABIgDAAg");
	this.shape_35.setTransform(167.2,177.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgBADIgBgDIABgBIABgBIADABIAAABIAAADIgDABIgBgBg");
	this.shape_36.setTransform(165.1,179.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgIAZIAAgFIAIAAIAAghIAAgDIgBADIgGAFIgDgEIALgMIACAAIAAAsIAIAAIAAAFg");
	this.shape_37.setTransform(162.9,177.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgEAXQgDgBgBgDQgCgDgBgFIgBgLIABgKIADgIQABgDADgBQACgCACAAQADAAACACQADABABADQACADABAFIABAKIgBALIgDAIQgBADgDABQgCACgDAAQgCAAgCgCgAgCgSQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAABQgCAFAAAJQAAAJACAGIACAEIACACQAEAAABgGQACgEAAgLQAAgIgBgGIgDgEQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_38.setTransform(159.8,177.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgLAcIATg5IAEACIgTA5g");
	this.shape_39.setTransform(157.2,178.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgIAZIAAgFIAIAAIAAghIAAgDIgBADIgGAFIgDgEIALgMIADAAIAAAsIAHAAIAAAFg");
	this.shape_40.setTransform(154.6,177.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgEAXQgDgBgBgDQgCgDgBgFIgBgLIABgKIADgIQABgDADgBQACgCACAAQADAAACACQADABABADQACADABAFIABAKIgBALIgDAIQgBADgDABQgCACgDAAQgCAAgCgCgAgCgSQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAABQgCAFAAAJQAAAJACAGIACAEIACACQAEAAABgGQACgEAAgLQAAgIgBgGIgDgEQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAgBAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_41.setTransform(151.4,177.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgLAcIATg5IAEACIgTA5g");
	this.shape_42.setTransform(148.8,178.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgGAYIgDgBIABgFIADABIAEABIABgBIADgCIACgDIABgFIgBgEIgCgEIgDgBIgBAAIgEAAIAAgBIAGgQIACgCIgDAAIgJAAIAAgFIASAAIAAACIgJARIAAADIAAgBIAEABIAEACIACACIAAAGIgBAIIgCAEIgFAEIgDABIgFgBg");
	this.shape_43.setTransform(146.3,177.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AACAZIAAgQIgPAAIAAgCIARgfIADAAIAAAdIAHAAIAAAEIgHAAIAAAQgAABgJIgGALIgCAEIADgBIAGAAIAAgOIABgGIAAAAg");
	this.shape_44.setTransform(143.1,177.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AACAZIAAgQIgPAAIAAgCIARgfIADAAIAAAdIAHAAIAAAEIgHAAIAAAQgAABgJIgGALIgCAEIADgBIAGAAIAAgOIABgGIAAAAg");
	this.shape_45.setTransform(139.9,177.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgIAYIANgnIACgEIgEABIgNAAIAAgFIAVAAIAAACIgOAtg");
	this.shape_46.setTransform(136.8,177.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgLAcIATg5IAEACIgTA5g");
	this.shape_47.setTransform(134.2,178.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AAKAZIgEgOIgMAAIgDAOIgGAAIAPgxIABAAIAPAxgAAFAGIgFgNIAAgIIAAAIIgEANIAJAAg");
	this.shape_48.setTransform(131.5,177.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgJAVQgCgCAAgDIgBgHIAAggIAFAAIAAAdIAAAGIACAFIADACIACABQAFAAABgEIACgEIAAgGIAAgdIAFAAIAAAfQAAAIgDAEIgEADIgGABQgFAAgEgDg");
	this.shape_49.setTransform(128.1,177.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgHAYIgCgBIABgFIACABIACAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIABgGIgOgiIAGAAIAIAXIABAGIABgGIAHgXIAGAAIgKAeIgDAIIgCAFIAAADIgEABIgDAAg");
	this.shape_50.setTransform(123.3,177.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgHAYIgEgBIABgEIAEABIAFAAIACAAIADgDIACgDIABgEQAAgFgDgCIgDgBIgBgBIgBAAIgCAAIgDAAIAAgDIACAAIACAAIACAAIADgDQACgDAAgDQAAgEgCgCIgCgCIgBAAIgFAAIgEABIgBgDIAEgCIAGgBIADABIAEACIADADQABACAAAEIAAADIgCAEQgCADgDABIAAABQAEAAACACIACADIAAAFQAAADgBADQgBAEgCABIgFADIgEABIgGgBg");
	this.shape_51.setTransform(120.2,177.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgGAXIgDgCIgCgDIgDgIIgBgKQAAgLAEgHQAEgGAHAAIADABIAEABQADABACAEIADAIIABAJQAAAMgEAHQgCACgDACQgDACgEAAQgDAAgDgCgAgDgSQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgDAFAAAJIAAAHIACAHIAEAFQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAFAAACgFIACgHIABgIIAAgGIgCgHIgEgFQgCgBgCAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_52.setTransform(116.8,177.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AAMAYIAAgeIABgHIgBAAIgCAHIgKATIAAAAIgKgTIgCgHIAAAAIABAHIAAAeIgFAAIAAgvIAEAAIAMAXIAAAFIACgFIALgXIAEAAIAAAvg");
	this.shape_53.setTransform(112.7,177.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_54.setTransform(107.5,178.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgLAcIATg5IAEACIgTA5g");
	this.shape_55.setTransform(105,178.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgLAYIAAguIAEgBIAGAAIADAAQADABACACQACABABADQACADAAAFIgBAHIgDADIgGADIgDABIgBAAIgCAAIgBAAIgBAAIAAASgAgGABIABAAIABAAIABAAIACAAIABAAIADgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgFIgBgFIgDgDIgDgCIgBAAIgDAAIgCAAg");
	this.shape_56.setTransform(102.5,177.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgBADIgBgDIABgBIABgBIACABIABABIgBADIgCABIgBgBg");
	this.shape_57.setTransform(98.9,179.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_58.setTransform(97.6,177.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAJAWIgBgJIgUAAIAAghIAGAAIAAAcIAJAAIAAgcIAGAAIAAAcIADAAIAAAOg");
	this.shape_59.setTransform(95.5,178.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgDAQIgDgDIgCgGIgBgHIABgHQAAgDACgCIAEgEQACgBABAAIAFAAIADACIgBAFQgDgCgDAAIgCABIgBACIgCAFIgBAEIABAFIABAEIACADQAAAAAAABQAAAAAAAAQABAAAAAAQABABAAAAIAEgBIADgCIABAEIgEACIgFABQgBAAgDgCg");
	this.shape_60.setTransform(92.6,178.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_61.setTransform(90.6,177.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AAJARIAAgTIAAgHIAAAAIgCAHIgHALIAAAAIgGgLIgCgHIgBAAIABAHIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_62.setTransform(88,178.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AAGAYIAAgUIAAgEIAAAAIgDAEIgJAUIgEAAIAAghIAFAAIAAATIAAAFIADgGIAKgSIADAAIAAAhgAgBgOIgDgBIgCgDIgBgEIAEgBIACAEQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIADgCQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAEABQgBAEgCADQgDACgDAAIgBgBg");
	this.shape_63.setTransform(83.2,177.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgDAQQgDgBgBgCIgCgGIgBgHIABgHQAAgDACgCQACgDACgBQACgBABAAIAEAAIAEACIACAFIABAHIAAACIAAABIgQAAIABAGIABADIADAEIACABIAEgBIACgCIACAEIgEACIgFABQgCAAgCgCgAgDgKIgBADIgBAFIALAAIAAgFIgBgDQgCgCgDAAQgBAAgCACg");
	this.shape_64.setTransform(80.2,178.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgBARIAAgcIgJAAIAAgFIAVAAIAAAFIgJAAIAAAcg");
	this.shape_65.setTransform(77.7,178.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_66.setTransform(75.9,177.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AALAWIgBgJIgTAAIgBAJIgDAAIAAgOIADAAIABgDIACgFIABgIIABgMIAPAAIAAAcIAEAAIAAAOgAgBgKIgBAIIgBAFIgCAFIAKAAIAAgYIgGAAg");
	this.shape_67.setTransform(73.5,178.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AAGASIAAgPIgFABIgFAOIgGAAIAHgNIACgCQgDAAgCgDQgCgBAAgEIABgFQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBIAEgBIADgBIAEAAIAEABIAAAhgAAAgMIgBACQgCACAAADIABADIABACIABAAIADAAIADAAIAAgLIgCgBIgCAAIgCAAg");
	this.shape_68.setTransform(69.1,178.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgKARIgBgBIABgEIADAAIACgEIABgIIAAgQIAQAAIAAAhIgFAAIAAgdIgHAAIAAAMIgBAIIgCAGIgCACIgCABg");
	this.shape_69.setTransform(66.3,178.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AALAWIgBgJIgTAAIgBAJIgDAAIAAgOIADAAIABgDIACgFIABgIIABgMIAPAAIAAAcIAEAAIAAAOgAgBgKIgBAIIgBAFIgCAFIAKAAIAAgYIgGAAg");
	this.shape_70.setTransform(63.5,178.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgHAXIAAgEIACAAIACgBIACgDIABgFIgLghIAFAAIAGAWIABAFIABgFIAFgWIAFAAIgIAdIgCAHIgCAGIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_71.setTransform(59.3,179.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAJARIAAgTIAAgHIAAAAIgCAHIgHALIAAAAIgGgLIgCgHIgBAAIABAHIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_72.setTransform(56.2,178.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgEAQIgEgCQgDgGAAgIIABgHQAAgDACgCIAFgEQACgBABAAQAGAAADAFIADAFIAAAHQAAAJgDAFQgDAEgGAAQgCAAgCgCgAgBgLIgDACQgCAEAAAFIAAAFIACAEIADAEIABABQAEgBABgDIABgEIABgGIgBgEIgBgFIgCgCIgDgBIgBABg");
	this.shape_73.setTransform(52.9,178.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_74.setTransform(49.9,178.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AAFARIAAgcIgJAAIAAAcIgGAAIAAghIAVAAIAAAhg");
	this.shape_75.setTransform(46.9,178.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgHAXIAAgEIACAAIACgBIACgDIABgFIgLghIAFAAIAGAWIABAFIABgFIAFgWIAFAAIgIAdIgCAHIgCAGIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_76.setTransform(44.1,179.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgBARIAAgcIgJAAIAAgFIAVAAIAAAFIgJAAIAAAcg");
	this.shape_77.setTransform(41.7,178.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgDAQIgDgDIgCgGIgBgHIABgHQAAgDADgCIADgEQACgBABAAIAFAAIAEACIgCAFQgCgCgEAAIgCABIgCACIgBAFIgBAEIABAFIABAEIACADQAAAAAAABQAAAAAAAAQABAAAAAAQABABAAAAIAEgBIADgCIABAEIgEACIgFABQgBAAgDgCg");
	this.shape_78.setTransform(39.4,178.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgEAQIgEgCQgDgGAAgIIABgHQABgDACgCIADgEQACgBACAAQAGAAADAFIACAFIABAHQAAAJgDAFQgEAEgFAAQgCAAgCgCgAgCgLIgCACQgCAEABAFIAAAFIABAEIACAEIACABQAEgBABgDIABgEIABgGIgBgEIgBgFIgCgCIgDgBIgCABg");
	this.shape_79.setTransform(36.6,178.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AALAWIgBgJIgTAAIgBAJIgDAAIAAgOIADAAIABgDIACgFIABgIIABgMIAPAAIAAAcIAEAAIAAAOgAgBgKIgBAIIgBAFIgCAFIAKAAIAAgYIgGAAg");
	this.shape_80.setTransform(33.5,178.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgDAQQgDgBgBgCIgCgGIgBgHIABgHQAAgDACgCQACgDACgBQACgBABAAIAEAAIAEACIACAFIABAHIAAACIAAABIgQAAIABAGIABADIADAEIACABIAEgBIACgCIACAEIgEACIgFABQgCAAgCgCgAgDgKIgBADIgBAFIALAAIAAgFIgBgDQgCgCgDAAQgBAAgCACg");
	this.shape_81.setTransform(30.6,178.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_82.setTransform(27.7,178.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgFASIgEgBIAAghIAEAAIAFAAIAEAAIADACQACACAAAEIgBAFIgEADIADAAIACABQABADAAADIAAAFIgDADIgEACIgDABgAgEAMIACABIACAAQACAAABgCQACgBAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgCAAIgEAAgAgEgMIAAALIAEAAIABgBIACgBIABgCIAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_83.setTransform(289.1,172.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AAGARIAAgSIAAgFIAAAAIgDAGIgJARIgEAAIAAghIAFAAIAAATIAAAFIADgGIAKgSIADAAIAAAhg");
	this.shape_84.setTransform(284.6,172.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgBARIAAgdIgJAAIAAgEIAVAAIAAAEIgJAAIAAAdg");
	this.shape_85.setTransform(282,172.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_86.setTransform(279.4,172.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgHARIAAghIAPAAIAAAEIgKAAIAAAdg");
	this.shape_87.setTransform(277.3,172.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_88.setTransform(275.3,171.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgKAZIAAgwIADAAIABAFIAAAAQADgGADAAQAGABACAEQADAEAAAJIgBAGIgCAHQgCACgCABQgCABgCAAIgCAAIgEgBIAAAPgAgGgNIAAASIADACIADAAQACAAACgEIACgDIAAgGIAAgFIgBgEIgDgDIgCgBQgEAAgCAGg");
	this.shape_89.setTransform(273.2,172.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgDARQgDgBgBgDIgCgGIgBgHIABgGQAAgEACgCQACgCACgBQACgCABAAIAEABIAEACIACADIABAHIAAADIAAABIgQAAIABAFIABAFIADACIACABIAEgBIACgBIACADIgEADIgFABQgCAAgCgBgAgDgKIgBAEIgBAEIALAAIAAgEIgBgEQgCgCgDgBQgBABgCACg");
	this.shape_90.setTransform(270.1,172.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgEAYIgDgDQgCgDgBgEIgBgKIABgJIABgHIACgFIADgDIAEgBIACgBIAFAAIADgCIAAAEIgBABIgCABIgCAAIgDABIgCABIgEACIgCAEIgBAHQACgDACgBQADgCABAAIAFABIADAEQADAEAAAGQAAAKgDAFIgEADQgCABgDAAQgBAAgDgBgAgEgBIgBADIgBAFIABAGIABAEIADADQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQADAAACgEQACgDAAgIIAAgEIgBgDQgCgDgEAAQgCAAgCADg");
	this.shape_91.setTransform(267.2,171.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgHAZIgEgCIABgFIAEABIAFABIACgBIADgBIACgEIABgEQAAgFgDgCIgDgCIgBAAIgBgBIgCAAIgDAAIAAgCIACAAIACAAIACAAIADgDQACgCAAgDQAAgFgCgCIgCgBIgBgBIgFABIgEABIgBgFIAEgBIAGgBIADAAIAEACIADAFQABACAAADIAAAEIgCADQgCADgDACIAAAAQAEAAACABIACAEIAAAEQAAAEgBAEQgBADgCABIgFADIgEABIgGAAg");
	this.shape_92.setTransform(264.2,171.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgBACIgBgCIABgBIABgCIACACIABABIgBACIgCABIgBgBg");
	this.shape_93.setTransform(260.8,173.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgCANIgCgEIgBgIIgGAAIAAAQIgEAAIAAghIAEAAIAAAOIAGAAIABgGIACgFIACgDIAFgBQADAAADACIADADIACAGIAAAGQAAAJgDAEQgCAFgGAAQgFAAgCgFgAAAgJIAAAEIAAAFIAAAFIAAAEIACADIADABIADgBIACgCQABgDABgHIgBgEIgBgEIgCgDIgDgBQgDAAgCADg");
	this.shape_94.setTransform(258.3,172.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgCARIgEgEQgCgDgBgDIAAgHQgBgIAEgEQACgCADgBQABgCACAAIAFABIADABIgBAEIgDgBIgDAAIgDAAIgBADQgCADgBAFIALAAIAAACIgLAAIABAFIACAEIABACIADABIAEgBIACgBIABAFIgDABIgFABQgCAAgCgBg");
	this.shape_95.setTransform(254.9,172.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_96.setTransform(252.8,171.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAJAVIgBgJIgUAAIAAghIAGAAIAAAdIAJAAIAAgdIAGAAIAAAdIAEAAIAAANg");
	this.shape_97.setTransform(250.7,172.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AAFARIgHgQIgDAAIAAAQIgFAAIAAghIAFAAIAAAQIADgBIAGgPIAGAAIgJAOIgBACIACABIAJAQg");
	this.shape_98.setTransform(247.8,172.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgHAXIAAgEIACAAIACgBIACgDIABgFIgLghIAFAAIAGAWIABAFIABgFIAFgWIAFAAIgIAdIgCAHIgCAGIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_99.setTransform(245,172.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgKAZIAAgwIADAAIABAFIAAAAQADgGADAAQAGABACAEQADAEABAJIgCAGIgCAHQgBACgDABQgDABgBAAIgCAAIgEgBIAAAPgAgGgNIAAASIADACIADAAQACAAACgEIACgDIAAgGIAAgFIgBgEIgCgDIgDgBQgEAAgCAGg");
	this.shape_100.setTransform(242.3,172.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgBARIAAgdIgJAAIAAgEIAVAAIAAAEIgJAAIAAAdg");
	this.shape_101.setTransform(239.6,172.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgCARIgEgEIgDgGIAAgHIABgGQABgEABgCIAEgDQACgCABAAIAFABIADABIgBAEQgDgCgDAAIgCABIgBADIgCAEIAAAFIAAAFIABAFIACACQAAAAAAABQAAAAAAAAQABAAAAAAQABAAABAAIADgBIACgBIACAFIgEABIgFABQgBAAgCgBg");
	this.shape_102.setTransform(237.4,172.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_103.setTransform(234.6,172.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_104.setTransform(232.3,171.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgFARIgDgBIABgFIADABIAEABQABAAABgCQACgBAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgBAAIgEAAIAAgCIAEAAIAAgBIACgBIABgCIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgFABIgCABIgBgEIADgBIAFgBIADAAIADACIACACIABAEQgBADgBACQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAIAAAAQADAAACABQABADABADQAAAEgDADQgEAEgDAAIgFgBg");
	this.shape_105.setTransform(228.9,172.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AAGARIAAgOIgFABIgFANIgGAAIAHgLIACgDQgDgBgCgCQgCAAAAgEIABgGQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAIAEgDIADgBIAEABIAEAAIAAAhgAAAgLIgBABQgCACAAAEIABACIABACIABAAIADAAIADAAIAAgLIgCAAIgCgBIgCABg");
	this.shape_106.setTransform(224.7,172.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgDARIgDgEIgDgGIAAgHIABgGQABgEACgCIADgDQACgCACAAIAEABIAEABIgCAEQgCgCgEAAIgCABIgCADIgBAEIgBAFIABAFIABAFIACACQAAAAAAABQAAAAAAAAQABAAAAAAQABAAABAAIADgBIADgBIABAFIgEABIgEABQgCAAgDgBg");
	this.shape_107.setTransform(222.4,172.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgDARQgDgBgBgDIgCgGIgBgHIABgGQAAgEACgCQACgCACgBQACgCABAAIAEABIAEACIACADIABAHIAAADIAAABIgQAAIABAFIABAFIADACIACABIAEgBIACgBIACADIgEADIgFABQgCAAgCgBgAgDgKIgBAEIgBAEIALAAIAAgEIgBgEQgCgCgDgBQgBABgCACg");
	this.shape_108.setTransform(219.6,172.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgBARIAAgdIgJAAIAAgEIAVAAIAAAEIgJAAIAAAdg");
	this.shape_109.setTransform(217.1,172.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AAJARIAAgTIAAgGIAAAAIgCAFIgHAMIAAAAIgGgMIgCgFIgBAAIABAGIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_110.setTransform(214.2,172.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgEARIgEgEQgDgFAAgIIABgGQABgEACgDIADgCQADgCABAAQAGAAADAEIACAHIABAGQAAAJgDAEQgEAFgFAAQgBAAgDgBgAgCgMIgCADQgBADgBAGIAAAFIACAFIACACIACABQAEABABgEIACgEIAAgGIAAgEIgCgEIgCgEIgDgBIgCABg");
	this.shape_111.setTransform(210.9,172.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AAGAYIAAgUIAAgEIAAAAIgDAFIgJATIgEAAIAAghIAFAAIAAATIAAAFIADgGIAKgSIADAAIAAAhgAgBgOIgDgCIgCgCIgBgEIAEgBIACAFQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIADgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAEABQgBAEgCACQgDACgDAAIgBAAg");
	this.shape_112.setTransform(207.8,171.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_113.setTransform(204.8,172.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_114.setTransform(202,172.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgFARIgDgBIABgFIADABIAEABQABAAABgCQACgBAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgBAAIgEAAIAAgCIAEAAIAAgBIACgBIABgCIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgFABIgCABIgBgEIADgBIAFgBIADAAIADACIACACIABAEQgBADgBACQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAIAAAAQAEAAABABQABADABADQAAAEgDADQgEAEgDAAIgFgBg");
	this.shape_115.setTransform(199.3,172.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgEARIgEgEQgDgFAAgIIABgGQABgEACgDIADgCQACgCACAAQAGAAADAEIACAHIABAGQAAAJgDAEQgEAFgFAAQgBAAgDgBgAgBgMIgDADQgBADgBAGIAAAFIACAFIADACIABABQADABACgEIACgEIAAgGIAAgEIgCgEIgCgEIgDgBIgBABg");
	this.shape_116.setTransform(196.6,172.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_117.setTransform(192.1,172.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgBARIAAgdIgJAAIAAgEIAVAAIAAAEIgJAAIAAAdg");
	this.shape_118.setTransform(189.7,172.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AAJARIAAgTIAAgGIAAAAIgCAFIgHAMIAAAAIgGgMIgCgFIgBAAIABAGIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_119.setTransform(185.3,172.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgDARQgDgBgBgDIgCgGIgBgHIABgGQAAgEACgCQACgCACgBQACgCABAAIAEABIAEACIACADIABAHIAAADIAAABIgQAAIABAFIABAFIADACIACABIAEgBIACgBIACADIgEADIgFABQgCAAgCgBgAgDgKIgBAEIgBAEIALAAIAAgEIgBgEQgCgCgDgBQgBABgCACg");
	this.shape_120.setTransform(182.1,172.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgLAZIAAgwIAEAAIABAFIABAAQACgGAEAAQAFABADAEQACAEAAAJIAAAGIgDAHQgBACgDABQgDABgBAAIgDAAIgCgBIAAAPgAgFgNIAAASIACACIADAAQACAAACgEIABgDIABgGIAAgFIgCgEIgBgDIgDgBQgEAAgBAGg");
	this.shape_121.setTransform(179.3,172.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_122.setTransform(176.2,172.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AAFARIgHgQIgDAAIAAAQIgFAAIAAghIAFAAIAAAQIADgBIAGgPIAGAAIgJAOIgBACIACABIAJAQg");
	this.shape_123.setTransform(173.7,172.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_124.setTransform(171.4,171.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgKARIgBgBIABgEIACAAIADgEIABgIIABgQIAPAAIAAAhIgFAAIAAgdIgHAAIAAAMIgBAIIgCAGIgCACIgDABg");
	this.shape_125.setTransform(169.1,172.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgFARIgDgBIAAgFIAEABIAEABQABAAABgCQACgBABgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgBAAIgEAAIAAgCIAEAAIAAgBIACgBIABgCIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgFABIgCABIgBgEIADgBIAFgBIADAAIADACIACACIABAEQgBADgBACQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAIAAAAQAEAAABABQACADgBADQAAAEgCADQgDAEgEAAIgFgBg");
	this.shape_126.setTransform(165.2,172.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AAGARIAAgOIgFABIgFANIgGAAIAHgLIACgDQgDgBgCgCQgCAAAAgEIABgGQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAIAEgDIADgBIAEABIAEAAIAAAhgAAAgLIgBABQgCACAAAEIABACIABACIABAAIADAAIADAAIAAgLIgCAAIgCgBIgCABg");
	this.shape_127.setTransform(161,172.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgDARIgDgEIgCgGIgBgHIABgGQAAgEACgCIAEgDQACgCABAAIAFABIAEABIgCAEQgCgCgEAAIgCABIgCADIgBAEIgBAFIABAFIABAFIACACQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAEgBIADgBIABAFIgEABIgFABQgBAAgDgBg");
	this.shape_128.setTransform(158.7,172.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgDARQgDgBgBgDIgCgGIgBgHIABgGQAAgEACgCQACgCACgBQACgCABAAIAEABIAEACIACADIABAHIAAADIAAABIgQAAIABAFIABAFIADACIACABIAEgBIACgBIACADIgEADIgFABQgCAAgCgBgAgDgKIgBAEIgBAEIALAAIAAgEIgBgEQgCgCgDgBQgBABgCACg");
	this.shape_129.setTransform(155.9,172.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgBARIAAgdIgJAAIAAgEIAVAAIAAAEIgJAAIAAAdg");
	this.shape_130.setTransform(153.4,172.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgJARIAAghIAFAAIAAANIADAAIABAAIAEAAIADADIADABIAAAEQAAAGgDADIgEACIgEABIgIAAgAgEAMIAEABQABAAACgCQABgCAAgDQAAgDgBgCQgCgBgBAAIgCAAIgCAAg");
	this.shape_131.setTransform(151.2,172.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AALAVIgBgJIgTAAIgBAJIgDAAIAAgNIADAAIABgDIACgFIABgHIABgOIAPAAIAAAdIAEAAIAAANgAgBgJIgBAHIgBAEIgCAGIAKAAIAAgYIgGAAg");
	this.shape_132.setTransform(148.1,172.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_133.setTransform(145.2,172.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgLAZIAAgwIAEAAIABAFIABAAQACgGAEAAQAFABADAEQACAEAAAJIAAAGIgDAHQgCACgCABQgCABgCAAIgDAAIgCgBIAAAPgAgFgNIAAASIACACIADAAQACAAACgEIABgDIABgGIAAgFIgCgEIgCgDIgCgBQgEAAgBAGg");
	this.shape_134.setTransform(142.5,172.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgEARIgEgEQgDgFAAgIIABgGQABgEABgDIAFgCQACgCABAAQAGAAADAEIADAHIAAAGQAAAJgDAEQgDAFgGAAQgCAAgCgBgAgBgMIgDADQgBADAAAGIAAAFIABAFIADACIABABQAEABABgEIABgEIABgGIgBgEIgBgEIgCgEIgDgBIgBABg");
	this.shape_135.setTransform(139.4,172.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AAGARIAAgdIgLAAIAAAdIgEAAIAAghIATAAIAAAhg");
	this.shape_136.setTransform(136.4,172.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AAJARIAAgTIAAgGIAAAAIgCAFIgHAMIAAAAIgGgMIgCgFIgBAAIABAGIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_137.setTransform(131.6,172.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AAGARIAAgOIgFABIgFANIgGAAIAHgLIACgDQgDgBgCgCQgCAAAAgEIABgGQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAIAEgDIADgBIAEABIAEAAIAAAhgAAAgLIgBABQgCACAAAEIABACIABACIABAAIADAAIADAAIAAgLIgCAAIgCgBIgCABg");
	this.shape_138.setTransform(128.3,172.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_139.setTransform(125.6,172.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AAGARIAAgQIgLAAIAAAQIgFAAIAAghIAFAAIAAAPIALAAIAAgPIAFAAIAAAhg");
	this.shape_140.setTransform(122.6,172.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_141.setTransform(119.6,172.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgFASIgEgBIAAghIAEAAIAFAAIAEAAIADACQACACAAAEIgBAFIgEADIADAAIACABQABADAAADIAAAFIgDADIgEACIgDABgAgEAMIACABIACAAQACAAABgCQACgBAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgCAAIgEAAgAgEgMIAAALIAEAAIABgBIACgBIABgCIAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_142.setTransform(116.9,172.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgHAXIAAgEIACAAIACgBIACgDIABgFIgLghIAFAAIAGAWIABAFIABgFIAFgWIAFAAIgIAdIgCAHIgCAGIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_143.setTransform(114.2,172.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgCARIgEgEIgDgGIAAgHIABgGQABgEABgCIAEgDQACgCABAAIAFABIADABIgBAEQgDgCgDAAIgCABIgBADIgCAEIAAAFIAAAFIABAFIACACQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAEgBIACgBIACAFIgEABIgFABQgBAAgCgBg");
	this.shape_144.setTransform(111.7,172.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgEARIgEgEQgDgFAAgIIABgGQAAgEACgDIAEgCQADgCABAAQAGAAADAEIACAHIABAGQAAAJgDAEQgEAFgFAAQgBAAgDgBgAgBgMIgDADQgBADgBAGIAAAFIACAFIADACIABABQADABACgEIACgEIAAgGIAAgEIgCgEIgCgEIgDgBIgBABg");
	this.shape_145.setTransform(108.9,172.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgBARIAAgdIgJAAIAAgEIAVAAIAAAEIgJAAIAAAdg");
	this.shape_146.setTransform(106.3,172.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgCARIgEgEIgDgGIAAgHIABgGQABgEABgCIAEgDQACgCABAAIAFABIADABIgBAEQgDgCgDAAIgCABIgBADIgCAEIAAAFIAAAFIABAFIACACQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAEgBIACgBIACAFIgEABIgFABQgBAAgCgBg");
	this.shape_147.setTransform(104.1,172.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_148.setTransform(101.3,172.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgFARIgDgBIABgFIADABIADABQACAAABgCQACgBAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgCAAIgDAAIAAgCIAEAAIAAgBIACgBIABgCIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgEABIgCABIgBgEIADgBIAFgBIADAAIADACIACACIABAEQAAADgCACQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAIAAAAQADAAACABQABADABADQAAAEgEADQgCAEgFAAIgEgBg");
	this.shape_149.setTransform(98.7,172.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AALAVIgBgJIgTAAIgBAJIgDAAIAAgNIADAAIABgDIACgFIABgHIABgOIAPAAIAAAdIAEAAIAAANgAgBgJIgBAHIgBAEIgCAGIAKAAIAAgYIgGAAg");
	this.shape_150.setTransform(94.5,172.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgDARQgDgBgBgDIgCgGIgBgHIABgGQAAgEACgCQACgCACgBQACgCABAAIAEABIAEACIACADIABAHIAAADIAAABIgQAAIABAFIABAFIADACIACABIAEgBIACgBIACADIgEADIgFABQgCAAgCgBgAgDgKIgBAEIgBAEIALAAIAAgEIgBgEQgCgCgDgBQgBABgCACg");
	this.shape_151.setTransform(91.6,172.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgKAZIAAgwIADAAIABAFIAAAAQADgGADAAQAGABACAEQADAEAAAJIgBAGIgCAHQgCACgCABQgDABgBAAIgCAAIgEgBIAAAPgAgGgNIAAASIADACIADAAQACAAACgEIACgDIAAgGIAAgFIgBgEIgDgDIgCgBQgEAAgCAGg");
	this.shape_152.setTransform(88.8,172.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgDARQgDgBgBgDIgCgGIgBgHIABgGQAAgEACgCQACgCACgBQACgCABAAIAEABIAEACIACADIABAHIAAADIAAABIgQAAIABAFIABAFIADACIACABIAEgBIACgBIACADIgEADIgFABQgCAAgCgBgAgDgKIgBAEIgBAEIALAAIAAgEIgBgEQgCgCgDgBQgBABgCACg");
	this.shape_153.setTransform(85.7,172.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AAIAYIAAgqIgPAAIAAAqIgGAAIAAgvIAaAAIAAAvg");
	this.shape_154.setTransform(82.5,171.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgBACIgBgCIABgBIABgCIACACIABABIgBACIgCABIgBgBg");
	this.shape_155.setTransform(78.8,173.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgHAXIAAgEIACAAIACgBIACgDIABgFIgLghIAFAAIAGAWIABAFIABgFIAFgWIAFAAIgIAdIgCAHIgCAGIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_156.setTransform(76.9,172.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgEAYIgDgDQgCgDgBgEIgBgKIAAgJIACgHIADgFIACgDIAEgBIACgBIAFAAIADgCIAAAEIgBABIgCABIgCAAIgDABIgCABIgEACIgCAEIAAAHQABgDACgBQADgCACAAIAEABIAEAEQACAEAAAGQAAAKgDAFIgEADQgCABgDAAQgBAAgDgBgAgEgBIgBADIgBAFIABAGIABAEIACADQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAEAAABgEQACgDAAgIIAAgEIgCgDQgBgDgDAAQgDAAgCADg");
	this.shape_157.setTransform(74.1,171.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgEARIgEgEQgDgFAAgIIABgGQABgEABgDIAFgCQABgCACAAQAGAAADAEIADAHIAAAGQAAAJgDAEQgDAFgGAAQgBAAgDgBgAgCgMIgCADQgBADAAAGIAAAFIABAFIACACIACABQADABACgEIABgEIABgGIgBgEIgBgEIgCgEIgDgBIgCABg");
	this.shape_158.setTransform(71.1,172.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgCARIgEgEIgCgGIgBgHIABgGQAAgEACgCIAEgDQACgCABAAIAFABIADABIgBAEQgDgCgDAAIgCABIgBADIgCAEIgBAFIABAFIABAFIACACQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAEgBIACgBIACAFIgEABIgFABQgBAAgCgBg");
	this.shape_159.setTransform(68.4,172.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_160.setTransform(65.6,172.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgFARIgEgBIACgFIADABIADABQACAAACgCQABgBAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgCAAIgDAAIAAgCIAEAAIAAgBIACgBIABgCIABgBQgBgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgDABIgDABIgCgEIAFgBIAEgBIADAAIADACIACACIABAEQAAADgCACQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAIAAAAQACAAACABQACADAAADQAAAEgEADQgCAEgFAAIgEgBg");
	this.shape_161.setTransform(63.1,172.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgEARIgEgEQgDgFAAgIIABgGQABgEABgDIAFgCQABgCACAAQAGAAADAEIADAHIAAAGQAAAJgDAEQgDAFgGAAQgBAAgDgBgAgCgMIgCADQgBADAAAGIAAAFIABAFIACACIACABQADABACgEIABgEIABgGIgBgEIgBgEIgCgEIgDgBIgCABg");
	this.shape_162.setTransform(58.9,172.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgHARIAAghIAPAAIAAAEIgKAAIAAAdg");
	this.shape_163.setTransform(56.6,172.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgEARIgEgEQgDgFAAgIIABgGQABgEABgDIAFgCQABgCACAAQAGAAADAEIADAHIAAAGQAAAJgDAEQgDAFgGAAQgCAAgCgBgAgCgMIgCADQgBADAAAGIAAAFIABAFIACACIACABQAEABABgEIABgEIABgGIgBgEIgBgEIgCgEIgDgBIgCABg");
	this.shape_164.setTransform(53.9,172.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AAFARIgHgQIgDAAIAAAQIgFAAIAAghIAFAAIAAAQIADgBIAGgPIAGAAIgJAOIgBACIACABIAJAQg");
	this.shape_165.setTransform(51.2,172.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgJARIAAghIAFAAIAAANIADAAIABAAIAEAAIAEADIACABIAAAEQAAAGgDADIgEACIgEABIgIAAgAgEAMIAEABQABAAACgCQABgCAAgDQAAgDgBgCQgCgBgBAAIgCAAIgCAAg");
	this.shape_166.setTransform(48.5,172.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgCARIgEgEIgCgGIgBgHIABgGQAAgEACgCIAEgDQACgCABAAIAFABIADABIgBAEQgDgCgDAAIgCABIgBADIgCAEIgBAFIABAFIABAFIACACQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAEgBIACgBIACAFIgEABIgFABQgBAAgCgBg");
	this.shape_167.setTransform(45.9,172.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgKAZIAAgwIADAAIABAFIAAAAQADgGADAAQAGABACAEQADAEAAAJIgBAGIgCAHQgCACgCABQgCABgCAAIgCAAIgEgBIAAAPgAgGgNIAAASIADACIADAAQACAAACgEIACgDIAAgGIAAgFIgBgEIgDgDIgCgBQgEAAgCAGg");
	this.shape_168.setTransform(43.2,172.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_169.setTransform(40.1,172.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AAFARIgHgQIgDAAIAAAQIgFAAIAAghIAFAAIAAAQIADgBIAGgPIAGAAIgJAOIgBACIACABIAJAQg");
	this.shape_170.setTransform(37.6,172.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgBAYIAAghIADAAIAAAhgAgBgRIgBgCIABgDIABgBIACABIABADIgBACIgCABIgBgBg");
	this.shape_171.setTransform(35.4,171.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgKARIgBgBIABgEIADAAIACgEIABgIIAAgQIAQAAIAAAhIgFAAIAAgdIgHAAIAAAMIgBAIIgCAGIgCACIgCABg");
	this.shape_172.setTransform(33,172.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_173.setTransform(28.9,172.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AAJARIAAgTIAAgGIAAAAIgCAFIgHAMIAAAAIgGgMIgCgFIgBAAIABAGIAAATIgFAAIAAghIAFAAIAIAPIAAADIABgDIAHgPIAGAAIAAAhg");
	this.shape_174.setTransform(25.7,172.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgHAPQgDgDAAgEIABgGIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgBIACAAIABAAIAAgEIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAIgEACIgCgEIAFgCIAEAAIAFABIADABIABAEIAAAEIAAAHIAAAHIAAAFIABAEIgEAAIgBgEIgBAAIgDADQgCABgBABQgEgBgCgCgAgCACIgCACIAAADIABAEQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIACgCIAAgIIgBAAIgCAAIgCAAIgCABg");
	this.shape_175.setTransform(22.4,172.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgKARIgBgBIABgEIADAAIACgEIABgIIAAgQIAQAAIAAAhIgFAAIAAgdIgHAAIAAAMIgBAIIgCAGIgCACIgCABg");
	this.shape_176.setTransform(19.5,172.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AAFARIgHgQIgDAAIAAAQIgFAAIAAghIAFAAIAAAQIADgBIAGgPIAGAAIgJAOIgBACIACABIAJAQg");
	this.shape_177.setTransform(17.1,172.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgDARQgDgBgBgDIgCgGIgBgHIABgGQAAgEACgCQACgCACgBQACgCABAAIAEABIAEACIACADIABAHIAAADIAAABIgQAAIABAFIABAFIADACIACABIAEgBIACgBIACADIgEADIgFABQgCAAgCgBgAgDgKIgBAEIgBAEIALAAIAAgEIgBgEQgCgCgDgBQgBABgCACg");
	this.shape_178.setTransform(14.2,172.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgLAYIAAguIAFgBIAEAAIAFAAQACABACACQADABABADQABADAAAFIgBAHIgEADIgEADIgEABIgBAAIgBAAIgCAAIgBAAIAAASgAgGABIABAAIACAAIAAAAIABAAIACAAIADgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgFIAAgFIgDgDIgCgCIgCAAIgCAAIgDAAg");
	this.shape_179.setTransform(11.3,171.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},497).wait(127));

	// made
	this.instance_8 = new lib.made();
	this.instance_8.setTransform(128.5,43.7,3,3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(384).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:128,y:43},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(0.5)).wait(88).to({alpha:0},8,cjs.Ease.get(0.5)).to({_off:true},1).wait(133));

	// t1_3
	this.instance_9 = new lib.t1_3();
	this.instance_9.setTransform(16.3,45.8,1,1,0,0,0,76.7,15.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(353).to({_off:false},0).to({x:186.3,alpha:1},10,cjs.Ease.get(-0.5)).to({x:176.3},4,cjs.Ease.get(0.5)).wait(119).to({x:166.3},3,cjs.Ease.get(0.5)).to({x:316.3,alpha:0},6,cjs.Ease.get(-0.5)).to({_off:true},1).wait(128));

	// t1_2
	this.instance_10 = new lib.t1_2();
	this.instance_10.setTransform(16.3,45.8,1,1,0,0,0,76.7,15.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(351).to({_off:false},0).to({x:186.3,alpha:1},10,cjs.Ease.get(-0.5)).to({x:176.3},4,cjs.Ease.get(0.5)).wait(119).to({x:166.3},3,cjs.Ease.get(0.5)).to({x:316.3,alpha:0},6,cjs.Ease.get(-0.5)).to({_off:true},1).wait(130));

	// t1_1
	this.instance_11 = new lib.t1_1();
	this.instance_11.setTransform(16.3,18.8,1,1,0,0,0,76.7,15.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(349).to({_off:false},0).to({x:186.3,alpha:1},10,cjs.Ease.get(-0.5)).to({x:176.3},4,cjs.Ease.get(0.5)).wait(119).to({x:166.3},3,cjs.Ease.get(0.5)).to({x:316.3,alpha:0},6,cjs.Ease.get(-0.5)).to({_off:true},1).wait(132));

	// Layer 17
	this.instance_12 = new lib.kr();
	this.instance_12.setTransform(13,106.5);

	this.instance_13 = new lib.kr();
	this.instance_13.setTransform(13,106.5);

	this.instance_14 = new lib.kr();
	this.instance_14.setTransform(13,106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12,p:{y:106.5}}]},362).to({state:[{t:this.instance_13,p:{y:106.5}},{t:this.instance_12,p:{y:155.5}}]},2).to({state:[{t:this.instance_14},{t:this.instance_13,p:{y:155.5}},{t:this.instance_12,p:{y:205}}]},2).to({state:[{t:this.instance_13,p:{y:155.5}},{t:this.instance_12,p:{y:205}}]},118).to({state:[{t:this.instance_12,p:{y:205}}]},2).to({state:[]},2).to({state:[]},132).wait(4));

	// water
	this.instance_15 = new lib.water();
	this.instance_15.setTransform(8.4,311,1,1,0,0,0,297.6,297.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(209).to({_off:false},0).to({x:138.4,y:-209},86).to({_off:true},1).wait(328));

	// water copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_209 = new cjs.Graphics().p("EhbvAnsMAAAghKQCACFFrBwQFrBxOrmLQOsmJLeGbQLgGcQbCsQCxAdC/AQQH/A5Hlh6IAggIQO0ivKml9QLembOsGJQOrGLFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EhbvAnVMAAAghKQCACFFrBwQFrBxOsmKQOqmJLgGaQLeGdQbCsQCyAdC/APQIAA5Hkh6IAggHQOziwKml9QLgmaOqGJQOsGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EhbvAm/MAAAghKQCACEFrBxQFrBxOrmLQOsmJLeGbQLgGcQaCsQCyAdC/APQH/A6Hkh6IAhgIQOzivKml9QLgmbOqGJQOsGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EhbvAmoMAAAghKQCACFFrBwQFrBxOrmKQOsmJLeGaQLgGdQbCsQCxAdC/APQIAA5Hkh6IAggHQO0iwKml9QLemaOsGJQOrGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_213 = new cjs.Graphics().p("EhbvAmSMAAAghKQCACEFrBxQFrBxOsmLQOqmJLgGbQLeGcQbCsQCyAdC/APQIAA6Hkh6IAggIQO0ivKll9QLgmbOqGJQOsGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EhbvAl7MAAAghKQCACEFrBxQFrBxOsmLQOrmJLfGbQLfGcQaCsQCyAdC/APQH/A6Hkh6IAhgIQOzivKml9QLgmbOqGJQOsGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EhbvAlkMAAAghKQCACFFrBwQFrBxOrmKQOsmJLeGaQLgGdQbCsQCxAdC/APQIAA5Hjh6IAhgHQOziwKnl9QLemaOsGJQOrGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EhbvAlOMAAAghKQCACEFrBxQFrBxOsmLQOqmJLgGbQLeGcQbCsQCyAdC/APQIAA6Hkh6IAggIQO0ivKll9QLfmbOrGJQOsGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EhbvAk3MAAAghKQCACFFrBwQFrBxOsmKQOqmJLgGaQLfGdQaCsQCyAdC/APQH/A5Hkh6IAhgHQOziwKml9QLgmaOqGJQOsGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EhbvAkhMAAAghKQCACEFrBxQFrBxOrmLQOsmJLeGbQLgGcQbCsQCxAdC/APQIAA6Hjh6IAhgIQOzivKnl9QLembOsGJQOrGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EhbvAkKMAAAghKQCACEFrBxQFrBxOsmLQOqmJLgGbQLeGcQcCsQCxAdC/APQH/A6Hlh6IAggIQO0ivKml9QLembOsGJQOrGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EhbvAjzMAAAghKQCACFFrBwQFrBxOsmKQOqmJLgGaQLeGdQbCsQCyAdC/APQH/A5Hkh6IAhgHQOziwKml9QLgmaOqGJQOsGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EhbvAjdMAAAghKQCACEFrBxQFrBxOrmLQOsmJLeGbQLgGcQbCsQCxAdC/APQIAA6Hjh6IAhgIQOzivKnl9QLembOsGJQOrGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EhbvAjGMAAAghKQCACFFrBwQFrBxOsmKQOqmJLgGaQLeGdQcCsQCxAdC/APQH/A5Hlh6IAggHQO0iwKml9QLemaOsGJQOrGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EhbvAivMAAAghKQCACFFrBwQFrBxOsmKQOqmJLgGaQLeGdQbCsQCyAdC/APQH/A5Hkh6IAhgHQOziwKml9QLgmaOqGJQOsGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EhbvAiZMAAAghKQCACEFrBxQFrBxOrmLQOsmJLeGbQLgGcQbCsQCxAdC/APQIAA6Hjh6IAhgIQOzivKnl9QLembOsGJQOrGLFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EhbvAiCMAAAghKQCACFFrBwQFrBxOrmKQOsmJLeGaQLgGdQbCsQCxAdC/APQH/A5Hlh6IAggHQO0iwKml9QLemaOsGJQOrGKFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EhbvAhsMAAAghKQCACEFrBxQFrBxOsmJQOqmLLgGbQLeGcQbCsQCyAdC/APQIAA6Hjh6IAhgIQOzivKml9QLgmbOqGLQOsGJFrhxQFrhxCAiEMAAAAhKg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EhbvAhVMAAAghKQCACFFrBwQFrBxOrmIQOsmLLeGcQLgGbQbCsQCxAdC/APQH/A5Hkh6IAhgHQO0iwKml7QLemcOsGLQOrGIFrhxQFrhwCAiFMAAAAhKg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EhbvAg+MAAAghIQCACDFrBwQFrBxOrmIQOsmLLeGcQLgGbQbCsQCxAdC/APQH/A5Hlh6IAggHQO0iwKml7QLemcOsGLQOrGIFrhxQFrhwCAiDMAAAAhIg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EhbvAgoMAAAghIQCACCFrBxQFrBxOsmJQOqmLLgGdQLeGaQbCsQCyAdC/APQIAA6Hkh6IAggIQOzivKml7QLgmdOqGLQOsGJFrhxQFrhxCAiCMAAAAhIg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EhbvAgRMAAAghIQCACDFrBwQFrBxOrmIQOsmLLeGcQLgGbQbCsQCxAdC/APQH/A5Hkh6IAhgHQO0iwKml7QLemcOsGLQOrGIFrhxQFrhwCAiDMAAAAhIg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EhbvAf7MAAAghIQCACCFrBxQFrBxOrmJQOsmLLeGdQLgGaQbCsQCxAdC/APQH/A6Hlh6IAggIQO0ivKml7QLemdOsGLQOrGJFrhxQFrhxCAiCMAAAAhIg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EhbvAfkMAAAghIQCACDFrBwQFrBxOsmIQOqmLLgGcQLeGbQbCsQCyAdC/APQIAA5Hkh6IAggHQOziwKml7QLgmcOqGLQOsGIFrhxQFrhwCAiDMAAAAhIg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EhbvAfNMAAAghIQCACDFrBwQFrBxOrmIQOsmLLeGcQLgGbQaCsQCyAdC/APQH/A5Hkh6IAhgHQO0iwKll7QLgmcOqGLQOsGIFrhxQFrhwCAiDMAAAAhIg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EhbvAe3MAAAghIQCACEFrBvQFrBxOrmJQOsmLLeGdQLgGaQbCsQCxAdC/APQH/A6Hlh6IAggIQO0ivKml7QLemdOsGLQOrGJFrhxQFrhvCAiEMAAAAhIg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EhbvAegMAAAghIQCACFFrBuQFrBxOsmIQOqmLLgGcQLeGbQbCsQCyAdC/APQIAA5Hkh6IAggHQOziwKml7QLgmcOqGLQOsGIFrhxQFrhuCAiFMAAAAhIg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EhbvAeKMAAAghIQCACEFrBvQFrBxOrmJQOsmLLeGdQLgGaQaCsQCyAdC/APQH/A6Hkh6IAhgIQO0ivKll7QLgmdOqGLQOsGJFrhxQFrhvCAiEMAAAAhIg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EhbvAdzMAAAghIQCACEFrBvQFrBxOrmJQOsmLLeGdQLgGaQbCsQCxAdC/APQH/A6Hlh6IAggIQO0ivKml7QLemdOsGLQOrGJFrhxQFrhvCAiEMAAAAhIg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EhbvAdcMAAAghIQCACFFrBuQFrBxOsmIQOqmLLgGcQLeGbQbCsQCyAdC/APQIAA5Hkh6IAggHQO0iwKll7QLgmcOqGLQOsGIFrhxQFrhuCAiFMAAAAhIg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EhbvAdGMAAAghIQCACEFrBxQFrBvOsmJQOrmLLfGdQLfGaQaCsQCyAdC/APQH/A6Hkh6IAhgIQOzivKml7QLgmdOqGLQOsGJFrhvQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EhbvAcvMAAAghIQCACFFrBwQFrBvOrmIQOsmLLeGcQLgGbQbCsQCxAdC/APQIAA5Hkh6IAggHQOziwKnl7QLemcOsGLQOrGIFrhvQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_241 = new cjs.Graphics().p("EhbvAcZMAAAghIQCACEFrBxQFrBvOsmJQOqmLLgGdQLeGaQbCsQCyAdC/APQIAA6Hkh6IAggIQO0ivKll7QLfmdOrGLQOsGJFrhvQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EhbvAcCMAAAghIQCACEFrBxQFrBvOsmJQOqmLLgGdQLfGaQaCsQCyAdC/APQH/A6Hkh6IAhgIQOzivKml7QLgmdOqGLQOsGJFrhvQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EhbvAbrMAAAghIQCACFFrBwQFrBvOrmIQOsmLLeGcQLgGbQbCsQCxAdC/APQIAA5Hjh6IAhgHQOziwKnl7QLemcOsGLQOrGIFrhvQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_244 = new cjs.Graphics().p("EhbvAbVMAAAghIQCACEFrBxQFrBxOsmLQOqmLLgGdQLeGaQbCsQCyAdC/APQH/A6Hlh6IAggIQO0itKll9QLfmdOrGLQOsGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EhbvAa+MAAAghIQCACFFrBwQFrBxOsmKQOqmLLgGcQLeGdQbCqQCyAdC/APQH/A5Hkh6IAhgHQOziuKml9QLgmcOqGLQOsGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EhbvAanMAAAghIQCACFFrBwQFrBxOrmKQOsmLLeGcQLgGdQbCqQCxAdC/APQIAA5Hjh6IAhgHQOziuKnl9QLemcOsGLQOrGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_247 = new cjs.Graphics().p("EhbvAaRMAAAghIQCACEFrBxQFrBxOsmLQOqmLLgGdQLeGcQcCqQCxAdC/APQH/A6Hlh6IAggIQO0itKml9QLemdOsGLQOrGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EhbvAZ6MAAAghIQCACFFrBwQFrBxOsmKQOqmLLgGcQLeGdQbCqQCyAdC/APQH/A5Hkh6IAhgHQOziuKml9QLgmcOqGLQOsGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EhbvAZkMAAAghIQCACEFrBxQFrBxOrmLQOsmLLeGdQLgGcQbCqQCxAdC/APQIAA6Hjh6IAhgIQOzitKnl9QLemdOsGLQOrGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_250 = new cjs.Graphics().p("EhbvAZNMAAAghIQCACFFrBwQFrBxOrmKQOsmLLeGcQLgGdQbCqQCxAdC/APQH/A5Hlh6IAggHQO0iuKml9QLemcOsGLQOrGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EhbvAY2MAAAghIQCACFFrBwQFrBxOsmKQOqmLLgGcQLeGdQbCqQCyAdC/APQH/A5Hkh6IAhgHQOziuKml9QLgmcOqGLQOsGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EhbvAYgMAAAghIQCACEFrBxQFrBxOrmLQOsmLLeGdQLgGcQbCqQCxAdC/APQH/A6Hkh4IAhgIQO0ivKml9QLemdOsGLQOrGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EhbvAYJMAAAghIQCACFFrBwQFrBxOrmKQOsmLLeGcQLgGdQbCsQCxAbC/APQH/A5Hlh4IAggHQO0iwKml9QLemcOsGLQOrGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EhbvAXzMAAAghIQCACEFrBxQFrBxOsmLQOqmLLgGdQLeGcQbCsQCyAdC/ANQIAA6Hkh4IAggIQOzivKml9QLgmdOqGLQOsGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EhbvAXcMAAAghIQCACFFrBwQFrBxOrmKQOsmLLeGcQLgGdQbCsQCxAdC/APQH/A3Hkh4IAhgHQO0iwKml9QLemcOsGLQOrGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EhbvAXFMAAAghIQCACFFrBwQFrBxOrmKQOsmLLeGcQLgGdQbCsQCxAdC/APQH/A3Hlh4IAggHQO0iwKml9QLemcOsGLQOrGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EhbvAWvMAAAghIQCACEFrBxQFrBxOsmLQOqmLLgGdQLeGcQbCsQCyAdC/APQIAA4Hkh4IAggIQOzivKml9QLgmdOqGLQOsGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EhbvAWYMAAAghIQCACFFrBwQFrBxOrmKQOsmLLeGcQLgGdQbCsQCxAdC/APQH/A5Hkh6IAhgHQO0iwKll9QLgmcOqGLQOsGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EhbvAWCMAAAghIQCACEFrBxQFrBxOrmLQOsmLLeGdQLgGcQbCsQCxAdC/APQH/A6Hlh6IAggIQO0ivKml9QLemdOsGLQOrGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EhbvAVrMAAAghIQCACEFrBxQFrBxOsmLQOqmLLgGdQLeGcQbCsQCyAdC/APQIAA6Hkh6IAggIQOzivKml9QLgmdOqGLQOsGLFrhxQFrhxCAiEMAAAAhIg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EhbvAVUMAAAghIQCACFFrBwQFrBxOrmKQOsmLLeGcQLgGdQaCsQCyAdC/APQH/A5Hkh6IAhgHQO0iwKll9QLgmcOqGLQOsGKFrhxQFrhwCAiFMAAAAhIg");
	var mask_1_graphics_262 = new cjs.Graphics().p("EhbvAU+MAAAghIQCACEFrBxQFrBxOrmLQOsmLLeGdQLgGcQbCsQCxAdC/APQH/A6Hlh6IAggIQO0ivKml9QLemdOsGLQOrGLFrhxQFrhxCAiEMAAAAhIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_1_graphics_209,x:-179.9,y:254.1}).wait(1).to({graphics:mask_1_graphics_210,x:-178.3,y:251.8}).wait(1).to({graphics:mask_1_graphics_211,x:-176.7,y:249.5}).wait(1).to({graphics:mask_1_graphics_212,x:-175.1,y:247.3}).wait(1).to({graphics:mask_1_graphics_213,x:-173.4,y:245}).wait(1).to({graphics:mask_1_graphics_214,x:-171.8,y:242.7}).wait(1).to({graphics:mask_1_graphics_215,x:-170.2,y:240.5}).wait(1).to({graphics:mask_1_graphics_216,x:-168.5,y:238.2}).wait(1).to({graphics:mask_1_graphics_217,x:-166.9,y:236}).wait(1).to({graphics:mask_1_graphics_218,x:-165.3,y:233.7}).wait(1).to({graphics:mask_1_graphics_219,x:-163.6,y:231.4}).wait(1).to({graphics:mask_1_graphics_220,x:-162,y:229.2}).wait(1).to({graphics:mask_1_graphics_221,x:-160.4,y:226.9}).wait(1).to({graphics:mask_1_graphics_222,x:-158.8,y:224.7}).wait(1).to({graphics:mask_1_graphics_223,x:-157.1,y:222.4}).wait(1).to({graphics:mask_1_graphics_224,x:-155.5,y:220.1}).wait(1).to({graphics:mask_1_graphics_225,x:-153.9,y:217.9}).wait(1).to({graphics:mask_1_graphics_226,x:-152.2,y:215.6}).wait(1).to({graphics:mask_1_graphics_227,x:-150.6,y:213.4}).wait(1).to({graphics:mask_1_graphics_228,x:-149,y:211.1}).wait(1).to({graphics:mask_1_graphics_229,x:-147.3,y:208.8}).wait(1).to({graphics:mask_1_graphics_230,x:-145.7,y:206.6}).wait(1).to({graphics:mask_1_graphics_231,x:-144.1,y:204.3}).wait(1).to({graphics:mask_1_graphics_232,x:-142.5,y:202.1}).wait(1).to({graphics:mask_1_graphics_233,x:-140.8,y:199.8}).wait(1).to({graphics:mask_1_graphics_234,x:-139.2,y:197.5}).wait(1).to({graphics:mask_1_graphics_235,x:-137.6,y:195.3}).wait(1).to({graphics:mask_1_graphics_236,x:-135.9,y:193}).wait(1).to({graphics:mask_1_graphics_237,x:-134.3,y:190.7}).wait(1).to({graphics:mask_1_graphics_238,x:-132.7,y:188.5}).wait(1).to({graphics:mask_1_graphics_239,x:-131,y:186.2}).wait(1).to({graphics:mask_1_graphics_240,x:-129.4,y:184}).wait(1).to({graphics:mask_1_graphics_241,x:-127.8,y:181.7}).wait(1).to({graphics:mask_1_graphics_242,x:-126.2,y:179.4}).wait(1).to({graphics:mask_1_graphics_243,x:-124.5,y:177.2}).wait(1).to({graphics:mask_1_graphics_244,x:-122.9,y:174.9}).wait(1).to({graphics:mask_1_graphics_245,x:-121.3,y:172.7}).wait(1).to({graphics:mask_1_graphics_246,x:-119.6,y:170.4}).wait(1).to({graphics:mask_1_graphics_247,x:-118,y:168.1}).wait(1).to({graphics:mask_1_graphics_248,x:-116.4,y:165.9}).wait(1).to({graphics:mask_1_graphics_249,x:-114.7,y:163.6}).wait(1).to({graphics:mask_1_graphics_250,x:-113.1,y:161.4}).wait(1).to({graphics:mask_1_graphics_251,x:-111.5,y:159.1}).wait(1).to({graphics:mask_1_graphics_252,x:-109.9,y:156.8}).wait(1).to({graphics:mask_1_graphics_253,x:-108.2,y:154.6}).wait(1).to({graphics:mask_1_graphics_254,x:-106.6,y:152.3}).wait(1).to({graphics:mask_1_graphics_255,x:-105,y:150.1}).wait(1).to({graphics:mask_1_graphics_256,x:-103.3,y:147.8}).wait(1).to({graphics:mask_1_graphics_257,x:-101.7,y:145.5}).wait(1).to({graphics:mask_1_graphics_258,x:-100.1,y:143.3}).wait(1).to({graphics:mask_1_graphics_259,x:-98.4,y:141}).wait(1).to({graphics:mask_1_graphics_260,x:-96.8,y:138.7}).wait(1).to({graphics:mask_1_graphics_261,x:-95.2,y:136.5}).wait(1).to({graphics:mask_1_graphics_262,x:-93.5,y:134.2}).wait(1).to({graphics:null,x:0,y:0}).wait(361));

	// eye_g
	this.instance_16 = new lib.eye_g_1();
	this.instance_16.setTransform(145,118.5);
	this.instance_16._off = true;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(209).to({_off:false},0).to({_off:true},100).wait(315));

	// eye_b
	this.instance_17 = new lib.eye();
	this.instance_17.setTransform(154.8,112.1,1,1,0,0,0,174.8,103.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(309).to({_off:false},0).to({regX:174.7,regY:104,scaleX:0.16,scaleY:0.16,skewY:9.9,x:172.3,y:105.5},15).to({_off:true},1).wait(299));

	// Layer 30
	this.instance_18 = new lib.sprite61();
	this.instance_18.setTransform(172.3,107.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(324).to({_off:false},0).to({_off:true},30).wait(270));

	// prep
	this.instance_19 = new lib.prep_1();
	this.instance_19.setTransform(153,128.6,1.3,1.3);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(309).to({_off:false},0).to({scaleX:1,scaleY:1,y:133.5,alpha:1},16,cjs.Ease.get(0.5)).wait(24).to({x:143},4,cjs.Ease.get(0.5)).to({scaleX:0.9,scaleY:0.9,x:245,y:161},8,cjs.Ease.get(1)).to({x:242,y:158},3,cjs.Ease.get(0.5)).wait(123).to({scaleX:0.7,scaleY:0.7,x:88,y:89.6},13,cjs.Ease.get(1)).wait(124));

	// t3
	this.instance_20 = new lib.t3();
	this.instance_20.setTransform(1110.2,334);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(6).to({_off:false},0).to({y:294,alpha:1},9,cjs.Ease.get(-0.5)).to({y:304},5,cjs.Ease.get(0.5)).wait(52).to({y:314},3,cjs.Ease.get(0.5)).to({y:274,alpha:0},8,cjs.Ease.get(-0.5)).to({_off:true},1).wait(540));

	// t2
	this.instance_21 = new lib.t2();
	this.instance_21.setTransform(1110.2,334);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).to({y:295,alpha:1},10,cjs.Ease.get(-0.5)).to({y:304},5,cjs.Ease.get(0.5)).wait(52).to({y:314},3,cjs.Ease.get(0.5)).to({y:274,alpha:0},8,cjs.Ease.get(-0.5)).to({_off:true},1).wait(541));

	// t1
	this.instance_22 = new lib.t1();
	this.instance_22.setTransform(1110.2,334);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({_off:false},0).to({y:294,alpha:1},9,cjs.Ease.get(-0.5)).to({y:304},5,cjs.Ease.get(0.5)).wait(54).to({y:314},3,cjs.Ease.get(0.5)).to({y:274,alpha:0},8,cjs.Ease.get(-0.5)).to({_off:true},1).wait(542));

	// radial copy
	this.instance_23 = new lib.radial();
	this.instance_23.setTransform(150,28,1.3,1.3);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(78).to({_off:false},0).to({alpha:0},10,cjs.Ease.get(0.5)).to({_off:true},1).wait(535));

	// eye_big
	this.instance_24 = new lib.eye_big_1();
	this.instance_24.setTransform(145.9,111.1,1.003,1.003);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(79).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:140,y:111.5},80,cjs.Ease.get(1)).to({_off:true},150).wait(315));

	// radial
	this.instance_25 = new lib.radial();
	this.instance_25.setTransform(150,28,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(79).to({scaleX:2.49,scaleY:2.49},0).to({scaleX:1.3,scaleY:1.3},80,cjs.Ease.get(1)).wait(328).to({x:168},0).to({x:138,y:-42},10,cjs.Ease.get(1)).wait(127));

	// Layer 4
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FAFAFA").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_180.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_180).wait(624));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.2,-385.2,1076.4,1076.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;