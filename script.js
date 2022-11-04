let dino = document.querySelector("#dino")
let score = document.querySelector("#scoreValue")
let tree = document.querySelector(".bi-tree-fill")
let count = 0;

function jump() {
    dino.style = "animation: jump 450ms linear";
    
    setTimeout(() => {
        dino.style = "animation: none";
    }, 450);
}

let checkScore = setInterval(function() {
    let treeLeft =
    parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    if (treeLeft < 100) {
        count ++;
    }
    score.innerHTML = count * 10;
}, 250);

if (score > 100) {
    tree.style = "animation: tree 1.6s infinite linear;";
}

if (score > 200) {
    tree.style = "animation: tree 1.4s infinite linear;";
}

if (score > 300) {
    tree.style = "animation: tree 1.2s infinite linear;";
}

function Reload() {
    tree.style = "animation: tree 1.8s infinite linear;";
    document.querySelector("#block").style = "animation-delay: 1s;"
    document.querySelector("#game-over").style = "display: none;"
    score.innerHTML = 0;
    count = 0;
}

let checkDead = setInterval(function() {
    let dinoTop = 
    parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("top"));
    let treeLeft =
    parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    
    if (treeLeft > 100 && treeLeft < 165 && dinoTop > 295) {
        tree.style = "animation: none"
        document.querySelector("#game-over").style = "display: block;"
    }
    let dinoRight = dino.getBoundingClientRect(dino).left;
    // parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("right"));

    // console.log(dinoRight)
}, 10);