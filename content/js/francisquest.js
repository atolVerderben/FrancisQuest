    
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

    // requestAnimationFrame polyfill
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
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
	})(); // <-- added

    // wrapper for our game "classes", "methods" and "objects"
	window.Game = {};
	
	// wrapper for "class" Rectangle
	(function(){
		function Rectangle(left, top, width, height){
			this.left = left || 0;
			this.top = top || 0;
            this.width = width || 0;
			this.height = height || 0;
			this.right = this.left + this.width;
			this.bottom = this.top + this.height;
		}
		
		Rectangle.prototype.set = function(left, top, /*optional*/width, /*optional*/height){
			this.left = left;
            this.top = top;
            this.width = width || this.width;
            this.height = height || this.height
            this.right = (this.left + this.width);
            this.bottom = (this.top + this.height);
		}
		
		Rectangle.prototype.within = function(r) {
			return (r.left <= this.left && 
					r.right >= this.right &&
					r.top <= this.top && 
					r.bottom >= this.bottom);
		}		
		
		Rectangle.prototype.overlaps = function(r) {
			return (this.left < r.right && 
					r.left < this.right && 
					this.top < r.bottom &&
					r.top < this.bottom);
		}

		Rectangle.prototype.getCenter = function () {
		    return [this.left + this.width / 2, this.top + this.height / 2];
		}

        //Returns boolean based on point (vector2d)
		Rectangle.prototype.pointWithin = function (p) {
		    return (p.x > this.left && p.x < (this.left + this.width) && p.y > this.top && p.y < (this.top + this.height));
		}

		// add "class" Rectangle to our Game object
		Game.Rectangle = Rectangle;
	})();	

	// wrapper for "class" Camera (avoid global objects)
	(function(){
	
		// possibles axis to move the camera
		var AXIS = {
			NONE: "none", 
			HORIZONTAL: "horizontal", 
			VERTICAL: "vertical", 
			BOTH: "both"
		};

		// Camera constructor
		function Camera(xView, yView, canvasWidth, canvasHeight, worldWidth, worldHeight)
		{
			// position of camera (left-top coordinate)
			this.xView = xView || 0;
			this.yView = yView || 0;
			
			// distance from followed object to border before camera starts move
			this.xDeadZone = 0; // min distance to horizontal borders
			this.yDeadZone = 0; // min distance to vertical borders
			
			// viewport dimensions
			this.wView = canvasWidth;
			this.hView = canvasHeight;			
			
			// allow camera to move in vertical and horizontal axis
			this.axis = AXIS.BOTH;	
		
			// object that should be followed
			this.followed = null;
			
			// rectangle that represents the viewport
			this.viewportRect = new Game.Rectangle(this.xView, this.yView, this.wView, this.hView);				
								
			// rectangle that represents the world's boundary (room's boundary)
			this.worldRect = new Game.Rectangle(0, 0, worldWidth, worldHeight);			
		}

		// gameObject needs to have "x" and "y" properties (as world(or room) position)
		Camera.prototype.follow = function(gameObject, xDeadZone, yDeadZone)
		{		
			this.followed = gameObject;	
			this.xDeadZone = xDeadZone;
			this.yDeadZone = yDeadZone;
		}					
		
		Camera.prototype.update = function()
		{
			// keep following the player (or other desired object)
			if(this.followed != null)
			{		
				if(this.axis == AXIS.HORIZONTAL || this.axis == AXIS.BOTH)
				{		
					// moves camera on horizontal axis based on followed object position
					if(this.followed.x - this.xView  + this.xDeadZone > this.wView)
						this.xView = this.followed.x - (this.wView - this.xDeadZone);
					else if(this.followed.x  - this.xDeadZone < this.xView)
						this.xView = this.followed.x  - this.xDeadZone;
					
				}
				if(this.axis == AXIS.VERTICAL || this.axis == AXIS.BOTH)
				{
					// moves camera on vertical axis based on followed object position
					if(this.followed.y - this.yView + this.yDeadZone > this.hView)
						this.yView = this.followed.y - (this.hView - this.yDeadZone);
					else if(this.followed.y - this.yDeadZone < this.yView)
						this.yView = this.followed.y - this.yDeadZone;
				}						
				
			}		
			
			// update viewportRect
			this.viewportRect.set(this.xView, this.yView);
			
			// don't let camera leaves the world's boundary
			if(!this.viewportRect.within(this.worldRect))
			{
				if(this.viewportRect.left < this.worldRect.left)
					this.xView = this.worldRect.left;
				if(this.viewportRect.top < this.worldRect.top)					
					this.yView = this.worldRect.top;
				if(this.viewportRect.right > this.worldRect.right)
					this.xView = this.worldRect.right - this.wView;
				if(this.viewportRect.bottom > this.worldRect.bottom)					
					this.yView = this.worldRect.bottom - this.hView;
			}
			
		}	
		
		// add "class" Camera to our Game object
		Game.Camera = Camera;
		
	})();

	(function () {
	    function DiceRoller() {

	    }

	    DiceRoller.prototype.RollDie = function(number, sides, condition){
	        condition = ((condition) ? condition : 0);
			var rolls, total = 0;
			for(var i=0; i < number; i++){
				rolls[i] = Math.floor((Math.random() * sides) + 1);
				total += rolls[i];
			}
			return total;
			
	    }
		
		Game.DiceRoller = DiceRoller;
	})();
	
	(function(){
	    function Enemy(type, playerLevel) {
	        playerLevel = ((playerLevel) ? playerLevel : 1);

	        // Create a semi-random set up for the enemies
	        this.level = playerLevel;

			
			this.health = 25;//Game.DiceRoller.RollDie(1, 6) * this.level;//25;
			this.phyiscalAttack = 8;
			this.defense = 4;
			
			this.x = 50;
			this.y = 50;
			
			this.width = 32;
			this.height = 32;
			this.sw = 32;
			this.sh = 32;
			this.moving = false;
			
			this.dead = false;
			
			// animation rules
			this.animationStep = 1;
			this.animationEndStep = 4;
			this.animationCounter = 0;
			this.animationEndCounter = 10;
			this.animationBattleEndCounter = 50;
			this.facing = "Down";
			
			this.sprite = Blob;
			if(type == "blob"){
				this.sprite = Blob;
			}
			if(type == "ghost"){
				this.sprite = Ghost;
			}
			if(type == "bat"){
				this.sprite = Bat;
			}
			if(type == "skeleton"){
				this.sprite = Skeleton;
			}
			if(type == "spider"){
				this.sprite = Spider;
			}
			
			this.type = type;
			
			this.sx = this.sprite["IdleDown"].x;
			this.sy = this.sprite["IdleDown"].y;
		}
		
		Enemy.prototype.attack = function(enemy){
			var rawAttack = Math.floor(this.phyiscalAttack * Math.random());
			var dealtDmg = rawAttack - enemy.defense;
			if(dealtDmg < 0)
				dealtDmg = 1;
			
			return dealtDmg;
		}
		
		
		
		Enemy.prototype.draw_battle_scene = function(context){
			if(this.animationStep == 2 || this.animationStep == 4){
			this.sx = this.sprite["Idle" + this.facing].x;
			this.sy = this.sprite["Idle" + this.facing].y;
		  }
		  else if(this.animationStep == 3){
			this.sx = this.sprite["Walk" + this.facing + 2].x;
        this.sy = this.sprite["Walk" + this.facing + 2].y;
		  }else{
        this.sx = this.sprite["Walk" + this.facing + this.animationStep].x;
        this.sy = this.sprite["Walk" + this.facing + this.animationStep].y;
		  }
			this.animationCounter += 1;
		  if(this.animationCounter >= this.animationBattleEndCounter){
			this.animationCounter = 0;
			this.animationStep += 1;
		  }
		  
		  if(this.animationStep > this.animationEndStep){
			this.animationStep = 1;
		  }
		  
		  if(this.dead){
			this.sx = this.sprite["Dead"].x;
			this.sy = this.sprite["Dead"].y;
		  }
		  
		  var canvas = document.getElementById("battleCanvas");
		  context.save();
		  context.drawImage(texture, this.sx, this.sy, this.sw, this.sh, (canvas.width/2+64), (canvas.height/2-80), 128, 128);
		  context.restore();
			
		}
		
		Enemy.prototype.draw = function(context, xView, yView){
		  if(this.moving){
			this.sx = this.sprite["Walk" + this.facing + this.animationStep].x;
			this.sy = this.sprite["Walk" + this.facing + this.animationStep].y;
		  }
		  
		  if(!this.moving){
			this.sx = this.sprite["Idle" + this.facing].x;
			this.sy = this.sprite["Idle" + this.facing].y;
		  }
		  
		  this.animationCounter += 1;
		  if(this.animationCounter >= this.animationEndCounter){
			this.animationCounter = 0;
			this.animationStep += 1;
		  }
		  
		  if(this.animationStep > this.animationEndStep){
			this.animationStep = 1;
		  }
		  
		  context.save();
		  context.drawImage(texture, this.sx, this.sy, this.sw, this.sh, (this.x-this.width/2) - xView, (this.y-this.height/2)- yView, this.width, this.height);
		  context.restore();
		  
		}
		
		
		Game.Enemy = Enemy;
	})();
	
	// wrapper for "class" Player
	(function(){
		function Player(x, y){
			// (x, y) = center of object
			// ATTENTION:
			// it represents the player position on the world(room), not the canvas position
			this.x = x;
			this.y = y;
			
			// player statistics
			this.health = 10;
			this.level = 1;
			this.exp = 0;
			this.exp_next_level = 100;
			this.physicalAttack = 10;
			this.magicalAttack = 10;
			this.defense = 5;
			this.magicalResistancs = 10;
			this.dead = false;
			this.name = "Francis";
			
			//statistics!
			this.numEnemiesKilled = 0;
			this.dmgDealt = 0;
			
			// move speed in pixels per second
			this.speed = 200;		
			
			// render properties
			this.width = 32;
			this.height = 32;
			this.sprite = MaleHero;
			this.sx = this.sprite["IdleDown"].x;
			this.sy = this.sprite["IdleDown"].y;
			this.sw = 32;
			this.sh = 32;
			this.facing = "Down";
			this.moving = false;
      
			// animation rules
			this.animationStep = 1;
			this.animationEndStep = 4;
			this.animationCounter = 0;
			this.animationEndCounter = 10;
		}
		
		Player.prototype.setgender = function(gender){
			this.sprite = ((gender == "male")?MaleHero:FemaleHero);
			this.name = ((gender == "male")?"Francis":"Frances");
		}
		
		Player.prototype.attack = function(enemy){
			var rawAttack = Math.floor(this.physicalAttack * (Math.random() +1));
			var dealtDmg = rawAttack - enemy.defense;
			if(dealtDmg <= 0)
				dealtDmg = 1;
			this.dmgDealt += dealtDmg;
			return dealtDmg;
		}
		
		Player.prototype.defend = function(enemy){
		
		}
		
		Player.prototype.update = function(step, worldWidth, worldHeight){
			// parameter step is the time between frames ( in seconds )
			//document.getElementById("txtFacing").value = this.facing;
			//document.getElementById("txtMoving").value = ((this.moving)?"moving":"still");
				// check controls and move the player accordingly
			// We are going to not allow diagonal movement for this particular game
			
			if(this.dead){
				return;
			}
			
			if(Game.controls.left){
				if(this.moving && (this.facing == "Up" || this.facing == "Down")){}else{
						  this.x -= this.speed * step;
				  this.facing = "Left";
				  this.moving = true;
				}
			}
			if(Game.controls.up){
				if(this.moving && (this.facing == "Left" || this.facing == "Right")){}else{
					this.y -= this.speed * step;
					this.facing = "Up";
					this.moving = true;
				}
			}
			if(Game.controls.right){
				if((this.moving && this.facing == "Up") || (this.moving && this.facing == "Down")){}else{
					  this.x += this.speed * step;
					this.facing = "Right";
					this.moving = true;
				}
			}
			if(Game.controls.down){
				if(this.moving && (this.facing == "Left" || this.facing == "Right")){}else{
					this.y += this.speed * step;
					this.facing = "Down";
					this.moving = true;
				}
			}

			if(!(Game.controls.down || Game.controls.up || Game.controls.left || Game.controls.right)){
			this.moving = false;
			}
      
			// don't let player leaves the world's boundary
			if(this.x - this.width/2 < 0){
				this.x = this.width/2;
			}
			if(this.y - this.height/2 < 0){
				this.y = this.height/2;
			}
			if(this.x + this.width/2 > worldWidth){
				this.x = worldWidth - this.width/2;
			}
			if(this.y + this.height/2 > worldHeight){
				this.y = worldHeight - this.height/2;
			}
			
			
		}
		
		Player.prototype.draw = function(context, xView, yView){		
			// draw a simple rectangle shape as our player model
			context.save();		
			context.fillStyle = "black";
			// before draw we need to convert player world's position to canvas position			
			context.fillRect((this.x-this.width/2) - xView, (this.y-this.height/2) - yView, this.width, this.height);
			context.restore();			
		}
    
    Player.prototype.animated_draw = function(context, xView, yView){
      if(this.moving){
		  if(this.animationStep == 2 || this.animationStep == 4){
			this.sx = this.sprite["Idle" + this.facing].x;
			this.sy = this.sprite["Idle" + this.facing].y;
		  }
		  else if(this.animationStep == 3){
			this.sx = this.sprite["Walk" + this.facing + 2].x;
        this.sy = this.sprite["Walk" + this.facing + 2].y;
		  }else{
        this.sx = this.sprite["Walk" + this.facing + this.animationStep].x;
        this.sy = this.sprite["Walk" + this.facing + this.animationStep].y;
		  }
      }
      
      if(!this.moving){
        this.sx = this.sprite["Idle" + this.facing].x;
        this.sy = this.sprite["Idle" + this.facing].y;
      }
      
      this.animationCounter += 1;
      if(this.animationCounter >= this.animationEndCounter){
        this.animationCounter = 0;
        this.animationStep += 1;
      }
      
      if(this.animationStep > this.animationEndStep){
        this.animationStep = 1;
      }
      
	  if(this.dead){
		  this.sx = this.sprite["DeadForward"].x;
		  this.sy = this.sprite["DeadForward"].y;
	  }
	  
      context.save();
      context.drawImage(texture, this.sx, this.sy, this.sw, this.sh, (this.x-this.width/2) - xView, (this.y-this.height/2)- yView, this.width, this.height);
      context.restore();
      
    }
		
		// add "class" Player to our Game object
		Game.Player = Player;
		
	})();

	// wrapper for "class" Map
	(function(){
		function Map(width, height){
			// map dimensions
			this.width = width;
			this.height = height;
			
			// map texture
			this.image = null;
		}
		
		// generate an example of a large map
		Map.prototype.generate = function(){
			var ctx = document.createElement("canvas").getContext("2d");		
			ctx.canvas.width = this.width;
			ctx.canvas.height = this.height;		
			
			var rows = ~~(this.width/32) + 1;
			var columns = ~~(this.height/32) + 1;
			
			var color = "green";				
			ctx.save();			
			//ctx.fillStyle = color;		    
			for (var x = 0, i = 0; i < rows; x+=32, i++) {
				//ctx.beginPath();			
				for (var y = 0, j=0; j < columns; y+=32, j++) {            
					
					var rand = Math.floor((Math.random() * 100) + 1);
					//alert(rand);
					var sx = 0;
					var sy = 0;
					if(rand <=50){
						sx = Terrain["Grass"].x;
						sy = Terrain["Grass"].y;
						
					}
					else if(rand > 50 && rand <= 60){
						sx = Terrain["TallGrass"].x;
						sy = Terrain["TallGrass"].y;
					}
					else if(rand > 60 && rand <=90){
						sx = Terrain["Weeds"].x;
						sy = Terrain["Weeds"].y;
					}
					else if(rand > 90){
						sx = Terrain["Flowers"].x;
						sy = Terrain["Flowers"].y;
					}
					//console.log("x: " + sx + "y: " + sy);
					//ctx.save();
					ctx.drawImage(texture, sx, sy, 32, 32, x, y, 32, 32);
					//ctx.restore();
					//ctx.rect (x, y, 32, 32);				
				}
				//color = (color == "green" ? "blue" : "green");
				//ctx.fillStyle = color;
				//ctx.fill();
				//ctx.closePath();			
			}		
			ctx.restore();	
			
			// store the generate map as this image texture
			this.image = new Image();
			this.image.src = ctx.canvas.toDataURL("image/png");					
			
			// clear context
			ctx = null;
		}
		
		// generate an example of a large map
		Map.prototype.generate_abstract = function(){
			var ctx = document.createElement("canvas").getContext("2d");		
			ctx.canvas.width = this.width;
			ctx.canvas.height = this.height;		
			
			var rows = ~~(this.width/44) + 1;
			var columns = ~~(this.height/44) + 1;
			
			var color = "green";				
			ctx.save();			
			ctx.fillStyle = color;		    
			for (var x = 0, i = 0; i < rows; x+=44, i++) {
				ctx.beginPath();			
				for (var y = 0, j=0; j < columns; y+=44, j++) {            
					ctx.rect (x, y, 40, 40);				
				}
				color = (color == "green" ? "blue" : "green");
				ctx.fillStyle = color;
				ctx.fill();
				ctx.closePath();			
			}		
			ctx.restore();	
			
			// store the generate map as this image texture
			this.image = new Image();
			this.image.src = ctx.canvas.toDataURL("image/png");					
			
			// clear context
			ctx = null;
		}
		
		Map.prototype.create = function(imgURL){
			$.getJSON("test.json", function(json) {
				console.log(json); // this will show the info it in firebug console
			});
		}
		
		// draw the map adjusted to camera
		Map.prototype.draw = function(context, xView, yView){					
			// easiest way: draw the entire map changing only the destination coordinate in canvas
			// canvas will cull the image by itself (no performance gaps -> in hardware accelerated environments, at least)
			context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -xView, -yView, this.image.width, this.image.height);			
		}
		
		// didactic way:
		Map.prototype.didactic_draw = function(context, xView, yView){
			var sx, sy, dx, dy;
            var sWidth, sHeight, dWidth, dHeight;
			
			// offset point to crop the image
			sx = xView;
			sy = yView;
			
			// dimensions of cropped image			
			sWidth =  context.canvas.width;
			sHeight = context.canvas.height;

			// if cropped image is smaller than canvas we need to change the source dimensions
			if(this.image.width - sx < sWidth){
				sWidth = this.image.width - sx;
			}
			if(this.image.height - sy < sHeight){
				sHeight = this.image.height - sy; 
			}
			
			// location on canvas to draw the croped image
			dx = 0;
			dy = 0;
			// match destination with source to not scale the image
			dWidth = sWidth;
			dHeight = sHeight;									
			
			context.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
		}
		
		// add "class" Map to our Game object
		Game.Map = Map;
		
	})();

	
	(function () {
	    function Button(x, y, w, h, text, func) {
	        this.rectangle = new Game.Rectangle(x, y, w, h);
	        this.x = x;
	        this.y = y;
	        this.width = w;
	        this.height = h;
	        this.pressed = func;
	        this.text = text;
			this.active = true;	        
	    }

	    Button.prototype.setAction = function (canvas, func) {
	        canvas.onmouseup = function(e){
	            var mouse = getMousePosition(e).sub(new vector2d(canvas.offsetLeft, canvas.offsetTop));
	            if (mouse.x > this.x && mouse.x < (this.x + this.width) && mouse.y > this.y && mouse.y < (this.y + this.height)) {								
	                func();
	            }
	        }
	    }

	    Button.prototype.draw = function (ctx) {
	        ctx.font = "10pt Arial";
	        ctx.fillStyle = '#4e4a4e';
	        ctx.fillRect(this.rectangle.left, this.rectangle.top, this.rectangle.width, this.rectangle.height);
	        ctx.strokeStyle = "#deeed6";
	        ctx.strokeRect(this.rectangle.left + 8, this.rectangle.top + 8, this.rectangle.width - 16, this.rectangle.height - 16);
	        ctx.fillStyle = '#deeed6';
	        ctx.textAlign = "center";
	        ctx.fillText(this.text, this.rectangle.left + this.rectangle.width/2, this.rectangle.top + this.rectangle.height/2 + 5);
	    }

	    Game.Button = Button;
	})();

	(function(){
		
		function BattleScene(){
			this.battle_baddie = null;
			this.btnAttack = new Game.Button(88, 300, 100, 50, "ATTACK", null);
			this.btnRun = new Game.Button(300, 300, 100, 50, "RUN", null);
			this.dmgAttack = false;
			
			this.dmgDisplayCounter = 0;
			this.dmgDisplayLength = 30;
			this.dmgAttack = false;
			this.dmgText = "";
			this.dmgText_Y_modifier = 0;
			
			this.playerTurn = true;
			this.textWriter = new Game.TextWriter();
			
			this.battleText = "Begin Battle";
			
			this.battleEnded = false; // Use this for the closing statement
			
		}
		
		BattleScene.prototype.initialize = function(battleCanvas){
			inBattle = true;
			this.playerTurn = true;
			
			battleCanvas.style.zIndex = 10;
			var rand = Math.floor((Math.random() * 5) + 1);
			var enemyName = "blob";
			if(rand == 1)
				enemyName = "blob";
			else if(rand == 2)
				enemyName = "bat";
			else if(rand == 3)
				enemyName = "ghost";
			else if(rand == 4)
				enemyName = "skeleton";
			else
				enemyName = "spider";
			this.battle_baddie = new Game.Enemy(enemyName);
			this.battleText = "A " + enemyName + " appears!";
			
		}
		
		BattleScene.prototype.update = function(step){
			var inBattle = true;
			
			
			
			if(this.dmgAttack == true){
				this.dmgDisplayCounter++;
				if(this.dmgDisplayLength/this.dmgDisplayCounter < 4){
					this.dmgText_Y_modifier++;
				}else{
					this.dmgText_Y_modifier--;
				}
				
				if(this.dmgDisplayCounter > this.dmgDisplayLength){
					this.dmgAttack = false;
					this.dmgDisplayCounter = 0;
					this.dmgText_Y_modifier = 0;
					
					this.btnAttack.active = true;
					this.btnRun.active = true;
					this.playerTurn = !this.playerTurn;
					
					if(this.battle_baddie.dead){
						inBattle = false;
						battleCanvas.style.zIndex = 0;
						Game.player.numEnemiesKilled += 1;
					}
					if(Game.player.dead){
						inBattle = false;
						battleCanvas.style.zIndex = 0;
					}
					
				}else{
					this.btnAttack.active = false;
					this.btnRun.active = false;
				}
			}else{
				if(this.playerTurn === false){ // turn for the baddie to attack
				this.dmgDisplayCounter = 0;
				this.dmgText_Y_modifier = 0;
				var attack = this.battle_baddie.attack(Game.player);
				this.dmgText = "-" + attack;
				Game.player.health -= attack;
				this.dmgAttack = true;
				if(Game.player.health <= 0){
					Game.player.dead = true;
				}
				this.battleText = this.battle_baddie.type + " attacked " + Game.player.name + " for " + attack + " dmg";
			}
			}
			return inBattle;
		}
		
		BattleScene.prototype.draw = function(ctxBattle, isDay){
			if(isDay){
				ctxBattle.drawImage(battle_scene_outside, 0, 0);
			}else{
				ctxBattle.drawImage(battle_scene_outside_night, 0, 0);
			}
			
			
			
			
			this.battle_baddie.draw_battle_scene(ctxBattle);
			if(Game.player.dead){
				ctxBattle.drawImage(texture, Game.player.sprite["DeadBack"].x, Game.player.sprite["DeadBack"].y, 
				Game.player.sprite["DeadBack"].w, Game.player.sprite["DeadBack"].h, -64, 200, 256, 256);
			}else{
			ctxBattle.drawImage(texture, Game.player.sprite["IdleUp"].x, Game.player.sprite["IdleUp"].y, 
				Game.player.sprite["IdleUp"].w, Game.player.sprite["IdleUp"].h, -64, 200, 256, 256);
			
			}
			
			
			ctxBattle.fillStyle = "#2b3b5f";	
			ctxBattle.globalAlpha = 0.75;
			ctxBattle.fillRect(0, 240, 448, 200);
			ctxBattle.globalAlpha = 1;
			
			this.textWriter.draw_text(ctxBattle, this.battleText, "18pt Arial", battleCanvas.width/2, 265, "center");
			
			// Let's Draw Some Buttons
			this.btnAttack.draw(ctxBattle);
			this.btnRun.draw(ctxBattle);
			
			// Draw Dmg Text
			if(this.dmgAttack){
				if(this.playerTurn){
				this.textWriter.draw_text(ctxBattle, this.dmgText, "12pt Arial",
				(battleCanvas.width/2+64),(battleCanvas.height/2-64) + this.dmgText_Y_modifier, "center", "#d04648" );
				}
				else{
					this.textWriter.draw_text(ctxBattle, this.dmgText, "12pt Arial",
					(20),(battleCanvas.height/2-64/2) + this.dmgText_Y_modifier, "center", "#d04648" );
				}
				
			}
		}
		
		Game.BattleScene = BattleScene;
		
	})();
	
	(function(){
		
		function TextWriter(){
			
			this.timeCount = 0;
			this.timer = 10;
			
		}
		
		TextWriter.prototype.draw_text = function(ctx, text, font, x, y, align, color){
			
			color = ((color) ?  color: "#FFFFFF");
			align = ((align) ? align : "left");
			
			ctx.textAlign = align;
			ctx.fillStyle = color;	
			ctx.strokeStyle = "#140c1c";
			ctx.font = font;
			ctx.strokeText(text, x+2 ,y+2);
			ctx.font = font;
			ctx.fillText(text, x ,y);
		}
		
		Game.TextWriter = TextWriter;
		
	})();
	
	// Game Script
	(function(){
		// prepare our game canvas
		var canvas = document.getElementById("gameCanvas");
		var context = canvas.getContext("2d");
		
		var battleCanvas = document.getElementById("battleCanvas");
		var ctxBattle = battleCanvas.getContext("2d");
		
		var introCanvas = document.getElementById("introCanvas");
		var ctxVideo = introCanvas.getContext("2d");

		var hudCanvas = document.getElementById("hudCanvas");
		var ctxHUD = hudCanvas.getContext("2d");


	    //create background songs
		//var backgroundMusic = document.createElement("audio");
		//backgroundMusic.setAttribute("src", "content/sounds/Town_-_Hillside_Hamlet_Reprise.mp3");
		//backgroundMusic.setAttribute('autoplay', 'autoplay'); // <-- We'll use autoplay until we get more background music laterS
		//backgroundMusic.setAttribute("loop", "loop");
		//backgroundMusic.addEventListener("load", function () {
		//    backgroundMusic.play();
		//}, true);

		var touchInterface = false;

        // game settings: // <-- some game settings were removed because requestAnimationFrame controls the screen automatically
		//var FPS = 30; <--removed
		//var INTERVAL = 1000/FPS; // milliseconds <--removed
        var last = 0; // last frame timestamp
        var now = 0; // current timestamp
        var step = now-last; // time between frames
		var inBattle = false;
		var dmgDisplayCounter = 0;
		var dmgDisplayLength = 60;
		var dmgAttack = false;
		var dmgText = "";
		var dmgText_Y_modifier = 0;
		
		var isDay = true;
		var currDayCount = 0;
		var dayCycleCount = 7200;
		
		var playVideo = false;
		var waitCounter = 0;
		
		// setup an object that represents the room
		var room = {
			width: 5000,
			height: 3000,
			map: new Game.Map(5000, 3000)
		};
		
		// generate a large image texture for the room
		//room.map.generate();
		 
		// setup player
		var player = new Game.Player(50, 50);
		
		var battle_baddie = null;
		
		var battleScene = new Game.BattleScene();
		
		var textwriter = new Game.TextWriter();
		
		// setup the magic camera !!!
		var camera = new Game.Camera(0, 0, canvas.width, canvas.height, room.width, room.height);		
		camera.follow(player, canvas.width / 2, canvas.height / 2);

		var drawTouchInterface = function () {

		    ctxHUD.save();
		    ctxHUD.globalAlpha = 0.5;

		    var yOffset = hudCanvas.height -205;

		    var path = new Path2D();
		    path.moveTo(5, yOffset);
		    path.lineTo(105, yOffset + 100);
		    path.lineTo(105, yOffset - 100);
		    //ctxHUD.fill(path);

		    path.moveTo(405, yOffset);
		    path.lineTo(305, yOffset + 100);
		    path.lineTo(305, yOffset - 100);

		    yOffset = hudCanvas.height - 5;

		    path.moveTo(205, yOffset);
		    path.lineTo(105, yOffset - 100);
		    path.lineTo(305, yOffset - 100);


		    yOffset = yOffset - 400;
		    path.moveTo(205, yOffset);
		    path.lineTo(105, yOffset + 100);
		    path.lineTo(305, yOffset + 100);

		    ctxHUD.fill(path);

		    

		    ctxHUD.globalAlpha = 1;
		    ctxHUD.restore();
		}
		

		//var path = new Path2D();
		//path.moveTo(60, yOffset);
		//path.lineTo(85, yOffset + 25);
		//path.lineTo(85, yOffset - 25);
	    ////ctxHUD.fill(path);

	    ////path.moveTo(165, yOffset);
	    ////path.lineTo(140, yOffset +25);
	    ////path.lineTo(140, yOffset - 25);

	    ////yOffset = yOffset + 50;

	    ////path.moveTo(112.5, yOffset);
	    ////path.lineTo(87.5, yOffset - 25);
	    ////path.lineTo(137.5, yOffset - 25);


	    ////yOffset = yOffset - 100;
	    ////path.moveTo(112.5, yOffset);
	    ////path.lineTo(87.5, yOffset + 25);
	    ////path.lineTo(137.5, yOffset + 25);


		var introMovie = function(step){
			Game.controls.down = false;
			Game.controls.up = false;
			Game.controls.left = false;
			Game.controls.right = false;
			//console.log("x: " + player.x + " y: " + player.y);
			waitCounter++;
			if(waitCounter < 30)
				return;
			
			if(player.y <= 160){
				Game.controls.down = true;
			}
			else if(player.y >=160 && player.x <= 270 && player.y < 200){
				player.moving = false;
				Game.controls.down = false;
				Game.controls.right = true;
			}
			if(player.y >=160 && player.x > 270){
				player.moving = false;
				Game.controls.down = true;
				Game.controls.right = false;
			}
			if(player.y >= 240){
				player.moving = false;
				Game.controls.down = false;
				Game.controls.left = true;
			}
			if(player.x <= 16){
				Game.controls.left = false;
				playVideo = false;
				update = update_game;
				draw = draw_game;
				ctxVideo.clearRect(0, 0, introCanvas.width, introCanvas.height);
				player.x = 50;
				player.y = 50;
				player.facing = "Down";
				//backgroundMusic.play();


				if (touchInterface) {
				    hudCanvas.onmousedown = function (e) {
				        var yOffset = hudCanvas.height - 205;
				        var mouse = getMousePosition(e).sub(new vector2d(hudCanvas.offsetLeft, hudCanvas.offsetTop));
				        if (mouse.x > 5 && mouse.x < 105 && mouse.y > yOffset - 100 && mouse.y < yOffset + 100) {
				            Game.controls.left = true;
				        }
				        if (mouse.x >= 305 && mouse.x <= 405 && mouse.y > yOffset - 100 && mouse.y < yOffset + 100) {
				            Game.controls.right = true;
				        }

				        var downOffset = hudCanvas.height - 5;
				        if (mouse.x > 105 && mouse.x < 305 && mouse.y > downOffset - 100 && mouse.y < downOffset + 100) {
				            Game.controls.down = true;
				        }

				        var upOffset = downOffset - 400;
				        if (mouse.x > 105 && mouse.x < 305 && mouse.y > upOffset && mouse.y < upOffset + 100) {
				            Game.controls.up = true;
				        }
				    }

				    hudCanvas.onmouseup = function (e) {
				        var yOffset = hudCanvas.height - 205;
				        var mouse = getMousePosition(e).sub(new vector2d(hudCanvas.offsetLeft, hudCanvas.offsetTop));
				        if (mouse.x > 5 && mouse.x < 105 && mouse.y > yOffset - 100 && mouse.y < yOffset + 100) {
				            Game.controls.left = false;
				        }
				        if (mouse.x >= 305 && mouse.x <= 405 && mouse.y > yOffset - 100 && mouse.y < yOffset + 100) {
				            Game.controls.right = false;
				        }

				        var downOffset = hudCanvas.height - 5;
				        if (mouse.x > 105 && mouse.x < 305 && mouse.y > downOffset - 100 && mouse.y < downOffset + 100) {
				            Game.controls.down = false;
				        }

				        var upOffset = downOffset - 400;
				        if (mouse.x > 105 && mouse.x < 305 && mouse.y > upOffset && mouse.y < upOffset + 100) {
				            Game.controls.up = false;
				        }
				    }
				}

			}
			
			player.update(step, 800, 436);
		}
		var update = function (step) { }
        
		//var btnTest = new Game.Button(88, 300, 100, 50, "ATTACK", null);
		//var btnTest2 = new Game.Button(300, 300, 100, 50, "RUN", null);


		// Game update function
		var update_game = function(step){ 
			if(!inBattle){
				player.update(step, room.width, room.height); // <-- edited
				camera.update();
				currDayCount++;
				if(currDayCount > dayCycleCount){
					console.log("day has changed");
					isDay = !isDay;
					currDayCount = 0;

					if (isDay) {
					    $("#MAIN").css("background-color", "#deeed6");
					}
					else {
					    $("#MAIN").css("background-color", "#140c1c");

					}

				}
				currDayCount++;
				
				//Random Encounter Logic
				if(player.moving === true){
					if(Math.floor((Math.random() * 1000) + 1) > 990){
					    inBattle = true;
						battleScene.initialize(battleCanvas);
						
						// And Give those Buttons some ACTIONS
						battleCanvas.onmouseup = function(e){
							var mouse = getMousePosition(e).sub(new vector2d(battleCanvas.offsetLeft, battleCanvas.offsetTop)); 

							if (battleScene.btnRun.rectangle.pointWithin(mouse) && battleScene.btnRun.active) {
								inBattle = false; //Run
								battleCanvas.style.zIndex = 0;
							}
							
							if (battleScene.btnAttack.rectangle.pointWithin(mouse) && battleScene.btnAttack.active) {
								
								battleScene.dmgDisplayCounter = 0;
								battleScene.dmgText_Y_modifier = 0;
								var attack = player.attack(battleScene.battle_baddie);
								battleScene.dmgText = "-" + attack;
								battleScene.battle_baddie.health -= attack;
								battleScene.dmgAttack = true;
								if(battleScene.battle_baddie.health <= 0){
									battleScene.battle_baddie.dead = true;
								}
								battleScene.battleText =  player.name + " attacked "+battleScene.battle_baddie.type+" for " + attack + " dmg";
								
							}
						}
						
						battleCanvas.addEventListener("mousemove", function (e) {
							var mouse = getMousePosition(e).sub(new vector2d(battleCanvas.offsetLeft, battleCanvas.offsetTop));
							//console.log("Mouse X: " + mouse.x + " Y:" + mouse.y);
							if (battleScene.btnAttack.rectangle.pointWithin(mouse) || battleScene.btnRun.rectangle.pointWithin(mouse)){
								$('#battleCanvas').css('cursor', 'pointer');
							} else {
								$('#battleCanvas').css('cursor', 'default');
							}

						}, false);
						
					    /*battleCanvas.style.zIndex = 10;
						var rand = Math.floor((Math.random() * 5) + 1);
						var enemyName = "blob";
						if(rand == 1)
							enemyName = "blob";
						else if(rand == 2)
							enemyName = "bat";
						else if(rand == 3)
							enemyName = "ghost";
						else if(rand == 4)
							enemyName = "skeleton";
						else
							enemyName = "spider";
						battle_baddie = new Game.Enemy(enemyName);
						
						// And Give those Buttons some ACTIONS
						battleCanvas.onmouseup = function(e){
							var mouse = getMousePosition(e).sub(new vector2d(battleCanvas.offsetLeft, battleCanvas.offsetTop)); 

							if (btnTest2.rectangle.pointWithin(mouse)) {
							    inBattle = false; //Run
							    battleCanvas.style.zIndex = 0;
							}
							
							if (btnTest.rectangle.pointWithin(mouse)) {
								
								dmgDisplayCounter = 0;
								dmgText_Y_modifier = 0;
								var attack = player.attack(battle_baddie);
								dmgText = "-" + attack;
								battle_baddie.health -= attack;
								dmgAttack = true;
								if(battle_baddie.health <= 0){
									battle_baddie.dead = true;
								}
							}
						}
						
						battleCanvas.addEventListener("mousemove", function (e) {
						    var mouse = getMousePosition(e).sub(new vector2d(battleCanvas.offsetLeft, battleCanvas.offsetTop));
						    //console.log("Mouse X: " + mouse.x + " Y:" + mouse.y);
						    if (btnTest.rectangle.pointWithin(mouse) || btnTest2.rectangle.pointWithin(mouse)){
						        $('#battleCanvas').css('cursor', 'pointer');
						    } else {
						        $('#battleCanvas').css('cursor', 'default');
						    }

						}, false);*/
						
						//modal.open({content:"Battle has begun!"});
					}
				}
			}
			else{ // In A Battle
			
				inBattle = battleScene.update(step);
				
				/*if(dmgAttack == true){
					dmgDisplayCounter++;
					if(dmgDisplayLength/dmgDisplayCounter < 4){
						dmgText_Y_modifier++;
					}else{
						dmgText_Y_modifier--;
					}
					
					if(dmgDisplayCounter > dmgDisplayLength){
						dmgAttack = false;
						dmgDisplayCounter = 0;
						dmgText_Y_modifier = 0;
						
						if(battle_baddie.dead){
						    inBattle = false;
						    battleCanvas.style.zIndex = 0;
						}
					}
				}*/
			}
		}
		
		var intro = function(){
		
			context.clearRect(0, 0, canvas.width, canvas.height);
			ctxVideo.clearRect(0, 0, canvas.width, canvas.height);
			
			ctxVideo.drawImage(intro_house, 0, 0);
			
			if(!playVideo){
				textwriter.draw_text(ctxVideo, "Welcome to Francis Quest", "26pt Arial", 180, 100);
				//2b3b5f
				
						
				ctxVideo.fillStyle = "#2b3b5f";
				
				ctxVideo.globalAlpha = 0.75;
				ctxVideo.fillRect(180, 200, 400, 200);
				
				
				ctxVideo.globalAlpha = 1;
				
				textwriter.draw_text(ctxVideo, "Pick your Adventurer", "12pt Arial", 310, 220);
				
				ctxVideo.drawImage(texture, MaleHero["IdleDown"].x, MaleHero["IdleDown"].y, MaleHero["IdleDown"].w, MaleHero["IdleDown"].h, 
					300, 250, 64, 64);
				
				ctxVideo.drawImage(texture, FemaleHero["IdleDown"].x, FemaleHero["IdleDown"].y, FemaleHero["IdleDown"].w, FemaleHero["IdleDown"].h, 
					400, 250, 64, 64);
				
				introCanvas.onmouseup = function(e){
					var mouse = getMousePosition(e).sub(new vector2d(introCanvas.offsetLeft, introCanvas.offsetTop)); 
					if (mouse.x > 300 && mouse.x < 364 && mouse.y > 250 && mouse.y < 314) {
						StartTheGame("male");
						introCanvas.onmouseup = function(e){};
					}
					
					if (mouse.x > 400 && mouse.x < 464 && mouse.y > 250 && mouse.y < 314) {
						StartTheGame("female");
						introCanvas.onmouseup = function(e){};
					}
				}
				
				introCanvas.addEventListener("mousemove", function(e){
				    var mouse = getMousePosition(e).sub(new vector2d(introCanvas.offsetLeft, introCanvas.offsetTop));
				    //console.log("Mouse X: " + mouse.x + " Y:" + mouse.y);
					if (mouse.x > 300 && mouse.x < 364 && mouse.y > 250 && mouse.y < 314) {
						$('#introCanvas').css('cursor', 'pointer');
					}else if (mouse.x > 400 && mouse.x < 464 && mouse.y > 250 && mouse.y < 314) {
					    $('#introCanvas').css('cursor', 'pointer');
					} else {
					    $('#introCanvas').css('cursor', 'default');
					}
					
				}, false);
			}else{
				player.animated_draw(ctxVideo,0, 0);
			}
			
		}
		
		
		
		// Game draw function
		var draw_game = function(){
			// clear the entire canvas
			context.clearRect(0, 0, canvas.width, canvas.height);
			ctxBattle.clearRect(0, 0, battleCanvas.width, battleCanvas.height);
			ctxHUD.clearRect(0, 0, canvas.width, canvas.height);
			
			// redraw all objects
			room.map.draw(context, camera.xView, camera.yView);		
			player.animated_draw(context, camera.xView, camera.yView);
			
			textwriter.draw_text(ctxHUD, "Health " + player.health, "12pt Arial", 10, 10);
			
			if(player.dead){
				context.fillStyle = 'rgba(43,43,43,0.5)';
			    context.fillRect(0, 0, canvas.width, canvas.height);
				context.drawImage(texture, player.sprite["DeadForward"].x,  player.sprite["DeadForward"].y,  player.sprite["DeadForward"].w,  player.sprite["DeadForward"].h, 
					canvas.width/2 - 32, canvas.height/2, 64, 64);
				textwriter.draw_text(context, player.name + " has fallen. Refresh to try again.", "12pt Arial", canvas.width/2, canvas.height/2 - 60, "center");
				textwriter.draw_text(context, "Enemies Defeated: " + player.numEnemiesKilled + " Damage Dealt: " + player.dmgDealt, "12pt Arial", canvas.width/2, canvas.height/2 - 40, "center");
			}
			
			if(!isDay){
			    context.fillStyle = 'rgba(43,43,43,0.5)';
			    context.fillRect(0, 0, canvas.width, canvas.height);
			}

			if (touchInterface)
			    drawTouchInterface();

			if(inBattle){
			
				context.fillStyle = 'rgba(55,55,55,0.75)';
				context.fillRect(0, 0, canvas.width, canvas.height);
				battleScene.draw(ctxBattle, isDay);
				/*context.fillStyle = 'rgba(55,55,55,0.75)';
				context.fillRect(0, 0, canvas.width, canvas.height);
				if(isDay){
					ctxBattle.drawImage(battle_scene_outside, 0, 0);
				}else{
					ctxBattle.drawImage(battle_scene_outside_night, 0, 0);
				}
				ctxBattle.textAlign = "center";
				ctxBattle.fillStyle = "#000000";
				ctxBattle.font = "26pt Arial";
				ctxBattle.fillText("BEGIN BATTLE", battleCanvas.width / 2 + 2, 52);
				ctxBattle.fillStyle = '#FFFFFF';
				ctxBattle.fillText("BEGIN BATTLE", battleCanvas.width / 2, 50);
				
				
				battle_baddie.draw_battle_scene(ctxBattle);
				
				if(!isDay){
					ctxBattle.fillStyle = 'rgba(43,43,43,0.5)';
					ctxBattle.fillRect(0, 0, canvas.width, canvas.height);
				}
				
				// Let's Draw Some Buttons
				btnTest.draw(ctxBattle);
				btnTest2.draw(ctxBattle);
				
				// Draw Dmg Text
				if(dmgAttack){
				    ctxBattle.fillStyle = '#d04648';
				    ctxBattle.strokeStyle = "#140c1c";
					ctxBattle.font = "12pt Arial";
					ctxBattle.strokeText(dmgText, (battleCanvas.width/2-64/2), (battleCanvas.height/2-64/2) + dmgText_Y_modifier);
					ctxBattle.font = "12pt Arial";
					ctxBattle.fillText(dmgText, (battleCanvas.width/2-64/2)-2, (battleCanvas.height/2-64/2 + dmgText_Y_modifier)-2);
				}*/
				
			}
		}
        
        var runningId = -1;
		var draw = intro;
		// Game Loop
		var gameLoop = function(timestamp){ // <-- edited; timestamp comes from requestAnimationFrame. See polyfill to get this insight.
            now = timestamp; // <-- current timestamp (in milliseconds)
            step = (now-last)/1000; // <-- time between frames (in seconds)
            last = now; // <-- store the current timestamp for further evaluation in next frame/step 
            
			update(step);
			draw();
            runningId = requestAnimationFrame(gameLoop); // <-- added
		}
		
		
		Game.init = function(){
			room.map.generate();
			player.x = 230;
			player.y = 32;
			update = introMovie;
			playVideo = true;
			
			//draw = draw_game;
			//ctxVideo.clearRect(0, 0, introCanvas.width, introCanvas.height);
			//Game.play();
		}
		
        // ---configure play/pause capabilities:
		
		Game.play = function(){	
			if(runningId == -1){
				runningId = requestAnimationFrame(gameLoop); // <-- changed
				console.log("play");
			}
		}
		
		Game.togglePause = function(){		
			if(runningId == -1){
				Game.play();
				modal.close();
			}
			else
			{
			modal.open({content:$("#divLicense").html()});
				cancelAnimationFrame(runningId);// <-- changed
				runningId = -1;
				console.log("paused");
				
			}
		}	
		
		// ---
    Game.player = player;
	Game.camera = camera;
		
	})();

	// <-- configure Game controls:

	Game.controls = {
		left: false,
		up: false,
		right: false,
		down: false,
	};

	window.addEventListener("keydown", function(e){
		switch(e.keyCode)
		{
			case 37: // left arrow
				Game.controls.left = true;
       // Game.player.moving = true;
				break;
			case 38: // up arrow
				Game.controls.up = true;
       // Game.player.moving = true;
				break;
			case 39: // right arrow
				Game.controls.right = true;
       // Game.player.moving = true;
				break;
			case 40: // down arrow
				Game.controls.down = true;
       // Game.player.moving = true;
				break;
		}
	}, false);

	window.addEventListener("keyup", function(e){
		switch(e.keyCode)
		{
			case 37: // left arrow
				Game.controls.left = false;
        Game.player.moving = false;
				break;
			case 38: // up arrow
				Game.controls.up = false;
        Game.player.moving = false;
				break;
			case 39: // right arrow
				Game.controls.right = false;
        Game.player.moving = false;
				break;
			case 40: // down arrow
				Game.controls.down = false;
        Game.player.moving = false;
				break;
			case 80: // key P pauses the game
				Game.togglePause();
				break;		
		}
	}, false);

	// -->

	// start the game when page is loaded
	window.onload = function(){
	Game.play();
		resizeCanvas();
		//modal.open({content:$("#divIntro").html()});
		//Game.play();
		
	}
	
	function StartTheGame(gender){
		
		Game.player.setgender(gender);
		Game.init();
		document.getElementById("introCanvas").style.zIndex=0;
		//modal.close();
		//modal.open({content:"There's not much to do, but here are the basics:<br/><br/>\
		//					<div style='text-align:center'><b>Controls:</b><br/>\
		//					Arrow Keys To Move<br/>'P' to Pause<br/>\
		//					<input type='button' value='Okay Got It!' onclick='modal.close();Game.init();' /></div>"
		//			});
	}
	
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