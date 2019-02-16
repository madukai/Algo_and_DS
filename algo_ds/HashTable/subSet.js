// Implement the isSubset(list1,list2) function which will take two arrays as input and check whether one array is the subset of the other. Use the implementation of hash tables that we have built in the previous lessons!

var list1 = [9, 4, 7, 1, -2, 6, 5];
var list2 = [7, 1, -2, 34];

class HashTable {
  constructor() {
    this.keyMap = new Array();
  }

  _hash(s) {
    let total = 0;

    for (let i = 0; i < s.length; i++) {
      total = (total + s[i].charCodeAt(0) - 96) % 20;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index].length > 0) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  subArray(arr1, arr2) {
    //store value in hashtable
    for (let i = 0; i < arr1.length; i++) {
      this.set(arr1[i], i);
    }

    for (let i = 0; i < arr2.length; i++) {
      const checkUp = this.get(arr2[i]);

      //if not found
      if (!checkUp) {
        return false;
      }
    }

    return true;
  }
}

const h = new HashTable();
console.log(h.subArray(list1, list2));
