// Node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    // head of the node
  
    constructor() {
      this.head = null;
    }
  
    //insert at head : true if inserted and false instaead
    insertAtHead(item) {
  
      const newNode = new Node(item);
  
      try {
  
        if (!this.head) {
          this.head = newNode;
        }
  
        //  1->2->3  four should be interted at front 4-1-2-3
  
        newNode.next = this.head;
        this.head = newNode;
  
        return true;
      } catch (err) {
        return false;
      }
  
  
    }
  
    insertAtTail(item) {
  
      const newNode = new Node(item);
  
      try {
  
        // if LinkedList empty
        if (!this.head) {
          this.head = newNode;
        }
  
        let temp = this.head;
        // iterate until the end of list
        //1-2-3-4-null
        while (temp.next) {
          temp = temp.next;
        }
  
        // assign newNode to the end
        // 1-2-3-4-5
        temp.next = newNode;
  
        return true;
      } catch (err) {
        return false;
      }
    }
  
    //print the entire LL
  
    print() {
  
      let current = this.head;
      let stack = []
      while (current) {
        stack.push(current.value)
        current = current.next;
  
      }
      return this;
  
    }
  
    //delete at head : return the element which was deleted , if not delete false
    //DELETE first element 
    deleteAtHead() {
  
      try {
  
        //check if there is a head 
        if (!this.head) {
          return false;
        } else {
  
          //1-2-3-4  and we want to delete 1 and then return list which has 2-3-4
          const item = this.head.value;
          this.head = this.head.next;
          return item;
        }
  
      } catch (err) {
  
        return false;
  
      }
    }
  
    // Delete item
    deleteItem(item) {
  
      try {
  
        if (!this.head) {
          return false;
        } else {
  
          if (this.head.value === item) {
            this.deleteAtHead();
            return true;
          }
  
          let temp = this.head;
          // keep track of previous node
          let prev = new Node(0);
          // iterate 1-2-3-4-5-6 wanna delete 6
          while (temp) {
            // check if item is found
            if (temp.value === item) {
              // removes the current node on the list
              // item: 3 | 1-2-4
              prev.next = temp.next; // null
              break;
            }
            else {
              prev = temp;
              temp = temp.next;
            }
          }
  
          return true;
        }
  
      } catch (err) {
        return false;
      }
    }
  
  
    // search(data) - searches for an element in the linked list
    search(item) {
  
      try {
  
        if (!this.head) {
          return false;
        } else {
  
          if (this.head.value === item) {
  
            return 'Node found at head';
          }
  
          let temp = this.head;
          // keep track of previous node
  
          // iterate 1-2-3-4-5-6 wanna delete 6
          while (temp) {
            // check if item is found
            if (temp.value === item) {
              // removes the current node on the list
              return item;
  
            }
            else {
              temp = temp.next;
            }
          }
  
          return true;
        }
  
      } catch (err) {
        return false;
      }
    }
  
    isEmpty() {
      return !this.head ? false : true;
    }
  
  }
  
  
  
  const ll = new LinkedList();
  
  
  const a = new Node(2)
  const b = new Node(3)
  a.next = b
  
  
  ll.head = a;
  
  
  console.log(ll.insertAtHead(1))
  console.log(ll)