$(document).ready(function () {
  $('.tabs-nav li:first-child a').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.tabs-nav li a').click(function(){
  $('.tabs-nav li a').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).attr('href');
  $(activeTab).fadeIn();
  return false;
});
});