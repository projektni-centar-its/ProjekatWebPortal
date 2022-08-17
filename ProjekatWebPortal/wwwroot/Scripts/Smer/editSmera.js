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