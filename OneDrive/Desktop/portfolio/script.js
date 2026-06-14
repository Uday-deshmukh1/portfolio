// ── Portfolio Main Script ──
// GSAP + ScrollTrigger + Lenis smooth scroll + custom cursor

const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Lenis Smooth Scroll ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

lenis.on("scroll", ({ scroll }) => {
  navbar.classList.toggle("scrolled", scroll > 50);
  updateActiveNav(scroll);
  ScrollTrigger.update();
});

// ── GSAP + ScrollTrigger ──
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy(document.documentElement, {
  scrollTop(value) {
    if (arguments.length) lenis.scrollTo(value, { immediate: true });
    return lenis.scroll;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
});

gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const revealDefaults = {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  force3D: true,
};

// Hero entrance
gsap.from(".hero .fade-in", {
  ...revealDefaults,
  y: 30,
  duration: 0.9,
  stagger: 0.12,
  delay: 0.15,
});

// Section titles
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    ...revealDefaults,
    scrollTrigger: { trigger: title, start: "top 85%", once: true },
  });
});

// About section
gsap.from(".about-image", {
  ...revealDefaults,
  x: -40,
  scrollTrigger: { trigger: ".about-grid", start: "top 80%", once: true },
});

gsap.from(".about-text", {
  ...revealDefaults,
  x: 40,
  scrollTrigger: { trigger: ".about-grid", start: "top 80%", once: true },
});

gsap.from(".about-stats li", {
  ...revealDefaults,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: { trigger: ".about-stats", start: "top 85%", once: true },
});

// Staggered cards
const staggerGroups = [
  { trigger: ".skills-grid", items: ".skill-card", stagger: 0.15 },
  { trigger: ".projects-grid", items: ".project-card", stagger: 0.12 },
  { trigger: ".certificates-grid", items: ".cert-card", stagger: 0.15 },
  { trigger: ".timeline", items: ".timeline-item", stagger: 0.2 },
];

staggerGroups.forEach(({ trigger, items, stagger }) => {
  gsap.from(items, {
    ...revealDefaults,
    y: 50,
    duration: 0.7,
    stagger,
    scrollTrigger: { trigger, start: "top 80%", once: true },
  });
});

// Contact form reveal
gsap.from(".contact-subtitle, .contact-form .form-group, #submit-btn", {
  ...revealDefaults,
  y: 30,
  duration: 0.6,
  stagger: 0.08,
  scrollTrigger: { trigger: ".contact-form", start: "top 85%", once: true },
});

// ── Hover transitions (transform/opacity only) ──
const hoverTargets = ".skill-card, .project-card, .cert-card, .btn, .nav-links a, .hero-social a";

document.querySelectorAll(hoverTargets).forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, {
      scale: 1.03,
      y: -4,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
      force3D: true,
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(el, {
      scale: 1,
      y: 0,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
      force3D: true,
    });
  });
});

// ── Custom cursor follower ──
function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const style = document.createElement("style");
  style.textContent = `
    body, body a, body button, body input, body textarea { cursor: none; }
    .cursor-dot, .cursor-ring {
      position: fixed; top: 0; left: 0;
      pointer-events: none; z-index: 9999;
      will-change: transform; transform: translate3d(0,0,0);
    }
    .cursor-dot {
      width: 6px; height: 6px;
      background: #6c63ff; border-radius: 50%; opacity: 0.9;
    }
    .cursor-ring {
      width: 36px; height: 36px;
      border: 1.5px solid rgba(108,99,255,0.45);
      border-radius: 50%; opacity: 0.55;
    }
  `;
  document.head.appendChild(style);

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  gsap.set([dot, ring], { xPercent: -50, yPercent: -50, force3D: true });

  const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
  const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
  const ringX = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
  const ringY = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });

  const interactives = document.querySelectorAll(
    "a, button, .btn, input, textarea, .skill-card, .project-card, .cert-card"
  );

  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(ring, { scale: 1.7, opacity: 0.85, duration: 0.3, ease: "power2.out", force3D: true });
      gsap.to(dot, { scale: 0.5, opacity: 0, duration: 0.2, force3D: true });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(ring, { scale: 1, opacity: 0.55, duration: 0.3, ease: "power2.out", force3D: true });
      gsap.to(dot, { scale: 1, opacity: 0.9, duration: 0.2, force3D: true });
    });
  });
}

initCursor();

// ── Mobile nav toggle ──
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

// ── Smooth anchor scrolling via Lenis ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = anchor.getAttribute("href");
    if (!target || target === "#") return;
    const el = document.querySelector(target);
    if (!el) return;
    e.preventDefault();
    lenis.scrollTo(el, { offset: -80 });
  });
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav(scrollY) {
  let current = "";
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 120) current = section.id;
  });

  navItems.forEach((link) => {
    link.style.color = link.getAttribute("href") === `#${current}` ? "var(--text)" : "";
  });
}

// ── Contact form via Formspree ──
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    showStatus("Please fill in all fields.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showStatus("Please enter a valid email address.", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  showStatus("", "");

  try {
    const res = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      showStatus("Message sent successfully!", "success");
      contactForm.reset();
    } else {
      showStatus(data.error || "Something went wrong. Try again.", "error");
    }
  } catch {
    showStatus("Could not send message. Check your connection.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});

function showStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = "form-status" + (type ? ` ${type}` : "");
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// ── Refresh ScrollTrigger on resize ──
window.addEventListener("resize", () => ScrollTrigger.refresh());
