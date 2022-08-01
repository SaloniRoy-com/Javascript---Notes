 
/***********************************************************
                   Variable Declaration
**********************************************************/
//var, let, const .....no need to specify the data type.
//Rule- Variable name can start with letters , _ , $ ;


// <<---var--->> is a global scope variable.
var year =35; 
console.log(year) // this will print 35 as a number.

var Name="Saloni";
console.log(Name);// this will print Saloni as a string.
 //or
 var naam;
 naam='Saloni';
 console.log(naam);// another way// here we declare variable and assign value individually
 
 var channel; 
 console.log(year,Name,channel);
 //this will print [33 'Saloni' undefined]//undefined because the variable channel is only declared and not been assigned any value.


// <<---const--->> once defined the value will never change in the whole code       

const x=2;
console.log(x);
//x=4;
//console.log(x);//Error will be displayed if we reassign the const variable. 

//const height; //will throw error---const declaration must be initialised.

const array=[1,2,3,4,5];
//array=[1,2,3,4,5,6];//we cannot reassign the const array but we can add terms.
array.push(6);
console.log(array);// will print [1,2,3,4,5,6]


//<<---let--->>block level variable.

let boy='Rohan';
{let boy='Ram'; // the variable declared under blocks has no relation with the variable outside blocks.
boy='Shyam';
console.log(boy); // will print Shyam
}
console.log(boy);// will print Rohan

/*Most common programming case types:-
camelCase
kebab-case
snake_case
PascalCase*/





