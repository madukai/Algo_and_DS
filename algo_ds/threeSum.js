let threeSum = function(nums) {

    let result = [];
    let len = nums.length - 2;
    // sort array
    nums.sort((a,b) => a>b);
    
    // iterate through array
    for(let i = 0; i < len; i++) {
      // Logic to element getting set twice and to avoid duplicates on the result*
      if(i === 0 || nums[i] > nums[i-1]) {
        // pointer from start
        let start = i + 1;
        // pointer from end
        let end = nums.length - 1;
  
        // run while start is less than end
        while(start < end) {
          // check if the 3 element have a sum of zero
          if(nums[i] + nums[start] + nums[end] === 0) {
            // push to result
            result.push([nums[i], nums[start], nums[end]]);
          }
          
          // If sum of three numbers is less than zero
          if(nums[i] + nums[start] + nums[end] < 0) {
            // keep track of current start
            let currentStart = start;
            // increment start until the elements are not equal AND start is less than end*
            // to avoid duplicates on the result
            while(nums[start] === nums[currentStart] && start < end) {
              start++;
            }
          }
          else { // If sum of three numbers is greater than zero
            // keep track of current end
            let currentEnd = end;
            // decrement end until the elements are not equal AND start is less than end*
            // to avoid duplicates on the result
            while(nums[end] === nums[currentEnd] && start < end) {
              end--;
            }
          }
        }
      }
    }
    return result;
  }
  
  
  let n = [-1, 0, 1, 2, -1, -4];
  threeSum(n);
  
  // Source: https://www.youtube.com/watch?v=-AMHUdZc9ss