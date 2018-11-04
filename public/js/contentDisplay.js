const hideContents = function() {
  $('#film-score').hide();
}

const displayFilmScore = function() {
  $('#film-score').fadeIn(800);
}

$(document).ready(function() {
  hideContents();
  $('#film-score-button').on('click', function() {
    setTimeout(displayFilmScore, 600);
  })
})