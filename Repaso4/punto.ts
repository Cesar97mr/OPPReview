
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
    setX(newX){
        this.x = newX;
    }
    setY(newY){
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
    calcularDistancia(otroPunto:Punto):number{
        let otraDistancia: number = 0;
            otraDistancia = Math.sqrt(Math.pow(this.x - vector2.x,2) + Math.pow(this.y - vector2.y,2));
        return otraDistancia;
    }
}

