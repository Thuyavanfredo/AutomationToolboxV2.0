$(document).ready(function () {
    var btn = document.getElementById("btn");
    var btnText = document.getElementById("btnText");
    btn.onclick = function() {
    btnText.innerHTML = "Script generated";
    btn.classList.add("active");
    }
    var btn = document.getElementById("btn1");
    var btnText = document.getElementById("btnText1");
    btn.onclick = function() {
    btnText.innerHTML = "Cleared";
    btn.classList.add("active1");
    }
});
