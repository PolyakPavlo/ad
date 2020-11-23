(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._02 = function() {
	this.initialize(img._02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,302);


(lib._03 = function() {
	this.initialize(img._03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,301);


(lib.for_txt = function() {
	this.initialize(img.for_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,127);


(lib._04 = function() {
	this.initialize(img._04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,252);


(lib.strawberry1 = function() {
	this.initialize(img.strawberry1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,28);


(lib.chachki = function() {
	this.initialize(img.chachki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,174);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,136);


(lib.vaza = function() {
	this.initialize(img.vaza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,181);


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.packs = function() {
	this.initialize(img.packs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,172);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,250);


(lib.vinograd = function() {
	this.initialize(img.vinograd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,250);


(lib.pechenie = function() {
	this.initialize(img.pechenie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,59);


(lib.strawberry2 = function() {
	this.initialize(img.strawberry2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,34);// helper functions:

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


(lib.vinograd_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.vinograd();
	this.instance.setTransform(-162,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vinograd_1, new cjs.Rectangle(-162,-125,324,250), null);


(lib.vaza_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.vaza();
	this.instance.setTransform(-91,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vaza_1, new cjs.Rectangle(-91,-90.5,182,181), null);


(lib.straw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.strawberry2();
	this.instance.setTransform(-24.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.straw2, new cjs.Rectangle(-24.5,-17,49,34), null);


(lib.straw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.strawberry1();
	this.instance.setTransform(-25,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.straw1, new cjs.Rectangle(-25,-14,50,28), null);


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._04();
	this.instance.setTransform(-100,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-126,200,252);


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._03();
	this.instance.setTransform(-133,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-150.5,266,301);


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._02();
	this.instance.setTransform(-150,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-151,300,302);


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.pechenie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pechenie();
	this.instance.setTransform(-123,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pechenie_1, new cjs.Rectangle(-123,-29.5,246,59), null);


(lib.packs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.packs();
	this.instance.setTransform(-134,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.packs_1, new cjs.Rectangle(-134,-86,268,172), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.setTransform(-68,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-68,-68,136,136), null);


(lib.for_txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.for_txt();
	this.instance.setTransform(-291,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.for_txt_1, new cjs.Rectangle(-291,-63.5,582,127), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg();
	this.instance.setTransform(-960,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-960,-125,1920,250), null);


(lib.txttt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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DSIAAADQABAGAIAAIAAAAIAJAAIgCAKIgDAAIgBAEgApPiSIACgKIADAAIAAAAIABgEQALAAAGgEIAAAAQADgFACgIIAAAAIA4jSIAAgDQAAgGgRAAIAAAAIgDAAIADgKIADAAIABgEIBIAAIgCAKIgDAAIAAAAIgBAEQgMABgGADIAAAAIgEANIAAAAIg2DKIAAADIgCAFIAAADQACAGAIAAIAAAAIAJAAIgDAKIgDAAIgBAEgArAiSIADgKIADAAIABgEIAIAAIAEgBIAAAAIABgCIAAAAQAAgDgGgOIAAAAIglhNQgRABgRgBIAAAAIgYBYIAAADQAAAGAKAAIAAAAIAIAAIgCAKIgDAAIgBAEIhIAAIADgKIADAAIAAAAIABgEQALAAAGgEIAAAAQADgEACgJIAAAAIA1jGIADgPIAAAAQAAgGgRAAIAAAAIgDAAIADgKIADAAIABgEIBIAAQBgAAAABJIAAAAQAAAggWAUIAAAAQgHAHgJAGIAAAAQgTAMgbADIAAAAIAbA5QAJATAFAHIAAAAQAJAOAMAAIAAAAIAFAAIgDAKIgDAAIgBAEgArbl1IgZBhIAPAAQAwAAAYgMIAAAAQAIgEAGgFIAAAAQAOgQAAgaIAAAAQAAgzhFAAIAAAAQgKAAgFADIAAAAQgDAEgDAKg");
	mask.setTransform(-104.2749,8.8249);

	// for_txt
	this.instance = new lib.for_txt_1();
	this.instance.setTransform(-224.45,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.8,-33.5,311.1,84.7);


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol_5
	this.instance = new lib.s2("synched",0);
	this.instance.setTransform(-96,199);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({y:45.3,alpha:1},13).to({y:-155.65},17).to({y:-498.9,alpha:0},31).wait(1));

	// Symbol_4
	this.instance_1 = new lib.s3("synched",0);
	this.instance_1.setTransform(-96,199);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({y:68.7,alpha:1},12).to({y:-126.7},18).to({y:-498.9,alpha:0},31).wait(15));

	// Symbol_3
	this.instance_2 = new lib.s4("synched",0);
	this.instance_2.setTransform(-96,198.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:64.6,alpha:1},13).to({y:-110.45},17).to({y:-409.45,alpha:0},31).wait(31));

	// Symbol_2
	this.instance_3 = new lib.s5("synched",0);
	this.instance_3.setTransform(-96,174);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-6.7,alpha:1},15).to({y:-247.85},19).to({y:-456.95,alpha:0},16).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246,-649.9,300,999.9);


(lib.bgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgg, new cjs.Rectangle(-960,-125,1920,250), null);


(lib._111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol_6_copy_3
	this.instance = new lib.s1("synched",0);
	this.instance.setTransform(200.9,389.75,0.1691,0.3204,0,0,0,-143.4,295.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).wait(1000));

	// Symbol_6_copy_2
	this.instance_1 = new lib.s1("synched",0);
	this.instance_1.setTransform(200.9,389.75,0.1691,0.3204,0,0,0,-143.4,295.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(1031));

	// Symbol_6_copy
	this.instance_2 = new lib.s1("synched",0);
	this.instance_2.setTransform(200.9,389.75,0.1691,0.3204,0,0,0,-143.4,295.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1056));

	// Symbol_6
	this.instance_3 = new lib.s1("synched",0,false);
	this.instance_3.setTransform(200.9,389.75,0.1691,0.3204,0,0,0,-143.4,295.7);
	this.instance_3.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1080));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183.5,86.7,50.80000000000001,320.40000000000003);


(lib.s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6XfeIgGggMgjlgG/MgC0g3KMCBtgAoMgAyAuPMhXXAPDIgOATQgGAUgOASQgOASgbAbQgaAagqAQQgOAFgLAAQgWAAgHgWg");
	mask.setTransform(370.15,178.6138);

	// Layer_11_copy
	this.instance = new lib._111("synched",0);
	this.instance.setTransform(212.5,272.65,2.0492,0.75,0,0,0,208.8,247);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1056));

	// Layer_11
	this.instance_1 = new lib._111("synched",0);
	this.instance_1.setTransform(211.15,306.75,0.75,0.75,0,0,0,209,247);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1080));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.7,152.5,104,229.8);


(lib.SMOKEEEEE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.s6("synched",0);
	this.instance.setTransform(430.35,333.6,1,1,0,0,0,370.2,191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(705).to({startPosition:705},0).to({_off:true},1).wait(374));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(220.9,295,103.9,229.79999999999995);


(lib.chaynik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2___копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkpQeQhMgDlQhbQiogtiagtIk+1BIE+pDMAlNACGIsceIIk7AZQhjAIigAHQiTAHhSAAIgwgBg");
	mask.setTransform(-55.3,-134.3125);

	// Слой_2___копия
	this.instance = new lib.SMOKEEEEE("synched",11);
	this.instance.setTransform(86.7,-168.85,1,1,0,0,0,422.7,374.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(695));

	// Слой_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjEOYQjxgCiegmQhLgSh6gzQg+gaimmWQhSjMhHjFIh6uBMAoeAANIqKZZQh2A0ikAyQlCBjjiAAIgLAAg");
	mask_1.setTransform(155.15,-81.522);

	// Слой_2
	this.instance_1 = new lib.SMOKEEEEE("synched",0);
	this.instance_1.setTransform(285.4,-132.8,1,1,0,0,0,422.7,374.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(695));

	// Слой_1
	this.instance_2 = new lib.chachki();
	this.instance_2.setTransform(-212,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(695));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-239.8,424,326.8);


(lib._300x250_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pechenie
	this.instance = new lib.pechenie_1();
	this.instance.setTransform(589.55,218.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:201.4,alpha:1},10,cjs.Ease.get(1)).wait(660).to({_off:true},1).wait(34));

	// straw1
	this.instance_1 = new lib.straw1();
	this.instance_1.setTransform(441.55,206.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(694).to({_off:true},1).wait(34));

	// straw2
	this.instance_2 = new lib.straw2();
	this.instance_2.setTransform(1240.9,222.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(694).to({_off:true},1).wait(34));

	// chaynik
	this.instance_3 = new lib.chaynik();
	this.instance_3.setTransform(811.2,180);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({y:163,alpha:1,mode:"synched",startPosition:0},11,cjs.Ease.get(1)).to({startPosition:673},673).to({_off:true},1).wait(34));

	// packs
	this.instance_4 = new lib.packs_1();
	this.instance_4.setTransform(1059.65,170.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({y:153.8,alpha:1},11,cjs.Ease.get(1)).wait(633).to({_off:true},1).wait(34));

	// vaza
	this.instance_5 = new lib.vaza_1();
	this.instance_5.setTransform(987.5,121);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).to({y:104,alpha:1},11,cjs.Ease.get(1)).wait(646).to({_off:true},1).wait(34));

	// vinograd
	this.instance_6 = new lib.vinograd_1();
	this.instance_6.setTransform(1317.45,145.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).to({y:128.4,alpha:1},11,cjs.Ease.get(1)).wait(619).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(416.6,-246.2,1102.6999999999998,516.5999999999999);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,694];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_694 = function() {
		this.stop();
		this.paused = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(694).call(this.frame_694).wait(1));

	// ramka
	this.instance = new lib.ramka();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(695));

	// txt
	this.instance_1 = new lib.txttt("synched",0);
	this.instance_1.setTransform(177.25,44.55,0.64,0.64,0,0,0,0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({alpha:1,startPosition:14},20).wait(601));

	// logo
	this.instance_2 = new lib.logo_1();
	this.instance_2.setTransform(150.5,0,1,1,0,0,0,0,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({regY:-67.9,scaleX:0.5,scaleY:0.5,x:256.95},24,cjs.Ease.get(1)).wait(657));

	// _300x250
	this.instance_3 = new lib._300x250_1("synched",15);
	this.instance_3.setTransform(-477.2,85.35,0.65,0.65,0,0,0,-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(695));

	// bg
	this.instance_4 = new lib.bgg();
	this.instance_4.setTransform(960,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(695));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,125,1976.2,136.10000000000002);
// library properties:
lib.properties = {
	id: 'C130AB00C1C2D4489D59D433075AB9FA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_02.png", id:"_02"},
		{src:"_03.png", id:"_03"},
		{src:"for_txt.png", id:"for_txt"},
		{src:"_04.png", id:"_04"},
		{src:"strawberry1.png", id:"strawberry1"},
		{src:"chachki.png", id:"chachki"},
		{src:"logo.png", id:"logo"},
		{src:"vaza.png", id:"vaza"},
		{src:"ramka.png", id:"ramka"},
		{src:"packs.png", id:"packs"},
		{src:"bg.jpg", id:"bg"},
		{src:"vinograd.png", id:"vinograd"},
		{src:"pechenie.png", id:"pechenie"},
		{src:"strawberry2.png", id:"strawberry2"}
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
an.compositions['C130AB00C1C2D4489D59D433075AB9FA'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;