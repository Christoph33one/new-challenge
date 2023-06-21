const boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes);

const spaces = [null, null, null, null, null, null, null, null, null];
const PLAYER_ONE = "O"; 
const PLAYER_TWO = "X";
let currentPlayer = PLAYER_ONE

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if( index < 3 ) {
            styleString += `border-bottom: 3px solid var(--purple);`; 
        }
        if (index % 3 == 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if (index % 3 == 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if( index > 5 ) {
            styleString += `border-top: 3px solid var(--purple);`; 
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    });
};

const boxClicked = (e) => {
    console.log('box clicked');
    const id = e.target.id;
    console.log(id);
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        currentPlayer = currentPlayer == PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
    }
};

drawBoard();

