const sudokuGrid = document.getElementById('sudoku-grid');
const checkSolutionButton = document.getElementById('check-solution');
const resetGameButton = document.getElementById('reset-game');

const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function createGrid() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (initialBoard[row][col] !== 0) {
                cell.textContent = initialBoard[row][col];
            } else {
                const input = document.createElement('input');
                input.type = 'number';
                input.min = '1';
                input.max = '9';
                input.maxLength = '1';
                cell.appendChild(input);
            }
            sudokuGrid.appendChild(cell);
        }
    }
}

function checkSolution() {
    const cells = document.querySelectorAll('.cell input');
    const userBoard = Array.from({ length: 9 }, () => Array(9).fill(0));

    cells.forEach((input, index
