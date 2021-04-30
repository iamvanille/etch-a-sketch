const container = document.querySelector('#etch-a-sketch');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
    let opacity = 0;
    cell.setAttribute('style', `opacity: ${opacity}`);

    cell.addEventListener('mouseover', function(event) {
      opacity +=0.1;
      cell.setAttribute('style', `opacity: ${opacity}`);
    });
    cell.addEventListener('mouseleave', function(event) {
    });
  }; 
};

let rows = 10;
let cols = 20;

makeRows(rows, cols);

const clearButton = document.querySelector('#clear-btn')
clearButton.addEventListener('click', () => {
  container.innerHTML = '';
  makeRows(rows, cols);
});

const newButton = document.querySelector('#new-btn')
newButton.addEventListener('click', () => {
  container.innerHTML = '';

  rows = prompt("How many cells high should the canvas be?");
    if (rows > 50) {
      rows = prompt("Sorry, the limit is 50. How many cells high should the canvas be?");}
  cols = Math.round(rows * 2);
  makeRows(rows, cols);
  
});

const backButton = document.querySelector('#original-btn')
backButton.addEventListener('click', () => {
  container.innerHTML = '';
  makeRows(10, 20);
  
});