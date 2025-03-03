const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("/api/v1/?act=get_config")) {
    // body.data.vipvalue = true
    // body.data.user.vip = true
    // body.data.user.vip_deltime = "2030-12-31 23:59:59"
    // body.data.ad = {"ad1": null}
    // body.data.stick = true
}
// if (url.includes("/api/v1/?act=user")) {
//     body.data.user.vip = true
//     body.data.user.vip_deltime = "2030-12-31 23:59:59"
// }
if (url.includes("/api/v1/?act=detail") && body.data !== undefined && body.data.videos !== undefined) {
    let videoList = body.data.videos
    videoList.sort((a, b) => {
        return getNum(b) - getNum(a)
    });

    function getNum(video) {
        let level = video.level.replace("Kb", "KB").replace("Mb", "MB")
        if (level.includes("KB")) {
            let start = level.indexOf("(")
            let end = level.indexOf("KB)")
            return level.substring(start + 1, end)
        } else if (level.includes("MB")) {
            let start = level.indexOf("(")
            let end = level.indexOf("MB)")
            return level.substring(start + 1, end) * 1024
        } else {
            return 1024 * 1024
        }
    }

    body.data.videos = videoList
}
body = JSON.stringify(body);
$done({body});





