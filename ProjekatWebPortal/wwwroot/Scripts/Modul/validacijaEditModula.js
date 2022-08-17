$(document).ready(function () {
    var data = sessionStorage.getItem('editModul');
    if (data) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('editModul');
    }
    else
        $('#snackbar').css('display', 'none');

    $('#modulForma').validate({
        rules: {
            "modul.modulNaziv": {
                required: true,
                maxlength: 255
            },
            "modul.modulOpis": {
                required: true,
                minlength: 5,
                maxlength: 1000
            }
        },

        messages: {
            "modul.modulNaziv": {
                required: "Polje naziv je obavezno.",
                maxlength: "Polje naziv može sadržati najviše 255 karaktera."
            },
            "modul.modulOpis": {
                required: "Polje opis je obavezno.",
                minlength: "Polje opis mora sadržati najmanje 5 karaktera.",
                maxlength: "Polje opis može sadržati najviše 1000 karaktera."
            }
        },

        submitHandler: function (forma) {
            sessionStorage.setItem('editModul', true);
            forma.submit();
        }
    });
});