(function () {
	    function Inventory() {
	        
            this.items = [Game.ItemGenerator("Health Potion", "HP Potion")];
            this.equip = {
                head: "none",
                body: "none",
                pants: "none",
                weapon: "hands"
            }
            this.selectItem = 0;
            this.open = false;	 
            
            //drawing properties
            this.width = 400;
            this.height = 400;
            this.buttons = new Array();    
            
               
	    }

        Inventory.prototype.isFull = function(){
            if(this.items.length >= 6){
                return true
            }
            return false
        }

        Inventory.prototype.isEmpty = function(){
            if(this.items.length == 0){
                return true;
            }
            return false;
        }
        
        Inventory.prototype.addItem = function(item){
            this.items.push(item);
        }
        
        Inventory.prototype.useItem = function(index){
            var item = this.items[index];
            
            this.items.splice(index,1);
            this.buttons = [];
            this.open = false;
            if(!Game.isBattle()){
                            this.openInventory();
                            
                        }else{
                            Game.battleScene.setAction("useitem");
                        }
            //this.openInventory();
            return item;
        }
        
        Inventory.prototype.openInventory = function(){
            if(this.open == true){
                this.open = false;
                this.buttons = [];
                Game.hudCanvas.onmouseup = function(e){};
                return this.open;
            }
            
            var leftEdge = Game.hudCanvas.width/2 - this.width/2;
            var topEdge = Game.hudCanvas.height/2 - this.height/2;
            var startHeight = 20;
            var count = 0;
            this.items.forEach(function(item){
                
               this.buttons.push(new Game.Button("inventory" + count, leftEdge +20, topEdge + startHeight, 125, 50, item.name, null));
               item.descX = leftEdge + 225;
               item.descY = topEdge + startHeight + 20;
               startHeight += 60;
               count++;
            }.bind(this));
            
            Game.hudCanvas.onmouseup = function(e){
				var mouse = getMousePosition(e).sub(new vector2d(Game.hudCanvas.offsetLeft, Game.hudCanvas.offsetTop)); 
                var i =0;
                this.buttons.forEach(function(button){
                   if (button.rectangle.pointWithin(mouse)) {
					    Game.player.useItem(this.buttons.indexOf(button));
                        
				    }
                    i++;
                }.bind(this));
			}.bind(this);
            
            
            
            /*
            var inventoryContent = "";
			
			for(var i = 0; i < this.items.length; i++){
				inventoryContent += "<div onclick='Game.player.useItem(\""+i+"\");modal.close();' style='cursor:pointer'>"+this.items[i].name+"</div>"; 
			}
			
			if(inventoryContent === ""){
				inventoryContent = "No Items in Inventory";
			}
			
			modal.open({content:"<h2>Inventory</h2><br/>"+inventoryContent});
            
            */
            
            this.open = true;
            return this.open;
        }
        
        Inventory.prototype.draw = function(ctx, canvas){
            
            ctx.fillStyle = "#2b3b5f";
				
            ctx.globalAlpha = 0.75;
            ctx.fillRect(canvas.width/2 - this.width/2, canvas.height/2 - this.height/2, this.width, this.height);
            
            
            ctx.globalAlpha = 1;
            
            this.buttons.forEach(function(button){
                button.draw(ctx);
            })

             ctx.font = "10pt Arial";
	        ctx.fillStyle = '#deeed6';

            this.items.forEach(function(item){
                ctx.fillText("Increase " + item.attributes.attr + " by " + item.attributes.amount, item.descX , item.descY);
            })
	        
            
        }

	    Game.Inventory = Inventory;
	})();
	
    
 