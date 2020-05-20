
export class Punto{
    private x: number;
    private y: number;
    

    constructor (x: number, y: number){
        this.x = x;
        this.y = y;
    }
    // Getters//////////////////////////////
    getX():number{
        return this.x;
    }
    getY():number{
        return this.y
    }
    // Setters/////////////////////////////
    setX(newX:number){
        this.x = newX;
    }
    setY(newY:number){
        this.y = newY
    }
    // Métodos
    toString():string{
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    }
    distanciaAlOrigen():number {
        let distancia: number = 0;
            distancia = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
        return distancia;
    }
    calcularDistancia(vector2:Punto):number{
        let otraDistancia: number = 0;
            otraDistancia = Math.sqrt(Math.pow(this.x - vector2.x,2) + Math.pow(this.y - vector2.y,2));
        return otraDistancia;
    }
    calcularCuadrante():number{
        let cuadrante: number = 0;
        if(this.x > 0 && this.y > 0){
            cuadrante = 1;
        }else if(this.x < 0 && this.y > 0){
            cuadrante = 2;
        }else if(this.x < 0 && this.y < 0){
            cuadrante = 3;
        }else if(this.x > 0 && this.y <0){
            cuadrante = 4;
        }else{
            cuadrante = 0;
        }return cuadrante;
    }
    calcularMasCercano(puntos:Punto[]):Punto{
        let distancia: number[] = new Array();
        let minima: number = 0;
        let refindex: number = 0;
        for(let index = 0;index <= puntos.length - 1;index++){
          distancia[index] = Math.sqrt(Math.pow(this.x - puntos[index].x,2) + Math.pow(this.y - puntos[index].y,2)); 
        }
        minima = distancia[0];
        for (let index = 0; index < distancia.length ; index++) {
            if (distancia[index] < minima) {
                minima = distancia[index];
                refindex = index;
            }
        }return puntos[refindex];
    }
}