$(".skole").change(function () {
    var skolaID = $(".skole").val();

    $.ajax({
        method: 'GET',
        url: '/Modul/GetSmerovi',
        data: {
            skolaID: skolaID,
        },
        success: function (result) {
            var $smerovi = $('.smerovi');
            $smerovi.html('');
            var $predmeti = $('.predmeti');
            $predmeti.html('');

            var options = '';
            var smerovi = result.smerovi;
            var predmeti = result.predmeti;

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
        url: '/Modul/GetPredmeti',
        data: {
            smerID: smerID,
        },
        success: function (result) {
            var $predmeti = $('.predmeti');
            $predmeti.html('');

            var options = '';
            if (result.length > 0) {
                $.each(result, function (i, result) {
                    options += '<option value="' + result.predmetId + '">' + result.predmetNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema predmeta na smeru</option>';
                $('#postavi').prop('disabled', true);
            }

            $predmeti.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
});