$(document).ready(function() {

  $('img').addClass('loaded');
  $('.content-container').addClass('loaded');
  $('.folder').addClass('folder-closed');
  $('.subnav').slideUp();
  $('.loading-overlay').delay(800).fadeOut();
  
});

$('.mobile-nav-toggle').click( function() {
  $('body').toggleClass('mobile-nav-open');
});
$('.body-overlay').click( function() {
  $('body').removeClass('mobile-nav-open');
});
$('.folder .folder-toggle-label').click( function() {
  $(this).parent().toggleClass('folder-closed');
  $(this).next().slideToggle();
});
