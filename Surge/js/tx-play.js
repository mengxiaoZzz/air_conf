const url = $request.url;
let body = JSON.parse($response.body);

// 播放地址
const videoUrl = $request.url;
// 1. 构建 SenPlayer 的 URL Scheme
const senPlayerLink = `SenPlayer://x-callback-url/play?url=${encodeURIComponent(videoUrl)}`;
// 2. 构建 Surge 的 open-url 协议
const surgeLink = `surge:///open-url?url=${encodeURIComponent(senPlayerLink)}`;
// 3. 发送通知，并在通知中携带跳转指令
$notification.post("正在准备播放", "即将跳转到 SenPlayer", "", {
    "open-url": surgeLink
});


$done({body});
