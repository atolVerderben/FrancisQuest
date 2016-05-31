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
		
		var enemyList = [];

	    //create background songs
		//var backgroundMusic = document.createElement("audio");
		//backgroundMusic.setAttribute("src", "content/sounds/Town_-_Hillside_Hamlet_Reprise.mp3");
		//backgroundMusic.setAttribute('autoplay', 'autoplay'); // <-- We'll use autoplay until we get more background music laterS
		//backgroundMusic.setAttribute("loop", "loop");
		//backgroundMusic.addEventListener("load", function () {
		//    backgroundMusic.play();
		//}, true);

		var touchInterface = false;

        // game settings:
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
		var playerWin = false;
		
		var worldWidth = 3000;
		var worldHeight = 2000;
		
		// setup an object that represents the room
		var room = {
			width: worldWidth,
			height: worldHeight,
			map: new Game.Map(worldWidth, worldHeight)
		};
		
		// generate a large image texture for the room
		//room.map.generate();
		 
		// setup player
		var player = new Game.Player(worldWidth/2, worldHeight/2);
		
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
				player.x = worldWidth/2;
				player.y = worldHeight/2;
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
     var btnRestart = new Game.Button(hudCanvas.width/2 + hudCanvas.offsetLeft - 125, hudCanvas.height/2 + 350, 100, 100, "Restart", null);
	 var btnNextLevel = new Game.Button(hudCanvas.width/2 + hudCanvas.offsetLeft + 100, hudCanvas.height/2 +350, 100, 100, "Next Level", null);
		
