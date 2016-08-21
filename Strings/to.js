"use strict";
function array(source) {
    var result = new Array(source.length);
    for (var i = 0; i < source.length; i++)
        result[i] = source[i];
    return result;
}
exports.array = array;
function charArray(source) {
    var result = new Array(source.length);
    for (var i = 0; i < source.length; i++)
        result[i] = source.charCodeAt(i);
    return result;
}
exports.charArray = charArray;
//# sourceMappingURL=to.js.map