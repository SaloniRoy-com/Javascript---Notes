//the concat fn adds variables or variables and strings
let house = "This is green house ";
let place="It is located near Main ";

let descrp = house.concat(place, "Road"); 
console.log(descrp);// output--> This is green house It is located near main road


console.log(descrp.toLowerCase());// this fn convets upper case to lower case
console.log(descrp.toUpperCase());// this fn convets lower case to Upper case

//On writing the index no. in the square bracket, the corresponding character will be printed
console.log(descrp[0]);
console.log(descrp.charAt(0));//works same as above

//On writing the characters of the string , its index value will be printed
//If the entered chaaracters are present in the string more than one time then the index value of the first character will be printed 
console.log(descrp.indexOf("is"));//If the characters are not found in the string then -1 will be printed 

console.log(descrp.endsWith("Main Road"));//prints true when the string ends with the entered characters else false
console.log(descrp.includes("Main "));//prints true when the string contains the entered characters else false

console.log(descrp.substring(0,6));//This prints 6 characters from the index number 0
console.log(descrp.slice(0,6))//works same as above

console.log(descrp.slice(-5));//Prints last 5 characters of the string

console.log(descrp.split("is"));//The string gets splited about the chs "is" 

console.log(descrp.replace("Road", "Building"));//replaces Road to Building, but it only replaces the first occurance
