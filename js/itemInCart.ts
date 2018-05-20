import { Item } from './item';

export class ItemInCart {
    private item : Item;
    private quantity : number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }

    calculatePrice() : number{
        return ;
    }

    showItemInCart() : string {
        return;
    }
}