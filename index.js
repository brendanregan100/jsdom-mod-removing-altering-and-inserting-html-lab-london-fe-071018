/* Enter the code to remove the main node element under this comment */
document.getElementById("main").remove();

/* Create your new element here and assign it to newHeader */
var element = document.createElement("h1");
document.body.appendChild(element);
element.id = "victory";
element.innerText = "Brendan is the champion";

