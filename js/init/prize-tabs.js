$(function () {

    $('.js-prize-tabs').tabs();

    var i = 0,
        size = $('.js-prize-tabs .ui-tabs-panel').size() - 1;

    var activateTab = function(el, i) {
        $(el).closest('.js-prize-tabs').tabs('option', 'active', i);
    };

    $('.js-prize-tabs').on( 'tabsactivate', function( event, ui ) {
        i = ui.newTab.index();
    } );

    $('.js-tab-next').on('click', function() {
        if (i != size) {
            i++;
            activateTab(this, i);
        } else {
            i = 0;
            activateTab(this, i);
        }
    });

    $('.js-tab-prev').on('click', function() {
        if (i != 0) {
            i--;
            activateTab(this, i);
        } else {
            i = size;
            activateTab(this, i);
        }
    });

});