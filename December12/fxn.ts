function multiply(a:number, b:number, c? : number): number {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}

console.log(`2 times 3 is ${multiply(2, 3)}.`);

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(`The total of 10 and 15 is ${getTotal(10, 15)}.`)