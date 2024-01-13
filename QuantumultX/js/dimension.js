function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官网']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)

    let sortProxies = []

    let proxies_HK = proxies_All.filter(e => e.name.includes('香港'))
    proxies_All = proxies_All.filter(e => !e.name.includes('香港'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('台湾'))
    proxies_All = proxies_All.filter(e => !e.name.includes('台湾'))

    let proxies_MO = proxies_All.filter(e => e.name.includes('澳门'))
    proxies_All = proxies_All.filter(e => !e.name.includes('澳门'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('新加坡'))
    proxies_All = proxies_All.filter(e => !e.name.includes('新加坡'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('日本'))
    proxies_All = proxies_All.filter(e => !e.name.includes('日本'))

    let proxies_US = proxies_All.filter(e => e.name.includes('美国'))
    proxies_All = proxies_All.filter(e => !e.name.includes('美国'))

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_MO)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
