$(".upgrade").on("click", function () {
    var id = $(this).closest('.kartica').attr('id');

    $.ajax({
        url: "/Zahtev/UpgradeMaterijal",
        method: "POST",
        data: {
            Id: id
        },
        success: function (result) {
            alert("Uspesno podnet zahtev za postavljanje globalnog materijala");
        }
    });
})