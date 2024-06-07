const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("/api/v1/?act=get_config")) {
    body.data.vipvalue = true
    body.data.user.vip = true
    body.data.user.vip_deltime = "2030-12-31 24:59:59"
    body.data.ad = {"ad1": null}
    body.data.stick = true
}
if (url.includes("/api/v1/?act=user")) {
    body.data.user.vip = true
    body.data.user.vip_deltime = "2030-12-31 24:59:59"
}
if (url.includes("/api/v1/?act=detail")) {
    let videoList = body.data.videos.reverse()
    // 原画
    let rawVideo = videoList.filter(e => e.level.includes('原画'))
    if (rawVideo.length > 0) {
        videoList = videoList.filter(e => !e.level.includes('原画'))
        videoList.unshift(...rawVideo)
    }
    body.data.videos = videoList
}
body = JSON.stringify(body);
$done({body});





