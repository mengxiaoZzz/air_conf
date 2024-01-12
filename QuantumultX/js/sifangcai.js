function operator(proxies) {
    let proxies_All = proxies.filter(e => !e.name.includes('📝'))
    proxies_All.forEach(e => e.name = e.name.replace("🇹🇼", "🇨🇳"))
    return proxies_All;
}
