console.log(`一只猫去水印`);
let body = $response.body;
console.log(`body`)
console.log(body)
//body.data.advertisement = []
body.data.index.is_pay = 1
$done({body});
