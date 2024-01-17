function operator(proxies) {
    let otherCharArray = ['剩余', '套餐']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(function (e, index) {
        e.name = e.name.replace("🇹🇼", "🇨🇳")
        e.name = e.name.replace("[", "")
        e.name = e.name.replace("]", "")
        e.name = e.name.replace("  | ", "-")
        e.name = e.name.replace(" | ", "-")
        e.name = e.name.replace("0.10x", "0.1x")
            .replace("0.20x", "0.2x").replace("1.00x", "1x")
        e.name = e.name.replace("香港", "HK").replace("台湾", "TW")
            .replace("狮城", "SG").replace("日本", "JP")
            .replace("美国", "US").replace("韩国", "KR")

        let name = e.name.substring(5);
        let flag = e.name.substring(0, 4);
        let country = name.split(' ')[0]
        let rate = name.split(' ')[1]
        let line = name.split(' ')[2]
        e.name = flag + ' ' + country + ' ' + line + ' ' + rate;
    })

    let sortProxies = []

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))
    let proxies_HK_10 = proxies_HK.filter(e => e.name.includes('1x'))
    let proxies_HK_02 = proxies_HK.filter(e => e.name.includes('0.2x'))
    let proxies_HK_01 = proxies_HK.filter(e => e.name.includes('0.1x'))
    let proxies_HK_EIP = proxies_HK.filter(e => e.name.includes('EIP'))
    proxies_HK = []
    proxies_HK.push(...proxies_HK_10)
    proxies_HK.push(...proxies_HK_02)
    proxies_HK.push(...proxies_HK_01)
    proxies_HK.push(...proxies_HK_EIP)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇭🇰'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('🇨🇳'))
    let proxies_TW_10 = proxies_TW.filter(e => e.name.includes('1x'))
    let proxies_TW_02 = proxies_TW.filter(e => e.name.includes('0.2x'))
    let proxies_TW_01 = proxies_TW.filter(e => e.name.includes('0.1x'))
    proxies_TW = []
    proxies_TW.push(...proxies_TW_10)
    proxies_TW.push(...proxies_TW_02)
    proxies_TW.push(...proxies_TW_01)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇨🇳'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('🇸🇬'))
    let proxies_SG_10 = proxies_SG.filter(e => e.name.includes('1x'))
    let proxies_SG_02 = proxies_SG.filter(e => e.name.includes('0.2x'))
    let proxies_SG_01 = proxies_SG.filter(e => e.name.includes('0.1x'))
    proxies_SG = []
    proxies_SG.push(...proxies_SG_10)
    proxies_SG.push(...proxies_SG_02)
    proxies_SG.push(...proxies_SG_01)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇸🇬'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('🇯🇵'))
    let proxies_JP_10 = proxies_JP.filter(e => e.name.includes('1x'))
    let proxies_JP_02 = proxies_JP.filter(e => e.name.includes('0.2x'))
    let proxies_JP_01 = proxies_JP.filter(e => e.name.includes('0.1x'))
    proxies_JP = []
    proxies_JP.push(...proxies_JP_10)
    proxies_JP.push(...proxies_JP_02)
    proxies_JP.push(...proxies_JP_01)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇯🇵'))

    let proxies_US = proxies_All.filter(e => e.name.includes('🇺🇸'))
    let proxies_US_10 = proxies_US.filter(e => e.name.includes('1x'))
    let proxies_US_02 = proxies_US.filter(e => e.name.includes('0.2x'))
    let proxies_US_01 = proxies_US.filter(e => e.name.includes('0.1x'))
    proxies_US = []
    proxies_US.push(...proxies_US_10)
    proxies_US.push(...proxies_US_02)
    proxies_US.push(...proxies_US_01)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇺🇸'))

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)

    return sortProxies;
}
