export class ColumnWinInspector {
    constructor(column) {
        this.column = column

    }

    inspect() {
        for (let i =0; i <= 2; i++) {
            let element = this.column[i]
            if (element
                && element === this.column[i + 1]
                && element === this.column[i + 2]
                && element === this.column[i + 3]) {
                return element
            }

        }

        return 0
    }
}
