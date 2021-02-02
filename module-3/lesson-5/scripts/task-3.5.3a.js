function discountType(cartArray, discountAmount,discountType) {
    let totalPrice = 0;
    for (let index = 0; index < cartArray.length; index++ ) {

if (cartArray[index].type === discountType) {

    let discount = ( cartArray[index].price * discountAmount) / 100;

totalPrice= totalPrice + (cartArray[ index ].price - discount) * cartArray[index].quantity;
} else if (type === 'any') {
    let discount = ( cartArray[index].price * discountAmount) / 100;
}

else {
    totalPrice= totalPrice + cartArray[ index ].price * cartArray[index].quantity;
}
}
return totalPrice.toFixed(2);
}

//console.log( "£" + discountType(shoppingCart))

document.write( '£' = discountAmount(shoppingCart, 20, 'food'));
document.write( '£' = discountAmount(shoppingCart, 20, 'alcohol'));
document.write( '£' = discountAmount(shoppingCart, 20, 'home'));


  //define discountAmount,discountType
  //replace logic so that it can display different discounts eg discountType(shoppingCart '15%' 'home')