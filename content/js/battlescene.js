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
			
			this.dropLoot = false;
			
		}
		
		BattleScene.prototype.initialize = function(battleCanvas){
			inBattle = true;
			this.playerTurn = true;
			this.dropLoot = false;
			
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