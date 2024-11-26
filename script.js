document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
  });
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    