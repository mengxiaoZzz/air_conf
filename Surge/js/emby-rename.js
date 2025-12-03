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

// if (url.includes("wmu8.1.xyz")) {
//     // 按此顺序排序
//     const customOrder = [
//         "国产动漫",
//         "动漫剧集",
//         "国产剧集",
//         "欧美剧集",
//         "日本剧集",
//         "韩国剧集",
//         "亚太及小语种",
//         "华语电影",
//         "外语电影",
//         "动画电影",
//         "记录纪实",
//         "综艺节目",
//         "儿童剧集",
//         "特殊摄影",
//         "演唱会",
//         "合集"
//     ];
//     body.Items = body.Items.sort((a, b) => {
//         return customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name);
//     });
// }

body = JSON.stringify(body);
$done({body});
