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
    if (url.includes("x/v2/splash")) {
        console.log('开屏页' + (url.includes("splash/show") ? 'show' : 'list'));
        if (body.data.show) {
            body.data.show = []
        }
        if (body.data.splash_request_id) {
            body.data.splash_request_id = ""
        }
        // if (!body.data.show) {
        //     // 有时候返回的数据没有show字段
        //     console.log('数据无show字段');
        // } else {
        //     delete body.data.show;
        //     console.log('成功');
        // }
    }
}

body = JSON.stringify(body);
$done({body});

