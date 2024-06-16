function logMessage(message) {
    //fix type safety problem with unknown
    if (typeof message === "string") {
        console.log(message.trim());
    }
    else {
        console.log(message);
    }
}
logMessage("     Hello World");
console.log(5);
console.log(true);
function getRate(currency) {
    switch (currency) {
        case "EURO":
            return 2;
        case "USD":
            return 1.7;
        case "AZN":
            return 1;
        default:
            const _unreachable = currency; //Never forces to check all cases
            throw "Not Found";
    }
}
console.log(getRate("EURO"));
function keepProcessing() {
    //Function never ends
    while (true)
        console.log("Never ends");
}
