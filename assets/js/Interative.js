var txt = ("My name is Baltazar Rodriguez. I'm 6 years old studyin IT and everything that has to do with technology, this has changed my world. Learning diferents technolohies gave me problem-solving skills and a way to communicate with others engineers on technical level, and use my skills to get a better jobs");

var x= 0;

function typeWriter(){
    document.getElementById("text").innerHTML += txt.charAt(x);
    x++
}
setInterval(typeWriter,50);

