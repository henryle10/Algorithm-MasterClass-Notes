function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(10000000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//     addUpTo(n) =    1    +    2    +    3    + ... + (n - 1) +    n   
//   + addUpTo(n) =    n    + (n - 1) + (n - 2) + ... +    2    +    1   
//   2 addUpTo(n) = (n + 1) + (n + 1) + (n + 1) + ... + (n + 1) + (n + 1)
//                 ________________________________________________________
//                                        n copies

//                             2addUpTo(n) = n * (n + 1)
//                             addUpTo(n) = n(n + 1) / 2

//  Big O is O(1) because the run time is constant and not effected by n