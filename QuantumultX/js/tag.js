function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官网', '网址', '官址', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("🇹🇼", "🇨🇳").replace("丨", " ")
        let index = e.name.indexOf('x');
        e.name = e.name.substring(0, index + 1)
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

    return sortProxies;
}
