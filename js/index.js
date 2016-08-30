// Navbar scrollspy
var navHeight = 64;
$('body').scrollspy({target: '.navbar-fixed-top', offset: navHeight + 10});

/*
Make sure fixed background mirrors the header size nicely

Note: `background-attachment: fixed` has dumb side-effects when
used with `background-size: cover` which is why it wasn't used
*/
var $header = $("header");
var $background = $header.children(".background");
var headerHeight, prevHeaderHeight;

function adjustBackground() {
  headerHeight = $header.outerHeight();
  if (headerHeight !== prevHeaderHeight) {
    $background.css("height", headerHeight);
    prevHeaderHeight = headerHeight;
  }
}

$(window).resize(adjustBackground);
adjustBackground();