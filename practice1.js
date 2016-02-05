function Price(meat) {
	var increase = 0;

	this.meat = meat;
//	console.log(this);
	if(this.staple == "rice") {
		increase = 10;
	}else if(this.staple == "noodles") {
		increase = 5;
	}
	if(meat == "beef") {
		this.price = 100+increase;
	}else if (meat == "pork") {
		this.price = 80+increase;
	}
}

function Meals(name, staple, meat, soup) {
	this.name = name;
	this.staple = staple;
	Price.call(this, meat);
	this.soup = soup;
}

var order1 = new Meals("Rickie", "rice", "beef", "miso soup");
var order2 = new Meals("Justin", "noodles", "pork", "pumpkin soup");
var order3 = new Meals("Sam", "noodles", "beef", "pumpkin soup");
var order4 = new Meals("John", "rice", "pork", "pumpkin soup");

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);


