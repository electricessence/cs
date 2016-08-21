"use strict";
function hasRepeats(source) {
    var seen = {};
    for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
        var s = source_1[_i];
        if (s in seen)
            return true;
        seen[s] = true;
    }
    return false;
}
exports.hasRepeats = hasRepeats;
function hasNoRepeats(source) {
    return !hasRepeats(source);
}
exports.hasNoRepeats = hasNoRepeats;
function from(source) {
    var seen = {}, result = [];
    for (var _i = 0, source_2 = source; _i < source_2.length; _i++) {
        var s = source_2[_i];
        if (!(s in seen)) {
            seen[s] = true;
            result.push(s);
        }
    }
    return result;
}
exports.from = from;
function count(source) {
    var c = {};
    for (var _i = 0, source_3 = source; _i < source_3.length; _i++) {
        var s = source_3[_i];
        var v = c[s];
        if (!v && v !== 0)
            v = 0;
        c[s] = v + 1;
    }
    return c;
}
exports.count = count;
function sameSet(s1, s2) {
    var a1 = from(s1), a2 = from(s2);
    a1.sort();
    a2.sort();
    return a1.join('') == a2.join('');
}
exports.sameSet = sameSet;
//# sourceMappingURL=characters.js.map