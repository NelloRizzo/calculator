export class CalculatorState {
    constructor() {
        this.display = "0.0"
        this.mustClearDisplay = true
        this.accumulator = 0
        this.nextOperation = '='
    }
}