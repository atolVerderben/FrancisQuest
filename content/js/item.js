(function () {
	    function Item(type, name, attributes) {
	        
	        this.name = name;
			this.type = type;
			this.attributes = attributes;

			this.descX = 0;
			this.descY = 0;	        
	    }

	    Game.Item = Item;
	})();
	
(function(){
	function ItemGenerator(type, name){
		var item;
		switch (type){
			case "Health Potion":
				var level = 1
				if(Game.player){
					level = Game.player.level
				}
				var amount = Math.floor(Math.random()*10 + 1) + (Math.floor(Math.random()*5 + 1 ) * (level-1))
				if(amount <= 20){
					name += " Sm";
				}else if( amount <= 45){
					name += " Md";
				}else{
					name += " Lg";
				}
				item = new Game.Item(type, name, {attr: "health", affect: "increase", amount: amount});
				break;
			case "Stamina Potion":
				var level = 1
				if(Game.player){
					level = Game.player.level
				}
				var amount = Math.floor(Math.random()*10 + 1) + (Math.floor(Math.random()*5 + 1 ) * (level-1))
				if(amount <= 20){
					name += " Sm";
				}else if( amount <= 45){
					name += " Md";
				}else{
					name += " Lg";
				}
				item = new Game.Item(type, name, {attr: "stamina", affect: "increase", amount: amount});
				break;
		}
		return item;
	}
	Game.ItemGenerator = ItemGenerator;
})();