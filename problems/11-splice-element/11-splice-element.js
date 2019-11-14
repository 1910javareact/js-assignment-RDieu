/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(arr, size) {
    
    let mArr = [];
   
    function someArr (arr, size, mArr){
      if (arr.length > 0 ){
        mArr.push(arr.splice(0, size));
        someArr(arr, size, mArr);
      }
  
    }
    someArr(arr, size, mArr);
    return mArr;
  }
  
 console.log( spliceElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,18, 13, 14], 4));
