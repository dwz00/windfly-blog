(function () {
  const root = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const year = document.getElementById('year');
  const backToTop = document.getElementById('back-to-top');

  // Year
  if (year) year.textContent = String(new Date().getFullYear());

  // Theme
  const key = 'theme';
  const saved = localStorage.getItem(key);
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
  }

  if (btn) btn.addEventListener('click', toggleTheme);

  // Back to top
  if (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();