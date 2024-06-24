let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //rock , paper ,scissors
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("user win");
    msg.innerText = `You Win!!,your ${userChoice} beats ${compChoice}`;
    userScore++;
    uScore.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    console.log("computer win");
    msg.innerText = `Computer Wins,your ${userChoice} beats by computer ${compChoice}`;
    compScore++;
    cScore.innerText = compScore;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //generate computer choice ->modular
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    msg.innerText = "Game is Draw, Play Again";
    msg.style.backgroundColor = "black";
    //console.log("Game is Draw , Play Again");
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // compu -> scissoror paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // comp ->  rock or scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //comp -> rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("Id");
    //console.log("choice  is clicked", userChoice);
    playGame(userChoice);
  });
});
