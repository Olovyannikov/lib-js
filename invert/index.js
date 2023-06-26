const invert = (obj) => {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }
    return result;
}

const obj = {
    a: 1,
    v: 2,
    c: 1
}

console.log(invert(obj));