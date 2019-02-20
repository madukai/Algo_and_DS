
var subSumDivByK = function(A,K) {

  // check if the whole array's sum is divisible by k
    const sum = A.reduce((a,b )=> a+b);

    if(sum % K === 0) {
      console.log(sum);
    }
    let kl = K-1; 

    // do the sliding window algorithm until it is down to 1 element
    while(kl > 0) {

      let sum = 0;

      for(let i = 0; i < kl; i++) {
        sum += A[i];
      }

      let winSum = sum;
      for(let j = kl; j < A.length; j++) {
        winSum += A[j] - A[j-kl];

        if(winSum % K === 0) {
          console.log(winSum);
        }
      }

      kl--;
    }
}


let A = [4,5,0,-2,-3,1];
let K = 5;

/*
var subarraysDivByK = function(A, K) {
    let returnResult =[]

  for(let i =0; i < A.length; i++){
    let res =[..]
 
};

var helperFunction = function (arr){

  const result = arr.reduce((a,b)=> a+b);
  return result
}



let A = [4,5,0,-2,-3,1];
let K = 5;
console.log(subarraysDivByK(A,K)) */