
/*
check if 4th character is a dot(.) or not
    if n[3] == '.'
        check for ivp4
        if (n[0] === 0) return invalid
        for(i = 0 -> n-1) 
            if (n[i] === '.')
                check if n[i+1] === 0
                    break out of the loop and return invalid
                if (prevSection === curSection) 
                    break out of the loop and return invalid
                else {
                    prevSection = curSection
                }
        return 'ivp4'
    else 
        check for ivp6
*/