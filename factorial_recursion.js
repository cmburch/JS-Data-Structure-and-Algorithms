//write a factorial using recursion

   //base case: num equal zero return 1
   //take in an input 
   //subtract 1 from input until 1 is reach
   //repeat
   //return to previous numbers and multiple

   function factorial(num){
    if(num === 0){
        return 1;
    }
    
    return num *factorial(num-1)
 }
 



//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040