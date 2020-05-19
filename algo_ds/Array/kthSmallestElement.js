// Getting Kth Smallest Element using Quick Select

const kthSmallestQS = (a, k) => {
    let len = a.length - 1;
    let pvt = len;
    let ix = 0;
    let i = 0;

    while (len !== 1) {
        while(ix < len) {
            if (a[ix] < a[pvt]) {
                i++;
            } else {
                let t = a[pvt];
                a[pvt] = a[ix];
                a[ix] = t;
                i++;
            }
            ix++;
        }
        console.log(a);
        if (i === k) {
            console.log(`Smallest kth element: ${a[k]}`);
            break;
        }
        len -= 1;
        pvt = len;
        ix = 0;
        i = 0;
    }
}

let a = [3,2,1,5,6,4];
k = 2;
kthSmallestQS(a,k);

/* 
choose the last element as the pivot
    starting from left (first element), compare it to the pivot (last element)
    if smaller -> no change
    if bigger -> swap 
    after all elements have been compared to pivot, check the lenght i + 1 == k
    if true -> return element 
    if false -> get the next element from right and make it a pivot
        and redo the steps
*/
