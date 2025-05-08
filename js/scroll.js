const links = document.querySelectorAll('ul li.link')
const sections = document.querySelectorAll('#wrap>section')
let pageNum = 0
let totalNum = sections.length

init(pageNum)


window.addEventListener('scroll', function () {
    let scroll = window.scrollY || this.window.pageYOffset

    for (let i = 0; i < totalNum; i++) {
        if (scroll > sections[i].offsetTop - window.outerHeight / 1.5 &&
            scroll < sections[i].offsetTop - window.outerHeight / 1.5 + sections[i].offsetHeight) {

            pageNum = i
            init(pageNum)
            // console.log(scroll,pageNum)
            funcObj[`f_${pageNum}`]()

        }
    }
})

let funcObj = {
    f_0: function () {
        console.log('0번 함수')
    },
    f_1: function () {
        const scene1 = gsap.timeline({
            duration: .1,
            delay: -.1
        })

        scene1.to('.section-title>*', {
            opacity: 1,
            stagger: .1,
            x: 10,
        })
        scene1.to('.role-info span ', {
            opacity: 1,
            stagger: .1,
            x: 10,
        })
        scene1.to('.content .content-left .profile-info>*', {
            opacity: 1,
            stagger: .1,
            x: 10,
        })
        scene1.to('.content-right .profile-education>div', {
            opacity: 1,
            stagger: .1,
            x: 10,
        })
        scene1.to('.skills h4 ', {
            opacity: 1,
            stagger: .1,
            x: -10,
        })
        scene1.to('.skills-list ul li ', {
            opacity: 1,
            stagger: .1,
            x: -10,
        })
        const progressBars = gsap.utils.toArray('.bar .progress-bar');
        const widths = ['90%', '70%', '85%', '60%', '70%', '90%', '70%', '90%'];

        scene1.to(progressBars, {
            width: i => widths[i],
            duration: 1,
            ease: 'power2.out',
            stagger: .1,
        });

        console.log(1)
    },
    f_2: function () {
        console.log(2)
    },
    f_3: function () {

        const tl = gsap.timeline()

        tl.to('#s3 .tit-wrap>* ', {
            opacity: 1,
            stagger: .3,
            x: 10
        })
        tl.to('.project-lst li ', {
            opacity: 1,
            stagger: .3
        })

    },
    f_4: function () {
        console.log(4)
    },

}

funcObj['f_0']()


gsap.registerPlugin(ScrollToPlugin);

function init(i) {
    links.forEach((link) => link.classList.remove('active'))
    sections.forEach((section) => section.classList.remove('current'))

    links[i].classList.add('active')
    sections[i].classList.add('current')
}

links.forEach(function (link, index) {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        init(index);


        gsap.to(window, {
            duration: 1,
            ease: "power2.out",
            scrollTo: {
                y: `#s${index}`
            }
        })

    })

})