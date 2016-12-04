// JavaScript Document


function initializeY() {
  var y_logo_path_anim = "draw-y 3s linear 1s forwards, fade-in-y 2.5s ease-out 1s forwards";
  $("#y-logo-path-1").css("animation",y_logo_path_anim);
  $("#y-logo-path-1-glow").css("animation",y_logo_path_anim);
  $("#y-logo-path-2").css("animation",y_logo_path_anim);
  $("#y-logo-path-2-glow").css("animation",y_logo_path_anim);
  $("#y-logo-background-path").css("animation","fill-y 3.5s ease-out 1s forwards");
  $("#y-circle-path").css("animation","fade-in-y-circle 3s linear forwards");
  
  setTimeout(function () {
    $("#y-circle-path").css("opacity", "1");
  }, 3000);
  setTimeout(hideLoadingY, 4000);
}

function showLoadingY() {
  $("#y-circle-path").css("display", "");
  $("#y-circle-path").css("opacity", "0");
  $("#y-circle-path").css("animation","fade-in-y-circle 0.5s linear forwards");
  setTimeout(function () {
    $("#y-circle-path").css("opacity", "1");
  }, 3000);
}

function hideLoadingY() {
  $("#y-circle-path").css("animation", "fade-out-y-circle 0.5s linear forwards");
  setTimeout(function () {
    $("#y-circle-path").css("display", "none");
  }, 500);
}

$(document).ready(function () {
  initializeY();
});