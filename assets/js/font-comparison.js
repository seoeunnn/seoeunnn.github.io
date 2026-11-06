(() => {
  const variant = document.getElementById('font-variant');
  const width = document.getElementById('preview-width');
  const frame = document.getElementById('font-preview');
  const open = document.getElementById('open-preview');
  const label = document.getElementById('preview-label');
  const params = new URLSearchParams(window.location.search);
  if (['a', 'b', 'c', 'd'].includes(params.get('variant'))) variant.value = params.get('variant');
  if (['desktop', '390', '360'].includes(params.get('width'))) width.value = params.get('width');
  const update = () => {
    const url = `${frame.dataset.previewRoot}${variant.value}/`;
    if (frame.getAttribute('src') !== url) frame.src = url;
    frame.style.width = width.value === 'desktop' ? '100%' : `${width.value}px`;
    frame.title = `${variant.value.toUpperCase()} 폰트 시안`;
    open.href = url;
    label.textContent = variant.selectedOptions[0].textContent;
    const next = new URL(window.location.href);
    next.searchParams.set('variant', variant.value);
    next.searchParams.set('width', width.value);
    window.history.replaceState(null, '', next);
  };
  document.getElementById('preview-controls').addEventListener('submit', event => event.preventDefault());
  variant.addEventListener('change', update);
  width.addEventListener('change', update);
  update();
})();
