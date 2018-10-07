$(document).ready(function() {
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

  // Cloudinary:
  // function Cloudinary() {
  //   for (var t = 0; t < document.images.length; t++)
  //     (!(e = document.images[t]).complete || (void 0 !== e.naturalWidth && 0 == e.naturalWidth)) &&
  // 			(console.log(document.images[t]),
  // 			document.images[t].attributes['data-img'] &&
  // 				(document.images[t].src = document.images[t].attributes['data-img'].value),
  // 			document.images[t].attributes['data-width'] &&
  // 				(document.images[t].width = document.images[t].attributes['data-width'].value),
  // 			document.images[t].attributes['data-height'] &&
  // 				(document.images[t].height = document.images[t].attributes['data-height'].value));
  //   var e;
  // }
  // Cloudinary();
});
