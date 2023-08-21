$(document).ready(function () {
  var btn = document.getElementById("btn");
  var btnText = document.getElementById("btnText");

  btn.onclick = function () {
    btnText.innerHTML = "Script ready";
    btn.classList.add("active");
    setTimeout(function(){
    btn.classList.remove("active");
    btnText.innerHTML = "Generate";  
  }, (5*1000));
  }
});
