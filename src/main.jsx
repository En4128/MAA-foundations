import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* ── Scroll Reveal Observer ──────────────────────────────────
   Watches elements with .reveal / .reveal-left / .reveal-right
   / .reveal-zoom and adds .visible when they enter the viewport.
   Works alongside Framer Motion whileInView animations.
────────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Observe existing elements
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom')
  .forEach((el) => revealObserver.observe(el));

// Also catch elements added after initial render (dynamic content)
const mutationObserver = new MutationObserver(() => {
  document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-zoom:not(.visible)')
    .forEach((el) => revealObserver.observe(el));
});
mutationObserver.observe(document.body, { childList: true, subtree: true });
