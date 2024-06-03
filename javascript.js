function createGrid() {
    const grid = document.createElement("div");
    grid.classList.add("grids");
    grid.style.width = "30px";
    grid.style.height = "30px";
    grid.style.textAlign = "center";
    grid.style.borderStyle = "solid";
    grid.style.margin = "1px";

    grid.addEventListener("mouseover", (event) => {grid.style.backgroundColor = "black";});
    return grid;
}

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "row";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const container = document.createElement("div");
container.style.width = "1280px";
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.flexWrap = "wrap";
container.style.flexShrink = "0";
container.style.padding = "30px";

for (i = 0; i < 32; ++i)
    for (j = 0; j < 32; ++j)
        container.appendChild(createGrid());

const button = document.createElement("button");
button.textContent = "clear";
button.style.height = "30px";
button.addEventListener("click", (event) => {
    const grids = document.querySelectorAll(".grids");

    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
});

body.appendChild(container);
body.appendChild(button);
