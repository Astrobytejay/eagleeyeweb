(function () {
  "use strict";

  // Set initial logo when page loads
  window.onload = function () {
    const logoElement = document.querySelector(".header-logo");
    if (logoElement) {
      logoElement.src = "assets/images/eagleeye.png"; // Ensure initial logo is set
      logoElement.style.width = "60px"; // Set initial size of logo
      logoElement.style.height = "auto"; // Maintain aspect ratio
    }
  };

  // ======= Sticky Header Logic
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelectorAll(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    if (logo.length) {
      // === Ensure the eagleeye.png logo persists
      const logoElement = document.querySelector(".header-logo");
      logoElement.src = "assets/images/eagleeye.png";
      logoElement.style.width = "60px"; // Ensure correct width (px)
      logoElement.style.height = "auto"; // Maintain aspect ratio
    }

    if (document.documentElement.classList.contains("dark")) {
      if (logo.length) {
        // === Dark mode logo handling
        const logoElement = document.querySelector(".header-logo");
        logoElement.src = "assets/images/eagleeye.png";
        logoElement.style.width = "60px"; // Ensure correct units (px)
        logoElement.style.height = "auto"; // Maintain aspect ratio
      }
    }

    // Show or hide the back-to-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== Responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== Close navbar-collapse when a clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu toggle
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion functionality
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow.js initialization for animations
  new WOW().init();

  // ====== Scroll top js functionality
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };

  /* ========  themeSwitcher start ========= */

  // themeSwitcher logic
  const themeSwitcher = document.getElementById('themeSwitcher');

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial Theme Check
  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  // Trigger theme switch on button click
  themeSwitcher.addEventListener('click', () => {
    themeSwitch();
  });

  // Perform theme check on page load
  themeCheck();
  /* ========  themeSwitcher End ========= */
})();
