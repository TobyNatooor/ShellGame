
/*
box1.style.transform = "translate(250px, 0px)";
box2.style.transform = "translate(0px, 0px)";
setTimeout(function(){
    box1.style.transform = "translate(500px, 0px)";
    box3.style.transform = "translate(250px, 0px)";
}, 2100);
box1.style.animation = "theFirst 2s forwards";
box2.style.animation = "theThird 2s forwards";
setTimeout(function(){box2.style.animation = "theFourth 2s forwards";}, 2500);
setTimeout(function(){box3.style.animation = "theSecond 2s forwards";}, 2500);
box1.classList.add("test");
document.getElementById("box1").style.animation = "theSecond";
*/

window.onload = function () {

    let Order = [
        document.getElementById("box1"),
        document.getElementById("box2"),
        document.getElementById("box3"),
        4
    ];
    let Explanation = document.getElementById("Explanation");
    let WinLose = document.getElementById("WinLose");
    let Time = 550;
    let Stop = 0;
    let shuffleAmount = 10;
    let num = 0;
    let loseOrWin;

    btn.addEventListener("click", function () {
        Order[1].style.backgroundColor = "black";
        Explanation.style.color = "black";
        let shuffle = setInterval(function () {
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
            Stop++;
            if (Stop > shuffleAmount) {
                clearInterval(shuffle);
                num++
            }
        }, Time);
    });

    function theAnimation() {
        Order[0].style.transform = "translate(0px, 0px)";
        Order[1].style.transform = "translate(250px, 0px)";
        Order[2].style.transform = "translate(500px, 0px)";
    }

    function outAnimation() {
        document.getElementById("theDiv").classList.add("transition");
    }

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

    function cupClicked() {
        if (num == 1) {
            WinLose.innerHTML = loseOrWin;
            document.getElementById("WinLose").classList.add("fadeIn");
            outAnimation()
        }
    }
}
