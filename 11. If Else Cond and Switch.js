//If else condition & switch
const age = 33;
if (age != 19) {
    console.log('Age is not 19')
}
else if (age === 33) {  /*  "===" this compares valus as well as the datatype*/
    console.log('Age is 33')
}
else {
    console.log('nothing')
}

//terniary operator
console.log(age == 23 ? 'Age is 23' : 'Age is not 23')


switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 33:
        console.log('You are 33');
        break;
    case 28:
        console.log('You are 28');
        break;
    default:
        console.log('You are unknown age');
        break;
}
