const url = $request.url;

console.log("$argument");
console.log($argument);

// 播放器相关参数
const PLAYER_MAP = {
    "SenPlayer": {scheme: "SenPlayer://x-callback-url/play?url="},
    "SenPlayer-dl": {scheme: "SenPlayer://x-callback-url/download?url="}
};

let player = $argument["player"]

if (player === undefined || player === "" || player === null) {
    player = "SenPlayer"
}
let scheme = PLAYER_MAP[player].scheme

// 播放地址
const videoUrl = $request.url;

// user-agent
let userAgent = $request.headers["User-Agent"]

if (userAgent.includes("SenPlayer")) {
    $done({});
}
// 1. 构建 SenPlayer 的 URL Scheme
const senPlayerLink = scheme + `${encodeURIComponent(videoUrl)}`;
// 2. 发送通知，并在通知中携带跳转指令

let title = "ʚ前方高能预警ɞ"
let subtitle = "翩若惊鸿，婉若游龙。"
let content = ""
$notification.post(title, subtitle, content, {
    "openUrl": senPlayerLink
});

$done({});
