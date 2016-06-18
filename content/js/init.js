    var MaleHero = {
      IdleDown:{x:0, y:257, h:32, w:32},
      WalkDown1:{x:32, y:257, h:32, w:32},
      WalkDown2:{x:64, y:257, h:32, w:32},
      
      IdleLeft:{x:0, y:288, h:32, w:32},
      WalkLeft1:{x:32, y:288, h:32, w:32},
      WalkLeft2:{x:64, y:288, h:32, w:32},
      
      IdleRight:{x:0, y:320, h:32, w:32},
      WalkRight1:{x:32, y:320, h:32, w:32},
      WalkRight2:{x:64, y:320, h:32, w:32},
      
      IdleUp:{x:0, y:352, h:32, w:32},
      WalkUp1:{x:32, y:352, h:32, w:32},
      WalkUp2:{x:64, y:352, h:32, w:32},
      
      DeadForward:{x:288, y:320, h:32, w:32},
      DeadBack:{x:320, y:320, h:32, w:32},
    };
	
	var FemaleHero = {
      IdleDown:{x:96, y:257, h:32, w:32},
      WalkDown1:{x:128, y:257, h:32, w:32},
      WalkDown2:{x:160, y:257, h:32, w:32},
      
      IdleLeft:{x:96, y:288, h:32, w:32},
      WalkLeft1:{x:128, y:288, h:32, w:32},
      WalkLeft2:{x:160, y:288, h:32, w:32},
      
      IdleRight:{x:96, y:320, h:32, w:32},
      WalkRight1:{x:128, y:320, h:32, w:32},
      WalkRight2:{x:160, y:320, h:32, w:32},
      
      IdleUp:{x:96, y:352, h:32, w:32},
      WalkUp1:{x:128, y:352, h:32, w:32},
      WalkUp2:{x:160, y:352, h:32, w:32},
      
      DeadForward:{x:288, y:352, h:32, w:32},
      DeadBack:{x:320, y:352, h:32, w:32},
    };
	
	var Skeleton = {
      IdleDown:{x:192, y:257, h:32, w:32},
      WalkDown1:{x:224, y:257, h:32, w:32},
      WalkDown2:{x:256, y:257, h:32, w:32},
      
      IdleLeft:{x:192, y:288, h:32, w:32},
      WalkLeft1:{x:224, y:288, h:32, w:32},
      WalkLeft2:{x:256, y:288, h:32, w:32},
      
      IdleRight:{x:192, y:320, h:32, w:32},
      WalkRight1:{x:224, y:320, h:32, w:32},
      WalkRight2:{x:256, y:320, h:32, w:32},
      
      IdleUp:{x:192, y:352, h:32, w:32},
      WalkUp1:{x:224, y:352, h:32, w:32},
      WalkUp2:{x:256, y:352, h:32, w:32},
      
      Dead:{x:384, y:352, h:32, w:32},
    };
	
	var Bat = {
      IdleDown:{x:96, y:385, h:32, w:32},
      WalkDown1:{x:128, y:385, h:32, w:32},
      WalkDown2:{x:160, y:385, h:32, w:32},
      
      IdleLeft:{x:96, y:416, h:32, w:32},
      WalkLeft1:{x:128, y:416, h:32, w:32},
      WalkLeft2:{x:160, y:416, h:32, w:32},
      
      IdleRight:{x:96, y:448, h:32, w:32},
      WalkRight1:{x:128, y:448, h:32, w:32},
      WalkRight2:{x:160, y:448, h:32, w:32},
      
      IdleUp:{x:96, y:480, h:32, w:32},
      WalkUp1:{x:128, y:480, h:32, w:32},
      WalkUp2:{x:160, y:480, h:32, w:32},
      
      Dead:{x:384, y:416, h:32, w:32},
    };
	
	var Blob = {
      IdleDown:{x:0, y:385, h:32, w:32},
      WalkDown1:{x:32, y:385, h:32, w:32},
      WalkDown2:{x:64, y:385, h:32, w:32},
      
      IdleLeft:{x:0, y:416, h:32, w:32},
      WalkLeft1:{x:32, y:416, h:32, w:32},
      WalkLeft2:{x:64, y:416, h:32, w:32},
      
      IdleRight:{x:0, y:448, h:32, w:32},
      WalkRight1:{x:32, y:448, h:32, w:32},
      WalkRight2:{x:64, y:448, h:32, w:32},
      
      IdleUp:{x:0, y:480, h:32, w:32},
      WalkUp1:{x:32, y:480, h:32, w:32},
      WalkUp2:{x:64, y:480, h:32, w:32},
      
      Dead:{x:384, y:384, h:32, w:32},
    };
	
	var Ghost = {
      IdleDown:{x:192, y:385, h:32, w:32},
      WalkDown1:{x:224, y:385, h:32, w:32},
      WalkDown2:{x:256, y:385, h:32, w:32},
      
      IdleLeft:{x:192, y:416, h:32, w:32},
      WalkLeft1:{x:224, y:416, h:32, w:32},
      WalkLeft2:{x:256, y:416, h:32, w:32},
      
      IdleRight:{x:192, y:448, h:32, w:32},
      WalkRight1:{x:224, y:448, h:32, w:32},
      WalkRight2:{x:256, y:448, h:32, w:32},
      
      IdleUp:{x:192, y:480, h:32, w:32},
      WalkUp1:{x:224, y:480, h:32, w:32},
      WalkUp2:{x:256, y:480, h:32, w:32},
      
      Dead:{x:384, y:448, h:32, w:32},
    };
	
	var Spider = {
      IdleDown:{x:288, y:385, h:32, w:32},
      WalkDown1:{x:320, y:385, h:32, w:32},
      WalkDown2:{x:352, y:385, h:32, w:32},
      
      IdleLeft:{x:288, y:416, h:32, w:32},
      WalkLeft1:{x:320, y:416, h:32, w:32},
      WalkLeft2:{x:352, y:416, h:32, w:32},
      
      IdleRight:{x:288, y:448, h:32, w:32},
      WalkRight1:{x:320, y:448, h:32, w:32},
      WalkRight2:{x:352, y:448, h:32, w:32},
      
      IdleUp:{x:288, y:480, h:32, w:32},
      WalkUp1:{x:320, y:480, h:32, w:32},
      WalkUp2:{x:352, y:480, h:32, w:32},
      
      Dead:{x:384, y:480, h:32, w:32},
    };
	
	var Terrain = {
		Grass:{x:448, y:32, h:32, w:32},
		TallGrass:{x:480, y:32, h:32, w:32},
		Weeds:{x:448, y:64, h:32, w:32},
		Flowers:{x:480, y:64, h:32, w:32},
	}
    
	// Load our images
    var texture = new Image();
    texture.src = "content/images/Tiny32-Complete-Spritesheet-Repack3.png";
	var battle_scene_outside = new Image();
	battle_scene_outside.src = "content/images/battle_scene.png";
	var battle_scene_outside_night = new Image();
	battle_scene_outside_night.src = "content/images/battle_scene_night.png";
	var intro_house = new Image();
	intro_house.src = "content/images/tiny32.png";
    
    var starter_village = new Image();
    starter_village.src = "content/images/starter-village-2.png";

    // requestAnimationFrame polyfill
    // Thanks to: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    (function(){	
		var lastTime = 0;
		var currTime, timeToCall, id;
		var vendors = ['ms', 'moz', 'webkit', 'o'];		
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = 
			  window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
		}	 
		if (!window.requestAnimationFrame)
		{
			window.requestAnimationFrame = function(callback, element) {
				currTime = Date.now();
				timeToCall = Math.max(0, 16 - (currTime - lastTime));
				id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
				  timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}	 
		if (!window.cancelAnimationFrame)
		{
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
		}	
	})(); 

    // wrapper for our game "classes", "methods" and "objects"
	window.Game = {};
    
    
    
    
    // A few more global functions
    
    function getMousePosition(e){
		if (!e){
			var e = window.event;
		}
		if (e.pageX || e.pageY){
			return new vector2d(e.pageX, e.pageY);
		} else if (e.clientX || e.clientY){
			return new vector2d(e.clientX, e.clientY);
		}
	}
	
	// Function to draw a circle in canvas
	function circle(ctx,x,y,r) {
	  ctx.beginPath();
	  ctx.arc(x, y, r, 0, Math.PI*2, true);
	  ctx.closePath();
	  ctx.fill();
	}
	
	function resizeCanvas() {
	    var canvas = document.getElementById("gameCanvas");
	    var hudCanvas = document.getElementById("hudCanvas");


		var winSize = getWindowSize();
		var dragsize = winSize.height - 20;

		if (dragsize > 0){
		   canvas.height = dragsize;
		   canvas.width = winSize.width - 20;

		   hudCanvas.height = dragsize;
		   hudCanvas.width = winSize.width - 20;

		   }
		
		// When the canvas is resized we need to update the camera parameters as well to center on the character.
		Game.camera.wView = canvas.width;
		Game.camera.hView = canvas.height;
		Game.camera.xDeadZone = canvas.width/2;
		Game.camera.yDeadZone = canvas.height/2;
		
		Game.camera.viewportRect = new Game.Rectangle(Game.camera.xView, Game.camera.yView, Game.camera.wView, Game.camera.hView);	
		
		return false;
	}
	
	function getWindowSize() {
		var myWidth = 0, myHeight = 0;
		if (typeof (window.innerWidth) == 'number') {
			//Non-IE
			myWidth = window.innerWidth;
			myHeight = window.innerHeight;
		} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			//IE 6+ in 'standards compliant mode'
			myWidth = document.documentElement.clientWidth;
			myHeight = document.documentElement.clientHeight;
		} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
			//IE 4 compatible
			myWidth = document.body.clientWidth;
			myHeight = document.body.clientHeight;
		}
		return { width: myWidth, height: myHeight };
	}
	window.onresize = function () { resizeCanvas(); };