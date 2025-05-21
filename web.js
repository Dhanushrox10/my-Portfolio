// Website Title JS
const originalTitle = document.title;

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "Come back soon❤️!";
  } else {
    document.title = originalTitle;
  }
});

// tsParticles config
tsParticles.load("tsparticles", {
  background: {
    color: { value: "#ffffff" }
  },
  fpsLimit: 70,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#000000" },
    links: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: { enable: true, speed: 2 },
    number: {
      density: { enable: true, area: 800 },
      value: 70
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } }
  },
  detectRetina: true
});

// Typed.js setup
const typed = new Typed('#typed', {
  strings: ["Web Development", "Frontend Development", "Web Designing", "Programming"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1000,
  loop: true
});

//Mobile-view Menus
document.addEventListener("DOMContentLoaded", () => {  
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.querySelectorAll(".menu li a, .mobile-menu li a");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("active");
  });

// Close mobile menu when any link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });

// Scroll-based active section highlight
const sections = document.querySelectorAll("section");
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
  {
    threshold: 0.6, // Trigger when 60% of section is visible
  }
);

  sections.forEach((section) => {
    scrollObserver.observe(section);
  });

  // Initial active link for hash URL on load
  const hash = window.location.hash;
  if (hash) {
    const activeLink = document.querySelector(`a[href="${hash}"]`);
    if (activeLink) {
      navLinks.forEach((link) => link.classList.remove("active"));
      activeLink.classList.add("active");
    }
  }

// Slide-in animations on scroll
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  const animatedEls = document.querySelectorAll(
    ".slide-in-left, .slide-in-right, .slide-in-down, .slide-in-up"
  );
  animatedEls.forEach((el) => animationObserver.observe(el));
});

//Forms Reset whlie Navigating-back
window.addEventListener('pageshow', (event) => {
  if (event.persisted || window.performance && window.performance.getEntriesByType('navigation')[0].type === 'back_forward') {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());
  }
});


