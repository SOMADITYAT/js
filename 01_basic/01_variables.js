const accountId = 13445;
let accountEmail = "Tsomaditya@google.com"
var accountPassword =  "123456"
accountCity = "Surat"
let accountState;

// accountId = 2   //not allowed 

accountEmail = "hc@gmail.com";
accountPassword = "121212";
accountCity = "Delhi";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
 Prefer not to use var 
 becuase of issue in block scope and  funcitional scope
*/
console.log(accountId);
