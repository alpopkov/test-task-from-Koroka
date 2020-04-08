$(function() {

  $('.header__btn-menu').on('click', function() {
    $('.menu ul').slideToggle();
  });

  $('#countries').chosen({
    allow_single_deselect: true,
    width: '100%',
    placeholder_text_single: 'Your country'
  });

});