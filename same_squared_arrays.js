// "Naive Solution"
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i< arr1.length; i++){
        // indexOf is another loop which is slower because it is nested
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
        // This splice method takes the correct index out of arr2 and continues the loop so it doesn't keep iterating through the same number
    }
    return true
}

// same([1,2,3,2],[9,1,4,4]);

// TC = Time Complexity
// SC = Space Complexity
// This function is:
// TC = O(n^2)

// Refactored Solution
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    
    // These are "for of" statement can be used to loop of arrays or strings a lot easier to read
    // Can only be used with iterable objects
    // Another statment is the "for in" statements which is used for enumerable flags such as objects
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

     for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if (!(key ** 2 in frequencyCounter2)){
            return false
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2); 
    return true
}

same2([1,2,3,2],[9,1,4,4]);

// Two separate loops is better than nested loops
// TC = O(n)

