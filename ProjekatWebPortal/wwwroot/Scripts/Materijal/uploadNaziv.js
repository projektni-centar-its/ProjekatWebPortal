$(document).ready(function () {
    document.getElementsByClassName('inputfile')[0].onchange = uploadOnChange;

    function uploadOnChange() {
        var filename = this.value;
        var lastIndex = filename.lastIndexOf("\\");

        if (lastIndex >= 0) {
            filename = filename.substring(lastIndex + 1);
        }
        document.getElementById('filename').innerHTML = '<span><img src="../Content/img/upload2.png" alt="Izaberite Dokument">' + filename + '</span>';
    }
});