function logMessage(message: unknown): void {
  //fix type safety problem with unknown
  if (typeof message === "string") {
    console.log(message.trim());
  } else {
    console.log(message);
  }
}

logMessage("     Hello World");
console.log(5);
console.log(true);

type CurrencyOptions = "EURO" | "USD" | "AZN";

function getRate(currency: CurrencyOptions) {
  switch (currency) {
    case "EURO":
      return 2;
    case "USD":
      return 1.7;
    case "AZN":
      return 1;
    default:
      const _unreachable: never = currency; //Never forces to check all cases
      throw "Not Found";
  }
}

console.log(getRate("EURO"));

function keepProcessing(): never {
  //Function never ends
  while (true) console.log("Never ends");
}
