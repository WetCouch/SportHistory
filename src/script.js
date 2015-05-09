/**
 * Created by wetcouch on 08.05.2015.
 */
$(document).ready(function () {
    $("#desc").hide();

    function nextPage (elem, result) {
        $(elem).click(function () {
            $(".content").hide();
            $(result).show();
        })
    }

    $(".link").click(function () {return false});
    $(".sport").click(function () {
        $("#desc").show();
        $("#content").hide()
    });
});
