import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

// ===== Scena 3D =====
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141414);

const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 2000);
camera.position.set(0, 0, 6);

const root = document.getElementById('canvas-root');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
root.appendChild(renderer.domElement);

// Ponytail: WebGL context failure -> static fallback
let webglOk = true;
try {
  renderer.render(scene, camera);
} catch (err) {
  webglOk = false;
  root.innerHTML = '<div class="canvas-fallback">WebGL niedostępny — model 3D niedostępny na tym urządzeniu.</div>';
}

// ===== Oświetlenie =====
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const d1 = new THREE.DirectionalLight(0xffffff, 1.0); d1.position.set(5, 10, 7); scene.add(d1);
const d2 = new THREE.DirectionalLight(0xffffff, 0.5); d2.position.set(-5, -5, -7); scene.add(d2);
const grid = new THREE.GridHelper(40, 80, 0x333333, 0x111111);
scene.add(grid);

// ===== Kontrolki =====
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.enabled = true;

const transform = new TransformControls(camera, renderer.domElement);
transform.setSize(1.0);
transform.setMode('translate');
scene.add(transform);

// ===== Model =====
let mesh = null;
const matDefault = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.4, roughness: 0.25 });

function setModelGeometry(geometry) {
  if (!webglOk) return;
  if (mesh) {
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  }
  mesh = new THREE.Mesh(geometry, matDefault);
  scene.add(mesh);
  transform.attach(mesh);
  orbit.enabled = true;
  centerCamera();
}

function centerCamera() {
  if (!mesh) return;
  const box = new THREE.Box3().setFromObject(mesh);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  const camDist = Math.abs(maxDim / (2 * Math.tan(fov / 2)));
  camera.position.set(center.x, center.y, center.z + camDist * 1.6);
  camera.lookAt(center);
  orbit.target.copy(center);
}

const cadFiles = [
  './CAD/kolanko 90 stopni-Body.stl',
  './CAD/lejek skończony-Body.stl',
  './CAD/rura 100mm góra-Body.stl',
  './CAD/rura 300mm dół-Body.stl',
  './CAD/komora na pewną grupkę ludzi-Body.stl',
  './CAD/zaślepka-Body.stl',
];

let loaded = false;
function tryLoad(idx) {
  if (idx >= cadFiles.length || loaded) return;
  new STLLoader().load(cadFiles[idx],
    g => { setModelGeometry(g); loaded = true; },
    undefined,
    err => { tryLoad(idx + 1); }
  );
}
tryLoad(0);

setTimeout(() => { if (!loaded && webglOk) setModelGeometry(new THREE.TorusKnotGeometry(1.1, 0.4, 150, 25)); }, 2500);

// ===== Sterowanie trybami =====
const btns = document.querySelectorAll('.canvas-controls button');
function setActive(el) {
  btns.forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
}
function setMode(mode, el) {
  if (!webglOk) return;
  if (mode === 'orbit') { transform.detach(); orbit.enabled = true; setActive(el); return; }
  if (!mesh) return;
  transform.attach(mesh);
  transform.setMode(mode);
  orbit.enabled = false;
  setActive(el);
}
btns.forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode, b)));
document.getElementById('btn-reset').addEventListener('click', () => {
  setMode('orbit', document.querySelector('[data-mode="orbit"]'));
  if (mesh) {
    mesh.rotation.set(0, 0, 0);
    mesh.scale.set(1, 1, 1);
    mesh.position.set(0, 0, 0);
    centerCamera();
  }
});
addEventListener('keydown', (e) => {
  const map = { '1': 'translate', '2': 'rotate', '3': 'scale', '0': 'orbit' };
  const mode = map[e.key];
  if (!mode) return;
  const target = document.querySelector(`[data-mode="${mode}"]`);
  setMode(mode, target);
});

// ===== Formularz kontaktowy =====
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Wypełnij wszystkie pola.');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Wysyłanie...';

  try {
    const res = await fetch('api/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();

    if (data.ok) {
      alert('Wiadomość wysłana — odpowiemy najszybciej jak to możliwe.');
      e.target.reset();
    } else {
      alert(data.error || 'Wystąpił błąd. Spróbuj ponownie.');
    }
  } catch {
    alert('Wystąpił błąd sieci. Spróbuj ponownie.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Wyślij';
  }
});

// ===== Animacja =====
function animate() {
  if (!webglOk) return;
  requestAnimationFrame(animate);
  orbit.update();
  renderer.render(scene, camera);
}
animate();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ===== Nawigacja: aktywny link =====
addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let cur = '';
  sections.forEach(s => {
    if (s.getBoundingClientRect().top <= 80) cur = s.getAttribute('id');
  });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
});

// Hamburger menu (mobile)
const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
