const AddReverse = (a, b) => {
    let c = [];
    let r = 0;
    for (let i = 0; i < a.length; ++i) {
        let s = a[i] + b[i] + r;
        if (s > 9) {
            s -= 10;
            r = 1;
        } else {
            r = 0;
        }
        c.push(s);
    }

    if (r === 1) {
        c[c.length-1] += 10;
    }
    console.log(c);
    console.log(revArray(c))
}

const revArray = (a) => {
    let ra = a;
    let l = 0;
    let r = ra.length-1;
    while (l < r) {
        let t = ra[l];
        ra[l] = ra[r];
        ra[r] = t;
        l++;
        r--;
    }
    return ra;
}

const a = [3,7,5];
const b = [2,4,6];
AddReverse(a,b);