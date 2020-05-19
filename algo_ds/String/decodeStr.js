const decodeStr = (s) => {

    let dp = new Array(s.length+1); // mapping is non-zero index
    dp.fill(0, 2, s.length+1);
    // index 0 is considered space string of length 1
    dp[0] = 1; // count as 1

    // index 0 is considered space string of length 2
    // check if first char is zero
    dp[1] = s[0] === '0' ? 0 : 1; // add 1

    for (let i = 2; i <= s.length; i++) {
        // get the 1 digit
        let oneDigit = Number(s.substring(i-1, i));
        // get the 2 digit
        let twoDigit = Number(s.substring(i-2, i));
        // check if 1 digit is non zero
        if (oneDigit >= 1) {
            // add the previous subset of 1 digits
            dp[i] += dp[i-1];
        }
        // check if 2 digit is between numbers 10 and 26
        if (twoDigit > 9 && twoDigit < 27) {
            // add the previous subset of 2 digits
            dp[i] += dp[i-2];
        }

    }
    // return the last element of the result array
    console.log(dp);
    return dp[s.length];
}

decodeStr('3416');

/*
12
[1 1 0]
[1 1 2]

226
[1 1 0 0]
[1 1 2 0]
[1 1 2 3]

3456
[1 1 0 0 0]
[1 1 1 0 0]
[1 1 1 1 0]
[1 1 1 1 2]
*/