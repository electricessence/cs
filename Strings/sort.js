"use strict";
var to_1 = require('./to');
function alphabetical(source) {
    return source &&
        to_1.array(source)
            .sort()
            .join('');
}
exports.alphabetical = alphabetical;
//# sourceMappingURL=sort.js.map