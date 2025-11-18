console.log("File linked succesfully");
let playerScore = 0;
let cpuScore = 0;
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
    return compChoice;
}
function  getPlayerChoice()
{
    let choice = prompt('Input \'Rock\',\'Paper\' or \'Scissors\'');
    return choice;
}
function processInput(choice)
{
    choice = choice.toLowerCase();
    
    while (choice !=='rock' && choice !=='paper' && choice !='scissors')
    {
        alert('Invalid Choice');
        choice=getPlayerChoice();
    }
    return choice;
    
}
function playround(playerChoice,cpuChoice)
{
    console.log(`Player choice is ${playerChoice}`);
    console.log(`Computer choice is ${cpuChoice}`);
    if(playerChoice===cpuChoice)
    {
        alert('Tie');
    }
    else
    {
        if(playerChoice==='rock' && cpuChoice==='paper')
        {
            alert('Computer Wins');
            cpuScore++;
        }
        else if(playerChoice==='paper' && cpuChoice==='scissors')
        {
            alert('Computer Wins');
            cpuScore++;
        }
        else if(playerChoice==='scissors' && cpuChoice==='rock')
        {
            alert('Computer Wins');
            cpuScore++;
        }
        else
            alert('Player Wins');
            playerScore++;
    }
}
function playGame(num)
{
    for(let i=0;i<num;i++)
    {
        playround(processInput(getPlayerChoice()),getComputerChoice());
    }
}
let rounds = prompt('Specify number of rounds to play!')
playGame(rounds);