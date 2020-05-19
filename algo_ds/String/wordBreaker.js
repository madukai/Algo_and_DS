// word breaker aka word segment

/*
Input: s = "swe | careers", wordDict = ["swe", "careers"]
Output: true

Input: s = "apple | pen | apple", wordDict = ["apple", "pen"]
Output: true

Input: s = "cat | sand | og", wordDict = ["cats", "dog", "-sand", "and", "-cat"]
Output: false

Iterate each character in str
wordSegments = []
for( i = 0 -> s.len-1)
    // create a temp variable and add each character
    curWord += s[i];
    // iterate thru each word in given dictionary
    for (j = 0 -> wd.len - 1) 
        compare curWord to each word in dictionary
        if (curWord == wd[j]) {
            // push cur word into wordSegments array
            wordSegments.push(curWord);
            // reset empty string
            curWord = ''
        }
keep track if words in the given dictionary is already compared and match the segmented word
if not, there are words left on the dictionary doesn't match the segemented word
    return false
otherwise
    return true
*/