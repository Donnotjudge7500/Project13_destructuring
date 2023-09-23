// let the input array is.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function accessRandom(inputArray) {
    let finalArray = [];
    inputArray.forEach((e) => {
        if (e === array[0] || e === array[1] || e === array[(array.length - 1)]) {
            finalArray.push(e);
        }
    });
    return finalArray
}
console.log(accessRandom(array));