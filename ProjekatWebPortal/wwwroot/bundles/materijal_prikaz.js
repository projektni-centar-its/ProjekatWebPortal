$(document).ready(function () {
    var data = sessionStorage.getItem('kantica');
    if (data) {
        $('#banana').css('display', 'block').attr('src', '').attr('src', '../../Content/img/potvrdaBrisanjaGIFGOTOV.gif');
        setTimeout(function () { $('#banana').css('display', 'none') }, 2000);
        sessionStorage.removeItem('kantica');
    }

    $(".brisi").click(function () {
        $delete = $(this);

        var id = $delete.parent().parent().parent().parent().attr('id');
        var ime = $delete.parent().parent().parent().find('h2').text();
        var modulId = $("#hiddenModulId").val();

        console.log(id);
        $('.modal-body span').text(ime);

        $('button.btn-default:first').click(function () {
            $.ajax({
                url: '/Materijal/DeleteConfirmed',
                method: 'post',
                data:
                {
                    id: id,
                    modulId: modulId
                },
                complete: function () {
                    $delete.parent().parent().parent().parent().remove();
                    sessionStorage.setItem('kantica', true);
                    location.reload();
                }
            });
        });
    });
});
$(document).ready(function () {
    $(".select2materijali, .select2formati").on("change", filterMaterijali);
    $("ul.customLista li").on("click", filterMaterijali);
    //$(document).delegate(".customLista li", "click", filterMaterijali);

    function filterMaterijali() {
        var url = window.location.href;
        var args = url.split('/');

        var modulId = args[args.length - 1];
        var sort = '';
        var filterDatumSpanText = $('.datum').next('.customSelect').find('span').text();

        var novijeStarije = $(".customLista li");
        for (var i = 0; i < novijeStarije.length; i++) {
            if (novijeStarije[i].textContent === filterDatumSpanText) {
                sort = novijeStarije[i].id;
            }
        }

        var tipovi = [];
        var formati = [];

        //OVE DVE METODE VRACAJU NAZIVE
        //$('.select2materijali').next().find('.select2-selection__choice').each(function (index, element) {
        //    var tip = $(this).attr('title');
        //    tipovi.push(tip);
        //});

        //$('.select2formati').next().find('.select2-selection__choice').each(function (index, Element) {
        //    var format = $(this).attr('title');
        //    formati.push(format);
        //});

        //OVE DVE METODE VRACAJU IDeve i Stringove sukcesivno (nije radilo kada se stavi $(this)[index].value)
        $(".select2materijali option:selected").each(function (index, Element) {
            tipovi.push($(".select2materijali option:selected")[index].value);
        });
        $(".select2formati option:selected").each(function (index, element) {
            formati.push($(".select2formati option:selected")[index].value);
        });
        //console.log(formati);
        //console.log(tipovi);

        if (sort === "opadajuce") sort = 'opadajuce';
        else if (sort === "rastuce") sort = 'rastuce';
        else sort = '';
        if (tipovi === null) tipovi = $(".select2materijali option");
        if (formati === null) formati = $(".select2formati option");

        $.ajax({
            method: 'GET',
            url: '/Materijal/MaterijaliPrikaz',
            data: {
                id: modulId,
                sort: sort,
                tipovi: tipovi,
                formati: formati
            },
            traditional: true,
            beforeSend: function () {
                $('#sredina').css({
                    'filter': 'blur(10px)', //stavio sam ti na 0 jer je jos scuffed
                    'transition': 'all 0.3s'
                });
            },
            success: function (data) {
                tipovi = [];
                formati = [];
                sort = "";
                $('.kartica').remove();
                $('#sredina').append(data);
                $('#sredina').css('filter', 'blur(0)');
                //$('#sredina').css('filter', 'blur(0)').html(data);
                //$('.kartica').each(function (index, element) {
                //    var kartica = $(this);

                //    var materijalId = data[index].materijalId;
                //    var materijalNaslov = data[index].materijalNaslov;
                //    var materijalOpis = data[index].materijalOpis;
                //    var ImgPath = data[index].ImgPath;
                //    var path = ImgPath.substring(1);

                //    kartica.attr('id', materijalId);
                //    kartica.find('h2').text(materijalNaslov);
                //    kartica.find($('.opis')).text(materijalOpis);
                //    kartica.find($('.imgPath')).attr('src', path);
                //    kartica.find($('.preuzmi')).attr('href', '/Materijal/DownloadMaterijal/' + materijalId);
                //});
            },
            error: function () {
                console.log("ne valja");
            }
        });
    }
});
$(document).ready(function () {
    //snackbar
    var data = sessionStorage.getItem('zahtevSnack');
    if (data) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('zahtevSnack');
    }
    else
        $('#snackbar').css('display', 'none');
})
//validacija opisa
function validate() {
    var value = $('#zahtevOpis').val();

    if (value.length < 5 || value.length > 250) {
        $('#poruka').text("Opis mora imati između 5 i 250 karaktera.");
        return false;
    }
    else {
        $('#poruka').empty();
        return true;
    }
};
$('.upgrade').click(function () {
    event.preventDefault();
    var id = $(this).closest('.kartica').attr('id');
    $("#hiddenMaterijalId").val(id);
    $('#poruka').empty();
    $('#zahtevOpis').empty();
    //punjenje combo boxova
    $.ajax({
        url: "/Zahtev/DropDownInitiate/",
        method: "GET",
        success: function (result) {
            var $predmeti = $('#predmetiSelect');
            $predmeti.html('');
            var $moduli = $('#moduliSelect');
            $moduli.html('');
            var options = '';
            var predmet = result.predmeti;
            var modul = result.moduli;

            if (predmet.length > 0) {
                $.each(predmet, function (i, predmet) {
                    options += '<option value="' + predmet.predmetId + '">' + predmet.predmetNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema globalnih predmeta.</option>';
            }

            $predmeti.html(options);
            options = '';
            if (modul.length > 0) {
                $.each(modul, function (i, modul) {
                    options += '<option value="' + modul.modulId + '">' + modul.modulNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema modula u predmetu</option>';
            }

            $moduli.html(options);
        }
    })
    $("#zahtevModal").modal('show');
})
$('#zahtevOpis').keyup(function () {
    validate();
});

//Na promenu selektovanog predmeta popunjava modul select
$('#predmetiSelect').change(function () {
    var predmetId = $("#predmetiSelect").val();

    $.ajax({
        method: 'GET',
        url: '/Zahtev/OnChangePopulate',
        data: {
            predmetId: predmetId,
        },
        success: function (moduli) {
            var $select = $('#moduliSelect');
            $select.html('');

            var options = '';
            if (moduli.length > 0) {
                $.each(moduli, function (i, moduli) {
                    options += '<option value="' + moduli.modulId + '">' + moduli.modulNaziv + '</option>';
                })
            }
            else {
                options = '<option value="Select">Nema modula u predmetu</option>';
            }
            $select.html(options);
        },
        error: function () {
            console.log("ne valja");
        }
    });
})
//POST zahteva
$("#upgradeConfirm").on("click", function () {
    var id = $("#hiddenMaterijalId").val();
    var opis = $("#zahtevOpis").val();
    var modulId = $("#moduliSelect").val();
    if (validate()) {
        $.ajax({
            url: "/Zahtev/UpgradeMaterijal",
            method: "POST",
            data: {
                Id: id,
                opis: opis,
                modulId: modulId
            },
            success: function (result) {
                $("#zahtevModal").modal('hide');

                if (result) {
                    sessionStorage.setItem('zahtevSnack', true);
                }
                location.reload();
                $("#zahtevOpis").val("");
            }
        });
    }
})
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