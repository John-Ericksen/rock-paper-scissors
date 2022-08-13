
let roundsWon = 0;
let roundsLost = 0;
let gamesWon = 0;

const gamesWonCounter = document.querySelector(".games-won-counter");

const playerPortrait = document.querySelector(".player-portrait");
const computerPortrait = document.querySelector(".computer-portrait");


const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const roundCounterPlayerList = document.querySelector(".round-counter-player-list");
const roundCountersPlayer = roundCounterPlayerList.querySelectorAll(".counter-inactive");

const roundCounterComputerList = document.querySelector(".round-counter-computer-list");
const roundCountersComputer = roundCounterComputerList.querySelectorAll(".counter-inactive");

rockButton.addEventListener('click', () => 
    {
        playerPortrait.src = "img/Rock_(Player).png"
        playRound("rock");
    });

paperButton.addEventListener('click', () => 
    {
        playerPortrait.src = "img/Paper_(Player).png"
        playRound("paper");
    });

scissorsButton.addEventListener('click', () => 
    {
        playerPortrait.src = "img/Scissors_(Player).png" 
        playRound("scissors");
    });


//get a random choice to pit the player's choice against and returns it.
function counterplay(choice = 0)
{
    choice = parseInt(Math.random() * 3 + 1);
    switch(choice)
    {
        case 1:
            computerPortrait.src = "img/Rock_(Enemy).png"
            return "rock";
        case 2:
            computerPortrait.src = "img/Paper(Enemy).png"
            return "paper";
        case 3:
            computerPortrait.src = "img/Scissors_(Enemy).png"
            return "scissors";
    }

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
        gamesWon ++;
        gamesWonCounter.textContent = gamesWon;
        resetScore();
        
    }
    else if(roundsLost == 5)
    {
        console.log("You lose the game!");
        resetScore();
    }
}






