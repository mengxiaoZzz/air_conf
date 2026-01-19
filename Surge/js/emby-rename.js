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

if (url.includes("apitron.net") || url.includes("ness1.xxqqx.cn")) {
    // 按此顺序排序
    const customOrder = [
        "硬盘-电视剧",
        "硬盘-电影",
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
        "儿童",
        "播放列表"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("dengao9527.cloud")) {
    const renameMap = {
        "国漫": "华语动漫",
        "番剧": "外语动漫",
        "电视剧": "华语剧集",
        "国外热播": "外语剧集",
        "儿童动画": "儿童",
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
    // 按此顺序排序
    const customOrder = [
        "华语动漫",
        "外语动漫",
        "华语剧集",
        "外语剧集",
        "电影",
        "动画电影",
        "综艺",
        "儿童",
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

body = JSON.stringify(body);
$done({body});
