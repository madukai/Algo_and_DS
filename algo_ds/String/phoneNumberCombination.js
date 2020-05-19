/*

1 = ''
2 = abc
3 = def
4 = ghi
5 = jkl
6 = mno
7 = pqrs
8 = tuv
9 = wxyz

Input: "23"

a = ad ae af
b = bd be bf
c = cd ce cf

Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

------------------------------------------------------------------

Input: "235"

a = adj adk adl aej aek ael afj afk afl
b = bdj bdk bdl bej bek bel bfj bfk bfl
c = cdj cdk cdl cej cek cel cfj cfk cfl

create a map to match number and letter

Iterate through each number string in the input
    iterate each character that is map to the current number | A
        if result array is empty
            get the next number from the input and iterate thru each char that is map to it | B
            we concatonate A and B and add it to array result
        otherwise
            get the next number from the input and iterate thru each char that is map to it | B
            we concatonate result array and B and add it to array result
        go to the next number of the string

*/