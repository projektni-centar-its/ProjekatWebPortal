$(document).ready(function () {
    //snackbar
    var data = sessionStorage.getItem('zahtevSnack');
    if (data) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('zahtevSnack');
    }
    else
        $('#snackbar').css('display', 'none');
})
//validacija opisa
function validate() {
    var value = $('#zahtevOpis').val();

    if (value.length < 5 || value.length > 250) {
        $('#poruka').text("Opis mora imati između 5 i 250 karaktera.");
        return false;
    }
    else {
        $('#poruka').empty();
        return true;
    }
};
$('.upgrade').click(function () {
    event.preventDefault();
    var id = $(this).closest('.kartica').attr('id');
    $("#hiddenMaterijalId").val(id);
    $('#poruka').empty();
    $('#zahtevOpis').empty();
    //punjenje combo boxova
    $.ajax({
        url: "/Zahtev/DropDownInitiate/",
        method: "GET",
        success: function (result) {
            var $predmeti = $('#predmetiSelect');
            $predmeti.html('');
            var $moduli = $('#moduliSelect');
            $moduli.html('');
            var options = '';
            var predmet = result.predmeti;
            var modul = result.moduli;

            if (predmet.length > 0) {
                $.each(predmet, function (i, predmet) {
                    options += '<option value="' + predmet.predmetId + '">' + predmet.predmetNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema globalnih predmeta.</option>';
            }

            $predmeti.html(options);
            options = '';
            if (modul.length > 0) {
                $.each(modul, function (i, modul) {
                    options += '<option value="' + modul.modulId + '">' + modul.modulNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema modula u predmetu</option>';
            }

            $moduli.html(options);
        }
    })
    $("#zahtevModal").modal('show');
})
$('#zahtevOpis').keyup(function () {
    validate();
});

//Na promenu selektovanog predmeta popunjava modul select
$('#predmetiSelect').change(function () {
    var predmetId = $("#predmetiSelect").val();

    $.ajax({
        method: 'GET',
        url: '/Zahtev/OnChangePopulate',
        data: {
            predmetId: predmetId,
        },
        success: function (moduli) {
            var $select = $('#moduliSelect');
            $select.html('');

            var options = '';
            if (moduli.length > 0) {
                $.each(moduli, function (i, moduli) {
                    options += '<option value="' + moduli.modulId + '">' + moduli.modulNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema modula u predmetu</option>';
            }
            $select.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
})
//POST zahteva
$("#upgradeConfirm").on("click", function () {
    var id = $("#hiddenMaterijalId").val();
    var opis = $("#zahtevOpis").val();
    var modulId = $("#moduliSelect").val();
    if (validate()) {
        $.ajax({
            url: "/Zahtev/UpgradeMaterijal",
            method: "POST",
            data: {
                Id: id,
                opis: opis,
                modulId: modulId
            },
            success: function (result) {
                $("#zahtevModal").modal('hide');

                if (result) {
                    sessionStorage.setItem('zahtevSnack', true);
                }
                location.reload();
                $("#zahtevOpis").val("");
            }
        });
    }
})