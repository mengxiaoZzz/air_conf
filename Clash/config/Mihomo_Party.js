// #参考地址【https://github.com/Repcz/Tool/blob/X/Clash/Meta/Override.js】


// 规则集通用配置
const ruleProviderCommon = {
    "type": "http",
    "format": "text",
    "interval": 86400
};

// 策略组通用配置
const groupBaseOption = {
    "interval": 300,
    "url": "http://1.1.1.1/generate_204",
    "max-failed-times": 3,
};


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
    config["mixed-port"] = "7890";
    config["tcp-concurrent"] = true;
    config["allow-lan"] = true;
    config["ipv6"] = false;
    config["log-level"] = "info";
    config["find-process-mode"] = "strict";
    config["global-client-fingerprint"] = "chrome";
    config["external-controller"] = "127.0.0.1:9090";
    config["external-ui"] = "ui";
    config["external-ui-url"] = "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip";

    // 覆盖 dns 配置
    config["dns"] = {
        "enable": true,
        "listen": "0.0.0.0:1053",
        "ipv6": false,
        "enhanced-mode": "fake-ip",
        "fake-ip-range": "198.18.0.1/16",
        "fake-ip-filter": ["*", "+.lan", "+.local", "+.direct", "+.msftconnecttest.com", "+.msftncsi.com"],
        "default-nameserver": ["223.5.5.5", "119.29.29.29", "system"],
        "nameserver": ["223.5.5.5", "119.29.29.29"],
        "nameserver-policy": {
            "geosite:cn": "system",
            "geosite:gfw,geolocation-!cn": ["quic://223.5.5.5", "quic://223.6.6.6", "https://1.12.12.12/dns-query", "https://120.53.53.53/dns-query"]
        }
    };

    // 覆盖 geodata 配置
    config["geodata-mode"] = true;
    config["geox-url"] = {
        "geoip": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
        "geosite": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
        "mmdb": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb",
        "asn": "https://mirror.ghproxy.com/https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"
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

    // 覆盖 tun 配置
    config["tun"] = {
        "enable": true,
        "stack": "mixed",
        "dns-hijack": ["any:53"]
    };

    config["proxy-groups"] = [
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Surge_Inky.png",
            "name": "通透世界",
            "type": "select",
            "proxies": proxyNames,
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Apple1.png",
            "name": "Apple",
            "type": "select",
            "proxies": ["DIRECT", "通透世界"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Bilibili1.png",
            "name": "Bilibili",
            "type": "select",
            "proxies": ["DIRECT", "通透世界", "香港节点", "台湾节点"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png",
            "name": "Microsoft",
            "type": "select",
            "proxies": ["DIRECT", "通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png",
            "name": "Google",
            "type": "select",
            "proxies": ["通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Telegram.png",
            "name": "Telegram",
            "type": "select",
            "proxies": ["通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Instagram1.png",
            "name": "Instagram",
            "type": "select",
            "proxies": ["通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Twitter.png",
            "name": "Twitter",
            "type": "select",
            "proxies": ["通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/PikPak.png",
            "name": "Pikpak",
            "type": "select",
            "proxies": ["通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/OpenAI.png",
            "name": "OpenAI",
            "type": "select",
            "proxies": ["通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Game.png",
            "name": "Game",
            "type": "select",
            "proxies": ["DIRECT", "通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/Pokemon/044.png",
            "name": "Emby",
            "type": "select",
            "proxies": ["DIRECT", "通透世界"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/app/Youtube.png",
            "name": "Streaming",
            "type": "select",
            "proxies": ["通透世界", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/Pokemon/034.png",
            "name": "ADGuard",
            "type": "select",
            "proxies": ["REJECT", "DIRECT"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Final.png",
            "name": "映照诸天",
            "type": "select",
            "proxies": ["通透世界", "DIRECT", "香港节点", "美国节点", "狮城节点", "日本节点", "台湾节点", "自动选择", "故障转移"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/HK.png",
            "name": "香港节点",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_HK, "DIRECT"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/TW.png",
            "name": "台湾节点",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_TW, "DIRECT"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/SG.png",
            "name": "狮城节点",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_SG, "DIRECT"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/JP.png",
            "name": "日本节点",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_JP, "DIRECT"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/world/US.png",
            "name": "美国节点",
            "type": "select",
            "url": "http://1.1.1.1/generate_204",
            "proxies": [...proxyNames_US, "DIRECT"],
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Auto.png",
            "name": "自动选择",
            "type": "url-test",
            "lazy": true,
            "proxies": proxyNames,
            ...groupBaseOption
        },
        {
            "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hijacking.png",
            "name": "故障转移",
            "type": "fallback",
            "lazy": true,
            "proxies": proxyNames,
            ...groupBaseOption
        },
        {
            icon: "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/144/Final.png",
            name: "GLOBAL",
            "include-all": true,
            type: "select",
            ...groupBaseOption
        }
    ]
    config["rule-providers"] = {
        "Lan": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.yaml",
            "path": "./rule-providers/Lan.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Download": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Download/Download.yaml",
            "path": "./rule-providers/Download.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "AD": {
            "url": "https://anti-ad.net/clash.yaml",
            "path": "./rule-providers/AD.list",
            "behavior": "domain",
            ...ruleProviderCommon
        },
        "Apple": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple_Classical.yaml",
            "path": "./rule-providers/Apple.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "BiliBili": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili.yaml",
            "path": "./rule-providers/BiliBili.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Github": {
            "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Github.list",
            "path": "./rule-providers/Github.list",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Microsoft": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml",
            "path": "./rule-providers/Microsoft.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "YouTube": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml",
            "path": "./rule-providers/YouTube.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Google": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml",
            "path": "./rule-providers/Google.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Telegram": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml",
            "path": "./rule-providers/Telegram.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Instagram": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Instagram.yaml",
            "path": "./rule-providers/Instagram.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Twitter": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml",
            "path": "./rule-providers/Twitter.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Game": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/Game.yaml",
            "path": "./rule-providers/Game.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "OpenAI": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml",
            "path": "./rule-providers/OpenAI.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "PikPak": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/PikPak/PikPak.yaml",
            "path": "./rule-providers/PikPak.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Emby": {
            "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Emby.list",
            "path": "./rule-providers/Emby.list",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "ChinaIP": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/China/China_Classical.yaml",
            "path": "./rule-providers/China.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "GlobalMedia": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GlobalMedia/GlobalMedia_Classical.yaml",
            "path": "./rule-providers/GlobalMedia.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
        },
        "Global": {
            "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Global/Global_Classical.yaml",
            "path": "./rule-providers/Global.yaml",
            "behavior": "classical",
            ...ruleProviderCommon
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
        "RULE-SET,GlobalMedia,Streaming",
        "RULE-SET,Global,通透世界",
        "RULE-SET,ChinaIP,DIRECT",
        "GEOIP,CN,DIRECT",
        "MATCH,映照诸天"
    ]

    return config;
}
