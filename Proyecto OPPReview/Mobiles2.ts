import {Mobile} from "./Mobile"
let Nokia : Mobile = new Mobile("NOKIA","3210","PhoneHouse",24,"Red",false,1,250);
let Iphone : Mobile = new Mobile("IPHONE","6","Apple",64,"White",true,2,500);
let Samsung : Mobile = new Mobile("SAMSUNG","Galaxy 10","Samsung",64,"Blue",true,3,650);

console.log(Nokia);
console.log(Iphone);
console.log(Samsung);

Nokia.setCameraNumber(4)
Nokia.setIs5g(true);

console.log(Nokia,Iphone,Samsung);
let arrayMobiles:Mobile[] = [Nokia,Iphone,Samsung];

console.log(Nokia.toString()+"\n");
console.log(Iphone.toString()+"\n");
console.log(Samsung.toString());