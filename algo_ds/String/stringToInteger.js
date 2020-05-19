/*
if first character of a string is not either a number, space or negatve sign
return 0

iterate thru the string
 if a char is either a negative sign (-) or a number
 add it to a temp string 

use the unary operator to convet it to an integer

Input: '42'
Output: 42

Input: '    -42'
Output: -42

*/

const makeInt = (s) => {

    let cr = s[0];
    let nc = +s[0];
    if (cr !== ' ' || cr !== '-' || isNaN(nc)) {
        console.log(`result: ${0}`);
        return 0;
    }

    let tmp = '';

    for (let c in s) {
        let n = +c
        if (c === ' ' || c === '-' || typeof n === Number) {
            tmp += c;
        }
    }
    // unary operator
    let n = +s;

    console.log(`result: ${n}`);
}

makeInt('    -42');