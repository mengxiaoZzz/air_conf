// console.log(`一只猫去水印`);
let body = JSON.parse($response.body);
body.data.advertisement = []
body.data.index.app_name = "一只猫去水印Pro"
body.data.index.is_pay = 1
body.data.index.invite_num = 999
body.data.index.level = 999
body = JSON.stringify(body);
$done({body});
