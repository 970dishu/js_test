const accountId = 213

let accountEmail = "employee.1"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState
console.table([accountEmail,accountPassword,accountCity]);

// accountId = 312; this cannot be done because the compiler doesn't allow const to have values changed

accountEmail = "employee.2"
accountPassword = "654321"
accountCity = "Rajkot"

console.log(accountId);

/*
Prefer not to use var 
Because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);

