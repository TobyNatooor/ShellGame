
window.onload = function() {

    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var btn = document.getElementById("btn");

    btn.addEventListener("click", function(){
        box1.style.animation = "theFirst 2s 1";
        box2.style.animation = "theThird 2s 1";
        //box1.classList.add("test");
        //document.getElementById("box1").style.animation = "theSecond";
        console.log("button clicked");
    });

}
