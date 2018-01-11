function Phone (brand, price, color, model, availability) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.model = model;
	this.availability = availability;
}

Phone.prototype.printinfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", and the price is " + this.price + ".");

}

Phone.prototype.isAvailable = function() {

	switch (this.availability) {
		case "yes":
			console.log(this.brand + " " + this.model + " is in the store.");
			break;

		case "no": 
			console.log(this.brand + " " + this.model + " is not available now.");
			break;
		default:
			console.log("No information.");	
	}
}


var SamsungGalaxyS6 = new Phone("Samsung", 2100, "black", "Galaxy S6", "yes");
var iPhoneS6 = new Phone("Apple", 2200, "silver", "S6", "no");
var OnePlusOne = new Phone("OnePlus", 2000, "red", "One", "yes");

SamsungGalaxyS6.printinfo();
iPhoneS6.isAvailable();
OnePlusOne.isAvailable();