var encounter = 0;

		// Game update function
		var update_game = function(step){ 
			if(!inBattle){
				player.update(step, room.width, room.height);
				if(playerWin == false){
					if(enemyList.length < 50 + (50 * player.level)){
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
						enemyList.push(new Game.Enemy(enemyName, player.level, Math.floor(Math.random() * room.width) + 1, Math.floor(Math.random() * room.height) + 1));
					}
					enemyList.forEach(function(enemy){
						//if(enemy.dead){
						//	enemyList.splice(enemyList.indexOf(enemy), 1);
						//	return;
						//}
						enemy.update(step, room.width, room.height);
						if(enemy.Bounds().overlaps(player.Bounds()) && player.dead == false && player.exitBattle == 0){//enemy.coordsWithin(player.x, player.y)){
							if(!enemy.dead){
								
							
							Game.startBattle(enemy);
							}
						}
					});
				}else{
					hudCanvas.onmouseup = function(e){
						var mouse = getMousePosition(e).sub(new vector2d(hudCanvas.offsetLeft, hudCanvas.offsetTop));
						if(btnRestart.rectangle.pointWithin(mouse)){
							Game.restart();
						}
						if(btnNextLevel.rectangle.pointWithin(mouse)){
							nextLevel();//Game.init();
						}
					}
					
					hudCanvas.addEventListener("mousemove", function(e){
						var mouse = getMousePosition(e).sub(new vector2d(hudCanvas.offsetLeft, hudCanvas.offsetTop));
						//console.log("Mouse X: " + mouse.x + " Y:" + mouse.y);
						if (btnRestart.rectangle.pointWithin(mouse)) {
							$('#hudCanvas').css('cursor', 'pointer');
						}else if (btnNextLevel.rectangle.pointWithin(mouse)) {
							$('#hudCanvas').css('cursor', 'pointer');
						} else {
							$('#hudCanvas').css('cursor', 'default');
						}
					
					}, false);
				}
				if(player.dead){
					hudCanvas.onmouseup = function(e){
						var mouse = getMousePosition(e).sub(new vector2d(hudCanvas.offsetLeft, hudCanvas.offsetTop));
						if(btnRestart.rectangle.pointWithin(mouse)){
							Game.restart();
						}
						
					}
					
					hudCanvas.addEventListener("mousemove", function(e){
						var mouse = getMousePosition(e).sub(new vector2d(hudCanvas.offsetLeft, hudCanvas.offsetTop));
						//console.log("Mouse X: " + mouse.x + " Y:" + mouse.y);
						if (btnRestart.rectangle.pointWithin(mouse)) {
							$('#hudCanvas').css('cursor', 'pointer');
						}else {
							$('#hudCanvas').css('cursor', 'default');
						}
					
					}, false);
				}
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
				
				if(room.map.treasure.coordsWithin(player.x, player.y)){
					playerWin = true;
					enemyList = [];
				}
				var randomCheckCounter = 0;
				//Random Encounter Logic
				if(player.moving === true && playerWin === false){
					
					encounter = Math.random();
					if(encounter > 0.07 && encounter < 0.078){
					    //inBattle = true;
						//battleScene.initialize(battleCanvas);
						
						
					}
				}
			}
			else{ // In A Battle
			
				inBattle = battleScene.update(step);
				
			}
		}
		
		//var setLevelWinButtons
		
		var nextLevel = function(){
			hudCanvas.onmouseup = function(e){};
			$("#hudCanvas").off();
			player.levelUp();
			playerWin = false;
			player.dead = false;
			room = {
				width: worldWidth + 1000,
				height: worldHeight + 1000,
				map: new Game.Map(worldWidth + 1000, worldHeight + 1000)
			};
			room.map.generate();
			player.x = room.width/2;
			player.y = room.height/2;
			camera.resetWorld(room.width, room.height);
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
			enemyList.forEach(function(enemy){
					enemy.draw(context, camera.xView, camera.yView);
				});
			textwriter.draw_text(ctxHUD, "Health " + player.health, "12pt Arial", 10, 20);
			textwriter.draw_text(ctxHUD, "Level " + player.level, "12pt Arial", 150, 20);
			
			if(playerWin == true){
				context.fillStyle = 'rgba(43,43,43,0.5)';
			    context.fillRect(0, 0, canvas.width, canvas.height);
				
				textwriter.draw_text(context, "Congratulations!", "32pt Arial", canvas.width/2, canvas.height/2 - 200, "center");
				textwriter.draw_text(context, player.name + " has found the treasure and completed the quest!", "24pt Arial", canvas.width/2, canvas.height/2 - 60, "center");
				textwriter.draw_text(context, "Enemies Defeated: " + player.numEnemiesKilled + " Damage Dealt: " + player.dmgDealt, "12pt Arial", canvas.width/2, canvas.height/2 - 20, "center");
				btnRestart.draw(ctxHUD);
				btnNextLevel.draw(ctxHUD);
			}
			
			if(player.dead){
				context.fillStyle = 'rgba(43,43,43,0.5)';
			    context.fillRect(0, 0, canvas.width, canvas.height);
				context.drawImage(texture, player.sprite["DeadForward"].x,  player.sprite["DeadForward"].y,  player.sprite["DeadForward"].w,  player.sprite["DeadForward"].h, 
					canvas.width/2 - 32, canvas.height/2, 64, 64);
				textwriter.draw_text(context, player.name + " has fallen. Refresh to try again.", "12pt Arial", canvas.width/2, canvas.height/2 - 60, "center");
				textwriter.draw_text(context, "Enemies Defeated: " + player.numEnemiesKilled + " Damage Dealt: " + player.dmgDealt, "12pt Arial", canvas.width/2, canvas.height/2 - 40, "center");
				btnRestart.draw(ctxHUD);	
			}
			
			if(player.inventory.open){
				player.inventory.draw(ctxHUD, hudCanvas);
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
		
		Game.restart = function(){
			hudCanvas.onmouseup = function(e){};
			$("#hudCanvas").off();
			isDay = true;
			currDayCount = 0;
			$("#MAIN").css("background-color", "#deeed6");
			//hudCanvas
			ctxHUD.clearRect(0, 0, canvas.width, canvas.height);
			draw = intro;
			playerWin = false;
			player.dead = false;
			player.reset();
			room.map.generate();
			player.x = 230;
			player.y = 32;
			update = function(step){};//introMovie;
			playVideo = false;
			document.getElementById("introCanvas").style.zIndex=500;
			camera.resetWorld(room.width, room.height);
			//draw = draw_game;
			//ctxVideo.clearRect(0, 0, introCanvas.width, introCanvas.height);
			//Game.play();
		}
		
		Game.init = function(){
			draw = intro;
			playerWin = false;
			player.dead = false;
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
				runningId = requestAnimationFrame(gameLoop);
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
			modal.open({content:document.getElementById("divLicense").innerHTML});
				cancelAnimationFrame(runningId);
				runningId = -1;
				console.log("paused");
				
			}
		}
		
		Game.rollDice = function (number, sides, condition){
			condition = ((condition) ? condition : 0);
			var rolls = [], total = 0;
			for(var i=0; i < number; i++){
				rolls.push(Math.floor((Math.random() * sides) + 1));
				total += rolls[i];
			}
			return total;	
		}
		
		Game.startBattle = function(enemy){
			inBattle = true;
			battleScene.initialize(battleCanvas, enemy);
		}
		
		Game.openInventory = function(){
			
			
			player.inventory.openInventory();
			
		}	
		
		// ---
    Game.player = player;
	Game.camera = camera;
	Game.battleCanvas = battleCanvas;
	Game.battleScene = battleScene;
	
		
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
       
				break;
			case 38: // up arrow
				Game.controls.up = true;
       
				break;
			case 39: // right arrow
				Game.controls.right = true;
       
				break;
			case 40: // down arrow
				Game.controls.down = true;
       
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
			case 73: // I opens inventory
				
				Game.openInventory();
				break;		
		}
		
		e.preventDefault();
		return false;
	}, false);

	// -->

	// start the game when page is loaded
	window.onload = function(){
		Game.play();
		resizeCanvas();
		
	}
	
	function StartTheGame(gender){
		
		Game.player.setgender(gender);
		Game.init();
		document.getElementById("introCanvas").style.zIndex=0;
	}
	
	