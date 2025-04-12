const url = $request.url;
let body = JSON.parse($response.body);

console.log('body');
console.log(body);

// 一只猫
if (url.includes("/api/Mushroom/index") || url.includes("/api/wechat_v2/index")) {
    body.data.advertisement = []
    body.data.index.app_name = "一只猫去水印Pro"
    body.data.index.is_pay = 1
}
if (url.includes("/api/Mushroom/stars") || url.includes("/api/wechat_v2/stars")) {
    body.data.ad = ""
}
if (url.includes("/api/Mushroom/user") || url.includes("/api/wechat_v2/user")) {
    body.name = name
    body.invite_num = 999
    body.svip = 1
    body.residue_time = "9999-12-31 23:59"
    body.data.is_svip = 1
}
if (url.includes("/api/Mushroom/urlresult") || url.includes("/api/wechat_v2/urlresult")) {
    body.data.vip = 1
    body.data.ad_video = ""
}
if (url.includes("/api/Mushroom/analysis") || url.includes("/api/wechat_v2/analysis")) {
    console.log('body.data');
    console.log(body.data);
    console.log(body.data.url_list);


    if (body.data != null && body.data.url_list != null) {
        let urlList = body.data.url_list
        urlList.sort((a, b) => {
            return a.size - b.size
        });

        body.data.url_list = urlList
        body.data.url = urlList[urlList.length - 1].url
    }
}

body = JSON.stringify(body);
$done({body});
