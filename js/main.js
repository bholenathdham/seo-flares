document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* Navigation / Hamburger */
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.navlinks');

  const closeMenu = () => {
    if (!nav) return;
    nav.classList.remove('open');
    if (menu) menu.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    if (!menu || !nav) return;
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  };

  if (menu && nav) {
    menu.setAttribute('aria-expanded', 'false');

    menu.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu();
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(event.target) || menu.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    }, { passive: true });
  }

  /* Current year */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* Number counters */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;

    const suffix = el.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach((counter) => {
      const target = Number(counter.dataset.count);
      if (Number.isFinite(target)) {
        counter.textContent = target + (counter.dataset.suffix || '');
      }
    });
  }

  /* Demo / contact forms */
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      if (!button) return;

      const oldText = button.textContent;
      button.textContent = 'Message ready — connect your form backend';
      button.disabled = true;

      window.setTimeout(() => {
        button.textContent = oldText;
        button.disabled = false;
      }, 3000);
    });
  });

  /* Motion */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const revealSelectors = [
    '.principle',
    '.service-feature',
    '.editorial-copy',
    '.editorial-visual',
    '.why-card',
    '.industry-grid > div',
    '.process-line article',
    '.deliverable-grid > div',
    '.testimonial-card',
    '.content-columns article'
  ];

  const revealItems = document.querySelectorAll(revealSelectors.join(','));

  if ('IntersectionObserver' in window && revealItems.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const delay = Number(element.dataset.revealDelay || 0);

        element.animate(
          [
            { opacity: 0, transform: 'translate3d(0,24px,0)' },
            { opacity: 1, transform: 'translate3d(0,0,0)' }
          ],
          {
            duration: 700,
            delay,
            easing: 'cubic-bezier(.2,.75,.25,1)',
            fill: 'both'
          }
        );

        observer.unobserve(element);
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach((element, index) => {
      element.dataset.revealDelay = String((index % 4) * 70);
      revealObserver.observe(element);
    });
  }

  /* Hero entrance */
  const heroItems = document.querySelectorAll(
    '.hero .eyebrow, .hero h1, .hero p, .hero .hero-actions, .hero .hero-proof, .hero-art-large'
  );

  heroItems.forEach((element, index) => {
    element.animate(
      [
        {
          opacity: 0,
          transform: index === heroItems.length - 1
            ? 'translate3d(0,18px,0) scale(.985)'
            : 'translate3d(0,18px,0)'
        },
        {
          opacity: 1,
          transform: index === heroItems.length - 1
            ? 'translate3d(0,0,0) scale(1)'
            : 'translate3d(0,0,0)'
        }
      ],
      {
        duration: 800,
        delay: 100 + index * 80,
        easing: 'cubic-bezier(.2,.75,.25,1)',
        fill: 'both'
      }
    );
  });

  /* Subtle desktop visual hover depth */
  document.querySelectorAll(
    '.hero-art-large, .editorial-visual, .performance-visual, .work-card'
  ).forEach((element) => {
    element.addEventListener('pointerenter', () => {
      if (window.innerWidth < 768) return;
      element.animate(
        [
          { transform: 'translate3d(0,0,0)' },
          { transform: 'translate3d(0,-4px,0)' }
        ],
        {
          duration: 300,
          easing: 'cubic-bezier(.2,.75,.25,1)',
          fill: 'forwards'
        }
      );
    });

    element.addEventListener('pointerleave', () => {
      if (window.innerWidth < 768) return;
      element.animate(
        [
          { transform: 'translate3d(0,-4px,0)' },
          { transform: 'translate3d(0,0,0)' }
        ],
        {
          duration: 350,
          easing: 'cubic-bezier(.2,.75,.25,1)',
          fill: 'forwards'
        }
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu");
  const navLinks = document.querySelector(".navlinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("nav-open");
      menuBtn.classList.toggle("nav-open"); // Optional: handy if you want to style the hamburger button itself when open
    });

    // Close the menu if a user clicks anywhere outside of it
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove("nav-open");
        menuBtn.classList.remove("nav-open");
      }
    });
  }
});