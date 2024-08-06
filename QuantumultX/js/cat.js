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
    let urlList = body.data.url_list
    // // 原视频
    // let rawVideo = urlList.filter(e => e.def === '原视频')
    // if (rawVideo.length > 0) {
    //     urlList = urlList.filter(e => e.def !== '原视频')
    //     urlList.push(...rawVideo)
    // }

    urlList.sort((a, b) => {
        return a.size - b.size
    });

    body.data.url_list = urlList
    body.data.url = urlList[urlList.length - 1].url
}

// 爱解析
if (url.includes("/api/wechat_v2/index")) {
    body.data.advertisement = []
    body.data.index.app_name = "爱解析水印Pro"
    body.data.index.vip_ad_time = "2099-12-31 23:59"
    body.data.index.is_pay = 1
    body.data.index.vip_num = 1
}
if (url.includes("/api/wechat_v2/urlresult")) {
    body.data.vip = 1
    body.data.ad_video = ""
}
if (url.includes("/api/wechat_v2/user")) {
    body.name = "爱解析水印Pro"
    body.pay = 1
    body.invite_num = 999
    body.vip = 1
    body.svip = 1
    body.data.is_vip = 1
    body.data.is_svip = 1
    body.residue_time = "2099-12-31 23:59"
    body.data.is_svip = 1
}

body = JSON.stringify(body);
$done({body});
