(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"guy_atlas_1", frames: [[0,0,75,116]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.char1 = function() {
	this.initialize(ss["guy_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.char1();
	this.instance.setTransform(0,0,2.0667,1.5517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,155,180), null);


// stage content:
(lib.guy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-135.5,250,1,1,0,0,0,77.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:30.1714,x:-126.4,y:249.95},0).wait(1).to({rotation:60.0514,x:-117.35,y:250},0).wait(1).to({rotation:89.6057,x:-108.4,y:249.95},0).wait(1).to({rotation:118.8514,x:-99.65},0).wait(1).to({rotation:147.7714,x:-90.9,y:250},0).wait(1).to({rotation:176.3829,x:-82.3},0).wait(1).to({rotation:204.6857,x:-73.6},0).wait(1).to({rotation:232.68,x:-65.25,y:249.95},0).wait(1).to({rotation:260.3486,x:-56.8},0).wait(1).to({rotation:287.7086,x:-48.6,y:250},0).wait(1).to({rotation:314.7429,x:-40.45,y:249.95},0).wait(1).to({rotation:341.4686,x:-32.3},0).wait(1).to({rotation:367.8857,x:-24.35,y:250},0).wait(1).to({rotation:393.9943,x:-16.45},0).wait(1).to({rotation:419.7771,x:-8.75,y:249.95},0).wait(1).to({rotation:445.2514,x:-1.05,y:250},0).wait(1).to({rotation:470.4,x:6.6},0).wait(1).to({rotation:495.2571,x:14.05},0).wait(1).to({rotation:519.7714,x:21.5},0).wait(1).to({rotation:543.9943,x:28.8,y:249.95},0).wait(1).to({rotation:567.8914,x:36},0).wait(1).to({rotation:591.48,x:43.15},0).wait(1).to({rotation:614.7429,x:50.2,y:250},0).wait(1).to({rotation:637.7143,x:57.15},0).wait(1).to({rotation:660.3429,x:63.95,y:249.95},0).wait(1).to({rotation:682.68,x:70.75},0).wait(1).to({rotation:704.6914,x:77.35,y:250},0).wait(1).to({rotation:726.3943,x:83.9},0).wait(1).to({rotation:747.7714,x:90.3},0).wait(1).to({rotation:768.8571,x:96.7,y:249.95},0).wait(1).to({rotation:789.6,x:102.95},0).wait(1).to({rotation:810.0514,x:109.15},0).wait(1).to({rotation:830.1771,x:115.2},0).wait(1).to({rotation:849.9943,x:121.2},0).wait(1).to({rotation:869.4857,x:127.1},0).wait(1).to({rotation:888.6857,x:132.9},0).wait(1).to({rotation:907.5429,x:138.55,y:250},0).wait(1).to({rotation:926.1086,x:144.2},0).wait(1).to({rotation:944.3486,x:149.7},0).wait(1).to({rotation:962.28,x:155.1},0).wait(1).to({rotation:979.8857,x:160.45},0).wait(1).to({rotation:997.2,x:165.65},0).wait(1).to({rotation:1014.1714,x:170.8},0).wait(1).to({rotation:1030.8514,x:175.85},0).wait(1).to({rotation:1047.2057,x:180.8},0).wait(1).to({rotation:1063.2514,x:185.65},0).wait(1).to({rotation:1078.9714,x:190.35},0).wait(1).to({rotation:1094.4,x:195,y:249.95},0).wait(1).to({rotation:1109.4857,x:199.6,y:250},0).wait(1).to({rotation:1124.28,x:204.05},0).wait(1).to({rotation:1138.7486,x:208.4},0).wait(1).to({rotation:1152.9086,x:212.75},0).wait(1).to({rotation:1166.7429,x:216.9,y:249.95},0).wait(1).to({rotation:1180.2857,x:220.95,y:250},0).wait(1).to({rotation:1193.4857,x:224.95},0).wait(1).to({rotation:1206.3943,x:228.85},0).wait(1).to({rotation:1218.9771,x:232.7,y:249.95},0).wait(1).to({rotation:1231.2514,x:236.35},0).wait(1).to({rotation:1243.2,x:240,y:250},0).wait(1).to({rotation:1254.8571,x:243.5,y:249.95},0).wait(1).to({rotation:1266.1714,x:246.9},0).wait(1).to({rotation:1277.1943,x:250.25},0).wait(1).to({rotation:1287.8914,x:253.5},0).wait(1).to({rotation:1298.28,x:256.6,y:250},0).wait(1).to({rotation:1308.3429,x:259.7},0).wait(1).to({rotation:1318.0971,x:262.6},0).wait(1).to({rotation:1327.5429,x:265.45},0).wait(1).to({rotation:1336.68,x:268.25},0).wait(1).to({rotation:1345.4914,x:270.85},0).wait(1).to({rotation:1353.9943,x:273.45,y:249.95},0).wait(1).to({rotation:1362.1714,x:275.95},0).wait(1).to({rotation:1370.0571,x:278.35},0).wait(1).to({rotation:1377.6,x:280.55},0).wait(1).to({rotation:1384.8514,x:282.75,y:250},0).wait(1).to({rotation:1391.7771,x:284.85,y:249.95},0).wait(1).to({rotation:1398.3943,x:286.85,y:250},0).wait(1).to({rotation:1404.6857,x:288.75},0).wait(1).to({rotation:1410.6857,x:290.55,y:249.95},0).wait(1).to({rotation:1416.3429,x:292.3,y:250},0).wait(1).to({rotation:1421.7086,x:293.9},0).wait(1).to({rotation:1426.7486,x:295.45},0).wait(1).to({rotation:1431.48,x:296.85,y:249.95},0).wait(1).to({rotation:1435.8857,x:298.15},0).wait(1).to({rotation:1440,x:299.45,y:250},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(11.3,381.2,393.3,-12.399999999999977);
// library properties:
lib.properties = {
	id: 'B2C1E768FAA03347AB4640196334A3F4',
	width: 500,
	height: 500,
	fps: 40,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/guy_atlas_1.png", id:"guy_atlas_1"}
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
an.compositions['B2C1E768FAA03347AB4640196334A3F4'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;