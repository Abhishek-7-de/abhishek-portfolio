// src/animations.js — FIXED version
// Removes scramble, fixes counter, fixes double strip

// ─── 1. MAGNETIC CURSOR (desktop only) ───────────────────────────────────────
function initMagneticCursor() {
  if (window.innerWidth < 768 || window.matchMedia('(hover: none)').matches) return;
  if (document.getElementById('cursor-glow')) return;

  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  glow.style.cssText = `
    position:fixed;width:500px;height:500px;border-radius:999px;
    background:radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%);
    transform:translate(-50%,-50%);z-index:9999;pointer-events:none;
    transition:left .08s ease,top .08s ease;will-change:left,top;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // Magnetic pull on interactive elements
  document.querySelectorAll('.btn, .logo-chip, .brand-ticker-item, .why-card-linked, .selected-card').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// ─── 2. 3D CARD TILT ─────────────────────────────────────────────────────────
function initCardTilt() {
  if (window.innerWidth < 768) return;

  document.querySelectorAll('.selected-card, .why-card-linked, .stat-card-mobile, .contact-v10-card').forEach(card => {
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

// ─── 3. SCROLL-TRIGGERED FADE UPS ────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── 4. STAT COUNTERS — runs immediately when element visible ─────────────────
function initCounters() {
  // Real values
  const VALUES = { '10': 10, '30': 30, '50': 50 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(raw);
      if (!target || isNaN(target)) return;
      if (el.dataset.animated) return;
      el.dataset.animated = '1';

      let current = 0;
      const steps = 40;
      const increment = target / steps;
      const timer = setInterval(() => {
        current = Math.min(current + increment, target);
        el.textContent = Math.floor(current) + '+';
        if (current >= target) clearInterval(timer);
      }, 30);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  // Wait for DOM to be ready then observe
  document.querySelectorAll('.stat-number-mobile').forEach(el => {
    observer.observe(el);
  });
}

// ─── 5. FIX DUPLICATE VIDEO STRIP LABEL ──────────────────────────────────────
function fixDuplicateStrip() {
  const labels = document.querySelectorAll('.video-strip-label');
  // Keep only first one
  labels.forEach((el, i) => {
    if (i > 0) el.remove();
  });
}

// ─── 6. VIDEO VISIBILITY FIX — boost video opacity ───────────────────────────
function fixVideoVisibility() {
  document.querySelectorAll('.hero-strip-video').forEach(video => {
    video.style.opacity = '1';
    video.style.filter = 'brightness(1.1) contrast(1.05)';
  });
  // Fix the strip wrapper opacity if it was dimmed
  const wrap = document.querySelector('.hero-video-strip-wrap');
  if (wrap) {
    wrap.style.opacity = '1';
  }
}

// ─── 7. PARTICLE FIELD in hero ───────────────────────────────────────────────
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

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = Math.min(hero.offsetHeight, 700);
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    size: Math.random() * 1.5 + 0.3,
    opacity: Math.random() * 0.5 + 0.1,
    pulse: Math.random() * Math.PI * 2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x = (p.x + p.vx + canvas.width) % canvas.width;
      p.y = (p.y + p.vy + canvas.height) % canvas.height;
      p.pulse += 0.015;
      const alpha = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${alpha})`;
      ctx.fill();
    });
    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,168,76,${(1 - d / 90) * 0.06})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── 8. PARALLAX SCROLL ──────────────────────────────────────────────────────
function initParallax() {
  const cutout = document.querySelector('.hero-cutout-image');
  if (!cutout) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.08;
    cutout.style.transform = `translateY(${-y}px)`;
  }, { passive: true });
}

// ─── INJECT CSS ───────────────────────────────────────────────────────────────
function injectCSS() {
  if (document.getElementById('anim-css')) return;
  const style = document.createElement('style');
  style.id = 'anim-css';
  style.textContent = `
    .fade-up {
      opacity: 0;
      transform: translateY(36px);
      transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
    }
    .fade-up.is-visible { opacity: 1; transform: translateY(0); }

    /* Video strip — full brightness */
    .hero-strip-video {
      opacity: 1 !important;
      filter: brightness(1.1) contrast(1.05) !important;
    }
    .hero-video-strip-wrap { opacity: 1 !important; }

    /* Only one strip label */
    .video-strip-label + .video-strip-label { display: none !important; }

    /* Stat numbers spring on hover */
    .stat-number-mobile {
      display: inline-block;
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
      cursor: default;
    }
    .stat-number-mobile:hover { transform: scale(1.2) rotate(-3deg); }

    /* Card tilt — hardware accelerated */
    .selected-card, .why-card-linked {
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      will-change: transform;
    }

    /* Magnetic btn */
    .btn { transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), background 0.2s ease, box-shadow 0.2s ease !important; }
  `;
  document.head.appendChild(style);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
export default function init() {
  injectCSS();
  fixDuplicateStrip();
  fixVideoVisibility();
  initScrollAnimations();

  requestAnimationFrame(() => {
    initParticles();
    initCounters();
    initParallax();
    setTimeout(() => {
      initMagneticCursor();
      initCardTilt();
    }, 600);
  });
}
