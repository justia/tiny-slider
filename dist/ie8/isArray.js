"use strict";

// Array.isArray
if (!Array.isArray) {
    Array.isArray = function (obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
    };
}