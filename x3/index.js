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
		this.info.gotoAndStop("hide");
		
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
		
		
		this.info.addEventListener("mouseover", info_show.bind(this));
		this.info.addEventListener("mouseout", info_hide.bind(this)); 
		
		function info_show()
		{ 
		  exportRoot.info.gotoAndPlay("show");
		}
		
		function info_hide()
		{ 
		  exportRoot.info.gotoAndStop("hide");
		}
	}
	this.frame_485 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(485).call(this.frame_485));

	// details
	this.info = new lib.details();
	this.info.setTransform(26,9);
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(91).to({_off:false},0).wait(121).to({alpha:0},5).wait(49).to({alpha:1},5).wait(215));

	// ctr
	this.ctr = new lib.ctr();
	this.ctr.setTransform(18.6,74.3,1,1.001,0,0,0,-0.4,0.3);
	this.ctr.alpha = 0;
	this.ctr._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ctr).wait(449).to({_off:false},0).to({alpha:1},10).wait(27));

	// text_1_bfs
	this.instance = new lib.bfs_text_1("synched",0);
	this.instance.setTransform(159.6,146.3,1,1,0,0,0,121.6,38.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(255).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(151).to({startPosition:0},0).to({y:146.1,alpha:0},7).wait(64));

	// text_2_bfs
	this.instance_1 = new lib.bfs_text_2("synched",0);
	this.instance_1.setTransform(254.7,238.6,1,1,0,0,0,219.7,70.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(144).to({startPosition:0},0).to({alpha:0},7).wait(64));

	// text_2
	this.instance_2 = new lib.text_2("synched",0);
	this.instance_2.setTransform(92.7,169.4,1.214,1.214,0,0,0,64.3,13);
	this.instance_2.alpha = 0.148;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(115).to({startPosition:0},0).to({alpha:0},5).wait(214).to({x:93.1,y:169.8},0).to({alpha:1},7).wait(48));

	// text_1
	this.instance_3 = new lib.thex1();
	this.instance_3.setTransform(94.4,242.2,1.165,1.162,0,0,0,100.4,36.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:102.1,y:211.7,alpha:1},9).wait(48).to({alpha:0},7).to({_off:true},1).wait(402));

	// logo
	this.instance_4 = new lib.logo_1("synched",0);
	this.instance_4.setTransform(234,533,1,1,0,0,0,28,31);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({startPosition:0,_off:false},0).to({alpha:1},4).wait(476));

	// picture_2
	this.instance_5 = new lib.img_2_1();
	this.instance_5.setTransform(155.3,130.2,0.636,0.636,0,0,0,247,210.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(226).to({_off:false},0).to({regX:247.1,scaleX:0.69,scaleY:0.69,x:157.5,y:130.8,alpha:1},7).to({regX:247,regY:210,scaleX:0.81,scaleY:0.81,x:162.3,y:132.1},17).wait(236));

	// picture_1
	this.instance_6 = new lib.img_1_1();
	this.instance_6.setTransform(127.4,119,1,1,0,0,0,247,210);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,alpha:1},9).to({scaleX:0.78,scaleY:0.78},15).wait(191).to({alpha:0},9).to({_off:true},11).wait(249));

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
p.nominalBounds = new cjs.Rectangle(0,0,494,420);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.thex1 = function() {
	this.initialize();

	// THE X1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGSBxIgTgDIgPgDIAAgRIAQACIAUADIATABQAMAAAKgCQAKgCAGgFQAJgGAEgKQADgJABgMQAAgOgGgKQgFgKgLgGQgFgDgHgBIgRgBIgmAAIAAgPIA9AAIAMgSQAHgJADgIQAEgIAAgIQAAgHgCgGQgBgGgFgFQgGgFgJgDQgJgCgPAAIgWABIgVAEIgRAEIAAgRIASgEIAVgEIAVgCQAUAAAMAEQAMAEAJAIQAGAHADAJQAEAKAAAJQAAAJgEAKQgDAJgHALIgIALIgGAJIAHADIAJAJQAGAHADAKQAEAKAAAOQAAANgEAMQgEAMgJAIQgJAKgOAFQgNAEgUAAIgVgBgAFLBtIhDhlIhDBlIgXAAIBLhtIhGhsIAWAAIA+BhIA/hhIAWAAIhFBrIBKBugAg7BtIAAjZICOAAIAAASIh7AAIAABQIB0AAIAAAQIh0AAIAABVIB/AAIAAASgAiIBtIAAhsIh+AAIAABsIgSAAIAAjZIASAAIAABeIB+AAIAAheIASAAIAADZgAmfBtIAAjHIhQAAIAAgSICyAAIAAASIhQAAIAADHg");
	this.shape.setTransform(153.5,-140.8,1.512,1.442);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(78.4,-157.3,150.2,33);


(lib.text_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqCtQgJgEgFgHQgGgJgCgPQgCgPAAgVQAAgSABgOQACgOAGgKQAFgJAJgDQAJgFAMAAQALAAAJAEQAJADAGAKQAGAKACAOQACAPAAAQQAAATgCAPQgCAOgGAJQgEAKgJAEQgJAFgNgBQgMAAgIgDgAAwArQgGACgEAFQgFAHgCAOQgBANAAASQAAATABANQACAOAEAHQAEAFAHADQAGACAIAAQAJAAAGgCQAHgEAEgHQAEgJABgMIABgdQAAgSgBgMQgCgOgFgGQgDgGgGgDQgHgDgIAAQgIAAgGADgAhFCtQgJgEgFgHQgGgJgCgPQgCgPAAgVIABggQACgOAGgKQAFgJAJgDQAJgFAMAAQAMAAAJAEQAIADAGAKQAGAKACAOQACAPAAAQQAAATgCAPQgCAOgFAJQgFAKgJAEQgJAFgNgBQgMAAgIgDgAg/ArQgGACgEAFQgFAHgBAOQgCANAAASQAAATACANQABAOAFAHQADAFAHADQAGACAIAAQAJAAAGgCQAHgEAEgHQAEgJACgMIABgdQAAgSgCgMQgCgOgEgGQgEgGgGgDQgHgDgIAAQgIAAgGADgAi2CtQgIgEgFgHQgGgJgDgPQgCgPAAgVQAAgSACgOQACgOAFgKQAFgJAJgDQAJgFAMAAQAMAAAJAEQAJADAFAKQAGAKACAOQACAPAAAQQAAATgCAPQgCAOgFAJQgFAKgJAEQgJAFgNgBQgLAAgJgDgAiwArQgGACgEAFQgFAHgBAOQgCANAAASQAAATACANQABAOAFAHQAEAFAGADQAGACAJAAQAIAAAHgCQAHgEADgHQAFgJABgMIABgdQAAgSgCgMQgCgOgEgGQgDgGgHgDQgGgDgJAAQgIAAgGADgAlLCsQgIgEgFgHQgFgHgCgKQgBgKAAgLIAAgQQAAgJADgKQACgKAEgIQAEgKAIgGQAFgGAHgDIAOgHIAQgFIAPgEIAAAMQgPADgNAFQgMAEgIAIQgHAGgEAIQgEAIgBAIIALAAIAOAAQAOgBAJADQAJADAHAGQAFAGACAHQACAIAAAIIgBAPQgCAJgFAGQgFAIgJADQgIAFgOgBQgNAAgJgEgAlTBmIgBAJIAAAMQAAAKABAHQABAIADAGQAHALATAAQAJAAAGgCQAGgDAFgFQADgFACgGIABgNIgBgLQgCgGgEgEQgEgFgIgCQgHgBgLgBIgOAAIgLABgAnuCvIgPgDIAAgLIAQADIARABQAIAAAHgCQAHgBAFgGQAHgIAAgQQAAgIgCgGQgCgFgFgEQgFgEgIgCQgJgBgQgBIgSAAIAAhFIBJAAIAAALIg+AAIAAAwIAQAAQAMAAAIABQAIACAGAEQAJAFAEAJQADAJAAAKQAAALgCAHQgCAJgGAFQgHAIgIACQgJADgMAAQgJAAgJgBgAIECtIAAgZIAQAAIAAAZgAHfCtIAAhFIhSAAIAABFIgLAAIAAiNIALAAIAAA8IBSAAIAAg8IALAAIAACNgAEPCtIAAiNIA1AAQAMAAAHADQAIACAFAGQAFAFACAIQADAIAAAJQAAAJgCAJQgCAHgFAHQgEAGgHADQgHACgKABIgIABIgLAAIgNAAIgOAAIAAA3gAEbBrIAZAAIAUgBIAMgDQAGgCADgGQADgDABgHIABgMQAAgHgCgHQgCgFgEgFQgEgDgFgBQgGgCgIAAIgoAAgACrCtIAAiNIBXAAIAAAMIhLAAIAACBgAmHCtIAAiBIgiALIAAgMIAtgPIAACRgApLCtIAAiBIgiALIAAgMIAugPIAACRgAJIBrIAAgdIgcAQIAAgMIAWgMIgWgOIAAgMIAcAQIAAgcIAKAAIAAAcIAcgQIAAAMIgXAOIAXAMIAAAMIgcgQIAAAdgAF9gEIAAgcIhnAAIAAAcIgMAAIAAgmIADAAIADgBIAEgDIAFgFIAGgIIAEgLIAEgQIACgVIACgdIACglIBMAAIAACDIAQAAIAAAmgAE2iAIgCAaIgCAVIgEAPQgCAJgEAGQgDAFgEAEIBNAAIAAh3Ig2AAIgCAhgAgNgeIgQgDIAAgKIAIABIAJAAIAJACIAIAAQAHABAHgCQAGgCAEgCQAGgFACgGQADgGAAgHQAAgKgEgHQgDgFgHgEIgIgDIgLAAIgWAAIAAgMIAkAAIAJgLQAEgGACgFQADgFAAgFQAAgFgCgEQgBgDgDgEQgEgDgFgCQgGgCgKAAIgIABIgLACIgKACIgHABIAAgLIAIgCIAKgCIAKgBIAIgBQANABAIACQAIACAGAFQAEAFACAGIABAMQAAAHgCAFQgCAHgEAGIgGAHIgEAGIAGAEQADABACAEQAEAFADAGQACAGAAAKQAAAIgDAIQgDAHgFAGQgGAGgJADQgJADgMAAIgSgCgADyggIAAiNIAMAAIAACNgAB0ggIAAiNIA3AAIASABQAHABAGADQAHAEAEAGQADAIAAAJQAAAGgCAFIgFANIgFAGIgDAGIAHAEIAFAHQADAEACAFQACAGAAAIQAAAKgEAIQgCAHgGAEQgGAGgIACQgJADgNgBgACAgqIAsAAQAJgBAHgBQAGgCAEgDQAFgDACgGQADgGAAgHQAAgOgLgJIgIgDIgJgBIg0AAgACAhuIA/AAIADgFIADgHQAEgFABgFQACgEAAgFQAAgMgJgFQgEgCgGAAIgOgBIgrAAgAgrggIgrhAIgsBAIgOAAIAwhHIguhGIAOAAIApA/IApg/IAOAAIgtBFIAwBIgAjkggIgehpIgeBpIgSAAIgdiNIALAAIAcCDIAehtIAQAAIAfBtIAbiDIAMAAIgdCNgAlrggIAAh/IgtBjIgMAAIgthjIAAB/IgLAAIAAiNIARAAIAtBlIAthlIARAAIAACNgApaggIAAiNIA2AAIASABQAIABAGADQAGAEAEAGQAEAIAAAJQAAAGgDAFIgFANIgEAGIgEAGIAHAEIAGAHQACAEACAFQACAGAAAIQAAAKgDAIQgDAHgGAEQgGAGgIACQgJADgNgBgApPgqIAsAAQAKgBAGgBQAGgCAFgDQAFgDACgGQACgGAAgHQAAgOgKgJIgIgDIgKgBIg0AAgApPhuIA/AAIADgFIAEgHIAFgKQACgEAAgFQAAgMgJgFQgFgCgFAAIgPgBIgrAAg");
	this.shape.setTransform(114.4,-93.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(52.2,-111.6,124.5,35.4);


(lib.logo_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-205.9,-502.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205.9,-502.9,300,250);


(lib.img_2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img_2();
	this.instance.setTransform(-30.9,-1.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-1.9,494,420);


(lib.img_1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img_1();
	this.instance.setTransform(-16.6,57);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,57,494,420);


(lib.details_text = function() {
	this.initialize();

	// text - копия
	this.text = new cjs.Text("*Пропозиція дійсна з 01.10.2020 до 30.11.2020. Ціни визначені станом на 03.11.2020 згідно встановленого Продавцем на 03.11.2020 курсу гривні до Євро, який дорівнює 33,19 грн. за 1 Євро. \n\nЗображення автомобілів наведено для ілюстрації та можуть відрізнятися від автомобілів, представлених в дилерській мережі BMW. Кількість автомобілів обмежена. Імпортер залишає за собою право змінювати умови даної пропозиції без попереднього повідомлення. \n\nВсю потрібну Вам інформацію про автомобілі BMW, їх комплектації, вартості, а також умови кредитування та/або страхування, Ви можете отримати у консультантів в офіційній дилерській мережі BMW в Україні.", "11px Arial");
	this.text.lineHeight = 11;
	this.text.lineWidth = 227;
	this.text.setTransform(13,153,0.933,0.933);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyDSJMAAAgkRMAkGAAAMAAAAkRg");
	this.shape.setTransform(119.6,259.7);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,143.5,231.2,240.9);


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
	this.shape.setTransform(91.3,-82.3,1.042,1.066);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45.1,-94.4,92.5,24.2);


(lib.bfs_text_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(113.2,-65.3,1.052,1.052);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(42.1,-90.6,142.3,50.5);


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
	this.shape.setTransform(28.9,218.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(8));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(178,178,178,0.008)").s().p("AADC1QiOAChIgCQiAgFg6gaQgigOgSgUQgPgQgFgTQgDgKAAhHQAAhMADgKQALgtA9gcQARgHAZgGQA2gNBWAAQBIAACOAFQCtAAAdACQAmACAiAEQAmAFAdAIQAUAGAQAHQAYALATAOQAbATANAZQAOAbAAA0QAAA+gIAYQgRAtg9AbQg6Aah3AAQiOgFhBAAg");
	this.shape_1.setTransform(34,217.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,199,96.3,37.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;