

function calculator(number1, number2, operator) {

    result = '';


    switch(operator) {
case '+' :
    result = number1 + number2
    console.log(number1 + ' + ' + number2 + '=' +result);
    break;

case '*' :
    result = number1 * number2
    console.log(number1 + ' * ' +  number2 + '=' +result);
break;
case '-' :
    result = number1 - number2
    console.log(number1 + '-' +  number2 + '=' +result);
break;
case '/' :
    result = number1 / number2
    console.log(number1 + '/' +  number2 + '=' +result);
break;
case 'square' :
    result = number1 * number1
    console.log(number1 + '*' +  number1 + '=' +result);
    break;
    }
//square function needs fixing so second number not required to work (or hidden?)

}

calculator(10, 0, 'square')