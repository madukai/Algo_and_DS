const LPS = function(S) {

    let charArray = S.split('');
    let len = charArray.length;
    let k = charArray.length - 1;
    let result = 0;

    let rev = [...charArray];
    // check if the whole string is a palindrome
    if(charArray === rev) {
        // return the length of the whole string
        return charArray;
    }
    debugger;

    // do the sliding window algorithm to check for each substring
    // starting from length-1 to 1
    while(k > 0) {

        let currentSubStr = [];
        
        for(let i = 0; i < k; i++) {
            currentSubStr.push(charArray[i])
        }

        // store current substr
        rev = [...currentSubStr]

        // check if equal
        if(currentSubStr.join('') === rev.reverse('').join('')) {
            result = currentSubStr;
        }


        for(let j = k; j < len; j++) {
            // pop front
            currentSubStr.shift();
            // push to the end
            currentSubStr.push(charArray[k]);

            rev = [...currentSubStr]

            // check if equal
            if(currentSubStr.join('') === rev.reverse('').join('')) {
                result = currentSubStr;
                break;
            }

        }

        // if result is not equal to 0 break out of the while loop
        if(result !== 0) {
            break;
        }
        k--;
    }

    console.log(result);
    return result;
} 


// Input: "babad" | Output: "bab"
// Input: "cbbd" | Output: "bb"
let s = "babad";
LPS(s);


// https://leetcode.com/problems/longest-palindromic-substring/