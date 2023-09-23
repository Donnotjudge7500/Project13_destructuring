function maxAndMin(inputArray) {
    let object = {};
    object["max"] = Math.max(...inputArray);
    object["min"] = Math.min(...inputArray);
    return object;
}

// Defining an array.
const array = [1, 3, 4, 6, 7, 8, 9, 10, 21, 2];

console.log(maxAndMin(array));