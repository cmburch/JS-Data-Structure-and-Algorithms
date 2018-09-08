//write a funtions that calculate the power of a number mimic Math.pow();


function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}