const url = $request.url;
let body = JSON.parse($response.body);

// 按此顺序排序
const customOrder = [
    "动画",
    "国语剧集",
    "外语剧集",
    "国语电影",
    "外语电影",
    "动画电影",
    "综艺",
    "日本AV"
];
body.MediaContainer.Directory = body.MediaContainer.Directory.sort((a, b) => {
    return customOrder.indexOf(a.title) - customOrder.indexOf(b.title);
});

body = JSON.stringify(body);
$done({body});
