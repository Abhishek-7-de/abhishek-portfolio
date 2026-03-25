// src/animations.js
// Drop-in scroll-stopping 3D animations — no libraries required
// Import this in main.jsx: import './animations.js'

// ─── 1. MAGNETIC CURSOR (desktop only) ───────────────────────────────────────
function initMagneticCursor() {
  if (window.innerWidth < 768) return;

  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  glow.style.cssText = `
    position:fixed;width:500px;height:500px;border-radius:999px;
    background:radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%);
    transform:translate(-50%,-50%);z-index:9999;pointer-events:none;
    transition:left .08s ease,top .08s ease;will-change:left,top;
  `;
  document.body.appendChild(glow);

  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  dot.style.cssText = `
    position:fixed;width:8px;height:8px;border-radius:999px;
    background:rgba(201,168,76,0.8);transform:translate(-50%,-50%);
    z-index:10000;pointer-events:none;
    transition:left .04s ease,top .04s ease,transform .2s ease,background .2s ease;
    mix-blend-mode:screen;
  `;
  document.body.appendChild(dot);

  let mx = 0, my = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    glow.style.left = mx + 'px';
    glow.style.top = my + 'px';
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  // Magnetic pull on interactive elements
  const magnetic = document.querySelectorAll('.btn, .chat-bubble, .logo-chip, .brand-ticker-item, .why-card-linked, .selected-card');
  magnetic.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      dot.style.transform = `translate(-50%,-50%) scale(2.5)`;
      dot.style.background = 'rgba(201,168,76,1)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      dot.style.background = 'rgba(201,168,76,0.8)';
    });
  });
}

// ─── 2. 3D CARD TILT ─────────────────────────────────────────────────────────
function initCardTilt() {
  const cards = document.querySelectorAll('.selected-card, .why-card-linked, .stat-card-mobile, .exp-card, .hero-action-panel, .contact-v10-card');

  cards.forEach(card => {
    card.style.transition = 'transform 0.15s ease, box-shadow 0.15s ease';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotX = y * -12;
      const rotY = x * 12;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
      card.style.boxShadow = `${-rotY * 2}px ${rotX * 2}px 40px rgba(201,168,76,0.15), 0 20px 60px rgba(0,0,0,0.4)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.boxShadow = '';
    });
  });
}

// ─── 3. TEXT SCRAMBLE on hero name ───────────────────────────────────────────
function scrambleText(el) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
  const original = el.textContent;
  let iteration = 0;
  const maxIter = original.length * 3;
  el.dataset.scrambling = '1';

  const interval = setInterval(() => {
    el.textContent = original
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        if (i < Math.floor(iteration / 3)) return original[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    iteration++;
    if (iteration >= maxIter) {
      clearInterval(interval);
      el.textContent = original;
      delete el.dataset.scrambling;
    }
  }, 30);
}

function initTextScramble() {
  const heroName = document.querySelector('.hero-name-main');
  if (!heroName) return;

  // Scramble on load
  setTimeout(() => {
    const lines = heroName.querySelectorAll('.hero-name-line');
    lines.forEach((line, i) => setTimeout(() => scrambleText(line), i * 200));
  }, 400);

  // Re-scramble on hover
  heroName.addEventListener('mouseenter', () => {
    const lines = heroName.querySelectorAll('.hero-name-line');
    lines.forEach((line, i) => {
      if (!line.dataset.scrambling) setTimeout(() => scrambleText(line), i * 100);
    });
  });
}

// ─── 4. SCROLL-TRIGGERED ANIMATIONS ─────────────────────────────────────────
function initScrollAnimations() {
  // Fade up sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // 3D slide in for section titles
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'titleReveal3D 0.8s cubic-bezier(0.16,1,0.3,1) forwards';
          titleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll('.section-title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px) rotateX(-20deg)';
    el.style.transformOrigin = 'top center';
    titleObserver.observe(el);
  });
}

// ─── 5. PARTICLE FIELD in hero ───────────────────────────────────────────────
function initParticles() {
  const hero = document.querySelector('.hero-wrap');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position:absolute;top:0;left:0;width:100%;height:100%;
    pointer-events:none;z-index:0;opacity:0.4;
  `;
  hero.style.position = 'relative';
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Create particles
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.02;

      // Wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${alpha})`;
      ctx.fill();
    });

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,168,76,${(1 - dist / 100) * 0.08})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  draw();
}

// ─── 6. COUNTER ANIMATION on stats ───────────────────────────────────────────
function initCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = el.dataset.count;
        if (!target) return;

        let start = 0;
        const num = parseFloat(target);
        const duration = 1200;
        const step = duration / 60;
        const increment = num / (duration / step);

        const timer = setInterval(() => {
          start += increment;
          if (start >= num) {
            el.textContent = target + '+';
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(start) + '+';
          }
        }, step);

        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-number-mobile, .hsp-num').forEach(el => {
    const text = el.textContent.replace('+', '').replace('M', '');
    if (!isNaN(parseFloat(text))) {
      el.dataset.count = parseFloat(text);
      el.textContent = '0+';
      observer.observe(el);
    }
  });
}

// ─── 7. PARALLAX SCROLL on hero ──────────────────────────────────────────────
function initParallax() {
  const cutout = document.querySelector('.hero-cutout-image, .m-cutout');
  const rings = document.querySelectorAll('.hero-ring, .m-pulse-ring');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const factor = scrollY * 0.15;

    if (cutout) {
      cutout.style.transform = `translateY(${factor * -0.5}px)`;
    }

    rings.forEach((ring, i) => {
      ring.style.transform = `translate(-50%, -50%) translateY(${factor * (i + 1) * 0.2}px)`;
    });
  }, { passive: true });
}

// ─── INJECT CSS for scroll animations ────────────────────────────────────────
function injectAnimationCSS() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-up {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
    }
    .fade-up.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes titleReveal3D {
      to {
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
      }
    }
    /* Stagger section children */
    .why-mini-grid .fade-up:nth-child(1) { transition-delay: 0s; }
    .why-mini-grid .fade-up:nth-child(2) { transition-delay: 0.08s; }
    .why-mini-grid .fade-up:nth-child(3) { transition-delay: 0.16s; }
    .why-mini-grid .fade-up:nth-child(4) { transition-delay: 0.24s; }
    .selected-grid .fade-up:nth-child(1) { transition-delay: 0s; }
    .selected-grid .fade-up:nth-child(2) { transition-delay: 0.1s; }
    .selected-grid .fade-up:nth-child(3) { transition-delay: 0.2s; }
    /* Stat number spring */
    .stat-number-mobile, .hsp-num {
      display: inline-block;
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    .stat-number-mobile:hover, .hsp-num:hover {
      transform: scale(1.15);
    }
  `;
  document.head.appendChild(style);
}

// ─── INIT ALL ─────────────────────────────────────────────────────────────────
function init() {
  injectAnimationCSS();
  initScrollAnimations();
  initCounters();
  initParallax();

  // Defer heavier effects
  requestAnimationFrame(() => {
    initParticles();
    setTimeout(() => {
      initTextScramble();
      initMagneticCursor();
      initCardTilt();
    }, 500);
  });
}

// Run after React renders
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  setTimeout(init, 300);
}

export default init;
