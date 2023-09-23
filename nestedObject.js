const person = {
    name: "Shiv Bhushan Singh",
    age: 21,
    address: {
        street: "45, lakshmi Chauraha, Kachehri Road",
        city: "Allahabad",
        state: "Uttar Pradesh",
    },
};

function extract(object) {
    const {
        name,
        address: { street },
    } = object;
    return { name, street };
}

console.log(extract(person));