function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    let proxies_Name = proxies_All.map(e => e.name)

    let name = ''
    if (proxies_Name.includes("🇭🇰 Hong Kong 20 [Premium]")) {
        name = 'Nexitally'
    } else if (proxies_Name.includes("🇭🇰 HK 2.00x [EIP | 游戏]")) {
        name = '守候'
    } else if (proxies_Name.includes("🇭🇰 HK2 Eons")) {
        name = 'Metaverse'
    } else if (proxies_Name.includes("🇭🇰HK QC 3×")) {
        name = 'Lend'
    } else if (proxies_Name.includes("🇭🇰 HK 香港猪猪侠")) {
        name = 'To2'
    } else if (proxies_Name.includes("🇭🇰HK 酥皮菠蘿包")) {
        name = 'VAE'
    } else if (proxies_Name.includes("🇭🇰 HK 乙酰氨基酚")) {
        name = 'SYN'
    }

    if (name === 'Nexitally') {
        proxies_All = proxies_All.filter(e => !e.name.includes('Premium'))
    } else if (name === '守候') {
        proxies_All.forEach(e => e.name = e.name.replace(" | 视频", "").replace(" | 游戏", ""))
    } else if (name === 'Lend') {
        proxies_All.forEach(e => e.name = e.name.replace("Daily", "HK 喵呜"))
    } else if (name === 'To2') {
        proxies_All.forEach(e => e.name = e.name.replace(" 購物", ""))
    }

    let sortProxies = []
    let proxies_First = []
    if (name === 'Metaverse') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.2X'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.2X'))
    }
    if (name === 'Lend') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.01'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.01'))

        let proxies_DIRECT = proxies_All.filter(e => e.name.includes('DIRECT'))
        proxies_All = proxies_All.filter(e => !e.name.includes('DIRECT'))
        proxies_First.push(...proxies_DIRECT)
    }
    if (name === 'To2') {
        proxies_First = proxies_All.filter(e => e.name.includes('0.1'))
        proxies_All = proxies_All.filter(e => !e.name.includes('0.1'))
    }
    if (name === 'VAE') {
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
