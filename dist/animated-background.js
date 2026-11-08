const backgroundLayer = document.querySelector('.page-glow');

if (backgroundLayer) {
  backgroundLayer.insertAdjacentHTML('beforeend', `
    <svg class="animated-orbits" viewBox="0 0 1440 1000" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="orbit-blue" x1="0" x2="1">
          <stop stop-color="#075bff" stop-opacity="0"/>
          <stop offset=".42" stop-color="#0d71ff" stop-opacity=".2"/>
          <stop offset=".54" stop-color="#17e5ff" stop-opacity=".92"/>
          <stop offset=".66" stop-color="#075bff" stop-opacity=".18"/>
          <stop offset="1" stop-color="#075bff" stop-opacity="0"/>
        </linearGradient>
        <filter id="orbit-glow"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      <path class="orbit orbit-glow" d="M-180 720C250 310 505 955 950 355S1290 255 1620 55"/>
      <path class="orbit" d="M-180 720C250 310 505 955 950 355S1290 255 1620 55"/>
      <path class="orbit orbit-alt" d="M-120 180C240 620 530 55 870 420S1230 790 1590 500"/>
      <path class="orbit orbit-faint" d="M-90 530C330 690 550 215 910 500S1260 745 1560 630"/>
      <circle class="signal signal-one" r="5" cx="0" cy="0"/>
      <circle class="signal signal-two" r="4" cx="0" cy="0"/>
    </svg>
  `);
}
