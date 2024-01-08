function operator(proxies) {
    let otherCharArray = ['剩余', '套餐', '官', '网', 'GB', 'Traffic', 'Expire']
    let proxies_All = proxies.filter(e => otherCharArray.filter(v => e.name.includes(v)).length === 0)
    proxies_All.forEach(e => {
        e.name = e.name.replace("专线 深圳-", "")
    })
    return proxies_All;
}
