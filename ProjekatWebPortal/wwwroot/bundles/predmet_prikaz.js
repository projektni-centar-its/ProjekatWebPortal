$(document).ready(function () {

    $('.select2smerovi').select2();

    var isEdited = sessionStorage.getItem('editedPredmet');

    if (isEdited) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('editedPredmet');
    }
    else
        $('#snackbar').css('display', 'none');

    var smerId = $("#smerId").text();
    sessionStorage.setItem("smerId", smerId);

    $('.edit').click(function () {
        $edit = $(this);
        var predmetId = $edit.parent().parent().attr('id');
        var predmetNaziv = $edit.parent().parent().find("a[class='naziv-predmeta-na-kartici']").text();
        var predmetOpis = $edit.parent().parent().find("div.opisPredmeta p").text();

        $.ajax({
            method: 'GET',
            url: '/Predmet/VratiSmerove',
            data: {
                id: predmetId
            },
            success: function (data) {
                var smeroviInput = $("#smeroviedit");
                smeroviInput.val(data);
                smeroviInput.trigger('change');
                sessionStorage.setItem('smeroviId', smeroviInput.val());
            }
        });

        $('.modal-edit .modal-header span').text(predmetNaziv);
        $(".modal-edit .modal-body input[name='predmetId']").val(predmetId);
        $(".modal-edit .modal-body input[name='predmetNaziv']").val(predmetNaziv);
        $(".modal-edit .modal-body textarea[name='predmetOpis']").val(predmetOpis);
    });
});
$(document).ready(function () {

    $('.getMaterijali').click(function (e) {
        $predmetMat = $(this);

        var predmetId = $predmetMat.parent().parent().attr('id');

        sessionStorage.setItem('predmetId', predmetId);
    });

    $('.opis').click(function () {
        $opis = $(this);
        var predmetNaziv = $opis.parent().parent().find('a:first').text();

        var predmetOpis = $opis.parent().parent().find("div.opisPredmeta p").text();

        $('.modal-header span').text(predmetNaziv);
        $('.modal-body pre').text(predmetOpis);
    });
});
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
$(".skole").change(function () {
    var skolaID = $(".skole").val();

    $.ajax({
        method: 'GET',
        url: '/Predmet/GetSmerovi',
        data: {
            skolaID: skolaID,
        },
        success: function (data) {
            var $select = $('.select2smerovi');
            $select.html('');

            var options = '';
            if (data.length > 0) {
                $.each(data, function (i, data) {
                    options += '<option value="' + data.smerId + '">' + data.smerNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema smerova u skoli</option>';
            }
            $select.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
});