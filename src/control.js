$(document).ready(function () {
    $("#pdt").click(function () {
        $(".body").css({
            "background-image": "none",
            "width": "625px",
            "transition":"all 0.5s linear",
            "transform": "translateX(180px)"
        });
        $("video").hide();
        $(".pdt-btns").show();
        $(".spec-btns").hide();
        $(".da-btns").hide();
    });
    $("#spec").click(function () {
        var targetElement = document.getElementById('body');
        targetElement.className="pdt-body";
        $("video").hide();
        $(".pdt-btns").hide();
        $(".spec-btns").show();
        $(".da-btns").hide();
    });
    $("#da").click(function () {
        var targetElement = document.getElementById('body');
        targetElement.className="pdt-body";
        $("video").hide();
        $(".pdt-btns").hide();
        $(".spec-btns").hide();
        $(".da-btns").show();
    });
});