$(document).ready(function() {

  $('.content-container').addClass('loaded');
  $('.folder').addClass('folder-closed');
  
});

$('.mobile-nav-toggle').click( function() {
  $('body').toggleClass('mobile-nav-open');
});
$('.body-overlay').click( function() {
  $('body').removeClass('mobile-nav-open');
});
$('.folder-closed').click( function() {
  $('.folder').removeClass('folder-closed').addClass('folder-open');
});
$('folder-open').click( function() {
  $('.folder').removeClass('folder-open').addClass('folder-closed');
});
