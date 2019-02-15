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
}

//bfs and dfs


const g = new Graph();
g.addVertex("SF")
g.addVertex("Boston")
g.addVertex("NYC")
g.addVertex("Texas")
g.addVertex("Delhi")

g.addEdges("SF","Boston")
g.addEdges("NYC","Boston")
g.addEdges("NYC","Delhi")

g.removeVertex("NYC")

// g.removeEdges("SF","Boston")
console.log(g)