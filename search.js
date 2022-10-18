// Given a sorted array of integers, write a function that accepts a value
// and returns the index where the value passed to the function is located
// if it is not found return -1

// search([1,2,3,4,5,6],4) // 3

// "Naive Solution"
function search(arr, num){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
    }
    return -1;
}

search([1,2,3,4,5,6],7)
// TC: O(n)


// Refactored Solution
// This solution uses Divide and Conquer Pattern
function search2(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if(arr[middle] < val){
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle -1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

// TC: O(log n)
