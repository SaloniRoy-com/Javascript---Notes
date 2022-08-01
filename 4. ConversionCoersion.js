
/************************************************************************
                         Conversion and Coersion
 ***********************************************************************/

let marks = 80.8;
console.log(typeof marks); // this will print 80 as number

marks = String(marks); //number has been converted to string
console.log(typeof marks); // this will print 80 as string
marks = Number(marks); //string has been converted to number
console.log(typeof marks); // this will print 80 as number

let Array = [1, 2, 3, 4, 5];
console.log(Array.length); //prints 5

Array = String(Array);
console.log(Array.length); // prints 9 because "," is also considered as string

let age = 10;
console.log(age.toString()); // prints 10 as string;

//ParsInt fn converts string to integer
let num = '80.89';
console.log(parseInt(num)); // prints 80
console.log(parseFloat(num));// prints 80.89

//toFixed fn prints as much digits that we want to see after decimal.
num = Number(num);
console.log(num.toFixed(5), (typeof num));// prints the num upto 5 decimal place