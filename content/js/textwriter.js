(function(){
		
		function TextWriter(){
			
			this.timeCount = 0;
			this.timer = 10;
			
		}
		
		TextWriter.prototype.draw_text = function(ctx, text, font, x, y, align, color, backColor){
			
			color = ((color) ?  color: "#deeed6");
			color = ((color == "white") ?  "#deeed6": color);
			color = ((color == "black") ?  "#140c1c": color);
			align = ((align) ? align : "left");
			backColor = ((backColor) ?  backColor: "#140c1c");
			backColor = ((backColor == "white") ?  "#deeed6": backColor);


			
			
			ctx.textAlign = align;
			ctx.fillStyle = color;	
			ctx.strokeStyle = backColor;
			ctx.font = font;
			ctx.strokeText(text, x+2 ,y+2);
			ctx.font = font;
			ctx.fillText(text, x ,y);
		}
		
		Game.TextWriter = TextWriter;
		
	})();