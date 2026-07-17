
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
document.addEventListener('DOMContentLoaded', function(){
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
