import {Mobile} from "./Mobile"
import {MobileLibrary} from "./MobileLibrary"


let Nokia : Mobile = new Mobile("NOKIA","3210","PhoneHouse",24,"Red",false,1,250);
let Iphone : Mobile = new Mobile("IPHONE","6","Apple",64,"White",true,2,500);
let Samsung : Mobile = new Mobile("SAMSUNG","Galaxy 10","Samsung",64,"Blue",true,3,650);
let Xiaomi : Mobile = new Mobile("Xiaomi","MiNote 10","Xiaomi",64,"Blue",false,5,449);

let L1: Mobile[] = [Nokia,Iphone,Samsung,Xiaomi]


let Library1 = new MobileLibrary ("Library1", "Universe",L1)

//console.log(Library1.totalPriceCalculation());
Library1.printLibrary();