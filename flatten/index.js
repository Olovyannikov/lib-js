const flatten = (arr) => arr.reduce((flat, toFlatten) =>
        flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
    , []);

console.log(flatten([[1, 2, 3], [4, 5]]));
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]]))