//create a dunction that is able to return a specific percentage of 
//any number eg if you want to know what 30% of 135 is

function perentageCalculator(number, percentage) {
let percentageOf = (number/100)*percentage;
    return percentageOf;
}

document.write(perentageCalculator(135, 30));

// refined version?:
//function perentageCalculator(number, percentage) {
//return (number/100)*percentage;
//}

//document.write(perentageCalculator(135, 30));
