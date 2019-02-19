// "abaxhjd" "abayuif"

// xhjd : abayhjf
// yuif : abayuif

// aabc | abca

var findLUSlength = function(a, b) {
    

  let map =[...a];

  // for(let i =0; i< a.length; i++){
  //   map.push(a[i])
  // }


  // for(let i =0; i < b.length;i++){
     
  //   if(b[i] === a[i]){
  //     map.shift()
  //   }else{
  //    console.log(map)
  //    return  map.length ? map.length : -1
  //   }
  
  // }

  // return -1;

  if (a ===b) return -1;
  else return Math.max(a.length, b.length)

};

console.log(findLUSlength("aefawfawfawfaw","aefawfeawfwafwaef"));



    
// let result = 0;

// // check the length
// if(a.length === 0 && b.length) { // both are empty string
//     return 1;
// }
// else if (a.length === 0 && b.length > 0) {// a is empty and b is not
//     return b.length;
// }
// else if(a.length > 0 && b.length === 0) {
//     return a.length;
// }
// debugger;
// if(a.length > b.length) {
    
//     for(let i = 0; i < a.length; i++) {
//         if(a[i] !== b[i]) {
//             result++;
//         }
//     }
// }
// else {

//   a:
//     for(let i = 0; i < b.length; i++) {
//       //check c
//        let charA = b[i];
//        let charB = a[i];
//         if(a[i] !== b[i]) {
//             result++;
//             if(a[i+1] === b[i+1]){
//               break a;
//             }
//         }
//     }
// }

// return result;