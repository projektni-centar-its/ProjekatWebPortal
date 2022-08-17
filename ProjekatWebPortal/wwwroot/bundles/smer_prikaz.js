$(document).ready(function () {

    var isEdited = sessionStorage.getItem('editedSmer');

    if (isEdited) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('editedSmer');
    }
    else
        $('#snackbar').css('display', 'none');

    $('.edit').click(function () {
        $edit = $(this);
        var smerId = $edit.parent().parent().attr('id');
        var smerNaziv = $edit.parent().parent().find("a[class='naziv-smera-na-kartici']").text();
        var smerOpis = $edit.parent().parent().find("div.opisSmera p").text();

        $('.modal-edit .modal-header span').text(smerNaziv);
        $(".modal-edit .modal-body input[name='smerId']").val(smerId);
        $(".modal-edit .modal-body input[name='smerNaziv']").val(smerNaziv);
        $(".modal-edit .modal-body textarea[name='smerOpis']").val(smerOpis);
    });

    $('#submitEdit').click(function () {
        $.ajax({
            method: 'POST',
            url: '/Smer/DodajSmer',
            data: {
                smerId: smerId,
                smerNaziv: smerNaziv,
                smerOpis: smerOpis
            },
            complete: function () {
                sessionStorage.setItem('editedSmer', true);
                location.reload();
            }
        });
    });

    $('#editModal').on('shown.bs.modal', function () {
        $('input, textarea').each(function () {

            if ($(this).val().length !== 0) {
                $(this).prev().filter(".matDesignLabel").addClass("fokusiraniMatDesignLabel");
            }
            else { }
        });

        $('input, textarea').on("keyup focus", function () {

            if ($(this).val().length === 0) {
                $(this).prev().filter(".matDesignLabel").removeClass("fokusiraniMatDesignLabel");
                $(this).prev().filter(".matDesignLabel").css("color", "#6d6d6d");
            }
            else {
                $(this).prev().filter(".matDesignLabel").addClass("fokusiraniMatDesignLabel");
                $(this).prev().filter(".matDesignLabel").css("color", "#e21b22");
            }
        });

        $('input, textarea').on("blur", function () {
            if ($(this).val().length === 0) {
                $(this).prev().filter(".matDesignLabel").removeClass("fokusiraniMatDesignLabel");

            }
            else {
                $(this).prev().filter(".matDesignLabel").css("color", "#6d6d6d");
            }
        });
    });
});
$(document).ready(function () {

    $('.opis').click(function () {
        $opis = $(this);
        var smerNaziv = $opis.parent().parent().find("a[class='naziv-smera-na-kartici']").text();
        var smerOpis = $opis.parent().parent().find("div.opisSmera p").text();

        $('.modal-opis .modal-header span').text(smerNaziv);
        $('.modal-opis .modal-body pre').text(smerOpis);
    });
});


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