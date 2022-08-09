
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
        console.log(playRound("rock"));
    });

paperButton.addEventListener('click', () => 
    {
        console.log(playRound("paper"));
    });

scissorsButton.addEventListener('click', () => 
    {
        console.log(playRound("scissors"));
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


function playRound(p)
{
    let computerChoice = counterplay();
    let playerChoice = p;

    if(computerChoice === playerChoice)
    {
        return ("You tied!");
    }

    if(computerChoice === "paper" && playerChoice === "rock")
    {
        roundsLost++;
        currentCounter = roundCountersComputer[roundCountersComputer.length - roundsLost];
        currentCounter.classList.remove("counter-inactive");
        currentCounter.classList.add("counter-active");
        
        return ("You lost!");
    }
    if(computerChoice === "scissors" && playerChoice === "rock")
    {
        roundsWon ++;
        currentCounter = roundCountersPlayer[(roundsWon - 1)];
        currentCounter.classList.add("counter-active");
        currentCounter.classList.remove("counter-inactive");
        
        return ("You Won!");
    }

    if(computerChoice === "scissors" && playerChoice === "paper")
    {   
        roundsLost++;
        currentCounter = roundCountersComputer[roundCountersComputer.length - roundsLost];
        currentCounter.classList.remove("counter-inactive");
        currentCounter.classList.add("counter-active");

        return ("You lost!");
    }
    if(computerChoice === "rock" && playerChoice === "paper")
    {
        roundsWon ++;
        currentCounter = roundCountersPlayer[(roundsWon - 1)];
        currentCounter.classList.add("counter-active");
        currentCounter.classList.remove("counter-inactive");
        
        return ("You Won!");

    }
        
    if(computerChoice === "paper" && playerChoice === "scissors")
    {
        roundsWon ++;
        currentCounter = roundCountersPlayer[(roundsWon - 1)];
        currentCounter.classList.add("counter-active");
        currentCounter.classList.remove("counter-inactive");
        return ("You Won!");

    }
    if(computerChoice === "rock" && playerChoice === "scissors")
    {   
        roundsLost++;
        currentCounter = roundCountersComputer[roundCountersComputer.length - roundsLost];
        currentCounter.classList.remove("counter-inactive");
        currentCounter.classList.add("counter-active");

        return ("You Lost!");
    }
}




