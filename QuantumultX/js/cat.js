// console.log(`一只猫去水印`);
const url = $request.url;
let body = JSON.parse($response.body);

// 一只猫
if (url.includes("/api/Mushroom/index")) {
    body.data.advertisement = []
    body.data.index.app_name = "一只猫去水印Pro"
    body.data.index.is_pay = 1
}
if (url.includes("/api/Mushroom/stars")) {
    body.data.ad = ""
}
if (url.includes("/api/Mushroom/user")) {
    body.name = name
    body.invite_num = 999
    body.svip = 1
    body.residue_time = "9999-12-31 23:59"
    body.data.is_svip = 1
}
if (url.includes("/api/Mushroom/urlresult")) {
    body.data.vip = 1
    body.data.ad_video = ""
}
if (url.includes("/api/Mushroom/analysis")) {
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
