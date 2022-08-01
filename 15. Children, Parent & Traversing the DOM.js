/********************************************************************************
                        Children, Parent & Traversing the DOM
*********************************************************************************/

let cont = document.getElementById('container');
console.log(cont.childNodes)//prints all the div, comments, text inside the container(childs and texts)
console.log(cont.children);//prints only elements

let nodeNaam = cont.childNodes[1].nodeName;
console.log(nodeNaam);//prints the node names of the childNodes

/*Node Types
*Element-----> 1
*Attributes--> 2
*Text Node---> 3
*Comment-----> 8
*document----> 9
*docType----> 10
*/

let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);

let container=document.querySelector('#container');
console.log(container.children[4].children);//grabs the children of the children of the container

console.log(container.firstChild);//first member of childNodes of the container
console.log(container.firstElementChild);//first member of children of the container
console.log(container.lastChild);//last member of childNodes of the container
console.log(container.lastElementChild);//last member of children of the container

console.log(container.childElementCount);//number of child element of the container

console.log(container.firstElementChild.nextSibling);//next member of the childnode
console.log(container.firstElementChild.nextElementSibling);//next element member of the childnode


