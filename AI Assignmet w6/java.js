const choices = ["rock", "paper", "scissors"];

const score = {
    player: 0,
    computer: 0
};

function startGame() {
    document.getElementById("start-btn").classList.add("hidden");
    document.getElementById("choices").classList.remove("hidden");
    document.getElementById("restart-btn").classList.remove("hidden");
    document.getElementById("turn").textContent = "Choose your move!";
    document.getElementById("result").textContent = "";
}

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "🤝 It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "🎉 You win!";
        score.player++;
    } else {
        result = "💻 Computer wins!";
        score.computer++;
    }

    document.getElementById("turn").textContent =
        `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

    document.getElementById("result").textContent = result;

    document.getElementById("score").textContent =
        `Player: ${score.player} | Computer: ${score.computer}`;
}

function restartGame() {
    score.player = 0;
    score.computer = 0;
    document.getElementById("turn").textContent = "Choose your move!";
    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "Player: 0 | Computer: 0";
}