import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'Enter Your Sentence to count the Words'
    }
]);
const Words = answer.sentence.trim().split(" ");
console.log(Words);
console.log(`Your Sentence word count is: ${Words.length}`);
