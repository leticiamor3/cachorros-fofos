// Controles de acessibilidade + 'ver mais fotos'
(function(){
  const plus = document.getElementById('font-plus');
  const minus = document.getElementById('font-minus');
  const contrast = document.getElementById('toggle-contrast');
  const root = document.documentElement;
  const btnMais = document.getElementById('btn-mais-fotos');
  const blocoMais = document.getElementById('mais-fotos');

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

  // Ver mais fotos
  btnMais?.addEventListener('click', ()=>{
    const expanded = btnMais.getAttribute('aria-expanded') === 'true';
    btnMais.setAttribute('aria-expanded', String(!expanded));
    if(expanded){
      blocoMais.setAttribute('hidden', '');
      btnMais.textContent = 'Ver mais fotos';
    }else{
      blocoMais.removeAttribute('hidden');
      btnMais.textContent = 'Ver menos fotos';
    }
  });
})();