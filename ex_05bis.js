// Write your function here ...
function getBasketContent(nbFruits) {
    let strawberry = "strawberry"
    let apple = "apple"
    let lime = "lime"
    let peach = "peach"
    let pear = "pear"
 
    let fruits = [strawberry,strawberry,strawberry,apple,apple,lime,lime,peach,pear,pear]
 
     if (nbFruits > fruits.length) {
     console.log("too many fruit(s) selected")
     return []
     }
      else {
          console.log(nbFruits + ' fruit(s) selected')
          return fruits.slice(0, nbFruits)
     }
    }
 
    // DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
    if (typeof getBasketContent === "function") {
        const fruits = getBasketContent()
        showMyBasket(fruits)
    }
