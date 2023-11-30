let body = $response.body
body.data.advertisement = []
body.data.index.is_pay = 1
$done({ body });
