export class Account {
    private _type: string;
    private _balance: number;

    constructor (type: string) {
        this._balance = 0;
        this._type = type;
    }

    public get type () {
        return this._type; 
    }

    public get balance () {
        return this._balance; 
    }

    public withdraw (amountToWithdraw: number) {
        if (this._type == "savings" && amountToWithdraw>this._balance) {
            throw new Error("It's not allowed to withdraw more than your current balance");
        }
        if (amountToWithdraw <= 0) {
            throw new Error("Amount to withraw should be higher than 0");
        }
        return this._balance -= amountToWithdraw;    
    }

    public deposit (amountToDeposit: number) {
        if (amountToDeposit <= 0) {
            throw new Error("Amount to deposit should be higher than 0");
        }
        return this._balance += amountToDeposit;    
    }
}