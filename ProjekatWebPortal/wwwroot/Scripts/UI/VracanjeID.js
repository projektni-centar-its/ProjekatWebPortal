onload = function () {
    var predmetID;
    $("#predmet-dropdown").on("change", function () {
        predmetID = $("#predmet-dropdown option:selected").val();
    });
};