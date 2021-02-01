  //1. Create a function that takes 1 argument (the array)
  
  //2. Create a variable inside the function called “totalPrice”

  //3. Loop through each item in the array and add the value of the item to the total price, remember to account for the quantity.

  //4. Return the totalPrice Variable

  //5. console.log the returned value
  

  function cartTotal(cartArray) {
    let totalPrice = 0;
    for (let index = 0; index < cartArray.length; index++ ) {
//console.log(cartArray[ index ].price);

//console.log(cartArray[ index ].price * cartArray[index].quantity);
totalPrice= totalPrice + cartArray[ index ].price * cartArray[index].quantity;
    }
return totalPrice.toFixed(2);

  }

 console.log( "£" + cartTotal(shoppingCart))