$(document).ready(function () {
    $(".skole").change();
});

$(".skole").change(function () {
    var skolaID = $(".skole").val();

    $.ajax({
        method: 'GET',
        url: '/Materijal/GetSmerovi',
        data: {
            skolaID: skolaID,
        },
        success: function (result) {
            var $smerovi = $('.smerovi');
            $smerovi.html('');
            var $predmeti = $('.predmeti');
            $predmeti.html('');
            var $moduli = $('.moduli');
            $moduli.html('');

            var options = '';
            var smerovi = result.smerovi;
            var predmeti = result.predmeti;
            var moduli = result.moduli;

            if (smerovi.length > 0) {
                $.each(smerovi, function (i, smerovi) {
                    options += '<option value="' + smerovi.smerId + '">' + smerovi.smerNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema smerova u skoli</option>';
                $('#postavi').prop('disabled', true);
            }
            $smerovi.html(options);

            options = '';
            if (predmeti.length > 0) {
                $.each(predmeti, function (i, predmeti) {
                    options += '<option value="' + predmeti.predmetId + '">' + predmeti.predmetNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema predmeta na smeru</option>';
                $('#postavi').prop('disabled', true);
            }
            $predmeti.html(options);

            options = '';
            if (moduli.length > 0) {
                $.each(moduli, function (i, moduli) {
                    options += '<option value="' + moduli.modulId + '">' + moduli.modulNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema modula na predmetu</option>';
                $('#postavi').prop('disabled', true);
            }
            $moduli.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
});

$(".smerovi").change(function () {
    var smerID = $(".smerovi").val();

    $.ajax({
        method: 'GET',
        url: '/Materijal/GetPredmeti',
        data: {
            smerID: smerID,
        },
        success: function (result) {
            var $predmeti = $('.predmeti');
            $predmeti.html('');
            var $moduli = $('.moduli');
            $moduli.html('');

            var predmeti = result.predmeti;
            var moduli = result.moduli;

            var options = '';
            if (predmeti.length > 0) {
                $.each(predmeti, function (i, predmeti) {
                    options += '<option value="' + predmeti.predmetId + '">' + predmeti.predmetNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema predmeta na smeru</option>';
                $('#postavi').prop('disabled', true);
            }
            $predmeti.html(options);

            options = '';
            if (moduli.length > 0) {
                $.each(moduli, function (i, moduli) {
                    options += '<option value="' + moduli.modulId + '">' + moduli.modulNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema modula na predmetu</option>';
                $('#postavi').prop('disabled', true);
            }
            $moduli.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
});

$(".predmeti").change(function () {
    var modulID = $(".predmeti").val();

    $.ajax({
        method: 'GET',
        url: '/Materijal/GetModuli',
        data: {
            modulID: modulID,
        },
        success: function (result) {
            var $moduli = $('.moduli');
            $moduli.html('');
            var moduli = result.moduli;

            options = '';
            if (moduli.length > 0) {
                $.each(moduli, function (i, moduli) {
                    options += '<option value="' + moduli.modulId + '">' + moduli.modulNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema modula na predmetu</option>';
                $('#postavi').prop('disabled', true);
            }
            $moduli.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
});