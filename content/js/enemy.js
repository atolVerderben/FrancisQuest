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