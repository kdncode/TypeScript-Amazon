"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    // Constructor
    function Item(id, name, price, description, status, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.status = status;
        this.image = image;
    }
    Object.defineProperty(Item.prototype, "id", {
        // Getter & Setter
        // ID
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        // Name
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        // Price
        get: function () {
            return this._price;
        },
        set: function (v) {
            this._price = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "description", {
        // description
        get: function () {
            return this._description;
        },
        set: function (v) {
            this._description = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "status", {
        // status
        get: function () {
            return this._status;
        },
        set: function (v) {
            this._status = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "image", {
        // Image
        get: function () {
            return this._image;
        },
        set: function (v) {
            this._image = v;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
exports.Item = Item;
