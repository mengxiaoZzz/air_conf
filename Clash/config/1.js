function operator(proxies) {
    proxies = proxies.filter(e => !e.name.includes('套餐'))
    let server = proxies[0].server
    let cipher = proxies[0].cipher
    let password = proxies[0].password

    let proxy_SG = {
        server, port: 50012, cipher, password, tfo: true, udp: true,
        name: "🇸🇬 SG 苯巴比妥钠 0.01x", type: "ss", id: 1000, subName: "SYN"
    }

    let proxy_LU = {
        server, port: 50012, cipher, password, tfo: true, udp: true,
        name: "🇱🇺 LU 硝酸二甲酯 0.01x", type: "ss", id: 2000, subName: "SYN"
    }

    proxies.push(proxy_SG)
    proxies.push(proxy_LU)
    return proxies
}
