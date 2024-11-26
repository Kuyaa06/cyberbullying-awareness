// Handle form submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from reloading the page

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate inputs with enhanced feedback
  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting the form.');
    return;
  }

  // Simulate form submission feedback
  alert(`Thank you, ${name}! Your message has been submitted successfully.`);
  document.getElementById('contact-form').reset(); // Clear form fields after submission
});

// Fetch data from an API and log it (optional example)
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Uncomment below to use the fetch functionality
// fetchData();

// Mobile navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open'); // Optional: adds "open" class for styling the toggle button
});

// Close mobile menu when a link is clicked
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
  }
});

// Add animations when toggling the menu
menuToggle.addEventListener('click', () => {
  navLinks.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition for appearance
  if (navLinks.classList.contains('active')) {
    navLinks.style.transform = 'translateY(0)'; // Menu appears
  } else {
    navLinks.style.transform = 'translateY(-100%)'; // Menu hides
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add basic error feedback for invalid inputs (optional)
const formFields = document.querySelectorAll('#contact-form input, #contact-form textarea');
formFields.forEach((field) => {
  field.addEventListener('invalid', (event) => {
    event.preventDefault();
    alert(`${field.name} is required. Please fill it out correctly.`);
    field.focus();
  });
});
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
