// Configuration Tailwind (palette et typographies du site)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: '#FBFAF6',
        ink: '#262420',
        forest: {
          DEFAULT: '#1D3B2E',
          light: '#3F6652',
          50: '#EEF3F0',
        },
        terracotta: {
          DEFAULT: '#C1502C',
          light: '#E0714C',
        },
        sand: '#E9E3D5',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    }
  }
};

// Menu mobile + animations au scroll (une fois le DOM prêt)
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => {
    el.classList.remove('in-view');
    observer.observe(el);
  });
});