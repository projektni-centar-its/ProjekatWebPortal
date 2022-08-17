$(document).ready(function () {
    var data = sessionStorage.getItem('uploadSmer');
    if (data) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('uploadSmer');
    }
    else
        $('#snackbar').css('display', 'none');
})