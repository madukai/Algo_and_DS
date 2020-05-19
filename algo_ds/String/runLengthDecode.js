/*
s = "3[a]2[bc]", return "aaabcbc"
s = "3[a2[c]]", return "accaccacc"
s = "2[abc]3[cd]ef", return "abcabccdcdcdef"

Iterate through the whole string
    if cur element is number, assign it to a variable (limit)

    call helper function with parameter (cur element + 2, limit, inputStr)

    helper function
        tmpConStr
        iterate through inputStr until limit
        if (element is ']' || len of inputStr)
            break out of the loop
        else if (element is a number)
            tmpConStr += call helper function recursively
        else    
            tmpConStr
    return tmpConStr;
*/