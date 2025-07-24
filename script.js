// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuIcon = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('nav .nav-links');
  mobileMenuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    // change icon between bars and times
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
  });

  // Close menu on link click (mobile)
  document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuIcon.querySelector('i').classList.add('fa-bars');
      mobileMenuIcon.querySelector('i').classList.remove('fa-times');
    });
  });

  // Change nav background on scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 10) {
      nav.style.background = 'rgba(10, 25, 49, 0.95)';
    } else {
      nav.style.background = 'var(--dark-bg)';
    }
  });
});