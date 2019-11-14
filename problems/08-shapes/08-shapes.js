/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

function square(line){
  let height = 5, edge = '%', shape = ' ';
  
  for (let i = 1; i <= height; i++) {
      if (i === 1 || i === height) {
          line = Array(height + 1).join(edge);
      } else {
          line = edge + Array(height - 1).join(shape) + edge;
      }
      console.log(line);
  }
  }
  square(5);
  
  
  function pyramid(n) { 
  for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= (2 * n - 1); j++) { 
       (j >= n + 1 - i && j <= n - 1 + i) ? s += "$" : s += " "; 
     }
    console.log(s);
   }
  }
  pyramid(5);
  
  
  
  function diamond(v){
  let y, w, shape = '';
  
  for(y = 0; y < v * 2 - 1; y++) {
    w = y < v ? y : v * 2 - y - 2;
    shape += Array(v - w).join(' ') + Array(w + 1).join('* ') + '*\n';
  }
  console.log(shape)
  }
  diamond(5); 
