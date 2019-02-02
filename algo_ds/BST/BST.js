class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  //BST 
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    //insert 
  
    insert(data) {
      const node = new Node(data)
      if (!this.root) {
        this.root = node;
  
      }
      else {
        let current = this.root;
  
        while (true) {
          //left : data is less than root 
          if (data < current.data) {
            //if there is no left so we just going to inset it
            if (!current.left) {
  
              current.left = node;
              return this;
            }
            current = current.left;
          } else {
            //right: data greate than root value
            if (!current.right) {
  
              current.right = node;
              return this;
            }
            current = current.right;
  
          }
        }
      }
    }
  
    //find 
    find(data) {
      // check if BST is empty
      if (!this.root) {
        return false;
      }
  
      let current = this.root;
  
      while (true) {
        if (data < current.data) { // go left
  
          if (!current.left) {
            return false;
          }
  
          current = current.left;
        }
        else if (data < current.data) { // go right
  
          if (!current.right) {
            return false;
          }
  
          current = current.right;
        }
        else {
          if (current.data === data) {
            return true;
          } else {
            return false;
          }
        }
      }
    }

    //BFS
    BFS() {
      // check if tree is empty
      if(!this.root) {
        return false;
      }
      
      let queue = [];
      let result = [];
      let tmp = this.root;
      
      queue.push[tmp];
      
      while(queue.length > 0) {
        //
        tmp = queue.shift();
        result.push(tmp.data);
        
        if(tmp.left) {
          queue.push(tmp.left);
        }
        
        if(tmp.right) {
          queue.push(tmp.right);
        }
      }
      
      return result;
    }
    
    DFS(){
      
      let node = this.root;
      
      let result [],
          stack =[];
      
      stack.push(node);
      
      while(stack.length){
          //[8,,]   //[10,15]
          node = stack.pop();
          result.push(node.data)
        
        if(node.left)  stack.push(node.left)
        if(node.right)  stack.push(node.right)
      
      }
      
      return result;
    }
    
    //traversal : preoreder , post order and inorder 
    PreOrder() {
      let result =[];
      if(!this.root) return result;
      
      function helperTraverse(root){
          
          result.push(root.val);
          if(root.left) helperTraverse(root.left)
          if(root.right) helperTraverse(root.right)
      }
      
      helperTraverse(this.root)
      
      return result;
    }
    
    InOrder() {
      let result = [];
      if(!this.root) return result;
      
      function helperTraverse(root){
          
          if(root.left) helperTraverse(root.left);
          result.push(root.val);
          if(root.right) helperTraverse(root.right);
      }
      
      helperTraverse(this.root)
      
      return result; 
    }
    
    PostOrder() {
      let result = [];
      if(!this.root) return result;
      
      function helperTraverse(root){
          
          if(root.left) helperTraverse(root.left);
          if(root.right) helperTraverse(root.right);
          result.push(root.val);
      }
      
      helperTraverse(this.root)
      
      return result; 
    }
  }
  
  
  
  const b = new BST();
  b.insert(10)
  b.insert(8)
  b.insert(7)
  b.insert(6)
  b.insert(12)
  
  console.log(b.find(6))