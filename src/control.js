$(document).ready(function () {
    $("#pdt").click(function () {
        var targetElement = document.getElementById('body');
        targetElement.className="pdt-body";
        $("video").hide();
    });
});