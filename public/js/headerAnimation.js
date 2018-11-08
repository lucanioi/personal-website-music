const isHeaderCentered = function() {
  return !($('#header').hasClass('header-raised'));
}

const isHeaderRaised = function() {
  return $('#header').hasClass('header-centered');
}

const raiseAndShorten = function() {
  if (isHeaderCentered()) {
    $('#header').toggleClass('header-centered header-raised');
    $('#header').toggleClass('header-tall header-short');
  }
}

const selectMenuItem = function(e) {
  $('.menu-item').each(function () {
    var menuHeading = $(this).children()[0];
    $(menuHeading).removeClass('menu-active');
  })

  $(e.target).addClass('menu-active');
}

$(document).ready(function() {
  $('.menu-item').on('click', raiseAndShorten);
  $('.menu-item').on('click', selectMenuItem);
})