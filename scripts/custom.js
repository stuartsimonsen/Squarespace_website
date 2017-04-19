$(document).ready(function() {

  $('.content-container').addClass('loaded');
  $('.folder').addClass('folder-closed');
  $('.subnav').slideUp();
  
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
