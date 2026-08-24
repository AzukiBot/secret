document.querySelectorAll('.title').forEach(t=>{let n=t.nextElementSibling,s=t.textContent.trim(),u=n?.textContent.replace(/[\d,\s]/g,'');n&&(/^用户组/.test(s)?n.textContent='不资深编辑员':/^注册时间/.test(s)?n.textContent='1970-01-01 00:00:00':/^(总编辑[次字]数|总短评数|个人教程数)/.test(s)&&setInterval(()=>n.textContent=(Math.random()*2**31|0).toLocaleString()+' '+u,10))});
var host = document.querySelector('details[data-ghost]');
var row = host && host.closest('.comment-row');
if (row) {
    row.remove();
}
host && host.removeAttribute('data-ghost');