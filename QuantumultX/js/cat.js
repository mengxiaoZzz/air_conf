// console.log(`一只猫去水印`);
const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("/api/wechat_v2/index")) {
    body.data.advertisement = []
    body.data.index.app_name = "一只猫去水印Pro"
    body.data.index.is_pay = 1
    body.data.index.invite_num = 999
    body.data.index.level = 999
}
if (url.includes("/api/wechat_v2/user")) {
    body.name = "一只猫去水印Pro"
    body.invite_num = 999
    body.svip = 1
    body.residue_time = "2099-12-31 23:59"
    body.data.is_svip = 1
}
body = JSON.stringify(body);
$done({body});
