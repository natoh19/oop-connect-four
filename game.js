import { Column } from "./column.js";

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1
        this.columns = []
        for(let i = 0; i < 7; i++) {
            this.columns.push(new Column()); //  [new Column(), new Column(),....]
        }
        this.winnerNumber = 0
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1} ties with ${this.player2}!`
        }
        return `${this.player1} vs. ${this.player2}`
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer)
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }

        checkForTie()
    }

    getTokenAt(rowIndex, colIndex) {
        return this.columns[colIndex].getTokenAt(rowIndex);
    }

    isColumnFull(colIndex) {
        return this.columns[colIndex].isFull();
    }

    checkForTie() {
        for (let index = 0; index < 7; index++) {
            if (!this.isColumnFull(index)) {
                return
            }
        }
        this.winnerNumber = 3
    }
}
