var Order = function() {
	this.currentOrder = {};
	this.menu = new Menu();
};

Order.prototype.showMenu = function(menu) {
	return this.menu.items;
};

Order.prototype.addItemsToOrder = function(item, quantity) {
	for (var key in this.menu.items) {
  	if (this.menu.items.hasOwnProperty(item) === true) {
			return this.currentOrder[item] = quantity;
		}
		else {
			throw new Error("That dish is not on the menu."); 
		}
	}
};


