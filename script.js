
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
        4];
    let Explanation = document.getElementById("Explanation");
    let WinLose = document.getElementById("WinLose");
    let Time = 600;
    Order[0].style.transitionDuration = "0.5s";
    Order[1].style.transitionDuration = "0.5s";
    Order[2].style.transitionDuration = "0.5s";
    Explanation.style.transitionDuration = "2s";

    btn.addEventListener("click", function () {
        Order[1].style.backgroundColor = "black";
        Explanation.style.color = "black";
        for (let i = 0; 1 > i; i++) {
            if (Math.floor(Math.random() * 2) == 0) {
                Order[3] = Order[0];
                Order[0] = Order[1];
                Order[1] = Order[3];
                console.log("test");
            } else {
                Order[3] = Order[1];
                Order[1] = Order[2];
                Order[2] = Order[3];
                console.log("test");
            }
            //setTimeout(function () {
                theAnimation()
                Time += 600;
                console.log(Time);
            //}, Time);
        }
    });
    function theAnimation() {
        Order[0].style.transform = "translate(0px, 0px)";
        Order[1].style.transform = "translate(250px, 0px)";
        Order[2].style.transform = "translate(500px, 0px)";
        console.log("animation");
    }

    function outAnimation() {
        document.getElementById("box3").classList.add("transistion");
        document.getElementById("box1").classList.add("transistion");
    }

    Order[0].addEventListener("click", function () {
        WinLose.innerHTML = "You lose!";
        document.getElementById("WinLose").classList.add("fadeIn");
        outAnimation()
    });
    Order[1].addEventListener("click", function () {
        WinLose.innerHTML = "You win!";
        document.getElementById("WinLose").classList.add("fadeIn");
        outAnimation()
    });
    Order[2].addEventListener("click", function () {
        WinLose.innerHTML = "You lose!";
        document.getElementById("WinLose").classList.add("fadeIn");
        outAnimation()
    });
}
