
import {Mobile} from "./Mobile"


export class MobileLibrary{
    private name : string;
	private location : string;
	private mobiles : Mobile[];
    private totalPrice: number = 0;
    private totalPriceCalc: number = 0
    
    
        constructor(name: string, location: string, mobiles: Mobile[]){
            this.name = name;
            this.location = location;
            this.mobiles = mobiles;
            this.totalPriceCalc = this.totalPriceCalculation();
            
        }
        // Gettes/////////////////////
        getName(){
            return this.name
        }
        getLocation(){
            return this.location
        }
        getMobiles(){
            return this.mobiles
        }
        //Settes/////////////////////
        setName(newName){
            this.name = newName;
        }
        setLocation(newLocation){
            this.location = newLocation;
        }
        setMobiles(newMobiles){
            this.mobiles = newMobiles;
        }
        //Métodos/////////////////////
        private totalPriceCalculation (): number{

            for(let index = 0; index <= this.mobiles.length -1; index++){
                this.totalPrice += this.mobiles[index].getPrice()            
                
            }
            return this.totalPrice;
        }
        printLibrary (){
            console.log("“This is all my mobiles:”");
            for(let index = 0; index <= this.mobiles.length -1; index++){
                console.log("" + this.mobiles[index])
            }
            console.log("\n“Price overall: " +this.totalPrice );
        }


}

