// search an array using insertion sort 

// [2,1,9,76,4]
// compare elements in an array

function insertionSort(arr){
    for(var i = 1;i < arr.length;i++){
        //track the currentValue
        var currentVal = arr[i];
        //track the previous before the currentValue
        //compare the previous elemnt before the currentValue
        for(var j = i - 1;j >= 0 && arr[j] > currentVal; j--){
            //move
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

