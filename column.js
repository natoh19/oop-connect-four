export class Column {
    constructor() {
        this.column = [null, null, null, null, null, null]
    }

    add(playerNumber) {
        for (let index = 0; index < this.column.length; index++) {
            const element = this.column[index];
            if (element) {
                this.column[index - 1] = playerNumber
                return this.column
            }

            if (this.column.length - 1 === index) {
                this.column[index] = playerNumber
                return this.column
            }
        }
    }

    getTokenAt(rowNum) {
        // return this.column[rowNum];
        if(this.column[rowNum] === null) {
            return null
        }
        else if(this.column[rowNum] === 1) {
            return 1
        }
        else {
            return 2
        }

    }
}
