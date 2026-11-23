// Scroll-controlled 2D frame animation on one HTML Canvas via GSAP ScrollTrigger.
// Replaces the #hero placeholder. The existing Three.js #model section is untouched.

(() => {
  const FRAME_COUNT = 95;
  const SHEET_COLUMNS = 4;
  const SHEET_ROWS = 4;
  const FRAMES_PER_SHEET = SHEET_COLUMNS * SHEET_ROWS;
  const SHEET_COUNT = Math.ceil(FRAME_COUNT / FRAMES_PER_SHEET);
  const ASSET_DIR = 'animations/deszczowka/sheets';

  const hero = document.getElementById('hero');
  const placeholder = document.getElementById('hero-placeholder');
  const loadingText = document.getElementById('hero-text');
  const navbar = document.getElementById('navbar');

  function hideNavbar() { if (navbar) navbar.classList.add('navbar-hidden'); }
  function showNavbar() { if (navbar) navbar.classList.remove('navbar-hidden'); }

  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  canvas.style.background = '#fff'; // req #11
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const sheets = [];
  let failed = [];

  function sheetPath(i) {
    return `${ASSET_DIR}/sheet-${i + 1}.webp`;
  }

  function loadSheet(i) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = sheetPath(i);
      img.onload = () => { sheets[i] = img; resolve(); };
      img.onerror = () => { failed.push(i + 1); reject(); }; // req #13
    });
  }

  // Draw current frame with contain fit + devicePixelRatio (req #7, #9, #10).
  function draw(frameIdx) {
    const sheetIndex = Math.floor(frameIdx / FRAMES_PER_SHEET);
    const frameInSheet = frameIdx % FRAMES_PER_SHEET;
    const img = sheets[sheetIndex];
    if (!img) return;
    const frameW = img.width / SHEET_COLUMNS;
    const frameH = img.height / SHEET_ROWS;
    const sourceX = (frameInSheet % SHEET_COLUMNS) * frameW;
    const sourceY = Math.floor(frameInSheet / SHEET_COLUMNS) * frameH;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (!cssW || !cssH) return;

    const pixelW = Math.round(cssW * dpr);
    const pixelH = Math.round(cssH * dpr);
    if (canvas.width !== pixelW || canvas.height !== pixelH) {
      canvas.width = pixelW;
      canvas.height = pixelH;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, cssW, cssH); // req #11

    const scale = Math.min(cssW / frameW, cssH / frameH); // contain
    const w = frameW * scale;
    const h = frameH * scale;
    const x = (cssW - w) / 2;
    const y = (cssH - h) / 2;
    ctx.drawImage(img, sourceX, sourceY, frameW, frameH, x, y, w, h);
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
    await Promise.all(Array.from({ length: SHEET_COUNT }, (_, i) => loadSheet(i)));

    // All sheets loaded: swap placeholder for canvas (req #14).
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

    addEventListener('resize', resize); // req #12

    // Reduced motion: play once, no scroll binding.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showNavbar();
      scrollTrigger.kill();
      draw(FRAME_COUNT - 1);
    }
  })().catch(() => {
    if (loadingText) {
      loadingText.hidden = false;
      loadingText.textContent = `Nie udało się wczytać arkuszy klatek: ${failed.join(', ') || 'błąd'}`;
    }
  });
})();
