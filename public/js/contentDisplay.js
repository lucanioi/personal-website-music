let LONG_FADE = 700;
let SHORT_FADE = 200;

const isFirstClick = function(element) {
  return !($(element).hasClass('hasBeenClicked'));
}

const markClicked = function(element) {
  $(element).addClass('hasBeenClicked');
}

const showContent = function(menuItem, fadeInTime = LONG_FADE) {
  targetOf(menuItem).fadeIn(fadeInTime);
}

const fadeOutAllContents = function() {
  $('.content').fadeOut(SHORT_FADE);
}

const hideAllContents = function() {
  $('.content').hide();
}

const targetOf = function(menuItem) {
  return $(menuItem.attr('target'));
}

const getTimeout = function() {
  return isFirstClick('#header') ? 850 : 0;
}

// handles vimeo bug where nordic skater doesn't load clean the first time
const showVimeoContent = function(menuItem) {
  if (isFirstClick(menuItem)) {
    targetOf(menuItem).show();
    setTimeout(function() {
      $('.vimeo-cover').fadeOut(LONG_FADE);
    }, 250)
    markClicked(menuItem);
  } else {
    showContent(menuItem);
  }
}

const isVimeo = function(menuItem) {
  return targetOf(menuItem).hasClass('vimeo')
}

$(document).ready(function() {
  hideAllContents();

  $('.menu-item').on('click', function() {
    fadeOutAllContents();
    var menuItem = $(this);

    setTimeout(function() {
      let showFunc = isVimeo(menuItem) ? showVimeoContent : showContent;
      showFunc(menuItem)
    }, getTimeout());

    markClicked('#header')
  });
})

