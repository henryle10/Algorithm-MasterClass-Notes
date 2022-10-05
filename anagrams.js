function perfectAnagrams(word1, word2){
    // Check if the first array is the same backwards as the second array
    if(word1.length !== word2.length){
        return false
    }

    for (let val of arr2) {
        var reversedVal = reverse(word2)
        if (reversedVal == word1) {
            return true
        }
    }
    return false
}

function reverse(str){
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

// perfectAnagrams('racecar', 'racecar');

function validAnagrams(word1, word2){
    // Check if the first array is the same backwards as the second array
    if(word1.length !== word2.length){
        return false
    }
    
    // objects allow you to remember what has been used 
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of word1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

     for (let val of word2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// validAnagrams('anagram', 'nagaram');


// Udemy instructor solution

function validAnagrams2(word1, word2){
    // Check if the first array is the same backwards as the second array
    if(word1.length !== word2.length){
        return false
    }
    
    let lookup = {}

    for (let i = 0; i < word1.length; i++) {
        let letter = word1[i];
        // if letter exists, increment, otherwise set to 1
        // the first part of this condition is seeing if the letter already exists and if it does add 1 hence the ?
        // if not it will initialize the count by setting it to 1
        // so the ? basically means is it in there and if there is then do that
        // the second part : means that else do this 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        console.log(lookup);
    }

    for (let i = 0; i < word2.length; i++) {
        let letter = word2[i];
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]){
            return false;
        } else {
            // This is subracting from the lookup because if the final object has a letter not in the first array than it will
            // go back to the if statement above and return false
            lookup[letter] -= 1;
        }
    }
    return true
}

validAnagrams2('anagram', 'nagaram');

