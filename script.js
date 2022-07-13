
let roundsWon = 0;
let roundsLost = 0;

//get a random choice to pit the player's choice against and returns it.
function counterplay(choice = 0)
{
    choice = parseInt(Math.random() * 3 + 1);
    switch(choice)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }

}

//get the players input and returns it.
function getInput(invalid = false)
{
    let prompt = "";
    if(invalid == true)
    {
        prompt = "That choice was invalid! Please choose another!";
    }
    else if(invalid === false)
    {
        prompt = " What is your choice?"; 
    }

    let choice = window.prompt(prompt);
    choice = choice.toLowerCase();
    if(choice != "paper" && choice != "rock" && choice != "scissors")
    {
        return getInput(true);
    }
    return choice;
}


function playRound()
{
    let computerChoice = counterplay();
    let playerChoice = getInput();

    if(computerChoice === playerChoice)
    {
        return ("You tied!")
    }

    if(computerChoice === "paper" && playerChoice === "rock")
    {
        roundsLost++;
        return ("You lost!")
    }
    if(computerChoice === "scissors" && playerChoice === "rock")
    {
        roundsWon ++;
        return ("You Won!")
    }

    if(computerChoice === "scissors" && playerChoice === "paper")
    {   
        roundsLost++;
        return ("You lost!")
    }
    if(computerChoice === "rock" && playerChoice === "paper")
    {
        roundsWon ++;
        return ("You Won!")
    }
        
    if(computerChoice === "paper" && playerChoice === "scissors")
    {
        roundsWon++;
        return ("You Won!")
    }
    if(computerChoice === "rock" && playerChoice === "scissors")
    {   
        roundsLost++;
        return ("You Lost!")
    }
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        console.log(playRound());
    }

    if(roundsWon > roundsLost)
    {
        console.log("You Won The Game!");
    }
    else
    {
        console.log("You Lost The Game!");
    }
}

playGame();

