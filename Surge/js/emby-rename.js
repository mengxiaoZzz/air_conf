const url = $request.url;
let body = JSON.parse($response.body);

console.log('emby-rename');
console.log('url==>' + url);

if (url.includes("emby.meowfly.net")) {
    const renameMap = {
        "国内动漫": "华语动漫",
        "国外动漫": "外语动漫"
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
        "亚太剧集",
        "欧美剧集",
        "特效剧集",
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
        "Chinese Anime": "国产动漫",
        "Anime": "日韩美漫",
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

if (url.includes("saturday.video") || url.includes("106.53.76.122")) {
    body.Items.forEach(item => {
        item.Name = item.Name.slice(3)
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
        "综艺",
        "纪录片",
        "播放列表"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("onyra.cc")) {
    const renameMap = {
        "儿童节目": "儿童"
    };
    body.Items.forEach(item => {
        item.Name = renameMap[item.Name] || item.Name
        item.ForcedSortName = item.Name
        item.SortName = item.Name
    })
    // 按此顺序排序
    const customOrder = [
        "动漫",
        "华语剧集",
        "日韩剧集",
        "欧美剧集",
        "其他剧集",
        "电影",
        "儿童",
        "精彩推荐"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

if (url.includes("123456789.lol")) {
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

if (url.includes("28.al")) {
    // 按此顺序排序
    const customOrder = [
        "本地热门",
        "动漫",
        "电视剧",
        "日韩剧",
        "欧美剧",
        "电影",
        "纪录片",
        "待转移"
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

if (url.includes("45.142.176.135")) {
    // 按此顺序排序
    const customOrder = [
        "国漫",
        "日番",
        "国产剧",
        "日韩剧",
        "欧美剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "儿童",
        "综艺",
        "纪录片"
    ];
    body.Items = body.Items.sort((a, b) => {
        return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
    });
}

body = JSON.stringify(body);
$done({body});
