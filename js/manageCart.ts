import { Item } from './item'
import { ItemInCart } from './itemInCart'

class ManageCart {
    private ItemsInCart = ItemInCart[] = [];

    addItemInCart(oneItem: Item, quantity: number) : void {}
    
    updateItemInCart(oneItem: Item, quantity: number) : void {}

    checkItemStatus() : void {}

    calculateQuantity() : number { return; }

    calculatePrice() : number { return ; }

    showCart() : string { return; }

    constructor() {
        
    }
}