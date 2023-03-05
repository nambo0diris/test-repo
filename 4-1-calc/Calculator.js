import add from "./add.js"
import multiply from "./multiply.js"
import div from "./div.js"
import subtract from "./subtract.js"

export class Calculator {
    result = 0
    onAdd(a, b) {

        this.result = add(a, b)
    }
    onMultiply(a, b) {
        this.result = multiply(a, b)
    }
    onDiv(a, b) {

        this.result = div(a, b)
    }
    onSubtract(a, b) {
        this.result = subtract(a, b)
    }
}
