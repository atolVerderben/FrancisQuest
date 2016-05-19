(function () {
	    function Button(x, y, w, h, text, func) {
	        this.rectangle = new Game.Rectangle(x, y, w, h);
	        this.x = x;
	        this.y = y;
	        this.width = w;
	        this.height = h;
	        this.pressed = func;
	        this.text = text;
			this.active = true;	        
	    }

	    Button.prototype.setAction = function (canvas, func) {
	        canvas.onmouseup = function(e){
	            var mouse = getMousePosition(e).sub(new vector2d(canvas.offsetLeft, canvas.offsetTop));
	            if (mouse.x > this.x && mouse.x < (this.x + this.width) && mouse.y > this.y && mouse.y < (this.y + this.height)) {								
	                func();
	            }
	        }
	    }

	    Button.prototype.draw = function (ctx) {
	        ctx.font = "10pt Arial";
	        ctx.fillStyle = '#4e4a4e';
	        ctx.fillRect(this.rectangle.left, this.rectangle.top, this.rectangle.width, this.rectangle.height);
	        ctx.strokeStyle = "#deeed6";
	        ctx.strokeRect(this.rectangle.left + 8, this.rectangle.top + 8, this.rectangle.width - 16, this.rectangle.height - 16);
	        ctx.fillStyle = '#deeed6';
	        ctx.textAlign = "center";
	        ctx.fillText(this.text, this.rectangle.left + this.rectangle.width/2, this.rectangle.top + this.rectangle.height/2 + 5);
	    }

	    Game.Button = Button;
	})();