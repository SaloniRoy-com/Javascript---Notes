
/*****************************************************************************************
                               Arrays And Objects 
******************************************************************************************/

let MixArray=['orange', 34,7,9, [6,78]]
console.log(Array.isArray(MixArray))//prints true if thr entered variable is an array else false
MixArray[0]='blue'; //new value will be assigned to the 0th position of the array
console.log(MixArray);//['blue', 34, 7, 9, Array(2)]

// push fn adds element on the end position of the array
MixArray.push(23);
console.log(MixArray);//['blue', 34, 7, 9, Array(2), 23]

//shift fn adds element on the first position of the array
MixArray.unshift(53);
console.log(MixArray);//[53, 'blue', 34, 7, 9, Array(2), 23]

//pop fn removes element from the end of the array
MixArray.pop(33);
console.log(MixArray);//[53, 'blue', 34, 7, 9, Array(2)]

//shift fn removes element from the first position of the array
MixArray.shift(33);
console.log(MixArray);//['blue', 34, 7, 9, Array(2)]
 
MixArray.splice(1,3);// this will remove 3 elements from the index no. 1
console.log(MixArray);//['blue', Array(2)]

MixArray.reverse();// this reverses the elements of array 


/****************************************************************************
                                Objects
*****************************************************************************/

// in object we can store strings, boolean, arrys, numbers etc.
let myObj={
    name:'Saloni',
    sec:1,
    UG: true,
}
//ways of accessing them
console.log(myObj.name);
console.log(myObj['name']);

