$(document).ready(function () {
    var data = sessionStorage.getItem('editPredmet');
    if (data) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('editPredmet');
    }
    else
        $('#snackbar').css('display', 'none');
    $("#editPredmeta").validate({
        rules: {
            smeroviId: {
                required: true
            },
            predmetNaziv: {
                required: true,
                minlength: 5,
                maxlength: 255
            },
            predmetOpis: {
                required: true,
                minlength: 5,
                maxlength: 1000
            }
        },
        messages: {
            smeroviId: {
                required: "Odaberite barem jedan smer."
            },
            predmetNaziv: {
                required: "Polje naziv je obavezno.",
                minlength: "Polje naziv mora sadržati najmanje 5 karaktera.",
                maxlength: "Polje naziv može sadržati najviše 255 karaktera."
            },
            predmetOpis: {
                required: "Polje opis je obavezno.",
                minlength: "Polje opis mora sadržati najmanje 5 karaktera.",
                maxlength: "Polje opis može sadržati najviše 1000 karaktera."
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") === "smeroviId") {
                error.insertAfter($(".select2"));
            }
            else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (forma) {
            sessionStorage.setItem('editPredmet', true);
            forma.submit();
        }
    });
});