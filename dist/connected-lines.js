const NS = 'http://www.w3.org/2000/svg';

function createHeroBeams() {
  const heroLights = document.querySelector('.hero-lights');
  if (!heroLights) return;
  const heroDurationA = (9 + Math.random() * 7).toFixed(2);
  const heroDurationB = (12 + Math.random() * 8).toFixed(2);
  const heroOffsetA = -(Math.random() * Number(heroDurationA)).toFixed(2);
  const heroOffsetB = -(Math.random() * Number(heroDurationB)).toFixed(2);
  heroLights.innerHTML = `
    <svg class="hero-beams" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="hero-beam-gradient" x1="0" x2="1">
          <stop stop-color="#075bff" stop-opacity="0"/><stop offset=".34" stop-color="#0874ff" stop-opacity=".42"/><stop offset=".5" stop-color="#e6ffff" stop-opacity="1"/><stop offset=".58" stop-color="#00dcff" stop-opacity=".94"/><stop offset="1" stop-color="#075bff" stop-opacity="0"/>
        </linearGradient>
        <filter id="hero-bloom"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>
      <path class="beam-thin beam-track-c" d="M490 -55C620 145 718 260 840 355S1120 310 1510 520"/>
      <path class="beam-thin beam-thin-alt beam-track-d" d="M-55 770C265 646 526 657 780 450S1125 318 1490 426"/>
      <path class="beam-thin beam-thin-far beam-track-e" d="M690 -55C760 176 844 310 965 382S1250 320 1490 238"/>
      <path class="beam-glow beam-track-a" d="M245 900C490 676 660 562 840 355S1098 133 1245 -45"/>
      <circle r="5" fill="#eaffff" style="filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 18px #00dfff)"><animateMotion dur="${heroDurationA}s" begin="${heroOffsetA}s" repeatCount="indefinite" path="M245 900C490 676 660 562 840 355S1098 133 1245 -45"/><animate attributeName="opacity" values=".15;1;1;.15" keyTimes="0;.12;.84;1" dur="${heroDurationA}s" begin="${heroOffsetA}s" repeatCount="indefinite"/></circle>
      <path class="beam-glow beam-track-b" d="M-55 748C255 660 528 642 700 516S790 414 840 355"/>
      <path class="beam-main beam-track-b" pathLength="1000" style="stroke-dasharray:82 918;stroke-dashoffset:1000;animation:none" d="M-55 748C255 660 528 642 700 516S790 414 840 355"><animate attributeName="stroke-dashoffset" from="1000" to="0" dur="${heroDurationB}s" begin="${heroOffsetB}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".12;1;1;.12" keyTimes="0;.12;.84;1" dur="${heroDurationB}s" begin="${heroOffsetB}s" repeatCount="indefinite"/></path>
    </svg>`;
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS(NS, name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function createGlobalLines() {
  document.querySelector('.site-lines')?.remove();
  const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  const svg = svgElement('svg', { class: 'site-lines', viewBox: `0 0 1440 ${height}`, preserveAspectRatio: 'none', 'aria-hidden': 'true' });
  svg.style.height = `${height}px`;
  const defs = svgElement('defs');
  const gradient = svgElement('linearGradient', { id: 'site-flow', x1: '0', x2: '1' });
  [['0', '0'], ['.34', '.18'], ['.5', '.9'], ['.68', '.2'], ['1', '0']].forEach(([offset, opacity]) => gradient.append(svgElement('stop', { offset, 'stop-color': offset === '.5' ? '#27e7ff' : '#0768ff', 'stop-opacity': opacity })));
  defs.append(gradient); svg.append(defs);
  const routes = [
    [.05,.19,.31,.24,.46,.35,.61],
    [.36,.53,.68,.79,.87,.70,.52],
    [.76,.88,.93,.81,.65,.45,.26],
    [.42,.33,.37,.35,.16,.08,.09],
    [.60,.53,.57,.64,.76,.88,.98]
  ];
  routes.forEach((points, index) => {
    const y = points.map((point) => Math.round(point * height));
    const path = `M-32 ${y[0]} C170 ${y[1]} 350 ${y[2]} 530 ${y[3]} S890 ${y[4]} 1080 ${y[5]} S1300 ${y[5]} 1472 ${y[6]}`;
    if (index === 3) {
      svg.append(
        svgElement('path', { d: path, class: 'site-aura site-aura-3', stroke: '#006dff' }),
        svgElement('path', { d: path, class: 'site-core site-core-3', stroke: '#d8ffff' })
      );
    }
    const duration = 16 + Math.random() * 14;
    const offset = Math.random() * duration;
    const pulse = svgElement('path', {
      d: path,
      class: `site-route site-pulse site-pulse-${index}`,
      stroke: '#1de5ff',
      pathLength: '1000',
      style: 'stroke-dasharray:88 912;stroke-dashoffset:1000;animation:none'
    });
    pulse.append(svgElement('animate', {
      attributeName: 'stroke-dashoffset',
      from: '1000',
      to: '0',
      dur: `${duration.toFixed(2)}s`,
      begin: `-${offset.toFixed(2)}s`,
      repeatCount: 'indefinite'
    }), svgElement('animate', {
      attributeName: 'opacity',
      values: '.12;1;1;.12',
      keyTimes: '0;.12;.84;1',
      dur: `${duration.toFixed(2)}s`,
      begin: `-${offset.toFixed(2)}s`,
      repeatCount: 'indefinite'
    }));
    const elements = [svgElement('path', { d: path, class: `site-route site-route-${index}`, stroke: '#146cff', pathLength: '1000' }), pulse];
    if (index === 3) {
      const sideBeam = svgElement('circle', {
        r: '5',
        fill: '#eaffff',
        style: 'filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 18px #00dfff)'
      });
      sideBeam.append(
        svgElement('animateMotion', { dur: '19s', begin: '-7.8s', repeatCount: 'indefinite', path }),
        svgElement('animate', { attributeName: 'opacity', values: '.12;1;1;.12', keyTimes: '0;.12;.84;1', dur: '19s', begin: '-7.8s', repeatCount: 'indefinite' })
      );
      elements.push(sideBeam);
    }
    svg.append(...elements);
  });
  document.body.insertBefore(svg, document.body.firstElementChild);
}

let renderFrame;
function requestRender() { cancelAnimationFrame(renderFrame); renderFrame = requestAnimationFrame(createGlobalLines); }

function randomizeHeroBeams() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const groups = ['a', 'b', 'c', 'd', 'e'];
  const visibleGroup = groups[Math.floor(Math.random() * groups.length)];
  groups.forEach((group) => document.querySelectorAll(`.beam-track-${group}`).forEach((beam) => beam.classList.toggle('beam-hidden', group !== visibleGroup && Math.random() > .36)));
  setTimeout(randomizeHeroBeams, 4200 + Math.random() * 4800);
}

createHeroBeams(); createGlobalLines(); randomizeHeroBeams(); addEventListener('resize', requestRender); addEventListener('load', requestRender, { once: true });
