console.log(`一只猫去水印`);
let body = $response.body;
console.log(`body`)
console.log(body)
console.log(`body.data`)
console.log(body.data)
console.log(`body.data.index`)
console.log(body.data.index)
//body.data.advertisement = []
//body.data.index.app_name = "一只猫去水印Pro"
//body.data.index.is_pay = 1
$done({body});
