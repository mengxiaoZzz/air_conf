function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官网']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("Hong Kong", "HK")
            .replace("法国", " 法国")
            .replace("越南", " 越南")
        e.name = e.name.substring(3)
    })

    let sortProxies = []

    let proxies_HK = proxies_All.filter(e => e.name.includes('香港') || e.name.includes('HK'))
    proxies_All = proxies_All.filter(e => !e.name.includes('香港') && !e.name.includes('HK'))

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
