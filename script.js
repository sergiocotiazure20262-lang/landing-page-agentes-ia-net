'use strict';
// Todos os CTAs abrem uma conversa real. Não há formulário nem coleta de dados.
const whatsappMessage = 'Olá! Gostaria de mais informações sobre o curso Arquiteto de Inteligência Artificial com .NET.';
const whatsappUrl = 'https://wa.me/5521994182732?text=' + encodeURIComponent(whatsappMessage);
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappUrl; });
const menuButton = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu() { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded)); nav.classList.toggle('open', expanded);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); } });
const expandButton = document.querySelector('.expand-all');
const modules = Array.from(document.querySelectorAll('.module'));
function syncExpandButton() {
 const allOpen = modules.every(module => module.open);
 expandButton.setAttribute('aria-expanded', String(allOpen));
 expandButton.innerHTML = allOpen ? 'Recolher toda a ementa <span aria-hidden="true">−</span>' : 'Expandir toda a ementa <span aria-hidden="true">+</span>';
}
expandButton.addEventListener('click', () => { const expand = !modules.every(module => module.open); modules.forEach(module => { module.open = expand; }); syncExpandButton(); });
modules.forEach(module => module.addEventListener('toggle', syncExpandButton));
