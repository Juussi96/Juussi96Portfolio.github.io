const sections = document.querySelectorAll('.section');
const navBtns = document.querySelectorAll('.nav-links button');

function openSection(id) {
  const target = document.getElementById('section-' + id);
  if (!target) return;
  const isOpen = target.classList.contains('open');

  // close all
  sections.forEach((s) => {
    s.classList.remove('open');
    s.querySelector('.section-header').setAttribute('aria-expanded', 'false');
  });
  navBtns.forEach((b) => b.classList.remove('active'));

  if (!isOpen) {
    target.classList.add('open');
    target
      .querySelector('.section-header')
      .setAttribute('aria-expanded', 'true');
    document
      .querySelector(`.nav-links button[data-section="${id}"]`)
      ?.classList.add('active');
    setTimeout(
      () => target.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      40,
    );
  }
}

// section headers
document.querySelectorAll('.section-header').forEach((btn) => {
  btn.addEventListener('click', () => openSection(btn.dataset.target));
});

// nav links
navBtns.forEach((btn) => {
  btn.addEventListener('click', () => openSection(btn.dataset.section));
});

// hero CTA
document
  .querySelector('.hero-cta')
  .addEventListener('click', () => openSection('contact'));
