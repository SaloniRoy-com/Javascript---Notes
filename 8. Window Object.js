//JS Window Object

console.log("JS Window Object");


let a=window;
console.log(a);

//window.alert("Press ok to continue");//This will throw an alert on the screen
/*or*/
//alert("Press ok to continue");//Same as above/we dont need to write "window." since window is the global object

//a=prompt("Enter your pin to proceed");//Throws a popup with blank and whatever we fill in the blank gets stored as the value of a(variable);
console.log(a);

//a=confirm('If you are you 18+ press OK');//This assigns a boolean value to the variable, true for OK and false for cancel
console.log(a);

let b=window.document;
b=window.innerHeight;//inner height of the window
b-innerHeight;//same as above
c=innerWidth;
console.log(b);
console.log(c);

b=scrollX;// jitna hm X me scroll karenge utni value b ko assign ho jayegi
console.log(b);
b=scrollY;
console.log(b);

b=location;
console.log(b);
b=location.toString();
console.log(b);//location in the form of string
 
// location.href='//facebook.com'//will take u to facebook

let d=window.history;
console.log(d);//prints the history of the window
d=history.length;
console.log(d);//prints the length of history

history.go(-1);//goes one history back 









