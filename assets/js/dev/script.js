$(document).ready(function() {
  console.log('locked and loaded 🚀');

  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  // if (Modernizr.mq('only all')) {
  //   $('html').addClass('mq');
  // } else {
  //   $('html').addClass('no-mq');
  // }

  // Listen to a test, give it a callback
  Modernizr.on('flexbox', function(result) {
    if (result) {
      console.log('flexbox: The test passed!');
    } else {
      console.log('flexbox: The test failed!');
    }
  });

  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
  // Carousel revolver
  var options = {
    // The transition speed if the user drags the panels
    draggingMS: 300,

    // The transition speed if the user selects a pagination item
    controlsMS: 800,

    // False if no autoplay, or a duration in milliseconds
    autoplayMS: 5000,

    returnToStart: true,
    returnToStartMS: 1000,

    // Whether or not hovering will cause the autoplayMS to pause
    stopOnHover: true,

    // Should we have previous and next buttons, and what should they say?
    navigation: [ '&larr;', '&rarr;' ],

    // Should we have pagination, and should it include numbers in the html?
    pagination: true,
    paginationNumbers: false,

    // The number of items to show within the revolver
    items: 3,

    // An array of [pixel width, visible items] or false if
    // we shouldn't be responsive
    breakpoints: [ [ 1199, 4 ], [ 979, 3 ], [ 768, 2 ], [ 479, 1 ] ]
  };
  var options2 = {
    draggingMS: 300,
    controlsMS: 800,
    autoplayMS: 5000,
    returnToStart: true,
    returnToStartMS: 1000,
    stopOnHover: true,
    navigation: [ '&larr;', '&rarr;' ],
    pagination: true,
    paginationNumbers: false,
    items: 1
  };
  if ($('.carousel-revolver').length) {
    $('.carousel-revolver').revolver(options);
  }
  if ($('.carousel-revolver-gallery').length) {
    $('.carousel-revolver-gallery').revolver(options2);
  }
  // lightbox
  if ($('.image-link').length) {
    $('.image-link').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }
});
