function operator(proxies) {
    // sub.sntp.uk
    // subs.xttlove.uk
    let otherCharArray = ['剩余', '套餐']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(function (e, index) {
        e.name = e.name.replace("Wifi", "WIFI").replace("油佬专线", "油佬")
        if (e.name.includes("🇨🇳")) {
            e.name = e.name.replace("Akari", "Hytron")
        }
    })

    let sortProxies = []

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇭🇰'))
    proxies_HK.push({
        "name": "🇭🇰 HK-EIP Alibaba",
        "type": "trojan",
        "server": "eiphk.as9929.uk",
        "port": 39244,
        "password": proxies_HK[0].password,
        "skip-cert-verify": true,
        "tls": true,
        "id": 100,
        "subName": "wait"
    })

    let proxies_MO = proxies_All.filter(e => e.name.includes('🇲🇴'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇲🇴'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('🇨🇳'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇨🇳'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('🇸🇬'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇸🇬'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('🇯🇵'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇯🇵'))

    let proxies_EMBY = proxies_All.filter(e => e.name.includes('EMBY'))
    proxies_All = proxies_All.filter(e => !e.name.includes('EMBY'))

    let proxies_US = proxies_All.filter(e => e.name.includes('🇺🇸'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇺🇸'))

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_MO)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)
    sortProxies.push(...proxies_EMBY)

    return sortProxies;
}
