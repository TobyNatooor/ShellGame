        /*
        num1 = 0;
        num2 = 0;
        document.getElementById("box2").style.backgroundColor = "green";
        document.getElementById("Explanation").style.opacity = "1";
        WinLose.style.opacity = "0";
        */

window.onload = function () {

    let Order = [
        document.getElementById("box1"),
        document.getElementById("box2"),
        document.getElementById("box3"),
        4
    ];
    let WinLose = document.getElementById("WinLose");
    let Stop = 0;
    let num1 = 0;
    let num2 = 0;
    let loseOrWin;

    let Time = 550;
    let shuffleAmount = 10;

    btn.addEventListener("click", function () {
        if (num2 == 1) {
            Order[1].style.backgroundColor = "black";
            document.getElementById("Explanation").style.color = "black";
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
                    num1++
                }
            }, Time);
        }
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

    function btnWhite() {
        document.getElementById("Easy").style.backgroundColor = "white";
        document.getElementById("Medium").style.backgroundColor = "white";
        document.getElementById("Hard").style.backgroundColor = "white";
    }

    document.getElementById("Easy").addEventListener("click", function () {
        btnWhite();
        document.getElementById("Easy").style.backgroundColor = "green";
        Time = 800;
        shuffleAmount = 10;
        num2 = 1;
    });

    document.getElementById("Medium").addEventListener("click", function () {
        btnWhite();
        document.getElementById("Medium").style.backgroundColor = "yellow";
        Time = 500;
        shuffleAmount = 15;
        num2 = 1;
    });

    document.getElementById("Hard").addEventListener("click", function () {
        btnWhite();
        document.getElementById("Hard").style.backgroundColor = "red";
        Time = 350;
        shuffleAmount = 25;
        num2 = 1;
    });

    document.getElementById("restart").addEventListener("click", function () {
        window.location.reload();
    });

    function cupClicked() {
        if (num1 == 1) {
            WinLose.innerHTML = loseOrWin;
            document.getElementById("WinLose").classList.add("fadeIn");
            outAnimation()
        }
    }
}
