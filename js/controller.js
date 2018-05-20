"use strict";
exports.__esModule = true;
var item_1 = require("./item");
var Controller = /** @class */ (function () {
    function Controller() {
        this.product = item_1.Item[] = [];
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
