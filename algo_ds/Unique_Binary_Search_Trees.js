// NOTE: The method the BST is build is a bit different for this algo


class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  
let buildTree = function(start, end) {
  
    let listNode = [];
  
    // logic to stop recursion call if subtree is empty
    if(start > end) {
      listNode.push(null);
      return listNode;
    }
  
    //iterating through all values from start to end  for constructing\ 
    // left and right subtree recursively
    for(let i = start; i <= end; i++) {
      //build left subtree
      let leftSubtree = buildTree(start, i-1);
      
      //build right subtree
      let rightSubTree = buildTree(i+1, end);
  
      // iterate through all left and right subtrees
      // and combine it to the ith root
      for(let j = 0; j < leftSubtree.length; j++) {
        // store node from left subtree
        let left = leftSubtree[j];
        
        for(let k = 0; k < rightSubTree.length; k++) {
          // store node from right subtree
          let right = rightSubTree[k];
          // i is the root value
          let node = new Node(i); 
          // connect left subtree
          node.left = left; 
          // connect right subtree
          node.right = right; 
          // push to tree list
          listNode.push(node);
        }
      }
    }
  
    return listNode;
  }
  
  let lNodes = buildTree(1,2);
  
  console.log(lNodes.length);