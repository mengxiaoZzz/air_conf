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

if (url.includes("mjji.de") || url.includes("apitron.net")) {
    // 按此顺序排序
    const customOrder = [
        "国漫",
        "日番",
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

if (url.includes("saturdayvideo")) {
    body.Items.forEach(item => {
        if ("播放列表" !== item.Name) {
            item.Name = item.Name.slice(3)
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
}

if (url.includes("lyrebirdemby") || url.includes("188.172.228.65") || url.includes("cdn.2580852.xyz")) {
    body.Items.forEach(item => {
        if (item.Name.includes(".")) {
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
        "云端存储",
        "播放列表"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("lilyemby.my")) {
    // 按此顺序排序
    const customOrder = [
        "动漫",
        "国产剧",
        "欧美剧",
        "日韩剧",
        "其他剧集",
        "短剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片",
        "综艺"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

body = JSON.stringify(body);
$done({body});
