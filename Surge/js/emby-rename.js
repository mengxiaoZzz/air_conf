const url = $request.url;
let body = JSON.parse($response.body);

// console.log('emby-rename');
// console.log('url==>' + url);

if (url.includes("emby.meowfly.net") || url.includes("gy.meowfly.de")) {
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

if (url.includes("younoyes.com")) {
    const renameMap = {
        "Chinese Anime": "华语动漫",
        "Anime": "外语动漫",
        "Chinese Dramas": "国产剧集",
        "K&J Dramas": "日韩剧集",
        "Global Series": "欧美剧集",
        "Movies": "电影",
        "Documentary": "纪录纪实",
        "Variety Arts": "综艺节目"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("emby.asubaka.top") || url.includes("www.stevenslab.top")) {
    const renameMap = {
        "动漫番剧": "动漫",
        "综艺 记录": "综艺纪录"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("lite.saturdayvideo.top")) {
    body.Items.forEach(item => {
        item.Name = item.Name.slice(3)
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("embymv.link")) {
    const renameMap = {
        "韩日剧集": "日韩剧"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
}

if (url.includes("lyrebirdemby.com")) {
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

if (url.includes("1024.name") || url.includes("1024.one")) {
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
        "儿童节目",
        "纪录片集",
        "综艺节目",
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

if (url.includes("rjemby.com") || url.includes("hkdg.998903.xyz")) {
    const renameMap = {
        "国漫": "国内动漫",
        "日漫": "国外动漫"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
    // 按此顺序排序
    const customOrder = [
        "国内动漫",
        "国外动漫",
        "华语剧集",
        "日韩剧集",
        "欧美剧集",
        "儿童剧集",
        "华语电影",
        "外语电影",
        "动画电影",
        "纪录片",
        "综艺",
        "暂未分类"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("emby1.123456789.lol")) {
    const renameMap = {
        "国产动漫": "国漫"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
    // 按此顺序排序
    const customOrder = [
        "国漫",
        "日番",
        "国产剧",
        "日韩剧",
        "欧美剧",
        "电影",
        "儿童",
        "综艺",
        "纪录片",
        "未分类"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("free.28.al")) {
    // 按此顺序排序
    const customOrder = [
        "本地热门",
        "动漫",
        "电视剧",
        "日韩剧",
        "欧美剧",
        "电影",
        "纪录片",
        "待转移",
        "播放列表"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("worldline.space")) {
    body.Items.forEach(item => {
        item.Name = item.Name.slice(3)
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
    // 按此顺序排序
    const customOrder = [
        "国漫",
        "动漫",
        "国产剧",
        "日韩剧",
        "欧美剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "记录电影",
        "综艺",
        "纪录片",
        "日本中字",
        "水果派",
        "次元里番",
        "经典三级"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

body = JSON.stringify(body);
$done({body});
