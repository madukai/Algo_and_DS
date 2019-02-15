// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

//Given a set of distinct integers, nums, return all possible subsets (the power set).
let subsets = (n) => {

    let result = [];
    result.push([]);

    n.forEach(a => {
     debugger;
      //array length
        let length = result.length;
        let i =0;

        while(i < length){

          let temp = result[i].slice(0);
          temp.push(a);

          result.push(temp);
          i++;

        }
    })

    return result;
}

n = [1,2,3];

console.log(subsets(n));