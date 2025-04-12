const url = $request.url;
let body = JSON.parse($response.body);

console.log('body');
console.log(body);

// if (url.includes("/api/v1/?act=get_config")) {
//     body.data.vipvalue = true
//     body.data.user.vip = true
//     body.data.user.vip_deltime = "2030-12-31 23:59:59"
//     body.data.ad = {"ad1": null}
//     body.data.stick = true
// }
// if (url.includes("/api/v1/?act=user")) {
//     body.data.user.vip = true
//     body.data.user.vip_deltime = "2030-12-31 23:59:59"
// }
if (url.includes("/api/v1/?act=detail") && body.data !== undefined && body.data.videos !== undefined) {
    let videoList = body.data.video_list

    console.log('videoList');
    console.log(videoList);

    videoList.forEach(item => {
        item.level = item.level.replace("Kb", "KB").replace("Mb", "MB")
    })

    // 定义优先级顺序
    const priorityOrder = {
        "原画": 1,
        "1080p": 2,
        "720p": 3,
        "480p": 4
    };

    // 排序函数
    videoList.sort((a, b) => {
        const getKey = (str) => {
            if (str.includes("原画")) return "原画";
            if (str.includes("1080p")) return "1080p";
            if (str.includes("720p")) return "720p";
            if (str.includes("480p")) return "480p";
            return str; // 其他情况
        };

        const keyA = getKey(a.level);
        const keyB = getKey(b.level);

        return (priorityOrder[keyA] || 5) - (priorityOrder[keyB] || 5);
    });

    body.data.video_list = videoList
}
body = JSON.stringify(body);
$done({body});





