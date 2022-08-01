//Topic: DataTypes

/*
1.Primitive(Stalk)---> string, numbers, boolean, Null, undefined, symbol
2.Reference(Heap)---> arrays, object, literals, functions, dates
*/

//typeof(varName)---this operator tells the data type of the variable. 
let Name ='Saloni';
console.log('My name is '+ Name);
console.log("Data type is "+ (typeof Name));

//null
let nulVar= null;
console.log("Data type of null is "+ (typeof nulVar));//will print "object" but it is primitive datatype(null);

//Arrays
let array =[1,2,3,true,"Roy"];
console.log("Data type of array is "+ (typeof array));//will print "object" as datatype.

//Object Literals
let StudRoll={
    Ram: 35,
    Shyam: 38,
    Mohan: 42
}

function searchRoll() { // datatype function
}

let date = new Date()
console.log(date);
console.log('Data type of date is ' + (typeof date));//will print "object" as datatype.
