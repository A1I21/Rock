import { prompt } from "inquirer";

//1-ask for 2 players names
export async function askforNames(): Promise<string[]>{
    const res =await prompt([

{
    type: "input",
    message:'enter player 1 name',
    name:'player1'
},
{
    type: "input",
    message:'enter player 2 name',
    name:'player2'
},



]);
console.log(res);

return [res.player1,res.player2];
}