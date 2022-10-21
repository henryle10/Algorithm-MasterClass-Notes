// Recursive Function
function sumRange(num) {
    if(num === 1) return 1;
    // Base Case ^
    return num + sumRange(num - 1);
}

sumRange(3)
// return 3 + sumRange(2)
//                return 2 + sumRange(1)
//                               return 1
// 3 + 2 + 1 = 6