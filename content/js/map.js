// wrapper for "class" Map
	(function(){
		function Map(width, height){
			// map dimensions
			this.width = width;
			this.height = height;
			
			// map texture
			this.image = null;
			
			this.treasure = null;
		}
		
		Map.prototype.setImage = function(image){
			this.image = image;
		}
		
		// generate an example of a large map
		Map.prototype.generate = function(){
			var ctx = document.createElement("canvas").getContext("2d");		
			ctx.canvas.width = this.width;
			ctx.canvas.height = this.height;		
			
			var rows = ~~(this.width/32) + 1;
			var columns = ~~(this.height/32) + 1;
			var maxX = 0;
			var maxY = 0;
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
					if(rand <=55){
						sx = Terrain["Grass"].x;
						sy = Terrain["Grass"].y;
						
					}
					else if(rand > 55 && rand <= 65){
						sx = Terrain["TallGrass"].x;
						sy = Terrain["TallGrass"].y;
					}
					else if(rand > 65 && rand <=95){
						sx = Terrain["Weeds"].x;
						sy = Terrain["Weeds"].y;
					}
					else if(rand > 95){
						sx = Terrain["Flowers"].x;
						sy = Terrain["Flowers"].y;
					}
					
					
					//console.log("x: " + sx + "y: " + sy);
					//ctx.save();
					ctx.drawImage(texture, sx, sy, 32, 32, x, y, 32, 32);
					//ctx.restore();
					//ctx.rect (x, y, 32, 32);
					maxY = y;				
				}
				//color = (color == "green" ? "blue" : "green");
				//ctx.fillStyle = color;
				//ctx.fill();
				//ctx.closePath();
				maxX = x;			
			}	
			
			this.treasure = new Game.Rectangle(Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY), 32, 32);
			
					
			//ctx.fillStyle = "black";			
			//ctx.fillRect(this.treasure.x, this.treasure.y, this.treasure.width, this.treasure.height);
			
			
			ctx.drawImage(texture, 128, 64, 32, 32, this.treasure.x, this.treasure.y, 32, 32);
				
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