// Define the `main` function
function main(params) {
    params.proxies.forEach(e => e.name = e.name.replace("🇨🇳", "🇼🇸").replace("🇹🇼", "🇼🇸"))
    let proxyNames = params.proxies.map(e => e.name)
    let proxyNames_HK = proxyNames.filter(e => e.includes('🇭🇰'))
    let proxyNames_TW = proxyNames.filter(e => e.includes('🇼🇸'))
    let proxyNames_SG = proxyNames.filter(e => e.includes('🇸🇬'))
    let proxyNames_JP = proxyNames.filter(e => e.includes('🇯🇵'))
    let proxyNames_US = proxyNames.filter(e => e.includes('🇺🇸'))

    params["mixed-port"] = 7893
    params["geodata-mode"] = true
    params["tcp-concurrent"] = false
    params["allow-lan"] = true
    params["bind-address"] = "*"
    params["find-process-mode"] = "strict"
    params["ipv6"] = false
    params["mode"] = "rule"
    params["log-level"] = "info"
    params["external-controller"] = "0.0.0.0:9093"
    params["global-client-fingerprint"] = "chrome"
    params["profile"] = {
        "store-selected": true,
        "store-fake-ip": true
    }
    params["dns"] = {
        "enable": true,
        "ipv6": false,
        "enhanced-mode": "fake-ip",
        "listen": "0.0.0.0:53",
        "fake-ip-range": "198.18.0.1/16",
        "fake-ip-filter": [
            "*.lan",
            "cable.auth.com",
            "*.msftconnecttest.com",
            "*.msftncsi.com",
            "network-test.debian.org",
            "detectportal.firefox.com",
            "resolver1.opendns.com",
            "*.srv.nintendo.net",
            "*.stun.playstation.net",
            "xbox.*.microsoft.com",
            "*.xboxlive.com",
            "stun.*",
            "global.turn.twilio.com",
            "global.stun.twilio.com",
            "localhost.*.qq.com",
            "localhost.*.weixin.qq.com",
            "*.logon.battlenet.com.cn",
            "*.logon.battle.net",
            "*.blzstatic.cn",
            "music.163.com",
            "*.music.163.com",
            "*.126.net",
            "musicapi.taihe.com",
            "music.taihe.com",
            "songsearch.kugou.com",
            "trackercdn.kugou.com",
            "*.kuwo.cn",
            "api-jooxtt.sanook.com",
            "api.joox.com",
            "joox.com",
            "y.qq.com",
            "*.y.qq.com",
            "streamoc.music.tc.qq.com",
            "mobileoc.music.tc.qq.com",
            "isure.stream.qqmusic.qq.com",
            "dl.stream.qqmusic.qq.com",
            "aqqmusic.tc.qq.com",
            "amobile.music.tc.qq.com",
            "*.xiami.com",
            "*.music.migu.cn",
            "music.migu.cn",
            "proxy.golang.org",
            "*.mcdn.bilivideo.cn",
            "*.cmpassport.com",
            "id6.me",
            "open.e.189.cn",
            "mdn.open.wo.cn",
            "opencloud.wostore.cn",
            "auth.wosms.cn",
            "*.jegotrip.com.cn",
            "*.icitymobile.mobi",
            "*.pingan.com.cn",
            "*.cmbchina.com",
            "pool.ntp.org",
            "*.pool.ntp.org",
            "ntp.*.com",
            "time.*.com",
            "ntp?.*.com",
            "time?.*.com",
            "time.*.gov",
            "time.*.edu.cn",
            "*.ntp.org.cn",
            "PDC._msDCS.*.*",
            "DC._msDCS.*.*",
            "GC._msDCS.*.*"
        ],
        "nameserver": [
            "https://doh.pub/dns-query",
            "https://dns.alidns.com/dns-query"
        ]
    }

    params["proxy-groups"] = [
        {
            "name": "通透世界",
            "icon": "https://github.com/clash-verge-rev/clash-verge-rev/raw/main/src/assets/image/logo.png",
            "type": "select",
            "proxies": proxyNames
        },
        {
            "name": "Apple",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple_1.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界"
            ]
        },
        {
            "name": "Bilibili",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/bilibili.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界",
                "香港节点",
                "台湾节点"
            ]
        },
        {
            "name": "Microsoft",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "Google",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "Telegram",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "Twitter",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Twitter.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "Pikpak",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/other/PikPak.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "OpenAI",
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/OpenAI.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "Game",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Game.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "Emby",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Emby.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界"
            ]
        },
        {
            "name": "国际媒体",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "国外网站",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移"
            ]
        },
        {
            "name": "国内网站",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China_Map.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界"
            ]
        },
        {
            "name": "ADGuard",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Advertising.png",
            "type": "select",
            "proxies": [
                "REJECT",
                "DIRECT"
            ]
        },
        {
            "name": "地爆天星",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color//Final.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "香港节点",
                "美国节点",
                "狮城节点",
                "日本节点",
                "台湾节点",
                "自动选择",
                "故障转移",
                "DIRECT"
            ]
        },
        {
            "name": "香港节点",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_HK, "DIRECT"]
        },
        {
            "name": "台湾节点",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_TW, "DIRECT"]
        },
        {
            "name": "狮城节点",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_SG, "DIRECT"]
        },
        {
            "name": "日本节点",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_JP, "DIRECT"]
        },
        {
            "name": "美国节点",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_US, "DIRECT"]
        },
        {
            "name": "自动选择",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Auto.png",
            "type": "url-test",
            "lazy": true,
            "url": "http://1.1.1.1/generate_204",
            "interval": 900,
            "proxies": proxyNames
        },
        {
            "name": "故障转移",
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hijacking.png",
            "type": "fallback",
            "lazy": true,
            "url": "http://1.1.1.1/generate_204",
            "interval": 900,
            "proxies": proxyNames
        }
    ]
    params["rule-providers"] = {
        "Lan": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.yaml",
            "format": "text",
            "path": "./rule-providers/Lan.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Download": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Download/Download.yaml",
            "format": "text",
            "path": "./rule-providers/Download.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "AD": {
            "url": "https://anti-ad.net/clash.yaml",
            "format": "text",
            "path": "./rule-providers/AD.list",
            "type": "http",
            "behavior": "domain",
            "interval": 86400
        },
        "Apple": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple_Classical.yaml",
            "format": "text",
            "path": "./rule-providers/Apple.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "BiliBili": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili.yaml",
            "format": "text",
            "path": "./rule-providers/BiliBili.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Github": {
            "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Github.list",
            "format": "text",
            "path": "./rule-providers/Github.list",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Microsoft": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml",
            "format": "text",
            "path": "./rule-providers/Microsoft.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "YouTube": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml",
            "format": "text",
            "path": "./rule-providers/YouTube.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Google": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml",
            "format": "text",
            "path": "./rule-providers/Google.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Telegram": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml",
            "format": "text",
            "path": "./rule-providers/Telegram.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Twitter": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml",
            "format": "text",
            "path": "./rule-providers/Twitter.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Game": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/Game.yaml",
            "format": "text",
            "path": "./rule-providers/Game.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "OpenAI": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml",
            "format": "text",
            "path": "./rule-providers/OpenAI.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "PikPak": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/PikPak/PikPak.yaml",
            "format": "text",
            "path": "./rule-providers/PikPak.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Emby": {
            "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Emby.list",
            "format": "text",
            "path": "./rule-providers/Emby.list",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "ChinaIP": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/China/China_Classical.yaml",
            "format": "text",
            "path": "./rule-providers/China.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "GlobalMedia": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GlobalMedia/GlobalMedia_Classical.yaml",
            "format": "text",
            "path": "./rule-providers/GlobalMedia.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        },
        "Global": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Global/Global_Classical.yaml",
            "format": "text",
            "path": "./rule-providers/Global.yaml",
            "type": "http",
            "behavior": "classical",
            "interval": 86400
        }
    }
    params["rules"] = [
        "RULE-SET,Lan,DIRECT",
        "RULE-SET,AD,ADGuard",
        "RULE-SET,Apple,Apple",
        "RULE-SET,OpenAI,OpenAI",
        "RULE-SET,Github,Microsoft",
        "RULE-SET,Microsoft,Microsoft",
        "RULE-SET,YouTube,Google",
        "RULE-SET,Google,Google",
        "RULE-SET,Telegram,Telegram",
        "RULE-SET,Twitter,Twitter",
        "RULE-SET,BiliBili,Bilibili",
        "RULE-SET,Game,Game",
        "RULE-SET,Emby,Emby",
        "RULE-SET,GlobalMedia,国际媒体",
        "RULE-SET,Global,国外网站",
        "RULE-SET,ChinaIP,国内网站",
        "GEOIP,CN,国内网站",
        "MATCH,地爆天星"
    ]

    return params;
}
