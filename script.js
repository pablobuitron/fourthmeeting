// Toggle mobile nav
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
  });
});

// Close menu when tapping outside
document.addEventListener('click', (e) => {
  const target = e.target;
  const clickedInsideMenu = navMenu?.contains(target);
  const clickedHamburger = hamburger?.contains(target);

  if (!clickedInsideMenu && !clickedHamburger) {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
  }
});

// Smooth scroll only for anchors that exist on the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    const target = href ? document.querySelector(href) : null;
    if (!target) return; // if not on this page, do nothing

    e.preventDefault();
    const topOffset = target.offsetTop - 80;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  });
});
