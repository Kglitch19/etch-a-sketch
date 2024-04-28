const containerDiv = document.querySelector(".container");
const userValue = document.getElementById("user-number");
const userSubmit = document.getElementById("user-submit");
const promptText = document.getElementById("prompt");
const copyInput = document.getElementById("copy-input");
const clearButton = document.getElementById("clear-button");

userValue.addEventListener("focus", entryHint);
userValue.addEventListener("keyup", duplicateGrid);
userSubmit.addEventListener("click", makeGrid);
clearButton.addEventListener("click", clearGrid);

// Run makegrid() and draw() functions on page load to make default 10x10 grid that's drawable
makeGrid();
draw(); 

// Indicates to user it's an NxN square grid 
function duplicateGrid() {
    const userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
}

// Save space and clutter on the page with appear/disappearing user instructions for grid size
function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99.";
}

// Makes nested divs that are organized into a grid using css flexbox
// Invalid entries get warning, default grid is 10x10, else it is a user-defined resolution

function makeGrid() {
    const number = userValue.value;
    if(number<0 || number>99 || isNaN(number)) {
        promptText.textContent = "Make sure it's a number from 2 to 99!";
    } else {
        promptText.textContent = "";
        copyInput.textContent = "";
        userValue.value = "";
        containerDiv.innerHTML = "";

        if (number==0 || number>99 || number=="") {
            for (const i=0; i<10; i++) {
                const row = document.createElement("div");
                row.classList.add("row");
                containerDiv.appendChild("row");
                
                for (const k=0; k<10; k++) {
                    const column = document.createElement("div");
                    column.classList.add("column");
                    row.appendChild("column");
                }
            }
        } else {
            for (const i=0; i<number; i++) {
                const row = document.createElement("div");
                row.classList.add("row");
                containerDiv.appendChild("row");

                for (const k=0; k<number; k++) {
                    const column = document.createElement("div");
                    column.classList.add("column");
                    row.appendChild("column");
                }
            }
        }
    }
}

// Call draw() function here to allow drawing after new grid is made
draw();

// Adds event listener to all divs with class "column"
// Added in global scope to allow drawing on page load
// This refers to the element triggering the mouseover event listener

function draw() {
    const columns = document.getElementsByClassName("column");
    for (const i=0; i<columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
    }

    function changeColor() {
        const blackRadio = document.getElementById("black-pen");
        const redRadio = document.getElementById("red-pen");
        const blueRadio = document.getElementById("blue-pen");
        const rainbow = document.getElementById("rainbow");
        const eraserRadio = document.getElementById("eraser");

        if (blackRadio.checked) {
            this.style.backgroundColor = '#2e2b2b';
        } else if (redRadio.checked) {
            this.style.backgroundColor = '#da2d2d'
        } else if (blueRadio.checked) {
            this.style.backgroundColor = "#3f33dd"
        } else if (eraserRadio.checked) {
            this.style.backgroundColor = ''
        } else if (rainbow.checked) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        }
    }
}
    
//eraser function loops through all column divs and sets background to "" in DOM
function clearGrid() {
    const columns = document.getElementsByClassName("column");
    for (const i=0; i<columns.length; i++) {
        columns[i].style.backgroundColor = '';
    }
}
