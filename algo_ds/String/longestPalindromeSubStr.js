
/*
get element left and right element
if s[i] is equal to s[j] 
s[i] == s[j]
  l[i+1][j-1] + 2; increment current element in the table by 2

if it is not equal,
s[i] != s[j]
  max(1[i][j-1], l[i+1][j]), get the max between left elemen and lower left element and assign it to current element

Input = dabcba
Output = abcba : 5

dabcba

   0 1 2 3 4 5
0  1 1 1 1 3 5
1    1 1 1 3 5
2      1 1 3 3
3        1 1 1
4          1 1
5            1

Input: bananat
Output: anana : 5

bananat

   0 1 2 3 4 5 6
0  1 1 1 3 3 5 5
1    1 1 3 3 5 5 
2      1 1 3 3 3 
3        1 1 3 3 
4          1 1 1 
5            1 1
6              1

*/