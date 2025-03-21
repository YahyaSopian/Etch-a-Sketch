function createGrid(size) {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const divSquare = document.createElement("div");
    // adding class name for div
    divSquare.classList.add("grid-square");
    console.log(divSquare);
    container.appendChild(divSquare);
  }

  const squareSize = 960 / size;
  const squares = document.querySelectorAll(".grid-square");

  squares.forEach((square) => {
    let opacity = 1;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", () => {
      if (opacity > 0) {
        opacity -= 0.1;
        square.style.backgroundColor = getRandomColor();
        square.style.opacity = opacity;
      }
    });
  });
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

const resetGrid = () => {
  let newSize = prompt("Enter the number of squares per side for the new grid (max 100):");
  newSize = parseInt(newSize);
  // input validation
  if (newSize > 100 || newSize < 1 || isNaN(newSize)) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }
  createGrid(newSize);
};

createGrid(16);
