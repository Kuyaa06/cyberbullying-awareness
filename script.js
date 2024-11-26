// Handle form submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  alert('Thank you for your message. We will get back to you shortly.');
});

// Fetch data from an API and log it (optional example)
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error)); // Add error handling

// Toggle navigation menu for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
