let dino = document.querySelector("#dino");
let score = document.querySelector("#scoreValue");
let game = document.querySelector("#game");
let tree = document.querySelector("#block");
let startBtn = document.querySelector("#start");
let count = 0;
let isRunning = false;
let isFailed = false;

function jump() {
    dino.style = "animation: jump 960ms linear";
    setTimeout(() => {
        dino.style = "animation: none";
    }, 450);
}

let checkScore = setInterval(function() {
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    if (treeLeft < 100) {
        count ++;
    }
    score.innerHTML = count * 10;
}, 250);

if (score > 100) tree.style = "animation: tree 1.6s infinite linear;";

if (score > 200) tree.style = "animation: tree 1.4s infinite linear;";

if (score > 300) tree.style = "animation: tree 1.2s infinite linear;";

function Reload() {
    tree.style = "animation: tree 1.8s infinite linear;";
    document.querySelector("#block").style = "animation-delay: 1s;"
    document.querySelector("#game-over").style = "display: none;"
    score.innerHTML = 0;
    count = 0;
    isRunning =true;
    isFailed =false;
}

let checkDead = setInterval(function() {
    let dinoBottom = parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("bottom"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));

    if (treeLeft > 102 && treeLeft < 160 && dinoBottom < 32) {
        isFailed = true;
        tree.style = "animation: none";
        tree.style.left = `${treeLeft}px`;
        dino.style.bottom = `${dinoBottom}px`;
        isRunning = false;
    }
    if (isFailed) startBtn.innerHTML = "Reload";
    if (isRunning) startBtn.style.display = "none";
    if (!isRunning) startBtn.style.display = "block";
    if (isFailed) startBtn.className = "reload";
    if (isRunning && !isFailed) startBtn.id = "start";
}, 10);


startBtn.addEventListener("click", () => {
    tree.classList.add("startMoving");
    isRunning = true;
    if (isFailed) Reload();
});

game.addEventListener("click", (e) => {
    if (e.target.id == "start") return;
    if (isRunning) return jump();
});

document.onkeydown = () => {
    if (isRunning) return jump();
}