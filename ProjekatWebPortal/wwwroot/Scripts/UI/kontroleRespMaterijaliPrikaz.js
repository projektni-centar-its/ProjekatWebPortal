$(document).ready(function () {

    //kupljenje vrednosti
    var sredinaSirina = $('#sredina').width();

    var LeftBar = $('.LeftBar:first');

    //LeftBar.css("position", "fixed");

    function triTackeKontrole() {
        if ((sredinaSirina < 1130 && sredinaSirina > 958) || sredinaSirina < 555) {
            $(".delete, .uredi, .komentarisi").css('display', 'none');
            $(".triTackeKontrole").css('display', 'inline-block');
        }
            //else if (sredinaSirina > 1130) {
        else {
            $(".triTackeKontrole").css('display', 'none');
            $(".delete, .uredi, .komentarisi").css('display', 'inline-block');
        }
    }
    triTackeKontrole();

    function sakrijFormat() {
        sredinaSirina = $('#sredina').width();
        //console.log("（╯°□°）╯︵(\ .o.)\ sakrio/prikazao sam kartice" + "    sredina sirina je  " + sredinaSirina);
        if (sredinaSirina < 450) {
            $('.karticaFormat').css({ 'display': 'none', 'overflow': 'hidden' });
            $('.karticaTekts').css("width", "100%");
        }
        else {
            $('.karticaFormat').removeAttr("style");
            $('.karticaTekts').removeAttr("style");
        }
    };
    setTimeout(sakrijFormat, 350); // ovaj  broj treba povecati ako se ne prikaze/sakrije materijal format na kartici pri loadu
    //sakrijFormat();

    //RED MANJE OPISA KAD JE NASLOV U 2 REDA i OBRNUTO
    function brojRedovaUopisuMat() {
        $('.kartica').each(function () {

            if ($(this).find('h2').height() > 28) {
                if ($(window).width() > 1600) {
                    $(this).find('.opis').css({ "min-height": "23px", "max-height": "44px"});
                    //console.log($(this) + 'smanjio opis za red, ekran je veci od 1600');
                }

                else if ($(window).width() <= 1600) {
                    $(this).find('.opis').css({ "min-height": "23px", "max-height": "60px"});
                    //console.log($(this) + 'smanjio opis za red, ekran je manji od 1600');
                }
            }
            else if ($(this).find('h2').height() < 28) {
                if ($(window).width() > 1600) {
                    $(this).find('.opis').css({ "min-height": "23px", "max-height": "63px" });
                    //console.log($(this) + 'smanjio opis za red, ekran je veci od 1600');
                }

                else if ($(window).width() <= 1600) {
                    $(this).find('.opis').css({ "min-height": "23px", "max-height": "83px" });
                    //console.log($(this) + 'smanjio opis za red, ekran je manji od 1600');
                }
            }
            else { console.log('nisam uradio nista'); }
        });
    }
    setTimeout(brojRedovaUopisuMat(), 100);
    

    $(window).on('resize', function () {
        sakrijFormat();
        brojRedovaUopisuMat();

        sredinaSirina = $('#sredina').width();

        triTackeKontrole();
        //savrsena sirina za uslov je 1153px TAKODJE VAR UZIMA SIRINU BEZZ MARGINA I PADDINGA, OVO SLUZI ZA STAVLJANJE KARTICA U 2 REDA
        if (sredinaSirina < 958 && sredinaSirina > 754) {
            //$('div.kartica').css('width', '100%').css('width', '-=55px');
            $('div.kartica').css("width", "calc(100% - 68px)");
        } else if (sredinaSirina < 754) {
            //$('div.kartica').css("width", "calc(100% - 70px)");
            console.log("yahoo");
            $('div.kartica').css("width", "100%");
        } else if (sredinaSirina > 958) {
            $('div.kartica').css("width", "calc(50% - 55px)");
        }
    });

    //kartice responsive

    $('#hamburger-menu-toggle').click(function () {
        $this = $(this);
        setTimeout(function () {
            $(window).trigger('resize');
        }, 300);
    });

    //kraj kartica responsive


    //OTVARANJE ZATVARANJE NAPREDNE PRETRAGE
    $('#lupaWrap').click(function () {
        if ($('#naprednaPretraga').css('transform') !== "matrix(1, 0, 0, 1, 0, -65)") {
            //$('#naprednaPretraga').toggle("blind", 200);
            $('#naprednaPretraga').css({ 'transform': 'translate(0, -65px)', 'margin-bottom': '0' });
        }
        else {
            $('#naprednaPretraga').css({ 'transform': 'translate(0, 0)', 'margin-bottom': '69px' });
        }
    });

    //trigger resiza da bi se resize funkcija za kartice runovala
    $(window).trigger('resize');
});