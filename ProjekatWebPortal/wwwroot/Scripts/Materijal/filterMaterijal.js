$(document).ready(function () {
    $(".select2materijali, .select2formati").on("change", filterMaterijali);
    $("ul.customLista li").on("click", filterMaterijali);
    //$(document).delegate(".customLista li", "click", filterMaterijali);

    function filterMaterijali() {
        var url = window.location.href;
        var args = url.split('/');

        var modulId = args[args.length - 1];
        var sort = '';
        var filterDatumSpanText = $('.datum').next('.customSelect').find('span').text();

        var novijeStarije = $(".customLista li");
        for (var i = 0; i < novijeStarije.length; i++) {
            if (novijeStarije[i].textContent === filterDatumSpanText) {
                sort = novijeStarije[i].id;
            }
        }

        var tipovi = [];
        var formati = [];

        //OVE DVE METODE VRACAJU NAZIVE
        //$('.select2materijali').next().find('.select2-selection__choice').each(function (index, element) {
        //    var tip = $(this).attr('title');
        //    tipovi.push(tip);
        //});

        //$('.select2formati').next().find('.select2-selection__choice').each(function (index, Element) {
        //    var format = $(this).attr('title');
        //    formati.push(format);
        //});

        //OVE DVE METODE VRACAJU IDeve i Stringove sukcesivno (nije radilo kada se stavi $(this)[index].value)
        $(".select2materijali option:selected").each(function (index, Element) {
            tipovi.push($(".select2materijali option:selected")[index].value);
        });
        $(".select2formati option:selected").each(function (index, element) {
            formati.push($(".select2formati option:selected")[index].value);
        });
        //console.log(formati);
        //console.log(tipovi);

        if (sort === "opadajuce") sort = 'opadajuce';
        else if (sort === "rastuce") sort = 'rastuce';
        else sort = '';
        if (tipovi === null) tipovi = $(".select2materijali option");
        if (formati === null) formati = $(".select2formati option");

        $.ajax({
            method: 'GET',
            url: '/Materijal/MaterijaliPrikaz',
            data: {
                id: modulId,
                sort: sort,
                tipovi: tipovi,
                formati: formati
            },
            traditional: true,
            beforeSend: function () {
                $('#sredina').css({
                    'filter': 'blur(10px)', //stavio sam ti na 0 jer je jos scuffed
                    'transition': 'all 0.3s'
                });
            },
            success: function (data) {
                tipovi = [];
                formati = [];
                sort = "";
                $('.kartica').remove();
                $('#sredina').append(data);
                $('#sredina').css('filter', 'blur(0)');
                //$('#sredina').css('filter', 'blur(0)').html(data);
                //$('.kartica').each(function (index, element) {
                //    var kartica = $(this);

                //    var materijalId = data[index].materijalId;
                //    var materijalNaslov = data[index].materijalNaslov;
                //    var materijalOpis = data[index].materijalOpis;
                //    var ImgPath = data[index].ImgPath;
                //    var path = ImgPath.substring(1);

                //    kartica.attr('id', materijalId);
                //    kartica.find('h2').text(materijalNaslov);
                //    kartica.find($('.opis')).text(materijalOpis);
                //    kartica.find($('.imgPath')).attr('src', path);
                //    kartica.find($('.preuzmi')).attr('href', '/Materijal/DownloadMaterijal/' + materijalId);
                //});
            },
            error: function () {
                console.log("ne valja");
            }
        });
    }
});