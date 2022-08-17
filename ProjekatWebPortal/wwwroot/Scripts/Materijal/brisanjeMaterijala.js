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