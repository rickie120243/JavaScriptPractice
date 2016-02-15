var menu = {
	rice : 10,
	beef : 50,
	misoSoup : 15,
	cake : 30,
	fish : 40,
};

function Order(obj) {
	this.name = obj.name;
	this.items = obj.items;
}

Order.prototype.getPrice = function() {
	var sum = 0;
	this.items.map(function(item) {
		sum += menu[item];
	});
	this.price = sum;
	return this;
};

Order.prototype.addItems = function() {
	for (var i in arguments) {
		this.items.push(arguments[i]);
	}
	return this;
};

var order = new Order({
	name : 'Rickie',
	items : ['rice', 'beef', 'misoSoup']
});

order.addItems('cake', 'fish').getPrice();

console.log(order);