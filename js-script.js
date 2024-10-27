const containerDiv = document.querySelector(".container");
const button = document.querySelector("button");
let lastColoredBlockIndex = -1; // Variable to track the last colored block index

function hoverChange(e) {
  console.log("hover");
  const block = e.target;
  block.classList.add("coloredBlock");
}

function touchChange(e) {
  e.preventDefault(); // Prevent scrolling while dragging
  const touch = e.touches[0];
  const element = document.elementFromPoint(touch.clientX, touch.clientY);

  if (element && element.classList.contains("block")) {
    element.classList.add("coloredBlock");
    // Store the index of the colored block
    lastColoredBlockIndex = Array.from(
      containerDiv.getElementsByClassName("block")
    ).indexOf(element);
  }
}

function touchEnd(e) {
  e.preventDefault(); // Prevent default behavior
  if (lastColoredBlockIndex !== -1) {
    console.log(`Last colored block index: ${lastColoredBlockIndex}`);
    if (lastColoredBlockIndex > 1249 && lastColoredBlockIndex < 1900) {
      alert("correct");
    } else {
      alert("incorrect");
    }
  } else {
    console.log("No block was colored.");
  }
}

function createGrid(gridSize = 50) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
      const block = document.createElement("div");
      block.classList.add("block");

      // Add event listeners for hover and touch events
      block.addEventListener("mouseover", hoverChange);
      block.addEventListener("touchmove", touchChange);
      block.addEventListener("touchend", touchEnd); // Add touchend listener

      row.appendChild(block);
    }
    containerDiv.appendChild(row);
  }
}

function newGrid() {
  gridSize = prompt("Enter the size of your grid");
  if (gridSize > 100 || gridSize < 1)
    alert("grid size invalid please keep the grid size between 1 and 100");
  else {
    containerDiv.textContent = "";
    createGrid(gridSize);
  }
}

button.addEventListener("click", newGrid);

createGrid();
