function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(function (e, index) {
        e.name = e.name.replace("🇹🇼", "🇨🇳")
        e.name = e.name.replace("[", "")
        e.name = e.name.replace("]", "")
        e.name = e.name.replace(" | ", "|")
        e.name = e.name.replace("0.20x", "0.2x").replace("1.00x", "1.0x").replace("2.00x", "2.0x").replace("30.0x", "30x")
        e.name = e.name.replace("香港", "HK").replace("台湾", "TW").replace("狮城", "SG").replace("日本", "JP").replace("美国", "US")

        let name = e.name.substring(5);
        let flag = e.name.substring(0, 4);
        let country = name.split(' ')[0]
        let rate = name.split(' ')[1]
        let line = name.split(' ')[2]
        e.name = flag + ' ' + country + ' ' + line + ' ' + rate;
    })

    let sortProxies = []

    let proxies_EIP = proxies_All.filter(e => e.name.includes('EIP'))
    proxies_All = proxies_All.filter(e => !e.name.includes('EIP'))

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
    sortProxies.push(...proxies_EIP)

    return sortProxies;
}
