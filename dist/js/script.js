$('ul.test__tabs').on('click', 'li:not(.test__tab_active)', function () {
    $(this)
        .addClass('test__tab_active').siblings().removeClass('test__tab_active')
});

window.onload = function () {
    let paginationPage = +parseInt($('.cdp').attr('data-actpage'), 10);
    $('.cdp_step').on('click', function () {
        let go = $(this).attr('href').replace('#!', '');
        if (go === '+1') {
            paginationPage++;
        } else if (go === '-1') {
            paginationPage--;
        } else {
            paginationPage = parseInt(go, 10);
        }
        $('.cdp').attr('data-actpage', paginationPage);
    });
};

$(document).ready(function () {
    $('.carousel').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});