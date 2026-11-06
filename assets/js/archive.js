/* Match independent category pages and the categories of an individual post. */
(() => {
  const links = Array.from(document.querySelectorAll('.sidebar .nav__items ul a'));
  const context = document.getElementById('archive-context');
  let categories = [];
  try { categories = JSON.parse(context?.textContent || '[]') || []; } catch (_) { /* No post context. */ }
  const update = () => {
    links.forEach(link => {
      const target = new URL(link.href);
      const isCurrentPage = target.pathname === window.location.pathname;
      const selected = isCurrentPage || categories.includes(link.textContent.trim());
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', isCurrentPage ? 'page' : 'location');
      else link.removeAttribute('aria-current');
    });
  };
  update();
})();
