// console.log(`一只猫去水印`);
const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("/api/wechat_v2/index")) {
    body.data.advertisement = []
    body.data.index.app_name = "一只猫去水印Pro"
    body.data.index.is_pay = 1
}
if (url.includes("/api/wechat_v2/stars")) {
    body.data.ad = ""
}
if (url.includes("/api/wechat_v2/user")) {
    body.name = "一只猫去水印Pro"
    body.invite_num = 9999
    body.svip = 1
    body.residue_time = "2099-12-31 23:59"
    body.data.is_svip = 1
    body.data.avatarurl = "https://raw.githubusercontent.com/mengxiaoZzz/air_conf/main/icon/picture/cat.jpg"
}
body = JSON.stringify(body);
$done({body});
