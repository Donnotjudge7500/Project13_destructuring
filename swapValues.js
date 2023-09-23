let a = 10;
let b = 20;

function swapValues(x, y) {
    let arrayOfValues = [x, y];
    arrayOfValues = [y, x];
    return arrayOfValues
}
console.log(swapValues(a, b));