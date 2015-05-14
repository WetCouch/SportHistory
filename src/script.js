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

    function textPage (clickLink, showElement, showHeader, image, title, isWhite) {
        header = ".desc-header";
        $(clickLink).click(function () {
            $(header).hide();
            $(".desc-text").hide();
            $("#content").hide();
            $(showElement).show();
            if (showHeader == true) {
                $(header).show();
                $(".desc-triangle").attr('src', image);
                $(".desc-title").text(title)
            }
            if (isWhite == true) {
                $('.header-title').addClass('is-white')
            } else {
                $('.header-title').removeClass('is-white')
            }

        })
    }

    function openImage (link, page) {
        $(link).click(function () {
            window.open(page)
        })
    }

    openImage('.img1', 'http://i.imgur.com/jSfx6DG.jpg');
    openImage('.img2', 'http://i.imgur.com/hJmyqfT.jpg');
    openImage('.img3', 'http://i.imgur.com/ukXlBEk.jpg');
    openImage('.img4', 'http://i.imgur.com/r2KrLrW.jpg');
    openImage('.img5', 'http://i.imgur.com/cdF2LYW.jpg');

    $(".link").click(function () {return false});

    textPage ('.nav-project', '.desc-text-project', true, imageBlack, 'O Projekcie', true);
    textPage ('.sport-cycling', '.desc-text-kolarstwo', true, imageGreen, 'Kolarstwo Górskie', false);
    textPage('.sport-football', '.desc-text-football', true, imageGreen, 'Piłka Nożna', false);
    textPage('.sport-weightlifting', '.desc-text-weightlifting', true, imageRed, 'Podnoszenie Ciężarów', false);
    textPage('.sport-boks', '.desc-text-boks', true, imageBlue, 'Boks', false);
    textPage('.sport-archery', '.desc-text-archery', true, imageRed, 'Łucznictwo', false);
    textPage('.sport-gliding', '.desc-text-gliding', true, imageBlue, 'Szybownictwo Górskie', false);
    textPage('.nav-school', '.desc-text-school', true, imageBlack, 'Sporty w szkole', true);
    textPage('.nav-history', '#content', false)
});
