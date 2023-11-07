"use strict";

/**
 * Function: domReady
 */
const domReady = function () {
  /* Hamburger Menu */
  const nav_main = document.getElementById('main-nav')
  const nav_toggle = document.getElementById('nav-toggle')

  nav_toggle.addEventListener('click', function () {
    if (nav_main.classList.contains('toggle-show')) {
      nav_main.classList.remove('toggle-show')
    } else {
      nav_main.classList.add('toggle-show')
    }
  });


  /* Smooth Scrolling behavior with fixed header offset */
  document.addEventListener('click', (event) => {
    if (event.target.matches('a[href^="#"]')) {
      const id = event.target.getAttribute('href').substring(1);
      const element = document.getElementById(id);
      if (element) {
        const rootStyles = getComputedStyle(document.documentElement);
        const headerHeightValue = rootStyles.getPropertyValue('--header-height');

        // Create a temporary element
        const tempElement = document.createElement('div');
        tempElement.style.setProperty('height', headerHeightValue);

        document.body.appendChild(tempElement);
        const computedStyle = getComputedStyle(tempElement);
        const headerHeight = parseInt(computedStyle.getPropertyValue('height'));
        document.body.removeChild(tempElement);

        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
        event.preventDefault();
      }
    }
  });

  /* Run slider after 4seconds */
  setTimeout(() => {
    import('@glidejs/glide/dist/glide.modular.esm').then(({ default: Glide, Autoplay, Controls }) => {
      const glider = new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        keyboard: true,
        autoplay: 3000,
        animationDuration: 1000
      });
      glider.mount({ Autoplay, Controls });
    });
  }, 4000);


};


/**
  *  Start running
  * */
if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  domReady();
} else {
  document.addEventListener("DOMContentLoaded", domReady);
}



const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const navLinks = mainNav.getElementsByTagName('a');
let isOpen = false;

navToggle.addEventListener("click", () => {
  // isOpen = !isOpen;
  if (isOpen) {
    mainNav.style.display = "none";
    mainNav.classList.remove("opened");
    mainNav.classList.add("closed");
    isOpen = false;
  } else {
    mainNav.style.display = "block";
    mainNav.classList.remove("closed");
    mainNav.classList.add("opened");
    isOpen = true;
  }
});

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("closed");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    mainNav.style.display = "none";
    // mainNav.classList.remove("opened");
    mainNav.classList.add("closed");
    isOpen = false;
  });
}



