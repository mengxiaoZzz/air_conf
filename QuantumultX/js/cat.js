let body = JSON.parse($response.body);
console.log($response.body)
console.log(body)
body.data.advertisement = []
body.data.index.is_pay = 1
body = JSON.stringify(body);
$done({body});
