function charCount(str) {
    var result = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){
                result[char]++;
            } else {
                result[char] = 1;
            };
        }
    }
    return result;
}




// Refactored Version

function charCount2(str) {
    var result = {};
    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

// Regular expressions are slower hence the function below 55% faster
function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
        }
    return true;
}

