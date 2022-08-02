$(function () {

    var sekcija = '';
    var idSekcije = sessionStorage.getItem('idSekcije');


    var link = '';
    var idLinka = sessionStorage.getItem('idLinka');

    if (idSekcije) {

        $(".ListaNav").filter($("#" + idSekcije)).addClass('aktivnaSekcija').siblings().removeClass('aktivnaSekcija');



    }




    $('.ListaNav').on('click', function () {
        sessionStorage.setItem('aktivnaSekcija', sekcija);
        sessionStorage.setItem('idSekcije', $(this).attr('id'));

        $(this).addClass('aktivnaSekcija').siblings().removeClass('aktivnaSekcija');
    });

    $('.ListaNav li:not(.naslov) p').on('click', function () {

        sessionStorage.setItem('aktivanLink', link);
        sessionStorage.setItem('idLinka', $(this).attr('id'));

        $(this).addClass('aktivanLink').siblings().removeClass('aktivanLink');
    });


    if (idLinka) {
        console.log($(".ListaNav li:not(.naslov) p").filter($("#" + idLinka)));

        $(".ListaNav li:not(.naslov) p").filter($("#" + idLinka)).addClass('aktivanLink').siblings().removeClass('aktivanLink');

    }
});

