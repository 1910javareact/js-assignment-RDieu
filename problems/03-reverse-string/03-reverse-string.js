/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseString(someStr) {
    let newString = "";
    for (let i = someStr.length - 1; i >= 0; i--) {
        newString += someStr[i];
    }
    return newString;
}
console.log(reverseString('!nuf yrev si SJ')); 