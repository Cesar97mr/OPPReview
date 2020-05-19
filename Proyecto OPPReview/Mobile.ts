export class Mobile{
    private name : string;
    private model : string;
    private trademark : string;
    private sdSize : number;
    private color : string;
    private is5g : boolean;
    private cameraNumber : number;
    private price : number;
     
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
    getName():string{
        return this.name;
    }
    getModel():string{
        return this.model;
    }
    getTradeMark():string{
        return this.trademark;
    }
    getSdSize():number{
        return this.sdSize
    }
    getColor():string{
        return this.color;
    }
    getIs5g():boolean{
        return this.is5g;
    }
    getCameraNumber():number{
        return this.cameraNumber;
    }
    getPrice():number{
        return this.price;
    }
    setName(name:string){
        this.name = name;
    }
    setModel(model:string){
        this.model = model;
    }
    setTradeMark(trademark:string){
        this.trademark = trademark;
    }
    setSdSize(sdSize:number){
        this.sdSize = sdSize;
    }
    setColor(color:string){
        this.color = color;
    }
    setIs5g(is5g:boolean){
        this.is5g = is5g;
    }
    setCameraNumber(cameraNumber:number){
        this.cameraNumber = cameraNumber;
    }
    setPrice(price:number){
        this.price = price;
    }
    toString():string{
        return "The characteristics of the mobile " +  this.name + " are : " + "\n" +
        "Name : " + this.name + "\n" +
        "Model : " + this.model + "\n" + 
        "Trademark :" + this.trademark + "\n"+
        "SD Size (GB) : " + this.sdSize + "\n"+
        "Color : " + this.color + "\n" +
        "Is 5g? : " + this.is5g + "\n" + 
        "Number of Cameras : " + this.cameraNumber;
    }
}