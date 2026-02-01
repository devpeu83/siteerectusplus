// Main JavaScript file for Site Erectus Plus

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Site Erectus Plus loaded successfully!');

  // Smooth scrolling for anchor links
  initSmoothScroll();

  // Add any other initialization functions here
});

/**
 * Enable smooth scrolling for anchor links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Export functions if using modules
// export { initSmoothScroll };
