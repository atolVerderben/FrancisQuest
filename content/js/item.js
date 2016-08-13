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
		if(type == "Health Potion Small"){
			item = new Game.Item(type, name, {attr: "health", affect: "increase", amount: Math.floor(Math.random()*10 + 1)});
		}
		return item;
	}
	Game.ItemGenerator = ItemGenerator;
})();