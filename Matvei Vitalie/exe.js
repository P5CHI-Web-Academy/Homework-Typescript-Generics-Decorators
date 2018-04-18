"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var log = function (target) {
    console.log('Name: ', target.name);
    console.log('Parameters: ', new target().items);
};
var GenericMap = /** @class */ (function () {
    function GenericMap() {
        this.items = [];
    }
    GenericMap.prototype.setItem = function (key, item) {
        var tmp = {};
        tmp[key] = item;
        this.items.push(tmp);
    };
    GenericMap.prototype.getItem = function (key) {
        var ret = null;
        for (var i = 0; i < this.items.length; i++) {
            var curr = this.items[i];
            if (curr[key]) {
                return curr[key];
            }
        }
        return null;
    };
    GenericMap.prototype.clear = function () {
        this.items.length = 0;
    };
    GenericMap.prototype.printMap = function () {
        this.items.forEach(function (item) {
            var key = Object.keys(item);
            console.log('{ "' + key[0] + '": ', item[key[0]], '}');
        });
    };
    GenericMap = __decorate([
        log
    ], GenericMap);
    return GenericMap;
}());
var numb = new GenericMap();
numb.setItem('BMW', 7);
numb.setItem('VAZ', 2106);
numb.printMap();
numb.clear();
numb.printMap();
var strMap = new GenericMap();
strMap.setItem('color', 'Black');
strMap.setItem('State', 'MD');
strMap.printMap();
