(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var queue = new createjs.LoadQueue(true, null, true);
		
		
		stage.enableMouseOver();
		stage.canvas.style.cursor = "pointer";
		
		this.ctr.gotoAndStop("out");
		
		
		canvas.addEventListener("mouseover", over.bind(this));
		canvas.addEventListener("mouseout", out.bind(this));
		
		 
		function over()
		{
		  this.ctr.gotoAndStop("over");
		}
		 
		 
		function out()
		{
		  this.ctr.gotoAndStop("out");
		}
	}
	this.frame_267 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(267).call(this.frame_267));

	// ctr
	this.ctr = new lib.ctr();
	this.ctr.setTransform(18.6,78.3,1,1.001,0,0,0,-0.4,0.3);
	this.ctr.alpha = 0;
	this.ctr._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ctr).wait(217).to({_off:false},0).to({alpha:1},10).wait(41));

	// text_1_bfs
	this.instance = new lib.bfs_text_1("synched",0);
	this.instance.setTransform(159.6,146.3,1,1,0,0,0,121.6,38.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193).to({startPosition:0,_off:false},0).to({alpha:1},8).wait(67));

	// text_2_bfs
	this.instance_1 = new lib.bfs_text_2("synched",0);
	this.instance_1.setTransform(254.7,238.6,1,1,0,0,0,219.7,70.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(198).to({startPosition:0,_off:false},0).to({alpha:1},8).wait(62));

	// text_1
	this.instance_2 = new lib.thex1();
	this.instance_2.setTransform(87.1,261.7,1.282,1.282,0,0,0,100.4,36.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:102.1,y:211.7,alpha:1},9).wait(127).to({alpha:0},5).to({_off:true},1).wait(107));

	// logo
	this.instance_3 = new lib.logo_1("synched",0);
	this.instance_3.setTransform(234,533,1,1,0,0,0,28,31);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({startPosition:0,_off:false},0).to({alpha:1},4).wait(258));

	// picture_2
	this.instance_4 = new lib.img_2_1();
	this.instance_4.setTransform(165.9,118.3,1.073,1.068,0,0,0,247,210.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164).to({_off:false},0).to({regY:210,scaleX:0.97,scaleY:0.97,x:164.7,y:123.3,alpha:1},8).to({scaleX:0.81,scaleY:0.81,x:162.7,y:131.5},13).wait(83));

	// picture_1
	this.instance_5 = new lib.img_1_1();
	this.instance_5.setTransform(150,105.6,0.628,0.626,0,0,0,247,210.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({scaleX:0.69,scaleY:0.68,x:152.9,y:110.6,alpha:1},8).to({regY:210,scaleX:0.78,scaleY:0.78,x:157.5,y:118.5},13).wait(137).to({alpha:0},7).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.button_bmw_n_ci_ = function() {
	this.initialize(img.button_bmw_n_ci_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,64);


(lib.img_1 = function() {
	this.initialize(img.img_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,494,420);


(lib.img_2 = function() {
	this.initialize(img.img_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,340);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.thex1 = function() {
	this.initialize();

	// THE X1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFEBcQgMgFgHgLQgGgJgCgNQgDgNAAgPIABgWIADgXQADgMAFgMQAGgMAKgKQAJgJANgGQANgGAOgEIAcgHIAAAQQgVAEgQAGQgRAGgKAKQgKAIgFALQgFALgBALIANgBIATAAQAUAAAMADQAMAEAIAIQAGAGAEAKQADAKAAALQAAALgDAKQgCAKgGAJQgHAKgLAFQgLAFgTABQgRAAgLgGgAE3AAIgBAKIAAAQQAAAOACAKQACAKADAHQAFAIAJAEQAJAEAMAAQANAAAHgEQAJgDAGgHQAEgGACgJQACgIAAgJQAAgIgCgHQgCgIgFgFQgGgHgKgCQgLgBgOABIgTAAIgPAAgAEGBdIg5hXIg7BXIgTAAIBAhdIg8hdIATAAIA2BTIA2hTIATAAIg8BcIBABegAg1BdIAAi6IB5AAIAAAPIhqAAIAABFIBlAAIAAAOIhlAAIAABJIBuAAIAAAPgAhuBdIAAhcIhtAAIAABcIgPAAIAAi6IAPAAIAABRIBtAAIAAhRIAPAAIAAC6gAlVBdIAAirIhFAAIAAgPICZAAIAAAPIhFAAIAACrg");
	this.shape.setTransform(161.8,-136,2.023,2.023);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(78.5,-155.9,166.5,39.8);


(lib.logo_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-205.9,-501.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205.9,-501.9,300,250);


(lib.img_2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img_2();
	this.instance.setTransform(29,22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(29,22,400,340);


(lib.img_1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img_1();
	this.instance.setTransform(0,36);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,36,494,420);


(lib.details_text = function() {
	this.initialize();

	// text - копия
	this.text = new cjs.Text("*Пропозиції дійсні з 01.10.2019 до 31.12.2019 у дилерських центрах АВТ Баварія Україна. \n\nПредставлені кредитні продукти забезпечуються\nнашим фінансовим партнером \nCredit Agricole (АТ “КРЕДІ АГРІКОЛЬ БАНК”).\nЛіцензія НБУ №99 від 12.10.2011.\n\nІмпортер залишає за собою право змінювати їх умови.\n\nВсю потрібну Вам інформацію про автомобілі BMW, їх комплектації, вартості, а також умови кредитування та/або страхування, Ви можете отримати у консультантів в офіційній дилерській мережі BMW в Україні.", "11px Arial");
	this.text.lineHeight = 11;
	this.text.lineWidth = 280;
	this.text.setTransform(13,153,0.933,0.933);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A13SJMAAAgkRMArvAAAMAAAAkRg");
	this.shape.setTransform(144.1,259.7);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,143.5,280.2,232.4);


(lib.ctr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1});

	// 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArPCgIAAk/IWfAAIAAE/g");
	var mask_graphics_1 = new cjs.Graphics().p("ArPCgIAAk/IWfAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:72,y:16}).wait(1).to({graphics:mask_graphics_1,x:72,y:16}).wait(1));

	// 2
	this.instance = new lib.button_bmw_n_ci_();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-31.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,64);


(lib.bfs_text_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(120.6,-112.3,0.641,0.641);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45.6,-118.7,150,12.7);


(lib.bfs_text_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMBBzQgLgFgHgLQgGgJgDgNQgCgNAAgPIAAgWIADgZQADgKAFgMQAHgNAJgJQAKgJAMgGQANgGAOgFIAcgGIAAAPQgUAFgRAGQgQAGgLAJQgKAJgEALQgGALgBAJIAOgBIATAAQATgBAMAEQANAEAHAJQAHAHADAJQAEAKAAAMQAAAKgDAKQgCALgHAJQgGAJgMAGQgLAFgTABQgQAAgMgGgAL1AVIgBAMIgBAQQABANACAKQABAKAEAIQAFAHAJAEQAIAFAMAAQANgBAIgDQAJgDAFgIQAFgFACgJQACgIAAgJQAAgIgCgIQgCgHgFgFQgHgHgKgCQgKgDgOAAIgTAAIgPABgAq2ByQgPgIgIgNQgGgJgCgMQgEgMgBgNIgBgZIABgWIAEgXQACgLAEgIQAIgPARgIQAQgJAaAAQAXAAAPAFQAOAHAKAOQAGAIADAMQADAMACAOIABAYIgBAXQgBAOgDAMQgDAMgGAJQgLAQgPAGQgQAHgVAAQgagBgPgGgAqsg2QgOAGgHAOQgEAGgCAKIgDASIAAAWIAAAVIADAWQADALADAHQAFAJAIAFQAIAFAKACQAKACALAAQAPAAAMgFQALgEAJgKQAFgHAEgLQADgKABgNIACgYIgCgWQgBgKgCgKQgDgKgFgHQgHgMgNgGQgMgFgRAAIgDAAQgQAAgMAGgANrB0IAAgiIAVAAIAAAigALNB0Ig5hXIg6BXIgTAAIBAhfIg8hcIATAAIA2BSIA2hSIATAAIg9BaIBABhgAHmB0IgoiMIgoCMIgYAAIgoi7IAQAAIAkCsIApiPIAUAAIAqCPIAlisIAPAAIgnC7gAE4B0IAAiqIg7CFIgRAAIg8iEIAACpIgPAAIAAi7IAYAAIA8CEIA7iEIAYAAIAAC7gAABB0IAAi7IBJAAIAXABQALACAHAEQAJAFAFAJQAFAJAAANQAAAIgDAIQgCAHgGAGIgFAJIgFAHIAJAHQAFAEADAFQADAEADAIQACAIABAKQAAANgFALQgDAKgJAGQgHAHgMADQgLADgRAAgAAQBlIA7AAQAMAAAJgCQAIgCAGgEQAHgEADgJQACgHAAgKQAAgKgCgHQgEgHgHgFQgFgEgGgCQgGgBgHgBIhFAAgAAQALIBUAAIAEgIIAFgFQAEgHACgHQAEgGAAgGQAAgJgEgFQgDgFgGgEQgGgDgHAAIgTgBIg6AAgAhZB0IAAiqIhoCqIgXAAIAAi7IAQAAIAACqIBpiqIAWAAIAAC7gAkHB0IAAiqIhpCqIgWAAIAAi7IAPAAIAACqIBpiqIAXAAIAAC7gAonB0IAAi7IBJAAIAYABQALACAHAEQAJAFAEAJQAGAJAAANQgBAIgCAIQgDAHgFAGIgGAJIgEAHIAJAHQAEAEADAFQAEAEACAIQADAIAAAKQAAANgEALQgEAKgIAGQgHAHgMADQgLADgSAAgAoXBlIA6AAQANAAAJgCQAIgCAFgEQAHgEADgJQADgHAAgKQAAgKgDgHQgDgHgIgFQgFgEgFgCQgHgBgHgBIhEAAgAoXALIBTAAIAFgIIAEgFQAFgHACgHQADgGAAgGQAAgJgDgFQgDgFgGgEQgGgDgIAAIgTgBIg5AAgAsCB0IAAhcIhtAAIAABcIgQAAIAAi7IAQAAIAABPIBtAAIAAhPIAPAAIAAC7gAiehXQgHgCgEgDQgFgFgDgIIgGgOIAQAAIACAJQACAEADADQACADAEABQAEACAFAAQAFAAAEgCIAHgEIAEgIIADgIIAPAAIgFAOQgEAIgFAFQgFADgFACQgHACgHABQgIgBgFgCg");
	this.shape.setTransform(132.2,-80.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(42.6,-92.7,179.3,24.2);


(lib.details = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hide:0,show:1});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7));

	// details_text
	this.instance = new lib.details_text();
	this.instance.setTransform(112.8,-61.4,1,1,0,0,0,134.8,83.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,x:112.9,alpha:1},6).wait(1));

	// details_button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(25.9,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(8));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(178,178,178,0.008)").s().p("AACC1QiMAChKgCQh+gFg7gaQghgOgTgUQgPgQgFgTQgDgKAAhHQAAhMADgKQALgtA9gcQARgHAYgGQA2gNBYAAQBHAACOAFQCtAAAcACQAoACAgAEQAnAFAeAIQATAGAQAHQAZALASAOQAcATAMAZQAOAbAAA0QAAA+gIAYQgQAtg+AbQg6Aah4AAQiMgFhDAAg");
	this.shape_1.setTransform(31,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-5.9,96.3,37.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;