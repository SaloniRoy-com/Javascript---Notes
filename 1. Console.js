// Topic: ConsoleAndVariableDecleration 

/***************************************************
                    console
****************************************************/

console.log({Saloni:'Kumari', Marks:33});
//output {Saloni: 'Kumari', Marks: 33} where Saloni and Marks is object and Kumari is string and 33 is number. 
console.table({Saloni: 'Kumari', Marks: 33})
// Will print the data in tabular form

console.warn('This is a warning');
// This will through warning in the code

console.clear();
//This will clear the console.
  
console.time('The time taken by code')
            //Code//
console.timeEnd('The time taken by code')
//The time of execution if the code will be printed.

let age=160;
console.assert(/*Condition*/age<150, 'The error message.');
// this will through an error message when the condition will be false.

console.error('This is an error');
//manually we can add error using this.

