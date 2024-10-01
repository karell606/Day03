fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];
function getFruitInfo(parametre) {
	
    if (typeof parametre === "string") {
			return fruits.indexOf(parametre) !== -1 ? fruits.indexOf(parametre) : null;
    } else if (typeof parametre === "number") {
        
        return parametre >= 0 && parametre < fruits.length ? fruits[parametre] : null;
    }
		return null;
}


displayResult(getFruitInfo(2)); 
