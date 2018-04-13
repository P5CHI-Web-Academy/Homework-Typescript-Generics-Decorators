"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var log = function (target) {
    console.log('Name: ', target.name);
    console.log('Parameters: ', new target().array);
};
var Map = /** @class */ (function () {
    function Map() {
        var _this = this;
        this.array = [];
        this.setItem = function (key, item) {
            (typeof key === 'string') ? _this.array[key] = item : console.error('Key must be a string');
        };
        this.getItem = function (key) {
            return _this.array[key];
        };
        this.clear = function () { return _this.array = []; };
        this.printMap = function () {
            for (var i in _this.array) {
                console.log(_this.array[i]);
            }
        };
    }
    Map = __decorate([
        log
    ], Map);
    return Map;
}());
var map = new Map();
map.setItem('name', 'Mihai');
map.setItem('age', 20);
map.setItem('birth', 7991);
map.printMap();
