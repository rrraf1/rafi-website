document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main");
    const navLinks = document.querySelectorAll("nav a");
  
    window.addEventListener("scroll", function () {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("active");
        }
      });
    });
  });
  