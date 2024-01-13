$(document).ready(function () {
  $(".menu").click(function () {
    $(this).toggleClass("open");
    $("header nav").toggleClass("open");
  });
});