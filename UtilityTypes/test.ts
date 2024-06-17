function getLowerCaseValue(text: string): Lowercase<string> {
  return text.toLocaleLowerCase() as Lowercase<string>;
}

function getUpperCaseValue(text: string): Uppercase<string> {
  return text.toLocaleUpperCase() as Uppercase<string>;
}

function getCapitalizeCaseValue(text: string): Capitalize<string> {
  return (text.charAt(0).toUpperCase() + text.slice(1)) as Capitalize<string>;
}

function getUncapitalizeCaseValue(text: string): Uncapitalize<string> {
  return (text.charAt(0).toLowerCase() + text.slice(1)) as Uncapitalize<string>;
}

console.log(getLowerCaseValue("SAALALALALALAL"));
console.log("-----------------------------------------------------------------");
console.log(getUpperCaseValue("salam"));
console.log("-----------------------------------------------------------------");
console.log(getCapitalizeCaseValue("qwerty"));
console.log("-----------------------------------------------------------------");
console.log(getUncapitalizeCaseValue("Abcbcabca"));
