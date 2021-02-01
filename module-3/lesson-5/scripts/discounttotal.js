function discountedTotal(cartArray) {
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