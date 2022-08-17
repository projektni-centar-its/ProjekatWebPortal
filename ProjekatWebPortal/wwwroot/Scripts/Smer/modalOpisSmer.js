$(document).ready(function () {

    $('.opis').click(function () {
        $opis = $(this);
        var smerNaziv = $opis.parent().parent().find("a[class='naziv-smera-na-kartici']").text();
        var smerOpis = $opis.parent().parent().find("div.opisSmera p").text();

        $('.modal-opis .modal-header span').text(smerNaziv);
        $('.modal-opis .modal-body pre').text(smerOpis);
    });
});

