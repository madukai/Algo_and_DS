
/*
Input: abcadef
substr: abc : 3 | bcadef : 6
Output: bcadef : 6

iterate through the array for (i -> n-1)

   0 1 2 3 4 5 6
  [a b c a d e f]
i: 0 1
j: 0 1 2 3 4 5 6

map[a b c] = j(3) - i(0) = 3 
pop map[i] : i = 0
increment i = 1
map[b c a d e f] = j(6) - i(1) = 5

5 > 3

5 is the output
________________________________________
Input: qwetasfghtzxcvbnm
subsstr: qwetasfgh : 9 | asfghtzxcvbnm : 13
Output: asfghtzxcvbnm : 13

iterate through the array for (i -> n-1):
   q w e t a s f g h t z  x  c  v  b  n  m
  [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16]
i: 0
j: 0 1 2 3 4 5 6 7 8 

m[q w e t a s f g h] = 9
pop i element, increment i, while i < j
m[a s f g h t z  x  c  v  b  n  m] = 
*/