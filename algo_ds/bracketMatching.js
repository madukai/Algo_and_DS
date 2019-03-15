const bracketMatch = (str) => {

    let result = true;
    let bracketStack = [];
    var bo = ''; // open
    var bc = ''; // close 
    var i = 0;

    const openBracket = ['(', '[', '{'];
    const pairBracket = ['()', '[]', '{}']; 

    // iterate
    for(let b of str) {
        
        // open bracket
        if(openBracket.includes(b)) {

            bracketStack.push(b);
            // increment
            i++;
        }
        else { // close bracket

            // decrement
            i--;
            // get the last element
            bo = bracketStack[i];
            // store the current char (bracket)
            bc = b;

            // compare if brackets are matching
            if(pairBracket.includes(bo+bc)) {
                // pop last element
                bracketStack.pop();
            }
        }
    }

    // last check of element
    if(pairBracket.includes(bo+bc)) {
        bracketStack.pop();
    }

    // if bracket stack is not empty
    if(bracketStack.length !== 0) {
        // return false
        return false;
    }

    return result;
}

let bStr = '([{()()}])';
console.log(bracketMatch(bStr));