$(document).ready(function () {

    var selektovanAscDesc = $('#asc-desc').prev('.customSelect').find('.izabraniUselectu span').html();

    $('#asc-desc').prev('.customSelect').find('.customLista li:contains(' + selektovanAscDesc + ')').css("background-color", "#eee");

    $('#opadajuce, #rastuce').click(function () {
        $('#opadajuce, #rastuce').css("background-color", "");

        var klinkutValueAscDesc = $(this).html();
        $(this).closest('.customSelect').find('.customLista li:contains(' + klinkutValueAscDesc + ')').css("background-color", "#eee");

        if ($(this).closest(".customSelect").prev().filter(".datum").val() === 'Od novijeg ka starijem') {
            //console.log("od novijeg, strelica gore.")
            $(this).closest(".customSelect").next().filter("#asc-desc").css("transform", "translate(11px,0) rotate(90deg)");

        } else {
            //console.log("od starijeg, strelica dole")
            $(this).closest(".customSelect").next().filter("#asc-desc").css("transform", "translate(11px,0) rotate(-90deg)");
        }
    });
});