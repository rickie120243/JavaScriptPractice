function Price(meat) {
  var increase = 0;
  this.meat = meat;
  if ('rice' === this.staple) {
    increase = 10;
  }
  else if ('noodles' === this.staple) {
    increase = 5;
  }
  if ('beef' === meat) {
    this.price = 100 + increase;
  }
  else if ('pork' === meat) {
    this.price = 80 + increase;
  }
}

function Order(name, staple, meat, soup) {
  this.name = name;
  this.staple = staple;
  Price.call(this, meat);
  this.soup = soup;
}

var order1 = new Order('Rickie', 'rice', 'beef', 'miso soup');
var order2 = new Order('Justin', 'noodles', 'pork', 'pumpkin soup');
var order3 = new Order('Sam', 'noodles', 'beef', 'pumpkin soup');
var order4 = new Order('John', 'rice', 'pork', 'pumpkin soup');

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);


