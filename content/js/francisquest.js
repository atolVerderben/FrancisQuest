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
			modal.open({content:$("#divLicense").html()});
				cancelAnimationFrame(runningId);
				runningId = -1;
				console.log("paused");
				
			}
		}
		
		Game.rollDie = function (number, sides, condition){
			condition = ((condition) ? condition : 0);
			var rolls, total = 0;
			for(var i=0; i < number; i++){
				rolls[i] = Math.floor((Math.random() * sides) + 1);
				total += rolls[i];
			}
			return total;	
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
		}
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