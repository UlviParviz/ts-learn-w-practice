const test = "test";
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "info";
    LogLevel["ERROR"] = "error";
    LogLevel["WARN"] = "warn"; //default value 0 (57)
})(LogLevel || (LogLevel = {}));
// //Number enum
// enum LogLevel {
//     INFO , //0 
//     ERROR, //1
//     WARN,  //2
// }
function logMessage(level, message) {
    console.log(`${level} ${message}`);
}
logMessage(LogLevel.INFO, "-info message");
logMessage(LogLevel.ERROR, "-error message");
logMessage(LogLevel.WARN, "-warn message");
var ABC;
(function (ABC) {
    ABC["A"] = "A";
    ABC["B"] = "ABC";
})(ABC || (ABC = {}));
console.log(ABC.B);
