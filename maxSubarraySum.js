// Write a function which accepts array of integers and a number number
// function should calculate the max sum of n consecutive elements in an array

// maxSubarraySum ([1,2,5,2,8,1,5],2)  output: 10
// maxSubarraySum ([1,2,5,2,8,1,5],4)  output: 17

// "Naive Solution"
function maxSubarraySum(arr, num){
    if (num > arr.length){
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
        console.log(temp, max)
    }
    return max;
}

maxSubarraySum ([1,2,5,2,8,1,5],3)

// Time Complexity: O(n^2)


// Refactored Solution
// This functions uses Sliding Window
function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
      // 8 = 8 - arr[3 - 3] + 2
      // 9 = 8 - 1 + 2 
        // Instead of looping over and over each 3 numbers (in this case)
        // We can slide over one and subtract the previous index and add the nex index
        maxSum = Math.max(maxSum, tempSum);
        // set maxSum if the tempSum is greater than current var maxSum
    }
    return maxSum;
}

maxSubarraySum2([1,2,5,2,8,1,5,],3)
//                 8
//                   9

// Time Complexity: O(n)