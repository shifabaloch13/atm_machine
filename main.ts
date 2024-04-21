#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //dollar
let mypin = 1234;

 let pinAnswer = await inquirer.prompt(

[
{
name: "pin",
message: "enter your pin",
type: "number"


}




]
 );
 if(pinAnswer.pin === mypin)
    console.log("correct pin code!!!");

   let operationans = await inquirer.prompt(
        [
            {
               name: "opperation",
               message: "please select option",
               type: "list",
               choices: ["withdraw,","check balance"]
            }


            
        ]
    );
    console.log(operationans);

if(operationans.operation ==="withdraw") {
let amountans = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]
);

myBalance -= amountans.amount;
console.log("your remaining balance is: " + myBalance)
} else if(operationans.operation ==="check balance") {


console.log("your balance is:"+ myBalance)


 }

 else{
    console.log("incorrect pin number");
 }