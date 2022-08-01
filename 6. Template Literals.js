
/********************************************************************************
                              Template Literals
*********************************************************************************/

/*let car;
 car="<h1>black is</h1> 
 <p>red is</p>" */        // enter cannot be placed

 let Car;
 Car=`<h1>black is</h1>
 <p>red is</p>`;
console.log(Car); //Prints the string same as it has been declared

let color1='Red';
let color2='Orange';
let color3=`Yellow ${color1}`; // on writing "$" any variable can be added
console.log(color3);
// document.body.innerHTML=color3;


let html=`Hello Everyone
<h2>This is heading</h2>         
<h3>The color is ${color2}</p>
<p>This is para</p>`
console.log(html);        //we can write as many html under backtick

// document.body.innerHTML=html;