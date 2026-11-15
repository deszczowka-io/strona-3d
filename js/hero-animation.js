// Scroll-controlled 2D frame animation on one HTML Canvas via GSAP ScrollTrigger.
// Replaces the #hero placeholder. The existing Three.js #model section is untouched.

(() => {
  const FRAME_COUNT = 95;
  const FRAME_PAD = 4; // frame-0001.png .. frame-0095.png
  const ASSET_DIR = 'animations/deszczowka';

  const hero = document.getElementById('hero');
  const placeholder = document.getElementById('hero-placeholder');
  const loadingText = document.getElementById('hero-text');
  const navbar = document.getElementById('navbar');

  function hideNavbar() { if (navbar) navbar.classList.add('navbar-hidden'); }
  function showNavbar() { if (navbar) navbar.classList.remove('navbar-hidden'); }

  // Loading state: keep placeholder visible until images load (req #14).
  if (loadingText) loadingText.textContent = 'Ładowanie animacji…';

  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  canvas.style.background = '#fff'; // req #11
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const images = [];
  let loaded = 0;
  let failed = [];

  function framePath(i) {
    const n = String(i + 1).padStart(FRAME_PAD, '0');
    return `${ASSET_DIR}/frame-${n}.png`;
  }

  function loadImage(i) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => { images[i] = img; loaded += 1; resolve(); };
      img.onerror = () => { failed.push(i + 1); reject(); }; // req #13
    });
  }

  // Draw current frame with contain fit + devicePixelRatio (req #7, #9, #10).
  function draw(frameIdx) {
    const img = images[frameIdx];
    if (!img) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (!cssW || !cssH) return;

    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, cssW, cssH); // req #11

    const scale = Math.min(cssW / img.width, cssH / img.height); // contain
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (cssW - w) / 2;
    const y = (cssH - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  }

  function currentFrame() {
    return scrollTrigger ? Math.round(scrollTrigger.progress * (FRAME_COUNT - 1)) : 0;
  }

  function resize() {
    draw(currentFrame());
    ScrollTrigger.refresh();
  }

  let scrollTrigger;

  (async () => {
    for (let i = 0; i < FRAME_COUNT; i += 1) await loadImage(i);

    // All images loaded: swap placeholder for canvas (req #14).
    // Hint "Przewiń w dół" zostaje widoczny, by użytkownik wiedział, że może scrollować.
    if (placeholder) placeholder.style.display = 'none';
    if (loadingText) loadingText.style.display = 'none';
    draw(0);

    gsap.registerPlugin(ScrollTrigger);

    // req #4: scrub: 0.5, pin: true, end tuned to animation length.
    hideNavbar(); // navbar znika na czas animacji

    scrollTrigger = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: `+=${window.innerHeight * 1.0}`,
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: () => draw(currentFrame()),
      onRefresh: () => draw(currentFrame()),
      onLeave: showNavbar,        // po zakończeniu animacji – navbar się pokazuje
      onEnterBack: hideNavbar,    // powrót na górę animacji – navbar znika znowu
    });

    addEventListener('resize', () => {
      resize();
      scrollTrigger.refresh();
    }); // req #12

    // Reduced motion: play once, no scroll binding.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showNavbar();
      scrollTrigger.kill();
      draw(FRAME_COUNT - 1);
    }
  })().catch(() => {
    if (loadingText) loadingText.textContent = `Nie udało się wczytać klatek: ${failed.join(', ') || 'błąd'}`;
  });
})();
