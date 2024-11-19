function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '移动直连']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e =>
        e.name = e.name.replace("bxf-HK-vkvm", "🇭🇰HK-VKVM").replace("bxf-JP-vkvm", "🇯🇵JP-VKVM").replace("bxf-us-vkvm", "🇺🇸US-VKVM")
            .replace("三网直连HK-无限流量", "🇭🇰HK三网直连")
    )
    return proxies_All;
}
