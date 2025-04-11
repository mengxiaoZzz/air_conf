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

$done({
    body: JSON.stringify(
        JSON.parse($response.body).map(item => ({
            ...item,
            Name: renameMap[item.Name.toLowerCase()] || item.Name
        })))
});
