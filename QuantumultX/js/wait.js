function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(function (e, index) {
        e.name = e.name.replace("🇹🇼", "🇨🇳")
        e.name = e.name.replace("[", "")
        e.name = e.name.replace("]", "")
        e.name = e.name.replace(" | ", "|")
        e.name = e.name.replace("0.20x", "0.2x").replace("1.00x", "1.0x").replace("2.00x", "2.0x").replace("30.0x", "30x")
        e.name = e.name.replace("香港", "HK").replace("台湾", "TW").replace("狮城", "SG").replace("日本", "JP").replace("美国", "US")

        let name = e.name.substring(5);
        let flag = e.name.substring(0, 4);
        let country = name.split(' ')[0]
        let rate = name.split(' ')[1]
        let line = name.split(' ')[2]
        e.name = flag + ' ' + country + ' ' + line + ' ' + rate;
    })

    let sortProxies = []

    // let proxies_EIP = proxies_All.filter(e => e.name.includes('EIP'))
    // proxies_All = proxies_All.filter(e => !e.name.includes('EIP'))

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))
    let proxies_HK_20 = proxies_HK.filter(e => e.name.includes('2.0'))
    let proxies_HK_10 = proxies_HK.filter(e => e.name.includes('1.0'))
    let proxies_HK_02 = proxies_HK.filter(e => e.name.includes('0.2'))
    proxies_HK = []
    proxies_HK.push(...proxies_HK_20)
    proxies_HK.push(...proxies_HK_10)
    proxies_HK.push(...proxies_HK_02)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇭🇰'))

    let proxies_TW = proxies_All.filter(e => e.name.includes('🇨🇳'))
    let proxies_TW_CN2 = proxies_TW.filter(e => e.name.includes('CN2'))
    let proxies_TW_SU = proxies_TW.filter(e => e.name.includes('苏移'))
    proxies_TW = []
    proxies_TW.push(...proxies_TW_CN2)
    proxies_TW.push(...proxies_TW_SU)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇨🇳'))

    let proxies_SG = proxies_All.filter(e => e.name.includes('🇸🇬'))
    let proxies_SG_20 = proxies_SG.filter(e => e.name.includes('2.0'))
    let proxies_SG_10 = proxies_SG.filter(e => e.name.includes('1.0'))
    let proxies_SG_02 = proxies_SG.filter(e => e.name.includes('0.2'))
    proxies_SG = []
    proxies_SG.push(...proxies_SG_20)
    proxies_SG.push(...proxies_SG_10)
    proxies_SG.push(...proxies_SG_02)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇸🇬'))

    let proxies_JP = proxies_All.filter(e => e.name.includes('🇯🇵'))
    let proxies_JP_20 = proxies_JP.filter(e => e.name.includes('2.0'))
    let proxies_JP_10 = proxies_JP.filter(e => e.name.includes('1.0'))
    let proxies_JP_02 = proxies_JP.filter(e => e.name.includes('0.2'))
    proxies_JP = []
    proxies_JP.push(...proxies_JP_20)
    proxies_JP.push(...proxies_JP_10)
    proxies_JP.push(...proxies_JP_02)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇯🇵'))

    let proxies_US = proxies_All.filter(e => e.name.includes('🇺🇸'))
    let proxies_US_20 = proxies_US.filter(e => e.name.includes('2.0'))
    let proxies_US_10 = proxies_US.filter(e => e.name.includes('1.0'))
    let proxies_US_02 = proxies_US.filter(e => e.name.includes('0.2'))
    proxies_US = []
    proxies_US.push(...proxies_US_20)
    proxies_US.push(...proxies_US_10)
    proxies_US.push(...proxies_US_02)
    proxies_All = proxies_All.filter(e => !e.name.includes('🇺🇸'))

    sortProxies.push(...proxies_HK)
    sortProxies.push(...proxies_TW)
    sortProxies.push(...proxies_SG)
    sortProxies.push(...proxies_JP)
    sortProxies.push(...proxies_US)
    sortProxies.push(...proxies_All)
    //sortProxies.push(...proxies_EIP)

    return sortProxies;
}
