/***********************************************************************************
                         DOM and Creating Website layout
***********************************************************************************/
let t=document;
t=document.all;
console.log(t)//prints all the tags of the document
t=document.body;//prints the body of the document
t=document.forms;//prints all the forms created in the document
t=document.forms[0];//this prints the first form made in the doc

t=document.all;
//we cannnot print this as arrays using forEach fn
//we can do this as follows
Array.from(t).forEach(function(element){
    console.log(element)
}) 

t=document.links;//seperates all the links of the doc
t=document.scripts[0];
console.log(t);

