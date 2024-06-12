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
if (url.includes("/api/v1/?act=detail") && body.data.videos !== undefined) {
    let videoList = body.data.videos
    videoList.sort((a, b) => {
        return getNum(b) - getNum(a)
    });

    function getNum(video) {
        let start = video["level"].indexOf("(")
        let end = video["level"].indexOf("MB)")
        return video["level"].substring(start + 1, end)
    }

    body.data.videos = videoList
}
body = JSON.stringify(body);
$done({body});





