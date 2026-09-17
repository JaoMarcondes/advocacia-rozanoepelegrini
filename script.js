const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('#whatsappForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const telefone = document.querySelector('#telefone').value.trim();
  const area = document.querySelector('#area').value;
  const mensagem = document.querySelector('#mensagem').value.trim();

  const text = [
    `Olá, meu nome é ${nome}.`,
    `Gostaria de atendimento na área de ${area}.`,
    telefone ? `Meu telefone é ${telefone}.` : '',
    mensagem ? `Resumo: ${mensagem}` : ''
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/5519997509697?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
