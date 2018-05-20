"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./item");
var Controller = /** @class */ (function () {
    // private product = Item[] = [];
    function Controller() {
        console.log('Test product');
    }
    Controller.prototype.getItems = function () {
        return [];
    };
    Controller.prototype.getItemById = function () {
        var oneItem = new item_1.Item(1, 'iPhone', 1299, 'abcc', true, 'img/iphone.png');
        return oneItem;
    };
    Controller.prototype.addItem = function () { };
    Controller.prototype.showItem = function () {
        return "";
    };
    return Controller;
}());
exports.Controller = Controller;
