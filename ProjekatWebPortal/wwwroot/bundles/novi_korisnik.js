$(function () {
    $('#noviKorisnik').validate({
        rules: {
            Ime: {
                required: true,
                slovaRegex: /^[A-Za-z]+$/,
                minlength: 2
            },
            Prezime: {
                required: true,
                slovaRegex1: /^[a-zA-Z]+$/,
                minlength: 2
            },
            Email: {
                required: true,
                email: true
                //mailRegex: /^[A-z0-9]+\@[a-z](2,6)\.[a-y](2,4)$/
            },
          
            GodinaUpisa: {
                required: true,
                godinaRegex: /^(2[0-9]{3,3})?$/,
                minlength: 4

            },
            Fajl: {
                required: false,
                accept: "image/jpeg,image/png",
                filesize: 30000
            }
            
        },
        messages: {
            Ime: {
                required: 'Polje ime je obavezno.',
                minlength: "Ime mora sadržati minimum 2 karaktera."
            },
            Prezime: {
                required: 'Polje prezime je obavezno.',
                minlength: "Prezime mora sadržati minimum 2 karaktera."
            },
            Email: {
                required: 'Polje email je obavezno.',
                email: "Unesite ispravan format email adrese."
            },
            
            GodinaUpisa: {
                minlength: "Godina mora sadržati minimum 4 karaktera i biti realna."
            },
            Fajl: {

                accept: "Ekstenzija slike mora biti .jpg ili .png",
                required: "Molimo vas odaberite sliku."
            }
           
        },
        errorPlacement: function (error, element) {
        if (element.attr("name") == "Fajl") {
            error.insertAfter(element.next());
        }
        else {
            error.insertAfter(element);
        }

    }
       
    });
    $.validator.addMethod("slovaRegex", function (value, element, regexpr) {
        // allow any non-whitespace characters as the host part
        return regexpr.test(value);
    }, 'Možete uneti samo slova.');
    $.validator.addMethod("slovaRegex1", function (value, element, regexpr) {
        // allow any non-whitespace characters as the host part
        return regexpr.test(value);
    }, 'Možete uneti samo slova.');

    $.validator.addMethod("mailRegex", function (value, element, regexpr) {
        // allow any non-whitespace characters as the host part
        return regexpr.test(value);
    }, 'Mail mora biti u formatu tekst@tekst.domen');

    $.validator.addMethod("godinaRegex", function (value, element, regexpr) {
        // allow any non-whitespace characters as the host part
        return regexpr.test(value);
    }, 'Godina mora sadržati minimum 4 karaktera i biti realna.');
    $.validator.addMethod('filesize', function (value, element, arg) {

        var minsize = 1000; // min 1kb
        if ((element.files[0].size > minsize) && (element.files[0].size <= arg)) {
            return true;
        } else {
            return false;
        }
    }, "Velicina slike ne sme biti veca od 30 KB");
});

$(".skole").change(function () {
    var skolaID = $(".skole").val();

    $.ajax({
        method: 'GET',
        url: '/Account/GetSmerovi',
        data: {
            skolaID: skolaID,
        },
        success: function (result) {
            var $smerovi = $('.smerovi');
            $smerovi.html('');

            var options = '';
            var smerovi = result.smerovi;

            if (smerovi.length > 0) {
                $.each(smerovi, function (i, smerovi) {
                    options += '<option value="' + smerovi.smerId + '">' + smerovi.smerNaziv + '</option>';
                })
                $('#postavi').prop('disabled', false);
            }
            else {
                options = '<option value="Select">Nema smerova u skoli</option>';
                $('#postavi').prop('disabled', true);
            }
            $smerovi.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
});

$(document).ready(function () {
    $(".uloge").change();
});

$(".uloge").change(function () {
    var uloga = $(".uloge").val();

    if (uloga == "Ucenik") {
        $('#godina').show();
    }
    else {
        $('#godina').hide();
    }
});
$(document).ready(function () { document.getElementsByName("SelektUloga")[0].getElementsByClassName("customSelect")[0].setAttribute("onclick", "Proveri()"); })
$(document).ready(function () { Proveri(); })
function Proveri() {

    var a = document.getElementsByName("SelektUloga")[0].getElementsByClassName("izabraniUselectu")[0].getElementsByTagName('span')[0].innerHTML;

    if (a === "Ucenik") {

        document.getElementById("godina").removeAttribute("hidden");

    }
    else {
        document.getElementById("godina").setAttribute("hidden", "");
    }
}