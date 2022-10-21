function power(num1, num2){
    if(num2 === 0) return 1;
    return num1 ** num2;
}

power(2,4);

// Recursion
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}