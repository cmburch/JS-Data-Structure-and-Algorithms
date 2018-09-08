//Write a function which takes in a string and returns counts of each character in the string.

//make an object to return at the end
//foreach letter/number
    //store value of a letter/number
    //check if letter/number exist in the object key
        //if it does exsist add 1 to the object key value 
    //else create a new object key and set to 1

    function charCount(str){
        let result = {};

        for(var i = 0;i < str.length; i++){
            let char = str[i];
            if(result[char]){
                result[char]++;
            }
            else{
                result[char] = 1;
            }
        }
        return result;
    }




