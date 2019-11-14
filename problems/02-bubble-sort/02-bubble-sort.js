/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray){
    let len = numArray.length;
    for (let i = len-1; i>=0; i--){
      for(let j = 1; j<=i; j++){
        if(numArray[j-1]>numArray[j]){
            let temp = numArray[j-1];
            numArray[j-1] = numArray[j];
            numArray[j] = temp;
         }
      }
    }
    return numArray;
 }
 
 console.log(bubbleSort([7,5,8,2,4,3,9]));