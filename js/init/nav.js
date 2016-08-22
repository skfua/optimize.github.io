$(function () {
    $('.js-nav-btn').on('click', function(){
        $(this).toggleClass('is-open');
        $('.js-nav').toggleClass('is-open');
    });

    $(document.body).on('click', function (e) {
        var $target = $(e.target);
        if (!($target.is('.js-nav-btn') || $target.closest('.js-nav-btn').length > 0)) {
            $('.js-nav-btn').removeClass('is-open');
            $('.js-nav').removeClass('is-open');
        }
    });
});