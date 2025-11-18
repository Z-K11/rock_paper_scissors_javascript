console.log("File linked succesfully");
let playerScore = 0;
function getComputerChoice()
{
    let compChoice = Math.floor(Math.random()*3)
    switch (compChoice)
    {
        case 0:
            compChoice='rock';
            break;
        case 1:
            compChoice='paper';
            break;
        case 2:
            compChoice='scissors';
            break;
        default:
            console.log('Error creating random number less than 3');

    }
    console.log(compChoice);
}
function  getPlayerChoice()
{
    let choice = prompt('Input \'Rock\',\'Paper\' or \'Scissors\'');
    return choice;
}
function processInput(choice)
{
    choice = choice.toLowerCase();
    console.log(`Player choice is ${choice}`);
    if (choice !=='rock' && choice &&'paper' && choice !='scissors')
    {
        alert('Invalide Input provide input again');
        processInput(getPlayerChoice());
    }
    else
        return;
    }
getComputerChoice();
processInput(getPlayerChoice());