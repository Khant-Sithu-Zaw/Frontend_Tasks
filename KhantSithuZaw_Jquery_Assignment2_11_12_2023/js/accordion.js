$(document).ready(function () {
  $(function () {
    $(".accordion-content").css("display", "none");
    $(".accordion-title").click(function () {
      $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
    });
  });
});