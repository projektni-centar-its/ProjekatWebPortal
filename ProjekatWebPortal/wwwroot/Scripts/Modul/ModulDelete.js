$('.dugme-delete').click(function () {
    event.preventDefault();
    var id = $(this).closest('.kartica-predmet').attr('id');
    $("#hiddenModulId").val(id);
    $("#deleteModal").modal('show');
    
})
$('#deleteConfirm').click(function(){
    var id = $("#hiddenModulId").val();
    $.ajax({
        url: "/Modul/Delete",
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
                alert("Došlo je do greške pri pokušaju brisanja modula.");
                $("#deleteModal").modal("hide");
                location.reload(true);
                
            }
        }
    });
})



