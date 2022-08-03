let dino = document.querySelector("#dino")
let score = document.querySelector("#scoreValue")
let tree = document.querySelector(".bi-tree-fill")
let count = 0;

function jump() {
    document.querySelector("#dino").style = "animation: jump 450ms";
    
    setTimeout(() => {
        document.querySelector("#dino").style = "animation: none";
    }, 450);
}

let checkScore = setInterval(function() {
    let treeLeft =
    parseInt(window.getComputedStyle(document.querySelector(".bi-tree-fill")).getPropertyValue("left"));
    if (treeLeft < 100) {
        count ++;
    }
    score.innerHTML = count * 10;
}, 250);

if (score > 100) {
    document.querySelector(".bi-tree-fill").style = "animation: tree 1.8s infinite linear;";
}

if (score > 200) {
    document.querySelector(".bi-tree-fill").style = "animation: tree 1.6s infinite linear;";
}

if (score > 300) {
    document.querySelector(".bi-tree-fill").style = "animation: tree 1.4s infinite linear;";
}

function Reload() {
    document.querySelector(".bi-tree-fill").style = "animation: tree 2s infinite linear;";
    document.querySelector("#block").style = "animation-delay: 1s;"
    document.querySelector("#game-over").style = "display: none;"
    score.innerHTML = 0;
    count = 0;
}

let checkDead = setInterval(function() {
    let dinoTop = 
    parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("top"));
    let treeLeft =
    parseInt(window.getComputedStyle(document.querySelector(".bi-tree-fill")).getPropertyValue("left"));
    
    if (treeLeft > 100 && treeLeft < 165 && dinoTop > 295) {
        document.querySelector(".bi-tree-fill").style = "animation: none"
        document.querySelector("#game-over").style = "display: block;"
    }
    let dinoRight = dino.getBoundingClientRect(dino).left;
    // parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("right"));

    console.log(dinoRight)
}, 10);