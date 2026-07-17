
function setLang(l){
  document.documentElement.setAttribute('data-lang', l);
  try{localStorage.setItem('smLang', l);}catch(e){}
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = (l === 'mr' ? 'mr' : 'en');
}
function toggleDrop(btn){
  var dd = btn.parentElement.querySelector('.dropdown');
  if(!dd) return;
  var open = dd.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
document.addEventListener('click', function(e){
  if(!e.target.closest('.has-dropdown')){
    document.querySelectorAll('.dropdown.open').forEach(function(dd){
      dd.classList.remove('open');
      var b = dd.parentElement.querySelector('.navbtn');
      if(b) b.setAttribute('aria-expanded','false');
    });
  }
});
document.addEventListener('DOMContentLoaded', function(){
  var saved = 'mr';
  try{saved = localStorage.getItem('smLang') || 'mr';}catch(e){}
  setLang(saved);
  // lightbox
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<img alt="">';
  document.body.appendChild(lb);
  lb.addEventListener('click', function(){ lb.classList.remove('open'); });
  document.querySelectorAll('.gallery img, .hero img').forEach(function(im){
    im.addEventListener('click', function(){
      lb.querySelector('img').src = im.src;
      lb.classList.add('open');
    });
  });
});
