let x = 10
let y = 10
function printX() {
    console.log("vars x: ", x)
}
function changeX(v) {
    x = v
}
module.exports = {
    x,
    y,
    printX,
    changeX
}