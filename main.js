container = document.querySelector(".container");
for (let i=1; i<=16; i++) {
    for(let j=1; j<=15; j++) {
        let div = document.createElement("div");
        div.classList.add('gridSquare');
        container.append(div);
        '\n';
    }

    let div = document.createElement("div");
    div.classList.add('gridSquare');
    container.append(div);
}

console.log(container.childNodes);