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
    // 创建一个映射以提高查找效率
    const orderMap = new Map(customOrder.map((name, index) => [name, index]));

    body.Items = body.Items.sort((a, b) => {
        const indexA = orderMap.get(a.Name) ?? Infinity; // 如果 a.Name 不在列表中，则返回无穷大
        const indexB = orderMap.get(b.Name) ?? Infinity; // 如果 b.Name 不在列表中，则返回无穷大

        // 如果两者都不在列表中，则保持原有顺序
        if (indexA === Infinity && indexB === Infinity) {
            return 0;
        }

        // 否则，按索引或无穷大值进行排序
        return indexA - indexB;
    });
}

if (url.includes("sadchicktv.com")) {
    // 按此顺序排序
    const customOrder = [
        "国漫",
        "日番",
        "国产剧",
        "欧美剧",
        "日韩剧",
        "华语电影",
        "外语电影",
        "动画电影",
        "综艺",
        "纪录片",
        "儿童剧",
        "演唱会"
    ];
    // 创建一个映射以提高查找效率
    const orderMap = new Map(customOrder.map((name, index) => [name, index]));

    body.Items = body.Items.sort((a, b) => {
        const indexA = orderMap.get(a.Name) ?? Infinity; // 如果 a.Name 不在列表中，则返回无穷大
        const indexB = orderMap.get(b.Name) ?? Infinity; // 如果 b.Name 不在列表中，则返回无穷大

        // 如果两者都不在列表中，则保持原有顺序
        if (indexA === Infinity && indexB === Infinity) {
            return 0;
        }

        // 否则，按索引或无穷大值进行排序
        return indexA - indexB;
    });
}

if (url.includes("cn2gias.uk") || url.includes("s2.array2026.cc") || url.includes("s3.array2026.com")) {
    body.Items.forEach(item => {
        if (item.Name.includes(".")) {
            item.Name = item.Name.replace(/\d+\.\s/, "");
            item.ForcedSortName = item.Name
            item.SortName = item.Name
        }
    })
}

if (url.includes("zhezhi.art")) {
    // 按此顺序排序
    const customOrder = [
        "国漫",
        "日漫",
        "国产剧集",
        "港台剧集",
        "欧美剧集",
        "日韩剧集",
        "短剧",
        "华语电影",
        "欧美电影",
        "日韩电影",
        "动画电影",
        "综艺",
        "儿童",
        "纪录剧集",
        "纪录片",
        "演唱会"
    ];
    // 创建一个映射以提高查找效率
    const orderMap = new Map(customOrder.map((name, index) => [name, index]));

    body.Items = body.Items.sort((a, b) => {
        const indexA = orderMap.get(a.Name) ?? Infinity; // 如果 a.Name 不在列表中，则返回无穷大
        const indexB = orderMap.get(b.Name) ?? Infinity; // 如果 b.Name 不在列表中，则返回无穷大

        // 如果两者都不在列表中，则保持原有顺序
        if (indexA === Infinity && indexB === Infinity) {
            return 0;
        }

        // 否则，按索引或无穷大值进行排序
        return indexA - indexB;
    });
}

if (url.includes("apitron.net") || url.includes("ness1.gbpgbp.cn")) {
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
    // 创建一个映射以提高查找效率
    const orderMap = new Map(customOrder.map((name, index) => [name, index]));

    body.Items = body.Items.sort((a, b) => {
        const indexA = orderMap.get(a.Name) ?? Infinity; // 如果 a.Name 不在列表中，则返回无穷大
        const indexB = orderMap.get(b.Name) ?? Infinity; // 如果 b.Name 不在列表中，则返回无穷大

        // 如果两者都不在列表中，则保持原有顺序
        if (indexA === Infinity && indexB === Infinity) {
            return 0;
        }

        // 否则，按索引或无穷大值进行排序
        return indexA - indexB;
    });
}

if (url.includes("dengao9527.top")) {
    // 按此顺序排序
    const customOrder = [
        "国产动漫",
        "日本番剧",
        "国产剧集",
        "国外热剧",
        "华语电影",
        "欧美电影",
        "动画电影",
        "综艺",
        "儿童动画",
        "演唱会"
    ];
    // 创建一个映射以提高查找效率
    const orderMap = new Map(customOrder.map((name, index) => [name, index]));

    body.Items = body.Items.sort((a, b) => {
        const indexA = orderMap.get(a.Name) ?? Infinity; // 如果 a.Name 不在列表中，则返回无穷大
        const indexB = orderMap.get(b.Name) ?? Infinity; // 如果 b.Name 不在列表中，则返回无穷大

        // 如果两者都不在列表中，则保持原有顺序
        if (indexA === Infinity && indexB === Infinity) {
            return 0;
        }

        // 否则，按索引或无穷大值进行排序
        return indexA - indexB;
    });
}


if (url.includes("mebimmer.de") || url.includes("mebimmer.de")) {
    // 按此顺序排序
    const customOrder = [
        "华语动漫",
        "外语动漫",
        "华语剧集",
        "外语剧集",
        "华语电影",
        "外语电影",
        "动漫电影",
        "儿童剧场",
        "综艺节目",
        "纪录片",
        "演唱会",
        "播放列表"
    ];
    // 创建一个映射以提高查找效率
    const orderMap = new Map(customOrder.map((name, index) => [name, index]));

    body.Items = body.Items.sort((a, b) => {
        const indexA = orderMap.get(a.Name) ?? Infinity; // 如果 a.Name 不在列表中，则返回无穷大
        const indexB = orderMap.get(b.Name) ?? Infinity; // 如果 b.Name 不在列表中，则返回无穷大

        // 如果两者都不在列表中，则保持原有顺序
        if (indexA === Infinity && indexB === Infinity) {
            return 0;
        }

        // 否则，按索引或无穷大值进行排序
        return indexA - indexB;
    });
}

body = JSON.stringify(body);
$done({body});
