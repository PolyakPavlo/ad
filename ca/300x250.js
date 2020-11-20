(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back_gr = function() {
	this.initialize(img.back_gr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,415);


(lib.Osteopro = function() {
	this.initialize(img.Osteopro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,600);


(lib.r2_r = function() {
	this.initialize(img.r2_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.r3_r = function() {
	this.initialize(img.r3_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.sm1 = function() {
	this.initialize(img.sm1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,235);// helper functions:

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


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3kAtVQ5pjvzxmzQzxm0q2o1QrOpJAAqBQAAp/LOpJQK2o2TxmzQTxm0ZpjvQaij4dCAAQdDAAaiD4QZpDvTxG0QTxGzK2I2QLOJJAAJ/QAAKBrOJJQq2I1zxG0QzxGz5pDvQ6iD49DAAQ9CAA6ij4g");
	mask.setTransform(914,314.875);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#000000","#000105","#020919","#071934","#122C56","#1B3D72"],[0,0.224,0.408,0.576,0.737,0.89,1],0,307,0,-307).s().p("EiOzAxNMAAAhiZMEdnAAAMAAABiZg");
	this.shape.setTransform(914,314.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,1828,629.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3kAtVQ5pjvzxmzQzxm0q2o1QrOpJAAqBQAAp/LOpJQK2o2TxmzQTxm0ZpjvQaij4dCAAQdDAAaiD4QZpDvTxG0QTxGzK2I2QLOJJAAJ/QAAKBrOJJQq2I1zxG0QzxGz5pDvQ6iD49DAAQ9CAA6ij4g");
	mask.setTransform(914,314.875);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","#000000","#000000","#000102","#01040D","#030D21","#091C3A","#122D57","#1B3D72"],[0,0.627,0.792,0.851,0.894,0.925,0.957,0.98,1],0,0,0,0,0,907.1).s().p("EiOzAxNMAAAhiZMEdnAAAMAAABiZg");
	this.shape.setTransform(913.975,314.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,1828,629.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape.setTransform(322.3,270.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgUAoQgIgIgBgLIALgBQACAJAFAEQAEAFAHAAQAHAAAGgGQAFgGAAgHQAAgJgFgFQgFgEgIAAIgHABIABgJIACAAQAGAAAGgEQAGgDAAgIQAAgGgEgEQgFgFgFAAQgHAAgEAFQgEAEgCAIIgLgCQACgLAIgGQAHgGALgBQAGAAAGAEQAHADADAGQADAFAAAGQAAAGgDAFQgDAFgGACQAIACAEAGQAFAFAAAJQAAAMgJAJQgJAHgMABQgMgBgIgGg");
	this.shape_1.setTransform(316.925,266.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgFIgFAAIAAgMIAMAAIAAAMQAAAGgDAFQgCAEgFACg");
	this.shape_2.setTransform(308.075,271.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgGACgDQACgEAEgCIAIgEIAKgBQAMgBAGgDIAAgDQAAgGgCgEQgFgEgIAAQgHAAgEADQgDAEgDAGIgLgBQACgHAEgFQADgEAHgCQAGgCAIgBQAIAAAFACQAFADADADQADADAAAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgGAFgFACQgFADgHAAQgLAAgFgGgAgCAEIgKADQgCABgCACQgCADAAADQAAAEAEACQADAEAHAAQAGAAAEgDQAFgDADgFQACgEgBgHIAAgEQgFADgMABg");
	this.shape_3.setTransform(302.75,267.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAMAhIgMgVQgCgGgEgCQgCgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAFAAACgCQADgCADgJIAFgLQACgCADgBIAIgBIACAAIAAAJIgDAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHALIAMAVg");
	this.shape_4.setTransform(296.6,267.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_5.setTransform(289.8,267.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgcAuIAAhaIAKAAIAAAIQAEgEAEgDQAFgCAGgBQAIABAGAEQAHAEADAIQADAIAAAKQAAAKgDAHQgEAIgGAEQgIAFgHAAQgFAAgEgDQgEgCgEgEIAAAggAgMgeQgFAHgBANQAAALAGAGQAFAHAHAAQAGAAAGgHQAFgGAAgMQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_6.setTransform(282.85,268.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRALgJQAIgHALgBQAOAAAJAJQAIAKAAAPQAAAMgEAHQgDAIgIADQgHAEgJABQgMgBgJgIgAgMgSQgHAHABALQgBANAHAGQAFAHAHAAQAIAAAGgHQAGgGgBgNQABgLgGgHQgGgGgIgBQgHABgFAGg");
	this.shape_7.setTransform(275.55,267.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAYAtIAAhPIgvAAIAABPIgMAAIAAhZIBHAAIAABZg");
	this.shape_8.setTransform(267.475,266.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_9.setTransform(256.475,267.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgQAFIAAgKIAhAAIAAAKg");
	this.shape_10.setTransform(251.375,267.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgbAuIAAhaIAJAAIAAAIQAEgEAFgDQAEgCAGgBQAIABAHAEQAGAEADAIQADAIAAAKQABAKgEAHQgEAIgGAEQgIAFgHAAQgFAAgEgDQgFgCgDgEIAAAggAgMgeQgFAHgBANQAAALAGAGQAFAHAHAAQAHAAAFgHQAFgGAAgMQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_11.setTransform(245.85,268.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_12.setTransform(238.7,267.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgFIgFAAIAAgMIAMAAIAAAMQAAAGgDAFQgCAEgFACg");
	this.shape_13.setTransform(229.925,271.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAFACADAEQADAFAAAFQAAAFgBAEQgCADgFADQAFAAADAEQADAFAAAFQgBAKgFAEQgHAFgLAAgAgPAYIAPAAQAJAAADgDQAEgCgBgFQAAgDgCgDQgBgDgEgBIgKAAIgNAAgAgPgFIAMAAIAJAAQADAAACgDQACgDAAgDQAAgEgEgDQgDgCgJAAIgMAAg");
	this.shape_14.setTransform(225,267.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgFAuIAAhBIAKAAIAABBgAAGggIAAgNIAMAAIAAANgAgQggIAAgNIALAAIAAANg");
	this.shape_15.setTransform(219.7,266.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_16.setTransform(214.35,267.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AARAuIgQgZQgEgKgFgEQgEgEgHAAIAAArIgMAAIAAhaIAMAAIAAAnQAJAAACgDQAEgDAEgMIAHgNQACgDAFgDQAEgDAGAAIAHABIAAAKIgDAAIgCAAQgGAAgDADQgDADgDAJQgEALgEADQgDADgDACQAHACAJANIATAfg");
	this.shape_17.setTransform(207.6,266.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_18.setTransform(198.15,270.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_19.setTransform(191.975,267.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgFIgFAAIAAgMIAMAAIAAAMQAAAGgDAFQgCAEgFACg");
	this.shape_20.setTransform(182.225,271.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAHAQIgDgQIAAgPIANAAIAAAPIgDAQgAgMAQIgEgQIAAgPIANAAIAAAPIgDAQg");
	this.shape_21.setTransform(178.25,263.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_22.setTransform(171.625,267.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgbAuIAAhaIAKAAIAAAIQADgEAFgDQAEgCAGgBQAIABAHAEQAGAEAEAIQACAIAAAKQABAKgEAHQgEAIgGAEQgIAFgHAAQgEAAgFgDQgFgCgDgEIAAAggAgMgeQgFAHAAANQgBALAGAGQAFAHAHAAQAGAAAGgHQAFgGAAgMQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_23.setTransform(163.85,268.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgYAdQgFgFAAgIQAAgGACgDQACgEADgCIAIgEIAKgBQANgBAHgDIAAgDQAAgGgEgEQgEgEgIAAQgHAAgEADQgDAEgCAGIgLgBQABgHADgFQAEgEAGgCQAHgCAHgBQAJAAAFACQAGADACADQACADACAEIAAALIAAANIABAUIACAIIgMAAIgBgIQgHAFgGACQgEADgHAAQgKAAgHgGgAgBAEIgKADQgEABgBACQgCADABADQAAAEADACQADAEAHAAQAFAAAGgDQAFgDACgFQACgEAAgHIAAgEQgGADgLABg");
	this.shape_24.setTransform(156.55,267.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgEA6IAAgfQgEAEgEABQgEACgFAAQgKAAgIgJQgIgJAAgQQAAgOAHgKQAHgKAMAAQAFAAAEACQAEACAEAEIAAgfIAKAAIAAAfQADgEAEgCQAFgCAEAAQAMAAAHAKQAHAKAAAOQAAAPgIAKQgHAJgLAAIgHgBQgEgBgFgFIAAAfgAAKgSQgEAGAAAMQAAAPAEAFQAEAFAGAAQAHAAAFgGQAFgGAAgNQAAgMgFgHQgEgGgHAAQgIAAgDAHgAgfgSQgEAGAAAMQAAANAFAGQAEAGAHAAQAHAAAEgGQAEgGAAgMQAAgNgEgGQgEgHgIAAQgGAAgFAHg");
	this.shape_25.setTransform(147.775,267.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAMAhIgMgVQgCgGgDgCQgDgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAGAAACgCQACgCADgJIAFgLQACgCADgBIAIgBIADAAIAAAJIgEAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHALIAMAVg");
	this.shape_26.setTransform(140.2,267.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgVAaQgIgKAAgPQAAgQAIgKQAJgJAMAAQAOAAAIAJQAJAKAAAPIAAADIgxAAQABAKAGAGQAFAGAHABQAGAAAEgEQAFgDACgIIAMACQgDALgHAFQgIAGgLAAQgNgBgJgIgAgLgTQgGAFAAAIIAjAAQAAgHgDgFQgGgGgJgBQgGABgFAFg");
	this.shape_27.setTransform(133.35,267.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgjAtIACgLIAFABQAEAAACgDQACgDAAgLIAAg/IA4AAIAABaIgMAAIAAhQIggAAIAAAuQAAAPgBAGQgBAHgFAEQgEADgHAAIgJgBg");
	this.shape_28.setTransform(125.225,266.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AAHAQIgDgQIAAgPIANAAIAAAPIgDAQgAgNAQIgDgQIAAgPIANAAIAAAPIgDAQg");
	this.shape_29.setTransform(119.2,263.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AghAtIAAhZIAhAAQAKgBAHADQAGADADAFQAEAHAAAFQAAAGgDAGQgDAFgHADQAJACAEAGQAEAFAAAIQAAAGgCAGQgDAFgEADQgEAEgGABQgGABgJAAgAgVAjIAVAAIAJAAIAHgDIAEgFQACgEAAgEQAAgFgDgEQgCgEgFgBQgFgCgHAAIgVAAgAgVgHIATAAIALgBQAEgBADgDQACgDAAgFQAAgFgCgDQgCgEgEgBQgEgBgJAAIgSAAg");
	this.shape_30.setTransform(109.325,266.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_31.setTransform(100.025,266.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgFAtIAAhPIgeAAIAAgKIBHAAIAAAKIgeAAIAABPg");
	this.shape_32.setTransform(91.775,266.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgUAoQgIgIgBgLIALgBQACAJAFAEQAEAFAHAAQAHAAAGgGQAFgGAAgHQAAgJgFgFQgFgEgIAAIgHABIABgJIACAAQAGAAAGgEQAGgDAAgIQAAgGgEgEQgFgFgFAAQgHAAgEAFQgEAEgCAIIgLgCQACgLAIgGQAHgGALgBQAGAAAGAEQAHADADAGQADAFAAAGQAAAGgDAFQgDAFgGACQAIACAEAGQAFAFAAAJQAAAMgJAJQgJAHgMABQgMgBgIgGg");
	this.shape_33.setTransform(80.775,266.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgEAtIgshFIAABFIgMAAIAAhZIAMAAIAtBFIAAhFIAKAAIAABZgAARAmIAAgJIAqAAIAAAJgAAWARQgGgHAAgMQAAgLAGgHQAGgGAKAAQAKgBAHAIQAGAGAAAMQAAAKgHAHQgGAGgKAAQgJAAgHgFgAAegOQgDAEAAAIQAAAIADADQADAFAFAAQAFAAADgEQAEgFAAgGQAAgKgEgDQgEgEgEAAQgFAAgDAEg");
	this.shape_34.setTransform(67.125,266.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgEAtIAAhAIAKAAIAABAgAgEggIAAgMIAKAAIAAAMg");
	this.shape_35.setTransform(55.05,266.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_36.setTransform(50.225,268.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgVAaQgJgKAAgPQAAgQAJgKQAJgJANAAQANAAAIAJQAJAKAAAPIAAADIgxAAQABAKAFAGQAGAGAHABQAGAAAFgEQAEgDADgIIALACQgCALgIAFQgHAGgMAAQgOgBgIgIgAgMgTQgEAFgBAIIAkAAQgBgHgEgFQgFgGgIgBQgHABgGAFg");
	this.shape_37.setTransform(42.75,267.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_38.setTransform(36.475,267.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_39.setTransform(30.1,267.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgGACgDQACgEADgCIAJgEIAJgBQANgBAGgDIAAgDQAAgGgDgEQgEgEgIAAQgHAAgEADQgDAEgCAGIgMgBQACgHADgFQAEgEAGgCQAHgCAIgBQAIAAAFACQAFADADADQACADACAEIAAALIAAANIABAUIADAIIgMAAIgDgIQgFAFgHACQgEADgHAAQgLAAgFgGgAgCAEIgKADQgDABgBACQgBADAAADQAAAEADACQAEAEAGAAQAFAAAFgDQAFgDADgFQABgEAAgHIAAgEQgFADgMABg");
	this.shape_40.setTransform(23.05,267.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAEACAEAFQADAEAAAGQAAAEgBAEQgDADgDADQAEAAADAEQADAFAAAFQAAAKgHAFQgFAEgMAAgAgPAYIAPAAQAJAAADgDQADgCABgFQAAgDgCgDQgDgDgDgBIgJAAIgOAAgAgPgFIAMAAIAJAAQACAAACgDQADgDAAgDQAAgFgEgCQgEgCgHAAIgNAAg");
	this.shape_41.setTransform(328.1,255.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEAAACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgHIABgCIgZhBIAMAAIAOAmIADAOIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEACgFABIgHgCg");
	this.shape_42.setTransform(316.125,256.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAMAhIgMgVQgDgFgDgDQgCgCgEABIAAAeIgLAAIAAhBIALAAIAAAcQAFAAACgCQACgCAEgJIAFgLQACgCADgBIAIgBIACAAIAAAJIgDAAQgEAAgBABIgEAIIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_43.setTransform(310.45,255.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgRALgJQAIgHALAAQAOgBAIAKQAJAJAAAPQAAAMgDAHQgEAIgIADQgHAEgJABQgMgBgJgIgAgNgSQgFAHAAALQAAANAFAGQAGAHAHAAQAIAAAGgHQAFgGAAgNQAAgLgFgHQgGgGgIAAQgHAAgGAGg");
	this.shape_44.setTransform(303.6,255.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgcAuIAAhaIALAAIAAAIQADgEAEgDQAGgDAFABQAIAAAGAEQAHAEADAIQAEAIAAAKQgBAJgDAIQgDAIgIAEQgGAFgIAAQgEAAgFgDQgEgCgDgEIAAAggAgMgeQgGAHABANQAAALAEAGQAGAHAHAAQAHAAAFgHQAGgGAAgMQAAgNgGgGQgFgHgHAAQgHAAgFAHg");
	this.shape_45.setTransform(296.65,256.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgUAlQgJgLAAgaQAAgPADgKQAEgKAGgFQAHgFAJgBQAHAAAGAEQAFADAEAFQADAFACAIQADAJAAAMQAAAQgEAKQgDAKgHAFQgGAGgKAAQgMAAgIgKgAgMgeQgFAIAAAWQAAAXAFAHQAFAIAHAAQAHAAAGgIQAFgHAAgXQAAgWgFgHQgGgIgHAAQgHABgFAGg");
	this.shape_46.setTransform(284.075,254.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgdAuQAAgEABgEQADgGAFgGQAFgGAJgIQAOgMAGgGQAFgHAAgHQAAgGgFgFQgFgFgHAAQgIAAgEAFQgFAFAAAJIgMgBQABgNAIgHQAIgHAMAAQANAAAIAHQAHAIAAALQAAAFgCAFQgCAGgFAEIgSAQIgMAMIgEAGIArAAIAAALg");
	this.shape_47.setTransform(276.8438,254.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgUAlQgJgLAAgaQAAgPADgKQAEgKAGgFQAHgFAJgBQAHAAAGAEQAFADAEAFQADAFACAIQADAJAAAMQAAAQgEAKQgDAKgHAFQgGAGgKAAQgMAAgIgKgAgMgeQgFAIAAAWQAAAXAFAHQAFAIAHAAQAHAAAGgIQAFgHAAgXQAAgWgFgHQgGgIgHAAQgHABgFAGg");
	this.shape_48.setTransform(269.875,254.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgdAuQAAgEABgEQADgGAFgGQAFgGAJgIQAOgMAGgGQAFgHAAgHQAAgGgFgFQgFgFgHAAQgIAAgEAFQgFAFAAAJIgMgBQABgNAIgHQAIgHAMAAQANAAAIAHQAHAIAAALQAAAFgCAFQgCAGgFAEIgSAQIgMAMIgEAGIArAAIAAALg");
	this.shape_49.setTransform(262.6438,254.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_50.setTransform(257.55,258);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgUAlQgJgLAAgaQAAgPADgKQAEgKAGgFQAHgFAJgBQAHAAAGAEQAFADAEAFQADAFACAIQADAJAAAMQAAAQgEAKQgDAKgHAFQgGAGgKAAQgMAAgIgKgAgMgeQgFAIAAAWQAAAXAFAHQAFAIAHAAQAHAAAGgIQAFgHAAgXQAAgWgFgHQgGgIgHAAQgHABgFAGg");
	this.shape_51.setTransform(252.175,254.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AAGAuIAAhHIgKAIIgMAGIAAgLQAKgEAGgHQAHgGACgGIAIAAIAABbg");
	this.shape_52.setTransform(244.575,254.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_53.setTransform(239.8,258);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgUAkQgJgKAAgXQAAgaAKgMQAIgLANAAQALAAAHAHQAHAFABALIgKABQgCgGgDgDQgEgGgHAAQgFAAgEAEQgFAEgDAHQgDAIAAANQAEgGAGgDQAFgDAGAAQALAAAIAIQAIAIAAAMQAAAJgDAIQgEAGgHAEQgGAEgJABQgNAAgIgLgAgLABQgFAFgBAJQABAGACAFQACAGAFACQAFADADABQAIgBAEgFQAGgGgBgKQABgKgGgFQgFgEgHAAQgHAAgFAEg");
	this.shape_54.setTransform(234.4,254.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AAGAuIAAhHIgKAIIgMAGIAAgLQAKgEAGgHQAHgGACgGIAIAAIAABbg");
	this.shape_55.setTransform(226.875,254.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgXAdQgHgFABgJQgBgFADgDQACgEAEgCIAIgEIAKgBQAMgBAGgDIAAgDQAAgGgCgEQgFgDgIAAQgHAAgEACQgEADgCAHIgLgBQACgHAEgEQADgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQADADAAAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgFAFgGACQgFACgHABQgLAAgFgGgAgCAEIgJACQgDACgCACQgBADgBACQABAFADACQAEADAGABQAGAAAFgDQAEgDADgFQABgEAAgHIAAgEQgFADgMABg");
	this.shape_56.setTransform(214.9,255.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_57.setTransform(207.875,255.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_58.setTransform(194.625,255.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgRAKgJQAJgHALAAQAOgBAJAKQAIAJAAAPQAAAMgEAHQgEAIgHADQgHAEgJABQgMgBgJgIgAgMgSQgHAHAAALQAAANAHAGQAFAHAHAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgHAAgFAGg");
	this.shape_59.setTransform(186.65,255.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_60.setTransform(179.625,255.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQgBgFADgDQACgEAEgCIAIgEIAKgBQAMgBAHgDIAAgDQAAgGgDgEQgFgDgIAAQgHAAgEACQgEADgCAHIgLgBQACgHAEgEQADgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQACADABAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgFAFgGACQgFACgHABQgKAAgHgGgAgBAEIgKACQgDACgCACQgBADgBACQABAFADACQAEADAGABQAGAAAFgDQAEgDADgFQABgEABgHIAAgEQgHADgKABg");
	this.shape_61.setTransform(172.5,255.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_62.setTransform(166.225,255.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgKAEgHQADgIAIgFQAHgDAHAAQALAAAHAFQAHAFACAKIgLACQgCgHgEgDQgEgDgFAAQgIgBgFAHQgFAGAAAMQAAANAFAHQAFAFAHABQAHAAAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLAAQgMgBgJgIg");
	this.shape_63.setTransform(160.325,255.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgFACgDQACgEAEgCIAIgEIAJgBQANgBAGgDIAAgDQAAgGgCgEQgFgDgIAAQgHAAgEACQgEADgBAHIgMgBQACgHAEgEQADgFAGgCQAHgDAIABQAIAAAFABQAFACADAEQACADABAEIABALIAAANIABAUIADAIIgMAAIgDgIQgGAFgGACQgEACgHABQgLAAgFgGgAgCAEIgKACQgDACgBACQgCADAAACQAAAFAEACQAEADAGABQAGAAAEgDQAFgDADgFQACgEgBgHIAAgEQgFADgMABg");
	this.shape_64.setTransform(148.05,255.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_65.setTransform(141.025,255.35);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgXAdQgHgFABgJQgBgFADgDQACgEAEgCIAIgEIAKgBQAMgBAGgDIAAgDQAAgGgCgEQgFgDgIAAQgHAAgEACQgEADgCAHIgLgBQACgHAEgEQADgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQADADAAAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgFAFgGACQgFACgHABQgLAAgFgGgAgCAEIgJACQgDACgCACQgBADgBACQABAFADACQADADAHABQAGAAAFgDQAEgDADgFQABgEAAgHIAAgEQgFADgMABg");
	this.shape_66.setTransform(133.9,255.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgZAOIALgCQABAGAFAEQAEAEAFAAQAFgBAEgDQAEgDAAgFQAAgEgCgCQgCgEgDAAIgJgBIgDAAIAAgIIAJAAQADAAACgDQACgDAAgDQAAgFgCgDQgEgCgFAAQgIAAgDALIgMgCQAGgSARAAQALAAAGAFQAGAGABAIQgBAIgHAFQAEABADAFQACAEABAFQgBAKgGAFQgGAGgMAAQgWAAgEgVg");
	this.shape_67.setTransform(127.4,255.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQAAgFACgDQACgEAEgCIAHgEIALgBQAMgBAHgDIAAgDQAAgGgEgEQgEgDgIAAQgHAAgEACQgEADgCAHIgKgBQABgHADgEQAEgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQACADACAEIAAALIAAANIAAAUIADAIIgMAAIgBgIQgHAFgFACQgFACgHABQgKAAgHgGgAgBAEIgKACQgEACgBACQgBADAAACQAAAFADACQAEADAGABQAFAAAGgDQAEgDADgFQABgEABgHIAAgEQgHADgKABg");
	this.shape_68.setTransform(121.1,255.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AAMAhIgMgVQgCgFgDgDQgDgCgEABIAAAeIgLAAIAAhBIALAAIAAAcQAGAAACgCQACgCADgJIAFgLQACgCADgBIAIgBIADAAIAAAJIgEAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHALIAMAVg");
	this.shape_69.setTransform(115,255.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAFACADAFQADAEAAAGQAAAEgBAEQgDADgDADQAEAAADAEQADAFAAAFQAAAKgHAFQgFAEgMAAgAgPAYIAPAAQAJAAADgDQADgCABgFQAAgDgCgDQgDgDgDgBIgJAAIgOAAgAgPgFIAMAAIAJAAQACAAACgDQADgDAAgDQAAgFgEgCQgEgCgHAAIgNAAg");
	this.shape_70.setTransform(108.5,255.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgYAdQgFgFgBgJQAAgFADgDQACgEADgCIAIgEIAKgBQANgBAGgDIAAgDQAAgGgDgEQgEgDgIAAQgHAAgEACQgDADgCAHIgLgBQABgHADgEQAEgFAGgCQAHgDAIABQAIAAAFABQAFACADAEQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgGAFgHACQgEACgHABQgKAAgHgGgAgCAEIgKACQgDACgBACQgBADAAACQgBAFAEACQADADAHABQAFAAAFgDQAGgDACgFQABgEAAgHIAAgEQgGADgLABg");
	this.shape_71.setTransform(96.05,255.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_72.setTransform(89.025,255.35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgEAuIAAhBIAJAAIAABBgAgEggIAAgMIAJAAIAAAMg");
	this.shape_73.setTransform(84.05,254.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_74.setTransform(79.225,256.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgYAdQgFgFgBgJQAAgFADgDQACgEADgCIAIgEIAKgBQANgBAHgDIAAgDQgBgGgDgEQgEgDgIAAQgHAAgEACQgDADgCAHIgLgBQABgHADgEQAEgFAGgCQAHgDAHABQAJAAAFABQAFACADAEQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgGAFgHACQgEACgHABQgKAAgHgGgAgBAEIgLACQgCACgCACQgCADABACQgBAFAEACQADADAHABQAFAAAGgDQAFgDACgFQACgEAAgHIAAgEQgHADgKABg");
	this.shape_75.setTransform(66.45,255.35);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAEACAEAFQADAEAAAGQAAAEgBAEQgDADgDADQAEAAADAEQADAFAAAFQAAAKgHAFQgFAEgMAAgAgPAYIAPAAQAJAAADgDQADgCABgFQAAgDgCgDQgDgDgDgBIgJAAIgOAAgAgPgFIAMAAIAJAAQACAAACgDQADgDAAgDQAAgFgEgCQgEgCgHAAIgNAAg");
	this.shape_76.setTransform(59.9,255.35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgRAKgJQAJgHALAAQAOgBAIAKQAJAJAAAPQAAAMgDAHQgFAIgHADQgHAEgJABQgNgBgIgIgAgNgSQgFAHgBALQABANAFAGQAGAHAHAAQAIAAAGgHQAFgGABgNQgBgLgFgHQgGgGgIAAQgHAAgGAGg");
	this.shape_77.setTransform(52.75,255.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AAYAuIAAgsIguAAIAAAsIgNAAIAAhaIANAAIAAAlIAuAAIAAglIAMAAIAABag");
	this.shape_78.setTransform(44.625,254.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AAAAGIgHANIgIgFIAKgMIgOgCIACgJIAPAGIgCgPIAIAAIgBAPIAPgGIACAJIgPACIALAMIgHAFIgJgNg");
	this.shape_79.setTransform(26.95,251.325);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AAAAGIgIANIgHgFIAKgMIgOgCIACgJIAPAGIgCgPIAIAAIgBAPIAPgGIACAJIgPACIALAMIgHAFIgJgNg");
	this.shape_80.setTransform(22,251.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_81.setTransform(87.85,245.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_82.setTransform(78.125,243.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_83.setTransform(70.825,243.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgFAuIAAhaIALAAIAABag");
	this.shape_84.setTransform(66.475,241.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgXAdQgHgFABgJQgBgFADgDQACgEAEgCIAIgEIAKgBQAMgCAGgCIAAgDQABgHgDgDQgFgDgIAAQgHAAgEACQgEAEgCAGIgLgBQACgHAEgEQADgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQADADAAAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgFAFgGACQgFACgHAAQgLABgFgGgAgBAEIgKACQgDABgCADQgBACgBADQABAFADACQADADAHAAQAGAAAEgCQAFgDADgFQABgDAAgIIAAgEQgFACgLACg");
	this.shape_85.setTransform(61.45,243.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgUApQgKgGgFgMQgEgKAAgNQAAgOAFgKQAFgLALgGQAKgFALAAQANAAAKAGQAJAHAEANIgMADQgDgKgGgFQgGgEgKAAQgJAAgHAFQgHAFgDAJQgDAIAAAJQAAALADAJQAEAIAHAEQAHAFAHAAQALgBAHgFQAHgGACgMIAMAEQgEAPgJAHQgKAIgPAAQgNAAgJgGg");
	this.shape_86.setTransform(53.275,241.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAYAuIAAgsIguAAIAAAsIgNAAIAAhaIANAAIAAAlIAuAAIAAglIAMAAIAABag");
	this.shape_87.setTransform(43.975,241.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgUApQgKgGgFgMQgEgKAAgNQAAgOAFgKQAFgLALgGQAKgFALAAQANAAAKAGQAJAHAEANIgMADQgDgKgGgFQgGgEgKAAQgJAAgHAFQgHAFgDAJQgDAIAAAJQAAALADAJQAEAIAHAEQAHAFAHAAQALgBAHgFQAHgGACgMIAMAEQgEAPgJAHQgKAIgPAAQgNAAgJgGg");
	this.shape_88.setTransform(34.875,241.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AAgAuIAAhMIgbBMIgKAAIgahNIAABNIgLAAIAAhaIASAAIAVA/IAEANIAEgOIAWg+IAQAAIAABag");
	this.shape_89.setTransform(24.85,241.85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgKAEgIQADgIAIgEQAHgDAHAAQALgBAHAGQAHAFACAKIgLACQgCgHgEgDQgEgEgFABQgIAAgFAFQgFAHAAAMQAAANAFAHQAFAFAHAAQAHABAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLgBQgMAAgJgJg");
	this.shape_90.setTransform(328.475,230.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AAMAhIgMgUQgCgHgDgBQgDgCgEAAIAAAeIgLAAIAAhBIALAAIAAAcQAGABACgCQACgCADgLIAFgKQACgDADAAIAJgBIACAAIAAAJIgDAAQgFAAgBABIgEAJIgEAJIgGAEQAGABAHAMIAMAUg");
	this.shape_91.setTransform(322.65,230.85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgVAZQgIgIgBgQQABgQAIgJQAJgJAMAAQAOAAAIAJQAJAIAAAQIAAADIgxAAQABAKAFAHQAGAFAHAAQAGABAFgEQAEgDACgHIAMABQgCALgIAFQgHAGgMgBQgNAAgJgJgAgMgTQgEAFgBAJIAjAAQAAgJgEgEQgFgHgJABQgGgBgGAGg");
	this.shape_92.setTransform(315.8,230.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_93.setTransform(308.225,230.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_94.setTransform(301.35,230.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_95.setTransform(293.525,230.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgIALABQAOAAAJAJQAIAIAAAQQAAAMgEAHQgEAIgHAEQgHADgJAAQgMAAgJgJgAgMgSQgHAGAAAMQAAANAHAGQAFAHAHgBQAIABAGgHQAGgGgBgNQABgLgGgHQgGgHgIABQgHgBgFAHg");
	this.shape_96.setTransform(285.55,230.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAMAhIgMgUQgCgHgDgBQgDgCgEAAIAAAeIgLAAIAAhBIALAAIAAAcQAFABADgCQACgCADgLIAFgKQACgDADAAIAJgBIABAAIAAAJIgCAAQgFAAgBABIgEAJIgFAJIgFAEQAGABAHAMIAMAUg");
	this.shape_97.setTransform(279.55,230.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AAQAuIAAgyIgeAyIgMAAIAAhCIALAAIAAAyIAegyIAMAAIAABCgAgLggQgEgEgCgIIAIAAQABAEADACQACACADAAQAGAAACgCQADgCABgEIAIAAQgCAHgEAFQgFADgIAAQgHAAgFgDg");
	this.shape_98.setTransform(253.25,229.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_99.setTransform(246.15,230.85);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_100.setTransform(239.075,230.85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_101.setTransform(232.625,230.85);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_102.setTransform(226.15,230.85);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_103.setTransform(219.725,230.85);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQgBgEADgEQACgFAEgBIAIgEIAKgBQAMgCAHgCIAAgDQAAgHgDgDQgFgDgIAAQgHAAgEACQgEAEgCAGIgLgBQACgHAEgEQADgFAHgCQAGgCAHAAQAJAAAFACQAGABACADQACADABAFIABAKIAAAOIAAAUIAEAIIgNAAIgCgIQgFAFgGACQgFACgHAAQgKABgHgGgAgBAEIgKACQgDABgCADQgBACgBADQABAFADACQAEADAGAAQAGAAAFgCQAEgDADgFQABgEABgHIAAgEQgHACgKACg");
	this.shape_104.setTransform(213.45,230.85);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_105.setTransform(206.5,230.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgEACgEQACgFADgBIAJgEIAJgBQANgCAGgCIAAgDQAAgHgDgDQgEgDgIAAQgHAAgEACQgDAEgCAGIgMgBQACgHADgEQAEgFAGgCQAHgCAIAAQAIAAAFACQAFABADADQACADACAFIAAAKIAAAOIABAUIADAIIgMAAIgDgIQgFAFgHACQgEACgHAAQgLABgFgGgAgCAEIgKACQgDABgBADQgBACAAADQAAAFADACQAEADAGAAQAFAAAFgCQAFgDADgFQABgEAAgHIAAgEQgFACgMACg");
	this.shape_106.setTransform(199.45,230.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_107.setTransform(192.4,230.85);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgKAEgIQADgIAIgEQAHgDAHAAQALgBAHAGQAHAFACAKIgLACQgCgHgEgDQgEgEgFABQgIAAgFAFQgFAHAAAMQAAANAFAHQAFAFAHAAQAHABAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLgBQgMAAgJgJg");
	this.shape_108.setTransform(185.875,230.85);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AAMAhIgMgUQgCgHgDgBQgDgCgEAAIAAAeIgLAAIAAhBIALAAIAAAcQAGABACgCQACgCADgLIAFgKQACgDADAAIAJgBIACAAIAAAJIgDAAQgFAAgBABIgEAJIgFAJIgFAEQAGABAHAMIAMAUg");
	this.shape_109.setTransform(180,230.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRAKgJQAJgIALABQAOAAAJAJQAIAIAAAQQAAAMgEAHQgEAIgHAEQgHADgJAAQgMAAgJgJgAgMgSQgHAGAAAMQAAANAHAGQAFAHAHgBQAJABAFgHQAGgGAAgNQAAgLgGgHQgFgHgJABQgHgBgFAHg");
	this.shape_110.setTransform(173.15,230.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgbAuIAAhaIAKAAIAAAJQADgFAFgDQAFgCAFAAQAIgBAGAFQAHAEAEAIQADAIAAAJQgBAKgDAIQgDAIgIAEQgGAFgIgBQgFAAgEgCQgEgCgDgEIAAAggAgMgeQgGAGABAOQAAALAEAGQAGAHAHgBQAHABAFgHQAGgGAAgNQAAgMgGgHQgFgGgHAAQgHAAgFAHg");
	this.shape_111.setTransform(166.25,232.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_112.setTransform(158.625,231.775);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgFAuIAAhCIAKAAIAABCgAgFggIAAgMIAKAAIAAAMg");
	this.shape_113.setTransform(153.65,229.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgSAhIAAhBIAlAAIAAAJIgaAAIAAA4g");
	this.shape_114.setTransform(150.35,230.85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AAQAuIAAgyIgeAyIgMAAIAAhCIALAAIAAAyIAegyIAMAAIAABCgAgLggQgEgEgCgIIAIAAQABAEADACQACACADAAQAGAAACgCQADgCABgEIAIAAQgCAHgEAFQgFADgIAAQgHAAgFgDg");
	this.shape_115.setTransform(124.55,229.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_116.setTransform(117.45,230.85);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_117.setTransform(110.375,230.85);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AAPAhIAAgbQgKADgIABQgHAAgGgEQgGgEgCgFQgCgFAAgHIAAgRIALAAIAAAMIABAMQABAEAEACQAEACAFAAQAFAAAKgCIAAgeIAMAAIAABBg");
	this.shape_118.setTransform(103.325,230.85);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgFAuIAAhCIAKAAIAABCgAgFggIAAgMIAKAAIAAAMg");
	this.shape_119.setTransform(98.75,229.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_120.setTransform(93.275,230.875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgXAdQgHgFABgJQAAgEACgEQACgFAEgBIAIgEIAKgBQAMgCAGgCIAAgDQAAgHgCgDQgFgDgIAAQgHAAgEACQgDAEgDAGIgLgBQACgHAEgEQADgFAHgCQAGgCAIAAQAIAAAFACQAFABADADQADADAAAFIABAKIAAAOIAAAUIAEAIIgNAAIgCgIQgGAFgFACQgFACgHAAQgLABgFgGgAgCAEIgKACQgCABgCADQgCACAAADQAAAFAEACQADADAHAAQAGAAAEgCQAFgDADgFQACgEgBgHIAAgEQgFACgMACg");
	this.shape_121.setTransform(86.3,230.85);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_122.setTransform(80.075,230.85);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgKAEgIQADgIAIgEQAHgDAHAAQALgBAHAGQAHAFACAKIgLACQgCgHgEgDQgEgEgFABQgIAAgFAFQgFAHAAAMQAAANAFAHQAFAFAHAAQAHABAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLgBQgMAAgJgJg");
	this.shape_123.setTransform(74.125,230.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_124.setTransform(67.2,230.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgbAuIAAhaIAKAAIAAAJQADgFAFgDQAEgCAGAAQAIgBAHAFQAGAEAEAIQACAIAAAJQAAAKgDAIQgEAIgGAEQgIAFgHgBQgEAAgFgCQgFgCgDgEIAAAggAgMgeQgFAGAAAOQAAALAEAGQAGAHAHgBQAGABAGgHQAFgGABgNQgBgMgFgHQgFgGgHAAQgHAAgFAHg");
	this.shape_125.setTransform(60.25,232.05);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AAMAhIgMgUQgDgHgDgBQgCgCgEAAIAAAeIgLAAIAAhBIALAAIAAAcQAFABACgCQACgCAEgLIAFgKQACgDADAAIAJgBIABAAIAAAJIgCAAQgFAAgBABIgEAJIgFAJIgFAEQAGABAHAMIAMAUg");
	this.shape_126.setTransform(54.2,230.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRAKgJQAJgIALABQAOAAAIAJQAJAIAAAQQAAAMgDAHQgFAIgHAEQgHADgJAAQgNAAgIgJgAgNgSQgFAGgBAMQABANAFAGQAGAHAHgBQAIABAGgHQAFgGABgNQgBgLgFgHQgGgHgIABQgHgBgGAHg");
	this.shape_127.setTransform(47.35,230.85);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgbAuIAAhaIAKAAIAAAJQADgFAFgDQAEgCAGAAQAIgBAHAFQAGAEAEAIQACAIAAAJQAAAKgDAIQgEAIgGAEQgIAFgHgBQgEAAgFgCQgFgCgCgEIAAAggAgMgeQgFAGAAAOQAAALAEAGQAGAHAHgBQAGABAGgHQAFgGABgNQgBgMgFgHQgFgGgHAAQgHAAgFAHg");
	this.shape_128.setTransform(40.45,232.05);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AAMAhIgMgUQgDgHgCgBQgDgCgEAAIAAAeIgLAAIAAhBIALAAIAAAcQAFABACgCQACgCAEgLIAFgKQACgDADAAIAJgBIABAAIAAAJIgCAAQgFAAgBABIgEAJIgFAJIgFAEQAGABAHAMIAMAUg");
	this.shape_129.setTransform(34.4,230.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgFAuIAAhCIALAAIAABCgAgFggIAAgMIALAAIAAAMg");
	this.shape_130.setTransform(29.75,229.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_131.setTransform(23.925,230.85);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgIALABQAOAAAIAJQAJAIAAAQQAAAMgDAHQgEAHgIAFQgHADgJAAQgMABgJgKgAgNgSQgFAGAAAMQAAANAFAGQAGAGAHAAQAIAAAGgGQAFgGABgNQgBgMgFgGQgGgHgIABQgHgBgGAHg");
	this.shape_132.setTransform(327.9,218.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgcAvIAAhbIALAAIAAAJQADgFAEgDQAGgCAFAAQAIgBAGAFQAHAEADAIQAEAIAAAJQgBAKgDAIQgDAIgIAEQgGAFgIgBQgFABgEgDQgEgCgDgEIAAAhgAgMgeQgGAGABANQAAAMAEAGQAGAGAHAAQAHAAAFgGQAGgGAAgNQAAgMgGgHQgFgGgHAAQgHAAgFAHg");
	this.shape_133.setTransform(320.95,219.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_134.setTransform(313.8,218.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAHIgJAPIgOAAIAMgSQAFgIAGgBQgKgCgEgEQgFgGAAgHQAAgIAGgGQAGgFAMAAIAdAAIAABBgAgKgUQgDAEAAAEQAAAFAFAEQAEACAKAAIAMAAIAAgWIgQAAQgJAAgDADg");
	this.shape_135.setTransform(282.925,218.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgJAEgJQADgHAIgEQAHgEAHAAQALgBAHAGQAHAFACALIgLABQgCgGgEgEQgEgDgFAAQgIAAgFAFQgFAHAAAMQAAANAFAHQAFAFAHAAQAHABAEgFQAFgEABgIIALABQgCAMgHAGQgIAGgLAAQgMABgJgKg");
	this.shape_136.setTransform(276.775,218.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgaAhIAAhBIALAAIAAAaIAOAAQANAAAIAFQAHAFAAAJQAAAIgGAGQgGAGgOAAgAgPAYIAMAAQAKAAAEgDQAFgCAAgGQAAgFgEgDQgDgDgLAAIgNAAg");
	this.shape_137.setTransform(270.325,218.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_138.setTransform(263.875,218.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgVAZQgJgIABgRQgBgPAJgJQAJgJANAAQANAAAIAJQAJAIgBAQIAAADIgwAAQABAKAGAHQAFAFAHAAQAGABAEgEQAFgDACgHIAMABQgCALgIAFQgIAGgLgBQgOABgIgKgAgLgTQgGAFAAAJIAjAAQAAgJgDgEQgGgHgIABQgHgBgFAGg");
	this.shape_139.setTransform(257.8,218.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_140.setTransform(250.375,219.525);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AAQAuIAAgyIgeAyIgMAAIAAhCIALAAIAAAyIAegyIAMAAIAABCgAgKggQgGgFAAgIIAIAAQAAAEADADQADACADAAQAFAAADgCQACgCABgFIAHAAQgBAIgEAFQgFADgIAAQgHAAgEgDg");
	this.shape_141.setTransform(243.3,217.35);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_142.setTransform(214.275,222.15);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgBAcIAPgcIgPgbIAIAAIAUAbIgUAcgAgaAcIARgcIgRgbIAKAAIASAbIgSAcg");
	this.shape_143.setTransform(208.975,218.625);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAHIgJAPIgOAAIAMgSQAFgIAGgBQgKgCgEgEQgFgGAAgHQAAgIAGgGQAGgFAMAAIAdAAIAABBgAgKgUQgDAEAAAEQAAAFAFAEQAEACAKAAIAMAAIAAgWIgQAAQgJAAgDADg");
	this.shape_144.setTransform(201.675,218.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_145.setTransform(195.025,218.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_146.setTransform(187.975,218.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgFAuIAAhCIAKAAIAABCgAgFggIAAgNIAKAAIAAANg");
	this.shape_147.setTransform(183,217.35);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_148.setTransform(177.525,218.625);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgIALABQAOAAAIAJQAJAIAAAQQAAAMgDAHQgEAHgIAFQgHADgJAAQgMABgJgKgAgNgSQgFAGAAAMQAAANAFAGQAGAGAHAAQAIAAAGgGQAFgGABgNQgBgMgFgGQgGgHgIABQgHgBgGAHg");
	this.shape_149.setTransform(170.85,218.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AAMAhIgMgUQgDgHgDgBQgCgCgEAAIAAAeIgLAAIAAhBIALAAIAAAdQAFAAADgCQABgCAEgLIAFgKQACgDADAAIAIgBIADAAIAAAJIgEAAQgEAAgBACIgEAIIgEAJIgGAEQAGABAHAMIAMAUg");
	this.shape_150.setTransform(164.85,218.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgIALABQAOAAAJAJQAIAIAAAQQAAAMgEAHQgDAHgIAFQgHADgJAAQgMABgJgKgAgMgSQgHAGABAMQgBANAHAGQAFAGAHAAQAIAAAGgGQAGgGgBgNQABgMgGgGQgGgHgIABQgHgBgFAHg");
	this.shape_151.setTransform(158,218.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_152.setTransform(151.05,218.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgIALABQAOAAAJAJQAIAIAAAQQAAAMgEAHQgDAHgIAFQgHADgJAAQgMABgJgKgAgMgSQgHAGAAAMQAAANAHAGQAFAGAHAAQAIAAAGgGQAGgGgBgNQABgMgGgGQgGgHgIABQgHgBgFAHg");
	this.shape_153.setTransform(120.3,218.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgSAhIAAhBIAlAAIAAAJIgaAAIAAA4g");
	this.shape_154.setTransform(115.2,218.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgQAFIAAgJIAhAAIAAAJg");
	this.shape_155.setTransform(110.325,218.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgUAnQgIgGgBgMIALgCQACAKAFAEQAEAFAHgBQAHABAGgGQAFgFAAgJQAAgHgFgFQgFgGgIAAIgHACIABgJIACAAQAGAAAGgDQAGgFAAgHQAAgGgEgFQgFgDgFAAQgHAAgEADQgEAFgCAIIgLgCQACgLAIgGQAHgHALABQAGAAAGACQAHAEADAFQADAGAAAGQAAAGgDAFQgDAFgGADQAIACAEAEQAFAGAAAJQAAAMgJAIQgJAJgMgBQgMABgIgIg");
	this.shape_156.setTransform(104.625,217.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AAQAuIAAgyIgeAyIgMAAIAAhCIALAAIAAAyIAegyIAMAAIAABCgAgKggQgGgFgBgIIAJAAQAAAEADADQADACACAAQAFAAADgCQADgCABgFIAHAAQgBAIgEAFQgFADgIAAQgHAAgEgDg");
	this.shape_157.setTransform(73.85,217.35);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgFAuIAAhCIALAAIAABCgAgFggIAAgNIALAAIAAANg");
	this.shape_158.setTransform(68.9,217.35);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_159.setTransform(64.075,219.525);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgaAhIAAhBIALAAIAAAaIAOAAQANAAAIAFQAHAFAAAJQAAAIgGAGQgGAGgOAAgAgPAYIAMAAQAKAAAEgDQAFgCAAgGQAAgFgEgDQgDgDgLAAIgNAAg");
	this.shape_160.setTransform(57.075,218.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_161.setTransform(49.475,218.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgYAdQgFgFgBgJQAAgEADgEQACgEADgDIAIgDIAKgBQANgCAGgCIAAgDQAAgHgDgDQgEgDgIAAQgHAAgEADQgDACgCAHIgLgBQABgHADgEQAEgFAGgCQAHgCAIAAQAIAAAFACQAFABADADQADAEABAEIAAAKIAAAOIABAUIACAIIgLAAIgCgIQgGAFgHACQgEACgHAAQgKABgHgGgAgCAEIgKACQgDACgBACQgBACAAADQgBAFAEADQADACAHAAQAFABAFgDQAGgDACgFQABgEAAgHIAAgEQgGACgLACg");
	this.shape_162.setTransform(42.5,218.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AARAuIgQgZQgFgKgEgEQgEgEgHAAIAAArIgMAAIAAhaIAMAAIAAAnQAIAAADgDQAEgDAEgMIAHgNQACgDAFgDQAEgDAGAAIAHABIAAAKIgDAAIgCAAQgGAAgDADQgDADgDAJQgEALgEADQgDADgDACQAHACAJANIATAfg");
	this.shape_163.setTransform(35.8,217.325);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AARAcIgTgcIATgbIAKAAIgRAbIARAcgAgGAcIgTgcIATgbIAJAAIgQAbIAQAcg");
	this.shape_164.setTransform(28,218.625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AAAAGIgIANIgHgFIAKgMIgOgCIACgJIAPAGIgCgPIAIAAIgBAPIAPgGIACAJIgPACIALAMIgHAFIgJgNg");
	this.shape_165.setTransform(22,214.575);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgRAvIAahdIAJAAIgaBdg");
	this.shape_166.setTransform(316.525,192.85);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgYAdQgFgFgBgIQAAgFADgEQACgFADgCIAIgCIAKgCQANgBAGgDIAAgDQAAgGgDgDQgEgFgIAAQgHAAgEAEQgDACgCAIIgLgCQABgHADgFQAEgEAGgCQAHgDAIAAQAIAAAFADQAFACADACQADADABAFIAAAKIAAAPIABATIACAIIgLAAIgCgIQgGAFgHADQgEABgHABQgKgBgHgFgAgCAEIgKADQgDABgBACQgBADAAADQgBAEAEADQADACAHAAQAFAAAFgCQAGgDACgFQABgDAAgIIAAgEQgGADgLABg");
	this.shape_167.setTransform(311.15,194.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgOAgQgFgDgCgDQgDgEgBgEIgBgLIAAgoIAMAAIAAAkIAAAMQABAEAEADQADACAFAAQAEAAAFgCQAEgDACgEQACgFAAgIIAAgjIALAAIAABBIgKAAIAAgJQgIALgMAAQgGAAgFgCg");
	this.shape_168.setTransform(304.025,194.175);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_169.setTransform(298.85,196.75);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AAiAiIAAgpQAAgHgCgDQgBgCgDgCQgCgCgEAAQgHAAgFAFQgEAEAAAKIAAAmIgLAAIAAgqQAAgIgCgDQgDgEgGAAQgFAAgEACQgEADgCAFQgCAEAAAJIAAAiIgLAAIAAhBIAKAAIAAAJQADgFAFgDQAGgDAGAAQAIAAAEADQAEADACAGQAIgMAMAAQAKAAAFAGQAGAFAAALIAAAtg");
	this.shape_170.setTransform(291.725,194.025);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgVAZQgJgJAAgQQAAgSAKgIQAJgIALAAQAOABAIAIQAJAJAAAQQAAAMgDAHQgFAHgHAFQgHADgJABQgNAAgIgKgAgNgSQgFAGAAAMQAAAMAFAHQAGAGAHAAQAIAAAGgGQAFgHABgMQgBgMgFgGQgGgHgIAAQgHAAgGAHg");
	this.shape_171.setTransform(282.8,194.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgJAEgJQADgHAIgEQAHgFAHAAQALAAAHAGQAHAGACAKIgLABQgCgHgEgDQgEgEgFAAQgIABgFAFQgFAHAAAMQAAANAFAGQAFAHAHgBQAHAAAEgEQAFgEABgIIALABQgCALgHAHQgIAGgLABQgMAAgJgKg");
	this.shape_172.setTransform(276.325,194.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_173.setTransform(271.2,196.75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgVAZQgJgJAAgQQAAgSALgIQAIgIALAAQAOABAIAIQAJAJAAAQQAAAMgDAHQgEAHgIAFQgHADgJABQgMAAgJgKgAgNgSQgFAGAAAMQAAAMAFAHQAGAGAHAAQAIAAAGgGQAFgHABgMQgBgMgFgGQgGgHgIAAQgHAAgGAHg");
	this.shape_174.setTransform(265.8,194.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgRAiIAAhBIAKAAIAAAKQAEgHADgDQACgCAEAAQAGAAAGAEIgEAKQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_175.setTransform(260.675,194.025);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgbAvIAAhbIAKAAIAAAIQADgFAFgCQAEgDAGAAQAIAAAHAFQAGAEAEAIQACAIAAAJQAAALgDAHQgEAIgGAEQgIAEgHABQgEgBgFgCQgFgCgDgEIAAAhgAgMgeQgFAGAAANQAAAMAEAGQAGAGAHAAQAGAAAGgGQAFgHABgMQgBgMgFgHQgFgGgHAAQgHAAgFAHg");
	this.shape_176.setTransform(254.65,195.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgVAZQgJgJAAgQQAAgSALgIQAIgIALAAQAOABAIAIQAJAJAAAQQAAAMgDAHQgEAHgIAFQgHADgJABQgMAAgJgKgAgNgSQgFAGAAAMQAAAMAFAHQAGAGAHAAQAIAAAGgGQAFgHABgMQgBgMgFgGQgGgHgIAAQgHAAgGAHg");
	this.shape_177.setTransform(247.35,194.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgVAZQgIgJgBgQQABgPAIgKQAJgIAMgBQAOABAIAIQAJAJAAAQIAAADIgxAAQABALAFAFQAGAHAHgBQAGAAAFgDQAEgDACgIIAMACQgCAKgIAGQgHAFgMABQgNAAgJgKgAgMgTQgEAFgBAIIAjAAQAAgHgEgFQgFgHgJAAQgGAAgGAGg");
	this.shape_178.setTransform(240.2,194.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgBArQgDgCgBgDQgCgEAAgJIAAgmIgIAAIAAgIIAIAAIAAgQIAKgHIAAAXIAMAAIAAAIIgMAAIAAAnIABAFIACADIAEABIAFgBIABAKIgIABQgGAAgDgCg");
	this.shape_179.setTransform(235.025,193);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgSAdQgGgFgDgKIAMgDQABAHADAEQAFADAHAAQAHAAAEgDQAEgDAAgEQAAgEgDgCIgMgEQgLgDgFgCQgFgBgCgFQgCgDAAgGQAAgEACgDQACgEADgDQACgCAFgBQAEgCAFAAQAHAAAHADQAFACADAEQADADABAHIgLACQgBgGgDgCQgEgEgGAAQgIAAgDADQgDADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACACADABIAJADIAQAFQAFABACAEQADAEABAGQAAAFgEAFQgDAFgHADQgFACgIABQgMgBgHgFg");
	this.shape_180.setTransform(229.95,194.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgVAZQgJgJAAgQQAAgSAKgIQAJgIALAAQAOABAIAIQAJAJAAAQQAAAMgDAHQgFAHgHAFQgHADgJABQgNAAgIgKgAgNgSQgFAGgBAMQABAMAFAHQAGAGAHAAQAJAAAFgGQAGgHAAgMQAAgMgGgGQgFgHgJAAQgHAAgGAHg");
	this.shape_181.setTransform(223.2,194.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgRAvIAahdIAJAAIgaBdg");
	this.shape_182.setTransform(217.975,192.85);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgRAvIAahdIAJAAIgaBdg");
	this.shape_183.setTransform(214.425,192.85);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgFAhIAAgNIALAAIAAANgAgFgTIAAgNIALAAIAAANg");
	this.shape_184.setTransform(210.95,194.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgSAdQgHgFgCgKIALgDQACAHADAEQAFADAGAAQAJAAADgDQAEgDAAgEQAAgEgDgCIgMgEQgMgDgEgCQgFgBgCgFQgDgDAAgGQABgEACgDQACgEADgDQACgCAFgBQAFgCAEAAQAIAAAGADQAFACADAEQACADACAHIgLACQgBgGgEgCQgDgEgGAAQgHAAgEADQgDADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQABACADABIAIADIARAFQAFABACAEQADAEAAAGQABAFgEAFQgDAFgGADQgHACgIABQgLgBgHgFg");
	this.shape_185.setTransform(205.9,194.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgcAvIAAhbIAKAAIAAAIQAEgFAEgCQAGgDAFAAQAIAAAGAFQAHAEADAIQAEAIAAAJQAAALgEAHQgDAIgIAEQgGAEgIABQgEgBgFgCQgEgCgDgEIAAAhgAgMgeQgGAGAAANQABAMAFAGQAFAGAHAAQAGAAAGgGQAGgHgBgMQABgMgGgHQgFgGgHAAQgGAAgGAHg");
	this.shape_186.setTransform(199.35,195.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgBArQgDgCgBgDQgCgEAAgJIAAgmIgIAAIAAgIIAIAAIAAgQIAKgHIAAAXIAMAAIAAAIIgMAAIAAAnIABAFIACADIAEABIAFgBIABAKIgIABQgGAAgDgCg");
	this.shape_187.setTransform(193.975,193);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgBArQgDgCgBgDQgCgEAAgJIAAgmIgIAAIAAgIIAIAAIAAgQIAKgHIAAAXIAMAAIAAAIIgMAAIAAAnIABAFIACADIAEABIAFgBIABAKIgIABQgGAAgDgCg");
	this.shape_188.setTransform(190.425,193);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AAQAtIAAgpQAAgIgEgEQgEgDgGAAQgEgBgFADQgEADgCAEQgCAEAAAHIAAAkIgLAAIAAhaIALAAIAAAhQAIgJALAAQAHAAAGADQAFACADAGQACAFAAAJIAAApg");
	this.shape_189.setTransform(185.025,192.85);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgEAtIAAhAIAKAAIAABAgAgEggIAAgNIAKAAIAAANg");
	this.shape_190.setTransform(176.55,192.85);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_191.setTransform(171.075,194.125);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgYAdQgFgFgBgIQAAgFADgEQACgFADgCIAIgCIAKgCQANgBAHgDIAAgDQgBgGgDgDQgEgFgIAAQgHAAgEAEQgDACgCAIIgLgCQABgHADgFQAEgEAGgCQAHgDAHAAQAJAAAFADQAFACADACQADADABAFIAAAKIAAAPIABATIACAIIgLAAIgCgIQgHAFgGADQgEABgHABQgKgBgHgFgAgBAEIgLADQgCABgCACQgCADABADQgBAEAEADQADACAHAAQAFAAAGgCQAFgDACgFQACgDAAgIIAAgEQgHADgKABg");
	this.shape_192.setTransform(164.1,194.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_193.setTransform(157.825,194.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgVAZQgJgJAAgQQAAgPAJgKQAJgIANgBQANABAIAIQAIAJABAQIAAADIgxAAQABALAFAFQAGAHAHgBQAHAAAEgDQAEgDADgIIALACQgCAKgIAGQgHAFgMABQgOAAgIgKgAgMgTQgEAFgBAIIAkAAQgBgHgEgFQgFgHgIAAQgHAAgGAGg");
	this.shape_194.setTransform(151.75,194.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AAeA4IAAgVIg7AAIAAAVIgLAAIAAggIAHAAQALgRAAgxIAAgNIA3AAIAABPIAIAAIAAAggAgKgoIgCAgQgCATgGANIAoAAIAAhFIgeAAg");
	this.shape_195.setTransform(143.7,193.925);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgFAGIAAgLIAMAAIAAALg");
	this.shape_196.setTransform(134.35,196.75);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AAGAuIAAhHIgKAIIgMAGIAAgLQAKgEAGgHQAHgGACgGIAIAAIAABbg");
	this.shape_197.setTransform(128.525,192.825);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgTAoQgHgFgBgLIAKgBQACAHAEAEQADADAHAAQADAAAFgCQAEgDACgEQACgDACgHQABgGAAgIIAAgCQgDAFgGAEQgFADgGAAQgMAAgIgIQgHgIAAgNQAAgNAIgJQAIgJANABQAHgBAIAFQAHAFAEAJQAEAIAAASQAAAQgEALQgEAJgHAGQgIAFgJABQgLAAgGgHgAgMgeQgFAGAAAJQAAAKAEAFQAGAEAHAAQAHAAAFgEQAGgFAAgLQgBgJgFgGQgFgFgHAAQgHgBgFAHg");
	this.shape_198.setTransform(121.9,192.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgEAtIgshFIAABFIgMAAIAAhaIAMAAIAtBGIAAhGIAKAAIAABagAARAmIAAgJIAqAAIAAAJgAAWAQQgGgGAAgMQAAgLAGgHQAGgGAKgBQAKAAAHAIQAGAGAAALQAAALgHAGQgGAIgKAAQgJAAgHgHgAAegOQgDAEAAAIQAAAIADADQADAFAFAAQAFAAADgEQAEgEAAgIQAAgJgEgDQgEgEgEAAQgFAAgDAEg");
	this.shape_199.setTransform(108.225,192.85);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_200.setTransform(95.9,196.75);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgcAvIAAhbIAKAAIAAAIQAEgFAEgCQAFgDAGAAQAIAAAHAFQAGAEADAIQADAIAAAJQAAALgDAHQgEAIgGAEQgIAEgHABQgFgBgEgCQgEgCgEgEIAAAhgAgMgeQgFAGgBANQAAAMAGAGQAFAGAHAAQAHAAAFgGQAGgHgBgMQABgMgGgHQgFgGgHAAQgGAAgGAHg");
	this.shape_201.setTransform(90.7,195.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgQAtQABgLAEgPQADgPAIgNQAGgPAJgJIgsAAIAAgLIA7AAIAAAJQgJAJgIAQQgKANgDARQgEALAAAOg");
	this.shape_202.setTransform(79.9,192.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AAGAuIAAhHIgKAIIgMAGIAAgLQAKgEAGgHQAHgGACgGIAIAAIAABbg");
	this.shape_203.setTransform(72.325,192.825);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgUAlQgJgLAAgaQAAgPADgKQAEgKAGgFQAHgGAJABQAHAAAGADQAFACAEAGQADAGACAHQADAIAAANQAAAQgEAKQgDAKgHAFQgGAFgKABQgMAAgIgKgAgMgeQgFAJAAAVQAAAWAFAIQAFAHAHAAQAHAAAGgHQAFgIAAgWQAAgVgFgIQgGgIgHABQgHgBgFAHg");
	this.shape_204.setTransform(65.675,192.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgdAuQAAgEABgEQADgGAFgGQAFgGAJgIQAOgMAGgGQAFgHAAgHQAAgGgFgFQgFgFgHAAQgIAAgEAFQgFAFAAAJIgMgBQABgNAIgHQAIgHAMAAQANAAAIAHQAHAIAAALQAAAFgCAFQgCAGgFAEIgSAQIgMAMIgEAGIArAAIAAALg");
	this.shape_205.setTransform(58.4438,192.825);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgGAGIAAgLIAMAAIAAALg");
	this.shape_206.setTransform(53.3,196.75);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgdAuQAAgEABgEQADgGAFgGQAFgGAJgIQAOgMAGgGQAFgHAAgHQAAgGgFgFQgFgFgHAAQgIAAgEAFQgFAFAAAJIgMgBQABgNAIgHQAIgHAMAAQANAAAIAHQAHAIAAALQAAAFgCAFQgCAGgFAEIgSAQIgMAMIgEAGIArAAIAAALg");
	this.shape_207.setTransform(47.7938,192.825);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AAGAuIAAhHIgKAIIgMAGIAAgLQAKgEAGgHQAHgGACgGIAIAAIAABbg");
	this.shape_208.setTransform(40.375,192.825);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_209.setTransform(35.55,196.75);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AAIAtIAAgVIgmAAIAAgKIAog7IAJAAIAAA7IANAAIAAAKIgNAAIAAAVgAgUAOIAcAAIAAgpg");
	this.shape_210.setTransform(29.95,192.85);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AAGAuIAAhHIgKAIIgMAGIAAgLQAKgEAGgHQAHgGACgGIAIAAIAABbg");
	this.shape_211.setTransform(22.625,192.825);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_212.setTransform(327.625,182.775);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgEAtIAAhAIAJAAIAABAgAgEggIAAgNIAJAAIAAANg");
	this.shape_213.setTransform(322.65,180.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAIAAAFACQAFABADAEQADAFAAAFQAAAFgBAEQgCADgFADQAFAAADAFQADADAAAHQgBAJgFAEQgHAFgLAAgAgPAYIAPAAQAIAAAEgDQADgBAAgGQAAgDgBgDQgCgCgEgBIgKgBIgNAAgAgPgFIAMAAIAJAAQACAAADgDQACgDAAgDQAAgEgEgCQgDgDgJAAIgMAAg");
	this.shape_214.setTransform(318.05,181.85);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgGALQAEgCACgDQAAgDAAgFIgFAAIAAgMIAMAAIAAAMQAAAHgDAEQgCAEgFACg");
	this.shape_215.setTransform(300.675,185.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEgBACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgGIABgEIgZhAIAMAAIAOAlIADAPIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEADgFgBIgHgBg");
	this.shape_216.setTransform(296.725,183.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AAQAiIAAgnQAAgHgCgEQgBgDgDgCQgEgCgEAAQgGAAgFAEQgGAFAAANIAAAjIgLAAIAAhBIAKAAIAAAJQAIgLAMAAQAGAAAFACQAFACADAEQACADABAFIABALIAAAog");
	this.shape_217.setTransform(289.925,181.775);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgXAdQgGgFgBgIQAAgFADgEQACgFADgCIAIgCIAKgCQANgBAGgDIAAgDQAAgGgDgDQgEgFgIAAQgHAAgEAEQgDACgCAIIgLgCQABgHADgFQAEgEAGgCQAHgCAIgBQAIAAAFACQAFADADACQADADABAFIAAAKIAAAPIABATIACAIIgLAAIgCgIQgGAFgHADQgEACgHAAQgKgBgGgFgAgCAEIgKADQgDAAgBADQgBADAAADQgBAEAEADQADADAHAAQAFgBAFgCQAGgDACgFQABgDAAgIIAAgEQgGADgLABg");
	this.shape_218.setTransform(282.8,181.85);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AAiAiIAAgpQAAgHgCgDQgBgCgDgCQgCgCgEAAQgHAAgFAFQgEAEAAAKIAAAmIgLAAIAAgqQAAgIgCgDQgDgEgGAAQgFAAgEACQgEADgCAFQgCAEAAAJIAAAiIgLAAIAAhBIAKAAIAAAJQADgFAFgDQAGgDAGAAQAIAAAEADQAEADACAGQAIgMAMAAQAKAAAFAGQAGAFAAALIAAAtg");
	this.shape_219.setTransform(273.975,181.775);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgRAiIAAhBIAKAAIAAAKQAEgHADgDQACgCAEAAQAGAAAGAEIgEAKQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_220.setTransform(267.025,181.775);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgVAaQgIgKAAgQQAAgPAIgKQAJgIAMgBQAOABAIAIQAJAJAAAQIAAADIgxAAQABALAGAFQAFAHAHAAQAGgBAFgDQAEgDACgIIAMACQgCAKgIAGQgIAFgLABQgNAAgJgJgAgLgTQgFAFgBAIIAjAAQAAgHgDgFQgGgGgJgBQgGABgFAFg");
	this.shape_221.setTransform(260.8,181.85);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgTAqQgLgHgFgKQgGgLAAgOQAAgMAGgMQAFgLALgFQAKgGAMAAQALAAAHADQAJADAEAGQAEAGADAJIgLADQgCgHgDgEQgDgEgGgDQgFgCgIAAQgHAAgGACQgGADgDAEIgGAJQgEAIAAAKQAAAMAEAIQAFAIAHAEQAJAEAHAAQAJAAAHgDQAIgDADgEIAAgRIgbAAIAAgJIAnAAIAAAhQgJAHgJADQgKAEgKAAQgMAAgLgFg");
	this.shape_222.setTransform(252.3,180.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgGALQAEgCACgDQAAgDAAgFIgFAAIAAgMIAMAAIAAAMQAAAHgDAEQgCAEgFACg");
	this.shape_223.setTransform(233.575,185.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgTAqQgLgHgGgKQgFgLAAgOQAAgMAFgMQAGgLALgFQAKgGAMAAQALAAAHADQAJADAEAGQAFAGACAJIgLADQgCgHgDgEQgDgEgGgDQgFgCgIAAQgHAAgGACQgGADgDAEIgHAJQgDAIAAAKQAAAMAEAIQAFAIAIAEQAIAEAHAAQAIAAAIgDQAHgDAEgEIAAgRIgbAAIAAgJIAnAAIAAAhQgJAHgJADQgJAEgKAAQgNAAgLgFg");
	this.shape_224.setTransform(226.85,180.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AAWAtIgfgtIgQAOIAAAfIgLAAIAAhaIALAAIAAAtIAsgtIARAAIglAlIAmA1g");
	this.shape_225.setTransform(218.2,180.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_226.setTransform(199.75,184.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgSALgIQAIgIALAAQAOABAIAIQAJAKAAAPQAAAMgEAHQgDAHgIAEQgHAFgJAAQgMAAgJgJgAgNgSQgFAHAAALQAAAMAFAHQAGAGAHABQAJgBAFgGQAFgHAAgMQAAgLgFgHQgFgGgJgBQgHABgGAGg");
	this.shape_227.setTransform(194.35,181.85);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgUApQgKgGgFgLQgEgLAAgNQAAgOAFgLQAFgKALgFQAKgGALAAQANAAAKAHQAJAGAEAOIgMACQgDgKgGgEQgGgFgKAAQgJAAgHAFQgHAFgDAIQgDAJAAAJQAAALADAIQAEAJAHAFQAHADAHAAQALABAHgGQAHgGACgLIAMACQgEAPgJAJQgKAHgPAAQgNAAgJgGg");
	this.shape_228.setTransform(186.325,180.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AARAiQgGAHgGADQgGADgHAAQgOAAgJgKQgGgHAAgKQAAgIAFgHQAGgGAKgFQgGgHgCgFQgCgEAAgEQAAgIAHgGQAGgGAKAAQAIAAAGAFQAGAGAAAIQAAANgRAJIAQAUIAFgNIALADQgDAMgFAHQAGAJAIAFIgHAJQgHgEgHgJgAgWAKQgDAFAAAEQAAAGAEAGQAFAGAIAAQAFAAAEgDQAGgDADgFIgUgaQgJAGgDAEgAgLgiQgDADAAAEIABAEIADAFIAFAGQAGgEACgEQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_229.setTransform(165.525,180.625);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AAYAtIAAgrIguAAIAAArIgNAAIAAhaIANAAIAAAmIAuAAIAAgmIAMAAIAABag");
	this.shape_230.setTransform(144.525,180.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgRAkIAAAJIgKAAIAAhaIALAAIAAAgQAGgJALAAQAFAAAGADQAFACAEAFQAEAEACAGQACAGAAAHQAAARgJAJQgIAJgMAAQgLAAgGgKgAgMgGQgGAGABALQgBAMAEAFQAFAJAJAAQAHAAAFgGQAFgHAAgMQAAgMgFgGQgFgHgHAAQgHAAgFAHg");
	this.shape_231.setTransform(136.55,180.675);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AAiAiIAAgpQAAgHgCgDQgBgCgDgCQgCgCgEAAQgHAAgFAFQgEAEAAAKIAAAmIgLAAIAAgqQAAgIgCgDQgDgEgGAAQgFAAgEACQgEADgCAFQgCAEAAAJIAAAiIgLAAIAAhBIAKAAIAAAJQADgFAFgDQAGgDAGAAQAIAAAEADQAEADACAGQAIgMAMAAQAKAAAFAGQAGAFAAALIAAAtg");
	this.shape_232.setTransform(127.525,181.775);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgTAqQgLgHgFgKQgGgLAAgOQAAgMAGgMQAFgLAKgFQALgGAMAAQALAAAHADQAJADAEAGQAEAGADAJIgLADQgCgHgDgEQgEgEgFgDQgFgCgIAAQgHAAgGACQgGADgEAEIgFAJQgEAIAAAKQAAAMAFAIQAEAIAHAEQAIAEAIAAQAJAAAHgDQAIgDADgEIAAgRIgbAAIAAgJIAnAAIAAAhQgJAHgJADQgKAEgKAAQgMAAgLgFg");
	this.shape_233.setTransform(117.2,180.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AAQAiIAAgnQAAgHgCgEQgBgDgDgCQgEgCgEAAQgGAAgFAEQgGAFAAANIAAAjIgLAAIAAhBIAKAAIAAAJQAIgLAMAAQAGAAAFACQAFACADAEQACADABAFIABALIAAAog");
	this.shape_234.setTransform(96.725,181.775);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgFAtIAAhAIALAAIAABAgAgFggIAAgNIALAAIAAANg");
	this.shape_235.setTransform(91.75,180.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgVAaQgIgKgBgQQABgPAIgKQAJgIAMgBQAOABAIAIQAJAJAAAQIAAADIgxAAQABALAFAFQAGAHAHAAQAGgBAFgDQAEgDACgIIAMACQgCAKgIAGQgHAFgMABQgNAAgJgJgAgMgTQgEAFgBAIIAjAAQAAgHgEgFQgFgGgJgBQgGABgGAFg");
	this.shape_236.setTransform(86.75,181.85);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AgFAtIAAhaIALAAIAABag");
	this.shape_237.setTransform(81.775,180.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AAWAtIgggtIgPAOIAAAfIgLAAIAAhaIALAAIAAAtIAsgtIARAAIglAlIAmA1g");
	this.shape_238.setTransform(76.65,180.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgEAhIgZhBIAMAAIAOAnIADANIAEgNIAPgnIALAAIgZBBg");
	this.shape_239.setTransform(56.725,181.85);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgFACgEQACgFAEgCIAIgCIAJgCQANgBAGgDIAAgDQAAgGgCgDQgFgFgIAAQgHAAgEAEQgEACgBAIIgMgCQACgHAEgFQADgEAGgCQAHgCAIgBQAIAAAFACQAFADADACQACADABAFIABAKIAAAPIABATIADAIIgMAAIgDgIQgGAFgGADQgEACgHAAQgLgBgFgFgAgCAEIgKADQgDAAgBADQgCADAAADQAAAEAEADQAEADAGAAQAGgBAEgCQAFgDADgFQACgDgBgIIAAgEQgFADgMABg");
	this.shape_240.setTransform(49.95,181.85);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgBArQgDgCgBgDQgCgEAAgJIAAgmIgIAAIAAgIIAIAAIAAgQIAKgHIAAAXIAMAAIAAAIIgMAAIAAAnIABAFIACADIAEABIAFgBIABAKIgIABQgGAAgDgCg");
	this.shape_241.setTransform(44.775,180.75);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgSAdQgGgFgCgKIALgDQABAHADADQAFAFAHAAQAHgBAEgDQAEgDAAgEQAAgEgDgCIgMgEQgLgDgFgCQgFgBgCgFQgDgDABgGQAAgEABgEQADgEADgCQADgCAEgBQAEgBAFgBQAIAAAGACQAFADADAEQADADABAHIgLABQgBgEgDgDQgEgEgGAAQgHABgEACQgDADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACACADABIAJADIARAFQAEABACAEQAEAEAAAGQAAAFgEAFQgDAFgHADQgGACgHABQgMgBgHgFg");
	this.shape_242.setTransform(39.7,181.85);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgOAgQgFgDgCgDQgDgEgBgEIgBgLIAAgoIAMAAIAAAkIAAAMQABAEAEADQADACAFAAQAEAAAFgCQAEgDACgEQACgFAAgIIAAgjIALAAIAABBIgKAAIAAgJQgIALgMAAQgGAAgFgCg");
	this.shape_243.setTransform(32.925,181.925);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AgTAqQgLgHgGgKQgFgLAAgOQAAgMAFgMQAGgLALgFQAKgGANAAQAJAAAJADQAHADAFAGQAFAGACAJIgLADQgCgHgDgEQgDgEgGgDQgGgCgGAAQgIAAgGACQgGADgDAEIgHAJQgDAIAAAKQAAAMAEAIQAFAIAIAEQAHAEAJAAQAHAAAIgDQAHgDAFgEIAAgRIgbAAIAAgJIAmAAIAAAhQgJAHgJADQgKAEgJAAQgNAAgLgFg");
	this.shape_244.setTransform(24.45,180.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_245.setTransform(329.8,172.25);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgRAiIAAhBIAKAAIAAAKQAEgHADgDQACgCAEAAQAGAAAGAEIgEAKQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_246.setTransform(327.075,169.525);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AglAtIAAhZIAgAAIAPAAQAIACAFAFQAIAGADAKQAEAJAAAMQAAAKgDAIQgCAIgEAFQgDAFgFADQgEAEgHABQgGACgIgBgAgYAjIATAAQAIgBAFgBQAFgCADgDQAEgEADgHQACgHAAgKQAAgOgEgHQgFgJgHgCQgEgCgKAAIgTAAg");
	this.shape_247.setTransform(319.95,168.35);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgYAdQgFgFAAgIQAAgGACgDQACgEADgDIAIgCIAKgCQANgBAHgDIAAgDQAAgGgEgDQgEgFgIAAQgHAAgEADQgEAEgBAHIgLgCQABgHADgFQAEgEAGgCQAHgCAHgBQAJAAAFACQAGACACAEQACADACAEIAAALIAAAOIABATIACAIIgMAAIgBgIQgHAFgGADQgEACgHAAQgKgBgHgFgAgBAEIgKADQgEAAgBADQgCACABAEQAAAEADACQADAEAHAAQAFgBAGgCQAFgDACgFQACgEAAgHIAAgEQgHADgKABg");
	this.shape_248.setTransform(300.1,169.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAIAAAFABQAEACAEAEQADAEAAAGQAAAFgBAEQgDADgEADQAFAAADAEQADAFAAAGQAAAJgHAEQgFAFgMAAgAgPAYIAPAAQAIAAAEgDQADgCABgFQAAgDgCgDQgCgCgEgCIgJAAIgOAAgAgPgFIAMAAIAJAAQACAAACgDQADgCAAgEQAAgEgEgCQgEgDgHAAIgNAAg");
	this.shape_249.setTransform(293.55,169.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_250.setTransform(287.075,169.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_251.setTransform(280.725,170.525);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_252.setTransform(273.3,169.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_253.setTransform(266.225,169.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgRAqQgGgGgEgHQgDgJAAgUQAAgaAJgJQAJgKARAAIANAAIACgCIAKABQgBAGgCADQgCADgEABIgOAAQgNAAgFADQgFADgCAGQgCAFgBAKQAFgHAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAALgEAIQgEAHgGAEQgGAFgKAAQgLgBgHgFgAgMgDQgGAGAAAMQAAAMAGAFQAGAHAHAAQAIAAAFgIQAFgHAAgLQAAgLgEgFQgFgHgJAAQgIAAgFAHg");
	this.shape_254.setTransform(259.075,168.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAJQAIAKAAAPQAAAMgEAHQgEAHgHAEQgHAFgJAAQgMgBgJgIgAgMgSQgHAHAAALQAAAMAHAHQAFAGAHABQAIgBAGgGQAGgHgBgMQABgLgGgHQgGgGgIgBQgHABgFAGg");
	this.shape_255.setTransform(251.8,169.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgcAuIAAhaIALAAIAAAIQADgEAEgDQAGgCAFgBQAIABAGAEQAHAEADAIQAEAIAAAKQgBAKgDAHQgDAIgIAEQgGAEgIABQgFgBgEgCQgEgCgDgEIAAAggAgMgeQgGAHABAMQAAAMAEAGQAGAGAHABQAHgBAFgGQAGgHAAgLQAAgNgGgGQgFgHgHAAQgHAAgFAHg");
	this.shape_256.setTransform(244.9,170.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_257.setTransform(237.6,169.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAFACADAEQADAEAAAGQAAAFgCAEQgBADgFADQAFAAADAEQADAFAAAGQgBAJgFAEQgHAFgLAAgAgPAYIAPAAQAJAAADgDQAEgCgBgFQAAgDgCgDQgBgCgEgCIgKAAIgNAAgAgPgFIAMAAIAJAAQADAAACgDQACgCAAgEQAAgEgEgCQgDgDgJAAIgMAAg");
	this.shape_258.setTransform(230.85,169.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgGALQAEgCACgDQAAgDAAgFIgFAAIAAgMIAMAAIAAAMQAAAHgDAEQgCAEgFACg");
	this.shape_259.setTransform(213.975,173.15);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgBAcIAPgcIgPgbIAIAAIAUAbIgUAcgAgaAcIARgcIgRgbIAKAAIASAbIgSAcg");
	this.shape_260.setTransform(208.675,169.625);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgOAaQgHgDgEgIQgFgHAAgIQAAgGAFgIQAEgHAHgFQAIgDAGAAQAIAAAHADQAHAFAFAHQAEAIgBAGQABAIgEAHQgFAIgHADQgHAFgIAAQgHAAgHgFgAgMgVQgFAEgEAGQgEAFABAGQgBAHAEAGQAEAGAFAEQAHACAFAAQAHAAAGgCQAGgEADgGQADgGAAgHQAAgGgDgFQgEgGgGgEQgFgDgHAAQgFAAgHADgAAIARIgDgFIgFgHQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDAAIAAAOIgFAAIAAgfIALAAIAHAAQADABACACQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgCACQgDACgEABIACABIAGAGIADAHgAgHgBIAGAAIAGgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIgBgCIgFgBIgGAAg");
	this.shape_261.setTransform(202.15,165.85);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_262.setTransform(194.175,168.325);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AAZAtIgMgTIgJgMIgFgGIgFgCIgHgBIgOAAIAAAoIgMAAIAAhZIAnAAQAMAAAHACQAGACAEAGQAEAHAAAHQAAAKgHAHQgGAFgNACIAHAEQAGAFAEAHIAQAZgAgbgFIAaAAQAHAAAFgBQAEgCADgDQACgEAAgFQAAgGgEgEQgFgFgKAAIgcAAg");
	this.shape_263.setTransform(185.025,168.35);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgiAtIAAhZIAiAAIANAAQAHABAFAEQAEADADAFQADAGAAAHQAAAMgIAGQgHAJgTgBIgXAAIAAAlgAgWgBIAXAAQALAAAFgFQAFgEAAgIQAAgGgDgDQgDgFgEgBIgMgBIgWAAg");
	this.shape_264.setTransform(175.975,168.35);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_265.setTransform(166.575,168.325);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AghAtIAAhZIBBAAIAAAKIg1AAIAAAcIAxAAIAAAJIgxAAIAAAgIA3AAIAAAKg");
	this.shape_266.setTransform(157.55,168.35);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AgFAtIAAhPIgeAAIAAgKIBHAAIAAAKIgeAAIAABPg");
	this.shape_267.setTransform(149.275,168.35);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgRAsQgIgEgFgHQgFgIAAgJIALgBQABAHADAEQADAFAGADQAGACAHAAQAHAAAFgCQAFgCADgEQACgDAAgFQAAgDgCgDQgDgEgFgCIgQgFQgMgDgFgBQgGgDgEgFQgDgGAAgGQAAgHAEgGQAEgGAIgDQAHgDAJAAQAJAAAIADQAIAEAEAFQAFAHgBAIIgLABQgBgJgGgEQgEgEgLgBQgKAAgFAEQgFAFAAAFQAAAFAEADQADADAOADQAOAEAGADQAHACAEAGQAFAGAAAGQgBAIgEAHQgEAGgIAEQgHADgKAAQgMAAgIgDg");
	this.shape_268.setTransform(141.05,168.35);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_269.setTransform(131.925,168.325);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AARAcIgSgcIASgbIAKAAIgRAbIARAcgAgGAcIgUgcIAUgbIAIAAIgPAbIAPAcg");
	this.shape_270.setTransform(123.35,169.625);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgRAvIAahdIAJAAIgaBdg");
	this.shape_271.setTransform(106.575,168.35);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgBAcIAPgcIgPgbIAIAAIAUAbIgUAcgAgaAcIARgcIgRgbIAKAAIASAbIgSAcg");
	this.shape_272.setTransform(101.225,169.625);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgOAaQgIgDgDgIQgFgHAAgIQAAgGAFgIQAEgHAHgFQAIgDAGAAQAIAAAHADQAHAFAFAHQADAIAAAGQAAAIgDAHQgFAIgHADQgHAFgIAAQgHAAgHgFgAgMgVQgFAEgEAGQgDAFAAAGQAAAHADAGQAEAGAFAEQAHACAFAAQAHAAAGgCQAGgEADgGQAEgGAAgHQAAgGgEgFQgEgGgGgEQgFgDgHAAQgFAAgHADgAAIARIgDgFIgFgHQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDAAIAAAOIgFAAIAAgfIALAAIAHAAQADABACACQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgCACQgDACgFABIADABIAGAGIADAHgAgHgBIAHAAIAFgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIgCgCIgEgBIgGAAg");
	this.shape_273.setTransform(94.7,165.85);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_274.setTransform(86.725,168.325);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgiAtIAAhZIAiAAIANAAQAHABAFAEQAEADADAFQADAGAAAHQAAAMgIAGQgHAJgTgBIgXAAIAAAlgAgWgBIAXAAQALAAAFgFQAFgEAAgIQAAgGgDgDQgDgFgEgBIgMgBIgWAAg");
	this.shape_275.setTransform(78.025,168.35);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AAYAtIAAhPIgvAAIAABPIgMAAIAAhZIBHAAIAABZg");
	this.shape_276.setTransform(68.975,168.35);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_277.setTransform(59.475,168.325);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AghAtIAAhZIBBAAIAAAKIg1AAIAAAcIAyAAIAAAJIgyAAIAAAgIA3AAIAAAKg");
	this.shape_278.setTransform(50.4,168.35);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgFAtIAAhPIgeAAIAAgKIBHAAIAAAKIgeAAIAABPg");
	this.shape_279.setTransform(42.175,168.35);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgUApQgKgGgFgLQgEgMAAgMQAAgOAFgLQAFgKALgGQAKgFALAAQANAAAKAHQAJAGAEAOIgMACQgDgKgGgFQgGgEgKAAQgJAAgHAFQgHAFgDAIQgDAJAAAJQAAALADAIQAEAJAHAFQAHADAHAAQALAAAHgFQAHgGACgLIAMADQgEAPgJAHQgKAIgPAAQgNAAgJgGg");
	this.shape_280.setTransform(34.125,168.35);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_281.setTransform(24.525,168.325);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_282.setTransform(327.95,157.35);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AAMAhIgMgVQgDgGgDgCQgCgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAFAAACgCQACgBAEgKIAFgLQACgCADgBIAJgBIABAAIAAAJIgCAAQgFAAgBABIgEAIIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_283.setTransform(322.05,157.35);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAIAAAFABQAEACAEAFQADAEAAAFQAAAFgBAEQgCADgFADQAFAAADAEQADAFAAAFQAAAKgHAEQgFAFgMAAgAgPAYIAPAAQAIAAAEgDQADgCABgFQAAgDgCgDQgCgDgEgBIgJAAIgOAAgAgPgFIAMAAIAJAAQADAAABgDQADgDAAgDQAAgEgEgDQgEgCgHAAIgNAAg");
	this.shape_284.setTransform(315.6,157.35);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgXAdQgGgFgBgIQAAgGADgDQACgEADgCIAIgEIAKgBQANgBAGgDIAAgDQAAgGgDgEQgEgEgIABQgHAAgEACQgDAEgCAGIgLgBQABgHADgEQAEgFAGgCQAHgCAIgBQAIAAAFACQAFADADADQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgGAFgHACQgEADgHAAQgKAAgGgGgAgCAEIgKADQgDABgBACQgBADAAADQgBAEAEACQADAEAHAAQAFAAAFgDQAGgDACgFQABgEAAgHIAAgEQgGADgLABg");
	this.shape_285.setTransform(308.45,157.35);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgRAqQgGgGgEgHQgDgJAAgUQAAgaAJgJQAJgKARAAIANAAIACgCIAKABQgBAGgCADQgCACgEACIgOAAQgNAAgFADQgFADgCAGQgCAFgBAKQAFgHAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAAMgEAHQgEAIgGADQgGAFgKAAQgLAAgHgGgAgMgDQgGAGAAAMQAAALAGAHQAGAFAHABQAIgBAFgGQAFgIAAgLQAAgKgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_286.setTransform(301.575,156.05);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAIAKQAJAJAAAPQAAAMgDAHQgFAIgHADQgHAFgJAAQgNgBgIgIgAgNgSQgFAHgBALQABANAFAGQAGAHAHAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgHAAgGAGg");
	this.shape_287.setTransform(294.3,157.35);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_288.setTransform(286.875,158.275);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgFAuIAAhBIALAAIAABBgAAGggIAAgNIALAAIAAANgAgRggIAAgNIAMAAIAAANg");
	this.shape_289.setTransform(261.95,156.075);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRALgJQAIgHALgBQAOAAAJAKQAIAJAAAPQAAAMgEAHQgDAIgIADQgHAFgJAAQgMgBgJgIgAgMgSQgHAHABALQgBANAHAGQAFAHAHAAQAIAAAGgHQAGgGgBgNQABgLgGgHQgGgGgIAAQgHAAgFAGg");
	this.shape_290.setTransform(256.55,157.35);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_291.setTransform(249.525,157.35);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AAPAhIAAgaQgKADgIAAQgHgBgGgDQgGgEgCgFQgCgFAAgHIAAgRIALAAIAAANIABALQABAEAEADQAEABAFAAQAFAAAKgCIAAgeIAMAAIAABBg");
	this.shape_292.setTransform(242.475,157.35);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_293.setTransform(235.8,157.35);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_294.setTransform(229.375,157.35);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgUAZQgIgJAAgQQAAgPAIgKQAIgJANAAQALAAAHAGQAHAGABAJIgKACQgDgOgNAAQgHAAgEAGQgFAFgBAJIAWAAIAAAJIgWAAQABAKAEAGQAFAFAHAAQAOAAADgQIALABQgCALgHAHQgIAGgMAAIgBABQgMAAgHgKg");
	this.shape_295.setTransform(223.2735,157.3546);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgFAtIAAhAIAKAAIAABAgAgFggIAAgMIAKAAIAAAMg");
	this.shape_296.setTransform(218.45,156.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_297.setTransform(213.125,158.275);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgGACgDQACgEAEgCIAIgEIAJgBQANgBAGgDIAAgDQAAgGgCgEQgFgEgIABQgHAAgEACQgEAEgBAGIgMgBQACgHAEgEQADgFAGgCQAHgCAIgBQAIAAAFACQAFADADADQACADABAEIABALIAAANIABAUIADAIIgMAAIgDgIQgGAFgGACQgEADgHAAQgLAAgFgGgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEACQAEAEAGAAQAGAAAEgDQAFgDADgFQACgEgBgHIAAgEQgFADgMABg");
	this.shape_298.setTransform(186.3,157.35);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AAMAhIgMgVQgDgGgCgCQgDgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAFAAACgCQACgBAEgKIAFgLQACgCADgBIAJgBIABAAIAAAJIgCAAQgFAAgBABIgEAIIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_299.setTransform(180.2,157.35);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_300.setTransform(173.425,157.35);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgEAtIAAhAIAKAAIAABAgAgEggIAAgMIAKAAIAAAMg");
	this.shape_301.setTransform(168.45,156.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_302.setTransform(163.625,158.275);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAIAKQAJAJAAAPQAAAMgDAHQgFAIgHADQgHAFgJAAQgNgBgIgIgAgMgSQgGAHgBALQABANAGAGQAFAHAHAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgHAAgFAGg");
	this.shape_303.setTransform(156.15,157.35);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgXAdQgGgFgBgIQAAgGADgDQACgEADgCIAIgEIAKgBQANgBAGgDIAAgDQAAgGgDgEQgEgEgIABQgHAAgEACQgDAEgCAGIgLgBQABgHADgEQAEgFAGgCQAHgCAIgBQAIAAAFACQAFADADADQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgGAFgHACQgEADgHAAQgKAAgGgGgAgCAEIgKADQgDABgBACQgBADAAADQgBAEAEACQADAEAHAAQAFAAAFgDQAGgDACgFQABgEAAgHIAAgEQgGADgLABg");
	this.shape_304.setTransform(129.35,157.35);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_305.setTransform(122.325,157.35);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_306.setTransform(115.875,157.35);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgbAuIAAhaIAKAAIAAAIQADgEAFgDQAEgCAGgBQAIABAHAEQAGAEAEAIQACAIAAAKQABAKgEAHQgEAIgGAEQgIAFgHAAQgEAAgFgDQgFgCgDgEIAAAggAgMgeQgFAHAAANQgBALAGAGQAFAHAHAAQAGAAAGgHQAFgGAAgMQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_307.setTransform(109.85,158.55);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgVAaQgJgKABgPQgBgQAJgJQAJgKAMAAQAOAAAIAKQAJAJgBAPIAAADIgwAAQABAKAGAHQAFAFAHABQAGAAAEgEQAFgDADgIIALACQgDALgHAFQgIAGgLAAQgOgBgIgIgAgLgTQgGAFAAAIIAkAAQgBgHgDgFQgGgGgJAAQgGAAgFAFg");
	this.shape_308.setTransform(102.55,157.35);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_309.setTransform(95.6,157.35);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgJAEgIQADgIAIgFQAHgDAHgBQALABAHAFQAHAGACAJIgLACQgCgGgEgEQgEgDgFAAQgIgBgFAHQgFAGAAAMQAAANAFAHQAFAFAHABQAHAAAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLAAQgMgBgJgIg");
	this.shape_310.setTransform(89.125,157.35);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AAMAhIgMgVQgCgGgDgCQgDgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAGAAACgCQACgBADgKIAFgLQACgCADgBIAJgBIACAAIAAAJIgDAAQgFAAgBABIgEAIIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_311.setTransform(83.25,157.35);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgVAaQgIgKgBgPQABgQAIgJQAJgKAMAAQAOAAAIAKQAJAJAAAPIAAADIgxAAQABAKAGAHQAFAFAHABQAGAAAFgEQAEgDACgIIAMACQgCALgIAFQgHAGgMAAQgNgBgJgIgAgLgTQgFAFgBAIIAjAAQAAgHgEgFQgFgGgJAAQgGAAgFAFg");
	this.shape_312.setTransform(76.4,157.35);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgQAFIAAgKIAhAAIAAAKg");
	this.shape_313.setTransform(70.775,157.35);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAKQAIAJAAAPQAAAMgEAHQgEAIgHADQgHAFgJAAQgMgBgJgIgAgMgSQgHAHAAALQAAANAHAGQAFAHAHAAQAIAAAGgHQAGgGgBgNQABgLgGgHQgGgGgIAAQgHAAgFAGg");
	this.shape_314.setTransform(65.05,157.35);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAFACADAFQADAEAAAFQAAAFgBAEQgCADgFADQAFAAADAEQADAFAAAFQgBAKgFAEQgHAFgLAAgAgPAYIAPAAQAJAAADgDQAEgCgBgFQAAgDgCgDQgBgDgEgBIgKAAIgNAAgAgPgFIAMAAIAJAAQADAAACgDQACgDAAgDQAAgEgEgDQgDgCgJAAIgMAAg");
	this.shape_315.setTransform(58.5,157.35);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRALgJQAIgHALgBQAOAAAJAKQAIAJAAAPQAAAMgEAHQgDAIgIADQgHAFgJAAQgMgBgJgIgAgMgSQgHAHABALQgBANAHAGQAFAHAHAAQAIAAAGgHQAGgGgBgNQABgLgGgHQgGgGgIAAQgHAAgFAGg");
	this.shape_316.setTransform(51.35,157.35);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AAMAhIgMgVQgCgGgDgCQgDgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAGAAACgCQACgBADgKIAFgLQACgCADgBIAJgBIACAAIAAAJIgEAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHALIAMAVg");
	this.shape_317.setTransform(45.35,157.35);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEgBACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgHIABgDIgZhAIAMAAIAOAmIADAOIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEACgFAAIgHgBg");
	this.shape_318.setTransform(38.975,158.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgYAdQgFgFgBgIQAAgGADgDQACgEADgCIAIgEIAKgBQANgBAHgDIAAgDQgBgGgDgEQgEgEgIABQgHAAgEACQgDAEgCAGIgLgBQABgHADgEQAEgFAGgCQAHgCAHgBQAJAAAFACQAFADADADQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgHAFgGACQgEADgHAAQgKAAgHgGgAgBAEIgLADQgCABgCACQgCADABADQgBAEAEACQADAEAHAAQAFAAAGgDQAFgDACgFQACgEAAgHIAAgEQgHADgKABg");
	this.shape_319.setTransform(32.25,157.35);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AAYAtIAAgrIguAAIAAArIgNAAIAAhZIANAAIAAAlIAuAAIAAglIAMAAIAABZg");
	this.shape_320.setTransform(24.125,156.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_321.setTransform(322.55,147.75);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AAQAuIAAgrQAAgHgEgDQgEgEgGgBQgEAAgFADQgEADgCAEQgCADAAAJIAAAkIgLAAIAAhaIALAAIAAAgQAIgJALAAQAHAAAGADQAFACADAGQACAFAAAIIAAArg");
	this.shape_322.setTransform(317.175,143.85);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgKAEgHQADgIAIgFQAHgDAHAAQALAAAHAFQAHAFACAKIgLACQgCgHgEgDQgEgDgFAAQgIgBgFAHQgFAGAAAMQAAANAFAHQAFAFAHABQAHAAAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLAAQgMgBgJgIg");
	this.shape_323.setTransform(310.675,145.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AgXAdQgHgFABgJQAAgFACgDQACgEAEgCIAIgEIAKgBQAMgBAGgDIAAgDQAAgGgCgEQgFgDgIAAQgHAAgEACQgDADgDAHIgLgBQACgHAEgEQADgFAHgCQAGgDAIABQAIAAAFABQAFACADAEQADADAAAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgGAFgFACQgFACgHABQgLAAgFgGgAgCAEIgKACQgCACgCACQgCADAAACQAAAFAEACQADADAHABQAGAAAEgDQAFgDADgFQACgEgBgHIAAgEQgFACgMACg");
	this.shape_324.setTransform(303.65,145.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgRAkIAAAJIgKAAIAAhaIALAAIAAAgQAGgJALAAQAFAAAGADQAFACAEAFQAEAEACAGQACAGAAAHQAAARgJAJQgIAJgMAAQgLAAgGgKgAgMgGQgGAGABALQgBAMAEAFQAFAJAJAAQAHAAAFgGQAFgHAAgMQAAgMgFgGQgFgHgHAAQgHAAgFAHg");
	this.shape_325.setTransform(296.75,143.925);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AgSAdQgGgFgCgLIAKgCQABAHAFADQAEAEAGABQAJAAADgEQAEgDAAgEQAAgEgEgCIgLgEQgMgDgEgCQgFgBgCgFQgCgEgBgEQAAgFACgEQADgDADgDQADgCAEgBQAFgCAFABQAGAAAGABQAGADADAEQACAEACAGIgLABQgBgFgEgDQgDgCgGAAQgIgBgCADQgEADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQABACADABIAIADIASAFQAEABADAEQACAEAAAFQAAAGgDAFQgDAFgGADQgHADgIAAQgLAAgHgGg");
	this.shape_326.setTransform(289.85,145.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgRAiIAAhBIAKAAIAAAKQAEgHADgDQACgCAEAAQAGAAAGAEIgEAKQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_327.setTransform(285.075,145.025);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgVAaQgJgKAAgPQAAgQAJgJQAJgKANABQANgBAIAKQAIAJAAAPIAAADIgwAAQABAKAFAHQAGAFAHABQAHAAADgEQAFgDADgIIALACQgDAKgHAGQgIAGgLAAQgNgBgJgIgAgMgTQgFAFAAAIIAkAAQgBgIgEgEQgFgGgIAAQgHAAgGAFg");
	this.shape_328.setTransform(278.85,145.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AAiAiIAAgpQAAgHgCgDQgBgCgDgCQgCgCgEAAQgHAAgFAFQgEAEAAAKIAAAmIgLAAIAAgqQAAgIgCgDQgDgEgGAAQgFAAgEACQgEADgCAFQgCAEAAAJIAAAiIgLAAIAAhBIAKAAIAAAJQADgFAFgDQAGgDAGAAQAIAAAEADQAEADACAGQAIgMAMAAQAKAAAFAGQAGAFAAALIAAAtg");
	this.shape_329.setTransform(270.025,145.025);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgRAiIAAhBIAKAAIAAAKQAEgHADgDQACgCAEAAQAGAAAGAEIgEAKQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_330.setTransform(263.075,145.025);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgVAaQgIgKAAgPQAAgQAIgJQAJgKAMABQAOgBAIAKQAJAJAAAPIAAADIgxAAQABAKAGAHQAFAFAHABQAGAAAFgEQAEgDACgIIAMACQgCAKgIAGQgHAGgMAAQgNgBgJgIgAgLgTQgFAFgBAIIAjAAQAAgIgEgEQgFgGgJAAQgGAAgFAFg");
	this.shape_331.setTransform(256.85,145.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AAYAuIAAgsIguAAIAAAsIgNAAIAAhaIANAAIAAAlIAuAAIAAglIAMAAIAABag");
	this.shape_332.setTransform(248.675,143.85);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AAiAiIAAgpQAAgHgCgDQgBgCgDgCQgCgCgEAAQgHAAgFAFQgEAEAAAKIAAAmIgLAAIAAgqQAAgIgCgDQgDgEgGAAQgFAAgEACQgEADgCAFQgCAEAAAJIAAAiIgLAAIAAhBIAKAAIAAAJQADgFAFgDQAGgDAGAAQAIAAAEADQAEADACAGQAIgMAMAAQAKAAAFAGQAGAFAAALIAAAtg");
	this.shape_333.setTransform(235.275,145.025);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgFACgDQACgEADgCIAJgEIAJgBQANgBAGgDIAAgDQAAgGgCgEQgFgDgIAAQgHAAgEACQgEADgBAHIgMgBQACgHAEgEQADgFAGgCQAHgDAIABQAIAAAFABQAFACADAEQACADABAEIABALIAAANIABAUIADAIIgMAAIgDgIQgGAFgFACQgFACgHABQgLAAgFgGgAgCAEIgKACQgDACgBACQgCADAAACQAAAFAEACQAEADAGABQAGAAAEgDQAFgDADgFQACgEgBgHIAAgEQgFACgMACg");
	this.shape_334.setTransform(226.35,145.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgFAuIAAhaIALAAIAABag");
	this.shape_335.setTransform(217.875,143.85);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgFAuIAAhaIALAAIAABag");
	this.shape_336.setTransform(215.025,143.85);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgVAaQgIgKgBgPQABgQAIgJQAJgKAMABQAOgBAIAKQAJAJAAAPIAAADIgxAAQABAKAGAHQAFAFAHABQAGAAAFgEQAEgDACgIIAMACQgCAKgIAGQgHAGgMAAQgNgBgJgIgAgLgTQgFAFgBAIIAjAAQAAgIgEgEQgFgGgJAAQgGAAgFAFg");
	this.shape_337.setTransform(210.05,145.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgjAuIAAgLIAug6IAJgLIgyAAIAAgKIBAAAIAAAKIgxA+IgGAHIA5AAIAAALg");
	this.shape_338.setTransform(202.6,143.85);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgVAkQgIgKAAgXQAAgaAJgMQAJgLAOAAQAKAAAHAHQAHAFACALIgMABQgBgGgDgDQgEgGgHAAQgEAAgEAEQgGAEgDAHQgDAIAAANQAEgGAGgDQAFgDAGAAQAMAAAHAIQAIAIAAAMQAAAJgEAIQgEAGgGAEQgHAEgHABQgNAAgKgLgAgLABQgGAFAAAJQAAAGADAFQACAGAFACQAEADAFABQAHgBAFgFQAEgGAAgKQAAgKgEgFQgFgEgIAAQgHAAgFAEg");
	this.shape_339.setTransform(191.6,143.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgUAoQgIgIgBgLIALgBQACAJAFAEQAEAFAHAAQAHAAAGgGQAFgFAAgJQAAgIgFgFQgFgEgIgBIgHACIABgJIACAAQAGAAAGgEQAGgDAAgIQAAgGgEgEQgFgFgFAAQgHAAgEAFQgEAEgCAIIgLgCQACgLAIgGQAHgHALAAQAGAAAGAEQAHADADAGQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAGQAFAFAAAJQAAAMgJAJQgJAHgMABQgMgBgIgGg");
	this.shape_340.setTransform(184.525,143.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AgQAtQAAgLAFgPQADgPAIgOQAHgNAIgKIgrAAIAAgLIA5AAIAAAIQgIAKgIAPQgKAOgDARQgEAMAAANg");
	this.shape_341.setTransform(177.45,143.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgQAtQABgLAEgPQADgPAIgOQAGgNAJgKIgsAAIAAgLIA7AAIAAAIQgJAKgIAPQgKAOgDARQgEAMAAANg");
	this.shape_342.setTransform(170.35,143.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgPAtQAAgLADgPQAEgPAIgOQAGgNAJgKIgsAAIAAgLIA7AAIAAAIQgJAKgIAPQgKAOgDARQgDAMgBANg");
	this.shape_343.setTransform(163.25,143.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_344.setTransform(154.375,148.65);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgUAoQgIgIgBgLIALgBQACAJAFAEQAEAFAHAAQAHAAAGgGQAFgFAAgJQAAgIgFgFQgFgEgIgBIgHACIABgJIACAAQAGAAAGgEQAGgDAAgIQAAgGgEgEQgFgFgFAAQgHAAgEAFQgEAEgCAIIgLgCQACgLAIgGQAHgHALAAQAGAAAGAEQAHADADAGQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAGQAFAFAAAJQAAAMgJAJQgJAHgMABQgMgBgIgGg");
	this.shape_345.setTransform(149.075,143.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgOAqQgGgEgEgIQgDgIAAgKQAAgKACgHQAEgIAGgFQAHgEAIAAQAFAAAFADQAFACACAEIAAggIALAAIAABaIgKAAIAAgJQgGAKgMAAQgHAAgHgEgAgLgGQgFAGAAAMQAAAMAFAHQAGAGAGAAQAHAAAGgGQAEgGAAgMQAAgNgFgGQgFgHgIAAQgGAAgFAHg");
	this.shape_346.setTransform(138.2,143.925);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgFAuIAAhaIALAAIAABag");
	this.shape_347.setTransform(133.425,143.85);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgVAaQgJgKAAgPQAAgQAJgJQAJgKANABQANgBAIAKQAIAJAAAPIAAADIgwAAQABAKAFAHQAGAFAHABQAHAAADgEQAFgDADgIIALACQgDAKgHAGQgHAGgMAAQgOgBgIgIgAgMgTQgFAFAAAIIAkAAQgBgIgEgEQgFgGgIAAQgHAAgGAFg");
	this.shape_348.setTransform(128.45,145.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgIAuIAAg4IgKAAIAAgJIAKAAIAAgHQAAgGABgEQABgEAEgDQAEgCAHAAIALABIgCAJIgHAAQgFAAgCACQgDACABAGIAAAGIAMAAIAAAJIgMAAIAAA4g");
	this.shape_349.setTransform(123.5,143.775);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AAQAiIAAgnQAAgHgCgEQgBgDgDgCQgEgCgEAAQgGAAgFAEQgGAFAAANIAAAjIgLAAIAAhBIAKAAIAAAJQAIgLAMAAQAGAAAFACQAFACADAEQACADABAFIABALIAAAog");
	this.shape_350.setTransform(117.825,145.025);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgVAaQgJgKAAgPQAAgQAJgJQAJgKANABQANgBAIAKQAJAJAAAPIAAADIgxAAQABAKAFAHQAGAFAHABQAGAAAFgEQAEgDADgIIALACQgCAKgIAGQgHAGgMAAQgOgBgIgIgAgMgTQgEAFgBAIIAkAAQgBgIgEgEQgFgGgIAAQgHAAgGAFg");
	this.shape_351.setTransform(110.7,145.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AAQAiIAAgnQAAgHgCgEQgBgDgDgCQgEgCgEAAQgGAAgFAEQgGAFAAANIAAAjIgLAAIAAhBIAKAAIAAAJQAIgLAMAAQAGAAAFACQAFACADAEQACADABAFIABALIAAAog");
	this.shape_352.setTransform(103.625,145.025);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgFAuIAAhBIAKAAIAABBgAgFggIAAgMIAKAAIAAAMg");
	this.shape_353.setTransform(98.65,143.85);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AgVAaQgJgKABgPQgBgQAJgJQAJgKAMABQAOgBAIAKQAJAJgBAPIAAADIgwAAQABAKAGAHQAFAFAHABQAGAAAEgEQAFgDACgIIAMACQgDAKgHAGQgHAGgMAAQgNgBgJgIgAgLgTQgGAFAAAIIAjAAQAAgIgDgEQgGgGgJAAQgGAAgFAFg");
	this.shape_354.setTransform(93.65,145.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AgBArQgDgCgBgDQgCgDAAgLIAAglIgIAAIAAgIIAIAAIAAgRIAKgGIAAAXIAMAAIAAAIIgMAAIAAAmIABAGIACACIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_355.setTransform(88.475,144);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AgRAsQgJgEgEgIQgFgGgBgKIAMgBQABAHADAFQADAEAGADQAHACAGAAQAHAAAFgCQAFgCADgEQADgDgBgFQABgDgDgEQgDgDgFgCIgQgFQgMgCgFgCQgHgEgDgEQgDgGAAgGQAAgHAEgGQAEgGAIgDQAHgDAJAAQAJAAAIADQAIAEAEAFQAFAHgBAIIgLABQgBgJgGgEQgEgFgLABQgKAAgFADQgFAFAAAFQAAAFAEADQADAEAOADQAPADAFADQAIACADAGQAEAGABAHQAAAHgFAHQgEAGgIAEQgHADgKAAQgMAAgIgDg");
	this.shape_356.setTransform(82.35,143.85);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_357.setTransform(72.825,148.65);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEAAACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgHIABgCIgZhBIAMAAIAOAmIADAOIAFgOIAOgmIALAAIgZBCIgFAPQgDAFgEADQgEACgFABIgHgCg");
	this.shape_358.setTransform(68.875,146.45);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AAQAiIAAgnQAAgHgCgEQgBgDgDgCQgEgCgEAAQgGAAgFAEQgGAFAAANIAAAjIgLAAIAAhBIAKAAIAAAJQAIgLAMAAQAGAAAFACQAFACADAEQACADABAFIABALIAAAog");
	this.shape_359.setTransform(62.075,145.025);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQAAgFACgDQACgEAEgCIAHgEIALgBQAMgBAHgDIAAgDQAAgGgEgEQgEgDgIAAQgHAAgEACQgEADgCAHIgKgBQABgHADgEQAEgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQACADABAEIABALIAAANIAAAUIADAIIgMAAIgBgIQgHAFgFACQgFACgHABQgKAAgHgGgAgBAEIgKACQgEACgBACQgBADgBACQABAFADACQAEADAGABQAFAAAGgDQAEgDADgFQABgEABgHIAAgEQgHACgKACg");
	this.shape_360.setTransform(54.95,145.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AAiAiIAAgpQAAgHgCgDQgBgCgDgCQgCgCgEAAQgHAAgFAFQgEAEAAAKIAAAmIgLAAIAAgqQAAgIgCgDQgDgEgGAAQgFAAgEACQgEADgCAFQgCAEAAAJIAAAiIgLAAIAAhBIAKAAIAAAJQADgFAFgDQAGgDAGAAQAIAAAEADQAEADACAGQAIgMAMAAQAKAAAFAGQAGAFAAALIAAAtg");
	this.shape_361.setTransform(46.175,145.025);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgRAiIAAhBIAKAAIAAAKQAEgHADgDQACgCAEAAQAGAAAGAEIgEAKQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_362.setTransform(39.175,145.025);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AgVAaQgJgKAAgPQAAgQAJgJQAJgKANABQANgBAIAKQAIAJAAAPIAAADIgwAAQABAKAFAHQAGAFAHABQAHAAAEgEQAEgDADgIIALACQgCAKgIAGQgHAGgMAAQgOgBgIgIgAgMgTQgEAFgBAIIAkAAQgBgIgEgEQgFgGgIAAQgHAAgGAFg");
	this.shape_363.setTransform(32.95,145.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AgTApQgLgGgGgKQgFgLAAgNQAAgNAFgMQAGgLALgGQAKgFANAAQAJAAAJADQAHADAFAGQAFAFACAKIgLADQgCgHgDgEQgDgEgGgDQgGgCgGAAQgIAAgGACQgGADgDAEIgHAJQgDAJAAAJQAAAMAEAIQAFAIAIAEQAHAEAJAAQAHAAAIgDQAHgDAFgDIAAgRIgbAAIAAgKIAmAAIAAAhQgJAHgJAEQgKADgJAAQgNAAgLgGg");
	this.shape_364.setTransform(24.45,143.85);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_365.setTransform(329.725,136.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AgTApQgLgFgGgMQgFgKAAgNQAAgNAFgMQAGgLAKgGQALgFANAAQAKAAAIADQAHADAFAGQAEAGADAJIgLADQgCgHgDgEQgEgEgFgCQgGgDgGAAQgIAAgGADQgGACgEAEIgGAJQgDAJAAAJQAAAMAFAIQADAIAJAEQAHAEAJAAQAHAAAIgDQAHgDAFgDIAAgRIgbAAIAAgKIAmAAIAAAhQgJAHgJAEQgJADgKAAQgNAAgLgGg");
	this.shape_366.setTransform(323,131.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AAWAuIggguIgPAOIAAAgIgMAAIAAhaIAMAAIAAAsIAsgsIARAAIglAlIAmA1g");
	this.shape_367.setTransform(314.35,131.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_368.setTransform(298.8,135.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRAKgJQAJgHALAAQAOgBAIAKQAJAIAAAQQAAAMgDAHQgFAIgHADQgHAEgJAAQgNAAgIgJgAgNgSQgFAGgBAMQABANAFAGQAGAHAHgBQAJABAFgHQAGgGAAgNQAAgMgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_369.setTransform(293.4,132.85);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AgUApQgKgGgFgMQgEgKAAgNQAAgOAFgKQAFgLALgGQAKgFALAAQANAAAKAGQAJAHAEANIgMADQgDgKgGgFQgGgEgKAAQgJAAgHAFQgHAFgDAJQgDAIAAAJQAAALADAJQAEAIAHAEQAHAFAHAAQALgBAHgFQAHgGACgMIAMAEQgEAPgJAHQgKAIgPAAQgNAAgJgGg");
	this.shape_370.setTransform(285.325,131.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AARAiQgGAHgGADQgGADgHAAQgOAAgJgKQgGgHAAgKQAAgIAFgHQAGgGAKgFQgGgHgCgFQgCgEAAgEQAAgIAHgGQAGgGAKAAQAIAAAGAFQAGAGAAAIQAAANgRAJIAQAUIAFgNIALADQgDAMgFAHQAGAJAIAFIgHAJQgHgEgHgJgAgWAKQgDAFAAAEQAAAGAEAGQAFAGAIAAQAFAAAEgDQAGgDADgFIgUgaQgJAGgDAEgAgLgiQgDADAAAEIABAEIADAFIAFAGQAGgEACgEQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_371.setTransform(267.475,131.625);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AAYAuIAAgsIguAAIAAAsIgNAAIAAhaIANAAIAAAlIAuAAIAAglIAMAAIAABag");
	this.shape_372.setTransform(249.325,131.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgSAkIAAAJIgJAAIAAhaIAKAAIAAAgQAIgJAJAAQAHAAAFADQAFACAEAFQADAEACAGQACAGAAAHQABARgJAJQgIAJgMAAQgKAAgIgKgAgMgGQgFAGgBALQABAMADAFQAFAJAJAAQAHAAAFgGQAFgHAAgMQAAgMgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_373.setTransform(241.35,131.675);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AAiAiIAAgpQAAgHgCgDQgBgCgDgCQgCgCgEAAQgHAAgFAFQgEAEAAAKIAAAmIgLAAIAAgqQAAgIgCgDQgDgEgGAAQgFAAgEACQgEADgCAFQgCAEAAAJIAAAiIgLAAIAAhBIAKAAIAAAJQADgFAFgDQAGgDAGAAQAIAAAEADQAEADACAGQAIgMAMAAQAKAAAFAGQAGAFAAALIAAAtg");
	this.shape_374.setTransform(232.325,132.775);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AgTApQgLgFgGgMQgFgKAAgNQAAgNAFgMQAGgLALgGQAKgFANAAQAJAAAJADQAHADAFAGQAFAGACAJIgLADQgCgHgDgEQgDgEgGgCQgGgDgGAAQgIAAgGADQgGACgDAEIgHAJQgDAJAAAJQAAAMAEAIQAFAIAIAEQAHAEAJAAQAHAAAIgDQAHgDAFgDIAAgRIgbAAIAAgKIAmAAIAAAhQgJAHgJAEQgKADgJAAQgNAAgLgGg");
	this.shape_375.setTransform(222,131.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AAQAiIAAgnQAAgHgCgEQgBgDgDgCQgEgCgEAAQgGAAgFAEQgGAFAAANIAAAjIgLAAIAAhBIAKAAIAAAJQAIgLAMAAQAGAAAFACQAFACADAEQACADABAFIABALIAAAog");
	this.shape_376.setTransform(204.425,132.775);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AgFAuIAAhCIAKAAIAABCgAgFggIAAgMIAKAAIAAAMg");
	this.shape_377.setTransform(199.45,131.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgVAZQgJgIABgQQgBgQAJgJQAJgKAMABQAOgBAIAKQAJAIgBAQIAAADIgwAAQABAKAGAHQAFAFAHAAQAGAAAEgDQAFgDACgHIAMABQgDAKgHAGQgHAGgMgBQgNAAgJgJgAgLgTQgGAFAAAJIAjAAQAAgJgDgEQgGgGgJAAQgGgBgFAGg");
	this.shape_378.setTransform(194.45,132.85);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AgFAuIAAhaIALAAIAABag");
	this.shape_379.setTransform(189.475,131.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AAWAuIgfguIgPAOIAAAgIgMAAIAAhaIAMAAIAAAsIAsgsIAQAAIglAlIAmA1g");
	this.shape_380.setTransform(184.35,131.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AgEAhIgZhBIAMAAIAOAmIADAOIAEgNIAPgnIALAAIgZBBg");
	this.shape_381.setTransform(167.325,132.85);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgFACgDQACgEAEgCIAIgEIAKgBQAMgCAGgCIAAgDQAAgHgCgDQgFgDgIAAQgHAAgEACQgDAEgDAGIgLgBQACgHAEgEQADgFAHgCQAGgDAIABQAIAAAFABQAFACADAEQADADAAAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgGAFgFACQgFACgHAAQgLABgFgGgAgCAEIgJACQgDABgCADQgCACAAADQAAAFAEACQADADAHAAQAGAAAEgCQAFgDADgFQACgDgBgIIAAgEQgFACgMACg");
	this.shape_382.setTransform(160.55,132.85);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AgBArQgDgCgBgDQgCgDAAgLIAAgkIgIAAIAAgJIAIAAIAAgRIAKgGIAAAXIAMAAIAAAJIgMAAIAAAlIABAHIACABIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_383.setTransform(155.325,131.75);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgSAdQgGgFgDgLIAMgBQABAGADADQAFAEAHAAQAHAAAEgDQAEgDAAgEQAAgEgDgCIgMgEQgLgDgFgCQgFgCgCgDQgCgEAAgFQAAgFACgEQACgDADgDQACgCAFgBQAEgCAFABQAHAAAHABQAFADADAEQADADABAHIgLABQgBgEgDgEQgEgCgGAAQgIgBgDADQgDADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACACADABIAJADIAQAFQAFABACAEQADAEABAFQAAAGgEAFQgDAFgHADQgFACgIAAQgMABgHgGg");
	this.shape_384.setTransform(150.3,132.85);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AgOAgQgFgDgCgDQgDgEgBgEIgBgLIAAgoIAMAAIAAAkIAAAMQABAEAEADQADACAFAAQAEAAAFgCQAEgDACgEQACgFAAgIIAAgjIALAAIAABBIgKAAIAAgJQgIALgMAAQgGAAgFgCg");
	this.shape_385.setTransform(143.525,132.925);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AgTApQgLgFgGgMQgFgKAAgNQAAgNAFgMQAGgLALgGQAKgFAMAAQALAAAHADQAJADAEAGQAFAGACAJIgLADQgCgHgDgEQgDgEgGgCQgFgDgIAAQgHAAgGADQgGACgDAEIgHAJQgDAJAAAJQAAAMAEAIQAFAIAIAEQAIAEAHAAQAIAAAIgDQAHgDAEgDIAAgRIgbAAIAAgKIAnAAIAAAhQgJAHgJAEQgJADgKAAQgNAAgLgGg");
	this.shape_386.setTransform(135.05,131.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_387.setTransform(119.3,135.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AgRAiIAAhBIAKAAIAAAKQAEgHADgDQACgCAEAAQAGAAAGAEIgEAKQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_388.setTransform(116.575,132.775);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AglAuIAAhaIAgAAIAPABQAIACAFAEQAIAGADAKQADAJABAMQAAAKgCAIQgDAIgEAFQgDAFgFADQgEADgHACQgGABgIABgAgYAjIATAAQAIAAAFgCQAFgBADgDQAEgFADgHQACgHAAgKQAAgOgEgIQgFgHgHgDQgEgCgKAAIgTAAg");
	this.shape_389.setTransform(109.45,131.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgRAvIAahdIAJAAIgaBdg");
	this.shape_390.setTransform(93.875,131.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AARAhIgNgVIgEgFIgRAaIgNAAIAYgiIgXgfIAPAAIAKAQIAEAHIAFgHIAKgQIAOAAIgXAfIAZAig");
	this.shape_391.setTransform(88.9,132.85);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgXAdQgGgFgBgJQAAgFADgDQACgEADgCIAIgEIAKgBQANgCAGgCIAAgDQAAgHgDgDQgEgDgIAAQgHAAgEACQgDAEgCAGIgLgBQABgHADgEQAEgFAGgCQAHgDAIABQAIAAAFABQAFACADAEQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgGAFgHACQgEACgHAAQgKABgGgGgAgCAEIgKACQgDABgBADQgBACAAADQgBAFAEACQADADAHAAQAFAAAFgCQAGgDACgFQABgDAAgIIAAgEQgGACgLACg");
	this.shape_392.setTransform(82.1,132.85);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AgRAqQgGgFgEgJQgDgIAAgUQAAgaAJgJQAJgKARAAIANAAIACgBIAKAAQgBAHgCACQgCADgEAAIgOABQgNAAgFADQgFACgCAHQgCAFgBAJQAFgGAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAAMgEAHQgEAIgGADQgGAEgKAAQgLABgHgGgAgMgDQgGAGAAAMQAAALAGAHQAGAFAHAAQAIAAAFgGQAFgIAAgLQAAgKgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_393.setTransform(75.275,131.55);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgKAEgHQADgIAIgFQAHgDAHAAQALgBAHAGQAHAFACAKIgLACQgCgHgEgDQgEgEgFABQgIAAgFAFQgFAHAAAMQAAANAFAHQAFAFAHAAQAHABAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLgBQgMAAgJgJg");
	this.shape_394.setTransform(68.625,132.85);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AgbAuIAAhaIAJAAIAAAJQAEgFAEgDQAFgDAGABQAIgBAHAFQAGAEADAIQADAIAAAKQABAJgEAIQgEAIgGAEQgIAFgHgBQgFAAgEgCQgFgCgDgEIAAAggAgMgeQgFAGgBAOQAAALAGAGQAFAHAHgBQAHABAFgHQAFgGAAgMQAAgNgFgHQgFgGgHAAQgGAAgGAHg");
	this.shape_395.setTransform(61.8,134.05);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgVAZQgJgIABgQQgBgQAJgJQAJgKAMABQAOgBAIAKQAJAIgBAQIAAADIgwAAQABAKAGAHQAFAFAHAAQAGAAAEgDQAFgDACgHIAMABQgDAKgHAGQgHAGgMgBQgNAAgJgJgAgLgTQgGAFAAAJIAjAAQAAgJgDgEQgGgGgJAAQgGgBgFAGg");
	this.shape_396.setTransform(54.5,132.85);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_397.setTransform(46.625,132.85);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AgcAuIAAhaIAKAAIAAAJQAEgFAEgDQAFgDAGABQAIgBAHAFQAGAEADAIQADAIAAAKQABAJgEAIQgEAIgGAEQgIAFgHgBQgFAAgEgCQgFgCgDgEIAAAggAgMgeQgFAGgBAOQAAALAGAGQAFAHAHgBQAHABAFgHQAFgGAAgMQAAgNgFgHQgFgGgHAAQgGAAgGAHg");
	this.shape_398.setTransform(38.85,134.05);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQAAgFACgDQACgEAEgCIAHgEIALgBQAMgCAHgCIAAgDQAAgHgEgDQgEgDgIAAQgHAAgEACQgEAEgCAGIgKgBQABgHADgEQAEgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQACADACAEIAAALIAAANIAAAUIADAIIgMAAIgBgIQgHAFgFACQgFACgHAAQgKABgHgGgAgBAEIgKACQgEABgBADQgBACgBADQABAFADACQAEADAGAAQAFAAAGgCQAEgDADgFQABgDABgIIAAgEQgHACgKACg");
	this.shape_399.setTransform(31.55,132.85);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AAbAuIgXghIgEgGIgDAGIgXAhIgPAAIAkgvIgggrIAPAAIAQAWIAHAMIAHgLIASgXIANAAIggAqIAjAwg");
	this.shape_400.setTransform(23.775,131.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_401.setTransform(326.975,120.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQAAgEACgEQACgFADgBIAIgEIAKgBQANgCAHgCIAAgDQAAgHgEgDQgEgDgIAAQgHAAgEACQgDAEgDAGIgKgBQABgHADgEQAEgFAGgCQAHgCAHAAQAJAAAFACQAGABACADQACADACAFIAAAKIAAAOIABAUIACAIIgLAAIgCgIQgHAFgGACQgEACgHAAQgKABgHgGgAgBAEIgKACQgEABgBADQgCACABADQAAAFADACQADADAHAAQAFAAAGgCQAFgDACgFQACgEAAgHIAAgEQgHACgKACg");
	this.shape_402.setTransform(319,120.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AgaAhIAAhBIALAAIAAAaIAOAAQANAAAIAFQAHAFAAAJQAAAIgGAGQgGAGgOAAgAgPAYIAMAAQAKAAAEgDQAFgCAAgGQAAgFgEgDQgDgDgLAAIgNAAg");
	this.shape_403.setTransform(299.875,120.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_404.setTransform(292.275,120.625);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("AgVAZQgJgIAAgQQAAgQAJgJQAJgJANAAQANAAAIAJQAJAIAAAQIAAADIgxAAQABAKAFAHQAGAFAHAAQAGABAFgEQAEgDADgHIALABQgCALgIAFQgHAGgMgBQgOAAgIgJgAgMgTQgEAFgBAJIAkAAQgBgJgEgEQgFgHgIABQgHgBgGAGg");
	this.shape_405.setTransform(285.75,120.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AAdA6IAAgZIhEAAIAAhaIAMAAIAABPIAvAAIAAhPIALAAIAABPIAJAAIAAAkg");
	this.shape_406.setTransform(277.85,120.625);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgVAkQgIgKAAgYQAAgZAJgMQAJgLANAAQAMAAAGAHQAHAFACALIgLABQgCgGgDgDQgFgGgGABQgFAAgDACQgGAFgDAHQgDAIAAANQAEgGAGgDQAGgDAFAAQALAAAIAIQAIAIAAANQAAAIgDAIQgFAHgGAEQgHADgHAAQgNAAgKgKgAgLABQgGAFABAKQgBAFADAFQADAGAEACQAFADAEAAQAGAAAFgFQAGgGAAgKQAAgJgGgGQgEgFgIABQgHgBgFAFg");
	this.shape_407.setTransform(256.7,119.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AgUAoQgIgIgBgLIALgCQACAKAFAEQAEAFAHgBQAHABAGgGQAFgFAAgJQAAgHgFgFQgFgGgIAAIgHACIABgJIACAAQAGAAAGgDQAGgEAAgIQAAgGgEgFQgFgEgFABQgHgBgEAEQgEAFgCAIIgLgCQACgLAIgGQAHgHALAAQAGAAAGADQAHAEADAFQADAGAAAGQAAAGgDAFQgDAEgGAEQAIABAEAGQAFAFAAAJQAAAMgJAIQgJAIgMAAQgMAAgIgGg");
	this.shape_408.setTransform(249.625,119.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgQAtQAAgLAFgPQAEgPAHgOQAGgNAJgKIgrAAIAAgLIA5AAIAAAIQgIAKgJAQQgIAOgEAQQgDAMgBANg");
	this.shape_409.setTransform(242.5,119.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgQAtQAAgLAFgPQAEgPAHgOQAHgNAIgKIgrAAIAAgLIA5AAIAAAIQgIAKgJAQQgIAOgEAQQgEAMAAANg");
	this.shape_410.setTransform(235.4,119.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AgQAtQAAgLAFgPQADgPAIgOQAHgNAIgKIgrAAIAAgLIA5AAIAAAIQgIAKgIAQQgKAOgDAQQgEAMAAANg");
	this.shape_411.setTransform(228.3,119.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_412.setTransform(210.425,124.15);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgUAoQgIgIgBgLIALgCQACAKAFAEQAEAFAHgBQAHABAGgGQAFgFAAgJQAAgHgFgFQgFgGgIAAIgHACIABgJIACAAQAGAAAGgDQAGgEAAgIQAAgGgEgFQgFgEgFABQgHgBgEAEQgEAFgCAIIgLgCQACgLAIgGQAHgHALAAQAGAAAGADQAHAEADAFQADAGAAAGQAAAGgDAFQgDAEgGAEQAIABAEAGQAFAFAAAJQAAAMgJAIQgJAIgMAAQgMAAgIgGg");
	this.shape_413.setTransform(205.125,119.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_414.setTransform(185.125,121.525);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgaAhIAAhBIALAAIAAAaIAOAAQANAAAIAFQAHAFAAAJQAAAIgGAGQgGAGgOAAgAgPAYIAMAAQAKAAAEgDQAFgCAAgGQAAgFgEgDQgDgDgLAAIgNAAg");
	this.shape_415.setTransform(178.525,120.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_416.setTransform(170.925,120.625);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AgVAZQgJgIAAgQQAAgQAJgJQAJgJANAAQANAAAIAJQAIAIAAAQIAAADIgwAAQABAKAFAHQAGAFAHAAQAHABAEgEQAEgDADgHIALABQgCALgIAFQgHAGgMgBQgOAAgIgJgAgMgTQgEAFgBAJIAkAAQgBgJgEgEQgFgHgIABQgHgBgGAGg");
	this.shape_417.setTransform(164.35,120.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AgEA6IAAgfQgEAEgEABQgEACgFAAQgKAAgIgJQgIgJAAgQQAAgOAHgKQAHgKAMAAQAFAAAEACQAEACAEAEIAAgfIAKAAIAAAfQADgEAEgCQAFgCAEAAQAMAAAHAKQAHAKAAAOQAAAPgIAKQgHAJgLAAIgHgBQgEgBgFgFIAAAfgAAKgSQgEAGAAAMQAAAPAEAFQAEAFAGAAQAHAAAFgGQAFgGAAgNQAAgMgFgHQgEgGgHAAQgIAAgDAHgAgfgSQgEAGAAAMQAAANAFAGQAEAGAHAAQAHAAAEgGQAEgGAAgMQAAgNgEgGQgEgHgIAAQgGAAgFAHg");
	this.shape_418.setTransform(155.625,120.625);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_419.setTransform(146.875,120.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AgVAZQgIgIAAgQQAAgQAIgJQAJgJAMAAQAOAAAIAJQAJAIAAAQIAAADIgxAAQABAKAGAHQAFAFAHAAQAGABAFgEQAEgDACgHIAMABQgCALgIAFQgIAGgLgBQgNAAgJgJgAgLgTQgFAFgBAJIAjAAQAAgJgDgEQgGgHgJABQgGgBgFAGg");
	this.shape_420.setTransform(139.75,120.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_421.setTransform(132.675,120.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AAQAuIAAgyIgeAyIgMAAIAAhCIALAAIAAAyIAegyIAMAAIAABCgAgKggQgGgEgBgIIAJAAQAAAEADACQADACACAAQAFAAADgCQADgCABgEIAHAAQgBAHgEAFQgFADgIAAQgHAAgEgDg");
	this.shape_422.setTransform(125.6,119.35);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgEACgEQACgFADgBIAIgEIAKgBQANgCAGgCIAAgDQAAgHgDgDQgEgDgIAAQgHAAgEACQgDAEgCAGIgMgBQACgHADgEQAEgFAGgCQAHgCAIAAQAIAAAFACQAFABADADQACADACAFIAAAKIAAAOIABAUIACAIIgLAAIgDgIQgFAFgHACQgEACgHAAQgLABgFgGgAgCAEIgKACQgDABgBADQgBACAAADQAAAFADACQAEADAGAAQAFAAAFgCQAFgDADgFQABgEAAgHIAAgEQgFACgMACg");
	this.shape_423.setTransform(118.45,120.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_424.setTransform(112.225,120.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AgvAuIAAhaIAMAAIAABOIAeAAIAAhOIALAAIAABOIAeAAIAAhOIAMAAIAABag");
	this.shape_425.setTransform(103.45,119.35);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_426.setTransform(83.275,124.15);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgEACgEQACgFADgBIAIgEIAKgBQANgCAGgCIAAgDQAAgHgDgDQgEgDgIAAQgHAAgEACQgDAEgCAGIgMgBQACgHADgEQAEgFAGgCQAHgCAIAAQAIAAAFACQAFABADADQACADACAFIAAAKIAAAOIABAUIACAIIgLAAIgDgIQgFAFgHACQgEACgHAAQgLABgFgGgAgCAEIgKACQgDABgBADQgBACAAADQAAAFADACQAEADAGAAQAFAAAFgCQAFgDADgFQABgEAAgHIAAgEQgFACgMACg");
	this.shape_427.setTransform(77.95,120.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_428.setTransform(70.925,120.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_429.setTransform(63.85,120.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AAPAhIAAgbQgKADgIABQgHAAgGgEQgGgEgCgFQgCgFAAgHIAAgRIALAAIAAAMIABAMQABAEAEACQAEACAFAAQAFAAAKgCIAAgeIAMAAIAABBg");
	this.shape_430.setTransform(56.775,120.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AAPAhIAAgbQgKADgIABQgHAAgGgEQgGgEgCgFQgCgFAAgHIAAgRIALAAIAAAMIABAMQABAEAEACQAEACAFAAQAFAAAKgCIAAgeIAMAAIAABBg");
	this.shape_431.setTransform(50.175,120.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AgVAZQgIgIAAgQQAAgQAIgJQAJgJAMAAQAOAAAIAJQAJAIAAAQIAAADIgxAAQABAKAGAHQAFAFAHAAQAGABAFgEQAEgDACgHIAMABQgCALgIAFQgIAGgLgBQgNAAgJgJgAgLgTQgFAFgBAJIAjAAQAAgJgDgEQgGgHgJABQgGgBgFAGg");
	this.shape_432.setTransform(43.9,120.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_433.setTransform(35.975,120.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AgEAuIAAhCIAJAAIAABCgAgEggIAAgMIAJAAIAAAMg");
	this.shape_434.setTransform(30.15,119.35);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AAYAuIAAgrIguAAIAAArIgNAAIAAhaIANAAIAAAlIAuAAIAAglIAMAAIAABag");
	this.shape_435.setTransform(24.125,119.35);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_436.setTransform(329.575,111.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#333333").s().p("AgdAuIAAhbIA6AAIAAALIgtAAIAABQg");
	this.shape_437.setTransform(326.45,107.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#333333").s().p("AARAuIgQgZQgFgKgEgEQgEgEgHAAIAAArIgMAAIAAhaIAMAAIAAAnQAIAAADgDQAEgDAEgMIAGgNQADgDAFgDQAEgDAGAAIAHABIAAAKIgDAAIgCAAQgGAAgDADQgDADgDAJQgFALgDADQgDADgDACQAHACAJANIATAfg");
	this.shape_438.setTransform(319.3,107.075);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#333333").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_439.setTransform(301.3,111);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgIALABQAOAAAJAJQAIAIAAAQQAAAMgEAHQgEAHgHAFQgHADgJAAQgMABgJgKgAgMgSQgHAGAAAMQAAANAHAGQAFAGAHAAQAIAAAGgGQAGgGgBgNQABgMgGgGQgGgHgIABQgHgBgFAHg");
	this.shape_440.setTransform(295.9,108.35);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#333333").s().p("AARAuIgPgZQgFgKgFgEQgEgEgHAAIAAArIgMAAIAAhaIAMAAIAAAnQAJAAADgDQADgDAFgMQADgJADgEQACgDAEgDQAFgDAFAAIAIABIAAAKIgDAAIgCAAQgFAAgDADQgDADgEAJQgFALgDADQgDADgEACQAIACAJANIATAfg");
	this.shape_441.setTransform(289.2,107.075);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#333333").s().p("AARAiQgGAHgGADQgGADgHAAQgOAAgJgKQgGgHAAgKQAAgIAFgHQAGgGAKgFQgGgHgCgFQgCgEAAgEQAAgIAHgGQAGgGAKAAQAIAAAGAFQAGAGAAAIQAAANgRAJIAQAUIAFgNIALADQgDAMgFAHQAGAJAIAFIgHAJQgHgEgHgJgAgWAKQgDAFAAAEQAAAGAEAGQAFAGAIAAQAFAAAEgDQAGgDADgFIgUgaQgJAGgDAEgAgLgiQgDADAAAEIABAEIADAFIAFAGQAGgEACgEQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_442.setTransform(268.775,107.125);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#333333").s().p("AAbAuIgXghIgEgGIgDAGIgXAhIgPAAIAkgvIgggsIAPAAIAQAXIAHAMIAHgLIASgYIANAAIggArIAjAwg");
	this.shape_443.setTransform(248.075,107.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#333333").s().p("AgRAqQgGgFgEgJQgDgIAAgUQAAgaAJgJQAJgJARAAIANAAIACgCIAKAAQgBAHgCACQgCACgEABIgOABQgNAAgFADQgFACgCAGQgCAGgBAJQAFgGAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAALgEAIQgEAHgGAFQgGADgKAAQgLABgHgGgAgMgDQgGAGAAAMQAAALAGAHQAGAFAHAAQAIABAFgIQAFgGAAgNQAAgJgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_444.setTransform(240.175,107.05);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg2IAAA2IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_445.setTransform(232.275,108.35);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#333333").s().p("AgcAuIAAhbIA6AAIAAALIgvAAIAABQg");
	this.shape_446.setTransform(225.7,107.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_447.setTransform(206.075,108.35);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#333333").s().p("AAQAuIAAgxIgeAxIgMAAIAAhCIALAAIAAAyIAegyIAMAAIAABCgAgLggQgEgFgBgIIAIAAQAAAEADADQADACADAAQAEAAAEgCQACgCABgFIAIAAQgBAIgFAFQgFADgIAAQgHAAgFgDg");
	this.shape_448.setTransform(199,107.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAHIgJAPIgOAAIAMgSQAFgIAGgBQgKgCgEgEQgFgGAAgHQAAgIAGgGQAGgFAMAAIAdAAIAABBgAgKgUQgDAEAAAEQAAAFAFAEQAEACAKAAIAMAAIAAgWIgQAAQgJAAgDADg");
	this.shape_449.setTransform(191.675,108.35);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_450.setTransform(184.475,108.375);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#333333").s().p("AARAuIgQgZQgEgKgFgEQgEgEgHAAIAAArIgMAAIAAhaIAMAAIAAAnQAJAAACgDQAEgDAEgMIAHgNQACgDAFgDQAEgDAGAAIAHABIAAAKIgDAAIgCAAQgGAAgDADQgDADgDAJQgEALgEADQgDADgDACQAHACAJANIATAfg");
	this.shape_451.setTransform(177.9,107.075);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEACQAFABADAFQADADAAAHQAAAEgCAEQgBADgFACQAFABADAFQADAEAAAFQgBAKgFAFQgHAEgLAAgAgPAYIAPAAQAJAAADgCQAEgCgBgGQAAgDgBgDQgCgCgEgBIgKgBIgNAAgAgPgEIAMAAIAJgBQADgBACgCQACgCAAgDQAAgGgEgCQgDgCgJAAIgMAAg");
	this.shape_452.setTransform(158.4,108.35);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQAAgEACgEQACgEAEgDIAHgCIALgCQAMgCAHgCIAAgDQAAgHgEgDQgEgDgIAAQgHAAgEADQgEACgCAHIgKgBQABgHADgEQAEgFAHgCQAGgCAHAAQAJAAAFACQAGACACACQACAEABAEIABAKIAAAPIAAATIADAIIgMAAIgBgIQgHAFgFACQgFACgHAAQgKABgHgGgAgBAEIgKACQgEACgBACQgBACgBADQABAFADADQAEACAGAAQAFABAGgDQAEgDADgFQABgEABgHIAAgEQgHACgKACg");
	this.shape_453.setTransform(151.25,108.35);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_454.setTransform(144.975,108.35);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgJAEgJQADgHAIgFQAHgDAHAAQALgBAHAGQAHAFACALIgLABQgCgGgEgEQgEgDgFAAQgIAAgFAFQgFAHAAAMQAAANAFAHQAFAFAHAAQAHABAEgFQAFgEABgIIALABQgCAMgHAGQgIAGgLAAQgMABgJgKg");
	this.shape_455.setTransform(139.075,108.35);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#333333").s().p("AgXAtIgCgLIAHABQAEAAACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQACgCACgGIABgDIgZhCIAMAAIAOAmIADAPIAFgOIAOgnIALAAIgZBDIgFAOQgDAGgEADQgEADgFAAIgHgCg");
	this.shape_456.setTransform(132.675,109.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#333333").s().p("AgdAuIAAhbIA7AAIAAALIguAAIAABQg");
	this.shape_457.setTransform(127.35,107.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#333333").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_458.setTransform(109.55,111);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#333333").s().p("AgbAvIAAhbIAKAAIAAAJQADgFAFgDQAEgCAGAAQAIgBAHAFQAGAEAEAIQACAIAAAJQAAAKgDAIQgEAIgGAEQgIAFgHgBQgEABgFgDQgFgCgDgEIAAAhgAgMgeQgFAGAAANQAAAMAEAGQAGAGAHAAQAGAAAGgGQAFgGABgNQgBgMgFgHQgFgGgHAAQgHAAgFAHg");
	this.shape_459.setTransform(104.35,109.55);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#333333").s().p("AAeA4IAAgVIg7AAIAAAVIgLAAIAAggIAHAAQALgRAAgxIAAgNIA2AAIAABPIAJAAIAAAggAgKgoQgBAMgCAUQgBATgHANIApAAIAAhFIgeAAg");
	this.shape_460.setTransform(96.15,108.175);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#333333").s().p("AgFAhIAAgNIALAAIAAANgAgFgUIAAgMIALAAIAAAMg");
	this.shape_461.setTransform(78.2,108.35);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#333333").s().p("AAMAhIgMgUQgCgHgDgBQgDgCgEAAIAAAeIgLAAIAAhBIALAAIAAAdQAGAAACgCQACgCADgLIAFgKQACgDADAAIAIgBIADAAIAAAJIgEAAQgEAAgBACIgEAIIgEAJIgGAEQAGABAHAMIAMAUg");
	this.shape_462.setTransform(74.05,108.35);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_463.setTransform(67.25,108.35);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_464.setTransform(60.175,108.35);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#333333").s().p("AgRAqQgGgFgEgJQgDgIAAgUQAAgaAJgJQAJgJARAAIANAAIACgCIAKAAQgBAHgCACQgCACgEABIgOABQgNAAgFADQgFACgCAGQgCAGgBAJQAFgGAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAALgEAIQgEAHgGAFQgGADgKAAQgLABgHgGgAgMgDQgGAGAAAMQAAALAGAHQAGAFAHAAQAIABAFgIQAFgGAAgNQAAgJgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_465.setTransform(53.025,107.05);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgIALABQAOAAAIAJQAJAIAAAQQAAAMgDAHQgEAHgIAFQgHADgJAAQgMABgJgKgAgNgSQgFAGAAAMQAAANAFAGQAGAGAHAAQAIAAAGgGQAFgGABgNQgBgMgFgGQgGgHgIABQgHgBgGAHg");
	this.shape_466.setTransform(45.75,108.35);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#333333").s().p("AgcAvIAAhbIAKAAIAAAJQAEgFAEgDQAFgCAGAAQAIgBAHAFQAGAEADAIQADAIAAAJQABAKgEAIQgEAIgGAEQgIAFgHgBQgFABgEgDQgFgCgDgEIAAAhgAgMgeQgFAGgBANQAAAMAGAGQAFAGAHAAQAHAAAFgGQAFgGAAgNQAAgMgFgHQgFgGgHAAQgGAAgGAHg");
	this.shape_467.setTransform(38.85,109.55);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_468.setTransform(31.6,108.35);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#333333").s().p("AghAuIAAhbIAhAAQAKAAAHADQAGADADAGQAEAGAAAFQAAAGgDAFQgDAGgHADQAJACAEAFQAEAGAAAIQAAAHgCAFQgDAGgEADQgEADgGABQgGACgJAAgAgVAiIAVAAIAJAAIAHgCIAEgFQACgEAAgEQAAgFgDgEQgCgDgFgCQgFgCgHABIgVAAgAgVgGIATAAIALgBQAEgCADgDQACgDAAgFQAAgFgCgDQgCgDgEgBQgEgCgJAAIgSAAg");
	this.shape_469.setTransform(23.925,107.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#333333").s().p("AgGAGIAAgMIAMAAIAAAMg");
	this.shape_470.setTransform(155,98.75);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#333333").s().p("AAQAtIAAgwIgeAwIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBgAgLggQgEgFgBgIIAIAAQAAAEADADQACACAEAAQAEAAAEgCQACgCABgFIAIAAQgCAIgEAFQgFADgIAAQgHAAgFgDg");
	this.shape_471.setTransform(149.6,94.85);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#333333").s().p("AgVAZQgIgIAAgRQAAgPAIgKQAJgIAMgBQAOABAIAIQAJAKAAAPIAAADIgxAAQABALAGAFQAFAHAHgBQAGAAAFgDQAEgDACgHIAMABQgCALgIAFQgIAFgLAAQgNABgJgKgAgLgTQgFAFgBAJIAjAAQAAgJgDgEQgGgHgJAAQgGAAgFAGg");
	this.shape_472.setTransform(142.45,96.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_473.setTransform(136.225,96.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#333333").s().p("AgEAtIAAhBIAJAAIAABBgAgEggIAAgNIAJAAIAAANg");
	this.shape_474.setTransform(131.85,94.85);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_475.setTransform(126.525,97.025);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAHIgJAPIgOAAIAMgSQAFgIAGgBQgKgCgEgEQgFgGAAgHQAAgIAGgGQAGgFAMAAIAdAAIAABBgAgKgUQgDADAAAFQAAAGAFADQAEACAKAAIAMAAIAAgWIgQAAQgJAAgDADg");
	this.shape_476.setTransform(115.675,96.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_477.setTransform(108.475,96.125);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_478.setTransform(101.175,97.025);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#333333").s().p("AARAhIgOgUIgDgGIgRAaIgNAAIAYgiIgWgfIANAAIALAPIAEAIIAFgIIALgPIANAAIgXAfIAZAig");
	this.shape_479.setTransform(90.95,96.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_480.setTransform(84.2,96.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_481.setTransform(77.125,96.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_482.setTransform(70.15,96.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#333333").s().p("AgXAtIgCgLIAHABQAEABACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQACgCACgGIABgEIgZhBIAMAAIAOAmIADAPIAFgOIAOgnIALAAIgZBDIgFAOQgDAGgEADQgEACgFAAIgHgBg");
	this.shape_483.setTransform(63.575,97.45);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_484.setTransform(57.275,96.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#333333").s().p("AgUAZQgIgIAAgRQAAgJAEgJQADgHAIgEQAHgEAHgBQALAAAHAGQAHAFACALIgLABQgCgGgEgEQgEgEgFAAQgIABgFAFQgFAHAAAMQAAANAFAGQAFAHAHgBQAHAAAEgEQAFgEABgIIALABQgCALgHAHQgIAGgLAAQgMABgJgKg");
	this.shape_485.setTransform(51.375,96.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#333333").s().p("AgVAZQgJgJAAgQQAAgSAKgIQAJgIALAAQAOABAJAIQAIAKAAAPQAAAMgEAHQgEAHgHAFQgHADgJAAQgMABgJgKgAgMgSQgHAGAAAMQAAAMAHAHQAFAGAHAAQAIAAAGgGQAGgHgBgMQABgMgGgGQgGgHgIAAQgHAAgFAHg");
	this.shape_486.setTransform(44.35,96.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_487.setTransform(36.975,97.025);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#333333").s().p("AgVAZQgJgIABgRQgBgPAJgKQAJgIAMgBQAOABAIAIQAJAKgBAPIAAADIgwAAQABALAGAFQAFAHAHgBQAGAAAEgDQAFgDADgHIALABQgCALgIAFQgIAFgLAAQgOABgIgKgAgLgTQgGAFAAAJIAkAAQgBgJgDgEQgGgHgJAAQgGAAgFAGg");
	this.shape_488.setTransform(30.1,96.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_489.setTransform(23.075,96.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#333333").s().p("AgGALQAEgCACgDQAAgDAAgFIgFAAIAAgMIAMAAIAAAMQAAAHgDAEQgCAEgFACg");
	this.shape_490.setTransform(329.575,87.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#333333").s().p("AARAhIgNgUIgEgGIgRAaIgNAAIAYgiIgXgfIAPAAIAKAPIAEAIIAFgIIAKgPIAOAAIgXAfIAZAig");
	this.shape_491.setTransform(324.7,83.85);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAHIgJAPIgOAAIAMgSQAFgIAGgBQgKgCgEgEQgFgFAAgIQAAgJAGgFQAGgFAMAAIAdAAIAABBgAgKgTQgDACAAAFQAAAFAFAEQAEACAKAAIAMAAIAAgWIgQAAQgJAAgDAEg");
	this.shape_492.setTransform(317.725,83.85);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_493.setTransform(311.175,84.775);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgJAEgJQADgHAIgEQAHgFAHAAQALAAAHAGQAHAGACAKIgLABQgCgHgEgDQgEgEgFAAQgIABgFAGQgFAGAAAMQAAANAFAGQAFAHAHAAQAHgBAEgEQAFgEABgIIALABQgCALgHAHQgIAGgLAAQgMABgJgJg");
	this.shape_494.setTransform(304.275,83.85);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#333333").s().p("AgFAtIAAhBIAKAAIAABBgAgFggIAAgNIAKAAIAAANg");
	this.shape_495.setTransform(299.45,82.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg2IAAA2IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_496.setTransform(293.675,83.85);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#333333").s().p("AgXAtIgCgKIAHAAQAEABACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQACgCACgGIABgEIgZhBIAMAAIAOAmIADAPIAFgOIAOgnIALAAIgZBCIgFAPQgDAGgEADQgEACgFAAIgHgBg");
	this.shape_497.setTransform(279.175,85.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_498.setTransform(265.45,83.85);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_499.setTransform(258.975,83.85);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#333333").s().p("AgYAdQgFgFgBgIQAAgFADgEQACgFADgCIAIgCIAKgCQANgBAHgDIAAgDQgBgGgDgDQgEgFgIAAQgHAAgEAEQgDACgCAIIgLgCQABgHADgFQAEgEAGgCQAHgDAHAAQAJAAAFADQAFACADACQADADABAFIAAAKIAAAPIABATIACAIIgLAAIgCgIQgGAFgHADQgEABgHAAQgKAAgHgFgAgBAEIgLADQgCABgCACQgCADABADQgBAEAEADQADACAHABQAFgBAGgCQAFgDACgFQACgDAAgIIAAgEQgHADgKABg");
	this.shape_500.setTransform(252.75,83.85);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#333333").s().p("AgSAhIAAhBIAlAAIAAAJIgaAAIAAA4g");
	this.shape_501.setTransform(247.65,83.85);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#333333").s().p("AgEAtIAAhBIAJAAIAABBgAgEggIAAgNIAJAAIAAANg");
	this.shape_502.setTransform(243.45,82.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#333333").s().p("AgbAvIAAhbIAJAAIAAAIQAEgFAEgCQAFgDAGAAQAIAAAHAFQAGAEADAIQADAIAAAJQABALgEAHQgEAIgGAEQgIAEgHAAQgFAAgEgCQgFgCgDgEIAAAhgAgMgeQgFAGgBANQAAAMAGAGQAFAGAHABQAHgBAFgGQAFgHAAgMQAAgMgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_503.setTransform(238.65,85.05);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#333333").s().p("AgVAaQgJgKABgQQgBgPAJgKQAJgIAMgBQAOABAIAIQAJAJgBAQIAAADIgwAAQABALAGAFQAFAHAHAAQAGgBAEgDQAFgDACgIIAMACQgDAKgHAGQgHAFgMAAQgNABgJgJgAgLgTQgGAFAAAIIAjAAQAAgHgDgFQgGgHgJAAQgGAAgFAGg");
	this.shape_504.setTransform(231.35,83.85);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#333333").s().p("AgRAqQgGgGgEgHQgDgJAAgUQAAgaAJgJQAJgJARAAIANAAIACgDIAKABQgBAGgCADQgCACgEACIgOAAQgNAAgFADQgFADgCAFQgCAGgBAKQAFgHAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAAMgEAHQgEAHgGAFQgGADgKAAQgLAAgHgFgAgMgDQgGAGAAAMQAAAMAGAFQAGAHAHAAQAIAAAFgIQAFgGAAgNQAAgKgEgFQgFgHgJAAQgIAAgFAHg");
	this.shape_505.setTransform(224.375,82.55);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#333333").s().p("AghATIAMgCQABAHAGAGQAGAHAIgBQAKABAFgFQAGgFgBgHQAAgIgFgEQgGgFgJABIgGAAIAAgKIAMgBQAEgBADgEQAEgEAAgFQAAgGgFgEQgEgFgIAAQgGABgFADQgFADgBAGIgCAJIgMgDQAEgdAbAAQANAAAIAHQAIAIAAAKQAAAMgMAHQAHACAEAGQAFAFABAIQAAAMgKAIQgJAIgPAAQgZAAgIgcg");
	this.shape_506.setTransform(216.85,82.6);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#333333").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_507.setTransform(204.3,86.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#333333").s().p("AgFAtIAAhBIALAAIAABBgAgFggIAAgNIALAAIAAANg");
	this.shape_508.setTransform(201.1,82.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#333333").s().p("AAPAhIAAgdIgeAAIAAAdIgLAAIAAhBIALAAIAAAcIAeAAIAAgcIAMAAIAABBg");
	this.shape_509.setTransform(196.125,83.85);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_510.setTransform(189.05,83.85);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_511.setTransform(181.575,84.775);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#333333").s().p("AgVAaQgIgKAAgQQAAgPAIgKQAJgIAMgBQAOABAIAIQAJAJAAAQIAAADIgxAAQABALAGAFQAFAHAHAAQAGgBAEgDQAFgDACgIIAMACQgDAKgHAGQgIAFgLAAQgNABgJgJgAgLgTQgGAFAAAIIAjAAQAAgHgDgFQgGgHgJAAQgGAAgFAGg");
	this.shape_512.setTransform(174.75,83.85);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#333333").s().p("AgcAvIAAhbIAKAAIAAAIQAEgFAEgCQAGgDAFAAQAIAAAGAFQAHAEADAIQAEAIAAAJQAAALgEAHQgDAIgIAEQgGAEgIAAQgEAAgFgCQgEgCgDgEIAAAhgAgMgeQgGAGAAANQABAMAFAGQAFAGAHABQAGgBAGgGQAGgHgBgMQABgMgGgGQgFgHgHAAQgGAAgGAHg");
	this.shape_513.setTransform(167.85,85.05);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#333333").s().p("AgVAaQgIgKgBgQQABgPAIgKQAJgIAMgBQAOABAIAIQAJAJAAAQIAAADIgxAAQABALAGAFQAFAHAHAAQAGgBAFgDQAEgDACgIIAMACQgCAKgIAGQgHAFgMAAQgNABgJgJgAgLgTQgFAFgBAIIAjAAQAAgHgEgFQgFgHgJAAQgGAAgFAGg");
	this.shape_514.setTransform(160.55,83.85);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgJAEgJQADgHAIgEQAHgFAHAAQALAAAHAGQAHAGACAKIgLABQgCgHgEgDQgEgEgFAAQgIABgFAGQgFAGAAAMQAAANAFAGQAFAHAHAAQAHgBAEgEQAFgEABgIIALABQgCALgHAHQgIAGgLAAQgMABgJgJg");
	this.shape_515.setTransform(154.075,83.85);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEACQAFABADAEQADAFAAAFQAAAFgCAEQgBADgFACQAFABADAFQADADAAAHQgBAJgFAEQgHAFgLAAgAgPAYIAPAAQAJAAADgCQAEgDgBgFQAAgDgCgDQgBgDgEAAIgKgBIgNAAgAgPgEIAMAAIAJgBQADAAACgDQACgDAAgCQAAgGgEgBQgDgDgJAAIgMAAg");
	this.shape_516.setTransform(147.6,83.85);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#333333").s().p("AgFAtIAAhBIAKAAIAABBgAgFggIAAgNIAKAAIAAANg");
	this.shape_517.setTransform(135.65,82.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#333333").s().p("AgpAhIAAhBIALAAIAAA4IAZAAIAAg4IAKAAIAAA4IAaAAIAAg4IALAAIAABBg");
	this.shape_518.setTransform(129.125,83.85);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_519.setTransform(120.45,83.85);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_520.setTransform(112.975,84.775);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgFACgEQACgFADgCIAJgCIAJgCQANgBAGgDIAAgDQAAgGgDgDQgEgFgIAAQgHAAgEAEQgDACgCAIIgMgCQACgHAEgFQADgEAGgCQAHgDAIAAQAIAAAFADQAFACADACQACADACAFIAAAKIAAAPIABATIADAIIgMAAIgDgIQgFAFgHADQgEABgHAAQgLAAgFgFgAgCAEIgKADQgDABgBACQgBADAAADQAAAEADADQAEACAGABQAFgBAFgCQAFgDADgFQABgDAAgIIAAgEQgFADgMABg");
	this.shape_521.setTransform(105.85,83.85);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_522.setTransform(98.275,83.875);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#333333").s().p("AAMAhIgMgUQgDgHgDgBQgCgCgEgBIAAAfIgLAAIAAhBIALAAIAAAdQAFAAACgDQACgBAEgLIAFgKQACgDADAAIAJgBIABAAIAAAJIgCAAQgFAAgBACIgEAIIgFAJIgFAEQAGABAHAMIAMAUg");
	this.shape_523.setTransform(92.45,83.85);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEACQAFABADAEQADAFAAAFQAAAFgBAEQgDADgDACQAEABADAFQADADAAAHQAAAJgHAEQgFAFgMAAgAgPAYIAPAAQAJAAADgCQADgDABgFQAAgDgCgDQgDgDgDAAIgJgBIgOAAgAgPgEIAMAAIAJgBQACAAACgDQADgDAAgCQAAgGgEgBQgEgDgHAAIgNAAg");
	this.shape_524.setTransform(86,83.85);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#333333").s().p("AgQAGIAAgKIAhAAIAAAKg");
	this.shape_525.setTransform(80.275,83.85);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#333333").s().p("AgXAtIgCgKIAHAAQAEABACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQACgCACgGIABgEIgZhBIAMAAIAOAmIADAPIAFgOIAOgnIALAAIgZBCIgFAPQgDAGgEADQgEACgFAAIgHgBg");
	this.shape_526.setTransform(75.025,85.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#333333").s().p("AAMAhIgMgUQgCgHgDgBQgDgCgEgBIAAAfIgLAAIAAhBIALAAIAAAdQAGAAACgDQACgBADgLIAFgKQACgDADAAIAJgBIACAAIAAAJIgDAAQgFAAgBACIgEAIIgFAJIgFAEQAGABAHAMIAMAUg");
	this.shape_527.setTransform(69.3,83.85);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_528.setTransform(63.175,83.85);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgJAEgJQADgHAIgEQAHgFAHAAQALAAAHAGQAHAGACAKIgLABQgCgHgEgDQgEgEgFAAQgIABgFAGQgFAGAAAMQAAANAFAGQAFAHAHAAQAHgBAEgEQAFgEABgIIALABQgCALgHAHQgIAGgLAAQgMABgJgJg");
	this.shape_529.setTransform(57.225,83.85);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_530.setTransform(50.3,83.85);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_531.setTransform(42.675,83.875);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#333333").s().p("AgYAdQgFgFAAgIQAAgFACgEQACgFADgCIAIgCIAKgCQANgBAHgDIAAgDQAAgGgEgDQgEgFgIAAQgHAAgEAEQgDACgDAIIgKgCQABgHADgFQAEgEAGgCQAHgDAHAAQAJAAAFADQAGACACACQACADACAFIAAAKIAAAPIABATIACAIIgLAAIgCgIQgHAFgGADQgEABgHAAQgKAAgHgFgAgBAEIgKADQgEABgBACQgCADABADQAAAEADADQADACAHABQAFgBAGgCQAFgDACgFQACgDAAgIIAAgEQgHADgKABg");
	this.shape_532.setTransform(28.75,83.85);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_533.setTransform(22.475,83.85);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#333333").s().p("AgEAtIAAhAIAKAAIAABAgAgEggIAAgNIAKAAIAAANg");
	this.shape_534.setTransform(330.1,70.35);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_535.setTransform(325.275,72.525);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEACQAEABAEAEQADAFAAAFQAAAFgBAEQgDADgDADQAEAAADAFQADADAAAHQAAAJgHAEQgFAFgMAAgAgPAYIAPAAQAJAAADgDQADgBABgGQAAgDgCgDQgDgCgDgBIgJgBIgOAAgAgPgFIAMAAIAJAAQACAAACgDQADgDAAgDQAAgEgEgCQgEgDgHAAIgNAAg");
	this.shape_536.setTransform(318.2,71.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgSALgIQAIgIALAAQAOABAJAIQAIAKAAAPQAAAMgEAHQgDAHgIAEQgHAFgJAAQgMAAgJgJgAgMgSQgHAHABALQgBAMAHAHQAFAGAHABQAIgBAGgGQAGgHgBgMQABgLgGgHQgGgGgIgBQgHABgFAGg");
	this.shape_537.setTransform(311,71.6);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#333333").s().p("AAMAhIgMgVQgDgFgDgCQgCgDgEAAIAAAfIgLAAIAAhBIALAAIAAAdQAFgBACgCQACgBAEgKIAFgLQACgDADAAIAIgBIACAAIAAAJIgDAAQgEAAgBACIgEAHIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_538.setTransform(305.05,71.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#333333").s().p("AgYAdQgFgFgBgIQAAgFADgEQACgFADgCIAIgCIAKgCQANgBAHgDIAAgDQgBgGgDgDQgEgFgIAAQgHAAgEAEQgDACgCAIIgLgCQABgHADgFQAEgEAGgCQAHgCAIgBQAIAAAFACQAFADADACQADADABAFIAAALIAAAOIABATIACAIIgLAAIgCgIQgGAFgHADQgEACgHAAQgKgBgHgFgAgBAEIgLADQgCAAgCADQgCADABADQgBAEAEADQADADAHAAQAFgBAGgCQAFgDACgFQACgDAAgIIAAgEQgHADgKABg");
	this.shape_539.setTransform(298.2,71.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_540.setTransform(291.25,71.6);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEgBACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgGIABgEIgZhAIAMAAIAOAlIADAPIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEADgFgBIgHgBg");
	this.shape_541.setTransform(284.625,72.95);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#333333").s().p("AgYAdQgFgFgBgIQAAgFADgEQACgFADgCIAIgCIAKgCQANgBAHgDIAAgDQgBgGgDgDQgEgFgIAAQgHAAgEAEQgDACgCAIIgLgCQABgHADgFQAEgEAGgCQAHgCAIgBQAIAAAFACQAFADADACQADADABAFIAAALIAAAOIABATIACAIIgLAAIgCgIQgGAFgHADQgEACgHAAQgKgBgHgFgAgBAEIgLADQgCAAgCADQgCADABADQgBAEAEADQADADAHAAQAFgBAGgCQAFgDACgFQACgDAAgIIAAgEQgHADgKABg");
	this.shape_542.setTransform(271.2,71.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_543.setTransform(264.175,71.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAHIgJAPIgOAAIAMgSQAFgIAGgBQgKgBgEgFQgFgFAAgIQAAgJAGgFQAGgFAMAAIAdAAIAABBgAgKgTQgDACAAAFQAAAFAFAEQAEACAKAAIAMAAIAAgWIgQAAQgJAAgDAEg");
	this.shape_544.setTransform(250.225,71.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_545.setTransform(243.575,71.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_546.setTransform(236.525,71.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgFACgEQACgFAEgCIAIgCIAKgCQAMgBAGgDIAAgDQAAgGgCgDQgFgFgIAAQgHAAgEAEQgDACgDAIIgLgCQACgHAEgFQADgEAHgCQAGgCAIgBQAIAAAFACQAFADADACQADADAAAFIABALIAAAOIAAATIAEAIIgNAAIgCgIQgGAFgFADQgFACgHAAQgLgBgFgFgAgCAEIgKADQgCAAgCADQgCADAAADQAAAEAEADQADADAHAAQAGgBAEgCQAFgDADgFQACgDgBgIIAAgEQgFADgMABg");
	this.shape_547.setTransform(229.4,71.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAIAAAFACQAEABAEAEQADAFAAAFQAAAFgCAEQgBADgFADQAFAAADAFQADADAAAHQgBAJgFAEQgHAFgLAAgAgPAYIAPAAQAJAAADgDQAEgBgBgGQAAgDgCgDQgBgCgDgBIgLgBIgNAAgAgPgFIAMAAIAJAAQADAAACgDQACgDAAgDQAAgEgEgCQgDgDgJAAIgMAAg");
	this.shape_548.setTransform(222.85,71.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEgBACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgGIABgEIgZhAIAMAAIAOAlIADAPIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEADgFgBIgHgBg");
	this.shape_549.setTransform(216.125,72.95);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_550.setTransform(209.875,71.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#333333").s().p("AgVAaQgIgKgBgQQABgPAIgKQAJgIAMgBQAOABAIAIQAJAJAAAQIAAADIgxAAQABALAFAFQAGAHAHAAQAGgBAFgDQAEgDACgIIAMACQgCAKgIAGQgHAFgMABQgNAAgJgJgAgMgTQgEAFgBAIIAjAAQAAgHgEgFQgFgGgJgBQgGABgGAFg");
	this.shape_551.setTransform(203.75,71.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#333333").s().p("AAMAhIgMgVQgCgFgDgCQgDgDgEAAIAAAfIgLAAIAAhBIALAAIAAAdQAGgBACgCQACgBADgKIAFgLQACgDADAAIAIgBIADAAIAAAJIgEAAQgEAAgBACIgEAHIgEAJIgGAFQAGABAHALIAMAVg");
	this.shape_552.setTransform(197.8,71.6);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_553.setTransform(191,71.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_554.setTransform(184.525,71.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#333333").s().p("AgVAaQgIgKAAgQQAAgPAIgKQAJgIAMgBQAOABAIAIQAJAJAAAQIAAADIgxAAQABALAGAFQAFAHAHAAQAGgBAFgDQAEgDACgIIAMACQgCAKgIAGQgIAFgLABQgNAAgJgJgAgLgTQgFAFgBAIIAjAAQAAgHgDgFQgGgGgJgBQgGABgFAFg");
	this.shape_555.setTransform(178.45,71.6);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg2IAAA2IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_556.setTransform(163.925,71.6);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgSAKgIQAJgIALAAQAOABAJAIQAIAKAAAPQAAAMgEAHQgEAHgHAEQgHAFgJAAQgMAAgJgJgAgMgSQgHAHAAALQAAAMAHAHQAFAGAHABQAIgBAGgGQAGgHgBgMQABgLgGgHQgGgGgIgBQgHABgFAGg");
	this.shape_557.setTransform(155.95,71.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_558.setTransform(149.675,71.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgJAEgIQADgJAIgDQAHgFAHAAQALABAHAFQAHAGACAKIgLABQgCgHgEgDQgEgDgFgBQgIAAgFAHQgFAGAAAMQAAANAFAGQAFAHAHAAQAHgBAEgEQAFgEABgIIALABQgCAMgHAGQgIAGgLABQgMAAgJgJg");
	this.shape_559.setTransform(143.775,71.6);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#333333").s().p("AAMAhIgMgVQgDgFgDgCQgCgDgEAAIAAAfIgLAAIAAhBIALAAIAAAdQAFgBACgCQACgBAEgKIAFgLQACgDADAAIAJgBIABAAIAAAJIgCAAQgFAAgBACIgEAHIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_560.setTransform(137.9,71.6);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgPAJgKQAJgIANgBQANABAIAIQAIAJAAAQIAAADIgwAAQABALAFAFQAGAHAHAAQAHgBAEgDQAEgDADgIIALACQgCAKgIAGQgHAFgMABQgOAAgIgJgAgMgTQgEAFgBAIIAkAAQgBgHgEgFQgFgGgIgBQgHABgGAFg");
	this.shape_561.setTransform(131.05,71.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_562.setTransform(124.775,71.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#333333").s().p("AgYAPIAKgDQACAGAEAEQAFADAEABQAGAAAEgDQADgEAAgFQAAgEgCgCQgDgDgCgBIgJgBIgDAAIAAgIIAJAAQADAAACgDQACgDABgEQAAgEgDgCQgEgEgEAAQgJAAgEAMIgLgCQAFgTATAAQAKABAHAFQAFAGAAAIQAAAIgIAFQAGACACAEQADAEAAAGQAAAIgHAGQgGAFgMABQgWgBgDgTg");
	this.shape_563.setTransform(112.25,71.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAHIgJAPIgOAAIAMgSQAFgIAGgBQgKgBgEgFQgFgFAAgIQAAgJAGgFQAGgFAMAAIAdAAIAABBgAgKgTQgDACAAAFQAAAFAFAEQAEACAKAAIAMAAIAAgWIgQAAQgJAAgDAEg");
	this.shape_564.setTransform(99.025,71.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgJAEgIQADgJAIgDQAHgFAHAAQALABAHAFQAHAGACAKIgLABQgCgHgEgDQgEgDgFgBQgIAAgFAHQgFAGAAAMQAAANAFAGQAFAHAHAAQAHgBAEgEQAFgEABgIIALABQgCAMgHAGQgIAGgLABQgMAAgJgJg");
	this.shape_565.setTransform(92.925,71.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_566.setTransform(86,71.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_567.setTransform(79.525,71.6);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAxIAegxIAMAAIAABBg");
	this.shape_568.setTransform(73.05,71.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg2IAAA2IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_569.setTransform(65.075,71.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgSALgIQAIgIALAAQAOABAIAIQAJAKAAAPQAAAMgEAHQgDAHgIAEQgHAFgJAAQgMAAgJgJgAgNgSQgFAHAAALQAAAMAFAHQAGAGAHABQAJgBAFgGQAFgHAAgMQAAgLgFgHQgFgGgJgBQgHABgGAGg");
	this.shape_570.setTransform(57.1,71.6);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#333333").s().p("AAQAtIAAgwIgeAwIgMAAIAAhAIALAAIAAAxIAegxIAMAAIAABAgAgLghQgEgDgBgJIAIAAQAAAEADADQADACADAAQAEAAAEgCQACgCABgFIAIAAQgBAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_571.setTransform(50.05,70.35);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#333333").s().p("AgYAdQgFgFAAgIQgBgFADgEQACgFAEgCIAIgCIAKgCQAMgBAHgDIAAgDQAAgGgDgDQgFgFgIAAQgHAAgEAEQgEACgCAIIgLgCQACgHAEgFQADgEAHgCQAGgCAHgBQAJAAAFACQAGADACACQACADABAFIABALIAAAOIAAATIAEAIIgNAAIgCgIQgFAFgGADQgFACgHAAQgKgBgHgFgAgBAEIgKADQgDAAgCADQgBADgBADQABAEADADQAEADAGAAQAGgBAFgCQAEgDADgFQABgDABgIIAAgEQgHADgKABg");
	this.shape_572.setTransform(42.9,71.6);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_573.setTransform(35.875,71.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#333333").s().p("AgYAPIAKgDQACAGAEAEQAEADAFABQAFAAAFgDQADgEAAgFQAAgEgCgCQgDgDgCgBIgJgBIgDAAIAAgIIAJAAQADAAACgDQACgDABgEQAAgEgDgCQgEgEgEAAQgJAAgEAMIgLgCQAFgTATAAQAKABAHAFQAFAGAAAIQABAIgJAFQAFACADAEQACAEAAAGQABAIgHAGQgGAFgMABQgWgBgDgTg");
	this.shape_574.setTransform(29.35,71.6);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgSAKgIQAJgIALAAQAOABAIAIQAJAKAAAPQAAAMgDAHQgFAHgHAEQgHAFgJAAQgNAAgIgJgAgNgSQgFAHgBALQABAMAFAHQAGAGAHABQAIgBAGgGQAFgHABgMQgBgLgFgHQgGgGgIgBQgHABgGAGg");
	this.shape_575.setTransform(23.05,71.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAJQAIAKAAAPQAAAMgEAHQgEAHgHAEQgHAFgJAAQgMgBgJgIgAgMgSQgHAHAAALQAAAMAHAHQAFAGAHABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgHABgFAGg");
	this.shape_576.setTransform(327.95,59.35);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_577.setTransform(320.875,59.35);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_578.setTransform(313.425,60.275);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#333333").s().p("AgEAtIAAhAIAKAAIAABAgAgEggIAAgNIAKAAIAAANg");
	this.shape_579.setTransform(308.5,58.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#333333").s().p("AARAhIgNgVIgEgFIgRAaIgNAAIAYghIgWggIANAAIALAPIAEAIIAFgIIALgPIANAAIgXAfIAZAig");
	this.shape_580.setTransform(303.9,59.35);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#333333").s().p("AgRAqQgGgGgEgHQgDgJAAgUQAAgaAJgJQAJgKARAAIANAAIACgCIAKABQgBAGgCADQgCADgEABIgOAAQgNAAgFADQgFADgCAFQgCAGgBAKQAFgHAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAALgEAIQgEAHgGAEQgGAFgKAAQgLgBgHgFgAgMgDQgGAGAAAMQAAAMAGAFQAGAHAHAAQAIAAAFgHQAFgIAAgLQAAgLgEgFQgFgHgJAAQgIAAgFAHg");
	this.shape_581.setTransform(297.525,58.05);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAJQAIAKAAAPQAAAMgDAHQgFAHgHAEQgHAFgJAAQgNgBgIgIgAgNgSQgFAHgBALQABAMAFAHQAGAGAHABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgHABgGAGg");
	this.shape_582.setTransform(290.25,59.35);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgPAJgKQAJgJANAAQANAAAIAJQAIAKAAAPIAAADIgwAAQABALAFAFQAGAHAHAAQAHgBAEgDQAEgDADgIIALACQgCAKgIAGQgHAFgMABQgOgBgIgIgAgMgTQgEAFgBAIIAkAAQgBgHgEgFQgFgGgIgBQgHABgGAFg");
	this.shape_583.setTransform(283.15,59.35);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_584.setTransform(276.125,59.35);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_585.setTransform(254.275,59.35);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAIIgJAOIgOAAIAMgSQAFgIAGgBQgKgBgEgFQgFgGAAgHQAAgJAGgEQAGgGAMAAIAdAAIAABBgAgKgTQgDACAAAEQAAAHAFACQAEADAKAAIAMAAIAAgWIgQAAQgJAAgDAEg");
	this.shape_586.setTransform(246.125,59.35);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_587.setTransform(239.475,59.35);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_588.setTransform(232.425,59.35);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#333333").s().p("AgYAdQgFgFgBgIQAAgGADgDQACgEADgDIAIgCIAKgCQANgBAHgDIAAgDQgBgGgDgDQgEgFgIAAQgHAAgEADQgDAEgCAHIgLgCQABgHADgFQAEgEAGgCQAHgCAHgBQAJAAAFACQAFACADAEQADADABAEIAAALIAAAOIABATIACAIIgLAAIgCgIQgHAFgGADQgEACgHAAQgKgBgHgFgAgBAEIgLADQgCAAgCADQgCACABAEQgBAEAEACQADAEAHAAQAFgBAGgCQAFgDACgFQACgEAAgHIAAgEQgHADgKABg");
	this.shape_589.setTransform(225.3,59.35);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAFACADAEQADAEAAAGQAAAFgCAEQgBADgFADQAFAAADAEQADAFAAAGQgBAJgFAEQgHAFgLAAgAgPAYIAPAAQAJAAADgDQAEgCgBgFQAAgDgBgDQgCgCgEgCIgKAAIgNAAgAgPgFIAMAAIAJAAQADAAACgDQACgCAAgEQAAgEgEgCQgDgDgJAAIgMAAg");
	this.shape_590.setTransform(218.7,59.35);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEgBACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgHIABgDIgZhAIAMAAIAOAlIADAPIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEADgFgBIgHgBg");
	this.shape_591.setTransform(212.025,60.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgKAEgHQADgJAIgDQAHgFAHAAQALABAHAFQAHAGACAJIgLACQgCgGgEgEQgEgDgFgBQgIAAgFAHQgFAGAAAMQAAANAFAGQAFAHAHAAQAHgBAEgEQAFgEABgIIALABQgCALgHAHQgIAGgLABQgMgBgJgIg");
	this.shape_592.setTransform(205.775,59.35);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAJQAIAKAAAPQAAAMgEAHQgEAHgHAEQgHAFgJAAQgMgBgJgIgAgMgSQgHAHAAALQAAAMAHAHQAFAGAHABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgHABgFAGg");
	this.shape_593.setTransform(198.8,59.35);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_594.setTransform(192.575,59.35);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgKAEgHQADgJAIgDQAHgFAHAAQALABAHAFQAHAGACAJIgLACQgCgGgEgEQgEgDgFgBQgIAAgFAHQgFAGAAAMQAAANAFAGQAFAHAHAAQAHgBAEgEQAFgEABgIIALABQgCALgHAHQgIAGgLABQgMgBgJgIg");
	this.shape_595.setTransform(186.625,59.35);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgGACgDQACgEADgDIAIgCIAKgCQANgBAGgDIAAgDQAAgGgDgDQgEgFgIAAQgHAAgEADQgDAEgCAHIgMgCQACgHAEgFQADgEAGgCQAHgCAIgBQAIAAAFACQAFACADAEQACADACAEIAAALIAAAOIABATIACAIIgLAAIgDgIQgFAFgHADQgEACgHAAQgLgBgFgFgAgCAEIgKADQgDAAgBADQgBACAAAEQAAAEADACQAEAEAGAAQAFgBAFgCQAFgDADgFQABgEAAgHIAAgEQgFADgMABg");
	this.shape_596.setTransform(179.65,59.35);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#333333").s().p("AgZAPIALgDQACAHAEADQAFADAEABQAGAAADgEQAEgDAAgFQAAgEgCgCQgCgDgDgBIgJgBIgDAAIAAgIIAJAAQADAAACgDQADgCgBgFQAAgEgCgDQgEgDgEAAQgJAAgDAMIgMgCQAGgTASAAQAKABAHAFQAFAGABAIQgBAIgHAFQAFACACAEQACAEABAGQgBAIgGAGQgHAFgLABQgWgBgEgTg");
	this.shape_597.setTransform(173.2,59.35);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_598.setTransform(152.475,60.275);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#333333").s().p("AgVAaQgJgKAAgQQAAgPAJgKQAJgJANAAQANAAAIAJQAIAKAAAPIAAADIgwAAQABALAFAFQAGAHAHAAQAHgBADgDQAFgDADgIIALACQgDAKgHAGQgIAFgLABQgNgBgJgIgAgMgTQgFAFAAAIIAkAAQgBgHgEgFQgFgGgIgBQgHABgGAFg");
	this.shape_599.setTransform(145.65,59.35);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#333333").s().p("AgcAuIAAhaIAKAAIAAAIQAEgEAEgDQAFgCAGgBQAIABAHAEQAGAEAEAIQACAIAAAKQABAKgEAHQgEAIgGAEQgIAEgHABQgFgBgEgCQgFgCgDgEIAAAggAgMgeQgFAHgBAMQAAAMAGAGQAFAGAHABQAHgBAFgGQAFgHAAgLQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_600.setTransform(138.75,60.55);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#333333").s().p("AgVAaQgJgKABgQQgBgPAJgKQAJgJAMAAQAOAAAIAJQAJAKgBAPIAAADIgwAAQABALAGAFQAFAHAHAAQAGgBAEgDQAFgDACgIIAMACQgDAKgHAGQgHAFgMABQgNgBgJgIgAgLgTQgGAFAAAIIAjAAQAAgHgDgFQgGgGgJgBQgGABgFAFg");
	this.shape_601.setTransform(131.45,59.35);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#333333").s().p("AAYAtIAAhPIgvAAIAABPIgMAAIAAhaIBHAAIAABag");
	this.shape_602.setTransform(123.375,58.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#333333").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_603.setTransform(89.2,62);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#333333").s().p("AASAhIAAgaIgGAAQgGAAgDACQgDACgFAIIgJAOIgOAAIAMgSQAFgIAGgBQgKgBgEgFQgFgGAAgHQAAgJAGgEQAGgGAMAAIAdAAIAABBgAgKgTQgDACAAAEQAAAHAFACQAEADAKAAIAMAAIAAgWIgQAAQgJAAgDAEg");
	this.shape_604.setTransform(83.625,59.35);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_605.setTransform(76.975,59.35);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_606.setTransform(69.925,59.35);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#333333").s().p("AgXAdQgHgFABgIQgBgGADgDQACgEAEgDIAIgCIAKgCQAMgBAGgDIAAgDQAAgGgCgDQgFgFgIAAQgHAAgEADQgEAEgCAHIgLgCQACgHAEgFQADgEAHgCQAGgCAHgBQAJAAAFACQAGACACAEQADADAAAEIABALIAAAOIAAATIAEAIIgNAAIgCgIQgFAFgGADQgFACgHAAQgLgBgFgFgAgCAEIgJADQgDAAgCADQgBACgBAEQABAEADACQAEAEAGAAQAGgBAFgCQAEgDADgFQABgEAAgHIAAgEQgFADgMABg");
	this.shape_607.setTransform(62.8,59.35);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAJAAAEABQAFACADAEQADAEAAAGQAAAFgBAEQgCADgFADQAFAAADAEQADAFAAAGQgBAJgFAEQgHAFgLAAgAgPAYIAPAAQAJAAADgDQAEgCgBgFQAAgDgCgDQgBgCgEgCIgKAAIgNAAgAgPgFIAMAAIAJAAQADAAACgDQACgCAAgEQAAgEgEgCQgDgDgJAAIgMAAg");
	this.shape_608.setTransform(56.25,59.35);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEgBACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgHIABgDIgZhAIAMAAIAOAlIADAPIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEADgFgBIgHgBg");
	this.shape_609.setTransform(49.525,60.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#333333").s().p("AAPAhIAAgaQgKACgIAAQgHAAgGgDQgGgEgCgEQgCgGAAgHIAAgRIALAAIAAANIABALQABAEAEADQAEABAFAAQAFAAAKgCIAAgeIAMAAIAABBg");
	this.shape_610.setTransform(42.825,59.35);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#333333").s().p("AgcAuIAAhaIAKAAIAAAIQAEgEAEgDQAFgCAGgBQAIABAHAEQAGAEADAIQADAIAAAKQABAKgEAHQgEAIgGAEQgIAEgHABQgFgBgEgCQgFgCgDgEIAAAggAgMgeQgFAHgBAMQAAAMAGAGQAFAGAHABQAHgBAFgGQAFgHAAgLQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_611.setTransform(36.6,60.55);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#333333").s().p("AgYAdQgFgFAAgIQAAgGACgDQACgEAEgDIAHgCIALgCQAMgBAHgDIAAgDQAAgGgEgDQgEgFgIAAQgHAAgEADQgEAEgCAHIgKgCQABgHADgFQAEgEAHgCQAGgCAHgBQAJAAAFACQAGACACAEQACADACAEIAAALIAAAOIAAATIADAIIgMAAIgBgIQgHAFgFADQgFACgHAAQgKgBgHgFgAgBAEIgKADQgEAAgBADQgBACgBAEQABAEADACQAEAEAGAAQAFgBAGgCQAEgDADgFQABgEABgHIAAgEQgHADgKABg");
	this.shape_612.setTransform(29.3,59.35);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#333333").s().p("AARAhIgNgVIgEgFIgRAaIgNAAIAYghIgXggIAPAAIAKAPIAEAIIAFgIIAKgPIAOAAIgXAfIAZAig");
	this.shape_613.setTransform(22.75,59.35);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#333333").s().p("AgXAtIgCgKIAHABQAEgBACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBQACgBACgHIABgDIgZhAIAMAAIAOAmIADAOIAFgOIAOgmIALAAIgZBBIgFAQQgDAFgEADQgEACgFAAIgHgBg");
	this.shape_614.setTransform(328.325,48.45);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_615.setTransform(321.575,47.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAJQAIAKAAAPQAAAMgEAHQgEAIgHADQgHAFgJAAQgMgBgJgIgAgMgSQgHAHAAALQAAANAHAGQAFAHAHAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJgBQgHABgFAGg");
	this.shape_616.setTransform(314.45,47.1);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#333333").s().p("AgEAtIAAhAIAJAAIAABAgAgEggIAAgMIAJAAIAAAMg");
	this.shape_617.setTransform(309.5,45.85);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_618.setTransform(304.675,48.025);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#333333").s().p("AgXAdQgGgFgBgIQAAgGADgDQACgEADgCIAIgEIAKgBQANgBAGgDIAAgDQAAgGgDgEQgEgDgIgBQgHAAgEADQgDAEgCAGIgLgBQABgHADgFQAEgEAGgCQAHgCAIgBQAIAAAFACQAFADADADQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgGAFgHACQgEADgHAAQgKAAgGgGgAgCAEIgKADQgDABgBACQgBADAAADQgBAEAEACQADAEAHAAQAFAAAFgDQAGgDACgFQABgEAAgHIAAgEQgGADgLABg");
	this.shape_619.setTransform(297.2,47.1);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#333333").s().p("AgbAuIAAhaIAJAAIAAAIQAEgEAFgDQAEgCAGgBQAIABAHAEQAGAEAEAIQACAIAAAKQABAKgEAHQgEAIgGAEQgIAFgHAAQgEAAgFgDQgFgCgDgEIAAAggAgMgeQgFAHgBANQAAALAGAGQAFAHAHAAQAGAAAGgHQAFgGAAgMQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_620.setTransform(290.3,48.3);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAJQAIAKAAAPQAAAMgEAHQgEAIgHADQgHAFgJAAQgMgBgJgIgAgMgSQgHAHAAALQAAANAHAGQAFAHAHAAQAIAAAGgHQAGgGgBgNQABgLgGgHQgGgGgIgBQgHABgFAGg");
	this.shape_621.setTransform(273.85,47.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#333333").s().p("AgSAhIAAhBIAlAAIAAAJIgaAAIAAA4g");
	this.shape_622.setTransform(268.7,47.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAJAJQAIAKAAAPQAAAMgDAHQgFAIgHADQgHAFgJAAQgNgBgIgIgAgNgSQgFAHgBALQABANAFAGQAGAHAHAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJgBQgHABgGAGg");
	this.shape_623.setTransform(262.35,47.1);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_624.setTransform(255.325,47.1);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_625.setTransform(248.275,47.1);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#333333").s().p("AgFAtIAAhAIAKAAIAABAgAgFggIAAgMIAKAAIAAAMg");
	this.shape_626.setTransform(243.3,45.85);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#333333").s().p("AAVAqIAAgSIgyAAIAAhBIALAAIAAA4IAeAAIAAg4IALAAIAAA4IAHAAIAAAbg");
	this.shape_627.setTransform(238.475,48.025);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRALgJQAIgHALgBQAOAAAJAJQAIAKAAAPQAAAMgEAHQgDAIgIADQgHAFgJAAQgMgBgJgIgAgMgSQgHAHABALQgBANAHAGQAFAHAHAAQAIAAAGgHQAGgGgBgNQABgLgGgHQgGgGgIgBQgHABgFAGg");
	this.shape_628.setTransform(231,47.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_629.setTransform(223.975,47.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAIAAAFABQAFACADAEQADAFAAAFQAAAFgBAEQgCADgFADQAFAAADAEQADAFAAAFQgBAKgFAFQgHAEgLAAgAgPAYIAPAAQAIAAAEgDQADgCAAgFQAAgDgBgDQgCgDgEgBIgKAAIgNAAgAgPgFIAMAAIAJAAQACAAADgDQACgDAAgDQAAgEgEgDQgDgCgJAAIgMAAg");
	this.shape_630.setTransform(217.25,47.1);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRALgJQAIgHALgBQAOAAAIAJQAJAKAAAPQAAAMgEAHQgDAIgIADQgHAFgJAAQgMgBgJgIgAgNgSQgFAHAAALQAAANAFAGQAGAHAHAAQAJAAAFgHQAFgGAAgNQAAgLgFgHQgFgGgJgBQgHABgGAGg");
	this.shape_631.setTransform(210.1,47.1);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#333333").s().p("AAPAhIAAg4IgdAAIAAA4IgLAAIAAhBIAzAAIAABBg");
	this.shape_632.setTransform(203.15,47.1);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_633.setTransform(186.125,47.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRALgJQAIgHALgBQAOAAAIAJQAJAKAAAPQAAAMgEAHQgDAIgIADQgHAFgJAAQgMgBgJgIgAgNgSQgFAHAAALQAAANAFAGQAGAHAHAAQAJAAAFgHQAFgGAAgNQAAgLgFgHQgFgGgJgBQgHABgGAGg");
	this.shape_634.setTransform(178.15,47.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#333333").s().p("AAMAhIgMgVQgCgGgDgCQgDgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAGAAACgCQACgBADgKIAFgLQACgCADgBIAIgBIADAAIAAAJIgEAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHALIAMAVg");
	this.shape_635.setTransform(172.15,47.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_636.setTransform(165.35,47.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_637.setTransform(158.275,47.1);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_638.setTransform(151.225,47.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#333333").s().p("AgEAtIAAhAIAJAAIAABAgAgEggIAAgMIAJAAIAAAMg");
	this.shape_639.setTransform(146.25,45.85);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_640.setTransform(140.475,47.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#333333").s().p("AgYAdQgFgFAAgIQgBgGADgDQACgEAEgCIAIgEIAKgBQAMgBAHgDIAAgDQAAgGgDgEQgFgDgIgBQgHAAgEADQgEAEgCAGIgLgBQACgHAEgFQADgEAHgCQAGgCAHgBQAJAAAFACQAGADACADQACADABAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgFAFgGACQgFADgHAAQgKAAgHgGgAgBAEIgKADQgDABgCACQgBADgBADQABAEADACQAEAEAGAAQAGAAAFgDQAEgDADgFQABgEABgHIAAgEQgHADgKABg");
	this.shape_641.setTransform(132.45,47.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#333333").s().p("AgYAOIAKgCQACAHAEADQAEAEAFAAQAGAAAEgEQADgDAAgFQAAgEgCgCQgDgEgCAAIgJgBIgCAAIAAgIIAIAAQADAAACgDQACgDABgEQAAgEgEgDQgDgDgEAAQgJAAgEAMIgKgCQAEgTATAAQAKABAGAFQAHAGgBAIQABAIgJAFQAFACADAEQACAEAAAFQABAJgHAGQgGAGgMAAQgWAAgDgVg");
	this.shape_642.setTransform(126,47.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#333333").s().p("AgUAZQgIgJAAgQQAAgPAIgKQAIgJANAAQALAAAHAGQAHAGABAJIgKACQgDgOgNAAQgHAAgEAGQgFAFgBAJIAWAAIAAAJIgWAAQABAKAEAGQAFAFAHAAQAOAAADgQIALABQgCALgHAHQgIAGgMAAIgBABQgMAAgHgKg");
	this.shape_643.setTransform(110.8235,47.1045);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#333333").s().p("AgVAaQgJgKAAgPQAAgQAJgKQAJgJANAAQANAAAIAJQAIAKAAAPIAAADIgwAAQABAKAFAGQAGAGAHABQAHAAADgEQAFgDADgIIALACQgDALgHAFQgHAGgMAAQgOgBgIgIgAgMgTQgFAFAAAIIAkAAQgBgHgEgFQgFgGgIgBQgHABgGAFg");
	this.shape_644.setTransform(94.7,47.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#333333").s().p("AAYAtIAAgrIguAAIAAArIgNAAIAAhZIANAAIAAAlIAuAAIAAglIAMAAIAABZg");
	this.shape_645.setTransform(86.575,45.85);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#333333").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_646.setTransform(71.1,49.75);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_647.setTransform(64.875,47.1);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAIAJQAJAKAAAPQAAAMgDAHQgFAIgHADQgHAFgJAAQgNgBgIgIgAgNgSQgFAHAAALQAAANAFAGQAGAHAHAAQAIAAAGgHQAFgGABgNQgBgLgFgHQgGgGgIgBQgHABgGAGg");
	this.shape_648.setTransform(56.9,47.1);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#333333").s().p("AgRAqQgGgGgEgHQgDgJAAgUQAAgaAJgJQAJgKARAAIANAAIACgCIAKABQgBAGgCADQgCACgEACIgOAAQgNAAgFADQgFADgCAGQgCAFgBAKQAFgHAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAAMgEAHQgEAIgGADQgGAFgKAAQgLAAgHgGgAgMgDQgGAGAAAMQAAALAGAGQAGAGAHABQAIgBAFgGQAFgIAAgLQAAgKgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_649.setTransform(49.775,45.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#333333").s().p("AgVAaQgJgJAAgRQAAgRAKgJQAJgHALgBQAOAAAIAJQAJAKAAAPQAAAMgDAHQgFAIgHADQgHAFgJAAQgNgBgIgIgAgNgSQgFAHAAALQAAANAFAGQAGAHAHAAQAIAAAGgHQAFgGABgNQgBgLgFgHQgGgGgIgBQgHABgGAGg");
	this.shape_650.setTransform(42.5,47.1);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgJAEgIQADgIAIgFQAHgEAHAAQALABAHAFQAHAGACAJIgLACQgCgGgEgEQgEgDgFgBQgIAAgFAHQgFAGAAAMQAAANAFAGQAFAGAHABQAHAAAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLAAQgMgBgJgIg");
	this.shape_651.setTransform(35.875,47.1);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#333333").s().p("AgXAdQgHgFAAgIQABgGACgDQACgEADgCIAIgEIAKgBQANgBAGgDIAAgDQAAgGgDgEQgEgDgIgBQgHAAgEADQgDAEgCAGIgMgBQACgHADgFQAEgEAGgCQAHgCAIgBQAIAAAFACQAFADADADQACADACAEIAAALIAAANIABAUIADAIIgMAAIgDgIQgFAFgHACQgEADgHAAQgLAAgFgGgAgCAEIgKADQgDABgBACQgBADAAADQAAAEADACQAEAEAGAAQAFAAAFgDQAFgDADgFQABgEAAgHIAAgEQgFADgMABg");
	this.shape_652.setTransform(28.9,47.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#333333").s().p("AgYAOIAKgCQACAHAEADQAFAEAEAAQAFAAAFgEQADgDAAgFQAAgEgCgCQgCgEgDAAIgJgBIgCAAIAAgIIAIAAQADAAACgDQADgDAAgEQAAgEgEgDQgCgDgGAAQgIAAgEAMIgKgCQAEgTASAAQALABAGAFQAHAGAAAIQAAAIgJAFQAFACADAEQADAEgBAFQAAAJgGAGQgGAGgMAAQgWAAgDgVg");
	this.shape_653.setTransform(22.4,47.1);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_654.setTransform(326.975,34.85);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_655.setTransform(319.05,34.85);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#333333").s().p("AAMAhIgMgVQgDgFgDgDQgCgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAFAAACgBQACgDAEgJIAFgLQACgCADgBIAIgBIACAAIAAAJIgCAAQgFAAgBABIgEAIIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_656.setTransform(313.15,34.85);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#333333").s().p("AgaAhIAAhBIALAAIAAAaIAOAAQANAAAIAFQAHAEAAAKQAAAIgGAGQgGAGgOAAgAgPAYIAMAAQAKAAAEgDQAFgDAAgFQAAgEgEgEQgDgDgLAAIgNAAg");
	this.shape_657.setTransform(306.825,34.85);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#333333").s().p("AgUAaQgIgJAAgRQAAgKAEgHQADgIAIgFQAHgDAHAAQALAAAHAFQAHAFACAKIgLACQgCgHgEgDQgEgDgFAAQgIgBgFAHQgFAGAAAMQAAANAFAHQAFAFAHABQAHAAAEgFQAFgEABgIIALABQgCAMgHAGQgIAHgLAAQgMgBgJgIg");
	this.shape_658.setTransform(300.325,34.85);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#333333").s().p("AgcAuIAAhaIAKAAIAAAIQAEgEAFgDQAEgDAGABQAIAAAHAEQAGAEAEAIQACAIAAAKQABAJgEAIQgEAIgGAEQgIAFgHAAQgFAAgEgDQgFgCgDgEIAAAggAgMgeQgFAHgBANQAAALAGAGQAFAHAHAAQAHAAAFgHQAFgGAAgMQAAgNgFgGQgFgHgHAAQgGAAgGAHg");
	this.shape_659.setTransform(293.55,36.05);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#333333").s().p("AgYAdQgFgFAAgJQAAgFACgDQACgEAEgCIAHgEIALgBQAMgCAHgCIAAgDQAAgGgEgEQgEgDgIAAQgHAAgEACQgEADgCAHIgKgBQABgHADgEQAEgFAHgCQAGgDAHABQAJAAAFABQAGACACAEQACADABAEIABALIAAANIAAAUIADAIIgMAAIgBgIQgHAFgFACQgFACgHABQgKAAgHgGgAgBAEIgKACQgEACgBACQgBADgBACQABAFADACQAEADAGABQAFAAAGgDQAEgDADgFQABgDABgIIAAgEQgHACgKACg");
	this.shape_660.setTransform(286.25,34.85);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#333333").s().p("AAMAhIgMgVQgDgFgDgDQgCgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAFAAACgBQACgDAEgJIAFgLQACgCADgBIAJgBIABAAIAAAJIgCAAQgFAAgBABIgEAIIgFAJIgFAFQAGABAHALIAMAVg");
	this.shape_661.setTransform(280.1,34.85);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#333333").s().p("AgEAuIAAhBIAJAAIAABBgAgEggIAAgMIAJAAIAAAMg");
	this.shape_662.setTransform(275.4,33.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_663.setTransform(269.925,34.875);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#333333").s().p("AgUAZQgIgJAAgQQAAgPAIgKQAIgJANAAQALAAAHAGQAHAGABAJIgKACQgDgOgNAAQgHAAgEAGQgFAFgBAJIAWAAIAAAJIgWAAQABAKAEAGQAFAFAHAAQAOAAADgQIALABQgCALgHAHQgIAGgMAAIgBABQgMAAgHgKg");
	this.shape_664.setTransform(255.9735,34.8545);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#333333").s().p("AgVAaQgIgKgBgPQABgQAIgJQAJgKAMABQAOgBAIAKQAJAJAAAPIAAADIgxAAQABAKAGAHQAFAFAHABQAGAAAFgEQAEgDACgHIAMABQgCAKgIAGQgHAGgMAAQgNgBgJgIgAgLgTQgFAFgBAJIAjAAQAAgJgEgEQgFgGgJAAQgGAAgFAFg");
	this.shape_665.setTransform(241.55,34.85);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#333333").s().p("AAYAuIAAgsIguAAIAAAsIgNAAIAAhaIANAAIAAAlIAuAAIAAglIAMAAIAABag");
	this.shape_666.setTransform(233.425,33.6);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#333333").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_667.setTransform(219.65,37.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#333333").s().p("AgUAlQgJgLAAgaQAAgPADgKQAEgKAGgFQAHgFAJgBQAHAAAGAEQAFADAEAFQADAFACAJQADAIAAAMQAAAQgEAKQgDAKgHAFQgGAGgKAAQgMAAgIgKgAgMgeQgFAIAAAWQAAAXAFAHQAFAIAHAAQAHAAAGgIQAFgHAAgXQAAgWgFgHQgGgIgHAAQgHABgFAGg");
	this.shape_668.setTransform(214.275,33.65);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#333333").s().p("AgUAoQgIgIgBgLIALgBQACAJAFAEQAEAFAHAAQAHAAAGgGQAFgFAAgJQAAgIgFgEQgFgFgIgBIgHACIABgJIACAAQAGAAAGgEQAGgDAAgIQAAgGgEgEQgFgFgFAAQgHAAgEAFQgEAEgCAIIgLgCQACgLAIgGQAHgHALAAQAGAAAGAEQAHADADAGQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAGQAFAFAAAJQAAAMgJAJQgJAHgMABQgMgBgIgGg");
	this.shape_669.setTransform(207.175,33.65);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#333333").s().p("AgEAuIgshGIAABGIgMAAIAAhaIAMAAIAtBFIAAhFIAKAAIAABagAARAmIAAgJIAqAAIAAAJgAAWARQgGgHAAgNQAAgKAGgHQAGgGAKAAQAKgBAHAIQAGAGAAAMQAAAKgHAHQgGAGgKAAQgJAAgHgFgAAegOQgDAEAAAIQAAAIADAEQADAEAFAAQAFAAADgEQAEgFAAgGQAAgKgEgDQgEgEgEAAQgFAAgDAEg");
	this.shape_670.setTransform(189.625,33.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_671.setTransform(171.55,34.85);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#333333").s().p("AAMAhIgMgVQgCgFgEgDQgCgCgEAAIAAAfIgLAAIAAhBIALAAIAAAcQAGAAABgBQADgDADgJIAFgLQACgCADgBIAIgBIACAAIAAAJIgDAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHALIAMAVg");
	this.shape_672.setTransform(165.65,34.85);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_673.setTransform(159.475,34.85);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#333333").s().p("AgVAaQgJgKABgPQgBgQAJgJQAJgKAMABQAOgBAIAKQAJAJgBAPIAAADIgwAAQABAKAGAHQAFAFAHABQAGAAAEgEQAFgDADgHIALABQgCAKgIAGQgIAGgLAAQgOgBgIgIgAgLgTQgGAFAAAJIAkAAQgBgJgDgEQgGgGgJAAQgGAAgFAFg");
	this.shape_674.setTransform(153.4,34.85);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_675.setTransform(145.825,34.875);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#333333").s().p("AgRAqQgGgFgEgJQgDgIAAgUQAAgaAJgJQAJgKARAAIANAAIACgCIAKABQgBAGgCADQgCACgEABIgOABQgNAAgFADQgFADgCAGQgCAFgBAJQAFgGAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAAMgEAHQgEAIgGADQgGAEgKABQgLAAgHgGgAgMgDQgGAGAAAMQAAALAGAHQAGAFAHABQAIgBAFgGQAFgIAAgLQAAgKgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_676.setTransform(139.425,33.55);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#333333").s().p("AgYAdQgFgFgBgJQAAgFADgDQACgEADgCIAIgEIAKgBQANgCAHgCIAAgDQgBgGgDgEQgEgDgIAAQgHAAgEACQgDADgCAHIgLgBQABgHADgEQAEgFAGgCQAHgDAIABQAIAAAFABQAFACADAEQADADABAEIAAALIAAANIABAUIACAIIgLAAIgCgIQgHAFgGACQgEACgHABQgKAAgHgGgAgBAEIgLACQgCACgCACQgCADABACQgBAFAEACQADADAHABQAFAAAGgDQAFgDACgFQACgDAAgIIAAgEQgHACgKACg");
	this.shape_677.setTransform(132.15,34.85);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_678.setTransform(125.875,34.85);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#333333").s().p("AgGAKQAEgBACgDQAAgDAAgEIgFAAIAAgOIAMAAIAAAOQAAAFgDAFQgCAEgFADg");
	this.shape_679.setTransform(113.675,38.4);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#333333").s().p("AgBAcIAPgcIgPgbIAIAAIAUAbIgUAcgAgaAcIARgcIgRgbIAKAAIASAbIgSAcg");
	this.shape_680.setTransform(108.375,34.875);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#333333").s().p("AgOAaQgHgEgFgGQgDgIAAgIQAAgHADgHQAFgIAHgEQAIgDAGAAQAIAAAHADQAIAEADAIQAEAHABAHQgBAIgEAIQgEAGgGAEQgIAEgIAAQgHAAgHgEgAgLgVQgHADgDAHQgEAFAAAGQAAAHAEAGQADAGAHAEQAFADAGAAQAHAAAGgDQAGgEADgGQADgGABgHQgBgGgDgFQgDgHgGgDQgHgDgGAAQgGAAgFADgAAIARIgDgFIgFgHQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDAAIAAAOIgFAAIAAggIALAAIAIABQACABABADQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgDACQgCACgFAAIAEACIAEAGIAFAHgAgHAAIAGAAIAGgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBIgBgCIgCgBIgFgBIgGAAg");
	this.shape_681.setTransform(101.85,31.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_682.setTransform(93.875,33.575);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#333333").s().p("AAZAuIgMgTIgJgNIgFgGIgFgDIgHAAIgOAAIAAApIgMAAIAAhaIAnAAQAMgBAHADQAGACAEAGQAEAGAAAIQAAAKgHAGQgGAGgNACIAHAFQAGAFAEAGIAQAagAgbgFIAaAAQAHABAFgCQAEgCADgEQACgEAAgEQAAgGgEgFQgFgDgKAAIgcAAg");
	this.shape_683.setTransform(84.725,33.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#333333").s().p("AgiAuIAAhaIAiAAIANAAQAHABAFADQAEAEADAFQADAGAAAHQAAALgIAIQgHAHgTABIgXAAIAAAlgAgWgBIAXAAQALgBAFgEQAFgEAAgIQAAgFgDgEQgDgFgEgBIgMgBIgWAAg");
	this.shape_684.setTransform(75.675,33.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_685.setTransform(66.275,33.575);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#333333").s().p("AghAuIAAhaIBBAAIAAAKIg1AAIAAAcIAyAAIAAAJIgyAAIAAAgIA3AAIAAALg");
	this.shape_686.setTransform(57.25,33.6);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#333333").s().p("AgFAuIAAhQIgeAAIAAgKIBHAAIAAAKIgeAAIAABQg");
	this.shape_687.setTransform(48.975,33.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#333333").s().p("AgRAsQgIgEgFgIQgFgGgBgKIAMgBQABAHADAFQADAEAGADQAGACAHAAQAHAAAFgCQAGgCACgDQACgEABgFQgBgDgCgEQgCgDgGgCIgQgFQgMgCgFgCQgHgEgDgEQgDgGAAgGQAAgHAEgGQAEgGAHgDQAIgDAJAAQAJAAAIADQAIAEAEAFQAEAHAAAIIgLABQgBgJgGgEQgEgFgLABQgKAAgFADQgFAFAAAFQAAAFADADQAEAEANADQAQADAFADQAIACAEAGQADAGAAAGQABAIgFAHQgEAGgIAEQgIADgJAAQgMAAgIgDg");
	this.shape_688.setTransform(40.75,33.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_689.setTransform(31.625,33.575);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#333333").s().p("AARAcIgTgcIATgbIAKAAIgRAbIARAcgAgGAcIgTgcIATgbIAJAAIgQAbIAQAcg");
	this.shape_690.setTransform(23.05,34.875);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#333333").s().p("AgRAvIAahdIAJAAIgaBdg");
	this.shape_691.setTransform(329.675,21.35);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#333333").s().p("AgBAcIAPgcIgPgbIAIAAIAUAbIgUAcgAgaAcIARgcIgRgbIAKAAIASAbIgSAcg");
	this.shape_692.setTransform(324.325,22.625);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#333333").s().p("AgOAbQgHgEgEgHQgFgIAAgIQAAgHAFgHQAEgIAHgEQAIgDAGAAQAIAAAHADQAHAEAFAIQAEAHAAAHQAAAIgEAIQgFAHgHAEQgHADgIAAQgHAAgHgDgAgMgVQgFADgEAHQgEAGABAFQgBAHAEAGQAEAGAFADQAHAEAFAAQAHAAAGgEQAGgDADgGQADgGAAgHQAAgFgDgGQgEgHgGgDQgFgDgHAAQgFAAgHADgAAIARIgDgFIgFgIQAAAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDAAIAAAOIgFAAIAAggIALAAIAHABQADABACADQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgCACQgDACgEAAIACACIAGAGIADAHgAgHAAIAGAAIAGgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgCIgCgBIgEgBIgGAAg");
	this.shape_693.setTransform(317.8,18.85);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_694.setTransform(309.825,21.325);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#333333").s().p("AgiAuIAAhaIAiAAIANAAQAHABAFADQAEADADAGQADAGAAAHQAAALgIAIQgHAHgTABIgXAAIAAAlgAgWgCIAXAAQALAAAFgEQAFgEAAgIQAAgFgDgEQgDgFgEgBIgMgBIgWAAg");
	this.shape_695.setTransform(301.125,21.35);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#333333").s().p("AAYAuIAAhQIgvAAIAABQIgMAAIAAhaIBHAAIAABag");
	this.shape_696.setTransform(292.075,21.35);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_697.setTransform(282.575,21.325);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#333333").s().p("AghAuIAAhaIBBAAIAAAKIg1AAIAAAcIAyAAIAAAJIgyAAIAAAgIA3AAIAAALg");
	this.shape_698.setTransform(273.5,21.35);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#333333").s().p("AgFAuIAAhQIgeAAIAAgKIBHAAIAAAKIgeAAIAABQg");
	this.shape_699.setTransform(265.225,21.35);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#333333").s().p("AgUApQgKgGgFgMQgEgKAAgNQAAgOAFgKQAFgLALgGQAKgFALAAQANAAAKAGQAJAHAEANIgMADQgDgKgGgFQgGgEgKAAQgJAAgHAFQgHAFgDAJQgDAIAAAJQAAALADAJQAEAIAHAEQAHAFAHAAQALgBAHgFQAHgGACgMIAMAEQgEAPgJAHQgKAIgPAAQgNAAgJgGg");
	this.shape_700.setTransform(257.225,21.35);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#333333").s().p("AgWApQgKgGgFgLQgGgLAAgMQAAgVANgNQAMgNASAAQANAAAKAGQAKAGAFALQAGALAAAMQAAAOgGALQgGALgKAGQgKAFgMAAQgMAAgKgGgAgVgbQgJAJAAAUQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgJAAgSQAAgKgEgIQgDgJgIgEQgHgFgJAAQgMAAgJAJg");
	this.shape_701.setTransform(247.625,21.325);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#333333").s().p("AARAcIgTgcIATgbIAKAAIgRAbIARAcgAgGAcIgTgcIATgbIAJAAIgQAbIAQAcg");
	this.shape_702.setTransform(239.05,22.625);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_703.setTransform(211.1,22.6);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#333333").s().p("AAMAhIgMgUQgCgGgEgDQgCgBgEAAIAAAeIgLAAIAAhBIALAAIAAAcQAGAAABgBQADgDADgJIAFgLQACgCADgBIAIgBIACAAIAAAJIgDAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHAMIAMAUg");
	this.shape_704.setTransform(205.25,22.6);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#333333").s().p("AgaAhIAAhBIAaAAQAIAAAFABQAEACAEAFQADADAAAHQAAAEgCAEQgCADgDACQAEABADAEQADAEAAAGQAAAKgHAFQgFAEgMAAgAgPAYIAPAAQAIAAAEgDQAEgCAAgFQgBgDgCgDQgCgCgCgCIgKAAIgOAAgAgPgFIAMAAIAJAAQACgBADgCQACgDAAgDQAAgEgEgDQgDgCgJAAIgMAAg");
	this.shape_705.setTransform(198.75,22.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#333333").s().p("AgXAdQgHgFABgJQAAgFACgDQACgEAEgCIAIgEIAKgBQAMgCAGgCIAAgDQAAgHgCgDQgFgDgIAAQgHAAgEACQgDAEgDAGIgLgBQACgHAEgEQADgFAHgCQAGgDAIABQAIAAAFACQAFABADAEQADADAAAEIABALIAAANIAAAUIAEAIIgNAAIgCgIQgGAFgFACQgFACgHAAQgLABgFgGgAgCAEIgKACQgCABgCADQgCACAAADQAAAFAEACQADADAHAAQAGAAAEgCQAFgDADgFQACgDgBgIIAAgEQgFACgMACg");
	this.shape_706.setTransform(191.6,22.6);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#333333").s().p("AgRAqQgGgFgEgJQgDgIAAgUQAAgaAJgJQAJgKARAAIANAAIACgBIAKAAQgBAHgCACQgCADgEAAIgOABQgNAAgFADQgFACgCAHQgCAFgBAJQAFgGAFgDQAGgDAGAAQANAAAJAJQAIAJAAAOQAAAMgEAHQgEAIgGADQgGAEgKAAQgLABgHgGgAgMgDQgGAGAAAMQAAALAGAHQAGAFAHAAQAIAAAFgGQAFgIAAgLQAAgKgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_707.setTransform(184.775,21.3);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRAKgJQAJgHALAAQAOgBAIAKQAJAIAAAQQAAAMgDAHQgFAIgHADQgHAEgJAAQgNAAgIgJgAgNgSQgFAGAAAMQAAANAFAGQAGAHAHgBQAIABAGgHQAFgGABgNQgBgMgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_708.setTransform(177.5,22.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_709.setTransform(170.075,23.525);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#333333").s().p("AgFAuIAAhBIALAAIAABBgAAGggIAAgNIAMAAIAAANgAgRggIAAgNIAMAAIAAANg");
	this.shape_710.setTransform(143.95,21.325);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#333333").s().p("AgVAZQgJgIAAgRQAAgRALgJQAIgHALAAQAOgBAIAKQAJAIAAAQQAAAMgDAHQgEAIgIADQgHAEgJAAQgMAAgJgJgAgNgSQgFAGAAAMQAAANAFAGQAGAHAHgBQAJABAFgHQAFgGAAgNQAAgMgFgGQgFgGgJAAQgHAAgGAGg");
	this.shape_711.setTransform(138.55,22.6);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#333333").s().p("AAPAhIAAgeIgeAAIAAAeIgLAAIAAhBIALAAIAAAbIAeAAIAAgbIAMAAIAABBg");
	this.shape_712.setTransform(131.525,22.6);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#333333").s().p("AAPAhIAAgbQgKAEgIAAQgHAAgGgEQgGgEgCgFQgCgFAAgHIAAgRIALAAIAAAMIABAMQABAEAEACQAEACAFAAQAFAAAKgCIAAgeIAMAAIAABBg");
	this.shape_713.setTransform(124.525,22.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#333333").s().p("AAQAhIAAgxIgeAxIgMAAIAAhBIALAAIAAAyIAegyIAMAAIAABBg");
	this.shape_714.setTransform(117.8,22.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#333333").s().p("AgFAhIAAg4IgVAAIAAgJIA1AAIAAAJIgVAAIAAA4g");
	this.shape_715.setTransform(111.375,22.6);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#333333").s().p("AgUAZQgIgJAAgQQAAgPAIgKQAIgJANAAQALAAAHAGQAHAGABAJIgKACQgDgOgNAAQgHAAgEAGQgFAFgBAJIAWAAIAAAJIgWAAQABAKAEAGQAFAFAHAAQAOAAADgQIALABQgCALgHAHQgIAGgMAAIgBABQgMAAgHgKg");
	this.shape_716.setTransform(105.3235,22.6045);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#333333").s().p("AgEAuIAAhCIAKAAIAABCgAgEggIAAgMIAKAAIAAAMg");
	this.shape_717.setTransform(100.5,21.35);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#333333").s().p("AAaAqIAAgSIgzAAIAAASIgJAAIAAgbIAGAAQALgQAAgoIAtAAIAAA4IAHAAIAAAbgAgSAPIAjAAIAAgvIgZAAQgBAggJAPg");
	this.shape_718.setTransform(95.175,23.525);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgFACgDQACgEADgCIAIgEIAKgBQANgCAGgCIAAgDQAAgHgCgDQgFgDgIAAQgHAAgEACQgDAEgCAGIgMgBQACgHADgEQAEgFAGgCQAHgDAIABQAIAAAFACQAFABADAEQACADACAEIAAALIAAANIABAUIACAIIgLAAIgDgIQgFAFgHACQgEACgHAAQgLABgFgGgAgCAEIgKACQgDABgBADQgBACAAADQAAAFADACQAEADAGAAQAFAAAFgCQAFgDADgFQABgDAAgIIAAgEQgFACgMACg");
	this.shape_719.setTransform(67.15,22.6);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#333333").s().p("AAYAhIAAg0IgUA0IgJAAIgSg3IAAA3IgLAAIAAhBIARAAIARA0IATg0IAQAAIAABBg");
	this.shape_720.setTransform(59.275,22.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#333333").s().p("AgXAdQgHgFAAgJQABgFACgDQACgEADgCIAJgEIAJgBQANgCAGgCIAAgDQAAgHgCgDQgFgDgIAAQgHAAgEACQgEAEgBAGIgMgBQACgHAEgEQADgFAHgCQAGgDAIABQAIAAAFACQAFABADAEQACADABAEIABALIAAANIABAUIADAIIgMAAIgDgIQgGAFgFACQgFACgHAAQgLABgFgGgAgCAEIgKACQgDABgBADQgCACAAADQAAAFAEACQAEADAGAAQAGAAAEgCQAFgDADgFQACgDgBgIIAAgEQgFACgMACg");
	this.shape_721.setTransform(51.3,22.6);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#333333").s().p("AgfAhIAAgKIAFAAIAFAAIACgDIAAgKIAAgqIAzAAIAABBIgLAAIAAg4IgdAAIAAAgIAAAPQgBAEgEACQgDADgGAAIgJAAg");
	this.shape_722.setTransform(43.725,22.625);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#333333").s().p("AAMAhIgMgUQgCgGgEgDQgCgBgEAAIAAAeIgLAAIAAhBIALAAIAAAcQAGAAABgBQADgDADgJIAFgLQACgCADgBIAIgBIACAAIAAAJIgDAAQgEAAgBABIgEAIIgEAJIgGAFQAGABAHAMIAMAUg");
	this.shape_723.setTransform(37.85,22.6);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#333333").s().p("AgVAZQgJgIABgQQgBgQAJgJQAJgKAMABQAOgBAIAKQAJAIgBAQIAAADIgwAAQABAKAGAHQAFAFAHAAQAGAAAEgDQAFgDACgHIAMABQgDAKgHAGQgIAGgLgBQgOAAgIgJgAgLgTQgGAFAAAJIAjAAQAAgJgDgEQgGgGgJAAQgGgBgFAGg");
	this.shape_724.setTransform(31,22.6);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#333333").s().p("AgiAuIAAhaIAiAAIANAAQAHABAFADQAEADADAGQADAGAAAHQAAALgIAIQgHAHgTABIgXAAIAAAlgAgWgCIAXAAQALAAAFgEQAFgEAAgIQAAgFgDgEQgDgFgEgBIgMgBIgWAAg");
	this.shape_725.setTransform(24.025,21.35);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#FFFF00").ss(2,1,1).p("A8T3OMA4nAAAMAAAAudMg4nAAAg");
	this.shape_726.setTransform(181.2,148.675);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("A8TXPMAAAgudMA4nAAAMAAAAudg");
	this.shape_727.setTransform(181.2,148.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-1,-1,364.4,299.4), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AmZAxIAAgPIgxAAIAAAPIgOAAIAAgdQAFgCADgDQADgDACgEIACgLIACgQIAAgVIAxAAIAAA8IALAAIAAAdgAnCAUIAeAAIAAguIgWAAQAAAjgIALgAGqAcQgIgJAAgNQgBgMAIgIQAIgIAOAAQAMgBAHAJQAHAHAAANIAAAFIgpAAQACAFAFAEQADADAHAAQAJAAAHgFIAEANIgCABIgHACQgGACgGAAQgPAAgHgIgAG1gGQgEADAAADIAZAAQAAgDgDgDQgDgEgGAAQgGAAgDAEgADLAiIAAgMQAEABAEgBQACgCAAgFIAAgkIAtAAIAAA3IgPAAIAAgoIgRAAIAAATQAAAXgOAAQgGAAgDgCgABzAbQgJgJAAgMQAAgUASgOIADgDIAEgCIACgDIADgDIACgCIACgDIARAAQgBAJgNAHQgHADgCADIACAAQANgBAJAKQAHAIABALQAAAMgJAJQgIAJgNAAQgMAAgJgJgAB9gDQgEADAAAGQAAAHAEAEQAFAEAGABQAGgBAFgEQAEgEAAgHQAAgGgEgDQgFgFgGAAQgGAAgFAFgAgiAcQgJgJAAgNQAAgLAJgJQAJgIAOAAQALgBAHAIIgGAMQgFgFgHAAQgIAAgEAFQgFADAAAGQAAAHAFAEQAEAEAIABQAIAAAEgGIAGANQgHAHgLAAQgOAAgJgIgAjjAbQgIgJAAgMQAAgLAIgIQAJgKALABQALgBAGAJIAAgHIAPAAIAAA3IgPAAIAAgGQgGAIgLAAQgLAAgJgJgAjYgDQgEADAAAGQAAAHAEAEQAFAEAGABQAGgBAFgEQAEgEAAgHQAAgGgEgDQgFgFgGAAQgGAAgFAFgAlmAdIAFgMQAGAEALABQAFAAAEgBQABgBABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABgEgGgBQgGgBgIAAIAAgJQAJAAAFgCQAEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgDgCgFAAQgLABgGAFIgFgMQAEgEAHgCQAGgBAGAAQALAAAGAEQAHAEAAAJQAAADgCACQgCADgDABQADACADAEQACADAAAEQAAAJgHAFQgHAFgLAAQgOAAgKgHgAFLAiIAAg3IAPAAIAAApIAPAAIAAgpIAPAAIAAApIAQAAIAAgpIAOAAIAAA3gAERAiIAAg3IAOAAIAAASIAKAAQAYAAAAASQAAAJgHAFQgFAFgMAAgAEfAUIANAAIAFgBQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgCgBgDAAIgNAAgACwAiIAAg3IAOAAIAAA3gAARAiIAAg3IAPAAIAAASIAKAAQAYAAAAASQAAAJgHAFQgGAFgLAAgAAgAUIAMAAIAGgBQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgDgBgDAAIgMAAgAhEAiIAAgiIgZAiIgPAAIAAg3IAPAAIAAAiIAZgiIAOAAIAAA3gAiUAiIAAgoIgQAAIAAgPIAuAAIAAAPIgQAAIAAAogAkDAiIAAgVIgXAAIAAAVIgPAAIAAg3IAPAAIAAAVIAXAAIAAgVIAOAAIAAA3gAl+AiIAAg3IAOAAIAAA3gACwgfQgDgCAAgFQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADQAAAFgDACQgDADgEAAQgEAAgDgDgAl+gfQgDgCAAgFQAAgDADgEQACgDAFAAQAEAAADADQADAEAAADQAAAFgDACQgDADgEAAQgFAAgCgDg");
	this.shape.setTransform(61.9,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AneCGQg3AAgngnQgngnAAg4IAAAAQAAg3AngnQAngnA3AAIO9AAQA3AAAnAnQAnAnAAA3IAAAAQAAA4gnAnQgnAng3AAgAmSAjIAAAPIAOAAIAAgdIgLAAIAAg8IgxAAIAAAWIgCAQIgCAKQgCAFgDADQgDADgFABIAAAdIAOAAIAAgPgAGwgNQgIAIAAAMQAAANAIAJQAIAIAPAAQAGAAAGgBIAHgDIACgBIgEgNQgHAGgJAAQgHAAgEgEQgEgDgCgGIApAAIAAgFQAAgNgHgHQgHgIgNAAQgOAAgHAIgADRAjQAEACAFAAQAPAAAAgWIAAgUIARAAIAAAoIAPAAIAAg2IgtAAIAAAjQAAAGgDABQgDABgFgBgACRgoIgCADIgDACIgCADIgEACIgDADQgSAOAAAUQAAANAJAIQAJAJAMAAQAMAAAJgJQAIgIAAgNQAAgLgIgIQgIgJgNAAIgCAAQACgDAHgDQAMgGACgKIgSAAIgBADgAgbgNQgJAJAAALQAAANAJAJQAIAIAOAAQAMAAAHgHIgGgMQgFAFgHAAQgIAAgFgFQgEgEAAgHQAAgGAEgDQAFgFAIAAQAGAAAGAFIAGgMQgIgHgLAAQgOAAgIAIgAjcgMQgIAIAAALQAAANAIAIQAJAJALAAQAKAAAHgIIAAAGIAOAAIAAg2IgOAAIAAAGQgHgIgKAAQgLAAgJAJgAlfAeQAKAHAOAAQALAAAHgFQAHgFAAgJQAAgEgDgDQgCgEgEgBQAEgCACgDQACgCAAgDQAAgIgHgFQgGgEgMAAQgFAAgGACQgHACgEADIAFAMQAGgFAKAAQAGAAADABQAAABABAAQAAAAABABQAAAAAAABQAAABAAAAQAAACgEABQgFACgJAAIAAAJQAIAAAGABQAFACAAADQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQgEABgGAAQgLAAgFgFgAFSAjIBLAAIAAg2IgOAAIAAAoIgQAAIAAgoIgPAAIAAAoIgQAAIAAgoIgOAAgAEXAjIAZAAQALAAAGgFQAHgEAAgKQAAgRgYAAIgKAAIAAgSIgPAAgAC2AjIAPAAIAAg2IgPAAgAAYAjIAYAAQAMAAAGgFQAGgEAAgKQAAgRgYAAIgKAAIAAgSIgOAAgAg9AjIAOAAIAAg2IgOAAIgZAhIAAghIgPAAIAAA2IAPAAIAZgigAiegFIAQAAIAAAoIAPAAIAAgoIAQAAIAAgOIgvAAgAj8APIAAAUIAOAAIAAg2IgOAAIAAATIgXAAIAAgTIgPAAIAAA2IAPAAIAAgUgAl4AjIAPAAIAAg2IgPAAgAC3grQgDADAAAEQAAAEADADQACADAFAAQAEAAADgDQACgDAAgEQAAgEgCgDQgDgDgEAAQgFAAgCADgAl3grQgDADAAAEQAAAEADADQACADAFAAQAEAAADgDQACgDAAgEQAAgEgCgDQgDgDgEAAQgFAAgCADgACEASQgEgEAAgHQAAgGAEgDQAFgFAGAAQAGAAAFAFQAEADAAAGQAAAHgEAEQgFAFgGAAQgGAAgFgFgAjRASQgEgEAAgHQAAgGAEgDQAFgFAGAAQAGAAAFAFQAEADAAAGQAAAHgEAEQgFAFgGAAQgGAAgFgFgAEmAVIAAgJIANAAQADAAACABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFABgAAmAVIAAgJIANAAQADAAACABQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABgAm7AVQAIgLAAgjIAWAAIAAAugAG4ABQAAgDADgDQAEgEAFAAQAGAAADAEQAEADAAADg");
	this.shape_1.setTransform(61.225,13.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,122.5,26.8), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AANADIgEAGIgDgCIAEgGIgHgBIABgEIAHADIAAgHIAEAAIAAAHIAHgDIABAEIgHABIAFAGIgDACgAgMADIgFAGIgDgCIAFgGIgHgBIABgEIAHADIAAgHIADAAIAAAHIAHgDIACAEIgIABIAFAGIgDACg");
	this.shape.setTransform(165.425,53.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2,1,1).p("Ak+BEIJ9iH");
	this.shape_1.setTransform(42.3,53);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// _53_4_грн_
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADBBbIAAhIIAHAAIAAAJQAGgJAMAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAIgKgBQgMAAgGgJIAAAhgADNAeQgFAGAAAHQAAAIAFAFQAGAFAHAAQAHAAAFgFQAGgFAAgIQAAgHgGgGQgFgFgHAAQgHAAgGAFgAgHBLQAGgDABgGIgHAAIAAgeIAZAAIAAAOQAAALgCAHQgEAHgFAFQgHAFgHABgAhaBAQgLgHgEgJQgDgIAAgWIAAgNIAnAAIAAAZQAAAKABADQABACAFABQAEgBABgDQACgDAAgPIAAgLQgBgIgCgEQgCgDgDgCIgQgCIAAgWQAPAAADgBQADgBABgDIACgLIAAgJQAAgIgCgDQgBgDgEAAQgEAAgCAEQgBACAAAJIAAAMIgnAAIAAgMQAAgXALgHQAKgIAVAAQAcAAAKALQAKALAAASQAAANgEAGQgDAGgJAFQAJADAEAHQAEAGABAYQgBASgEAKQgEALgKAFQgKAGgRAAQgSgBgKgFgAjABAQgKgFgFgLQgFgKAAgVIAAgIIAmAAIAAAJIACAVQAAAHAHAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIABgEIAAgTIAAgdQABgIgCgEQgCgDgEAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAAAAAABIgBAJIgmAAIAChPIBTAAIAAAaIgwAAIAAAaQAJgLAOAAQAQAAAIAJQAJAJgBAZIAAAWQAAAQgCAHQgBAIgFAHQgFAGgJAEQgKAEgNAAQgPgBgMgFgAkrBAQgKgHgEgJQgDgIAAgWIAAgNIAnAAIAAAZQAAAKABADQABACAEABQAEgBACgDQABgDAAgPIAAgLQAAgIgCgEQgCgDgDgCIgQgCIAAgWQAOAAADgBQADgBACgDIABgLIAAgJQAAgIgCgDQgBgDgDAAQgFAAgBAEQgCACABAJIAAAMIgnAAIAAgMQgBgXALgHQAKgIAWAAQAcAAAJALQALALAAASQAAANgEAGQgEAGgIAFQAIADAEAHQAFAGAAAYQAAASgFAKQgDALgLAFQgKAGgQAAQgTgBgKgFgAEzBBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAEeBCIAAgUIgaAAIAAAUIgHAAIAAgvIAHAAIAAAVIAaAAIAAgVIAGAAIAAAvgACdBCIAAgvIAZAAIAAAHIgSAAIAAAogABEBCIAAgbIguAAIAAgaIAihlIAzAAIAABlIALAAIAAAaIgLAAIAAAbgAA0ANIAQAAIAAhBg");
	this.shape_2.setTransform(44.85,55.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// _85_7_грн_
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AEiBzIAAhRIAHAAIAAAJQAHgKANAAQALAAAIAIQAIAIAAALQAAAMgIAIQgIAIgLAAQgNAAgHgLIAAAmgAEvAuQgGAGAAAIQAAAJAGAGQAGAGAIAAQAIAAAGgGQAGgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGgAg+BiQAHgEABgHIgIAAIAAgnIAhAAIAAASQAAAOgEAJQgDAIgIAHQgIAGgKACgABxBXQgMgFgHgIQgHgJgDgJQgDgKAAgVIAAhEQAAgbAFgOQAEgNAOgIQAOgJAUAAQARAAAMAGQANAGAHAIQAGAIACAKQACALAAAWIAABBQAAAWgCALQgDAKgHAJQgIAJgLAEQgLAEgNAAQgSAAgLgEgACEhPQgCAEAAAPIAABgQAAARACAEQACADAFAAQAGAAABgEQACgEAAgPIAAhhQAAgPgBgEQgCgEgGAAQgFAAgCAEgAimBUQgOgHgHgNQgGgNAAgcIAAgKIAyAAIAAAMIABAbQABAIAIAAQAEAAACgCQACgCABgDIAAgYIAAgmQAAgLgCgEQgDgEgFAAQgDAAgDACQgCACgBADIAAALIgxAAIAChkIBqAAIAAAgIg9AAIAAAhQALgNASAAQAUAAALALQAKAMAAAgIAAAbQAAAVgCAKQgCAKgGAIQgHAJgMAEQgLAFgRAAQgTAAgPgHgAkuBUQgNgHgGgMQgFgLAAgbQAAgSADgMQACgNAPgIQgJgFgFgJQgEgKAAgPQAAgZAOgNQAOgNAcAAQAhAAAMAOQANANAAAaQAAAQgEAHQgFAHgMAHQALAEAFAJQAGAJAAAfQAAAYgEAMQgFALgNAHQgOAIgWAAQgWAAgNgHgAkTAAQgCADAAALIAAAaQAAANADADQACAEAFAAQAFAAACgEQACgDAAgNIAAgaQAAgLgCgDQgDgDgFAAQgFAAgCADgAkShQQgCAEAAAJIAAAPQAAAJACAEQACADAFAAQAFAAABgDQACgEAAgKIAAgOQAAgKgCgDQgCgDgFAAQgEAAgCADgAGhBWQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgDAAgCgCgAGKBXIAAgXIgeAAIAAAXIgHAAIAAg1IAHAAIAAAXIAeAAIAAgXIAHAAIAAA1gAD5BXIAAg1IAcAAIAAAHIgVAAIAAAugAgKBXIAjihIgwAAIAAgkIBdAAIAAArIggCagAmKBXIAAhpQAAgXgBgFQgBgEgFgDQgFgCgRAAIgFAAIAAgXQAkgIATgYIAdAAIAADFg");
	this.shape_3.setTransform(124.075,53.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Ціну_знижено_
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmUBsIAXg7IgohmIAoAAIAUA1IAVg1IAoAAIhAChgAqaBRIAAgbIhyAAIAAiMIAoAAIAABnIAvAAIAAhnIAoAAIAABnIAbAAIAABAgALrAzQgGgGAAgIQAAgIAGgGQAFgGAJAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAQgJAAgFgGgAJsApQgRgRAAgYQAAgXARgRQAQgQAcAAQAaAAARAQQARARAAAXQAAAYgRARQgRAQgaAAQgcAAgQgQgAKJgQQgGAHAAAJQAAAKAGAHQAGAHAJAAQAIAAAGgHQAFgHABgKQgBgJgFgHQgGgHgIAAQgJAAgGAHgAFrApQgPgQgBgZQAAgYAPgQQAPgQAcAAQAaAAANAPQAOAPABAaIgBAKIhFAAQACAGAGAEQAHAEAKAAQAHAAAHgCQAHgCADgCIADgBIAKAeIgFADIgNAEQgMADgMAAQgeAAgQgQgAGJgVQgEAFAAAHIAcAAQAAgHgDgFQgEgFgHAAQgGAAgEAFgAjsAsIAOgcQAMAGANAAQAWAAgBgGQABgEgKgCQgIgCgMAAIAAgPQAMAAAIgCQAIgCAAgEQABgGgUAAQgLAAgPAGIgMgcQASgNAcAAQAzAAAAAhQAAAHgEAGQgFAHgGACQAHACAFAHQAFAHAAAHQAAARgPAJQgOAJgZAAQgcAAgTgNgAIiA2IAAgkIgfAAIAAAkIgnAAIAAhrIAnAAIAAAjIAfAAIAAgjIAoAAIAABrgAEmA2IgegqIAAAqIgoAAIAAgqIgfAqIgvAAIAsg2Igpg1IAwAAIAbAqIAAgqIAoAAIAAAqIAagqIAvAAIgnA1IArA2gABcA2IAAg2IgiA2IgnAAIAAhrIAnAAIAAA1IAig1IApAAIAABrgAgsA2IAAgkIgfAAIAAAkIgoAAIAAhrIAoAAIAAAjIAfAAIAAgjIAnAAIAABrgAnXA2IAAgkIgfAAIAAAkIgnAAIAAhrIAnAAIAAAjIAfAAIAAgjIAoAAIAABrgApeA2IAAhrIApAAIAABrgALsAHIgHhdIAoAAIgGBdgApZhFQgGgHgBgJQABgJAGgGQAHgHAJAAQAIAAAHAHQAGAGAAAJQAAAJgGAHQgHAGgIAAQgJAAgHgGg");
	this.shape_4.setTransform(86.25,24.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(8.2,13.3,159.60000000000002,51.7), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,0,0,0)"],[0.875,1],0,0,0,0,0,160.7).s().p("A3qH/IAAv9MAvVAAAIAAP9g");
	this.shape.setTransform(162.875,60.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(11.4,9.2,303,102.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sm1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,86.5,82.3), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Osteopro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,79.3,150), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.875,1],0,0,0,0,0,39.7).s().p("AkUEVQhyhzAAiiQAAihByhzQBzhyChAAQCiAABzByQByBzAAChQAACihyBzQhzByiiAAQihAAhzhyg");
	this.shape.setTransform(39.1,39.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,78.2,78.2), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("A0GDEQgtgogFhGIBWgLQAFAkAVAUQAUATArAAQAfAAAZgQQAagOAAgdQAAg+h1AAIAAhEIAagDQANgBAVgGQAUgFANgNQANgNAAgSQAAgWgTgPQgTgOghAAQhHAAgIBFIhVgKQAFhBAtgoQAsgoBDAAQBNAAAqAoQApApAAAvQAAA/g0AgQAZAJATAcQATAcAAAhQAAAagJAZQgJAagTAXQgTAWgjAOQgjAOgtAAQhOAAgsgogAGtDhIAAgcQAiAIAAghIAAhzICBAAIAACoIgiAAIAAiHIg9AAIAABKQAAA/gsAAQgOAAgKgCgAD4DLQgagaAAgkQAAgkAagZQAZgaAkAAQAkAAAZAaQAaAZAAAkQAAAkgaAaQgZAYgkAAQgkAAgZgYgAEQBoQgQAQAAAVQAAAWAQAQQAPAPAWAAQAWAAAQgPQAPgQAAgWQAAgVgPgQQgQgQgWAAQgWAAgPAQgAiEDLQgZgaAAgkQAAgkAZgZQAagaAkAAQAkAAAZAaQAYAZAAAkQAAAkgYAaQgZAYgkAAQgkAAgagYgAhsBoQgQAQAAAVQAAAWAQAQQAQAPAWAAQAVAAAQgPQAQgQAAgWQAAgVgQgQQgQgQgVAAQgWAAgQAQgAqHDLQgZgaAAgkQAAgkAZgZQAagaAkAAQAkAAAZAaQAZAZAAAkQAAAkgZAaQgZAYgkAAQgkAAgagYgApvBoQgQAQAAAVQAAAWAQAQQAQAPAWAAQAVAAAQgPQAQgQAAgWQAAgVgQgQQgQgQgVAAQgWAAgQAQgATODhIAAg2IgRAAIgzA2IgsAAIA2g2QgQAAgRgPQgQgPAAgXQAAgeAVgQQAUgPAmAAIA9AAIAACogASOBhQgJAHAAAMQAAAYAkAAIAlAAIAAgyIgmAAQgQABgKAGgAQVDhIAAhDIhUAAIAABDIgiAAIAAioIAiAAIAABDIBUAAIAAhDIAiAAIAACogANMDhIAAhDIhUAAIAABDIgiAAIAAioIAiAAIAABDIBUAAIAAhDIAhAAIAACogAKCDhIAAioIAiAAIAACogAChDhIhJhIIAABIIgiAAIAAioIAiAAIAABFIBDhFIAtAAIhUBRIBaBXgAjmDhIAAiHIhUAAIAACHIgiAAIAAioICYAAIAACogAshDhIAAioIBlAAIAAAhIhDAAIAACHgAutCSIAAgcIBfAAIAAAcgAUkBBIgIANIgIgGIAKgLIgOgFIADgJIANAHIAAgQIAJAAIgBAQIANgHIAEAJIgOAFIAJALIgHAGgAKBAVQgIgGAAgLQAAgJAIgIQAHgIALABQAKgBAIAIQAHAIAAAJQAAALgHAGQgIAIgKAAQgLAAgHgIg");
	this.shape.setTransform(141.025,53.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(7.4,29.6,267.3,47.199999999999996), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AKoFRIAAhVIlXAAIAAnBIBWAAIAAFrIDBAAIAAlrIBWAAIAAFrIBAAAIAACrgAooEBIAAhWQAQAGASgBQASgCAKgHQAYgOAAgwIAAkuIFCAAIAAHBIhWAAIAAlsIiWAAIAAC7QAABPgQAqQgQAqgxASQgTAHgYAAQgWAAgagGgAUrD8IAAk3IjhE3IhVAAIAAnBIBVAAIAAE1IDhk1IBWAAIAAHBgANJD8IAAnBIBWAAIAAHBgAg6D8IAAnBIBUAAIAAChIBWAAQBPAAApAlQApAmAABEQAABEgrAmQgrAnhVAAgAAaCmIBWAAQAiAAAUgOQAVgPAAgeQAAgbgVgQQgWgQggAAIhWAAgAqdD8IgkhWIjIAAIghBWIhhAAIC7nBIBNAAIC8HBgAtmBQICBAAIhDiggAyAD8IirjFIAADFIhVAAIAAnBIBVAAIAAC7ICgi7IBtAAIjBDWIDLDrgAR2kMQgcgcAAgoIAuAAQAAAVAPAPQAOAOAWAAQAVAAAPgOQAPgPAAgVIAtAAQAAAogcAcQgcAcgoAAQgoAAgdgcg");
	this.shape.setTransform(147.275,50.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(6.4,16.8,281.8,67.4), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.back_gr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,500,415), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.r3_r();
	this.instance.parent = this;
	this.instance.setTransform(-30,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-30,-28,500,500), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCQIAAg+IBJAAIAAA+gAgcA5IgIhUIAAh0IBJAAIAAB0IgIBUg");
	this.shape.setTransform(7.75,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,15.7,53.4), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0C7IAAixIhiCxIhOAAIAAkfIBKAAIAACwIBhiwIBOAAIAAEfgAgWh4Qg1AAAAg1IAAgNIA1AAIAAALQAAAGAFAEQAEAEAGAAIALAAQAHAAADgEQAFgEAAgGIAAgLIA1AAIAAANQAAA1g1AAg");
	this.shape.setTransform(16.95,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,34.2,53.4), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABFCQIgSg0IhlAAIgTA0IhQAAIBtkfIBRAAIBtEfgAggAnIBBAAIghhfg");
	this.shape.setTransform(16.575,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,33.3,53.4), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyCQIAAhfQgxAEgrAAQgrAAgUgSQgSgUAAgnIAAh3IBKAAIAAB3QAAAJAFAHQAGAFAJAAQAhAAAugEIAAiIIBKAAIAAEfg");
	this.shape.setTransform(16.05,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,33.1,53.4), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJCQIAAg6IAlAAIAAirIglAAIAAg6ICTAAIAAA6IglAAIAACrIAlAAIAAA6g");
	this.shape.setTransform(10.6,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,21.4,53.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah+CQIAAkfICrAAQArAAAUAUQATATAAArIAAAqQAAAqgTATQgUAUgrAAIhhAAIAABSgAg0AEIBRAAQAYAAAAgXIAAgqQAAgYgYAAIhRAAg");
	this.shape.setTransform(17.175,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,33.3,53.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjCQIAAjlIhXAAIAAg6ID1AAIAAA6IhWAAIAADlg");
	this.shape.setTransform(14.7,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,29.6,53.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfB+QgTgSAAgoIAAiDQAAgrAUgTQATgUArAAICTAAIAAA6IiDAAQgYAAAAAYIAACDQAAAJAFAFQAGAGAJAAIASAAIAVAAIAWgBIAdgCIAtgDIAAA3QhcAIg7AAQgoABgTgUg");
	this.shape.setTransform(15.125,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,29.6,53.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZCOIAAg4IAlAAQAMAAAEgJQACgEAAgFQAAgFgCgDIhxjNIBSAAIBJCRIA9iRIBTAAIhpDhQgOAggVAQQgVASgkgBQgUAAgWgDg");
	this.shape.setTransform(16.15,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,32.5,53.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4CJIAAg3QBoAGArAAQAJAAAGgGQAGgFgBgJIAAgRQAAgYgYAAIhhAAIAAg4IBZAAQAYAAAAgaIAAgIQAAgYgYAAIiDAAIAAg6ICXAAQAoAAATATQATASAAAlQAAAZgMAQQgKAOgTAHQAhAJAMAiQAEANAAAQIAAAFQAAAogTASQgSAUgpgBQhEAAhfgIg");
	this.shape.setTransform(14.9,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,30.5,53.4), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.r2_r();
	this.instance.parent = this;
	this.instance.setTransform(132,115,2.36,2.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(132,115,708,708), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C98B8").ss(1,1,1).p("ECM+AAAUAAAAUJgpTAOQUgpSAOQg6ZAAAUg6ZAAAgpSgOQUgpSgOQAAAgUJUAAAgUIApSgORUApSgOPA6ZAAAUA6ZAAAApSAOPUApTAORAAAAUIg");
	this.shape.setTransform(902.225,311.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-1,-1,1806.5,624.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4___копия___копия___копия
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(599.65,456.3,0.54,0.54,0,0,0,39.1,39.1);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_4___копия___копия
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(548.75,418.95,0.6899,0.6899,0,0,0,39.1,39.1);
	this.instance_1.alpha = 0.3203;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой_4___копия
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(211.3,188.7,0.6899,0.6899,0,0,0,39.1,39.1);
	this.instance_2.alpha = 0.3398;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой_4___копия
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(653.85,491.2,1.82,1.82,0,0,0,39.1,39.1);
	this.instance_3.alpha = 0.1797;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой_4
	this.instance_4 = new lib.Символ23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(243.05,211.35,1.27,1.27,0,0,0,39.1,39.1);
	this.instance_4.alpha = 0.1602;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(184.3,161.7,540.7,400.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiOzAxNMAAAhiZMEdnAAAMAAABiZg");
	mask.setTransform(914,314.875);

	// Слой_3
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(914,314.9,1,1,0,0,0,914,314.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,1828,629.8), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(287.65,26.7,1,1,0,0,0,7.9,26.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},9).wait(31));

	// Й
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(266.9,26.7,1,1,0,0,0,17.1,26.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:1},9).wait(33));

	// А
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(237.3,26.7,1,1,0,0,0,16.6,26.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},9).wait(35));

	// Ч
	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(208.4,26.7,1,1,0,0,0,16.6,26.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({alpha:1},9).wait(37));

	// І
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(185.3,26.7,1,1,0,0,0,10.7,26.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},9).wait(39));

	// Р
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(162.1,26.7,1,1,0,0,0,16.6,26.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},9).wait(39));

	// Т
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(134.9,26.7,1,1,0,0,0,14.8,26.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},9).wait(37));

	// С
	this.instance_7 = new lib.Символ11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(109.5,26.7,1,1,0,0,0,14.8,26.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({alpha:1},9).wait(35));

	// У
	this.instance_8 = new lib.Символ10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(82.6,26.7,1,1,0,0,0,16.2,26.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({alpha:1},9).wait(33));

	// З
	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(55.35,26.7,1,1,0,0,0,15.2,26.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({alpha:1},9).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,0,255.3,53.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(220,219.8,1,1,0,0,0,220,219.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:219.9,rotation:89.9948,x:219.9},221).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.6,-131.5,706,706);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(902.2,311.3,1,1,0,0,0,902.2,311.3);
	this.instance.filters = [new cjs.BlurFilter(11, 11, 1)];
	this.instance.cache(-3,-3,1811,629);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-6.5,-6.5,1820,639), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(914,314.9,1,1,0,0,0,914,314.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,1828,629.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiOzAxNMAAAhiZMEdnAAAMAAABiZg");
	mask.setTransform(914,314.875);

	// Слой_3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(914,314.9,1,1,0,0,0,914,314.9);
	this.instance.alpha = 0.6016;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,1828,629.8), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiOzAxNMAAAhiZMEdnAAAMAAABiZg");
	mask.setTransform(914,314.875);

	// Слой_3
	this.instance_5 = new lib.ClipGroup_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(914,314.9,1,1,0,0,0,914,314.9);

	this.instance_6 = new lib.ClipGroup_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(914,314.9,1,1,0,0,0,914,314.9);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,1828,629.8), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ_3
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(914,316.1,1.0125,1.008,0,0,0,902.2,311.4);
	this.instance.shadow = new cjs.Shadow("rgba(44,152,184,1)",0,0,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// _Clip_Group_
	this.instance_1 = new lib.ClipGroup_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(914,314.9,1,1,0,0,0,914,314.9);
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-2,-2,1832,634);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-28.9,-27.3,1892,693), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_705 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(705).call(this.frame_705).wait(1));

	// Слой_3
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(155.6,130.05,0.8929,0.8929,0,0,0,181.2,148.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({_off:false},0).to({_off:true},76).wait(391));

	// Слой_17
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190.95,216.35,0.7143,0.7143,0,0,0,61.3,13.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).to({scaleX:1.0714,scaleY:1.0714,y:216.4},10).to({regX:61.2,regY:13.4,scaleX:0.8929,scaleY:0.8929,x:190.9,y:216.3},6).wait(4).to({regX:61.3,regY:13.5,scaleX:1.0714,scaleY:1.0714,x:190.95,y:216.4},10).to({regX:61.2,regY:13.4,scaleX:0.8929,scaleY:0.8929,x:190.9,y:216.3},6).to({_off:true},68).wait(210).to({_off:false,regX:61.3,regY:13.5,scaleX:0.7143,scaleY:0.7143,x:190.95,y:216.35},0).to({scaleX:1.0714,scaleY:1.0714,y:216.4},10).to({regX:61.2,regY:13.4,scaleX:0.8929,scaleY:0.8929,x:190.9,y:216.3},6).wait(4).to({regX:61.3,regY:13.5,scaleX:1.0714,scaleY:1.0714,x:190.95,y:216.4},10).to({regX:61.2,regY:13.4,scaleX:0.8929,scaleY:0.8929,x:190.9,y:216.3},6).to({_off:true},69).wait(135).to({_off:false,regX:61.3,regY:13.5,scaleX:0.7143,scaleY:0.7143,x:190.95,y:216.35},0).to({scaleX:1.0714,scaleY:1.0714,y:216.4},10).to({regX:61.2,regY:13.4,scaleX:0.8929,scaleY:0.8929,x:190.9,y:216.3},6).wait(1));

	// Слой_13
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.6,128.5,0.5536,0.5536,0,0,0,39.8,75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).to({regX:39.6,scaleX:0.8929,scaleY:0.8929,x:150.5,y:137.45,alpha:1},7).wait(30).to({scaleX:1.2768,scaleY:1.2768,x:66.35,y:124.85},11,cjs.Ease.sineOut).to({_off:true},123).wait(143).to({_off:false,regX:39.8,scaleX:0.5536,scaleY:0.5536,x:150.6,y:128.5,alpha:0},0).to({regX:39.6,scaleX:0.8929,scaleY:0.8929,x:150.5,y:137.45,alpha:1},7).wait(30).to({scaleX:1.2768,scaleY:1.2768,x:66.35,y:124.85},11,cjs.Ease.sineOut).to({_off:true},124).wait(68).to({_off:false,regX:39.8,scaleX:0.5536,scaleY:0.5536,x:150.6,y:128.5,alpha:0},0).to({regX:39.6,scaleX:0.8929,scaleY:0.8929,x:150.5,y:137.45,alpha:1},7).wait(30).to({scaleX:1.2768,scaleY:1.2768,x:66.35,y:124.85},11,cjs.Ease.sineOut).wait(36));

	// Слой_12___копия
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.3,146.35,0.6786,0.6786,0,0,0,139.8,49.8);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,46,57,1)",0,0,12);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({scaleX:0.8929,scaleY:0.8929,y:190.65,alpha:1},7).wait(16).to({y:211.2},7).wait(30).to({regX:140,scaleX:0.5803,scaleY:0.5803,x:208.8,y:73.1},11,cjs.Ease.sineOut).to({_off:true},123).wait(120).to({_off:false,regX:139.8,scaleX:0.6786,scaleY:0.6786,x:149.3,y:146.35,alpha:0},0).to({scaleX:0.8929,scaleY:0.8929,y:190.65,alpha:1},7).wait(16).to({y:211.2},7).wait(30).to({regX:140,scaleX:0.5803,scaleY:0.5803,x:208.8,y:73.1},11,cjs.Ease.sineOut).to({_off:true},124).wait(45).to({_off:false,regX:139.8,scaleX:0.6786,scaleY:0.6786,x:149.3,y:146.35,alpha:0},0).to({scaleX:0.8929,scaleY:0.8929,y:190.65,alpha:1},7).wait(16).to({y:211.2},7).wait(30).to({regX:140,scaleX:0.5803,scaleY:0.5803,x:208.8,y:73.1},11,cjs.Ease.sineOut).wait(36));

	// Слой_12
	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.45,118.85,0.5982,0.5982,0,0,0,147.3,49.8);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,46,57,1)",0,0,12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({scaleX:0.8929,scaleY:0.8929,x:151.5,y:118.9,alpha:1},7).wait(16).to({regY:49.6,y:36.65},7,cjs.Ease.sineOut).wait(30).to({scaleX:0.5446,scaleY:0.5446,x:208.95},11,cjs.Ease.sineOut).to({_off:true},123).wait(120).to({_off:false,regY:49.8,scaleX:0.5982,scaleY:0.5982,x:151.45,y:118.85,alpha:0},0).to({scaleX:0.8929,scaleY:0.8929,x:151.5,y:118.9,alpha:1},7).wait(16).to({regY:49.6,y:36.65},7,cjs.Ease.sineOut).wait(30).to({scaleX:0.5446,scaleY:0.5446,x:208.95},11,cjs.Ease.sineOut).to({_off:true},124).wait(45).to({_off:false,regY:49.8,scaleX:0.5982,scaleY:0.5982,x:151.45,y:118.85,alpha:0},0).to({scaleX:0.8929,scaleY:0.8929,x:151.5,y:118.9,alpha:1},7).wait(16).to({regY:49.6,y:36.65},7,cjs.Ease.sineOut).wait(30).to({scaleX:0.5446,scaleY:0.5446,x:208.95},11,cjs.Ease.sineOut).wait(36));

	// Слой_15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_116 = new cjs.Graphics().p("AztPZIAAwUMAsfAAAIAAQUg");
	var mask_graphics_430 = new cjs.Graphics().p("AztPZIAAwUMAsfAAAIAAQUg");
	var mask_graphics_670 = new cjs.Graphics().p("AztPZIAAwUMAsfAAAIAAQUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(116).to({graphics:mask_graphics_116,x:158.5707,y:98.4593}).wait(123).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_graphics_430,x:158.5707,y:98.4593}).wait(124).to({graphics:null,x:0,y:0}).wait(116).to({graphics:mask_graphics_670,x:158.5707,y:98.4593}).wait(36));

	// Слой_16
	this.instance_5 = new lib.Символ28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.5,164.25,1.0268,1.0268,0,0,0,87.9,52.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(116).to({_off:false},0).to({x:208.75},9,cjs.Ease.sineOut).wait(10).to({regX:86.3,regY:35.5,x:207.1,y:147},0).to({regX:86.4,regY:35.6,scaleX:1.0982,scaleY:1.0982,x:207.2,y:147.05},10).to({regX:86.3,regY:35.5,scaleX:1.0268,scaleY:1.0268,x:207.1,y:147},6).wait(4).to({regX:86.4,regY:35.6,scaleX:1.0982,scaleY:1.0982,x:207.2,y:147.05},10).to({regX:86.3,regY:35.5,scaleX:1.0268,scaleY:1.0268,x:207.1,y:147},6).to({_off:true},68).wait(191).to({_off:false,regX:87.9,regY:52.3,x:5.5,y:164.25},0).to({x:208.75},9,cjs.Ease.sineOut).wait(10).to({regX:86.3,regY:35.5,x:207.1,y:147},0).to({regX:86.4,regY:35.6,scaleX:1.0982,scaleY:1.0982,x:207.2,y:147.05},10).to({regX:86.3,regY:35.5,scaleX:1.0268,scaleY:1.0268,x:207.1,y:147},6).wait(4).to({regX:86.4,regY:35.6,scaleX:1.0982,scaleY:1.0982,x:207.2,y:147.05},10).to({regX:86.3,regY:35.5,scaleX:1.0268,scaleY:1.0268,x:207.1,y:147},6).to({_off:true},69).wait(116).to({_off:false,regX:87.9,regY:52.3,x:5.5,y:164.25},0).to({x:208.75},9,cjs.Ease.sineOut).wait(10).to({regX:86.3,regY:35.5,x:207.1,y:147},0).to({regX:86.4,regY:35.6,scaleX:1.0982,scaleY:1.0982,x:207.2,y:147.05},10).to({regX:86.3,regY:35.5,scaleX:1.0268,scaleY:1.0268,x:207.1,y:147},6).wait(1));

	// Слой_14
	this.instance_6 = new lib.Символ26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-147.7,148.4,0.8929,0.7143,0,0,0,162.8,57.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(116).to({_off:false},0).to({x:182.4},9,cjs.Ease.sineOut).to({_off:true},114).wait(191).to({_off:false,x:-147.7},0).to({x:182.4},9,cjs.Ease.sineOut).to({_off:true},115).wait(116).to({_off:false,x:-147.7},0).to({x:182.4},9,cjs.Ease.sineOut).wait(27));

	// Layer_1
	this.instance_7 = new lib.ClipGroup();
	this.instance_7.parent = this;
	this.instance_7.setTransform(151.4,53.25,0.4464,0.4464,0,0,0,375.1,280.6);
	this.instance_7.alpha = 0.3203;
	this.instance_7.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.1071,scaleY:1.1071,rotation:-20.9985,alpha:0.2383},45).to({_off:true},31).wait(238).to({_off:false,scaleX:0.4464,scaleY:0.4464,rotation:0,alpha:0.3203},0).to({scaleX:1.1071,scaleY:1.1071,rotation:-20.9985,alpha:0.2383},45).to({_off:true},31).wait(164).to({_off:false,scaleX:0.4464,scaleY:0.4464,rotation:0,alpha:0.3203},0).to({scaleX:1.1071,scaleY:1.1071,rotation:-20.9985,alpha:0.2383},45).to({_off:true},31).wait(76));

	// Слой_9___копия___копия
	this.instance_8 = new lib.Символ8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.7,65.55,0.5536,0.5536,0,0,0,167.7,26.9);
	this.instance_8.alpha = 0.5;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({regX:167.8,regY:26.8,scaleX:0.8036,scaleY:0.8036,y:117.75,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,alpha:1,startPosition:28},19).to({scaleX:1.0257,scaleY:1.0257,x:150.85,y:37.25,mode:"single",startPosition:36},17).wait(19).to({startPosition:36},0).to({y:-32.35},7).to({_off:true},1).wait(242).to({_off:false,regY:26.9,scaleX:0.5536,scaleY:0.5536,x:150.7,y:65.55,alpha:0.5,mode:"synched",startPosition:0},0).to({regX:167.8,regY:26.8,scaleX:0.8036,scaleY:0.8036,y:117.75,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,alpha:1,startPosition:28},19).to({scaleX:1.0257,scaleY:1.0257,x:150.85,y:37.25,mode:"single",startPosition:36},17).wait(19).to({startPosition:36},0).to({y:-32.35},7).to({_off:true},1).wait(168).to({_off:false,regY:26.9,scaleX:0.5536,scaleY:0.5536,x:150.7,y:65.55,alpha:0.5,mode:"synched",startPosition:0},0).to({regX:167.8,regY:26.8,scaleX:0.8036,scaleY:0.8036,y:117.75,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,alpha:1,startPosition:28},19).to({scaleX:1.0257,scaleY:1.0257,x:150.85,y:37.25,mode:"single",startPosition:36},17).wait(19).to({startPosition:36},0).to({y:-32.35},7).to({_off:true},1).wait(76));

	// Слой_9___копия
	this.instance_9 = new lib.Символ8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.7,65.55,0.5536,0.5536,0,0,0,167.7,26.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({regX:167.8,regY:26.8,scaleX:0.8036,scaleY:0.8036,y:117.75,alpha:0.5,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,startPosition:28},19).to({_off:true},1).wait(285).to({_off:false,regY:26.9,scaleX:0.5536,scaleY:0.5536,x:150.7,y:65.55,alpha:0,startPosition:0},0).to({regX:167.8,regY:26.8,scaleX:0.8036,scaleY:0.8036,y:117.75,alpha:0.5,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,startPosition:28},19).to({_off:true},1).wait(211).to({_off:false,regY:26.9,scaleX:0.5536,scaleY:0.5536,x:150.7,y:65.55,alpha:0,startPosition:0},0).to({regX:167.8,regY:26.8,scaleX:0.8036,scaleY:0.8036,y:117.75,alpha:0.5,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,startPosition:28},19).to({_off:true},1).wait(121));

	// Слой_9
	this.instance_10 = new lib.Символ8("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.7,65.55,0.5536,0.5536,0,0,0,167.7,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:167.8,regY:26.8,scaleX:0.8035,scaleY:0.8035,y:117.75,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,startPosition:28},19).to({_off:true},1).wait(285).to({_off:false,regY:26.9,scaleX:0.5536,scaleY:0.5536,x:150.7,y:65.55,startPosition:0},0).to({regX:167.8,regY:26.8,scaleX:0.8035,scaleY:0.8035,y:117.75,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,startPosition:28},19).to({_off:true},1).wait(211).to({_off:false,regY:26.9,scaleX:0.5536,scaleY:0.5536,x:150.7,y:65.55,startPosition:0},0).to({regX:167.8,regY:26.8,scaleX:0.8035,scaleY:0.8035,y:117.75,startPosition:9},9).to({regX:167.7,regY:26.7,scaleX:0.8929,scaleY:0.8929,x:150.65,y:117.7,startPosition:28},19).to({_off:true},1).wait(123));

	// Слой_2___копия___копия
	this.instance_11 = new lib.Символ25();
	this.instance_11.parent = this;
	this.instance_11.setTransform(133.4,131.3,0.25,0.25,0,0,0,43.6,41.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({_off:false},0).to({regX:43.2,regY:41.1,scaleX:0.8929,scaleY:0.8929,x:66.45,y:241.9},13).wait(14).to({scaleX:0.9642,scaleY:0.9642,x:61.2,y:249.7},7).wait(30).to({x:-32.7,y:269.2},11,cjs.Ease.sineOut).to({_off:true},123).wait(116).to({_off:false,regX:43.6,regY:41.4,scaleX:0.25,scaleY:0.25,x:133.4,y:131.3},0).to({regX:43.2,regY:41.1,scaleX:0.8929,scaleY:0.8929,x:66.45,y:241.9},13).wait(14).to({scaleX:0.9642,scaleY:0.9642,x:61.2,y:249.7},7).wait(30).to({x:-32.7,y:269.2},11,cjs.Ease.sineOut).to({_off:true},124).wait(41).to({_off:false,regX:43.6,regY:41.4,scaleX:0.25,scaleY:0.25,x:133.4,y:131.3},0).to({regX:43.2,regY:41.1,scaleX:0.8929,scaleY:0.8929,x:66.45,y:241.9},13).wait(14).to({scaleX:0.9642,scaleY:0.9642,x:61.2,y:249.7},7).wait(30).to({x:-32.7,y:269.2},11,cjs.Ease.sineOut).wait(36));

	// Слой_2___копия
	this.instance_12 = new lib.Символ25();
	this.instance_12.parent = this;
	this.instance_12.setTransform(168.7,110.7,0.25,0.25,0,0,0,43.4,41.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(41).to({_off:false},0).to({regX:43.2,regY:41.1,scaleX:0.8929,scaleY:0.8929,x:220.25,y:46.55},13).wait(14).to({regY:41,scaleX:0.9642,scaleY:0.9642,x:227.35,y:38.75},7).wait(30).to({x:159.9,y:-20.45},11,cjs.Ease.sineOut).to({_off:true},123).wait(116).to({_off:false,regX:43.4,regY:41.2,scaleX:0.25,scaleY:0.25,x:168.7,y:110.7},0).to({regX:43.2,regY:41.1,scaleX:0.8929,scaleY:0.8929,x:220.25,y:46.55},13).wait(14).to({regY:41,scaleX:0.9642,scaleY:0.9642,x:227.35,y:38.75},7).wait(30).to({x:159.9,y:-20.45},11,cjs.Ease.sineOut).to({_off:true},124).wait(41).to({_off:false,regX:43.4,regY:41.2,scaleX:0.25,scaleY:0.25,x:168.7,y:110.7},0).to({regX:43.2,regY:41.1,scaleX:0.8929,scaleY:0.8929,x:220.25,y:46.55},13).wait(14).to({regY:41,scaleX:0.9642,scaleY:0.9642,x:227.35,y:38.75},7).wait(30).to({x:159.9,y:-20.45},11,cjs.Ease.sineOut).wait(36));

	// Слой_2___копия
	this.instance_13 = new lib.Символ25();
	this.instance_13.parent = this;
	this.instance_13.setTransform(151.5,122.9,0.1696,0.1696,0,0,0,43.4,41.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(41).to({_off:false},0).to({regY:41.4,scaleX:0.375,scaleY:0.375,x:234.35,y:170},13).wait(14).to({regX:43.5,regY:41.5,scaleX:0.405,scaleY:0.405,x:242.55,y:172.1},7).wait(30).to({regX:43.4,regY:41.6,x:272.3,y:213.1},11,cjs.Ease.sineOut).to({_off:true},123).wait(116).to({_off:false,scaleX:0.1696,scaleY:0.1696,x:151.5,y:122.9},0).to({regY:41.4,scaleX:0.375,scaleY:0.375,x:234.35,y:170},13).wait(14).to({regX:43.5,regY:41.5,scaleX:0.405,scaleY:0.405,x:242.55,y:172.1},7).wait(30).to({regX:43.4,regY:41.6,x:272.3,y:213.1},11,cjs.Ease.sineOut).to({_off:true},124).wait(41).to({_off:false,scaleX:0.1696,scaleY:0.1696,x:151.5,y:122.9},0).to({regY:41.4,scaleX:0.375,scaleY:0.375,x:234.35,y:170},13).wait(14).to({regX:43.5,regY:41.5,scaleX:0.405,scaleY:0.405,x:242.55,y:172.1},7).wait(30).to({regX:43.4,regY:41.6,x:272.3,y:213.1},11,cjs.Ease.sineOut).wait(36));

	// Слой_2
	this.instance_14 = new lib.Символ25();
	this.instance_14.parent = this;
	this.instance_14.setTransform(131.2,110.7,0.1696,0.1696,0,0,0,43.6,41.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(41).to({_off:false},0).to({regX:43.2,scaleX:0.5089,scaleY:0.5089,x:26.95,y:75.55},13).wait(14).to({regX:43.1,regY:41.3,scaleX:0.5496,scaleY:0.5496,x:18.6,y:70.15},7).wait(30).to({x:-65.55},11,cjs.Ease.sineOut).to({_off:true},123).wait(116).to({_off:false,regX:43.6,regY:41.2,scaleX:0.1696,scaleY:0.1696,x:131.2,y:110.7},0).to({regX:43.2,scaleX:0.5089,scaleY:0.5089,x:26.95,y:75.55},13).wait(14).to({regX:43.1,regY:41.3,scaleX:0.5496,scaleY:0.5496,x:18.6,y:70.15},7).wait(30).to({x:-65.55},11,cjs.Ease.sineOut).to({_off:true},124).wait(41).to({_off:false,regX:43.6,regY:41.2,scaleX:0.1696,scaleY:0.1696,x:131.2,y:110.7},0).to({regX:43.2,scaleX:0.5089,scaleY:0.5089,x:26.95,y:75.55},13).wait(14).to({regX:43.1,regY:41.3,scaleX:0.5496,scaleY:0.5496,x:18.6,y:70.15},7).wait(30).to({x:-65.55},11,cjs.Ease.sineOut).wait(36));

	// Слой_10
	this.instance_15 = new lib.Символ20();
	this.instance_15.parent = this;
	this.instance_15.setTransform(151.8,107.65,0.6875,0.6875,0,0,0,249.5,207.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(42).to({_off:false},0).to({regX:249.9,regY:207.5,scaleX:1.741,scaleY:1.741,x:147.35,y:119.25,alpha:1},4).to({scaleX:0.8928,scaleY:0.8928,x:147.3},4).wait(18).to({regX:249.8,regY:207.4,scaleX:1.0267,scaleY:1.0267,y:119.2},7).wait(30).to({x:63.15},11,cjs.Ease.sineOut).to({_off:true},123).wait(117).to({_off:false,regX:249.5,regY:207.2,scaleX:0.6875,scaleY:0.6875,x:151.8,y:107.65,alpha:0},0).to({regX:249.9,regY:207.5,scaleX:1.741,scaleY:1.741,x:147.35,y:119.25,alpha:1},4).to({scaleX:0.8928,scaleY:0.8928,x:147.3},4).wait(18).to({regX:249.8,regY:207.4,scaleX:1.0267,scaleY:1.0267,y:119.2},7).wait(30).to({x:63.15},11,cjs.Ease.sineOut).to({_off:true},124).wait(42).to({_off:false,regX:249.5,regY:207.2,scaleX:0.6875,scaleY:0.6875,x:151.8,y:107.65,alpha:0},0).to({regX:249.9,regY:207.5,scaleX:1.741,scaleY:1.741,x:147.35,y:119.25,alpha:1},4).to({scaleX:0.8928,scaleY:0.8928,x:147.3},4).wait(18).to({regX:249.8,regY:207.4,scaleX:1.0267,scaleY:1.0267,y:119.2},7).wait(30).to({x:63.15},11,cjs.Ease.sineOut).wait(36));

	// Слой_8
	this.instance_16 = new lib.Символ7();
	this.instance_16.parent = this;
	this.instance_16.setTransform(149.55,52.25,0.375,0.375,0,0,0,484.3,484.4);
	this.instance_16.filters = [new cjs.ColorFilter(0.29, 0.29, 0.29, 1, 0, 144.84, 181.05, 0)];
	this.instance_16.cache(130,113,712,712);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:484.4,scaleX:0.8929,scaleY:0.8929,x:149.5,y:74.5},28).to({regX:484.5,regY:484.5,scaleX:2.3839,scaleY:2.3839,x:149.65,y:115.8,alpha:0.5313},17).to({_off:true},194).wait(75).to({_off:false,regX:484.3,regY:484.4,scaleX:0.375,scaleY:0.375,x:149.55,y:52.25,alpha:1},0).to({regX:484.4,scaleX:0.8929,scaleY:0.8929,x:149.5,y:74.5},28).to({regX:484.5,regY:484.5,scaleX:2.3839,scaleY:2.3839,x:149.65,y:115.8,alpha:0.5313},17).wait(195).to({regX:484.3,regY:484.4,scaleX:0.375,scaleY:0.375,x:149.55,y:52.25,alpha:1},0).to({regX:484.4,scaleX:0.8929,scaleY:0.8929,x:149.5,y:74.5},28).to({regX:484.5,regY:484.5,scaleX:2.3839,scaleY:2.3839,x:149.65,y:115.8,alpha:0.5313},17).wait(107));

	// Слой_6
	this.instance_17 = new lib.Символ5();
	this.instance_17.parent = this;
	this.instance_17.setTransform(166.75,334.95,0.8929,0.8929,0,0,0,914.1,315.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:366.2},28).to({y:535.85},17).to({_off:true},194).wait(75).to({_off:false,y:334.95},0).to({y:366.2},28).to({y:535.85},17).wait(195).to({y:334.95},0).to({y:366.2},28).to({y:535.85},17).wait(107));

	// Слой_7
	this.instance_18 = new lib.Символ6("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(149.95,57.9,0.8929,0.8929,0,0,0,219.9,219.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(28).to({startPosition:0},0).to({regX:220,scaleX:1.8125,scaleY:1.8125,x:154.35,y:121.4},17).to({_off:true},194).wait(75).to({_off:false,regX:219.9,scaleX:0.8929,scaleY:0.8929,x:149.95,y:57.9},0).wait(28).to({startPosition:0},0).to({regX:220,scaleX:1.8125,scaleY:1.8125,x:154.35,y:121.4},17).wait(195).to({regX:219.9,scaleX:0.8929,scaleY:0.8929,x:149.95,y:57.9},0).wait(28).to({startPosition:0},0).to({regX:220,scaleX:1.8125,scaleY:1.8125,x:154.35,y:121.4},17).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.7,-640,1558.9,1562.8);
// library properties:
lib.properties = {
	id: '26B2B6566C56E647BAE648E105047976',
	width: 300,
	height: 250,
	fps: 24,
	color: "#020C16",
	opacity: 1.00,
	manifest: [
		{src:"images/back_gr.jpg", id:"back_gr"},
		{src:"images/Osteopro.png", id:"Osteopro"},
		{src:"images/r2_r.png", id:"r2_r"},
		{src:"images/r3_r.png", id:"r3_r"},
		{src:"images/sm1.png", id:"sm1"}
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
an.compositions['26B2B6566C56E647BAE648E105047976'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;