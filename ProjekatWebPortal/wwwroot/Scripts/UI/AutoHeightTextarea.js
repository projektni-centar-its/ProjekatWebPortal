$(document).ready(function () {
    
    function textAreaAdjust(o) {
        o.style.height = "1px";
        //o.style.height = (25 + o.scrollHeight) + "px";
        o.style.height = (o.scrollHeight - 50) + "px";
    }
    
    $('#predmetOpis').keyup(function () {
        textAreaAdjust(this);

    });

    $('.editModalPredmeta').on('shown.bs.modal', function (e) {
        var VisinaScrollaTexta = document.getElementById("predmetOpis").scrollHeight;
        //$('#predmetOpis').style.height = "1px";
        $('#predmetOpis').css("height", "1px");
        $('#predmetOpis').css("height", 25 + VisinaScrollaTexta + "px");
        //$('#predmetOpis').style.height = (25 + o.scrollHeight) + "px";
    })
});

