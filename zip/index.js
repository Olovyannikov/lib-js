const zip = (...args) => args.reduce((acc, obj) =>
    Object.keys(obj).reduce((innerAcc, key) => ({
        ...innerAcc,
        ...(!acc[key] && { [key]: obj[key] })
    }), acc), {});

const objects = [
    {foo: 5, bar: 6},
    {foo: 13, baz: -1}
]

console.log(zip(...objects));