const url = $request.url;

// 播放地址
const videoUrl = $request.url;

// user-agent
let userAgent = $request.headers["user-agent"]

if (userAgent.includes("SenPlayer")) {
    $done({});
}
// 1. 构建 SenPlayer 的 URL Scheme
const senPlayerLink = `SenPlayer://x-callback-url/play?url=${encodeURIComponent(videoUrl)}`;
// 2. 发送通知，并在通知中携带跳转指令
$notification.post("ʚ前方高能预警ɞ", "翩若惊鸿，婉若游龙。", "", {
    "url": senPlayerLink
});

$done({});
