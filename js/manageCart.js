"use strict";
exports.__esModule = true;
var itemInCart_1 = require("./itemInCart");
var ManageCart = /** @class */ (function () {
    function ManageCart() {
        this.ItemsInCart = itemInCart_1.ItemInCart[] = [];
    }
    ManageCart.prototype.addItemInCart = function (oneItem, quantity) { };
    ManageCart.prototype.updateItemInCart = function (oneItem, quantity) { };
    ManageCart.prototype.checkItemStatus = function () { };
    ManageCart.prototype.calculateQuantity = function () { return; };
    ManageCart.prototype.calculatePrice = function () { return; };
    ManageCart.prototype.showCart = function () { return; };
    return ManageCart;
}());
