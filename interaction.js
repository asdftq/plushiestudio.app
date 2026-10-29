const stage = document.querySelector('.stage');
const object = document.querySelector('.object');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

stage.addEventListener('pointermove', (event) => {
  if (motion.matches || !finePointer.matches) return;
  const bounds = stage.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  object.style.transform = `translateY(-4px) rotateX(${12 - y * 18}deg) rotateY(${-19 + x * 24}deg) rotateZ(-9deg)`;
});

stage.addEventListener('pointerleave', () => {
  object.style.removeProperty('transform');
});
