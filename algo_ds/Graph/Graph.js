//Graph  AddEdges , AddVertex  removeEdges , remove Vertex

class Graph{
  
  constructor(){
    this.adjacentList ={};
  }

  //add edges or ndoe
  addVertex(v){
    if(!this.adjacentList[v]){
      // [a]:[]
      this.adjacentList[v]=[]
    }
  }

  //add 
  addEdges(v1,v2){
    this.adjacentList[v1].push(v2)
    this.adjacentList[v2].push(v1)

  }

  // remove edges
  removeEdges(v1,v2){
    this.adjacentList[v1] =  this.adjacentList[v1].filter(v => v !==v2)
    this.adjacentList[v2] =  this.adjacentList[v2].filter(v => v !==v1)
  }
 
    //
    removeVertex(v){
      while(this.adjacentList[v].length){
        const v2 = this.adjacentList[v].pop();
        this.removeEdges(v,v2)
      }
      delete this.adjacentList[v];
      return this;
    }

    // BFS

  //        A
//        /   \
//       B     C
//       |     |
//       D --- E
//        

//          F
  bfs(start) {

    const queue= [start];
    const visited ={};
    const result =[];

    visited[start] = true;

    while(queue.length){

      let currentNode = queue.shift();
      result.push(currentNode);

      //edges its connected to 

      this.adjacentList[currentNode].forEach(neighbour => {
        if(!visited[neighbour]){
          visited[neighbour] = true;
          queue.push(neighbour)
        }
        
      });

    }
    return result;
  }

  dfs(start) {
    const stack = [start];
    const visited = {};
    const result = [];

    visited[start] = true;

    while(stack.length) {

      let currentNode = stack.pop();
      result.push(currentNode);

      this.adjacentList[currentNode].forEach(neighbour => {

        if(!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      })
    }

    return result;
  }
}


//bfs and dfs

  //        A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdges("A","B")
g.addEdges("A","C")
g.addEdges("B","D")
g.addEdges("C","E")
g.addEdges("D","F")
g.addEdges("D","E")
g.addEdges("E","F")


// g.removeEdges("SF","Boston")
//console.log(g.bfs("A"))
console.log(g.dfs("A"))