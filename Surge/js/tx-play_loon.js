const url = $request.url;

console.log("$argument");
console.log($argument);

// 播放器相关参数
const PLAYER_MAP = {
    "SenPlayer": {scheme: "SenPlayer://x-callback-url/play?url="},
    "SenPlayer-dl": {scheme: "SenPlayer://x-callback-url/download?url="}
};

let player = $argument.arg1;
console.log("player===" + player);

let player2 = $argument["player"]
console.log("player2===" + player2);

if (player === undefined || player === "" || player === null) {
    player = "SenPlayer"
}
let scheme = PLAYER_MAP[player].scheme
console.log("scheme===" + scheme);

// 播放地址
const videoUrl = $request.url;

// user-agent
let userAgent = $request.headers["user-agent"]
console.log("$request.headers===" + $request.headers);
console.log($request.headers);
console.log("userAgent===" + userAgent);

if (userAgent.includes("SenPlayer")) {
    $done({});
}
// 1. 构建 SenPlayer 的 URL Scheme
const senPlayerLink = scheme + `${encodeURIComponent(videoUrl)}`;
// 2. 发送通知，并在通知中携带跳转指令
$notification.post("ʚ前方高能预警ɞ", "翩若惊鸿，婉若游龙。", "", {
    "url": senPlayerLink
});

$done({});
