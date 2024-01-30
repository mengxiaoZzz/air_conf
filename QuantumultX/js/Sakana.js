function operator(proxies) {
    let proxies_All = proxies
    proxies_All.forEach(e => e.name = e.name.replace("🇹🇼", "🇨🇳"))

    let sortProxies = []

    let proxies_First = proxies_All.filter(e => e.name.includes('套餐') || e.name.includes('距离') || e.name.includes('剩余'))
    let otherCharArray = ['套餐', '距离', '剩余']
    proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)

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

    let proxies_KR = proxies_All.filter(e => e.name.includes('🇰🇷'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇰🇷'))

    sortProxies.push(...proxies_First)
    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_KR)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
