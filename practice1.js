function Price(meat) {
	this.meat = meat;
//	console.log(this);
	if(meat == "beef") {
		this.price = "100";
	}else if (meat == "pork") {
		this.price = "80";
	}
}

function Meals(name, staple, meat, soup) {
	this.name = name;
	this.staple = staple;
	Price.call(this, meat);
	this.soup = soup;
}

var order1 = new Meals("rickie", "rice", "beef", "miso soup");
var order2 = new Meals("justin", "noodles", "pork", "pumpkin soup");


console.log(order1);
console.log(order2);

