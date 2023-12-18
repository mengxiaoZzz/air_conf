function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("🇹🇼", "🇨🇳").replace("HongKong", "HK")
            .replace("Hong Kong", "HK").replace("(MTel)", "")
            .replace("United States", "US").replace("Singapore", "SG")
        if (e.name.includes('🇭🇰')) {
            e.name = '🇭🇰 ' + e.name.replace("🇭🇰 ", "")
        }
        if (e.name.includes('🇨🇳')) {
            e.name = '🇨🇳 ' + e.name.replace("🇨🇳 ", "")
        }
        if (e.name.includes('🇯🇵')) {
            e.name = '🇯🇵 ' + e.name.replace("🇯🇵 ", "")
        }
        if (e.name.includes('🇸🇬')) {
            e.name = '🇸🇬 ' + e.name.replace("🇸🇬 ", "")
        }
        if (e.name.includes('🇲🇴')) {
            e.name = '🇲🇴 ' + e.name.replace("🇲🇴 ", "")
        }
        if (e.name.includes('🇺🇸')) {
            e.name = '🇺🇸 ' + e.name.replace("🇺🇸 ", "")
        }
        if (e.name.includes('🇦🇷')) {
            e.name = '🇦🇷 ' + e.name.replace("🇦🇷 ", "")
        }
        if (e.name.includes('🇲🇾')) {
            e.name = '🇲🇾 ' + e.name.replace("🇲🇾 ", "")
        }
    })

    let sortProxies = []

    let proxies02 = proxies_All.filter(e => e.name.includes('0.2x'))
    proxies_All = proxies_All.filter(e => !e.name.includes('0.2x'))

    let proxies04 = proxies_All.filter(e => e.name.includes('0.4x'))
    proxies_All = proxies_All.filter(e => !e.name.includes('0.4x'))

    let proxiesWcloud = proxies_All.filter(e => e.name.includes('Wcloud'))
    proxies_All = proxies_All.filter(e => !e.name.includes('Wcloud'))

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

    sortProxies.push(...proxies02)
    sortProxies.push(...proxies04)
    sortProxies.push(...proxiesWcloud)
    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_MO)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
