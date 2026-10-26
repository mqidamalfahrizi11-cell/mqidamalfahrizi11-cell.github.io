(function(){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
document.querySelectorAll('[data-tilt]').forEach(function(el){var m=+el.dataset.tilt;
 el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='perspective(800px) rotateY('+x*m*2+'deg) rotateX('+-y*m*2+'deg) scale(1.02)'});
 el.addEventListener('pointerleave',function(){el.style.transform=''})});
var mn=document.getElementById('mn');document.getElementById('bg').onclick=function(){mn.classList.toggle('on')};
mn.querySelectorAll('a').forEach(function(a){a.onclick=function(){mn.classList.remove('on')}});
var tt=document.querySelector('.t');tt.setAttribute('aria-label','PORTFOLIO');tt.innerHTML=tt.textContent.split('').map(function(ch,i){return '<span aria-hidden="true" style="animation-delay:'+(i*60)+'ms">'+ch+'</span>'}).join('');
var hero=document.querySelector('.hero'),o1=document.querySelector('.o1'),o2=document.querySelector('.o2'),ols=document.querySelectorAll('.ol'),tk=false;
function sc(){tk=false;var y=scrollY;o1.style.transform='translateX('+(-y*.12)+'px)';o2.style.transform='translateX('+(y*.18)+'px)';ols.forEach(function(el,i){var r=el.getBoundingClientRect();el.style.transform='translateX('+((i%2?-1:1)*(r.top-innerHeight/2)*.12)+'px)'})}
addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(sc)}},{passive:true});sc();
hero.addEventListener('pointermove',function(e){hero.style.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));hero.style.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3))});
var T=document.getElementById('trk'),dn=false,sx=0,sl=0;
var mvd=0,lx=0,vel=0,raf=0,cards=[].slice.call(T.querySelectorAll('.vc')),dots=document.getElementById('dots');
cards.forEach(function(c,i){var b=document.createElement('button');b.setAttribute('aria-label','Video '+(i+1));b.onclick=function(){go(i)};dots.appendChild(b)});
function go(i){T.scrollTo({left:cards[i].offsetLeft-cards[0].offsetLeft,behavior:'smooth'})}
function upd(){var w=cards[0].offsetWidth+22,k=Math.min(cards.length-1,Math.round(T.scrollLeft/w));cards.forEach(function(c,i){c.classList.toggle('on',i===k)});[].forEach.call(dots.children,function(d,i){d.classList.toggle('on',i===k)})}
T.addEventListener('scroll',upd,{passive:true});upd();
T.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||e.button!==0)return;if(e.target.tagName==='VIDEO'){var r=e.target.getBoundingClientRect();if(e.clientY>r.bottom-54)return}
 cancelAnimationFrame(raf);dn=true;mvd=0;sx=lx=e.clientX;sl=T.scrollLeft;vel=0;T.classList.add('dr')});
addEventListener('pointermove',function(e){if(!dn)return;mvd=Math.max(mvd,Math.abs(e.clientX-sx));vel=e.clientX-lx;lx=e.clientX;T.scrollLeft=sl-(e.clientX-sx)});
function up(){if(!dn)return;dn=false;(function f(){if(Math.abs(vel)<.5){T.classList.remove('dr');return}T.scrollLeft-=vel;vel*=.92;raf=requestAnimationFrame(f)})()}
addEventListener('pointerup',up);addEventListener('pointercancel',up);
T.addEventListener('click',function(e){if(mvd>5){e.preventDefault();e.stopPropagation();mvd=0}},true);
T.addEventListener('dragstart',function(e){e.preventDefault()});
document.querySelectorAll('.pj').forEach(function(l){function a(){var i=+l.dataset.v;T.scrollIntoView({behavior:'smooth',block:'center'});go(i);cards[i].classList.add('pulse');setTimeout(function(){cards[i].classList.remove('pulse')},900)}
 l.onclick=a;l.onkeydown=function(e){if(e.key==='Enter')a()}});
function mv(d){T.scrollBy({left:d*(T.querySelector('.vc').offsetWidth+22),behavior:'smooth'})}
document.getElementById('pv').onclick=function(){mv(-1)};document.getElementById('nx').onclick=function(){mv(1)};

tt.querySelectorAll('span').forEach(function(s){s.addEventListener('animationend',function(){s.style.animation='none'})});
var ts=document.getElementById('ts'),tm;
function ok(m){ts.textContent=m;ts.classList.add('on');clearTimeout(tm);tm=setTimeout(function(){ts.classList.remove('on')},1800)}
function cp(t){function fb(){var a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove()}
 try{navigator.clipboard.writeText(t).catch(fb)}catch(e){fb()}ok('Disalin: '+t)}
document.addEventListener('click',function(e){var c=e.target.closest('[data-cp]');if(c)cp(c.dataset.cp)});
var AT=['Saya siswa Rekayasa Perangkat Lunak di SMKN 1 Karawang. Saya pernah membuat sistem kamera detector dengan YOLO.','PKL 12 September – 12 Desember 2026 di Kantor Imigrasi Karawang Kelas non TPI 1, divisi TIKIM, Lantas, dan TU. Saya mengedit video, membuat desain grafis, dan menginput data paspor.','Pengembangan perangkat lunak, Computer Vision, dan teknologi AI. Saya juga mengerjakan editing video dan desain grafis.'];
var tb=document.querySelectorAll('#atb button'),tp=document.getElementById('atp');
tb.forEach(function(b,i){b.onclick=function(){tb.forEach(function(x){x.classList.remove('on')});b.classList.add('on');tp.innerHTML='<p></p>';tp.firstChild.textContent=AT[i]}});
document.querySelectorAll('.acc>b').forEach(function(b){b.onclick=function(){b.parentNode.classList.toggle('open')}});
var skd=document.getElementById('skd');document.querySelectorAll('.pk').forEach(function(s){function a(){document.querySelectorAll('.pk').forEach(function(x){x.classList.remove('on')});s.classList.add('on');skd.textContent=s.textContent+': '+s.dataset.d}s.onclick=a;s.onkeydown=function(e){if(e.key==='Enter')a()}});
var pg=document.getElementById('pg'),bt=document.getElementById('bt'),ids=['tentang','resume','proyek','kontak'],lk=ids.map(function(id){return document.querySelector('.menu a[href="#'+id+'"]')});
function sp(){var h=document.documentElement.scrollHeight-innerHeight;pg.style.width=(scrollY/h*100)+'%';bt.classList.toggle('on',scrollY>700);var cur=-1;ids.forEach(function(id,i){var s=document.getElementById(id);if(s&&s.getBoundingClientRect().top<innerHeight*.4)cur=i});lk.forEach(function(a,i){if(a)a.classList.toggle('act',i===cur)})}
addEventListener('scroll',sp,{passive:true});sp();bt.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--gx',(e.clientX-r.left)+'px');hero.style.setProperty('--gy',(e.clientY-r.top)+'px')});
document.querySelectorAll('.btn,.scroll').forEach(function(el){el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();el.style.translate=((e.clientX-r.left-r.width/2)*.3)+'px '+((e.clientY-r.top-r.height/2)*.3)+'px'});el.addEventListener('pointerleave',function(){el.style.translate=''})});
})();
