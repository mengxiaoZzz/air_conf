// 程序入口
function main(config) {
    config.proxies.forEach(e => e.name = e.name.replace("🇹🇼", "🇨🇳"))
    let proxyNames = config.proxies.map(e => e.name)
    let proxyNames_HK = proxyNames.filter(e => e.includes('🇭🇰'))
    let proxyNames_MO = proxyNames.filter(e => e.includes('🇲🇴'))
    let proxyNames_TW = proxyNames.filter(e => e.includes('🇨🇳'))
    let proxyNames_SG = proxyNames.filter(e => e.includes('🇸🇬'))
    let proxyNames_JP = proxyNames.filter(e => e.includes('🇯🇵'))
    let proxyNames_US = proxyNames.filter(e => e.includes('🇺🇸'))

    // 覆盖通用配置
    config["mixed-port"] = "7893";
    config["tcp-concurrent"] = true;
    config["allow-lan"] = true;
    config["ipv6"] = false;
    config["mode"] = "rule";
    config["log-level"] = "info";
    config["find-process-mode"] = "strict";
    config["global-client-fingerprint"] = "chrome";

    // 覆盖 dns 配置
    config["dns"] = {
        "enable": true,
        "listen": "0.0.0.0:1053",
        "ipv6": true,
        "enhanced-mode": "fake-ip",
        "fake-ip-range": "198.18.0.1/16",
        "fake-ip-filter":[
            "*.lan",
            "*.direct"
        ],
        "default-nameserver": ["223.5.5.5", "119.29.29.29"],
        "nameserver": ["223.5.5.5", "119.29.29.29"],
        "nameserver-policy":{
            "geosite:cn": "system",
            "geosite:gfw,geolocation-!cn": ["quic://223.5.5.5", "quic://223.6.6.6", "https://1.12.12.12/dns-query", "https://120.53.53.53/dns-query"]
        }
    };

    // 覆盖 geodata 配置
    config["geodata-mode"] = true;
    config["geox-url"] = {
        "geoip": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
        "geosite": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
        "mmdb": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb"
    };

    // 覆盖 sniffer 配置
    config["sniffer"] = {
        "enable": true,
        "parse-pure-ip": true,
        "sniff": {
            "TLS": {
                "ports": ["443", "8443"]
            },
            "HTTP": {
                "ports": ["80", "8080-8880"],
                "override-destination": true
            },
            "QUIC": {
                "ports": ["443", "8443"]
            }
        }
    };

    config["proxy-groups"] = [
        {
            "name": "通透世界",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Surge_Inky.png",
            "type": "select",
            "proxies": proxyNames
        },
        {
            "name": "Apple",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Apple1.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界"
            ]
        },
        {
            "name": "Bilibili",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Bilibili1.png",
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
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Telegram.png",
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
            "name": "Instagram",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Instagram1.png",
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
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Twitter.png",
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
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/PikPak.png",
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
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/OpenAI.png",
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
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/Pokemon/044.png",
            "type": "select",
            "proxies": [
                "DIRECT",
                "通透世界"
            ]
        },
        {
            "name": "国际媒体",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Youtube.png",
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
            "name": "ADGuard",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/Pokemon/034.png",
            "type": "select",
            "proxies": [
                "REJECT",
                "DIRECT"
            ]
        },
        {
            "name": "映照诸天",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Final.png",
            "type": "select",
            "proxies": [
                "通透世界",
                "DIRECT",
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
            "name": "香港节点",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/HK.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_HK, "DIRECT"]
        },
        {
            "name": "台湾节点",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/TW.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_TW, "DIRECT"]
        },
        {
            "name": "狮城节点",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/SG.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_SG, "DIRECT"]
        },
        {
            "name": "日本节点",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/JP.png",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_JP, "DIRECT"]
        },
        {
            "name": "美国节点",
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/US.png",
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
        },
        {
            icon: "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Final.png",
            "include-all": true,
            "proxies": proxyNames,
            name: "GLOBAL",
            type: "select",
        }
    ]
    config["rule-providers"] = {
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
        "Instagram": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Instagram.yaml",
            "format": "text",
            "path": "./rule-providers/Instagram.yaml",
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
    config["rules"] = [
        "DOMAIN-KEYWORD,tianjiyunke,DIRECT",
        "RULE-SET,Lan,DIRECT",
        "RULE-SET,AD,ADGuard",
        "RULE-SET,Apple,Apple",
        "RULE-SET,OpenAI,OpenAI",
        "RULE-SET,Github,Microsoft",
        "RULE-SET,Microsoft,Microsoft",
        "RULE-SET,YouTube,Google",
        "RULE-SET,Google,Google",
        "RULE-SET,Telegram,Telegram",
        "RULE-SET,Instagram,Instagram",
        "RULE-SET,Twitter,Twitter",
        "RULE-SET,BiliBili,Bilibili",
        "RULE-SET,Game,Game",
        "RULE-SET,Emby,Emby",
        "RULE-SET,GlobalMedia,通透世界",
        "RULE-SET,Global,通透世界",
        "RULE-SET,ChinaIP,DIRECT",
        "GEOIP,CN,DIRECT",
        "MATCH,映照诸天"
    ]

    return config;
}
