export class Calculator {

    private _total: number;

    constructor() {
        this._total = 0;
    }

    get total() {
        return this._total;
    }

    public add (numberToAdd: number) {
        return this._total += numberToAdd;
    }

    public divide (numberToDivideBy: number) {
        if (numberToDivideBy == 0) {
            throw new Error("Dat mag dus niet! Geen 0 om mee te delen!");
        }
        return this._total /= numberToDivideBy;
    }
}