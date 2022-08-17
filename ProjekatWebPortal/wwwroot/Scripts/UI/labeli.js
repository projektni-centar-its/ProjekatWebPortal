$(document).ready(function () {

    $('input, textarea').each(function () {

        if ($(this).val().length !== 0) {
            $(this).prev().filter(".matDesignLabel").addClass("fokusiraniMatDesignLabel");
        }
        else {
        console.log("prazan sam input")}
    });

    $('input, textarea').on("keyup focus", function () {

        if ($(this).val().length === 0) {
            $(this).prev().filter(".matDesignLabel").removeClass("fokusiraniMatDesignLabel");
            $(this).prev().filter(".matDesignLabel").css("color", "#6d6d6d");
        }
        else {
            $(this).prev().filter(".matDesignLabel").addClass("fokusiraniMatDesignLabel");
            $(this).prev().filter(".matDesignLabel").css("color", "#e21b22");
        }
    });

    $('input, textarea').on("blur", function () {
        if ($(this).val().length === 0) {
            $(this).prev().filter(".matDesignLabel").removeClass("fokusiraniMatDesignLabel");
            
        }
        else {
            $(this).prev().filter(".matDesignLabel").css("color", "#6d6d6d");
        }
    });
});