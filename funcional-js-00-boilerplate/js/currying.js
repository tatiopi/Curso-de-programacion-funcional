const buildSumClousure = a => b => a + b;
const tag = t => content => `<${t}>${content}</tr>`;

function sumThreeNumber(a, b, c) {
    return a + b + c;
}

console.log(sumThreeNumber(1, 2, 3));

function sumThreeNumber(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sumThreeNumber(1, 2, 3));