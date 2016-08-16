	/// <reference path="francisquest.js" />

	// wrapper for "class" Player
	(function(){
		function Player(x, y){
			// (x, y) = center of object
			// ATTENTION:
			// it represents the player position on the world(room), not the canvas position
			this.x = x;
			this.y = y;
			
			// player attributes
			this.health = 15; // restored by potion
			this.stamina = 15; // restored by "resting" TODO: restored by eating or potion
			this.level = 1;
			this.exp = 0;
			this.exp_next_level = 100;
			this.physicalAttack = 10;
			this.magicalAttack = 10;
			this.defense = 5;
			this.magicalResistancs = 10;
			this.dead = false;
			this.name = "Francis";
			this.inventory = new Game.Inventory();
			//this.inventory = [Game.ItemGenerator("Health Potion Small", "Small Health Potion")];
			this.maxHealth = this.setMaxHealth();
			this.maxStamina = this.setMaxStamina();
			
			this.exitBattle = 0; // used as a cooldown so you can actually run from a battle and aren't constantly bombarded
			
			//Counts the downtime until you get a "rest result". As in you are rewarded for standing still
			this.restCount = 0;
			this.restResult = 60;

			// Display text over character
			this.txtDisplayCounter = 0;
			this.txtDisplayLength = 30;
			this.txtDisplay = false;
			this.txt = "";
			this.txt_Y_modifier = 0;
			this.txtColor = "white";
			this.textWriter = new Game.TextWriter();


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
			this.dirChangeCoolDown = 0;
      
			// animation rules
			this.animationStep = 1;
			this.animationEndStep = 4;
			this.animationCounter = 0;
			this.animationEndCounter = 10;
		}

		Player.prototype.increaseStamina = function(number){
			this.stamina += number;
			if(this.stamina > this.maxStamina){
				this.stamina = this.maxStamina;
			}
		}

		Player.prototype.increaseHealth = function(number){
			this.health += number;
			if(this.health > this.maxHealth){
				this.health = this.maxHealth;
			}
		}
		
		Player.prototype.setgender = function(gender){
			this.sprite = ((gender == "male")?MaleHero:FemaleHero);
			this.name = ((gender == "male")?"Francis":"Frances");
		}
		
		Player.prototype.setMaxHealth = function(){
			return (10 + (5 * this.level));
		}

		Player.prototype.setMaxStamina = function(){
			return (10 + (5 * this.level));
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
		
		Player.prototype.levelUp = function(){
			this.level++;
			this.maxHealth = this.setMaxHealth();
			this.maxStamina = this.setMaxStamina();
			this.stamina = this.maxStamina;
			this.physicalAttack += 2;
			this.increaseHealth(5); // increase the amount the max does (but do not add extra health on top of that)
		}
		
		Player.prototype.reset = function(){
			this.health = 10;
			this.level = 1;
			this.inventory = new Game.Inventory();//[Game.ItemGenerator("Health Potion Small", "Small Health Potion")];
			this.maxHealth = this.setMaxHealth();
			
			this.numEnemiesKilled = 0;
			this.dmgDealt = 0;
			this.exitBattle = 0;
		}

		Player.prototype.displayHealth = function(){
			var health = this.health;
			if(this.health < 10){
				health = "0" + health;
			}
			return health;
		}

		Player.prototype.displayStamina = function(){
			var stamina = this.stamina;
			if(this.stamina < 10){
				stamina = "0" + stamina;
			}
			return stamina;
		}
		
		Player.prototype.useItem = function(index){
			var attr = this.inventory.useItem(index).attributes;//this.inventory[index].attributes;
			
			// Check type to appropriately update
			switch(attr.attr){
				case "health":
					this.increaseHealth(attr.amount);
					this.displayText("+" + attr.amount, "#d04648")
					break;
				case "stamina":
					this.increaseStamina(attr.amount);
					this.displayText("+" + attr.amount, "#346524")
					break;
			}
		}
		
		Player.prototype.Bounds = function(){
			return new Game.Rectangle(this.x, this.y, this.width, this.height);
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
			if(this.exitBattle > 0 ){
				this.exitBattle++;
				if(this.exitBattle > 20){
					this.exitBattle = 0;
				}
			}

			if(this.txtDisplay){
				this.txtDisplayCounter++;
				if(this.txtDisplayLength/this.txtDisplayCounter < 4){
					this.txt_Y_modifier++;
				}else{
					this.txt_Y_modifier--;
				}
				
				if(this.txtDisplayCounter > this.txtDisplayLength){
					this.txtDisplay = false;
				}
			}




			
			if(Game.controls.left){
				if(this.moving && (this.facing == "Up" || this.facing == "Down")){}else{
					if(this.facing == "Left"){
						this.moving = true;
					}else{
						this.dirChangeCoolDown++;
					}	  
				  this.facing = "Left";
				  
				}
			}
			if(Game.controls.up){
				if(this.moving && (this.facing == "Left" || this.facing == "Right")){}else{
					//this.y -= this.speed * step;
					if(this.facing == "Up"){
						this.moving = true;
					}else{
						this.dirChangeCoolDown++;
					}
					this.facing = "Up";
					
				}
			}
			if(Game.controls.right){
				if((this.moving && this.facing == "Up") || (this.moving && this.facing == "Down")){}else{
					  //this.x += this.speed * step;
					  if(this.facing == "Right"){
						this.moving = true;
					}else{
						this.dirChangeCoolDown++;
					}
					this.facing = "Right";
					
				}
			}
			if(Game.controls.down){
				if(this.moving && (this.facing == "Left" || this.facing == "Right")){}else{
					//this.y += this.speed * step;
					if(this.facing == "Down"){
						this.moving = true;
					}else{
						this.dirChangeCoolDown++;
					}
					this.facing = "Down";
					//this.moving = true;
				}
			}

			if(!(Game.controls.down || Game.controls.up || Game.controls.left || Game.controls.right)){
			this.moving = false;
			}
			
			if(this.dirChangeCoolDown > 0 && this.dirChangeCoolDown < 4){ // delay slightly to allow turning without moving
				this.dirChangeCoolDown++;
				this.moving = false;
			}else{
				this.dirChangeCoolDown = 0;
			}
			if(this.moving)
				this.move(this.facing, step);
      
			// don't let player leave the world's boundary
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

			//Player is standing still. Begin counting rest steps
			if(!this.moving){
				this.restCount++;
				if(this.restCount >= this.restResult){
					if(this.stamina < this.maxStamina){
						this.RestReward();
					}
					this.restCount = 0;
				}
				
			}else{
				this.restCount = 0;
			}
			
			
		}

		Player.prototype.RestReward = function(){
			this.displayText("+1", "#346524");
			this.stamina++;
			if(this.stamina > this.maxStamina){
				this.stamina = this.maxStamina;
			}
		}

		Player.prototype.CheckAP = function(number){
			if (this.stamina >= number){
				return true;
			}
			return false;
		}

		Player.prototype.SubtractAP = function(number){
			this.stamina -= number;
		}
		
		Player.prototype.move = function(direction, step){
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
		
		Player.prototype.test_draw = function(context, xView, yView){		
			// Draw black rectangle to represent character
			context.save();		
			context.fillStyle = "black";
			// before draw we need to convert player world's position to canvas position			
			context.fillRect((this.x-this.width/2) - xView, (this.y-this.height/2) - yView, this.width, this.height);
			context.restore();			
		}

	Player.prototype.displayText = function(text, color){
		color = ((color) ?  color: "#deeed6");
		this.txt = text;
		this.txtDisplay = true;
		this.txt_Y_modifier = 0;
		this.txtDisplayCounter = 0;
		this.txtColor = color;
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
	  var drawX = (this.x-this.width/2) - xView;
	  var drawY = (this.y-this.height/2)- yView;
      context.drawImage(texture, this.sx, this.sy, this.sw, this.sh, drawX, drawY, this.width, this.height);
	  // Draw Dmg Text
	if(this.txtDisplay){
		this.textWriter.draw_text(context, this.txt, "12pt Arial",
		drawX, drawY + this.txt_Y_modifier, "center", this.txtColor );
	}
      context.restore();
      
    }
		
		// add "class" Player to our Game object
		Game.Player = Player;
		
	})();