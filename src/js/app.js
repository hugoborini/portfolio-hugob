$(document).ready(function() {
  $(".main").css("display", "none");
  $(".name").css("display", "none");
  $(".name__project").css("display", "none");
  $(".sale-temps").css("display", "none");
  $(".header").css("display", "none");
  $(".display").css("display", "none");
  $(".sale-temps__descrip").css("display", "none");
  setTimeout(() => {
    $(".load").css("display", "none");
    $(".main").css("display", "block");
    $(".name").fadeIn(500);
    $(".header").fadeIn(500);
  }, 1500);
  setTimeout(() => {
    $(".name__project").fadeIn(1000);
  }, 1600);

  $(".name__project").click(function() {
    $(".name__first").fadeOut(800);
    $(".name__last").fadeOut(800);
    setTimeout(() => {
      $("body").addClass("fill-blue");
      $(".name").css("display", "none");
      $(".sale-temps").fadeIn(1000);
      $(".sale-temps__title").addClass("flex-slide");
    }, 800);
    setTimeout(() => {
      $(".name").css("display", "none");
      $(".display").fadeIn(800);
    }, 1500);
    setTimeout(() => {
      $(".sale-temps__descrip").fadeIn(1000);
      $(".sale-temps__descrip").addClass("slide-left");
    }, 1700);
  });
});

const $background = document.querySelector(".background");
const $project_button = document.querySelector(".name__project");
$project_button.addEventListener("click", function() {
  $background.classList.add("full");
  $project_button.classList.add("slide-project");
});
