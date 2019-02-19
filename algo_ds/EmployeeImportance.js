// [[1, 5, [2, 3]], [2, 3, [3]], [3, 3, []]], 1
//id , importance, and diret re
var getImportance = function(employees, id) {

  let map ={};
  let sum =0;
  //1 : 5, [2,3]

  employees.forEach( e=>{
    if(e){
      map[e[0]? e[0]:0] = {imporatnce:e[1] ? e[1] :0,reports:e[2]? e[2]:0}
 }
  })
  console.log(map)
    
  for(let k in map){


    if(k == id){
      sum += map[k].imporatnce;
      console.log(sum);

      let data = map[k].reports;

       data.forEach(e=>{

         sum += map[e].imporatnce
       })


    }

  }
  return sum;
};




// let e =[[1, 5, [2, 3]], [2, 3, [3]], [3, 3, []]];
let e1=[[1,2,[2]], [2,3,[]]]
let id =2;

console.log(getImportance(e1,id))