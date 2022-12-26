$(function () {

    $('#novaVest').validate({
        rules: {
            Naslov: {
                required: true,
                naslovReg: /^[A-za-z0-9\.\,\:\;\!\@\s\'\"\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\|\<\>\?\/\č\š\ć\ž\đ\£]{0,100}$/
            },
            KratakOpis: {
                required: true,
                opisReg: /^[A-za-z0-9\.\,\:\;\!\@\s\'\"\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\|\<\>\?\/\č\š\ć\ž\đ\£]{0,200}$/
            },
            Fajl: {
                required: true,
                accept: "image/jpeg,image/png",
                filesize: 2097152
            }
        },
        messages: {
            Vest: {
                required: 'Ovo polje je obavezno'
            },
            KratakOpis: {
                required: 'Ovo polje je obavezno'
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

    $.validator.addMethod("naslovReg", function (value, element, regexpr) {
        // allow any non-whitespace characters as the host part
        return regexpr.test(value);
    }, 'Polje moze sadrzati maksimum 80 karaktera');


$.validator.addMethod("opisReg", function (value, element, regexpr) {
    // allow any non-whitespace characters as the host part
    return regexpr.test(value);
}, 'Polje moze sadrzati maksimum 150 karaktera');

$.validator.addMethod('filesize', function (value, element, arg) {
   
    var minsize = 1000; // min 1kb
    if ((element.files[0].size > minsize) && (element.files[0].size <= arg)) {
        return true;
    } else {
        return false;
    }
},"Velicina slike ne sme biti veca od 2 MB");
});

