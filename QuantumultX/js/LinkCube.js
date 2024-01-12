function operator(proxies) {
    let otherCharArray = ['Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("专线 深圳-", "")
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

    let proxies_KR = proxies_All.filter(e => e.name.includes('🇰🇷'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇰🇷'))

    let proxies_GB = proxies_All.filter(e => e.name.includes('🇬🇧'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇬🇧'))

    let proxies_DE = proxies_All.filter(e => e.name.includes('🇩🇪'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇩🇪'))

    let proxies_NL = proxies_All.filter(e => e.name.includes('🇳🇱'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇳🇱'))

    proxies_All.forEach(e => {
        e.name = e.name.replace(" 01", "")
    })

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_KR)
    sortProxies.push(...proxies_GB)
    sortProxies.push(...proxies_DE)
    sortProxies.push(...proxies_NL)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
