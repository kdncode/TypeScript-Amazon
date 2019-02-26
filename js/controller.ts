import { Item } from './item';

export class Controller {
    // private product = Item[] = [];

    constructor() {
        console.log('Test product');       
    }

    getItems() : Item[] {
        return []
    }

    getItemById() : Item {
        let oneItem = new Item(1, 'iPhone', 1299, 'abcc', true, 'img/iphone.png')
        return oneItem;
    }

    addItem() : void {}

    showItem() : string {
        return ``;
    }
}
