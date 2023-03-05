import { argv } from 'node:process'
import { Calculator } from "./Calculator.js"
import event from "events"

const actionsEmmiter = new event()
const calc = new Calculator()

actionsEmmiter.on("add", () => {
    calc.onAdd(Number(argv[2]), Number(argv[3]))
    console.log(calc.result)
})
actionsEmmiter.on("div", () => {
    calc.onDiv(Number(argv[2]), Number(argv[3]))
    console.log(calc.result)
})
actionsEmmiter.on("multiply", () => {
    calc.onMultiply(Number(argv[2]), Number(argv[3]))
    console.log(calc.result)
})
actionsEmmiter.on("subtract", () => {
    calc.onSubtract(Number(argv[2]), Number(argv[3]))
    console.log(calc.result)
})



switch (argv[4]) {
    case "add":
        actionsEmmiter.emit("add", argv)
        break
    case "div":
        actionsEmmiter.emit("div", argv)
        break
    case "multiply":
        actionsEmmiter.emit("multiply", argv)
        break
    case "subtract":
        actionsEmmiter.emit("subtract", argv)
        break
    default:
        throw Error("Неизвестная операция")
}

