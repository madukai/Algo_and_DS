const PeakElement = (a) => {
    console.log('peak element');
    let n = [];
    let l = a.length - 1;

    for (let i = 0; i < l; i++) {
        if (i === 0) {
            if (a[i] > a[i+1]) {
                n.push(i);
            }
            continue;
        }
        if ((a[i] > a[i-1]) && (a[i] > a[i+1])) {
            n.push(i);
        }
    }

    // check last element
    if (a[l] > a[l-1]) {
        n.push(l);
    }
    
    console.log(n);
    console.log('Done');
    return n;
}

const a = [1,2,3,4,5];
PeakElement(a);

// check if first element is bigger than 2nd element
// check if the prev and next element is smaller than current element
// check if the last element is bigger than prev element