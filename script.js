console.log("File linked succesfully");
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
getComputerChoice();