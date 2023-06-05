$(document).ready(function () {
    var data = sessionStorage.getItem('editSmer');
    if (data) {
        $('#snackbarDel').css('display', 'block');
        sessionStorage.removeItem('editSmer');
    }
    else
        $('#snackbarDel').css('display', 'none');
    $("#editSmera").validate({
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
            sessionStorage.setItem('editSmer', true);
            forma.submit();
        }
    })
});