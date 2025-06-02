import { Account } from "./account";

// let yourAccount = new Account("play");
// console.log(`ACCOUNT TYPE: ${yourAccount.type}`);
// console.log(`ACCOUNT BALANCE: ${yourAccount.balance}`);

// let yourAccountUpdated = yourAccount.deposit(500);
// console.log(`New balance: ${yourAccountUpdated}`)

let myAccount = new Account("savings");
console.log(`ACCOUNT TYPE: ${myAccount.type}`);
console.log(`ACCOUNT BALANCE: ${myAccount.balance}`);

let myAccountUpdated = myAccount.deposit(500);
console.log(`New balance: ${myAccountUpdated}`)

try {
    myAccountUpdated = myAccount.withdraw(550);
}
catch(err) {
    console.log(`Error afgevangen: ${err.message}`);
}
console.log(`New balance: ${myAccountUpdated}`)

try {
    myAccountUpdated = myAccount.withdraw(50);
}
catch(err) {
    console.log(`Error afgevangen: ${err.message}`);
}
console.log(`New balance: ${myAccountUpdated}`)

try {
    myAccountUpdated = myAccount.withdraw(-10);
}
catch(err) {
    console.log(`Error afgevangen: ${err.message}`);
}
console.log(`New balance: ${myAccountUpdated}`)

try {
    myAccountUpdated = myAccount.deposit(0);
}
catch(err) {
    console.log(`Error afgevangen: ${err.message}`);
}
console.log(`New balance: ${myAccountUpdated}`)

try {
    myAccountUpdated = myAccount.deposit(-10);
}
catch(err) {
    console.log(`Error afgevangen: ${err.message}`);
}
console.log(`New balance: ${myAccountUpdated}`)

try {
    myAccountUpdated = myAccount.withdraw(0);
}
catch(err) {
    console.log(`Error afgevangen: ${err.message}`);
}
console.log(`New balance: ${myAccountUpdated}`)
