

let getTheKthSubArray2 = (n, k) => {
    let stack = [];
    let l = n.length;
    let sum = 0;
    let winSum;
    let maxAvgSum = 0;

    // Get the first elements up to kth
    for(let i = 0; i < k; i++) {
        stack.push(n[i]);
        sum += n[i];
    }

    maxAvgSum = sum / k;

    console.log(`sum: ${sum} from ${stack}`);
    debugger;

    winSum = sum;

    // iterate throught the rest starting from kth
    for(let j = k; j < l; j++) {
        // pop the front element from stack
        // console.log("before pop",stack)
        stack.shift();
        // console.log("pop",stack)
        // push the current element from given array
        stack.push(n[j]);

        // winSum += n[j] - n[j-k]; // sum 1 - 12 + -5 + -6
        // let t = winSum / k;

        // if(maxAvgSum < t) {
        //     maxAvgSum = t;
        // } 
        winSum =stack.reduce((a,b)=> a+b)/k;
        maxAvgSum = winSum > maxAvgSum? winSum : maxAvgSum;

        console.log(`sum: ${winSum} from ${stack}`);
    } 

    return maxAvgSum;
}


// Brute Force method
let getTheKthSubArray = (n, k) => {

    let sumList =0;
    let maxSumList =0;
    let stack = []

    for(let i =0; i < n.length ; i++){
        // [[1,12,-5], [12,-5,6],[-6,50,3]]
        let length =0
        let tempsTack=[]
        for(let j =i+0; j < n.length; j++){

             if(length < k){
                 length++;
                 tempsTack.push(n[j])
                 
             }
        }
        stack.push(tempsTack)
        
    }

     for(let i=0; i < stack.length; i++){
        if(stack[i].length ===k){
            const sum = stack[i].reduce((a,b)=> a+b)/ k;
            sumList = sum ;

            if(sumList >maxSumList ){
                maxSumList = sumList
            }

        }
    }

    return maxSumList;
}

 let n =[1,12,-5,-6,50,3], k = 4


//console.log(getTheKthSubArray(n, k));
console.log(getTheKthSubArray2(n,k));