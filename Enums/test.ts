const test:string = "test"


enum LogLevel {
    INFO = "info", //default value 0 (if value 55)
    ERROR= "error", //default value 0 (56)
    WARN= "warn" //default value 0 (57)
}


// //Number enum
// enum LogLevel {
//     INFO , //0 
//     ERROR, //1
//     WARN,  //2
// }



function logMessage(level:string, message:string){
    console.log(`${level} ${message}`);
}

logMessage(LogLevel.INFO, "-info message");
logMessage(LogLevel.ERROR, "-error message");
logMessage(LogLevel.WARN, "-warn message");


enum ABC {
    A= "A",
    B= A+ "BC"
}

console.log(ABC.B);


