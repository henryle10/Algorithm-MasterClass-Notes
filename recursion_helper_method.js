function collectOddValues(arr){
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
        // making a sub array excluding the first element
    }
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

//Pure Recursion
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
        // base case
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
// [1,3,5]
// [1].concat(collectOddValues[2,3,4,5])
//                    [].concat(collectOddValues[3,4,5])
//                                 [3].concat(collectOddValues([4,5]))
//                                               [].concat(collectOddValues[5])
//                                                           [5].concat(collectOddValues[])
//                                                                             []

// Example of slice [2,3,4,5] 
// slice(1)
// [3,4,5]

// concat just means join values to the array 
