//HTML Element Selectors
let element = document.getElementById("first");
console.log(element);//prints the div whose id is first
let elems = document.getElementsByClassName('child');//prints all the elements whose class is child
console.log(elems);


let elemClass = element.className;
console.log(elemClass);//prints the class name of the div element

let child_of_elem = element.childNodes;//prints the childs of the element(including texts)
console.log(child_of_elem);

let parent_of_elem = element.parentNode;//prints the parent container of the element
console.log(parent_of_elem);

element.style.color = 'grey';//we can change the css of the element----->

element.innerText = 'This is Saloni';//the text of the elment will be changed
element.innerHTML = '<b>This is Saloni</b>';//here HTML tags can also be used

console.log(element.innerHTML);//--->  <b>This is Saloni</b>

//Single element selector --> querySelector
let sel = document.querySelector('#second')//selects the elment whose id is second
sel = document.querySelector('.child')//selects only the first element of the class child 
sel = document.querySelector('div')//selects only the first div of the document
sel.style.color = 'red';//all elements inside div gets red coloured
console.log(sel)

let elem = document.getElementsByTagName('div');//selects al elements with the tagname "div"
console.log(elem);