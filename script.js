
let roundsWon = 0;
let roundsLost = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const roundCounterPlayerList = document.querySelector(".round-counter-player-list");
const roundCountersPlayer = roundCounterPlayerList.querySelectorAll(".counter-inactive");

const roundCounterComputerList = document.querySelector(".round-counter-computer-list");
const roundCountersComputer = roundCounterComputerList.querySelectorAll(".counter-inactive");

rockButton.addEventListener('click', () => 
    {
        playRound("rock");
    });

paperButton.addEventListener('click', () => 
    {
        playRound("paper");
    });

scissorsButton.addEventListener('click', () => 
    {
        playRound("scissors");
    });


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


function loseRound()
{
    roundsLost++;
    currentCounter = roundCountersComputer[roundCountersComputer.length - roundsLost];
    currentCounter.classList.remove("counter-inactive");
    currentCounter.classList.add("counter-active");
    checkWinLoss();
}

function winRound()
{
    roundsWon ++;
    currentCounter = roundCountersPlayer[(roundsWon - 1)];
    currentCounter.classList.add("counter-active");
    currentCounter.classList.remove("counter-inactive");
    checkWinLoss();
}

function playRound(p)
{
    let computerChoice = counterplay();
    let playerChoice = p;

    if(computerChoice === playerChoice)
    {
        
    }

    if(computerChoice === "paper" && playerChoice === "rock")
    {
        loseRound();
    }
    if(computerChoice === "scissors" && playerChoice === "rock")
    {
       
        winRound();
    }

    if(computerChoice === "scissors" && playerChoice === "paper")
    {   
       loseRound();
    }
    if(computerChoice === "rock" && playerChoice === "paper")
    {
        winRound();
    }
        
    if(computerChoice === "paper" && playerChoice === "scissors")
    {
        winRound();
    }
    if(computerChoice === "rock" && playerChoice === "scissors")
    {   
        loseRound();
    }
}

function resetScore()
{
    for(let i = 0; i < roundCountersPlayer.length; i++)
    {
        roundsWon = 0;
        roundsLost = 0;

        currentCounter = roundCountersPlayer[i];
        currentCounter.classList.remove("counter-active");
        currentCounter.classList.add("counter-inactive");

        currentCounter = roundCountersComputer[i];
        currentCounter.classList.remove("counter-active");
        currentCounter.classList.add("counter-inactive");
    }
}

function checkWinLoss()
{
    if(roundsWon == 5)
    {
        //put a win function in there!
        console.log("You Win the game!");
        resetScore();
        
    }
    else if(roundsLost == 5)
    {
        console.log("You lose the game!");
        resetScore();
    }
}






