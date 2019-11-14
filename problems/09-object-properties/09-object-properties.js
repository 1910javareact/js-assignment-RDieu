/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) { 
    this.someObj = "This is how you use constructors to define object properties!";   
 } 
   
 let Obj = new objectProperties(); 
  
   
 console.log(Obj.someObj); 