import {Punto} from "./punto"

let vector = new Punto(4,2);
let vector2 = new Punto(6,3)

console.log(vector.toString());
console.log(vector2.toString());
console.log(vector.distanciaAlOrigen());
console.log(vector.calcularDistancia(vector2));