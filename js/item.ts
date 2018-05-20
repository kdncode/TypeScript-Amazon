export class Item {
    // Property
    private _id: number;
    private _name: string;
    private _price: number;
    private _description: string;
    private _status: boolean;
    private _image: string;

    // Getter & Setter
    // ID
    public get id() : number {
        return this._id;
    }

    public set id(v : number) {
        this._id = v;
    }

    // Name
    public get name() : string {
        return this._name;
    }

    public set name(v : string) {
        this._name = v;
    }

    // Price
    public get price() : number {
        return this._price;
    }

    public set price(v : number) {
        this._price= v;
    }

    // description
    public get description() : string {
        return this._description;
    }

    public set description(v : string) {
        this._description= v;
    }

    // status
    public get status() : boolean {
        return this._status;
    }

    public set status(v : boolean) {
        this._status= v;
    }

    // Image
    public get image() : string {
        return this._image;
    }

    public set image(v : string) {
        this._image= v;
    }

    // Constructor
    constructor(id: number, name: string, price: number, description: string, status: boolean, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.status = status;
        this.image = image;
    }

}