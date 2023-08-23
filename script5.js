// Challenge 5 - Done with step 1

// DOM Element Creation
const containerDiv = document.createElement("div");
containerDiv.className = "container";

const paragraph = document.createElement("p");
paragraph.textContent = "Hello, World!";
containerDiv.appendChild(paragraph);

// Add the containerDiv to the document body
document.body.appendChild(containerDiv);

// DOM Tree Navigation
const containerElement = document.querySelector(".container");
const childElements = containerElement.children;

console.log("Child Elements of .container:");
for (const child of childElements) {
    console.log(child);
}

// Element Styling
containerElement.style.backgroundColor = "blue";
paragraph.style.color = "white";

// Commit: "Challenge 5 - Done with step 1".
