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



(lib.saucecup = function() {
	this.initialize(img.saucecup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,101);


(lib.saucepackage = function() {
	this.initialize(img.saucepackage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,179);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.15,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-31.5,115.5,63.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#971A1A","#FF7373","#B12222","#E14646","#C52424"],[0,0.341,0.537,0.714,1],-91.7,-18.8,128.2,28).s().p("Ay1APIAkmXMAlHAF6IgkGXg");
	this.shape.setTransform(25.075,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-38.5,241.2,78.7);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.saucepackage();
	this.instance.setTransform(-119,-179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-179,118,179);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbG9IgcgHIgdgRIgGgKIgOgLIgHgLIgHgNIgDgOIgCg8IAHgPIAEgMIAtgrIAKgFIAQgFIA4gHIAOACIARAGIAOACIAaAQIAJAMIAIAHIARAdIACAPIAGAPIgCAdIgMAnIgTAZIgMAKIgaAQIgOAEIgNAAIgOAEgAhECoIgcgOIgJgXIgFiYIgDgcIAAhKIgDgaIADgdIgIhLIACgVIgCgcIAAg0IgGgwIAPgZIAYgSIBAADIAXgDIBZADIAYAPIAKAYIAAAWIADA1IgDAaIADAYIgDAYIADAcIgDAbIAAAaIgDAZIgFB8IAFAwIgHA2IAAAyIgMAXIgYAOIgXADg");
	this.shape.setTransform(-0.9,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-44.4,25.5,89.19999999999999);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.saucecup();
	this.instance.setTransform(-58,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-50,116,101);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(-0.05,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.7,146.6,25.6);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0.225,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-12.8,213.5,25.700000000000003);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnD9Qg2gngFhDIgdmVIB3gLIAdGTQACAcARAOQAQAOAcgDQAdgCAPgQQAPgQgCgbIgdmTIBygIIAdGVQAFBEgtAuQguAvhOAFIgUAAQg/AAgvghg");
	this.shape.setTransform(-31.9823,9.2518,0.8537,0.8537);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3ioIh3AFIgEhkIFggNIAFBkIh3AEIARG9Ih1AEg");
	this.shape_1.setTransform(33.4058,2.0249,0.8537,0.8537);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah3D8QgugogHhCIgaj+QgHhAAqgyQAtg2BSgJQBTgJA0AqQAxAmAHBEIAFApIhwAMIgFgsQgCgZgQgNQgSgQgeAEQgeADgPAUQgOARACAZIAcEBQADAXASAPQATAQAdgDQAfgEAQgUQAOgRgCgYIgGg4IhAAHIgIhPICsgTIAeEWIhAAHIgUgwQgMAfgeAVQgdAUgnAEIgVABQg+AAgqgkg");
	this.shape_2.setTransform(-66.155,13.0878,0.8537,0.8537);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah0D6QgxgngEhGIgCgcIBsgFIABASQAEBFBAgCQAfgCAPgRQAPgRgCgdQgCgdgYgVQgWgSgzgXQhBgggegZQgtgpgEg4QgDhDAqguQAtgzBQgEQBJgEAxAqQAwApAEBCIAAAWIhpAGIgBgRQgCgdgQgRQgSgSgcACQgbABgOAQQgPAPACAZQABAbAZAUQAVARA5AaQBDAgAeAeQAnAnADA3QAEBEgsAyQguA0hPAEIgPAAQhGAAgtgkg");
	this.shape_3.setTransform(2.5723,5.6396,0.8537,0.8537);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Agfg5IBegCIhFB2Ig4ABg");
	this.shape_4.setTransform(69.9862,-32.5279,0.8537,0.8537);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah+DyQgxgtgChKIgFjuQgBhLAvguQAwgwBTgBQBTgCAxAuQAxAtABBKIAFDuQACBLgvAuQgwAwhUABIgFAAQhPAAgvgsgAgCi7QgdABgQARQgPARAAAcIAED8QABAcAQAQQAQARAcgBQAdgBARgRQAQgRAAgcIgFj8QAAgcgRgQQgQgQgbAAIgCAAg");
	this.shape_5.setTransform(67.725,-1.3456,0.8537,0.8537);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-37.6,166.5,75.30000000000001);


// stage content:
(lib.garlic300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// Layer_3
	this.instance = new lib.Tween10("synched",0);
	this.instance.setTransform(69.75,19.1,0.7771,0.7771);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:53.25,y:27.1,alpha:1},10,cjs.Ease.quadOut).to({startPosition:0},50).wait(1));

	// Layer_2
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(43.9,33.45,0.7771,0.7771,-32.7005,0,0,0,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({alpha:1},10).to({startPosition:0},60).wait(1));

	// logo
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(97.5,57.95,0.6467,0.6467,0,0,0,0.1,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:75.95,alpha:1},9,cjs.Ease.quadOut).to({startPosition:0},110).wait(1));

	// Layer_6
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(87.8,122.05,0.6726,0.6726);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:97.3,alpha:1},10,cjs.Ease.quadOut).to({startPosition:0},100).wait(1));

	// Layer_10
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(110,149.95,0.6726,0.6726);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({x:97.5,alpha:1},10,cjs.Ease.quadOut).to({startPosition:0},90).wait(1));

	// Layer_9
	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(81.7,203.15,0.64,0.64,0,0,0,0.1,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({x:89.2,alpha:1},10,cjs.Ease.quadOut).to({startPosition:0},80).wait(1));

	// Layer_8
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(129.1,222.35,0.651,0.651,90,0,0,0.3,33.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({rotation:0,x:129.15,y:222.3,alpha:1},10,cjs.Ease.quadOut).to({startPosition:0},80).wait(1));

	// Layer_7
	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(296.25,235.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({x:288.75,alpha:1},10,cjs.Ease.quadOut).to({startPosition:0},70,cjs.Ease.quadOut).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.078)").s().p("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");
	this.shape.setTransform(226.0066,196.1462);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// gradient_bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FEFCFF","#ECD7F8","#E3C3F4"],[0,0.341,0.612],-201.1,-160.3,0,-201.1,-160.3,484.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(117.6,96.8,343.4,323.2);
// library properties:
lib.properties = {
	id: '8DFB02FCE36B174DBB8513C7C6663D26',
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/saucecup.png", id:"saucecup"},
		{src:"images/saucepackage.png", id:"saucepackage"}
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
an.compositions['8DFB02FCE36B174DBB8513C7C6663D26'] = {
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