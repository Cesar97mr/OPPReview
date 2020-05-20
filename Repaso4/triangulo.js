"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudTotal = [];
        var longitud1 = this.vertice1.calcularDistancia(this.vertice2);
        var longitud2 = this.vertice2.calcularDistancia(this.vertice3);
        var longitud3 = this.vertice3.calcularDistancia(this.vertice1);
        longitudTotal.push(longitud1, longitud2, longitud3);
        return longitudTotal;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
