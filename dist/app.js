function playIntro() {
  const style = document.createElement('style');
  style.textContent = `
    body.intro-active{overflow:hidden}
    .site-intro{position:fixed;inset:0;z-index:100;display:grid;place-items:center;overflow:hidden;background:#030817;color:#f8faff;transition:opacity .7s ease,visibility .7s ease}
    .site-intro::before{content:"";position:absolute;width:min(74vw,920px);height:min(74vw,920px);border-radius:50%;background:radial-gradient(circle,#075bff42 0,transparent 63%);filter:blur(8px);transform:translate(16%,-10%)}
    .site-intro__content{position:relative;display:grid;grid-template-columns:auto auto;column-gap:24px;align-items:center;opacity:0;transform:translateY(20px) scale(.94);transition:opacity .48s 1.05s cubic-bezier(.2,.8,.2,1),transform .48s 1.05s cubic-bezier(.2,.8,.2,1)}
    .site-intro.is-visible .site-intro__content{opacity:1;transform:none}
    .site-intro__mark{width:156px;height:108px;filter:drop-shadow(0 0 24px #1677ff80)}
    .site-intro__word{display:grid;justify-items:start;gap:16px}
    .site-intro__name{margin:0;white-space:nowrap;font:800 clamp(30px,4vw,52px)/.9 var(--font);letter-spacing:-.07em}
    .site-intro__name span{display:inline-block;opacity:0;transform:translateY(12px)}
    .site-intro.is-visible .site-intro__name span{animation:intro-letter .48s cubic-bezier(.2,.8,.2,1) forwards}
    .site-intro.is-visible .site-intro__name span:nth-child(1){animation-delay:1.18s}.site-intro.is-visible .site-intro__name span:nth-child(2){animation-delay:1.35s}.site-intro.is-visible .site-intro__name span:nth-child(3){animation-delay:1.52s}.site-intro.is-visible .site-intro__name span:nth-child(4){animation-delay:1.69s}.site-intro.is-visible .site-intro__name span:nth-child(5){animation-delay:1.86s}.site-intro.is-visible .site-intro__name span:nth-child(6){animation-delay:2.03s}
    .site-intro__line{width:58px;height:2px;background:#00cfff;box-shadow:0 0 14px #00cfff;transform:scaleX(0);transform-origin:left;transition:transform .8s .55s ease}
    .site-intro.is-visible .site-intro__line{transform:scaleX(1)}
    .site-intro.is-leaving{opacity:0;visibility:hidden}
    .site-intro__line-art{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
    .site-intro__line-base,.site-intro__line-flow{fill:none;stroke-linecap:round}
    .site-intro__line-base{stroke:#1265e8;stroke-width:2;opacity:.72}
    .site-intro__line-flow{stroke:#00dfff;stroke-width:5;filter:drop-shadow(0 0 8px #00dfff);stroke-dasharray:140 860;stroke-dashoffset:1000;animation:intro-line 2s .16s linear forwards}
    @keyframes intro-line{to{stroke-dashoffset:-1000}}@keyframes intro-letter{to{opacity:1;transform:none}}
    @media(prefers-reduced-motion:reduce){.site-intro,.site-intro__content,.site-intro__line{transition-duration:.48s!important}.site-intro__line-flow{animation:intro-line 2s .16s linear forwards!important}.site-intro .site-intro__name span{animation:intro-letter .48s cubic-bezier(.2,.8,.2,1) forwards!important}}
  `;
  document.head.append(style);
  document.body.classList.add('intro-active');
  const intro = document.createElement('div');
  intro.className = 'site-intro';
  intro.setAttribute('role', 'status');
  intro.setAttribute('aria-label', 'Velden');
  intro.innerHTML = `<svg class="site-intro__line-art" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true"><path class="site-intro__line-base" pathLength="1000" d="M-120 545C180 390 360 630 600 470S930 135 1160 250S1360 430 1560 170"/><path class="site-intro__line-flow" pathLength="1000" d="M-120 545C180 390 360 630 600 470S930 135 1160 250S1360 430 1560 170"/></svg><div class="site-intro__content"><svg class="site-intro__mark" viewBox="0 0 100 70" aria-hidden="true"><path d="M0 0h35l21 35h32L73 70H40z" fill="#dce9ff"/><path d="M60 0h40L85 32H42z" fill="#0768ff"/></svg><div class="site-intro__word"><p class="site-intro__name" aria-label="Velden"><span>V</span><span>e</span><span>l</span><span>d</span><span>e</span><span>n</span></p></div></div>`;
  document.body.prepend(intro);
  requestAnimationFrame(() => setTimeout(() => intro.classList.add('is-visible'), 120));
  const visibleFor = 2300;
  setTimeout(() => {
    intro.classList.add('is-leaving');
    document.body.classList.remove('intro-active');
    setTimeout(() => intro.remove(), 750);
  }, visibleFor);
}

