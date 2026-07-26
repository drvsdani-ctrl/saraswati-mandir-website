
function setLang(l){
  document.documentElement.setAttribute('data-lang', l);
  try{localStorage.setItem('smLang', l);}catch(e){}
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = (l === 'mr' ? 'mr' : 'en');
  applyFactDigits(l);
}
function convFact(s){
  var m={'०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'};
  return s.replace(/[०-९]/g,function(d){return m[d];}).replace(/वी/g,'th').replace(/ब/g,'B');
}
function applyFactDigits(l){
  document.querySelectorAll('.fact b').forEach(function(b){
    if(b.querySelector('span')) return;
    if(b.dataset.mr === undefined){ b.dataset.mr = b.textContent; }
    b.textContent = (l === 'en') ? convFact(b.dataset.mr) : b.dataset.mr;
  });
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
(function(){
  var link = document.querySelector('link[rel="icon"]');
  if(!link){ link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
  link.type = 'image/svg+xml';
  link.href = 'images/logo-saraswati.svg';
})();
document.addEventListener('DOMContentLoaded', function(){
  var hdr = document.querySelector('.header-inner');
  var nav = document.querySelector('nav.main');
  var lang = document.querySelector('.lang-switch');
  if(hdr && nav){
    var area = document.createElement('div');
    area.className = 'nav-area';
    area.appendChild(nav);
    if(lang) area.appendChild(lang);
    hdr.appendChild(area);
  }
  var sm = document.querySelector('.brand h1 small');
  if(sm){ sm.innerHTML = '<span class="mr">स्थापना : १९२१<br>महिलांनी चालवलेली सेवाभावी संस्था</span><span class="en">Estd. 1921<br>v/o run by women</span>'; }
  var tb = document.querySelector('.topbar'); if(tb){ tb.remove(); }
  var fi = document.querySelector('footer.site .inner');
  if(fi){
    fi.innerHTML = '<div><h4><span class="mr">पत्ता</span><span class="en">Address</span></h4><p><span class="mr">सरस्वती मंदिर,<br>तुळशीबाग रोड, रेशीमबाग,<br>नागपूर – ४४००२४, महाराष्ट्र</span><span class="en">Saraswati Mandir,<br>Tulshibaug Road, Reshimbagh,<br>Nagpur – 440024, Maharashtra, India</span></p></div><div class="footer-reg"><h4><span class="mr">नोंदणी</span><span class="en">Registration</span></h4><p><span class="mr">धर्मादाय आयुक्त नोंदणी क्र. : F-२५९(N)<br>दिनांक : १६.०४.१९६२</span><span class="en">Charity Commissioner Reg. No. F-259(N)<br>Date of Registration: 16.04.1962</span></p></div>';
  }
  var saved = 'mr';
  try{saved = localStorage.getItem('smLang') || 'mr';}catch(e){}
  setLang(saved);
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML =
    '<button class="lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-nav lb-prev" aria-label="Previous photo">&#10094;</button>' +
    '<figure class="lb-stage"><img alt=""><figcaption class="lb-cap"></figcaption></figure>' +
    '<button class="lb-nav lb-next" aria-label="Next photo">&#10095;</button>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img');
  var lbCap = lb.querySelector('.lb-cap');
  var prevBtn = lb.querySelector('.lb-prev');
  var nextBtn = lb.querySelector('.lb-next');
  var gallery = [];
  document.querySelectorAll('.gallery img').forEach(function(im){
    var fig = im.closest('figure');
    var fc = fig ? fig.querySelector('figcaption') : null;
    gallery.push({ img: im, cap: fc ? fc.innerHTML : '' });
  });
  var idx = -1, navMode = false;
  function show(i){
    if(i < 0) i = gallery.length - 1;
    if(i >= gallery.length) i = 0;
    idx = i;
    lbImg.src = gallery[idx].img.src;
    lbCap.innerHTML = gallery[idx].cap;
    lbCap.style.display = gallery[idx].cap ? '' : 'none';
  }
  function showNav(on){ prevBtn.style.display = nextBtn.style.display = on ? '' : 'none'; }
  function openAt(i){ navMode = true; showNav(gallery.length > 1); show(i); lb.classList.add('open'); }
  function openSingle(src){ navMode = false; showNav(false); lbImg.src = src; lbCap.style.display = 'none'; lb.classList.add('open'); }
  function close(){ lb.classList.remove('open'); }
  gallery.forEach(function(g, i){
    g.img.addEventListener('click', function(e){ e.stopPropagation(); openAt(i); });
  });
  document.querySelectorAll('.hero img').forEach(function(im){
    im.addEventListener('click', function(){ openSingle(im.src); });
  });
  prevBtn.addEventListener('click', function(e){ e.stopPropagation(); show(idx - 1); });
  nextBtn.addEventListener('click', function(e){ e.stopPropagation(); show(idx + 1); });
  lb.querySelector('.lb-close').addEventListener('click', function(e){ e.stopPropagation(); close(); });
  lbImg.addEventListener('click', function(e){ e.stopPropagation(); });
  lb.addEventListener('click', function(){ close(); });
  document.addEventListener('keydown', function(e){
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape'){ close(); }
    else if(navMode && e.key === 'ArrowLeft'){ show(idx - 1); }
    else if(navMode && e.key === 'ArrowRight'){ show(idx + 1); }
  });
});
