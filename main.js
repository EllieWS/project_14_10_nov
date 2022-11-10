// var header=document.querySelector("h1").style.color="#0f0";

var h1 = document.createElement("h1");
h1.innerHTML = "hello world"
document.body.appendChild(h1);

var p = document.createElement("p")
p.textContent = "this paragraph is created in javascript"
document.body.appendChild(p)

var h3 = document.createElement("h3")
h3.textContent = "i am a text with some styling"
h3.style.color = "#f44";
h3.style.fontSize = "3em"
h3.style.border = "3px dashed"
document.body.appendChild(h3)

function addElementToPage() {
    var h3 = document.createElement('h3');
    h3.textContent = 'i am a text with some styling';
    h3.style.color = '#f44';
    h3.style.fontSize = '3em';
    h3.style.border = '3px dashed';
    document.body.appendChild(h3);
  }