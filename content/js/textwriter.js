(function(){
		
		function TextWriter(){
			
			this.timeCount = 0;
			this.timer = 10;
			
		}
		
		TextWriter.prototype.draw_text = function(ctx, text, font, x, y, align, color){
			
			color = ((color) ?  color: "#FFFFFF");
			align = ((align) ? align : "left");
			
			ctx.textAlign = align;
			ctx.fillStyle = color;	
			ctx.strokeStyle = "#140c1c";
			ctx.font = font;
			ctx.strokeText(text, x+2 ,y+2);
			ctx.font = font;
			ctx.fillText(text, x ,y);
		}
		
		Game.TextWriter = TextWriter;
		
	})();