// Clear state modifiers and remove any previously injected mark spans
cell.classList.remove('cell--x', 'cell--o', 'cell--empty', 'cell--winning');
cell.querySelector('span.x')?.remove();   // ← new
cell.querySelector('span.o')?.remove();

if (value === 'X') {
  cell.classList.add('cell--x');

  // Inject <span class="x"> — styled as two crossing diagonal lines via CSS
  const xSpan = document.createElement('span');
  xSpan.className = 'x';
  xSpan.setAttribute('aria-hidden', 'true');
  cell.appendChild(xSpan);

  cell.setAttribute('aria-label', `${cellPositionLabel(cell)} – X`);
}