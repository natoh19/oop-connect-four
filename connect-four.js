import { Game } from "./game.js";
let game = undefined;
let clickTargetsDiv = document.querySelector('#click-targets')
let updateUI = function() {
    let boardHolderDiv = document.getElementById("board-holder");
    let gameNameDiv = document.getElementById("game-name")
    if (game === undefined) {
        boardHolderDiv.classList.add("is-invisible");
    }
    else {
        boardHolderDiv.classList.remove("is-invisible");
        gameNameDiv.innerHTML = game.getName()
        let currentPlayer= game.currentPlayer;
        if(currentPlayer === 1){
            clickTargetsDiv.classList.add("black");
            clickTargetsDiv.classList.remove("red");
        }
        else{
            clickTargetsDiv.classList.add("red");
            clickTargetsDiv.classList.remove("black");
        }
    }

}

window.addEventListener("DOMContentLoaded", () => {
    let name1 = document.querySelector('#player-1-name')
    let name2= document.querySelector('#player-2-name')
    let newGameBtn = document.getElementById("new-game");


    document.getElementById('form-holder').addEventListener('keyup', () => {
        if(name1.value !== name2.value && (name1.value && name2.value)) {
        newGameBtn.disabled = false;
    } else {
        newGameBtn.disabled = true;
    }
    })

    newGameBtn.addEventListener('click', () => {
        game = new Game(name1.value, name2.value)
        name1.value = ""
        name2.value = ""
        newGameBtn.disabled = true;
        updateUI();
    })

    clickTargetsDiv.addEventListener('click', event => {
        let columnIndex = event.target.id
        let index = columnIndex[7]

    game.playInColumn(index);
    updateUI();
    })
})
