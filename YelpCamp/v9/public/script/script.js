$(document).ready(function() {
    $('body').addClass('js');
    let $menu = $('#menu'),
        $menulink = $('.menu-link');

    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
        // alert('he');
    });

    ($('.grid').length <= 3) ? $('.section-grid').css({'justify-content': 'flex-start'}) :
        $('.section-grid').css({'justify-content': 'space-between'});
});