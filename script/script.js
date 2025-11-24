

document.addEventListener("DOMContentLoaded", function(e){
    sec1_Swiper();
    sec4_Swiper1();
    // sec4_Swiper2();
    sec4_Menu();
    countWrap();
    sec8_swiper();
})


const sec1_Swiper = () => {
        var swiper = new Swiper(".sec1_swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 2000,               // 문구 유지 시간
            disableOnInteraction: false,
        },
        speed: 1000,  
    });
}

const sec4_Swiper1 = () => {
        var swiper = new Swiper(".sec4_Swiper1", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}
const sec4_Swiper2 = () => {
        var swiper = new Swiper(".sec4_Swiper2", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}
const sec4_Menu = () => {
    $('.menuDiv .menu').click(function(){
        const click1 = $(this).index();

        $('.menuDiv .menu').removeClass('on');
        $(this).addClass('on');

        $('section.sec4 .box4 ul li').removeClass('on');
        $('section.sec4 .box4 ul li').eq(click1).addClass('on');
    })
}

const countWrap = () => {
    $('.counting').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
                duration: 1000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum).toLocaleString());
                },
                complete: function() {
                    $this.text(Number(this.countNum).toLocaleString());
                }
            }
        );
    });

    
}

const sec8_swiper = () => {
    var swiper = new Swiper(".sec8_swiper", {
        spaceBetween: 1000,
        autoplay: {
            delay: 0, // important !!
            disableOnInteraction: false,
        },
        speed: 10000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 1,
        allowTouchMove: false
    });
    
}

