$(document).ready(function () {
    ////$('.customDropdown smerovi').val(1);
    //$('.customDropdown').val(2);
    //document.getElementsByClassName('customDropdown').val(2);
    //document.getElementsById('1').click();
});

$(document).ready(function () {
    brojKlikovaNaLupu = 0;
    genericDropdownBuild();

    if ($('#naprednaPretraga')) {
        select2DropdownBuild();
    }

    function genericDropdownBuild() {
        $(".customSelect").val($(this).attr('id'));

        $(".customDropdown").each(function () {
            if ($(this).parent().parent().prev().hasClass('smerovi')) {
                var nameneId = $('.customSelect').find($('option')).toArray();
                $.each(nameneId, function (index) {
                    $('ul.customLista li').attr('id', index);
                });
            }

            var customSelect = '<div class="customSelect" id="trenutnoPravim"> <div class="izabraniUselectu"> <span>' +
                $(this).find("option:selected").text() + '</span> <div class="trougao"></div> </div> <ul class="customLista"></ul> </div>';

            $(this).after(customSelect);

            var arrayLijeva = $(this).find($('option')).toArray();

            $.each(arrayLijeva, function (index, value) {
                $('#trenutnoPravim ul.customLista').append(($("<li id='" + arrayLijeva[index].getAttribute('id') + "'></li>").text($(this).text())));
            });

            var lista = $('.customLista li');

            $('#trenutnoPravim').removeAttr('id');
        });

        $(".customSelect").on('click', function () {
            $(this).find($('.customLista')).slideToggle(200);
            $(this).find($(".izabraniUselectu .trougao")).toggleClass("rotate");
            $(this).toggleClass("customSelectHighlightovan");
            $(this).find($(".izabraniUselectu")).toggleClass("izabraniUselectuHighlightovan");
        });

        $(".customSelect li").on('click', function () {
            var kliknutiTekst = $(this).text();
            $(this).parent().siblings("div").find('span').text($(this).text());
            $(this).parent().parent().prev().find($("option").filter(function () {
                return $(this).text() === kliknutiTekst;
            }).prop('selected', true));

            if ($(this).parent().parent().prev().hasClass('smerovi')) {
                default_smerID = $(this).parent().parent().prev().find($("option:selected")).val();

                // premestiti u customDropdown.js i append na ovaj event
                // dodati uslov pod kojim ce se raditi ajax (samo ako su smerovi u pitanju)
                $.ajax({
                    method: 'GET',
                    url: '/Materijal/UploadMaterijal',
                    data: {
                        smerId: default_smerID,
                    },
                    success: function (data) {
                        $('.customSelect').remove();
                        $('#_predmetiNaSmeru').html('');
                        $('#_predmetiNaSmeru').html(data);
                        genericDropdownBuild();
                    },
                    error: function () {
                        console.log("ne valja");
                    }
                });
            }
            if ($(this).parent().parent().prev().hasClass('predmeti')) {
                default_predmetID = $(this).parent().parent().prev().find($("option:selected")).val();
                console.log(default_predmetID);
                default_smerID = $(".smerovi").find($("option:selected")).val();
                console.log(default_smerID);
                // premestiti u customDropdown.js i append na ovaj event
                // dodati uslov pod kojim ce se raditi ajax (samo ako su smerovi u pitanju)
                $.ajax({
                    method: 'GET',
                    url: '/Materijal/UploadMaterijal',
                    data: {
                        smerId: default_smerID,
                        predmetId: default_predmetID,
                    },
                    success: function (data) {
                        $('.customSelect').remove();
                        $('#_predmetiNaSmeru').html('');
                        $('#_predmetiNaSmeru').html(data);
                        genericDropdownBuild();
                    },
                    error: function () {
                        console.log("ne valja");
                    }
                });
            }
        });

        $(".customLista").each(function () {
            var sirinaListe = parseFloat($(this).css('width'));

            $(this).css("width", sirinaListe + 42 + "px");
            $(this).parent().css("width", $(this).css("width"));
            $(this).parent().css("max-width", "200px");
            $(this).css("max-width", "200px");
        });

        $(document).on('click', function (e) {
            if ($(e.target).closest('.customSelect').length === 0) {
                var otvoreniCustomDropdownovi = $('.customLista').filter(function () {
                    return $(this).css("display") === 'block'
                });

                var trougloviOtvorenihDorpdownova = otvoreniCustomDropdownovi.siblings('.izabraniUselectu').find(".trougao");

                otvoreniCustomDropdownovi.slideUp();
                trougloviOtvorenihDorpdownova.toggleClass("rotate");
                otvoreniCustomDropdownovi.siblings('.izabraniUselectuHighlightovan').removeClass("izabraniUselectuHighlightovan");
                otvoreniCustomDropdownovi.parent(".customSelectHighlightovan").removeClass("customSelectHighlightovan");
            }
        });
    };

    function smerPredmetDropdownBuild() {
        $(".customDropdown").each(function () {
        });
    };

    function select2DropdownBuild() {
        var formati;
        $('.select2formati').select2({
            width: "auto",
            //placeholder: "Format materijala",
        });

        var materijali;
        $('.select2materijali').select2({
            width: "auto",
            //placeholder: "Tip materijala",
        });

        var datum;
        $('.select2_datum').select2({
            width: "auto",
            minimumResultsForSearch: Infinity,
        });

        function selECT2LbeliResize(ovo) {
            if ($(this).val() !== null) {
                $(this).prev().css("transform", "scale(6) translate(8px, -4.7px)");
                $(this).next().find("span.select2-selection--multiple").css("height", "50px");
                $(this).next().css("margin-top", "0px");
                $(this).next().find(".select2-selection__rendered").css({ "margin-top": "7px", "height": "43px", "margin-bottom": "0" });
                $(this).next().find(".select2-search__field").css({ "margin-top": "7px", "height": "30px", "margin-bottom": "3px" });
            }
            else {
                $(this).prev().css("transform", "scale(8) translate(8px, -0.5px)");
                $(this).next().find("span.select2-selection--multiple").css("height", "20px");
                $(this).next().css("margin-top", "9px");
                $(this).next().find(".select2-selection__rendered").css({ "margin-top": "0", "height": "30px", "margin-bottom": "5px" });
                $(this).next().find(".select2-search__field").css({ "margin-top": "22px", "height": "30px", "margin-bottom": "0" });
            }
        };

        $('.select2-hidden-accessible').on('load change', selECT2LbeliResize);

        $('.select2materijali').on('select2:unselect', function () {
            $(this).delay(800).select2("close");
        });
    };

    $("#lupaPretragaToggle").click(function () {
        $('.select2-hidden-accessible').trigger("change");

        if (brojKlikovaNaLupu < 1) {
            $(".customLista").each(function () {
                var sirinaListe = parseFloat($(this).css('width'));

                $(this).css("width", sirinaListe + 32 + "px");
                $(this).parent().css("width", $(this).css("width"));
            });
        }
        brojKlikovaNaLupu = 2;
    });
});
$(function () {
    $('#noviKorisnik').validate({
        rules: {
            "Korisnik.Ime": {
                required: true,
                slovaRegex: /^[A-Za-z]+$/,
                minlength: 2
            },
            "Korisnik.Prezime": {
                required: true,
                slovaRegex1: /^[a-zA-Z]+$/,
                minlength: 2
            },
            "Korisnik.Email": {
                required: true,
                email: true
                //mailRegex: /^[A-z0-9]+\@[a-z](2,6)\.[a-y](2,4)$/
            },
            "Korisnik.Password": {
                required: true,
                minlength: 6
            },
            "Korisnik.GodinaUpisa": {
                required: false,
                godinaRegex: /^([0-9]{4,4})?$/,
                minlength: 4

            },
            Fajl: {
                required: true,
                accept: "image/jpeg,image/png",
                filesize: 30000
            }
           
        },
        messages: {
            "Korisnik.Ime": {
                required: 'Polje ime je obavezno.',
                minlength: "Ime mora sadržati minimum 2 karaktera."
            },
            "Korisnik.Prezime": {
                required: 'Polje prezime je obavezno.',
                minlength: "Prezime mora sadržati minimum 2 karaktera."
            },
            "Korisnik.Email": {
                required: 'Polje email je obavezno.',
                email: "Unesite ispravan format email adrese."
            },
           
            "Korisnik.GodinaUpisa": {
                minlength: "Godina mora sadržati minimum 4 karaktera."
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
    }, 'Godina mora imati 4 cifre.');
    $.validator.addMethod('filesize', function (value, element, arg) {

        var minsize = 1000; // min 1kb
        if ((element.files[0].size > minsize) && (element.files[0].size <= arg)) {
            return true;
        } else {
            return false;
        }
    }, "Velicina slike ne sme biti veca od 30 KB");
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