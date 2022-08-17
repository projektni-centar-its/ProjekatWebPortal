$('.dugme-delete').click(function () {
    event.preventDefault();
    var id = $(this).closest('.kartica').attr('id');
    $("#hiddenZahtevId").val(id);
    $("#deleteModal").modal('show');
})
$('#deleteConfirm').click(function () {
    var id = $("#hiddenZahtevId").val();
    $.ajax({
        url: "/Zahtev/Delete/",
        method: "POST",
        data: {
            Id: id
        },
        success: function (result) {
            if (result) {
                $("#deleteModal").modal("hide");
                $("#" + id).remove();
            }
            else {
                alert("Došlo je do greške pri pokušaju brisanja zahteva.");
                $("#deleteModal").modal("hide");
                location.reload(true);
            }
        }
    });
})