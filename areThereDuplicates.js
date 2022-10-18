// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates
// among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Two Pointers
// Might be wrong
function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    let left = 0;
    let right = 1;

    while (right < args.length) {
        if (args[left] === args[right]) {
            return true
        }
        left++;
        right++;
    }
    return false
}


// Frequency counter
function areThereDuplicates2() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

areThereDuplicates2('a', 'b', 'c', 'd')


// One Liner Solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}
