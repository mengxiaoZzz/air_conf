let body = JSON.parse($response.body);
body.data.ad_video = ""
body = JSON.stringify(body);
$done({body});
