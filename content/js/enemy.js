(function(){
	    function Enemy(type, playerLevel, x, y) {
				playerLevel = ((playerLevel) ? playerLevel : 1);
				x =((x)?x:50);
				y =((y)?y:50);

				// Create a semi-random set up for the enemies
				this.level = playerLevel;

			
				this.health = Game.rollDice(this.level, 12);
				this.phyiscalAttack = 8;
				this.defense = 4;
				
				this.x = x;
				this.y = y;
				
				this.width = 32;
				this.height = 32;
				this.sw = 32;
				this.sh = 32;
				this.moving = false;
				// move speed in pixels per second
				this.speed = 190;
				
				this.dead = false;
				
				// animation rules
				this.animationStep = 1;
				this.animationEndStep = 4;
				this.animationCounter = 0;
				this.animationEndCounter = 10;
				this.animationBattleEndCounter = 50;
				this.facing = "Down";
				
				this.sprite = Blob;
				if(type == "Blob"){
					this.sprite = Blob;
				}
				if(type == "Ghost"){
					this.sprite = Ghost;
				}
				if(type == "Bat"){
					this.sprite = Bat;
				}
				if(type == "Skeleton"){
					this.sprite = Skeleton;
				}
				if(type == "Spider"){
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
		
		Enemy.prototype.Bounds = function(){
			return new Game.Rectangle(this.x, this.y, this.width, this.height);
		}
		
		Enemy.prototype.coordsWithin = function(x, y){
			return (x > this.x && x < (this.x + this.width*2) && y > this.y && y < (this.y + this.height*2));
		}
		
		Enemy.prototype.move = function(direction, step){
			switch(direction){
				case "Left":
					this.x -= this.speed * step;
					break;
				case "Right":
					this.x += this.speed * step;
					break;
				case "Down":
					this.y += this.speed * step;
					break;
				case "Up":
					this.y -= this.speed * step;
					break;	
			}
		}
		
		Enemy.prototype.update = function(step, worldWidth, worldHeight){
			if(!this.moving){
				if(Math.random() > 0.5){
					this.moving = true;
					var direction = Math.random();
					if(direction < 0.25){
						this.facing = "Left";				
					}else if(direction > 0.25 && direction < .5){
						this.facing = "Right";		
					}else if(direction > .5 && direction < .75){
						this.facing = "Down";	
					}else{
						this.facing = "Up";
					}
				}
			}
			else{
				this.move(this.facing, step);
				
				if(Math.random() >= .90){
					this.moving = false;
				}
			}
			
			// don't leave the world's boundary
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
		
		
		
		Enemy.prototype.draw_battle_scene = function(context){
			this.facing = "Down";
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
		  this.sx = this.sprite["Dead"].x;
		  this.sy = this.sprite["Dead"].y;
	  }
	  
      context.save();
      context.drawImage(texture, this.sx, this.sy, this.sw, this.sh, (this.x-this.width/2) - xView, (this.y-this.height/2)- yView, this.width, this.height);
      context.restore();
		  
		}
		
		
		Game.Enemy = Enemy;
	})();