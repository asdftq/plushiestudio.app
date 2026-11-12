const stage = document.querySelector('.stage');
const object = document.querySelector('.object');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let frame = 0;
let pending = null;

function enabled() {
  return !motion.matches && finePointer.matches;
}

function apply() {
  frame = 0;
  if (!pending) return;
  const { x, y } = pending;
  object.style.transform = `translateY(-4px) rotateX(${12 - y * 18}deg) rotateY(${-19 + x * 24}deg) rotateZ(-9deg)`;
}

stage.addEventListener('pointerenter', () => {
  if (enabled()) object.classList.add('tracking');
});

stage.addEventListener('pointermove', (event) => {
  if (!enabled()) return;
  const bounds = stage.getBoundingClientRect();
  pending = {
    x: (event.clientX - bounds.left) / bounds.width - 0.5,
    y: (event.clientY - bounds.top) / bounds.height - 0.5,
  };
  if (!frame) frame = requestAnimationFrame(apply);
});

stage.addEventListener('pointerleave', () => {
  pending = null;
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
  object.classList.remove('tracking');
  object.style.removeProperty('transform');
});
