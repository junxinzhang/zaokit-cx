(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ── Mobile Nav ── */
  const closeMenu = () => {
    if (!menuToggle || !navLinks) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
    body.classList.remove('nav-open');
  };

  const openMenu = () => {
    if (!menuToggle || !navLinks) return;
    menuToggle.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('is-open');
    body.classList.add('nav-open');
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      isExpanded ? closeMenu() : openMenu();
    });

    document.addEventListener('click', (e) => {
      if (!(e.target instanceof Node)) return;
      if (!navLinks.classList.contains('is-open')) return;
      if (navLinks.contains(e.target) || menuToggle.contains(e.target)) return;
      closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  navAnchors.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 860) closeMenu();
    });
  });

  /* ── FAQ Accordion ── */
  const faqButtons = Array.from(document.querySelectorAll('.faq-question'));
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      item.classList.toggle('is-open', !expanded);
    });
  });

  /* ── Active Nav Link ── */
  const sectionIds = ['hero', 'products', 'why', 'faq', 'contact'];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navAnchors.forEach((a) => {
      const target = a.getAttribute('href')?.slice(1);
      a.classList.toggle('active', target === id);
    });
  };

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  } else {
    setActiveLink('hero');
  }

  /* ── Header Scroll State ── */
  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  /* ── Scroll Fade-in Animation ── */
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length > 0) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );
    fadeEls.forEach((el) => fadeObserver.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ── Counter Animation ── */
  const counterEls = document.querySelectorAll('[data-count-to]');
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.countSuffix || '';
    const decimal = el.dataset.countDecimal ? parseInt(el.dataset.countDecimal, 10) : 0;
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = target * eased;
      el.textContent = (decimal > 0 ? val.toFixed(decimal) : Math.round(val).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window && counterEls.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counterEls.forEach((el) => counterObserver.observe(el));
  }

  /* ── Minimal Particle Background ── */
  const canvas = document.getElementById('particles-canvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let w, h;
    const particles = [];
    const PARTICLE_COUNT = 40;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,168,48,${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(240,168,48,${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();
  }
})();

/* ── Contact Modal (global scope for onclick handlers) ── */
function openContactModal(focus) {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Highlight the relevant item
  const emailItem = document.getElementById('modal-email-item');
  const wechatItem = document.getElementById('modal-wechat-item');
  if (emailItem) emailItem.classList.toggle('highlight', focus === 'email');
  if (wechatItem) wechatItem.classList.toggle('highlight', focus === 'wechat');
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Reset copy button states
  modal.querySelectorAll('.modal-copy-btn').forEach((btn) => {
    btn.querySelector('.copy-text').style.display = '';
    btn.querySelector('.copy-done').style.display = 'none';
  });
}

function copyText(type) {
  const textMap = {
    email: 'jason2023zhang@gmail.com',
    wechat: 'winnielove2020',
  };
  const text = textMap[type];
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const btnId = type === 'email' ? 'modal-email-btn' : 'modal-wechat-btn';
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.querySelector('.copy-text').style.display = 'none';
      btn.querySelector('.copy-done').style.display = '';
      setTimeout(() => {
        btn.querySelector('.copy-text').style.display = '';
        btn.querySelector('.copy-done').style.display = 'none';
      }, 2500);
    }
  });
}

function copyAndSend(type) {
  copyText(type);
  // Also try to open mailto
  setTimeout(() => {
    window.location.href = 'mailto:jason2023zhang@gmail.com?subject=Zaokit AI 咨询';
  }, 300);
}

// Close modal on overlay click or Escape key
document.addEventListener('click', (e) => {
  const modal = document.getElementById('contact-modal');
  if (modal && modal.classList.contains('is-open') && e.target === modal) {
    closeContactModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeContactModal();
});
