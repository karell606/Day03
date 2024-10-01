fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getIndexFromName(name){
		let index = fruits.indexOf(name);
  if (index === -1) {
  	return null;
    
  }
		return index 
  
  }
  
  displayResult(getIndexFromName("Kiwi"));
