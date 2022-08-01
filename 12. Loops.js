/***************************************************************
                              loops
****************************************************************/                        
//for loop
for (let i = 0; i <= 100; i++) {
    console.log(i);
     
 }
 
 //while loop
 let j=0;
 while (j<=100) {
     console.log(j);
     j++;
 }
 
 //do while
 let k=0;
 do {
     console.log(k);
     k++;
 } while (k<=100);
 
 // fn that prints every elements of an array
 let array=[11,21,31,41,51];
 array.forEach(function (element,index) {
     console.log(element,index); //prints elements as well as its index no.
 })
 
 let myObj={
     name:'Saloni',
     sec:1,
     UG: true,
 }
 
 for (let key in myObj) {//||||||||||||||||||||||||||||||||||||||||||||||||//
     console.log(`The ${key} of object is ${myObj[key]}`) ;
 }
 