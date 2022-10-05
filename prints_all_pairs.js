function printAllPairs(n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

//  This is O(n^2) time because there is O(n) inside of an O(n) operation
//  Space complexity is O(1) because it is not returning any new array integers are constant