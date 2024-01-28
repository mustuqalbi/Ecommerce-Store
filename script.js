var tl = gsap.timeline()

tl.from("#nav-p", {
    y: -200,
    oppacity: 0,
    scale: 2,
    delay: 1,
    duration: 0.4,
    stagger: 0.09,
})
tl.from("#first-page", {
    scale: 1.5,
    x: 800,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
})
tl.from("#first-page1", {
    scale: 1.5,
    x: -800,
    opacity: 0,
    duration: 1.4,
})
gsap.from("#c1", {
    x: 500,
    opacity: 0,
    stagger: 0.3,
    duration: 0.6,
    scale: 2,
    scrollTrigger: {
        trigger: "#c1",
        scroller: "body",
        start: "top 60%",
        end: "top 45%",
        scrub: 3,
    }
});
gsap.from("#c2", {
    x: -500,
    opacity: 0,
    stagger: 0.3,
    duration: 0.6,
    scale: 2,
    scrollTrigger: {
        trigger: "#c2",
        scroller: "body",
        start: "top 60%",
        end: "top 45%",
        scrub: 3,
    }
});

gsap.from("#f-line", {
    x: 600,
    opacity: 0,
    stagger: 0.3,
    duration: 0.6,
    scale: 1,
    scrollTrigger: {
        trigger: "#f-line",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 45%",
        scrub: 3,
    }
});