playIntro();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
document.querySelectorAll('a[href="#solucoes"]').forEach((link) => { link.href = 'solucoes.html'; });
document.querySelectorAll('a[href="#sobre"]').forEach((link) => { link.href = 'sobre.html'; });
document.querySelectorAll('a[href="#projetos"]').forEach((link) => { link.href = 'projetos.html'; });
document.querySelectorAll('#nav a').forEach((link) => {
  if (link.textContent.trim().toLowerCase() === 'projetos') {
    link.href = 'projetos.html';
    if (location.pathname.endsWith('/projetos.html') || location.pathname === '/projetos.html') {
      link.setAttribute('aria-current', 'page');
    }
  }
});
document.querySelectorAll('a[href="#contato"]').forEach((link) => { link.href = 'contato.html'; });
const pageRoutes = {
  'index.html#contato': 'contato.html',
  'index.html#projetos': 'projetos.html',
  'index.html#sobre': 'sobre.html'
};
document.querySelectorAll('a[href]').forEach((link) => {
  const target = pageRoutes[link.getAttribute('href')];
  if (target) link.href = target;
});
const solutionsIntro = document.querySelector('.solutions-page__intro');
if (solutionsIntro) solutionsIntro.innerHTML = '<h1 id="solutions-title">Nossas <em>Soluções</em></h1><p>Tecnologia sob medida para transformar<br>seus desafios em resultado.</p>';
if (document.querySelector('.contact-form')) {
  const contactFormStyle = document.createElement('link');
  contactFormStyle.rel = 'stylesheet';
  contactFormStyle.href = 'contact-form-wireframe.css';
  document.head.append(contactFormStyle);
}
if (document.querySelector('.solutions-page__cta')) {
  const solutionsCtaStyle = document.createElement('style');
  solutionsCtaStyle.textContent = `.solutions-page__cta{position:relative;isolation:isolate;min-height:78px;margin:24px 0 46px;padding:0 52px;border-radius:14px;overflow:hidden;background:transparent!important;box-shadow:inset 0 1px #6eaeff80,0 0 28px #075bff22}.solutions-page__cta:before{display:none}.solutions-page__cta h2{margin:0;max-width:390px;font-size:20px;line-height:1.06;letter-spacing:-.045em}.solutions-page__cta .button{padding:10px 18px;font-size:12px;background:#f5f8ff;color:#07142b}`;
  document.head.append(solutionsCtaStyle);
}
const featuredProject = document.querySelector('.project-tile[data-category="plataforma"]');
if (featuredProject) {
  featuredProject.setAttribute('tabindex', '0');
  featuredProject.setAttribute('role', 'link');
  featuredProject.addEventListener('click', () => { window.location.href = 'projeto-plataforma.html'; });
  featuredProject.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); window.location.href = 'projeto-plataforma.html'; } });
}
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const track = document.querySelector('.project-track');
document.querySelector('#prev')?.addEventListener('click', () => track?.scrollBy({ left: -326, behavior: 'smooth' }));
document.querySelector('#next')?.addEventListener('click', () => track?.scrollBy({ left: 326, behavior: 'smooth' }));
track?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') { event.preventDefault(); track.scrollBy({ left: 326, behavior: 'smooth' }); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); track.scrollBy({ left: -326, behavior: 'smooth' }); }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
