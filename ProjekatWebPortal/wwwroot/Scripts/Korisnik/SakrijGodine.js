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