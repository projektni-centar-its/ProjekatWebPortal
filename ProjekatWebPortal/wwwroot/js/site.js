/* ---------------------------------------------------
    Sidebar
----------------------------------------------------- */
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

$(document).ready(function () {
    $('.swipeArea').swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingers) {
            if ($(window).width() <= 768) {
                if (phase == "move" && direction == "right") {
                    $('#sidebar').addClass('active');
                    $('#content').addClass('active');
                    return false;
                }

                if (phase == "move" && direction == "left") {
                    $('#sidebar').removeClass('active');
                    $('#content').removeClass('active');
                    return false;
                }
            }
        },
        excludedElements: "label,button,input,select,textarea"
    });
});

/* ---------------------------------------------------
   DataTable
----------------------------------------------------- */
