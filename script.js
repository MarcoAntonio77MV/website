// Smooth scroll for in-page anchors
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    history.replaceState(null, '', '#'+id);
  }
});

// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  if (!menu) return;
  const btn = menu.querySelector('.hamburger');
  const panel = menu.querySelector('.menu-panel');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', menu.classList.contains('open'));
  });
  panel.addEventListener('click', (e)=> e.stopPropagation());
  document.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  const path = location.pathname.split('/').pop() || 'index.html';
  panel.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href').endswith(path)) a.classList.add('active');
  });
});
