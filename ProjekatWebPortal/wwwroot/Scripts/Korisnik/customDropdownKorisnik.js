$(".skole").change(function () {
    var skolaID = $(".skole").val();

    $.ajax({
        method: 'GET',
        url: '/Account/GetSmerovi',
        data: {
            skolaID: skolaID,
        },
        success: function (result) {
            var $smerovi = $('.smerovi');
            $smerovi.html('');

            var options = '';
            var smerovi = result.smerovi;

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
        },
        error: function () {
            console.log("ne valja");
        }
    });
});

$(document).ready(function () {
    $(".uloge").change();
});

$(".uloge").change(function () {
    var uloga = $(".uloge").val();

    if (uloga == "Ucenik") {
        $('#godina').show();
    }
    else {
        $('#godina').hide();
    }
});