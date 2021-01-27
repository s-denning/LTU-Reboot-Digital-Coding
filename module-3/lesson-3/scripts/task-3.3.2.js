

// switch statements - switch(variable) 
//{ case 'variable example', action (console log), break, repeat}


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