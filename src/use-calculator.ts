import { Calculator } from "./calculator";

let MyCalculation = new Calculator();
console.log(`TOTAL: ${MyCalculation.total}`);

let MyCalculationUpdated = MyCalculation.add(5);
console.log(`NEW TOTAL: ${MyCalculationUpdated}`);

MyCalculationUpdated = MyCalculation.divide(5);
console.log(`NEW TOTAL: ${MyCalculationUpdated}`);

try {
    MyCalculationUpdated = MyCalculation.divide(0);
}
catch(err) {
    console.log(`Error afgevangen: ${err.message}`);
}
console.log(`NEW TOTAL: ${MyCalculationUpdated}`);

