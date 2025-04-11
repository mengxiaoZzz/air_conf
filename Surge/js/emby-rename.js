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

body.Items.forEach(item => {
    item.Name = renameMap[item.Name] || item.Name
    item.ForcedSortName = renameMap[item.Name] || item.Name
    item.SortName = renameMap[item.Name] || item.Name
})

body = JSON.stringify(body);
$done({body});
