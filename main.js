#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'Enter Your Sentence to count the Words:'
    }
]);
const Words = answer.sentence.trim().split(" ");
//print the array of words:
console.log(Words);
//print the words count:
console.log(`Your Sentence words count is: ${Words.length}`);
