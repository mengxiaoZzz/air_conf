function operator(proxies) {
    let otherCharArray = ['剩余', '套餐']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(function (e, index) {
        e.name = e.name.replace("Special", "Alibaba")
    })

    let sortProxies = []

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇭🇰'))

    let proxies_MO = proxies_All.filter(e => e.name.includes('🇲🇴'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇲🇴'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('🇨🇳'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇨🇳'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('🇸🇬'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇸🇬'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('🇯🇵'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇯🇵'))

    let proxies_US = proxies_All.filter(e => e.name.includes('🇺🇸'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇺🇸'))

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_MO)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
