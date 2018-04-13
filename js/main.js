$(document).ready(function () {

    // when scroll left animate effect
    $(".left").boxLoader({
        direction:"x",
        position: "-50%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "30%"
    });

    // when scroll right animate effect
    $(".right").boxLoader({
        direction:"x",
        position: "50%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "30%"
    });

    // toggle sidebar when button clicked
    $('.sidebar-toggle').on('click', function () {
        $('.sidebar').toggleClass('toggled');
    });

    // auto-expand submenu if an item is active
    var active = $('.sidebar .active');

    if (active.length && active.parent('.collapse').length) {
        var parent = active.parent('.collapse');

        parent.prev('a').attr('aria-expanded', true);
        parent.addClass('show');
    }
});