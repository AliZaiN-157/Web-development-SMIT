const username = document.getElementById("username");
const saveScore = document.getElementById("saveScoreBtn");
const finalscore = document.getElementById('finalscore');
const RecentScore = localStorage.getItem('RecentScore');
finalscore.innerText = RecentScore;

username.addEventListener("keyup", () => {
    saveScore.disabled = !username.value
});

saveScore = e => {
    e.preventdefault();
}