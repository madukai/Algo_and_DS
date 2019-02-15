/*
    Given an array of integers eg [1,2,-3,1] find whether there  
    is a sub-sequence that sums to 0 and return it (eg 1,2,-3 or 2,-3,1) 
    Checking every sub-sequence is O(n^2) which is too inefficient */

const SubSequenceSum =(array)=>{
    
let returnArray =[]
  
  var exit_loops = false;
for(let i =0; i < array.length ;i++){
 
  let sum =0;
  let stack=[]
 
  dance:
  for(let j =i+0; j < array.length; j++){
          sum += array[j];

          if(sum===0){
            console.log("I am here",i,j)
            // returnArray.push()
            for(let k =i ; k <= j ; k++){
              stack.push(array[k])
              continue;
              
            }
            debugger;
            returnArray.push(stack)
            break dance;
            
         
            
          }
         
         
  }
 
}

return returnArray;

}

let a= [1,3,2,-5,1];
console.log(SubSequenceSum(a))