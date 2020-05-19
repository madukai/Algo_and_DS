/*
Example 1
Input: [2,3,-2,4]
// intialize
currMax = 2
tempMax = 2
currMin = 2
maxProd = 2

i = 1 : 3
tempMax = 2
currMax = max(2*3=6, 2*3=6) -> max(6, 3) : 6
currMin = min(2*3=6, 2*3=6) -> min(6, 3) : 3
maxProd = max(2, 6) : 6

i = 2 : -2
tempMax = 6
currMax = max(6*-2=-12, 3*-2=-6) -> max(-12, -2) : -2
currMin = min(6*-2=-12, 3*-2=-6) -> min(-12, -2) : -12
maxProd = max(6, -2) : 6

i = 3 : 4
tempMax = -2
currMax = max(-2*4=-8, -12*4=-48) -> max(-8, 4) : 4
currMin = min(-2*4=-8, -12*4=-48) -> min(-8, 4) : -8
maxProd = max(6, 4) : 6

Output: 6


Example 2:
Input: [-2,0,-1]
Output: 0

create a variable to keep track of current product and assign the first element
currMax = n[0]
currMin = n[0]
maxProd;

iterate through array starting on the 2nd element
for (i = 1; i -> n-1 of array)

    // save current max 
    tempMax = currMax
    //
    currMax = max(max(currMax * n[i], currMin * n[i]), n[i])
    //
    currMin = min(min(tempMax * n[i], currMin * n[i]), n[i]);

    // compare current max and maxProd
    maxProd = max(maxProd, currMax);

return maxProd;
*/