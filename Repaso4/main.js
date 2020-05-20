"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var triangulo_1 = require("./triangulo");
var vector = new punto_1.Punto(4, 2);
var vector2 = new punto_1.Punto(6, 3);
var vector3 = new punto_1.Punto(2, 5);
var vector4 = new punto_1.Punto(1, 6);
var arrayPuntos = [vector2, vector3, vector4];
var triangulo = new triangulo_1.Triangulo(vector2, vector3, vector4);
//console.log(vector.toString());
//console.log(vector2.toString());
//console.log(vector.distanciaAlOrigen());
//console.log(vector.calcularDistancia(vector2));
console.log(vector.calcularMasCercano(arrayPuntos));
console.log(triangulo.calcularLongitudLados());