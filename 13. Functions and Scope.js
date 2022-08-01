/****************************************************************************
                                  Functions
*****************************************************************************/                         
function invitation(name,thank='Thanks') {//default value has been assign to the thank variable
console.log(`Hey ${name},
You have been invited to the party.
${thank}`)
}         

let name1='Saloni';
let name2='Mohit';

invitation(name1);
invitation(name2,'Thank You');

//function can also be written in an object


/*****************************************************************************
                                  SCOPE
******************************************************************************/
var i=222;
console.log(i);

function block(name) {
   var i= 10; //this i has fn level scope// if var is removed i.e. i=10 then the i has global scope
    console.log(`This is ${name}, ${i}`);
}
block('Saloni');

console.log(i);

// this is similar for "let" also

//var has global scope and if declared under a fn the it has fn level scope
//let has block level scope