//1. Create a function named drinkOrder

//2. Add 2 arguments for “size” and “drink”

//3. Use a switch statement to determine where the functional code needs to be written

//4. Create a message in each case statement to be returned.

//5. Console.log the returned message

//6. Commit your changes

//. Push your changes to remote


function drinkOrder(size, drink) {
    switch(drink) {
    case 'water' : 
    console.log( 'You have ordered a ' + size + ' ' + drink );
    break;
    case 'beer' :
    console.log( 'You have ordered a ' + size + ' '  + drink );
    break;
    case 'wine' : 
    console.log( 'You have ordered a '  + size + ' ' + drink );
    break;
    default:
    console.log( 'Please place your order')
    break;
    }
    
}

drinkOrder('small', 'water');