const colorChange = document.querySelector(".change-color");
const shapeChange = document.querySelector(".change-shape");
const colorContainer = document.querySelector(".circle-container");
const shapeContainer = document.querySelector(".shape");
const currentColor = document.querySelector(".color-code");
const currentShape = document.querySelector(".cur-shape");

colorChange.addEventListener("click", () => {
    const colorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "#";

    for(let i=0;i<6;i++) {
        color += colorCode[Math.floor(Math.random() * colorCode.length)];
    }

    colorContainer.style.backgroundColor = color;   
    currentColor.innerHTML = color;
});

shapeChange.addEventListener("click", () => {
    const shapes = ["triangle", "square", "circle", "rectangle", "diamond"];
    let shape = shapes[Math.floor(Math.random() * shapes.length)];

    if(shape === "triangle") {
        shapeContainer.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
    }
    else if(shape === "square") {
        shapeContainer.style.clipPath = "inset(0 0 0 0)";
    }
    else if(shape === "circle") {
        shapeContainer.style.clipPath = "circle(50% at 50% 50%)";
    }
    else if(shape === "rectangle") {
        shapeContainer.style.clipPath = "inset(25% 0 25% 0)";
    }
    else {
        shapeContainer.style.clipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 50% 100%, 0% 50%)";
    }

    currentShape.innerHTML = shape.toUpperCase() + "!!";

    // console.log(shape);
});