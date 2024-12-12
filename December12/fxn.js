function multiply(a, b, c) {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
console.log("2 times 3 is ".concat(multiply(2, 3), "."));
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("The total of 10 and 15 is ".concat(getTotal(10, 15), "."));
