function counter (array){
    const resultArr = []
    array.arr.forEach((el) => {
        if (el % 3 === 0) {
            resultArr.push(el)
        }
    })
    return resultArr
}
export default counter