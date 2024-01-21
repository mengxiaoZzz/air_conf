function operator(proxies) {
    let proxies_All = proxies
    proxies_All.forEach(e => {
        e.name = e.name.replace("🇹🇼", "🇨🇳")
        e.server = 'traffic-in-05.811920.xyz'
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
    //sortProxies.unshift({name: '🇺🇸 TK 美罗培南素 3x', type, server: "traffic-in-05.811920.xyz", port: 54005, cipher, password, udp})
    sortProxies.unshift({name: '🇯🇵 TK 日库木糖醇 3x', type, server: "traffic-in-05.811920.xyz", port: 54003, cipher, password, udp})
    sortProxies.unshift({name: '🇲🇴 TK 澳士蛋白酶 3x', type, server: "traffic-in-05.811920.xyz", port: 54002, cipher, password, udp})
    sortProxies.unshift({name: '🇸🇬 TG 碳酸二甲酯 1x', type, server: "traffic-in-05.811920.xyz", port: 54001, cipher, password, udp})

    return sortProxies;
}
