function discountedTotal(cartArray, discountAmount,discountType) {
    let totalPrice = 0;
    for (let index = 0; index < cartArray.length; index++ ) {

if (cartArray[index].type === 'food') {

    let discount = ( cartArray[index].price * 20) / 100;

totalPrice= totalPrice + (cartArray[ index ].price - discount) * cartArray[index].quantity;
} else {
    totalPrice= totalPrice + cartArray[ index ].price * cartArray[index].quantity;
}
}
return totalPrice.toFixed(2);

  }

 console.log( "£" + discountedTotal(shoppingCart))

 //'if' 'else'

 1. Take your function from the previous task 3.5.2 and copy it into your javascript file
  
  2. Add 2 extra arguments to the function for “discountAmount” and “type”

  3. Replace the logic that takes off 20% for object.type == “food” for object.type == type and allow the 20% to be the {discountAmount}%

  4. Create logic so that if type == “any” all products have a discount applied

  4. Return the totalPrice Variable

  5. console.log the returned value

  //define discountAmount,discountType
  //replace logic so that it can display different discounts eg discountType(shoppingCart '15%' 'home')