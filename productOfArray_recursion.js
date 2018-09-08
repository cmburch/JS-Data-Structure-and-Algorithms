//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
//use recursion

    //base case if array is empty stop return 1
    //take in input of array of numbers 
    //take the first element countdown by array length
    //repeat
    //return each number to previous line and multiple

function productOfArray(arr){

    if(arr.length === 0){
        return 1
    }
   return arr[0] * productOfArray(arr.slice(1))
}


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60