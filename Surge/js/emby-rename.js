const renameMap = {
    "Chinese Anime": "国漫",
    "Anime": "动漫",
    "Chinese Dramas": "国产剧集",
    "K&J Dramas": "日韩剧集",
    "Global Series": "欧美剧集",
    "Movies": "电影",
    "Documentary": "纪录片",
    "Variety Arts": "综艺节目"
};

const url = $request.url;
let body = JSON.parse($response.body);

console.log('emby-rename');
console.log('url==>' + url);

if (url.includes("younoyes.com")) {
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("lite.saturday.video")) {
    body.Items.forEach(item => {
        item.Name = item.Name.slice(2)
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("cdn.lyrebirdemby.com")) {
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
        "综艺",
        "纪录片",
        "播放列表"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

body = JSON.stringify(body);
$done({body});
