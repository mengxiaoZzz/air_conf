const url = $request.url;
let body = JSON.parse($response.body);

// 重命名
const renameMap = {
    "国产剧": "华语剧集"
};
body.MediaContainer.Directory.forEach(item => {
    item.title = renameMap[item.title] || item.title
})

// 按此顺序排序
const customOrder = [
    "动漫",
    "华语剧集",
    "外语剧集",
    "华语电影",
    "外语电影",
    "动画电影",
    "综艺",
    "瑟瑟专区"
];
body.MediaContainer.Directory = body.MediaContainer.Directory.sort((a, b) => {
    return customOrder.indexOf(a.title) - customOrder.indexOf(b.title);
});

body = JSON.stringify(body);
$done({body});
