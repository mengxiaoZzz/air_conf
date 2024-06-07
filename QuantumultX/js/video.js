const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("/api/v1/?act=get_config")) {
    body.data.user.vip = true
    body.data.vipvalue = true
    body.data.user.vip_deltime = "2099-12-31 24:59:59"
    body.data.ad = {"ad1": null}
}
if (url.includes("/api/v1/?act=detail")) {
    let videoList = body.data.videos.reverse()
    // 原画
    let rawVideo = videoList.filter(e => e.level.includes('原画'))
    videoList.unshift(...rawVideo)
    body.data.videos = videoList
}
body = JSON.stringify(body);
$done({body});





