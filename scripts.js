// create the button
var button = document.createElement("button");
button.innerHTML = "Do something";

// append the button somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// event handler
button.addEventListener("click", function() {
    alert("Did something");
})