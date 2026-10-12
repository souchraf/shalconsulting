const button=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
if(button&&nav){
  const close=()=>{button.setAttribute('aria-expanded','false');nav.dataset.open='false';button.textContent='Menu';};
  button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.dataset.open=String(open);button.textContent=open?'Fermer':'Menu';});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){close();button.focus();}});
  window.matchMedia('(min-width: 801px)').addEventListener('change',event=>{if(event.matches)close();});
}
