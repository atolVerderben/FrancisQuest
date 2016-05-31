(function () {
	    function Inventory() {
	        
            this.items = [Game.ItemGenerator("Health Potion Small", "Small Health Potion")];
            this.equip = {
                head: "none",
                body: "none",
                pants: "none",
                weapon: "hands"
            }
            this.selectItem = 0;
            this.open = false;	        
	    }
        
        Inventory.prototype.addItem = function(item){
            this.items.push(item);
        }
        
        Inventory.prototype.useItem = function(index){
            var item = this.items[index];
            
            this.items.splice(index,1);
            this.open = false;
            return item;
        }
        
        Inventory.prototype.openInventory = function(){
            if(this.open == true){
                this.open = false;
                modal.close();
                return;
            }
            var inventoryContent = "";
			
			for(var i = 0; i < this.items.length; i++){
				inventoryContent += "<div onclick='Game.player.useItem(\""+i+"\");modal.close();' style='cursor:pointer'>"+this.items[i].name+"</div>"; 
			}
			
			if(inventoryContent === ""){
				inventoryContent = "No Items in Inventory";
			}
			
			modal.open({content:"<h2>Inventory</h2><br/>"+inventoryContent});
            this.open = true;
        }
        
        Inventory.prototype.draw = function(ctx, canvas){
            
            ctx.fillStyle = "#2b3b5f";
				
            ctx.globalAlpha = 0.75;
            ctx.fillRect(canvas.width/2 - 200, canvas.height/2 - 100, 400, 200);
            
            
            ctx.globalAlpha = 1;
            
            
            
        }

	    Game.Inventory = Inventory;
	})();
	
    
 