const isHeaderCentered = function() {
  return $('#header').hasClass('header-centered');
}

const raiseAndShorten = function() {
  if (isHeaderCentered()) {
    $('#header').toggleClass('header-centered header-raised');
    $('#header').toggleClass('header-tall header-short');
  }
}

const selectMenuItem = function(e) {
  $(e.target).addClass('menu-active');

  $('.menu-item').each(function () {
    var menuHeading = $(this).children()[0];

    if (menuHeading == e.target) { return true; }
    $(menuHeading).removeClass('menu-active');
  })
}

$(document).ready(function() {
  $('.menu-item').on('click', raiseAndShorten);
  $('.menu-item').on('click', selectMenuItem);
})