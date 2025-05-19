
gsap.registerPlugin(ScrollTrigger)



// s0

const s0 = gsap.timeline({
    duration: 1, ease: "power4.out", delay: -1
});

s0.fromTo('header',

    { y: -100 },
    { y: 0 }
)

    .fromTo(".my span",
        { opacity: 0, y: 100, stagger: .1 },
        { opacity: 1, y: 0, stagger: .1 }
    )

    .fromTo(".journey span",
        { opacity: 0, y: 100, stagger: .1 },
        { opacity: 1, y: 0, stagger: .1 }
    )
    .fromTo(".sky span",
        { opacity: 0, y: 100, stagger: .1 },
        { opacity: 1, y: 0, stagger: .1 }
    );

s0.fromTo('.introduction .deco',
    { opacity: 0, x: 30, stagger: .2 },
    { opacity: 1, x: 0, stagger: .2 }
)

s0.fromTo('section.introduction p.description',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0 }
)

s0.fromTo('.introduction .star1',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1 },
)

// 1
const contentLeft = document.querySelector('.content-left');
const contentRight = document.querySelector('.content-right');

window.addEventListener('scroll', function () {
    const leftPosition = contentLeft.getBoundingClientRect().top;
    const rightPosition = contentRight.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (leftPosition < screenHeight - 100) {
        contentLeft.classList.add('show');
    }
    if (rightPosition < screenHeight - 100) {
        contentRight.classList.add('show');
    }
    // 스크롤할 때마다 체크
    //window.addEventListener('scroll', checkPosition);

    // 페이지 로드 직후에도 한 번 체크
    //window.addEventListener('load', checkPosition);
}

);


// 현재 날짜
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedDate = `${year} . ${month} . ${day}`;

    const dateSpan = document.querySelector("header .rel span:first-child");
    if (dateSpan) {
        dateSpan.textContent = formattedDate;
    }
});


$(function () {
    const $projects = $('.project-lst > li');

    $projects.each(function () {
        const $project = $(this);
        const $content = $project.find('.content');

        // 데스크탑에서만 마우스 이벤트 적용
        if (!('ontouchstart' in window)) {
            $project.on('mouseenter', function () {
                $project.addClass('On');
            });

            $project.on('mouseleave', function () {
                $project.removeClass('On');
                if ($content.length) {
                    $content.stop(true, true).slideUp(300);
                }
            });
        }

        // 클릭(또는 터치) 시 토글
        $project.on('click', function (e) {


            // 링크 클릭이면 패스
            if ($(e.target).closest('.link-box a').length) {
                return;
            }            
            e.preventDefault();

            // 토글 처리
            if ($content.length) {
                const isOpen = $content.is(':visible');
                
                // 먼저 모든 항목 닫기 (선택적으로)
                $('.project-lst .content').slideUp(300);
                $('.project-lst > li').removeClass('On');

                if (!isOpen) {
                    $content.stop(true, true).slideDown(300);
                    $project.addClass('On');
                }
            }
        });
    });
});


//cursor
document.addEventListener('DOMContentLoaded', function () {//start


    const customCursor = document.querySelector('.cursor-wrap')
    const customCursor2 = document.querySelector('.cursor-wrap .cursor')

    const mouseEventEl = document.querySelectorAll('.mouse-event')

    document.addEventListener('mousemove', function (e) {

        // console.log(e.clientX, e.clientY);

        gsap.to(customCursor, {
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            duration: .1,
            opacity: 1
        })

    })

    document.querySelectorAll('a,button').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            gsap.to(customCursor2, {
                scale: .3,
                duration: .1
            })
        })
        el.addEventListener('mouseleave', () => {
            gsap.to(customCursor2, {
                scale: 1,
                duration: .1
            })
        })
    })


    const mouseTl = gsap.timeline({ paused: true })


    mouseTl.to('.cursor-wrap .learn-more ', {
        opacity: 1,
        duration: .1
    })


    mouseEventEl.forEach((el => {
        el.addEventListener('mouseenter', () => {
            mouseTl.play()
        })
        el.addEventListener('mouseleave', () => {
            mouseTl.reverse()
        })
    }))



})//end

