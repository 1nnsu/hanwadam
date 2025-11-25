


document.addEventListener("DOMContentLoaded", function(e){
    animationOnHandler();
    headerScrollHandler();
    // bodyScroll();
    privacyUsePopup();
    lenis_scroll();
    // background_fixed();

})
document.addEventListener("scroll", function(){
    animationOnHandler();
    
})


const background_fixed = () => {
    // 섹션 별 배경 고정
    const sections = document.querySelectorAll(".sec3 article .bg");

    window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const offsetTop = section.parentElement.offsetTop;
        const height = section.parentElement.offsetHeight;

        // 섹션 안에서만 background-position 조정
        if (scrollY + window.innerHeight > offsetTop && scrollY < offsetTop + height) {
        const yPos = (scrollY - offsetTop) * 0.5; // 속도 조정 가능
        section.style.backgroundPosition = `center ${-yPos}px`;
        }
    });
    });
}


const lenis_scroll = () => {
    const lenis = new Lenis({
    duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(10, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    $(".topBtn").on("click", function(e){
        e.preventDefault();
        lenis.scrollTo(0, {
            duration: 2.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(10, -10 * t))
        });
    });
}

const privacyUsePopup = () => {
    $('.privacyPopupBtn').click(function(){
        $('#privacyPopup').addClass('active');
    })
    $('.usePopupBtn').click(function(){
        $('#usePopup').addClass('active');
    })
    $('.privacyPopup .contentWrap .titleBox .closeBtn').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup .contentWrap').click(function(e){
        e.stopPropagation()
    })
}
const bodyScroll = () => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,         // ← 숫자 높을수록 감속이 강해짐
        effects: true,        // 패럴럭스 같은 ScrollTrigger 효과 활성화
        ease: "power4.out", // 더 강한 감속 (추천)
        autoKill: false // 스크롤 중단 방지
    });
}
const headerScrollHandler = () => {
    /* header */
    const header_main = document.querySelector('header');

    if(header_main){
        document.addEventListener("scroll", function(){
            let scroll_top = window.scrollY;
            if(scroll_top > 0){
                header_main.classList.add("on");
            }else{
                header_main.classList.remove("on");
            }
        })
    }
}
const animationOnHandler = () => {
    const countList = document.querySelectorAll('.ani');
    if (countList.length) {
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                } else {
                    entry.target.classList.remove('on');
                }
            });
        }, {
            threshold: 0.5 // Adjust threshold as needed
        });
        
        // Observe each .ani element
        countList.forEach(element => observer.observe(element));
    }
}

