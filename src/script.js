/**
 * Created by wetcouch on 08.05.2015.
 */
$(document).ready(function () {
    imageGreen = 'http://i.imgur.com/N0pChTv.png';
    imageBlue = 'http://i.imgur.com/9QYlDtM.png';
    imageBlack = 'http://i.imgur.com/pqLIMJr.png';
    imageRed = 'http://i.imgur.com/5QEORTj.png';

    $(".desc-header").hide();
    $(".desc-text").hide();

    function textPage (clickLink, showElement, showHeader, image, title) {
        header = ".desc-header";
        $(clickLink).click(function () {
            $(header).hide();
            $(".desc-text").hide();
            $("#content").hide();
            $(showElement).show();
            if (showHeader == true) {
                $(header).show();
                $(".desc-triangle").attr('src', image)
                $(".desc-title").text(title)
            }
        })
    }

    $(".link").click(function () {return false});

    textPage ('.nav-project', '.desc-text-project', true, imageBlack, 'O Projekcie');
    textPage ('.sport-cycling', '.desc-text-kolarstwo', true, imageGreen, 'Kolarstwo Górskie');
    textPage('.sport-football', '.desc-text-football', true, imageGreen, 'Piłka Nożna');
    textPage('.sport-weightlifting', '.desc-text-weightlifting', true, imageRed, 'Podnoszenie Ciężarów');
    textPage('.sport-boks', '.desc-text-boks', true, imageBlue, 'Boks');
    textPage('.sport-archery', '.desc-text-archery', true, imageRed, 'Łucznictwo');
    textPage('.sport-gliding', '.desc-text-gliding', true, imageBlue, 'Szybownictwo Górskie');
    textPage('.nav-school', '.desc-text-school', true, imageBlack, 'Sporty w szkole');
    textPage('.nav-history', '#content', false)
});
