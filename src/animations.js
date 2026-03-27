// src/animations.js — CLEAN VERSION
// No scramble. Fixed counters. No duplicate strip. Better particles.

// ─── 1. MAGNETIC CURSOR GLOW (desktop only) ──────────────────────────────────
function initMagneticCursor() {
  if (window.innerWidth < 768 || window.matchMedia('(hover: none)').matches) return;
  if (document.getElementById('cursor-glow')) return;

  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  glow.style.cssText = `
    position:fixed;width:500px;height:500px;border-radius:999px;
    background:radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%);
    transform:translate(-50%,-50%);z-index:9999;pointer-events:none;
    will-change:left,top;left:-999px;top:-999px;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('.btn, .logo-chip, .brand-ticker-item, .why-card-linked, .selected-row').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.18;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.18;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

// ─── 2. 3D CARD TILT ─────────────────────────────────────────────────────────
function initCardTilt() {
  if (window.innerWidth < 768) return;
  document.querySelectorAll('.why-card-linked, .why-card-muted, .contact-v10-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.02)`;
      card.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(201,168,76,0.12)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}

// ─── 3. SCROLL FADE UPS ──────────────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── 4. STAT COUNTERS — fixed, reads from data-target ────────────────────────
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.animated) return;
      el.dataset.animated = '1';

      const target = parseInt(el.dataset.target || el.textContent.replace(/\D/g, ''));
      if (!target || isNaN(target)) return;

      let current = 0;
      const steps = 45;
      const inc = target / steps;
      const suffix = el.dataset.suffix || '+';

      const timer = setInterval(() => {
        current = Math.min(current + inc, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 28);

      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
}

// ─── 5. PARTICLE FIELD ───────────────────────────────────────────────────────
function initParticles() {
  const hero = document.querySelector('.hero-wrap');
  if (!hero || document.getElementById('hero-particles')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'hero-particles';
  canvas.style.cssText = `
    position:absolute;top:0;left:0;width:100%;height:100%;
    pointer-events:none;z-index:0;
  `;
  hero.style.position = 'relative';
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext('2d');
  const resize = () => { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; };
  resize();
  window.addEventListener('resize', resize);

  const count = window.innerWidth < 768 ? 20 : 40;
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: Math.random() * 1.8 + 0.4,
    opacity: Math.random() * 0.5 + 0.1,
    pulse: Math.random() * Math.PI * 2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x = (p.x + p.vx + canvas.width) % canvas.width;
      p.y = (p.y + p.vy + canvas.height) % canvas.height;
      p.pulse += 0.018;
      const a = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${a})`;
      ctx.fill();
    });
    // Connections (desktop only — perf)
    if (window.innerWidth >= 768) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,168,76,${(1 - d / 100) * 0.07})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── 6. PARALLAX ─────────────────────────────────────────────────────────────
function initParallax() {
  if (window.innerWidth < 768) return;
  const cutout = document.querySelector('.hero-cutout-image');
  if (!cutout) return;
  window.addEventListener('scroll', () => {
    cutout.style.transform = `translateY(${window.scrollY * -0.07}px)`;
  }, { passive: true });
}

// ─── 7. FIX DUPLICATE VIDEO STRIP ────────────────────────────────────────────
function fixDuplicateStrip() {
  const wraps = document.querySelectorAll('.hero-video-strip-wrap');
  wraps.forEach((el, i) => { if (i > 0) el.remove(); });
}

// ─── INJECT CSS ───────────────────────────────────────────────────────────────
function injectCSS() {
  if (document.getElementById('anim-css')) return;
  const s = document.createElement('style');
  s.id = 'anim-css';
  s.textContent = `
    .fade-up {
      opacity:0;transform:translateY(32px);
      transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1);
    }
    .fade-up.is-visible { opacity:1;transform:translateY(0); }
    .hero-strip-video { opacity:1 !important; filter:brightness(1.05) !important; }
    .hero-video-strip-wrap { opacity:1 !important; }
    .why-card-linked,.why-card-muted {
      transition:transform .15s ease,box-shadow .15s ease;will-change:transform;
    }
    .btn { transition:transform .2s cubic-bezier(.34,1.56,.64,1),background .2s ease,box-shadow .2s ease !important; }
    @keyframes waveHand {
      from { transform:rotate(-15deg); }
      to   { transform:rotate(25deg);  }
    }
  `;
  document.head.appendChild(s);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
export default function init() {
  injectCSS();
  fixDuplicateStrip();
  initScrollAnimations();
  requestAnimationFrame(() => {
    initParticles();
    initCounters();
    initParallax();
    setTimeout(() => {
      initMagneticCursor();
      initCardTilt();
    }, 500);
  });
}
