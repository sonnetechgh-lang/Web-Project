document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }

  // Mobile Menu Logic
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
          mobileMenuToggle.classList.toggle('active');
          nav.classList.toggle('active');
          document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
      });

      // Close menu when clicking a link
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              mobileMenuToggle.classList.remove('active');
              nav.classList.remove('active');
              document.body.style.overflow = '';
          });
      });
  }

  // Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              const headerHeight = document.querySelector('.header').offsetHeight;
              const targetPosition = targetElement.offsetTop - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Form Handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', async function(e) {
          if (contactForm.getAttribute('action')) {
              // Allow default submission for Formspree
              return;
          }
          e.preventDefault();
          // Add custom handling here if needed
      });
  }
});



