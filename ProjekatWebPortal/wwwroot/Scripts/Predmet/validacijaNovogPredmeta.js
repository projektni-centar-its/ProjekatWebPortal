$(document).ready(function () {

    $('#smerovi').select2({
        width: "auto",
        placeholder: "Odaberite smerove",
    });

    var smerId = sessionStorage.getItem("smerId");
    var smeroviInput = $('#smerovi');
    smeroviInput.val(smerId);
    smeroviInput.trigger('change');

    var isUploaded = sessionStorage.getItem('uploadPredmet');
    if (isUploaded) {
        $('#snackbarDel').css('display', 'block');
        sessionStorage.removeItem('uploadPredmet');
    }
    else
        $('#snackbarDel').css('display', 'none');

    $('#predmetForma').validate({
        rules: {
            smerIds: {
                required: true
            },
            "predmet.predmetNaziv": {
                required: true,
                maxlength: 255
            },
            "predmet.predmetOpis": {
                required: true,
                minlength: 5,
                maxlength: 1000
            }
        },

        messages: {
            smerIds: {
                required: "Odaberite barem jedan smer."
            },
            "predmet.predmetNaziv": {
                required: "Polje naziv je obavezno.",
                maxlength: "Polje naziv može sadržati najviše 255 karaktera."
            },
            "predmet.predmetOpis": {
                required: "Polje opis je obavezno.",
                minlength: "Polje opis mora sadržati najmanje 5 karaktera.",
                maxlength: "Polje opis može sadržati najviše 1000 karaktera."
            }
        },errorPlacement: function (error, element) {
            if (element.attr("name") == "smerIds") {
                error.insertAfter(element.next());
            }
            else {
                error.insertAfter(element);
            }
            
        },
        submitHandler: function (forma) {
            sessionStorage.setItem('uploadPredmet', true);
            forma.submit();
        }
    });
});