$(document).ready(function () {
    var data = sessionStorage.getItem('editModul');
    if (data) {
        $('#snackbar').css('display', 'block');
        sessionStorage.removeItem('editModul');
    }
    else
        $('#snackbar').css('display', 'none');
})