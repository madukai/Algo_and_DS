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
  }
  
  
  
  const b = new BST();
  b.insert(10)
  b.insert(8)
  b.insert(7)
  b.insert(6)
  b.insert(12)
  
  console.log(b.find(6))