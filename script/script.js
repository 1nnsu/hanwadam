
document.addEventListener("DOMContentLoaded", function(e){
    sec1_swiper();
    sec2_swiper();
    sec4_swiper1();
    // sec4_swiper2();
    sec4_Menu();
    countWrap();
    sec8_swiper();
})

const sec1_swiper = () => {
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
const sec2_swiper = () => {
        var swiper = new Swiper(".sec2_swiper", {
        loop: true,
        slidesPerView: 2.5,
        loopedSlides: 6,
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
        el: ".sec2-pagination",
        },
        breakpoints: {
        1024: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.5,
        },
        480: {
            slidesPerView: 1.1,
        }
    }
    });
}

const sec4_swiper1 = () => {
        var swiper = new Swiper(".sec4_Swiper1", {
        loop: true,
        navigation: {
            nextEl: ".sec4_next",
            prevEl: ".sec4_prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}
const sec4_swiper2 = () => {
        var swiper = new Swiper(".sec4_Swiper2", {
        loop: true,
        navigation: {
            nextEl: ".sec4_prev2",
            prevEl: ".sec4_prev2",
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
        autoplay: {
            delay: 1,               // 0 말고 최소 1로
            disableOnInteraction: false,
        },
        speed: 10000,               // 30초 동안 한 바퀴
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView:8,
        allowTouchMove: false,
    });
    
}

