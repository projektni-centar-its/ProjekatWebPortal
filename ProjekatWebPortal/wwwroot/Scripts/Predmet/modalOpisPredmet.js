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