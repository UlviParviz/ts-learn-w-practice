function getLowerCaseValue(text) {
    return text.toLocaleLowerCase();
}
function getUpperCaseValue(text) {
    return text.toLocaleUpperCase();
}
function getCapitalizeCaseValue(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1));
}
function getUncapitalizeCaseValue(text) {
    return (text.charAt(0).toLowerCase() + text.slice(1));
}
console.log(getLowerCaseValue("SAALALALALALAL"));
console.log("-----------------------------------------------------------------");
console.log(getUpperCaseValue("salam"));
console.log("-----------------------------------------------------------------");
console.log(getCapitalizeCaseValue("qwerty"));
console.log("-----------------------------------------------------------------");
console.log(getUncapitalizeCaseValue("Abcbcabca"));
