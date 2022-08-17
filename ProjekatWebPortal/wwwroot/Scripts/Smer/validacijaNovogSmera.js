$(document).ready(function () {
    var data = sessionStorage.getItem('uploadSmer');
    if (data) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('uploadSmer');
    }
    else
        $('#snackbar').css('display', 'none');

    $('#smerForma').validate({
        rules: {
            smerNaziv: {
                required: true,
                minlength: 5,
                maxlength: 255
            },
            smerOpis: {
                required: true,
                minlength: 5,
                maxlength: 1000
            }
        },

        messages: {
            smerNaziv: {
                required: "Polje naziv je obavezno.",
                minlength: "Polje naziv mora sadržati najmanje 5 karaktera.",
                maxlength: "Polje naziv može sadržati najviše 255 karaktera."
            },
            smerOpis: {
                required: "Polje opis je obavezno.",
                minlength: "Polje opis mora sadržati najmanje 5 karaktera.",
                maxlength: "Polje opis može sadržati najviše 1000 karaktera."
            }
        },
        submitHandler: function (forma) {
            sessionStorage.setItem('uploadSmer', true);
            forma.submit();
        }
    }); 
});