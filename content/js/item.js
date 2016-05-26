(function () {
	    function Item(type, text, func) {
	        this.rectangle = new Game.Rectangle(x, y, w, h);
	        
	        this.use = func;
	        this.text = text;
			this.type = type;	        
	    }

	    Item.prototype.setAction = function (canvas, func) {
	        canvas.onmouseup = function(e){
	            var mouse = getMousePosition(e).sub(new vector2d(canvas.offsetLeft, canvas.offsetTop));
	            if (mouse.x > this.x && mouse.x < (this.x + this.width) && mouse.y > this.y && mouse.y < (this.y + this.height)) {								
	                func();
	            }
	        }
	    }

	    Game.Item = Item;
	})();