/*
Example 1:


Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Example 2:


Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

Example 3:


Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

Example 4:


Input: "/a/./b/../../c/"
Output: "/c"

Example 5:


Input: "/a/../../b/../c//.//"
Output: "/c"

Example 6:


Input: "/a//b////c/d//././/.."
Output: "/a/b/c"

string result;
string prevChar = empty string
indexOfAscii = 0
iterate thru input string path
for (i = 0 -> path.len-1)
    if (prevChar != '/') 
    {
        add concatonate current char to result
        check if the current char is not / or .
        if (currentChar != '/' or currentChar != '.')
            // keep track of the last ascii char
            indexOfLastAscii = i
    }
    else if (prevChar == '.') {
        clear result
    }
    // update prevChar with current char
    prevChar = path[i];

clear any non ascii char beginning from indexOfLastAscii
for (j = indexOfLastAscii; j -> result.len-1) 
    remove current element from result
*/