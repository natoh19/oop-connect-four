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

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                let element = document.querySelector(`#square-${row}-${col}`)
                let status = game.getTokenAt(row, col)
                element.innerHTML=""
                if (status) {
                    let div = document.createElement('div')
                    div.classList.add('token')
                    if (status === 1) {
                        div.classList.add('black')
                    } else {
                        div.classList.add('red')
                    }
                    element.appendChild(div)
                }
            }
        }
        for (let index = 0; index < 7; index++) {
           let columnDiv = document.getElementById(`column-${index}`)
           if (game.isColumnFull(index)) {
               columnDiv.classList.add('full')
           } else {
               columnDiv.classList.remove('full')
           }
        }
    }

}

window.addEventListener("DOMContentLoaded", () => {
    let name1 = document.querySelector('#player-1-name');
    let name2= document.querySelector('#player-2-name');
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
        let targetId = event.target.id;
        if(!targetId.startsWith("column-")){
            return
        }
        let colIndex = Number.parseInt(targetId[targetId.length - 1]);

        game.playInColumn(colIndex);
        updateUI();
    })
})
