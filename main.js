const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", `cell${c + 1}`);
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

let squares = document.getElementsByClassName("grid-item");
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mouseover", function () {
    squares[i].style.backgroundColor =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  });
}
