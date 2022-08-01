/********************************************************************************
                   Creating, Replacing And Removing Elements
*********************************************************************************/

let newElement=document.createElement('div');//creatwd a new div element
console.log(newElement);
newElement.className='subchild';//sets class name
newElement.id='createdChild';//sets id
newElement.setAttribute('title','mytitle')//sets attributes
newElement.innerText='Sub Child 3';//adding text to the new element
/*let text=document.createTextNode('Sub Child 3');
newElement.appendChild(text);********************* Same as above ****************/

let parent=document.querySelector('#forth');
parent.appendChild(newElement);
console.log(parent);

let newElement1=document.createElement('div');
newElement1.className='subchild';
newElement1.id='created2ndChild';
newElement1.innerHTML='<b>Sub Child 3</b>';

//Replace newElement with newElement1
newElement.replaceWith(newElement1);

let parent1=document.getElementById('forth');
parent1.replaceChild(newElement,document.getElementById('subChild1'))//replaces the child of the parent // new element to be written first

//to remove child 
container.removeChild(document.getElementById('third'));

//tells the name of the class(or any) attribute
let attri=newElement.getAttribute('class');
console.log(attri);
newElement.removeAttribute('id');//we can remove attribute


/**********************************************************************************/
//Quiz

let newElem=document.createElement('a');
newElem.innerText='Go To Code With Harry';
newElem.setAttribute('href',"https://www.codewithharry.com");
console.log(newElem);
