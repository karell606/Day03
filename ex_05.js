function getBasketContent() {
    const stock = {
        strawberry: 3,
        apple: 2,
        lime: 2,
        peach: 1,
        pear: 2
    };
  
    const fruits = [];

    for (const fruit in stock) {
        for (let i = 0; i < stock[fruit]; i++) {
            fruits.push(fruit); 
        }
    }
    
    console.log(fruits.length + " fruit(s) selected");
    return fruits;
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
