const text = "Java Full Stack Developer";
let index = 0;

function typeEffect(){
    document.getElementById("typing-text").innerHTML =
    text.substring(0,index);

    index++;

    if(index <= text.length){
        setTimeout(typeEffect,100);
    }
}

typeEffect();
