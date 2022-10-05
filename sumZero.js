// sumZero([-3,-2,-1,0,1,2,3]) [-3,3]
// sumZero([-2,0,1,3]) undefined
// accepts a sorted array of int and return first pair where sum is 0

// "Naive Solution"
function sumZero(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])
// TC: O(n^2)
// SC: O(1)


// Refactored Solution
function sumZero2(arr){
    let left = 0;
    let right = arr.length - 1;

    // This while loop is going to check if the left is going to cross over the right 
    // if it does it will return undefined look at the numbers above and the counter
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
            // moves the right point at the end of the array to the left
            // and restarts the loop but if it is less than 0 the else statement runs
        } else {
            left++; 
        }
    }
}
sumZero([-4,-3,-2,-1,0,1,2,5])

// TC: O(n)
// SC: O(1)