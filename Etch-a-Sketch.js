// generate 16x16 grid of squares
const etchASketchContainer = document.querySelector('.etch-a-sketch');

// # of squares on each side
let defaultNumberOfSquares = 12;
generateGrid(defaultNumberOfSquares);

function generateGrid(numberOfSquares){
    for(let i = 0; i<numberOfSquares; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j<numberOfSquares; j++){
            let square = document.createElement('div');
            square.classList.add('whiteSquare');
            row.appendChild(square);
        }
        etchASketchContainer.appendChild(row);
    }
}


const squares = document.querySelectorAll('.whiteSquare');

squares.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.classList.add('colouredSquare');
        square.classList.remove('whiteSquare');     
    });
});

const dimensionButton = document.querySelector('#dimensionSelect');


dimensionButton.addEventListener('click', function(){
    let enteredDimension = prompt("Enter an integer length for the Etch-a-Sketch");
    etchASketchContainer.innerHTML = '';
    generateGrid(enteredDimension);
    const squares = document.querySelectorAll('.whiteSquare');
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.classList.add('colouredSquare');
            square.classList.remove('whiteSquare');     
        });
    });
});