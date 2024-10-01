fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitNameFromIndex(index) { 
  if (index === -1 || index === "Last") {
    	return fruits[fruits.length -1];
   } 
   if (isNaN(index) || index <0 || index >= fruits.length) { 
      return null;
    } 
    return fruits[index];	
}
  let result = getFruitNameFromIndex("Last");
  displayResult(result);
