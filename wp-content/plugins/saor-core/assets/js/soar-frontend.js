;(function($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {

        /* ==================================================
            # Project Carousel
        ===============================================*/
        elementorFrontend.hooks.addAction('frontend/element_ready/saorservice.default',function($scope) {
              /*---------- Lenis Js ----------*/
    let lenis;

    // Function to initialize Lenis
    function initializeLenis() {
        lenis = new Lenis({
            lerp: 0.1, // Smooth scrolling duration
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Update Lenis with GSAP's ticker
        });

        // Allow natural scrolling for specific elements
        const scrollableElements = document.querySelectorAll('.allow-natural-scroll');
        scrollableElements.forEach((element) => {
            element.addEventListener('wheel', (event) => {
            event.stopPropagation(); // Prevent Lenis from intercepting scroll
            });

            element.addEventListener('touchmove', (event) => {
            event.stopPropagation(); // Prevent Lenis from intercepting touch scrolling
            });
        });
    }

    // Function to enable or disable Lenis based on screen width
    function enableOrDisableLenis() {
        if (window.innerWidth > 991) {
            if (!lenis) {
            initializeLenis(); // Enable Lenis on non-mobile devices
            }
            lenis.start(); // Ensure Lenis is running
        } else {
            if (lenis) {
            lenis.stop(); // Disable Lenis on mobile
            lenis = null; // Clean up Lenis instance
            }
        }
    }
    // Initial check on load
    enableOrDisableLenis();

    // Add resize event listener to toggle Lenis dynamically
    window.addEventListener('resize', enableOrDisableLenis);

    //gsap sticky fixed 
    $(document).ready(function () {

        if ($('.sticky-wrapper').length > 0) {
            // updateSmoothWrapperPadding
            function updateSmoothWrapperPadding() {
                var headerHeight = $('.th-header').outerHeight();
                $('#smooth-wrapper').css('padding-top', 0 + 'px');
            }

            function refreshPaddingBasedOnSticky() {
                var isSticky = $('.sticky-wrapper').hasClass('sticky');
                if (isSticky) {
                    $('#smooth-wrapper').css('padding-top', '0');
                } else {
                    updateSmoothWrapperPadding();
                }
            }
            refreshPaddingBasedOnSticky();
            $(window).resize(function () {
                refreshPaddingBasedOnSticky();
            });
            if (typeof MutationObserver !== 'undefined') {
                var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            refreshPaddingBasedOnSticky();
                        }
                    });
                });
                observer.observe(document.querySelector('.sticky-wrapper'), {
                    attributes: true
                });
            }
        }

        // Cursor smoothness
        $(document).mousemove(function (event) {
            var mouseX = event.pageX;
            var mouseY = event.pageY;
            $('.custom-element').animate({
                left: mouseX,
                top: mouseY
            }, 300);
        });
    });
    //gsap sticky fixed 
    if ($('.text-ani-style').length) {
        let staggerAmount = 0.05,
            translateXValue = 0,
            delayValue = 0.5,
            animatedTextElements = document.querySelectorAll('.text-ani-style');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, {
                type: "chars, words"
            });
            gsap.from(animationSplitText.words, {
                duration: 1,
                delay: delayValue,
                x: 20,
                autoAlpha: 0,
                stagger: staggerAmount,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%"
                },
            });
        });
    }

    if ($('.text-ani-style2').length) {
        let staggerAmount = 0.05,
            translateXValue = 20,
            delayValue = 0.5,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll('.text-ani-style2');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, {
                type: "chars, words"
            });
            gsap.from(animationSplitText.chars, {
                duration: 1,
                delay: delayValue,
                x: translateXValue,
                autoAlpha: 0,
                stagger: staggerAmount,
                ease: easeType,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%"
                },
            });
        });
    }

    if ($('.text-ani-style3').length) {
        let animatedTextElements = document.querySelectorAll('.text-ani-style3');

        animatedTextElements.forEach((element) => {
            //Reset if needed
            if (element.animation) {
                element.animation.progress(1).kill();
                element.split.revert();
            }

            element.split = new SplitText(element, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(element, {
                perspective: 400
            });

            gsap.set(element.split.chars, {
                opacity: 0,
                x: "50",
            });

            element.animation = gsap.to(element.split.chars, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%"
                },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });
    }
    if ($('.th-anim').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".th-anim");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });
    }

        });

    });
}(jQuery));