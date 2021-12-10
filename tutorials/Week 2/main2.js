const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "images/logo.png");
newImage.setAttribute("alt", "Logo of a website");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
document.body.appendChild(newDiv)

const newSect = document.createElement("section");

const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b"
newSect.appendChild(newH2)

newParagraph.innerText = "Welcome to JavaScript Language"
newSect.appendChild(newParagraph)

document.body.appendChild(newSect)