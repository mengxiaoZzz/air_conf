const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("/api/v1/?act=get_config")) {
    body.data.user.vip = true
    body.data.vipvalue = true
    body.data.user.vip_deltime = "2099-12-31 24:59:59"
    body.data.ad = { "ad1": null }
}
if (url.includes("/api/v1/?act=detail")) {
    let video = body.data.videos
    body.data.videos = video.reverse()
}
body = JSON.stringify(body);
$done({body});
