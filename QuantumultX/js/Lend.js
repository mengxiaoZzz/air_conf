function operator(proxies) {
    let proxies_All = proxies
    proxies_All.forEach(e => {
        e.name = e.name.replace("Mo", "MO")
    })

    let sortProxies = []

    let proxies_DIRECT = proxies_All.filter(e => e.name.includes('DIRECT'))
    proxies_All = proxies_All.filter(e => !e.name.includes('DIRECT'))

    let proxies_HK = proxies_All.filter(e => e.name.includes('HK'))
    proxies_All = proxies_All.filter(e => !e.name.includes('HK'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('TW'))
    proxies_All = proxies_All.filter(e => !e.name.includes('TW'))

    let proxies_MO = proxies_All.filter(e => e.name.includes('MO'))
    proxies_All = proxies_All.filter(e => !e.name.includes('MO'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('SG'))
    proxies_All = proxies_All.filter(e => !e.name.includes('SG'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('JP'))
    proxies_All = proxies_All.filter(e => !e.name.includes('JP'))

    let proxies_US = proxies_All.filter(e => e.name.includes('US'))
    proxies_All = proxies_All.filter(e => !e.name.includes('US'))

    sortProxies.push(...proxies_DIRECT)
    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_MO)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
