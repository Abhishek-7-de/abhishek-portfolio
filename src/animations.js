// src/animations.js
// Works WITH your existing styles.css cursor system (cursor-dot + cursor-blob)
// Does NOT create conflicting elements

// ─── 1. CUSTOM CURSOR — uses .cursor-dot + .cursor-blob from styles.css ──────
function initCursor() {
  if (window.innerWidth < 768 || window.matchMedia('(hover: none)').matches) return;
  if (document.getElementById('cursor-dot')) return;

  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  dot.className = 'cursor-dot';

  const blob = document.createElement('div');
  blob.id = 'cursor-blob';
  blob.className = 'cursor-blob';
  const label = document.createElement('span');
  label.className = 'cursor-label';
  blob.appendChild(label);

  document.body.appendChild(dot);
  document.body.appendChild(blob);

  let mx = 0, my = 0, bx = 0, by = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function animateBlob() {
    bx += (mx - bx) * 0.12;
    by += (my - by) * 0.12;
    blob.style.left = bx + 'px';
    blob.style.top = by + 'px';
    requestAnimationFrame(animateBlob);
  }
  animateBlob();

  document.querySelectorAll('a, button, .btn, .logo-chip, .brand-ticker-item').forEach(el => {
    el.addEventListener('mouseenter', () => { blob.classList.add('cursor-link'); blob.classList.remove('cursor-view'); });
    el.addEventListener('mouseleave', () => { blob.classList.remove('cursor-link', 'cursor-view'); label.textContent = ''; });
  });

  document.querySelectorAll('.exp-card, .selected-card, .hero-cutout-image, .hero-cutout-stage').forEach(el => {
    el.addEventListener('mouseenter', () => { blob.classList.add('cursor-view'); blob.classList.remove('cursor-link'); label.textContent = 'VIEW'; });
    el.addEventListener('mouseleave', () => { blob.classList.remove('cursor-view', 'cursor-link'); label.textContent = ''; });
  });
}

// ─── 2. 3D CARD TILT ─────────────────────────────────────────────────────────
function initCardTilt() {
  if (window.innerWidth < 768) return;
  document.querySelectorAll('.selected-card, .why-mini-card, .stat-card-mobile, .contact-v10-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale(1.02)`;
      card.style.boxShadow = `${-x * 16}px ${y * 16}px 32px rgba(201,168,76,0.1)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.boxShadow = ''; });
  });
}

// ─── 3. SCROLL FADE-UPS ──────────────────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

// ─── 4. FIX DUPLICATE VIDEO STRIP LABEL ──────────────────────────────────────
function fixDuplicateStrip() {
  document.querySelectorAll('.video-strip-label').forEach((el, i) => { if (i > 0) el.remove(); });
}

// ─── 5. VIDEO VISIBILITY FIX ─────────────────────────────────────────────────
function fixVideoVisibility() {
  // Hero background video — keep the subtle opacity from your CSS
  document.querySelectorAll('.hero-video-bg').forEach(v => {
    v.style.opacity = '0.22';
    v.style.filter = 'saturate(0.3) brightness(0.5)';
    v.removeAttribute('hidden');
    if (v.paused) v.play().catch(() => {});
  });
  // Scrolling reel strip — full brightness
  document.querySelectorAll('.hero-strip-video').forEach(v => {
    v.style.opacity = '1';
    v.style.filter = 'brightness(1.05) contrast(1.05)';
    if (v.paused) v.play().catch(() => {});
  });
  // Make sure wrapper is visible
  document.querySelectorAll('.hero-video-strip-wrap').forEach(w => {
    w.style.opacity = '1';
  });
}

// ─── 6. PARTICLE FIELD ───────────────────────────────────────────────────────
function initParticles() {
  const hero = document.querySelector('.hero-wrap');
  if (!hero || document.getElementById('hero-particles')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'hero-particles';
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  hero.insertBefore(canvas, hero.firstChild);
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = hero.offsetWidth; canvas.height = Math.min(hero.offsetHeight, 700); }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const pts = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width, y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
    r: Math.random() * 1.2 + 0.3, o: Math.random() * 0.4 + 0.08, p: Math.random() * Math.PI * 2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.x = (p.x + p.vx + canvas.width) % canvas.width;
      p.y = (p.y + p.vy + canvas.height) % canvas.height;
      p.p += 0.012;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${p.o * (0.5 + 0.5 * Math.sin(p.p))})`;
      ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx+dy*dy);
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(201,168,76,${(1-d/90)*0.05})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── 7. PARALLAX ─────────────────────────────────────────────────────────────
function initParallax() {
  const cutout = document.querySelector('.hero-cutout-image');
  if (!cutout || window.innerWidth < 768) return;
  window.addEventListener('scroll', () => { cutout.style.transform = `translateY(${window.scrollY * -0.06}px)`; }, { passive: true });
}

// ─── INJECT MINIMAL CSS ───────────────────────────────────────────────────────
function injectCSS() {
  if (document.getElementById('anim-css')) return;
  const s = document.createElement('style');
  s.id = 'anim-css';
  s.textContent = `
    .fade-up { opacity:0; transform:translateY(36px); transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1); }
    .fade-up.is-visible { opacity:1; transform:translateY(0); }
    .selected-card,.why-mini-card,.stat-card-mobile { transition:transform .15s ease,box-shadow .15s ease; will-change:transform; }
  `;
  document.head.appendChild(s);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
export default function init() {
  injectCSS();
  fixDuplicateStrip();
  fixVideoVisibility();
  initScrollAnimations();

  requestAnimationFrame(() => {
    initParticles();
    initParallax();
    setTimeout(() => { initCursor(); initCardTilt(); }, 400);
  });

  // Re-run video fix after videos may have loaded
  setTimeout(fixVideoVisibility, 1500);
  setTimeout(fixVideoVisibility, 3500);
}
