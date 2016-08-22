$(function() {

  var closeActiveSelect = function () {
    $('.js-select-box').removeClass('is-active');
  };

  var closeActive = function () {
    $('[data-dd-box].is-active').removeClass('is-active');
    $('[data-dd-holder].is-active').removeClass('is-active');
    $('html').removeClass('is-overflowed-mobile');
  };

  $('[data-dd-holder]').click(function(e) {
      e.stopPropagation();
  });

  $('[data-dd-link]').on('click', function (e) {
    var $ddLink = $(e.currentTarget).data('dd-link');
    var $ddBox = $('[data-dd-box= "'+ $ddLink +'"]');
    closeActiveSelect();
    if ($ddBox.hasClass('is-active')) {
      $ddBox.removeClass('is-active');
      $('[data-dd-holder= "'+ $ddLink +'"]').removeClass('is-active');
      $('html').removeClass('is-overflowed-mobile');
    } else {
      closeActive();
      $ddBox.addClass('is-active');
      $('[data-dd-holder= "'+ $ddLink +'"]').addClass('is-active');
      $('html').addClass('is-overflowed-mobile');
    }

  });

  $('[data-dd-close-link]').on('click', function (e) {
    var $ddLink = $(e.currentTarget).data('dd-close-link');
    $('[data-dd-box= "'+ $ddLink +'"]').removeClass('is-active');
    $('[data-dd-holder= "'+ $ddLink +'"]').removeClass('is-active');
    $('html').removeClass('is-overflowed-mobile');
  });

  $(document.body).on('click', function (e) {
    var $target = $(e.target);
    if (!($target.is('[data-dd-box]') || $target.closest('[data-dd-box]').length > 0)) {
      closeActive();
    }
  });

});