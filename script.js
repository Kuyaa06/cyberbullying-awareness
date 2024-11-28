// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
  });

  // Toggle mobile navigation menu
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('hidden');
  });

  // Contact form validation
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
          alert('Please fill out all fields.');
      } else {
          alert('Thank you for contacting us!');
          contactForm.reset();
      }
  });
});
