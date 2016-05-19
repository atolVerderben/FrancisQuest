	
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