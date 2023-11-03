function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    let subName = proxies_All[0].subName

    if (subName === 'Nexitally') {
        proxies_All = proxies_All.filter(e => !e.name.includes('Premium'))
    } else if (subName === 'wait') {
        proxies_All.forEach(e => e.name = e.name.replace(" | 视频", "").replace(" | 游戏", ""))
    } else if (subName === 'Lend') {
        proxies_All.forEach(e => e.name = e.name.replace("Daily", "喵呜"))
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
        proxies_First = proxies_All.filter(e => e.name.includes('0.1'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.1'))
    } else if (subName === 'VAE') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.01'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.01'))
    }

    let proxies_HK = proxies_All.filter(e => e.name.includes('🇭🇰'))
    if (subName === 'wait') {
        let proxies_HK_001 = proxies_HK.filter(e => e.name.includes('0.01'))
        let proxies_HK_01 = proxies_HK.filter(e => e.name.includes('0.1'))
        let proxies_HK_05 = proxies_HK.filter(e => e.name.includes('0.5'))
        let proxies_HK_Other = proxies_HK.filter(e => !e.name.includes('0.01') && !e.name.includes('0.1') && !e.name.includes('0.5'))
        proxies_HK = []
        proxies_HK.push(...proxies_HK_001)
        proxies_HK.push(...proxies_HK_01)
        proxies_HK.push(...proxies_HK_05)
        proxies_HK.push(...proxies_HK_Other)
    }
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

    if (subName === 'SYN') {
        let server = "traffic-in-01.811920.xyz"
        let type = "ss"
        let cipher = "aes-128-gcm"
        let password = proxies_HK[0].password
        let udp = true
        sortProxies.unshift({name: '🇱🇺 LU 硝酸二甲酯 0.01x', type, server, port: 50009, cipher, password, udp})
        sortProxies.unshift({name: '🇸🇬 SG 苯巴比妥钠 0.01x', type, server, port: 50012, cipher, password, udp})
    }

    return sortProxies;
}
