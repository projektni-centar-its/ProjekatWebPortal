$('#modul_modulNaziv').keyup(function () {
    $('#poruka').empty();
})

$('#postavi').click(function () {
    event.preventDefault();
    var ime = $("#modul_modulNaziv").val();
    var predmetID = $("#modul_predmetId").children("option:selected").val();
    var modulID = $("#modul_modulId").val();

    $.ajax({
        url: '/Modul/ProveraIzmena/',
        data: {
            ime: ime,
            predmetID: predmetID,
            modulID: modulID
        },
        type: "GET",
        success: function (result) {
            if (result) {
                $('#modulForma').submit();
            }
            else {
                $('#poruka').text("Modul sa ovim imenom već postoji");
            }
        }
    })
})