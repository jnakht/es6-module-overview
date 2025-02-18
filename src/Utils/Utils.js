const add = (a, b) => {
    return a+b;
}

const multiply = (a, b) => {
    return a*b;
}

function devideTheFirstNumBySecond(a, b) {
    return a/b;
}
export function subtract(a, b) {
    return a -b;
}
export default function hudai() {
    console.log('default.....');
}

export {add, multiply, devideTheFirstNumBySecond};