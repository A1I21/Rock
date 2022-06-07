//7ajrah warqah 

import { choose, chooseHwm } from "./utile/chose.hwm";
import { askforNames } from "./utile/get-names";
import { getRandomInt } from "./utile/get-random-num";

//1-ask for 2 players names
async function rungame() {
const [name1,name2] = await askforNames();
console.log(name1,name2);

//3-random number choosenig 
const randomnum=getRandomInt(1,2);
let choise1:choose,choise2:choose;

//4ask player1 to choose h|w|m
if(randomnum==1){
const choise1= await chooseHwm(name1);
const choise2= await chooseHwm(name2);
}else{
const choose1=await chooseHwm(name2);
const choose2=await chooseHwm(name1);
}


//5ask player2 to choose h|w|m
//6-compare who is the winner
//7-print the winner
//
}
rungame();
function choose1hwm(name1: any) {
    throw new Error("Function not implemented.");
}

