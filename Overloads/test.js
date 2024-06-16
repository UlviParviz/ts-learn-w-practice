function test(value) {
    if (typeof value === "number") {
        console.log(value * 2);
    }
    else if (typeof value === "string") {
        console.log(value.concat(" is string"));
    }
    else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            if (value.length === 0) {
                console.log('Empty Array');
            }
            if (typeof value[i] === 'string') {
                console.log(value[i].toUpperCase());
            }
            if (typeof value[i] === 'number') {
                console.log(value[i] * 5);
            }
        }
    }
}
test(10);
test(['abc', 'cba', 'abb']);
test([15, 25]);
test('salam');
