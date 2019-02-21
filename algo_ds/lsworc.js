const lsworc = function(S) {

    let charLog = {};
    let currCount = 0;
    let maxCount = 0;

    for(let c in S) {
        
        if(charLog[S[c]]) {
            // check which one is bigger
            if(maxCount < currCount) {
                // update
                maxCount = currCount;
            }
            // reset
            charLog = {};
            charLog[S[c]] = 1;
            currCount = 0;
        }
        else {
            charLog[S[c]] = 1;
        }

        currCount++;
    }

    // last check for last char
    maxCount = Math.max(maxCount, currCount);

    return maxCount;
}

// input: abcabcbb | output: 3 (abc)
// input: bbbbb | output: 1 (b)
// input:  pwwkew | output: 3 (wke)

let S = "pwwkew";
console.log(lsworc(S));

// https://leetcode.com/problems/longest-substring-without-repeating-characters/