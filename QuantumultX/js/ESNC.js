function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官网', '网址', '官址', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("HK Gcore 01", "HK Gcore")
    })

    let sortProxies = []
    let proxies_Gcore = proxies_All.filter(e => e.name.includes('Gcore'))
    if (proxies_Gcore.length === 1) {
        proxies_Gcore.forEach(e => {
            e.name = '🇭🇰 HK Gcoreˣ⁰˙⁵'
        })
    } else {
        proxies_Gcore.forEach(function (e, index) {
            e.name = '🇭🇰 HK Gcoreˣ⁰˙⁵ ' + (index + 1)
        })
    }
    proxies_All = proxies_All.filter(e => !e.name.includes('Gcore'))

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

    sortProxies.push(...proxies_Gcore)
    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
