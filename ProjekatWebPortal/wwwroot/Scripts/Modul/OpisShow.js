$("#opisModal").on('show.bs.modal', function (event) {
    var Opis = $(event.relatedTarget).data('opis');
    $("#PrikazOpis").text(Opis);
})