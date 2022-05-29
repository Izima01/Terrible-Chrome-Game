let dino = document.querySelector("#dino")

let tree = document.querySelector(".bi-tree-fill")

function jump() {
    document.querySelector("#dino").style = "animation: jump 500ms";
    
    setTimeout(() => {
        document.querySelector("#dino").style = "animation: none";
    }, 500);
}

function Reload() {
    document.querySelector(".bi-tree-fill").style = "animation: tree 2s infinite linear;";
    // document.querySelector("#block").style = "animation-delay: 1s;"
    document.querySelector("#game-over").style = "display: none;"
}

let checkDead = setInterval(function() {
    let dinoTop =
    parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("top"));
    let treeLeft =
    parseInt(window.getComputedStyle(document.querySelector(".bi-tree-fill")).getPropertyValue("left"));
    
    if (treeLeft > 100 && treeLeft < 130 && dinoTop > 250) {
        document.querySelector(".bi-tree-fill").style = "animation: none"
        document.querySelector("#game-over").style = "display: block;"
    }
}, 10);