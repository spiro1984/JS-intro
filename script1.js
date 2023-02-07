const header = document.createElement("h1");
header.innerText = "Naslov";
document.body.prepend(header);

var b = document.querySelector("body");
var info = document.createElement("div")

b.appendChild(info); 

var u = document.querySelector("ul");



for (let i = 0; i < 3; i++) {
    
    var list = document.createElement("li");
    u.appendChild(list);
};




