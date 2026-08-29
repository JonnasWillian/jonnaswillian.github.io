// =========================================================
// Jonnas Willian, Portfólio
// Script único, sem dependência de framework.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV: estado ao rolar + menu mobile ---------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });

  /* ---------- NAV: destaque da seção ativa ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks.querySelectorAll('a');

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => spy.observe(s));

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal:not(.is-visible)');
  const revealer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealer.observe(el));

  /* ---------- SPOTLIGHT NOS CARDS (segue o cursor) ---------- */
  document.querySelectorAll('.skill-group, .system-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  /* ---------- BOTÃO VOLTAR AO TOPO ---------- */
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- GALERIA / LIGHTBOX ---------- */
  const galleries = {
    devscody:   { title: 'DevsCody Landing Page', base: 'assets/devsCodyOfc/', files: ['devscody1.jpeg', 'devscody2.jpeg', 'devscody3.jpeg', 'devscody4.jpeg'] },
    finance:    { title: 'Plataforma de Finanças', base: 'assets/finance/', files: ['finance1.jpeg', 'finance2.jpeg', 'finance3.jpeg'] },
    flashPlay:  { title: 'Sistema de RH Flash Play', base: 'assets/flashPlay/', files: ['flashplay 1.jpeg', 'flashplay 2.jpeg', 'flashplay 3.jpeg', 'flashplay 4.jpeg'] },
    duartes:    { title: 'Escritório de Advocacia', base: 'assets/duartesAdvogacia/', files: ['DuartesAdv 1.jpeg', 'DuartesAdv 2.jpeg', 'DuartesAdv 3.jpeg', 'DuartesAdv 4.jpeg'] },
    corteCerto: { title: 'Sistema Corte Certo', base: 'assets/corteCerto/', files: ['Corte certo 1.jpeg', 'Corte certo 2.jpeg', 'Corte certo 3.jpeg', 'Corte certo 4.jpeg', 'Corte certo 5.jpeg'] },
    burguer:    { title: 'App Burguer Shop', base: 'assets/appBurguerShop/', files: ['AppBurguerShop1.jpeg', 'AppBurguerShop2.jpeg', 'AppBurguerShop3.jpeg', 'AppBurguerShop4.jpeg'] },
  };

  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let currentGallery = null;
  let currentIndex = 0;

  function renderSlide() {
    const g = galleries[currentGallery];
    const file = g.files[currentIndex];
    lbImage.src = g.base + file;
    lbImage.alt = `${g.title}, imagem ${currentIndex + 1} de ${g.files.length}`;
    lbCaption.textContent = `${g.title} (${currentIndex + 1} / ${g.files.length})`;
  }

  function openGallery(key) {
    if (!galleries[key]) return;
    currentGallery = key;
    currentIndex = 0;
    renderSlide();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function step(n) {
    const g = galleries[currentGallery];
    currentIndex = (currentIndex + n + g.files.length) % g.files.length;
    renderSlide();
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openGallery(card.dataset.gallery));
  });

  lbClose.addEventListener('click', closeGallery);
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); step(1); });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeGallery();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

});
