$(document).ready(function() {
  $(".main").css("display", "none");
  $(".name").css("display", "none");
  $(".name__project").css("display", "none");
  setTimeout(() => {
    $(".load").css("display", "none");
    $(".main").css("display", "block");
    $(".name").fadeIn(500);
  }, 1500);
  setTimeout(() => {
    $(".name__project").fadeIn(1000);
  }, 1600);
});

const $background = document.querySelector(".background");
const $project_button = document.querySelector(".name__project");
$project_button.addEventListener("click", function() {
  $background.classList.add("full");
  $project_button.classList.add("slide-project");
});
