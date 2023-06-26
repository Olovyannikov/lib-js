const ellipsis = (str, length) => str.length > length ? str.slice(0, length) + '…' : str;

console.log(ellipsis('simple string', 30));
console.log(ellipsis('simple string with ellipsis', 20));