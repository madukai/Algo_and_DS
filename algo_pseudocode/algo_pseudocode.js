// NOTE: Pseudocode for breaking down the Maze problem
// No implementation of actual code yet


// *********************** Maze Problem ********************************************************
// Problem description: 
// On a NxN matrix, there are more than 1 possible way to reach the goal
// Find the shortest path
// Note: there's always 1 path available to reach goal

// O = passable
// X = obstacle
// Y = target destination
// Z = visited Node and it's considered obstacle
// count = number of steps took

// 1: Check the current node if it is equal to target destination  
//    a: True: 
          // - if stack has a length of more than one
          //   -- store the current count into an array, pop the top and check other paths, 
          // - if stack is empty
          //   -- iterate thru the array of count and get the miminum  
          // - otherwise just return current count
//    b: False: go to step two
// 2: Check if there are more than one adjacent Node the is passable and set it to Z as visited
// 3: Push Node if it has more than one passable node to stack
// 4: Go to next passable node, increment count and go to step 2, otherwise go to step 3


// *********************** Get the longest Palindrom ***********************************************
/* Problem Description:
Get the longest substring palindrome from a string

// SUM = total length

1: Tally the number of each character from the string into a map
2: Iterate through the map and get the count of each character
3: If the number is even, add it to SUM
4: If the number is odd, check if SUM is an odd number or even
   a: Even - Add the odd number
   b: Odd - Ignore the odd number and any other odd numbers after
*/
