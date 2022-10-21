function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}


// Recursive function
function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1);
}

factorial(4)
// 3 * factorial(2)
//          2 * factorial(1)
//                    return 1
// 3 * 2 * 1 = 6

 