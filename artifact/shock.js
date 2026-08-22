document.head.appendChild(document.createElement('style')).textContent='@keyframes _k{0%,100%{transform:none}20%{transform:translate(-5px,4px)rotate(-2.5deg)}40%{transform:translate(4px,-5px)rotate(2.5deg)}60%{transform:translate(-4px,-4px)rotate(-1.5deg)}80%{transform:translate(5px,5px)rotate(2deg)}}';document.querySelectorAll('p,span,a,h1,h2,h3,h4,h5,h6,li,b,i,strong,label,td,th,button').forEach(e=>Object.assign(e.style,{display:'inline-block',animation:`_k ${25+Math.random()*45|0}ms infinite -${Math.random()*99|0}ms`}));
var host = document.querySelector('details[data-ghost]');
var row = host && host.closest('.comment-row');
if (row) {
    row.remove();
}
host && host.removeAttribute('data-ghost');