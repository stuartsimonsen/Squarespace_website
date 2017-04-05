$(document).ready(function() {

  $('.content-container').addClass('loaded');
  
});

$('.mobile-nav-toggle').click( function() {
  $('body').toggleClass('mobile-nav-open');
});
$('.body-overlay').click( function() {
  $('body').removeClass('mobile-nav-open');
});
