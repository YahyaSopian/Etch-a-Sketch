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
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
  });
}

createGrid(16);
