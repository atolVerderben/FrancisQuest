(function(){

		function BattleScene(){
			
			
			this.commands = {
				ATTACK : "Attack Command",
				RUN : "Run Command",
				NOACTION : "Wait for next action",
				REST: "Restore some stamina",
				ITEM: "Open inventory",
				USEITEM: "Use an item from inventory",
			}
			
			
			this.battle_baddie = null;
			var startX = 50;
			var startY = 275;
			this.btnAttack = new Game.Button("btnAttack", startX, startY, 100, 50, "ATTACK", null);
			this.btnRest = new Game.Button("btnRest", startX + 250, startY, 100, 50, "REST", null);
			this.btnRun = new Game.Button("btnRun", startX + 250, startY + 55, 100, 50, "RUN", null);
			this.btnItem = new Game.Button("btnItem", startX, startY + 55, 100, 50, "ITEM", null);
			this.dmgAttack = false;
			this.inBattle = false;
			
			this.dmgDisplayCounter = 0;
			this.dmgDisplayLength = 30;
			this.dmgAttack = false;
			this.dmgText = "";
			this.dmgText_Y_modifier = 0;
			
			this.playerTurn = true;
			this.playerAction = false;
			
			this.announcement = false;
			this.announceTick = 0;
			this.announceLength = 45;
			
			this.attacking = false;
			this.actionTaken = this.commands.NOACTION;
			
			this.textWriter = new Game.TextWriter();
			
			this.battleText = "Begin Battle";
			
			this.battleEnded = false; // Use this for the closing statement
			
			this.dropLoot = false;
			this.failedRun = false;
			
			
		}

		BattleScene.prototype.setAction = function(action){
			switch(action){
				case "useitem":
					this.actionTaken = this.commands.USEITEM;
					break;
				default:
					this.actionTaken = this.commands.NOACTION;
					break;
			}
			
		}
		
		BattleScene.prototype.initialize = function(battleCanvas, baddie){
			//inBattle = true;
			this.playerTurn = true;
			this.dropLoot = false;
			this.failedRun = false;
			this.inBattle = true;
			this.announcement = false;
			this.announceTick = 0;
			this.playerAction = false;
			this.attacking = false;
			this.actionTaken = this.commands.NOACTION;
			this.dmgAttack = false;
			
			// Add actions to the buttons
			battleCanvas.onmouseup = function(e){
				var mouse = getMousePosition(e).sub(new vector2d(Game.battleCanvas.offsetLeft, Game.battleCanvas.offsetTop)); 

				if (this.btnRun.rectangle.pointWithin(mouse) && this.btnRun.active) {
					
					this.actionTaken = this.commands.RUN;
					// delete from here
					if(Math.random() <= 0.5){
						this.failedRun = true;
						this.playerTurn = false;
					}else{
						this.inBattle = false; //Run
						Game.battleCanvas.style.zIndex = 0;
						Game.player.exitBattle = 1;
					}
				}
				
				if (this.btnAttack.rectangle.pointWithin(mouse) && this.btnAttack.active) {
					
					this.playerAction = true;
					this.actionTaken = this.commands.ATTACK;
				}


				if (this.btnRest.rectangle.pointWithin(mouse) && this.btnRest.active) {
					
					this.playerAction = true;
					this.actionTaken = this.commands.REST;
				}

				if (this.btnItem.rectangle.pointWithin(mouse) && this.btnItem.active) {
					
					this.playerAction = true;
					this.actionTaken = this.commands.ITEM;
				}

			}.bind(this);
			
			battleCanvas.addEventListener("mousemove", function (e) {
				var mouse = getMousePosition(e).sub(new vector2d(Game.battleCanvas.offsetLeft, Game.battleCanvas.offsetTop));
				//console.log("Mouse X: " + mouse.x + " Y:" + mouse.y);
				if (Game.battleScene.btnAttack.rectangle.pointWithin(mouse) || Game.battleScene.btnRun.rectangle.pointWithin(mouse) || 
				Game.battleScene.btnRest.rectangle.pointWithin(mouse) || Game.battleScene.btnItem.rectangle.pointWithin(mouse)){
					$('#battleCanvas').css('cursor', 'pointer');
				} else {
					$('#battleCanvas').css('cursor', 'default');
				}

			}, false);
			
			
			battleCanvas.style.zIndex = 10;
			
			if(baddie){
				this.battle_baddie = baddie;
			}else{
				
				var rand = Math.floor((Math.random() * 5) + 1);
				var enemyName = "Blob";
				if(rand == 1)
					enemyName = "Blob";
				else if(rand == 2)
					enemyName = "Bat";
				else if(rand == 3)
					enemyName = "Ghost";
				else if(rand == 4)
					enemyName = "Skeleton";
				else
					enemyName = "Spider";
				this.battle_baddie = new Game.Enemy(enemyName);
			}
			
			this.battleText = "A " + this.battle_baddie.type + " appears!";
			
		}
		
		
		BattleScene.prototype.enemyAttack = function(){
			// Enemy attack
			this.dmgDisplayCounter = 0;
			this.dmgText_Y_modifier = 0;
			var attack = this.battle_baddie.attack(Game.player);
			this.dmgText = "-" + attack;
			Game.player.health -= attack;
			this.dmgAttack = true;
			this.actionTaken = true;
			if(Game.player.health <= 0){
				Game.player.dead = true;
			}
			this.battleText = this.battle_baddie.type + " attacked " + Game.player.name + " for " + attack + " dmg";
			this.announcement = true;
			//this.playerTurn = true;
		}
		
		BattleScene.prototype.update = function(step){
			//var inBattle = true;
			
			// Show battle text to the player
			if(this.announcement){
				this.actionTaken = this.commands.NOACTION
				this.announceTick++;
				
				
				
				if(this.dmgAttack == true){
					this.dmgDisplayCounter++;
					if(this.dmgDisplayLength/this.dmgDisplayCounter < 4){
						this.dmgText_Y_modifier++;
					}else{
						this.dmgText_Y_modifier--;
					}
					
					if(this.dmgDisplayCounter > this.dmgDisplayLength){
						this.dmgAttack = false;
						this.playerAction = false;
						this.dmgDisplayCounter = 0;
						this.dmgText_Y_modifier = 0;
						
						this.btnAttack.active = true;
						this.btnRest.active = true;
						this.btnRun.active = true;
						this.btnItem.active = true;
						
						if(this.battle_baddie.dead){
							this.inBattle = false;
							
							Game.player.exitBattle = 1;
							Game.player.numEnemiesKilled += 1;
						}
						if(Game.player.dead){
							this.inBattle = false;
							//battleCanvas.style.zIndex = 0;
						}
						this.actionTaken = this.commands.NOACTION;
					}else{
						this.btnAttack.active = false;
						this.btnRun.active = false;
						this.btnRest.active = false;
						this.btnItem.active = false;
					}
			}else{
				if(this.announceTick > this.announceLength){
					this.announceTick = 0;
					this.announcement = false;
					this.playerTurn = !this.playerTurn;
					if(this.failedRun == true){
						this.playerTurn = false;
						this.failedRun = false;
					}
				}
			}
			
			if(this.battle_baddie.health <= 0 && this.battle_baddie.dead == false){
				this.battle_baddie.dead = true;
				if(Math.random() <= 0.45){
					this.dropLoot = true;
					
					if(Game.player.inventory.isFull()){
						this.battleText = "Inventory Full!"
					}else{
						if(Math.random() <= 0.5){
							Game.player.inventory.addItem(Game.ItemGenerator("Health Potion", "HP Potion"));
							this.battleText = this.battle_baddie.type+ " dropped a health potion!";
						}else{
							Game.player.inventory.addItem(Game.ItemGenerator("Stamina Potion", "AP Potion"));
							this.battleText = this.battle_baddie.type+ " dropped a stamina potion!";
						}
					}
					//this.announcement = true;
					this.announceTick = 0;
				}
			}
				
				
				return true;
			}
			
			if(this.playerTurn === true){
				switch(this.actionTaken){
					case this.commands.REST:
						Game.player.increaseStamina(5);
						this.battleText =  Game.player.name + " rested and increased stamina";
						this.announcement = true;
						break;
					case this.commands.ITEM:
						if(!Game.player.inventory.open){
							if(Game.player.inventory.isEmpty()){
								this.battleText =  "Inventory empty.";
								break;
							}
							Game.player.inventory.openInventory();
							Game.hudCanvas.style.zIndex = 20;
						}
						break;
					case this.commands.USEITEM:
						//if(Game.player.inventory.open){
							//Game.player.inventory.openInventory();
							Game.hudCanvas.style.zIndex = 2;
						//}
						this.battleText =  Game.player.name + " used an item";
						this.announcement = true;
						break;
					case this.commands.ATTACK:
						var AP = 2;
						if(Game.player.CheckAP(AP)){
							Game.player.SubtractAP(AP);
						}else{
							this.battleText =  Game.player.name + " does not have enough stamina!";
							//this.announcement = true;
							break;
						}
						this.dmgDisplayCounter = 0;
						this.dmgText_Y_modifier = 0;
						var attack = Game.player.attack(this.battle_baddie);
						this.dmgText = "-" + attack;
						this.battle_baddie.health -= attack;
						this.dmgAttack = true;
						this.battleText =  Game.player.name + " attacked "+this.battle_baddie.type+" for " + attack + " dmg";
						this.announcement = true;
						//this.playerTurn = false;
						break;
					case this.commands.RUN:
						if(Math.random() <= 0.5){
							this.failedRun = true;
							this.playerTurn = false;
						}else{
							this.inBattle = false; //Run Success
							Game.battleCanvas.style.zIndex = 0;
							this.exitBattle = 1;
						}
						break;
					default:
						break;//return this.inBattle; // we're waiting for the player to make a choice
				}
				
			}else{ //Enemy turn
				if(this.failedRun){
					this.announcement = true;
					this.announceTick = 0;
					this.battleText = Game.player.name + " failed to run away!";
					this.failedRun = true;
				}else{
					if(this.battle_baddie.dead === false)
					this.enemyAttack();
				}	
			}
			if(!this.inBattle){
				battleCanvas.style.zIndex = 0;
			}
			return this.inBattle;
		}
		
		BattleScene.prototype.attemptRun = function(){
			if(Math.random() <= 0.5){
				battleScene
			}else{
				this.inBattle = false; //Run
				battleCanvas.style.zIndex = 0;
			}
		}
		
		BattleScene.prototype.draw = function(ctxBattle, isDay){
			if(isDay){
				ctxBattle.drawImage(battle_scene_outside, 0, 0);
			}else{
				ctxBattle.drawImage(battle_scene_outside_night, 0, 0);
			}

			
			
			this.textWriter.draw_text(ctxBattle, this.battle_baddie.displayType() + ": " + this.battle_baddie.displayHealth() + " HP", 
			"12pt Arial", battleCanvas.width - (battleCanvas.width/8) - 10, 20, "center", "#8595a1");
			
			
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
			this.btnRest.draw(ctxBattle);
			this.btnRun.draw(ctxBattle);
			this.btnItem.draw(ctxBattle);
			
			this.drawBorder(ctxBattle, "#442434", 448, 384);

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

		BattleScene.prototype.drawBorder = function(ctx, color, width, height){
			ctx.strokeStyle = color;
            ctx.strokeRect(0, 0, width, height);
			ctx.strokeRect(1, 1, width-1, height-1);
			ctx.strokeRect(2, 2, width-2, height-2);
		}
		
		Game.BattleScene = BattleScene;
		
	})();