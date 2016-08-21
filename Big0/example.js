"use strict";
var range_1 = require('../Arrays/range');
function suma_de_n(n) {
    // Partida
    var partida = Date.now();
    // Corre la funcion
    var suma = 0;
    for (var _i = 0, _a = range_1.range(0, n); _i < _a.length; _i++) {
        var i = _a[_i];
        suma += i;
    }
    var fin = Date.now();
    console.log(partida, fin);
    return suma;
}
console.log(suma_de_n(10));
//# sourceMappingURL=example.js.map