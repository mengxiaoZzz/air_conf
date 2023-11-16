function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官网', '网址', '官址', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => e.name = e.name.replace("🇹🇼", "🇨🇳"))
    let subName = proxies_All[0].subName

    if (subName === 'Nexitally') {
        proxies_All = proxies_All.filter(e => !e.name.includes('Premium'))
    } else if (subName === 'Lend') {
        proxies_All.forEach(e => e.name = e.name.replace("Daily", "喵呜").replace("RELAY", "喵呜"))
    } else if (subName === 'To2') {
        proxies_All.forEach(e => e.name = e.name.replace(" 購物", ""))
    }

    let sortProxies = []
    let proxies_First = []
    if (subName === 'Metaverse') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.2X'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.2X'))
    } else if (subName === 'Lend') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.01'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.01'))

        let proxies_DIRECT = proxies_All.filter(e => e.name.includes('DIRECT'))
        proxies_All = proxies_All.filter(e => !e.name.includes('DIRECT'))
        proxies_First.push(...proxies_DIRECT)
    } else if (subName === 'To2') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.3'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.3'))
    } else if (subName === 'VAE') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.01'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.01'))
    }

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

    sortProxies.push(...proxies_First)
    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
