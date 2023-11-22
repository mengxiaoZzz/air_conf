function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("🇹🇼", "🇨🇳").replace("HongKong", "Hong Kong")
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

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))
    let proxies_HK_02 = proxies_HK.filter(e => e.name.includes('0.2'))
    let proxies_HK_04 = proxies_HK.filter(e => e.name.includes('0.4'))
    let proxies_HK_Other = proxies_HK.filter(e => !e.name.includes('0.2') && !e.name.includes('0.4'))
    proxies_HK = []
    proxies_HK.push(...proxies_HK_02)
    proxies_HK.push(...proxies_HK_04)
    proxies_HK.push(...proxies_HK_Other)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇭🇰'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('🇨🇳'))
    let proxies_TW_02 = proxies_TW.filter(e => e.name.includes('0.2'))
    let proxies_TW_04 = proxies_TW.filter(e => e.name.includes('0.4'))
    let proxies_TW_Other = proxies_TW.filter(e => !e.name.includes('0.2') && !e.name.includes('0.4'))
    proxies_TW = []
    proxies_TW.push(...proxies_TW_02)
    proxies_TW.push(...proxies_TW_04)
    proxies_TW.push(...proxies_TW_Other)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇨🇳'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('🇸🇬'))
    let proxies_SG_02 = proxies_SG.filter(e => e.name.includes('0.2'))
    let proxies_SG_04 = proxies_SG.filter(e => e.name.includes('0.4'))
    let proxies_SG_Other = proxies_SG.filter(e => !e.name.includes('0.2') && !e.name.includes('0.4'))
    proxies_SG = []
    proxies_SG.push(...proxies_SG_02)
    proxies_SG.push(...proxies_SG_04)
    proxies_SG.push(...proxies_SG_Other)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇸🇬'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('🇯🇵'))
    let proxies_JP_02 = proxies_JP.filter(e => e.name.includes('0.2'))
    let proxies_JP_04 = proxies_JP.filter(e => e.name.includes('0.4'))
    let proxies_JP_Other = proxies_JP.filter(e => !e.name.includes('0.2') && !e.name.includes('0.4'))
    proxies_JP = []
    proxies_JP.push(...proxies_JP_02)
    proxies_JP.push(...proxies_JP_04)
    proxies_JP.push(...proxies_JP_Other)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇯🇵'))

    let proxies_US = proxies_All.filter(e => e.name.includes('🇺🇸'))
    let proxies_US_02 = proxies_US.filter(e => e.name.includes('0.2'))
    let proxies_US_04 = proxies_US.filter(e => e.name.includes('0.4'))
    let proxies_US_Other = proxies_US.filter(e => !e.name.includes('0.2') && !e.name.includes('0.4'))
    proxies_US = []
    proxies_US.push(...proxies_US_02)
    proxies_US.push(...proxies_US_04)
    proxies_US.push(...proxies_US_Other)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇺🇸'))

    let proxies_MO = proxies_All.filter(e => e.name.includes('🇲🇴'))
    proxies_All = proxies_All.filter(e => !e.name.includes('🇲🇴'))

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_MO)
    sortProxies.push(...proxies_All)

    return sortProxies;
}



