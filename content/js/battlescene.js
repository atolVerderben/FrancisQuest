(function(){
		
		function BattleScene(){
			this.battle_baddie = null;
			this.btnAttack = new Game.Button(88, 300, 100, 50, "ATTACK", null);
			this.btnRun = new Game.Button(300, 300, 100, 50, "RUN", null);
			this.dmgAttack = false;
			this.inBattle = false;
			
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
			this.failedRun = false;
		}
		
		BattleScene.prototype.initialize = function(battleCanvas){
			//inBattle = true;
			this.playerTurn = true;
			this.dropLoot = false;
			this.failedRun = false;
			this.inBattle = true;
			
			battleCanvas.onmouseup = function(e){
				var mouse = getMousePosition(e).sub(new vector2d(Game.battleCanvas.offsetLeft, Game.battleCanvas.offsetTop)); 

				if (Game.battleScene.btnRun.rectangle.pointWithin(mouse) && Game.battleScene.btnRun.active) {
					
					if(Math.random() <= 0.5){
						Game.battleScene.failedRun = true;
						Game.battleScene.playerTurn = false;
					}else{
						this.inBattle = false; //Run
						Game.battleCanvas.style.zIndex = 0;
					}
				}
				
				if (Game.battleScene.btnAttack.rectangle.pointWithin(mouse) && Game.battleScene.btnAttack.active) {
					
					Game.battleScene.dmgDisplayCounter = 0;
					Game.battleScene.dmgText_Y_modifier = 0;
					var attack = Game.player.attack(Game.battleScene.battle_baddie);
					Game.battleScene.dmgText = "-" + attack;
					Game.battleScene.battle_baddie.health -= attack;
					Game.battleScene.dmgAttack = true;
					if(Game.battleScene.battle_baddie.health <= 0){
						Game.battleScene.battle_baddie.dead = true;
						if(Math.random() <= 0.45){
							Game.battleScene.dropLoot = true;
						}
					}
					if(Game.battleScene.dropLoot == true){
						Game.battleScene.battleText = Game.battleScene.battle_baddie.type+ " dropped a health potion!";
						Game.player.inventory.push(Game.ItemGenerator("Health Potion Small", "Small Health Potion"));
					}else{
						Game.battleScene.battleText =  Game.player.name + " attacked "+Game.battleScene.battle_baddie.type+" for " + attack + " dmg";
					}
				}
			}
			
			battleCanvas.addEventListener("mousemove", function (e) {
				var mouse = getMousePosition(e).sub(new vector2d(Game.battleCanvas.offsetLeft, Game.battleCanvas.offsetTop));
				//console.log("Mouse X: " + mouse.x + " Y:" + mouse.y);
				if (Game.battleScene.btnAttack.rectangle.pointWithin(mouse) || Game.battleScene.btnRun.rectangle.pointWithin(mouse)){
					$('#battleCanvas').css('cursor', 'pointer');
				} else {
					$('#battleCanvas').css('cursor', 'default');
				}

			}, false);
			
			
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
					if(this.playerTurn == false && this.failedRun == true){
						this.playerTurn = false;
						this.failedRun = false;
					}else{
						this.playerTurn = !this.playerTurn;
					}
					
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
					if(this.failedRun === true){
						//TODO make a real turn counter
						this.dmgDisplayCounter = 0;
						this.dmgText_Y_modifier = 0;
						this.dmgText = ""
						this.dmgAttack = true;
						this.battleText = Game.player.name + " failed to run away!";
					}else{
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
			}
			return inBattle;
		}
		
		BattleScene.prototype.attemptRun = function(){
			if(Math.random() <= 0.5){
				battleScene
			}else{
				inBattle = false; //Run
				battleCanvas.style.zIndex = 0;
			}
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