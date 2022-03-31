"use strict";

// function canBuyBeer(age) {
//     if (age >= 18) {
//         return 'You can buy beer';
//     } else {
//         return 'You can not buy beer';
//     }
// }

// console.log(canBuyBeer(15));


function getLargeExpression(a, b) {
    let result = a + b;
    let operator = '+';

    if (a - b > result) {
        result = a - b;
        operator = '-';
    } 
    if (a * b > result) {
        result = a * b;
        operator = '*';
    }
    if (a / b > result) {
        result = a / b;
        operator = '/';
    }

    return [result, operator];
};

console.log(getLargeExpression(-5, -0.5));