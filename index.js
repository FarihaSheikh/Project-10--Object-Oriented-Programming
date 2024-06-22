#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    _personality;
    constructor() {
        this._personality = 'Mystery';
    }
    userInput(input) {
        if (input.includes('Talk to other about my self openly')) {
            this._personality = 'Extrovert';
        }
        else if (input.includes('Keep your words to my self')) {
            this._personality = "Introvert";
        }
    }
    get personality() {
        return this._personality;
    }
}
class Main {
    async main() {
        const ans = await inquirer.prompt({
            type: "list",
            name: "choice",
            message: chalk.yellow("Tell your behaviour?"),
            choices: [
                "1. Talk to other about my self openly",
                "2. Keep quite and don't ask questions",
                "3. Keep your words to my self"
            ]
        });
        let myPerson = new Person();
        myPerson.userInput(ans.choice);
        console.log(`You are ${myPerson.personality}`);
    }
}
const myObj = new Main();
myObj.main();
