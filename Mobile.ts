export class Mobile{
    public name : string;
    public model : string;
    public trademark : string;
    public sdSize : number;
    public color : string;
    public is5g : boolean;
    public cameraNumber : number;
    public price : number;
     
    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5g:boolean, cameraNumber:number, price:number){
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5g = is5g;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
  
}