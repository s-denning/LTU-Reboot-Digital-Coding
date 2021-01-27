

function calculator(number1, number2, operator) {

    result = '';


    switch(operator) {
case '+' :
    result = number1 + number2
    console.log(number1 + ' + ' + number2 + '=' +result);
    break;

    //above works fine, others have syntax issue. work out problem by comparing
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


}

calculator(10, 0, 'square')