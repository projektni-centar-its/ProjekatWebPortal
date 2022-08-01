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