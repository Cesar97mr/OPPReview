"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    // Getters//////////////////////////////
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    // Setters/////////////////////////////
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    // Métodos
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = 0;
        distancia = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (vector2) {
        var otraDistancia = 0;
        otraDistancia = Math.sqrt(Math.pow(this.x - vector2.x, 2) + Math.pow(this.y - vector2.y, 2));
        return otraDistancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        else {
            cuadrante = 0;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var distancia = new Array();
        var minima = 0;
        var refindex = 0;
        for (var index = 0; index <= puntos.length - 1; index++) {
            distancia[index] = Math.sqrt(Math.pow(this.x - puntos[index].x, 2) + Math.pow(this.y - puntos[index].y, 2));
        }
        minima = distancia[0];
        for (var index = 0; index < distancia.length; index++) {
            if (distancia[index] < minima) {
                minima = distancia[index];
                refindex = index;
            }
        }
        return puntos[refindex];
    };
    return Punto;
}());
exports.Punto = Punto;
