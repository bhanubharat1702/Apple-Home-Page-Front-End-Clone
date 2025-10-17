const selectElement = (element) => document.querySelector(element);

selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});

// Simple smooth scroll function for mobile/tablet
function smoothScrollTo(target) {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const headerOffset = 80;
  const elementPosition = targetElement.offsetTop;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Close mobile menu when navigation links are clicked
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    // Check if we're on mobile/tablet (screen width <= 1024px)
      if (window.innerWidth <= 1024) {
        e.preventDefault(); // Prevent default anchor behavior
        smoothScrollTo(href); // Use smooth scroll for mobile/tablet
      }
    
    selectElement("header").classList.remove("active");
  });
});
