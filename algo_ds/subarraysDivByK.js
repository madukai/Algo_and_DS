let subarraysDivByK  = function(A, K) {
    
    // empty object/map
    let mp = {}; 
    // cumulative sum
    let sum = 0; 

    for (let i = 0; i < A.length; i++) { 
        
        sum += A[i];
	    // mod twice for negative numbers
        const key = ((sum % K) + K) % K; 
	    // if mp[key] is undefined set 1, else increase 1
        mp[key] = mp[key]+1||1; 
    } 

    let s = 0;

    for (let i = 0; i < K; i++) {
        if (mp[i] > 1) {
            // sum of 1 to mp[i] - 1;
            s += (mp[i] * (mp[i] - 1)) / 2;   
		}
	}
    return s + (mp[0]||0);
}