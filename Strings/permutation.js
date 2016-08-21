"use strict";
var sort_1 = require('./sort');
var characters_1 = require("./characters");
function method1(s1, s2) {
    return sort_1.alphabetical(s1) === sort_1.alphabetical(s2);
}
exports.method1 = method1;
function method2(s1, s2) {
    // Return in case of an stupid case
    if (s1 === s2)
        return true;
    if (!s1 || !s2 || s1.length != s2.length)
        return false;
    // It's impossible (if not slow) to do a quick comparison without gathering the full profile of one string:
    var s1Count = characters_1.count(s1);
    for (var _i = 0, s2_1 = s2; _i < s2_1.length; _i++) {
        var s = s2_1[_i];
        var v = s1Count[s];
        if (!v)
            return false;
        s1Count[s] = v - 1;
    }
    // Due to the nature of the above comparison,
    // since the string lengths are the same, any difference will cause one character pair to be missing/extra and ultimately return false when not found.
    return true;
}
exports.method2 = method2;
//# sourceMappingURL=permutation.js.map