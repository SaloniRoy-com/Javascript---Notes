//Exercise 1
let vari = 'codewithharry';
let a = document.links;
console.log(a)
let allLinks = Array.from(a).forEach(function (element){
    let reqLinks = element.href;
    // console.log(reqLinks)
if (reqLinks.includes(vari)){
    console.log(reqLinks)
}
})


