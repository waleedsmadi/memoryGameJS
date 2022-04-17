const showScore = document.querySelector("[data-show-score]");
const theScore = localStorage.getItem("score-memory-game");

showScore.innerText = theScore;