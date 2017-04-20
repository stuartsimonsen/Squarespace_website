
$(document).ready(function() {

  $('img').addClass('loaded'); // Make sure images get the loaded class
  $('.content-container').addClass('loaded'); // Show main content area
  $('.folder').addClass('folder-closed'); // Close folder navigations
  $('.subnav').slideUp(); // Close folder navigations
  $('.loading-overlay').delay(800).fadeOut(); // Hide loading overlay once content is loaded
  
});

// Show/Hide mobile nav on tap
$('.mobile-nav-toggle').click( function() {
  $('body').toggleClass('mobile-nav-open');
});
// Hide mobile nav when tapping outside the nav area
$('.body-overlay').click( function() {
  $('body').removeClass('mobile-nav-open');
});
// Show/Hide folder subnavs
$('.folder .folder-toggle-label').click( function() {
  $(this).parent().toggleClass('folder-closed');
  $(this).next().slideToggle();
});
