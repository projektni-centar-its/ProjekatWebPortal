$(".skole").change(function () {
    var skolaID = $(".skole").val();

    $.ajax({
        method: 'GET',
        url: '/Predmet/GetSmerovi',
        data: {
            skolaID: skolaID,
        },
        success: function (data) {
            var $select = $('.select2smerovi');
            $select.html('');

            var options = '';
            if (data.length > 0) {
                $.each(data, function (i, data) {
                    options += '<option value="' + data.smerId + '">' + data.smerNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema smerova u skoli</option>';
            }
            $select.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
});