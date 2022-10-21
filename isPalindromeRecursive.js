// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    //                   The triple === is basically saying return this if its true
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

// Explanation
// 'tacocat'
// third line:
// if (t === t) return isPalindrome('tacocat'.slice(1,-1))
//                                            .slice(t,t)
//                                            front 't' and end 't'
// else return false
