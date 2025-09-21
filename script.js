// Controles de acessibilidade: fonte e contraste
(function(){
  const plus = document.getElementById('font-plus');
  const minus = document.getElementById('font-minus');
  const contrast = document.getElementById('toggle-contrast');
  const root = document.documentElement;

  function getSize(){
    const v = window.getComputedStyle(root).getPropertyValue('--font-size').trim();
    return parseFloat(v);
  }
  plus.addEventListener('click', ()=>{
    const n = Math.min(getSize()+10, 140);
    root.style.setProperty('--font-size', n+'%');
  });
  minus.addEventListener('click', ()=>{
    const n = Math.max(getSize()-10, 80);
    root.style.setProperty('--font-size', n+'%');
  });
  contrast.addEventListener('click', ()=>{
    const pressed = contrast.getAttribute('aria-pressed') === 'true';
    contrast.setAttribute('aria-pressed', String(!pressed));
    document.body.classList.toggle('high-contrast');
  });
})();