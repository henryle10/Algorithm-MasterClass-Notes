// Implement a function called countUniqueValues, which accepts a sorted array
// and counts the unique values in the array. There can be negative numbers in the array
// but it will aways be sorted.



// countUniqueValues([1,1,1,1,1,2])                 output: 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])    output: 7
// countUniqueValues([])                            output: 0
// countUniqueValues([-2,-1,-1,0,1])                output: 4


function countUniqueValues(arr){
    let i = 0;

    if(arr.length === 0) return 0;

    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); 

//                i
// [1,2,3,4,7,12,13,4,4,7,12,13]