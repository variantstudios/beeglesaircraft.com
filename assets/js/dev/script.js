function ready() {
  console.log('locked and loaded 🚀');

  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

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
}
