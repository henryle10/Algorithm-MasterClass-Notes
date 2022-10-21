// productOfArray([1,2,3,10]) // 60
// productOfArray([1,2,3]) // 6

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}