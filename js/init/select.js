$(function() {

  var closeActive = function () {
    $('[data-dd-box].is-active').removeClass('is-active');
    $('[data-dd-holder].is-active').removeClass('is-active');
  };

  var $selectItemCurrent = $('.js-select-current-item'),
      $selectItem = $('.js-select-item');


  $('.js-select-box').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  $selectItemCurrent.on('click', function() {
    var $selectBox = $(this).closest('.js-select-box'),
        $selectBoxDocument = $(document).find('.js-select-box');
    var isActive = $selectBox.hasClass('is-active');
    $selectBoxDocument.removeClass('is-active');
    closeActive();
    if (isActive) {
      $selectBox.removeClass('is-active');
    }
    else {
      $selectBox.addClass('is-active');
    }

  });
  
  $selectItem.on('click', function() {
    var $this = $(this),
        $selectBox = $this.closest('.js-select-box');
    
    $this.closest($selectBox).find($selectItem).removeClass('is-active');
    $this.addClass('is-active');
    
    $selectBox.find('.js-select-current-item').html($(this).html());
    $selectBox.find('.js-select-input').val($(this).data('val')).trigger('change');
    $selectBox.removeClass('is-active');

  });

  $('.js-select-close').on('click', function () {
    $(this).closest('.js-select-box').removeClass('is-active');
  });

  $(document.body).on('click', function (e) {
    var $target = $(e.target);
    if (!($target.is('.js-select-list') || $target.closest('.js-select-list').length > 0)) {
      $('.js-select-box.is-active').removeClass('is-active');
    }
  });


  // var hideDdContainer = function (e) {
  //   var container = $(".js-select-box");
  //
  //   if (!container.is(e.target)
  //     && container.has(e.target).length === 0) {
  //     container.removeClass('is-active');
  //   }
  // };
  // $(document).mousedown(function (e) {
  //   hideDdContainer(e);
  // });
  //
  // $(document).bind('touchstart', function (e) {
  //   hideDdContainer(e);
  // });

});