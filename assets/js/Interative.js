var txt = ("My name is Baltazar Rodriguez , I’ve been studying IT for 6 years and everything that has to do with technology. Learning different technologies gave me problem solving skills and ways to communicate with other engineers on a technical level . This has not only changed my world but made me experienced and use my skills to get better jobs.");
var x= 0;

function typeWriter(){
    document.getElementById("text").innerHTML += txt.charAt(x);
    x++
}
setInterval(typeWriter,35);

