alert("Please wait until the writing is done");

var txt = ("Hello guys! I'm Balta Rdz. I am 4 years old code, Coding has changed my world. Learning to code gave me problem-solving skills and a way to communicate with others programmers on technical level. I can also develop websites, console programs and use my coding skills to get a better jobs.");

var x= 0;

function typeWriter(){
    document.getElementById("text").innerHTML += txt.charAt(x);
    x++
}
setInterval(typeWriter,100);

