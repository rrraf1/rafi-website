gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
wrapper: "#smooth-wrapper",
content: "#smooth-content",
smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
effects: true, // looks for data-speed and data-lag attributes on elements
smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
autoResize: true,
});

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for Headline
    gsap.from("#headline", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: "#headline",
            start: "top center",
        },
    });

    // Animation for Intro
    gsap.from("#intro", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: "#intro",
            start: "top center",
        },
    });

    // Animation for SVG
    gsap.from("#wave", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: "#wave",
            start: "top center",
        },
    });

    // Animation for Social Media
    gsap.from("#social-media li", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#social-media",
            start: "top center",
        },
    });
});