const url = $request.url;
const method = $request.method;
const notifyTitle = "bilibili-json";
//console.log(`b站json-2023.10.22`);
if (!$response.body) {
    // 有undefined的情况
    // console.log(`$response.body为undefined:${url}`);
    $done({});
}
if (method !== "GET") {
    $notification.post(notifyTitle, "method错误:", method);
}
let body = JSON.parse($response.body);

if (!body.data) {
    // console.log(url);
    // console.log(`body:${$response.body}`);
    $notification.post(notifyTitle, url, "data字段错误");
} else {
    if (url.includes("x/v2/splash/show") || url.includes("x/v2/splash/list")) {
        if (body.data.show) {
            body.data.show = []
        }
    }
}

body = JSON.stringify(body);
$done({body});

