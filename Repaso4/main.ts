import {Punto} from "./punto"
import { Triangulo } from './triangulo';

let vector :Punto = new Punto(4,2);
let vector2 :Punto = new Punto(6,3)
let vector3 :Punto  = new Punto(2,5);
let vector4 :Punto = new Punto(1,6);
let arrayPuntos : Punto [] = [vector2,vector3,vector4];
let triangulo: Triangulo = new Triangulo(vector2,vector3,vector4);

console.log(vector.toString());
console.log(vector2.toString());
console.log(vector.distanciaAlOrigen());
console.log(vector.calcularDistancia(vector2));
console.log(vector.calcularMasCercano(arrayPuntos))
console.log(triangulo.calcularLongitudLados());