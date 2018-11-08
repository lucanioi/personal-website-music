var firstClick = true;

const showContent = function(menuItem) {
  targetOf(menuItem).fadeIn(800);
}

const hideAllContents = function() {
  $('.content').hide();
}

const targetOf = function(menuItem) {
  return $(menuItem.attr('target'));
}

const getTimeout = function() {
  return firstClick ? 1000 : 0;
}

$(document).ready(function() {
  hideAllContents();

  $('.menu-item').on('click', function() {
    hideAllContents();
    var menuItem = $(this);

    setTimeout(function() {
      showContent(menuItem);
    }, getTimeout());

    firstClick = false;
  });
})

