const url = $request.url;
let body = JSON.parse($response.body);

if (url.includes("meowfly")) {
    // 按此顺序排序
    const customOrder = [
        "国内动漫",
        "国外动漫",
        "华语剧集",
        "亚太剧集",
        "欧美剧集",
        "特效剧集",
        "短剧",
        "华语电影",
        "外语电影",
        "特效电影",
        "动画电影",
        "综艺剧集",
        "综艺电影",
        "纪录片剧集",
        "纪录片电影",
        "儿童剧",
        "演唱会",
        "合集"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("roboemby.de") || url.includes("616626.xyz") || url.includes("asubaka.top")
    || url.includes("711.lol") || url.includes("mobaiemby.site") || url.includes("115cdn.de")) {
    const renameMap = {
        "国漫": "国内动漫",
        "日番": "国外动漫",
        "动漫番剧": "国外动漫"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("younoyes.com") || url.includes("567741.xyz")) {
    const renameMap = {
        "国产动漫": "国内动漫",
        "动漫剧集": "国外动漫",
        "亚太及小语种": "其他剧集"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("mjji.de")) {
    body.Items.forEach(item => {
        if (item.Name.includes("国漫")) {
            item.Name = "国内动漫"
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
        if (item.Name.includes("日番")) {
            item.Name = "国外动漫"
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
    // 按此顺序排序
    const customOrder = [
        "国内动漫",
        "国外动漫",
        "国产剧",
        "欧美剧",
        "日韩剧",
        "未分类",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片",
        "综艺",
        "少儿"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("free.28.al")) {
    body.Items.forEach(item => {
        if (item.Name.includes("国漫")) {
            item.Name = "国内动漫"
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
        if (item.Name.includes("日番")) {
            item.Name = "国外动漫"
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
        if (item.Name.includes("HDD")) {
            item.Name = item.Name.replace("-HDD", "")
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
}

if (url.includes("mebimmer.de")) {
    // 按此顺序排序
    const customOrder = [
        "动漫剧集",
        "华语剧集",
        "外语剧集",
        "华语电影",
        "外语电影",
        "动漫电影",
        "怀旧剧场",
        "纪录片",
        "综艺",
        "演唱会",
        "合集"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("5msky.com")) {
    body.Items.forEach(item => {
        if (item.Name.includes(".")) {
            item.Name = item.Name.slice(3)
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
}

if (url.includes("sexemby.com")) {
    body.Items.forEach(item => {
        if (item.Name.includes("国漫")) {
            item.Name = "国内动漫"
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
        if (item.Name.includes("日番")) {
            item.Name = "国外动漫"
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
    // 按此顺序排序
    const customOrder = [
        "国内动漫",
        "国外动漫",
        "国产剧",
        "欧美剧",
        "日韩剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片",
        "综艺",
        "儿童剧",
        "演唱会"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("cloud.s1.xxzi.top")) {
    // 按此顺序排序
    const customOrder = [
        "动漫",
        "国产剧",
        "日韩剧",
        "欧美剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片",
        "综艺",
        "未分类",
        "儿童",
        "合集"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("rjf37.com") || url.includes("xytx.org") || url.includes("xylyra.com") || url.includes("120.53.89.215")
    || url.includes("211.159.153.75") || url.includes("45.66.129.136")) {
    const renameMap = {
        "国漫": "国内动漫",
        "日番": "国外动漫"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("saturdayvideo")) {
    body.Items.forEach(item => {
        if ("播放列表" !== item.Name) {
            item.Name = item.Name.slice(3)
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
}

if (url.includes("lyrebirdemby") || url.includes("188.172.228.65")) {
    body.Items.forEach(item => {
        if ("播放列表" !== item.Name) {
            item.Name = item.Name.slice(2)
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
    // 按此顺序排序
    const customOrder = [
        "动漫",
        "国产剧",
        "日韩剧",
        "欧美剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片",
        "综艺",
        "播放列表"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("chilledmelon")) {
    // 按此顺序排序
    const customOrder = [
        "国产动漫",
        "日本动漫",
        "短剧合集",
        "沙雕动画",
        "国产剧集",
        "日韩剧集",
        "欧美剧集",
        "全球影视",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片集",
        "综艺节目",
        "儿童节目",
        "音悦世界",
        "合集",
        "AV-4K合集",
        "AV合集鉴赏",
        "AV女优分选",
        "AV无码流出",
        "AV无码破解",
        "AV原生无码",
        "AV欧美成人"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("lilyemby.my")) {
    // 按此顺序排序
    const customOrder = [
        "国产剧",
        "日韩剧",
        "欧美剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片",
        "童趣乐园区",
        "现场盛典演",
        "精彩大集合",
        "播放列表"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

body = JSON.stringify(body);
$done({body});
