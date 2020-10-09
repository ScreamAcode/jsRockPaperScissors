const startBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const mainScreen = document.querySelector(".match");
const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".playerHand");
const computerHand = document.querySelector(".computerHand");
const playerScoreBoard = document.querySelector(".playerScore p");
const computerScoreBoard = document.querySelector(".computerScore p");
const hands = document.querySelectorAll(".hands img");
let playerScore = 0;
let computerScore = 0;

startBtn.addEventListener("click",startGame);


function startGame(){
    introScreen.classList.add("fadeOut");
    mainScreen.classList.add("fadeIn");
    playGame();
}

function playGame(){
    const computerOptions = ["rock","paper","scissors"];    

hands.forEach((hand)=>{
    hand.addEventListener("animationend",function(){
        this.style.animation = "" ;
    })
})

    options.forEach((option)=>{
        option.addEventListener("click",function(){
            const randomOption = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[randomOption]; 


            setTimeout(()=>{
                winner(this.textContent,computerChoice);
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`; 
            },2000)

            playerHand.style.animation = "shakeHandsPlayer 2s ease";
            computerHand.style.animation = "shakeHandsComputer 2s ease";
            
        })
    })
    
}

function winner (playerChoice,computerChoice){
    
    const winner = document.querySelector(".winner");

    if(playerChoice === computerChoice){
       winner.textContent = "It is a tie";
       return;
    }
    if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            winner.textContent = "Computer Wins";
            computerScore++;
            updateScore();
            return;
        }else{
            winner.textContent = "player Wins";
            playerScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            winner.textContent = "Computer Wins";
            computerScore++;
            updateScore();
            return;
        }else{
            winner.textContent = "player Wins";
            playerScore++;
            updateScore();
            return;
        }
    }

    if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            winner.textContent = "Computer Wins";
            computerScore++;
            updateScore();
            return;
        }else{
            winner.textContent = "player Wins";
            playerScore++;
            updateScore();
            return;
        }
    }
}
function updateScore(){
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
}