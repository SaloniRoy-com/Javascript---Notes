//Events
  
//on clicking the heading the function will be executed
document.getElementById('heading').addEventListener(
    'click', function (e) {
        console.log(e);
        console.log('This is heading');
        console.log(e.target);//targets the heading on which event listerner has been applied
        console.log(e.target.className);//prints all the classes of the heading
        console.log(e.target.classList);//prints all the classes in the form of list which can be iterratrd by using Array.from().forEach fn
        // location.href='//facebook.com';//directs to different links
        console.log(e.offsetX)//wrt element
        console.log(e.offsetY)
        console.log(e.clientX)//wrt window
        console.log(e.clientY)
    }
)
document.getElementById('container').addEventListener(
    'mouseover',function(){     
        let cont=document.querySelector('h3');
        cont.style.color='red';
        console.log(cont);
    }
)

document.getElementById('container').addEventListener(
    "mouseleave",function(){
        let cont=document.querySelector('h3');
        cont.style.color='black';
        console.log(cont);  
    }
)


