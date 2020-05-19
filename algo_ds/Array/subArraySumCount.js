// Subarray Sum Count

// Brute force O(n^2)
const subArraySumCount = (a, k) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        // console.log(`i: ${a[i]} `);
        let currentSum = a[i];
        let innerSum = [a[i]];
        if (a[i] === k) {
            let t = [a[i]];
            result.push(t);
            continue;
        }        
        for (let j = i + 1; j < a.length; j++) {
            // console.log(`a[${j}]: ${a[j]}`);
            // current element is smaller than k
            if (a[j] < k) {
                let cs = currentSum + a[j];
                if (cs < k) {
                    innerSum.push(a[j]);
                } else if (cs === k) {
                    innerSum.push(a[j]);
                    result.push(innerSum);
                    break;
                }
            }
        }
    }
    console.log('result: ');
    console.log(result);
}

// Efficient O(n)
const sybArraySumCountEff = (a, k) => {
    let mapObject = {};
    count = 0;
    let currSum = 0;

    for (let i = 0; i < a.length; ++i) {
        currSum += a[i];
        if (currSum === k) {
            count++;
        } else if (mapObject[`${currSum-k}`] !== undefined) {
            count += mapObject[`${currSum-k}`];
        }
        mapObject[`${currSum}`] = 1;
        console.log('Obj: ', mapObject);
    }
    console.log(`count: ${count}`);
}

const a = [3,4,7,-3,10];
const k = 7;

sybArraySumCountEff(a, k)
/*
if currSum is equal k
   incremnt count
if currSum - k is not in map
    push currSum - k it to map
eif currSum - k is IN map
    add value of map[currSum - k] to count
increment value by 1 of map[currSum]
*/