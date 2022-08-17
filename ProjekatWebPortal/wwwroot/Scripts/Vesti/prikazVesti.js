
$(document).ready(function () {

    GetData();
    $(window).scroll(function () {
        if ($(window).scrollTop() ==
            $(document).height() - $(window).height() && !_incallback) {
            GetData();
        }
    });
});
function GetData() {
    _incallback = true;
    console.log("pozvana funkcija");
    $.ajax({
        type: 'GET',
        url: '/Vesti/PosaljiVesti',
        data: { "pageindex": pageIndex, "pagesize": pageSize,"idGlavne":idGlavne },
        dataType: 'json',
        success: function (data) {
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var jsDate = new Date(parseInt(data[i].DatumPostavljanja.replace(/[^0-9 +]/g, '')));
                    if (changeAllow)
                        {
                        $("#container").append("<div class=\"card\">" +
    "<div class=\"slikaNaslov\"><img class=\"card-img-top\" src=\"" + data[i].Thumbnail + "\" alt=\"Card image cap\"> <div class=\"naslovVesti\"><p class=\"card-text\">" + data[i].Naslov + "</p></div></div>" +
    "<div class=\"card-body\"><div class=\"preveiw\"> <p class=\"prvText\">" + data[i].KratakOpis + "</p></div> <hr/> <div class=\"prikazi\">" +
            "<form action=\"/Vesti/PrikaziVest\" method=\"get\">" +
                            "<input type=\"hidden\" name=\"Naslov\" value=\"" + encodeURIComponent(data[i].Naslov) + "\" />" +
                            "<input type=\"hidden\"  name=\"Datum\" value=\"" + encodeURIComponent(jsDate.toLocaleDateString()) + "\" />" + "<p class=\"card-text\" style=\"position: absolute; font-size: 13px; color: whitesmoke; top: 10px;\">" + jsDate.toLocaleDateString() + "</p>" +
            "<input type=\"submit\" class=\"btnsVestiPrikaz\" value=\"SAZNAJ VIŠE\" />" +
            "</form>" +
            "<form action=\"/Vesti/BrisanjeVesti\" method=\"post\">" +
            "<input type=\"hidden\" value =\"" + data[i].Id + "\" name=\"Id\"/>" +
            "<input type=\"submit\" class=\"btnsVestiPrikaz\" value=\"OBRIŠI\" onclick=\"return confirm('Da li želite da obrišete vest?')\"/>" +
            "</form>" +
        "</div>" +
    "</div>" +
    "</div>");
                    }
                    else
                    {
                        $("#container").append("<div class=\"card\">" +
"<div class=\"slikaNaslov\"><img class=\"card-img-top\" src=\"" + data[i].Thumbnail + "\" alt=\"Card image cap\"> <div class=\"naslovVesti\"><p class=\"card-text\">" + data[i].Naslov + "</p></div></div>" +
"<div class=\"card-body\"><div class=\"preveiw\"> <p class=\"prvText\">" + data[i].KratakOpis + "</p></div> <hr/> <div class=\"prikazi\">" +
       "<form action=\"/Vesti/PrikaziVest\" method=\"get\">" +
       "<input type=\"hidden\" name=\"Naslov\" value=\"" + encodeURIComponent(data[i].Naslov) + "\" />" +
                            "<input type=\"hidden\"  name=\"Datum\" value=\"" + encodeURIComponent(jsDate.toLocaleDateString()) + "\" />" + "<p class=\"card-text\" style=\"position: absolute; font-size: 13px; color: whitesmoke; top: 10px;\">" + jsDate.toLocaleDateString() + "</p>" +
       "<input type=\"submit\" class=\"btnsVestiPrikaz\" value=\"SAZNAJ VIŠE\" />" +
       "</form>" +
   "</div>" +
"</div>" +
"</div>");
                    }
                }
                pageIndex++;
            }
        },
        beforeSend: function () {
            $("#progress").show();
        },
        complete: function () {
            $("#progress").hide();
            _incallback = false;
        },
        error: function () {
            alert("Error while retrieving data!");
            _incallback = false;
        }
    });

}

function PretragaVesti() {
    if (!_incallback) {
        
    var kveri = document.getElementById("PretragaVesti").value;
    var date;
    var rezpret = document.getElementById("RezultatiPretrage");
    while (rezpret.firstChild) {
        rezpret.removeChild(rezpret.firstChild);
    }
    if (kveri.length > 3) {
       
        _incallback = true;
    
    
    console.log("pozvana funkcija pretrage");
    $.ajax({
        type: 'GET',
        url: '/Vesti/PretragaPoNaslovu/',
        data: { "kveri": kveri },
        dataType: 'json',
        success: function (data) {
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var jsDate = new Date(parseInt(data[i].DatumPostavljanja.replace(/[^0-9 +]/g, '')));
                    $("#RezultatiPretrage").append("<li class=\"rezultatPretrage\"><a href=\"/Vesti/PrikaziVest?Naslov=" + encodeURIComponent(encodeURIComponent(data[i].Naslov)) + "&Datum=" +encodeURIComponent(jsDate.toLocaleDateString()) + "\">" + data[i].Naslov + "</a>" + "  <span class=\"spandatum\">" + jsDate.toLocaleDateString() + "</span></li>");
                }
                if(data.length === 0)
                {
                    $("#RezultatiPretrage").append("<li>Na zalost, nema rezultata pretrage</li>");
                }
            }
        },
        complete: function () {
           
            _incallback = false;
        },
        error: function () {
            alert("Error while retrieving data!");
            _incallback = false;
        }
    });
    }
        
    }
}

