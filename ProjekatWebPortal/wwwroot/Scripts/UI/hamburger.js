$(document).ready(function () {

    $('.LeftBar:first').css("position", "fixed");
    //$('.LeftBar:first').css({ 'position': 'fixed', 'transition': 'width .3s ease-in-out, left .3s ease-in-out' });
    //$('#gornjaNavigacija').css("transition", ".3s");
    //$('.LeftBar:first').css('transition', 'width .3s ease-in-out, left .3s ease-in-out' );
    var sirinaNava;

    function sidebarTip() {
        sirinaNava = $('.LeftBar:first').offset().left;

        if ($(window).width() < 1025 && sirinaNava == 0) {
            $('#sredina').css({ 'width': "100%" });
            $('.LeftBar:first').css({ "z-index": "999" });

        } else if ($(window).width() > 1025 && sirinaNava == 0) {
            $('#sredina').css({ 'width': "calc(100% - 338px)" });
            $('.LeftBar:first').css({ "z-index": "0" });
        }
    }
    sidebarTip();
    $(window).resize(sidebarTip);

    //window.onresize = function () {

    //    sirinaNava = $('.LeftBar:first').offset().left;

    //    if ($(window).width() < 1025 && sirinaNava == 0) {
    //        $('#sredina').css({ 'width': "100%" });
    //        $('.LeftBar:first').css({ "z-index": "999" });

    //    } else if ($(window).width() > 1025 && sirinaNava == 0) {
    //        $('#sredina').css({ 'width': "calc(100% - 338px)" });
    //        $('.LeftBar:first').css({ "z-index": "0" });
    //    }

    //}

    //$(window).trigger('resize');

    //ako ne radi brisi sve ispod mene do komentara kraj
    function zatvaranje() {
        $('.hamburger-menu-toggle-otvoren').removeClass('hamburger-menu-toggle-otvoren');
        //$('#gornjaNavigacija').css({ 'transition': '.3s', 'margin-left': "0px", 'width': "100%" });
        $('#gornjaNavigacija').css({ 'margin-left': "0px", 'width': "100%" });
        //$('#sredina').css({ 'width': "100%" });
        $('.LeftBar:first').css({ 'width': "0" });
        console.log("promenio sam sirinu sredine");
        $('div#gornjaNavigacija a#nazad').css({ 'margin-left': "70px" });
        $('.LeftBar:first').addClass('notActive');
        $('div#sredina').css("width", "100%");
        sessionStorage.setItem("hamburgerState", "zatvoren");
    }

    function otvaranje() {
        if ($(window).width() < 1025) {
            $('#sredina').css({ 'width': "100%" });
            $('.LeftBar:first').css({ "z-index": "999" });
        }
        else {
            //$('#gornjaNavigacija').removeAttr("style");
            $('#gornjaNavigacija').css({ 'margin-left': '338px', 'width': 'calc(100% - 338px)' });
            $('#sredina').removeAttr("style");
            $('div#gornjaNavigacija a#nazad').css({ 'margin-left': "29px" });
            $('.LeftBar:first').css({ "z-index": "1" });
        }

        $('.LeftBar:first').css({ 'width': "338px" });
        $('#hamburger-menu-toggle').addClass('hamburger-menu-toggle-otvoren');
        $('.LeftBar:first').removeClass('notActive');
        sessionStorage.setItem("hamburgerState", "otvoren");
    }
    //kraj

    //PROVERAVANJE HAMBURGER STATE-A IZ STORAGE-A NA LOAD I OTVARANJE/ZATVARANJE PO POTREBI
    function hamburgerStateStorage() {
        if (sessionStorage.getItem('hamburgerState') == null) {
            if ($('.LeftBar:first').offset().left == 0) {
                sessionStorage.setItem("hamburgerState", "otvoren");
            }
            else if ($('.LeftBar:first').offset().left == -338) {
                sessionStorage.setItem("hamburgerState", "zatvoren");
            }
            else {
                console.log('nisam uspeo da popunim prazan sessionStorage sa trenutnim stanjem sidebara');
            }
        }
        else {
            console.log('state hamburgera je ' + sessionStorage.getItem('hamburgerState'));

        }
    }
    hamburgerStateStorage();

    function navPoStorageu() {
        if (sessionStorage.getItem('hamburgerState') == "zatvoren") {
            zatvaranje();
        }

        else if (sessionStorage.getItem('hamburgerState') == "otvoren") {
            otvaranje();
        }

        else {
            console.log(sessionStorage.getItem('hamburgerState'));
        };
    }
    navPoStorageu();

    var resp = window.matchMedia("(max-width: 930px)")
    zatvaranjeR(resp)
    resp.addListener(zatvaranjeR)
    function zatvaranjeR(resp) {
        if (resp.matches) {
            $('.hamburger-menu-toggle-otvoren').removeClass('hamburger-menu-toggle-otvoren');
            //$('#gornjaNavigacija').css({ 'transition': '.3s', 'margin-left': "0px", 'width': "100%" });
            $('#gornjaNavigacija').css({ 'margin-left': "0px", 'width': "100%" });
            //$('#sredina').css({ 'width': "100%" });
            $('.LeftBar:first').css({ 'width': "0" });
            console.log("promenio sam sirinu sredine");
            $('div#gornjaNavigacija a#nazad').css({ 'margin-left': "70px" });
            $('.LeftBar:first').addClass('notActive');
            $('div#sredina').css("width", "100%");
            sessionStorage.setItem("hamburgerState", "zatvoren");
        }

    }

   

    $('#hamburger-menu-toggle').unbind('click');
    $('#hamburger-menu-toggle').bind('click', function () {
        //$('.LeftBar:first').toggleClass('notActive');
        sirinaNava = $('.LeftBar:first').offset().left;

        if (sirinaNava == 0) {  //ZATVARANJE
            //$(this).removeClass('hamburger-menu-toggle-otvoren');
            //$('#gornjaNavigacija').css({ 'transition': '.3s', 'margin-left': "0px", 'width': "100%" });
            //$('#sredina').css({ 'width': "100%" });
            //$('.LeftBar:first').css({ 'width': "0" });
            //$('div#gornjaNavigacija a#nazad').css({ 'margin-left': "70px" });
            //sessionStorage.setItem("hamburgerState", "zatvoren");
            zatvaranje();
        }

        else if (sirinaNava == -338) { //OTVARANJE
            //if ($(window).width() < 1025) {
            //    $('#sredina').css({ 'width': "100%" });
            //    $('.LeftBar:first').css({ "z-index": "999" });
            //}
            //else {
            //    $('#gornjaNavigacija').removeAttr("style");
            //    $('#sredina').removeAttr("style");
            //    $('div#gornjaNavigacija a#nazad').css({ 'margin-left': "29px" });
            //    $('.LeftBar:first').css({ "z-index": "1" });
            //}

            //$('.LeftBar:first').css({ 'width': "338px" });
            //$(this).addClass('hamburger-menu-toggle-otvoren');
            //sessionStorage.setItem("hamburgerState", "otvoren");
            otvaranje();
        }
        console.log(sessionStorage.getItem('hamburgerState'));

    });

    window.onscroll = function () {
          
        var scroll = $(window).scrollTop();
        if(scroll>45)
        {
            $('#hamburger-menu-toggle .bar').css('background', '#e21b22');
        }
        else
        {
            $('#hamburger-menu-toggle .bar').css('background', '#FFF');
        }
    
    };


    window.onresize = function () {

        if ($('#gornjaNavigacija').width() < 780) {
            $('#gornjaNavigacija p:first, #gornjaNavigacija img:eq( 1 )').css({ 'display': "none" });

            //$('#gornjaNavigacija img:eq( 1 )');

        } else if ($('#gornjaNavigacija').width() > 780) {
            $('#gornjaNavigacija p:first, #gornjaNavigacija img:eq( 1 )').show();
        }

    }


    setTimeout(function () {
        $('#gornjaNavigacija').css("transition", ".3s ease-in-out");
        $('.LeftBar:first').css('transition', 'width .3s ease-in-out, left .3s ease-in-out');
    }, 2000);
});

