const shuffleDeck = function(A) {

    let n = A.length;

    for(let i = n-1; i >= 0; i--) {

        // generate a random number betweem 0 to i + 1
        let j =  Math.floor(Math.random() * i+1);
        
        // swap current index and index from randomly generated number
        let tmp = A[j];
        A[j] = A[i];
        A[i] = tmp;
    }

    console.log(A);
}

let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 
    9, 10, 11, 12, 13, 14, 15, 
    16, 17, 18, 19, 20, 21, 22, 
    23, 24, 25, 26, 27, 28, 29, 
    30, 31, 32, 33, 34, 35, 36, 
    37, 38, 39, 40, 41, 42, 43, 
    44, 45, 46, 47, 48, 49, 50, 
    51]; 

shuffleDeck(A);