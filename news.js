document.querySelectorAll('.news-summary').forEach((summary) => {
  summary.addEventListener('click', () => {
    const detail = summary.nextElementSibling;
    if (!detail || !detail.classList.contains('news-detail')) return;
    const isOpen = summary.getAttribute('aria-expanded') === 'true';
    summary.setAttribute('aria-expanded', String(!isOpen));
    detail.hidden = isOpen;
  });
});
