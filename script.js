const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const actions = document.getElementById('searchActions');
const unsplashLink = document.getElementById('unsplashLink');
const googleLink = document.getElementById('googleLink');
const resultsTitle = document.getElementById('resultsTitle');
const resultNote = document.getElementById('resultNote');
function searchImages(query) {
  const q = query.trim();
  if (!q) { input.focus(); return; }
  const encoded = encodeURIComponent(q);
  unsplashLink.href = `https://unsplash.com/s/photos/${encoded}`;
  googleLink.href = `https://www.google.com/search?tbm=isch&q=${encoded}+4k`;
  resultsTitle.textContent = `نتائج البحث: ${q}`;
  resultNote.textContent = 'روابط من مصادر خارجية';
  actions.hidden = false;
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  actions.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
form.addEventListener('submit', event => { event.preventDefault(); searchImages(input.value); });
document.querySelectorAll('[data-query]').forEach(button => button.addEventListener('click', () => { input.value = button.dataset.query; searchImages(button.dataset.query); }));
document.getElementById('themeToggle').addEventListener('click', () => document.body.classList.toggle('light'));
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(b => b.classList.remove('active')); button.classList.add('active'); input.value = button.dataset.query; searchImages(button.dataset.query); }));
