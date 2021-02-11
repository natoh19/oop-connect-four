import { Game } from "./game.js";
let game = undefined;
window.addEventListener("DOMContentLoaded", () => {
    let name1 = document.querySelector('#player-1-name')
    let name2= document.querySelector('#player-2-name')
    let newGameBtn = document.getElementById("new-game");


    document.getElementById('form-holder').addEventListener('keyup', () => {
        if(name1.value !== name2.value && (name1.value && name2.value)) {
        newGameBtn.disabled = false;
    } else {
        newGameBtn.disabled=true
    }
    })

    newGameBtn.addEventListener('click', () => {
        game = new Game(name1.value, name2.value)
        name1.value = ""
        name2.value = ""

    })

})
