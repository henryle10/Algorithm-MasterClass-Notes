// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
    let freq1 = {};
    let freq2 = {};

    var numLength1 = num1.toString();
    var numLength2 = num2.toString();

    if(numLength1.length != numLength2.length){
        return false;
    }

    for (let val of numLength1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }

     for (let val of numLength2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }

     for(let key in freq1){
        if (freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
}

sameFrequency(18222,21128)

