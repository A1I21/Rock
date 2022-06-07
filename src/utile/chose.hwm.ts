import { prompt } from "inquirer";
import Choices from "inquirer/lib/objects/choices";
import { type } from "os";
import { removeListener } from "process";
export type choose = "h" | "w" | "m";
export async function chooseHwm(name:string):Promise<choose>{
    const res =await prompt([

        {
            type: "list",
            
            hideListBulletPoint:true,
            
            message:`enter ${name} h|w|m`,
            name:'choise',
            choices:['h','w','m']
        },
    
        ]);
      
        

    return res.choise;
}