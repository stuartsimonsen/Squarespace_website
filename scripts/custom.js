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
$('.folder-closed .folder-toggle-label').click( function() {
  $(this).parent().removeClass('folder-closed').addClass('folder-open');
});
$('.folder-open .folder-toggle-label').click( function() {
  $(this).parent().removeClass('folder-open').addClass('folder-closed');
});
