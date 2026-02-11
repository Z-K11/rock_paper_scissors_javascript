console.log("File linked succesfully");
const playerInput = document.querySelector("#choice");
    let playerScore = 0;
    let cpuScore = 0;
    const display = document.querySelector("#displayScore");
    const displayDecision = document.querySelector("#decision");
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
function playround(playerChoice,cpuChoice)
{
    console.log(`Player choice is ${playerChoice}`);
    console.log(`Computer choice is ${cpuChoice}`);
    if(playerChoice===cpuChoice)
    {
        displayDecision.textContent = "Tie";
    }
    else
    {
        if(playerChoice==='rock' && cpuChoice==='paper')
        {
        displayDecision.textContent = "Computer Wins the round";
            cpuScore++;
        }
        else if(playerChoice==='paper' && cpuChoice==='scissors')
        {
            displayDecision.textContent = "Computer Wins the round";
            cpuScore++;
        }
        else if(playerChoice==='scissors' && cpuChoice==='rock')
        {
            displayDecision.textContent = "Computer Wins the round";
            cpuScore++;
        }
        else
        {
            displayDecision.textContent = "Player Wins the round";        
            playerScore++;
        }
    }
    display.textContent = `Player score : ${playerScore} Cpu Score : ${cpuScore}`;
}
playerInput.addEventListener('click',event =>
{
    const playerInputId = event.target;
    switch (playerInputId.id) {
        case 'rock':
            playerMove = 'rock';
            break;
        case 'paper':

            playerMove = 'paper';
            break;
        case 'scissors':

            playerMove = 'scissors';
            break;
        default:
            console.log("Error at event handler");
            break;
    }
    compChoice = getComputerChoice();
    if(playerScore!=5 && cpuScore!=5)
        playround(playerMove,compChoice);
    if (playerScore === 5)
    {
        displayDecision.textContent = "Player wins the game";
        alert('Player Wins the game');
    }
    if (cpuScore===5)
    {
        displayDecision.textContent = "Player wins the game";
        alert("Cpu Wins the game");
    }
});