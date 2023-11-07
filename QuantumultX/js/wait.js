function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => e.name = e.name.replace("🇹🇼", "🇨🇳"))
    proxies_All.forEach(e => e.name = e.name.replace(" | 视频", "").replace(" | 游戏", ""))

    let sortProxies = []
    let proxies_First = []

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))

    let proxies_HK_001 = proxies_HK.filter(e => e.name.includes('0.01'))
    let proxies_HK_01 = proxies_HK.filter(e => e.name.includes('0.1'))
    let proxies_HK_02 = proxies_HK.filter(e => e.name.includes('京港'))
    let proxies_HK_Random = proxies_HK.filter(e => e.name.includes('Random'))
    let proxies_HK_Other = proxies_HK.filter(e => !e.name.includes('0.01') && !e.name.includes('0.1')
        && !e.name.includes('京港') && !e.name.includes('Random'))
    proxies_HK = []
    proxies_HK.push(...proxies_HK_001)
    proxies_HK.push(...proxies_HK_01)
    proxies_HK.push(...proxies_HK_02)
    proxies_HK.push(...proxies_HK_Random)
    proxies_HK.push(...proxies_HK_Other)

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
