#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select option below:",
            type: "list",
            choices: ["Withdraw", "Check balance", "FastCash"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            { message: "Enter amount", type: "number", name: "amount" },
        ]);
        if (myBalance < amountAns.amount) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "FastCash") {
        let FastAmount = await inquirer.prompt([
            {
                message: "Please enter amount for FastCash",
                type: "list",
                name: "amount",
                choices: [1000, 2000, 3000, 5000],
            },
        ]);
        if (FastAmount.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= FastAmount.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin, try again with the correct pin.");
}
