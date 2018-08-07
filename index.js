/* Enter the code to remove the main node element under this comment */
document.getElementById("main").remove();

/* Create your new element here and assign it to newHeader */
var newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerText = "Brendan is the champion";

