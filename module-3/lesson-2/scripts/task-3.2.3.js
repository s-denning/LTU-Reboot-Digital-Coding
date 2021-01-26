/* EXAMPLE */

function greet(greeting, name) {
  return greeting + ' ' + name;
}

var message = greet('Hello', 'Luke');
    console.log( message ); // Output: Hello Luke

/* EXAMPLE */

// ADD YOUR CODE BELOW HERE


function fullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName + '<br>';
    return fullName;
}

//return function allows to be called later in program

var person1 = fullName('Stan', 'Denning');
document.write( person1 );

var person2 = fullName('Bob', 'Smith')
document.write(person2);

// ADD YOUR CODE ABOVE HERE