export class Article{

    private _name : String
    private _price : number
    private _description : String


    constructor(name: String,  description: String,price: number) {
        this._name = name;
        this._price = price;
        this._description = description;
    }


    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }
}