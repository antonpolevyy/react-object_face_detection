(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.sprite = function() {
	this.initialize(img.sprite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1000);


(lib.sprite_mask = function() {
	this.initialize(img.sprite_mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1000);// helper functions:

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


(lib.txt_onlyWith = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArwBDQgOgOgHgRQgHgQAAgUQAAgTAHgQQAHgRAOgNQANgOARgHQARgHAUAAQATAAARAHQARAHANAOQAOANAHARQAHAQAAATQAAAUgHAQQgHARgOAOQgNANgRAHQgRAHgTAAQgoAAgbgbgArQgiQgHAHgEAJQgDAIAAAKQAAALADAIQAEAJAHAHQAHAHAJADQAIAEALAAQAKAAAJgEQAIgDAHgHQAHgHAEgJQADgIAAgLQAAgKgDgIQgEgJgHgHQgOgOgUAAQgVAAgOAOgALfBaIAAhFIgyAAIAABFIguAAIAAizIAuAAIAABDIAyAAIAAhDIAuAAIAACzgAH5BaIAAiGIgsAAIAAgtICGAAIAAAtIgsAAIAACGgAFzBaIAAizIAuAAIAACzgADmBaIgdhlIgcBlIgxAAIgyizIAxAAIAcBwIAghwIAkAAIAgBwIAchwIAyAAIgyCzgAiRBaIAAhFIg9huIA0AAIAgBDIAghDIAzAAIg8BuIAABFgAlXBaIAAizIAuAAIAACGIA9AAIAAAtgAmyBaIg/haIAABaIguAAIAAizIAjAAIBABZIAAhZIAtAAIAACzg");
	this.shape.setTransform(-1.725,18.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_onlyWith, new cjs.Rectangle(-81.9,0,163.8,35.1), null);


(lib.txt_forThat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#791E21").s().p("AwyCNQg6g5AAhUQAAhSA6g5QA6g6BUAAQBTAAA5A6QA7A5AABSQAABTg7A6Qg5A5hTAAQhUAAg6g5gAvuhJQgdAdAAAsQAAAtAdAeQAeAcAsAAQArAAAegcQAdgeABgtQgBgsgdgdQgdgdgsAAQgsAAgeAdgAT9C+IAAkdIhdAAIAAheIEcAAIAABeIhdAAIAAEdgAPuC+IgRg3Ih+AAIgRA3IhoAAIB8l7IB3AAIB9F7gAPEAzIgnh/IglB/IBMAAgAIjC+IAAiSIhrAAIAACSIhhAAIAAl7IBhAAIAACNIBrAAIAAiNIBhAAIAAF7gAAxC+IAAkdIheAAIAAheIEdAAIAABeIhfAAIAAEdgAmlC+IhCh7IgjAAIAAB7IhhAAIAAl7ICYAAQA6AAAnAmQAoAkAAA5QAAAjgSAbQgRAdgeAQIBPCNgAoKgOIA2AAQASAAALgLQAMgMAAgUQAAgSgMgMQgLgNgSAAIg2AAgA28C+IAAl7IDqAAIAABeIiIAAIAAA+ICFAAIAABcIiFAAIAACDg");
	this.shape.setTransform(146.85,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_forThat, new cjs.Rectangle(0,0,293.7,39.6), null);


(lib.text_EndFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAhXACVQgigVgOgmIBIgqQASAsAvAAQAUAAAJgGQAKgGAAgKQgBgIgFgGQgGgFgLgFIgPgFIgagHQgtgNgagYQgbgYAAgqQAAgXAIgSQAIgSARgOQAggcAyAAQApgBAgAUQAfASARAlIhGAqQgIgTgNgIQgMgKgSAAQgQAAgHAGQgIAGAAAJQAAAIAFAFQAFAGAMAGQAMAFAXAHIAVAHQAKADAHADIAQAHIAQAKQARALAJASQAIASAAAZQAAAYgIATQgJATgRAOQgRANgXAHQgWAGgdABQg0gBgigWgAb0CVQgigVgOgmIBIgqQASAsAvAAQAUAAAIgGQAKgGAAgKQABgIgGgGQgFgFgMgFIgPgFIgagHQgtgNgbgYQgZgYgBgqQAAgXAIgSQAIgSAQgOQAigcAwAAQAqgBAfAUQAhASARAlIhHAqQgHgTgNgIQgNgKgTAAQgOAAgIAGQgIAGAAAJQAAAIAFAFQAFAGAMAGQAMAFAWAHIAWAHQAKADAHADIAPAHIARAKQASALAIASQAJASAAAZQAAAYgJATQgIATgSAOQgRANgXAHQgXAGgbABQg1gBgigWgAU3B6QgZgYgMggQgNgeAAgkQAAgjANgfQAMgeAZgZQAZgZAegNQAggMAjABQAlgBAfAMQAeANAZAZQAZAZAMAeQANAfAAAjQAAAkgNAeQgMAggZAYQgZAZgeAMQgfANglAAQhIAAgygygAVyg/QgNANgGAQQgGAQAAASQAAAUAGAQQAGAQANANQANAMAQAGQAPAHATAAQAUAAAPgHQARgGAMgMQANgNAHgQQAFgQAAgUQAAgSgFgQQgHgQgNgNQgZgagnABQglgBgaAagAOmCkIAAlHICDAAQAggBAZAMQAYALANAVQAOAVAAAdQAAAVgIAQQgHAQgQAMQAVAMALASQAKASAAAZQAAAWgIASQgHARgPANQgQANgTAHQgVAGgYAAgAP7BZIA0AAQANAAAIgHQAHgIABgMQgBgNgHgIQgIgHgNAAIg0AAgAP7gkIArAAQAMgBAHgGQAIgHAAgMQgBgMgGgHQgIgHgMAAIgrAAgAIpCkIgOgvIhtAAIgOAvIhbAAIBtlHIBmAAIBsFHgAIGAtIgihwIggBwIBCAAgAikCkIAAlHIDQAAIAABOIh7AAIAAAtIBvAAIAABNIhvAAIAAAwIB+AAIAABPgAlqCkIheiSIAACSIhVAAIAAlHIBVAAIAACKIBaiKIBeAAIhoCfIBtCogAr1CkIAAlHIBVAAIAAFHgAwpCkIAAlHIBVAAIAAD2IBxAAIAABRgA4nCkIAAlHIDLAAIAABRIh2AAIAAA2IB0AAIAABQIh0AAIAABwgA/DCkIAAlHICGAAQAiAAAcAMQAdAMAWAXQAYAYALAdQALAdAAAiQAAAjgLAeQgLAdgYAYQgWAXgdAMQgcALgiAAgA9tBTIAwAAQARABAOgHQAOgFALgLQAKgMAGgPQAFgPAAgTQAAgSgFgPQgGgPgKgMQgLgLgOgGQgOgFgRAAIgwAAgEgkpACkIAAlHICAAAQAZAAAUAHQAWAIAQARQASAQAIAUQAIAVAAAZQAAAagIAUQgIAUgSARQgQAPgWAJQgUAIgZAAIgsAAIAABigEgjVgANIAsAAQAOgBAKgJQAJgJAAgRQAAgPgJgJQgKgKgOgBIgsAAg");
	this.shape.setTransform(250.2,31.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(28).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,-8.9,484.8,216.3);


(lib.sprite_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var loadCount = 0;
		
		var msk = new createjs.Bitmap("images/sprite_mask.png");
		var img = new createjs.Bitmap("images/sprite.jpg");
		msk.image.addEventListener('load', imageLoaded.bind(this));
		img.image.addEventListener('load', imageLoaded.bind(this));
		
		function imageLoaded() {
			loadCount += 1;
			if(loadCount == 2){
				msk.cache(0, 0, 1500, 2000);
		
				img.filters = [
					new createjs.AlphaMaskFilter(msk.cacheCanvas)
				];
				
				img.cache(0, 0, 1500, 2000);
				
				img.scaleX = img.scaleY = 2;
				this.addChild(img);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite_1, new cjs.Rectangle(0,0,1500,2000), null);


(lib.processor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#791E21").s().p("AEkHPIAAiPIpJAAIAACPIjzAAIAAudIDzAAIAACPIJJAAIAAiPID1AAIAAOdg");
	this.shape.setTransform(53.675,46.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.processor, new cjs.Rectangle(0,0,107.4,92.7), null);


(lib.pdfIcon_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(86,22,12,0.4)").s().p("AoEM7QhBgBgrgsQgqgrgChBIAA1EQAChAAqgrQArgrBBgCIMlAAQAjAAAYAZIEnEoQAaAZAAAiIAARgQgDBBgqArQgrAshAABg");
	this.shape.setTransform(98.1,82.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pdfIcon_shadow, new cjs.Rectangle(0,0,198.6,202.5), null);


(lib.PDF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB504D").s().p("AkGGlQghgBgWgVQgWgWgBgiIAAquQABggAWgXQAWgVAhgBIGZAAQASAAANANICWCWQANANAAASIAAI5QgCAigVAWQgWAVghABgAknl4QgOAOgBATIAAKuQABAVAOANQANAOAUABIINAAQAUgBAOgOQANgNAAgVIAAo5QAAgGgDgEIiXiWQgEgEgFAAImZAAQgUAAgNAOg");
	this.shape.setTransform(96.9498,83.767,1.9897,1.9897);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB504D").s().p("AjOAPQgHAAgEgFQgEgEAAgGQAAgGAEgEQAEgEAHAAIGdAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAg");
	this.shape_1.setTransform(96.9717,136.1846,1.9897,1.9897);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB504D").s().p("AjOAPQgHAAgEgFQgEgEAAgGQAAgGAEgEQAEgEAHAAIGdAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAg");
	this.shape_2.setTransform(96.9717,120.2346,1.9897,1.9897);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB504D").s().p("AihCdQgIgIACgLQADgPAZgRQAZgRApgRQAQgcAMgdQAPgiAJgeQgOghgEgbQgDgcAIgPQAGgKALAAQANAAAFAIQAHAHADALQACAKAAAJQAAARgFAWQgEAWgHAXQAIARAMAQQAOAUATARQAbgEAbgBQAsAAAPAQQAHAKgDAMQgCAEgGAFQgGAFgQAAQgNABgXgIQgYgHgdgaQgYAEgZAHQgYAGgWAIQgNAYgQAWQgQAVgQAOQgRANgQAAIgBAAQgLAAgIgGgAiIBwQgWAPgDANQgBAHAGAFQADADAFAAQANAAASgUQATgTAUgjQgkAPgWAQgABkAnQgTAAgZAEQAMAKAPAJQAPAIASAFQALADAJgEQAIgEACgIQADgRgUgEQgIgCgOAAIgHAAgAgXAVQgIASgLAWIAogMQAWgGAWgEQgRgRgOgTQgKgNgHgOIgRAtgAgdiVQgGAKACAYQACAYANAhQAIgXAEgUQADgTAAgMQAAgYgOAAQgIABgEAGg");
	this.shape_3.setTransform(97.2985,68.1854,1.9897,1.9897);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBE1E1").s().p("AkNGTQgXgBgPgPQgPgPAAgWIAAq7QAAgWAPgPQAPgPAXgBIGhAAQAJAAAIAHICWCWQAIAHAAAKIAAJCQgBAWgOAPQgQAPgWABg");
	this.shape_4.setTransform(96.6678,83.3858,1.9897,1.9897);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PDF, new cjs.Rectangle(-0.7,0,166.1,167.6), null);


(lib.goldGradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(253,241,122,0)","#FDF17A","#FDF279","rgba(252,242,121,0)"],[0,0.376,0.635,1],-205,0,205.1,0).s().p("EggCA2iMAAAhtDMBAFAAAMAAABtDg");
	this.shape.setTransform(205.05,349.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.goldGradient, new cjs.Rectangle(0,0,410.1,698.1), null);


(lib.doc_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ACekCIA7AAIAzAAADZjHIAAA6IAzAAACejHIAAA6IA7AAIAAA7IAAA6IAAABIAAA5IAAABIAAA6IAzAAACejHIA7AAIAzAAACekCIAAA7ADZkCIAAA7ADygXIAagBACegXIA7AAIAZAAACegYIAAABIAAA5IA7AAIAZAAIAaAAACehSIAAA6IA7AAIAZABACehSIA7AAIAzAAACeAjIA7AAIAZgBACeBdIA7AAIAAA7IAAA6IAAAxACeAjIAAA6IAAA7IA7AAIAzAAACeAiIAAABACeiNIAAA7AApkCIA7AAIAAA7IAAA6IAAA7IA6AAAhLkCIA6AAIAAA7IAAA6IA6AAIA7AAIA6AAAhLiNIA6AAIAAA7IAAA6IAAABIAAA5IAAABIAAA6IA6AAIA7AAIAAA7IAAA6IAAAxAhLjHIAAA6IAAA7IA6AAIA6AAIAAA6IAAABIA7AAIAAA5IAAABIAAA6IA6AAAhLjHIA6AAIA6AAIAAA6IAAA7IA7AAIAAA6IAAABIA6AAAApjHIA7AAIA6AAAApkCIAAA7AhLkCIAAA7AgRkCIA6AAAiHkCIAAA7IAAA6IAAA7IAAA6IA8AAIA6AAIA6AAIA7AAIA6AAAkLiNICEAAIA8AAAkLjHICEAAIA8AAAkLkCICEAAIA8AAAifgXIAYAAIAAA5IAAABIAAA6IA8AAIA6AAIAAA7IAAA6IAAAxAifgXIAYgBIAAABIA8AAIAAA5IA6AAIA6AAIA7AAIA6AAAifAiIAYABIA8AAIA6AAIA6AAIA7AAIA6AAAifAiIAYAAIA8AAIAAABIAAA6IAAA7IA6AAIA6AAIAAA6IA7AAIA6AAIA7AAIAzAAAkLBdICEAAIAAA7IAAA6IAAAxAkLhSICEAAIA8AAIAAA6IAAABIA6AAIA6AAIAAA5IAAABIAAA6IAAA7IA7AAIA6AAIAAA6IAAAxAkLgYIBsABAkLAiIBsAAAApDSIAAAxAhLDSIA6AAIA6AAAhLDSIAAAxAhLCYIAAA6AkLCYICEAAIA8AAAkLDSICEAAIA8AAABkkCIA6AA");
	this.shape.setTransform(28.4,35.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#237B4B","#409566"],[0,1],-16.5,19.8,0,-16.5,19.8,62.8).s().p("AjeFTQgWgBgPgPQgPgPgBgWIAAo7QABgWAPgPQAPgPAWgBIGIAAIABABIAAAAIAaAaIBPBPIgBAAIAAC/IABAAIAAFHIgBAAQgBAWgOAPQgPAPgWABgADYFKIAAgwIA0AAIg0AAgACeFKIAAgwgABjFKIAAgwgAgREaIA6AAIAAAwIAAgwIA6AAIA7AAIA6AAIAAg7IAAg7IAAg6IAAAAIAAg6IAaAAIAagBIgaABIgagBIAAg5Ig6AAIAAg7IAAA7Ig7AAIAAg7IA7AAIg7AAIAAg6IAAA6Ig6AAIA6AAIAAA7Ig6AAIAAg7IAAA7Ig6AAIAAg7IAAA7Ig6AAIAAg7IAAA7Ig8AAIAAg7IA8AAIg8AAIAAg6IAAg7IiEAAICEAAIAAA7IiEAAICEAAIAAA6IiEAAICEAAIAAA7IiEAAICEAAIAAA5IgYABIAYAAIgYAAIAYgBIAAABIAAA6IgYAAIAYAAIAAAAIgYAAIAYAAIAAA6IiEAAICEAAIAAA7IiEAAICEAAIAAA7IiEAAICEAAIA8AAIAAAwIAAgwgAgRFKIAAgwgAiHFKIAAgwgAEMDfIg0AAgAEMCkIg0AAgADYBqIAaAAIAaAAIgaAAIgaAAIAaAAgAifBqIhsAAgAifAwIhsgBgADYgKIA0AAIg0AAIAAg7IAAA7gAEMhFIg0AAIAAg6IA0AAIg0AAIAAg7IA0AAIg0AAIg6AAIg7AAIg6AAIg6AAIg6AAIA6AAIAAA7IAAg7IA6AAIA6AAIAAA7IAAg7IA7AAIAAA7IA6AAIAAA6Ig6AAIAAg6Ig7AAIA7AAIAAA6IA6AAgAgRhFIA6AAIAAg6IA6AAIg6AAIAAg7IAAA7Ig6AAIg6AAIAAg7Ig8AAIA8AAIAAA7Ig8AAIA8AAIAAA6IAAg6IA6AAIAAA6IAAg6IA6AAIAAA6Ig6AAIg6AAgACrkdQAAAWAPAPQAPAPAXABIAkAAIhZhbgADYAvIAaABIgaAAgADYAvgACeh/IAAg7IA6AAIAAA7gACeh/gAhLh/gACei6gAhLi6g");
	this.shape_1.setTransform(28.4,28.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_2.setTransform(47.125,53.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgdAdIAAg5IA7AAIAAA5g");
	this.shape_3.setTransform(17.8,53.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_4.setTransform(23.675,53.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_5.setTransform(29.525,53.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_6.setTransform(35.4,53.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_7.setTransform(41.275,53.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAeIAAg7IA5AAIAAA7g");
	this.shape_8.setTransform(47.125,47.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIg5AAIAAAAIA5AAIAAAAIAAA5g");
	this.shape_9.setTransform(47.125,42.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIg5AAIAAAAIA5AAIAAAAIAAA5g");
	this.shape_10.setTransform(47.125,36.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_11.setTransform(47.125,30.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_12.setTransform(35.4,30.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IAAAAIA5AAIAAAAIg5AAIA5AAIAAA5gAAdgcg");
	this.shape_13.setTransform(41.275,36.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_14.setTransform(41.275,30.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAeIAAg7IA5AAIAAA7g");
	this.shape_15.setTransform(41.275,47.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAeIAAg7IA5AAIAAA7g");
	this.shape_16.setTransform(35.4,47.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIg5AAIAAAAIA5AAIAAAAIAAA5g");
	this.shape_17.setTransform(35.4,42.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIg5AAIAAAAIA5AAIAAAAIAAA5g");
	this.shape_18.setTransform(35.4,36.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IAAAAIA5AAIAAAAIg5AAIA5AAIAAA5gAAdgcg");
	this.shape_19.setTransform(41.275,42.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_20.setTransform(17.8,47.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgdAdIAAg5IAAAAIA7AAIAAAAIg7AAIA7AAIAAA5gAAegcg");
	this.shape_21.setTransform(17.8,36.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgdAdIAAg5IA7AAIAAA5gAgdgcIAAAAIA7AAIAAAAg");
	this.shape_22.setTransform(17.8,42.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgdAdIAAg5IA7AAIAAA5g");
	this.shape_23.setTransform(17.8,30.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_24.setTransform(23.675,30.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAeIAAg7IA5AAIAAA7g");
	this.shape_25.setTransform(23.675,47.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIg5AAIAAAAIA5AAIAAAAIAAA5g");
	this.shape_26.setTransform(23.675,42.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIg5AAIAAAAIA5AAIAAAAIAAA5g");
	this.shape_27.setTransform(23.675,36.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_28.setTransform(29.525,30.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAeIAAg7IA5AAIAAA7g");
	this.shape_29.setTransform(29.525,47.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IAAAAIA5AAIAAAAIg5AAIA5AAIAAA5gAAdgcg");
	this.shape_30.setTransform(29.525,36.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#237B4B","#409566"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdIAAg5IAAAAIA5AAIAAAAIg5AAIA5AAIAAA5gAAdgcg");
	this.shape_31.setTransform(29.525,42.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAIA1QgVgBgPgPQgPgPgBgWIAAglIBZBagAgsgzIAAAAIAAgBIAbAbg");
	this.shape_32.setTransform(49.925,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.doc_3, new cjs.Rectangle(0.7,-5.3,55.5,67.9), null);


(lib.doc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.7,1,1).p("AjmDJIEDAAAjmBDIHNAAAjmCGIHNAAAjmAAIHNAAAjmiFIHNAAAjmhCIHNAAAjmjIIHNAA");
	this.shape.setTransform(26.925,38.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4977BD","#2F5FA9"],[0,1],18.4,-20.1,0,18.4,-20.1,59.1).s().p("AjeFTQgWgBgPgPQgPgPgBgWIAAo7QABgWAPgPQAPgPAWgBIGIAAIAAABIAOANIBcBcIgBABIAAIFQgBAWgOAPQgPAPgXABgAAgD5IkDAAgADrC2InOAAgADrBzInOAAgADrAwInOAAgADrgSInOAAgADrhVInOAAgADriYInOAAgACqkdQABAWAPAPQAPAPAWABIAlAAIhahbg");
	this.shape_1.setTransform(26.575,33.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIA1QgVgBgPgPQgQgPAAgWIAAglIBZBagAgsgzIAAgBIANAOg");
	this.shape_2.setTransform(48.1,5.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.doc_2, new cjs.Rectangle(-1,-0.2,55.2,67.8), null);


(lib.doc_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAOAPQAPAPABAVQgBAWgPAPQgOAPgWAAQgVAAgPgPg");
	this.shape.setTransform(28.4,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD780D").s().p("AkXCcQgWAAgPgPQgOgPgBgVIAAgWICRiQIBkBjIDBjBIDgDfIAAAlQAAAVgPAPQgOAOgWABg");
	this.shape_1.setTransform(41.55,39.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#62A0FF","#346ABD"],[0,1],-0.2,-17.8,-0.2,22).s().p("AlLi1QABgWAOgOQAPgPAWAAIIvAAQAWAAAOAPQAPAOAAAWIAAGPIjgjfIjBDBIhkhkIiRCRgAiohzQgOAPAAAWQAAAWAOAOQAQAPAWABQAVgBAPgPQAPgOAAgWQAAgWgPgPQgPgPgVAAQgWAAgQAPg");
	this.shape_2.setTransform(41.55,24.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.doc_1, new cjs.Rectangle(8.4,1,66.3,54), null);


(lib.cta_lightPass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(13,206,249,0)","#0DCEF9","rgba(13,206,249,0)"],[0.129,0.51,0.871],-150.6,0,150.6,0).s().p("A3hVBMAAAgqBMAvDAAAMAAAAqBg");
	this.shape.setTransform(150.6,134.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_lightPass, new cjs.Rectangle(0,0,301.2,269), null);


(lib.cta_learnMore = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjxCyIAlhRIABgDIAAgDIhIizQAAgBAAAAQAAgBAAAAQAAgBABAAQABAAAAAAIAuAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABIArCEIAsiEQABgDAEAAIAoAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIhmEGIgCACIgDABIgqADQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBgAH2BfQgTgIgLgNQgMgOgFgSQgFgRAAgTQAAgTAGgSQAGgTAMgOQAMgOARgIQARgJAWABQAVAAAPAHQAQAIAJAMQAKAMAFAOQAEAOAAAOIAAAPIgCAJQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBABIh3ABQAAAKAEAJQAEAJAHAHQAHAGALAEQALAFAPAAQAaAAAWgKQABAAAAAAQABgBAAABQAAAAAAAAQAAABAAABIAAAgQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgLAGgOADQgOACgUAAQgaABgSgKgAIKg2QgHAEgFAFQgFAGgDAIIgEANIBKAAIAFAAIAAgDIgBgKQgCgHgEgFQgEgGgIgEQgHgEgLgBQgKABgIADgAEyBfQgSgIgMgNQgLgOgFgSQgFgRAAgTQAAgTAGgSQAGgTALgOQAMgOARgIQARgJAWABQAWAAAPAHQAPAIAKAMQAKAMAEAOQAEAOAAAOIAAAPIgBAJQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABIh4ABQABAKADAJQAEAJAHAHQAIAGAKAEQALAFAPAAQAaAAAXgKQAAAAABAAQAAgBAAABQABAAAAAAQAAABAAABIAAAgQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgMAGgNADQgOACgUAAQgaABgTgKgAFHg2QgHAEgGAFQgFAGgDAIIgEANIBKAAIAGAAIAAgDIgCgKQgCgHgEgFQgEgGgHgEQgIgEgKgBQgLABgHADgAobBhIAAjRIhQAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAFgkQABgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIDCAAQADAAAAAEIAEAjQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAIhPAAIAADRQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAIgoAAIAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBgACHBlQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIgCi5QAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAkAAQADAAACAEIACAKIACANQAKgMAQgJQAQgKAUABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAAqQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgVgBgQAHQgQAGgHAJIAAB8QAAABAAABQgBAAAAABQAAAAgBAAQgBABgBAAgAAeBlQAAAAgBgBQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAiUIgXAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgiQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXAAIAAgJQAAgOACgMQADgKAEgKQAIgPANgKQAOgJAXAAIAKAAIAJADIACABIAAACIAAAiQAAABAAAAQAAABgBAAQAAABgBgBQAAAAgBAAIgMgBQgMAAgHAIQgHAHAAAVIAAAMIAjAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAAiQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgjAAIAACUIAAADIgDABgAl/BlQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIgCi5QAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAlAAQADAAABAEIADAKIABANQAKgMAQgJQAQgKAUABQABAAABAAQABAAAAAAQAAAAABABQAAAAAAABIAAAqQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAgBAAQgVgBgQAHQgQAGgHAJIAAB8QAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape.setTransform(130.6625,43.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_learnMore, new cjs.Rectangle(66.5,12.2,129.9,52.8), null);


(lib.cta_hoverBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000E6").s().p("AsdHMQi/AAiHiHQiGiGAAi/IAAAAQAAi+CGiGQCHiHC/AAIY7AAQC/AACGCHQCHCGAAC+IAAAAQAAC/iHCGQiGCHi/AAg");
	this.shape.setTransform(125.8,45.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_hoverBack, new cjs.Rectangle(0,0,251.6,92), null);


(lib.AdobeLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHA5QgXAAgLgQQgKgPAAgYQAAgZAKgQQALgRATAAQAUABAIANQAHAOAAAQIAAAKIgBAGQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgVABIgZAAQgBANAGAHQAGAIAMAAQAJAAAIgDQABgBAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAASQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQgJAEgKAAIgDAAgAgHgcQgDAGgBAIIASAAIAGAAIAAgDQABgGgDgFQgDgGgGAAQgGAAgDAGg");
	this.shape.setTransform(1279.1799,1058.9288,1.3494,1.3494);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBJQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIAAiRQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAYAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAnQAEgCAHABQASgBAKANQAMAOABAZQgBAegPAQQgOAPgVABQgMAAgOgEgAgMgMIAABBIAEABQAIgBAGgIQAGgJACgUQgBgQgFgHQgGgGgGAAIgIABg");
	this.shape_1.setTransform(1267.2302,1056.1905,1.3494,1.3494);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAoQgKgQAAgYQAAgZALgPQAKgQAUAAQATAAAKAPQAKAOAAAbQAAAagKAQQgKAPgUAAQgVAAgJgRgAgNAAQAAAPADAKQADAJAHAAQAOAAAAgiQAAgPgCgJQgEgJgHAAIgBAAQgNAAAAAhg");
	this.shape_2.setTransform(1254.6651,1058.9254,1.3494,1.3494);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA/QgNgOAAgdQAAgYANgQQANgQAWAAIAEAAIAAgnQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAYAAIABABIAACAIABAPQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQgOAIgSAAQgVAAgMgOgAANA0IAAhAIgFgCQgIAAgGAJQgHAIAAAQQAAASAGAIQAGAIAJAAQADAAACgBg");
	this.shape_3.setTransform(1241.8589,1056.1905,1.3494,1.3494);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBGIAdh/IABgFIAAgHQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAdAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAjCLQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAIgYAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgIgjIgfAAIgHAjQgBABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgWAAIgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAgAgFgSIgGAdIAVAAIgGgcIgEgcIgBAAIgEAbg");
	this.shape_4.setTransform(1229.3728,1056.6376,1.3494,1.3494);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUCAIgfhRIhPAAIBKiuIBrD/g");
	this.shape_5.setTransform(1255.8459,1018.9387,1.3494,1.3494);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhUjKICpAAIipGVg");
	this.shape_6.setTransform(1234.1363,1009.3256,1.3494,1.3494);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUjKICpAAIAAGVg");
	this.shape_7.setTransform(1272.9525,1009.3256,1.3494,1.3494);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AdobeLogo, new cjs.Rectangle(1222.7,982,61.700000000000045,84.70000000000005), null);


(lib.acrobatLogoPDF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("A16VYMAAAgqvMAr1AAAMAAAAqvgA0FTjMAoLAAAMAAAgnFMgoLAAAg");
	this.shape.setTransform(140.25,136.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#E6E8E6"],[0.141,1],-96.1,0,96.2,0).s().p("AuzOWQgWgUgKgcQgKgdAGgdQAQhXCThoQCThoDzhgQBZidBKizQBQi9A+i8QhVi6gViqQgWimAwhTQAQgbAbgQQAbgQAfgBQBkAAAvBfQAiBGAABlQAAC4hjE3QA0BgBEBfQBYB6BsBmQCagbCkgDQB+AABXAYQBXAYArAtQAXAaAGAjQAGAigLAgQghBUiLAAQhnAAhwgpQigg6iWiIQiOAZiUAoQiFAjiKAvQiFDwiDCOQidCriCAAIgHAAQg+AAgwgogAsjKOQiCBcgNBJQgEAUAGATQAHATAQANQAVAUAdgBQBJAABuh1QBuh0B2jLQjVBZiCBcgAJNDhQiAACiDAYQCrCSCyAqQBCAQA0gWQA0gWAKgxQAJgwgbghQgbggg3gMQg6gMhhAAIgPAAgAiMB4QguBxhCB8QB7gpBwgeQCKgkB+gXIAAgBIABAAQhjhhhRhyQg5hOgxhWQgrB+g7CPgAiRuMQgSALgKATQglBAANCIQAOCbBMCxQAqiFAYh0QAWhxAAhJQAAhDgWgkQgXgkgpAAQgWABgSALg");
	this.shape_1.setTransform(142.577,135.5819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(22,15,13,0.851)","#160F0D"],[0,0.769],-26,-41.7,0,-26,-41.7,167.7).s().p("A0FTjMAAAgnFMAoLAAAMAAAAnFg");
	this.shape_2.setTransform(140.25,136.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFFFF").s().p("A16VYMAAAgqvMAr1AAAMAAAAqvg");
	this.shape_3.setTransform(140.25,136.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.acrobatLogoPDF, new cjs.Rectangle(0,0,280.5,273.5), null);


(lib.txt_combine_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhAyAnPMBImhObQgIgIbtAWQN2AKN4AMIBsN7MhERA/8g");
	mask.setTransform(1090.025,547.003);

	// Layer_1
	this.instance = new lib.sprite_1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_combine_3, new cjs.Rectangle(0,0,0,0), null);


(lib.txt_combine_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKeAwuMBTshhPMA9ggAMQDxScAAAMMhVkBOzg");
	mask.setTransform(666.875,486.35);

	// Layer_1
	this.instance = new lib.sprite_1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_combine_2, new cjs.Rectangle(0,0,0,0), null);


(lib.txt_combine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg/ZA8YMAAAhPXMApXgpYMBVcAAAIgNIKQgVNCAHgIMhnoBjrg");
	mask.setTransform(320.3875,430.975);

	// Layer_1
	this.instance = new lib.sprite_1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_combine_1, new cjs.Rectangle(0,0,0,0), null);


(lib.text_gold_PDF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egr1AXBUAABgj9gACAABQgCABRg3XIQ+2sMA1QAAAQADQHgEABUgADAACgr0Ay3Ugr0Ay3AAAAADMAABgj9g");
	mask.setTransform(252.3512,1527.85);

	// Layer_1
	this.instance = new lib.sprite_1();
	this.instance.parent = this;
	this.instance.setTransform(750,1000,1,1,0,0,0,750,1000);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_gold_PDF, new cjs.Rectangle(0,0,0,0), null);


(lib.text_gold_LIKEA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhXWA4RIDIxhMBXghf8MBKtAAAIJYTtMhcgBesg");
	mask.setTransform(491.125,1658.35);

	// Layer_1
	this.instance = new lib.sprite_1();
	this.instance.parent = this;
	this.instance.setTransform(750,1000,1,1,0,0,0,750,1000);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg1wgU5QGmgeLEgqQWIhUWUg8QWVg9OXGhQEgCCDJCiQBlBRAsA3MgmbAkMUAAFAAJgjvAAEQx5ACx5AAg");
	mask_1.setTransform(173.775,2017.6163);

	// Layer_5
	this.instance_1 = new lib.sprite_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(569.95,1156.05,0.9413,1,0,0,0,750,1000);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_gold_LIKEA, new cjs.Rectangle(0,0,0,0), null);


(lib.text_gold_BOSS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhR4ArJMBaUhb5MBI1gBQIAoR1MhKFBSMg");
	mask.setTransform(982.275,1748.375);

	// Layer_1
	this.instance = new lib.sprite_1();
	this.instance.parent = this;
	this.instance.setTransform(750,1000,1,1,0,0,0,750,1000);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg6cAVGQhQAAAAhQMAAAgnrQAAhQBQAAMB05AAAQBQAAAABQMAAAAnrQAABQhQAAg");
	mask_1.setTransform(776.225,2051.475);

	// Layer_5
	this.instance_1 = new lib.sprite_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(620.9,1126,0.964,1,0,0,0,749.9,1000);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_gold_BOSS, new cjs.Rectangle(0,0,0,0), null);


(lib.process_PDF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_127 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// processor (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("EAKDAyEIAAk7I0KAAIAAE7IoVAAIAA/4IIVAAIAAE8IUKAAIAAk8IIaAAIAAf4g");
	var mask_graphics_14 = new cjs.Graphics().p("EAKDAxpIAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_15 = new cjs.Graphics().p("EAKDAwaIAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE7IUKAAIAAk7IIaAAIAAf3g");
	var mask_graphics_16 = new cjs.Graphics().p("EAKDAuVIAAk6I0KAAIAAE6IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_17 = new cjs.Graphics().p("EAKDArcIAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_18 = new cjs.Graphics().p("EAKDAnuIAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_19 = new cjs.Graphics().p("EAKDAjLIAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_20 = new cjs.Graphics().p("AKDdzIAAk7I0KAAIAAE7IoVAAIAA/2IIVAAIAAE7IUKAAIAAk7IIaAAIAAf2g");
	var mask_graphics_21 = new cjs.Graphics().p("AKDYbIAAk7I0KAAIAAE7IoVAAIAA/2IIVAAIAAE7IUKAAIAAk7IIaAAIAAf2g");
	var mask_graphics_22 = new cjs.Graphics().p("AKDT4IAAk7I0KAAIAAE7IoVAAIAA/2IIVAAIAAE7IUKAAIAAk7IIaAAIAAf2g");
	var mask_graphics_23 = new cjs.Graphics().p("AKDQJIAAk6I0KAAIAAE6IoVAAIAA/2IIVAAIAAE8IUKAAIAAk8IIaAAIAAf2g");
	var mask_graphics_24 = new cjs.Graphics().p("AKDP8IAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_25 = new cjs.Graphics().p("AKDP8IAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_26 = new cjs.Graphics().p("AKDP8IAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");
	var mask_graphics_27 = new cjs.Graphics().p("AKDP8IAAk7I0KAAIAAE7IoVAAIAA/3IIVAAIAAE8IUKAAIAAk8IIaAAIAAf3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:0.3299,y:320.3537}).wait(1).to({graphics:mask_graphics_14,x:0.3299,y:317.7073}).wait(1).to({graphics:mask_graphics_15,x:0.3299,y:309.768}).wait(1).to({graphics:mask_graphics_16,x:0.3299,y:296.5359}).wait(1).to({graphics:mask_graphics_17,x:0.3299,y:278.0109}).wait(1).to({graphics:mask_graphics_18,x:0.3299,y:254.193}).wait(1).to({graphics:mask_graphics_19,x:0.3299,y:225.0823}).wait(1).to({graphics:mask_graphics_20,x:0.3299,y:190.6787}).wait(1).to({graphics:mask_graphics_21,x:0.3299,y:156.2752}).wait(1).to({graphics:mask_graphics_22,x:0.3299,y:127.1645}).wait(1).to({graphics:mask_graphics_23,x:0.3299,y:103.3466}).wait(1).to({graphics:mask_graphics_24,x:0.3299,y:67.6894}).wait(1).to({graphics:mask_graphics_25,x:0.3299,y:41.2252}).wait(1).to({graphics:mask_graphics_26,x:0.3299,y:25.3466}).wait(1).to({graphics:mask_graphics_27,x:0.3299,y:20.0537}).wait(29).to({graphics:null,x:0,y:0}).wait(72));

	// tx: FOR THAT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq1BbQglglABg2QgBg1AlglQAmglA2AAQA2AAAlAlQAmAlgBA1QABA2gmAlQglAlg2AAQg2AAgmglgAqIguQgTASAAAcQAAAdATATQATASAcAAQAdAAASgSQAUgTAAgdQAAgcgUgSQgSgTgdAAQgcAAgTATgAM4B7IAAi4Ig8AAIAAg9IC3AAIAAA9Ig8AAIAAC4gAKIB7IgKgkIhRAAIgLAkIhEAAIBRj1IBNAAIBQD1gAJuAhIgZhSIgYBSIAxAAgAFhB7IAAhfIhFAAIAABfIg+AAIAAj1IA+AAIAABbIBFAAIAAhbIA+AAIAAD1gAAgB7IAAi4Ig8AAIAAg9IC2AAIAAA9Ig8AAIAAC4gAkPB7IgrhPIgWAAIAABPIg+AAIAAj1IBhAAQAmAAAZAZQAZAXAAAlQAAAWgLASQgKASgUALIAyBbgAlQgJIAiAAQAMAAAIgHQAHgIAAgMQAAgMgHgIQgIgIgMAAIgiAAgAuyB7IAAj1ICWAAIAAA9IhXAAIAAAoIBVAAIAAA7IhVAAIAABVg");
	this.shape.setTransform(-0.4,18.525);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13).to({_off:false},0).to({_off:true},43).wait(72));

	// Layer_15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_56 = new cjs.Graphics().p("A1aMnIAA5fMAq1AAAIAAZfg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A1aMwIAA5fMAq1AAAIAAZfg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A1aMwIAA5fMAq1AAAIAAZfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_1_graphics_56,x:-0.9786,y:-82.55}).wait(11).to({graphics:mask_1_graphics_67,x:-0.9786,y:-40.2946}).wait(13).to({graphics:mask_1_graphics_80,x:-0.9786,y:30.0054}).wait(48));

	// Layer_16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AssMmQg6g5AAhUQAAhUA6g4QA6g6BUAAQBTAAA5A6QA7A5AABTQAABTg7A6Qg5A5hTAAQhUAAg6g5gAroJPQgdAdAAAtQAAAtAdAeQAeAcAsAAQArAAAegcQAdgeAAgtQAAgtgdgdQgdgdgsAAQgsAAgeAdgAPnNXIAAkeIheAAIAAheIEdAAIAABeIheAAIAAEegALoNXIgQg3Ih+AAIgRA3IhpAAIB9l8IB3AAIB9F8gAK/LMIgniBIglCBIBMAAgAEvNXIAAjNIhcCZIgKAAIhbiYIAADMIhhAAIAAl8IBhAAIBgCjIBhijIBhAAIAAF8gAixNXIhCh7IgjAAIAAB7IhhAAIAAl8ICYAAQA6AAAnAmQAoAkAAA5QAAAjgSAcQgRAcgeARIBOCNgAkWKKIA2AAQASAAALgLQAMgMAAgUQAAgSgMgMQgLgNgSAAIg2AAgAykNXIAAl8IDpAAIAABeIiIAAIAAA+ICFAAIAABdIiFAAIAACDgAj1CiQgqglAAg8IAAj+IBhAAIAAD1QAAAwA2gBQA1ABAAgwIAAj1IBgAAIAAD+QAAA8gqAlQgpAkhCAAQhDAAgqgkgAqsCOQg4g5AAhVQAAhUA4g4QA4g5BWAAQA0AAAsAYQAsAZAZAqIhUAvQgYgrg5AAQgtAAgcAdQgcAcAAAtQAAAuAcAdQAcAcAtAAQA5AAAYgsIBUAxQgZAqgsAYQgsAYg0AAQhVAAg5g4gAyKCNQg6g5AAhUQAAhTA6g5QA6g5BUAAQBTAAA5A5QA7A6AABSQAABTg7A6Qg5A5hTAAQhUAAg6g5gAxGhIQgdAcAAAsQAAAtAdAeQAeAcAsAAQArAAAegcQAdgeAAgtQAAgsgdgcQgdgegsAAQgsAAgeAegAWrC+IAAkdIheAAIAAheIEdAAIAABeIheAAIAAEdgASqC+IiGi+IAAC+IhhAAIAAl7IBLAAICGC+IAAi+IBhAAIAAF7gAJtC+IAAl7IDyAAIAABbIiRAAIAAA1ICDAAIAABYIiDAAIAAA4ICTAAIAABbgAGcC+IAAjMIhcCYIgKAAIhciXIAADLIhhAAIAAl7IBhAAIBhCjIBhijIBgAAIAAF7gA5pC+IAAl7ICbAAQBOAAA1A3QA1A3AABPQAABRg1A3Qg1A2hOAAgA4FBgIA3AAQAnAAAZgaQAZgbAAgrQAAgqgZgbQgZgagnAAIg3AAgAJEoKQg4g5AAhVQAAhVA4g4QA4g5BWAAQAzAAAsAZQAsAYAZAqIhUAvQgYgrg4AAQgtAAgdAdQgbAcAAAuQAAAvAbAcQAcAcAuAAQA5AAAXgsIBUAxQgYAqgsAYQgsAYg0AAQhWAAg4g4gAQanaIAAkeIheAAIAAheIEdAAIAABeIheAAIAAEegADFnaIAAl8IDxAAIAABbIiQAAIAAA1ICCAAIAABZIiCAAIAAA4ICTAAIAABbgAiInaIAAl8IDoAAIAABeIiHAAIAAA+ICFAAIAABdIiFAAIAACDgAlGnaIhDh7IgiAAIAAB7IhhAAIAAl8ICXAAQA6AAAoAmQAnAkAAA5QAAAjgRAcQgRAcgeARIBOCNgAmrqnIA1AAQASAAAMgLQALgMAAgUQAAgSgLgNQgMgLgSAAIg1AAgAtinaIAAl8IDxAAIAABbIiQAAIAAA1ICCAAIAABZIiCAAIAAA4ICTAAIAABbgAzYnaIAAl8ICUAAQA5AAAnAmQAnAlAAA6QAAA6gnAlQgnAmg5AAIgzAAIAABygAx3qoIAzAAQAQAAALgLQALgMAAgSQAAgRgLgMQgLgLgQAAIgzAAg");
	this.shape_1.setTransform(-0.448,18.9439,0.645,0.645);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(56).to({_off:false},0).wait(72));

	// tx: FOR THAT
	this.instance = new lib.txt_forThat();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,18.5,0.645,0.645,0,0,0,146.9,19.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},29).wait(91));

	// processor
	this.instance_1 = new lib.processor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,538.9,2.2008,2.2008,0,0,0,53.8,46.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({y:20.2},14,cjs.Ease.quadInOut).wait(101));

	// graph
	this.instance_2 = new lib.doc_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.6,-533.35,1.9603,1.9603,48.5178,0,0,27.9,33.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regX:41.6,regY:28,scaleX:1.96,scaleY:1.96,rotation:38.9307,x:199.85,y:-452.25},0).wait(1).to({scaleX:1.9597,scaleY:1.9597,rotation:29.9848,x:163.15,y:-388.95},0).wait(1).to({scaleX:1.9595,scaleY:1.9595,rotation:22.6822,x:132.65,y:-337.4},0).wait(1).to({scaleX:1.9593,scaleY:1.9593,rotation:17.2221,x:109.55,y:-298.85},0).wait(1).to({scaleX:1.9592,scaleY:1.9592,rotation:13.3654,x:93.1,y:-271.6},0).wait(1).to({regX:27.8,regY:33.5,scaleX:1.9591,scaleY:1.9591,rotation:10.7909,x:53.6,y:-248},0).wait(1).to({regX:41.6,regY:28,rotation:10.6894,x:81.75,y:-254.1},0).wait(1).to({scaleX:1.9592,scaleY:1.9592,rotation:10.5906,x:81.25,y:-254.7},0).wait(1).to({scaleX:1.9593,scaleY:1.9593,rotation:10.4946,x:80.85,y:-255.25},0).wait(1).to({scaleX:1.9594,scaleY:1.9594,rotation:10.4014,x:80.4,y:-255.85},0).wait(1).to({rotation:10.3109,x:80.05,y:-256.35},0).wait(1).to({scaleX:1.9595,scaleY:1.9595,rotation:10.223,x:79.6,y:-256.9},0).wait(1).to({scaleX:1.9596,scaleY:1.9596,rotation:10.1378,x:79.25,y:-257.4},0).wait(1).to({rotation:10.0552,x:78.85,y:-257.9},0).wait(1).to({rotation:9.9751,x:78.55,y:-258.4},0).wait(1).to({scaleX:1.9597,scaleY:1.9597,rotation:9.8976,x:78.15,y:-258.9},0).wait(1).to({rotation:9.8226,x:77.9,y:-259.35},0).wait(1).to({rotation:9.75,x:77.5,y:-259.75},0).wait(1).to({scaleX:1.9598,scaleY:1.9598,rotation:9.6799,x:77.15,y:-260.15},0).wait(1).to({scaleX:1.9599,scaleY:1.9599,rotation:9.6122,x:76.95,y:-260.6},0).wait(1).to({rotation:9.5468,x:76.6,y:-261},0).wait(1).to({rotation:9.4838,x:76.3,y:-261.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,rotation:9.4232,x:76.05,y:-261.7},0).wait(1).to({rotation:9.3647,x:75.8,y:-262.1},0).wait(1).to({scaleX:1.9601,scaleY:1.9601,rotation:9.3086,x:75.5,y:-262.4},0).wait(1).to({rotation:9.2547,x:75.3,y:-262.75},0).wait(1).to({rotation:9.2029,x:75.05,y:-263},0).wait(1).to({scaleX:1.9602,scaleY:1.9602,rotation:9.1534,x:74.85,y:-263.35},0).wait(1).to({rotation:9.1059,x:74.6,y:-263.6},0).wait(1).to({rotation:9.0606,x:74.45,y:-263.9},0).wait(1).to({rotation:9.0174,x:74.25,y:-264.15},0).wait(1).to({scaleX:1.9603,scaleY:1.9603,rotation:8.9763,x:74.1,y:-264.45},0).wait(1).to({rotation:8.9371,x:73.85,y:-264.7},0).wait(1).to({rotation:8.9,x:73.7,y:-264.85},0).wait(1).to({rotation:8.8649,x:73.55,y:-265.1},0).wait(1).to({rotation:8.8317,x:73.4,y:-265.3},0).wait(1).to({scaleX:1.9604,scaleY:1.9604,rotation:8.8005,x:73.3,y:-265.45},0).wait(1).to({regX:27.8,regY:33.5,rotation:8.7712,x:44.8,y:-259.15},0).to({scaleX:1.9593,scaleY:1.9593,rotation:-69.4638,x:23.2,y:-110.05},4).to({regY:33.6,scaleX:1.9581,scaleY:1.9581,rotation:-89.9661,x:13.45,y:48.15},6).to({_off:true},1).wait(54));

	// document
	this.instance_3 = new lib.doc_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.8,-426.6,1.9603,1.9603,44.9413,0,0,27.9,33.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).wait(1).to({regX:26.6,regY:33.7,rotation:28.8937,x:105.15,y:-352.9},0).wait(1).to({rotation:14.5044,x:66.05,y:-285.35},0).wait(1).to({scaleX:1.9602,scaleY:1.9602,rotation:3.584,x:36.55,y:-234.05},0).wait(1).to({rotation:-3.9196,x:16.25,y:-198.8},0).wait(1).to({rotation:-8.7066,x:3.4,y:-176.3},0).wait(1).to({regX:27.9,regY:33.6,rotation:-11.4397,x:-1.55,y:-164.2},0).wait(1).to({regX:26.6,regY:33.7,rotation:-10.7928,x:-3.95,y:-158.85},0).wait(1).to({scaleX:1.9603,scaleY:1.9603,rotation:-10.1608,x:-3.9,y:-154.4},0).wait(1).to({rotation:-9.5434,x:-3.85,y:-149.95},0).wait(1).to({scaleX:1.9602,scaleY:1.9602,rotation:-8.9406,x:-3.8,y:-145.7},0).wait(1).to({scaleX:1.9603,scaleY:1.9603,rotation:-8.3523,x:-3.7,y:-141.5},0).wait(1).to({rotation:-7.7785,x:-3.65,y:-137.4},0).wait(1).to({rotation:-7.2188,x:-3.6,y:-133.4},0).wait(1).to({rotation:-6.6734,x:-3.55,y:-129.55},0).wait(1).to({rotation:-6.142,y:-125.75},0).wait(1).to({rotation:-5.6246,x:-3.5,y:-122.05},0).wait(1).to({rotation:-5.1211,x:-3.4,y:-118.5},0).wait(1).to({rotation:-4.6314,y:-115},0).wait(1).to({scaleX:1.9604,scaleY:1.9604,rotation:-4.1553,x:-3.35,y:-111.65},0).wait(1).to({rotation:-3.6928,x:-3.3,y:-108.3},0).wait(1).to({rotation:-3.2437,x:-3.25,y:-105.15},0).wait(1).to({rotation:-2.8081,x:-3.2,y:-102},0).wait(1).to({rotation:-2.3858,y:-99},0).wait(1).to({rotation:-1.9766,x:-3.15,y:-96.15},0).wait(1).to({rotation:-1.5805,y:-93.3},0).wait(1).to({rotation:-1.1975,x:-3.05,y:-90.6},0).wait(1).to({rotation:-0.8273,y:-87.95},0).wait(1).to({scaleX:1.9605,scaleY:1.9605,rotation:-0.47,x:-3,y:-85.4},0).wait(1).to({scaleX:1.9604,scaleY:1.9604,rotation:-0.1254,y:-82.95},0).wait(1).to({regX:27.9,regY:33.6,rotation:0.2065,x:-0.45,y:-80.8},0).to({scaleX:1.9598,scaleY:1.9598,rotation:0.2788,x:-0.05,y:-3.65},2).to({_off:true},1).wait(72));

	// image
	this.instance_4 = new lib.doc_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-145.75,-405.05,1.9603,1.9603,-9.6331,0,0,28.2,28.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).wait(1).to({regX:28.4,regY:28.6,scaleX:1.9598,scaleY:1.9598,rotation:-12.4177,x:-136.2,y:-354.5},0).wait(1).to({scaleX:1.9592,scaleY:1.9592,rotation:-14.9933,x:-127.7,y:-307.55},0).wait(1).to({scaleX:1.9589,scaleY:1.9589,rotation:-17.061,x:-120.85,y:-269.9},0).wait(1).to({scaleX:1.9586,scaleY:1.9586,rotation:-18.5771,x:-115.9,y:-242.25},0).wait(1).to({scaleX:1.9583,scaleY:1.9583,rotation:-19.6243,x:-112.4,y:-223.2},0).wait(1).to({regX:28.2,regY:28.7,scaleX:1.9582,scaleY:1.9582,rotation:-20.3021,x:-110.5,y:-210.55},0).wait(1).to({regX:28.4,regY:28.6,scaleX:1.9583,scaleY:1.9583,rotation:-20.449,x:-104.75,y:-210.2},0).wait(1).to({scaleX:1.9584,scaleY:1.9584,rotation:-20.5914,x:-99.45,y:-209.55},0).wait(1).to({scaleX:1.9585,scaleY:1.9585,rotation:-20.7294,x:-94.3,y:-208.95},0).wait(1).to({scaleX:1.9587,scaleY:1.9587,rotation:-20.8631,x:-89.3,y:-208.35},0).wait(1).to({scaleX:1.9588,scaleY:1.9588,rotation:-20.9925,x:-84.55,y:-207.8},0).wait(1).to({scaleX:1.9589,scaleY:1.9589,rotation:-21.1176,x:-79.85,y:-207.25},0).wait(1).to({scaleX:1.959,scaleY:1.959,rotation:-21.2386,x:-75.4,y:-206.75},0).wait(1).to({rotation:-21.3554,x:-71.05,y:-206.15},0).wait(1).to({scaleX:1.9592,scaleY:1.9592,rotation:-21.4682,x:-66.85,y:-205.65},0).wait(1).to({scaleX:1.9593,scaleY:1.9593,rotation:-21.5769,x:-62.8,y:-205.2},0).wait(1).to({scaleX:1.9594,scaleY:1.9594,rotation:-21.6818,x:-58.95,y:-204.75},0).wait(1).to({rotation:-21.7826,x:-55.2,y:-204.3},0).wait(1).to({scaleX:1.9595,scaleY:1.9595,rotation:-21.8797,x:-51.55,y:-203.9},0).wait(1).to({scaleX:1.9596,scaleY:1.9596,rotation:-21.9729,x:-48.15,y:-203.45},0).wait(1).to({scaleX:1.9597,scaleY:1.9597,rotation:-22.0624,x:-44.75,y:-203.05},0).wait(1).to({rotation:-22.1482,x:-41.6,y:-202.7},0).wait(1).to({scaleX:1.9598,scaleY:1.9598,rotation:-22.2303,x:-38.55,y:-202.3},0).wait(1).to({scaleX:1.9599,scaleY:1.9599,rotation:-22.3088,x:-35.6,y:-202},0).wait(1).to({scaleX:1.96,scaleY:1.96,rotation:-22.3837,x:-32.85,y:-201.65},0).wait(1).to({rotation:-22.4551,x:-30.2,y:-201.35},0).wait(1).to({scaleX:1.9601,scaleY:1.9601,rotation:-22.5231,x:-27.7,y:-201},0).wait(1).to({scaleX:1.9602,scaleY:1.9602,rotation:-22.5876,x:-25.25,y:-200.75},0).wait(1).to({rotation:-22.6487,x:-22.95,y:-200.5},0).wait(1).to({rotation:-22.7065,x:-20.85,y:-200.25},0).wait(1).to({scaleX:1.9603,scaleY:1.9603,rotation:-22.761,x:-18.8,y:-200},0).wait(1).to({rotation:-22.8122,x:-16.95,y:-199.75},0).wait(1).to({regX:28.2,regY:28.7,rotation:-22.8602,x:-15.45,y:-199.25},0).to({scaleX:1.958,scaleY:1.958,rotation:-1.1043,x:-6.4,y:-68.55},6).to({scaleX:1.9577,scaleY:1.9577,rotation:-0.7981,x:0.15,y:21.3},2).to({_off:true},1).wait(62));

	// graph
	this.instance_5 = new lib.PDF();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.45,8,0.6449,0.6449,-0.0488,0,0,87.5,82.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({regX:83.5,regY:85,rotation:-0.0339,x:0.45,y:73.85},2).to({regX:91.5,regY:87.5,scaleX:0.774,scaleY:0.774,rotation:0.7647,x:55.05,y:286.65},5).wait(47));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_79 = new cjs.Graphics().p("Am1InQgdgfgCgtIAAAAIgCuzQABguAegeIAAAAQAegeAugBIAAAAII1gBQAYgBASASIAAAAIDQDPQARASAAAYIAAAAIACMTQgBAtgeAfIAAAAQgeAeguABIAAAAIrVABQgtAAgfgeg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_2_graphics_79,x:2.4016,y:252.2673}).wait(49));

	// doc shadow
	this.instance_6 = new lib.pdfIcon_shadow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(25.4,207.6,0.6037,0.5922,0,0,0,98.9,101.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).wait(1).to({regX:99,regY:101.2,scaleX:0.6335,scaleY:0.6215,x:37.35,y:248.5},0).wait(1).to({regX:98.9,regY:101.3,scaleX:0.6562,scaleY:0.6437,x:42.6,y:289.5},0).wait(47));

	// image
	this.instance_7 = new lib.PDF();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.1,27.05,0.6448,0.6448,-0.785,0,0,82.7,90.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65).to({_off:false},0).to({regX:89.3,regY:87.8,scaleX:0.6449,scaleY:0.6449,rotation:-0.7552,x:0,y:117.55},2).to({regX:91.9,regY:82.8,scaleX:0.6935,scaleY:0.6935,rotation:-0.1185,x:-1.1,y:251.55},9).wait(52));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_56 = new cjs.Graphics().p("AlTIbQgqgBgcgdIAAAAQgcgcgBgqIAAAAIAFtxQABgqAcgcIAAAAQAcgcAqgBIAAAAIIOADQAXAAAQAQIAAAAIDADCQAQARAAAWIAAAAIgELcQgBAqgcAcIAAAAQgcAcgrABIAAAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AlUIaQgqgBgcgcIAAAAQgbgdgBgqIAAAAIAGtxQABgqAcgcIAAAAQAcgcArgBIAAAAIINAEQAXAAAQAQIAAAAIDADDQAQARgBAWIAAAAIgFLcQgBAqgcAcIAAAAQgcAcgrABIAAAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AlVIZQgqgBgcgcIAAAAQgbgdgBgqIAAAAIAItxQABgqAcgcIAAAAQAdgbAqgBIAAAAIINAFQAXAAAQAQIAAAAIDADDQAPARAAAWIAAAAIgGLcQgCAqgcAcIAAAAQgcAcgrAAIAAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AlVIaQgqgBgcgdIAAAAQgbgcgBgrIAAAAIAHtxQACgqAcgcIAAAAQAcgcArgBIAAAAIINAFQAXAAAQAQIAAAAIDADDQAQARgBAXIAAAAIgGLcQgCAqgbAcIAAAAQgdAcgqABIAAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AlVIaQgqgBgcgcIAAAAQgcgdgBgqIAAAAIAItyQABgqAcgcIAAAAQAcgcArgBIAAAAIIOAEQAXABAQAQIAAAAIDADDQAQARAAAWIAAAAIgGLdQgCAqgcAcIAAAAQgcAcgrABIAAAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AlVIbQgqgBgcgcIAAAAQgcgdgBgqIAAAAIAHtzQABgrAcgcIAAAAQAdgbAqgBIAAAAIIPAEQAXAAAQAQIAAAAIDADDQAQARAAAXIAAAAIgGLdQgBArgcAcIAAAAQgdAcgqAAIAAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AlVIcQgqgBgcgdIAAAAQgcgcgBgrIAAAAIAGtzQACgrAcgcIAAAAQAcgbArgBIAAAAIIOADQAYAAAQARIAAAAIDADDQAQARAAAWIAAAAIgFLeQgCArgcAcIAAAAQgcAcgrAAIAAAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AlVIcQgqgBgcgcIAAAAQgcgdgBgqIAAAAIAGt0QABgrAcgcIAAAAQAcgcArgBIAAAAIIPAEQAXAAAQAQIAAAAIDBDDQAQARAAAXIAAAAIgFLeQgBArgcAcIAAAAQgdAcgqABIAAAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AlVIdQgqgBgdgcIAAAAQgbgdgBgrIAAAAIAFt0QABgrAcgcIAAAAQAdgcAqgBIAAAAIIQADQAXAAAQARIAAAAIDBDDQAQARAAAWIAAAAIgELfQgCArgbAcIAAAAQgdAcgrABIAAAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AlVIeQgqgBgdgdIAAAAQgbgcgBgrIAAAAIAEt2QACgqAcgcIAAAAQAcgcArgBIAAAAIIQADQAXAAAQAQIAAAAIDBDDQAQARAAAXIAAAAIgDLgQgCAqgcAcIAAAAQgcAdgrAAIAAAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AlVIeQgqgBgdgcIAAAAQgbgdgBgqIAAAAIAEt3QABgqAcgdIAAAAQAdgbAqgBIAAAAIIRACQAXAAAQAQIAAAAIDBDEQARARgBAWIAAAAIgDLhQgBAqgcAdIAAAAQgdAcgqAAIAAAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AlVIfQgqgBgdgdIAAAAQgbgcgCgrIAAAAIAEt3QABgqAcgdIAAAAQAdgbAqgCIAAAAIIRADQAYAAAQAQIAAAAIDCDDQAQARAAAXIAAAAIgDLhQgCAqgcAdIAAAAQgcAcgrABIAAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AlVIfQgrAAgcgdIAAAAQgcgcgBgrIAAAAIADt4QACgrAcgcIAAAAQAcgcArgBIAAAAIIRACQAYAAAQAQIAAAAIDCDEQAQARAAAWIAAAAIgDLiQgBArgcAcIAAAAQgdAcgqABIAAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AlVIgQgrgBgcgcIAAAAQgcgdgBgrIAAAAIADt4QABgrAcgcIAAAAQAdgcAqgBIAAAAIISABQAXABARAQIAAAAIDCDDQAQARAAAXIAAAAIgCLiQgCArgcAcIAAAAQgcAdgrAAIAAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AlVIhQgrgBgcgdIAAAAQgcgcgBgrIAAAAIACt5QABgrAcgcIAAAAQAdgcArgBIAAAAIISABQAXAAAQAQIAAAAIDDDEQAQARAAAWIAAAAIgCLjQgBArgcAcIAAAAQgdAdgqAAIAAAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AlVIhQgrAAgcgdIAAAAQgcgcgBgrIAAAAIABt6QACgrAcgcIAAAAQAcgcArgCIAAAAIITABQAXAAAQARIAAAAIDDDDQAQARAAAXIAAAAIgBLjQgBArgcAcIAAAAQgdAdgrABIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_3_graphics_56,x:6.782,y:34.3143}).wait(1).to({graphics:mask_3_graphics_57,x:6.1475,y:75.2058}).wait(1).to({graphics:mask_3_graphics_58,x:3.9583,y:120.3399}).wait(1).to({graphics:mask_3_graphics_59,x:-0.4166,y:128.857}).wait(1).to({graphics:mask_3_graphics_60,x:-4.7919,y:137.3742}).wait(1).to({graphics:mask_3_graphics_61,x:-9.1669,y:145.8918}).wait(1).to({graphics:mask_3_graphics_62,x:-13.5422,y:154.4094}).wait(1).to({graphics:mask_3_graphics_63,x:-17.9176,y:162.9265}).wait(1).to({graphics:mask_3_graphics_64,x:-22.2929,y:171.4441}).wait(1).to({graphics:mask_3_graphics_65,x:-26.6679,y:179.9613}).wait(1).to({graphics:mask_3_graphics_66,x:-31.0432,y:188.4789}).wait(1).to({graphics:mask_3_graphics_67,x:-35.4181,y:196.9965}).wait(1).to({graphics:mask_3_graphics_68,x:-39.793,y:205.5136}).wait(1).to({graphics:mask_3_graphics_69,x:-44.1684,y:214.0313}).wait(1).to({graphics:mask_3_graphics_70,x:-48.5437,y:222.5484}).wait(1).to({graphics:mask_3_graphics_71,x:-53.9649,y:232.9542}).wait(57));

	// doc shadow
	this.instance_8 = new lib.pdfIcon_shadow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-4.9,96.6,0.5774,0.5774,0,0,0,98.7,101.3);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(68).to({_off:false},0).wait(1).to({regX:98.8,regY:101.4,scaleY:0.5664,x:-8.6,y:120.85},0).wait(1).to({y:138.75},0).wait(1).to({regX:98.9,regY:101.3,x:-10.05,y:158.85},0).wait(1).to({y:177.45},0).wait(1).to({regX:98.8,regY:101.4,x:-10.85,y:197.6},0).wait(1).to({regY:101.3,x:-12.35,y:217.7},0).wait(1).to({regY:101.4,x:-11.6,y:237.85},0).wait(1).to({regX:98.9,regY:101.3,x:-14.55,y:257.2},0).wait(52));

	// document
	this.instance_9 = new lib.PDF();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.25,38.15,0.6449,0.6449,0.2698,0,0,86,89.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({_off:false},0).to({regX:88.4,regY:83.2,rotation:0.5233,x:-1.5,y:119.9},2).to({regX:90,regY:80.3,scaleX:0.6518,scaleY:0.6518,rotation:0.0966,x:-58.5,y:230.7},13).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.7,-604.1,530.8,1244.8000000000002);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(9).call(this.frame_17).wait(11));

	// Layer_2
	this.instance = new lib.cta_hoverBack();
	this.instance.parent = this;
	this.instance.setTransform(125.8,46,1,1,0,0,0,125.8,46);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},8).to({alpha:0},8).wait(11));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005ABE").s().p("AsdHMQi/AAiHiHQiGiGAAi/IAAAAQAAi+CGiGQCHiHC/AAIY7AAQC/AACGCHQCHCGAAC+IAAAAQAAC/iHCGQiGCHi/AAg");
	this.shape.setTransform(125.8,45.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.6,92);


// stage content:
(lib.Adobe_190327_US_1_EN_PDF_Create_300x250_HTML5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"static":247});

	// timeline functions:
	this.frame_1 = function() {
		stage.enableMouseOver(5);
		
		alog('set Code');
		// Define global object
		Code = window.Code || {};
		
		// Variables
		Code.scope = this;
		Code.stageWidth = 300;
		Code.stageHeight = 250;
		Code.firstRun = true;
		
		
		// Want an easy way to set a name of an object
		Code.setInstanceName = function(tgtName){
			alog(tgtName);
			// The name of an MC is not set, so we'll set it here
			// If nested iterate through, e.g. parent.child
			var name = tgtName;
			if(tgtName.indexOf('.') > -1){
				var path = tgtName.split('.');
				name = path[path.length-1];
			}
			var tgt = eval('Code.scope.'+tgtName);
			tgt.name = name;
			Code[tgtName] = tgt;
			
			return tgt;
		}
		
		Code.setButton = function(tgtName){
			alog('Code.setButton: '+tgtName);
			var tgt = Code.setInstanceName(tgtName);
			alog(tgt);
			alog('set button '+tgtName);
			tgt.buttonMode = true;
			tgt.mouseChildren = false;
			tgt.addEventListener("mouseover", Code.overButton);
			tgt.addEventListener("mouseout", Code.outButton);
			tgt.addEventListener("click", Code.clickButton);
			tgt.cursor = "pointer";
		}
		Code.overButton = function(evt){
			var tgt = evt.currentTarget;
			switch(tgt.name){
				case "hitter":
				case "cta1":
					tgt.gotoAndPlay("over");
					break;		
				case "cta2":
					tgt.gotoAndPlay("over");
					break;
			}
		}
		Code.outButton = function(evt){
			var tgt = evt.currentTarget;
			switch(tgt.name){
				case "cta1":
					tgt.gotoAndPlay("out");
					break;
				case "cta2":
					tgt.gotoAndPlay("out");
					break;
			}
		}
		Code.clickButton = function(evt){
			var tgt = evt.currentTarget;
			switch(tgt.name){
				case "hitter":
					clickthrough();
					break;
				case "cta1":
					playAgain();
					this.gotoAndPlay(1);
					break;
				case "cta2":
					clickthrough();
					break;
			}
		}
		
		Code.setButton('cta1');
		//Code.setButton('cta2');
		//Code.setButton('hitter');
	}
	this.frame_4 = function() {
		Code.showHitters();
	}
	this.frame_247 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(243).call(this.frame_247).wait(9));

	// Manifest
	this.instance = new lib.sprite();
	this.instance.parent = this;
	this.instance.setTransform(690.95,148.9);

	this.instance_1 = new lib.sprite_mask();
	this.instance_1.parent = this;
	this.instance_1.setTransform(690.95,148.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(256));

	// Adobe logo
	this.instance_2 = new lib.AdobeLogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.45,419.25,0.7074,0.7074,0,0,0,749.9,999.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(214).to({_off:false},0).wait(42));

	// light pass mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_228 = new cjs.Graphics().p("AoLEtQh8AAhYhYQhZhYABh9IAAAAQgBh8BZhYQBYhYB8AAIQXAAQB9AABXBYQBZBYgBB8IAAAAQABB9hZBYQhXBYh9AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(228).to({graphics:mask_graphics_228,x:298.7,y:436.975}).wait(28));

	// light pass
	this.instance_3 = new lib.cta_lightPass();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22.85,348.55,1.8226,1.137,-36.7438,0,0,150.3,134.8);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(228).to({_off:false},0).to({regX:150.5,regY:135.1,scaleX:1.849,x:666.45,y:163.35},16).wait(12));

	// light pass mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_222 = new cjs.Graphics().p("AgjGEQigAAhyhyQhxhxAAigIAAgBQAAigBxhxQByhyCgAAIBHAAQCgAAByByQBxBxAACgIAAABQAACghxBxQhyByigAAg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AiPGEQihAAhxhyQhyhxAAigIAAgBQAAigByhxQBxhyChAAIEfAAQChAABxByQByBxAACgIAAABQAACghyBxQhxByihAAg");
	var mask_1_graphics_224 = new cjs.Graphics().p("Aj8GEQigAAhyhxQhxhyAAihIAAAAQAAigBxhxQByhyCgAAIH5AAQCgAAByByQBxBxAACgIAAAAQAAChhxByQhyBxigAAg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AloGEQihAAhxhxQhyhyAAihIAAAAQAAigByhxQBxhyChAAILRAAQChAABxByQByBxAACgIAAAAQAAChhyByQhxBxihAAg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AnVGEQigAAhyhyQhxhxAAihIAAAAQAAigBxhxQByhyCgAAIOrAAQCgAAByByQBxBxAACgIAAAAQAAChhxBxQhyByigAAg");
	var mask_1_graphics_227 = new cjs.Graphics().p("ApBGEQihAAhxhyQhyhxAAigIAAgBQAAigByhxQBxhyChAAISDAAQChAABxByQByBxAACgIAAABQAACghyBxQhxByihAAg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AquGEQihAAhxhyQhyhxABigIAAgBQgBigByhxQBxhyChAAIVdAAQChAABxByQByBxgBCgIAAABQABCghyBxQhxByihAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(222).to({graphics:mask_1_graphics_222,x:299.175,y:436.7}).wait(1).to({graphics:mask_1_graphics_223,x:299.1792,y:437.2083}).wait(1).to({graphics:mask_1_graphics_224,x:299.1833,y:437.7167}).wait(1).to({graphics:mask_1_graphics_225,x:299.1875,y:438.225}).wait(1).to({graphics:mask_1_graphics_226,x:299.1917,y:438.7333}).wait(1).to({graphics:mask_1_graphics_227,x:299.1958,y:439.2417}).wait(1).to({graphics:mask_1_graphics_228,x:299.2,y:439.75}).wait(28));

	// CTA learn more
	this.instance_4 = new lib.cta_learnMore();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-114.8,598,0.8091,0.8091,0,0,0,-380.3,239.9);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(222).to({_off:false},0).wait(34));

	// CTA
	this.cta1 = new lib.cta();
	this.cta1.name = "cta1";
	this.cta1.parent = this;
	this.cta1.setTransform(1180.35,903.6,1.3049,1.3049,0,0,0,126.4,46.4);
	this.cta1._off = true;

	var maskedShapeInstanceList = [this.cta1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta1).wait(167).to({_off:false},0).wait(55).to({regY:46.5,scaleX:0.6555,scaleY:0.6555,x:299.1,y:437.35},0).wait(34));

	// AdobeAcrobatLogo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBlQgUgGgOgMQgQgNgJgVQgKgUAAgdQAAgXAJgUQAHgUAPgOQAOgOAUgHQAUgJAZABQARgBAJACQAJACAGADQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAVQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAgBQgOgGgbAAQgTgBgPAGQgPAGgKALQgMAKgFAQQgHAPAAATQAAAYAJAQQAIAQAMAKQANAKANAEQAPADAMAAIAWgBQAJgBAJgDQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAAUQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAAAQgIAEgKACIgYABQgVAAgRgHg");
	this.shape.setTransform(408.6,336.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBpIgOAAIgNgBIgLAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAjKQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIATgBIAlAAQAaAAAUAHQAVAIANANQAOAOAHATQAHASAAAWQAAAegKAUQgKAVgQANQgQAMgUAHQgUAFgUAAIgOAAgAg4hQIAAChIAMABIAPAAQATAAAOgGQAQgFAMgKQAMgLAGgQQAHgPAAgVQAAgTgHgPQgGgPgLgKQgLgJgQgGQgOgEgSAAIgQAAIgOAAg");
	this.shape_1.setTransform(390.075,336.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBcQgLgJABgXIAAhbIgWAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgSQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAWAAIAAgKIABgMIAAgLIABgIQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAVgDQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIgBAVIgBAYIAhAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAATQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIghAAIAABXQAAALAEAGQAFAGALAAQAHAAAHgCQAAAAABAAQAAgBAAABQABAAAAAAQAAAAAAABIAAAQQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgKAEgNAAQgSAAgIgJg");
	this.shape_2.setTransform(367.15,337.0688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBNQgKgDgIgHQgIgGgFgJQgEgJAAgNQAAgMAGgJQAFgJAKgFQAJgGANgDQANgDANAAIAOAAIAIABIAAgIIgBgJQgBgFgEgFQgEgFgHgEQgHgDgKAAQgMAAgKACQgKADgJAEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgTQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAJgFAMgCQALgDAMAAQAPAAALAFQALAFAGAIQAHAIAEAKQADALAAAMIAABGIAAAIIAAAHIAAABQgRAJgOACQgOADgOAAQgMAAgLgDgAgVAKQgLAHAAANQAAAGACAFQACAFAEAEQAFAEAHACQAHACAJAAQAQAAANgFIAAgxIgIgBIgNgBQgWAAgLAIg");
	this.shape_3.setTransform(354.575,339.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBxQgKgBgKgDQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAjaQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAWAAIABABIABABIAABKQAQgGASAAQAPAAAOAGQANAFAKAKQAJAKAFANQAFANAAAQQABAWgJAPQgHAQgMALQgMALgQAGQgOAFgSAAQgMAAgKgCgAgagTIgNAEIAABpIAJACIAMAAQAMAAAJgEQALgDAHgIQAJgHAFgMQAEgMAAgPQAAgYgNgNQgNgPgWAAQgKAAgHACg");
	this.shape_4.setTransform(339.95,335.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBJQgOgHgJgLQgJgMgEgOQgEgOAAgPQAAgQAFgOQAFgPAJgLQAKgLANgGQAOgGAPAAQARAAANAGQAOAGAJALQAJALAFAOQAFAPAAAQQAAASgFAPQgFAOgKALQgJAKgOAGQgNAGgQAAQgRAAgOgHgAgSg0QgIAEgGAIQgGAHgDAKQgEALAAAMQAAALADALQAEALAGAHQAFAIAJAFQAJAEAKAAQAJAAAHgDQAIgDAHgIQAGgHAEgKQAEgLAAgPQAAgKgDgKQgDgKgFgIQgGgIgJgFQgJgFgLAAQgKAAgIAEg");
	this.shape_5.setTransform(322.825,339.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBOQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAhsIAAgLIAAgLIgBgKIAAgIQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAUAAIADAAIABACIABAKIABAMQAIgMANgIQAOgHAPAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgQAAgOAHQgMAHgHAKIAABnQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_6.setTransform(310.5,339.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMBKQgOgHgKgLQgKgLgFgOQgFgOAAgQQAAgRAGgOQAGgPALgLQALgLAPgGQAOgGATAAIATABIALADQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAAUQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgGgCgHgBIgQgBQgNAAgKADQgJAEgHAIQgIAHgEAKQgEALAAAMQAAAOAFAKQAEALAIAHQAHAHAKAEQAKADALAAQASAAALgEQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAAUQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAQgIADgJABIgSABQgTAAgOgGg");
	this.shape_7.setTransform(297.975,339.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABBBoQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgXhAIhPAAIgXA/QAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgWAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIBFi/IABgEIABgJQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAeAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAIBKDMQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAgAgGg/IgIAYIgKAbIgJAaIBBAAIgHgUIgKgbIgJgbIgGgWIAAAAIgGATg");
	this.shape_8.setTransform(281.8875,336.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBJQgOgHgJgLQgJgLgEgOQgEgOAAgPQAAgPAFgPQAFgPAJgLQAJgLANgGQANgHAPAAQARAAAMAGQALAGAIAKQAHAJADALQAEALAAALIgBAKIgBAFQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgNABIgTAAIhEAAQAAAMADAJQADAKAHAHQAGAIAKAEQAJAEAOAAQAKAAAKgCQAKgCAJgFQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIAAASQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgIAEgLACQgKADgPAAQgUAAgOgHgAgNg2QgIAEgFAGQgFAGgDAHQgDAIgBAIIA6AAIAPgBIAFAAIAAgCIAAgCIgBgKQgCgGgEgHQgEgGgIgEQgHgEgLAAQgJAAgHADg");
	this.shape_9.setTransform(257.825,339.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrBxQgLgBgKgDQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAjaQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAWAAIACABIAAABIAABKQAQgGATAAQAPAAANAGQANAFAKAKQAJAKAFANQAFANABAQQgBAWgHAPQgIAQgMALQgMALgQAGQgPAFgQAAQgMAAgLgCgAgagTIgNAEIAABpIAJACIAMAAQALAAAKgEQAKgDAJgIQAHgHAFgMQAGgMAAgPQAAgYgOgNQgNgPgWAAQgKAAgHACg");
	this.shape_10.setTransform(242.45,335.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfBJQgOgHgJgLQgJgMgEgOQgEgOAAgPQAAgQAFgOQAFgPAJgLQAKgLANgGQAOgGAPAAQARAAANAGQAOAGAJALQAJALAFAOQAFAPAAAQQAAASgFAPQgFAOgKALQgJAKgOAGQgNAGgQAAQgRAAgOgHgAgSg0QgIAEgGAIQgGAHgDAKQgEALAAAMQAAALADALQAEALAGAHQAFAIAJAFQAJAEAKAAQAJAAAHgDQAIgDAHgIQAGgHAEgKQAEgLAAgPQAAgKgDgKQgDgKgFgIQgGgIgJgFQgJgFgLAAQgKAAgIAEg");
	this.shape_11.setTransform(225.275,339.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBuQgOgFgLgKQgLgKgFgOQgHgPABgUQAAgRAGgPQAGgOALgLQALgLARgGQAOgGATAAIAMABIAJABIAAhGQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAXAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAADGIAAAHIABAIQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAQgOAHgNACQgNADgNAAQgQAAgOgFgAgEgRQgLAEgIAIQgHAHgFAKQgDALAAAMQAAAQADAKQAFALAIAHQAHAHAKADQAJADAKAAIANgBQAHgBAGgCIAAhqQgEgCgGAAIgLgBQgOAAgJAEg");
	this.shape_12.setTransform(208.15,335.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABBBoQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgXhAIhPAAIgXA/QAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgWAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIBFi/IABgEIABgJQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAeAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAIBKDMQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAgAgGg/IgIAYIgKAbIgJAaIBBAAIgHgUIgKgbIgJgbIgGgWIAAAAIgGATg");
	this.shape_13.setTransform(191.1375,336.475);

	this.instance_5 = new lib.acrobatLogoPDF();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300.1,233.5,0.469,0.469,0,0,0,140.4,137.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNChQgegJgYgVQgYgUgPghQgOghAAgtQAAglAMggQANgfAXgWQAWgXAhgMQAfgNApAAQAZABAPACQAPADAJADQAAABABAAQAAAAABABQAAAAAAABQAAABAAABIAAAhQAAAEgDgBQgWgMgqAAQgeAAgYAJQgYAKgRAQQgSASgJAYQgKAYAAAfQAAAlANAaQANAbAUAPQAUAPAWAGQAXAGAUABQASgBAPgBQAPgCAOgFQABgBABAAQAAABABAAQAAAAAAAAQAAABAAABIAAAeQAAAEgCABQgNAGgRACQgRABgVABQgggBgdgJg");
	this.shape_14.setTransform(477.825,667.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhECnIgXgBIgVgBIgRAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBIAAlBQAAgEADAAIAdgBIA7AAQApAAAgAMQAhALAWAWQAWAVALAdQALAeAAAjQAAAvgQAgQgQAhgZAVQgbAUggAKQgeAIggABIgWAAgAhDiAIgXABIAAD/IATABIAYAAQAeAAAYgHQAZgJATgRQASgRAKgZQALgZAAghQAAgfgKgYQgKgXgSgPQgSgQgYgHQgYgIgcAAIgZAAg");
	this.shape_15.setTransform(448.45,667.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOCSQgQgPAAgkIAAiSIgiAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgdQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAiAAIABgRIABgSIABgSIACgMQAAAAAAgBQAAgBABAAQAAgBABAAQABAAAAAAIAhgGQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgCAhIgBAnIA1AAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAAeQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIg1AAIAACMQAAASAHAJQAHAJARAAQAMAAALgEQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAAaQAAAEgDABQgPAHgWAAQgcAAgOgPg");
	this.shape_16.setTransform(412.125,668.3708);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglB6QgRgFgMgKQgNgKgHgPQgHgOAAgUQAAgUAJgOQAJgOAPgJQAPgKAUgEQAUgEAXAAIAWAAIANABIAAgMQAAgGgDgJQgCgJgFgHQgHgIgLgGQgLgFgRAAQgSAAgQADQgRAFgNAGQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAgfQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAPgIASgDQASgFATAAQAYAAASAIQARAIALAMQAKANAGARQAFARAAAUIAABuIAAAMIABAMIgBACQgbANgWAEQgWAFgWAAQgUAAgRgFgAgiAPQgSAMAAAVQAAAJADAIQADAIAIAGQAHAGALAEQALAEAQAAQAZAAAVgJIAAhOIgOgCIgUAAQgjAAgSALg");
	this.shape_17.setTransform(392.175,671.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhECzQgRgCgQgFQgDgBAAgDIAAlaQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAjAAIADAAIABADIAAB1QAYgJAegBQAZABAVAIQAVAJAPAQQAPAQAIAVQAIAUAAAZQAAAjgMAZQgMAZgTASQgTARgZAJQgYAIgbAAQgTAAgQgDgAgqgfQgLACgJAEIAACnQAHADAIAAIASABQASAAAQgGQARgGAMgMQANgMAIgTQAHgRAAgYQAAgngVgWQgVgWgjgBQgQAAgLADg");
	this.shape_18.setTransform(368.975,666.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyB0QgWgLgOgSQgOgSgHgXQgHgXAAgXQAAgZAIgXQAIgYAPgRQAPgRAWgKQAVgKAZAAQAbAAAVAKQAVAJAPASQAOAQAJAXQAIAYAAAaQAAAcgJAYQgIAXgPARQgQAQgVAKQgVAJgZAAQgdAAgVgLgAgehTQgNAHgJALQgJAMgFARQgGAQAAAUQAAASAFARQAFARAKAMQAJANAOAHQANAHARAAQAOAAAMgFQANgGAKgLQAKgLAGgRQAGgRAAgXQAAgRgEgQQgEgQgJgNQgJgNgOgIQgOgHgSAAQgRAAgNAGg");
	this.shape_19.setTransform(341.825,671.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4B8QgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAisIgBgRIAAgSIgBgQIgBgNQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAgAAIADABIABACQACAFABALIACATQANgSAVgNQAVgMAYAAQADAAAAAEIAAAjQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgaAAgWALQgUALgKAPIAAClQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_20.setTransform(322.25,671.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTB1QgYgKgPgSQgQgRgIgXQgHgWAAgaQAAgaAJgYQAJgXASgRQARgRAYgKQAXgKAdAAQATAAAMACIARAFQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABIAAAgQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgKgEgKgCQgLgBgQAAQgTAAgQAGQgPAGgMAMQgMALgGARQgHAQAAAUQAAAWAHARQAIARAMALQAMALAPAGQAQAFARAAQAdAAASgHQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAfQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQgMAFgPABIgbACQgfAAgWgKg");
	this.shape_21.setTransform(302.425,671.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABmClQgCAAgCgCIgkhlIh/AAIgkBkQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgiAAQgEAAABgEIBtkvIACgGIACgOQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAwAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIB2FEQABABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAgAgKhkIgNAmIgPArIgPAqIBnAAIgLggIgQgsIgPgsIgJghIgBAAQgCALgGATg");
	this.shape_22.setTransform(276.9625,667.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpB0QgWgLgOgRQgOgSgGgXQgGgWAAgXQAAgZAHgXQAIgYAOgRQAOgSAVgKQAUgLAZAAQAbAAATAKQASAKAMAPQAMAPAFARQAFASAAAQIAAAQQgBAHgBACQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgUACIgfAAIhsAAQAAASAFAQQAFAPAKAMQALALAQAHQAOAGAVAAQARAAAQgDQAPgDAPgHQABgBAAAAQABAAAAAAQAAABABAAQAAABAAABIAAAcQAAAEgDABQgNAHgRAEQgRAEgYAAQgfAAgXgLgAgVhWQgMAGgIAJQgJAJgFAMQgEANgCAMIBdAAIAYAAIAIgBIAAgDIAAgCQAAgHgCgKQgDgKgHgKQgHgJgLgHQgMgHgRAAQgPAAgLAFg");
	this.shape_23.setTransform(238.775,671.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhECzQgRgCgQgFQgDgBAAgDIAAlaQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAjAAIADAAIABADIAAB1QAYgJAegBQAZABAVAIQAVAJAPAQQAPAQAIAVQAIAUAAAZQAAAjgMAZQgMAZgTASQgTARgZAJQgYAIgbAAQgTAAgQgDgAgqgfQgLACgJAEIAACnQAHADAIAAIASABQASAAAQgGQARgGAMgMQANgMAIgTQAHgRAAgYQAAgngVgWQgVgWgjgBQgQAAgLADg");
	this.shape_24.setTransform(214.375,666.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyB0QgWgLgOgSQgOgSgHgXQgHgXAAgXQAAgZAIgXQAIgYAPgRQAPgRAWgKQAVgKAZAAQAbAAAVAKQAVAJAPASQAOAQAJAXQAIAYAAAaQAAAcgJAYQgIAXgPARQgQAQgVAKQgVAJgZAAQgdAAgVgLgAgehTQgNAHgJALQgJAMgFARQgGAQAAAUQAAASAFARQAFARAKAMQAJANAOAHQANAHARAAQAOAAAMgFQANgGAKgLQAKgLAGgRQAGgRAAgXQAAgRgEgQQgEgQgJgNQgJgNgOgIQgOgHgSAAQgRAAgNAGg");
	this.shape_25.setTransform(187.175,671.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdCvQgXgJgQgQQgSgPgJgXQgKgYABgeQAAgcAKgYQAJgWASgSQASgRAZgKQAYgJAfgBIARABIAOADIAAhvQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAIAlAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIAAE7IAAAMIABAMQgBABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQgVALgVAEQgWAEgVAAQgZAAgWgHgAgIgcQgRAIgMALQgMALgHARQgGARAAATQAAAZAHARQAHARAMAKQAMAMAPAFQAOAEARAAIAVgBQALgBAIgEIAAioIgOgEIgSgBQgVAAgRAGg");
	this.shape_26.setTransform(160,666.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABmClQgCAAgCgCIgkhlIh/AAIgkBkQgBADgDAAIgiAAQgEAAABgEIBtkvIACgGIACgOQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAwAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIB2FEQABABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAgAgKhkIgNAmIgPArIgPAqIBnAAIgLggIgQgsIgPgsIgJghIgBAAQgCALgGATg");
	this.shape_27.setTransform(133.0625,667.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_5},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},214).wait(42));

	// text - ONLY WITH
	this.instance_6 = new lib.txt_onlyWith();
	this.instance_6.parent = this;
	this.instance_6.setTransform(300.1,124.35,1,1,0,0,0,0,17.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(214).to({_off:false},0).wait(42));

	// End frame text
	this.instance_7 = new lib.text_EndFrame("single",29);
	this.instance_7.parent = this;
	this.instance_7.setTransform(299.45,181.1,1,1,0,0,0,250.8,148.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({_off:false},0).wait(42));

	// Mask: PDF LIKE A BOSS - Edge 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_193 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(193).to({graphics:mask_2_graphics_193,x:305.3875,y:236.275}).wait(21).to({graphics:null,x:0,y:0}).wait(42));

	// gold gradient
	this.instance_8 = new lib.goldGradient();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-267.85,298.9,1,1,-28.2168,0,0,205.1,349);
	this.instance_8.alpha = 0.6016;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(193).to({_off:false},0).to({x:773,y:184.45},10).to({_off:true},11).wait(42));

	// Mask: PDF LIKE A BOSS - Edge 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_189 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_3_graphics_189,x:305.25,y:245.45}).wait(25).to({graphics:null,x:0,y:0}).wait(42));

	// gold gradient
	this.instance_9 = new lib.goldGradient();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-267.85,298.9,1,1,-28.2168,0,0,205.1,349);
	this.instance_9.alpha = 0.6016;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(189).to({_off:false},0).to({x:773,y:184.45},10).to({_off:true},15).wait(42));

	// Mask: PDF LIKE A BOSS (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_191 = new cjs.Graphics().p("AQndiQh2hLgxiGID7iSQBACZCiAAQCHAAAAhOQAAgxhNggIiRgsQlVhkAAkEQAAifBxhiQB0hjCqAAQCQAABvBEQBwBEA7B+Ij2CRQg2iAh9AAQhqAAAABLQAAAnAoAZQAoAbB1AiICGAuQA2AXA5AnQB4BPAACsQAACph4BfQh3BgjFAAQizAAh7hNgAAidiQh1hLgxiGID6iSQBACZCiAAQCHAAAAhOQAAgxhNggIiRgsQlUhkAAkEQAAifBwhiQB0hjCqAAQCQAABvBEQBwBEA7B+Ij2CRQg2iAh9AAQhqAAAABLQAAAnAoAZQAoAbB1AiICGAuQA2AXA5AnQB4BPAACsQAACph4BfQh3BgjFAAQizAAh7hNgA0ccCQiuitAAj9QAAj9CuisQCviuD+AAQD8AACuCuQCwCtAAD8QAAD7iwCvQivCtj7AAQj9AAiwitgAxNR5QhYBWAACJQAACIBYBZQBZBWCFAAQCEAABZhWQBYhZAAiIQAAiJhYhWQhYhZiFAAQiFAAhZBZgEgm+AeWIAAx9IHFAAQCtAABmBZQBnBYAACWQAACPhqBVQCQBWAACrQAACbhpBaQhqBciuAAgEgiZAaPIC3AAQAsAAAcgaQAbgcAAgrQAAgrgbgbQgcgagsAAIi3AAgEgiZATUICYAAQAoAAAagXQAbgZAAgpQAAgpgbgZQgZgZgpAAIiYAAgEAiDAIyIgximIl+AAIgyCmIk+AAIF7x8IFlAAIF7R8gEAgGACQIh0mGIhzGGIDnAAgAAsIyIAAx8ILaAAIAAESIm1AAIAACgIGMAAIAAENImMAAIAACpIG9AAIAAEUgAm0IyIlKoCIAAICIklAAIAAx8IElAAIAAHjIE5njIFIAAIlsIvIF8JNgA5dIyIAAx8IElAAIAAR8gEgm+AIyIAAx8IElAAIAANgIGMAAIAAEcgAjesxIAAx9IK/AAIAAEdImbAAIAAC6IGTAAIAAEcImTAAIAAGKgA2tsxIAAx9IHTAAQDsAAChCmQChCmAADzQAAD0ihCmQigCkjtAAgAyAxNICmAAQB3AABMhPQBLhQAAiDQAAiFhLhNQhLhQh4AAIimAAgEgm+gMxIAAx9IG+AAQCuAAB2ByQB2BxAACvQAACwh2ByQh2BwiuAAIiZAAIAAFZgEgiZgWgICZAAQAyAAAhgjQAhgjAAg2QAAg1ghgiQghghgyAAIiZAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_4_graphics_191,x:305.375,y:245.225}).wait(23).to({graphics:null,x:0,y:0}).wait(42));

	// gold gradient
	this.instance_10 = new lib.goldGradient();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-267.85,298.9,1,1,-28.2168,0,0,205.1,349);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(191).to({_off:false},0).to({x:773,y:184.45},10).to({_off:true},13).wait(42));

	// BOSS
	this.instance_11 = new lib.text_gold_BOSS();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-241.35,-55.9,0.95,0.95,0,0,0,750,1000);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(180).to({_off:false},0).to({scaleX:1,scaleY:1,x:-184.55,y:-162.85},1,cjs.Ease.quadIn).to({x:-238.6,y:-123.1},5,cjs.Ease.quadOut).to({_off:true},28).wait(42));

	// LIKE A
	this.instance_12 = new lib.text_gold_LIKEA();
	this.instance_12.parent = this;
	this.instance_12.setTransform(182.8,29.55,0.95,0.95,0,0,0,750,1000);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(174).to({_off:false},0).to({scaleX:1,scaleY:1,x:415,y:-243.5},1,cjs.Ease.quadIn).to({x:290.3,y:-123.1},5,cjs.Ease.quadOut).to({_off:true},34).wait(42));

	// PDF
	this.instance_13 = new lib.text_gold_PDF();
	this.instance_13.parent = this;
	this.instance_13.setTransform(417.2,61.85,0.95,0.95,0,0,0,750,1000);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(167).to({_off:false},0).to({scaleX:1,scaleY:1,x:694.5,y:-243.5},2,cjs.Ease.quadIn).to({x:608.5,y:-123.1},6,cjs.Ease.quadOut).to({_off:true},39).wait(42));

	// boss
	this.instance_14 = new lib.txt_combine_3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-618.85,1231.15,1,1,0,0,0,750,1000);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({_off:false},0).to({x:-286.95,y:899.25},1).to({x:-340.25,y:952.55},6).to({_off:true},15).wait(217));

	// like a
	this.instance_15 = new lib.txt_combine_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-210.05,1234.85,1,1,0,0,0,750,1000);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).to({x:123.1,y:901.7},1).to({x:67.4,y:957.4},6).to({_off:true},20).wait(217));

	// combine
	this.instance_16 = new lib.txt_combine_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(244.9,1241.1,1,1,0,0,0,750,1000);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).to({x:642.85,y:909.15},2).to({x:595.55,y:956.45},6).to({_off:true},26).wait(217));

	// process_PDF
	this.instance_17 = new lib.process_PDF("synched",8,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(294.55,340.25,1,1,0,0,0,-0.5,108.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(39).to({_off:false},0).wait(10).to({startPosition:18},0).to({y:460.25,startPosition:27},9,cjs.Ease.quadInOut).wait(24).to({startPosition:51},0).wait(1).to({regX:55.7,regY:18.3,x:350.75,y:366.75,startPosition:52},0).wait(1).to({y:354.1,startPosition:53},0).wait(1).to({y:327,startPosition:54},0).wait(1).to({y:286.85,startPosition:55},0).wait(1).to({y:248.1,startPosition:56},0).wait(1).to({y:218.15,startPosition:57},0).wait(1).to({y:195.9,startPosition:58},0).wait(1).to({y:179.25,startPosition:59},0).wait(1).to({y:166.6,startPosition:60},0).wait(1).to({y:156.95,startPosition:61},0).wait(1).to({y:149.7,startPosition:62},0).wait(1).to({y:144.35,startPosition:63},0).wait(1).to({y:140.55,startPosition:64},0).wait(1).to({y:138.05,startPosition:65},0).wait(1).to({y:136.65,startPosition:66},0).wait(1).to({regX:-0.5,regY:108.5,x:294.55,y:226.45,startPosition:67},0).to({_off:true},69).wait(89));

	// background
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9E3E1").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape_28.setTransform(300,250);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FB3836","#FB6159"],[0,1],-300,0,300,0).s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape_29.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},167).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1068.8,-993.5,2509.8,2193.5);
// library properties:
lib.properties = {
	id: 'E21032694E5845FEA2294D9A61B87334',
	width: 600,
	height: 500,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/sprite.jpg?1564427684442", id:"sprite"},
		{src:"images/sprite_mask.png?1564427684442", id:"sprite_mask"}
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
an.compositions['E21032694E5845FEA2294D9A61B87334'] = {
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