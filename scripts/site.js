
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */

(function() {
  'use strict';

  function getItem(object) {
    return document.querySelectorAll(object);
  }

  function loadAllContent() {
    var content = getItem('.content-container');
    var folders = getItem('.folder');
    var subnavs = getItem('.subnav');
    var overlay = getItem('.loading-overlay');
    for (var i = 0; i < folders.length; i++ ) {
      folders.addClass('folder-closed');
      subnavs.slideUp();
    }
    for (var i = 0; i < content.length; i++ ) {
      content.addClass('loaded');
      overlay.delay(800).fadeOut();
    }
  }

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
    images.addClass('loaded'); // Make sure images get the loaded class
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());

// Show/Hide mobile nav on tap
$( '.mobile-nav-toggle' ).click( function() {
  $( 'body' ).toggleClass( 'mobile-nav-open' );
} );

// Hide mobile nav when tapping outside the nav area
$( '.body-overlay' ).click( function() {
  $( 'body' ).removeClass( 'mobile-nav-open' );
} );

// Show/Hide folder subnavs
$( '.folder .folder-toggle-label' ).click( function() {
  $( this ).parent().toggleClass( 'folder-closed' );
  $( this ).next().slideToggle();
} );
