//take in array of numbers and only return the odds
//use the recursion helper method to solve 


//take in an array of numbers
//check if the first index is not even
    //if odd number push into other array
//remove element from the array
//repeat 
//base case: array is empty
//return the array of odd numbers

function collectOddValues(arr){

    let oddArr = [];
     function helper(arr) {
         if(arr.length === 0){
             return
         }
         if(arr[0] % 2 !== 0){
            oddArr.push(arr[0])
         }
         helper(arr.slice(1));
     }
     helper(arr);

     return oddArr;
}
 let arr2 = [9,3,2,5,2,0,7,19];
collectOddValues(arr2)