// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of
// the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the
// second string, without their order changing.

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Multiple Pointers

function isSubsequence(string1, string2) {
    var i = 0;
    var j = 0;
    if(!string1) return true;
    while (j < string2.length) {
        if (string2[j] == string1[i]) {
            i++;
        }
        if (i === string1.length) {
            return true;
        }
        j++;
    }
    return false;
}

isSubsequence('sing', 'sting');

// Go through the loop incrementing j along until i equals sing.lengh because i
// can only be true if the conditions of j matches when incrementing i


// Recursive 
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}