let body = $response.body;
console.log(body)
body.data.ad_video = ""
body = JSON.stringify(body);
$done({body});
