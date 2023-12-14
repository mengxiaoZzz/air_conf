function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("🇹🇼", "🇨🇳")
        if (!e.name.includes('SP')) {
            e.server = 'traffic-in-03.811920.xyz'
        }
    })

    let sortProxies = []

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇭🇰'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('🇨🇳'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇨🇳'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('🇸🇬'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇸🇬'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('🇯🇵'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇯🇵'))

    let proxies_US = proxies_All.filter(e => e.name.includes('🇺🇸'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇺🇸'))

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    let type = "ss"
    let cipher = "aes-128-gcm"
    let password = proxies_HK[0].password
    let udp = true
    sortProxies.unshift({name: '🇱🇺 LU 硝酸二甲酯 0.01x', type, server: "traffic-in-lite.811920.xyz", port: 50009, cipher, password, udp})
    sortProxies.unshift({name: '🇸🇬 SG 苯巴比妥钠 0.01x', type, server: "traffic-in-lite.811920.xyz", port: 50012, cipher, password, udp})
    sortProxies.unshift({name: '🇭🇰 HK 丁香酰氧胺 0.01x', type, server: "traffic-in-lite.811920.xyz", port: 50013, cipher, password, udp})

    return sortProxies;
}
