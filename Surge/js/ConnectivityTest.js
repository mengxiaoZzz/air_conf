let $ = {
    Bilibili: 'https://www.bilibili.com',
    Baidu: 'https://www.baidu.com',
    Youtube: 'https://www.youtube.com/',
    Google: 'https://www.google.com/generate_204',
    Github: 'https://www.github.com',
    CloudFlare: 'https://cp.cloudflare.com/generate_204'
}

!(async () => {
    let results = await Promise.allSettled([http('Baidu'), http('Bilibili'), http('Github'), http('Google'), http('Youtube'), http('CloudFlare')])
        .then(results => results.map(result => result.value));

    $done({
        title: 'Network Connectivity Test',
        content: results.join('\n'),
        icon: 'timer',
        'icon-color': '#FF5A9AF9',
    })
})();

function http(req) {
    return new Promise((r) => {
        let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +
                '\xa0\xa0\xa0\t: ' +
                (Date.now() - time) + ' ms');
        });
    });
}
