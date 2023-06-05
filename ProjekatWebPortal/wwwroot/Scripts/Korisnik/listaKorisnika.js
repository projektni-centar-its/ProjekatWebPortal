$(function () {
    $('#listaKorisnika').DataTable();
});
$(function () {
    var filter = '<button id="Filter" class="Filter" data-toggle="modal" data-target="#myModal">NAPREDNA PRETRAGA</button>';
    document.getElementById("listaKorisnika_filter").getElementsByTagName("label")[0].setAttribute("class", "matDesignLabel");
    var labela = document.getElementById("listaKorisnika_filter").getElementsByTagName("label")[0];
    var input = document.getElementById("listaKorisnika_filter").getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    var div = document.getElementById("listaKorisnika_filter");
    labela.removeChild(input);
    div.insertAdjacentHTML("afterbegin", '<div id="divPretraga"></div>');
    var novidiv = document.getElementById("divPretraga");
    novidiv.insertAdjacentElement("beforeend", labela);
    novidiv.insertAdjacentElement("beforeend", input);
    
    
    document.getElementById("listaKorisnika_filter").insertAdjacentHTML('beforeend', filter);

});
