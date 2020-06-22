

let WinLose = document.getElementById("WinLose");
let toPressShuffle = false;
let toClickShell = false;
let shuffleTime;
let loseOrWin;
let Time;
let Order = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3"),
    0
];

// shuffle button
shuffle.addEventListener("click", () => {
    if (toPressShuffle) {
        toPressShuffle = false;
        Order[1].style.backgroundColor = "black";
        let shuffle = setInterval(() => {
            if (Math.floor(Math.random() * 2) == 0) {
                Order[3] = Order[0];
                Order[0] = Order[1];
                Order[1] = Order[3];
            } else {
                Order[3] = Order[1];
                Order[1] = Order[2];
                Order[2] = Order[3];
            }
            theAnimation()
            shuffleTime--;
            if (shuffleTime < 1) {
                clearInterval(shuffle);
                toClickShell = true;
            }
        }, Time);
    }
});

// Rearrange the shells
function theAnimation() {
    Order[0].style.transform = "translateX(0%)";
    Order[1].style.transform = "translateX(117%)";
    Order[2].style.transform = "translateX(234%)";
}

// Transition out 2 shells
function outAnimation() {
    document.getElementById("box1").classList.add("transition");
    document.getElementById("box3").classList.add("transition");
}

// Win or lose output
Order[0].addEventListener("click", function () {
    loseOrWin = "You lose!"
    cupClicked()
});
Order[1].addEventListener("click", function () {
    loseOrWin = "You win!"
    cupClicked()
});
Order[2].addEventListener("click", function () {
    loseOrWin = "You lose!"
    cupClicked()
});

// Difficulty buttons color 
function btnWhite() {
    document.getElementById("Easy").style.backgroundColor = "white";
    document.getElementById("Medium").style.backgroundColor = "white";
    document.getElementById("Hard").style.backgroundColor = "white";
}

// Difficulties
document.getElementById("Easy").addEventListener("click", function () {
    btnWhite();
    document.getElementById("Easy").style.backgroundColor = "green";
    Time = 800;
    shuffleTime = 10;
    toPressShuffle = true;
});
document.getElementById("Medium").addEventListener("click", function () {
    btnWhite();
    document.getElementById("Medium").style.backgroundColor = "yellow";
    Time = 500;
    shuffleTime = 15;
    toPressShuffle = true;
});
document.getElementById("Hard").addEventListener("click", function () {
    btnWhite();
    document.getElementById("Hard").style.backgroundColor = "red";
    Time = 350;
    shuffleTime = 25;
    toPressShuffle = true;
});

// Clicked shell
function cupClicked() {
    if (toClickShell) {
        WinLose.innerHTML = loseOrWin;
        document.getElementById("WinLose").classList.add("fadeIn");
        outAnimation()
    }
}

// Restart button
document.getElementById("restart").addEventListener("click", function () {
    window.location.reload();
});