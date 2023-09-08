const container = document.getElementById("container");
const resetBtn = document.querySelector("#reset");
const gridBtn = document.querySelector("#changeGrid");

function resizeGrid() {
  let sketchSize = prompt("Enter 1 to 100 to resize sketch");
  makeRows(sketchSize, sketchSize);
}

resizeGrid();

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", `cell${c + 1}`);
    container.appendChild(cell).className = "grid-item";
  }
}

const grids = document.querySelectorAll(".grid-item");

container.childNodes.forEach((child) =>
  child.addEventListener("mouseover", function () {
    child.style.backgroundColor =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  })
);

resetBtn.addEventListener("click", () => {
  grids.forEach((element) => {
    element.style.backgroundColor = null;
  });
});
